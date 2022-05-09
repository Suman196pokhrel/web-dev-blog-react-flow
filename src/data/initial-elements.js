import React from 'react';
import { MarkerType } from 'react-flow-renderer';

const coordiantes = {
  courseComp: {x:150,y:900}
}

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
  {
    id:'courseComp',
    data:{label:"Course Contents"},
    position:coordiantes.courseComp
  },
  {
    id:"courseComp_1",
    data:{label:"Fundamentals"},
    position:{x:coordiantes.courseComp.x+250,y:coordiantes.courseComp.y}
  },
  {
    id:'courseHTML',
    data:{label:"HTML"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y}
  },
  {
    id:'courseCSS',
    data:{label:"CSS"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y+50}
  },
  {
    id:'courseJS',
    data:{label:"JavaScript"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y+100}
  },

  {
    id:"courseComp_2",
    data:{label:"CSS Frameworks"},
    position:{x:coordiantes.courseComp.x+250,y:coordiantes.courseComp.y +200}
  },
  {
    id:'bootstrap',
    data:{label:"Bootstrap"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +200}
  },

  {
    id:"jquery",
    data:{label:"JQUery"},
    position:{x:coordiantes.courseComp.x+250,y:coordiantes.courseComp.y +300}
  },
  {
    id:"cmd",
    data:{label:"Command Line"},
    position:{x:coordiantes.courseComp.x+250,y:coordiantes.courseComp.y +400}
  },
  {
    id:"backend",
    data:{label:"Backend Web Dev"},
    position:{x:coordiantes.courseComp.x+250,y:coordiantes.courseComp.y +500}
  },
  {
    id:"nodejs1",
    data:{label:"Node JS"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +500}
  },
  {
    id:"expressjs",
    data:{label:"Express JS"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +550}
  },
  {
    id:"api",
    data:{label:"API's"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +600}
  },
  {
    id:"git1",
    data:{label:"Git & GitHub"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +650}
  },
  {
    id:"ejs",
    data:{label:"EJS"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +700}
  },
  {
    id:"database",
    data:{label:"Databases"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +750}
  },
  {
    id:"databaseSQL",
    data:{label:"SQL"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +750}
  },
  {
    id:"databaseMongo",
    data:{label:"MongoDB-Mongoose"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +800}
  },
  {
    id:"auth",
    data:{label:"Authentication"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +850}
  },
  {
    id:"username",
    data:{label:"Register with UserName"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +900}
  },
  {
    id:"encrypt",
    data:{label:"Database Encryption"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +980}
  },
  {
    id:"hashing",
    data:{label:"Hashing Passwords"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +1050}
  },
  {
    id:"salts",
    data:{label:"Salts & Hashing Passwords with Bcrypt"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +1100}
  },
  {
    id:"cookies",
    data:{label:"Cookies and Sessions"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +1150}
  },
  {
    id:"passportjs",
    data:{label:"Passport JS For OAuth Google Sign-IN"},
    position:{x:coordiantes.courseComp.x+650,y:coordiantes.courseComp.y +1250}
  },

  {
    id:"reactjs",
    data:{label:"React JS"},
    position:{x:coordiantes.courseComp.x+450,y:coordiantes.courseComp.y +1300}
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
  {
    id:"course-courseComp",
    source:'course',
    target:'courseComp',
    animated:true,
    label:"I took my time with this one and completed all the Stuff without skips "
  },
  {
    id:"courseComp-courseComp_1",
    source:'courseComp',
    target:'courseComp_1',
    animated:true,
  },
  {
    id:"courseComp_1-courseHTML",
    source:'courseComp_1',
    target:'courseHTML',
    animated:false,
  },
  {
    id:"courseComp_1-courseCSS",
    source:'courseComp_1',
    target:'courseCSS',
    animated:false,
  },
  {
    id:"courseComp1-courseJS",
    source:'courseComp_1',
    target:'courseJS',
    animated:false,
  },
  {
    id:"courseComp-courseComp2",
    source:'courseComp',
    target:'courseComp_2',
    animated:false,
  },
  {
    id:"courseComp2-bootstrap",
    source:'courseComp_2',
    target:'bootstrap',
    animated:false,
  },
  {
    id:"courseComp-jquery",
    source:'courseComp',
    target:'jquery',
    animated:false,
  },
  {
    id:"courseComp-cmd",
    source:'courseComp',
    target:'cmd',
    animated:false,
  },
  {
    id:"courseComp-backend",
    source:'courseComp',
    target:'backend',
    animated:true,
  },
  {
    id:"backend-nodejs1",
    source:'backend',
    target:'nodejs1',
    animated:false,
  },
  {
    id:"backend-expressjs",
    source:'backend',
    target:'expressjs',
    animated:false,
  },
  {
    id:"backend-api",
    source:'backend',
    target:'api',
    animated:false,
  },
  {
    id:"backend-git1",
    source:'backend',
    target:'git1',
    animated:false,
  },
  {
    id:"backend-ejs",
    source:'backend',
    target:'ejs',
    animated:false,
  },
  {
    id:"backend-database",
    source:'backend',
    target:'database',
    animated:true,
  },
  {
    id:"database-databaseSQL",
    source:'database',
    target:'databaseSQL',
    animated:false,
  },
  {
    id:"database-databaseMongo",
    source:'database',
    target:'databaseMongo',
    animated:false,
  },
  {
    id:"backend-auth",
    source:'backend',
    target:'auth',
    animated:true,
  },
  {
    id:"auth-username",
    source:'auth',
    target:'username',
    animated:false,
  },
  {
    id:"auth-encrypt",
    source:'auth',
    target:'encrypt',
    animated:false,
  },
  {
    id:"auth-salts",
    source:'auth',
    target:'salts',
    animated:false,
  },
  {
    id:"auth-cookies",
    source:'auth',
    target:'cookies',
    animated:false,
  },
  {
    id:"auth-passportjs",
    source:'auth',
    target:'passportjs',
    animated:false,
  },
  {
    id:"courseComp-reactjs",
    source:'courseComp',
    target:'reactjs',
    animated:true,
  },
]





