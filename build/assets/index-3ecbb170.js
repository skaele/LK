import{j as a,r as p,Z as j}from"./vendor-4a800e6d.js";import{aS as x,r as g,T as f,aM as m,aT as P,am as b,Y as k,y as T,z as O,aj as S,aU as E,aV as L,G as R}from"./index-7ab5fc9f.js";const h={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Находится в разработке":4},v=(r,o)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&o?e(o):!0).reduce((e,t)=>{const n=t!=null&&t.group?x[t.group]:x.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},G=({title:r,links:o,doNotShow:l,restricted:e,orientation:t,background:n,shadow:c=!0,mode:i})=>a.jsxs(g,{d:"column",children:[a.jsx(f,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(o).map(s=>{if((s==null?void 0:s.show)!==!1&&l!==(s==null?void 0:s.id))return a.jsx(m,{background:n,orientation:t,restricted:e,mode:i,shadow:c,...s,color:s.color.length?s.color:"blue"},s.id)}),l!=="all"&&a.jsx(P,{})]})]}),M=()=>{const{visibleRoutes:r,allRoutes:o}=b.useMenu(),[l,e]=p.useState(null),[t,n]=p.useState(""),c=j(R.peTeacher),i=p.useMemo(()=>v(r,c),[r,c]),{data:{user:s}}=k.useUser();return r?a.jsx(T,{padding:"10px",children:a.jsxs(O,{children:[a.jsx(S,{placeholder:"Поиск разделов",whereToSearch:o??{},searchEngine:E,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!l&&a.jsx(g,{d:"column",gap:"24px",children:t.length===0&&Object.keys(i).sort((u,d)=>h[u]-h[d]).map(u=>{const d=i[u];return a.jsx(G,{title:u==="Кадровая среда"&&(s==null?void 0:s.user_status)==="stud"?"Договоры и оплаты":u,doNotShow:"all",align:"left",links:d},u)})}),a.jsx(L,{pages:l})]})}):null};export{M as default};
