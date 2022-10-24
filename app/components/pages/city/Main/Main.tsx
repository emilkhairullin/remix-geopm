import type { LinksFunction } from "@remix-run/node";

import {
  Breadcrumbs,
  links as breadcrumbsLinks,
} from "~/components/Breadcrumbs";
import { Divider } from "~/components/Divider";

import { CityHeader, links as cityHeaderLinks } from "./components/CityHeader";
import {
  links as timeDifferenceLinks,
  TimeDiffernce,
} from "./components/TimeDifference";
import { links as watchesLinks, Watches } from "./components/Watches";

import styles from "./Main.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    ...breadcrumbsLinks(),
    ...cityHeaderLinks(),
    ...timeDifferenceLinks(),
    ...watchesLinks(),
  ];
};

export const Main = () => {
  return (
    <div className="main-wrapper">
      <Breadcrumbs />
      <CityHeader />
      <Divider />
      <Watches />
      <Divider />
      <TimeDiffernce />
      <Divider />
    </div>
  );
};
