var F=(t,e,s)=>new Promise((r,d)=>{var h=m=>{try{f(s.next(m))}catch(j){d(j)}},x=m=>{try{f(s.throw(m))}catch(j){d(j)}},f=m=>m.done?r(m.value):Promise.resolve(m.value).then(h,x);f((s=s.apply(t,e)).next())});import{d as I,p as o,h as c,m as C,a4 as R,x as g,q as a,r as W,j as i}from"./vendor-00bea631.js";import{cQ as $,e as G,d as H,B as O,F as Q,a1 as J,p as k,x as b,h as K,b0 as X,S as Y}from"./index-ed5dff92.js";const Z="https://api.mospolytech.ru/config",A=I.create({baseURL:Z}),U=t=>F(void 0,null,function*(){const e=new FormData;e.append("note",t.note),e.append("name",t.name),e.append("phone",t.phone),e.append("email",t.email),e.append("locationId",t.location.id),e.append("stackId",t.stack.id),e.append("file",t.files[0]);const{data:s}=yield A.post("/robot",e,{headers:{"Content-Type":"multipart/form-data"}});return s}),p=o({name:"pageMounted",sid:"ygwyh4"}),N=o({name:"sendForm",sid:"gwkue4"}),v=o({name:"setFiles",sid:"yw5hci"}),S=o({name:"setName",sid:"crkkvu"}),M=o({name:"setPhone",sid:"fv3bys"}),w=o({name:"setEmail",sid:"h49kip"}),_=o({name:"setNote",sid:"nq529n"}),y=o({name:"setStack",sid:"-h47dth"}),B=o({name:"setLocation",sid:"ldhemb"}),E=c([],{name:"$files",sid:"szt0m0"}).on(v,(t,e)=>e).reset(p),L=c("",{name:"$note",sid:"hqvmor"}).on(_,(t,e)=>e).reset(p),D=c("",{name:"$name",sid:"-8ak1bh"}).on(S,(t,e)=>e).on($.applications,(t,{dataUserApplication:e})=>{if(!e)return"";const{name:s,surname:r,patronymic:d}=e;return`${s} ${r} ${d}`}),T=c("",{name:"$phone",sid:"3tiv7w"}).on(M,(t,e)=>e).on($.applications,(t,{dataUserApplication:e})=>{var s;return(s=e==null?void 0:e.phone)!=null?s:""}),V=c("",{name:"$email",sid:"fyqeua"}).on(w,(t,e)=>e).on($.applications,(t,{dataUserApplication:e})=>{var s;return(s=e==null?void 0:e.email)!=null?s:""}),P=c(null,{name:"$stack",sid:"-hsox3p"}).on(y,(t,e)=>e).reset(p),q=c(null,{name:"$location",sid:"r0fcgs"}).on(B,(t,e)=>e).reset(p),z=c("",{name:"$applicationNumber",sid:"asehjt"}).reset(p),u=C({sid:"81qzfe",fn:()=>R({handler:U}),name:"sendFormMutation",method:"createMutation"});g({and:[{clock:p,target:[u.reset,G.getUserDataApplicationsFx]}],or:{sid:"pshut6"}});g({and:[{clock:N,source:{files:E,name:D,phone:T,email:V,note:L,stack:P,location:q},fn:({files:t,name:e,phone:s,email:r,note:d,stack:h,location:x})=>({files:t,name:e,phone:s,email:r,note:d,stack:h,location:x}),target:u.start}],or:{sid:"pup16m"}});g({and:[{clock:u.finished.success,fn:({result:t})=>t.applicationNumber,target:z}],or:{sid:"r9twd7"}});g({and:[{clock:u.$failed,fn:()=>({message:"Произошла ошибка. Попробуйте позднее",type:"failure"}),target:H.evokePopUpMessage}],or:{sid:"rp84zb"}});const l={pageMounted:p,setFiles:v,setName:S,setPhone:M,setEmail:w,setNote:_,setStack:y,setLocation:B,sendForm:N},n={files:E,note:L,name:D,phone:T,email:V,stack:P,location:q,loading:u.$pending,done:u.$succeeded,applicationNumber:z},ue=()=>{const[t,e,s]=a([l.pageMounted,n.done,n.applicationNumber]);return W.useEffect(()=>{t()},[]),i.jsx(O,{isDone:e,children:i.jsx(Q,{noHeader:!0,children:e?i.jsxs(i.Fragment,{children:["Спасибо! Ваш номер заявки ",s,"."]}):i.jsxs(i.Fragment,{children:[i.jsx(ee,{}),i.jsx(te,{}),i.jsx(ie,{}),i.jsx(se,{}),i.jsx(ne,{}),i.jsx(oe,{}),i.jsx(ae,{}),i.jsx(le,{})]})})})},ee=()=>{const[t,e]=a([n.note,l.setNote]);return i.jsx(J,{placeholder:"Опишите проблему и точное местоположение",required:!0,title:"Опишите проблему и точное местоположение",value:t,setValue:e})},te=()=>{const[t,e]=a([n.name,l.setName]);return i.jsx(k,{title:"ФИО",required:!0,value:t,setValue:e})},ie=()=>{const[t,e]=a([n.phone,l.setPhone]);return i.jsx(k,{title:"Контактный телефон",required:!0,value:t,setValue:e})},se=()=>{const[t,e]=a([n.email,l.setEmail]);return i.jsx(k,{title:"Email для уведомлений",value:t,setValue:e})},ne=()=>{const[t,e]=a([n.location,l.setLocation]);return i.jsx(b,{title:"Локация",required:!0,width:"100%",items:de,selected:t,setSelected:e,withSearch:!0})},oe=()=>{const[t,e]=a([n.stack,l.setStack]);return i.jsx(b,{title:"Отдел",required:!0,width:"100%",items:ce,selected:t,setSelected:e,withSearch:!0})},ae=()=>{const[t,e]=a([n.files,l.setFiles]);return i.jsxs(i.Fragment,{children:[i.jsx(K,{size:4,align:"left",bottomGap:"5px",children:"Фотография"}),i.jsx(X,{files:t,setFiles:e,isActive:!0})]})},le=()=>{const[t,e,s,r,d,h,x,f]=a([l.sendForm,n.done,n.loading,n.note,n.name,n.phone,n.location,n.stack]);return i.jsx(Y,{text:e?"Отправлено":"Отправить",action:t,isLoading:s,completed:e,setCompleted:()=>{},repeatable:!1,buttonSuccessText:"Отправлено",isDone:e,isActive:!!r&&!!d&&!!h&&!!x&&!!f,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})},de=[{id:"1679",title:"Б. Семеновская 38; Корпус А"},{id:"1680",title:"Б. Семеновская 38; Корпус Б"},{id:"1681",title:"Б. Семеновская 38; Корпус В"},{id:"1682",title:"Б. Семеновская 38; Корпус Н"},{id:"1683",title:"Б. Семеновская 38; Корпус НД"},{id:"1684",title:"М. Семеновская 12; Общежитие №1"},{id:"1685",title:"7-я Парковая 9/26; Общежитие №2"},{id:"1686",title:"11-я Парковая 36 стр.2; Спорт зал"},{id:"1865",title:"ул. Большая Семеновская 38"},{id:"1866",title:"ул. Малая Семеновская 12 стр.2"},{id:"1867",title:"ул. 7-я Парковая 9/26"},{id:"1868",title:"ул. 11-я Парковая 36 стр.2"},{id:"1869",title:"ул. Лефортовский вал 26"},{id:"1870",title:"ул. Лефортовский вал 26; Учебный корпус"},{id:"1873",title:"ул. Садовая - Спасская 4, стр.1"},{id:"1875",title:"ул. Садовая - Спасская 4, стр.3"},{id:"1877",title:"ул. Садовая - Спасская 4, стр.4"},{id:"1879",title:"ул. Садовая - Спасская 4, стр.5"},{id:"1881",title:"ул. Бориса Галушкина 9"},{id:"1882",title:"ул. Бориса Галушкина 9; Общежитие №6"},{id:"1885",title:"ул. Рижский проезд 15, к.2"},{id:"1888",title:"ул. Прянишникова, 2А, к.1"},{id:"1889",title:"ул. Прянишникова, 2А, к.1; Учебный корпус"},{id:"1890",title:"ул. Прянишникова, 2А, к.2"},{id:"1891",title:"ул. Прянишникова, 2А, к.2; Учебный корпус"},{id:"1892",title:"ул. Прянишникова, 2А, к.3"},{id:"1893",title:"ул. Прянишникова, 2А, к.3; Учебный корпус"},{id:"1894",title:"ул. Михалковская, 7, стр. 4"},{id:"1895",title:"ул. Михалковская, 7, стр. 4; Учебный корпус"},{id:"1896",title:"ул. Михалковская, 7, стр. 2"},{id:"1897",title:"ул. Михалковская, 7, стр. 2; Учебный корпус"},{id:"1898",title:"ул. Михалковская, 7, стр. 3"},{id:"1899",title:"ул. Михалковская, 7, к.3"},{id:"1900",title:"ул. 800-летия Москвы, 28, к.1"},{id:"1901",title:"ул. 800-летия Москвы, 28, к.1; Общежитие № 4"},{id:"1902",title:"ул. 1-й Балтийский переулок, 6/21, к.3"},{id:"1903",title:"ул. 1-й Балтийский переулок, 6/21, к.3; Общежитие № 10"},{id:"1907",title:"ул. Автозаводская, д.16, стр.2 (2-х этаж. пристр.)"},{id:"1908",title:"ул. Автозаводская, д.16, стр.4 (корп3)"},{id:"1909",title:"ул. Автозаводская, д.16, стр.5 (корп4)"},{id:"1910",title:"ул. 1-ая Дубровская, д.16А, стр.1"},{id:"1911",title:"ул. 1-ая Дубровская, д.16А, стр.1; Учебный корпус"},{id:"1912",title:"ул. 1-ая Дубровская, д.16А, стр. 2"},{id:"1913",title:"ул. 1-ая Дубровская, д.16А, стр. 2; Учебный корпус"},{id:"5084",title:"ул. Прянишникова 2А"},{id:"5085",title:"ул. Михалковская, 7"},{id:"5095",title:"ул. Павла Корчагина 22 стр.1, 2, 3"},{id:"5101",title:"ул. Павла Корчагина 22 стр.2"},{id:"5102",title:"ул. Павла Корчагина 22 стр.1"},{id:"5103",title:"ул. Павла Корчагина 22 стр.3"},{id:"5104",title:"ул. Павла Корчагина 22 стр.5"},{id:"5105",title:"ул. Павла Корчагина 22 стр.6"},{id:"5106",title:"ул. Павла Корчагина 20а, к.3 Общежитие №7"},{id:"5107",title:"ул. Садовая - Спасская 4, стр.2; Учебный корпус"},{id:"5108",title:"ул. Садовая - Спасская 4, стр.6"},{id:"5109",title:"ул. Садовая - Спасская 4, стр.8"},{id:"5110",title:"ул. Садовая - Спасская 6, стр.1"},{id:"5111",title:"ул. Рижский проезд 15, к.1"},{id:"5857",title:"ул. Автозаводская 16 (корп.1,2)"},{id:"5858",title:"ул. Автозаводская 16 стр 1 (корп5)"},{id:"5863",title:"ул. Павла Корчагина 22а, к.2, общежитие №11"}],ce=[{id:"348",title:"Сантехника"},{id:"349",title:"Электрика"},{id:"350",title:"Плотники"},{id:"378",title:"Лифты"},{id:"379",title:"Уборка"},{id:"481",title:"Техническая поддержка"},{id:"488",title:"Диспетчер"},{id:"489",title:"Охрана"}];export{ue as default};
