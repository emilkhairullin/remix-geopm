import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Sidebar, { links as sidebarLinks } from "~/components/Sidebar";

export const links: LinksFunction = () => {
  return [...sidebarLinks()];
};

const __layout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default __layout;
