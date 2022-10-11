import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Example, links as exampleLinks } from "~/components/Example";

export const links: LinksFunction = () => {
  return [...exampleLinks()];
};

const IndexPage = () => {
  return (
    <>
      <p>Content goes here</p>
      <Link to="fetch-data">Fetch data page.</Link>
      <Example />
    </>
  );
};

export default IndexPage;
