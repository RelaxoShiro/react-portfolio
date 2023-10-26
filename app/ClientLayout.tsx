"use client";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { NextAuthProvider } from "./components/SessionProvider";
type Props = {
  children: ReactNode;
};
function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NextAuthProvider>
        <Navbar />
        {children}
      </NextAuthProvider>
    </>
  );
}

export default ClientLayout;
