import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import { Divider } from "~/components/Divider";
import {
  TimezonesDraggable,
  links as timezonesDraggableLinks,
} from "./components/TimezonesDraggable";
import styles from "./TimeDifference.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...timezonesDraggableLinks()];
};

export const TimeDiffernce: FC = () => {
  return (
    <section className="timedifference">
      <div className="container">
        <div className="timedifference__header">
          <h2 className="section-header">Time difference</h2>
          <div className="timedifference__buttongroup">
            <button className="timedifference__button timedifference__pm-button">
              pm
            </button>
            <button className="timedifference__button timedifference__24-button">
              24
            </button>
          </div>
        </div>
        <Divider />
        <p className="timedifference__info">
          When it is <span className="timedifference__options">12:00 am</span>{" "}
          <span className="timedifference__accent">Cairo</span> time it will be{" "}
          <span className="timedifference__options">6:00 pm</span>{" "}
          <span className="timedifference__accent">my local time</span>
        </p>
      </div>
      <div className="timedifference__component">
        <div className="container">
          <TimezonesDraggable />
          <a href="#" className="section-link">
            Time difference Cairo from other cities
          </a>
        </div>
      </div>
    </section>
  );
};
