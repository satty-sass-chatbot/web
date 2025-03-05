import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        ui: "http://localhost:5001/assets/remoteEntry.js",
        auth: "http://localhost:5002/assets/remoteEntry.js",
        dashboard: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
