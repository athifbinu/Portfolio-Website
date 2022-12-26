"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectVercelAnalyticsPlugin = void 0;
const fs_1 = require("fs");
const path = __importStar(require("path"));
const _shared_1 = require("./_shared");
const DEFAULT_CONFIG = {
    plugins: [
        {
            resolve: 'gatsby-plugin-vercel',
            options: {},
        },
    ],
};
const GATSBY_PLUGIN_PACKAGE_NAME = 'gatsby-plugin-vercel';
const GATSBY_CONFIG_FILE = 'gatsby-config';
async function injectVercelAnalyticsPlugin(dir) {
    // Gatsby requires a special variable name for environment variables to be
    // exposed to the client-side JavaScript bundles:
    process.env.GATSBY_VERCEL_ANALYTICS_ID = process.env.VERCEL_ANALYTICS_ID;
    const gatsbyConfigPathJs = path.join(dir, `${GATSBY_CONFIG_FILE}.js`);
    const gatsbyConfigPathTs = path.join(dir, `${GATSBY_CONFIG_FILE}.ts`);
    if (await _shared_1.fileExists(gatsbyConfigPathTs)) {
        console.log(`Injecting Gatsby.js analytics plugin "${GATSBY_PLUGIN_PACKAGE_NAME}" to \`${gatsbyConfigPathTs}\``);
        await addGatsbyPackage(dir);
        return updateGatsbyTsConfig(gatsbyConfigPathTs);
    }
    console.log(`Injecting Gatsby.js analytics plugin "${GATSBY_PLUGIN_PACKAGE_NAME}" to \`${gatsbyConfigPathJs}\``);
    await addGatsbyPackage(dir);
    if (await _shared_1.fileExists(gatsbyConfigPathJs)) {
        await updateGatsbyJsConfig(gatsbyConfigPathJs);
    }
    else {
        await fs_1.promises.writeFile(gatsbyConfigPathJs, `module.exports = ${JSON.stringify(DEFAULT_CONFIG)}`);
    }
}
exports.injectVercelAnalyticsPlugin = injectVercelAnalyticsPlugin;
async function addGatsbyPackage(dir) {
    const pkgJson = (await _shared_1.readPackageJson(dir));
    if (!pkgJson.dependencies) {
        pkgJson.dependencies = {};
    }
    if (!pkgJson.dependencies[GATSBY_PLUGIN_PACKAGE_NAME]) {
        console.log(`Adding "${GATSBY_PLUGIN_PACKAGE_NAME}" to \`package.json\` "dependencies"`);
        pkgJson.dependencies[GATSBY_PLUGIN_PACKAGE_NAME] = 'latest';
        await _shared_1.writePackageJson(dir, pkgJson);
    }
}
async function updateGatsbyTsConfig(configPath) {
    await fs_1.promises.rename(configPath, configPath + '.__vercel_builder_backup__.ts');
    await fs_1.promises.writeFile(configPath, `import userConfig from "./gatsby-config.ts.__vercel_builder_backup__.ts";
import type { PluginRef } from "gatsby";

// https://github.com/gatsbyjs/gatsby/blob/354003fb2908e02ff12109ca3a02978a5a6e608c/packages/gatsby/src/bootstrap/prefer-default.ts
const preferDefault = (m: any) => (m && m.default) || m;

const vercelConfig = Object.assign(
  {},

  // https://github.com/gatsbyjs/gatsby/blob/a6ecfb2b01d761e8a3612b8ea132c698659923d9/packages/gatsby/src/services/initialize.ts#L113-L117
  preferDefault(userConfig)
);
if (!vercelConfig.plugins) {
  vercelConfig.plugins = [];
}

const hasPlugin = vercelConfig.plugins.find(
  (p: PluginRef) =>
    p && (p === "gatsby-plugin-vercel" || p.resolve === "gatsby-plugin-vercel")
);

if (!hasPlugin) {
  vercelConfig.plugins = vercelConfig.plugins.slice();
  vercelConfig.plugins.push({
    resolve: "gatsby-plugin-vercel",
    options: {},
  });
}

export default vercelConfig;
`);
}
async function updateGatsbyJsConfig(configPath) {
    await fs_1.promises.rename(configPath, configPath + '.__vercel_builder_backup__.js');
    await fs_1.promises.writeFile(configPath, `const userConfig = require("./gatsby-config.js.__vercel_builder_backup__.js");

// https://github.com/gatsbyjs/gatsby/blob/354003fb2908e02ff12109ca3a02978a5a6e608c/packages/gatsby/src/bootstrap/prefer-default.ts
const preferDefault = m => (m && m.default) || m;

const vercelConfig = Object.assign(
  {},

  // https://github.com/gatsbyjs/gatsby/blob/a6ecfb2b01d761e8a3612b8ea132c698659923d9/packages/gatsby/src/services/initialize.ts#L113-L117
  preferDefault(userConfig)
);
if (!vercelConfig.plugins) {
  vercelConfig.plugins = [];
}

const hasPlugin = vercelConfig.plugins.find(
  (p) =>
    p && (p === "gatsby-plugin-vercel" || p.resolve === "gatsby-plugin-vercel")
);
if (!hasPlugin) {
  vercelConfig.plugins = vercelConfig.plugins.slice();
  vercelConfig.plugins.push({
    resolve: "gatsby-plugin-vercel",
    options: {},
  });
}

module.exports = vercelConfig;
`);
}
