var k=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var j=(e,s,a)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,f=(e,s)=>{for(var a in s||(s={}))T.call(s,a)&&j(e,a,s[a]);if(h)for(var a of h(s))E.call(s,a)&&j(e,a,s[a]);return e},v=(e,s)=>L(e,O(s));import{j as l,r as p,q as m}from"./vendor-3c67dcca.js";import{aU as P,r as g,T as G,aL as R,aV as S,an as V,a9 as $,J as w,N as y,aW as F,aX as H,aY as M,H as q,s as z}from"./index-15ca9195.js";const b={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},A=(e,s,a)=>e?Object.values(e).filter(({getIsVisibleForCurrentUser:n,guidsAllowed:t})=>(!(n&&s)||n(s))&&t?t.includes(a||""):!0).reduce((n,t)=>{const o=t!=null&&t.group?P[t.group]:P.OTHER;return n[o]||(n[o]={}),n[o][t.id]=t,n},{}):{},B=({title:e,links:s,doNotShow:a,orientation:i,background:n,shadow:t=!0,mode:o})=>l.jsxs(g,{d:"column",children:[l.jsx(G,{size:4,align:"left",bottomGap:!0,children:e}),l.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(s).map(r=>{if((r==null?void 0:r.show)!==!1&&a!==(r==null?void 0:r.id))return l.jsx(R,v(f({background:n,orientation:i,mode:o,shadow:t},r),{color:r.color.length?r.color:"blue"}),r.id)}),a!=="all"&&l.jsx(S,{})]})]}),U=()=>{const{visibleRoutes:e,allRoutes:s}=V.useMenu(),[a,i]=p.useState(null),[n,t]=p.useState(""),o=m(q.peTeacher),r=m(z.userGuid),x=p.useMemo(()=>A(e,o,r),[e,o]),{data:{user:c}}=$.useUser();return e?l.jsx(w,{padding:"10px",children:l.jsxs(y,{children:[l.jsx(F,{placeholder:"Поиск разделов",whereToSearch:s!=null?s:{},searchEngine:H,setResult:i,setExternalValue:t,validationCheck:!0,loadingOnType:!0}),!a&&l.jsx(g,{d:"column",gap:"24px",children:n.length===0&&Object.keys(x).sort((u,d)=>b[u]-b[d]).map(u=>{const d=x[u];return l.jsx(B,{title:u==="Кадровая среда"&&(c==null?void 0:c.user_status)==="stud"?"Договоры и оплаты":u,doNotShow:"all",align:"left",links:d},u)})}),l.jsx(M,{pages:a})]})}):null};export{U as default};
