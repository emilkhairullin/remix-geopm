import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import { Divider } from "~/components/Divider";
import styles from "./Timezones.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Timezone: FC = () => {
  return (
    <section className="timezones">
      <h2 className="section-header">Cario time zone</h2>
      <p className="timezones__info">
        Central Africa Time(Cat),{" "}
        <span className="timezones__accent">UTC+2</span>
      </p>
      <p className="timezones__info">
        No daylight saving time, same offset all year.
      </p>
      <p className="timezones__info">
        The IANA time zone identifier for Cairo is{" "}
        <span className="timezones__accent">Africa/Cairo</span>
      </p>
      <Divider className="timezones__divider" />
      <div className="timezones__other">
        <p>Other cities UTC +2: </p>
        <ul className="timezones__list">
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
