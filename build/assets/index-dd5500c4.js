var C=Object.defineProperty,R=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var D=(i,t,a)=>t in i?C(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,h=(i,t)=>{for(var a in t||(t={}))G.call(t,a)&&D(i,a,t[a]);if(N)for(var a of N(t))I.call(t,a)&&D(i,a,t[a]);return i},_=(i,t)=>R(i,F(t));var k=(i,t,a)=>new Promise((n,c)=>{var o=e=>{try{l(a.next(e))}catch(u){c(u)}},d=e=>{try{l(a.throw(e))}catch(u){c(u)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,d);l((a=a.apply(i,t)).next())});import{r as p,cN as O,j as g}from"./vendor-91dd51cf.js";import{b6 as L,b2 as q,aW as B,b7 as E,s as J,B as $,F as T,I as M,S as V,j as z,c as H}from"./index-2caaee2c.js";const P=(i,t,a)=>k(void 0,null,function*(){var n;a(!1);const c=t.map(l=>{if(Array.isArray(l.data[0])){const e=l.data.map(m=>Object.assign({},...m==null?void 0:m.map(s=>{var v,f;const b={};return s!=null&&s.fieldName&&(b[s==null?void 0:s.fieldName]=s!=null&&(v=s.value)!==null&&v!==void 0&&v.title?s==null||(f=s.value)===null||f===void 0?void 0:f.title:s==null?void 0:s.value),b}))),u={};return u[i]=JSON.stringify(e),u}else return l.data.map(e=>{var m,s;const u={};return e!=null&&e.fieldName&&(u[(m=e==null?void 0:e.fieldName)!=null?m:""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(u[(s=e==null?void 0:e.fieldName)!=null?s:""]=JSON.stringify(e==null?void 0:e.value.map(v=>v.title))),u})}).flat(),o=Object.assign({},...c),d=yield L.postApplicationFx({guid:q(B()||"{}").IndividualGuid,jobGuid:o.jobGuid,signingDate:new Date(new Date().getTime()-new Date().getTimezoneOffset()*6e4).toISOString(),dateOfDismissal:o.last_day,isSendMail:o.get_tk==="По почте",isRetirement:!!o.isRetirement,address:o.get_tk_address,reason:o.reason.charAt(0).toLowerCase()+o.reason.slice(1)});!(d!=null&&(n=d.data)!==null&&n!==void 0&&(n=n.dismissalResponse)!==null&&n!==void 0&&n.isError)&&a(!0)}),U=(i,t,a,n,c,o,d,l,e,u,m,s,v)=>{const{surname:f,name:b,patronymic:y}=i;return{title:"Заявление на увольнение",data:[{title:"ФИО",value:f+" "+b+" "+y,fieldName:"fio",type:"simple-text"},{title:"Должность",type:"simple-text",fieldName:"post",value:t[a].jobTitle.toString()},{title:"Подразделение",type:"simple-text",value:t[a].subDivision.toString(),fieldName:"subDivision"},{title:"",type:"simple-text",value:t[a].jobGuid.toString(),fieldName:"jobGuid"},{title:"Ставка",type:"simple-text",value:t[a].rate.toString(),fieldName:"reate"},{title:"Дата увольнения (последний рабочий день)",type:"date",value:s,fieldName:"last_day",editable:!0,mask:!0,required:!0,minValueInput:E(0),onChange:r=>{v(r)}},{title:"Причина",type:"text",value:u,fieldName:"reason",editable:!0,mask:!0,required:!0,maxValueLength:50,onChange:r=>{m(r)}},{title:"В связи с выходом на пенсию",type:"hr-checkbox",value:n,fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:r=>{c(r)}},{title:"Способ получения трудовой книжки",type:"select",fieldName:"get_tk",value:l,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Очно"},{id:1,title:"По почте"}],onChange:r=>{e(r)}},{title:"Адрес для отправки трудовой книжки",value:o,fieldName:"get_tk_address",editable:!0,mask:!0,required:(l==null?void 0:l.title)=="По почте",visible:(l==null?void 0:l.title)=="По почте",onChange:r=>{d(r)}}]}},X=()=>{var x;var i;const[t,a]=p.useState(null),{data:{dataUserApplication:n,dataWorkerApplication:c},workerLoading:o}=J.useApplications(),[d,l]=p.useState(!1),[e,u]=p.useState(null),[m,s]=p.useState(!1),[v,f]=p.useState(null),[b,y]=p.useState("По собственному желанию"),[r,A]=p.useState(null),S=d!=null?d:!1,{id:w}=O(),j=+w;return p.useEffect(()=>{n&&c&&!o&&a(U(n,c,j,e,u,v,f,m,s,b,y,r,A))},[n,j,o,e,v,m,b,r]),g.jsx($,{isDone:S,children:!!t&&!!a&&g.jsxs(T,{children:[g.jsx(M,_(h({},t),{collapsed:S,setData:a})),g.jsx(V,{text:"Отправить",action:()=>P(z.DISMISSAL,[t],l),isLoading:o,completed:d,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:H(t)&&((x=(i=t.optionalCheckbox)===null||i===void 0?void 0:i.value)!=null?x:!0),alerts:!1})]})})};export{X as default};
