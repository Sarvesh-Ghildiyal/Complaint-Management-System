import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet} from "@remix-run/react";
import { db } from "~/utils/db.server";
import { requireAuth } from "~/utils/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireAuth(request);

  const user = await db.user.findUnique({
    where: { id: userId },
  });

  //Authorize the user with url
  const role = user?.role.toLowerCase() as string;
  if (request.url.includes(`/${role}`)) return user;
  
  //   Error handeling yet to be done
  else throw new Error("402 unauthorized");
}
export default function User() {
  return (
    <div>
      <h2>User layout :)</h2>
      {/* Will call for header, footer and sidebar here */}
      <Outlet />
    </div>
  );
}
