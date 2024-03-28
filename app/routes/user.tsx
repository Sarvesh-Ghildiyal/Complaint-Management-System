import { Outlet } from "@remix-run/react";

export default function User(){
    return(
        <div>
            <h2>User layout :)</h2>
            {/* Will call for header, footer and sidebar here */}
            <Outlet/>
        </div>
    )
}