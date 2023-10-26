import { getServerSession } from "next-auth";
import getUsernameButton from "./getUsernameButton";
export default async function ServerActionPage() {
  const getUsername = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not Logged In";
  };
  return <div></div>;
}
