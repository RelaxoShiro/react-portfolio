import React, { DragEvent } from "react";

const DndSidebar: React.FC = () => {
  const onDragStart = (event: DragEvent, nodeType: string): void => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="float-right fixed z-20 bg-blue-300 rounded-lg ">
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "selectorNode")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "selectorNode")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "selectorNode")}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};

export default DndSidebar;
