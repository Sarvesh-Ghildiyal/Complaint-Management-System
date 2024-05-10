import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { logout, requireAuth } from "~/utils/session.server";

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { UserContext } from "~/context/userContext";


export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireAuth(request);

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id:true, email:true ,name: true, role: true, department:true},
  });

  //Authorize the user with url, have loopholes for params routes
  const role = user?.role.toLowerCase() as string;
  if (request.url.includes(`/${role}`)) return user;
  //   Error handeling yet to be done
  else throw new Error("402 unauthorized");
}

export const action = async ({ request }: ActionFunctionArgs) =>
  logout(request);

export default function UserRoot() {
  const user = useLoaderData<typeof loader>();
  const user_nav_links = [
    { text: "Fill Complain", path: "/fillComp" },
    { text: "View Complain", path: "/view" },
    { text: "Edit Complain", path: "/edit" },
    { text: "Check Status", path: "/status" },
    { text: "Remark", path: "/remark" },
    { text: "Delete", path: "/delete" },
  ];

  return (
    <div className="bg-gray-50 w-screen font-light flex">
      <UserContext.Provider value={user}>
        <Sidebar navLinks={user_nav_links} />

        <main className="flex-grow">
          <Header userName={user?.name} />

          <Outlet />
        </main>
      </UserContext.Provider>
    </div>
  );
}
