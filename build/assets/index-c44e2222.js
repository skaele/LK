import{r as e,j as p}from"./vendor-cbee1f3c.js";import{s as x}from"./get-form-30ba56ae.js";import{f as C}from"./find-current-in-select-ba4611d5.js";import{g as A}from"./getCabinetMask-8c9aa3b2.js";import{a4 as E,B as j,F as k,I as y,S as B,a5 as _,A as D,b as P}from"./index-f356c1dd.js";const F=(t=[])=>t.map(s=>({id:s.guid,title:s.name})),O=(t,s,r,f,l,h,u,S,d,g,c,b,i)=>{const o=F(t.head_div);return{title:"Внесение изменений данных подразделения в телефонном справочнике",data:[{fieldName:"guid",title:"Наименование подразделения",value:C(o,s)||F(t.head_div)[0],onChange:a=>r(a.title),editable:o.length>1,width:"100",required:!0,type:"select",items:o,isSpecificSelect:!0},{fieldName:"email",value:f,onChange:l,title:"Общая корпоративная электронная почта",type:"email"},{fieldName:"phone_direct",title:"Общий прямой телефон",type:"tel",value:h,onChange:u,mask:!0},{fieldName:"phone_inner",title:"Общий внутренний телефон",type:"innerPhone",value:S,onChange:d,mask:!0},{fieldName:"address",title:"Адрес рабочего места",type:"select",value:C(x,g),items:x,onChange:a=>{c(a.title),i(A(a.title))},width:"100",editable:!0,required:!0},{fieldName:"room",title:"Номер кабинета",type:"cabinet",mask:!0,value:b,onChange:i,editable:!0,required:!0}]}},H=()=>{const[t,s]=e.useState(null),[r,f]=e.useState(""),[l,h]=e.useState(""),[u,S]=e.useState(""),[d,g]=e.useState(""),[c,b]=e.useState(""),[i,o]=e.useState(""),[a,v]=e.useState(!1),[I,N]=e.useState(!1),m=a??!1,{data:{user:n}}=E.useUser();return e.useEffect(()=>{n&&s(O(n,r,f,l,h,u,S,d,g,c,b,i,o))},[n==null?void 0:n.guid,r,l,u,d,c,i]),p.jsx(j,{isDone:m,children:!!t&&!!s&&p.jsxs(k,{noHeader:!0,children:[p.jsx(y,{...t,collapsed:m,setData:s}),p.jsx(B,{text:m?"Отправлено":"Отправить",action:()=>_(D.EDIT_PHONEBOOK_SUBDIVISION,[t],N,v,!0),isLoading:I,completed:a,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:m,isActive:P(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{H as default};
