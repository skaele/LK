import{j as a,r as p,Z as j}from"./vendor-f1fdae2f.js";import{aR as x,r as g,T as f,aL as m,aS as P,al as b,V as k,v as T,w as L,ai as O,aT as R,aU as S,y as v}from"./index-415ac6e5.js";const h={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Находится в разработке":4},E=(r,l)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&l?e(l):!0).reduce((e,t)=>{const n=t!=null&&t.group?x[t.group]:x.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},w=({title:r,links:l,doNotShow:o,restricted:e,orientation:t,background:n,shadow:c=!0,mode:i})=>a.jsxs(g,{d:"column",children:[a.jsx(f,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(l).map(s=>{if((s==null?void 0:s.show)!==!1&&o!==(s==null?void 0:s.id))return a.jsx(m,{background:n,orientation:t,restricted:e,mode:i,shadow:c,...s,color:s.color.length?s.color:"blue"},s.id)}),o!=="all"&&a.jsx(P,{})]})]}),V=()=>{const{visibleRoutes:r,allRoutes:l}=b.useMenu(),[o,e]=p.useState(null),[t,n]=p.useState(""),c=j(v.peTeacher),i=p.useMemo(()=>E(r,c),[r,c]),{data:{user:s}}=k.useUser();return r?a.jsx(T,{padding:"10px",children:a.jsxs(L,{children:[a.jsx(O,{placeholder:"Поиск разделов",whereToSearch:l??{},searchEngine:R,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!o&&a.jsx(g,{d:"column",gap:"24px",children:t.length===0&&Object.keys(i).sort((u,d)=>h[u]-h[d]).map(u=>{const d=i[u];return a.jsx(w,{title:u==="Кадровая среда"&&(s==null?void 0:s.user_status)==="stud"?"Договоры и оплаты":u,doNotShow:"all",align:"left",links:d},u)})}),a.jsx(S,{pages:o})]})}):null};export{V as default};
