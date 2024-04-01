// Will present user with the aksed functionality
// View, Edit, Check, Remark or Delete

// Then will redirect user to the asked action
// route with the complaint id

// app/routes/user.$action.tsx

import { useLoaderData } from "@remix-run/react";
import { loadComplainData } from "../utils/user.server";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

type customLoaderFunctionArgs = LoaderFunctionArgs & { pageNumber: number };
export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  // Call the loader function from utils based on the action parameter
  console.log({ params });
  const pageNumber = 1;
  const complaints = await loadComplainData({
    params,
    pageNumber,
  } as customLoaderFunctionArgs);
  return complaints;
};

// React component for rendering the UI
const UserActionPage = () => {
  const loaderData = useLoaderData<typeof loader>();
  console.log(loaderData);
  return (
    <div>
      <h2>edit</h2>
      <button id="paginate">Click</button>
    </div>
  );
};

export default UserActionPage;
