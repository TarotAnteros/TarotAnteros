import { blogueData, TPost } from "@/airtable/blogue";
import { FormattedMd } from "@/components/formatted-md";
import { H1 } from "@/components/layout/h1";
import { H2 } from "@/components/layout/h2";
import { MainColumn } from "@/components/layout/main-column";
import { css } from "@/generated/styled-system/css";
import { Box, Flex } from "@/generated/styled-system/jsx";
import clsx from "clsx";
import RemoteImage from "next-export-optimize-images/remote-image";
import Link from "next/link";
import { FaRss } from "react-icons/fa";
import { buttonText } from "@/components/layout/button-text";

const firstItem = css({
  "& > *": {
    display: "none",
  },
  "& > *:first-child": {
    display: "block",
  },
});

function FirstPost({ post }: { post: TPost }) {
  return (
    <Box
      className={css({
        borderWidth: "1px",
        borderRadius: "5px",
        p: "10px",
      })}
    >
      <Flex direction="row" gap="20px" justifyContent="space-between">
        <Flex direction="column">
          <H2>{post.Titre}</H2>
          <Box className={firstItem}>
            <FormattedMd>{post.Contenu}</FormattedMd>
          </Box>
          <Box flexGrow={1} />
          <Link href={`/blogue/${post.slug}`} className={buttonText}>
            lire la suite
          </Link>
        </Flex>
        <Flex align="center" justify="center" width="min(30ch, 50%)">
          {post.Vignette[0] && (
            <RemoteImage
              src={post.Vignette[0].url}
              alt={post.Titre}
              width={0}
              height={0}
              className={css({
                width: "100%",
                objectFit: "contain",
              })}
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

function Post({ post }: { post: TPost }) {
  return (
    <Link
      href={`/blogue/${post.slug}`}
      className={clsx(
        css({
          borderColor: "c4",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "5px",
          fontWeight: "bold",
          color: "c2",
          p: "10px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }),
      )}
    >
      <h2>{post.Titre}</h2>
      <Flex align="center" justify="center" width="min(8ch, 13%)">
        {post.Vignette[0] && (
          <RemoteImage
            src={post.Vignette[0].url}
            alt={post.Titre}
            width={0}
            height={0}
            className={css({
              width: "100%",
              objectFit: "contain",
            })}
          />
        )}
      </Flex>
    </Link>
  );
}

function Posts({ posts }: { posts: TPost[] }) {
  if (posts.length === 0) {
    return <Box>À venir</Box>;
  }
  return (
    <Flex direction="column" gap="10px">
      {posts.map((post, i) =>
        i ? (
          <Post key={post.slug} post={post} />
        ) : (
          <FirstPost key={post.slug} post={post} />
        ),
      )}
    </Flex>
  );
}

export default async function Page() {
  const posts = await blogueData;
  return (
    <MainColumn>
      <Flex direction="row" align="center" justifyContent="space-between">
        <H1>Blogue</H1>
        <RSSLink />
      </Flex>
      <Posts posts={posts} />
    </MainColumn>
  );
}

function RSSLink() {
  return (
    <a
      href="/rss.xml"
      rel="noreferrer"
      target="_blank"
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "5px",
        color: "c2",
      })}
    >
      <Box className={css({ fontSize: "80%" })}>RSS</Box>
      <FaRss size="20px" />
    </a>
  );
}
