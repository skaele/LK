import{r as e,j as a}from"./vendor-48260ac4.js";import{cL as n,s as _,ai as k,a2 as q,cM as B,cN as U,cO as w,B as L,F as T,h as G,cP as M,S as O,aj as P,j as W,c as s}from"./index-76f662c4.js";const z=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],H=t=>{const{surname:l,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:l+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:z},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},V=()=>{var v;const[t,l]=e.useState(null),[r,d]=e.useState(n.kvdCert),[o,u]=e.useState(n.fluorographyCert),[i,x]=e.useState(n.vichRwCert),[c,j]=e.useState(n.graftCert),{data:{dataUserApplication:m}}=_.useApplications(),{data:{user:p}}=k.useUser(),[F,C]=e.useState(!1),[D,A]=e.useState(!1),[y,N]=e.useState(null),[f,S]=e.useState(null),[g,b]=e.useState(null),h=F??!1,E=!!t&&!!g&&!!y&&!!f;if((p==null?void 0:p.educationForm)!=="Недоступен")return a.jsx(q,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{m&&(l(H(m)),N(B()),b(U()),S(w()))},[m]),!E)return null;const R=[[{dataForm:t,setDataForm:l}],[{dataForm:g,setDataForm:b}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:x}],[{dataForm:c,setDataForm:j}],[{dataForm:f,setDataForm:S}]];return a.jsx(L,{isDone:h,children:a.jsxs(T,{children:[a.jsx(G,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(M,{stagesConfig:R}),a.jsx(O,{text:"Отправить",action:()=>P(W.USG_GETHOSTEL_Z,[t,g,y,f,r,o,i,c],A,C),isLoading:D,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:s(t)&&(((v=t.optionalCheckbox)==null?void 0:v.value)??!0)&&s(t)&&s(o)&&s(i)&&s(c)&&s(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{V as default};
