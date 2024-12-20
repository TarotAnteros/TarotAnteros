import { textesDuSiteData } from "@/airtable/textes-du-site";
import { FormattedMd } from "@/components/formatted-md";
import { H1 } from "@/components/layout/h1";
import { H2 } from "@/components/layout/h2";
import { css } from "@/generated/styled-system/css";
import { Box, Flex } from "@/generated/styled-system/jsx";

async function Sections() {
  const data = await textesDuSiteData;
  return (
    <Flex direction="column" gap="3rem">
      {data.map((item) => (
        <Flex direction="column" key={item.URI} gap="2.5rem">
          <Box id={item.URI} position="relative" bottom="1rem" />
          <H2
            className={css({
              fontSize: "1.5rem",
              fontWeight: "bold",
            })}
          >
            {item.Titre}
          </H2>
          <FormattedMd>{item.Contenu}</FormattedMd>
        </Flex>
      ))}
    </Flex>
  );
}

export default async function Home() {
  return (
    <>
      <H1>Tarot Anteros</H1>
      <Sections />
    </>
  );
}
