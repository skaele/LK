import{s as L,j as e,r as t}from"./vendor-3c67dcca.js";import{ad as M,aa as E,F as T,T as A,M as R,cO as P,S as k,ab as B,cI as I,ac as a}from"./index-7ed94462.js";const U=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"В разводе"},{id:3,title:"Вдовец"}],W=[{id:0,title:"Начальный"},{id:1,title:"Базовый"},{id:2,title:"Со словарем"},{id:3,title:"Разговорный"},{id:4,title:"Свободно"}],$=[{id:0,title:"Cреднее общее"},{id:1,title:"Cреднее профессиональное"},{id:2,title:"Высшее - бакалавриат"},{id:3,title:"Высшее - специалитет, магистратура"}],z=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Брат"},{id:2,title:"Сестра"}],G=[{id:0,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:1,title:"Военный билет"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Справка взамен военного билета"}],H=u=>{const{surname:l,name:o,patronymic:r,email:n,phone:d,birthday:m}=u;return{title:"Персональные данные",data:[{title:"ФИО",fieldName:"fio",value:l+" "+o+" "+r,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:d,required:!0},{title:"Email",type:"email",fieldName:"email",value:n,editable:!0,required:!0},{title:"Дата рождения",fieldName:"birth_date",type:"date",value:m,editable:!0,required:!0},{title:"Место рождения",fieldName:"birth_place",value:"",editable:!0,required:!0,hint:"Республика, край, область, район, город, населенный пункт"},{title:"Состояние в браке",value:null,fieldName:"marital_status",type:"select",items:U,width:"100%",editable:!0,required:!0}]}},O=()=>({title:"Владение иностранными языками",id:"foreign_languages",data:[],default:[[{fieldName:"lang",title:"Иностранный язык",value:"",editable:!0,width:"50%"},{fieldName:"proficiency",title:"Степень владения",value:null,type:"select",items:W,width:"50%",editable:!0}]],addNew:!0}),Y=()=>({title:"Образование и профессия",data:[{title:"Образование",fieldName:"",value:"Образование",type:"text-header",visible:!0},{title:"Уровень образования",value:null,fieldName:"education",type:"select",items:$,width:"100%",editable:!0,required:!0},{title:"Наименование образовательной организации",fieldName:"edu_name",value:"",editable:!0,required:!0},{title:"Квалификация",fieldName:"edu_qualification",value:"",editable:!0},{title:"Специальность, направление подготовки",fieldName:"edu_specialty",value:"",editable:!0},{title:"Серия и номер диплома, свидетельства",fieldName:"edu_document",value:"",editable:!0,required:!0},{title:"Год окончания",fieldName:"edu_graduation_year",value:"",type:"number",editable:!0,required:!0},{title:"Профессия",fieldName:"",value:"Профессия",type:"text-header",visible:!0},{title:"Основная",fieldName:"prof_main",value:"",editable:!0},{title:"Дополнительная",fieldName:"prof_add",value:"",editable:!0}]}),J=()=>({title:"Состав семьи",id:"family_members",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:z,width:"100%",required:!0},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"birth_date",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{title:"Близкие родственники отсутствуют",fieldName:"no_family_members",value:!1}}),K=()=>({title:"Адрес места жительства",data:[{title:"Адрес места жительства в соответствии с регистрацией",fieldName:"reg_address",value:"",hint:"Область, город, улица, дом, корпус, квартира",editable:!0,required:!0},{title:"Индекс",fieldName:"reg_index",value:"",editable:!0,required:!0,width:"40%"},{fieldName:"reg_date",title:"Дата регистрации по месту жительства",value:"",editable:!0,type:"date",required:!0},{title:"Адрес места жительства фактический",fieldName:"act_address",value:"",editable:!0,required:!0},{title:"Индекс",fieldName:"act_index",value:"",hint:"Область, город, улица, дом, корпус, квартира",editable:!0,required:!0,width:"40%"},{fieldName:"act_date",title:"Дата начала проживания",value:"",editable:!0,type:"date",required:!0}],documents:{files:[],fieldName:"address_doc",required:!0,maxFiles:1,allowedTypes:["pdf"]},alert:e.jsxs("p",{children:["Загрузить сканы документов для воинского учета (все заполненные страницы):",e.jsx(h,{children:e.jsx("li",{children:"документ для временной регистрации;"})})]})}),w=()=>({title:"Водительское удостоверение",data:[{fieldName:"driver_series",title:"Серия",value:"",editable:!0,width:"40%"},{fieldName:"driver_number",title:"Номер",value:"",editable:!0,width:"40%"},{fieldName:"driver_category",title:"Категории ТС",value:"",editable:!0},{fieldName:"drivers_date_of_issue",title:"Дата выдачи",value:"",type:"date",editable:!0,width:"40%"}]}),Q=()=>({title:"Паспортные данные",data:[{fieldName:"passport_series",title:"Серия",value:"",editable:!0,required:!0,width:"40%"},{fieldName:"passport_number",title:"Номер",value:"",editable:!0,required:!0,width:"40%"},{title:"Кем выдан",type:"textarea",fieldName:"passport_issued_by",value:"",editable:!0},{fieldName:"passport_date_of_issue",title:"Дата выдачи",value:"",type:"date",editable:!0,required:!0,width:"40%"},{fieldName:"passport_division_code",title:"Код подразделения",value:"",editable:!0,required:!0,width:"40%"}],documents:{files:[],fieldName:"passport_doc",required:!0,maxFiles:1,allowedTypes:["pdf"]},alert:e.jsxs("p",{children:["Загрузить сканы документов для воинского учета (все заполненные страницы):",e.jsx(h,{children:e.jsx("li",{children:"паспорт (стр. 1-2 и регистрацию);"})})]})}),V=()=>({title:"Сведения воинского учета",data:[{fieldName:"military_enlistment_office",title:"Наименование военного комиссариата по месту жительства",value:"",required:!0,editable:!0},{fieldName:"military_document_type",title:"Вид документа",value:null,type:"select",items:G,width:"100%",required:!0,editable:!0},{fieldName:"military_series",title:"Серия",value:"",editable:!0,width:"40%"},{fieldName:"military_number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"military_issued_by",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"military_date_of_issue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"military_doc",required:!0,maxFiles:1,allowedTypes:["pdf"]},alert:e.jsxs("p",{children:["Загрузить сканы документов для воинского учета (все заполненные страницы):",e.jsxs(h,{children:[e.jsx("li",{children:"удостоверение гражданина, подлежащего призыву;"}),e.jsx("li",{children:"военный билет."})]})]})}),h=L.ul.withConfig({componentId:"sc-1xd645o-0"})(["padding-left:1rem;"]),ee=()=>{var u;const[l,o]=t.useState(null),[r,n]=t.useState(null),[d,m]=t.useState(null),[c,N]=t.useState(null),[f,g]=t.useState(null),[i,b]=t.useState(null),[p,x]=t.useState(null),[v,F]=t.useState(null),[_,q]=t.useState(!1),[D,j]=t.useState(!1),{data:{dataUserApplication:y}}=M.useApplications();t.useEffect(()=>{y&&(o(H(y)),n(O()),m(Y()),N(J()),g(K()),b(w()),x(Q()),F(V()))},[y]);const S=t.useMemo(()=>{var s;return(i==null||(s=i.data[0])===null||s===void 0||(s=s.value)===null||s===void 0?void 0:s.id)!==0},[i==null||(u=i.data[0])===null||u===void 0?void 0:u.value]);if(t.useEffect(()=>{i&&b(w())},[S]),!l||!r||!d||!c||!f||!i||!p||!v)return null;const C=[[{dataForm:l,setDataForm:o}],[{dataForm:r,setDataForm:n}],[{dataForm:d,setDataForm:m}],[{dataForm:c,setDataForm:N}],[{dataForm:f,setDataForm:g}],[{dataForm:i,setDataForm:b}],[{dataForm:p,setDataForm:x}],[{dataForm:v,setDataForm:F}]];return e.jsx(E,{isDone:!1,children:e.jsxs(T,{noHeader:!0,children:[e.jsx(A,{size:3,align:"left",children:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу (форма 10)"}),e.jsx(R,{type:"info",children:"Сервис предназначен для постановки на воинский учет обучающихся - граждан, пребывающих в запасе и граждан, подлежащих призыву."}),e.jsx(P,{stagesConfig:C}),e.jsx(k,{text:_?"Отправлено":"Отправить",action:()=>B(I.MILITARY_REG,[l,r,d,c,f,i,p,v],j,q),isLoading:D,completed:_,setCompleted:q,repeatable:!1,buttonSuccessText:"Отправлено",isDone:_,isActive:a(l)&&a(r)&&a(d)&&a(c)&&a(f)&&a(i)&&a(p)&&a(v),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ee as default};
