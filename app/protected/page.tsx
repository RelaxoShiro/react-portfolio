import AppWrapper from "@/components/AppWrapper";
import Flow from "@/components/Flow";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { resolve } from "path";
export default async function ProtectedRoute() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <AppWrapper></AppWrapper>
    </>
  );
}
