var E=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,h=(s,e)=>{for(var t in e||(e={}))T.call(e,t)&&_(s,t,e[t]);if(N)for(var t of N(e))B.call(e,t)&&_(s,t,e[t]);return s},k=(s,e)=>A(s,C(e));var F=(s,e,t)=>new Promise((v,l)=>{var m=n=>{try{a(t.next(n))}catch(o){l(o)}},r=n=>{try{a(t.throw(n))}catch(o){l(o)}},a=n=>n.done?v(n.value):Promise.resolve(n.value).then(m,r);a((t=t.apply(s,e)).next())});import{r as f,j as g}from"./vendor-91dd51cf.js";import{b9 as I,ba as O,b7 as w,s as G,bb as R,P as q,B as J,F as M,I as W,S as $,c as L}from"./index-2caaee2c.js";import{g as V,a as P}from"./get-default-subdivision-17957fb0.js";const H=(s,e,t)=>F(void 0,null,function*(){t(!1);const v=e.map(r=>{if(Array.isArray(r.data[0])){const a=r.data.map(o=>Object.assign({},...o==null?void 0:o.map(i=>{var p,d;const b={};return i!=null&&i.fieldName&&(b[i==null?void 0:i.fieldName]=i!=null&&(p=i.value)!==null&&p!==void 0&&p.title?i==null||(d=i.value)===null||d===void 0?void 0:d.title:i==null?void 0:i.value),b}))),n={};return n[s]=JSON.stringify(a),n}else return r.data.map(a=>{var o,i;const n={};return a!=null&&a.fieldName&&(n[(o=a==null?void 0:a.fieldName)!=null?o:""]=typeof a.value!="object"?a==null?void 0:a.value:a.value.title),a.type==="multiselect"&&(n[(i=a==null?void 0:a.fieldName)!=null?i:""]=JSON.stringify(a==null?void 0:a.value.map(p=>p.title))),n})}).flat(),l=Object.assign({},...v),m=yield I.sendBufferMedicalExaminationFx({employeeGuid:l.jobGuid,start:l.extra_examination_date,end:l.isRetirement?l.extra_examination_date_2:l.extra_examination_date});!(m!=null&&m.isError)&&t(!0)}),U=s=>{const e=s.find(t=>t.fieldName==="isRetirement");return e!=null&&e.value&&e!=null&&e.value?{reason:"Compensation2"}:{reason:null}},z=(s,e,t,v,l,m,r,a,n,o)=>{const{surname:i,name:p,patronymic:d,subdivisions:b}=s,u=t?new Date(t):new Date,y=n||"",D=r||V(b),x=new Date(u.getTime()+24*60*60*1e3);return O(y)==="true"&&u.getDay()===5?x.setDate(u.getDate()+1):(u.getDay()===5||u.getDay()===6||u.getDay()===0)&&x.setDate(u.getDate()+(8-u.getDay())%7),{title:"Заявление о диспансеризации",data:[{title:"ФИО",value:i+" "+p+" "+d,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделение/должность",value:D,fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:P(b),isSpecificSelect:!0,onChange:c=>{a(c),o(c.id)}},{title:"Дата прохождения диспансеризации",type:"date",value:t,fieldName:"extra_examination_date",editable:!0,onChange:c=>{v(c)},mask:!0,required:!0,maxValueLength:1,minValueInput:w(0)},{title:"Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого",type:"hr-checkbox",value:l||"",fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:c=>{m(c)}},{title:"Второй день отдыха",type:"date",value:x.toISOString().substr(0,10),fieldName:"extra_examination_date_2",editable:!1,mask:!0,required:!1,specialType:"Compensation2",maxValueLength:1},{title:"",type:"simple-text",value:y,fieldName:"jobGuid",visible:!1}]}},Z=()=>{var j;var s;const[e,t]=f.useState(null),[v,l]=f.useState(null),[m]=f.useState(null),[r,a]=f.useState(null),[n,o]=f.useState(null),[i,p]=f.useState(null),{data:{dataUserApplication:d,dataWorkerApplication:b}}=G.useApplications(),{loading:u}=R.useBufferMedicalExamination(),[y,D]=f.useState({}),[x,S]=f.useState(!1),c=x!=null?x:!1;return f.useEffect(()=>{d&&b&&!u&&t(z(d,b,v,l,i,p,n,o,r,a))},[d,u,v,m,i]),f.useEffect(()=>{e&&d&&D(U(e.data))},[e]),g.jsx(q,{children:g.jsx(J,{isDone:c,children:!!e&&!!t&&g.jsxs(M,{children:[g.jsx(W,k(h({},e),{collapsed:c,setData:t,specialFieldsNameConfig:y})),g.jsx($,{text:"Отправить",action:()=>H("",[e],S),isLoading:u,completed:x,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:c,isActive:L(e)&&((j=(s=e.optionalCheckbox)===null||s===void 0?void 0:s.value)!=null?j:!0),alerts:!1})]})})})};export{Z as default};
