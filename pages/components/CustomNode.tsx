import { useState } from "react";
import { Handle, useReactFlow, Position } from "reactflow";

const CustomNode = ({ data, id, sourcePosition }: any) => {
  const { setNodes } = useReactFlow();

  const onChange = (evt: any, property: any) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            [property]: evt.target.value,
          };
        }
        return node;
      })
    );
  };
  return (
    <div className="container border-[1px] w-72 border-opacity-20 h-[300px] border-black rounded-t-xl  bg-white">
      <Handle
        type="target"
        id="a"
        position={Position.Left}
        isConnectable={true}
      />
      <div className="leading-none p-4 text-white  h-28 rounded-t-xl bg-cover bg-[url('/img/img1.png')]">
        <input
          onChange={(evt) => onChange(evt, "title")}
          type="text"
          value={data.title}
          className="text-[12px] bg-transparent overflow-hidden focus:resize-none focus:outline-none border-0 "
        ></input>
        <input
          onChange={(evt) => onChange(evt, "label")}
          name="label"
          type="text"
          value={data.label}
          className="text-[21px] bg-transparent overflow-hidden focus:resize-none focus:outline-none border-0 "
        ></input>
      </div>
      <div className="p-4 leading-none w-full h-full ">
        <p className="text-[9px] text-gray-300">description</p>
        <textarea
          name="label"
          onChange={(evt) => onChange(evt, "desc")}
          value={data.desc}
          className="text-[16px] resize-none  focus:resize-none focus:outline-none border-0 rounded-md bg-gray-200 w-[100%] h-[40%] "
        ></textarea>
      </div>
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        isConnectable={true}
      />
    </div>
  );
};

export default CustomNode;
