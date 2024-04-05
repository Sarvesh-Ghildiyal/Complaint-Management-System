// Present the user with the required action form and database call!
// for the presented aciton

import { ActionFunctionArgs, json} from "@remix-run/node";
import { actionComplainData } from "~/utils/user.server";
import { Form, useActionData } from "@remix-run/react";

export async function action({request, params}: ActionFunctionArgs) {
  const { action, compId } = params as { action: string; compId: string };
  const actionResult=await actionComplainData({request, params:{action, compId}})
  console.log(actionResult)
  return json({actionResult});
}


export default function ActionId() {
  const actionData = useActionData<typeof action>();
  console.log(actionData?.actionResult);
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
