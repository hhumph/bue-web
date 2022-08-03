import { PortableText } from "@portabletext/react";

import sanity from "../../sanity-client";

export async function getStaticPaths() {
  const pages = await sanity.getAll("page", "defined(slug.current)");
  const paths = pages.map((page) => ({
    params: { slug: page.slug?.current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context: any) => {
  const slug = context.params?.slug as string;
  const [page] = await sanity.getAll("page", `slug.current == "${slug}"`);
  const { name, body } = page;
  console.log({ page });

  return { props: { name, body } };
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type PageProps = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

function Page({ name, body }: PageProps) {
  return (
    <article>
      <h1>{name}</h1>
      {body && <PortableText value={body} />}
    </article>
  );
}

export default Page;
