import sanity from "../sanity-client";
import { Home } from "../views/Home/Home";

export async function getStaticProps() {
  const services = await sanity.getAll("service");
  const categories = await sanity.getAll("category");

  return { props: { services, categories } };
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type IndexProps = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

function Index({ services, categories }: IndexProps) {
  return (
    <main>
      <Home services={services} />
    </main>
  );
}

export default Index;
