import{r as a,j as s}from"./vendor-905eebdf.js";import{s as u,B as c,F as m,I as d,S as f,c as x}from"./index-fe28ea49.js";const F=e=>({title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0}],alert:`1. Заполнить это заявление.2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.
3. Оплатить услугу по изготовлению нового пропуска в банке, получить квитанцию об оплате.
4. Предоставить заявление и квитанцию об оплате в бюро пропусков (Центральная проходная).
5. Получить готовый пропуск в бюро пропусков (Центральная проходная).
Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления.`}),g=()=>{var i;const[e,r]=a.useState(null),[o,n]=a.useState(!1),[p]=a.useState(!1),t=o??!1,{data:{dataUserApplication:l}}=u.useApplications();return a.useEffect(()=>{l&&r(F(l))},[l]),s.jsx(c,{isDone:t,children:!!e&&!!r&&s.jsxs(m,{children:[s.jsx(d,{...e,collapsed:t,setData:r}),s.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>null,isLoading:p,completed:o,setCompleted:n,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:x(e)&&(((i=e.optionalCheckbox)==null?void 0:i.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{g as default};
