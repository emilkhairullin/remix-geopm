import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Breadcrumbs,
  links as breadcrumbsLinks,
} from "~/components/Breadcrumbs";
import {
  AlternativeNames,
  links as alternativeNamesLinks,
} from "~/components/pages/city/AlternativeNames";
import { Cities } from "~/components/pages/city/Cities";
import {
  CityHeader,
  links as cityHeaderLinks,
} from "~/components/pages/city/CityHeader";
import {
  KeyFacts,
  links as keyFactsLinks,
} from "~/components/pages/city/KeyFacts";
import { OnMap, links as onMapLinks } from "~/components/pages/city/OnMap";
import {
  PopularCities,
  links as popularCitiesLinks,
} from "~/components/pages/city/PopularCities";
import {
  SunInfo,
  links as sunInfoLinks,
} from "~/components/pages/city/SunInfo";
import {
  TimeDiffernce,
  links as timeDifferenceLinks,
} from "~/components/pages/city/TimeDifference";
import {
  Timezone,
  links as timezoneLinks,
} from "~/components/pages/city/Timezones";
import {
  Watches,
  links as watchesLinks,
} from "~/components/pages/city/Watches";
import useWatch from "~/hooks/useWatch";

export const links: LinksFunction = () => {
  return [...breadcrumbsLinks(), ...cityHeaderLinks(), ...timezoneLinks()];
};

export const loader = () => {
  const time = new Date().toLocaleTimeString("us", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return json({ time });
};

const IndexPage = () => {
  const data = useLoaderData<typeof loader>();
  const { currentTime } = useWatch(data.time);

  return (
    <>
      <Breadcrumbs />
      <CityHeader />
      <Watches />
      <TimeDiffernce />
      <Timezone />
      <SunInfo />
      <AlternativeNames />
      <OnMap />
      <KeyFacts />
      <Cities />
      <PopularCities />
    </>
  );
};

export default IndexPage;
