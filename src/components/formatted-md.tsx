import { MD } from "./md";
import { Ul } from "./layout/ul";
import { Ol } from "./layout/ol";
import { A } from "./layout/a";
import { H1 } from "./layout/h1";
import { H2 } from "./layout/h2";
import { H3 } from "./layout/h3";
import { Blockquote } from "./layout/blockquote";
import { P } from "./layout/p";

const components = {
  p: P,
  ul: Ul,
  ol: Ol,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  blockquote: Blockquote,
};

export function FormattedMd({ children }: { children: string }) {
  return <MD components={components}>{children}</MD>;
}
