import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import RemarkForm from "~/components/remarkForm";
import { db } from "~/utils/db.server";

export const loader= async ({params}:LoaderFunctionArgs)=>{
    const compId = parseInt(params.compId as string);
  return await db.complaint.findFirst({ where: { id: compId } });
};

export const action =async({request,params}:ActionFunctionArgs)=>{
    const formData= await request.formData()
    const feedback= formData.get('feedback') as string
    await db.complaint.update({
      where: { id: params.compId },
      data: { feedback:feedback},
    });
    return null;
}
export default function UserRemark(){
    return(
        <RemarkForm complaint={useLoaderData<typeof loader>()}/>
    )
}