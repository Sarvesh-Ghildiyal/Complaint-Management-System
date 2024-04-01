// app/utils/user.server.ts

import { json, LoaderFunctionArgs } from "@remix-run/node";
import { db } from "./db.server";

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
