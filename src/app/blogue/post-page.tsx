import { blogueData } from "@/airtable/blogue";
import { FormattedMd } from "@/components/formatted-md";
import { H1 } from "@/components/layout/h1";
import { MainColumn } from "@/components/layout/main-column";
import { rev } from "@/components/layout/rev";
import { css } from "@/generated/styled-system/css";
import { Box } from "@/generated/styled-system/jsx";
import clsx from "clsx";
import RemoteImage from "next-export-optimize-images/remote-image";
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
export async function PostPage({ slug }: { slug: string }) {
  const posts = await blogueData;
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return <H1>404</H1>;
  }
  const vignette = post.Vignette[0];
  return (
    <MainColumn
      className={css({
        gap: "2.5rem",
      })}
    >
      {posts.length > 1 && <Back />}
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
