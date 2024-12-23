var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var A=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&A(e,n,t[n]);if(N)for(var n of N(t))oe.call(t,n)&&A(e,n,t[n]);return e},F=(e,t)=>ne(e,re(t));import{s as l,j as r,r as b,cV as se,q as ie,R as G}from"./vendor-00bea631.js";import{G as y,E as p,cv as U,cw as ce,cx as E,L as le,cy as de,cz as he,bx as V,bM as q,cA as pe,cB as ge,a2 as Y,cC as ue,bL as xe,cD as me,cE as fe,cF as De,ar as we,av as B,cG as be,X as K,cH as ye,u as Ce,cI as je,l as ke,cJ as ve,cK as Ie,cn as Me,cm as Ee}from"./index-ed5dff92.js";const W=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},O=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",Se=l(y).withConfig({componentId:"sc-178gzfm-0"})(["padding-left:var(--time-width);"]),Te=l.div.withConfig({componentId:"sc-178gzfm-1"})(["width:100%;font-weight:500;height:44px;border-radius:4px;font-size:0.86rem;cursor:pointer;&:hover{background:var(--theme-3);}&::before,&::after{content:'';display:",";height:calc(100% - 64px);top:54px;width:1.5px;position:absolute;background:var(--theme-4);}&::after{right:0;}","{font-size:0.8rem;height:",";&::after,&::before{top:90px;height:calc(100% - 100px);}}"],({showColumns:e})=>e?"block":"none",p.isMobile,({showDates:e})=>e?"80px":"50px"),We=l(y).withConfig({componentId:"sc-178gzfm-2"})(["margin:2px 0;","{flex-direction:column;margin:6px 0;}"],p.isMobile),Oe=l.span.withConfig({componentId:"sc-178gzfm-3"})(["margin-left:auto;margin-right:",";background:",";color:",";padding:5px;border-radius:25px;","{margin-right:auto;padding:4px;}"],({showDates:e})=>e?"0":"auto",({showDates:e})=>!e&&W,({showDates:e})=>e?"var(--grey)":O,p.isMobile),Le=l.span.withConfig({componentId:"sc-178gzfm-4"})(["height:26px;min-width:26px;display:flex;justify-content:center;align-items:center;border-radius:100px;margin-right:auto;margin-left:2px;background:",";color:",";font-weight:",";","{margin-left:auto;margin-top:4px;font-size:",";}"],W,O,({isCurrent:e,isCurrentChosenDay:t})=>e&&t&&"600",p.isMobile,({isCurrent:e})=>e&&"0.8rem"),ze=l.div.withConfig({componentId:"sc-9mih1d-0"})(["display:flex;align-items:center;gap:4px;margin:0 auto;width:fit-content;"]),P=l.div.withConfig({componentId:"sc-9mih1d-1"})(["width:6px;height:6px;border-radius:10px;background:",";@media (max-width:768px){width:5px;height:5px;}"],({background:e})=>e),X=({subjects:e})=>e?r.jsx(ze,{children:e.map(t=>r.jsx(P,{background:t.color.main},t.startTime))}):null,Re=()=>{const e=new Date;let t=U(e);e.getDay()===0&&(t=ce(e,1));const n=Object.keys(E).reduce((o,i)=>(o[E[i].short]="",o),{});for(let o=0;o<6;o++){const i=t.toLocaleDateString("ru-RU",{day:"2-digit"});t.setDate(t.getDate()+1),n[Object.keys(n)[o]]=i}return n},L=({showDates:e,showColumns:t,currentChosenDay:n,onDayClick:o,events:i})=>{const c=Re();return r.jsx(Se,{jc:"space-between",children:Object.keys(c).map((a,s)=>{const d=c[a],h=s===n;return r.jsxs(Te,{showDates:e,showColumns:t,onClick:o&&(()=>o==null?void 0:o(s)),children:[r.jsxs(We,{children:[r.jsx(Oe,{isCurrent:+d===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:a}),e&&r.jsx(Le,{isCurrentChosenDay:h,isCurrent:+d===new Date().getDate(),children:d})]}),i&&e&&r.jsx(X,{subjects:i[Object.keys(i)[s]]}),i&&!e&&i[Object.keys(i)[s]].length>0&&r.jsx(y,{jc:"center",children:r.jsx(P,{background:le.grey.main})})]},a)})})},$=({interval:e,showDates:t,events:n,onDayClick:o})=>{const i=e[0]*60,c=de();return{handleOpenModal:he(),onDayClick:o,shift:i,showDates:t,interval:e,events:n,scale:c}},H=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,Ne=({events:e,currentChosenDay:t,showDates:n=!0,interval:o=[0,23]})=>{const{isSmallDesktop:i}=V(),{scale:c,shift:a,events:s,handleOpenModal:d}=$({interval:o,events:e}),[h,f]=b.useState(null),[m,g]=b.useState(H(t)),x=b.useRef(null);b.useEffect(()=>{var u;if(e){const D=Object.keys(e!=null?e:{})[m],Z=(u=e[D].find(ee=>q(ee,!0)))!=null?u:null;f(Z)}else f(null)},[e]);const w=h?`${h.startTime} - ${pe(h.startTime,h.duration)}`:"9:00",j=b.useCallback(u=>{i?d(u):f(u)},[i]),C=u=>{const D=Math.floor(u.currentTarget.scrollLeft/u.currentTarget.clientWidth);g(D)},k=u=>{x.current&&(x.current.scrollLeft=x.current.clientWidth*u)};return b.useLayoutEffect(()=>{k(H(t))},[x,t]),{currentDay:m,events:s,carouselRef:x,interval:o,scale:c,shift:a,showDates:n,chosenEvent:h,timeInterval:w,currentChosenDay:t,handleDayClick:k,handleCarouselScroll:C,onEventClick:j}},z="calc(100vh - var(--header-height) - 110px)",R="calc(100vh - var(--header-height) - 185px)",J="calc(100vh - var(--header-height) - 170px);",Q=l(y).withConfig({componentId:"sc-13irvko-0"})(["--time-width:55px;","{--time-width:35px;}"],p.isMobile),Ae=l(Q).withConfig({componentId:"sc-b5gqbc-0"})(["height:",";","{height:",";}","{height:",";}"],z,p.isTablet,J,p.isMobile,R),_e=l.div.withConfig({componentId:"sc-b5gqbc-1"})(["min-width:340px;max-width:340px;height:calc(100vh - 220px);z-index:10;background:var(--block-content);border-radius:10px;top:0;overflow:hidden;box-shadow:var(--block-shadow);","{display:none;}"],p.isSmallTesktop),Fe=l.div.withConfig({componentId:"sc-b5gqbc-2"})(["overflow-y:hidden;overflow-x:auto;height:100%;width:100%;gap:32px;display:flex;scroll-snap-type:x mandatory;&{.calendar-wrapper{scroll-snap-align:center;min-width:100%;}}"]),Be=e=>{var x;const{currentDay:t,events:n,carouselRef:o,interval:i,scale:c,shift:a,chosenEvent:s,showDates:d,timeInterval:h,handleDayClick:f,handleCarouselScroll:m,onEventClick:g}=Ne(e);return r.jsxs(Ae,{d:"column",gap:"12px",children:[r.jsx(L,{onDayClick:f,currentChosenDay:t,showDates:d,showColumns:!1,events:n}),r.jsxs(y,{h:"100%",gap:"18px",children:[r.jsx(Fe,{onScroll:m,ref:o,children:Object.keys(n!=null?n:{}).map((w,j)=>{const C=n==null?void 0:n[w];return r.jsx(ge,{events:C,interval:i,scale:c,weekday:j+1,currentDay:t,shift:a,onEventClick:g},w)})}),r.jsx(_e,{children:s?r.jsx(ue,{isNextEvent:xe(n==null?void 0:n.saturday,s,!0),timeInterval:h,color:s.color,name:s.title,place:s.place,link:s.link,groups:s.groups,weekday:s.weekday,teachers:s.people,dateInterval:s.dateInterval,rooms:(x=s.rooms)!=null?x:[],isCurrentEvent:q(s,!0)}):r.jsx(Y,{text:"Ничего не выбрано",image:r.jsx(se,{})})})]})]})},He=l(Q).withConfig({componentId:"sc-13hlrk1-0"})(["height:",";position:relative;","{height:",";}","{height:",";}"],z,p.isTablet,J,p.isMobile,R),Ge=e=>{const{handleOpenModal:t,onDayClick:n,shift:o,scale:i,showDates:c,interval:a,events:s}=$(e);return r.jsxs(He,{d:"column",children:[r.jsx(L,{onDayClick:n,showDates:c,showColumns:!0,events:s}),r.jsxs(me,{children:[r.jsx(fe,{interval:a,scale:i}),Object.keys(E).map((d,h)=>r.jsx(De,{showTime:!1,weekDay:h+1,shortInfo:!0,events:s==null?void 0:s[d],scale:i,shift:o,currentEvent:null,interval:a,onClick:t},d))]})]})},S=e=>{const t=new Date(e),n=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(n))},v=(e,t)=>{const o=(t.getTime()-e.getTime())/(1e3*3600*24);return o-Math.floor(o/6.55)+1},Ue=l.div.withConfig({componentId:"sc-1xp14d0-0"})(["width:100%;display:flex;flex-direction:column;height:",";position:relative;","{height:",";}"],z,p.isMobile,R),Ve=l.div.withConfig({componentId:"sc-1xp14d0-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;border-left:1px solid var(--theme-3);border-top:1px solid var(--theme-3);border-bottom:1px solid var(--theme-3);overflow-y:auto;scroll-snap-type:y mandatory;scroll-padding-top:100px;","{&::-webkit-scrollbar{display:none;}}","{border:none;scroll-padding-top:50px;}"],p.isMiddleTesktop,p.isMobile),qe=l.div.withConfig({componentId:"sc-1xp14d0-2"})(["padding:6px;width:1000px;max-width:calc(100% / 6);height:calc((100vh / 6) - 6px);background:transparent;border-right:1px solid var(--almostTransparentOpposite);border-bottom:1px solid var(--almostTransparentOpposite);display:flex;flex-direction:column;align-items:center;opacity:",";background:",";scroll-snap-align:center;","{padding:12px;gap:4px;height:calc((100vw / 6) - 5.5px);border-right:none;}"],({disabled:e})=>e?"0.4":"1",({disabled:e})=>e?"var(--theme-1t)":"transparent",p.isMobile),Ye=l.div.withConfig({componentId:"sc-1xp14d0-3"})(["width:100%;font-size:0.9rem;font-weight:500;display:flex;align-items:center;","{justify-content:center;}"],p.isMobile),Ke=l.div.withConfig({componentId:"sc-1xp14d0-4"})(["height:26px;width:26px;display:flex;justify-content:center;align-items:center;border-radius:30px;background:",";color:",";"],W,O),Pe=l.div.withConfig({componentId:"sc-1xp14d0-5"})(["position:sticky;width:100%;height:50px;font-size:1.2rem;font-weight:500;top:0px;padding:10px;z-index:100;margin:4px 0;background:var(--block);","{background:var(--theme);}"],p.isMobile),T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Xe=l(y).withConfig({componentId:"sc-1mwhn0h-0"})(["padding:4px;border-radius:4px;cursor:pointer;&:hover{filter:brightness(0.92);}"]),$e=l.div.withConfig({componentId:"sc-1mwhn0h-1"})(["font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.8rem;opacity:0.8;color:",";"],({textColor:e})=>e),Je=e=>{const{title:t,color:n,onClick:o,startTime:i}=e,c=ie(we.userSettings),a=(c==null?void 0:c.appearance.theme)===B.Light?n.dark3:n.light3,s=(c==null?void 0:c.appearance.theme)===B.Light?n.transparent3:n.transparent2,d=()=>o==null?void 0:o(e);return r.jsxs(Xe,{textColor:a,background:s,gap:"6px",onClick:d,children:[r.jsx(be,{isCurrentEvent:!1,color:n}),r.jsx($e,{textColor:a,children:t}),r.jsx(K,{fontSize:"0.7rem",children:i})]})},I=4,Qe=(e,t)=>{const n=ye(t);return n==="sunday"?[]:e==null?void 0:e[n].filter(o=>o.endDate?t>=o.startDate&&t<=o.endDate:T(o.startDate,t))},Ze=({daysAmount:e,startDate:t,events:n,addOneOnWeekends:o,handleEventClick:i,disabled:c=!1})=>{if(e<0||isNaN(e))return r.jsx(Y,{text:"Неправильная длина календаря"});const a=new Date(t),{isMobile:s}=V(),{open:d}=Ce(),h=(f,m)=>()=>{d(r.jsx(Ie,{isCurrentDay:!1,dayEvents:f,day:m}),m)};return r.jsx(r.Fragment,{children:Array(e).fill(0).map((f,m)=>{var C,k,u;if(m!==0)a.getDay()===6&&o?a.setDate(a.getDate()+2):a.setDate(a.getDate()+1);else if(a.getDay()===0)return null;const g=Qe(n,a),x=S(a),w=a.getDay()===1&&x.getMonth()!==a.getMonth(),j=x.getMonth()===a.getMonth()&&m===0&&a.getDay()===1||a.getDay()===1&&a.getDate()===1;return r.jsxs(G.Fragment,{children:[(j||w)&&r.jsx(Pe,{children:je(w?S(a).toLocaleDateString("ru-RU",{month:"long"}):a.toLocaleDateString("ru-RU",{month:"long"}))}),r.jsxs(qe,{disabled:c,onClick:h(g,ke(a)),children:[r.jsxs(Ye,{children:[r.jsxs(Ke,{isCurrentChosenDay:T(a,new Date),isCurrent:T(a,new Date),children:[ve(a.getDate())," "]}),!s&&a.getDate()===1&&a.toLocaleDateString("ru-RU",{month:"short"})]}),!s&&r.jsxs(y,{d:"column",ai:"flex-start",gap:"0px",children:[(C=g==null?void 0:g.slice(0,I))==null?void 0:C.map(D=>r.jsx(Je,F(_({},D),{onClick:i}),D.title+D.startTime+D.dateInterval)),((k=g==null?void 0:g.length)!=null?k:0)>I&&r.jsxs(K,{children:["И еще ",((u=g==null?void 0:g.length)!=null?u:0)-I]})]}),s&&r.jsx(X,{subjects:g})]})]},a.toLocaleDateString("ru-RU"))})})},M=G.memo(Ze),et=({events:e,startDate:t,endDate:n,onDayClick:o})=>{const i=new Date(t),c=new Date(n),a=U(i),s=c.getDay()!==0?S(c):c,d=v(i,c);return r.jsxs(Ue,{children:[r.jsx(L,{showColumns:!1,events:null,onDayClick:o}),r.jsxs(Ve,{children:[r.jsx(M,{daysAmount:v(a,i)-1,startDate:a,events:e,disabled:!0,addOneOnWeekends:!1}),r.jsx(M,{daysAmount:d,startDate:i,events:e,addOneOnWeekends:!0}),r.jsx(M,{daysAmount:v(c,s)-1,startDate:new Date(c.getFullYear(),c.getMonth(),c.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},at=({events:e,view:t,showDates:n,startDate:o,endDate:i})=>{const[c,a]=b.useState(void 0),s=h=>{Me.changeView(Ee.day),a(h)},d=[r.jsx(Be,{currentChosenDay:c,events:e,interval:[9,22],showDates:n},"day"),r.jsx(Ge,{events:e,interval:[9,22],showDates:n,onDayClick:s},"week"),r.jsx(et,{events:e,startDate:o,endDate:i,onDayClick:s},"month")];return r.jsx(r.Fragment,{children:d[t]})};export{at as T};
