import{r,j as s}from"./vendor-08ab745b.js";import{s as n,B as c,F as d,I as m,S as f,aj as x,j as b,c as g}from"./index-0892b83f.js";import{C as j}from"./error-0712ed6d.js";const F=e=>{const{surname:t,name:a,patronymic:l,group:o,email:i,phone:p}=e;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},v=()=>{const[e,t]=r.useState(null),{data:{dataUserApplication:a}}=n.useApplications(),[l,o]=r.useState(!1),[i,p]=r.useState(!1),u=l??!1;return r.useEffect(()=>{a&&t(F(a))},[a]),new Date<new Date(2024,8,15)?s.jsx(j,{}):s.jsx(c,{isDone:u,children:!!e&&!!t&&s.jsxs(d,{children:[s.jsx(m,{...e,collapsed:u,setData:t}),s.jsx(f,{text:"Отправить",action:()=>x(b.USG_RELOCATION_INNER,[e],p,o),isLoading:i,completed:l,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:g(e)&&(e.optionalCheckbox?.value??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{v as default};
