import type { LinksFunction } from "@remix-run/node";
import styles from "./OnMap.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const OnMap = () => {
  return (
    <section className="map">
      <h2>Cario on the map</h2>
      <p>Cario is the capital of Egypt.</p>
      <p>Latitude: XX.XX Longitude: XX.XX</p>
    </section>
  );
};
