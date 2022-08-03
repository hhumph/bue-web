import React from "react";
import Link from "next/link";
import { styled } from "baseui";
import { StyledNavigationItem } from "baseui/header-navigation";

const Body = styled("div", ({ $theme }) => ({
  position: "relative",
  zIndex: 0,
  backgroundColor: "#FFF1EB",
  minHeight: "100vh",
  fontFamily: "'Lato', sans-serif",
}));

const HeaderNavigation = styled("div", ({ $theme }) => ({
  backgroundColor: "#e69e6c",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: $theme.sizing.scale800,
  [$theme.mediaQuery.medium]: {
    justifyContent: "space-between",
  },
}));

const StyledNavigationList = styled("ul", {
  display: "flex",
  padding: "0",
  margin: "0",
  listStyle: "none",
});

const Main = styled("main", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "minmax(0, auto)",
  minHeight: "100%",
});

const StyledLink = styled("a", {
  color: "#FFF1EB",
});

export function Layout({ children }: any) {
  return (
    <Body>
      <HeaderNavigation>
        <StyledNavigationList>
          <Link href="/" passHref>
            <StyledLink>Bue Wellbeing</StyledLink>
          </Link>
        </StyledNavigationList>
        <StyledNavigationList>
          <StyledNavigationItem>
            <Link href="/services" passHref>
              <StyledLink>Services</StyledLink>
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link href="/page/about-us" passHref>
              <StyledLink>About Us</StyledLink>
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link href="/contact" passHref>
              <StyledLink>Contact</StyledLink>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>
      <Main>{children}</Main>
    </Body>
  );
}
