import{s as E,r as i,u as y,j as e,R as N}from"./vendor-3c67dcca.js";import{ct as c,a9 as b,J as z,bb as S,af as A,T as D,M as p,d as g,S as F}from"./index-7ed94462.js";const I="Физическое лицо с указанными данными не найдено",L=E.span.withConfig({componentId:"sc-1rezql9-0"})(["display:flex;margin:0 auto;gap:5px;text-align:center;"]),B=()=>{const[a,u]=i.useState(""),[o,x]=i.useState(""),d=y(c.getLoginEuzFx.pending),[m,f]=i.useState(!1),{data:{loginEuz:s}}=b.useUser(),l=()=>{c.getLoginEuzFx({fio:a,pn:o})},h=t=>{t.key==="Enter"&&l()},j=()=>{const t=s.split("Логин ").slice(1),n=[];for(const r of t)n.push(e.jsxs(L,{children:["Логин ",r.split(":")[0]," ",e.jsx("strong",{children:r.split(":")[1]})]}));return n};return e.jsx(z,{height:"100%",alignItems:"center",padding:"15px",children:e.jsxs(S,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",onKeyDown:h,noAppearanceInMobile:!0,children:[e.jsx(A,{}),e.jsx(D,{size:4,align:"left",children:"Узнать свой логин ЕУЗ"}),e.jsx(p,{type:"info",title:"Получение логина ЕУЗ",children:"Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например, Иванов Петр Иванович) и 4 последние цифры номера паспорта:"}),e.jsx(g,{value:a,setValue:u,title:"ФИО полностью",placeholder:"Иванов Иван Иванович"}),e.jsx(g,{value:o,setValue:x,title:"Последние 4 цифры номера паспорта",placeholder:"1234",type:"password"}),e.jsx(F,{text:"Узнать логин ЕУЗ",action:()=>l(),isLoading:d,completed:m,setCompleted:f,isActive:!!a.length&&o.length===4,width:"100%"}),!!s&&j().map((t,n)=>e.jsx(N.Fragment,{children:t},n)),!!s&&s===I&&e.jsx(p,{type:"failure",title:"Не удалось найти пользователя"})]})})};export{B as default};
