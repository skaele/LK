var S=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(e,t,i)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&n(e,i,t[i]);if(p)for(var i of p(t))h.call(t,i)&&n(e,i,t[i]);return e},c=(e,t)=>b(e,F(t));import{r as s,j as o}from"./vendor-33947725.js";import{d6 as A,s as N,B as j,F as v,I as O,S as E,aj as y,j as B,c as q}from"./index-5e1edf2c.js";import{g as C}from"./get-method-obstaing-bad4fac3.js";import{g as M,a as k}from"./get-method-obtaining-fields-2ec433ac.js";import{g as T}from"./get-student-subdivisions-5a2f2c8d.js";import"./get-divisions-96cfa1b1.js";const _=[{id:0,title:"в Фонд пенсионного и социального страхования Российской Федерации (СФР)"},{id:1,title:"в Управление социальной защиты населения (УСЗН)"},{id:2,title:"в военный комиссариат"},{id:3,title:"в Многофункциональный центр (МФЦ)"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в банк"},{id:6,title:"в Федеральную службу труда и занятости"},{id:7,title:"в отдел/орган опеки и попечительства"},{id:8,title:"в социальное учреждение"},{id:9,title:"по месту требования"}],w=e=>({title:"Справка в социальные учреждения",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...M(),...T(e),...k(),{title:"Место предоставления справки",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:_},{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:A},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),z=()=>{const[e,t]=s.useState(null),[i,r]=s.useState(!1),[m,f]=s.useState(!1),[d,g]=s.useState({}),a=i!=null?i:!1,{data:{dataUserApplication:l}}=N.useApplications();return s.useEffect(()=>{l&&t(w(l))},[l]),s.useEffect(()=>{e&&l&&g(C(e.data))},[e]),o.jsx(j,{isDone:a,children:!!e&&!!t&&o.jsxs(v,{children:[o.jsx(O,c(u({},e),{collapsed:a,setData:t,specialFieldsNameConfig:d})),o.jsx(E,{text:a?"Отправлено":"Отправить",action:()=>y(B.STATUS_SOBES,[e],f,r),isLoading:m,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:q(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{z as default};
