import { StrictMode } from "react";
import Flow from "../components/Flow";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <>
      <div className="flex  " style={{ height: "calc(100vh - 70px)" }}>
        <Sidebar />
        <main className="w-[100%]">
          <StrictMode>
            <Flow />
          </StrictMode>
        </main>
      </div>
    </>
  );
}
