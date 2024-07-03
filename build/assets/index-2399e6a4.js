import{r as a,q as P,cL as F,j as g}from"./vendor-84bdec13.js";import{ay as q,s as W,aH as A,B as R,F as B,I as E,S as O,j as I,c as H,aw as L,aI as U}from"./index-2258ba16.js";import{s as $}from"./send-hr-form-work-transfer-5693e558.js";const G=(s,e,l,t,o,r,n,d,c,f,u,h,p,N,m,S)=>{const{surname:v,name:x,patronymic:b}=s;return{title:"Заявление на перевод",data:[{title:"ФИО",value:v+" "+x+" "+b,fieldName:"fio",type:"simple-text",visible:!0},{title:"",type:"simple-text",value:e[l].jobGuid.toString(),fieldName:"jobGuid",visible:!1},{title:"Текущее место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:e[l].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:e[l].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Cтавка",type:"simple-text",value:e[l].rate.toString(),fieldName:"currentRate",visible:!0},{title:"Новое место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Подразделение",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:d,width:"100%",suggestions:S,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения",onChange:i=>{c(i)}},{title:"Должность",value:r,fieldName:"newPost",editable:!0,mask:!0,required:!0,onChange:i=>{n(i)}},{title:"Тип занятости",type:"select",fieldName:"employment",value:t,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное место работы"},{id:1,title:"По совместительству"}],onChange:i=>{o(i),i.title=="По совместительству"&&f.title=="1"&&u(null)}},{title:"Ставка",type:"select",fieldName:"newRate",value:f,editable:!0,required:!0,width:"100%",items:(t==null?void 0:t.title)=="По совместительству"?[{id:1,title:"0.5"},{id:2,title:"0.25"}]:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}],onChange:i=>{u(i)}},{title:"При устройстве по совместительству ставка не может превышать 0.5",type:"text-warning",fieldName:"PartTime",value:null,visible:(t==null?void 0:t.title)=="По совместительству",required:!1,width:"100%"},{title:"Тип совместительства",type:"select",fieldName:"parttime_type",value:N,editable:!0,required:(t==null?void 0:t.title)=="По совместительству",specialType:"PartTime",width:"100%",items:[{id:0,title:"Внутреннее"},{id:1,title:"Внешнее"}],onChange:i=>{m(i)}},{title:"Дата перевода",type:"date",value:h,fieldName:"transferDate",editable:!0,mask:!0,required:!0,minValueInput:q(0),onChange:i=>{p(i)}}]}},M=s=>{const e=s.find(l=>l.fieldName==="employment");return e!=null&&e.value&&(e==null?void 0:e.value).title==="По совместительству"?{reason:"PartTime"}:{reason:null}},Y=()=>{var D;const[s,e]=a.useState(null),l=P(L),{data:{dataUserApplication:t,dataWorkerApplication:o}}=W.useApplications(),{loading:r}=A.useBufferWorkTransfer(),[n,d]=a.useState(!1),[c,f]=a.useState(null),[u,h]=a.useState(null),[p,N]=a.useState(null),[m,S]=a.useState(null),[v,x]=a.useState(null),[b,i]=a.useState(null),[C,j]=a.useState({}),k=P(U),T=n??!1,{id:y}=F(),w=+y;return a.useEffect(()=>{s&&t&&j(M(s.data))},[s]),a.useEffect(()=>{t&&o&&!r&&e(G(t,o,w,u,h,p,N,m,S,v,x,b,i,c,f,l))},[t,w,r,u,p,m,v,b,c]),g.jsx(R,{isDone:T,children:!!s&&!!e&&g.jsxs(B,{children:[g.jsx(E,{...s,collapsed:T,setData:e,specialFieldsNameConfig:C}),g.jsx(O,{text:"Отправить",action:()=>$(I.HOLIDAY_WORK,[s],d,k),isLoading:r,completed:n,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:T,isActive:H(s)&&(((D=s.optionalCheckbox)==null?void 0:D.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Y as default};
