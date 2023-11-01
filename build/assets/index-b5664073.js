import{s as l,L as j,j as e,R as E,X as $,F as L,c as T,r as p}from"./vendor-4af360a6.js";import{o as g,x as c,b4 as A,V as R,a7 as W,ai as I,D as y,b5 as b,aY as u,O as D,b6 as B,aN as F,B as M,b7 as U,M as H,b8 as O,b9 as Y,ba as _,bb as Z,bc as q,bd as X,be as G,bf as N,a8 as V,b2 as k,U as v,bg as K,p as h,T as P,bh as Q,bi as m,bj as f,bk as J,bl as ee,bm as te,W as se,bn as ie,r as ae,aT as ne,bo as re}from"./index-2ef5f28f.js";import{E as oe}from"./index-707a7e2d.js";import{A as le}from"./alert-item-e9993656.js";import"./is-valid-url-08a91344.js";const ce=l(j)`
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
`,C=({item:t,amount:s})=>{const{icon:a,color:i,path:n,title:r,notifications:o,menuPath:x}=t;return e.jsxs(ce,{amount:s,to:x??n,color:c[i].transparent3,children:[e.jsx(A,{badge:o==null?void 0:o.toString(),color:i,size:35,children:a}),e.jsx(R,{className:"subtext",align:"center",children:W(r,10)})]})},de=l.div`
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
`,xe=({links:t})=>{const s=Object.keys(t),a=s.length<8?8:Object.keys(t).length,{allRoutes:i}=I.useMenu();return i?e.jsxs(de,{children:[s.map((n,r)=>e.jsxs(E.Fragment,{children:[e.jsx(C,{item:t[n],amount:a}),r!==s.length-1&&e.jsx(y,{direction:"vertical",margin:"10px 0",width:"70%"})]},n)),e.jsx(y,{direction:"vertical",margin:"10px 0",width:"70%"}),e.jsx(C,{item:i.all,amount:a})]}):null},w=l.div`
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
`,he=()=>e.jsx(w,{children:e.jsxs("div",{className:"payment-info education",children:[e.jsxs("div",{children:[e.jsx(u,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),e.jsx(u,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),e.jsx(u,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),pe=()=>e.jsx(w,{children:e.jsx(D,{text:"Ошибка ",size:"70px"})}),S=({data:t,balance:s,section:a})=>{if(!t.length)return null;const{qr_current:i,qr_total:n}=t[0];return e.jsxs("div",{className:"payment-info",children:[e.jsxs("div",{className:"top-info",children:[e.jsx(R,{children:a}),e.jsx(B,{size:"middle",debt:s}),e.jsx(j,{to:F,children:e.jsx(M,{icon:e.jsx(L,{}),background:"transparent"})})]}),s>0&&e.jsx(U,{qr_current:i,qr_total:n}),s<=0&&e.jsx(H,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:e.jsx(T,{})})]})},ge=()=>{var r,o;const[t,s]=$([b.$paymentsStore,b.$error]);if(s)return e.jsx(pe,{});if(!t)return e.jsx(he,{});if(t&&!t.dormitory.length&&!t.education.length)return null;const a=+((r=t==null?void 0:t.dormitory[0])==null?void 0:r.balance_currdate),i=+((o=t==null?void 0:t.education[0])==null?void 0:o.balance_currdate),n=a>0||i>0;return e.jsxs(w,{background:n?"red":"green",children:[e.jsx(S,{data:t.dormitory,balance:a,section:"Общежитие"}),e.jsx(S,{data:t.education,balance:i,section:"Обучение"})]})},ue=l.div`
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
`,me=l.div`
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
`;l.div`
    position: absolute;
    top: 22px;
    right: 22px;
    color: ${c.red.main};
`;const fe=()=>{const{listRef:t,noSchedule:s,loading:a,schedule:i,isEnded:n,hasNoSchedule:r,errorInData:o,handleOpenModal:x,handleErrorClick:z}=O();return r?null:e.jsxs(ue,{noSchedule:s||a,children:[s&&!a&&e.jsx(Y,{errorInData:!!o}),a&&e.jsx(_,{}),e.jsx(oe,{visible:!!o,topRightConrer:!0,onClick:z}),!s&&!a&&e.jsxs(me,{ref:t,children:[i==null?void 0:i.map(d=>p.createElement(Z,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:q(i,d,!0),onClick:x,isCurrentEvent:X(d,!0),leftShift:0,quantity:1,...d,key:d.title+d.weekday+d.dateInterval})),n&&e.jsx(G,{})]})]})},be=()=>{const{widgetSchedule:t,widgetPayment:s}=N.useSettings().settings["settings-home-page"].property;return e.jsxs(V,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!t||!!s,children:[t&&e.jsx(fe,{}),s&&e.jsx(ge,{})]})},je=()=>{var r;const{preparedData:t,loading:s}=k.selectors.useData(),{data:{user:a}}=v.useUser(),i=(r=t==null?void 0:t[new Date().getFullYear()])==null?void 0:r.slice(0,3),{isMobile:n}=K();return p.useEffect(()=>{t||k.effects.getFx()},[]),e.jsxs(h,{d:"column",children:[e.jsxs(P,{size:4,bottomGap:!0,align:"left",children:["Последние новости",e.jsx(j,{to:Q,children:e.jsx(M,{width:"50px",height:"15px",background:c.blue.transparent3,textColor:c.blue.light1,text:"Ещё"})})]}),e.jsxs(h,{gap:"10px",d:n?"column":"row",children:[s&&e.jsxs(h,{d:"column",gap:"8px",children:[e.jsx(m,{}),e.jsx(m,{}),e.jsx(m,{})]}),i==null?void 0:i.map((o,x)=>e.jsx(le,{isNew:x===0&&(a==null?void 0:a.hasAlerts),news:o,orientation:n?"horizontal":"vertical"},o.id))]})]})},ve=l.div`
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
`,we=()=>{const{data:{user:t}}=v.useUser(),s=f((t==null?void 0:t.fullName)??"","dark1")??c.blue.dark2,a=f((t==null?void 0:t.fullName)??"","main")??c.blue.main,i=f((t==null?void 0:t.fullName)??"","light1")??c.blue.light2;return e.jsxs(ve,{light:i,main:a,dark:s,children:[e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:i})}),e.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),e.jsx("div",{className:"circle c2"}),e.jsx("div",{className:"circle c3"}),e.jsx("div",{className:"circle c4"}),e.jsx("div",{className:"circle c5"})]})},ye=E.memo(we),ke=l.div`
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
`,Ie=()=>{const{data:{user:t},error:s}=v.useUser(),a=$(b.$paymentsStore),{data:{schedule:i}}=J.useSchedule(),{homeRoutes:n}=I.useMenu();if(!t||!n)return null;p.useEffect(()=>{a||ee.getPayments()},[a]),p.useEffect(()=>{i||te.getScheduleFx(t)},[i]);const{news:r}=N.useSettings().settings["settings-home-page"].property;return e.jsxs(se,{loading:!t,load:()=>null,error:s,data:t,children:[e.jsx(ye,{}),e.jsxs(ke,{children:[e.jsx(ie,{}),e.jsx(xe,{links:n}),e.jsx(ae,{children:e.jsxs(ne,{noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[e.jsxs(h,{children:[e.jsx(P,{size:2,align:"left",width:"100%",children:"Главная"}),e.jsx(re,{})]}),e.jsx(be,{}),!!r&&e.jsx(je,{})]})})]})]})};export{Ie as default};
