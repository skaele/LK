import{r as e,j as s}from"./vendor-905eebdf.js";import{cs as N,ct as c,s as B,a2 as U,Y as k,cu as q,cv as T,cw as G,B as L,F as O,h as _,cx as H,S as M,a3 as W,j as z,c as l}from"./index-dc093c1d.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=t=>{const{surname:n,name:r,patronymic:u,group:o,email:d,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+u,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:d,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N}]}},Y=()=>{var b;const[t,n]=e.useState(null),[r,u]=e.useState(c.kvdCert),[o,d]=e.useState(c.fluorographyCert),[i,v]=e.useState(c.vichRwCert),[m,D]=e.useState(c.graftCert),{data:{dataUserApplication:p}}=B.useApplications(),{data:{user:f}}=U.useUser(),[F,S]=e.useState(!1),[j,A]=e.useState(!1),[h,R]=e.useState(null),[a,C]=e.useState(null),[g,y]=e.useState(null),x=F??!1,w=!!t&&!!a&&!!h&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return s.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(K(p)),R(q()),C(T()),y(G()))},[p]),!w)return null;const E=[[{dataForm:t,setDataForm:n}],[{dataForm:a,setDataForm:C}],[{dataForm:r,setDataForm:u}],[{dataForm:o,setDataForm:d}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:D}],[{dataForm:g,setDataForm:y}]];return s.jsx(L,{isDone:x,children:s.jsxs(O,{children:[s.jsx(_,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),s.jsx(H,{stagesConfig:E}),s.jsx(M,{text:"Отправить",action:()=>W(z.USG_GETHOSTEL_O,[t,a,h,g,r,o,i,m],A,S),isLoading:j,completed:F,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:l(t)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((b=a==null?void 0:a.documents)!=null&&b.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Y as default};
