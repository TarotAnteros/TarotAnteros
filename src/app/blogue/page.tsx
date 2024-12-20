import { blogueData } from "@/airtable/blogue";
import { H1 } from "@/components/layout/h1";
import { rev } from "@/components/layout/rev";
import { css } from "@/generated/styled-system/css";
import { Flex } from "@/generated/styled-system/jsx";
import clsx from "clsx";
import Link from "next/link";

export default async function Page() {
  const data = await blogueData;
  return (
    <Flex direction="column" gap="10px" width="100%" maxWidth="readable">
      <H1
        className={css({
          textAlign: "center",
        })}
      >
        Blogue
      </H1>
      {data.map((item) => (
        <Link
          key={item.slug}
          href={`/blogue/${item.slug}`}
          className={clsx(
            css({
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "5px",
              p: "10px",
            }),
            rev,
          )}
        >
          {item.Titre}
        </Link>
      ))}
    </Flex>
  );
}
