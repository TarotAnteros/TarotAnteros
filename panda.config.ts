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
      containerSizes: {
        menu: "44em",
      },
      tokens: {
        spacing: {
          list: {
            value: "2.5em",
          },
        },
        sizes: {
          readable: {
            value: "80ch",
          },
        },
        colors: {
          c0: { value: "#fdd8a7" },
          c1: { value: "#96806c" },
          c2: { value: "#886b55" },
          c3: { value: "#2e4b47" },
          c4: { value: "#23322d" },
        },
      },
    },
  },
});
