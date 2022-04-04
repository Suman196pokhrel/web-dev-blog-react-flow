import React,{useState} from 'react'


import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";

import {
  myNodes as initialNodes,
  myEdges as initialEdges,
} from "../data/initial-elements";



// const initialNodes = [
//   {
//     id: 'title',
//     type: 'input',
//     data: { label: 'Input Node' },
//     position: { x: 250, y: 25 },
//   },

//   {
//     id: 'html',
//     // you can also pass a React component as a label
//     data: { label: <div>Default Node</div> },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: '3',
//     type: 'output',
//     data: { label: 'Output Node' },
//     position: { x: 250, y: 250 },
//   },
// ]

// const initialEdges = [
//   {id:"e1-2",source:"title",target:"html",animated:true}
// ]

const onInit = (reactFlowInstance) =>
  console.log("Flow Loaded", reactFlowInstance);

function Journey() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className="flow-graph">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top.right"
      >
      
      <Controls />
        <Background color="#000000" gap={15} />
      </ReactFlow>
    </div>
  );
}

export default Journey