import { textesDuSiteData } from "@/airtable/textes-du-site";
import { MD } from "@/components/md";
import { Flex } from "@/generated/styled-system/jsx";

async function Navigation() {
  const data = await textesDuSiteData;
  return (
    <Flex direction="row" gap={"20px"} color={"bg0"}>
      {data.map((item) => (
        <a key={item.URI} href={"#" + item.URI}>
          {item.Titre}
        </a>
      ))}
    </Flex>
  );
}

async function Sections() {
  const data = await textesDuSiteData;
  return (
    <Flex direction="column">
      {data.map((item) => (
        <Flex direction="column" key={item.URI}>
          <h2 id={item.URI}>{item.Titre}</h2>
          <MD>{item.Contenu}</MD>
        </Flex>
      ))}
    </Flex>
  );
}

export default async function Home() {
  return (
    <Flex direction="column">
      <Navigation />
      <Sections />
    </Flex>
  );
}
