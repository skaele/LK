import{r as i,j as o}from"./vendor-f1fdae2f.js";import{cN as p,a5 as n,av as c,F as m,I as f,S as F,az as A,d as b,Q as h}from"./index-415ac6e5.js";const x=[{id:0,title:"Поступающий в бакалавриат, специалитет, магистратуру"},{id:1,title:"Поступающий в аспирантуру"},{id:2,title:"Не поступающий, на период каникул"}],g=e=>{const{surname:t,name:a,patronymic:s,group:l,email:r,phone:d}=e;return{title:"Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:l,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:d,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:p},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!0},{title:"Статус",fieldName:"status-for-hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:x}],hint:"Прикрепите справку из приемной комиссии о подаче документов для поступления и/или выписку из приказа о предоставлении каникул",documents:{files:[],fieldName:"docs",required:!1,maxFiles:3,allowedTypes:["application/pdf"]}}},v=()=>{const[e,t]=i.useState(null),{data:{dataUserApplication:a}}=n.useApplications(),[s,l]=i.useState(!1),[r,d]=i.useState(!1),u=s??!1;return i.useEffect(()=>{a&&t(g(a))},[a]),o.jsx(c,{isDone:u,children:!!e&&!!t&&o.jsxs(m,{children:[o.jsx(f,{...e,collapsed:u,setData:t}),o.jsx(F,{text:"Отправить",action:()=>A(b.ACCOMMODATION_FOR_GRADUATES,[e],d,l,!1),isLoading:r,completed:s,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:h(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{v as default};
