var g=Object.defineProperty,F=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&p(e,a,t[a]);if(d)for(var a of d(t))N.call(t,a)&&p(e,a,t[a]);return e},n=(e,t)=>F(e,S(t));import{r as i,j as r}from"./vendor-91dd51cf.js";import{d5 as v,s as h,B as j,F as A,I as q,S as y,aj as C,j as E,c as O}from"./index-2caaee2c.js";import{g as B,a as M}from"./get-method-obtaining-fields-d76ce373.js";import{g as k}from"./get-student-subdivisions-5a2f2c8d.js";import{g as I}from"./get-method-obstaing-bad4fac3.js";import"./get-divisions-96cfa1b1.js";const D=e=>({title:"Справка-вызов",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...B(),...k(e),...M(),{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:v},{title:"Место предоставления справки",fieldName:"place_reference",value:null,editable:!0,required:!0},{title:"Период времени - с:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по:",type:"date",fieldName:"time-after",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),T=()=>{const[e,t]=i.useState(null),[a,o]=i.useState(!1),[c,f]=i.useState(!1),[u,b]=i.useState({}),s=a!=null?a:!1,{data:{dataUserApplication:l}}=h.useApplications();return i.useEffect(()=>{l&&t(D(l))},[l]),i.useEffect(()=>{e&&l&&b(I(e.data))},[e]),r.jsx(j,{isDone:s,children:!!e&&!!t&&r.jsxs(A,{children:[r.jsx(q,n(m({},e),{collapsed:s,setData:t,specialFieldsNameConfig:u})),r.jsx(y,{text:s?"Отправлено":"Отправить",action:()=>C(E.SPRVIZOV,[e],f,o),isLoading:c,completed:a,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:O(e,u),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{T as default};
