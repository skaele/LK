import{s as u,j as t,r as a}from"./vendor-48260ac4.js";import{s as d,B as m,F as f,I as x,S as g,aj as j,j as h,c as F}from"./index-a313ebce.js";const S=e=>({title:"Отправить документы воинского учета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!0,maxFileSizeInMegaBytes:10},alert:t.jsxs("p",{children:["Прикрепите сканы документов для воинского учета (все заполненные страницы):",t.jsxs(b,{children:[t.jsx("li",{children:"удостоверение гражданина, подлежащего призыву; "}),t.jsx("li",{children:"военный билет;"})]})]})}),b=u.ul.withConfig({componentId:"sc-6ucomu-0"})(["padding-left:1rem;"]),B=()=>{var n;const[e,i]=a.useState(null),[o,r]=a.useState(!1),[c,p]=a.useState(!1),s=o??!1,{data:{dataUserApplication:l}}=d.useApplications();return a.useEffect(()=>{l&&i(S(l))},[l]),t.jsx(m,{isDone:s,children:!!e&&!!i&&t.jsxs(f,{noHeader:!0,children:[t.jsx(x,{...e,collapsed:s,setData:i}),t.jsx(g,{text:s?"Отправлено":"Отправить",action:()=>j(h.MILDOCS,[e],p,r),isLoading:c,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:s,isActive:F(e)&&!!((n=e==null?void 0:e.documents)!=null&&n.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{B as default};
