var f=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,p=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&u(a,t,e[t]);if(n)for(var t of n(e))g.call(e,t)&&u(a,t,e[t]);return a},d=(a,e)=>b(a,x(e));import{r as l,j as r}from"./vendor-3c67dcca.js";import{g as h,a as v}from"./get-default-subdivision-17957fb0.js";import{ad as F,aa as A,F as E,I as _,S as j,ab as N,A as k,ac as y}from"./index-28ef9356.js";const D=a=>{const{surname:e,name:t,patronymic:s,subdivisions:i}=a;return{title:"Запрос на изменение корпоративной электронной почты",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+s,editable:!1},{title:"Подразделение/должность",value:h(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:v(i),isSpecificSelect:!0},{fieldName:"email",title:"Корпоративная электронная почта",type:"email",value:"",required:!0},{fieldName:"show_email_inner",title:"Показывать корпоративную почту внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_email_outer",title:"Показывать корпоративную почту на сайте",type:"checkbox",value:!1}]}},M=()=>{const[a,e]=l.useState(null),[t,s]=l.useState(!1),[i,m]=l.useState(!1),o=t!=null?t:!1,{data:{dataUserApplication:c}}=F.useApplications();return l.useEffect(()=>{c&&e(D(c))},[c]),r.jsx(A,{isDone:o,children:!!a&&!!e&&r.jsxs(E,{noHeader:!0,children:[r.jsx(_,d(p({},a),{collapsed:o,setData:e})),r.jsx(j,{text:o?"Отправлено":"Отправить",action:()=>N(k.EDIT_PHONEBOOK_EMAIL,[a],m,s,!0),isLoading:i,completed:t,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:y(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
