import { redirect } from "next/navigation";

export default function Home() {
  redirect("/users/login");
  return <div></div>;
}
