import{j as t}from"./vendor-cbee1f3c.js";import{c as l}from"./index-f356c1dd.js";import{T as i}from"./index-028241ea.js";import"./send-form-83e7f9de.js";import"./get-method-obstaing-c0726de9.js";const m=e=>({title:"Актуализация контактных данных",data:[{title:"Личный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_private,fieldName:"tel_mob_private",mask:!0,required:!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:e==null?void 0:e.tel_staff,fieldName:"tel_staff"},{title:"Личный email",type:"email",value:e.email_private,fieldName:"email_private",required:!0},{title:"Рабочий email",type:"email",value:e.email_staff,fieldName:"email_staff"}]}),u=()=>t.jsx(i,{model:l,getForm:m});export{u as default};
