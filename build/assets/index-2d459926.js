import{r as t,j as a}from"./vendor-3c67dcca.js";import{ad as n,aa as p,F as u,M as d,S as m,ac as f}from"./index-ba49d757.js";const x=()=>({title:"Оформить дополнительное соглашение к договору об обучении",data:[]}),g=()=>{const[o,i]=t.useState(null),[e,c]=t.useState(!1),[l]=t.useState(!1),s=e!=null?e:!1,{data:{dataUserApplication:r}}=n.useApplications();return t.useEffect(()=>{r&&i(x())},[r]),a.jsx(p,{isDone:s,children:!!o&&!!i&&a.jsxs(u,{children:[a.jsx(d,{title:"Информация по заявке",type:"info",visible:!s,children:"Данный вид услуги доступен только для студентов, обучающихся на платной договорной основе."}),a.jsx(m,{text:s?"Отправлено":"Отправить",action:()=>null,isLoading:l,completed:e,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:f(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{g as default};
