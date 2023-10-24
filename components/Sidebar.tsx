import React, { DragEvent } from "react";

const DndSidebar: React.FC = () => {
  const onDragStart = (event: DragEvent, nodeType: string): void => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <section
      style={{ height: "calc(100vh - 63px)" }}
      className=" lg:visible invisible  flex-auto w-1/5 order-first sticky   left-0 top-0 bg-white border-r border-black z-1"
    >
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className=" p-2 border-2 border-slate-300 flex gap-4 hover:bg-slate-300 rounded-md m-4 font-semibold"
        onDragStart={(event) => onDragStart(event, "selectorNode")}
        draggable
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
        </svg>
        Story
      </div>{" "}
      <div
        className=" p-2 border-2 border-slate-300 flex gap-4 hover:bg-slate-300 rounded-md m-4 font-semibold"
        onDragStart={(event) => onDragStart(event, "selectorNode")}
        draggable
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
        </svg>
        Question
      </div>{" "}
      <div
        className=" p-2 border-2 border-slate-300 flex gap-4 hover:bg-slate-300 rounded-md m-4 font-semibold"
        onDragStart={(event) => onDragStart(event, "selectorNode")}
        draggable
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
        </svg>
        Character
      </div>
    </section>
  );
};

export default DndSidebar;
