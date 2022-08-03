import React from "react";
import Link from "next/link";
import { styled } from "baseui";

import { Service } from "@generated/schema";

import { Grid, Cell } from "baseui/layout-grid";

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

const InnerVeritcal = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "#628395",
  padding: "16px",
});

const InnerHorizontal = styled("div", {
  display: "flex",
  flexDirection: "row",
  background: "#628395",
  padding: "16px",
});

const InnerHorizontalImage = styled("div", {
  flex: "0",
});

const InnerHorizontalCopy = styled("div", {
  flex: "1",
  padding: "0 32px",
});

const StyledLink = styled("a", ({ $theme }) => ({
  fontSize: "12px",
  color: "#040303",
  textTransform: "uppercase",
}));

const ContentContainer = styled("div", ({ $theme }) => ({
  padding: "0px 0",
}));

const ContentHeader = styled("h5", ({ $theme }) => ({
  ...$theme.typography.HeadingLarge,
  margin: `${$theme.sizing.scale1400} 0 ${$theme.sizing.scale1400}`,
  color: "#040303",
  textAlign: "center",
}));

type HomeProps = {
  services: Service[];
};

export function Home({ services }: HomeProps) {
  const servicesChildren = services.map((service) => ({ label: service.name }));

  return (
    <>
      <HeaderBlock>
        <p>Welcome to THE BUE WELLBEING GROUP – Be U &amp; Evolve</p>
        <p>
          We believe that if there is no passion then there is no point and this
          is reflective of everything you do within your life. We work with the
          belief that every member is treated like a member of our own family.
          As you progress through life your wellbeing needs will change and
          adapt at different times and in different ways
        </p>
      </HeaderBlock>
      <ContentHeader>Our Services</ContentHeader>
      <ContentContainer>
        <Grid
          gridGaps={[2, 6, 12]}
          overrides={{
            Grid: {
              style: {
                justifyContent: "center",
              },
            },
          }}
        >
          <Cell span={3}>
            <InnerVeritcal>
              <img src="https://via.placeholder.com/250?text=Logo" />
              <p>
                Squat diddly squat classes provide a welcoming beginner’s 6 week
                programme...
              </p>
              <Link href="/service/squat-diddly-squat" passHref>
                <StyledLink>Read More</StyledLink>
              </Link>
            </InnerVeritcal>
          </Cell>
          <Cell span={3}>
            <InnerVeritcal>
              <img src="https://via.placeholder.com/250?text=Logo" />
              <p>Abs Runners is course is aimed at complete beginners...</p>
              <Link href="/service/squat-diddly-squat" passHref>
                <StyledLink>Read More</StyledLink>
              </Link>
            </InnerVeritcal>
          </Cell>
          <Cell span={3}>
            <InnerVeritcal>
              <img src="https://via.placeholder.com/250?text=Logo" />
              <p>
                The Lions Dens is a 6 week beginners course for men like no
                other...
              </p>
              <Link href="/service/squat-diddly-squat" passHref>
                <StyledLink>Read More</StyledLink>
              </Link>
            </InnerVeritcal>
          </Cell>

          <Cell span={6}>
            <InnerHorizontal>
              <InnerHorizontalImage>
                <img src="https://via.placeholder.com/250?text=Logo" />
              </InnerHorizontalImage>
              <InnerHorizontalCopy>
                <p>
                  This course is our specialised one to one wellbeing coaching
                  sessions. After your inital consultation we will set out a
                  programme that will give you the confidence to committ and
                  change your life...
                </p>
                <Link href="/service/squat-diddly-squat" passHref>
                  <StyledLink>Read More</StyledLink>
                </Link>
              </InnerHorizontalCopy>
            </InnerHorizontal>
          </Cell>

          <Cell span={6}>
            <InnerHorizontal>
              <InnerHorizontalImage>
                <img src="https://via.placeholder.com/250?text=Logo" />
              </InnerHorizontalImage>
              <InnerHorizontalCopy>
                <p>
                  Looking for our team to deliver a bespoke motivational talk to
                  your employees or staff on a range of topics? and then provide
                  them with the tools to enhance their performances? Look no
                  further and contact the team for more details.
                </p>
                <Link href="/service/squat-diddly-squat" passHref>
                  <StyledLink>Read More</StyledLink>
                </Link>
              </InnerHorizontalCopy>
            </InnerHorizontal>
          </Cell>
        </Grid>
      </ContentContainer>
      <ContentHeader>What's Stopping You</ContentHeader>
      <Grid
        gridGaps={[2, 6, 12]}
        overrides={{
          Grid: {
            style: {
              justifyContent: "center",
            },
          },
        }}
      >
        <Cell span={10}>
          <InnerHorizontal>
            <InnerHorizontalImage>
              <img src="https://via.placeholder.com/250?text=Image" />
            </InnerHorizontalImage>
            <InnerHorizontalCopy>
              <p>
                I get it, there are so many factors stopping you – childcare,
                work, juggling a million things, confidence, fear of being
                judged, not being fit enough, will people laugh at me, I don’t
                know what to wear, it’s too much money, I don’t have time for
                me, I need to look after the family, I’m too old, I don’t have
                any motivation; the list could go on and on but at some point we
                have to think what’s the worst that can happen? We have to find
                a way to break through these barriers and just do it.
              </p>

              <p>
                Please let go of the idea that you need motivation to work out –
                you don’t! It's inconsistent, and elusive and therefore
                completely unreliable! Instead start by just doing. The act of
                doing something itself will give you momentum which in turn,
                creates to consistency. The more consistent you are the more it
                turns into a habit and then eventually it’s just what you do –
                without even thinking about it. The hardest part is starting –
                but one tiny step and you’re on your way.
              </p>
            </InnerHorizontalCopy>
          </InnerHorizontal>
        </Cell>

        <Cell span={10}>
          <InnerHorizontal>
            <InnerHorizontalCopy>
              <p>
                So just do it! What have you got to lose? You might even enjoy
                it! You don’t have to be good at something for it to be good for
                you!
              </p>
              <p>
                The best part about this course is that you all start together,
                you are all in the same boat, you will all be feeling the same
                emotions. We will work as a team, everyone supporting everyone.
              </p>
              <p>Watch this amazing video to listen to women just like you</p>
              <img src="https://via.placeholder.com/50?text=Video+Link" />
            </InnerHorizontalCopy>
            <InnerHorizontalImage>
              <img src="https://via.placeholder.com/250?text=Image" />
            </InnerHorizontalImage>
          </InnerHorizontal>
        </Cell>
      </Grid>
    </>
  );
}
