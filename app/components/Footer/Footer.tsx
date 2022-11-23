import type { LinksFunction } from "@remix-run/node";
import styles from "./Footer.css";
import footerLogo from "~/assets/footer-logo.png";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="footer logo" className="footer__logo" />
      <div className="footer__text">
        <p>
          Copyright © Geo.pm. All rights reserved.
          <a href="#">Contact</a>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
        </p>
        <p>Data source: IANA Time Zone Database & geonames.org</p>
      </div>
    </footer>
  );
};
