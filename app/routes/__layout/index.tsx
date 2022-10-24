import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Divider, links as dividerLinks } from "~/components/Divider";
import {
  AlternativeNames,
  links as alternativeNamesLinks,
} from "~/components/pages/city/AlternativeNames";
import { Cities, links as citiesLinks } from "~/components/pages/city/Cities";
import {
  KeyFacts,
  links as keyFactsLinks,
} from "~/components/pages/city/KeyFacts";
import { Main, links as mainLinks } from "~/components/pages/city/Main";
import { OnMap } from "~/components/pages/city/OnMap";
import { PopularCities } from "~/components/pages/city/PopularCities";
import {
  links as sunInfoLinks,
  SunInfo,
} from "~/components/pages/city/SunInfo";
import {
  links as timezoneLinks,
  Timezone,
} from "~/components/pages/city/Timezones";

export const links: LinksFunction = () => {
  return [
    ...mainLinks(),
    ...dividerLinks(),
    ...timezoneLinks(),
    ...sunInfoLinks(),
    ...citiesLinks(),
    ...alternativeNamesLinks(),
    ...keyFactsLinks(),
  ];
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

  return (
    <>
      <Main />
      <Timezone />
      <SunInfo />
      <Divider />
      <AlternativeNames />
      <Divider />
      <OnMap />
      <Divider />
      <KeyFacts />
      <Divider />
      <Cities />
      <Divider />
      <PopularCities />
    </>
  );
};

export default IndexPage;
