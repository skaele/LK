import{s as c,L as b,j as e,R as S,O as E,F as z,c as I,r as h}from"./vendor-2bd70a0f.js";import{o as p,ac as d,b4 as L,U as $,V as T,a5 as N,D as v,b5 as f,aY as g,N as W,b6 as A,aN as B,B as R,b7 as F,M as U,b8 as D,b9 as H,ba as O,bb as Y,bc as _,bd as Z,be as q,bf as M,X,b3 as y,Z as j,bg as G,p as x,T as P,bh as V,bi as u,b2 as K,bj as m,bk as Q,bl as J,bm as ee,W as te,bn as se,r as ie,aT as ae,bo as ne}from"./index-bc77f324.js";const re=c(b)`
    width: 100%;
    height: 100%;
    /* background: var(--block); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 10px;

    .subtext {
        white-space: nowrap;
        font-size: 0.72rem;
        transition: 0.2s;
        color: var(--text);
    }

    @media (min-width: 1001px) {
        &:hover {
            background-color: ${({color:t})=>t};
        }

        &:hover .subtext {
            transform: translateX(0px) translateY(-50%);
            opacity: 0;
        }

        &:hover .icon {
            transform: scale(1.1) translateY(12px);
        }

        &:hover .notification-circle {
            opacity: 0;
        }
    }

    ${p.isTablet} {
        &:active .icon {
            transform: scale(1.1) translateY(6px);
        }

        &:active .subtext {
            transform: translateX(0px) translateY(-50%);
            opacity: 0;
        }

        &:active {
            background-color: ${({color:t})=>t};
        }

        min-width: calc(25% - 10px);
        max-width: calc(25% - 10px);
        height: 50px;
        gap: 3px;

        .icon {
            transform: scale(0.8);
        }
        .subtext {
            font-size: 0.6rem;
        }
    }
`,k=({item:t,amount:s})=>{const{icon:a,color:i,path:n,title:r,notifications:l}=t;return e.jsxs(re,{amount:s,to:n,color:d[i].transparent3,children:[e.jsx(L,{badge:l==null?void 0:l.toString(),color:i,size:35,children:a}),e.jsx($,{className:"subtext",align:"center",children:T(r,10)})]})},le=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: 90px;

    @media (max-width: 1000px) {
        height: 75px;
    }
`,oe=({links:t})=>{const s=Object.keys(t),a=s.length<8?8:Object.keys(t).length,{allRoutes:i}=N.useMenu();return i?e.jsxs(le,{children:[s.map((n,r)=>e.jsxs(S.Fragment,{children:[e.jsx(k,{item:t[n],amount:a}),r!==s.length-1&&e.jsx(v,{direction:"vertical",margin:"10px 0",width:"70%"})]},n)),e.jsx(v,{direction:"vertical",margin:"10px 0",width:"70%"}),e.jsx(k,{item:i.all,amount:a})]}):null},w=c.div`
    max-width: 400px;
    min-width: calc(100% / 3);
    width: 100%;
    height: 156px;
    background: var(--theme-2);
    border-radius: 15px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;

    .payment-info {
        width: 100%;
        height: 100%;
        background: var(--block);
        border-radius: 11px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .top-info {
            a {
                position: absolute;
                top: 6px;
                right: 6px;
            }
        }
    }

    ${p.isMobile} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`,ce=()=>e.jsx(w,{children:e.jsxs("div",{className:"payment-info education",children:[e.jsxs("div",{children:[e.jsx(g,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),e.jsx(g,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),e.jsx(g,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),de=()=>e.jsx(w,{children:e.jsx(W,{text:"Ошибка ",size:"70px"})}),C=({data:t,balance:s,section:a})=>{if(!t.length)return null;const{qr_current:i,qr_total:n}=t[0];return e.jsxs("div",{className:"payment-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx($,{children:a}),e.jsx(A,{size:"middle",debt:s}),e.jsx(b,{to:B,children:e.jsx(R,{icon:e.jsx(z,{}),background:"transparent"})})]}),s>0&&e.jsx(F,{qr_current:i,qr_total:n}),s<=0&&e.jsx(U,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:e.jsx(I,{})})]})},xe=()=>{var r,l;const[t,s]=E([f.$paymentsStore,f.$error]);if(s)return e.jsx(de,{});if(!t)return e.jsx(ce,{});if(t&&!t.dormitory.length&&!t.education.length)return null;const a=+((r=t==null?void 0:t.dormitory[0])==null?void 0:r.balance_currdate),i=+((l=t==null?void 0:t.education[0])==null?void 0:l.balance_currdate),n=a>0||i>0;return e.jsxs(w,{background:n?"red":"green",children:[e.jsx(C,{data:t.dormitory,balance:a,section:"Общежитие"}),e.jsx(C,{data:t.education,balance:i,section:"Обучение"})]})},he=c.div`
    --time-width: 30px;

    position: relative;
    width: 100%;
    max-width: calc(50% - 5px);
    height: 156px;
    padding: 6px;
    border-radius: 14px;
    background: var(--theme-2);

    ${p.isMobile} {
        --time-width: 35px;
        min-width: 100%;
    }
`,pe=c.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    border-radius: 10px;
    scroll-snap-type: y mandatory;

    & > *:not(:last-child) {
        margin-bottom: 6px;
    }

    & > * {
        background-color: var(--theme);
        scroll-snap-align: center;
        color: var(--text);
    }

    ${p.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`,ge=()=>{const{listRef:t,noSchedule:s,handleOpenModal:a,loading:i,schedule:n,isEnded:r,hasNoSchedule:l}=D();return l?null:e.jsxs(he,{noSchedule:s||i,children:[s&&!i&&e.jsx(H,{}),i&&e.jsx(O,{}),!s&&!i&&e.jsxs(pe,{ref:t,children:[n==null?void 0:n.map(o=>h.createElement(Y,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:_(n,o,!0),onClick:a,isCurrentEvent:Z(o,!0),leftShift:0,quantity:1,...o,key:o.title+o.weekday+o.dateInterval})),r&&e.jsx(q,{})]})]})},ue=()=>{const{widgetSchedule:t,widgetPayment:s}=M.useSettings().settings["settings-home-page"].property;return e.jsxs(X,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!t||!!s,children:[t&&e.jsx(ge,{}),s&&e.jsx(xe,{})]})},me=()=>{var r;const{preparedData:t,loading:s}=y.selectors.useData(),{data:{user:a}}=j.useUser(),i=(r=t==null?void 0:t[new Date().getFullYear()])==null?void 0:r.slice(0,3),{isMobile:n}=G();return h.useEffect(()=>{t||y.effects.getFx()},[]),e.jsxs(x,{d:"column",children:[e.jsxs(P,{size:4,bottomGap:!0,align:"left",children:["Последние новости",e.jsx(b,{to:V,children:e.jsx(R,{width:"50px",height:"15px",background:d.blue.transparent2,textColor:d.blue.light1,text:"Ещё"})})]}),e.jsxs(x,{gap:"12px",d:n?"column":"row",children:[s&&e.jsxs(x,{d:"column",gap:"8px",children:[e.jsx(u,{}),e.jsx(u,{}),e.jsx(u,{})]}),i==null?void 0:i.map((l,o)=>e.jsx(K,{isNew:o===0&&(a==null?void 0:a.hasAlerts),news:l,orientation:n?"horizontal":"vertical"},l.id))]})]})},fe=c.div`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({main:t,dark:s})=>`linear-gradient(119deg, ${t}, ${s})`};

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    z-index: -1;
    overflow: hidden;

    svg {
        position: absolute;
        opacity: 0.05;
        z-index: 0;
    }

    svg:nth-child(1) {
        transform: scale(4) rotate(287deg) translate(390px, 190px);
    }

    svg:nth-child(2) {
        transform: scale(2) rotate(15deg) translate(522px, -410px);
    }

    svg:nth-child(3) {
        transform: scale(3) rotate(30deg) translate(75.9px, 179px);
    }

    svg:nth-child(4) {
        transform: scale(2) rotate(60deg) translate(75.9px, 159px);
    }

    .circle {
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 100%;
        z-index: 1;
        background: ${({light:t,dark:s})=>`linear-gradient(283deg, ${t}, ${s})`};
    }

    .circle.c2 {
        transform: translate(814px, 110px) scale(1.4);
    }

    .circle.c3 {
        transform: translate(203px, -70px) scale(3);
    }

    .circle.c4 {
        transform: translate(353px, 3px) scale(01);
        /* filter: blur(3px); */
        z-index: -1;
    }

    .circle.c5 {
        transform: translate(1236px, 10px) scale(0.8);
    }
`,be=()=>{const{data:{user:t}}=j.useUser(),s=m((t==null?void 0:t.fullName)??"","dark1")??d.blue.dark2,a=m((t==null?void 0:t.fullName)??"","main")??d.blue.main,i=m((t==null?void 0:t.fullName)??"","light1")??d.blue.light2;return e.jsxs(fe,{light:i,main:a,dark:s,children:[e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:i})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("div",{className:"circle c2"}),e.jsx("div",{className:"circle c3"}),e.jsx("div",{className:"circle c4"}),e.jsx("div",{className:"circle c5"})]})},je=S.memo(be),we=c.div`
    width: 100%;
    padding-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 1000px) {
        padding-top: 153px;
    }
`,ke=()=>{const{data:{user:t},error:s}=j.useUser(),a=E(f.$paymentsStore),{data:{schedule:i}}=Q.useSchedule(),{homeRoutes:n}=N.useMenu();if(!t||!n)return null;h.useEffect(()=>{a||J.getPayments()},[a]),h.useEffect(()=>{i||ee.getScheduleFx(t)},[i]);const{news:r}=M.useSettings().settings["settings-home-page"].property;return e.jsxs(te,{loading:!t,load:()=>null,error:s,data:t,children:[e.jsx(je,{}),e.jsxs(we,{children:[e.jsx(se,{}),e.jsx(oe,{links:n}),e.jsx(ie,{children:e.jsxs(ae,{maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[e.jsxs(x,{children:[e.jsx(P,{size:2,align:"left",width:"100%",children:"Главная"}),e.jsx(ne,{})]}),e.jsx(ue,{}),!!r&&e.jsx(me,{})]})})]})]})};export{ke as default};
