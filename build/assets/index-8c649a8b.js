import{j as i}from"./vendor-48260ac4.js";import{$ as o,g as l}from"./index-b11f750d.js";import{c as m}from"./create-form-store-e7c8c90b.js";import{T as s}from"./index-a9b973a4.js";import"./send-form-d27d18cf.js";import"./get-method-obstaing-c0726de9.js";const n=()=>o.get(`?getContactData&token=${l()}`),f=e=>{const t=new FormData;t.set("token",l()),t.set("saveContactData","1");for(const[r,a]of Object.entries(e))t.set(r,a);return o.post("?saveContactData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},{effects:p,events:u,selectors:c}=m({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:n,post:f}}),_=Object.freeze(Object.defineProperty({__proto__:null,effects:p,events:u,selectors:c},Symbol.toStringTag,{value:"Module"})),v=e=>({title:"Актуализация контактных данных",data:[{title:"Личный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_private,fieldName:"tel_mob_private",mask:!0,required:!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:e==null?void 0:e.tel_staff,fieldName:"tel_staff"},{title:"Личный email",type:"email",value:e.email_private,fieldName:"email_private",required:!0},{title:"Рабочий email",type:"email",value:e.email_staff,fieldName:"email_staff"}]}),D=()=>i.jsx(s,{model:_,getForm:v});export{D as default};
