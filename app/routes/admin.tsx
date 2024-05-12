import { Outlet, useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getUser, logout, requireAuth } from "~/utils/session.server";
import Sidebar from "~/components/sidebar";
import Header from "~/components/header";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);

  const user = await getUser(request);

  //Authorize the user with url
  const role = user?.role.toLowerCase() as string;
  if (request.url.includes(`/${role}`)) return user;
  //   Error handeling yet to be done
  else throw new Error("402 unauthorized");
}

export const action = async ({ request }: ActionFunctionArgs) =>
  logout(request);

export default function Admin() {
  const user = useLoaderData<typeof loader>();
 const admin_nav_links = [
   { text: "View Users", path: "/users" },
   { text: "View Complaints", path: "/complaints" },
  //  { text: "Close Complaints", path: "/asign" },
 ];
  return (
    <div className="bg-gray-50 w-screen font-light flex overflow-hidden">
        <Sidebar navLinks={admin_nav_links} />

        <main className="flex-grow">
          <Header userName={user?.name} />

          <Outlet />
        </main>
    </div>
  );
}
