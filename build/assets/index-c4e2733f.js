var g=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var n=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&n(e,i,t[i]);if(p)for(var i of p(t))N.call(t,i)&&n(e,i,t[i]);return e},u=(e,t)=>b(e,F(t));import{r as a,j as o}from"./vendor-3c67dcca.js";import{ad as h,aa as A,F as v,I as O,S as j,ab as E,cI as y,ac as q}from"./index-d81e371e.js";import{N as B}from"./consts-e6e5e9f0.js";import{g as C,a as M,b as k}from"./get-method-obtaining-fields-d749bbdf.js";import{g as I}from"./get-method-obstaing-bad4fac3.js";import"./get-divisions-96cfa1b1.js";const T=[{id:0,title:"в Фонд пенсионного и социального страхования Российской Федерации (СФР)"},{id:1,title:"в Управление социальной защиты населения (УСЗН)"},{id:2,title:"в военный комиссариат"},{id:3,title:"в Многофункциональный центр (МФЦ)"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в банк"},{id:6,title:"в Федеральную службу труда и занятости"},{id:7,title:"в отдел/орган опеки и попечительства"},{id:8,title:"в социальное учреждение"},{id:9,title:"по месту требования"}],_=e=>({title:"Справка в социальные учреждения",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...C(),...M(e),...k(),{title:"Место предоставления справки",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:T},{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:B},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),z=()=>{const[e,t]=a.useState(null),[i,r]=a.useState(!1),[m,f]=a.useState(!1),[d,S]=a.useState({}),s=i!=null?i:!1,{data:{dataUserApplication:l}}=h.useApplications();return a.useEffect(()=>{l&&t(_(l))},[l]),a.useEffect(()=>{e&&l&&S(I(e.data))},[e]),o.jsx(A,{isDone:s,children:!!e&&!!t&&o.jsxs(v,{children:[o.jsx(O,u(c({},e),{collapsed:s,setData:t,specialFieldsNameConfig:d})),o.jsx(j,{text:s?"Отправлено":"Отправить",action:()=>E(y.STATUS_SOBES,[e],f,r),isLoading:m,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:q(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{z as default};
