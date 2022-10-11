import { Outlet } from "@remix-run/react";

const _layout = () => {
  return (
    <>
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default _layout;
