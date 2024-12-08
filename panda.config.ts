import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./generated/**/*"],
  presets: ["@pandacss/preset-base"],
  outdir: "src/generated/styled-system",
  jsxFramework: "react",
  theme: {
    extend: {
      tokens: {
        colors: {
          bg0: { value: "#fdd8a7" },
          bg1: { value: "#96806c" },
          bg2: { value: "#886b55" },
          bg3: { value: "#2e4b47" },
          bg4: { value: "#23322d" },
        },
      },
    },
  },
});
