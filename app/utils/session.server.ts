/* eslint-disable @typescript-eslint/no-unused-vars */

// Ths file is reponsible for handeling cookie management in the app
import { createCookieSessionStorage, redirect, Session } from "@remix-run/node";

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
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

// api for creating userSession on login form submit request
export async function createUserSession(userId: string, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}
