import { StrictMode } from "react";
import Flow from "../components/Flow";
export default function Home() {
  return (
    <>
      <div className="flex">
        <section className=" lg:visible invisible flex-auto w-1/5 order-first sticky h-screen left-0 top-0 bg-white border-r border-black z-1">
          <h1 className="py-6 w-full text-center px-2 text-4xl font-bold">
            VN Designer
          </h1>
          <p className="py-2 px-2 text-gray-800 text-sm">
            Craft immersive, branching stories with our non-linear storytelling
            editor. Visualize characters, use an intuitive flowchart, and
            collaborate with ease. Unlock endless creative possibilities.
          </p>

          <div className="min-w-fit h-1/2"></div>
          <div className="bottom-0 absolute w-full ">
            <a className="" href="#">
              <div className="group overflow-hidden hover:h-32 transition-all duration-500 hover:bg-orange-300 max-w-26 pl-2 h-12 border-l-0 border-r-0 border border-black">
                <p className="font-medium">Tips</p>
                <ul className=" opacity-0 group-hover:opacity-100 text-xs transition-all duration-500">
                  <li>
                    Hold the Shift key to select mutliple nodes and drag them
                  </li>
                  <li>
                    You can drag and edge and a new node will be created on drop
                  </li>
                  <li>
                    Currently we don't have a auto-save function so dont forget
                    to save frequently
                  </li>
                  <li>Click on a Connection to see its flow</li>
                </ul>
              </div>
            </a>
            <div className=" group overflow-hidden hover:h-32 hover:bg-blue-300 transition-all duration-500 max-w-26 pl-2 h-12 border-l-0 border-r-0  border-t-0 border border-black">
              <p className=" font-medium">ABOUT</p>
              <p className=" opacity-0 group-hover:opacity-100 text-xs transition-all duration-500">
                I'm a creative and experienced front-end designer and developer
                with a passion for crafting beautiful, user-friendly websites.
                From concept to code, I bring a unique blend of artistry and
                technical skill to every project.
              </p>
            </div>
            <div className="hover:bg-green-300 grid content-end pb-2 pl-2 h-12   border-r-0 border-l-0  border-t-0 border border-black">
              <p className=" font-medium">CONTACT</p>
            </div>
          </div>
        </section>
        <main className="w-[100%]">
          <StrictMode>
            <Flow />
          </StrictMode>
        </main>
      </div>
    </>
  );
}
