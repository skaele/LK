var F=Object.defineProperty,b=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&c(e,a,t[a]);if(p)for(var a of p(t))h.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>b(e,S(t));import{r as i,j as d}from"./vendor-3c67dcca.js";import{ad as v,aa as A,F as N,I as M,S as j,ab as y,cI as E,ac as I}from"./index-d81e371e.js";import{g as R,a as k,b as q}from"./get-method-obtaining-fields-d749bbdf.js";import{g as B}from"./get-method-obstaing-bad4fac3.js";import{g as C}from"./get-reason-for-receiving-eb30f0b2.js";import"./get-divisions-96cfa1b1.js";import"./consts-e6e5e9f0.js";const L=e=>{const{surname:t,name:a,patronymic:m,email:s,phone:o}=e;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+m,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:o,required:!0},{title:"Email",type:"email",fieldName:"email",value:s,editable:!0,required:!0},...R(),...k(e),...q(),{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},Y=()=>{const[e,t]=i.useState(null),[a,m]=i.useState({}),[s,o]=i.useState(!1),[f,g]=i.useState(!1),l=s!=null?s:!1,{data:{dataUserApplication:r}}=v.useApplications();return i.useEffect(()=>{r&&t(L(r))},[r]),i.useEffect(()=>{e&&r&&m(n(n({},B(e.data)),C(e.data)))},[e]),d.jsx(A,{isDone:l,children:!!e&&!!t&&d.jsxs(N,{noHeader:!0,children:[d.jsx(M,u(n({},e),{collapsed:l,setData:t,specialFieldsNameConfig:a})),d.jsx(j,{text:l?"Отправлено":"Отправить",action:()=>y(E.MILITARY_FORM_5,[e],g,o),isLoading:f,completed:s,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:I(e,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Y as default};
