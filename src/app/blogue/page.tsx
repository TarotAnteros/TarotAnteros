import { blogueData } from "@/airtable/blogue";
import { H1 } from "@/components/layout/h1";
import { css } from "@/generated/styled-system/css";
import { Flex } from "@/generated/styled-system/jsx";
import Link from "next/link";

export default async function Page() {
  const data = await blogueData;
  return (
    <Flex
      direction="column"
      gap="10px"
      width="100%"
      maxWidth="readable"
    >
      <H1>Blogue</H1>
      {data.map((item) => (
        <Link
          key={item.slug}
          href={`/blogue/${item.slug}`}
          className={css({
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "5px",
            p: "10px",
            borderColor: "black",
            "&:hover": {
              backgroundColor: "c4",
              color: "c0",
            },
          })}
        >
          {item.Titre}
        </Link>
      ))}
    </Flex>
  );
}
