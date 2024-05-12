// Will present user with the aksed functionality
// View, Edit, Check, Remark or Delete

// Then will redirect user to the asked action
// route with the complaint id

// app/routes/user.$action.tsx

import { loadComplainData } from "../utils/user.server";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import List from "../components/table";
import { useLoaderData, useParams } from "@remix-run/react";
import { getUser } from "~/utils/session.server";
import { db } from "~/utils/db.server";

// type customLoaderFunctionArgs = LoaderFunctionArgs & { pageNumber: number };
// export const loader: LoaderFunction = async ({
//   params,
// }: LoaderFunctionArgs) => {

//   const pageNumber = 1;
//   const complaints = await loadComplainData({
//     params,
//     pageNumber,
//   } as customLoaderFunctionArgs);
//   return complaints;
// };

export const loader: LoaderFunction= async({request}:LoaderFunctionArgs)=>{
  const user= await getUser(request)

  const complaints= await db.complaint.findMany({
    where:{userId:user?.id}
  })
  
  return complaints;
}

function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function UserActionPage() {
  const complaints= useLoaderData()
  console.log(complaints)
  const param= useParams()
  const action= capitalizeFirstLetter(param.action as string)
  return <List action={action} complains={complaints}/>;
}

