var A=Object.defineProperty,C=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(i,e,a)=>e in i?A(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,_=(i,e)=>{for(var a in e||(e={}))B.call(e,a)&&h(i,a,e[a]);if(N)for(var a of N(e))F.call(e,a)&&h(i,a,e[a]);return i},k=(i,e)=>C(i,T(e));var E=(i,e,a)=>new Promise((x,u)=>{var f=n=>{try{t(a.next(n))}catch(o){u(o)}},r=n=>{try{t(a.throw(n))}catch(o){u(o)}},t=n=>n.done?x(n.value):Promise.resolve(n.value).then(f,r);t((a=a.apply(i,e)).next())});import{r as d,j as D}from"./vendor-00bea631.js";import{b9 as I,ba as O,b7 as w,s as G,bb as R,P as q,B as J,F as M,I as W,S as L,c as V}from"./index-ed5dff92.js";import{g as P,a as H}from"./get-default-subdivision-17957fb0.js";const U=(i,e,a)=>E(void 0,null,function*(){a(!1);const x=e.map(r=>{if(Array.isArray(r.data[0])){const t=r.data.map(o=>Object.assign({},...o==null?void 0:o.map(s=>{var b,m;const l={};return s!=null&&s.fieldName&&(l[s==null?void 0:s.fieldName]=(b=s==null?void 0:s.value)!=null&&b.title?(m=s==null?void 0:s.value)==null?void 0:m.title:s==null?void 0:s.value),l}))),n={};return n[i]=JSON.stringify(t),n}else return r.data.map(t=>{var o,s;const n={};return t!=null&&t.fieldName&&(n[(o=t==null?void 0:t.fieldName)!=null?o:""]=typeof t.value!="object"?t==null?void 0:t.value:t.value.title),t.type==="multiselect"&&(n[(s=t==null?void 0:t.fieldName)!=null?s:""]=JSON.stringify(t==null?void 0:t.value.map(l=>l.title))),n})}).flat(),u=Object.assign({},...x),f=yield I.sendBufferMedicalExaminationFx({employeeGuid:u.jobGuid,start:u.extra_examination_date,end:u.isRetirement?u.extra_examination_date_2:u.extra_examination_date});!(f!=null&&f.isError)&&a(!0)}),$=i=>{const e=i.find(a=>a.fieldName==="isRetirement");return e!=null&&e.value&&e!=null&&e.value?{reason:"Compensation2"}:{reason:null}},z=(i,e,a,x,u,f,r,t,n,o)=>{const{surname:s,name:l,patronymic:b,subdivisions:m}=i,c=a?new Date(a):new Date,S=n||"",g=r||P(m),y=new Date(c.getTime()+24*60*60*1e3);return O(S)==="true"&&c.getDay()===5?y.setDate(c.getDate()+1):(c.getDay()===5||c.getDay()===6||c.getDay()===0)&&y.setDate(c.getDate()+(8-c.getDay())%7),{title:"Заявление о диспансеризации",data:[{title:"ФИО",value:s+" "+l+" "+b,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделение/должность",value:g,fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:H(m),isSpecificSelect:!0,onChange:p=>{t(p),o(p.id)}},{title:"Дата прохождения диспансеризации",type:"date",value:a,fieldName:"extra_examination_date",editable:!0,onChange:p=>{x(p)},mask:!0,required:!0,maxValueLength:1,minValueInput:w(0)},{title:"Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого",type:"hr-checkbox",value:u||"",fieldName:"isRetirement",editable:!0,mask:!0,required:!1,onChange:p=>{f(p)}},{title:"Второй день отдыха",type:"date",value:y.toISOString().substr(0,10),fieldName:"extra_examination_date_2",editable:!1,mask:!0,required:!1,specialType:"Compensation2",maxValueLength:1},{title:"",type:"simple-text",value:S,fieldName:"jobGuid",visible:!1}]}},Z=()=>{var p,j;const[i,e]=d.useState(null),[a,x]=d.useState(null),[u]=d.useState(null),[f,r]=d.useState(null),[t,n]=d.useState(null),[o,s]=d.useState(null),{data:{dataUserApplication:l,dataWorkerApplication:b}}=G.useApplications(),{loading:m}=R.useBufferMedicalExamination(),[c,S]=d.useState({}),[g,y]=d.useState(!1),v=g!=null?g:!1;return d.useEffect(()=>{l&&b&&!m&&e(z(l,b,a,x,o,s,t,n,f,r))},[l,m,a,u,o]),d.useEffect(()=>{i&&l&&S($(i.data))},[i]),D.jsx(q,{children:D.jsx(J,{isDone:v,children:!!i&&!!e&&D.jsxs(M,{children:[D.jsx(W,k(_({},i),{collapsed:v,setData:e,specialFieldsNameConfig:c})),D.jsx(L,{text:"Отправить",action:()=>U("",[i],y),isLoading:m,completed:g,setCompleted:y,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:V(i)&&((j=(p=i.optionalCheckbox)==null?void 0:p.value)!=null?j:!0),alerts:!1})]})})})};export{Z as default};
