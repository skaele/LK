import{j as t}from"./vendor-f1fdae2f.js";import{T as i}from"./index-ca35492a.js";import{g as r}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as l,a}from"./get-method-obtaining-fields-22290c63.js";import{g as d}from"./get-teacher-subdivisions-1b4fd80d.js";import{t as s}from"./index-f4b3ece5.js";import{A as m}from"./index-415ac6e5.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const o=e=>({title:"Выдача лицензий и свидетельств о государственной аккредитации",data:[...r(e),{title:"Документ",type:"select",fieldName:"document",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Лицензия на право ведения образовательной деятельности"},{id:1,title:"Свидетельство о государственной аккредитации"},{id:2,title:"Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации"}]},{title:"Университет",type:"select",fieldName:"university",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Московский государственный машиностроительный университет» (МАМИ)"},{id:1,title:"Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)"},{id:2,title:"Московский государственный вечерний металлургический институт» (МГВМИ)"},{id:3,title:"Московский государственный университет инженерной экологии» (МГУИЭ)"},{id:4,title:"Московский государственный индустриальный университет» (МГИУ)"},{id:5,title:"Московский государственный университет печати имени Ивана Фёдорова» (МГУП)"}]},{title:"Период",type:"text",value:"",editable:!0,fieldName:"period",required:!0},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...l(),...d(),...a(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),h=()=>t.jsx(i,{model:s,getForm:o,isSpecialField:!0,formId:m.ISSUANCE_OF_LICENSES});export{h as default};
