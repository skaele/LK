import{j as s,r as d,n as j}from"./vendor-08ab745b.js";import{bn as g,G as p,h as b,bj as f,bo as m,aJ as P,ai as k,_ as O,P as E,bp as L,bq as R,br as S,Z as T}from"./index-0892b83f.js";const h={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Научная деятельность":4,"Находится в разработке":5},v=(a,l)=>a?Object.values(a).filter(({getIsVisibleForCurrentUser:e})=>e&&l?e(l):!0).reduce((e,r)=>{const n=r?.group?g[r.group]:g.OTHER;return e[n]||(e[n]={}),e[n][r.id]=r,e},{}):{},G=({title:a,links:l,doNotShow:o,orientation:e,background:r,shadow:n=!0,mode:c})=>s.jsxs(p,{d:"column",children:[s.jsx(b,{size:4,align:"left",bottomGap:!0,children:a}),s.jsxs(p,{gap:"8px",$wrap:!0,children:[Object.values(l).map(t=>{if(t?.show!==!1&&o!==t?.id)return s.jsx(f,{background:r,orientation:e,mode:c,shadow:n,...t,color:t.color.length?t.color:"blue"},t.id)}),o!=="all"&&s.jsx(m,{})]})]}),A=()=>{const{visibleRoutes:a,allRoutes:l}=P.useMenu(),[o,e]=d.useState(null),[r,n]=d.useState(""),c=j(T.peTeacher),t=d.useMemo(()=>v(a,c),[a,c]),{data:{user:x}}=k.useUser();return a?s.jsx(O,{padding:"10px",children:s.jsxs(E,{children:[s.jsx(L,{placeholder:"Поиск разделов",whereToSearch:l??{},searchEngine:R,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!o&&s.jsx(p,{d:"column",gap:"24px",children:r.length===0&&Object.keys(t).sort((u,i)=>h[u]-h[i]).map(u=>{const i=t[u];return s.jsx(G,{title:u==="Кадровая среда"&&x?.user_status==="stud"?"Договоры и оплаты":u,doNotShow:"all",align:"left",links:i},u)})}),s.jsx(S,{pages:o})]})}):null};export{A as default};
