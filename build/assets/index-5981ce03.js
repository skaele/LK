import{p as b,e as h,x as d,h as T,u as k,r as f,n as A,j as m}from"./vendor-ab783af7.js";import{ar as x,as as E,at as w,au as B,av as F,s as N,B as O,F as S,I as _,S as W,j as D,c as $,aw as G}from"./index-07cca455.js";const I=b(),H=b(),P=h(async()=>{const{data:t}=await E.get(`InternalPartTime.GetAllHistory?PersonalGuid=${w(B()??"").IndividualGuid}`);return t.orders});d({clock:I,target:P});const c=h(async t=>(await E.post("Weekend.AddWeekend",t)).data);d({clock:H,target:c});const j=T([]),J=c.pending;d({clock:P.doneData,target:j});d({clock:c.doneData,fn:t=>{const s=t;return s.isError?{message:s.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:x.evokePopUpMessage});d({clock:c.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:x.evokePopUpMessage});const q={useBufferPartTimeEmployment:()=>({data:k(j),loading:k(J)})},L=(t,s)=>{const{surname:r,name:n,patronymic:o}=t;return{title:"Заявление на трудоустройство по совместительству",data:[{title:"ФИО",value:r+" "+n+" "+o,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделениe, куда производится трудорустройство",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:"",width:"100%",suggestions:s,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения"},{title:"Должность",value:null,fieldName:"post",mask:!0,editable:!0,required:!0},{title:"Ставка",type:"select",fieldName:"rate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}]}]}},U=async(t,s,r)=>{r(!1);const n=s.map(u=>{if(Array.isArray(u.data[0])){const e=u.data.map(l=>Object.assign({},...l==null?void 0:l.map(a=>{var g,v;const y={};return a!=null&&a.fieldName&&(y[a==null?void 0:a.fieldName]=(g=a==null?void 0:a.value)!=null&&g.title?(v=a==null?void 0:a.value)==null?void 0:v.title:a==null?void 0:a.value),y}))),i={};return i[t]=JSON.stringify(e),i}else return u.data.map(e=>{const i={};return e!=null&&e.fieldName&&(i[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(l=>l.title))),i})}).flat(),o=Object.assign({},...n);!(await F.sendBufferHolidayWorkFx({employeeGuid:o.jobGuid,dates:[{date:o.holiday_work_date,dayOff:o.extra_holiday_date?o.extra_holiday_date:null,hours:+o.holiday_work_hours}]})).isError&&r(!0)},R=()=>{var i;const[t,s]=f.useState(null),{data:{dataUserApplication:r}}=N.useApplications(),{loading:n}=q.useBufferPartTimeEmployment(),[o,p]=f.useState(!1),u=o??!1,e=A(G);return f.useEffect(()=>{r&&!n&&s(L(r,e))},[r,n]),m.jsx(O,{isDone:u,children:!!t&&!!s&&m.jsxs(S,{children:[m.jsx(_,{...t,collapsed:u,setData:s}),m.jsx(W,{text:"Отправить",action:()=>U(D.HOLIDAY_WORK,[t],p),isLoading:n,completed:o,setCompleted:p,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:$(t)&&(((i=t.optionalCheckbox)==null?void 0:i.value)??!0)})]})})};export{R as default};
