"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixConfigDev = exports.onDevRequest = void 0;
const entrypoint = process.env.VERCEL_DEV_ENTRYPOINT;
delete process.env.VERCEL_DEV_ENTRYPOINT;
const tsconfig = process.env.VERCEL_DEV_TSCONFIG;
delete process.env.VERCEL_DEV_TSCONFIG;
if (!entrypoint) {
    throw new Error('`VERCEL_DEV_ENTRYPOINT` must be defined');
}
const path_1 = require("path");
const ts_node_1 = require("ts-node");
const typescript_1 = require("./typescript");
let useRequire = false;
if (!process.env.VERCEL_DEV_IS_ESM) {
    const resolveTypescript = (p) => {
        try {
            return require.resolve('typescript', {
                paths: [p],
            });
        }
        catch (_) {
            return '';
        }
    };
    const requireTypescript = (p) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return require(p);
    };
    let ts = null;
    // Use the project's version of Typescript if available and supports `target`
    let compiler = resolveTypescript(process.cwd());
    if (compiler) {
        ts = requireTypescript(compiler);
    }
    // Otherwise fall back to using the copy that `@vercel/node` uses
    if (!ts) {
        compiler = resolveTypescript(path_1.join(__dirname, '..'));
        ts = requireTypescript(compiler);
    }
    let config = {};
    if (tsconfig) {
        try {
            config = ts.readConfigFile(tsconfig, ts.sys.readFile).config;
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                console.error(`Error while parsing "${tsconfig}"`);
                throw err;
            }
        }
    }
    fixConfigDev(config);
    ts_node_1.register({
        compiler,
        compilerOptions: config.compilerOptions,
        transpileOnly: true,
    });
    useRequire = true;
}
const http_1 = require("http");
const static_config_1 = require("@vercel/static-config");
const ts_morph_1 = require("ts-morph");
const utils_1 = require("./utils");
const edge_handler_1 = require("./edge-functions/edge-handler");
const serverless_handler_1 = require("./serverless-functions/serverless-handler");
function listen(server, port, host) {
    return new Promise(resolve => {
        server.listen(port, host, () => {
            resolve();
        });
    });
}
function parseRuntime(entrypoint, entryPointPath) {
    const project = new ts_morph_1.Project();
    const staticConfig = static_config_1.getConfig(project, entryPointPath);
    const runtime = staticConfig?.runtime;
    if (runtime && !utils_1.isEdgeRuntime(runtime)) {
        throw new Error(`Invalid function runtime "${runtime}" for "${entrypoint}". Valid runtimes are: ${JSON.stringify(Object.values(utils_1.EdgeRuntimes))}. Learn more: https://vercel.link/creating-edge-functions`);
    }
    return runtime;
}
async function createEventHandler(entrypoint, config, options) {
    const entrypointPath = path_1.join(process.cwd(), entrypoint);
    const runtime = parseRuntime(entrypoint, entrypointPath);
    // `middleware.js`/`middleware.ts` file is always run as
    // an Edge Function, otherwise needs to be opted-in via
    // `export const config = { runtime: 'edge' }`
    if (config.middleware === true || utils_1.isEdgeRuntime(runtime)) {
        return edge_handler_1.createEdgeEventHandler(entrypointPath, entrypoint, config.middleware || false);
    }
    return serverless_handler_1.createServerlessEventHandler(entrypointPath, {
        shouldAddHelpers: options.shouldAddHelpers,
        useRequire,
    });
}
let handleEvent;
let handlerEventError;
async function main() {
    const config = JSON.parse(process.env.VERCEL_DEV_CONFIG || '{}');
    delete process.env.VERCEL_DEV_CONFIG;
    const buildEnv = JSON.parse(process.env.VERCEL_DEV_BUILD_ENV || '{}');
    delete process.env.VERCEL_DEV_BUILD_ENV;
    const shouldAddHelpers = !(config.helpers === false || buildEnv.NODEJS_HELPERS === '0');
    const proxyServer = http_1.createServer(onDevRequest);
    await listen(proxyServer, 0, '127.0.0.1');
    try {
        handleEvent = await createEventHandler(entrypoint, config, {
            shouldAddHelpers,
        });
    }
    catch (error) {
        utils_1.logError(error);
        handlerEventError = error;
    }
    const address = proxyServer.address();
    if (typeof process.send === 'function') {
        process.send(address);
    }
    else {
        console.log('Dev server listening:', address);
    }
}
async function onDevRequest(req, res) {
    if (handlerEventError) {
        // this error state is already logged, but we have to wait until here to exit the process
        // this matches the serverless function bridge launcher's behavior when
        // an error is thrown in the function
        process.exit(1);
    }
    if (!handleEvent) {
        res.statusCode = 500;
        res.end('Bridge is not ready, please try again');
        return;
    }
    try {
        const result = await handleEvent(req);
        res.statusCode = result.statusCode;
        for (const [key, value] of Object.entries(result.headers)) {
            if (typeof value !== 'undefined') {
                res.setHeader(key, value);
            }
        }
        res.end(Buffer.from(result.body, result.encoding));
    }
    catch (error) {
        res.statusCode = 500;
        res.end(error.stack);
    }
}
exports.onDevRequest = onDevRequest;
function fixConfigDev(config) {
    const nodeVersionMajor = Number(process.versions.node.split('.')[0]);
    typescript_1.fixConfig(config, nodeVersionMajor);
    // In prod, `.ts` inputs use TypeScript and
    // `.js` inputs use Babel to convert ESM to CJS.
    // In dev, both `.ts` and `.js` inputs use ts-node
    // without Babel so we must enable `allowJs`.
    config.compilerOptions.allowJs = true;
    // In prod, we emit outputs to the filesystem.
    // In dev, we don't emit because we use ts-node.
    config.compilerOptions.noEmit = true;
}
exports.fixConfigDev = fixConfigDev;
main().catch(err => {
    utils_1.logError(err);
    process.exit(1);
});
