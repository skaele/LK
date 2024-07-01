import{j as t,ad as d,r as s,L as u,F as x}from"./vendor-905eebdf.js";import{E as m,aa as h,a7 as g,ab as f,M as a,o as l,J as j,ac as p,t as w,s as C,u as k,ad as y,W as F,e as b,P as A}from"./index-dc093c1d.js";const T=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(e,o)=>{var i;return t.jsxs(m,{jc:"space-between",children:[e,!!((i=o==null?void 0:o.files_output)!=null&&i.length)&&o.files_output.map(n=>t.jsx("div",{onClick:r=>r.stopPropagation(),children:t.jsx(h,{text:n.fname,direction:"left",children:t.jsx(g,{icon:t.jsx(d,{}),background:"transparent",href:n==null?void 0:n.url})})},n.url))]})}},...c()],c=()=>[{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"165px",catalogs:[...Object.values(f).map((e,o)=>({id:o.toString(),title:e}))??[]],render:e=>t.jsx(a,{type:e==="Готово"||e==="Выдано"||e==="Получено"||e==="Выполнена"?"success":e==="Отклонено"?"failure":"alert",title:e||"—",align:"center",icon:null})},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"}],E=()=>[...c(),{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:e=>!!e.length&&t.jsx(l,{onClick:()=>M(e),text:"Скачать",background:"transparent",textColor:j.green.main,width:"100%"})}],M=e=>{e.map(o=>{const i=document.createElement("a");i.href=o.url,i.download=o.name,i.target="_blank",i.click(),i.remove()})},P=p(l),_=p(w),B=({isTeachers:e})=>{const{data:{listApplication:o,dataUserApplication:i}}=C.useApplications(),{open:n}=k(),r=s.useCallback(()=>{n(t.jsx(y,{isTeachers:e,currentFormEducation:i==null?void 0:i.educationForm}),"Создать заявку")},[]);return t.jsx(F,{load:()=>b.getApplicationsFx(),loading:!o,error:null,data:o,children:t.jsxs(A,{topRightCornerElement:t.jsx(P,{onClick:r,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(u,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0,tutorialModule:{id:"applications",step:3,params:{position:"bottom"}}}),children:[t.jsx(a,{type:"info",title:"Информация",icon:t.jsx(x,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:t.jsxs("p",{children:["Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом.",e&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),"Остальные Цифровые сервисы доступны"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=sprav",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})]})}),t.jsx(_,{loading:!o,columns:T(),columnsExtended:E(),data:o,maxOnPage:7,tutorialModule:{id:"applications",step:[0,1,2],params:{position:"top"}}})]})})},O=s.memo(B);export{O as T};
