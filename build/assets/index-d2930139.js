import{r as a,j as i}from"./vendor-198a3a64.js";import{ad as n,an as p,F as c,I as m,S as f,at as x,d as y,y as A}from"./index-7ac35755.js";const b=[{id:0,title:"изменение сроков"},{id:1,title:"продление сроков"}],F=[{id:0,title:"промежуточная аттестация"},{id:1,title:"государственная итоговая аттестация (итоговая аттестация)"}],S=e=>({title:"Продление промежуточной аттестации или ГИА",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Тип заявления",type:"select",fieldName:"srok",width:"100",value:null,required:!0,editable:!0,items:b},{title:"Вид аттестации",type:"select",fieldName:"type-attestation",width:"100",value:null,required:!0,editable:!0,items:F},{title:"Причина продления, в связи с",type:"textarea",fieldName:"reason",value:"",editable:!0,required:!0},{title:"Количество листов подтверждающих документов",type:"text",fieldName:"num_sheets",value:null,editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>{const[e,s]=a.useState(null),[r,o]=a.useState(!1),[u,d]=a.useState(!1),t=r??!1,{data:{dataUserApplication:l}}=n.useApplications();return a.useEffect(()=>{l&&s(S(l))},[l]),i.jsx(p,{isDone:t,children:!!e&&!!s&&i.jsxs(c,{children:[i.jsx(m,{...e,collapsed:t,setData:s}),i.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(y.CRS_ATTESTAT,[e],d,o),isLoading:u,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:A(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
