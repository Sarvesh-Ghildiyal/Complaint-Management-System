import { Outlet } from "@remix-run/react";

export default function Worker() {
  return (
    <div>
      <h2>Worker layout</h2>
      {/* Will call for header, footer and sidebar here */}
      <Outlet />
    </div>
  );
}
