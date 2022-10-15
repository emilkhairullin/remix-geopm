import type { LinksFunction } from "@remix-run/node";
import styles from "./KeyFacts.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const KeyFacts = () => {
  return (
    <section className="key-facts">
      <h2>Key facts</h2>
      <table>
        <tr>
          <td>Population:</td>
          <td>7 734 614</td>
        </tr>
        <tr>
          <td>Coordinates</td>
          <td>30.06263, 31.24967</td>
        </tr>
        <tr>
          <td>Continents</td>
          <td>Africa</td>
        </tr>
        <tr>
          <td>Coutnry name:</td>
          <td>Egypt</td>
        </tr>
        <tr>
          <td>Iso code:</td>
          <td>EG, 818 and EGY</td>
        </tr>
        <tr>
          <td>tld:</td>
          <td>.eg</td>
        </tr>
        <tr>
          <td>Fips code:</td>
          <td>+20</td>
        </tr>
        <tr>
          <td>Capital:</td>
          <td>Cario</td>
        </tr>
        <tr>
          <td>Country area:</td>
          <td>
            1,001,450.0 km<sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Country population:</td>
          <td>80,471,869</td>
        </tr>
        <tr>
          <td>Currency:</td>
          <td>Pound (EGP)</td>
        </tr>
        <tr>
          <td>Languages:</td>
          <td>Arabic (ar-EG), English (en), French(fr)</td>
        </tr>
      </table>
    </section>
  );
};
