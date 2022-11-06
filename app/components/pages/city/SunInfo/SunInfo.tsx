import type { LinksFunction } from "@remix-run/node";
import styles from "./SunInfo.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const SunInfo = () => {
  return (
    <section className="sun">
      <div className="container">
        <h2 className="section-header">Sun Info</h2>
        <ul className="sun__info">
          <li>
            Sunrise: <span className="info__time">06:23</span>
          </li>
          <li>
            Sunset: <span className="info__time">16:58</span>
          </li>
          <li>
            Solar noon: <span className="info__time">11:40</span>
          </li>
          <li>
            Day length: <span className="info__time">10h 35m</span>
          </li>
        </ul>
        <p className="sun__golden-hour">
          Golden hour photography: 06:23-07:00 | 16:20-16:58
        </p>
        <p>image</p>
        <a href="#" className="section-link">
          more info
        </a>
      </div>
    </section>
  );
};
