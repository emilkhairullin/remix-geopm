import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./Breadcrumbs.css";

export type BreadcrumbsProps = {};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = () => {
  return (
    <div className="container">
      <ul className="breadcrumbs">
        <li>
          <a href="#" className="breadcrumbs__item">
            Time
          </a>
        </li>
        <li>
          <a href="#" className="breadcrumbs__item">
            Africa
          </a>
        </li>
        <li>
          <a href="#" className="breadcrumbs__item">
            Egypt
          </a>
        </li>
        <li>
          <a href="#" className="breadcrumbs__item breadcrumbs__item--active">
            Cairo
          </a>
        </li>
      </ul>
    </div>
  );
};
