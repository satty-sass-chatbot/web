import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import type { InlineConfig } from "vitest";
import path from "path";

import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./button": "./src/components/button",
        "./title": "./src/components/title",
        "./tailwindcss": "../ui/src/tailwind.css",
      },
      shared: ["react", "react-dom"],
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
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    environment: "happy-dom",
  },
} as UserConfig & {
  test: InlineConfig;
});
