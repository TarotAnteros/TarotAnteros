import { blogueData } from "@/airtable/blogue";
import { writeFile } from "fs/promises";
import RSS from "rss";
import { FormattedMd } from "@/components/formatted-md";
import { buttonText } from "@/components/layout/button-text";
import { H1 } from "@/components/layout/h1";
import { MainColumn } from "@/components/layout/main-column";
import { css } from "@/generated/styled-system/css";
import { Box } from "@/generated/styled-system/jsx";
import RemoteImage from "next-export-optimize-images/remote-image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { parseMD } from "@/components/md";

function Back() {
  return (
    <Link
      href="/blogue"
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        color: "c2",
      })}
    >
      <IoIosArrowRoundBack size="2rem" />
      <Box className={buttonText}>articles du blogue</Box>
    </Link>
  );
}

async function PostPage({ slug }: { slug: string }) {
  const posts = await blogueData;
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return <H1>404</H1>;
  }
  const vignette = post.Vignette[0];
  return (
    <MainColumn>
      <H1
        className={css({
          textAlign: "center",
        })}
      >
        {post.Titre}
      </H1>
      {vignette && (
        <RemoteImage
          src={vignette.url}
          alt={post.Titre}
          width={0}
          height={0}
          className={css({
            width: "100vw",
            height: "50vh",
            objectFit: "contain",
          })}
        />
      )}
      <Box>
        <FormattedMd>{post.Contenu}</FormattedMd>
      </Box>
      {posts.length > 1 && <Back />}
    </MainColumn>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PostPage slug={slug} />;
}

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export async function generateStaticParams() {
  const blogue = await blogueData;
  const feed = new RSS({
    title: "Tarot Anteros",
    site_url: siteUrl,
    // TODO: image_url
    feed_url: `${siteUrl}/rss.xml`,
    language: "fr",
  });
  await Promise.all(
    blogue.map(async (post) => {
      feed.item({
        title: post.Titre,
        description: await parseMD(post.Contenu),
        url: `${siteUrl}/blogue/${post.slug}`,
        date: new Date(post.date),
      });
    }),
  );
  await writeFile("./public/rss.xml", feed.xml({ indent: true }));
  return blogue.map((post) => ({
    slug: post.slug,
  }));
}
