import type { LinksFunction } from "@remix-run/node";
import classNames from "classnames";
import type { FC } from "react";
import styles from "./Divider.css";

export type DividerProps = {
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Divider: FC<DividerProps> = ({
  shadow = false,
  className,
  ...props
}) => {
  const cn = classNames("divider", { "divider-shadow": shadow });
  return <div className={cn} {...props}></div>;
};
