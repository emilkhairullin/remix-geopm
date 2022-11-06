import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import styles from "./TimezonesDraggable.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const TimezonesDraggable: FC = () => {
  return (
    <div className="timezones-draggable">
      <div className="timezones-draggable__box">
        <div className="timezones-draggable__numbers-top">
          {[...Array(24).keys()].map((el) => (
            <p>{el}</p>
          ))}
        </div>
        <div className="timezones-draggable__inner-box">
          <p>Cairo</p>
          {/* <p className="timezones-draggable__time">12:00 PM</p> */}
        </div>
      </div>
      <div className="timezones-draggable__box">
        <div className="timezones-draggable__inner-box">
          <p>Cairo</p>
          {/* <p className="timezones-draggable__time">12:00 PM</p> */}
        </div>
      </div>
    </div>
  );
};
