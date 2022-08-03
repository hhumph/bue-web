import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { styled } from "baseui";
import { ParagraphSmall } from "baseui/typography";

const ContentHeader = styled("h5", ({ $theme }) => ({
  ...$theme.typography.HeadingSmall,
  textAlign: "center",
  color: "#040303",
}));

function Contact() {
  return (
    <article>
      <ContentHeader>Contact Us Yo!</ContentHeader>
    </article>
  );
}

export default Contact;
