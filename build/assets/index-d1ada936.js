import{r as e,j as t}from"./vendor-48260ac4.js";import{cM as N,cN as u,s as B,ai as U,a2 as k,cO as q,cP as O,cQ as T,B as G,F as L,h as M,cR as _,S as H,aj as P,j as W,c as l}from"./index-fbfd648b.js";import{C as z}from"./error-8c4646d6.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=a=>{const{surname:n,name:r,patronymic:c,group:o,email:d,phone:i}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+c,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:d,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N}]}},J=()=>{var b;const[a,n]=e.useState(null),[r,c]=e.useState(u.kvdCert),[o,d]=e.useState(u.fluorographyCert),[i,v]=e.useState(u.vichRwCert),[m,D]=e.useState(u.graftCert),{data:{dataUserApplication:p}}=B.useApplications(),{data:{user:f}}=U.useUser(),[F,C]=e.useState(!1),[j,A]=e.useState(!1),[S,R]=e.useState(null),[s,h]=e.useState(null),[g,y]=e.useState(null),x=F??!1,w=!!a&&!!s&&!!S&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return t.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(K(p)),R(q()),h(O()),y(T()))},[p]),!w)return null;if(new Date<new Date(2024,8,15))return t.jsx(z,{});const E=[[{dataForm:a,setDataForm:n}],[{dataForm:s,setDataForm:h}],[{dataForm:r,setDataForm:c}],[{dataForm:o,setDataForm:d}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:D}],[{dataForm:g,setDataForm:y}]];return t.jsx(G,{isDone:x,children:t.jsxs(L,{children:[t.jsx(M,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),t.jsx(_,{stagesConfig:E}),t.jsx(H,{text:"Отправить",action:()=>P(W.USG_GETHOSTEL_O,[a,s,S,g,r,o,i,m],A,C),isLoading:j,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:l(a)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((b=s==null?void 0:s.documents)!=null&&b.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{J as default};
