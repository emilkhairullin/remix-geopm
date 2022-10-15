import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./TimeDifference.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const TimeDiffernce: FC = () => {
  return <section>TimeDifference</section>;
};
