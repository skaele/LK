import{j as t}from"./vendor-48260ac4.js";import{T as r}from"./index-727e7906.js";import{g as i}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-8509cef7.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as s}from"./get-last-year-for-period-e1de6b16.js";import{t as l}from"./index-df976dfc.js";import{A as d}from"./index-75da625b.js";import"./send-form-69a8e2a6.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";import"./create-form-store-8a53a3c6.js";const p=e=>({title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",data:[...i(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:s()},...a(),...m(),...o(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),b=()=>t.jsx(r,{model:l,getForm:p,isSpecialField:!0,formId:d.PAYMENT_FOR_CHILD_CARE});export{b as default};
