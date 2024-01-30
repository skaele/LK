import{r as e,j as s}from"./vendor-4a800e6d.js";import{a6 as E,cO as m,cR as U,aw as L,F as G,T as O,cS as W,S as z,aA as H,d as I,U as t}from"./index-271a563d.js";const K=a=>{const{surname:r,name:i,patronymic:o,group:l,email:p,phone:f}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:r+" "+i+" "+o,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:p,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:f,editable:!0,required:!0}],links:[{title:"Согласие на обработку моих персональных данных",link:"https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC",type:"document"},{title:"Согласие на обработку персональных данных членов моей семьи",link:"https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx",type:"document"}],optionalCheckbox:{title:"Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107",value:!1,fieldName:"isCorrectRegistration",editable:!0}}},V=[{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],Y=()=>({title:"Состав семьи",hint:"Необходимо указать актуальную информацию о членах семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:V,required:!0,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0}),J=()=>({title:"Свидетельство о рождении",data:[],documents:{files:[],fieldName:"birthCertificate",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Q=()=>({title:"Согласие на обработку персональных данных членов семьи",data:[],documents:{files:[],fieldName:"consentToProcessingPersonalData",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),X=()=>({title:"Свидетельство о регистрации брака",data:[],documents:{files:[],fieldName:"marriageRegistrationCertificate",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Z=()=>({title:"Регистрация заявителя",data:[],documents:{files:[],fieldName:"registrationApplicant",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),$=()=>({title:"Регистрация членов семьи",data:[],documents:{files:[],fieldName:"registrationFamilyMembers",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ae=()=>{var N;const[a,r]=e.useState(null),{data:{dataUserApplication:i}}=E.useApplications(),[o,l]=e.useState(!1),[p,f]=e.useState(!1),[n,D]=e.useState(null),[A,P]=e.useState(null),b=o??!1,[g,q]=e.useState(m.kvdCert),[F,k]=e.useState(m.fluorographyCert),[y,M]=e.useState(m.vichRwCert),[C,j]=e.useState(m.graftCert),[h,x]=e.useState(null),[d,v]=e.useState(null),[u,R]=e.useState(null),[c,T]=e.useState(null),[S,w]=e.useState(null),_=!!a&&!!n&&!!A&&!!h&&!!d&&!!u&&!!c&&!!S;if(e.useEffect(()=>{i&&(r(K(i)),D(Y()),P(U()),x(J()),v(Q()),R(X()),T(Z()),w($()))},[i]),!_)return null;const B=[[{dataForm:a,setDataForm:r}],[{dataForm:n,setDataForm:D}],[{dataForm:g,setDataForm:q}],[{dataForm:F,setDataForm:k}],[{dataForm:y,setDataForm:M}],[{dataForm:C,setDataForm:j}],[{dataForm:h,setDataForm:x},{dataForm:d,setDataForm:v},{dataForm:u,setDataForm:R},{dataForm:c,setDataForm:T},{dataForm:S,setDataForm:w}]];return s.jsx(L,{isDone:b,children:s.jsxs(G,{children:[s.jsx(O,{size:4,align:"left",children:"Предоставление права проживания в семейной комнате"}),s.jsx(W,{stagesConfig:B}),s.jsx(z,{text:"Отправить",action:()=>H(I.USG_GETHOSTEL_FAMILY,[a,n,g,F,y,C,h,d,u,c],f,l),isLoading:p,completed:o,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:(((N=a.optionalCheckbox)==null?void 0:N.value)??!0)&&t(a)&&t(n)&&t(g)&&t(F)&&t(y)&&t(C)&&t(d)&&t(u)&&t(c)&&t(S),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ae as default};
