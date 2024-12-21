/* The data came from the login route, this files checks in the user details, if yes approves
and sends back the user, creating a cookie so can be used by all of the pages*/

import { db } from "./db.server";
import bcrypt from "bcryptjs";

// Checks the logic and returns null to the page, and route handles the error
export const authenticator = async (userEmail: string, password: string) => {
  const user = await db.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    return null;
  }

  // Cryptographic check
  // const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);

  // Normal plain text check
  const isCorrectPassword = password === user.passwordHash;

  if (!isCorrectPassword) return null;
  return { userId: user.id, name: user.name, role: user.role };
};
