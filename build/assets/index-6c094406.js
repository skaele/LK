import{r as n,j as e,a8 as r,bp as l}from"./vendor-84bdec13.js";import{cf as c,d as x,U as p,P as g,cg as h,o as t,ch as d,E as f,N as j,Q as m,a8 as k}from"./index-2258ba16.js";const E=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),o=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>k.clearAll()})};return n.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(p,{padding:"10px",children:e.jsxs(g,{topRightCornerElement:e.jsx(r,{to:h,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(d,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:o,width:"100%"}):null]})})};export{E as default};
