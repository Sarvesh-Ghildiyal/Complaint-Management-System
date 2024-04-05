// Present the user with the required action form and database call!
// for the presented aciton

import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { actionComplainData } from "~/utils/user.server";
import { Form } from "@remix-run/react";

export async function action({request, params}: ActionFunctionArgs) {
  const { action, compId } = params as { action: string; compId: string };
  actionComplainData({request, params:{action, compId}})
  return redirect("");
}

export default function actionId() {
  return (
    <div>
      <h2>complain Id page :)</h2>
      <Form method="post">
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
