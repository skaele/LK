import{j as r,aa as o,cB as l,y as c}from"./vendor-3c67dcca.js";import{R as x,r as s,aJ as u,B as d,aK as m,M as a}from"./index-ba49d757.js";function p(e){return e.map(n=>{const t=n.roles.map(i=>i==="Initiator"?"I":i==="Approver"?"A":"N").join("");return`${n.employeeId}${t?`-${t}`:""}`})}const j=({text:e,errorCodes:n})=>r.jsx(x,{text:e,children:r.jsxs(s,{d:"column",gap:"1rem",children:[r.jsx(o,{to:u,children:r.jsx(d,{text:"На главную",icon:r.jsx(l,{})})}),!!(n!=null&&n.length)&&r.jsx(m,{forceState:!0,title:r.jsx(a,{type:"failure",fontSize:"0.95rem",title:r.jsxs(s,{children:[r.jsx("span",{children:"Суть ошибки"}),r.jsx(c,{})]})}),children:r.jsx(a,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:n.map(t=>r.jsxs("div",{children:["Error: ",t]},t))})})]})}),A=({jobRoles:e})=>r.jsx(j,{text:e?"У вас нет доступа к этому разделу. Обратитесь к администратору.":"Сервис временно недоступен",errorCodes:e!==null?p(e):[]});export{A,j as F};
