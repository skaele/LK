import{r as s,j as i}from"./vendor-48260ac4.js";import{s as p,ai as u,B as m,F as f,I as v,S as x,aj as b,j as A,c as F}from"./index-fbfd648b.js";const S=(t,e)=>({title:"Предоставление каникул в связи с окончанием университета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:t.phone},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Срок предоставления каникул c",type:"date",fieldName:"time-before",value:e.vacation_start||"",editable:!e.vacation_start,required:!0},{title:"по",type:"date",fieldName:"time-to",value:e.vacation_end||"",editable:!e.vacation_end,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],...e.vacation_end&&e.vacation_start?{}:{hint:"Точные сроки предоставления каникул уточняйте в своем отделении Центра по работе со студентами"},documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>{const[t,e]=s.useState(null),[o,r]=s.useState(!1),[c,d]=s.useState(!1),a=o??!1,{data:{dataUserApplication:l}}=p.useApplications(),{data:{user:n}}=u.useUser();return s.useEffect(()=>{l&&n&&e(S(l,n))},[l]),i.jsx(m,{isDone:a,children:!!t&&!!e&&i.jsxs(f,{children:[i.jsx(v,{...t,collapsed:a,setData:e}),i.jsx(x,{text:a?"Отправлено":"Отправить",action:()=>b(A.CRS_VACATIONS,[t],d,r),isLoading:c,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:F(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
