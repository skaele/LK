var ce=Object.defineProperty,le=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var J=(e,t,i)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))ue.call(t,i)&&J(e,i,t[i]);if(V)for(var i of V(t))pe.call(t,i)&&J(e,i,t[i]);return e},m=(e,t)=>le(e,de(t));var E=(e,t,i)=>new Promise((l,n)=>{var r=c=>{try{a(i.next(c))}catch(h){n(h)}},s=c=>{try{a(i.throw(c))}catch(h){n(h)}},a=c=>c.done?l(c.value):Promise.resolve(c.value).then(r,s);a((i=i.apply(e,t)).next())});import{p as fe,e as R,h as he,f as k,s as f,r as d,j as o,af as xe,J as ge,q as z,a5 as me,cM as ve,L as we}from"./vendor-3c67dcca.js";import{$ as F,g as I,s as je,a9 as K,E as v,l as j,al as X,t as S,S as Z,b0 as Se,e as Ne,r as B,R as O,ak as w,au as Q,b1 as ye,b2 as be,T,az as Te,ay as H,B as G,b3 as ke,b4 as De,at as q,L as Ce,W as $e,N as Fe,d as Ie,m as Ae,ar as Le,b5 as Me}from"./index-09f1adfd.js";import{D as Ee}from"./dev-mode-message-ffd51f65.js";const ee=()=>F.get(`?getNotification&token=${I()}`),Pe=e=>F.get(`?viewNotification=${e}&token=${I()}`),ze=Object.freeze(Object.defineProperty({__proto__:null,get:ee,view:Pe},Symbol.toStringTag,{value:"Module"})),te=()=>F.get(`?getDocList&token=${I()}`).then(e=>m(u({},e),{data:e.data.map(t=>m(u({},t),{document:!0}))})),Be=e=>F.get(`?viewDoc=${e}&token=${I()}`),Oe=Object.freeze(Object.defineProperty({__proto__:null,get:te,view:Be},Symbol.toStringTag,{value:"Module"})),Y={type:null,personalNotifications:null,error:null,completed:!1},Re=()=>({data:k(b).personalNotifications,loading:k(y.pending),error:k(b).error,completed:k(b).completed}),_e=()=>k(b).type,Ue=fe({name:"changeCompleted",sid:"vr0j8g"}),oe=R(e=>e,{name:"setNotificationsType",sid:"-m97y8b"}),y=R(()=>E(void 0,null,function*(){const{type:e}=b.getState();if(e==="notifications")try{return(yield ee()).data}catch(t){throw new Error(t)}try{return{docs:(yield te()).data}}catch(t){throw new Error(t)}}),{name:"getPersonalNotificationsFx",sid:"pa84d1"}),C=R(e=>E(void 0,null,function*(){const{type:t}=b.getState(),i=t==="notifications"?ze:Oe;try{return yield i.view(e),"ok"}catch(l){throw new Error("Ошибка загрузки данных")}}),{name:"viewPersonalNotificationsFx",sid:"-64tonw"}),b=he(Y,{name:"$personalNotificationsStore",sid:"53pwkb"}).on(oe,(e,t)=>m(u({},e),{type:t})).on(y,e=>m(u({},e),{error:null})).on(y.doneData,(e,t)=>m(u({},e),{personalNotifications:t})).on(y.failData,(e,t)=>m(u({},e),{error:t.message})).on(C.doneData,e=>u({},e)).on(C.failData,(e,t)=>m(u({},e),{error:t.message})).on(Ue,(e,t)=>m(u({},e),{completed:t.completed})).on(je.userGuid,()=>u({},Y));C.doneData.watch(()=>y());const ie={usePersonalNotifications:Re,useType:_e},N={setNotificationsType:oe,getPersonalNotificationsFx:y,viewPersonalNotificationsFx:C},We=(e,t,i)=>{const l={};let n=[];const r=s=>{if("document"in s){const{viewed:A,name:g}=s,D=(g==null?void 0:g.includes(e))||!e.length;return t==="all"&&D?!0:!A&&t!=="all"&&D}const{viewed:a,post:c,event:h}=s,x=(h==null?void 0:h.includes(e))||(c==null?void 0:c.includes(e))||!e.length;return t==="all"&&x?!0:!a&&t!=="all"&&x};return Object.entries(i).map(([s,a])=>{n=[],a.map(c=>{r(c)&&n.push(c)}),l[s]=n}),l},$=(e,t,i)=>{switch(e){case"Female":return i;default:return t}},se=f.div.withConfig({componentId:"sc-rnm93p-0"})(["display:flex;flex-direction:column;gap:10px;width:100%;"]),ne=f.div.withConfig({componentId:"sc-rnm93p-1"})(["font-style:normal;font-weight:500;font-size:15px;line-height:18px;"]),Ve=f.div.withConfig({componentId:"sc-1g1tw42-0"})(["display:flex;width:100%;align-items:center;justify-content:space-between;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;@media (max-width:768px){flex-direction:column;}"]),Je=f.div.withConfig({componentId:"sc-1g1tw42-1"})(["display:flex;gap:10px;align-self:end;@media (max-width:768px){width:100%;gap:20px;}"]),He=({data:e})=>{const{data:{user:t}}=K.useUser(),[i,l]=d.useState(!1),[n,r]=d.useState(!1);return o.jsxs(Ve,{children:[o.jsxs(se,{children:[o.jsx(ne,{children:e.event||e.post}),e.startDate&&e.endDate!=="0000-00-00"?o.jsxs(v,{children:["Период: ",j(e.startDate,"numeric")," - ",j(e.endDate,"numeric")]}):o.jsxs(v,{children:["Дата: ",j(e.startDate,"numeric")]})]}),o.jsxs(Je,{children:[e.file&&o.jsx(X,{href:e.file,onClick:()=>null,text:"Скачать",width:"150px",icon:o.jsx(xe,{}),height:"35px",minHeight:"30px",background:S.grey.transparent2}),o.jsx(Z,{text:e.viewed?$(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{l(!0),N.viewPersonalNotificationsFx(e.id),l(!1),r(!0)},height:"35px",width:"150px",buttonSuccessText:$(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:i,completed:n,setCompleted:r,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},Ge=f.div.withConfig({componentId:"sc-168uakk-0"})(["width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;display:flex;flex-direction:column;align-items:flex-end;"]),qe=f.div.withConfig({componentId:"sc-168uakk-1"})(["display:flex;gap:8px;margin-top:5px;width:300px;@media (max-width:768px){max-width:100%;width:100%;}"]),Ye=({data:e})=>{const{data:{user:t}}=K.useUser(),[i,l]=d.useState(!1),[n,r]=d.useState(!1),s=()=>{try{l(!0),N.viewPersonalNotificationsFx(e.id),Se.clearById({id:`studdoc-${e.id}`,pageId:"doclist"}),l(!1),r(!0)}catch(a){Ne.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return o.jsxs(Ge,{children:[o.jsxs(se,{children:[o.jsx(ne,{children:e.name}),e.date&&o.jsxs(v,{children:["Дата: ",j(e.date,"numeric")]})]}),o.jsxs(qe,{children:[e.link&&o.jsx(X,{href:e.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:o.jsx(ge,{}),height:"35px",minHeight:"30px",background:S.grey.transparent2}),o.jsx(Z,{text:e.viewed?$(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:s,height:"35px",width:"100%",buttonSuccessText:$(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:i,completed:n,setCompleted:r,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},P=({listNotification:e})=>{const t=ie.useType();return o.jsx(B,{d:"column",gap:"8px",children:e.length?e.map(i=>t==="notifications"?o.jsx(He,{data:i},i.id):o.jsx(Ye,{data:i},i.id)):o.jsx(O,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},Ke=e=>{const t=new Date().getTime()-new Date(e).getTime(),i=Math.floor(t/1e3);if(i<60&&i>=1)return`${i} ${w(i,Xe)}`;const l=Math.floor(i/60);if(l<60&&l>=1)return`${l} ${w(l,Ze)}`;const n=Math.floor(l/60);if(n<24&&n>=1)return`${n} ${w(n,Qe)}`;const r=Math.floor(n/24);if(r>=1&&r<7)return`${r} ${w(r,et)}`;const s=Math.floor(r/7);if(s>=1&&s<4)return`${s} ${w(s,tt)}`;const a=Math.floor(r/30);if(a>=1&&a<12)return`${a} ${w(a,ot)}`;const c=Math.floor(r/365);return`${c} ${w(c,it)}`},Xe={zero:"секунд",one:"секунду",twoToFour:"секунды",fiveToNine:"секунд"},Ze={zero:"минут",one:"минута",twoToFour:"минуты",fiveToNine:"минут"},Qe={zero:"часов",one:"час",twoToFour:"часа",fiveToNine:"часов"},et={zero:"дней",one:"день",twoToFour:"дня",fiveToNine:"дней"},tt={zero:"недель",one:"неделя",twoToFour:"недели",fiveToNine:"недель"},ot={zero:"месяцев",one:"месяц",twoToFour:"месяца",fiveToNine:"месяцев"},it={zero:"лет",one:"год",twoToFour:"года",fiveToNine:"лет"},st=({allowance:e})=>{const t=z(Q.allowanceStatusChanged),i=z(ye.userSettings);return e?o.jsxs(nt,{children:[o.jsxs(be,{children:[o.jsxs(T,{align:"left",size:3,children:[e.paymentIdentifier,", ",e.position]}),e.orderStatus&&e.selfApprovalStatus==="Approved"&&o.jsx(T,{align:"left",size:4,children:Te[e.orderStatus]}),e.selfApprovalStatus==="Approved"&&o.jsx(v,{fontSize:"1em",color:"var(--greenMain)",children:H[e.selfApprovalStatus]}),(e.selfApprovalStatus==="Declined"||e.selfApprovalStatus==="Expired")&&o.jsx(v,{fontSize:"1em",color:"var(--redMain)",children:H[e.selfApprovalStatus]}),o.jsxs(T,{align:"left",size:5,children:["Инициатор: ",e.initiatorName]}),o.jsxs(T,{align:"left",size:5,children:["Источник: ",e.sourceOfFunding]}),o.jsxs(T,{align:"left",size:5,children:["Сумма: ",e.sum," руб."]}),o.jsxs(v,{children:["Период: ",j(e.startDate,"numeric")," -"," ",j(e.endDate,"numeric")," "]}),o.jsxs(v,{children:["Дата: ",j(e.issueDate,"numeric")]})]}),(e.selfApprovalStatus==="Unknown"||e.selfApprovalStatus==="InProgress")&&o.jsxs(o.Fragment,{children:[o.jsxs(rt,{children:[o.jsx(G,{text:"Отказаться",onClick:()=>t({allowanceId:e.allowanceId,isConfirmed:!1}),background:S.red.main,textColor:"white",height:"35px",width:"100%",isActive:!0}),o.jsx(G,{text:"Согласиться",onClick:()=>t({allowanceId:e.allowanceId,isConfirmed:!0}),background:S.green.main,textColor:"white",height:"35px",width:"100%",isActive:!0})]}),o.jsx(at,{isLightTheme:(i==null?void 0:i.appearance.theme)===ke.Light,children:o.jsxs(v,{children:["Подтвердите надбавку в течение 1 дня."," ",De(e.confirmationEndDate)&&`Осталось ${Ke(e.confirmationEndDate)}`]})})]})]}):null},nt=f.div.withConfig({componentId:"sc-ceiafc-0"})(["position:relative;width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);min-height:70px;display:flex;flex-direction:column;align-items:flex-end;overflow:hidden;"]),rt=f.div.withConfig({componentId:"sc-ceiafc-1"})(["display:flex;gap:8px;margin:0.5rem 0;width:300px;@media (max-width:768px){max-width:100%;width:100%;}@media (max-width:380px){margin:1.5rem 0;}"]),at=f.div.withConfig({componentId:"sc-ceiafc-2"})(["position:absolute;bottom:0;background-color:",";width:100%;color:",";left:0;text-align:center;"],S.orange.transparent3,({isLightTheme:e})=>e?S.orange.dark3:S.orange.light3),ct=({searchQuery:e,filter:t})=>{const[i,l,n]=z([q.personalAllowances.data,q.personalAllowances.loading,Q.personalAllowancesMounted]);d.useEffect(()=>{n()},[]);const r=d.useMemo(()=>{const s=e?i==null?void 0:i.filter(a=>a.position.includes(e)||a.paymentIdentifier.includes(e)||a.sourceOfFunding.includes(e)):i;return t&&(t==null?void 0:t.id)==="unread"?s==null?void 0:s.filter(a=>a.selfApprovalStatus==="Unknown"||a.selfApprovalStatus==="InProgress"):s},[i,e,t]);return l?o.jsx(B,{h:"100%",d:"column",ai:"center",jc:"center",children:o.jsx(Ce,{})}):o.jsxs(B,{d:"column",gap:"8px",p:"0.25rem",children:[o.jsx(Ee,{}),r?r.length>0?r.map(s=>o.jsx(st,{allowance:s},s.allowanceId)):o.jsx(O,{text:"Нет надбавок"}):o.jsx(O,{text:"Произошла ошибка"})]})},lt=f.div.withConfig({componentId:"sc-xrueg0-0"})(["display:flex;justify-content:center;gap:10px;width:100%;"]),dt=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],ut=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],mt=({docsType:e})=>{const t=me(),{type:i}=ve(),l=p=>t.push(Me+"/"+p),{data:n,error:r}=ie.usePersonalNotifications(),[s,a]=d.useState(),[c,h]=d.useState(""),[x,A]=d.useState({id:"all",title:"Все"}),[g,D]=d.useState({id:"all",title:"Все"});d.useEffect(()=>{a(JSON.parse(JSON.stringify(n)))},[n]),d.useEffect(()=>{if(n){var p;a(We(c,(p=x==null?void 0:x.id)!==null&&p!==void 0?p:"",JSON.parse(JSON.stringify(n))))}},[x,c]),d.useEffect(()=>{N.setNotificationsType(i),N.getPersonalNotificationsFx()},[i]);const re=p=>{l(p)},_=d.useMemo(()=>{const p=(n==null?void 0:n.vacation)||[],U=(n==null?void 0:n.businesstrip)||[],W=(n==null?void 0:n.fire)||[];switch(g==null?void 0:g.id){case"all":return[...p,...U,...W].sort((L,M)=>{const ae=L.notificationType==="docs"?new Date(L.date):new Date(L.startDate||"");return(M.notificationType==="docs"?new Date(M.date):new Date(M.startDate||"")).getTime()<ae.getTime()?-1:1});case"vacation":return p;case"fire":return W;case"businesstrip":return U;default:return[]}},[n,g]);return o.jsx($e,{load:()=>{N.setNotificationsType(i),N.getPersonalNotificationsFx()},error:r,data:s,children:o.jsxs(Fe,{children:[o.jsxs(lt,{children:[o.jsx(Ie,{value:c,setValue:h,placeholder:"Поиск",leftIcon:o.jsx(we,{})}),o.jsx(Ae,{items:i==="notifications"?ut:dt,selected:i==="notifications"?g:x,setSelected:i==="notifications"?D:A})]}),e?(s==null?void 0:s.docs)&&o.jsx(P,{listNotification:s==null?void 0:s.docs}):o.jsx(Le,{onChangePage:re,currentPage:i==="allowances"?2:i==="notifications"?1:0,pages:[{id:"docs",title:"Приказы",content:(s==null?void 0:s.docs)&&o.jsx(P,{listNotification:s==null?void 0:s.docs})},{id:"notifications",title:"Кадровые уведомления",content:_.length?o.jsx(P,{listNotification:_}):void 0},{id:"allowances",title:"Надбавки",content:o.jsx(ct,{filter:x,searchQuery:c})}]})]})})};export{mt as N};
