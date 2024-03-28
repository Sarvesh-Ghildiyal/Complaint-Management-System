import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CMS Thdc-ihet" },
    { name: "description", content: "Complain Management System for Thdc-ihet college" },
  ];
};

export default function Index() {
  return (
   <div>First page for the app
    <p>Would have app desc and links</p>
   </div>
  );
}
