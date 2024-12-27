import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  resolve: { alias: { src: resolve("src/") } },
  build: {
    lib: { entry: resolve(__dirname, "src/index.ts"), formats: ["es"] },
    rollupOptions: {
      // Exclude peer dependencies from the bundle
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
