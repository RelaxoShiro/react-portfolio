import { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useReactFlow,
  Panel,
  useEdgesState,
} from "reactflow";
import CustomNode from "./CustomNode";
import ELK from "elkjs";
import { FiSave, FiDownloadCloud, FiPlus } from "react-icons/fi";
import "reactflow/dist/style.css";
const flowKey = "example-flow";

const getNodeId = () => `randomnode_${+new Date()}`;
const nodeTypes = {
  selectorNode: CustomNode,
};
const initialNodes = [
  {
    id: "1",
    data: { label: "Node 1", title: "4444", desc: "aaaaaaa" },
    type: "selectorNode",
    position: { x: 100, y: 100 },
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: "a", source: "1", target: "2", type: "" }];

const SaveRestore = () => {
  const reactFlowWrapper = useRef(null);
  //@ts-ignore
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();
  let id = 1;
  const getId = () => `${id++}`;
  const { project } = useReactFlow();
  const connectingNodeId = useRef(null);
  const onConnect = useCallback(
    (params: any) => setEdges((eds: any) => addEdge(params, eds)),
    [setEdges]
  );
  const onSave = useCallback(() => {
    if (rfInstance) {
      //@ts-ignore
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey)!);

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport, setEdges]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: "" + getNodeId(),
      type: "selectorNode",
      data: { label: "Added node" },
      position: {
        x: Math.random() * window.innerWidth - 200,
        y: Math.random() * window.innerHeight,
      },
      selected: false,
      dragging: false,
    };
    //@ts-ignore
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);
  const onConnectStart = useCallback((_: any, { nodeId }: any) => {
    connectingNodeId.current = nodeId;
  }, []);
  const elk = new ELK();

  const useLayoutedElements = () => {
    const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
    const defaultOptions = {
      "elk.algorithm": "layered",
      "elk.layered.spacing.nodeNodeBetweenLayers": 100,
      "elk.spacing.nodeNode": 80,
    };

    const getLayoutedElements = useCallback(
      (options: any) => {
        const layoutOptions = { ...defaultOptions, ...options };
        const graph = {
          id: "root",
          layoutOptions: layoutOptions,
          children: getNodes(),
          edges: getEdges(),
        };

        elk.layout(graph).then(({ children }: any) => {
          // By mutating the children in-place we saves ourselves from creating a
          // needless copy of the nodes array.
          children.forEach((node: any) => {
            node.position = { x: node.x, y: node.y };
          });

          setNodes(children);
          window.requestAnimationFrame(() => {
            fitView();
          });
        });
      },
      [defaultOptions, fitView, getEdges, getNodes, setNodes]
    );

    return { getLayoutedElements };
  };
  const { getLayoutedElements } = useLayoutedElements();

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      //@ts-ignore
      onInit={setRfInstance}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectStart={onConnectStart}
      fitView
    >
      <Panel position="top-right">
        <button
          className="border-2 w-12 h-12 rounded-full border-black"
          onClick={onSave}
        >
          <FiSave className="w-6 h-6 "></FiSave>
        </button>
        <button
          className="border-2  w-12 h-12  rounded-full border-black"
          onClick={onRestore}
        >
          <FiDownloadCloud className="w-6 h-6 "></FiDownloadCloud>
        </button>
        <button
          className="border-2 w-12 h-12 items-center rounded-full border-black"
          onClick={onAdd}
        >
          <FiPlus className="w-6 h-6 "></FiPlus>
        </button>
        <p></p>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "layered",
              "elk.direction": "DOWN",
            })
          }
        >
          vertical layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "layered",
              "elk.direction": "RIGHT",
            })
          }
        >
          horizontal layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "org.eclipse.elk.layered",
            })
          }
        >
          radial layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({
              "elk.algorithm": "org.eclipse.elk.force",
            })
          }
        >
          force layout
        </button>
      </Panel>
    </ReactFlow>
  );
};
export default () => (
  <ReactFlowProvider>
    <SaveRestore />
  </ReactFlowProvider>
);
