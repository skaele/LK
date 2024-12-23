import{r as e,j as s}from"./vendor-00bea631.js";import{s as L,d1 as c,d4 as U,B as G,F as O,h as W,d5 as z,S as H,aj as I,j as K,c as t}from"./index-ed5dff92.js";import{C as V}from"./error-0fb15df6.js";const Y=a=>{const{surname:o,name:i,patronymic:r,group:l,email:f,phone:p}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+i+" "+r,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:f,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},J=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],Q=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:J,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),X=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),Z=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),$=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),ee=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),te=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["pdf"]}}),ie=()=>{var T,P;const[a,o]=e.useState(null),{data:{dataUserApplication:i}}=L.useApplications(),[r,l]=e.useState(!1),[f,p]=e.useState(!1),[n,S]=e.useState(null),[j,q]=e.useState(null),x=r!=null?r:!1,[g,A]=e.useState(c.kvdCert),[F,k]=e.useState(c.fluorographyCert),[C,M]=e.useState(c.vichRwCert),[y,B]=e.useState(c.graftCert),[h,b]=e.useState(null),[d,v]=e.useState(null),[u,w]=e.useState(null),[m,N]=e.useState(null),[D,R]=e.useState(null),_=!!a&&!!n&&!!j&&!!h&&!!d&&!!u&&!!m&&!!D;if(e.useEffect(()=>{i&&(o(Y(i)),S(Q()),q(U()),b(X()),v(Z()),w($()),N(ee()),R(te()))},[i]),!_)return null;if(new Date<new Date(2024,8,15))return s.jsx(V,{});const E=[[{dataForm:a,setDataForm:o}],[{dataForm:n,setDataForm:S}],[{dataForm:g,setDataForm:A}],[{dataForm:F,setDataForm:k}],[{dataForm:C,setDataForm:M}],[{dataForm:y,setDataForm:B}],[{dataForm:h,setDataForm:b},{dataForm:d,setDataForm:v},{dataForm:u,setDataForm:w},{dataForm:m,setDataForm:N},{dataForm:D,setDataForm:R}]];return s.jsx(G,{isDone:x,children:s.jsxs(O,{children:[s.jsx(W,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),s.jsx(z,{stagesConfig:E}),s.jsx(H,{text:"Отправить",action:()=>I(K.USG_GETHOSTEL_FAMILY,[a,n,g,F,C,y,h,d,u,m],p,l),isLoading:f,completed:r,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:((P=(T=a.optionalCheckbox)==null?void 0:T.value)!=null?P:!0)&&t(a)&&t(n)&&t(g)&&t(F)&&t(C)&&t(y)&&t(d)&&t(u)&&t(m)&&t(D),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ie as default};
