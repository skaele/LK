import{s as c,L as v,j as e,r as h,R as N,Z as R,F as T,c as A}from"./vendor-561dac3a.js";import{H as g,O as d,bl as W,U as I,aA as M,L as C,bm as j,bd as m,a0 as D,bn as F,b2 as _,t as P,bo as B,M as U,bp as O,bq as Y,br as Z,bs as q,bt as H,bu as X,bv as G,bw as L,a4 as J,bj as k,a8 as w,bx as K,J as u,T as z,by as Q,bz as f,bA as b,bB as V,bC as ee,bD as te,W as se,bE as ie,X as ae,b8 as re,bF as ne}from"./index-d124093a.js";import{E as le}from"./index-8c20f312.js";import{A as oe}from"./alert-item-9e73782f.js";import"./is-valid-url-08a91344.js";const ce=c(v)`
    width: 100%;
    height: 100%;
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

    ${g.isTablet} {
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
`,S=({item:t,amount:s})=>{const{icon:i,color:a,path:r,title:l,notifications:n,menuPath:o}=t;return e.jsxs(ce,{amount:s,to:o??r,color:d[a].transparent3,children:[e.jsx(W,{badge:n==null?void 0:n.toString(),color:a,size:35,children:i}),e.jsx(I,{width:"95px",maxWidth:"95px",className:"subtext",align:"center",children:l})]})},de=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: ${({componentHeight:t})=>t&&t>33?"120px":t&&t>10?"110px":"100px"};

    @media (max-width: 1000px) {
        height: ${({componentHeight:t})=>t&&t>33?"100px":t&&t>10?"90px":"75px"};
    }
`,xe=({links:t})=>{const s=Object.keys(t),i=s.length<8?8:Object.keys(t).length,{allRoutes:a}=M.useMenu(),[r,l]=h.useState(0);return a?(h.useEffect(()=>{const n=s.reduce((o,p)=>t[o].title.length>t[p].title.length?o:p);l(t[n].title.length)},[s]),e.jsxs(de,{componentHeight:r,children:[s.map((n,o)=>e.jsxs(N.Fragment,{children:[e.jsx(S,{item:t[n],amount:i}),o!==s.length-1&&e.jsx(C,{direction:"vertical",margin:"10px 0",width:"70%"})]},n)),e.jsx(C,{direction:"vertical",margin:"10px 0",width:"70%"}),e.jsx(S,{item:a.all,amount:i})]})):null},y=c.div`
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

    ${g.isMobile} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`,he=()=>e.jsx(y,{children:e.jsxs("div",{className:"payment-info education",children:[e.jsxs("div",{children:[e.jsx(m,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),e.jsx(m,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),e.jsx(m,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),pe=()=>e.jsx(y,{children:e.jsx(D,{text:"Ошибка ",size:"70px"})}),E=({data:t,balance:s,section:i})=>{if(!t.length)return null;const{qr_current:a,qr_total:r}=t[0];return e.jsxs("div",{className:"payment-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx(I,{children:i}),e.jsx(F,{size:"middle",debt:s}),e.jsx(v,{to:_,children:e.jsx(P,{icon:e.jsx(T,{}),background:"transparent"})})]}),s>0&&e.jsx(B,{qr_current:a,qr_total:r}),s<=0&&e.jsx(U,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:e.jsx(A,{})})]})},$=t=>t.some(s=>Number(s.balance_currdate)>0)?t.reduce((s,i)=>Number(i.balance_currdate)>0?Number(i.balance_currdate)+s:s,0):t.reduce((s,i)=>Number(i.balance_currdate)+s,0),ue=()=>{const[t,s]=R([j.$paymentsStore,j.$error]);if(s)return e.jsx(pe,{});if(!t)return e.jsx(he,{});if(t&&!t.dormitory.length&&!t.education.length)return null;const i=$(t==null?void 0:t.dormitory),a=$(t==null?void 0:t.education),r=i>0||a>0;return e.jsxs(y,{background:r?"red":"green",children:[e.jsx(E,{data:t.dormitory,balance:i,section:"Общежитие"}),e.jsx(E,{data:t.education,balance:a,section:"Обучение"})]})},ge=c.div`
    --time-width: 30px;

    position: relative;
    width: 100%;
    max-width: calc(50% - 5px);
    height: 156px;
    padding: 6px;
    border-radius: 14px;
    background: var(--theme-2);

    ${g.isMobile} {
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

    ${g.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;c.div`
    position: absolute;
    top: 22px;
    right: 22px;
    color: ${d.red.main};
`;const fe=()=>{const{listRef:t,noSchedule:s,loading:i,schedule:a,isEnded:r,hasNoSchedule:l,errorInData:n,handleOpenModal:o,handleErrorClick:p}=O();return l?null:e.jsxs(ge,{noSchedule:s||i,children:[s&&!i&&e.jsx(Y,{errorInData:!!n}),i&&e.jsx(Z,{}),e.jsx(le,{visible:!!n,topRightConrer:!0,onClick:p}),!s&&!i&&e.jsxs(me,{ref:t,children:[a==null?void 0:a.map(x=>h.createElement(q,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:H(a,x,!0),onClick:o,isCurrentEvent:X(x,!0),leftShift:0,quantity:1,...x,key:x.title+x.weekday+x.dateInterval})),r&&e.jsx(G,{})]})]})},be=()=>{const{widgetSchedule:t,widgetPayment:s}=L.useSettings().settings["settings-home-page"].property;return e.jsxs(J,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!t||!!s,children:[t&&e.jsx(fe,{}),s&&e.jsx(ue,{})]})},je=()=>{var l;const{preparedData:t,loading:s}=k.selectors.useData(),{data:{user:i}}=w.useUser(),a=(l=t==null?void 0:t[new Date().getFullYear()])==null?void 0:l.slice(0,3),{isMobile:r}=K();return h.useEffect(()=>{t||k.effects.getFx()},[]),e.jsxs(u,{d:"column",children:[e.jsxs(z,{size:4,bottomGap:!0,align:"left",children:["Последние новости",e.jsx(v,{to:Q,children:e.jsx(P,{width:"50px",height:"15px",background:d.blue.transparent3,textColor:d.blue.light1,text:"Ещё"})})]}),e.jsxs(u,{gap:"10px",d:r?"column":"row",children:[s&&e.jsxs(u,{d:"column",gap:"8px",children:[e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{})]}),a==null?void 0:a.map((n,o)=>e.jsx(oe,{isNew:o===0&&(i==null?void 0:i.hasAlerts),news:n,orientation:r?"horizontal":"vertical"},n.id))]})]})},ve=c.div`
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
`,we=()=>{const{data:{user:t}}=w.useUser(),s=b((t==null?void 0:t.fullName)??"","dark1")??d.blue.dark2,i=b((t==null?void 0:t.fullName)??"","main")??d.blue.main,a=b((t==null?void 0:t.fullName)??"","light1")??d.blue.light2;return e.jsxs(ve,{light:a,main:i,dark:s,children:[e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:a})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("div",{className:"circle c2"}),e.jsx("div",{className:"circle c3"}),e.jsx("div",{className:"circle c4"}),e.jsx("div",{className:"circle c5"})]})},ye=N.memo(we),Ce=c.div`
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
`,Re=()=>{const{data:{user:t},error:s}=w.useUser(),i=R(j.$paymentsStore),{data:{schedule:a}}=V.useSchedule(),{homeRoutes:r}=M.useMenu();if(!t||!r)return null;h.useEffect(()=>{i||ee.getPayments()},[i]),h.useEffect(()=>{a||te.getScheduleFx(t)},[a]);const{news:l}=L.useSettings().settings["settings-home-page"].property;return e.jsxs(se,{loading:!t,load:()=>null,error:s,data:t,children:[e.jsx(ye,{}),e.jsxs(Ce,{children:[e.jsx(ie,{}),e.jsx(xe,{links:r}),e.jsx(ae,{children:e.jsxs(re,{noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[e.jsxs(u,{children:[e.jsx(z,{size:2,align:"left",width:"100%",children:"Главная"}),e.jsx(ne,{})]}),e.jsx(be,{}),!!l&&e.jsx(je,{})]})})]})]})};export{Re as default};
