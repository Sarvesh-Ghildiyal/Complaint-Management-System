import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  const pageNumber = 0;
  const users = await db.user.findMany({
    where:{role:"USER"},
    orderBy: { createdAt: "desc" },
    take: 5,
    skip: pageNumber * 5,
  });
    // console.log(users);
  return json({ users });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const action = formData.get("action");
  console.log(formData);

  if (action === "add") {
    /*Will do a quick form validation and
      then will save it to the db*/

    return json({ action });
  } else if (action === "delete") {
    return "User delted succesfully";
  }
};

export default function AdminUser() {
  const actionData = useActionData<typeof action>();
  console.log(actionData);

  return (
    <h2>Users page</h2>
  );
}
