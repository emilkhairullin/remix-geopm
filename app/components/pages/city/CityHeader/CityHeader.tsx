import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import useWatch from "~/hooks/useWatch";
import styles from "./CityHeader.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const CityHeader: FC = () => {
  const { currentTime } = useWatch(new Date());

  return (
    <div className="city-header">
      <div className="left">
        <h1 className="section-header">Time in Cairo, Egypt now</h1>
        <div className="city-header__info">
          <time className="city-header__time">{currentTime}</time>
          <div>
            <p className="city-header__date">
              Monday, November 23, 2020, week 48
            </p>
            <p className="city-header__sun">Sun: ↑ 06:27 ↓ 16:56 More info</p>
          </div>
        </div>
      </div>
      <div className="right controlls">
        <button className="controlls__item controlls__item--up">u</button>
        <button className="controlls__item controlls__item--down">d</button>
      </div>
    </div>
  );
};
