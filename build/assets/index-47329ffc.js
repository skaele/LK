var v=Object.defineProperty,x=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,e,a)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))A.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))F.call(e,a)&&u(t,a,e[a]);return t},n=(t,e)=>x(t,b(e));import{r as i,j as l}from"./vendor-33947725.js";import{s as S,ai as g,B as j,F as N,I as _,S as h,aj as y,j as q,c as B}from"./index-7bd274a4.js";const C=(t,e)=>n(r({title:"Предоставление каникул в связи с окончанием университета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Срок предоставления каникул c",type:"date",fieldName:"time-before",value:e.vacation_start||"",editable:!e.vacation_start,required:!0},{title:"по",type:"date",fieldName:"time-to",value:e.vacation_end||"",editable:!e.vacation_end,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]},e.vacation_end&&e.vacation_start?{}:{hint:"Точные сроки предоставления каникул уточняйте в своем отделении Центра по работе со студентами"}),{documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),T=()=>{const[t,e]=i.useState(null),[a,c]=i.useState(!1),[m,f]=i.useState(!1),s=a!=null?a:!1,{data:{dataUserApplication:o}}=S.useApplications(),{data:{user:d}}=g.useUser();return i.useEffect(()=>{o&&d&&e(C(o,d))},[o]),l.jsx(j,{isDone:s,children:!!t&&!!e&&l.jsxs(N,{children:[l.jsx(_,n(r({},t),{collapsed:s,setData:e})),l.jsx(h,{text:s?"Отправлено":"Отправить",action:()=>y(q.CRS_VACATIONS,[t],f,c),isLoading:m,completed:a,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:B(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{T as default};
