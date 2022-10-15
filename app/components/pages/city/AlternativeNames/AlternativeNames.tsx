import type { LinksFunction } from "@remix-run/node";
import styles from "./AlternativeNames.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const AlternativeNames = () => {
  return (
    <section className="alternative-names">
      <h2>Alternative Names</h2>
      <p>List of alternative names</p>
      <a href="#">all names</a>
    </section>
  );
};
