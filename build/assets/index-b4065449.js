var f=Object.defineProperty,h=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var c=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))x.call(e,t)&&c(a,t,e[t]);if(p)for(var t of p(e))S.call(e,t)&&c(a,t,e[t]);return a},d=(a,e)=>h(a,b(e));import{r,j as n}from"./vendor-3c67dcca.js";import{g,a as _}from"./get-default-subdivision-17957fb0.js";import{ad as v,aa as F,F as N,I as A,S as E,ab as j,A as k,ac as y}from"./index-15ca9195.js";const D=a=>{const{surname:e,name:t,patronymic:s,subdivisions:i}=a;return{title:"Запрос на изменение внутреннего телефона",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+s,editable:!1},{title:"Подразделение/должность",value:g(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:_(i),isSpecificSelect:!0},{fieldName:"phone_inner",title:"Внутренний телефон",type:"innerPhone",value:"",mask:!0,required:!0},{fieldName:"show_inner_phone_inner",title:"Показывать внутренний телефон внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_inner_phone_outer",title:"Показывать внутренний телефон на сайте",type:"checkbox",value:!1}]}},w=()=>{const[a,e]=r.useState(null),[t,s]=r.useState(!1),[i,m]=r.useState(!1),o=t!=null?t:!1,{data:{dataUserApplication:l}}=v.useApplications();return r.useEffect(()=>{l&&e(D(l))},[l]),n.jsx(F,{isDone:o,children:!!a&&!!e&&n.jsxs(N,{noHeader:!0,children:[n.jsx(A,d(u({},a),{collapsed:o,setData:e})),n.jsx(E,{text:o?"Отправлено":"Отправить",action:()=>j(k.EDIT_PHONEBOOK_INNER_PHONE,[a],m,s,!0),isLoading:i,completed:t,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:y(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{w as default};
