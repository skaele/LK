import{r,j as s}from"./vendor-9c916fad.js";import{s as c,B as d,F as m,I as f,S as x,ah as b,j as g,c as h}from"./index-ed17ce9f.js";import{C as F}from"./error-362a8860.js";const N=e=>{const{surname:t,name:a,patronymic:l,group:o,email:i,phone:p}=e;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},A=()=>{var n;const[e,t]=r.useState(null),{data:{dataUserApplication:a}}=c.useApplications(),[l,o]=r.useState(!1),[i,p]=r.useState(!1),u=l??!1;return r.useEffect(()=>{a&&t(N(a))},[a]),new Date<new Date(2024,8,15)?s.jsx(F,{}):s.jsx(d,{isDone:u,children:!!e&&!!t&&s.jsxs(m,{children:[s.jsx(f,{...e,collapsed:u,setData:t}),s.jsx(x,{text:"Отправить",action:()=>b(g.USG_RELOCATION_INNER,[e],p,o),isLoading:i,completed:l,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:h(e)&&(((n=e.optionalCheckbox)==null?void 0:n.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
