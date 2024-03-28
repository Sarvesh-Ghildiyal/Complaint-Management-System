import { Outlet } from "@remix-run/react";

export default function Admin() {
  return (
    <div>
      <h2>Admin layout</h2>
      {/* Will call for header, footer and sidebar here */}
      <Outlet />
    </div>
  );
}
