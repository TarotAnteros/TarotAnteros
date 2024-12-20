import { Box, BoxProps } from "@/generated/styled-system/jsx";
import { ReactNode } from "react";

export function Overlay({
  children,
  ...props
}: { children: ReactNode } & BoxProps) {
  return (
    <Box
      backgroundColor="c0"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="100"
      {...props}
    >
      {children}
    </Box>
  );
}
