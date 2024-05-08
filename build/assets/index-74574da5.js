import{s as c,j as n,r as w,c8 as P,R as A}from"./vendor-f4aa581a.js";import{L as p,N as y,cj as _,ck as Q,cl as E,U as X,cm as J,cn as Z,bE as z,bC as F,co as ee,cp as te,a3 as B,cq as ne,bB as re,cr as ae,cs as se,ct as oe,cu as ie,cv as le,Y as U,cw as ce,y as de,cx as he,n as pe,aq as ue,cy as ge,cb as xe,ca as me}from"./index-2cf64e21.js";const I=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},W=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",fe=c(y)`
    padding-left: var(--time-width);
`,De=c.div`
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
        background: var(--theme-4);
    }

    &::after {
        right: 0;
    }

    ${p.isMobile} {
        font-size: 0.8rem;
        height: ${({showDates:e})=>e?"80px":"50px"};

        &::after,
        &::before {
            top: 90px;
            height: calc(100% - 100px);
        }
    }
`,ye=c(y)`
    margin: 2px 0;

    ${p.isMobile} {
        flex-direction: column;
        margin: 6px 0;
    }
`,be=c.span`
    margin-left: auto;
    margin-right: ${({showDates:e})=>e?"0":"auto"};
    background: ${({showDates:e})=>!e&&I};
    color: ${({showDates:e})=>e?"var(--grey)":W};
    padding: 5px;
    border-radius: 25px;

    ${p.isMobile} {
        margin-right: auto;
        padding: 4px;
    }
`,we=c.span`
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

    ${p.isMobile} {
        margin-left: auto;
        margin-top: 4px;
        font-size: ${({isCurrent:e})=>e&&"0.8rem"};
    }
`,je=c.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 auto;
    width: fit-content;
`,H=c.div`
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background: ${({background:e})=>e};

    @media (max-width: 768px) {
        width: 5px;
        height: 5px;
    }
`,Y=({subjects:e})=>e?n.jsx(je,{children:e.map(t=>n.jsx(H,{background:t.color.main},t.startTime))}):null,ke=()=>{const e=new Date;let t=_(e);e.getDay()===0&&(t=Q(e,1));const a=Object.keys(E).reduce((s,i)=>(s[E[i].short]="",s),{});for(let s=0;s<6;s++){const i=t.toLocaleDateString("ru-RU",{day:"2-digit"});t.setDate(t.getDate()+1),a[Object.keys(a)[s]]=i}return a},O=({showDates:e,showColumns:t,currentChosenDay:a,onDayClick:s,events:i})=>{const l=ke();return n.jsx(fe,{jc:"space-between",children:Object.keys(l).map((r,o)=>{const d=l[r],h=o===a;return n.jsxs(De,{showDates:e,showColumns:t,onClick:s&&(()=>s==null?void 0:s(o)),children:[n.jsxs(ye,{children:[n.jsx(be,{isCurrent:+d===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:r}),e&&n.jsx(we,{isCurrentChosenDay:h,isCurrent:+d===new Date().getDate(),children:d})]}),i&&e&&n.jsx(Y,{subjects:i[Object.keys(i)[o]]}),i&&!e&&i[Object.keys(i)[o]].length>0&&n.jsx(y,{jc:"center",children:n.jsx(H,{background:X.grey.main})})]},r)})})},G=({interval:e,showDates:t,events:a,onDayClick:s})=>{const i=e[0]*60,l=J();return{handleOpenModal:Z(),onDayClick:s,shift:i,showDates:t,interval:e,events:a,scale:l}},R=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,ve=({events:e,currentChosenDay:t,showDates:a=!0,interval:s=[0,23]})=>{const{isSmallDesktop:i}=z(),{scale:l,shift:r,events:o,handleOpenModal:d}=G({interval:s,events:e}),[h,f]=w.useState(null),[x,u]=w.useState(R(t)),g=w.useRef(null);w.useEffect(()=>{if(e){const m=Object.keys(e??{})[x],v=e[m].find(K=>F(K,!0))??null;f(v)}else f(null)},[e]);const b=h?`${h.startTime} - ${ee(h.startTime,h.duration)}`:"9:00",j=m=>{i?d(m):f(m)},k=m=>{const v=Math.floor(m.currentTarget.scrollLeft/m.currentTarget.clientWidth);u(v)},D=m=>{g.current&&(g.current.scrollLeft=g.current.clientWidth*m)};return w.useLayoutEffect(()=>{D(R(t))},[g,t]),{currentDay:x,events:o,carouselRef:g,interval:s,scale:l,shift:r,showDates:a,chosenEvent:h,timeInterval:b,currentChosenDay:t,handleDayClick:D,handleCarouselScroll:k,onEventClick:j}},L="calc(100vh - var(--header-height) - 110px)",N="calc(100vh - var(--header-height) - 185px)",V="calc(100vh - var(--header-height) - 170px);",q=c(y)`
    --time-width: 55px;

    ${p.isMobile} {
        --time-width: 35px;
    }
`,Ce=c(q)`
    height: ${L};

    ${p.isTablet} {
        height: ${V};
    }

    ${p.isMobile} {
        height: ${N};
    }
`,Me=c.div`
    min-width: 340px;
    max-width: 340px;
    height: calc(100vh - 220px);
    z-index: 10;
    background: var(--block-content);
    border-radius: 10px;
    top: 0;
    overflow: hidden;
    box-shadow: var(--block-shadow);

    ${p.isSmallTesktop} {
        display: none;
    }
`,$e=c.div`
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
`,Ee=e=>{const{currentDay:t,events:a,carouselRef:s,interval:i,scale:l,shift:r,chosenEvent:o,showDates:d,timeInterval:h,handleDayClick:f,handleCarouselScroll:x,onEventClick:u}=ve(e);return n.jsxs(Ce,{d:"column",gap:"12px",children:[n.jsx(O,{onDayClick:f,currentChosenDay:t,showDates:d,showColumns:!1,events:a}),n.jsxs(y,{h:"100%",gap:"18px",children:[n.jsx($e,{onScroll:x,ref:s,children:Object.keys(a??{}).map((g,b)=>{const j=a==null?void 0:a[g];return n.jsx(te,{events:j,interval:i,scale:l,weekday:b+1,currentDay:t,shift:r,onEventClick:u},g)})}),n.jsx(Me,{children:o?n.jsx(ne,{isNextEvent:re(a==null?void 0:a.saturday,o,!0),timeInterval:h,color:o.color,name:o.title,place:o.place,link:o.link,groups:o.groups,weekday:o.weekday,teachers:o.people,dateInterval:o.dateInterval,rooms:o.rooms??[],isCurrentEvent:F(o,!0)}):n.jsx(B,{text:"Ничего не выбрано",image:n.jsx(P,{})})})]})]})},Se=c(q)`
    height: ${L};
    position: relative;

    ${p.isTablet} {
        height: ${V};
    }

    ${p.isMobile} {
        height: ${N};
    }
`,Te=e=>{const{handleOpenModal:t,onDayClick:a,shift:s,scale:i,showDates:l,interval:r,events:o}=G(e);return n.jsxs(Se,{d:"column",children:[n.jsx(O,{onDayClick:a,showDates:l,showColumns:!0,events:o}),n.jsxs(ae,{children:[n.jsx(se,{interval:r,scale:i}),Object.keys(E).map((d,h)=>n.jsx(oe,{showTime:!1,weekDay:h+1,shortInfo:!0,events:o==null?void 0:o[d],scale:i,shift:s,currentEvent:null,interval:r,onClick:t},d))]})]})},S=e=>{const t=new Date(e),a=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(a))},C=(e,t)=>{const s=(t.getTime()-e.getTime())/(1e3*3600*24);return s-Math.floor(s/6.55)+1},Ie=c.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${L};
    position: relative;

    ${p.isMobile} {
        height: ${N};
    }
`,We=c.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 1px solid var(--theme-3);
    border-top: 1px solid var(--theme-3);
    border-bottom: 1px solid var(--theme-3);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 100px;

    ${p.isMiddleTesktop} {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    ${p.isMobile} {
        border: none;
        scroll-padding-top: 50px;
    }
`,Oe=c.div`
    padding: 6px;
    width: 1000px;
    max-width: calc(100% / 6);
    height: calc((100vh / 6) - 6px);
    background: transparent;
    border-right: 1px solid var(--almostTransparentOpposite);
    border-bottom: 1px solid var(--almostTransparentOpposite);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({disabled:e})=>e?"0.4":"1"};
    background: ${({disabled:e})=>e?"var(--theme-1t)":"transparent"};
    scroll-snap-align: center;

    ${p.isMobile} {
        padding: 12px;
        gap: 4px;
        height: calc((100vw / 6) - 5.5px);
        border-right: none;
    }
`,Le=c.div`
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;

    ${p.isMobile} {
        justify-content: center;
    }
`,Ne=c.div`
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${I};
    color: ${W};
`,Re=c.div`
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

    ${p.isMobile} {
        background: var(--theme);
    }
`,T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Ae=c(y)`
    padding: 4px;
    border-radius: 4px;
    /* background: ${({background:e})=>e}; */
    /* border: 2px solid ${({background:e})=>e}; */

    cursor: pointer;

    &:hover {
        filter: brightness(0.92);
    }
`,_e=c.div`
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    opacity: 0.8;
    color: ${({textColor:e})=>e};
`,ze=e=>{const{title:t,color:a,onClick:s,startTime:i}=e,{theme:l}=ie(),r=l==="light"?a.dark3:a.light3,o=l==="light"?a.transparent3:a.transparent2,d=()=>s==null?void 0:s(e);return n.jsxs(Ae,{textColor:r,background:o,gap:"6px",onClick:d,children:[n.jsx(le,{isCurrentEvent:!1,color:a}),n.jsx(_e,{textColor:r,children:t}),n.jsx(U,{fontSize:"0.7rem",children:i})]})},M=4,Fe=(e,t)=>{const a=ce(t);return a==="sunday"?[]:e==null?void 0:e[a].filter(s=>s.endDate?t>=s.startDate&&t<=s.endDate:T(s.startDate,t))},Be=({daysAmount:e,startDate:t,events:a,addOneOnWeekends:s,handleEventClick:i,disabled:l=!1})=>{if(e<0||isNaN(e))return n.jsx(B,{text:"Неправильная длина календаря"});const r=new Date(t),{isMobile:o}=z(),{open:d}=de(),h=(f,x)=>()=>{d(n.jsx(ge,{isCurrentDay:!1,dayEvents:f,day:x}),x)};return n.jsx(n.Fragment,{children:Array(e).fill(0).map((f,x)=>{var k;if(x!==0)r.getDay()===6&&s?r.setDate(r.getDate()+2):r.setDate(r.getDate()+1);else if(r.getDay()===0)return null;const u=Fe(a,r),g=S(r),b=r.getDay()===1&&g.getMonth()!==r.getMonth(),j=g.getMonth()===r.getMonth()&&x===0&&r.getDay()===1||r.getDay()===1&&r.getDate()===1;return n.jsxs(A.Fragment,{children:[(j||b)&&n.jsx(Re,{children:he(b?S(r).toLocaleDateString("ru-RU",{month:"long"}):r.toLocaleDateString("ru-RU",{month:"long"}))}),n.jsxs(Oe,{disabled:l,onClick:h(u,pe(r)),children:[n.jsxs(Le,{children:[n.jsxs(Ne,{isCurrentChosenDay:T(r,new Date),isCurrent:T(r,new Date),children:[ue(r.getDate())," "]}),!o&&r.getDate()===1&&r.toLocaleDateString("ru-RU",{month:"short"})]}),!o&&n.jsxs(y,{d:"column",ai:"flex-start",gap:"0px",children:[(k=u==null?void 0:u.slice(0,M))==null?void 0:k.map(D=>n.jsx(ze,{...D,onClick:i},D.title+D.startTime+D.dateInterval)),((u==null?void 0:u.length)??0)>M&&n.jsxs(U,{children:["И еще ",((u==null?void 0:u.length)??0)-M]})]}),o&&n.jsx(Y,{subjects:u})]})]},r.toLocaleDateString("ru-RU"))})})},$=A.memo(Be),Ue=({events:e,startDate:t,endDate:a,onDayClick:s})=>{const i=new Date(t),l=new Date(a),r=_(i),o=l.getDay()!==0?S(l):l,d=C(i,l);return n.jsxs(Ie,{children:[n.jsx(O,{showColumns:!1,events:null,onDayClick:s}),n.jsxs(We,{children:[n.jsx($,{daysAmount:C(r,i)-1,startDate:r,events:e,disabled:!0,addOneOnWeekends:!1}),n.jsx($,{daysAmount:d,startDate:i,events:e,addOneOnWeekends:!0}),n.jsx($,{daysAmount:C(l,o)-1,startDate:new Date(l.getFullYear(),l.getMonth(),l.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},Ge=({events:e,view:t,showDates:a,startDate:s,endDate:i})=>{const[l,r]=w.useState(void 0),o=h=>{xe.changeView(me.day),r(h)},d=[n.jsx(Ee,{currentChosenDay:l,events:e,interval:[9,22],showDates:a},"day"),n.jsx(Te,{events:e,interval:[9,22],showDates:a,onDayClick:o},"week"),n.jsx(Ue,{events:e,startDate:s,endDate:i,onDayClick:o},"month")];return n.jsx(n.Fragment,{children:d[t]})};export{Ge as T};
