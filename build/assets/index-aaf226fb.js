var B=Object.defineProperty,E=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var F=(i,e,t)=>e in i?B(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,k=(i,e)=>{for(var t in e||(e={}))$.call(e,t)&&F(i,t,e[t]);if(C)for(var t of C(e))_.call(e,t)&&F(i,t,e[t]);return i},D=(i,e)=>E(i,O(e));import{r as a,q as P,cM as I,j as b}from"./vendor-33947725.js";import{b7 as M,s as U,bg as G,B as H,F as L,I as K,S as V,j as Y,c as z,b5 as J,bh as Q}from"./index-5e1edf2c.js";import{s as X}from"./send-hr-form-work-transfer-404a0231.js";const Z=(i,e,t,s,g,r,c,u,o,n,d,h,p,N,f,S)=>{const{surname:m,name:x,patronymic:v}=i;return{title:"Заявление на перевод",data:[{title:"ФИО",value:m+" "+x+" "+v,fieldName:"fio",type:"simple-text",visible:!0},{title:"",type:"simple-text",value:e[t].jobGuid.toString(),fieldName:"jobGuid",visible:!1},{title:"Текущее место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:e[t].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:e[t].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Cтавка",type:"simple-text",value:e[t].rate.toString(),fieldName:"currentRate",visible:!0},{title:"Новое место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Подразделение",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:u,width:"100%",suggestions:S,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения",onChange:l=>{o(l)}},{title:"Должность",value:r,fieldName:"newPost",editable:!0,mask:!0,required:!0,onChange:l=>{c(l)}},{title:"Тип занятости",type:"select",fieldName:"employment",value:s,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное место работы"},{id:1,title:"По совместительству"}],onChange:l=>{g(l),l.title=="По совместительству"&&n.title=="1"&&d(null)}},{title:"Ставка",type:"select",fieldName:"newRate",value:n,editable:!0,required:!0,width:"100%",items:(s==null?void 0:s.title)=="По совместительству"?[{id:1,title:"0.5"},{id:2,title:"0.25"}]:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}],onChange:l=>{d(l)}},{title:"При устройстве по совместительству ставка не может превышать 0.5",type:"text-warning",fieldName:"PartTime",value:null,visible:(s==null?void 0:s.title)=="По совместительству",required:!1,width:"100%"},{title:"Тип совместительства",type:"select",fieldName:"parttime_type",value:N,editable:!0,required:(s==null?void 0:s.title)=="По совместительству",specialType:"PartTime",width:"100%",items:[{id:0,title:"Внутреннее"},{id:1,title:"Внешнее"}],onChange:l=>{f(l)}},{title:"Дата перевода",type:"date",value:h,fieldName:"transferDate",editable:!0,mask:!0,required:!0,minValueInput:M(0),onChange:l=>{p(l)}}]}},ee=i=>{const e=i.find(t=>t.fieldName==="employment");return e!=null&&e.value&&(e==null?void 0:e.value).title==="По совместительству"?{reason:"PartTime"}:{reason:null}},ae=()=>{var i,e;const[t,s]=a.useState(null),g=P(J),{data:{dataUserApplication:r,dataWorkerApplication:c}}=U.useApplications(),{loading:u}=G.useBufferWorkTransfer(),[o,n]=a.useState(!1),[d,h]=a.useState(null),[p,N]=a.useState(null),[f,S]=a.useState(null),[m,x]=a.useState(null),[v,l]=a.useState(null),[T,j]=a.useState(null),[q,W]=a.useState({}),A=P(Q),y=o!=null?o:!1,{id:R}=I(),w=+R;return a.useEffect(()=>{t&&r&&W(ee(t.data))},[t]),a.useEffect(()=>{r&&c&&!u&&s(Z(r,c,w,p,N,f,S,m,x,v,l,T,j,d,h,g))},[r,w,u,p,f,m,v,T,d]),b.jsx(H,{isDone:y,children:!!t&&!!s&&b.jsxs(L,{children:[b.jsx(K,D(k({},t),{collapsed:y,setData:s,specialFieldsNameConfig:q})),b.jsx(V,{text:"Отправить",action:()=>X(Y.HOLIDAY_WORK,[t],n,A),isLoading:u,completed:o,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:y,isActive:z(t)&&((i=(e=t.optionalCheckbox)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ae as default};
