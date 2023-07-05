import{r as e,j as s}from"./vendor-9cc634b6.js";import{_ as E,bW as d,bZ as L,a0 as U,F as G,T as W,b_ as O,S as z,a1 as H,m as I,r as t}from"./index-3fee83b2.js";const K=a=>{const{surname:r,name:i,patronymic:o,group:l,email:u,phone:m}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:r+" "+i+" "+o,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:m,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},V=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],Y=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:V,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),Z=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),J=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Q=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),X=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),$=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ae=()=>{var w;const[a,r]=e.useState(null),{data:{dataUserApplication:i}}=E.useApplications(),[o,l]=e.useState(!1),[u,m]=e.useState(!1),[n,y]=e.useState(null),[P,q]=e.useState(null),C=o??!1,[c,A]=e.useState(d.kvdCert),[h,k]=e.useState(d.fluorographyCert),[S,M]=e.useState(d.vichRwCert),[b,_]=e.useState(d.graftCert),[D,x]=e.useState(null),[p,v]=e.useState(null),[f,T]=e.useState(null),[g,N]=e.useState(null),[F,R]=e.useState(null),j=!!a&&!!n&&!!P&&!!D&&!!p&&!!f&&!!g&&!!F;if(e.useEffect(()=>{i&&(r(K(i)),y(Y()),q(L()),x(Z()),v(J()),T(Q()),N(X()),R($()))},[i]),!j)return null;const B=[[{dataForm:a,setDataForm:r}],[{dataForm:n,setDataForm:y}],[{dataForm:c,setDataForm:A}],[{dataForm:h,setDataForm:k}],[{dataForm:S,setDataForm:M}],[{dataForm:b,setDataForm:_}],[{dataForm:D,setDataForm:x},{dataForm:p,setDataForm:v},{dataForm:f,setDataForm:T},{dataForm:g,setDataForm:N},{dataForm:F,setDataForm:R}]];return s.jsx(U,{isDone:C,children:s.jsxs(G,{children:[s.jsx(W,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),s.jsx(O,{stagesConfig:B}),s.jsx(z,{text:"Отправить",action:()=>H(I.USG_GETHOSTEL_FAMILY,[a,n,c],m,l),isLoading:u,completed:o,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:C,isActive:(((w=a.optionalCheckbox)==null?void 0:w.value)??!0)&&t(a)&&t(n)&&t(c)&&t(h)&&t(S)&&t(b)&&t(p)&&t(f)&&t(g)&&t(F),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ae as default};
