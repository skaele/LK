import{r as e,j as i}from"./vendor-9c916fad.js";import{s as E,cL as c,cO as L,B as U,F as G,h as O,cP as W,S as z,ah as H,j as I,c as t}from"./index-ed17ce9f.js";import{C as K}from"./error-362a8860.js";const V=a=>{const{surname:s,name:r,patronymic:o,group:l,email:p,phone:f}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:s+" "+r+" "+o,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:p,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:f,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},Y=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],J=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Y,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),Q=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),X=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Z=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),$=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ee=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),re=()=>{var T;const[a,s]=e.useState(null),{data:{dataUserApplication:r}}=E.useApplications(),[o,l]=e.useState(!1),[p,f]=e.useState(!1),[n,S]=e.useState(null),[P,q]=e.useState(null),x=o??!1,[g,A]=e.useState(c.kvdCert),[F,j]=e.useState(c.fluorographyCert),[C,k]=e.useState(c.vichRwCert),[y,M]=e.useState(c.graftCert),[h,b]=e.useState(null),[d,v]=e.useState(null),[u,w]=e.useState(null),[m,N]=e.useState(null),[D,R]=e.useState(null),B=!!a&&!!n&&!!P&&!!h&&!!d&&!!u&&!!m&&!!D;if(e.useEffect(()=>{r&&(s(V(r)),S(J()),q(L()),b(Q()),v(X()),w(Z()),N($()),R(ee()))},[r]),!B)return null;if(new Date<new Date(2024,8,15))return i.jsx(K,{});const _=[[{dataForm:a,setDataForm:s}],[{dataForm:n,setDataForm:S}],[{dataForm:g,setDataForm:A}],[{dataForm:F,setDataForm:j}],[{dataForm:C,setDataForm:k}],[{dataForm:y,setDataForm:M}],[{dataForm:h,setDataForm:b},{dataForm:d,setDataForm:v},{dataForm:u,setDataForm:w},{dataForm:m,setDataForm:N},{dataForm:D,setDataForm:R}]];return i.jsx(U,{isDone:x,children:i.jsxs(G,{children:[i.jsx(O,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),i.jsx(W,{stagesConfig:_}),i.jsx(z,{text:"Отправить",action:()=>H(I.USG_GETHOSTEL_FAMILY,[a,n,g,F,C,y,h,d,u,m],f,l),isLoading:p,completed:o,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:(((T=a.optionalCheckbox)==null?void 0:T.value)??!0)&&t(a)&&t(n)&&t(g)&&t(F)&&t(C)&&t(y)&&t(d)&&t(u)&&t(m)&&t(D),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{re as default};
