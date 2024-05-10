// Fill complain form for the user
// import { useContext } from 'react';
import { ActionFunctionArgs } from "@remix-run/node";
import Form from "../components/form";
import { useUserContext } from "~/context/userContext";
import { db } from "~/utils/db.server";
import { Complaint } from "@prisma/client";


function GetComplaintData(formData: FormData) {
  const title =formData.get("title");
  const room_no =formData.get("room_no");
  const requested_by =formData.get("requested_by");
  const reported_by =formData.get("reported_by");
  const body =formData.get("comp_body");

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // const userId = user.id;
  // const department = user.department;

  const complaintData: Complaint = {
    userId: "f86026c5-3070-425f-9986-509529ce4b7a",
    department: "kj",
    title: title,
    room_n0: 120,
    reported_by: reported_by,
    requested_by: requested_by,
    body: body,
  };
  return complaintData;
}
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const complaintData =  GetComplaintData(formData);
 
  return db.complaint.create({data:complaintData})


  return null;
};
export default function Comp() {
  const user = useUserContext();
  console.log(user);
  return <Form name={user.name} />;
}
