// Fill complain form for the user
// import { useContext } from 'react';
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import Form from "../components/form";
import { useUserContext } from "~/context/userContext";
import { db } from "~/utils/db.server";
import { Complaint, User } from "@prisma/client";
import { getUser } from "~/utils/session.server";
import { useRouteLoaderData } from "@remix-run/react";


function GetComplaintData(formData: FormData, user) {
  const title =formData.get("title");
  const room_no = parseInt(formData.get("room_no") as string);
  const requested_by =formData.get("requested_by");
  const reported_by =formData.get("reported_by");
  const body =formData.get("comp_body");


  const complaintData: Complaint = {
    userId: user.id,
    department: user.department,
    title: title,
    room_n0: room_no,
    reported_by: reported_by,
    requested_by: requested_by,
    body: body,
  };
  return complaintData;
}
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const user= await getUser(request)
  const complaintData =  GetComplaintData(formData, user);
 
  // Complain is created now show the message
   await db.complaint.create({data:complaintData})
 
  //  Refresh redirect to same page with some message, !success
  return redirect(request.url, { message: 'Room number submitted successfully!' });

};
export default function Comp() {
  
  const user= useRouteLoaderData('routes/user')
  return <Form name={user.name} />;
}
