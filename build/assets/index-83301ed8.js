import{j as t,r as l}from"./vendor-48260ac4.js";import{s as m,B as p,F as n,I as c,S as f,aj as x,j as b,c as v}from"./index-76f662c4.js";import{B as y}from"./BoldText-33153266.js";const h=[{id:0,title:"Экзамен"},{id:1,title:"Дифференцированный зачет"},{id:2,title:"Курсовой проект"},{id:3,title:"Курсовую работу"},{id:4,title:"Практику"}],j=[{id:0,title:"1"},{id:1,title:"2"},{id:2,title:"3"},{id:3,title:"4"},{id:4,title:"5"},{id:5,title:"6"},{id:6,title:"7"},{id:7,title:"8"},{id:8,title:"9"},{id:9,title:"10"},{id:10,title:"11"},{id:11,title:"12"},{id:12,title:"13"}],F=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"}],g=[{id:0,title:"Удовлетворительно"},{id:1,title:"Хорошо"}],N=[{id:0,title:"2022/2023"},{id:0,title:"2021/2022"},{id:1,title:"2020/2021"},{id:3,title:"2019/2020"},{id:4,title:"2018/2019"},{id:5,title:"2017/2018"},{id:6,title:"2016/2017"}],_=e=>({title:"Заявление на пересдачу для получения диплома с отличием",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу разрешить мне для получения диплома с отличием пересдать",fieldName:"type_exam",value:"",type:"select",width:"100%",editable:!0,required:!0,items:h},{title:"Дисциплина",fieldName:"name_discipline",value:"",type:"text",editable:!0,required:!0},{title:"Семестр",fieldName:"semester_number",value:"",type:"select",width:"100%",editable:!0,required:!0,items:j},{title:"Форма обучения",fieldName:"form_training",value:"",type:"select",width:"100%",editable:!0,required:!0,items:F},{title:"Учебный год",fieldName:"academic_year_of_delivery",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N},{title:"Полученная оценка",fieldName:"received_assessment",value:"",type:"select",width:"100%",editable:!0,required:!0,items:g}],alert:t.jsxs("p",{children:["В соответствии с положением о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в Московском политехническом университете в порядке исключения допускается пересдача"," ",t.jsx(y,{children:"только одной дисциплины"})," на последнем году обучения с целью получения диплома с отличием."]})}),O=()=>{const[e,s]=l.useState(null),[r,d]=l.useState(!1),[o,u]=l.useState(!1),i=r??!1,{data:{dataUserApplication:a}}=m.useApplications();return l.useEffect(()=>{a&&s(_(a))},[a]),t.jsx(p,{isDone:i,children:!!e&&!!s&&t.jsxs(n,{children:[t.jsx(c,{...e,collapsed:i,setData:s}),t.jsx(f,{text:i?"Отправлено":"Отправить",action:()=>x(b.DIPL_OTL,[e],u,d),isLoading:o,completed:r,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:v(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{O as default};
