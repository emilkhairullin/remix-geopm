import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Sidebar, { links as sidebarLinks } from "~/components/Sidebar";
import _layoutStyles from "~/styles/_layout.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: _layoutStyles }, ...sidebarLinks()];
};

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
