import{r as a,j as i}from"./vendor-ab783af7.js";import{s as p,B as d,F as c,I as m,S as f,a3 as x,j as A,c as b}from"./index-07cca455.js";const y=[{id:0,title:"изменение сроков"},{id:1,title:"продление сроков"}],F=[{id:0,title:"промежуточная аттестация"},{id:1,title:"государственная итоговая аттестация (итоговая аттестация)"}],S=e=>({title:"Продление промежуточной аттестации или ГИА",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Тип заявления",type:"select",fieldName:"srok",width:"100",value:null,required:!0,editable:!0,items:y},{title:"Вид аттестации",type:"select",fieldName:"type-attestation",width:"100",value:null,required:!0,editable:!0,items:F},{title:"Причина продления, в связи с",type:"textarea",fieldName:"reason",value:"",editable:!0,required:!0},{title:"Количество листов подтверждающих документов",type:"text",fieldName:"num_sheets",value:null,editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>{const[e,s]=a.useState(null),[r,o]=a.useState(!1),[u,n]=a.useState(!1),t=r??!1,{data:{dataUserApplication:l}}=p.useApplications();return a.useEffect(()=>{l&&s(S(l))},[l]),i.jsx(d,{isDone:t,children:!!e&&!!s&&i.jsxs(c,{children:[i.jsx(m,{...e,collapsed:t,setData:s}),i.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(A.CRS_ATTESTAT,[e],n,o),isLoading:u,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:b(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
