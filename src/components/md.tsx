import { unified } from "unified";
import parse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact, { Components } from "rehype-react";
import breaks from "remark-breaks";
import rehypeSanitize from "rehype-sanitize";
import * as prod from "react/jsx-runtime";
import { ReactNode } from "react";
import { weakCached } from "@/utils/cached";

function getParser0(components: Partial<Components>) {
  const parser = unified()
    .use(parse)
    .use(breaks)
    .use(remarkRehype, {})
    .use(rehypeSanitize)
    .use(rehypeReact, {
      Fragment: prod.Fragment,
      jsx: prod.jsx,
      jsxs: prod.jsxs,
      components,
    });
  return parser;
}
const getParser = weakCached(getParser0);

const simple = {};
export async function MD({
  components,
  children,
}: {
  components?: Partial<Components>;
  children: string;
}) {
  const parser = getParser(components ?? simple);
  const { result } = await parser.process(children);
  return result;
}

function Frag({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

const frag = { p: Frag };
export function MDFrag({ children }: { children: string }) {
  return MD({ components: frag, children });
}
