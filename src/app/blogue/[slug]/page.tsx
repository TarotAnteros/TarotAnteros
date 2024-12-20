import { blogueData } from "@/airtable/blogue";
import { FormattedMd } from "@/components/formatted-md";
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
  const slug = (await params).slug;
  const blogue = await blogueData;
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
      {vignette && (
        <img
          src={vignette.url}
          alt={post.Titre}
          width={vignette.width}
          height={vignette.height}
        />
      )}
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
