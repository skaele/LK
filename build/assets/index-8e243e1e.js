import{p as g,e as v,x as m,h,u as b,r as f,n as T,j as d}from"./vendor-08ab745b.js";import{b1 as x,b2 as j,aW as B,b3 as k,b4 as F,s as A,B as w,F as N,I as O,S,j as _,c as W,b5 as $}from"./index-0892b83f.js";const D=g({name:"loadBufferPartTimeEmployment",sid:"rqpj9r"}),G=g({name:"sendBufferPartTimeEmployment",sid:"-1vo25s"}),E=v(async()=>{const{data:e}=await x.get(`InternalPartTime.GetAllHistory?PersonalGuid=${j(B()??"").IndividualGuid}`);return e.orders},{name:"loadBufferPartTimeEmploymentFx",sid:"lptsxp"});m({and:[{clock:D,target:E}],or:{sid:"-bwsfri"}});const u=v(async e=>(await x.post("Weekend.AddWeekend",e)).data,{name:"sendBufferPartTimeEmploymentFx",sid:"-26c53s"});m({and:[{clock:G,target:u}],or:{sid:"-bguek1"}});const P=h([],{name:"$bufferPartTimeEmploymentOrders",sid:"-rtc3mi"}),I=u.pending;m({and:[{clock:E.doneData,target:P}],or:{sid:"-bdjmzv"}});m({and:[{clock:u.doneData,fn:e=>{const a=e;return a.isError?{message:a.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:k.evokePopUpMessage}],or:{sid:"-azss5u"}});m({and:[{clock:u.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:k.evokePopUpMessage}],or:{sid:"-a29byt"}});const q={useBufferPartTimeEmployment:()=>({data:b(P),loading:b(I)})},H=(e,a)=>{const{surname:r,name:i,patronymic:s}=e;return{title:"Заявление на трудоустройство по совместительству",data:[{title:"ФИО",value:r+" "+i+" "+s,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделениe, куда производится трудорустройство",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:"",width:"100%",suggestions:a,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения"},{title:"Должность",value:null,fieldName:"post",mask:!0,editable:!0,required:!0},{title:"Ставка",type:"select",fieldName:"rate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}]}]}},J=async(e,a,r)=>{r(!1);const i=a.map(o=>{if(Array.isArray(o.data[0])){const t=o.data.map(p=>Object.assign({},...p?.map(l=>{const y={};return l?.fieldName&&(y[l?.fieldName]=l?.value?.title?l?.value?.title:l?.value),y}))),n={};return n[e]=JSON.stringify(t),n}else return o.data.map(t=>{const n={};return t?.fieldName&&(n[t?.fieldName??""]=typeof t.value!="object"?t?.value:t.value.title),t.type==="multiselect"&&(n[t?.fieldName??""]=JSON.stringify(t?.value.map(p=>p.title))),n})}).flat(),s=Object.assign({},...i);!(await F.sendBufferHolidayWorkFx({employeeGuid:s.jobGuid,dates:[{date:s.holiday_work_date,dayOff:s.extra_holiday_date?s.extra_holiday_date:null,hours:+s.holiday_work_hours}]})).isError&&r(!0)},z=()=>{const[e,a]=f.useState(null),{data:{dataUserApplication:r}}=A.useApplications(),{loading:i}=q.useBufferPartTimeEmployment(),[s,c]=f.useState(!1),o=s??!1,t=T($);return f.useEffect(()=>{r&&!i&&a(H(r,t))},[r,i]),d.jsx(w,{isDone:o,children:!!e&&!!a&&d.jsxs(N,{children:[d.jsx(O,{...e,collapsed:o,setData:a}),d.jsx(S,{text:"Отправить",action:()=>J(_.HOLIDAY_WORK,[e],c),isLoading:i,completed:s,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:W(e)&&(e.optionalCheckbox?.value??!0)})]})})};export{z as default};
