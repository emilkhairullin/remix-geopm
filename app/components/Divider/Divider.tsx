import type { LinksFunction } from "@remix-run/node";
import classNames from "classnames";
import type { FC } from "react";
import styles from "./Divider.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Divider: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={classNames("divider", className)} {...props}></div>;
};
