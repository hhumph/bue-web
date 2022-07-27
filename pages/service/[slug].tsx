import sanity from "../../sanity-client";

// export async function getStaticPaths() {
//   const paths = await sanity.getAll(
//     `*[_type == "service" && defined(slug.current)][].slug.current`
//   );

//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

export const getStaticProps = async (context: any) => {
  const slug = context.params?.slug as string;
  const [service] = await sanity.getAll(
    "service",
    `seo.slug.current == "${slug}"`
  );
  const { name } = service;

  return { props: { name } };
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type ServiceProps = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

function Service({ name }: ServiceProps) {
  return (
    <article>
      <h1>{name}</h1>
    </article>
  );
}

export default Service;
