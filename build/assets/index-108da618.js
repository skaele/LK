import{r as e,j as t}from"./vendor-3c67dcca.js";import{cJ as N,cK as d,ad as T,a9 as U,R as k,cL as q,cM as B,cN as L,aa as O,F as _,T as G,cO as M,S as H,ab as I,cI as K,ac as l}from"./index-09f1adfd.js";import{C as W}from"./error-efb874f0.js";const $=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],z=r=>{const{surname:a,name:n,patronymic:o,group:c,email:i,phone:m}=r;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:a+" "+n+" "+o,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:c,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:m,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:$},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N}]}},Q=()=>{var r;const[a,n]=e.useState(null),[o,c]=e.useState(d.kvdCert),[i,m]=e.useState(d.fluorographyCert),[p,x]=e.useState(d.vichRwCert),[f,D]=e.useState(d.graftCert),{data:{dataUserApplication:g}}=T.useApplications(),{data:{user:F}}=U.useUser(),[u,S]=e.useState(!1),[j,A]=e.useState(!1),[v,R]=e.useState(null),[s,h]=e.useState(null),[C,y]=e.useState(null),b=u!=null?u:!1,w=!!a&&!!s&&!!v&&!!C;if((F==null?void 0:F.educationForm)!=="Очная")return t.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{g&&(n(z(g)),R(q()),h(B()),y(L()))},[g]),!w)return null;if(new Date<new Date(2024,8,15))return t.jsx(W,{});const E=[[{dataForm:a,setDataForm:n}],[{dataForm:s,setDataForm:h}],[{dataForm:o,setDataForm:c}],[{dataForm:i,setDataForm:m}],[{dataForm:p,setDataForm:x}],[{dataForm:f,setDataForm:D}],[{dataForm:C,setDataForm:y}]];return t.jsx(O,{isDone:b,children:t.jsxs(_,{children:[t.jsx(G,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),t.jsx(M,{stagesConfig:E}),t.jsx(H,{text:"Отправить",action:()=>I(K.USG_GETHOSTEL_O,[a,s,v,C,o,i,p,f],A,S),isLoading:j,completed:u,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:l(a)&&l(i)&&l(p)&&l(f)&&l(o)&&!!(s!=null&&(r=s.documents)!==null&&r!==void 0&&r.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Q as default};
