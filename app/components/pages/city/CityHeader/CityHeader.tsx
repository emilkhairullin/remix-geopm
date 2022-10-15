import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./CityHeader.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const CityHeader: FC = () => {
  return (
    <div className="city_header">
      <div className="left">
        <p className="city_header__place">Time in Cairo, Egypt now</p>
        <div>
          <time className="city_header__time">18:19:20</time>
          <p className="city_header__date">
            Monday, November 23, 2020, week 48
          </p>
          <p className="city_header__sun">Sun: ↑ 06:27 ↓ 16:56 More info</p>
        </div>
      </div>
      <div className="right controlls">
        <button className="controlls__item controlls__item--up">up</button>
        <button className="controlls__item controlls__item--down">down</button>
      </div>
    </div>
  );
};
