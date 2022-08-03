import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { styled } from "baseui";

import sanity from "../../sanity-client";

const Row = styled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "row",
  maxWidth: "1200px",
  margin: `0 auto ${$theme.sizing.scale1200}`,
}));

const BodyBlock = styled("div", ({ $theme }) => ({
  color: "#040303",
  padding: `0 ${$theme.sizing.scale800}`,
  ...$theme.typography.ParagraphLarge,
}));

const ContentHeader = styled("h5", ({ $theme }) => ({
  ...$theme.typography.HeadingLarge,
  margin: `${$theme.sizing.scale1400} 0 ${$theme.sizing.scale1400}`,
  color: "#040303",
  textAlign: "center",
}));

const builder = imageUrlBuilder({
  dataset: "production",
  projectId: "obnhn7mx",
});

export async function getStaticPaths() {
  const coaches = await sanity.getAll("coach", "defined(slug.current)");
  const paths = coaches.map((coach) => ({
    params: { slug: coach.slug?.current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context: any) => {
  const slug = context.params?.slug as string;
  const [coach] = await sanity.getAll("coach", `slug.current == "${slug}"`); // TODO: why getALl
  const { name, bio, image } = coach;

  return { props: { name, bio, image } };
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type CoachProps = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

function Coach({ name, bio, image }: CoachProps) {
  let imageSrc;
  if (image) {
    imageSrc = builder.image(image?.asset).width(500).height(300).url();
  }

  return (
    <article>
      <ContentHeader>{name}</ContentHeader>
      <Row>
        <div><img src="https://via.placeholder.com/250x300" /></div>
        {bio && (
          <BodyBlock>
            <PortableText value={bio} />
          </BodyBlock>
        )}
      </Row>
    </article>
  );
}

export default Coach;
