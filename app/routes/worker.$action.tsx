import { ActionFunction, LoaderFunction} from "@remix-run/node"

export const loader :LoaderFunction= async()=>{
    // find many complains assigned to logged in worker
    return null;
}

export const action: ActionFunction= async()=>{
    // worker can mark the complaint work done or not
}

export default function WorkerComplaint(){
    return(
        <h2>Worker assign complaint here</h2>
    )
}