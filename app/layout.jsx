import "./globals.css";

export const metadata = {
  title: "Muhammed Athif | Full Stack MERN Developer Portfolio",
  description: "Portfolio of Muhammed Athif - Full Stack MERN Developer specializing in MongoDB, Express.js, React, Node.js, and modern web application development.",
  keywords: ["Athif", "Muhammed Athif", "MERN Stack Developer", "Full Stack Developer", "React Developer", "Next.js Portfolio", "Web Developer Kerala"],
  authors: [{ name: "Muhammed Athif" }],
  icons: {
    icon: "./img/profile.jpg"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="./img/profile.jpg" />
      </head>
      <body className="bg-[#080c14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
