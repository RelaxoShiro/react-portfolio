"use client";
import { StrictMode, Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import { ReactFlowProvider } from "reactflow";
import Flow from "./Flow";
import Loading from "@/app/loading";

export default function Home() {
  return (
    <>
      <div className="flex  " style={{ height: "calc(100vh - 70px)" }}>
        <Sidebar />

        <Suspense fallback={<Loading />}>
          <main className="w-[100%]">
            <ReactFlowProvider>
              <StrictMode>
                <Flow />
              </StrictMode>
            </ReactFlowProvider>
          </main>
        </Suspense>
      </div>
    </>
  );
}
