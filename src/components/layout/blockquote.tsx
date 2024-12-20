import { styled } from "@/generated/styled-system/jsx";

export const Blockquote = styled("blockquote", {
  base: {
    pl: "calc(1rem - 4px)",
    fontSize: "85%",
    borderLeftWidth: "4px",
    borderColor:
      "color-mix(in oklab, var(--colors-c2) 50%, var(--colors-c0))",
    backgroundColor:
      "color-mix(in oklab, var(--colors-c2) 30%, var(--colors-c0))",
  },
});
