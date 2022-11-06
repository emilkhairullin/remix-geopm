import type { LinksFunction } from "@remix-run/node";
import styles from "./OnMap.css";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet preload", href: styles },
    { rel: "prefetch", href: "/assets/countries_topo.json" },
  ];
};

export const OnMap = () => {
  return (
    <section className="map">
      <div className="map__bg">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            center: [31.2357, 30.0444],
            scale: 2000,
          }}
          style={{ backgroundColor: "1e233c" }}
        >
          <Geographies
            geography="/assets/countries_topo.json"
            fill="#4b74b4"
            stroke="#1e233c"
            strokeWidth={3}
            onClick={() => {}}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  className="map-region"
                  geography={geo}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[31.2357, 30.0444]}>
            <circle r={16} fill="#b432a4" strokeWidth={4} stroke="black" />
          </Marker>
        </ComposableMap>
      </div>
      <div className="container">
        <h2 className="section-header">Cario on the map</h2>
        <p className="map__text-city">Cario is the capital of Egypt.</p>
        <p className="map__text-coordinates">
          Latitude: XX.XX Longitude: XX.XX
        </p>
      </div>
    </section>
  );
};
