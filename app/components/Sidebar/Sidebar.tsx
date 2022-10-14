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
      This is sidebar
      <Link to="#">
        <img src={logo} alt="" height={130} width={130} />
      </Link>
      <nav>
        <ul>
          <li>Current time</li>
          <li>Time difference</li>
          <li>Time zones</li>
          <li>Sun info</li>
          <li>Coordinates</li>
          <li>Timer & stopwatch</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
