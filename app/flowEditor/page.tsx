"use client";
import { StrictMode } from "react";
import Flow from "../../components/Flow";
import Sidebar from "@/components/Sidebar";
import { ReactFlowProvider } from "reactflow";

export default function Home() {
  return (
    <>
      <div className="flex  " style={{ height: "calc(100vh - 70px)" }}>
        <Sidebar />
        <main className="w-[100%]">
          <ReactFlowProvider>
            <StrictMode>
              <Flow />
            </StrictMode>
          </ReactFlowProvider>
        </main>
      </div>
    </>
  );
}
