import{p as oe,e as z,h as ne,f as k,s as p,r as d,j as t,af as ie,J as re,n as M,a5 as ae,cM as ce,L as le}from"./vendor-0d3de025.js";import{$ as C,g as $,b as de,ai as J,X as x,l as g,an as H,L as m,S as G,ao as pe,d as ue,G as P,a2 as E,ap as h,aq as q,ar as fe,as as xe,h as T,at as he,au as _,q as U,av as ge,aw as me,ax as W,V as we,W as ve,P as je,p as Se,x as ye,ay as Te,az as ke}from"./index-1f51b962.js";import{D as Ne}from"./dev-mode-message-d11b02ee.js";const X=()=>C.get(`?getNotification&token=${$()}`),be=e=>C.get(`?viewNotification=${e}&token=${$()}`),De=Object.freeze(Object.defineProperty({__proto__:null,get:X,view:be},Symbol.toStringTag,{value:"Module"})),Y=()=>C.get(`?getDocList&token=${$()}`).then(e=>({...e,data:e.data.map(s=>({...s,document:!0}))})),Ce=e=>C.get(`?viewDoc=${e}&token=${$()}`),$e=Object.freeze(Object.defineProperty({__proto__:null,get:Y,view:Ce},Symbol.toStringTag,{value:"Module"})),V={type:null,personalNotifications:null,error:null,completed:!1},Ie=()=>({data:k(S).personalNotifications,loading:k(j.pending),error:k(S).error,completed:k(S).completed}),Fe=()=>k(S).type,Ae=oe({name:"changeCompleted",sid:"vr0j8g"}),K=z(e=>e,{name:"setNotificationsType",sid:"-m97y8b"}),j=z(async()=>{const{type:e}=S.getState();if(e==="notifications")try{return(await X()).data}catch(s){throw new Error(s)}try{return{docs:(await Y()).data}}catch(s){throw new Error(s)}},{name:"getPersonalNotificationsFx",sid:"pa84d1"}),b=z(async e=>{const{type:s}=S.getState(),o=s==="notifications"?De:$e;try{return await o.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}},{name:"viewPersonalNotificationsFx",sid:"-64tonw"}),S=ne(V,{name:"$personalNotificationsStore",sid:"53pwkb"}).on(K,(e,s)=>({...e,type:s})).on(j,e=>({...e,error:null})).on(j.doneData,(e,s)=>({...e,personalNotifications:s})).on(j.failData,(e,s)=>({...e,error:s.message})).on(b.doneData,e=>({...e})).on(b.failData,(e,s)=>({...e,error:s.message})).on(Ae,(e,s)=>({...e,completed:s.completed})).on(de.userGuid,()=>({...V}));b.doneData.watch(()=>j());const Z={usePersonalNotifications:Ie,useType:Fe},v={setNotificationsType:K,getPersonalNotificationsFx:j,viewPersonalNotificationsFx:b},Le=(e,s,o)=>{const a={};let i=[];const r=n=>{if("document"in n){const{viewed:I,name:f}=n,N=(f==null?void 0:f.includes(e))||!e.length;return s==="all"&&N?!0:!I&&s!=="all"&&N}const{viewed:c,post:l,event:y}=n,u=(y==null?void 0:y.includes(e))||(l==null?void 0:l.includes(e))||!e.length;return s==="all"&&u?!0:!c&&s!=="all"&&u};return Object.entries(o).map(([n,c])=>{i=[],c.map(l=>{r(l)&&i.push(l)}),a[n]=i}),a},D=(e,s,o)=>{switch(e){case"Female":return o;default:return s}},Q=p.div.withConfig({componentId:"sc-rnm93p-0"})(["display:flex;flex-direction:column;gap:10px;width:100%;"]),ee=p.div.withConfig({componentId:"sc-rnm93p-1"})(["font-style:normal;font-weight:500;font-size:15px;line-height:18px;"]),Me=p.div.withConfig({componentId:"sc-1g1tw42-0"})(["display:flex;width:100%;align-items:center;justify-content:space-between;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;@media (max-width:768px){flex-direction:column;}"]),Pe=p.div.withConfig({componentId:"sc-1g1tw42-1"})(["display:flex;gap:10px;align-self:end;@media (max-width:768px){width:100%;gap:20px;}"]),Ee=({data:e})=>{const{data:{user:s}}=J.useUser(),[o,a]=d.useState(!1),[i,r]=d.useState(!1);return t.jsxs(Me,{children:[t.jsxs(Q,{children:[t.jsx(ee,{children:e.event||e.post}),e.startDate&&e.endDate!=="0000-00-00"?t.jsxs(x,{children:["Период: ",g(e.startDate,"numeric")," - ",g(e.endDate,"numeric")]}):t.jsxs(x,{children:["Дата: ",g(e.startDate,"numeric")]})]}),t.jsxs(Pe,{children:[e.file&&t.jsx(H,{href:e.file,onClick:()=>null,text:"Скачать",width:"150px",icon:t.jsx(ie,{}),height:"35px",minHeight:"30px",background:m.grey.transparent2}),t.jsx(G,{text:e.viewed?D(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{a(!0),v.viewPersonalNotificationsFx(e.id),a(!1),r(!0)},height:"35px",width:"150px",buttonSuccessText:D(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"),isLoading:o,completed:i,setCompleted:r,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},ze=p.div.withConfig({componentId:"sc-168uakk-0"})(["width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;display:flex;flex-direction:column;align-items:flex-end;"]),Oe=p.div.withConfig({componentId:"sc-168uakk-1"})(["display:flex;gap:8px;margin-top:5px;width:300px;@media (max-width:768px){max-width:100%;width:100%;}"]),Be=({data:e})=>{const{data:{user:s}}=J.useUser(),[o,a]=d.useState(!1),[i,r]=d.useState(!1),n=()=>{try{a(!0),v.viewPersonalNotificationsFx(e.id),pe.clearById({id:`studdoc-${e.id}`,pageId:"doclist"}),a(!1),r(!0)}catch{ue.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return t.jsxs(ze,{children:[t.jsxs(Q,{children:[t.jsx(ee,{children:e.name}),e.date&&t.jsxs(x,{children:["Дата: ",g(e.date,"numeric")]})]}),t.jsxs(Oe,{children:[e.link&&t.jsx(H,{href:e.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:t.jsx(re,{}),height:"35px",minHeight:"30px",background:m.grey.transparent2}),t.jsx(G,{text:e.viewed?D(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:n,height:"35px",width:"100%",buttonSuccessText:D(s==null?void 0:s.sex,"Ознакомлен","Ознакомлена"),isLoading:o,completed:i,setCompleted:r,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},L=({listNotification:e})=>{const s=Z.useType();return t.jsx(P,{d:"column",gap:"8px",children:e.length?e.map(o=>s==="notifications"?t.jsx(Ee,{data:o},o.id):t.jsx(Be,{data:o},o.id)):t.jsx(E,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},Re=e=>{const s=new Date().getTime()-new Date(e).getTime(),o=Math.floor(s/1e3);if(o<60&&o>=1)return`${o} ${h(o,_e)}`;const a=Math.floor(o/60);if(a<60&&a>=1)return`${a} ${h(a,Ue)}`;const i=Math.floor(a/60);if(i<24&&i>=1)return`${i} ${h(i,We)}`;const r=Math.floor(i/24);if(r>=1&&r<7)return`${r} ${h(r,Ve)}`;const n=Math.floor(r/7);if(n>=1&&n<4)return`${n} ${h(n,Je)}`;const c=Math.floor(r/30);if(c>=1&&c<12)return`${c} ${h(c,He)}`;const l=Math.floor(r/365);return`${l} ${h(l,Ge)}`},_e={zero:"секунд",one:"секунду",twoToFour:"секунды",fiveToNine:"секунд"},Ue={zero:"минут",one:"минута",twoToFour:"минуты",fiveToNine:"минут"},We={zero:"часов",one:"час",twoToFour:"часа",fiveToNine:"часов"},Ve={zero:"дней",one:"день",twoToFour:"дня",fiveToNine:"дней"},Je={zero:"недель",one:"неделя",twoToFour:"недели",fiveToNine:"недель"},He={zero:"месяцев",one:"месяц",twoToFour:"месяца",fiveToNine:"месяцев"},Ge={zero:"лет",one:"год",twoToFour:"года",fiveToNine:"лет"},qe=({allowance:e})=>{const s=M(q.allowanceStatusChanged),o=M(fe.userSettings);return e?t.jsxs(Xe,{children:[t.jsxs(xe,{children:[t.jsxs(T,{align:"left",size:3,children:[e.paymentIdentifier,", ",e.position]}),e.orderStatus&&e.selfApprovalStatus==="Approved"&&t.jsx(T,{align:"left",size:4,children:he[e.orderStatus]}),e.selfApprovalStatus==="Approved"&&t.jsx(x,{fontSize:"1em",color:"var(--greenMain)",children:_[e.selfApprovalStatus]}),(e.selfApprovalStatus==="Declined"||e.selfApprovalStatus==="Expired")&&t.jsx(x,{fontSize:"1em",color:"var(--redMain)",children:_[e.selfApprovalStatus]}),t.jsxs(T,{align:"left",size:5,children:["Инициатор: ",e.initiatorName]}),t.jsxs(T,{align:"left",size:5,children:["Источник: ",e.sourceOfFunding]}),t.jsxs(T,{align:"left",size:5,children:["Сумма: ",e.sum," руб."]}),t.jsxs(x,{children:["Период: ",g(e.startDate,"numeric")," -"," ",g(e.endDate,"numeric")," "]}),t.jsxs(x,{children:["Дата: ",g(e.issueDate,"numeric")]})]}),(e.selfApprovalStatus==="Unknown"||e.selfApprovalStatus==="InProgress")&&t.jsxs(t.Fragment,{children:[t.jsxs(Ye,{children:[t.jsx(U,{text:"Отказаться",onClick:()=>s({allowanceId:e.allowanceId,isConfirmed:!1}),background:m.red.main,textColor:"white",height:"35px",width:"100%",isActive:!0}),t.jsx(U,{text:"Согласиться",onClick:()=>s({allowanceId:e.allowanceId,isConfirmed:!0}),background:m.green.main,textColor:"white",height:"35px",width:"100%",isActive:!0})]}),t.jsx(Ke,{isLightTheme:(o==null?void 0:o.appearance.theme)===ge.Light,children:t.jsxs(x,{children:["Подтвердите надбавку в течение 1 дня."," ",me(e.confirmationEndDate)&&`Осталось ${Re(e.confirmationEndDate)}`]})})]})]}):null},Xe=p.div.withConfig({componentId:"sc-ceiafc-0"})(["position:relative;width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);min-height:70px;display:flex;flex-direction:column;align-items:flex-end;overflow:hidden;"]),Ye=p.div.withConfig({componentId:"sc-ceiafc-1"})(["display:flex;gap:8px;margin:0.5rem 0;width:300px;@media (max-width:768px){max-width:100%;width:100%;}@media (max-width:380px){margin:1.5rem 0;}"]),Ke=p.div.withConfig({componentId:"sc-ceiafc-2"})(["position:absolute;bottom:0;background-color:",";width:100%;color:",";left:0;text-align:center;"],m.orange.transparent3,({isLightTheme:e})=>e?m.orange.dark3:m.orange.light3),Ze=({searchQuery:e,filter:s})=>{const[o,a,i]=M([W.personalAllowances.data,W.personalAllowances.loading,q.personalAllowancesMounted]);d.useEffect(()=>{i()},[]);const r=d.useMemo(()=>{const n=e?o==null?void 0:o.filter(c=>c.position.includes(e)||c.paymentIdentifier.includes(e)||c.sourceOfFunding.includes(e)):o;return s&&(s==null?void 0:s.id)==="unread"?n==null?void 0:n.filter(c=>c.selfApprovalStatus==="Unknown"||c.selfApprovalStatus==="InProgress"):n},[o,e,s]);return a?t.jsx(P,{h:"100%",d:"column",ai:"center",jc:"center",children:t.jsx(we,{})}):t.jsxs(P,{d:"column",gap:"8px",p:"0.25rem",children:[t.jsx(Ne,{}),r?r.length>0?r.map(n=>t.jsx(qe,{allowance:n},n.allowanceId)):t.jsx(E,{text:"Нет надбавок"}):t.jsx(E,{text:"Произошла ошибка"})]})},Qe=p.div.withConfig({componentId:"sc-xrueg0-0"})(["display:flex;justify-content:center;gap:10px;width:100%;"]),et=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],tt=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],rt=({docsType:e})=>{const s=ae(),{type:o}=ce(),a=w=>s.push(ke+"/"+w),{data:i,error:r}=Z.usePersonalNotifications(),[n,c]=d.useState(),[l,y]=d.useState(""),[u,I]=d.useState({id:"all",title:"Все"}),[f,N]=d.useState({id:"all",title:"Все"});d.useEffect(()=>{c(JSON.parse(JSON.stringify(i)))},[i]),d.useEffect(()=>{i&&c(Le(l,(u==null?void 0:u.id)??"",JSON.parse(JSON.stringify(i))))},[u,l]),d.useEffect(()=>{v.setNotificationsType(o),v.getPersonalNotificationsFx()},[o]);const te=w=>{a(w)},O=d.useMemo(()=>{const w=(i==null?void 0:i.vacation)||[],B=(i==null?void 0:i.businesstrip)||[],R=(i==null?void 0:i.fire)||[];switch(f==null?void 0:f.id){case"all":return[...w,...B,...R].sort((F,A)=>{const se=F.notificationType==="docs"?new Date(F.date):new Date(F.startDate||"");return(A.notificationType==="docs"?new Date(A.date):new Date(A.startDate||"")).getTime()<se.getTime()?-1:1});case"vacation":return w;case"fire":return R;case"businesstrip":return B;default:return[]}},[i,f]);return t.jsx(ve,{load:()=>{v.setNotificationsType(o),v.getPersonalNotificationsFx()},error:r,data:n,children:t.jsxs(je,{children:[t.jsxs(Qe,{children:[t.jsx(Se,{value:l,setValue:y,placeholder:"Поиск",leftIcon:t.jsx(le,{})}),t.jsx(ye,{items:o==="notifications"?tt:et,selected:o==="notifications"?f:u,setSelected:o==="notifications"?N:I})]}),e?(n==null?void 0:n.docs)&&t.jsx(L,{listNotification:n==null?void 0:n.docs}):t.jsx(Te,{onChangePage:te,currentPage:o==="allowances"?2:o==="notifications"?1:0,pages:[{id:"docs",title:"Приказы",content:(n==null?void 0:n.docs)&&t.jsx(L,{listNotification:n==null?void 0:n.docs})},{id:"notifications",title:"Кадровые уведомления",content:O.length?t.jsx(L,{listNotification:O}):void 0},{id:"allowances",title:"Надбавки",content:t.jsx(Ze,{filter:u,searchQuery:l})}]})]})})};export{rt as N};
