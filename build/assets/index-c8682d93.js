var h=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,t,i)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,s=(e,t)=>{for(var i in t||(t={}))_.call(t,i)&&m(e,i,t[i]);if(c)for(var i of c(t))x.call(t,i)&&m(e,i,t[i]);return e},n=(e,t)=>F(e,N(t));import{r as a,j as d}from"./vendor-91dd51cf.js";import{f as p,s as q,B as S,F as j,I as w,S as C,aj as B,j as E,c as T}from"./index-2caaee2c.js";import{g as A,a as M}from"./get-method-obtaining-fields-d76ce373.js";import{g as O}from"./get-student-subdivisions-5a2f2c8d.js";import{g as W}from"./get-method-obstaing-bad4fac3.js";import{g as k}from"./get-reason-for-receiving-eb30f0b2.js";import"./get-divisions-96cfa1b1.js";const f=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"},{id:3,title:"Очная сокращённая"},{id:4,title:"Заочная сокращённая"},{id:5,title:"Очно-заочная сокращённая"}],y=[{id:0,title:"Бюджетная"},{id:1,title:"С оплатой обучения"}],D=[{id:0,title:"аттестат о среднем (полном) общем образовании"},{id:1,title:"диплом о среднем профессиональном образовании"},{id:2,title:"диплом о начальном профессиональном образовании"},{id:3,title:"академическая справка или диплом о неполном высшем образовании"},{id:4,title:"диплом о полном высшем образовании."}],I=[{id:0,title:"моим письменным заявлением"},{id:1,title:"отчислением из"}],R=e=>({title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...A(),...O(e),...M(),{title:"Прошу выдать мне справку об обучении в связи с:",type:"select",width:"100",fieldName:"reason",value:null,items:I,editable:!0,required:!0},{title:"Название вуза на момент отчисления",type:"text",value:"",editable:!0,fieldName:"vuz_otch",required:!0,specialType:"dueToWithdrawal"},{title:"Год отчисления",type:"number",value:"",editable:!0,fieldName:"vuz_otch_year",required:!0,specialType:"dueToWithdrawal"},{title:"Код направления подготовки",type:"text",value:e.specialty_code,editable:!0,fieldName:"specialty_code",required:!0},{title:"Наименование направления подготовки:",type:"text",value:e.specialty_name,editable:!0,fieldName:"specialty_name",required:!0},{title:"Форма обучения:",type:"select",value:p(f,e.educationForm),items:f,editable:!0,width:"100",fieldName:"academic_form",required:!0},{title:"Основа обучения:",type:"select",value:p(y,e.finance),editable:!0,items:y,width:"100",fieldName:"contract_form",required:!0},{title:"Год выдачи предудщего документа об образовании",placeholder:"Укажите год выдачи",type:"number",fieldName:"previous_doc_year",value:"",width:"100%",editable:!0,required:!0},{title:"Предудущий документ об образовании",type:"select",fieldName:"previous_doc_year_type",value:"",width:"100%",items:D,editable:!0,required:!0},{title:"Наименование вуза в момент зачисления",type:"text",value:"",editable:!0,fieldName:"uni_name",required:!0},{title:"Год зачисления",type:"number",value:"",editable:!0,fieldName:"uni_year",required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),V=()=>{const[e,t]=a.useState(null),[i,u]=a.useState(!1),[b,v]=a.useState(!1),[o,g]=a.useState({}),l=i!=null?i:!1,{data:{dataUserApplication:r}}=q.useApplications();return a.useEffect(()=>{r&&t(R(r))},[r]),a.useEffect(()=>{e&&r&&g(s(s({},W(e.data)),k(e.data)))},[e]),d.jsx(S,{isDone:l,children:!!e&&!!t&&d.jsxs(j,{children:[d.jsx(w,n(s({},e),{collapsed:l,setData:t,specialFieldsNameConfig:o})),d.jsx(C,{text:l?"Отправлено":"Отправить",action:()=>B(E.OBUCH,[e],v,u),isLoading:b,completed:i,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:T(e,o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{V as default};
