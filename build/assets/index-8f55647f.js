import{s as c,L as v,j as e,r as h,R as $,Z as R,F as z,c as T}from"./vendor-f1fdae2f.js";import{q as u,E as d,b7 as W,X as I,al as M,D as C,b8 as j,a$ as m,G as A,b9 as D,aQ as B,B as P,ba as F,M as U,bb as _,bc as O,bd as Y,be as q,bf as Z,bg as G,bh as X,bi as L,ab as H,b5 as k,V as w,bj as Q,r as g,T as N,bk as V,bl as f,bm as b,bn as K,bo as J,bp as ee,W as te,bq as se,v as ie,aW as ae,br as ne}from"./index-751fe807.js";import{E as re}from"./index-c36e6c78.js";import{A as le}from"./alert-item-b60ad5bd.js";import"./is-valid-url-08a91344.js";const oe=c(v)`
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

    ${u.isTablet} {
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
`,S=({item:t,amount:s})=>{const{icon:a,color:i,path:r,title:l,notifications:n,menuPath:o}=t;return e.jsxs(oe,{amount:s,to:o??r,color:d[i].transparent3,children:[e.jsx(W,{badge:n==null?void 0:n.toString(),color:i,size:35,children:a}),e.jsx(I,{width:"95px",maxWidth:"95px",className:"subtext",align:"center",children:l})]})},ce=c.div`
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
`,de=({links:t})=>{const s=Object.keys(t),a=s.length<8?8:Object.keys(t).length,{allRoutes:i}=M.useMenu(),[r,l]=h.useState(0);return i?(h.useEffect(()=>{const n=s.reduce((o,p)=>t[o].title.length>t[p].title.length?o:p);l(t[n].title.length)},[s]),e.jsxs(ce,{componentHeight:r,children:[s.map((n,o)=>e.jsxs($.Fragment,{children:[e.jsx(S,{item:t[n],amount:a}),o!==s.length-1&&e.jsx(C,{direction:"vertical",margin:"10px 0",width:"70%"})]},n)),e.jsx(C,{direction:"vertical",margin:"10px 0",width:"70%"}),e.jsx(S,{item:i.all,amount:a})]})):null},y=c.div`
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

    ${u.isMobile} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`,xe=()=>e.jsx(y,{children:e.jsxs("div",{className:"payment-info education",children:[e.jsxs("div",{children:[e.jsx(m,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),e.jsx(m,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),e.jsx(m,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),he=()=>e.jsx(y,{children:e.jsx(A,{text:"Ошибка ",size:"70px"})}),E=({data:t,balance:s,section:a})=>{if(!t.length)return null;const{qr_current:i,qr_total:r}=t[0];return e.jsxs("div",{className:"payment-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx(I,{children:a}),e.jsx(D,{size:"middle",debt:s}),e.jsx(v,{to:B,children:e.jsx(P,{icon:e.jsx(z,{}),background:"transparent"})})]}),s>0&&e.jsx(F,{qr_current:i,qr_total:r}),s<=0&&e.jsx(U,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:e.jsx(T,{})})]})},pe=()=>{var l,n;const[t,s]=R([j.$paymentsStore,j.$error]);if(s)return e.jsx(he,{});if(!t)return e.jsx(xe,{});if(t&&!t.dormitory.length&&!t.education.length)return null;const a=+((l=t==null?void 0:t.dormitory[0])==null?void 0:l.balance_currdate),i=+((n=t==null?void 0:t.education[0])==null?void 0:n.balance_currdate),r=a>0||i>0;return e.jsxs(y,{background:r?"red":"green",children:[e.jsx(E,{data:t.dormitory,balance:a,section:"Общежитие"}),e.jsx(E,{data:t.education,balance:i,section:"Обучение"})]})},ge=c.div`
    --time-width: 30px;

    position: relative;
    width: 100%;
    max-width: calc(50% - 5px);
    height: 156px;
    padding: 6px;
    border-radius: 14px;
    background: var(--theme-2);

    ${u.isMobile} {
        --time-width: 35px;
        min-width: 100%;
    }
`,ue=c.div`
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

    ${u.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;c.div`
    position: absolute;
    top: 22px;
    right: 22px;
    color: ${d.red.main};
`;const me=()=>{const{listRef:t,noSchedule:s,loading:a,schedule:i,isEnded:r,hasNoSchedule:l,errorInData:n,handleOpenModal:o,handleErrorClick:p}=_();return l?null:e.jsxs(ge,{noSchedule:s||a,children:[s&&!a&&e.jsx(O,{errorInData:!!n}),a&&e.jsx(Y,{}),e.jsx(re,{visible:!!n,topRightConrer:!0,onClick:p}),!s&&!a&&e.jsxs(ue,{ref:t,children:[i==null?void 0:i.map(x=>h.createElement(q,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:Z(i,x,!0),onClick:o,isCurrentEvent:G(x,!0),leftShift:0,quantity:1,...x,key:x.title+x.weekday+x.dateInterval})),r&&e.jsx(X,{})]})]})},fe=()=>{const{widgetSchedule:t,widgetPayment:s}=L.useSettings().settings["settings-home-page"].property;return e.jsxs(H,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!t||!!s,children:[t&&e.jsx(me,{}),s&&e.jsx(pe,{})]})},be=()=>{var l;const{preparedData:t,loading:s}=k.selectors.useData(),{data:{user:a}}=w.useUser(),i=(l=t==null?void 0:t[new Date().getFullYear()])==null?void 0:l.slice(0,3),{isMobile:r}=Q();return h.useEffect(()=>{t||k.effects.getFx()},[]),e.jsxs(g,{d:"column",children:[e.jsxs(N,{size:4,bottomGap:!0,align:"left",children:["Последние новости",e.jsx(v,{to:V,children:e.jsx(P,{width:"50px",height:"15px",background:d.blue.transparent3,textColor:d.blue.light1,text:"Ещё"})})]}),e.jsxs(g,{gap:"10px",d:r?"column":"row",children:[s&&e.jsxs(g,{d:"column",gap:"8px",children:[e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{})]}),i==null?void 0:i.map((n,o)=>e.jsx(le,{isNew:o===0&&(a==null?void 0:a.hasAlerts),news:n,orientation:r?"horizontal":"vertical"},n.id))]})]})},je=c.div`
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
`,ve=()=>{const{data:{user:t}}=w.useUser(),s=b((t==null?void 0:t.fullName)??"","dark1")??d.blue.dark2,a=b((t==null?void 0:t.fullName)??"","main")??d.blue.main,i=b((t==null?void 0:t.fullName)??"","light1")??d.blue.light2;return e.jsxs(je,{light:i,main:a,dark:s,children:[e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:i})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("div",{className:"circle c2"}),e.jsx("div",{className:"circle c3"}),e.jsx("div",{className:"circle c4"}),e.jsx("div",{className:"circle c5"})]})},we=$.memo(ve),ye=c.div`
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
`,Re=()=>{const{data:{user:t},error:s}=w.useUser(),a=R(j.$paymentsStore),{data:{schedule:i}}=K.useSchedule(),{homeRoutes:r}=M.useMenu();if(!t||!r)return null;h.useEffect(()=>{a||J.getPayments()},[a]),h.useEffect(()=>{i||ee.getScheduleFx(t)},[i]);const{news:l}=L.useSettings().settings["settings-home-page"].property;return e.jsxs(te,{loading:!t,load:()=>null,error:s,data:t,children:[e.jsx(we,{}),e.jsxs(ye,{children:[e.jsx(se,{}),e.jsx(de,{links:r}),e.jsx(ie,{children:e.jsxs(ae,{noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[e.jsxs(g,{children:[e.jsx(N,{size:2,align:"left",width:"100%",children:"Главная"}),e.jsx(ne,{})]}),e.jsx(fe,{}),!!l&&e.jsx(be,{})]})})]})]})};export{Re as default};
