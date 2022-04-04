import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const nodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          This is a <strong>default node</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          This one has a <strong>custom style</strong>
        </>
      ),
    },
    position: { x: 400, y: 100 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 180,
    },
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {
      label: 'Another default node',
    },
  },
  {
    id: '5',
    data: {
      label: 'Node id: 5',
    },
    position: { x: 250, y: 325 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
    },
    position: { x: 100, y: 480 },
  },
  {
    id: '7',
    type: 'output',
    data: { label: 'Another output node' },
    position: { x: 400, y: 450 },
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: 'animated edge',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    label: 'edge with arrow head',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'step',
    style: { stroke: '#f6ab6c' },
    label: 'a step edge',
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
];


export const myNodes = [
  {
    id: 'title',
    type: 'input',
    data: {
      label: (
        <>
        <p>My Web Dev journey</p>
        
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },

  {
    id:'html',
    data:{label:"HTML"},
    position:{x:50,y:100}
  },
  {
    id:'css',
    data:{label:"CSS"},
    position:{x:-150,y:200}
  },
  {
    id:'bootStrap',
    data:{label:"BootStrap"},
    position:{x:150,y:300}
  },
  {
    id:'git',
    data:{label:"Git / GitHub"},
    position:{x:-150,y:400}
  },
  {
    id:'jsTricks',
    data:{label:"Minor Js Tricks"},
    position:{x:150,y:500}
  },
  {
    id:'trendyClones',
    data:{label:"Trendy Clones Using React js"},
    position:{x:-150,y:600}
  },
  {
    id:'smallPeek',
    data:{label:"Small Peek At MUI"},
    position:{x:150,y:700}
  },
  {
    id:'course',
    data:{label:"First Complete Web Dev Course"},
    position:{x:-150,y:800}
  },
  
  
]

export const myEdges = [
  // { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  {
    id:"title-html",
    source:'title',
    target:'html',
    animated:true,
    label:"Like everyone i started out with html"
  },
  {
    id:"html-css",
    source:'html',
    target:'css',
    animated:true,
    label:"Then it was time to add come colors and style"
  },
  {
    id:"css-bootStrap",
    source:'css',
    target:'bootStrap',
    animated:true,
    label:"After making some basic shadows and colors i got excited and tried out smthing new"
  },
  {
    id:"bs-git",
    source:'bootStrap',
    target:'git',
    animated:true,
    label:"but i could not always store my projects in my local drives right? in one of the tutorials i found out about this beast"
  },
  {
    id:"git-jsTricks",
    source:'git',
    target:'jsTricks',
    animated:true,
    label:
      `
        After trying out some git comands and pushing some minor projects, js was looking pretty interesting 
      
    `
  },
  {
    id:"jsTricks-tcurj",
    source:'jsTricks',
    target:'trendyClones',
    animated:true,
    label:"(me who just learnt the syntax of js)ok then, i know html,css,bootstrap and now even js right? lets make smthing serious"
  },
  {
    id:"tcurj-smallPeek",
    source:'trendyClones',
    target:'smallPeek',
    animated:true,
    label:"even though i was just copy pasting onlnie tutorials i got really interested to learn MUI, and i became a MUI Fanboy "
  },
  {
    id:"smallPeek-course",
    source:'smallPeek',
    target:'course',
    animated:true,
    label:"as i looked back , i saw that i was just touching surfaces of all tools without any seriuous study. Then i finally decied to pick web dev seriously and choose an online course"
  },
]