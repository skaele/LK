import{s as c,a7 as v,j as t,r as h,R as N,n as g,F as T,c as A}from"./vendor-ab783af7.js";import{D as m,J as d,b8 as W,O as R,am as I,G as k,b9 as w,b0 as f,Y as D,ba as _,aP as B,o as M,bb as F,M as O,bc as U,bd as Y,be as q,bf as Z,bg as G,bh as X,bi as H,bj as z,ah as J,a2 as y,bk as K,E as u,h as L,bl as Q,bm as b,bn as j,bo as V,bp as ee,bq as te,W as se,br as ae,R as ie,aX as re,bs as ne}from"./index-07cca455.js";import{E as le}from"./index-9298ab17.js";import{a as S,A as oe}from"./alert-item-bf814bd4.js";import"./is-valid-url-08a91344.js";const ce=c(v)`
    width: 100%;
    height: 100%;
    max-width: ${({amount:e})=>e>6&&"93.25px"};
    /* background: var(--block); */
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 10px;

    .subtext {
        /* white-space: nowrap; */
        font-size: 0.72rem;
        transition: 0.2s;
        color: var(--text);
    }

    @media (min-width: 1001px) {
        padding-top: 15px;
        &:hover {
            background-color: ${({color:e})=>e};
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

    ${m.isTablet} {
        &:active .icon {
            transform: scale(1.1) translateY(6px);
        }

        &:active .subtext {
            transform: translateX(0px) translateY(-50%);
            opacity: 0;
        }

        &:active {
            background-color: ${({color:e})=>e};
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
`,E=({item:e,amount:s})=>{const{icon:a,color:i,path:r,title:l,notifications:n,menuPath:o}=e;return t.jsxs(ce,{to:o??r,color:d[i].transparent3,amount:s,children:[t.jsx(W,{badge:n==null?void 0:n.toString(),color:i,size:35,children:a}),t.jsx(R,{width:"95px",maxWidth:"95px",className:"subtext",align:"center",children:l})]})},de=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: ${({componentHeight:e})=>e&&e>33?"120px":e&&e>10?"110px":"100px"};

    @media (max-width: 1000px) {
        height: ${({componentHeight:e})=>e&&e>33?"100px":e&&e>10?"90px":"75px"};
    }
`,xe=({links:e})=>{const s=Object.keys(e),{allRoutes:a}=I.useMenu(),[i,r]=h.useState(0);if(!a)return null;h.useEffect(()=>{const n=s.reduce((o,p)=>e[o].title.length>e[p].title.length?o:p);r(e[n].title.length)},[s]);const l=Object.keys(e).length;return t.jsxs(de,{componentHeight:i,children:[s.map((n,o)=>t.jsxs(N.Fragment,{children:[t.jsx(E,{amount:l,item:e[n]}),o!==s.length-1&&t.jsx(k,{direction:"vertical",margin:"10px 0",width:"70%"})]},n)),t.jsx(k,{direction:"vertical",margin:"10px 0",width:"70%"}),t.jsx(E,{amount:l,item:a.all})]})},C=c.div`
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

    ${m.isMobile} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`,he=()=>t.jsx(C,{children:t.jsxs("div",{className:"payment-info education",children:[t.jsxs("div",{children:[t.jsx(f,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),t.jsx(f,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),t.jsx(f,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),pe=()=>t.jsx(C,{children:t.jsx(D,{text:"Ошибка ",size:"70px"})}),P=({data:e,balance:s,section:a})=>{if(!e.length)return null;const{qr_current:i,qr_total:r}=e[0];return t.jsxs("div",{className:"payment-info",children:[t.jsxs("div",{className:"top-info",children:[t.jsx(R,{children:a}),t.jsx(_,{size:"middle",debt:s}),t.jsx(v,{to:B,children:t.jsx(M,{icon:t.jsx(T,{}),background:"transparent"})})]}),s>0&&t.jsx(F,{qr_current:i,qr_total:r}),s<=0&&t.jsx(O,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:t.jsx(A,{})})]})},$=e=>e.some(s=>Number(s.balance_currdate)>0)?e.reduce((s,a)=>Number(a.balance_currdate)>0?Number(a.balance_currdate)+s:s,0):e.reduce((s,a)=>Number(a.balance_currdate)+s,0),ue=()=>{const[e,s]=g([w.$paymentsStore,w.$error]);if(s)return t.jsx(pe,{});if(!e)return t.jsx(he,{});if(e&&!e.dormitory.length&&!e.education.length)return null;const a=$(e==null?void 0:e.dormitory),i=$(e==null?void 0:e.education),r=a>0||i>0;return t.jsxs(C,{background:r?"red":"green",children:[t.jsx(P,{data:e.dormitory,balance:a,section:"Общежитие"}),t.jsx(P,{data:e.education,balance:i,section:"Обучение"})]})},ge=c.div`
    --time-width: 30px;

    position: relative;
    width: 100%;
    max-width: calc(50% - 5px);
    height: 156px;
    padding: 6px;
    border-radius: 14px;
    background: var(--theme-2);

    ${m.isMobile} {
        --time-width: 35px;
        min-width: 100%;
    }
`,me=c.div`
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

    ${m.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;c.div`
    position: absolute;
    top: 22px;
    right: 22px;
    color: ${d.red.main};
`;const fe=()=>{const{listRef:e,noSchedule:s,loading:a,schedule:i,isEnded:r,hasNoSchedule:l,errorInData:n,handleOpenModal:o,handleErrorClick:p}=U();return l?null:t.jsxs(ge,{noSchedule:s||a,children:[s&&!a&&t.jsx(Y,{errorInData:!!n}),a&&t.jsx(q,{}),t.jsx(le,{visible:!!n,topRightConrer:!0,onClick:p}),!s&&!a&&t.jsxs(me,{ref:e,children:[i==null?void 0:i.map(x=>h.createElement(Z,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:G(i,x,!0),onClick:o,isCurrentEvent:X(x,!0),leftShift:0,quantity:1,...x,key:x.title+x.weekday+x.dateInterval})),r&&t.jsx(H,{})]})]})},be=()=>{const e=g(z.userSettings),s=e==null?void 0:e.homePage.hasSchedule,a=e==null?void 0:e.homePage.hasPayment;return t.jsxs(J,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!s||!!a,children:[s&&t.jsx(fe,{}),a&&t.jsx(ue,{})]})},je=()=>{var l;const{preparedData:e,loading:s}=S.selectors.useData(),{data:{user:a}}=y.useUser(),i=(l=e==null?void 0:e[new Date().getFullYear()])==null?void 0:l.slice(0,3),{isMobile:r}=K();return h.useEffect(()=>{e||S.effects.getFx()},[]),t.jsxs(u,{d:"column",children:[t.jsxs(L,{size:4,bottomGap:!0,align:"left",children:["Последние новости",t.jsx(v,{to:Q,children:t.jsx(M,{width:"50px",height:"15px",background:d.blue.transparent3,textColor:d.blue.light1,text:"Ещё"})})]}),t.jsxs(u,{gap:"10px",d:r?"column":"row",children:[s&&t.jsxs(u,{d:"column",gap:"8px",children:[t.jsx(b,{}),t.jsx(b,{}),t.jsx(b,{})]}),i==null?void 0:i.map((n,o)=>t.jsx(oe,{isNew:o===0&&(a==null?void 0:a.hasAlerts),news:n,orientation:r?"horizontal":"vertical"},n.id))]})]})},we=c.div`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({main:e,dark:s})=>`linear-gradient(119deg, ${e}, ${s})`};

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
        background: ${({light:e,dark:s})=>`linear-gradient(283deg, ${e}, ${s})`};
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
`,ve=()=>{const{data:{user:e}}=y.useUser(),s=j((e==null?void 0:e.fullName)??"","dark1")??d.blue.dark2,a=j((e==null?void 0:e.fullName)??"","main")??d.blue.main,i=j((e==null?void 0:e.fullName)??"","light1")??d.blue.light2;return t.jsxs(we,{light:i,main:a,dark:s,children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:i})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("div",{className:"circle c2"}),t.jsx("div",{className:"circle c3"}),t.jsx("div",{className:"circle c4"}),t.jsx("div",{className:"circle c5"})]})},ye=N.memo(ve),Ce=c.div`
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
`,Ne=()=>{const{data:{user:e},error:s}=y.useUser(),a=g(w.$paymentsStore),{data:{schedule:i}}=V.useSchedule(),{homeRoutes:r}=I.useMenu();h.useEffect(()=>{a||ee.getPayments()},[a]),h.useEffect(()=>{i||te.getScheduleFx(e)},[i]);const l=g(z.userSettings);return!e||!r?null:t.jsxs(se,{loading:!e,load:()=>null,error:s,data:e,children:[t.jsx(ye,{}),t.jsxs(Ce,{children:[t.jsx(ae,{}),!!Object.keys(r).length&&t.jsx(xe,{links:r}),t.jsx(ie,{children:t.jsxs(re,{noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[t.jsxs(u,{children:[t.jsx(L,{size:2,align:"left",width:"100%",children:"Главная"}),t.jsx(ne,{})]}),t.jsx(be,{}),!!(l!=null&&l.homePage.hasNews)&&t.jsx(je,{})]})})]})]})};export{Ne as default};
