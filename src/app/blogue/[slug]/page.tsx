import { blogueData } from "@/airtable/blogue";
import { FormattedMd } from "@/components/formatted-md";
import { RemoteImg } from "@/components/img";
import { H1 } from "@/components/layout/h1";
import { rev } from "@/components/layout/rev";
import { css } from "@/generated/styled-system/css";
import { Flex } from "@/generated/styled-system/jsx";
import clsx from "clsx";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

function Back() {
  return (
    <Link
      href="/blogue"
      className={clsx(
        css({
          alignSelf: "flex-start",
          borderRadius: "5px",
        }),
        rev,
      )}
    >
      <IoIosArrowRoundBack size="2rem" />
    </Link>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [{ slug }, blogue] = await Promise.all([params, blogueData]);
  const post = blogue.find((post) => post.slug === slug);
  if (!post) {
    return <H1>404</H1>;
  }
  const vignette = post.Vignette?.[0];
  return (
    <Flex direction="column" gap="1rem" width="100%" maxWidth="readable">
      <Back />

      <H1
        className={css({
          textAlign: "center",
        })}
      >
        {post.Titre}
      </H1>
      {vignette && <RemoteImg src={vignette.url} alt={post.Titre} />}
      <FormattedMd>{post.Contenu}</FormattedMd>
      <Back />
    </Flex>
  );
}

export async function generateStaticParams() {
  const blogue = await blogueData;
  return blogue.map((post) => ({
    slug: post.slug,
  }));
}
