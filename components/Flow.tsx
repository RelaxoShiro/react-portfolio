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
  MiniMap,
  Controls,
  SmoothStepEdge,
} from "reactflow";
import CustomNode from "./CustomNode";
import ELK from "elkjs";
import { FiSave, FiDownloadCloud, FiPlus } from "react-icons/fi";
import "reactflow/dist/style.css";
const flowKey = "example-flow";
import toast, { Toaster } from "react-hot-toast";
const getNodeId = () => `randomnode_${+new Date()}`;
const nodeTypes = {
  selectorNode: CustomNode,
};
const onLoad = (reactFlowInstance: { fitView: () => any }) =>
  reactFlowInstance.fitView();

const initialNodes = [
  {
    id: "1",
    elementType: "node",
    sourcePosition: "right",
    type: "input", // input node
    data: { label: "D1" },
    position: { x: 50, y: 25 },
  },
  {
    id: "2",
    elementType: "node",
    sourcePosition: "right",
    type: "input", // input node
    data: { label: "D2" },
    position: { x: 50, y: 125 },
  },
  {
    id: "3",
    elementType: "node",
    sourcePosition: "right",
    type: "input", // input node
    data: { label: "D3" },
    position: { x: 50, y: 225 },
  },

  {
    id: "4",
    elementType: "node",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "C1" },
    position: { x: 350, y: 25 },
  },
  {
    id: "5",
    elementType: "node",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "C2" },
    position: { x: 350, y: 125 },
  },
  {
    id: "6",
    elementType: "node",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "C3" },
    position: { x: 350, y: 225 },
  },

  {
    id: "7",
    elementType: "node",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "I1" },
    position: { x: 650, y: 25 },
  },
  {
    id: "8",
    elementType: "node",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "I2" },
    position: { x: 650, y: 125 },
  },

  {
    id: "9",
    elementType: "node",
    targetPosition: "left",
    type: "output", // output node
    data: { label: "K1" },
    position: { x: 950, y: 25 },
  },
  {
    id: "10",
    elementType: "node",
    targetPosition: "left",
    type: "output", // output node
    data: { label: "K2" },
    position: { x: 950, y: 125 },
  },
];

const initialEdges = [
  {
    id: "d1-c1",
    elementType: "edge",
    source: "1",
    target: "4",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "d1-c2",
    elementType: "edge",
    source: "1",
    target: "5",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "d2-c1",
    elementType: "edge",
    source: "2",
    target: "4",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "d2-c2",
    elementType: "edge",
    source: "2",
    target: "5",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "d2-c3",
    elementType: "edge",
    source: "2",
    target: "6",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "d3-c2",
    elementType: "edge",
    source: "3",
    target: "5",
    arrowHeadType: "arrow",
    type: "straight",
  },

  {
    id: "c1-I1",
    elementType: "edge",
    source: "4",
    target: "7",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "c1-I2",
    elementType: "edge",
    source: "4",
    target: "8",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "c2-I1",
    elementType: "edge",
    source: "5",
    target: "7",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "c2-I2",
    elementType: "edge",
    source: "5",
    target: "8",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "c3-I1",
    elementType: "edge",
    source: "6",
    target: "7",
    arrowHeadType: "arrow",
    type: "straight",
  },

  {
    id: "i1-k2",
    elementType: "edge",
    source: "7",
    target: "10",
    arrowHeadType: "arrow",
    type: "straight",
  },
  {
    id: "i2-k1",
    elementType: "edge",
    source: "8",
    target: "9",
    arrowHeadType: "arrow",
    type: "straight",
  },
];

const SaveRestore = () => {
  const nodeTypes = useMemo(
    () => ({
      selectorNode: CustomNode,
    }),
    []
  );
  const reactFlowWrapper = useRef(null);
  //@ts-ignore
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();
  let id = 10;
  const getId = () => `${id++}`;
  const initialElements = [...initialNodes, ...initialEdges];

  const [elements, setElements] = useState(initialElements);

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
        const defaultOptions2 = {
          "elk.algorithm": "layered",
          "elk.layered.spacing.nodeNodeBetweenLayers": 100,
          "elk.spacing.nodeNode": 80,
        };
        const layoutOptions = { ...defaultOptions2, ...options };
        const graph = {
          id: "root",
          layoutOptions: layoutOptions,
          children: getNodes(),
          edges: getEdges(),
        };
        //@ts-ignore
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
      [fitView, getEdges, getNodes, setNodes]
    );
    return { getLayoutedElements };
  };
  const { getLayoutedElements } = useLayoutedElements();
  const onConnectEnd = useCallback(
    (event: any) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        if (!reactFlowWrapper.current) return;

        // we need to remove the wrapper bounds, in order to get the correct position
        //@ts-ignore
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          type: "selectorNode",
          // we are removing the half of the node width (75) to center the new node
          position: project({
            x: event.clientX - left - 75,
            y: event.clientY - top,
          }),
          data: { label: `Node ${id}` },
        };
        //@ts-ignore
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          //@ts-ignore
          eds.concat({
            id,
            source: connectingNodeId.current,
            target: id,
            type: "smoothstep",
          })
        );
      }
    },
    [project]
  );
  const onElementClick = (event: any, object: any) => {
    const graphElements = [object.id];
    console.log("w1");
    setElements((els) => {
      setEdges((edges) =>
        edges.sort((a, b) => {
          console.log(edges);
          if (a.source < b.source) return -1;
          if (a.source > b.source) return 1;
          return 0;
        })
      );
      edges.forEach((el) => {
        if (graphElements.includes(el.source)) {
          graphElements.push(el.target);
          el.animated = true;

          console.log(el);
        } else {
          el.animated = false;
        }
      });

      console.log(edges);
      setEdges(edges);
      //return [...nodes, ...edges];
    });
  };

  return (
    <>
      <div ref={reactFlowWrapper}>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              //@ts-ignore
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        edgeTypes={{
          smoothstep: SmoothStepEdge, // Map the "smoothstep" type to the SmoothStepEdge component
        }}
        deleteKeyCode="Delete"
        multiSelectionKeyCode="Shift"
        onNodesChange={onNodesChange}
        onNodeClick={onElementClick}
        elements={elements}
        //@ts-ignore
        onConnectEnd={onConnectEnd}
        //@ts-ignore
        onInit={setRfInstance}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        fitView
      >
        <Panel position="top-right">
          <div className="m-4 flex gap-4">
            <button
              className="bg-blue-300 rounded-md p-2 w-[8.5rem] "
              onClick={onSave}
            >
              Save Story
            </button>
            <button
              className="bg-blue-300 rounded-md p-2 w-[8.5rem] "
              onClick={onRestore}
            >
              Load Story
            </button>
            <button
              className="bg-blue-300 rounded-md p-2 w-[8.5rem] "
              onClick={onAdd}
            >
              Add Node
            </button>
          </div>
          <div className="w-36 m-2 float-right flex-col grid grid-cols-1">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                toast.success("Autolayout applied!");
                getLayoutedElements({
                  "elk.algorithm": "layered",
                  "elk.direction": "DOWN",
                });
              }}
            >
              vertical layout
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                toast.success("Autolayout applied!");
                getLayoutedElements({
                  "elk.algorithm": "layered",
                  "elk.direction": "RIGHT",
                });
              }}
            >
              horizontal layout
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                toast.success("Autolayout applied!");
                getLayoutedElements({
                  "elk.algorithm": "org.eclipse.elk.layered",
                });
              }}
            >
              radial layout
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                toast.success("Autolayout applied!");
                getLayoutedElements({
                  "elk.algorithm": "org.eclipse.elk.force",
                });
              }}
            >
              force layout
            </button>
          </div>
        </Panel>
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Controls></Controls>
      </ReactFlow>
    </>
  );
};
function Flow() {
  return <SaveRestore />;
}
export default Flow;
