/* eslint-disable jsx-a11y/aria-role */
import { ActionFunction, ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import ComplainForm from "~/components/complaintForm";
import { db } from "~/utils/db.server";

// This page can assign complaint to a worker and further
// Delete the complaint if not required

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const compId = parseInt(params.compId as string);
  const complaint = await db.complaint.findFirst({
    where: { id: compId },
  });
  // console.log(complaint)
  return complaint;
};

export const action:ActionFunction= async({request}:ActionFunctionArgs)=>{
  const formData= await request.formData()
  const workerId= formData.get('assign_to') as string
  const compId = parseInt(formData.get("compId") as string);
  await db.complaint.update({
    where:{id:compId},
    data:{workerId: workerId}
    
  })
  return null
}

export default function AdminCompID() {
  const complaint = useLoaderData();

  return (
    <>
      <div className="w-4/5 mx-auto mt-14 font-medium text-2xl">
        assigns complaint or delete
      </div>
      <ComplainForm  role='ADMIN' complaint={complaint} />
    </>
  );
}
