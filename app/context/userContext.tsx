import { $Enums } from "@prisma/client";
import { createContext, useContext } from "react";

interface User {
  name: string;
  id:string,
  email:string
  role: $Enums.Role;
}

export const UserContext = createContext<User | undefined | null>(undefined);

export function useUserContext() {
  const user = useContext(UserContext);

  if (user === undefined || user == null) {
    throw new Error("userContext should be used with User pages");
  }

  return user;
}
