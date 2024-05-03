/* eslint-disable jsx-a11y/label-has-associated-control */
// Login form Ui route

import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";
import { createUserSession} from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const message = searchParams.get("message");
  // console.log(message);
  
  return message;
};

export async function action({ request }: ActionFunctionArgs) {
  // You should validate form data before proceeding but rn i wont
  // Error handeling not done yet, to be done in route only
  const form = await request.formData();
  const userEmail = form.get("email") as string;
  const password = form.get("password") as string;
  // const confirmPassword = form.get("confirm-password") as string;

  const user = await authenticator({ userEmail, password });

  if (user) {
    let redirectTo = `/${user.role}`;
    redirectTo = redirectTo.toLocaleLowerCase();
    console.log(redirectTo);
    // // Got the user Id and password now Create User Session
    return createUserSession(user.userId, redirectTo);
  }
}

export default function LoginPage() {
  return (
    <div>
      <h2 className="max-w-sm mx-auto m-4">Hello Dear :)</h2>

      <Form method="post" className="max-w-sm mx-auto border p-5">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="admin@gmail.com"
          />
        </div>
        {/* My password */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        {/* Confirm Password */}
        {/* <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div> */}

        {/* Forgot password */}
        <div className="flex items-start mb-5">
          <a
            href="/"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
