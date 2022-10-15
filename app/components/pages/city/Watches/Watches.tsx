import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import { Clock } from "~/components/Clock";
import styles from "./Watches.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Watches: FC = () => {
  return (
    <div className="watches">
      <Clock />
      <Clock />
      <a href="#">Get clock widget</a>
    </div>
  );
};
