import { ActionFunction, LoaderFunction, LoaderFunctionArgs} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import List from "~/components/table"
import { db } from "~/utils/db.server"
import { getUser } from "~/utils/session.server"

export const loader :LoaderFunction= async({request}:LoaderFunctionArgs)=>{
   const user= await getUser(request)

   return await db.complaint.findMany({
     where: { workerId: user?.id },
   });
}

export const action: ActionFunction= async()=>{
    // worker can mark the complaint work done or not
}

export default function WorkerComplaint(){
   // eslint-disable-next-line jsx-a11y/aria-role
   return <List action="" role='WORKER' complains={useLoaderData()} />;
}