import { styled } from "@/generated/styled-system/jsx";

export const Ul = styled("ul", {
  base: {
    pl: "list",
    ":where(ul,ol) :where(ul,ol) :where(ul,ol) &": {
      listStyleType: "disc",
    },
    ":where(ul,ol) :where(ul,ol) &": {
      listStyleType: "square",
    },
    ":where(ul,ol) &": {
      listStyleType: "circle",
    },
    listStyleType: "disc",
  },
});
