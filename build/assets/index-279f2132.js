import{p as V,e as C,h as G,f as w,s as c,r as a,j as s,ac as H,E as Y,G as q}from"./vendor-ab783af7.js";import{$ as D,g as k,b as K,a2 as O,O as P,l as N,a7 as B,J as A,S as R,a8 as Q,d as X,E as Z,Y as ee,W as te,P as se,n as ie,r as ne,a9 as oe}from"./index-07cca455.js";const M=()=>D.get(`?getNotification&token=${k()}`),ae=e=>D.get(`?viewNotification=${e}&token=${k()}`),re=Object.freeze(Object.defineProperty({__proto__:null,get:M,view:ae},Symbol.toStringTag,{value:"Module"})),U=()=>D.get(`?getDocList&token=${k()}`).then(e=>({...e,data:e.data.map(t=>({...t,document:!0}))})),ce=e=>D.get(`?viewDoc=${e}&token=${k()}`),le=Object.freeze(Object.defineProperty({__proto__:null,get:U,view:ce},Symbol.toStringTag,{value:"Module"})),I={type:null,personalNotifications:null,error:null,completed:!1},de=()=>({data:w(h).personalNotifications,loading:w(g.pending),error:w(h).error,completed:w(h).completed}),pe=()=>w(h).type,ue=V(),W=C(e=>e),g=C(async()=>{const{type:e}=h.getState();if(e==="notifications")try{return(await M()).data}catch(t){throw new Error(t)}try{return{docs:(await U()).data}}catch(t){throw new Error(t)}}),S=C(async e=>{const{type:t}=h.getState(),n=t==="notifications"?re:le;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),h=G(I).on(W,(e,t)=>({...e,type:t})).on(g,e=>({...e,error:null})).on(g.doneData,(e,t)=>({...e,personalNotifications:t})).on(g.failData,(e,t)=>({...e,error:t.message})).on(S.doneData,e=>({...e})).on(S.failData,(e,t)=>({...e,error:t.message})).on(ue,(e,t)=>({...e,completed:t.completed})).on(K.userGuid,()=>({...I}));S.doneData.watch(()=>g());const z={usePersonalNotifications:de,useType:pe},f={setNotificationsType:W,getPersonalNotificationsFx:g,viewPersonalNotificationsFx:S},xe=(e,t,n)=>{const i={};let r=[];const o=l=>{if("document"in l){const{viewed:x,name:m}=l,y=(m==null?void 0:m.includes(e))||!e.length;return t==="all"&&y?!0:!x&&t!=="all"&&y}const{viewed:p,post:u,event:d}=l,v=(d==null?void 0:d.includes(e))||(u==null?void 0:u.includes(e))||!e.length;return t==="all"&&v?!0:!p&&t!=="all"&&v};return Object.entries(n).map(([l,p])=>{r=[],p.map(u=>{o(u)&&r.push(u)}),i[l]=r}),i},b=(e,t,n)=>{switch(e){case"Female":return n;default:return t}},fe=c.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    row-gap: 20px;
    min-height: 70px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,ge=c.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,he=c.div`
    display: flex;
    gap: 10px;
    align-self: end;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`,me=c.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,we=({data:e})=>{const{data:{user:t}}=O.useUser(),[n,i]=a.useState(!1),[r,o]=a.useState(!1);return s.jsxs(fe,{children:[s.jsxs(ge,{children:[s.jsx(me,{children:e.event||e.post}),e.startDate&&e.endDate!=="0000-00-00"?s.jsxs(P,{children:["Период: ",N(e.startDate,"numeric")," - ",N(e.endDate,"numeric")]}):s.jsxs(P,{children:["Дата: ",N(e.startDate,"numeric")]})]}),s.jsxs(he,{children:[e.file&&s.jsx(B,{href:e.file,onClick:()=>null,text:"Скачать",width:"150px",icon:s.jsx(H,{}),height:"35px",minHeight:"30px",background:A.grey.transparent2}),s.jsx(R,{text:e.viewed?b(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{i(!0),f.viewPersonalNotificationsFx(e.id),i(!1),o(!0)},height:"35px",width:"150px",buttonSuccessText:b(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:r,setCompleted:o,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},ve=c.div`
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    row-gap: 20px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,ye=c.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,je=c.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
    width: 300px;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`,Ne=c.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,Se=({data:e})=>{const{data:{user:t}}=O.useUser(),[n,i]=a.useState(!1),[r,o]=a.useState(!1),l=()=>{try{i(!0),f.viewPersonalNotificationsFx(e.id),Q.clearById({id:`studdoc-${e.id}`,pageId:"doclist"}),i(!1),o(!0)}catch{X.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return s.jsxs(ve,{children:[s.jsxs(ye,{children:[s.jsx(Ne,{children:e.name}),e.date&&s.jsxs(P,{children:["Дата: ",N(e.date,"numeric")]})]}),s.jsxs(je,{children:[e.link&&s.jsx(B,{href:e.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:s.jsx(Y,{}),height:"35px",minHeight:"30px",background:A.grey.transparent2}),s.jsx(R,{text:e.viewed?b(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:l,height:"35px",width:"100%",buttonSuccessText:b(t==null?void 0:t.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:r,setCompleted:o,isActive:!0,isDone:e.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},E=({listNotification:e})=>{const t=z.useType();return s.jsx(Z,{d:"column",gap:"8px",children:e.length?e.map(n=>t==="notifications"?s.jsx(we,{data:n},n.id):s.jsx(Se,{data:n},n.id)):s.jsx(ee,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},be=c.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`,De=c.div`
    .slider-list-notification {
        margin-top: 12px;
        width: 100%;
    }
`,ke=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],Te=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],Ce=({docsType:e})=>{const{data:t,error:n}=z.usePersonalNotifications(),[i,r]=a.useState(),[o,l]=a.useState("docs"),[p,u]=a.useState(""),[d,v]=a.useState({id:"all",title:"Все"}),[x,m]=a.useState({id:"all",title:"Все"});a.useEffect(()=>{r(JSON.parse(JSON.stringify(t)))},[t]),a.useEffect(()=>{t&&r(xe(p,(d==null?void 0:d.id)??"",JSON.parse(JSON.stringify(t))))},[d,p]),a.useEffect(()=>{f.setNotificationsType(o),f.getPersonalNotificationsFx()},[o]);const y=j=>{l(j)},$=a.useMemo(()=>{const j=(t==null?void 0:t.vacation)||[],L=(t==null?void 0:t.businesstrip)||[],_=(t==null?void 0:t.fire)||[];switch(x==null?void 0:x.id){case"all":return[...j,...L,..._].sort((T,F)=>{const J=T.notificationType==="docs"?new Date(T.date):new Date(T.startDate||"");return(F.notificationType==="docs"?new Date(F.date):new Date(F.startDate||"")).getTime()<J.getTime()?-1:1});case"vacation":return j;case"fire":return _;case"businesstrip":return L;default:return[]}},[t,x]);return s.jsx(te,{load:()=>{f.setNotificationsType(o),f.getPersonalNotificationsFx()},error:n,data:i,children:s.jsx(De,{children:s.jsxs(se,{children:[s.jsxs(be,{children:[s.jsx(ie,{value:p,setValue:u,placeholder:"Поиск",leftIcon:s.jsx(q,{})}),s.jsx(ne,{items:o==="notifications"?Te:ke,selected:o==="notifications"?x:d,setSelected:o==="notifications"?m:v})]}),e&&(i!=null&&i.docs)?s.jsx(E,{listNotification:i==null?void 0:i.docs}):s.jsx(oe,{onChangePage:y,pages:[{id:"docs",title:"Приказы",content:(i==null?void 0:i.docs)&&s.jsx(E,{listNotification:i==null?void 0:i.docs})},{id:"notifications",title:"Кадровые уведомления",content:$.length?s.jsx(E,{listNotification:$}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})};export{Ce as N};
