// app/utils/user.server.ts

import { json, LoaderFunctionArgs } from "@remix-run/node";
import { db } from "./db.server";
import { Complaint } from "@prisma/client";

type customLoaderFunctionArgs = LoaderFunctionArgs & { pageNumber: number };

export const loadComplainData = async ({
  params,
  pageNumber,
}: customLoaderFunctionArgs) => {
  let { action } = params;
  action = action?.toLocaleLowerCase();

  let data;

  if (
    action == "view" ||
    action == "edit" ||
    action == "status" ||
    action == "remark" ||
    action == "delete"
  )
    data = await loadData(pageNumber);
  else throw new Error("Invalid action");
  return json(data);
};

// Function to load Data on page
const loadData = async (pageNumber: number) => {
  try {
    const complaints = await db.complaint.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      skip: pageNumber * 5,
    });
    return complaints;
  } catch (error) {
    throw new Error("An error occured");
    console.log(error);
  } finally {
    db.$disconnect();
  }
};

export const actionComplainData = async ({
  request,
  params,
}: {
  request: Request;
  params: { action: string; compId: string };
}) => {
  try {
    const { action } = params;
    const compId: number = params.compId ? parseInt(params.compId) : 0;
    const complaint = await db.complaint.findUnique({
      where: { id: compId },
    });

    if (complaint) {
      if (action == "edit"){
        const msg = editAction({ complaint, request });
        return msg;
      }
      else if (action == "delete") deleteAction(complaint);
      else if (action == "view" || action == "status" || action == "remark")
        return complaint;
      else return "Invalid Action";
    } else return "No complaint found of this id";
  } catch (error) {
    throw new Error("Kux toh phata hai");
    console.log(error);
  } finally {
    db.$disconnect();
  }
};

const editAction = async ({
  complaint,
  request,
}: {
  complaint: Complaint;
  request: Request;
}) => {
  const formData = await request.formData(); //validate the form via zod

  // edit the complaint based on its data
  console.log(formData.get("name"), complaint.id);
  return json("edited succesfully")
};

const deleteAction = async (complaint: Complaint) => {
  try {
    await db.complaint.delete({
      where: { id: complaint.id },
    });
  } catch (error) {
    return error;
  } finally {
    db.$disconnect();
  }
};
