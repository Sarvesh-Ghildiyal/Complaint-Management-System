
/* This files deals with the authentication logics required
in my application, checking login data, sending user data
client, when cookie is set send the user data in different routes*/

import { db } from "./db.server";

type loginFormData = {
  userEmail: string;
  password: string;
};

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

  return { userId: user.id, userEmail, name: user.name };
};
