var x=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&p(e,a,t[a]);if(n)for(var a of n(t))g.call(t,a)&&p(e,a,t[a]);return e},c=(e,t)=>f(e,b(t));import{j as s,r as l}from"./vendor-3c67dcca.js";import{ad as F,aa as S,F as h,I as A,S as E,ab as v,cI as R,ac as k}from"./index-15ca9195.js";const q=e=>({title:"Запрос на восстановление магнитного пропуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу восстановить мой магнитный пропуск в связи с:",type:"textarea",fieldName:"reason",value:"",editable:!0,required:!0}],alert:s.jsxs(s.Fragment,{children:["1. Заполнить это заявление.",s.jsx("br",{}),"2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.",s.jsx("br",{}),"3. Предоставить заявление в бюро пропусков (Центральная проходная).",s.jsx("br",{}),"4. Получить готовый пропуск в бюро пропусков (Центральная проходная).",s.jsx("br",{}),s.jsx("br",{}),"Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления."]})}),M=()=>{const[e,t]=l.useState(null),[a,i]=l.useState(!1),[d,m]=l.useState(!1),r=a!=null?a:!1,{data:{dataUserApplication:o}}=F.useApplications();return l.useEffect(()=>{o&&t(q(o))},[o]),s.jsx(S,{isDone:r,children:!!e&&!!t&&s.jsxs(h,{children:[s.jsx(A,c(u({},e),{collapsed:r,setData:t})),s.jsx(E,{text:r?"Отправлено":"Отправить",action:()=>v(R.PROPUSK_RESTORE,[e],m,i),isLoading:d,completed:a,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:k(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
