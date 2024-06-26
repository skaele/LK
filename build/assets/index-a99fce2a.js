import{j as e,r as t}from"./vendor-b80865ba.js";import{cq as d,s as S,B as y,F as j,h as N,cu as _,S as q,a3 as A,j as D,c as i}from"./index-5813d93c.js";const k=a=>{const{surname:o,name:r,patronymic:c,group:s,email:n,phone:l}=a;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:o+" "+r+" "+c,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:n,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:l,editable:!0,required:!0},{title:"Причина предоставления академического отпуска",placeholder:"В соответствии с приказом о предоставлении академического отпуска",type:"select",width:"100%",value:null,fieldName:"reason",editable:!0,required:!0,items:[{id:"medical indications",title:"По медицинским показаниям"},{id:"personal circumstances",title:"По обстоятельствам личного характера"}]},{title:"Дата начала академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:null,fieldName:"begin_academic_leave_period",editable:!0,required:!0},{title:"Дата окончания академического отпуска",placeholder:"Укажите дату в соответствии с приказом о предоставлении академического отпуска",type:"date",value:"",fieldName:"end_academic_leave_period",editable:!0,required:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0,placeholder:"Разъясните необходимость проживания в общежитии в период академического отпуска",required:!0}],hint:e.jsxs(e.Fragment,{children:["В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы.",e.jsx("br",{}),e.jsx("br",{}),"Даты и причину необходимо указать в соответствии с приказом о предоставлении академического отпуска"]}),optionalCheckbox:{fieldName:"is_not_document",value:!1,title:"Нет подтверждающего документа",required:!1},documents:{files:[],fieldName:"docs",required:!1,maxFiles:1,allowedTypes:["application/pdf"]}}},E=()=>{const[a,o]=t.useState(null),[r,c]=t.useState(d.kvdCert),[s,n]=t.useState(d.fluorographyCert),[l,g]=t.useState(d.vichRwCert),[u,h]=t.useState(d.graftCert),[p,f]=t.useState(!1),[C,v]=t.useState(!1),F=p??!1,{data:{dataUserApplication:m}}=S.useApplications(),x=!!a;if(t.useEffect(()=>{m&&o(k(m))},[m]),!x)return null;const b=[[{dataForm:a,setDataForm:o}],[{dataForm:r,setDataForm:c}],[{dataForm:s,setDataForm:n}],[{dataForm:l,setDataForm:g}],[{dataForm:u,setDataForm:h}]];return e.jsx(y,{isDone:F,children:e.jsxs(j,{children:[e.jsx(N,{size:4,align:"left",children:"Предоставление права проживания в период академического отпуска"}),e.jsx(_,{stagesConfig:b}),e.jsx(q,{text:"Отправить",action:()=>A(D.USG_GETHOSTEL_AO,[a,r,s,l,u],v,f),isLoading:C,completed:p,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:F,isActive:i(a)&&i(s)&&i(l)&&i(u)&&i(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{E as default};
