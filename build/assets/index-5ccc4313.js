import{j as e,r}from"./vendor-08ab745b.js";import{d0 as n,s as p,k as c,a2 as m,B as f,F as x,I as h,S as F,aj as j,j as A,c as b}from"./index-0892b83f.js";const g=[{id:0,title:"Поступающий в бакалавриат, специалитет, магистратуру"},{id:1,title:"Поступающий в аспирантуру"}],S=t=>{const{surname:s,name:a,patronymic:l,group:i,email:o,phone:d}=t;return{title:"Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)",data:[{title:"ФИО",fieldName:"fio",value:s+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:d,editable:!0,required:!0},{title:"Общежитие",fieldName:"hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:n},{title:"Комната",placeholder:"Укажите номер комнаты, в которую хотите переселиться",fieldName:"room",value:"",editable:!0,required:!0},{title:"Статус",fieldName:"status-for-hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:g}],hint:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Прикрепите расписку из приемной комиссии о подаче документов для поступления"}),e.jsx("br",{}),e.jsx("p",{children:"Подача заявок будет доступна до 07.08.2024 включительно"})]}),documents:{files:[],fieldName:"docs",required:!1,maxFiles:3,allowedTypes:["pdf"]}}},y=()=>{const[t,s]=r.useState(null),{data:{dataUserApplication:a}}=p.useApplications(),[l,i]=r.useState(!1),[o,d]=r.useState(!1),u=l??!1;return r.useEffect(()=>{a&&s(S(a))},[a]),c&&new Date>new Date("2024 Aug 08")?e.jsx(m,{text:"Подача заявок закончилась"}):e.jsx(f,{isDone:u,children:!!t&&!!s&&e.jsxs(x,{noHeader:!0,children:[e.jsx(h,{...t,collapsed:u,setData:s}),e.jsx(F,{text:"Отправить",action:()=>j(A.ACCOMMODATION_FOR_GRADUATES,[t],d,i,!1),isLoading:o,completed:l,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:b(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{y as default};
