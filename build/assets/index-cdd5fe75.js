import{j as t}from"./vendor-f1fdae2f.js";import{T as r}from"./index-ca35492a.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{t as i}from"./index-f4b3ece5.js";import{A as l}from"./index-415ac6e5.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const u=e=>({title:"Курьер",data:[...a(e),{title:"Наименование организации",value:null,fieldName:"NameOrganization",editable:!0,required:!0},{title:"Полный адрес доставки",type:"textarea",fieldName:"full_delivery_address",value:"",editable:!0,required:!0},{title:"Контактное лицо принимающей стороны",value:null,fieldName:"fio_receiving_party",editable:!0,required:!0},{title:"Контактный телефон принимающей стороны",type:"tel",value:"",fieldName:"phone_receiving_party",editable:!0,mask:!0,required:!0},{title:"Вид документа",value:"",fieldName:"type_document",placeholder:"(конверт, пакет, коробка и т.п.) и ее примерные размеры",editable:!0,required:!0},{title:"Количество документов",type:"number",value:"",fieldName:"number_document",editable:!0,required:!0},{title:"Дата доставки",type:"date",value:"",fieldName:"delivery_date",editable:!0,required:!0},{title:"Интервал доставки",value:"",fieldName:"type_document",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),c=()=>t.jsx(r,{model:i,getForm:u,formId:l.COURIER});export{c as default};
