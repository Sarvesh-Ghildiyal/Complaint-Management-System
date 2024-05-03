
/* The data came from the login route, this files checks in the user details, if yes approves
and sends back the user, creating a cookie so can be used by all of the pages*/

import { db } from "./db.server";

type loginFormData = {
  userEmail: string;
  password: string;
};

// Checks the logic and returns null to the page, and route handles the error
export const authenticator = async ({ userEmail, password }: loginFormData) => {
  const user = await db.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    throw new Error("Email does not exist");
  }
  if (password != user.passwordHash) {
    throw new Error("password does not match");
  }

  return { userId: user.id, userEmail, name: user.name, role: user.role };
};
