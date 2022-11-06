import type { LinksFunction } from "@remix-run/node";
import { links as dividerLinks } from "~/components/Divider";
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
import { OnMap, links as onMapLinks } from "~/components/pages/city/OnMap";
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
    ...onMapLinks(),
  ];
};

const IndexPage = () => {
  return (
    <>
      <Main />
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
