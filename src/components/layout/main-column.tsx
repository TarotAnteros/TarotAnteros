import { Flex } from "@/generated/styled-system/jsx";
import { ReactNode } from "react";

export function MainColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Flex flexDirection="column" alignItems="center" p="10px" width="100%">
      <Flex
        direction="column"
        width="100%"
        maxWidth="readable"
        gap="2rem"
        className={className}
      >
        {children}
      </Flex>
    </Flex>
  );
}
