var y=Object.defineProperty,_=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,F=(t,e)=>{for(var s in e||(e={}))D.call(e,s)&&C(t,s,e[s]);if(x)for(var s of x(e))P.call(e,s)&&C(t,s,e[s]);return t},I=(t,e)=>_(t,B(e));import{r as a,j as m}from"./vendor-3c67dcca.js";import{f as N,a7 as A,a8 as O,a9 as U,aa as q,F as M,I as T,S as w,ab as H,A as L,ac as V}from"./index-ba49d757.js";const E=(t=[])=>t.map(e=>({id:e.guid,title:e.name})),W=(t,e,s,h,r,S,u,f,d,g,c,b,o)=>{const n=E(t.head_div);return{title:"Внесение изменений данных подразделения в телефонном справочнике",data:[{fieldName:"guid",title:"Наименование подразделения",value:N(n,e)||E(t.head_div)[0],onChange:i=>s(i.title),editable:n.length>1,width:"100",required:!0,type:"select",items:n,isSpecificSelect:!0},{fieldName:"email",value:h,onChange:r,title:"Общая корпоративная электронная почта",type:"email"},{fieldName:"phone_direct",title:"Общий прямой телефон",type:"tel",value:S,onChange:u,mask:!0},{fieldName:"phone_inner",title:"Общий внутренний телефон",type:"innerPhone",value:f,onChange:d,mask:!0},{fieldName:"address",title:"Адрес рабочего места",type:"select",value:N(A,g),items:A,onChange:i=>{c(i.title),o(O(i.title))},width:"100",editable:!0,required:!0},{fieldName:"room",title:"Номер кабинета",type:"cabinet",mask:!0,value:b,onChange:o,editable:!0,required:!0}]}},G=()=>{const[t,e]=a.useState(null),[s,h]=a.useState(""),[r,S]=a.useState(""),[u,f]=a.useState(""),[d,g]=a.useState(""),[c,b]=a.useState(""),[o,n]=a.useState(""),[i,v]=a.useState(!1),[j,k]=a.useState(!1),p=i!=null?i:!1,{data:{user:l}}=U.useUser();return a.useEffect(()=>{l&&e(W(l,s,h,r,S,u,f,d,g,c,b,o,n))},[l==null?void 0:l.guid,s,r,u,d,c,o]),m.jsx(q,{isDone:p,children:!!t&&!!e&&m.jsxs(M,{noHeader:!0,children:[m.jsx(T,I(F({},t),{collapsed:p,setData:e})),m.jsx(w,{text:p?"Отправлено":"Отправить",action:()=>H(L.EDIT_PHONEBOOK_SUBDIVISION,[t],k,v,!0),isLoading:j,completed:i,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:p,isActive:V(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{G as default};
