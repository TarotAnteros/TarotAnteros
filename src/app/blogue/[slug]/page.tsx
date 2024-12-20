import { blogueData } from "@/airtable/blogue";
import { PostPage } from "../post-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PostPage slug={slug} />;
}

export async function generateStaticParams() {
  const blogue = await blogueData;
  return blogue.map((post) => ({
    slug: post.slug,
  }));
}
