var w=Object.defineProperty,R=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var D=(l,a,t)=>a in l?w(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,N=(l,a)=>{for(var t in a||(a={}))G.call(a,t)&&D(l,t,a[t]);if(h)for(var t of h(a))I.call(a,t)&&D(l,t,a[t]);return l},k=(l,a)=>R(l,F(a));var _=(l,a,t)=>new Promise((n,m)=>{var u=e=>{try{s(t.next(e))}catch(o){m(o)}},d=e=>{try{s(t.throw(e))}catch(o){m(o)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(u,d);s((t=t.apply(l,a)).next())});import{r as f,cM as O,j as y}from"./vendor-33947725.js";import{b6 as L,b3 as q,aW as B,b7 as E,s as J,B as $,F as M,I as T,S as V,j as z,c as H}from"./index-7bd274a4.js";const P=(l,a,t)=>_(void 0,null,function*(){var n;t(!1);const m=a.map(s=>{if(Array.isArray(s.data[0])){const e=s.data.map(r=>Object.assign({},...r==null?void 0:r.map(i=>{var c,p;const b={};return i!=null&&i.fieldName&&(b[i==null?void 0:i.fieldName]=i!=null&&(c=i.value)!==null&&c!==void 0&&c.title?i==null||(p=i.value)===null||p===void 0?void 0:p.title:i==null?void 0:i.value),b}))),o={};return o[l]=JSON.stringify(e),o}else return s.data.map(e=>{var o;const r={};if(e!=null&&e.fieldName&&(r[(o=e==null?void 0:e.fieldName)!==null&&o!==void 0?o:""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"){var i;r[(i=e==null?void 0:e.fieldName)!==null&&i!==void 0?i:""]=JSON.stringify(e==null?void 0:e.value.map(c=>c.title))}return r})}).flat(),u=Object.assign({},...m),d=yield L.postApplicationFx({guid:q(B()||"{}").IndividualGuid,jobGuid:u.jobGuid,signingDate:new Date(new Date().getTime()-new Date().getTimezoneOffset()*6e4).toISOString(),dateOfDismissal:u.last_day,isSendMail:u.get_tk==="По почте",isRetirement:!!u.isRetirement,address:u.get_tk_address,reason:u.reason.charAt(0).toLowerCase()+u.reason.slice(1)});!(d!=null&&(n=d.data)!==null&&n!==void 0&&(n=n.dismissalResponse)!==null&&n!==void 0&&n.isError)&&t(!0)}),U=(l,a,t,n,m,u,d,s,e,o,r,i,c)=>{const{surname:p,name:b,patronymic:g}=l;return{title:"Заявление на увольнение",data:[{title:"ФИО",value:p+" "+b+" "+g,fieldName:"fio",type:"simple-text"},{title:"Должность",type:"simple-text",fieldName:"post",value:a[t].jobTitle.toString()},{title:"Подразделение",type:"simple-text",value:a[t].subDivision.toString(),fieldName:"subDivision"},{title:"",type:"simple-text",value:a[t].jobGuid.toString(),fieldName:"jobGuid"},{title:"Ставка",type:"simple-text",value:a[t].rate.toString(),fieldName:"reate"},{title:"Дата увольнения (последний рабочий день)",type:"date",value:i,fieldName:"last_day",editable:!0,mask:!0,required:!0,minValueInput:E(0),onChange:v=>{c(v)}},{title:"Причина",type:"text",value:o,fieldName:"reason",editable:!0,mask:!0,required:!0,maxValueLength:50,onChange:v=>{r(v)}},{title:"В связи с выходом на пенсию",type:"hr-checkbox",value:n,fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:v=>{m(v)}},{title:"Способ получения трудовой книжки",type:"select",fieldName:"get_tk",value:s,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Очно"},{id:1,title:"По почте"}],onChange:v=>{e(v)}},{title:"Адрес для отправки трудовой книжки",value:u,fieldName:"get_tk_address",editable:!0,mask:!0,required:(s==null?void 0:s.title)=="По почте",visible:(s==null?void 0:s.title)=="По почте",onChange:v=>{d(v)}}]}},X=()=>{var l,a;const[t,n]=f.useState(null),{data:{dataUserApplication:m,dataWorkerApplication:u},workerLoading:d}=J.useApplications(),[s,e]=f.useState(!1),[o,r]=f.useState(null),[i,c]=f.useState(!1),[p,b]=f.useState(null),[g,v]=f.useState("По собственному желанию"),[j,A]=f.useState(null),S=s!=null?s:!1,{id:C}=O(),x=+C;return f.useEffect(()=>{m&&u&&!d&&n(U(m,u,x,o,r,p,b,i,c,g,v,j,A))},[m,x,d,o,p,i,g,j]),y.jsx($,{isDone:S,children:!!t&&!!n&&y.jsxs(M,{children:[y.jsx(T,k(N({},t),{collapsed:S,setData:n})),y.jsx(V,{text:"Отправить",action:()=>P(z.DISMISSAL,[t],e),isLoading:d,completed:s,setCompleted:e,repeatable:!1,buttonSuccessText:"Отправлено",isDone:S,isActive:H(t)&&((l=(a=t.optionalCheckbox)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:!0),alerts:!1})]})})};export{X as default};
