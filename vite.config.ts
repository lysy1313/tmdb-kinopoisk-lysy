import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  css: {
    modules: {
      localsConvention: "dashesOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
