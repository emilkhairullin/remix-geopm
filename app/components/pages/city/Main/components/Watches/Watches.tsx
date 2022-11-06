import type { LinksFunction } from "@remix-run/node";
import type { FC } from "react";
import { Clock, links as clockLinks } from "~/components/Clock";
import styles from "./Watches.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...clockLinks()];
};

export const Watches: FC = () => {
  return (
    <section className="watches">
      <div className="container">
        <div className="watches__wrapper">
          <div className="watch">
            <h3 className="watch__header">Current time in Cairo</h3>
            <Clock className="watch__clock" />
            <div className="watch__description">
              <p className="watch__time">20:49:46</p>
              <p className="watch__date">8 April</p>
            </div>
          </div>
          <div className="watch">
            <h3 className="watch__header">My local time</h3>
            <Clock className="watch__clock" />
            <div className="watch__description">
              <p className="watch__time">20:49:46</p>
              <p className="watch__date">8 April</p>
            </div>
          </div>
        </div>
        <a className="section-link" href="#">
          Get clock widget
        </a>
      </div>
    </section>
  );
};
