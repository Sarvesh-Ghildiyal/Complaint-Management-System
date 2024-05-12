import {LoaderFunction } from "@remix-run/node";
import {useLoaderData, useRouteLoaderData } from "@remix-run/react";
import List from "~/components/table";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  // admin complaints page, will require Complaints data
  const complaints= await db.complaint.findMany()
  return complaints;
};

// export const action: ActionFunction = async ({ request }) => {
//   const formData = new URLSearchParams(await request.text());
//   const action = formData.get("action");
//   console.log(formData);

//   if (action === "add") {
//     /*Will do a quick form validation and
//       then will save it to the db*/

//     return json({ action });
//   } else if (action === "delete") {
//     return "Worker delted succesfully";
//   }
// };

export default function AdminUser() {
  const complaints= useLoaderData<typeof loader>()
  const user= useRouteLoaderData<typeof loader>('routes/admin')
  console.log(user)

  return (
    <List action='' complains={complaints} role={user.role} />
  )
}
