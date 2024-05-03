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

export async function createUserSession(
  userId: string,
  redirectTo: string 
  // message: string
) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

// Get session from the headers to get user ID
export async function getUserSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

// Get the user id that is required
export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    return null;
  }
  return userId;
}


// Function to get userId, and redirect to some url if not present
export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}