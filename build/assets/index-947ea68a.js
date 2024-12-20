import{s as k,j as e,af as v,c as S,n as h,r as j,a5 as A,cM as M}from"./vendor-0d3de025.js";import{ai as $,an as C,u as p,bv as g,G as x,M as D,S as I,H as P,X as F,l as m,q as d,L as a,bw as y,p as w,bx as T,h as N,W as B,P as L,ay as _,by as H,bz as l,bA as b}from"./index-0ac1f95c.js";const R=k.div.withConfig({componentId:"sc-18w06yl-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;row-gap:10px;& > span{line-height:1.7rem;}@media (min-width:1001px){max-width:400px;}"]),z=()=>{const{data:{user:r}}=$.useUser();return e.jsx(R,{children:(r==null?void 0:r.user_status)==="stud"?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)"}),e.jsx(C,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%",align:"center"})]}):e.jsxs(e.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",e.jsx("br",{}),e.jsx("b",{children:e.jsx("a",{href:"tel:+7(495) 223-05-23,1130",children:"+7 (495) 223-05-23 доб.1130"})}),"или написать письмо на",e.jsx("br",{}),e.jsx("a",{href:"mailto:ok@mospolytech.ru",children:e.jsx("b",{children:"ok@mospolytech.ru"})})]})})},G=k.div.withConfig({componentId:"sc-icbwkn-0"})([".info-text{margin:16px 0;line-height:1.7rem;}b{font-weight:600;}"]),E=({children:r,handleSubmit:i,data:s,done:t,completed:o,loading:n})=>{const{open:c}=p(),u=g.changeCompleted;return s?e.jsxs(G,{children:[e.jsxs(x,{gap:"8px",children:[(s==null?void 0:s.file)&&e.jsx(C,{href:s.file,onClick:()=>null,text:"Скачать согласие",width:"100%",minHeight:"38px",height:"38px",icon:e.jsx(v,{})}),e.jsx(D,{type:"success",icon:e.jsx(S,{}),title:"Успешно подписано",visible:s.status||t,align:"center"})]}),e.jsx("div",{className:"info-text",children:r}),!s.status&&!t&&e.jsx(I,{text:!s.status&&!t?"Подписать":"Подписано",action:i,isLoading:n,completed:o,isDone:t||s.status,setCompleted:u,isActive:!s.status&&!t,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(s.status||t)&&e.jsxs(e.Fragment,{children:[e.jsx(P,{margin:"16px 0",width:"100%"}),e.jsxs(F,{fontSize:"0.9rem",lineHeight:"1.4rem",children:["Дата подписания: ",m(s.date||new Date),","," ",s.time||`${new Date().getHours()}:${new Date().getMinutes()}`,e.jsx("br",{}),s.fio]})]}),!s.status&&!t&&e.jsx(x,{jc:"center",children:e.jsx(d,{onClick:()=>c(e.jsx(z,{}),"Ошибка в данных"),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:a.grey.main})})]}):null},U=({next:r,guid:i,defaultEmail:s})=>{const{close:t}=p(),[o]=h([y.sendCodes]),[n,c]=j.useState(s);return e.jsxs(e.Fragment,{children:[e.jsx(w,{type:"email",placeholder:"E-mail заказчика",value:n,setValue:c}),e.jsxs(x,{jc:"space-between",p:"8px 0 0 0",children:[e.jsx(d,{text:"Отмена",onClick:()=>{t()},textColor:a.red.main,background:"transparent",hoverBackground:a.red.transparent3}),e.jsx(d,{text:"Подтвердить",onClick:()=>{o({clientEmail:n,clientGuid:i}),r()},textColor:a.blue.main,background:"transparent",hoverBackground:a.blue.transparent3})]})]})},O=({next:r,guid:i})=>{const{close:s}=p(),[t]=h([y.signAgreement]),[o,n]=j.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(w,{placeholder:"Код",value:o,setValue:n}),e.jsxs(x,{jc:"space-between",p:"8px 0 0 0",children:[e.jsx(d,{text:"Отмена",onClick:()=>{s()},textColor:a.red.main,background:"transparent",hoverBackground:a.red.transparent3}),e.jsx(d,{text:"Подтвердить",onClick:()=>{t({clientGuid:i,clientPass:o}),r()},textColor:a.blue.main,background:"transparent",hoverBackground:a.blue.transparent3})]})]})},V=({guid:r,email:i})=>{const[s,t]=j.useState(0),{close:o}=p(),{isMobile:n,isTablet:c}=T();return e.jsxs(x,{w:n||c?"100%":"600px",d:"column",children:[e.jsx(N,{align:"left",size:3,width:"530px",children:W[s]}),e.jsxs(x,{d:"column",gap:"24px",children:[s===0&&e.jsx(U,{guid:r,defaultEmail:i,next:()=>{t(1)}}),s===1&&e.jsx(O,{guid:r,next:()=>{o(),t(0)}})]})]})},W=["Введите e-mail заказчика","Введите код, полученный на почту"],K=()=>{var c;const r=A(),[i,s,t]=h([l.$electronicInteractionStore,l.$error,l.$loading]),{type:o}=M(),n=()=>g.getElectronicInteraction();return e.jsx(B,{load:n,loading:t,error:s,data:i,loadEveryVisit:!0,children:e.jsx(L,{children:(c=i==null?void 0:i.clients)!=null&&c.length&&i.clients.length>0?e.jsx(_,{currentPage:o==="third-party"?1:0,onChangePage:u=>r.push(H+`/${u}`),pages:[{id:"personal",title:"Персональное соглашение",content:e.jsx(f,{})},{id:"third-party",title:"Соглашение для третьей стороны",content:e.jsx(q,{})}]}):e.jsx(f,{})})})},f=()=>{const[r,i,s,t]=h([l.$done,l.$completed,l.$workerLoading,l.$electronicInteractionStore]);return t?e.jsx(E,{done:r,data:t,completed:i,loading:s,handleSubmit:()=>{g.postElectronicInteraction()},children:e.jsxs("div",{className:"info-text",children:["Я, ",e.jsx("b",{children:t.fio}),",",e.jsxs("p",{children:[e.jsx("b",{children:"Паспорт: "}),t.passSer," ",t.passNum,", выдан ",m(t.passDate)," ",t.passDiv,e.jsx("br",{}),e.jsx("b",{children:"Дата рождения: "}),t.bdate,e.jsx("br",{}),e.jsx("b",{children:"Номер мобильного телефона: "}),t.phone,e.jsx("br",{}),e.jsx("b",{children:"Адрес электронной почты: "}),t.email]}),e.jsxs("p",{children:["настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю условия"," ",e.jsx("a",{target:"_blank",href:"https://e.mospolytech.ru/old/storage/files/EAccept.pdf",rel:"noreferrer",children:"СОГЛАШЕНИЯ"})," ","об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие на подписание электронных документов в личном кабинете."]})]})}):null},q=()=>{var o;const{open:r}=p(),[i,s,t]=h([l.$electronicInteractionStore,b.signAgreement.$succeeded,b.signAgreement.$pending]);return i?e.jsx(e.Fragment,{children:(o=i.clients)==null?void 0:o.map(n=>e.jsx(E,{completed:s,done:s,loading:t,data:n,handleSubmit:()=>{r(e.jsx(V,{guid:n.guid,email:n.email}))},children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"info-text",children:["Я, ",e.jsx("b",{children:n.fio}),",",e.jsxs("p",{children:[e.jsx("b",{children:"Паспорт: "}),n.passSer," ",n.passNum,", выдан ",m(n.passDate)," ",n.passDiv,e.jsx("br",{}),e.jsx("b",{children:"Дата рождения: "}),n.bdate,e.jsx("br",{}),e.jsx("b",{children:"Номер мобильного телефона: "}),n.phone,e.jsx("br",{}),e.jsx("b",{children:"Адрес электронной почты: "}),n.email]}),e.jsxs("p",{children:["настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю условия"," ",e.jsx("a",{target:"_blank",href:"https://e.mospolytech.ru/old/storage/files/EAccept.pdf",rel:"noreferrer",children:"СОГЛАШЕНИЯ"})," ","об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие на подписание электронных документов в личном кабинете."]})]})})},n.guid))}):null};export{K as default};
