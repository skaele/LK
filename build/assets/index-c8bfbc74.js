import{r as l,s as h,j as e,aQ as d,c as j}from"./vendor-9cc634b6.js";import{aE as f,a as b,z as y,L as g,ab as w,a7 as m,M as k,S as M,g as S,u as v,l as C,aa as E,f as D}from"./index-74590cb5.js";function F({isDone:n,submit:s,setData:o}){const[c,i]=l.useState(!1),[u,r]=l.useState(!1),[x,t]=l.useState(n??!1),p=async()=>{try{i(!0),await s(),i(!1),r(!0),t(!0)}catch{i(!1),b.evokePopUpMessage({message:"Не удалось подписать",type:"failure"})}};return l.useEffect(()=>{o&&f().then(a=>o(a[0]))},[]),{done:x,open,loading:c,completed:u,setCompleted:r,handleSubmit:p}}const A=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;

    & > span {
        line-height: 1.7rem;
    }

    @media (min-width: 1001px) {
        max-width: 400px;
    }
`,L=()=>{const{data:{user:n}}=y.useUser();return e.jsx(A,{children:(n==null?void 0:n.user_status)==="stud"?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)"}),e.jsx(g,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%",align:"center"})]}):e.jsxs(e.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",e.jsx("br",{}),e.jsx("b",{children:"+7 (495) 223-05-23 доб.1130"}),"или написать письмо на",e.jsx("br",{}),e.jsx("b",{children:"ok@mospolytech.ru"})]})})},U=h.div`
    .info-text {
        margin: 16px 0;
        line-height: 1.7rem;
    }

    b {
        font-weight: 600;
    }
`,H=({children:n,data:s,setData:o,submit:c,isDone:i=!1})=>{const{open:u}=w(),{handleSubmit:r,loading:x,done:t,completed:p,setCompleted:a}=F({isDone:i,submit:c,setData:o});return s?e.jsxs(U,{children:[e.jsxs(m,{gap:"8px",children:[e.jsx(g,{href:s.file,onClick:()=>null,text:"Скачать согласие",width:"100%",minHeight:"38px",height:"38px",icon:e.jsx(d,{})}),e.jsx(k,{type:"success",icon:e.jsx(j,{}),title:"Успешно подписано",visible:s.status||t,align:"center"})]}),e.jsx("div",{className:"info-text",children:n}),!s.status&&!t&&e.jsx(M,{text:!s.status&&!t?"Подписать":"Подписано",action:r,isLoading:x,completed:p,isDone:t||s.status,setCompleted:a,isActive:!s.status&&!t,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(s.status||t)&&e.jsxs(e.Fragment,{children:[e.jsx(S,{margin:"16px 0",width:"100%"}),e.jsxs(v,{fontSize:"0.9rem",lineHeight:"1.4rem",children:["Дата подписания: ",C(s.date||new Date),","," ",s.time||`${new Date().getHours()}:${new Date().getMinutes()}`,e.jsx("br",{}),s.fio]})]}),!s.status&&!t&&e.jsx(m,{jc:"center",children:e.jsx(E,{onClick:()=>u(e.jsx(L,{}),"Ошибка в данных"),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:D.grey.main})})]}):null};export{H as E,F as u};
