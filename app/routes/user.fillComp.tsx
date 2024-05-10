// Fill complain form for the user
// import { useContext } from 'react';
import Form from "../components/form";
import { useUserContext } from "~/context/userContext";

export const action = () => {
  console.log("hey");
  return null;
};
export default function Comp() {
  const user = useUserContext();
  console.log(user);
  return <Form name={user.name} />;
}
