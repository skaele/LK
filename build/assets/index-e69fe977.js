import{j as u}from"./vendor-91dd51cf.js";import{g as o,a as i}from"./get-default-subdivision-17957fb0.js";import{A as d}from"./index-2caaee2c.js";import{T as p}from"./index-ad521021.js";import{t as n}from"./index-50b0f0f2.js";import"./send-form-f3a555de.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-ddc60056.js";const c=[{id:0,title:"Учебная деятельность"},{id:1,title:"Научная деятельность"}],f=r=>{const{surname:a,name:l,patronymic:m,phone:s,subdivisions:e}=r;return{title:"Запрос на увеличение лимита проверок в системе «Антиплагиат»",data:[{title:"ФИО",value:a+" "+l+" "+m,fieldName:"fio",mask:!0,editable:!1,required:!0},{title:"Подразделение/должность",value:o(e),fieldName:"guid_staff",editable:i(e).length>1,width:"100",required:!0,type:"select",items:i(e),isSpecificSelect:!0},{title:"Контактный телефон",type:"tel",value:s,fieldName:"phone_private",editable:!0,mask:!0,required:!0},{title:"Тип запроса",value:null,fieldName:"req_type",editable:!0,width:"100",required:!0,type:"select",items:c},{title:"Количество проверок",fieldName:"checks_amount",type:"number",value:"",editable:!0,required:!0,mask:!0,customMask:t=>Number(t)>300?"299":t},{title:"Комментарий к заявке",placeholder:"Укажите, для чего необходимо увеличение лимита",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},A=()=>u.jsx(p,{model:n,getForm:f,isSpecialField:!0,formId:d.INCREASE_ANTIPLAGIAT_LIMITS});export{A as default};
