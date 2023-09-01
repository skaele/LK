import{r as m,s as h,j as i,R as W,L as X,a2 as re,D as ie,ag as G,b6 as oe,bb as se,bc as ae}from"./vendor-e9654bfa.js";import{a6 as f,u as E,bg as S,H as le,b6 as N,T as b,bh as A,U as F,ah as ce,B as C,aW as y,N as pe,bi as de,bj as D,bk as he,bl as ue,O as xe,aY as I,E as Z,l as O,bm as Q,bn as me}from"./index-d7ba1400.js";function ge(e){const[n,r]=m.useState(!1),t=new IntersectionObserver(([o])=>r(o.isIntersecting));return m.useEffect(()=>(t.observe(e==null?void 0:e.current),()=>{t.disconnect()}),[]),n}const g={"9:00 - 10:30":f.lightGreen,"10:40 - 12:10":f.blue,"12:20 - 13:50":f.purple,"14:30 - 16:00":f.pink,"16:10 - 17:40":f.red,"17:50 - 19:20":f.red,"18:20 - 19:40":f.orange,"19:30 - 21:00":f.orange,"19:50 - 21:10":f.orange},fe=h.div`
    width: 100%;
    background: ${({isCurrent:e,color:n})=>e?n:"var(--schedule)"};
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    min-height: ${({isFull:e})=>e?"fit-content":"144.2px"};
    height: fit-content;
    cursor: pointer;

    .time-and-place {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 0.7em;
        height: 21px;
        font-weight: bold;
        column-gap: 3px;

        .place {
            color: var(--text);
            text-decoration: none;
            margin-left: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        a.place {
            color: ${({isCurrent:e,color2:n})=>e?n:"var(--blue)"};
        }
    }

    h3 {
        margin: 10px 0;
        font-size: 0.9em;
        word-wrap: break-word;
    }

    .teachers {
        font-size: 0.8em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .interval-and-groups {
        display: flex;
        align-items: ${({isFull:e})=>e?"flex-start":"center"};
        width: 100%;
        flex-direction: ${({isFull:e})=>e?"column-reverse":"row"};
        font-size: 0.9em;

        & > * + * {
            margin: 4px 0;
        }

        .date-interval {
            font-size: 0.7em;
            opacity: 0.6;
            white-space: nowrap;
            margin-right: 5px;
        }
    }
`,ve=e=>{const{timeInterval:n,name:r,place:t,teachers:o,dateInterval:s,isCurrent:a,link:c,view:l,rooms:p,groups:d,isNext:u=!1}=e,{open:x}=E();return i.jsxs(fe,{isCurrent:a,color:g[n].dark1,color2:g[n].light3,darkColor:g[n].dark2,transparent:g[n].transparent2,isFull:l==="full",onClick:()=>x(i.jsx(Ce,{...e})),children:[i.jsxs("div",{className:"time-and-place",children:[i.jsx(V,{timeInterval:n,isCurrent:a,differentTimeZone:new Date().getTimezoneOffset()/60+3!==0}),i.jsx(K,{timeLeft:S(n),isNext:u}),p.length?i.jsx(ee,{rooms:p,isCurrent:a,color:g[n].dark1}):i.jsx($e,{place:t,link:c})]}),i.jsx("h3",{children:le(r,70)}),i.jsx("p",{className:"teachers",children:o.map((w,j)=>i.jsxs(W.Fragment,{children:[w,j!==o.length-1&&", "]},w+j))}),i.jsxs("div",{className:"interval-and-groups",children:[i.jsx("p",{className:"date-interval",children:s}),i.jsx(J,{groups:d,isCurrent:a,inModal:l==="full",color:g[n].dark1})]})]})},q="/assets/sleep-54d590c1.gif",ye=h.button`
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    row-gap: 6px;
    cursor: pointer;
    outline: none;
    transition: 0.2s;
    min-width: 100px;
    height: 54px;
    user-select: none;
    transform: scale(${({isCurrent:e})=>e?"1":"0.9"});
    background: var(--mild-theme);
    color: ${({isCurrent:e})=>e?"var(--blue)":"var(--text)"};
    scroll-snap-align: ${({isChosen:e})=>e?"center":"none"};

    h4 {
        opacity: ${({isChosen:e})=>e?1:.5};
        transition: 0.2s transform;
        transform: translateY(${({isChosen:e})=>e?"-5px":"0px"});
    }

    .marker-circles {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .marker-circle {
            width: 8px;
            height: 8px;
            margin: 0 3px;
            border-radius: 100%;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        transition: 0.2s;
        width: ${({isChosen:e})=>e?"20px":"0px"};
        height: 4px;
        border-radius: 10px;
        background: ${({isChosen:e})=>e?"var(--reallyBlue)":"#4f4f4f"};
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 1000px) {
        font-size: 0.7em;
        transform: scale(1);
        width: calc(100% / 6);
        max-width: calc(100% / 6);
        min-width: 54px;

        .marker-circles {
            .marker-circle {
                width: 6px;
                height: 6px;
                margin: 0 2px;
                border-radius: 100%;
            }

            img {
                width: 15px;
                height: 15px;
            }
        }
    }
`,U=({weekDay:e,lessons:n,isCurrent:r,isChosen:t,index:o,onClick:s})=>{const{data:{currentModule:a}}=N.useSchedule();return n?i.jsxs(ye,{isCurrent:r,isChosen:t,onClick:()=>s(o),children:[i.jsx(b,{size:4,children:e}),i.jsxs("span",{className:"marker-circles",children:[a!=="1"&&n.map((c,l)=>{if(g[c.timeInterval])return i.jsx("span",{className:"marker-circle",style:{background:g[c.timeInterval].main}},l)}),!n.length&&i.jsx("img",{src:q,alt:"спим"})]})]}):null},be=h.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    width: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0.7em;
    font-weight: 600;
    flex-wrap: ${({inModal:e})=>e&&"wrap"};
    gap: 5px;

    &::after {
        content: '';
        display: ${({inModal:e})=>e&&"none"};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({isCurrent:e,color:n})=>`linear-gradient(90deg, transparent, ${e?n:"var(--schedule)"})`};
    }

    span {
        background: ${({isCurrent:e})=>e?"var(--almostTransparent)":"var(--scheduleBg)"};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`,J=({color:e,groups:n,isCurrent:r,inModal:t=!1})=>n?i.jsx(be,{isCurrent:r,inModal:t,color:e,children:n.split(",").map(o=>i.jsx("span",{children:o},o))}):null,we=h.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,je=h(X)`
    padding: 8px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-radius: var(--brLight);

    .start {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    &:hover {
        background: var(--theme-mild-xxl);
    }
`,ke=({groups:e})=>{const{close:n}=E();return i.jsxs(we,{children:[i.jsx(b,{size:3,align:"left",children:"Группы"}),e.map(r=>i.jsxs(je,{to:`${A}/${r}`,onClick:n,children:[i.jsxs("div",{className:"start",children:[i.jsx(re,{}),r]}),i.jsx(ie,{})]},r))]})},Se=h.div`
    @media (min-width: 1001px) {
        width: 550px;
    }

    height: 100%;
    overflow-y: auto;

    .date-interval {
        opacity: 0.6;
        font-size: 0.7em;
        font-weight: 600;
    }

    .time-and-next {
        display: flex;
        align-items: center;
        font-size: 0.7em;
        font-weight: bold;
        margin: 10px 0 5px 0;
        column-gap: 3px;
    }

    .teachers {
        & > * + * {
            margin-top: 5px;
        }
    }

    @media (max-width: 1000px) {
        padding: 10px;
    }
`,Ce=e=>{const{timeInterval:n,name:r,place:t,teachers:o,dateInterval:s,link:a,rooms:c,groups:l,isNext:p=!1}=e,{open:d,close:u}=E(),x=(l==null?void 0:l.split(", "))??[],w=G(),j=()=>{x.length===1?(w.push(`${A}/${x[0]}`),u()):d(i.jsx(ke,{groups:x}))};return i.jsxs(Se,{children:[i.jsx(J,{groups:l,isCurrent:!1,color:"var(--schedule)"}),i.jsx("span",{className:"date-interval",children:s}),i.jsx(b,{size:3,align:"left",children:r}),i.jsxs("div",{className:"time-and-next",children:[i.jsx(V,{timeInterval:n,isCurrent:!1}),i.jsx(K,{timeLeft:S(n),isNext:p}),i.jsx(ee,{rooms:c,inModal:!0})]}),i.jsx(Ee,{place:t,link:a,name:r}),i.jsx(F,{margin:"20px auto"}),!!o[0].length&&i.jsxs(i.Fragment,{children:[i.jsx(b,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),i.jsx("div",{className:"teachers",children:o.map(k=>i.jsx(ce,{type:"staff",name:k},k))})]}),l&&i.jsxs(i.Fragment,{children:[i.jsx(F,{margin:"20px auto"}),i.jsx(C,{width:"100%",text:`Посмотреть расписание ${x.length===1?x[0]:"групп"}`,onClick:j})]})]})},Te=h.span`
    padding: 3px 10px;
    height: 21px;
    display: flex;
    align-items: center;
    background: var(--search);
    background: ${({isCurrent:e,darkColor:n,color2:r})=>e?n:r};
    border-radius: 100px;
    /* box-shadow: ${({transparent:e})=>`0 0 30px ${e}`}; */
    color: #fff;
    white-space: nowrap;
`,V=({timeInterval:e,isCurrent:n,differentTimeZone:r=!1})=>i.jsxs(Te,{isCurrent:n,color2:g[e].main,darkColor:g[e].dark2,transparent:g[e].transparent2,children:[e," ",r&&"МСК"]}),$e=({link:e,place:n})=>e?i.jsx("a",{href:e,className:"place",target:"_blank",rel:"noreferrer",children:n}):i.jsxs("span",{className:"place",children:[" ",n]}),Le=h.a`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: blur(3px);
        transform: scale(1.2);
    }

    h3 {
        bottom: 15px;
        left: 15px;
        position: absolute;
        background: ${f.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`,$=({title:e,link:n,image:r})=>n?i.jsxs(Le,{href:n,children:[i.jsx("img",{src:r,alt:"",loading:"lazy"}),i.jsx(b,{size:3,children:e})]}):null,De=h.div`
    width: 100%;
    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: var(--brSemi);
    background: var(--orangeGradient);
`,Ee=({place:e,link:n,name:r})=>{const[t,o]=m.useState(!1);return m.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[r]),t?i.jsx(y,{shape:"rect",size:{width:"100%",height:"200px"},margin:"0"}):i.jsx(De,{children:e==="Webex"?i.jsx($,{title:e,link:n,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?i.jsx($,{title:e,link:n,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?i.jsx($,{title:e,link:n,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?i.jsx($,{title:e,link:n,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?i.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[i.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),i.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),i.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?i.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[i.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),i.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),i.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?i.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[i.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),i.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),i.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?i.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[i.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),i.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&i.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[i.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),i.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},ze=h.div`
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    border-radius: var(--brSemi);
    background: var(--almostTransparent);
    color: var(--theme-mild-opposite);
    padding: 3px 10px;
    white-space: nowrap;
`,K=({timeLeft:e,isNext:n})=>{const r=Math.floor(e/60);return n?i.jsxs(ze,{children:["через ",!!r&&r+"ч."," ",e%60,"мин."]}):null},Me=h.div`
    width: 100%;
    background: var(--schedule);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,_e=()=>i.jsxs(Me,{children:[i.jsxs("div",{className:"horizontal",children:[i.jsx(y,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),i.jsx(y,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),i.jsx(y,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),i.jsxs("div",{className:"horizontal",children:[i.jsx(y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),i.jsx(y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),i.jsx(y,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),We=h.div`
    width: 100%;
    background: var(--schedule);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    text-align: center;

    img {
        width: 70px;
        height: 70px;
    }
`,Be=()=>i.jsxs(We,{children:[i.jsx("img",{src:q,alt:"дед наелся и спит"}),i.jsx("span",{children:"В этот день пар нет"})]}),Ne=h.div`
    border-radius: 15px;
    overflow: hidden;
    padding: 6px;
    background: var(--scheduleBg);
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow-y: auto;
    scroll-snap-type: y proximity;
    height: 100%;
    max-height: ${({height:e})=>`calc(${e}px - 325px)`};

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 1000px) {
        max-height: ${({height:e,isTeacherSchedule:n})=>`calc(${e}px - ${n?340:280}px)`};
    }
`,Ae=(e,n,r)=>n?e?1:.8:r?1:0,Ie=e=>e?1:.9,Pe=h.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:n})=>e?e+"px":n?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:n})=>e?e+"px":n?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:n,isVisible:r})=>Ae(e,n,r)};
    transform: scale(${({isVisible:e})=>Ie(e)});
    overflow-y: auto;

    .day-title {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: calc(100% - 20px);
        justify-content: space-between;

        h4 {
            color: ${({isCurrent:e})=>e?"var(--blue)":"var(--text)"};
        }

        span {
            font-weight: 500;
            opacity: 0.7;
            font-size: 0.9em;
            width: 90px;
            text-align: center;
        }
    }

    @media (max-width: 1000px) {
        transition: 0.5s opacity;
        opacity: ${({isVisible:e})=>e?"1":"0"};
        width: 100%;
        min-width: 100%;
        scroll-snap-align: start;
        transform: scale(1);
    }
`,R=(e,n)=>{const r=e==null?void 0:e[n].lessons;return e&&r?`${r==null?void 0:r.length} ${pe((r==null?void 0:r.length)??0,{zero:"пар",one:"пара",twoToFour:"пары",fiveToNine:"пар"})}`:"0 пар"},z=()=>{const e=new Date,n=new Date;n.setDate(e.getDate()+1);const r=n.toLocaleDateString("en-US",{weekday:"long"}).toLowerCase();return r==="sunday"?"monday":r},Fe=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--schedule);
    border-radius: var(--brLight);
    row-gap: 10px;
`,Oe=()=>{var r;const{open:e}=E(),{data:n}=N.useSchedule();return i.jsxs(Fe,{children:[i.jsx(de,{size:"38px"}),i.jsx(b,{size:4,children:"Учебный день завершился"}),!!((r=n.schedule)!=null&&r[0])&&i.jsx(C,{text:"Посмотреть следующий",onClick:()=>{var t,o,s;return e(i.jsx(te,{lessons:((o=(t=n.schedule)==null?void 0:t[0])==null?void 0:o[z()].lessons)??[],topInfo:R((s=n.schedule)==null?void 0:s[0],z()),weekDay:D[z()].full}))},textColor:"var(--blue)",background:"transparent"})]})},Ue=h.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    width: 100%;
    overflow: hidden;
    position: relative;
    flex-wrap: ${({inModal:e})=>e&&"wrap"};
    gap: 4px;

    &::after {
        content: '';
        display: ${({inModal:e})=>e&&"none"};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({isCurrent:e,color:n})=>`linear-gradient(90deg, transparent, ${e?n:"var(--schedule)"})`};
    }

    .room {
        width: fit-content;
        background: ${({isCurrent:e})=>e?"var(--almostTransparent)":"var(--scheduleBg)"};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`,ee=({rooms:e,color:n,isCurrent:r=!1,inModal:t=!1})=>e.length?i.jsx(Ue,{isCurrent:r,inModal:t,color:n,children:e.map(o=>i.jsx("span",{className:"room",children:o},o))}):null,Ye=h.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`,He=h(X)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`,rt=({filter:e,isGroup:n,visible:r})=>{const t=G();return r?i.jsxs(Ye,{children:[i.jsxs("div",{children:["Расписание:"," ",n?i.jsx(He,{to:`${ue}/${e}`,children:e}):i.jsx(he,{fio:e})]}),i.jsx(C,{onClick:()=>t.push(A),text:"Вернуться к своему расписанию",textColor:"var(--blue)",width:"100%",background:"transparent"})]}):null},Y=e=>{const n=e.reduce((r,t)=>{const o=S(t.timeInterval);return o>0&&r.push(o),r},[]);return Math.min(...n)},M=e=>{if(e&&e[e.length-1]){const[n,r]=e[e.length-1].timeInterval.split(" - ")[1].split(":");return new Date().getHours()>+n?!0:new Date().getHours()===+n&&new Date().getMinutes()>+r}},H=e=>{const n=new Date,r=n.getTimezoneOffset()/60+3,[t,o]=e.split(" - ");let s=t.split(":");const a=parseInt(s[0]),c=parseInt(s[1],10);s=o.split(":");const l=parseInt(s[0],10),p=parseInt(s[1],10);return(n.getHours()+r)*60+n.getMinutes()>=a*60+c&&(n.getHours()+r)*60+n.getMinutes()<=l*60+p},te=({lessons:e,weekDay:n,isCurrent:r,view:t,width:o,height:s,topInfo:a,error:c})=>{var k,P;const{data:{user:l}}=xe.useUser(),p=(k=l==null?void 0:l.subdivisions)==null?void 0:k.some(v=>v.categoty==="pps");if((l==null?void 0:l.user_status)!=="stud"&&!p)return null;const d=oe(),u=m.useRef(null),x=ge(u),{height:w}=I(),j=m.useMemo(()=>Y(e??[]),[e]);return m.useEffect(()=>{if(u!=null&&u.current&&e){const v=M(e)?e.length:(e==null?void 0:e.findIndex(T=>H(T.timeInterval)||Y(e)===S(T.timeInterval)))??-1;(r&&!M(e)?v!==-1:(e==null?void 0:e.length)+1)&&(u.current.scrollTop=v*150)}},[e]),i.jsxs(Pe,{isCurrent:r??!1,isFull:t==="full",isVisible:x,width:o,height:s,children:[!!n&&!!e&&i.jsxs("div",{className:"day-title",children:[i.jsx(b,{size:4,align:"left",children:n}),i.jsx("span",{children:a})]}),i.jsxs(Ne,{isFull:t==="full",ref:u,height:w,isTeacherSchedule:!!((P=d.params.fio)!=null&&P.length),children:[!e&&!c&&i.jsx(_e,{}),c&&i.jsx(Z,{text:"Ошибка",size:"70px"}),!!e&&e.map((v,T)=>m.createElement(ve,{...v,key:T,view:t,isCurrent:(r&&H(v.timeInterval))??!1,isNext:r&&j===S(v.timeInterval)})),!!e&&!e.length&&i.jsx(Be,{}),!!e&&!!e.length&&!a&&M(e)&&i.jsx(Oe,{})]})]})},Xe=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--mild-theme);
    border-radius: 10px;
    min-width: 80px;
    overflow: hidden;

    button {
        border-radius: 0;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`,it=({view:e,setView:n})=>i.jsxs(Xe,{children:[i.jsx(C,{icon:i.jsx(se,{}),onClick:()=>n("full"),isChosen:e==="full"}),i.jsx(C,{icon:i.jsx(ae,{}),onClick:()=>n("big"),isChosen:e==="big"})]}),Ge=h.div`
    &::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    align-items: center;
    column-gap: 0;
    transition: 0.2s;
    max-width: 600px;
    overflow-x: auto;
    overflow-y: hidden;
    height: ${({isFull:e})=>e?"0px":"60px"};
    opacity: ${({isFull:e})=>e?"0":"1"};
    visibility: ${({isFull:e})=>e?"hidden":"visible"};
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    @media (max-width: 1000px) {
        padding: 0 16px;
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        max-width: 100%;
        height: 50px;
        opacity: 1;
        visibility: visible;
        column-gap: 5px;
    }
`,Ze=({wrapperRef:e,data:{schedule:n,currentModule:r,view:t,currentChosenDay:o,currentDay:s}})=>{const{width:a}=I(),c=m.useMemo(()=>a>1e3?t==="full":!0,[a,t]),l=p=>{e!=null&&e.current&&(a<=1e3?e.current.scrollLeft=(p-1)*a:(Q.changeCurrentChosenDay({day:p}),e.current.scrollLeft=p*400-360))};return m.useEffect(()=>{l(o)},[e==null?void 0:e.current]),n&&n[r]?i.jsx(Ge,{isFull:c,children:r!=="2"&&r!=="3"?Object.keys(D).map((p,d)=>{var u,x;return i.jsx(U,{weekDay:D[p].short,lessons:(x=(u=n[r])==null?void 0:u[p])==null?void 0:x.lessons,isCurrent:s===d+1,isChosen:o===d+1,index:d+1,onClick:l},p)}):r==="2"&&!!n[2]&&Object.keys(n[2]).map((p,d)=>{var u,x;return i.jsx(U,{weekDay:O(p,"short"),lessons:(x=(u=n[r])==null?void 0:u[p])==null?void 0:x.lessons,isCurrent:O(new Date,"weird")===p,isChosen:o===d+1,index:d+1,onClick:l},p)})}):null},ot=m.memo(Ze);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ne=function(e,n){return(ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o])})(e,n)},Qe,L,qe=(function(e){/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var a=typeof s;if(a==="string"||a==="number")t.push(s);else if(Array.isArray(s)&&s.length){var c=r.apply(null,s);c&&t.push(c)}else if(a==="object")for(var l in s)n.call(s,l)&&s[l]&&t.push(l)}}return t.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(L={path:Qe,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(n==null&&L.path)}},L.exports),L.exports);function B(e,n,r){var t,o,s,a,c;function l(){var d=Date.now()-a;d<n&&d>=0?t=setTimeout(l,n-d):(t=null,r||(c=e.apply(s,o),s=o=null))}n==null&&(n=100);var p=function(){s=this,o=arguments,a=Date.now();var d=r&&!t;return t||(t=setTimeout(l,n)),d&&(c=e.apply(s,o),s=o=null),c};return p.clear=function(){t&&(clearTimeout(t),t=null)},p.flush=function(){t&&(c=e.apply(s,o),s=o=null,clearTimeout(t),t=null)},p}B.debounce=B;var Je=B;(function(e,n){n===void 0&&(n={});var r=n.insertAt;if(e&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",r==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);var _,Ve=(_="indiana-scroll-container",function(e,n){if(!e)return _;var r;typeof e=="string"?r=e:n=e;var t=_;return r&&(t+="__"+r),t+(n?Object.keys(n).reduce(function(o,s){var a=n[s];return a&&(o+=" "+(typeof a=="boolean"?t+"--"+s:t+"--"+s+"_"+a)),o},""):"")}),Ke=function(e){function n(r){var t=e.call(this,r)||this;return t.onEndScroll=function(){t.scrolling=!1,!t.pressed&&t.started&&t.processEnd()},t.onScroll=function(o){var s=t.container.current;s.scrollLeft===t.scrollLeft&&s.scrollTop===t.scrollTop||(t.scrolling=!0,t.processScroll(o),t.onEndScroll())},t.onTouchStart=function(o){var s=t.props.nativeMobileScroll;if(t.isDraggable(o.target))if(t.internal=!0,s&&t.scrolling)t.pressed=!0;else{var a=o.touches[0];t.processClick(o,a.clientX,a.clientY),!s&&t.props.stopPropagation&&o.stopPropagation()}},t.onTouchEnd=function(o){var s=t.props.nativeMobileScroll;t.pressed&&(!t.started||t.scrolling&&s?t.pressed=!1:t.processEnd(),t.forceUpdate())},t.onTouchMove=function(o){var s=t.props.nativeMobileScroll;if(t.pressed&&(!s||!t.isMobile)){var a=o.touches[0];a&&t.processMove(o,a.clientX,a.clientY),o.preventDefault(),t.props.stopPropagation&&o.stopPropagation()}},t.onMouseDown=function(o){t.isDraggable(o.target)&&t.isScrollable()&&(t.internal=!0,t.props.buttons.indexOf(o.button)!==-1&&(t.processClick(o,o.clientX,o.clientY),o.preventDefault(),t.props.stopPropagation&&o.stopPropagation()))},t.onMouseMove=function(o){t.pressed&&(t.processMove(o,o.clientX,o.clientY),o.preventDefault(),t.props.stopPropagation&&o.stopPropagation())},t.onMouseUp=function(o){t.pressed&&(t.started?t.processEnd():(t.internal=!1,t.pressed=!1,t.forceUpdate(),t.props.onClick&&t.props.onClick(o)),o.preventDefault(),t.props.stopPropagation&&o.stopPropagation())},t.container=W.createRef(),t.onEndScroll=Je(t.onEndScroll,300),t.scrolling=!1,t.started=!1,t.pressed=!1,t.internal=!1,t.getRef=t.getRef.bind(t),t}return function(r,t){function o(){this.constructor=r}ne(r,t),r.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}(n,e),n.prototype.componentDidMount=function(){var r=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),r&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},n.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},n.prototype.getElement=function(){return this.container.current},n.prototype.isMobileDevice=function(){return window.orientation!==void 0||navigator.userAgent.indexOf("IEMobile")!==-1},n.prototype.isDraggable=function(r){var t=this.props.ignoreElements;if(t){var o=r.closest(t);return o===null||o.contains(this.getElement())}return!0},n.prototype.isScrollable=function(){var r=this.container.current;return r&&(r.scrollWidth>r.clientWidth||r.scrollHeight>r.clientHeight)},n.prototype.processClick=function(r,t,o){var s=this.container.current;this.scrollLeft=s.scrollLeft,this.scrollTop=s.scrollTop,this.clientX=t,this.clientY=o,this.pressed=!0},n.prototype.processStart=function(r){r===void 0&&(r=!0);var t=this.props.onStartScroll;this.started=!0,r&&document.body.classList.add("indiana-dragging"),t&&t({external:!this.internal}),this.forceUpdate()},n.prototype.processScroll=function(r){if(this.started){var t=this.props.onScroll;t&&t({external:!this.internal})}else this.processStart(!1)},n.prototype.processMove=function(r,t,o){var s=this.props,a=s.horizontal,c=s.vertical,l=s.activationDistance,p=s.onScroll,d=this.container.current;this.started?(a&&(d.scrollLeft-=t-this.clientX),c&&(d.scrollTop-=o-this.clientY),p&&p({external:!this.internal}),this.clientX=t,this.clientY=o,this.scrollLeft=d.scrollLeft,this.scrollTop=d.scrollTop):(a&&Math.abs(t-this.clientX)>l||c&&Math.abs(o-this.clientY)>l)&&(this.clientX=t,this.clientY=o,this.processStart())},n.prototype.processEnd=function(){var r=this.props.onEndScroll;this.container.current&&r&&r({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},n.prototype.getRef=function(r){[this.container,this.props.innerRef].forEach(function(t){t&&(typeof t=="function"?t(r):t.current=r)})},n.prototype.render=function(){var r=this.props,t=r.children,o=r.draggingClassName,s=r.className,a=r.style,c=r.hideScrollbars,l=r.component;return W.createElement(l,{className:qe(s,this.pressed&&o,Ve({dragging:this.pressed,"hide-scrollbars":c,"native-scroll":this.isMobile})),style:a,ref:this.getRef,onScroll:this.onScroll},t)},n.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},n}(m.PureComponent);const Re=h(Ke)`
    display: flex;
    column-gap: 10px;
    overflow-x: auto;
    width: 100%;
    transition: 0.2s;
    padding: ${({isFull:e})=>e?"0px":"0px calc(50% - 200px)"};
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        height: 0;
    }

    @media (max-width: 1000px) {
        scroll-snap-type: x mandatory;
    }
`,et=({weekSchedule:e,view:n,wrapperRef:r})=>{const{data:{currentDay:t}}=N.useSchedule(),{width:o}=I();m.useEffect(()=>{setTimeout(()=>{r!=null&&r.current&&(n==="big"||o<1e3)&&(r.current.scrollLeft=t*400-360)},200)},[n]);const s=()=>{r!=null&&r.current&&o<=1e3&&Q.changeCurrentChosenDay({day:Math.floor(r.current.scrollLeft*1.2/o)+1})};return e?i.jsx(Re,{isFull:n==="full",innerRef:r,onScroll:s,children:Object.keys(e).map((a,c)=>i.jsx(te,{isCurrent:t===c+1,weekDay:D[a].full,lessons:e[a].lessons,view:n,topInfo:R(e,a)},c))}):i.jsx(Z,{text:"Пока нет расписания",image:me})},st=m.memo(et);export{te as D,rt as F,it as S,st as W,ot as a,Ke as p};
