import{s as d,j as n,r as j,bZ as Z,R as A}from"./vendor-2bd70a0f.js";import{o as u,p as b,bT as z,bU as E,ac as q,bV as Q,bW as J,bX as ee,bg as F,bY as te,bd as U,bZ as ne,b_ as re,N as B,b$ as ae,bc as se,c0 as oe,c1 as ie,c2 as le,c3 as ce,c4 as de,U as H,c5 as he,u as pe,c6 as ue,l as ge,c7 as xe,c8 as me,bM as fe,bL as De}from"./index-bc77f324.js";const I=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},W=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",be=d(b)`
    padding-left: var(--time-width);
`,ye=d.div`
    width: 100%;
    font-weight: 500;
    height: 44px;
    border-radius: 4px;
    font-size: 0.86rem;
    cursor: pointer;

    &:hover {
        background: var(--theme-3);
    }

    &::before,
    &::after {
        content: '';
        display: ${({showColumns:e})=>e?"block":"none"};
        height: calc(100% - 64px);
        top: 54px;
        width: 1.5px;
        position: absolute;
        background: var(--theme-3);
    }

    &::after {
        right: 0;
    }

    ${u.isMobile} {
        font-size: 0.8rem;
        height: ${({showDates:e})=>e?"80px":"50px"};

        &::after,
        &::before {
            top: 80px;
            height: calc(100% - 88px);
        }
    }
`,we=d(b)`
    margin: 2px 0;

    ${u.isMobile} {
        flex-direction: column;
        margin: 6px 0;
    }
`,je=d.span`
    margin-left: auto;
    margin-right: ${({showDates:e})=>e?"0":"auto"};
    background: ${({showDates:e})=>!e&&I};
    color: ${({showDates:e})=>e?"var(--grey)":W};
    padding: 5px;
    border-radius: 25px;

    ${u.isMobile} {
        margin-right: auto;
        padding: 4px;
    }
`,ke=d.span`
    height: 26px;
    min-width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-right: auto;
    margin-left: 2px;
    background: ${I};
    color: ${W};
    font-weight: ${({isCurrent:e,isCurrentChosenDay:t})=>e&&t&&"600"};

    ${u.isMobile} {
        margin-left: auto;
        margin-top: 4px;
        font-size: ${({isCurrent:e})=>e&&"0.8rem"};
    }
`,ve=d.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 auto;
    width: fit-content;
`,V=d.div`
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background: ${({background:e})=>e};

    @media (max-width: 768px) {
        width: 5px;
        height: 5px;
    }
`,Y=({subjects:e})=>e?n.jsx(ve,{children:e.map(t=>n.jsx(V,{background:t.color.main},t.startTime))}):null,Ce=()=>{const e=z(new Date),t=Object.keys(E).reduce((r,s)=>(r[E[s].short]="",r),{});for(let r=0;r<6;r++){const s=e.toLocaleDateString("ru-RU",{day:"2-digit"});e.setDate(e.getDate()+1),t[Object.keys(t)[r]]=s}return t},O=({showDates:e,showColumns:t,currentChosenDay:r,onDayClick:s,events:l})=>{const i=Ce();return n.jsx(be,{jc:"space-between",children:Object.keys(i).map((a,c)=>{const o=i[a],h=c===r;return n.jsxs(ye,{showDates:e,showColumns:t,onClick:s&&(()=>s==null?void 0:s(c)),children:[n.jsxs(we,{children:[n.jsx(je,{isCurrent:+o===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:a}),e&&n.jsx(ke,{isCurrentChosenDay:h,isCurrent:+o===new Date().getDate(),children:o})]}),l&&e&&n.jsx(Y,{subjects:l[Object.keys(l)[c]]}),l&&!e&&l[Object.keys(l)[c]].length>0&&n.jsx(b,{jc:"center",children:n.jsx(V,{background:q.grey.main})})]},a)})})},G=({interval:e,showDates:t,events:r,onDayClick:s})=>{const l=e[0]*60,i=Q();return{handleOpenModal:J(),onDayClick:s,shift:l,showDates:t,interval:e,events:r,scale:i}},_=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,Me=(e,t,r)=>(ee(new Date,e[0]*60,e[1]*60)-t)*r,$e=200,Ee=({events:e,currentChosenDay:t,showDates:r=!0,interval:s=[0,23]})=>{const{isSmallDesktop:l}=F(),{scale:i,shift:a,events:c,handleOpenModal:o}=G({interval:s,events:e}),[h,f]=j.useState(null),[x,p]=j.useState(_(t)),g=j.useRef(null),D=te({getScrollTopValue:()=>Me(s,a,i)-$e});j.useEffect(()=>{if(e){const m=Object.keys(e??{})[x],v=e[m].find(X=>U(X,!0))??null;f(v)}else f(null)},[e]);const k=h?`${h.startTime} - ${ne(h.startTime,h.duration)}`:"9:00",y=m=>{l?o(m):f(m)},w=m=>{const v=Math.floor(m.currentTarget.scrollLeft/m.currentTarget.clientWidth);p(v)},N=m=>{g.current&&(g.current.scrollLeft=g.current.clientWidth*m)};return j.useLayoutEffect(()=>{N(_(t))},[g,t]),{currentDay:x,events:c,carouselRef:g,eventsRef:D,interval:s,scale:i,shift:a,showDates:r,chosenEvent:h,timeInterval:k,currentChosenDay:t,handleDayClick:N,handleCarouselScroll:w,onEventClick:y}},L="calc(100vh - var(--header-height) - 110px)",R="calc(100vh - var(--header-height) - 185px)",P="calc(100vh - var(--header-height) - 170px);",K=d(b)`
    --time-width: 55px;

    ${u.isMobile} {
        --time-width: 35px;
    }
`,Se=d(K)`
    height: ${L};

    ${u.isTablet} {
        height: ${P};
    }

    ${u.isMobile} {
        height: ${R};
    }
`,Te=d.div`
    min-width: 340px;
    max-width: 340px;
    height: 100%;
    z-index: 10;
    background: var(--block-content);
    border-radius: 10px;
    top: 0;
    overflow: hidden;
    box-shadow: var(--block-shadow);

    ${u.isSmallTesktop} {
        display: none;
    }
`,Ie=d.div`
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
    width: 100%;
    gap: 32px;
    display: flex;
    scroll-snap-type: x mandatory;

    & {
        .calendar-wrapper {
            scroll-snap-align: center;
            min-width: 100%;
        }
    }
`,We=e=>{const{currentDay:t,events:r,carouselRef:s,eventsRef:l,interval:i,scale:a,shift:c,chosenEvent:o,showDates:h,timeInterval:f,handleDayClick:x,handleCarouselScroll:p,onEventClick:g}=Ee(e);return n.jsxs(Se,{d:"column",gap:"12px",children:[n.jsx(O,{onDayClick:x,currentChosenDay:t,showDates:h,showColumns:!1,events:r}),n.jsxs(b,{h:"100%",gap:"18px",children:[n.jsx(Ie,{onScroll:p,ref:s,children:Object.keys(r??{}).map((D,k)=>{const y=r==null?void 0:r[D];return n.jsx(re,{events:y,interval:i,scale:a,weekday:k+1,currentDay:t,shift:c,onEventClick:g,ref:l},D)})}),n.jsx(Te,{children:o?n.jsx(ae,{isNextEvent:se(r==null?void 0:r.saturday,o,!0),timeInterval:f,color:o.color,name:o.title,place:o.place,link:o.link,groups:o.groups,weekday:o.weekday,teachers:o.people,dateInterval:o.dateInterval,rooms:o.rooms??[],isCurrentEvent:U(o,!0)}):n.jsx(B,{text:"Ничего не выбрано",image:n.jsx(Z,{})})})]})]})},Oe=d(K)`
    height: ${L};
    position: relative;

    ${u.isTablet} {
        height: ${P};
    }

    ${u.isMobile} {
        height: ${R};
    }
`,Le=e=>{const{handleOpenModal:t,onDayClick:r,shift:s,scale:l,showDates:i,interval:a,events:c}=G(e);return n.jsxs(Oe,{d:"column",children:[n.jsx(O,{onDayClick:r,showDates:i,showColumns:!0,events:c}),n.jsxs(oe,{children:[n.jsx(ie,{interval:a,scale:l}),Object.keys(E).map((o,h)=>n.jsx(le,{showTime:!1,weekDay:h+1,shortInfo:!0,events:c==null?void 0:c[o],scale:l,shift:s,currentEvent:null,interval:a,onClick:t},o))]})]})},S=e=>{const t=new Date(e),r=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(r))},C=(e,t)=>{const s=(t.getTime()-e.getTime())/(1e3*3600*24);return s-Math.floor(s/6.55)+1},Re=d.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${L};
    position: relative;

    ${u.isMobile} {
        height: ${R};
    }
`,Ne=d.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 1px solid var(--theme-3);
    border-top: 1px solid var(--theme-3);
    border-bottom: 1px solid var(--theme-3);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 90px;

    ${u.isMiddleTesktop} {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    ${u.isMobile} {
        border: none;
    }
`,_e=d.div`
    padding: 6px;
    width: calc(100% / 6);
    height: calc((100vh / 6) - 13px);
    background: transparent;
    border-right: 1px solid var(--theme-3);
    border-bottom: 1px solid var(--theme-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({disabled:e})=>e?"0.4":"1"};
    background: ${({disabled:e})=>e?"var(--theme-1t)":"transparent"};
    scroll-snap-align: center;

    ${u.isMobile} {
        padding: 12px;
        gap: 4px;
        height: calc((100vw / 6) - 5.5px);
        border-right: none;
    }
`,Ae=d.div`
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;

    ${u.isMobile} {
        justify-content: center;
    }
`,ze=d.div`
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${I};
    color: ${W};
`,Fe=d.div`
    position: sticky;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 500;
    top: 0px;
    padding: 10px;
    z-index: 100;
    margin: 4px 0;
    background: var(--block);
`,T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Ue=d(b)`
    padding: 4px;
    border-radius: 4px;
    /* background: ${({background:e})=>e}; */
    /* border: 2px solid ${({background:e})=>e}; */

    cursor: pointer;

    &:hover {
        filter: brightness(0.92);
    }
`,Be=d.div`
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    opacity: 0.8;
    color: ${({textColor:e})=>e};
`,He=e=>{const{title:t,color:r,onClick:s,startTime:l}=e,{theme:i}=ce(),a=i==="light"?r.dark3:r.light3,c=i==="light"?r.transparent3:r.transparent2,o=()=>s==null?void 0:s(e);return n.jsxs(Ue,{textColor:a,background:c,gap:"6px",onClick:o,children:[n.jsx(de,{isCurrentEvent:!1,color:r}),n.jsx(Be,{textColor:a,children:t}),n.jsx(H,{fontSize:"0.7rem",children:l})]})},M=4,Ve=(e,t)=>{const r=he(t);return r==="sunday"?[]:e==null?void 0:e[r].filter(s=>s.endDate?t>=s.startDate&&t<=s.endDate:T(s.startDate,t))},Ye=({daysAmount:e,startDate:t,events:r,addOneOnWeekends:s,handleEventClick:l,disabled:i=!1})=>{if(e<0||isNaN(e))return n.jsx(B,{text:"Неправильная длина календаря"});const a=new Date(t),{isMobile:c}=F(),{open:o}=pe(),h=(f,x)=>()=>{o(n.jsx(me,{dayEvents:f}),x)};return n.jsx(n.Fragment,{children:Array(e).fill(0).map((f,x)=>{var y;if(x!==0)a.getDay()===6&&s?a.setDate(a.getDate()+2):a.setDate(a.getDate()+1);else if(a.getDay()===0)return null;const p=Ve(r,a),g=S(a),D=a.getDay()===1&&g.getMonth()!==a.getMonth(),k=g.getMonth()===a.getMonth()&&x===0&&a.getDay()===1||a.getDay()===1&&a.getDate()===1;return n.jsxs(A.Fragment,{children:[(k||D)&&n.jsx(Fe,{children:ue(D?S(a).toLocaleDateString("ru-RU",{month:"long"}):a.toLocaleDateString("ru-RU",{month:"long"}))}),n.jsxs(_e,{disabled:i,onClick:h(p,ge(a)),children:[n.jsxs(Ae,{children:[n.jsxs(ze,{isCurrentChosenDay:T(a,new Date),isCurrent:T(a,new Date),children:[xe(a.getDate())," "]}),!c&&a.getDate()===1&&a.toLocaleDateString("ru-RU",{month:"short"})]}),!c&&n.jsxs(b,{d:"column",ai:"flex-start",gap:"0px",children:[(y=p==null?void 0:p.slice(0,M))==null?void 0:y.map(w=>n.jsx(He,{...w,onClick:l},w.title+w.startTime+w.dateInterval)),((p==null?void 0:p.length)??0)>M&&n.jsxs(H,{children:["И еще ",((p==null?void 0:p.length)??0)-M]})]}),c&&n.jsx(Y,{subjects:p})]})]},a.toLocaleDateString("ru-RU"))})})},$=A.memo(Ye),Ge=({events:e,startDate:t,endDate:r,onDayClick:s})=>{const l=new Date(t),i=new Date(r),a=z(l),c=i.getDay()!==0?S(i):i,o=C(l,i);return n.jsxs(Re,{children:[n.jsx(O,{showColumns:!1,events:null,onDayClick:s}),n.jsxs(Ne,{children:[n.jsx($,{daysAmount:C(a,l)-1,startDate:a,events:e,disabled:!0,addOneOnWeekends:!1}),n.jsx($,{daysAmount:o,startDate:l,events:e,addOneOnWeekends:!0}),n.jsx($,{daysAmount:C(i,c)-1,startDate:new Date(i.getFullYear(),i.getMonth(),i.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},Xe=({events:e,view:t,showDates:r,startDate:s,endDate:l})=>{const[i,a]=j.useState(void 0),c=h=>{fe.changeView(De.day),a(h)},o=[n.jsx(We,{currentChosenDay:i,events:e,interval:[9,22],showDates:r},"day"),n.jsx(Le,{events:e,interval:[9,22],showDates:r,onDayClick:c},"week"),n.jsx(Ge,{events:e,startDate:s,endDate:l,onDayClick:c},"month")];return n.jsx(n.Fragment,{children:o[t]})};export{Xe as T};
