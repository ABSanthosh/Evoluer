import { defineConfig } from "vite";
import { plugin as mdPlugin } from "vite-plugin-markdown";

export default defineConfig({
  plugins: [
    mdPlugin({
      mode: ["html"],
    }),
  ],
});
