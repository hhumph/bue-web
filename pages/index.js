import Link from "next/link";
import groq from "groq";
import client from "../client";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && _updatedAt < now()] | order(_updatedAt desc)
    `);

  console.log({ posts });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
