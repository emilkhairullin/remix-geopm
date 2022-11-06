import type { LinksFunction } from "@remix-run/node";
import styles from "./Sidebar.css";
import logo from "~/assets/logo.png";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src={logo} alt="" height={130} width={130} />
      </Link>
      <nav className="sidebar__nav">
        <ul>
          <li className="nav__item">
            <Link to="/" className="link link--active">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="link">
              Metropoles
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="link">
              Countries
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="link link-subnav">
              Continents
            </Link>
            <ul className="subnav">
              <li>
                <Link to="/" className="subnav__item">
                  Antarctica
                </Link>
              </li>
              <li>
                <Link to="/" className="subnav__item">
                  Africa
                </Link>
              </li>
              <li>
                <Link to="/" className="subnav__item">
                  Asia
                </Link>
              </li>
              <li>
                <Link to="/" className="subnav__item">
                  Australia/Oceania
                </Link>
              </li>
              <li>
                <Link to="/" className="subnav__item">
                  Europe
                </Link>
              </li>
              <li>
                <Link to="/" className="subnav__item">
                  North America
                </Link>
              </li>
              <li>
                <Link to="/" className="subnav__item">
                  South America
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
