import type { LinksFunction } from "@remix-run/node";
import styles from "./Cities.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Cities = () => {
  return (
    <section className="cities">
      <h2>The 50 largest cities in Egypt</h2>
      <p>List of cities</p>
    </section>
  );
};
