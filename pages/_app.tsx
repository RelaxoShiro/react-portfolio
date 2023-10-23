import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactFlowProvider } from "reactflow";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactFlowProvider>
      <Navbar />
      <Component {...pageProps} />
    </ReactFlowProvider>
  );
}
