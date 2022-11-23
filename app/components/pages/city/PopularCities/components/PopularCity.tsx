import type { LinksFunction } from "@remix-run/node";
import styles from "./PopularCity.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export type PopularCityProps = {
  name: string;
  timezone: string;
  timeDifference: string;
};

export const PopularCity: React.FC<PopularCityProps> = ({
  name,
  timeDifference,
  timezone,
}) => {
  return (
    <div className="popular-city">
      <p className="popular-city__name">{name}</p>
      <div className="popular-city__right">
        <p className="popular-city__timezone">{timezone}</p>
        <p className="popular-city__time-difference">{timeDifference} hours</p>
      </div>
    </div>
  );
};
