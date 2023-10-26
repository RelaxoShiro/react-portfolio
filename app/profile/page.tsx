import AppWrapper from "@/components/AppWrapper";
import Flow from "@/components/Flow";
import { url } from "inspector";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { resolve } from "path";
import { IoChevronBackOutline } from "react-icons/io5";
export default async function ProtectedRoute() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div
        className="flex h-screen bg-slate-800 "
        style={{ height: "calc(100vh - 70px)" }}
      >
        <div className="mx-auto w-full mt-[5%] gap-12">
          <div className="flex m-auto mb-24 text-white items-center font-bold text-2xl content-center w-1/3">
            <Link
              href={"/"}
              className="w-12 h-12 content-center  mr-4  rounded-2xl bg-slate-900"
            >
              <div className=" pl-2.5 items-center py-2.5">
                <IoChevronBackOutline />
              </div>
            </Link>
            <h1>My Account</h1>
          </div>
          <div className="flex content-center  text-white m-auto mb-6 w-1/3">
            <Image
              className="rounded-full "
              src={session?.user?.image || "public/avatar.png"}
              alt=" public/avatar.png "
              width={60}
              height={60}
            />
            <div className="leading-none my-auto flex-col flex  pl-2">
              <p className="float-left mb-2">{session.user.name}</p>
              <span className="font-semibold  inline-flex items-center gap-1 pt-1  inset-y-auto px-1.5 pb-0.5 rounded-md bg-transparent text-[11px] bg-gradient-to-br from-purple-600 to-blue-500 ring-white  ring-2">
                FREE
              </span>
            </div>
          </div>

          <main className="justify-center p-6  h-fit w-1/3  m-auto flex flex-col gap-7  pt-8 pb-8 shadow-2xl bg-slate-900 rounded-lg">
            <div className="justify-between flex content-center ">
              <div className="text-white ">
                <p className="text-xs text-gray-400">Display Name</p>
                <p className="font-semibold"> {session.user.name}</p>
              </div>
              <button className="w-16 h-8 text-white text-sm rounded-md bg-slate-800">
                Edit
              </button>
            </div>
            <div className="justify-between flex content-center ">
              <div className="text-white ">
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-semibold">{session.user.email}</p>
              </div>
              <button className="w-16 h-8 text-white text-sm rounded-md bg-slate-800">
                Edit
              </button>
            </div>
            <div className="justify-between flex content-center ">
              <div className="text-white ">
                <p className="text-xs text-gray-400">Password</p>
                <input
                  className="bg-transparent "
                  id="password"
                  type="password"
                  disabled={true}
                  value="awdnawidawd"
                />
              </div>
              <button className="w-20 h-8 text-white text-sm rounded-md bg-slate-800">
                Change
              </button>
            </div>
          </main>
          <main className=" p-6  h-fit w-1/3 justify-center m-auto flex flex-col mt-12 gap-7  pt-8 pb-8 shadow-2xl bg-slate-900 rounded-lg">
            <div className="justify-between flex content-center ">
              <div className="text-white ">
                <p className="text-xs text-gray-400">Subscription</p>
                <p className="font-semibold">Free</p>
              </div>
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Upgrade to Pro
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
