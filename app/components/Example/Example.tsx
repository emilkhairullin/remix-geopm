import type { LinksFunction } from "@remix-run/node";
import styles from "./Example.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Example = () => {
  return <div className="example">This is example component.</div>;
};
