import { Box, Cq, Flex } from "@/generated/styled-system/jsx";
import { textesDuSiteData } from "@/airtable/textes-du-site";
import Link from "next/link";
import { NavMenu } from "./menu";
import { NavEntry } from "./core";
import { rev } from "@/components/layout/rev";
import clsx from "clsx";
import { css } from "@/generated/styled-system/css";

const entry = clsx(rev, css({ p: "10px", borderRadius: "5px" }));

function NavBar({ entries }: { entries: NavEntry[] }) {
  return (
    <Flex direction="row" justify="center">
      {entries.map(({ URI, Titre: title }) => (
        <a href={"#" + URI} key={URI} className={entry}>
          {title}
        </a>
      ))}
      <Link href="/blogue" className={entry}>
        Blogue
      </Link>
    </Flex>
  );
}

export async function Navigation() {
  const data = await textesDuSiteData;
  return (
    <Cq width="100%" position="sticky" top="0" py="10px" backgroundColor="c0">
      <Box display={{ base: "block", "@/menu": "none" }}>
        <NavMenu entries={data} />
      </Box>
      <Box display={{ base: "none", "@/menu": "block" }}>
        <NavBar entries={data} />
      </Box>
    </Cq>
  );
}
