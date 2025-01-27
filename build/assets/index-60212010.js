var te=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var _=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))ae.call(t,a)&&_(e,a,t[a]);if(R)for(var a of R(t))re.call(t,a)&&_(e,a,t[a]);return e},F=(e,t)=>ne(e,oe(t));import{s as d,j as n,r as y,d5 as se,q as ie,W as U}from"./vendor-33947725.js";import{cB as q,cC as ce,cD as M,J as b,O as p,H as le,cE as de,cF as he,bn as G,bP as V,cG as pe,cH as ge,a2 as Y,cI as ue,bO as xe,cJ as me,cK as fe,cL as ve,ap as De,at as B,cM as we,K,cN as ye,u as be,cO as Ce,l as ke,cP as je,cQ as Ie,ct as Ee,cs as Me}from"./index-5e1edf2c.js";const Se=d.div.withConfig({componentId:"sc-9mih1d-0"})(["display:flex;align-items:center;gap:4px;margin:0 auto;width:fit-content;"]),P=d.div.withConfig({componentId:"sc-9mih1d-1"})(["width:6px;height:6px;border-radius:10px;background:",";@media (max-width:768px){width:5px;height:5px;}"],({background:e})=>e),J=({subjects:e})=>e?n.jsx(Se,{children:e.map(t=>n.jsx(P,{background:t.color.main},t.startTime))}):null,Te=()=>{const e=new Date;let t=q(e);e.getDay()===0&&(t=ce(e,1));const a=Object.keys(M).reduce((o,s)=>(o[M[s].short]="",o),{});for(let o=0;o<6;o++){const s=t.toLocaleDateString("ru-RU",{day:"2-digit"});t.setDate(t.getDate()+1),a[Object.keys(a)[o]]=s}return a},O=({isCurrent:e,isCurrentChosenDay:t})=>{if(t&&!e)return"var(--text)";if(e&&t)return"var(--reallyBlue)"},W=({isCurrent:e,isCurrentChosenDay:t})=>e&&t?"#fff":t?"var(--invert-text)":e?"var(--blue)":"var(--text)",Oe=d(b).withConfig({componentId:"sc-178gzfm-0"})(["padding-left:var(--time-width);"]),We=d.div.withConfig({componentId:"sc-178gzfm-1"})(["width:100%;font-weight:500;height:44px;border-radius:4px;font-size:0.86rem;cursor:pointer;&:hover{background:var(--theme-3);}&::before,&::after{content:'';display:",";height:calc(100% - 64px);top:54px;width:1.5px;position:absolute;background:var(--theme-4);}&::after{right:0;}","{font-size:0.8rem;height:",";&::after,&::before{top:90px;height:calc(100% - 100px);}}"],({showColumns:e})=>e?"block":"none",p.isMobile,({showDates:e})=>e?"80px":"50px"),Le=d(b).withConfig({componentId:"sc-178gzfm-2"})(["margin:2px 0;","{flex-direction:column;margin:6px 0;}"],p.isMobile),ze=d.span.withConfig({componentId:"sc-178gzfm-3"})(["margin-left:auto;margin-right:",";background:",";color:",";padding:5px;border-radius:25px;","{margin-right:auto;padding:4px;}"],({showDates:e})=>e?"0":"auto",({showDates:e})=>!e&&O,({showDates:e})=>e?"var(--grey)":W,p.isMobile),Ne=d.span.withConfig({componentId:"sc-178gzfm-4"})(["height:26px;min-width:26px;display:flex;justify-content:center;align-items:center;border-radius:100px;margin-right:auto;margin-left:2px;background:",";color:",";font-weight:",";","{margin-left:auto;margin-top:4px;font-size:",";}"],O,W,({isCurrent:e,isCurrentChosenDay:t})=>e&&t&&"600",p.isMobile,({isCurrent:e})=>e&&"0.8rem"),L=({showDates:e,showColumns:t,currentChosenDay:a,onDayClick:o,events:s})=>{const i=Te();return n.jsx(Oe,{jc:"space-between",children:Object.keys(i).map((r,l)=>{const c=i[r],h=l===a;return n.jsxs(We,{showDates:e,showColumns:t,onClick:o&&(()=>o==null?void 0:o(l)),children:[n.jsxs(Le,{children:[n.jsx(ze,{isCurrent:+c===new Date().getDate(),isCurrentChosenDay:!e&&h,showDates:e,children:r}),e&&n.jsx(Ne,{isCurrentChosenDay:h,isCurrent:+c===new Date().getDate(),children:c})]}),s&&e&&n.jsx(J,{subjects:s[Object.keys(s)[l]]}),s&&!e&&s[Object.keys(s)[l]].length>0&&n.jsx(b,{jc:"center",children:n.jsx(P,{background:le.grey.main})})]},r)})})},Q=({interval:e,showDates:t,events:a,onDayClick:o})=>{const s=e[0]*60,i=de();return{handleOpenModal:he(),onDayClick:o,shift:s,showDates:t,interval:e,events:a,scale:i}},H=e=>e!==void 0?e:new Date().getDay()===0?0:new Date().getDay()-1,Re=({events:e,currentChosenDay:t,showDates:a=!0,interval:o=[0,23]})=>{const{isSmallDesktop:s}=G(),{scale:i,shift:r,events:l,handleOpenModal:c}=Q({interval:o,events:e}),[h,f]=y.useState(null),[m,w]=y.useState(H(t)),x=y.useRef(null);y.useEffect(()=>{if(e){var u;const D=Object.keys(e!=null?e:{})[m],Z=(u=e[D].find(ee=>V(ee,!0)))!==null&&u!==void 0?u:null;f(Z)}else f(null)},[e]);const v=h?`${h.startTime} - ${pe(h.startTime,h.duration)}`:"9:00",g=y.useCallback(u=>{s?c(u):f(u)},[s]),C=u=>{const D=Math.floor(u.currentTarget.scrollLeft/u.currentTarget.clientWidth);w(D)},k=u=>{x.current&&(x.current.scrollLeft=x.current.clientWidth*u)};return y.useLayoutEffect(()=>{k(H(t))},[x,t]),{currentDay:m,events:l,carouselRef:x,interval:o,scale:i,shift:r,showDates:a,chosenEvent:h,timeInterval:v,currentChosenDay:t,handleDayClick:k,handleCarouselScroll:C,onEventClick:g}},z="calc(100vh - var(--header-height) - 110px)",N="calc(100vh - var(--header-height) - 185px)",$="calc(100vh - var(--header-height) - 170px);",X=d(b).withConfig({componentId:"sc-13irvko-0"})(["--time-width:55px;","{--time-width:35px;}"],p.isMobile),_e=d(X).withConfig({componentId:"sc-b5gqbc-0"})(["height:",";","{height:",";}","{height:",";}"],z,p.isTablet,$,p.isMobile,N),Ae=d.div.withConfig({componentId:"sc-b5gqbc-1"})(["min-width:340px;max-width:340px;height:calc(100vh - 220px);z-index:10;background:var(--block-content);border-radius:10px;top:0;overflow:hidden;box-shadow:var(--block-shadow);","{display:none;}"],p.isSmallTesktop),Fe=d.div.withConfig({componentId:"sc-b5gqbc-2"})(["overflow-y:hidden;overflow-x:auto;height:100%;width:100%;gap:32px;display:flex;scroll-snap-type:x mandatory;&{.calendar-wrapper{scroll-snap-align:center;min-width:100%;}}"]),Be=e=>{var t;const{currentDay:a,events:o,carouselRef:s,interval:i,scale:r,shift:l,chosenEvent:c,showDates:h,timeInterval:f,handleDayClick:m,handleCarouselScroll:w,onEventClick:x}=Re(e);return n.jsxs(_e,{d:"column",gap:"12px",children:[n.jsx(L,{onDayClick:m,currentChosenDay:a,showDates:h,showColumns:!1,events:o}),n.jsxs(b,{h:"100%",gap:"18px",children:[n.jsx(Fe,{onScroll:w,ref:s,children:Object.keys(o!=null?o:{}).map((v,g)=>{const C=o==null?void 0:o[v];return n.jsx(ge,{events:C,interval:i,scale:r,weekday:g+1,currentDay:a,shift:l,onEventClick:x},v)})}),n.jsx(Ae,{children:c?n.jsx(ue,{isNextEvent:xe(o==null?void 0:o.saturday,c,!0),timeInterval:f,color:c.color,name:c.title,place:c.place,link:c.link,groups:c.groups,weekday:c.weekday,teachers:c.people,dateInterval:c.dateInterval,rooms:(t=c.rooms)!==null&&t!==void 0?t:[],isCurrentEvent:V(c,!0)}):n.jsx(Y,{text:"Ничего не выбрано",image:n.jsx(se,{})})})]})]})},He=d(X).withConfig({componentId:"sc-13hlrk1-0"})(["height:",";position:relative;","{height:",";}","{height:",";}"],z,p.isTablet,$,p.isMobile,N),Ue=e=>{const{handleOpenModal:t,onDayClick:a,shift:o,scale:s,showDates:i,interval:r,events:l}=Q(e);return n.jsxs(He,{d:"column",children:[n.jsx(L,{onDayClick:a,showDates:i,showColumns:!0,events:l}),n.jsxs(me,{children:[n.jsx(fe,{interval:r,scale:s}),Object.keys(M).map((c,h)=>n.jsx(ve,{showTime:!1,weekDay:h+1,shortInfo:!0,events:l==null?void 0:l[c],scale:s,shift:o,currentEvent:null,interval:r,onClick:t},c))]})]})},S=e=>{const t=new Date(e),a=t.getDate()-(t.getDay()-1)+6;return new Date(t.setDate(a))},j=(e,t)=>{const o=(t.getTime()-e.getTime())/(1e3*3600*24);return o-Math.floor(o/6.55)+1},qe=d.div.withConfig({componentId:"sc-1xp14d0-0"})(["width:100%;display:flex;flex-direction:column;height:",";position:relative;","{height:",";}"],z,p.isMobile,N),Ge=d.div.withConfig({componentId:"sc-1xp14d0-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;border-left:1px solid var(--theme-3);border-top:1px solid var(--theme-3);border-bottom:1px solid var(--theme-3);overflow-y:auto;scroll-snap-type:y mandatory;scroll-padding-top:100px;","{&::-webkit-scrollbar{display:none;}}","{border:none;scroll-padding-top:50px;}"],p.isMiddleTesktop,p.isMobile),Ve=d.div.withConfig({componentId:"sc-1xp14d0-2"})(["padding:6px;width:1000px;max-width:calc(100% / 6);height:calc((100vh / 6) - 6px);background:transparent;border-right:1px solid var(--almostTransparentOpposite);border-bottom:1px solid var(--almostTransparentOpposite);display:flex;flex-direction:column;align-items:center;opacity:",";background:",";scroll-snap-align:center;","{padding:12px;gap:4px;height:calc((100vw / 6) - 5.5px);border-right:none;}"],({disabled:e})=>e?"0.4":"1",({disabled:e})=>e?"var(--theme-1t)":"transparent",p.isMobile),Ye=d.div.withConfig({componentId:"sc-1xp14d0-3"})(["width:100%;font-size:0.9rem;font-weight:500;display:flex;align-items:center;","{justify-content:center;}"],p.isMobile),Ke=d.div.withConfig({componentId:"sc-1xp14d0-4"})(["height:26px;width:26px;display:flex;justify-content:center;align-items:center;border-radius:30px;background:",";color:",";"],O,W),Pe=d.div.withConfig({componentId:"sc-1xp14d0-5"})(["position:sticky;width:100%;height:50px;font-size:1.2rem;font-weight:500;top:0px;padding:10px;z-index:100;margin:4px 0;background:var(--block);","{background:var(--theme);}"],p.isMobile),T=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Je=d(b).withConfig({componentId:"sc-1mwhn0h-0"})(["padding:4px;border-radius:4px;cursor:pointer;&:hover{filter:brightness(0.92);}"]),Qe=d.div.withConfig({componentId:"sc-1mwhn0h-1"})(["font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:0.8rem;opacity:0.8;color:",";"],({textColor:e})=>e),$e=e=>{const{title:t,color:a,onClick:o,startTime:s}=e,i=ie(De.userSettings),r=(i==null?void 0:i.appearance.theme)===B.Light?a.dark3:a.light3,l=(i==null?void 0:i.appearance.theme)===B.Light?a.transparent3:a.transparent2,c=()=>o==null?void 0:o(e);return n.jsxs(Je,{textColor:r,background:l,gap:"6px",onClick:c,children:[n.jsx(we,{isCurrentEvent:!1,color:a}),n.jsx(Qe,{textColor:r,children:t}),n.jsx(K,{fontSize:"0.7rem",children:s})]})},I=4,Xe=(e,t)=>{const a=ye(t);return a==="sunday"?[]:e==null?void 0:e[a].filter(o=>o.endDate?t>=o.startDate&&t<=o.endDate:T(o.startDate,t))},Ze=({daysAmount:e,startDate:t,events:a,addOneOnWeekends:o,handleEventClick:s,disabled:i=!1})=>{if(e<0||isNaN(e))return n.jsx(Y,{text:"Неправильная длина календаря"});const r=new Date(t),{isMobile:l}=G(),{open:c}=be(),h=(f,m)=>()=>{c(n.jsx(Ie,{isCurrentDay:!1,dayEvents:f,day:m}),m)};return n.jsx(n.Fragment,{children:Array(e).fill(0).map((f,m)=>{var w,x,v;if(m!==0)r.getDay()===6&&o?r.setDate(r.getDate()+2):r.setDate(r.getDate()+1);else if(r.getDay()===0)return null;const g=Xe(a,r),C=S(r),k=r.getDay()===1&&C.getMonth()!==r.getMonth(),u=C.getMonth()===r.getMonth()&&m===0&&r.getDay()===1||r.getDay()===1&&r.getDate()===1;return n.jsxs(U.Fragment,{children:[(u||k)&&n.jsx(Pe,{children:Ce(k?S(r).toLocaleDateString("ru-RU",{month:"long"}):r.toLocaleDateString("ru-RU",{month:"long"}))}),n.jsxs(Ve,{disabled:i,onClick:h(g,ke(r)),children:[n.jsxs(Ye,{children:[n.jsxs(Ke,{isCurrentChosenDay:T(r,new Date),isCurrent:T(r,new Date),children:[je(r.getDate())," "]}),!l&&r.getDate()===1&&r.toLocaleDateString("ru-RU",{month:"short"})]}),!l&&n.jsxs(b,{d:"column",ai:"flex-start",gap:"0px",children:[g==null||(w=g.slice(0,I))===null||w===void 0?void 0:w.map(D=>n.jsx($e,F(A({},D),{onClick:s}),D.title+D.startTime+D.dateInterval)),((x=g==null?void 0:g.length)!==null&&x!==void 0?x:0)>I&&n.jsxs(K,{children:["И еще ",((v=g==null?void 0:g.length)!==null&&v!==void 0?v:0)-I]})]}),l&&n.jsx(J,{subjects:g})]})]},r.toLocaleDateString("ru-RU"))})})},E=U.memo(Ze),et=({events:e,startDate:t,endDate:a,onDayClick:o})=>{const s=new Date(t),i=new Date(a),r=q(s),l=i.getDay()!==0?S(i):i,c=j(s,i);return n.jsxs(qe,{children:[n.jsx(L,{showColumns:!1,events:null,onDayClick:o}),n.jsxs(Ge,{children:[n.jsx(E,{daysAmount:j(r,s)-1,startDate:r,events:e,disabled:!0,addOneOnWeekends:!1}),n.jsx(E,{daysAmount:c,startDate:s,events:e,addOneOnWeekends:!0}),n.jsx(E,{daysAmount:j(i,l)-1,startDate:new Date(i.getFullYear(),i.getMonth(),i.getDate()+1),events:e,disabled:!0,addOneOnWeekends:!1})]})]})},at=({events:e,view:t,showDates:a,startDate:o,endDate:s})=>{const[i,r]=y.useState(void 0),l=h=>{Ee.changeView(Me.day),r(h)},c=[n.jsx(Be,{currentChosenDay:i,events:e,interval:[9,22],showDates:a},"day"),n.jsx(Ue,{events:e,interval:[9,22],showDates:a,onDayClick:l},"week"),n.jsx(et,{events:e,startDate:o,endDate:s,onDayClick:l},"month")];return n.jsx(n.Fragment,{children:c[t]})};export{at as T};
