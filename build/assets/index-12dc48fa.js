var b=Object.defineProperty,v=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,m=(a,e)=>{for(var t in e||(e={}))h.call(e,t)&&d(a,t,e[t]);if(c)for(var t of c(e))j.call(e,t)&&d(a,t,e[t]);return a},f=(a,e)=>v(a,g(e));import{r as i,j as l}from"./vendor-91dd51cf.js";import{s as F,B as N,F as S,I as A,S as C,aj as E,j as y,c as I}from"./index-2caaee2c.js";import{C as _}from"./error-161e76dd.js";const k=a=>{const{surname:e,name:t,patronymic:o,group:s,email:r,phone:p}=a;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+o,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},U=()=>{var u;var a;const[e,t]=i.useState(null),{data:{dataUserApplication:o}}=F.useApplications(),[s,r]=i.useState(!1),[p,x]=i.useState(!1),n=s!=null?s:!1;return i.useEffect(()=>{o&&t(k(o))},[o]),new Date<new Date(2024,8,15)?l.jsx(_,{}):l.jsx(N,{isDone:n,children:!!e&&!!t&&l.jsxs(S,{children:[l.jsx(A,f(m({},e),{collapsed:n,setData:t})),l.jsx(C,{text:"Отправить",action:()=>E(y.USG_RELOCATION_INNER,[e],x,r),isLoading:p,completed:s,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:I(e)&&((u=(a=e.optionalCheckbox)===null||a===void 0?void 0:a.value)!=null?u:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{U as default};
