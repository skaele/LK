var x=Object.defineProperty,g=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))b.call(e,a)&&d(t,a,e[a]);if(n)for(var a of n(e))v.call(e,a)&&d(t,a,e[a]);return t},c=(t,e)=>g(t,F(e));import{r,j as o}from"./vendor-3c67dcca.js";import{ad as S,aa as h,F as A,I as j,S as q,ab as E,cI as N,ac as D}from"./index-28ef9356.js";const _=t=>({title:"Запрос на изменение персональных данных",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:t.phone,editable:!0,required:!0},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Прошу  внести  изменения в мои персональные данные и в дальнейшем именовать меня:",fieldName:"new_personal_data",value:"",editable:!0,required:!0,placeholder:"Укажите новые фамилия имя и отчество в именительном падеже"},{title:"По причине",fieldName:"reason",value:"",editable:!0,required:!0}],alert:"Загрузите документы, подтверждающие изменение персональных данных",documents:{files:[],fieldName:"docs",maxFiles:4,required:!0}}),I=()=>{var t;const[e,a]=r.useState(null),[s,u]=r.useState(!1),[m,f]=r.useState(!1),l=s!=null?s:!1,{data:{dataUserApplication:i}}=S.useApplications();return r.useEffect(()=>{i&&a(_(i))},[i]),o.jsx(h,{isDone:l,children:!!e&&!!a&&o.jsxs(A,{children:[o.jsx(j,c(p({},e),{collapsed:l,setData:a})),o.jsx(q,{text:l?"Отправлено":"Отправить",action:()=>E(N.PERS_DATA,[e],f,u),isLoading:m,completed:s,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:D(e)&&!!(e!=null&&(t=e.documents)!==null&&t!==void 0&&t.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
