import{r as l,j as r}from"./vendor-cbee1f3c.js";import{g as p,a as u}from"./get-default-subdivision-17957fb0.js";import{s as m,B as d,F as f,I as b,S as x,a5 as S,A as g,b as h}from"./index-f356c1dd.js";const F=e=>{const{surname:t,name:a,patronymic:s,subdivisions:i}=e;return{title:"Запрос на изменение корпоративной электронной почты",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+s,editable:!1},{title:"Подразделение/должность",value:p(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:u(i),isSpecificSelect:!0},{fieldName:"email",title:"Корпоративная электронная почта",type:"email",value:"",required:!0},{fieldName:"show_email_inner",title:"Показывать корпоративную почту внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_email_outer",title:"Показывать корпоративную почту на сайте",type:"checkbox",value:!1}]}},_=()=>{const[e,t]=l.useState(null),[a,s]=l.useState(!1),[i,n]=l.useState(!1),o=a??!1,{data:{dataUserApplication:c}}=m.useApplications();return l.useEffect(()=>{c&&t(F(c))},[c]),r.jsx(d,{isDone:o,children:!!e&&!!t&&r.jsxs(f,{noHeader:!0,children:[r.jsx(b,{...e,collapsed:o,setData:t}),r.jsx(x,{text:o?"Отправлено":"Отправить",action:()=>S(g.EDIT_PHONEBOOK_EMAIL,[e],n,s,!0),isLoading:i,completed:a,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:h(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{_ as default};
