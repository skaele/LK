import{s as c,j as n,r as j,bZ as X,R as _}from"./vendor-831b4923.js";import{o as p,p as b,bT as A,bU as Z,bV as E,x as q,bW as Q,bX as J,bg as z,bd as F,bY as ee,bZ as te,O as B,b_ as ne,bc as re,b$ as ae,c0 as se,c1 as oe,c2 as ie,c3 as le,V as U,c4 as ce,u as de,c5 as he,l as pe,c6 as ue,c7 as ge,bL as xe,bK as me}from"./index-774d803f.js";const I=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},W=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",fe=c(b)`
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
`,be=c(b)`
    margin: 2px 0;

    ${p.isMobile} {
        flex-direction: column;
        margin: 6px 0;
    }
`,ye=c.span`
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
`,je=c.span`
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
`,we=c.div`
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
`,V=({subjects:e})=>e?n.jsx(we,{children:e.map(t=>n.jsx(H,{background:t.color.main},t.startTime))}):null,ke=()=>{const e=new Date;let t=A(e);e.getDay()===0&&(t=Z(e,1));const a=Object.keys(E).reduce((s,i)=>(s[E[i].short]="",s),{});for(let s=0;s<6;s++){const i=t.toLocaleDateString("ru-RU",{day:"2-digit"});t.setDate(t.getDate()+1),a[Object.keys(a)[s]]=i}return a},O=({showDates:e,showColumns:t,currentChosenDay:a,onDayClick:s,events:i})=>{const l=ke();return n.jsx(fe,{jc:"space-between",children:Object.keys(l).map((r,o)=>{const d=l[r],h=o===a;return n.jsxs(De,{showDates:e,showColumns:t,onClick:s&&(()=>s==null?void 0:s(o)),children:[n.jsxs(be,{children:[n.jsx(ye,{isCurrent:+d===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:r}),e&&n.jsx(je,{isCurrentChosenDay:h,isCurrent:+d===new Date().getDate(),children:d})]}),i&&e&&n.jsx(V,{subjects:i[Object.keys(i)[o]]}),i&&!e&&i[Object.keys(i)[o]].length>0&&n.jsx(b,{jc:"center",children:n.jsx(H,{background:q.grey.main})})]},r)})})},Y=({interval:e,showDates:t,events:a,onDayClick:s})=>{const i=e[0]*60,l=Q();return{handleOpenModal:J(),onDayClick:s,shift:i,showDates:t,interval:e,events:a,scale:l}},N=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,ve=({events:e,currentChosenDay:t,showDates:a=!0,interval:s=[0,23]})=>{const{isSmallDesktop:i}=z(),{scale:l,shift:r,events:o,handleOpenModal:d}=Y({interval:s,events:e}),[h,f]=j.useState(null),[x,u]=j.useState(N(t)),g=j.useRef(null);j.useEffect(()=>{if(e){const m=Object.keys(e??{})[x],v=e[m].find(P=>F(P,!0))??null;f(v)}else f(null)},[e]);const y=h?`${h.startTime} - ${ee(h.startTime,h.duration)}`:"9:00",w=m=>{i?d(m):f(m)},k=m=>{const v=Math.floor(m.currentTarget.scrollLeft/m.currentTarget.clientWidth);u(v)},D=m=>{g.current&&(g.current.scrollLeft=g.current.clientWidth*m)};return j.useLayoutEffect(()=>{D(N(t))},[g,t]),{currentDay:x,events:o,carouselRef:g,interval:s,scale:l,shift:r,showDates:a,chosenEvent:h,timeInterval:y,currentChosenDay:t,handleDayClick:D,handleCarouselScroll:k,onEventClick:w}},L="calc(100vh - var(--header-height) - 110px)",R="calc(100vh - var(--header-height) - 185px)",G="calc(100vh - var(--header-height) - 170px);",K=c(b)`
    --time-width: 55px;

    ${p.isMobile} {
        --time-width: 35px;
    }
`,Ce=c(K)`
    height: ${L};

    ${p.isTablet} {
        height: ${G};
    }

    ${p.isMobile} {
        height: ${R};
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
`,Ee=e=>{const{currentDay:t,events:a,carouselRef:s,interval:i,scale:l,shift:r,chosenEvent:o,showDates:d,timeInterval:h,handleDayClick:f,handleCarouselScroll:x,onEventClick:u}=ve(e);return n.jsxs(Ce,{d:"column",gap:"12px",children:[n.jsx(O,{onDayClick:f,currentChosenDay:t,showDates:d,showColumns:!1,events:a}),n.jsxs(b,{h:"100%",gap:"18px",children:[n.jsx($e,{onScroll:x,ref:s,children:Object.keys(a??{}).map((g,y)=>{const w=a==null?void 0:a[g];return n.jsx(te,{events:w,interval:i,scale:l,weekday:y+1,currentDay:t,shift:r,onEventClick:u},g)})}),n.jsx(Me,{children:o?n.jsx(ne,{isNextEvent:re(a==null?void 0:a.saturday,o,!0),timeInterval:h,color:o.color,name:o.title,place:o.place,link:o.link,groups:o.groups,weekday:o.weekday,teachers:o.people,dateInterval:o.dateInterval,rooms:o.rooms??[],isCurrentEvent:F(o,!0)}):n.jsx(B,{text:"Ничего не выбрано",image:n.jsx(X,{})})})]})]})},Se=c(K)`
    height: ${L};
    position: relative;

    ${p.isTablet} {
        height: ${G};
    }

    ${p.isMobile} {
        height: ${R};
    }
`,Te=e=>{const{handleOpenModal:t,onDayClick:a,shift:s,scale:i,showDates:l,interval:r,events:o}=Y(e);return n.jsxs(Se,{d:"column",children:[n.jsx(O,{onDayClick:a,showDates:l,showColumns:!0,events:o}),n.jsxs(ae,{children:[n.jsx(se,{interval:r,scale:i}),Object.keys(E).map((d,h)=>n.jsx(oe,{showTime:!1,weekDay:h+1,shortInfo:!0,events:o==null?void 0:o[d],scale:i,shift:s,currentEvent:null,interval:r,onClick:t},d))]})]})},S=e=>{const t=new Date(e),a=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(a))},C=(e,t)=>{const s=(t.getTime()-e.getTime())/(1e3*3600*24);return s-Math.floor(s/6.55)+1},Ie=c.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${L};
    position: relative;

    ${p.isMobile} {
        height: ${R};
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
    scroll-padding-top: 90px;

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
    width: calc(100% / 6);
    height: calc((100vh / 6) - 13px);
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
`,Re=c.div`
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${I};
    color: ${W};
`,Ne=c.div`
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
`,T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),_e=c(b)`
    padding: 4px;
    border-radius: 4px;
    /* background: ${({background:e})=>e}; */
    /* border: 2px solid ${({background:e})=>e}; */

    cursor: pointer;

    &:hover {
        filter: brightness(0.92);
    }
`,Ae=c.div`
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    opacity: 0.8;
    color: ${({textColor:e})=>e};
`,ze=e=>{const{title:t,color:a,onClick:s,startTime:i}=e,{theme:l}=ie(),r=l==="light"?a.dark3:a.light3,o=l==="light"?a.transparent3:a.transparent2,d=()=>s==null?void 0:s(e);return n.jsxs(_e,{textColor:r,background:o,gap:"6px",onClick:d,children:[n.jsx(le,{isCurrentEvent:!1,color:a}),n.jsx(Ae,{textColor:r,children:t}),n.jsx(U,{fontSize:"0.7rem",children:i})]})},M=4,Fe=(e,t)=>{const a=ce(t);return a==="sunday"?[]:e==null?void 0:e[a].filter(s=>s.endDate?t>=s.startDate&&t<=s.endDate:T(s.startDate,t))},Be=({daysAmount:e,startDate:t,events:a,addOneOnWeekends:s,handleEventClick:i,disabled:l=!1})=>{if(e<0||isNaN(e))return n.jsx(B,{text:"Неправильная длина календаря"});const r=new Date(t),{isMobile:o}=z(),{open:d}=de(),h=(f,x)=>()=>{d(n.jsx(ge,{dayEvents:f,day:x}),x)};return n.jsx(n.Fragment,{children:Array(e).fill(0).map((f,x)=>{var k;if(x!==0)r.getDay()===6&&s?r.setDate(r.getDate()+2):r.setDate(r.getDate()+1);else if(r.getDay()===0)return null;const u=Fe(a,r),g=S(r),y=r.getDay()===1&&g.getMonth()!==r.getMonth(),w=g.getMonth()===r.getMonth()&&x===0&&r.getDay()===1||r.getDay()===1&&r.getDate()===1;return n.jsxs(_.Fragment,{children:[(w||y)&&n.jsx(Ne,{children:he(y?S(r).toLocaleDateString("ru-RU",{month:"long"}):r.toLocaleDateString("ru-RU",{month:"long"}))}),n.jsxs(Oe,{disabled:l,onClick:h(u,pe(r)),children:[n.jsxs(Le,{children:[n.jsxs(Re,{isCurrentChosenDay:T(r,new Date),isCurrent:T(r,new Date),children:[ue(r.getDate())," "]}),!o&&r.getDate()===1&&r.toLocaleDateString("ru-RU",{month:"short"})]}),!o&&n.jsxs(b,{d:"column",ai:"flex-start",gap:"0px",children:[(k=u==null?void 0:u.slice(0,M))==null?void 0:k.map(D=>n.jsx(ze,{...D,onClick:i},D.title+D.startTime+D.dateInterval)),((u==null?void 0:u.length)??0)>M&&n.jsxs(U,{children:["И еще ",((u==null?void 0:u.length)??0)-M]})]}),o&&n.jsx(V,{subjects:u})]})]},r.toLocaleDateString("ru-RU"))})})},$=_.memo(Be),Ue=({events:e,startDate:t,endDate:a,onDayClick:s})=>{const i=new Date(t),l=new Date(a),r=A(i),o=l.getDay()!==0?S(l):l,d=C(i,l);return n.jsxs(Ie,{children:[n.jsx(O,{showColumns:!1,events:null,onDayClick:s}),n.jsxs(We,{children:[n.jsx($,{daysAmount:C(r,i)-1,startDate:r,events:e,disabled:!0,addOneOnWeekends:!1}),n.jsx($,{daysAmount:d,startDate:i,events:e,addOneOnWeekends:!0}),n.jsx($,{daysAmount:C(l,o)-1,startDate:new Date(l.getFullYear(),l.getMonth(),l.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},Ye=({events:e,view:t,showDates:a,startDate:s,endDate:i})=>{const[l,r]=j.useState(void 0),o=h=>{xe.changeView(me.day),r(h)},d=[n.jsx(Ee,{currentChosenDay:l,events:e,interval:[9,22],showDates:a},"day"),n.jsx(Te,{events:e,interval:[9,22],showDates:a,onDayClick:o},"week"),n.jsx(Ue,{events:e,startDate:s,endDate:i,onDayClick:o},"month")];return n.jsx(n.Fragment,{children:d[t]})};export{Ye as T};
