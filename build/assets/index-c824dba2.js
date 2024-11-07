import{j as t,af as u,r as i,M as x,F as m}from"./vendor-48260ac4.js";import{G as a,az as h,an as g,aA as f,M as l,X as j,q as c,L as w,aB as p,r as C,s as k,u as y,aC as F,W as b,e as T,P as A}from"./index-75da625b.js";const M=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(n,e)=>{var r;return t.jsxs(a,{jc:"space-between",children:[n,!!((r=e==null?void 0:e.files_output)!=null&&r.length)&&e.files_output.map(o=>t.jsx("div",{onClick:s=>s.stopPropagation(),children:t.jsx(h,{text:o.fname,direction:"left",children:t.jsx(g,{icon:t.jsx(u,{}),background:"transparent",href:o==null?void 0:o.url})})},o.url))]})}},...d()],d=()=>[{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"165px",catalogs:[...Object.values(f).map((n,e)=>({id:e.toString(),title:n}))??[]],render:n=>t.jsx(l,{type:n==="Готово"||n==="Выдано"||n==="Получено"||n==="Выполнена"?"success":n==="Отклонено"?"failure":"alert",title:n||"—",align:"center",icon:null})},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"}],E=()=>[...d(),{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:n=>n.length?n.map(e=>t.jsxs(a,{jc:"space-between",children:[t.jsx(j,{children:e.fname}),t.jsx(c,{onClick:()=>B(e),text:"Скачать",background:"transparent",textColor:w.green.main,width:"100%"})]},e.url)):"-"}],B=n=>{const e=document.createElement("a");e.href=n.url,e.download=n.fname,e.target="_blank",e.click(),e.remove()},P=p(c),_=p(C),v=({isTeachers:n})=>{const{data:{listApplication:e,dataUserApplication:r}}=k.useApplications(),{open:o}=y(),s=i.useCallback(()=>{o(t.jsx(F,{isTeachers:n,currentFormEducation:r==null?void 0:r.educationForm,currentDegreeLevel:r==null?void 0:r.degreeLevel}),"Создать заявку")},[]);return t.jsx(b,{load:()=>T.getApplicationsFx(),loading:!e,error:null,data:e,children:t.jsxs(A,{topRightCornerElement:t.jsx(P,{onClick:s,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(x,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0,tutorialModule:{id:"applications",step:3,params:{position:"bottom"}}}),children:[t.jsx(l,{type:"info",title:"Информация",icon:t.jsx(m,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:t.jsxs("p",{children:["Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом.",n&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),"Остальные Цифровые сервисы доступны"," ",t.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=sprav",target:"_blank",rel:"noreferrer",children:"по ссылке"}),"."]})]})}),t.jsx(_,{loading:!e,columns:M(),columnsExtended:E(),data:e,maxOnPage:7,tutorialModule:{id:"applications",step:[0,1,2],params:{position:"top"}}})]})})},S=i.memo(v);export{S as T};
