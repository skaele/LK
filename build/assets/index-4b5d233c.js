import{r,j as o}from"./vendor-48260ac4.js";import{s as d,B as p,F as n,I as m,S as f,aj as b,j as x,c as S}from"./index-6ee74d2e.js";const y=[{id:0,title:"Сведения о поступлении в образовательную организацию"},{id:1,title:"Сведения об отчислении из образовательной организации"},{id:2,title:"Сведения об уходе в академический отпуск"},{id:3,title:"Сведения о выходе из академического отпуска"}],h=t=>{const{surname:i,name:s,patronymic:l,email:u,phone:c,divisions_crs:a}=t;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:i+" "+s+" "+l,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:c,required:!0},{title:"Email",type:"email",fieldName:"email",value:u,editable:!0,required:!0},{title:"Выберите подразделение",value:null,type:"select",fieldName:"stuctural_subdivision",items:a.map(e=>({id:+e.id,title:e.name+" "+e.contact})),width:"100%",editable:!0,required:!0,isSpecificSelect:!0},{title:"Запрашиваемые документы",value:null,type:"select",fieldName:"doc_type",items:y,width:"100%",editable:!0,required:!0},{title:"Документы предоставляются в военные комиссариаты Российской Федерации, суды",value:!1,type:"checkbox",fieldName:"to_commissariats_or_courts",width:"100%",editable:!0},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},v=()=>{const[t,i]=r.useState(null),[s,l]=r.useState(!1),[u,c]=r.useState(!1),a=s??!1,{data:{dataUserApplication:e}}=d.useApplications();return r.useEffect(()=>{e&&i(h(e))},[e]),o.jsx(p,{isDone:a,children:!!t&&!!i&&o.jsxs(n,{noHeader:!0,children:[o.jsx(m,{...t,collapsed:a,setData:i}),o.jsx(f,{text:a?"Отправлено":"Отправить",action:()=>b(x.MILITARY_COPIES,[t],c,l),isLoading:u,completed:s,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:S(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{v as default};
