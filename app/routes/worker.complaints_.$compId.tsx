/* eslint-disable jsx-a11y/aria-role */
// This page is for worker to submit the date of completion

import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ComplainForm from "~/components/complaintForm";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const compId = parseInt(params.compId as string);

  return await db.complaint.findFirst({ where: { id: compId } });
};

// export const action:ActionFunction= async({request}:ActionFunctionArgs)=>{
//    const formData= await request.formData()
//    return null;
// }

export default function WorkerCompId() {
  const complaints= useLoaderData<typeof loader>();
   return (
     <>
       <div className="w-4/5 mx-auto mt-14 font-medium text-2xl">
         assigns complaint or delete
         <ComplainForm  role='WORKER' complaint={complaints} />
       </div>
     </>
   );
}
