import{r as i,j as o}from"./vendor-905eebdf.js";import{cs as p,s as n,B as c,F as m,I as f,S as F,a3 as A,j as b,c as h}from"./index-fe28ea49.js";const x=[{id:0,title:"Поступающий в бакалавриат, специалитет, магистратуру"},{id:1,title:"Поступающий в аспирантуру"},{id:2,title:"Не поступающий, на период каникул"}],g=e=>{const{surname:t,name:a,patronymic:s,group:l,email:r,phone:u}=e;return{title:"Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:u,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:p},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!0},{title:"Статус",fieldName:"status-for-hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:x}],hint:"Прикрепите справку из приемной комиссии о подаче документов для поступления и/или выписку из приказа о предоставлении каникул",documents:{files:[],fieldName:"docs",required:!1,maxFiles:3,allowedTypes:["application/pdf"]}}},v=()=>{const[e,t]=i.useState(null),{data:{dataUserApplication:a}}=n.useApplications(),[s,l]=i.useState(!1),[r,u]=i.useState(!1),d=s??!1;return i.useEffect(()=>{a&&t(g(a))},[a]),o.jsx(c,{isDone:d,children:!!e&&!!t&&o.jsxs(m,{children:[o.jsx(f,{...e,collapsed:d,setData:t}),o.jsx(F,{text:"Отправить",action:()=>A(b.ACCOMMODATION_FOR_GRADUATES,[e],u,l,!1),isLoading:r,completed:s,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:h(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{v as default};
