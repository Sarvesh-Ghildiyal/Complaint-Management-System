import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { requireAuth } from "~/utils/session.server";


export async function loader({request}:LoaderFunctionArgs){
    const userId= await requireAuth(request)
    return null

}
export default function User(){
    return(
        <div>
            <h2>User layout :)</h2>
            {/* Will call for header, footer and sidebar here */}
            <Outlet/>
        </div>
    )
}