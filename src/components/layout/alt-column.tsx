import { Box, Flex } from "@/generated/styled-system/jsx";
import { ReactNode } from "react";

export function AltColumn({ children }: { children: ReactNode }) {
  return (
    <Flex flexDirection="column" alignItems="center" py="10px" width="100%">
      <Flex direction="column" width="100%">
        {children}
      </Flex>
    </Flex>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      px="10px"
      py="1rem"
      className={className}
    >
      <Box maxWidth="readable">{children}</Box>
    </Flex>
  );
}
