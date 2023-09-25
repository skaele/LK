import{j as i,z as p,F as d}from"./vendor-198a3a64.js";import{ac as n,M as a,B as o,a7 as u,ad as x,u as f,W as m,ae as h,p as g,m as j,af as w}from"./index-7ac35755.js";const y=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0},{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"130px",catalogs:[...Object.values(n).map((e,t)=>({id:t.toString(),title:e}))??[]],render:e=>{const t=C(e);return i.jsx(a,{type:t==="Готово"?"success":t==="Отклонено"?"failure":"alert",title:t,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"},{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:e=>!!e.length&&i.jsx(o,{onClick:()=>F(e),text:"Скачать",background:"transparent",textColor:u.green.main,width:"100%"})}],C=e=>{switch(e){case"На рассмотрении":return n.pending;case"Принято в работу":return n.pending;case"Получено":return n.ready;default:return e}},F=e=>{e.map(t=>{const r=document.createElement("a");r.href=t.url,r.download=t.name,r.target="_blank",r.click(),r.remove()})},A=({isTeachers:e})=>{const{data:{listApplication:t,dataUserApplication:r},error:s}=x.useApplications(),{open:l}=f(),c=()=>{l(i.jsx(w,{isTeachers:e,currentFormEducation:r==null?void 0:r.educationForm}),"Создать заявку")};return i.jsx(m,{load:()=>h.getApplicationsFx(),loading:!t,error:s,data:t,children:i.jsxs(g,{topRightCornerElement:i.jsx(o,{onClick:c,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:i.jsx(p,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[i.jsx(a,{type:"info",title:"Информация",icon:i.jsx(d,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),i.jsx(j,{loading:!t,columns:y(),data:t,maxOnPage:7})]})})};export{A as T};
