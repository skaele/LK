import{r as a,j as s}from"./vendor-9c916fad.js";import{aM as u,s as p,B as c,F as m,I as f,S as x,ah as b,j as F,c as S}from"./index-707d58cb.js";const g=[{id:0,title:"по собственному желанию"},{id:1,title:"за академическую неуспеваемость"},{id:2,title:"за неоплату обучения"},{id:3,title:"в связи с переводом"},{id:4,title:"отчисление с расторжением договора"}],y=e=>({title:"Отчисление по инициативе обучающегося",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Причина отчисления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:g},{title:"Дата отчисления c:",type:"date",fieldName:"time-before",value:"",minValueInput:u(0),editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),A=()=>{const[e,i]=a.useState(null),[o,r]=a.useState(!1),[d,n]=a.useState(!1),t=o??!1,{data:{dataUserApplication:l}}=p.useApplications();return a.useEffect(()=>{l&&i(y(l))},[l]),s.jsx(c,{isDone:t,children:!!e&&!!i&&s.jsxs(m,{children:[s.jsx(f,{...e,collapsed:t,setData:i}),s.jsx(x,{text:t?"Отправлено":"Отправить",action:()=>b(F.CRS_EXPULSION,[e],n,r),isLoading:d,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:S(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
