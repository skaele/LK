import{s as l,j as e,Z as d,V as m,c as g}from"./vendor-4a800e6d.js";import{Y as b,Z as x,u as f,b4 as r,r as c,M as k,S as w,D as y,w as D,l as h,B as v,t as M,b5 as o,W as S,z as $}from"./index-271a563d.js";const C=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 10px;

    & > span {
        line-height: 1.7rem;
    }

    @media (min-width: 1001px) {
        max-width: 400px;
    }
`,E=()=>{const{data:{user:t}}=b.useUser();return e.jsx(C,{children:(t==null?void 0:t.user_status)==="stud"?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)"}),e.jsx(x,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%",align:"center"})]}):e.jsxs(e.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",e.jsx("br",{}),e.jsx("b",{children:e.jsx("a",{href:"tel:+7(495) 223-05-23,1130",children:"+7 (495) 223-05-23 доб.1130"})}),"или написать письмо на",e.jsx("br",{}),e.jsx("a",{href:"mailto:ok@mospolytech.ru",children:e.jsx("b",{children:"ok@mospolytech.ru"})})]})})},F=l.div`
    .info-text {
        margin: 16px 0;
        line-height: 1.7rem;
    }

    b {
        font-weight: 600;
    }
`,A=({children:t})=>{const{open:i}=f(),[n,a,p,s]=d([r.$done,r.$completed,r.$workerLoading,r.$electronicInteractionStore]),j=()=>{o.postElectronicInteraction()},u=o.changeCompleted;return s?e.jsxs(F,{children:[e.jsxs(c,{gap:"8px",children:[e.jsx(x,{href:s.file,onClick:()=>null,text:"Скачать согласие",width:"100%",minHeight:"38px",height:"38px",icon:e.jsx(m,{})}),e.jsx(k,{type:"success",icon:e.jsx(g,{}),title:"Успешно подписано",visible:s.status||n,align:"center"})]}),e.jsx("div",{className:"info-text",children:t}),!s.status&&!n&&e.jsx(w,{text:!s.status&&!n?"Подписать":"Подписано",action:j,isLoading:p,completed:a,isDone:n||s.status,setCompleted:u,isActive:!s.status&&!n,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(s.status||n)&&e.jsxs(e.Fragment,{children:[e.jsx(y,{margin:"16px 0",width:"100%"}),e.jsxs(D,{fontSize:"0.9rem",lineHeight:"1.4rem",children:["Дата подписания: ",h(s.date||new Date),","," ",s.time||`${new Date().getHours()}:${new Date().getMinutes()}`,e.jsx("br",{}),s.fio]})]}),!s.status&&!n&&e.jsx(c,{jc:"center",children:e.jsx(v,{onClick:()=>i(e.jsx(E,{}),"Ошибка в данных"),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:M.grey.main})})]}):null},L=()=>{const[t,i,n]=d([r.$electronicInteractionStore,r.$error,r.$loading]),a=()=>o.getElectronicInteraction();return e.jsx(S,{load:a,loading:n,error:i,data:t,loadEveryVisit:!0,children:e.jsx($,{children:t&&e.jsx(A,{children:e.jsxs("div",{className:"info-text",children:["Я, ",e.jsx("b",{children:t.fio}),",",e.jsxs("p",{children:[e.jsx("b",{children:"Паспорт: "}),t.passSer," ",t.passNum,", выдан"," ",h(t.passDate)," ",t.passDiv,e.jsx("br",{}),e.jsx("b",{children:"Дата рождения: "}),t.bdate,e.jsx("br",{}),e.jsx("b",{children:"Номер мобильного телефона: "}),t.phone,e.jsx("br",{}),e.jsx("b",{children:"Адрес электронной почты: "}),t.email]}),e.jsxs("p",{children:["настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю условия"," ",e.jsx("a",{target:"_blank",href:"https://e.mospolytech.ru/old/storage/files/EAccept.pdf",rel:"noreferrer",children:"СОГЛАШЕНИЯ"})," ","об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие на подписание электронных документов в личном кабинете."]})]})})})})};export{L as default};
