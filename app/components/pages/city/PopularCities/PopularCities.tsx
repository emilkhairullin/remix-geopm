import type { LinksFunction } from "@remix-run/node";
import {
  links as PopularCityLinks,
  PopularCity,
} from "./components/PopularCity";
import styles from "./PopularCities.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...PopularCityLinks()];
};

export const PopularCities = () => {
  const data = [
    { name: "Tokyo", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Beijing", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Moscow", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Los Angeles", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Chicago", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "New York", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Toronto", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Tokyo", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Beijing", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Moscow", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Los Angeles", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Chicago", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "New York", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Toronto", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Tokyo", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Beijing", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Moscow", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Los Angeles", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Chicago", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "New York", timeDifference: "-8", timezone: "(UTC +2)" },
    { name: "Toronto", timeDifference: "-8", timezone: "(UTC +2)" },
  ];
  return (
    <section className="popular-cities">
      <div className="container">
        <h2 className="section-header popular-cities__header">
          Time difference Cario from popular cities
        </h2>
        <div className="popular-cities__list">
          {data.map((el, idx) => (
            <PopularCity
              name={el.name}
              timezone={el.timezone}
              timeDifference={el.timeDifference}
              key={`${el.name}${idx}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
