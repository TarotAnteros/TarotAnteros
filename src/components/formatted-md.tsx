import { MD } from "./md";
import { Ul } from "./layout/ul";
import { Ol } from "./layout/ol";
import { A } from "./layout/a";
import { H1 } from "./layout/h1";
import { H2 } from "./layout/h2";
import { H3 } from "./layout/h3";
import { Text } from "./layout/text";

const components = {
  ul: Ul,
  ol: Ol,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
};

export function FormattedMd({ children }: { children: string }) {
  return (
    <Text>
      <MD components={components}>{children}</MD>
    </Text>
  );
}
