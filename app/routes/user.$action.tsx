// Will present user with the aksed functionality
// View, Edit, Check, Remark or Delete

// Then will redirect user to the asked action
// route with the complaint id

// app/routes/user.$action.tsx

import { loadComplainData } from "../utils/user.server";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import List from "../components/table";
import { useParams } from "@remix-run/react";

type customLoaderFunctionArgs = LoaderFunctionArgs & { pageNumber: number };
export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {

  const pageNumber = 1;
  const complaints = await loadComplainData({
    params,
    pageNumber,
  } as customLoaderFunctionArgs);
  return complaints;
};

function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function UserActionPage() {
  const param= useParams()
  const action= capitalizeFirstLetter(param.action as string)
  return <List action={action} />;
}

