import{j as t,r as l}from"./vendor-0d3de025.js";import{s as p,B as m,F as n,I as c,S as f,aj as b,j as x,c as v}from"./index-0ac1f95c.js";const y=[{id:0,title:"Экзамен"},{id:1,title:"Дифференцированный зачет"},{id:2,title:"Курсовой проект"},{id:3,title:"Курсовую работу"},{id:4,title:"Практику"}],h=[{id:0,title:"1"},{id:1,title:"2"},{id:2,title:"3"},{id:3,title:"4"},{id:4,title:"5"},{id:5,title:"6"},{id:6,title:"7"},{id:7,title:"8"},{id:8,title:"9"},{id:9,title:"10"},{id:10,title:"11"},{id:11,title:"12"},{id:12,title:"13"}],F=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"}],g=[{id:0,title:"Удовлетворительно"},{id:1,title:"Хорошо"}],j=[{id:0,title:"2022/2023"},{id:0,title:"2021/2022"},{id:1,title:"2020/2021"},{id:3,title:"2019/2020"},{id:4,title:"2018/2019"},{id:5,title:"2017/2018"},{id:6,title:"2016/2017"}],N=e=>({title:"Заявление на пересдачу для получения диплома с отличием",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу разрешить мне для получения диплома с отличием пересдать",fieldName:"type_exam",value:"",type:"select",width:"100%",editable:!0,required:!0,items:y},{title:"Дисциплина",fieldName:"name_discipline",value:"",type:"text",editable:!0,required:!0},{title:"Семестр",fieldName:"semester_number",value:"",type:"select",width:"100%",editable:!0,required:!0,items:h},{title:"Форма обучения",fieldName:"form_training",value:"",type:"select",width:"100%",editable:!0,required:!0,items:F},{title:"Учебный год",fieldName:"academic_year_of_delivery",value:"",type:"select",width:"100%",editable:!0,required:!0,items:j},{title:"Полученная оценка",fieldName:"received_assessment",value:"",type:"select",width:"100%",editable:!0,required:!0,items:g}],alert:t.jsx("p",{children:"В соответствии с положением о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в Московском политехническом университете в порядке исключения допускается пересдача одного зачета или экзамена на последнем году обучения с целью получения диплома с отличием."})}),S=()=>{const[e,s]=l.useState(null),[d,r]=l.useState(!1),[o,u]=l.useState(!1),i=d??!1,{data:{dataUserApplication:a}}=p.useApplications();return l.useEffect(()=>{a&&s(N(a))},[a]),t.jsx(m,{isDone:i,children:!!e&&!!s&&t.jsxs(n,{children:[t.jsx(c,{...e,collapsed:i,setData:s}),t.jsx(f,{text:i?"Отправлено":"Отправить",action:()=>b(x.DIPL_OTL,[e],u,r),isLoading:o,completed:d,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:v(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{S as default};
