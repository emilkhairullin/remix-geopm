import type { LinksFunction } from "@remix-run/node";
import styles from "./AlternativeNames.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const AlternativeNames = () => {
  const names = [
    "Kairo",
    "cairo",
    "Kairo",
    "Caire",
    "კაირო-k’airo",
    "Kairo",
    "Κάιρο-Káiro",
    "કૈરો-Kairō",
    "cairo",
    "קאירו",
    "काहिरा-kaahira",
    "Kairó",
    "kairó",
    "Kairo",
    "Cairo	Egitto",
  ];

  return (
    <section className="alter">
      <div className="container">
        <h2 className="section-header">Alternative Names</h2>
        <ul className="alter__list">
          {names.map((el, index) => {
            return (
              <li className="alter__list-item" key={index}>
                {el}
              </li>
            );
          })}
        </ul>
        <a className="section-link" href="#">
          all names
        </a>
      </div>
    </section>
  );
};
