import type { LinksFunction } from "@remix-run/node";
import styles from "./PopularCities.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const PopularCities = () => {
  return (
    <section className="popular-cities">
      <h2>Time difference Cario from popular cities</h2>
      <ul>Popular cities list</ul>
    </section>
  );
};
