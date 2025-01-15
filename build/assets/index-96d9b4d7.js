import{j as e,af as u,r as s,M as x,F as m}from"./vendor-3c67dcca.js";import{r as a,b6 as h,al as f,M as l,E as g,B as p,t as j,b7 as c,h as b,ad as v,u as w,b8 as C,W as k,a$ as y,N as A}from"./index-7ed94462.js";import{A as F}from"./consts-e6e5e9f0.js";const T=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(i,t)=>{var o;return e.jsxs(a,{jc:"space-between",children:[i,!!(t!=null&&(o=t.files_output)!==null&&o!==void 0&&o.length)&&t.files_output.map(n=>e.jsx("div",{onClick:r=>r.stopPropagation(),children:e.jsx(h,{text:n.fname,direction:"left",children:e.jsx(f,{icon:e.jsx(u,{}),background:"transparent",href:n==null?void 0:n.url})})},n.url))]})}},...d()],d=()=>{var i;return[{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"165px",catalogs:[...(i=Object.values(F).map((t,o)=>({id:o.toString(),title:t})))!==null&&i!==void 0?i:[]],render:t=>e.jsx(l,{type:t==="Готово"||t==="Выдано"||t==="Получено"||t==="Выполнена"?"success":t==="Отклонено"?"failure":"alert",title:t||"—",align:"center",icon:null})},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"}]},_=()=>[...d(),{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:i=>i.length?i.map(t=>e.jsxs(a,{jc:"space-between",children:[e.jsx(g,{children:t.fname}),e.jsx(p,{onClick:()=>E(t),text:"Скачать",background:"transparent",textColor:j.green.main,width:"100%"})]},t.url)):"-"}],E=i=>{const t=document.createElement("a");t.href=i.url,t.download=i.fname,t.target="_blank",t.click(),t.remove()},M=c(p),B=c(b),P=({isTeachers:i})=>{const{data:{listApplication:t,dataUserApplication:o}}=v.useApplications(),{open:n}=w(),r=s.useCallback(()=>{n(e.jsx(C,{isTeachers:i,currentFormEducation:o==null?void 0:o.educationForm,currentDegreeLevel:o==null?void 0:o.degreeLevel}),"Создать заявку")},[]);return e.jsx(k,{load:()=>y.getApplicationsFx(),loading:!t,error:null,data:t,children:e.jsxs(A,{topRightCornerElement:e.jsx(M,{onClick:r,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(x,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0,tutorialModule:{id:"applications",step:3,params:{position:"bottom"}}}),children:[e.jsx(l,{type:"info",title:"Информация",icon:e.jsx(m,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:e.jsxs("p",{children:["Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом.",i&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),"Остальные Цифровые сервисы доступны"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=sprav",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})]})}),e.jsx(B,{loading:!t,columns:T(),columnsExtended:_(),data:t,maxOnPage:7,tutorialModule:{id:"applications",step:[0,1,2],params:{position:"top"}}})]})})},S=s.memo(P);export{S as T};
