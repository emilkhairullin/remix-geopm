import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./Timezones.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Timezone: FC = () => {
  return (
    <section className="timezone" id="timezone">
      <h2>Cario time zone</h2>
      <p>
        Central Africa Time(Cat),{" "}
        <span className="timezone__accent">UTC+2</span>
      </p>
      <p>No daylight saving time, same offset all year.</p>
      <p>
        The IANA time zone identifier for Cairo is
        <span className="timezone__accent">Africa/Cairo</span>
      </p>
      <div className="timezone__other">
        <p>Other cities UTC +2</p>
        <ul>
          <li>
            <a href="#">Afiny</a>
          </li>
          <li>
            <a href="#">Kiev</a>
          </li>
          <li>
            <a href="#">Minsk</a>
          </li>
          <li>
            <a href="#">Moskow</a>
          </li>
          <li>
            <a href="#">Belgorod</a>
          </li>
          <li>
            <a href="#">Bobruisk</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
