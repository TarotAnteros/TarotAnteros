import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./generated/**/*"],
  presets: ["@pandacss/preset-base"],
  outdir: "src/generated/styled-system",
  jsxFramework: "react",
  globalFontface: {
    PrintClearly: {
      src: "./src/fonts/princ.ttf",
      fontWeight: "400",
      fontStyle: "normal",
      fontDisplay: "block",
    },
    PrintClearlyItalic: {
      src: "./src/fonts/princ.ttf",
      fontWeight: "400",
      fontStyle: "italic",
      fontDisplay: "block",
    },
    Callingstone: {
      src: "./src/fonts/callingstone.ttf",
      fontWeight: "400",
      fontStyle: "normal",
      fontDisplay: "block",
    },
  },
  globalVars: {
    "--font-callingstone": "Callingstone",
    "--font-printclearly": "PrintClearly",
  },
  theme: {
    extend: {
      textStyles: {
        heading: {
          value: {
            fontFamily: "",
          },
        },
      },
      containerSizes: {
        menu: "44em",
      },
      tokens: {
        fonts: {
          callingstone: {
            value: "var(--font-callingstone)",
          },
          printclearly: {
            value: "var(--font-printclearly)",
          },
        },
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
