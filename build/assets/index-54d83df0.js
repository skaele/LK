import{r as s,j as o}from"./vendor-48260ac4.js";import{s as f,db as F,B as g,F as x,I as u,S as j,aj as S,j as b,c as d}from"./index-75da625b.js";const h=e=>{const{phone:i,email:t}=e;return{title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:t,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}},N=()=>{const[e,i]=s.useState(null),[t,r]=s.useState(null),[n,c]=s.useState(!1),[m,p]=s.useState(!1),a=n??!1,{data:{dataUserApplication:l}}=f.useApplications();return s.useEffect(()=>{l&&(i(h(l)),r(F({config:{title:"Предоставление справок о группе здоровья",issueDateFieldName:"date_of_issue",organizationFieldName:"organization",docsFieldName:"docs"}})))},[l]),o.jsx(g,{isDone:a,children:!!e&&!!t&&o.jsxs(x,{noHeader:!0,children:[o.jsx(u,{...e,collapsed:a,setData:i}),o.jsx(u,{...t,collapsed:a,setData:r}),o.jsx(j,{text:a?"Отправлено":"Отправить",action:()=>S(b.MEDICAL_CERT_086,[e,t],p,c,!0),isLoading:m,completed:n,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:d(e)&&d(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
