import{j as a,r as p,q as j}from"./vendor-84bdec13.js";import{aQ as h,E as g,h as f,aK as m,aR as P,am as b,a2 as k,U as R,P as E,aj as O,aS as S,aT as T,R as L}from"./index-2258ba16.js";const x={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},v=(r,o)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&o?e(o):!0).reduce((e,t)=>{const n=t!=null&&t.group?h[t.group]:h.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},w=({title:r,links:o,doNotShow:l,orientation:e,background:t,shadow:n=!0,mode:u})=>a.jsxs(g,{d:"column",children:[a.jsx(f,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(o).map(s=>{if((s==null?void 0:s.show)!==!1&&l!==(s==null?void 0:s.id))return a.jsx(m,{background:t,orientation:e,mode:u,shadow:n,...s,color:s.color.length?s.color:"blue"},s.id)}),l!=="all"&&a.jsx(P,{})]})]}),A=()=>{const{visibleRoutes:r,allRoutes:o}=b.useMenu(),[l,e]=p.useState(null),[t,n]=p.useState(""),u=j(L.peTeacher),s=p.useMemo(()=>v(r,u),[r,u]),{data:{user:i}}=k.useUser();return r?a.jsx(R,{padding:"10px",children:a.jsxs(E,{children:[a.jsx(O,{placeholder:"Поиск разделов",whereToSearch:o??{},searchEngine:S,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!l&&a.jsx(g,{d:"column",gap:"24px",children:t.length===0&&Object.keys(s).sort((c,d)=>x[c]-x[d]).map(c=>{const d=s[c];return a.jsx(w,{title:c==="Кадровая среда"&&(i==null?void 0:i.user_status)==="stud"?"Договоры и оплаты":c,doNotShow:"all",align:"left",links:d},c)})}),a.jsx(T,{pages:l})]})}):null};export{A as default};
