import{s as l,j as n,r as w,cV as $,q as Q,R as _}from"./vendor-48260ac4.js";import{G as b,E as p,ce as F,cf as J,cg as E,L as Z,ch as ee,ci as te,bc as q,br as B,cj as ne,ck as re,a2 as H,cl as ae,bq as oe,cm as se,cn as ie,co as ce,bx as le,cp as N,cq as de,X as U,cr as he,u as pe,cs as ge,l as ue,ct as xe,cu as me,c6 as fe,c5 as De}from"./index-fbfd648b.js";const W=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},O=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",we=l(b).withConfig({componentId:"sc-178gzfm-0"})(["padding-left:var(--time-width);"]),be=l.div.withConfig({componentId:"sc-178gzfm-1"})(["width:100%;font-weight:500;height:44px;border-radius:4px;font-size:0.86rem;cursor:pointer;&:hover{background:var(--theme-3);}&::before,&::after{content:'';display:",";height:calc(100% - 64px);top:54px;width:1.5px;position:absolute;background:var(--theme-4);}&::after{right:0;}","{font-size:0.8rem;height:",";&::after,&::before{top:90px;height:calc(100% - 100px);}}"],({showColumns:e})=>e?"block":"none",p.isMobile,({showDates:e})=>e?"80px":"50px"),ye=l(b).withConfig({componentId:"sc-178gzfm-2"})(["margin:2px 0;","{flex-direction:column;margin:6px 0;}"],p.isMobile),Ce=l.span.withConfig({componentId:"sc-178gzfm-3"})(["margin-left:auto;margin-right:",";background:",";color:",";padding:5px;border-radius:25px;","{margin-right:auto;padding:4px;}"],({showDates:e})=>e?"0":"auto",({showDates:e})=>!e&&W,({showDates:e})=>e?"var(--grey)":O,p.isMobile),je=l.span.withConfig({componentId:"sc-178gzfm-4"})(["height:26px;min-width:26px;display:flex;justify-content:center;align-items:center;border-radius:100px;margin-right:auto;margin-left:2px;background:",";color:",";font-weight:",";","{margin-left:auto;margin-top:4px;font-size:",";}"],W,O,({isCurrent:e,isCurrentChosenDay:t})=>e&&t&&"600",p.isMobile,({isCurrent:e})=>e&&"0.8rem"),ke=l.div.withConfig({componentId:"sc-9mih1d-0"})(["display:flex;align-items:center;gap:4px;margin:0 auto;width:fit-content;"]),V=l.div.withConfig({componentId:"sc-9mih1d-1"})(["width:6px;height:6px;border-radius:10px;background:",";@media (max-width:768px){width:5px;height:5px;}"],({background:e})=>e),G=({subjects:e})=>e?n.jsx(ke,{children:e.map(t=>n.jsx(V,{background:t.color.main},t.startTime))}):null,ve=()=>{const e=new Date;let t=F(e);e.getDay()===0&&(t=J(e,1));const a=Object.keys(E).reduce((o,i)=>(o[E[i].short]="",o),{});for(let o=0;o<6;o++){const i=t.toLocaleDateString("ru-RU",{day:"2-digit"});t.setDate(t.getDate()+1),a[Object.keys(a)[o]]=i}return a},L=({showDates:e,showColumns:t,currentChosenDay:a,onDayClick:o,events:i})=>{const c=ve();return n.jsx(we,{jc:"space-between",children:Object.keys(c).map((r,s)=>{const d=c[r],h=s===a;return n.jsxs(be,{showDates:e,showColumns:t,onClick:o&&(()=>o==null?void 0:o(s)),children:[n.jsxs(ye,{children:[n.jsx(Ce,{isCurrent:+d===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:r}),e&&n.jsx(je,{isCurrentChosenDay:h,isCurrent:+d===new Date().getDate(),children:d})]}),i&&e&&n.jsx(G,{subjects:i[Object.keys(i)[s]]}),i&&!e&&i[Object.keys(i)[s]].length>0&&n.jsx(b,{jc:"center",children:n.jsx(V,{background:Z.grey.main})})]},r)})})},Y=({interval:e,showDates:t,events:a,onDayClick:o})=>{const i=e[0]*60,c=ee();return{handleOpenModal:te(),onDayClick:o,shift:i,showDates:t,interval:e,events:a,scale:c}},A=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,Ie=({events:e,currentChosenDay:t,showDates:a=!0,interval:o=[0,23]})=>{const{isSmallDesktop:i}=q(),{scale:c,shift:r,events:s,handleOpenModal:d}=Y({interval:o,events:e}),[h,f]=w.useState(null),[x,g]=w.useState(A(t)),u=w.useRef(null);w.useEffect(()=>{if(e){const m=Object.keys(e??{})[x],k=e[m].find(X=>B(X,!0))??null;f(k)}else f(null)},[e]);const y=h?`${h.startTime} - ${ne(h.startTime,h.duration)}`:"9:00",C=w.useCallback(m=>{i?d(m):f(m)},[i]),j=m=>{const k=Math.floor(m.currentTarget.scrollLeft/m.currentTarget.clientWidth);g(k)},D=m=>{u.current&&(u.current.scrollLeft=u.current.clientWidth*m)};return w.useLayoutEffect(()=>{D(A(t))},[u,t]),{currentDay:x,events:s,carouselRef:u,interval:o,scale:c,shift:r,showDates:a,chosenEvent:h,timeInterval:y,currentChosenDay:t,handleDayClick:D,handleCarouselScroll:j,onEventClick:C}},z="calc(100vh - var(--header-height) - 110px)",R="calc(100vh - var(--header-height) - 185px)",K="calc(100vh - var(--header-height) - 170px);",P=l(b).withConfig({componentId:"sc-13irvko-0"})(["--time-width:55px;","{--time-width:35px;}"],p.isMobile),Me=l(P).withConfig({componentId:"sc-b5gqbc-0"})(["height:",";","{height:",";}","{height:",";}"],z,p.isTablet,K,p.isMobile,R),Ee=l.div.withConfig({componentId:"sc-b5gqbc-1"})(["min-width:340px;max-width:340px;height:calc(100vh - 220px);z-index:10;background:var(--block-content);border-radius:10px;top:0;overflow:hidden;box-shadow:var(--block-shadow);","{display:none;}"],p.isSmallTesktop),Se=l.div.withConfig({componentId:"sc-b5gqbc-2"})(["overflow-y:hidden;overflow-x:auto;height:100%;width:100%;gap:32px;display:flex;scroll-snap-type:x mandatory;&{.calendar-wrapper{scroll-snap-align:center;min-width:100%;}}"]),Te=e=>{const{currentDay:t,events:a,carouselRef:o,interval:i,scale:c,shift:r,chosenEvent:s,showDates:d,timeInterval:h,handleDayClick:f,handleCarouselScroll:x,onEventClick:g}=Ie(e);return n.jsxs(Me,{d:"column",gap:"12px",children:[n.jsx(L,{onDayClick:f,currentChosenDay:t,showDates:d,showColumns:!1,events:a}),n.jsxs(b,{h:"100%",gap:"18px",children:[n.jsx(Se,{onScroll:x,ref:o,children:Object.keys(a??{}).map((u,y)=>{const C=a==null?void 0:a[u];return n.jsx(re,{events:C,interval:i,scale:c,weekday:y+1,currentDay:t,shift:r,onEventClick:g},u)})}),n.jsx(Ee,{children:s?n.jsx(ae,{isNextEvent:oe(a==null?void 0:a.saturday,s,!0),timeInterval:h,color:s.color,name:s.title,place:s.place,link:s.link,groups:s.groups,weekday:s.weekday,teachers:s.people,dateInterval:s.dateInterval,rooms:s.rooms??[],isCurrentEvent:B(s,!0)}):n.jsx(H,{text:"Ничего не выбрано",image:n.jsx($,{})})})]})]})},We=l(P).withConfig({componentId:"sc-13hlrk1-0"})(["height:",";position:relative;","{height:",";}","{height:",";}"],z,p.isTablet,K,p.isMobile,R),Oe=e=>{const{handleOpenModal:t,onDayClick:a,shift:o,scale:i,showDates:c,interval:r,events:s}=Y(e);return n.jsxs(We,{d:"column",children:[n.jsx(L,{onDayClick:a,showDates:c,showColumns:!0,events:s}),n.jsxs(se,{children:[n.jsx(ie,{interval:r,scale:i}),Object.keys(E).map((d,h)=>n.jsx(ce,{showTime:!1,weekDay:h+1,shortInfo:!0,events:s==null?void 0:s[d],scale:i,shift:o,currentEvent:null,interval:r,onClick:t},d))]})]})},S=e=>{const t=new Date(e),a=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(a))},v=(e,t)=>{const o=(t.getTime()-e.getTime())/(1e3*3600*24);return o-Math.floor(o/6.55)+1},Le=l.div.withConfig({componentId:"sc-1xp14d0-0"})(["width:100%;display:flex;flex-direction:column;height:",";position:relative;","{height:",";}"],z,p.isMobile,R),ze=l.div.withConfig({componentId:"sc-1xp14d0-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;border-left:1px solid var(--theme-3);border-top:1px solid var(--theme-3);border-bottom:1px solid var(--theme-3);overflow-y:auto;scroll-snap-type:y mandatory;scroll-padding-top:100px;","{&::-webkit-scrollbar{display:none;}}","{border:none;scroll-padding-top:50px;}"],p.isMiddleTesktop,p.isMobile),Re=l.div.withConfig({componentId:"sc-1xp14d0-2"})(["padding:6px;width:1000px;max-width:calc(100% / 6);height:calc((100vh / 6) - 6px);background:transparent;border-right:1px solid var(--almostTransparentOpposite);border-bottom:1px solid var(--almostTransparentOpposite);display:flex;flex-direction:column;align-items:center;opacity:",";background:",";scroll-snap-align:center;","{padding:12px;gap:4px;height:calc((100vw / 6) - 5.5px);border-right:none;}"],({disabled:e})=>e?"0.4":"1",({disabled:e})=>e?"var(--theme-1t)":"transparent",p.isMobile),Ne=l.div.withConfig({componentId:"sc-1xp14d0-3"})(["width:100%;font-size:0.9rem;font-weight:500;display:flex;align-items:center;","{justify-content:center;}"],p.isMobile),Ae=l.div.withConfig({componentId:"sc-1xp14d0-4"})(["height:26px;width:26px;display:flex;justify-content:center;align-items:center;border-radius:30px;background:",";color:",";"],W,O),_e=l.div.withConfig({componentId:"sc-1xp14d0-5"})(["position:sticky;width:100%;height:50px;font-size:1.2rem;font-weight:500;top:0px;padding:10px;z-index:100;margin:4px 0;background:var(--block);","{background:var(--theme);}"],p.isMobile),T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Fe=l(b).withConfig({componentId:"sc-1mwhn0h-0"})(["padding:4px;border-radius:4px;cursor:pointer;&:hover{filter:brightness(0.92);}"]),qe=l.div.withConfig({componentId:"sc-1mwhn0h-1"})(["font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.8rem;opacity:0.8;color:",";"],({textColor:e})=>e),Be=e=>{const{title:t,color:a,onClick:o,startTime:i}=e,c=Q(le.userSettings),r=(c==null?void 0:c.appearance.theme)===N.Light?a.dark3:a.light3,s=(c==null?void 0:c.appearance.theme)===N.Light?a.transparent3:a.transparent2,d=()=>o==null?void 0:o(e);return n.jsxs(Fe,{textColor:r,background:s,gap:"6px",onClick:d,children:[n.jsx(de,{isCurrentEvent:!1,color:a}),n.jsx(qe,{textColor:r,children:t}),n.jsx(U,{fontSize:"0.7rem",children:i})]})},I=4,He=(e,t)=>{const a=he(t);return a==="sunday"?[]:e==null?void 0:e[a].filter(o=>o.endDate?t>=o.startDate&&t<=o.endDate:T(o.startDate,t))},Ue=({daysAmount:e,startDate:t,events:a,addOneOnWeekends:o,handleEventClick:i,disabled:c=!1})=>{if(e<0||isNaN(e))return n.jsx(H,{text:"Неправильная длина календаря"});const r=new Date(t),{isMobile:s}=q(),{open:d}=pe(),h=(f,x)=>()=>{d(n.jsx(me,{isCurrentDay:!1,dayEvents:f,day:x}),x)};return n.jsx(n.Fragment,{children:Array(e).fill(0).map((f,x)=>{var j;if(x!==0)r.getDay()===6&&o?r.setDate(r.getDate()+2):r.setDate(r.getDate()+1);else if(r.getDay()===0)return null;const g=He(a,r),u=S(r),y=r.getDay()===1&&u.getMonth()!==r.getMonth(),C=u.getMonth()===r.getMonth()&&x===0&&r.getDay()===1||r.getDay()===1&&r.getDate()===1;return n.jsxs(_.Fragment,{children:[(C||y)&&n.jsx(_e,{children:ge(y?S(r).toLocaleDateString("ru-RU",{month:"long"}):r.toLocaleDateString("ru-RU",{month:"long"}))}),n.jsxs(Re,{disabled:c,onClick:h(g,ue(r)),children:[n.jsxs(Ne,{children:[n.jsxs(Ae,{isCurrentChosenDay:T(r,new Date),isCurrent:T(r,new Date),children:[xe(r.getDate())," "]}),!s&&r.getDate()===1&&r.toLocaleDateString("ru-RU",{month:"short"})]}),!s&&n.jsxs(b,{d:"column",ai:"flex-start",gap:"0px",children:[(j=g==null?void 0:g.slice(0,I))==null?void 0:j.map(D=>n.jsx(Be,{...D,onClick:i},D.title+D.startTime+D.dateInterval)),((g==null?void 0:g.length)??0)>I&&n.jsxs(U,{children:["И еще ",((g==null?void 0:g.length)??0)-I]})]}),s&&n.jsx(G,{subjects:g})]})]},r.toLocaleDateString("ru-RU"))})})},M=_.memo(Ue),Ve=({events:e,startDate:t,endDate:a,onDayClick:o})=>{const i=new Date(t),c=new Date(a),r=F(i),s=c.getDay()!==0?S(c):c,d=v(i,c);return n.jsxs(Le,{children:[n.jsx(L,{showColumns:!1,events:null,onDayClick:o}),n.jsxs(ze,{children:[n.jsx(M,{daysAmount:v(r,i)-1,startDate:r,events:e,disabled:!0,addOneOnWeekends:!1}),n.jsx(M,{daysAmount:d,startDate:i,events:e,addOneOnWeekends:!0}),n.jsx(M,{daysAmount:v(c,s)-1,startDate:new Date(c.getFullYear(),c.getMonth(),c.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},Ke=({events:e,view:t,showDates:a,startDate:o,endDate:i})=>{const[c,r]=w.useState(void 0),s=h=>{fe.changeView(De.day),r(h)},d=[n.jsx(Te,{currentChosenDay:c,events:e,interval:[9,22],showDates:a},"day"),n.jsx(Oe,{events:e,interval:[9,22],showDates:a,onDayClick:s},"week"),n.jsx(Ve,{events:e,startDate:o,endDate:i,onDayClick:s},"month")];return n.jsx(n.Fragment,{children:d[t]})};export{Ke as T};
