import type { LinksFunction } from "@remix-run/node";
import styles from "./SunInfo.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const SunInfo = () => {
  return (
    <section className="sun-info">
      <h2>Sun Info</h2>
      <ul>
        <li>Sunrise: 06:23</li>
        <li> Sunset: 16:58</li>
        <li> Solar noon: 11:40</li>
        <li> Day length: 10h 35m</li>
      </ul>
      <p>Golden hour photography: 06:23-07:00 | 16:20-16:58</p>
      <a href="#">more info</a>
      <p>image</p>
    </section>
  );
};
