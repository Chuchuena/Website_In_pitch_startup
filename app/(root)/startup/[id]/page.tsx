import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/query";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
  if (!post) return notFound();
  return (
    <>
      <h1 className="text-3xl"> This is a startup number : {id}</h1>
      <h2 className="text-2xl">{post.title}</h2>
    </>
  );
};

export default page;
