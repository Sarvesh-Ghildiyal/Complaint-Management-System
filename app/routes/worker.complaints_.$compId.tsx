/* eslint-disable jsx-a11y/aria-role */
// This page is for worker to submit the date of completion

import { ActionFunction, ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CForm from "~/components/workerCForm";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const compId = parseInt(params.compId as string);
console.log(Date())
  return await db.complaint.findFirst({ where: { id: compId } });
};

export const action:ActionFunction= async({request}:ActionFunctionArgs)=>{
   const formData= await request.formData()
  //  const completed_at= formData.get('completed_at') as string
  const compId = parseInt(formData.get("compId") as string);

  const cuD= new Date()
  const isoData= cuD.toISOString()
   await db.complaint.update({
    where:{id:compId},
    data:{due_date:isoData}
   })
   
   return null;
}

export default function WorkerCompId() {
  const complaints= useLoaderData<typeof loader>();
   return (
     <>
       <div className="w-4/5 mx-auto mt-14 font-medium text-2xl">
         assigns complaint or delete
         <CForm  complaint={complaints} />
       </div>
     </>
   );
}
