import{r as i,j as a}from"./vendor-905eebdf.js";import{s as c,B as p,F as m,I as f,S as b,a3 as h,j as x,c as g}from"./index-dc093c1d.js";const F=[{id:0,title:"Сироты или оставшиеся без попечения родителей"},{id:1,title:"Инвалиды"},{id:2,title:"Члены многодетной семьи"},{id:3,title:"Имеющие на иждивении ребёнка"},{id:4,title:"Участники военных действий"},{id:5,title:"Родители – инвалиды, пенсионеры"},{id:6,title:"Члены неполной семьи"},{id:7,title:"Хроническое заболевание"}],N=[{id:0,title:"Выплату прошу производить наличным путем"},{id:1,title:"Выплату производить безналичным путем на расчетный счет открытый в ПАО Сбербанк:"}],v=e=>({title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Основание для получения дотации",fieldName:"justification_grant",value:"",type:"select",width:"100%",editable:!0,required:!0,items:F},{title:"Прошу назначить меня на получение материальной поддержки остронуждающимся студентам в связи с тем, что:",fieldName:"reason",value:"",editable:!0,required:!0,placeholder:"Укажите причину"},{title:"Номер членского профсоюзного билета",fieldName:"union_card_number",value:"",editable:!0,required:!0},{title:"Адрес по месту регистрации:",fieldName:"registration_address",value:"",editable:!0,required:!0,placeholder:"(индекс, область, город, улица, дом, корпус, квартира)"},{title:"Гражданин иностранного государства",fieldName:"is_foreigner",type:"checkbox",value:"",editable:!0},{title:"Способ выплаты",fieldName:"payment_method",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N},{title:"Расчетный счет, 20 цифр",fieldName:"payment_account",value:"",width:"100%",editable:!0,placeholder:""}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!0},alert:"Загрузите документы, подтверждающие право на получение дотации"}),q=()=>{var o;const[e,l]=i.useState(null),[r,d]=i.useState(!1),[u,n]=i.useState(!1),t=r??!1,{data:{dataUserApplication:s}}=c.useApplications();return i.useEffect(()=>{s&&l(v(s))},[s]),a.jsx(p,{isDone:t,children:!!e&&!!l&&a.jsxs(m,{children:[a.jsx(f,{...e,collapsed:t,setData:l}),a.jsx(b,{text:t?"Отправлено":"Отправить",action:()=>h(x.PR_DONATE,[e],n,d),isLoading:u,completed:r,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:g(e)&&!!((o=e==null?void 0:e.documents)!=null&&o.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{q as default};
