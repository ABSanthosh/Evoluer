import { defineConfig } from "vite";
import { plugin as mdPlugin } from "vite-plugin-markdown";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineConfig({
  plugins: [
    mdPlugin({
      mode: ["html"],
    }),
  ],
  base: "./",
  assetsInclude: ["**/*.md"],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
