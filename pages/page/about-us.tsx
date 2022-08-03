import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { styled } from "baseui";
import { ParagraphSmall } from "baseui/typography";

import sanity from "../../sanity-client";

const HeaderBlock = styled("div", ({ $theme }) => ({
  textAlign: "center",
  backgroundColor: "#628395",
  padding: `${$theme.sizing.scale1200}`,
  ...$theme.typography.HeadingSmall,
  fontWeight: "normal",
  [$theme.mediaQuery.medium]: {
    ...$theme.typography.HeadingLarge,
    fontWeight: "normal",
  },
}));

const HeaderBlockInner = styled("div", {
  maxWidth: "1200px",
  margin: "0 auto",
});

const BodyBlock = styled("div", ({ $theme }) => ({
  textAlign: "center",
  color: "#040303",
  padding: `0 ${$theme.sizing.scale800} ${$theme.sizing.scale1200}`,
  maxWidth: "1200px",
  margin: "0 auto",
  ...$theme.typography.ParagraphLarge,
}));

const Row = styled("div", ({ $theme }) => ({
  background: "white",
  display: "flex",
  flexDirection: "row",
  maxWidth: "600px",
  margin: `0 auto ${$theme.sizing.scale1200}`,
}));

const ImageContainer = styled("div", {
  flex: 1,
});

const ContentContainer = styled("div", ({ $theme }) => ({
  padding: `${$theme.sizing.scale1200}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
}));

const ContentHeader = styled("h5", ({ $theme }) => ({
  ...$theme.typography.HeadingSmall,
  margin: `0 0 ${$theme.sizing.scale400}`,
  color: "#040303",
}));

const StyledLink = styled("a", ({ $theme }) => ({
  fontSize: "10px",
  color: "#040303",
  textTransform: "uppercase",
}));

const SectionHeader = styled("h4", ({ $theme }) => ({
  ...$theme.typography.HeadingMedium,
  color: "#040303",
  textAlign: "center",
}));

const Image = styled("img", {
  display: "block",
});

export const getStaticProps = async () => {
  const [page] = await sanity.getAll("page", `slug.current == "about-us"`);
  const coaches = await sanity.getAll("coach");
  const { name, body, header } = page;

  return { props: { name, body, coaches, header } };
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type PageProps = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

function Page({ name, body, coaches, header }: PageProps) {
  return (
    <article>
      {/* {header && (
        <HeaderBlock>
          <HeaderBlockInner><PortableText value={header} /></HeaderBlockInner>
        </HeaderBlock>
      )} */}
      <SectionHeader>About Us</SectionHeader>
      {body && (
        <BodyBlock>
          <PortableText value={body} />
        </BodyBlock>
      )}

      <SectionHeader>Our Founders</SectionHeader>

      {coaches.map((coach) => (
        <Row key={coach._id}>
          <ImageContainer>
            <Image src="https://via.placeholder.com/250x260" />
          </ImageContainer>
          <ContentContainer>
            <ContentHeader>{coach.name}</ContentHeader>
            <ParagraphSmall>Some introductory content here...</ParagraphSmall>
            <Link href={`/coach/${coach.slug?.current}`} passHref>
              <StyledLink>Read More</StyledLink>
            </Link>
          </ContentContainer>
        </Row>
      ))}
      {/* </CoachesBlock> */}
    </article>
  );
}

export default Page;
