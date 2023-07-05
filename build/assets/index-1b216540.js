import{s as l,j as e,Q as N,ab as H,a_ as I,r as u,aQ as T,ak as G,al as K,a9 as q,c as J,a$ as V,b0 as X,b1 as Y,R as Z}from"./vendor-9cc634b6.js";import{f as S,a7 as o,aJ as ee,u as y,l as m,T as g,E as W,M as z,ab as B,aK as M,K as te,S as _,aa as L,L as F,aU as E,b4 as ne,g as U,w as se,aN as ie,b5 as re,b6 as ae,b7 as oe,x as le,a as ce,W as de,P as xe,i as pe}from"./index-3fee83b2.js";import{u as he}from"./index-7902c547.js";import{R as ue,D as me,P as ge}from"./debt-62f04d3c.js";import{A as fe}from"./index-ce139e30.js";const je=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,ye=l.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${S.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,be=({date:t,value:n})=>e.jsxs(ye,{children:[e.jsxs(o,{gap:"16px",children:[e.jsx(ee,{color:"grey",size:33,children:e.jsx(N,{})}),e.jsxs(o,{d:"column",ai:"flex-start",children:[e.jsx("span",{className:"payment-item-date",children:"Платеж"}),e.jsx(y,{children:m(t)})]})]}),e.jsxs("span",{className:"payment-item-money",children:["+",n," ",e.jsx(N,{})," "]})]}),ve=t=>Number(t.replace(/,/g,".").replace(/\s/g,"")),we=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .payment-list {
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        min-height: 195px;
        height: 195px;
        padding-right: 5px;
        background: var(--form);
        box-shadow: var(--schedule-shadow);
        border-radius: 7px;
        margin-top: 10px;
    }
`,Ce=({payments:t})=>{const n=t==null?void 0:t.reduce((s,i)=>s+ve(i.value),0).toFixed(1);return e.jsxs(we,{children:[e.jsxs(o,{jc:"space-between",children:[e.jsx(g,{icon:e.jsx(H,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),e.jsx(y,{fontSize:"1rem",width:"fit-content",children:e.jsx(ue,{size:"small",children:n})})]}),e.jsxs("div",{className:"payment-list",children:[!t.length&&e.jsx(W,{size:"50px",text:"Нет платежей",image:e.jsx(I,{})}),t.map((s,i)=>u.createElement(be,{...s,key:i}))]})]})},O=()=>e.jsx(z,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:e.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",e.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),De=l.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`,Se=({contract:t})=>{if(!t)return null;const{number:n,startDate:s,endDatePlan:i,contragent:a,sum:c,can_sign:d,file:x,student:r}=t,{open:h}=B(),[p,f]=u.useState(!1),[j,w]=u.useState(!1),[b,v]=u.useState(!1),{error:C}=M.usePayments(),P=[{text:"Номер договора",info:n??""},{text:"Начало действия",info:m(s)},{text:"Действует до",info:m(i)},{text:"Заказчик",info:a||"Московский политех"},{text:"Обучающийся",info:r??""},{text:"Сумма к оплате",info:c??""}],k=()=>{navigator.clipboard.writeText((t==null?void 0:t.number)??""),f(!0)},A=()=>{t&&(w(!0),E.signContractFx(t.id),w(!1),v(!0))},Q=()=>{h(e.jsx(O,{}),"Не получается подписать")};return e.jsxs(De,{children:[e.jsx("div",{className:"contract-info",children:P.map(({info:$,text:R})=>e.jsx(te,{keyStr:R,value:$},$))}),d&&e.jsxs(o,{d:"column",gap:"8px",children:[e.jsx(_,{text:"Подписать договор",buttonSuccessText:"Подписан",action:A,isLoading:j,completed:b,repeatable:!1,popUpFailureMessage:C??"Не удалось подписать договор",setCompleted:v,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),e.jsx(L,{onClick:Q,text:"Не получается подписать?",background:"transparent",textColor:S.grey.main})]}),!d&&e.jsxs(o,{gap:"8px",children:[e.jsx(_,{text:"Скопировать номер договора",action:k,isLoading:!1,completed:p,setCompleted:f,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),e.jsx(F,{onClick:()=>null,href:x??"",icon:e.jsx(T,{}),width:"45px"})]})]})},Pe=l.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--schedule);
    z-index: 3;
    width: 100%;
    /* border-radius: var(--brLight) var(--brLight) 0 0; */

    .title-and-icon {
        display: flex;
        align-items: center;
        width: calc(100% - 30px);

        b {
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
        }

        svg {
            min-width: 19px;
            height: 19px;
            margin-right: 7px;
        }
        /* white-space: nowrap; */
    }
`,ke=({title:t,confirmed:n,setOpenArea:s})=>e.jsxs(Pe,{onClick:()=>s(i=>!i),children:[e.jsxs("div",{className:"title-and-icon",children:[n?e.jsx(G,{style:{color:"var(--green)"}}):e.jsx(K,{style:{color:"var(--red)"}}),e.jsx("b",{children:t})]}),e.jsx(L,{icon:e.jsx(q,{}),onClick:()=>null,background:"transparent"})]}),Ae=l.div`
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    width: 100%;
    border-radius: var(--brLight);
    overflow: hidden;

    .inputs {
        padding: ${({open:t})=>t?"15px 0":"0"};
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s padding;
        height: ${({height:t,open:n})=>n?t+"px":"0"};
        opacity: ${({open:t})=>t?"1":"0"};
        visibility: ${({open:t})=>t?"visible":"hidden"};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({height:t,open:n})=>n?t+63+"px":"0"};
        }
    }
`,_e=t=>{const{children:n,title:s,height:i,confirmed:a=!1,show:c=!1}=t,[d,x]=u.useState(c);return e.jsxs(Ae,{height:i,open:d,children:[e.jsx(ke,{title:s,confirmed:a,setOpenArea:x}),e.jsx("div",{className:"inputs",children:n})]})},ze=l.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Le=({data:t})=>{const{id:n,signed_user:s,name:i,can_sign:a,date:c}=t,{handleSubmit:d,loading:x,done:r,completed:h,setCompleted:p}=he({isDone:s,submit:()=>ne(n)}),f=s||r?140:100;return e.jsxs(_e,{height:f,title:i,confirmed:s||r,children:[e.jsxs(ze,{children:[e.jsxs(o,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(g,{size:5,align:"left",children:i}),e.jsx(y,{children:m(c)})]}),e.jsxs(o,{gap:"8px",w:"100%",jc:"flex-end",children:[e.jsx(F,{href:t.file,onClick:()=>null,width:"40px",icon:e.jsx(T,{})}),!r&&e.jsx(_,{text:r?"Подписано":"Подписать",action:d,isLoading:x,completed:h,isDone:r,width:"160px",setCompleted:p,isActive:!r&&a,popUpFailureMessage:a?"Согласие уже подписано":"Необходимо сначала подписать соглашение об электронном взаимодейтсвии",popUpSuccessMessage:"Согласие успешно подписано"}),e.jsx(z,{type:"success",title:"Подписано",icon:e.jsx(J,{}),align:"center",width:"130px",visible:r})]})]}),(r||s)&&e.jsx(U,{width:"100%"}),(r||s)&&e.jsxs(y,{children:["Дата подписания: ",m(t.signed_user_date||new Date),","," ",t.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},Fe=({isDormitory:t,electronicAgreements:n=[]})=>e.jsxs(se,{width:"100%",children:[e.jsx(g,{size:4,align:"left",icon:e.jsx(V,{}),bottomGap:!0,children:"Доп. соглашения"}),e.jsx(O,{}),e.jsx(z,{type:"info",title:"Информация",visible:!t,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),n.map((s,i)=>e.jsx(Le,{data:s},i))]}),$e=l.div`
    width: 100%;
`,Ne=l.div`
    width: 100%;
    padding: 16px;
    background: var(--form);
    border-radius: 6px;
    box-shadow: var(--schedule-shadow);
`,Te=l.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`,We=l.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        height: fit-content;
    }
`,Be=l.div`
    position: relative;
`,Me=t=>{const{data:n,isDormitory:s}=t,{balance_currdate:i,balance:a,endDatePlan:c,can_sign:d,bill:x,qr_current:r,qr_total:h}=n,{isMobile:p}=ie(),{open:f}=B(),[j,w]=u.useState(0),b=j===0?+i:+a,v=b>0,C=s?"общежитию":"обучению",P=v?`Долг по ${C}`:b<0?`Переплата по ${C}`:"У вас нет долга",k=j===0?`На ${m(new Date)}`:`До ${m(c)}`,A=()=>{f(e.jsx(Se,{contract:n}),"Реквизиты договора")};return e.jsxs($e,{children:[e.jsx(g,{icon:e.jsx(X,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),e.jsxs(Ne,{children:[e.jsx(re,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:j,setCurrentPage:w,appearance:!1}),e.jsxs(Te,{children:[e.jsxs(o,{d:"column",gap:"12px",ai:"flex-start",children:[e.jsx(me,{debt:b}),e.jsxs(o,{d:"column",gap:"4px",ai:"flex-start",children:[e.jsx(g,{size:3,align:"left",children:P}),e.jsx(y,{children:k})]})]}),v?e.jsx(ge,{currentPage:j,type:p?"horizontal":"vertical",qr_current:r,qr_total:h}):e.jsx(fe,{color:"green",size:"40px"})]}),e.jsxs(We,{children:[x&&e.jsx(F,{text:"Квитанция на оплату",background:"transparent",textColor:S.grey.main,align:"left",width:"fit-content",href:x,padding:"0"}),e.jsxs(Be,{children:[e.jsx(L,{onClick:A,text:"Реквизиты договора",background:"transparent",textColor:S.grey.main,width:"fit-content",padding:"0",align:"left"}),e.jsx(ae,{right:"-25px",top:"10px",visible:d,pulsing:!0,children:"1"})]})]})]})]})},Ee=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,Ue=(t,n)=>{const s=Number(n==null?void 0:n.sum)||Number(n==null?void 0:n.sum_price),i=Number(n==null?void 0:n.sum_pay);if(!s&&s!==0||!i&&i!==0)return"-";const a=s-i;return a<=0?"Оплачено":`Ожидает оплаты (${oe(String(a),"rub")})`},Oe=()=>[{title:"Год",field:"year",width:"25%",render:(t,n)=>{const s=n==null?void 0:n.date_start;return s?new Date(s).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(t,n)=>{const s=n==null?void 0:n.date_start;if(!s)return"-";const i=new Date(s).toLocaleDateString("ru",{month:"long"});return Ee(i)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:Ue}],Qe=({paygraph:t})=>e.jsxs(o,{d:"column",children:[e.jsx(g,{icon:e.jsx(Y,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),e.jsx(le,{columns:Oe(),data:t??[],maxOnPage:3})]}),D=({contracts:t})=>t?e.jsx(je,{children:t.map((n,s)=>{const{agreements:i,number:a,type:c,paygraph:d,payments:x}=n,r=c==="Общежитие",h=i.filter(p=>new Date(p==null?void 0:p.date)>new Date("2022-02-1"));return e.jsxs(Z.Fragment,{children:[t.length!==1&&e.jsxs(o,{gap:"8px",children:[e.jsx(o,{w:"fit-content",children:e.jsxs(g,{size:3,align:"left",children:["Договор:"," "]})}),e.jsxs(y,{fontSize:"1rem",children:[c,", ",a]})]}),e.jsx(Me,{data:n,isDormitory:r}),e.jsx(Ce,{payments:x??[]}),e.jsx(Qe,{paygraph:d}),e.jsx(Fe,{isDormitory:r,electronicAgreements:h}),s!==t.length-1&&e.jsx(U,{margin:"0",width:"100%"})]},a)})}):null,qe=()=>{const{data:t,loading:n,error:s}=M.usePayments(),i=t!=null&&t.dormitory.length&&(t!=null&&t.education.length)?"both":t!=null&&t.dormitory.length?"dormitory":t!=null&&t.education.length?"education":"none";return u.useEffect(()=>{ce.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),e.jsx(de,{loading:n,load:E.getPaymentsFx,error:s,data:t,noDataCheck:!(t!=null&&t.dormitory.length),children:e.jsxs(xe,{children:[i==="none"&&e.jsx(W,{text:"Нет данных"}),i==="both"&&e.jsx(pe,{pages:[{title:"Общежитие",content:e.jsx(D,{contracts:t==null?void 0:t.dormitory})},{title:"Обучение",content:e.jsx(D,{contracts:t==null?void 0:t.education})}],appearance:!1}),i==="dormitory"&&e.jsx(D,{contracts:t==null?void 0:t.dormitory}),i==="education"&&e.jsx(D,{contracts:t==null?void 0:t.education})]})})};export{qe as default};
