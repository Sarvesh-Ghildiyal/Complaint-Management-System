// Login form Ui route

import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const message = searchParams.get("message");
  console.log(message);
  return message;
};

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const userEmail = form.get("email") as string;
  const password = form.get("password") as string;

  // const userEmail= 'hello@gmail.com'
  // const password='password'

  const user = await authenticator({ userEmail, password });
  console.log(user);
  return null;
}

export default function LoginPage() {
  return (
    <div>
      <h2>Hello Dear :)</h2>
      <Form method="post">
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
