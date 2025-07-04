import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  root: "src/dev",
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      include: ["src/sdk.ts", "src/components/**/*"]
    })
  ],
  build: {
    outDir: "../../dist",
    lib: {
      entry: "../sdk.ts",
      name: "KompasPaywall",
      fileName: () => "kompas-paywall.js",
      formats: ["umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
