/* eslint-disable @typescript-eslint/no-unused-vars */

// Ths file is reponsible for handeling cookie management in the app
import { $Enums } from "@prisma/client";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

// Creating a cookie
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("Session_Secret must be set");
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "userSession",
    // secure:true,

    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 20,
    httpOnly: true,
  },
});

// api for creating userSession on login form submit request
export async function createUserSession(user: {
  userId: string;
  name: string;
  role: $Enums.Role;
}) {
  const session = await sessionStorage.getSession();
  session.set("userId", user.userId);
  const redirectTo = `/${user.role.toLowerCase()}`;
  console.log(user);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

// Checking if the user is authenticated or not
export async function requireAuth(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const userId = session.get("userId");

  if (!userId || typeof userId !== "string")
    throw redirect("/login", {
      headers: {
        "Set-Cookies": await sessionStorage.commitSession(session, {
          maxAge: 0,
        }),
      },
    });
  return userId;
}

export async function logout(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
