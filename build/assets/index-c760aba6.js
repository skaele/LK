import{r as e,j as a}from"./vendor-f1fdae2f.js";import{cO as n,a5 as _,V as k,G as q,cP as T,cQ as U,cR as w,av as B,F as G,T as L,cS as z,S as M,az as O,d as P,Q as s}from"./index-f5c6ecdc.js";const Q=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],V=t=>{const{surname:l,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:l+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Q},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},I=()=>{var v;const[t,l]=e.useState(null),[r,d]=e.useState(n.kvdCert),[o,u]=e.useState(n.fluorographyCert),[i,x]=e.useState(n.vichRwCert),[c,D]=e.useState(n.graftCert),{data:{dataUserApplication:m}}=_.useApplications(),{data:{user:p}}=k.useUser(),[F,C]=e.useState(!1),[A,j]=e.useState(!1),[S,N]=e.useState(null),[f,y]=e.useState(null),[g,b]=e.useState(null),h=F??!1,R=!!t&&!!g&&!!S&&!!f;if((p==null?void 0:p.educationForm)!=="Недоступен")return a.jsx(q,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{m&&(l(V(m)),N(T()),b(U()),y(w()))},[m]),!R)return null;const E=[[{dataForm:t,setDataForm:l}],[{dataForm:g,setDataForm:b}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:x}],[{dataForm:c,setDataForm:D}],[{dataForm:f,setDataForm:y}]];return a.jsx(B,{isDone:h,children:a.jsxs(G,{children:[a.jsx(L,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(z,{stagesConfig:E}),a.jsx(M,{text:"Отправить",action:()=>O(P.USG_GETHOSTEL_Z,[t,g,S,f,r,o,i,c],j,C),isLoading:A,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:s(t)&&(((v=t.optionalCheckbox)==null?void 0:v.value)??!0)&&s(t)&&s(o)&&s(i)&&s(c)&&s(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{I as default};
