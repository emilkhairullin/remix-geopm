import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./Breadcrumbs.css";

export type BreadcrumbsProps = {};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = () => {
  return (
    <div className="breadcrumbs">
      <a href="#" className="breadcrumbs__item">
        Time
      </a>
      <span className="breadcrumbs__divider"> / </span>
      <a href="#" className="breadcrumbs__item">
        Africa
      </a>
      <span className="breadcrumbs__divider"> / </span>
      <a href="#" className="breadcrumbs__item">
        Egypt
      </a>
      <span className="breadcrumbs__divider"> / </span>
      <a href="#" className="breadcrumbs__item breadcrumbs__item--active">
        Cairo
      </a>
    </div>
  );
};
