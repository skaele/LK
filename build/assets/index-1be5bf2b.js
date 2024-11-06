import{p as V,e as P,h as G,f as w,s as c,r as a,j as i,af as H,J as X,L as q}from"./vendor-48260ac4.js";import{$ as b,g as C,b as K,ai as B,X as F,l as N,an as O,L as A,S as R,ao as Q,d as Y,G as Z,a2 as ee,W as te,P as ie,p as se,x as ne,ap as oe}from"./index-835bf435.js";const M=()=>b.get(`?getNotification&token=${C()}`),ae=e=>b.get(`?viewNotification=${e}&token=${C()}`),re=Object.freeze(Object.defineProperty({__proto__:null,get:M,view:ae},Symbol.toStringTag,{value:"Module"})),U=()=>b.get(`?getDocList&token=${C()}`).then(e=>({...e,data:e.data.map(t=>({...t,document:!0}))})),ce=e=>b.get(`?viewDoc=${e}&token=${C()}`),le=Object.freeze(Object.defineProperty({__proto__:null,get:U,view:ce},Symbol.toStringTag,{value:"Module"})),_={type:null,personalNotifications:null,error:null,completed:!1},de=()=>({data:w(h).personalNotifications,loading:w(x.pending),error:w(h).error,completed:w(h).completed}),pe=()=>w(h).type,ue=V({name:"changeCompleted",sid:"vr0j8g"}),W=P(e=>e,{name:"setNotificationsType",sid:"-m97y8b"}),x=P(async()=>{const{type:e}=h.getState();if(e==="notifications")try{return(await M()).data}catch(t){throw new Error(t)}try{return{docs:(await U()).data}}catch(t){throw new Error(t)}},{name:"getPersonalNotificationsFx",sid:"pa84d1"}),S=P(async e=>{const{type:t}=h.getState(),n=t==="notifications"?re:le;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}},{name:"viewPersonalNotificationsFx",sid:"-64tonw"}),h=G(_,{name:"$personalNotificationsStore",sid:"53pwkb"}).on(W,(e,t)=>({...e,type:t})).on(x,e=>({...e,error:null})).on(x.doneData,(e,t)=>({...e,personalNotifications:t})).on(x.failData,(e,t)=>({...e,error:t.message})).on(S.doneData,e=>({...e})).on(S.failData,(e,t)=>({...e,error:t.message})).on(ue,(e,t)=>({...e,completed:t.completed})).on(K.userGuid,()=>({..._}));S.doneData.watch(()=>x());const z={usePersonalNotifications:de,useType:pe},g={setNotificationsType:W,getPersonalNotificationsFx:x,viewPersonalNotificationsFx:S},fe=(e,t,n)=>{const s={};let r=[];const o=l=>{if("document"in l){const{viewed:f,name:m}=l,y=(m==null?void 0:m.includes(e))||!e.length;return t==="all"&&y?!0:!f&&t!=="all"&&y}const{viewed:p,post:u,event:d}=l,v=(d==null?void 0:d.includes(e))||(u==null?void 0:u.includes(e))||!e.length;return t==="all"&&v?!0:!p&&t!=="all"&&v};return Object.entries(n).map(([l,p])=>{r=[],p.map(u=>{o(u)&&r.push(u)}),s[l]=r}),s},k=(e,t,n)=>{switch(e){case"Female":return n;default:return t}},ge=c.div.withConfig({componentId:"sc-1g1tw42-0"})(["display:flex;width:100%;align-items:center;justify-content:space-between;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;@media (max-width:768px){flex-direction:column;}"]),xe=c.div.withConfig({componentId:"sc-1g1tw42-1"})(["width:100%;display:flex;flex-direction:column;gap:10px;"]),he=c.div.withConfig({componentId:"sc-1g1tw42-2"})(["display:flex;gap:10px;align-self:end;@media (max-width:768px){width:100%;gap:20px;}"]),me=c.div.withConfig({componentId:"sc-1g1tw42-3"})(["font-style:normal;font-weight:500;font-size:15px;line-height:18px;"]),we=({data:e})=>{const{data:{user:t}}=B.useUser(),[n,s]=a.useState(!1),[r,o]=a.useState(!1);return i.jsxs(ge,{children:[i.jsxs(xe,{children:[i.jsx(me,{children:e.event||e.post}),e.startDate&&e.endDate!=="0000-00-00"?i.jsxs(F,{children:["Период: ",N(e.startDate,"numeric")," - ",N(e.endDate,"numeric")]}):i.jsxs(F,{children:["Дата: ",N(e.startDate,"numeric")]})]}),i.jsxs(he,{children:[e.file&&i.jsx(O,{href:e.file,onClick:()=>null,text:"Скачать",width:"150px",icon:i.jsx(H,{}),height:"35px",minHeight:"30px",background:A.grey.transparent2}),i.jsx(R,{text:e.viewed?k(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{s(!0),g.viewPersonalNotificationsFx(e.id),s(!1),o(!0)},height:"35px",width:"150px",buttonSuccessText:k(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:r,setCompleted:o,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},ve=c.div.withConfig({componentId:"sc-168uakk-0"})(["width:100%;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);row-gap:20px;min-height:70px;display:flex;flex-direction:column;align-items:flex-end;"]),ye=c.div.withConfig({componentId:"sc-168uakk-1"})(["display:flex;flex-direction:column;gap:10px;width:100%;"]),je=c.div.withConfig({componentId:"sc-168uakk-2"})(["display:flex;gap:8px;margin-top:5px;width:300px;@media (max-width:768px){max-width:100%;width:100%;}"]),Ne=c.div.withConfig({componentId:"sc-168uakk-3"})(["font-style:normal;font-weight:500;font-size:15px;line-height:18px;"]),Se=({data:e})=>{const{data:{user:t}}=B.useUser(),[n,s]=a.useState(!1),[r,o]=a.useState(!1),l=()=>{try{s(!0),g.viewPersonalNotificationsFx(e.id),Q.clearById({id:`studdoc-${e.id}`,pageId:"doclist"}),s(!1),o(!0)}catch{Y.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return i.jsxs(ve,{children:[i.jsxs(ye,{children:[i.jsx(Ne,{children:e.name}),e.date&&i.jsxs(F,{children:["Дата: ",N(e.date,"numeric")]})]}),i.jsxs(je,{children:[e.link&&i.jsx(O,{href:e.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:i.jsx(X,{}),height:"35px",minHeight:"30px",background:A.grey.transparent2}),i.jsx(R,{text:e.viewed?k(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:l,height:"35px",width:"100%",buttonSuccessText:k(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:r,setCompleted:o,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},I=({listNotification:e})=>{const t=z.useType();return i.jsx(Z,{d:"column",gap:"8px",children:e.length?e.map(n=>t==="notifications"?i.jsx(we,{data:n},n.id):i.jsx(Se,{data:n},n.id)):i.jsx(ee,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},ke=c.div.withConfig({componentId:"sc-xrueg0-0"})(["display:flex;justify-content:center;gap:10px;width:100%;"]),be=c.div.withConfig({componentId:"sc-xrueg0-1"})([".slider-list-notification{margin-top:12px;width:100%;}"]),Ce=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],De=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],Pe=({docsType:e})=>{const{data:t,error:n}=z.usePersonalNotifications(),[s,r]=a.useState(),[o,l]=a.useState("docs"),[p,u]=a.useState(""),[d,v]=a.useState({id:"all",title:"Все"}),[f,m]=a.useState({id:"all",title:"Все"});a.useEffect(()=>{r(JSON.parse(JSON.stringify(t)))},[t]),a.useEffect(()=>{t&&r(fe(p,(d==null?void 0:d.id)??"",JSON.parse(JSON.stringify(t))))},[d,p]),a.useEffect(()=>{g.setNotificationsType(o),g.getPersonalNotificationsFx()},[o]);const y=j=>{l(j)},L=a.useMemo(()=>{const j=(t==null?void 0:t.vacation)||[],$=(t==null?void 0:t.businesstrip)||[],E=(t==null?void 0:t.fire)||[];switch(f==null?void 0:f.id){case"all":return[...j,...$,...E].sort((D,T)=>{const J=D.notificationType==="docs"?new Date(D.date):new Date(D.startDate||"");return(T.notificationType==="docs"?new Date(T.date):new Date(T.startDate||"")).getTime()<J.getTime()?-1:1});case"vacation":return j;case"fire":return E;case"businesstrip":return $;default:return[]}},[t,f]);return i.jsx(te,{load:()=>{g.setNotificationsType(o),g.getPersonalNotificationsFx()},error:n,data:s,children:i.jsx(be,{children:i.jsxs(ie,{children:[i.jsxs(ke,{children:[i.jsx(se,{value:p,setValue:u,placeholder:"Поиск",leftIcon:i.jsx(q,{})}),i.jsx(ne,{items:o==="notifications"?De:Ce,selected:o==="notifications"?f:d,setSelected:o==="notifications"?m:v})]}),e&&(s!=null&&s.docs)?i.jsx(I,{listNotification:s==null?void 0:s.docs}):i.jsx(oe,{onChangePage:y,pages:[{id:"docs",title:"Приказы",content:(s==null?void 0:s.docs)&&i.jsx(I,{listNotification:s==null?void 0:s.docs})},{id:"notifications",title:"Кадровые уведомления",content:L.length?i.jsx(I,{listNotification:L}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})};export{Pe as N};
