import type { LinksFunction } from "@remix-run/node";
import { TagCloud } from "react-tagcloud";
import styles from "./Cities.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const data = [
  { value: "Abu Kabir", count: 87002 },
  { value: "Akhmim", count: 118507 },
  { value: "Al Fayyum", count: 403099 },
  { value: "Al Mansurah", count: 531195 },
  { value: "Al Matariyah", count: 300000 },
  { value: "Al Mahallax al Kubra", count: 535278 },
  { value: "Al Hamidiyah", count: 7404 },
  { value: "Alexandria", count: 5200000 },
  { value: "Arish", count: 164830 },
  { value: "Ashmun", count: 1881 },
  { value: "Assiut", count: 517656 },
  { value: "Aswan", count: 1568000 },
  { value: "Benha", count: 165906 },
  { value: "Bani Suwayf", count: 233142 },
  { value: "Bilbeis", count: 407300 },
  { value: "Bilqas", count: 30993 },
  { value: "Bush", count: 30993 },
  { value: "Cairo", count: 6200000 },
  { value: "Damanhur", count: 60993 },
  { value: "Damietta", count: 30993 },
  { value: "Dikirnis", count: 40993 },
  { value: "Disuq", count: 30993 },
  { value: "Giza", count: 5200000 },
  { value: "Helwen", count: 3200000 },
  { value: "Hurghanda", count: 30993 },
  { value: "Idfu", count: 40993 },
  { value: "Idku", count: 30993 },
  { value: "Ismailia", count: 3900000 },
  { value: "Jirja", count: 40993 },
  { value: "Kafr ad Dawwar", count: 3900000 },
  { value: "Kafr ash Shaykh", count: 233142 },
  { value: "Kafr az Zayyak", count: 30993 },
  { value: "Luxor", count: 5200000 },
  { value: "Mallawi", count: 233142 },
  { value: "Manfalut", count: 225142 },
  { value: "Minya", count: 233142 },
  { value: "Minuf", count: 225142 },
  { value: "Port Said", count: 6200000 },
  { value: "Qalyub", count: 225142 },
  { value: "Qina", count: 3900000 },
  { value: "Samalut", count: 225142 },
  { value: "Shibin al Kawm", count: 233142 },
  { value: "Sohag", count: 233142 },
  { value: "Suez", count: 3900000 },
  { value: "Tanta", count: 3900000 },
  { value: "Zagazig", count: 3900000 },
  { value: "Zifta", count: 225142 },
  { value: "Tahta", count: 225142 },
  { value: "Talkha", count: 285142 },
  { value: "Hawsh Isa", count: 225142 },
];

export const Cities = () => {
  return (
    <section className="cities">
      <div className="container">
        <h2 className="section-header">The 50 largest cities in Egypt</h2>
        <div className="cities__list">
          <TagCloud
            className="cities__tagCloud"
            minSize={12}
            maxSize={35}
            tags={data}
            disableRandomColor={true}
          />
        </div>
      </div>
    </section>
  );
};
