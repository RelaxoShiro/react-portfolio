import { StrictMode } from "react";
import Flow from "../components/Flow";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>
        Read <Link href="/_flowEditor">this page!</Link>
      </h1>
    </>
  );
}
