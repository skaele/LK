import{r as a,j as s}from"./vendor-48260ac4.js";import{s as d,B as c,F as m,I as f,S as x,aj as g,j as F,c as S}from"./index-167ac109.js";const b=e=>({title:"Запрос на изменение персональных данных",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,editable:!0,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу  внести  изменения в мои персональные данные и в дальнейшем именовать меня:",fieldName:"new_personal_data",value:"",editable:!0,required:!0,placeholder:"Укажите новые фамилия имя и отчество в именительном падеже"},{title:"По причине",fieldName:"reason",value:"",editable:!0,required:!0}],alert:"Загрузите документы, подтверждающие изменение персональных данных",documents:{files:[],fieldName:"docs",maxFiles:4,required:!0}}),A=()=>{var u;const[e,l]=a.useState(null),[i,o]=a.useState(!1),[n,p]=a.useState(!1),t=i??!1,{data:{dataUserApplication:r}}=d.useApplications();return a.useEffect(()=>{r&&l(b(r))},[r]),s.jsx(c,{isDone:t,children:!!e&&!!l&&s.jsxs(m,{children:[s.jsx(f,{...e,collapsed:t,setData:l}),s.jsx(x,{text:t?"Отправлено":"Отправить",action:()=>g(F.PERS_DATA,[e],p,o),isLoading:n,completed:i,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:S(e)&&!!((u=e==null?void 0:e.documents)!=null&&u.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
