import { Role } from "@prisma/client";
import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import bcrypt from "bcryptjs";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const form = await request.formData();
  const name = form.get("name") as string;
  // const password = form.get("password") as string;
  const email = form.get("email") as string;
  const role = form.get("role") as Role;
  const department = form.get("department") as string;

  const salt = await bcrypt.genSalt(10);
  const password="password"
  const hashPassword = await bcrypt.hash(password, salt);
console.log(hashPassword)
  const user = {
    name: "Sar",
    passwordHash: hashPassword,
    email: email,
    role: role,
    department: department,
  };

  /* after user Details check if they are right, zod in play
    if yes then create the user the validation logics 
    is to be carried out*/

  // await db.user.create({ data: user });
  
  // return a succefull registreration msg


 const message = "Successful registration!";

 // Redirect to the login page with the message
 return redirect(`/login?message=${encodeURIComponent(message)}`);
};

export default function RegisterPage() {
  return (
    <div>
      <h2>Hello lets register here</h2>
      <Form method="post">
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="text" name="role" defaultValue="USER" />
        <input type="text" name="department" />
        {/* <input type="text" name="role" /> */}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
