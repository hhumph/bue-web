import { PortableText } from "@portabletext/react";
import { Block } from "baseui/block";
import { styled } from "baseui";


import sanity from "../../sanity-client";

const Row = styled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "row",
  maxWidth: "1200px",
  margin: `0 auto ${$theme.sizing.scale1200}`,
  justifyContent: "center",
}));

const BodyBlock = styled("div", ({ $theme }) => ({
  color: "#040303",
  padding: `0 ${$theme.sizing.scale800}`,
  maxWidth: "1200px",
  margin: "0 auto",
  ...$theme.typography.ParagraphLarge,
}));

const ContentHeader = styled("h5", ({ $theme }) => ({
  ...$theme.typography.HeadingLarge,
  margin: `${$theme.sizing.scale1400} 0 ${$theme.sizing.scale1400}`,
  color: "#040303",
  textAlign: "center",
}));

const ServicePrice = styled("div", {
  width: "300px",
  backgroundColor: "#628395",
  textAlign: "center",
  margin: "16px 16px",
  padding: "32px",
});

const BodyRow = styled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "row",
  maxWidth: "1200px",
  margin: `0 auto ${$theme.sizing.scale1200}`,
}));

export async function getStaticPaths() {
  const services = await sanity.getAll("service", "defined(slug.current)");
  const paths = services.map((service) => ({
    params: { slug: service.slug?.current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context: any) => {
  const slug = context.params?.slug as string;
  const [service] = await sanity.getAll("service", `slug.current == "${slug}"`); // TODO: why getALl
  const { name, description, services, booking } = service;

  return { props: { name, description, services, booking } };
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type ServiceProps = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

function Service({ name, description, services, booking }: ServiceProps) {
  console.log({ services, booking });
  return (
    <article>
      <ContentHeader>{name}</ContentHeader>
      {description && (
        <BodyRow>
          <BodyBlock><PortableText value={description} /></BodyBlock>
          <div><img src="https://via.placeholder.com/250?text=Logo" /></div>
        </BodyRow>
      )}

      <ContentHeader>Course Options</ContentHeader>

      <Row>
      {services &&
        services.map((service) => (
          <ServicePrice>
            <Block>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>£{service.cost}</p>
            </Block>
          </ServicePrice>
        ))}
      </Row>

      <ContentHeader>Booking</ContentHeader>
      {booking && (
        <BodyBlock>
          <p>{booking.description}</p>
          <p>{booking.gymcatchUrl}</p>
        </BodyBlock>
      )}

      <ContentHeader>FAQs</ContentHeader>
    </article>
  );
}

export default Service;
