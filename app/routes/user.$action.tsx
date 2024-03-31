// Will present user with the aksed functionality
// View, Edit, Check, Remark or Delete

// Then will redirect user to the asked action
// route with the complaint id

// app/routes/user.$action.tsx

import { loadComplainData } from "../utils/user.server";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  // Call the loader function from utils based on the action parameter
  console.log(params)
  return loadComplainData({params} as LoaderFunctionArgs)
};

// React component for rendering the UI
const UserActionPage = () => {
  return <h2>edit</h2>;
  // Your component logic goes here
};

export default UserActionPage;

// return loadComplainData({ params });
