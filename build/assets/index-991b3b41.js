import{s as r,r as a,j as i,V as P,n as O,q as R}from"./vendor-f1fdae2f.js";import{V as C,X as b,l as v,Y as F,E as I,S as L,Z as h,_ as V,a as W,a0 as B,r as _,G as A,W as U,w as J,g as M,i as $,a1 as z}from"./index-751fe807.js";const G=(t,e,n)=>{const s={};let c=[];const o=l=>{if("document"in l){const{viewed:u,name:f}=l,m=(f==null?void 0:f.includes(t))||!t.length;return e==="all"&&m?!0:!u&&e!=="all"&&m}const{viewed:p,post:x,event:d}=l,g=(d==null?void 0:d.includes(t))||(x==null?void 0:x.includes(t))||!t.length;return e==="all"&&g?!0:!p&&e!=="all"&&g};return Object.entries(n).map(([l,p])=>{c=[],p.map(x=>{o(x)&&c.push(x)}),s[l]=c}),s},j=(t,e,n)=>{switch(t){case"Female":return n;default:return e}},H=r.div`
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
`,q=r.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,X=r.div`
    display: flex;
    gap: 10px;
    align-self: end;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`,Y=r.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,Z=({data:t})=>{const{data:{user:e}}=C.useUser(),[n,s]=a.useState(!1),[c,o]=a.useState(!1);return i.jsxs(H,{children:[i.jsxs(q,{children:[i.jsx(Y,{children:t.event||t.post}),t.startDate&&t.endDate!=="0000-00-00"?i.jsxs(b,{children:["Период: ",v(t.startDate,"numeric")," - ",v(t.endDate,"numeric")]}):i.jsxs(b,{children:["Дата: ",v(t.startDate,"numeric")]})]}),i.jsxs(X,{children:[t.file&&i.jsx(F,{href:t.file,onClick:()=>null,text:"Скачать",width:"150px",icon:i.jsx(P,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),i.jsx(L,{text:t.viewed?j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{s(!0),h.viewPersonalNotificationsFx(t.id),s(!1),o(!0)},height:"35px",width:"150px",buttonSuccessText:j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:c,setCompleted:o,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},K=r.div`
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
`,Q=r.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,ee=r.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
    width: 300px;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`,te=r.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,ie=({data:t})=>{const{data:{user:e}}=C.useUser(),[n,s]=a.useState(!1),[c,o]=a.useState(!1),l=()=>{try{s(!0),h.viewPersonalNotificationsFx(t.id),V.clearById({id:`studdoc-${t.id}`,pageId:"doclist"}),s(!1),o(!0)}catch{W.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return i.jsxs(K,{children:[i.jsxs(Q,{children:[i.jsx(te,{children:t.name}),t.date&&i.jsxs(b,{children:["Дата: ",v(t.date,"numeric")]})]}),i.jsxs(ee,{children:[t.link&&i.jsx(F,{href:t.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:i.jsx(O,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),i.jsx(L,{text:t.viewed?j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:l,height:"35px",width:"100%",buttonSuccessText:j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:c,setCompleted:o,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},S=({listNotification:t})=>{const e=B.useType();return i.jsx(_,{d:"column",gap:"8px",children:t.length?t.map(n=>e==="notifications"?i.jsx(Z,{data:n},n.id):i.jsx(ie,{data:n},n.id)):i.jsx(A,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},se=r.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`,ne=r.div`
    .slider-list-notification {
        margin-top: 12px;
        width: 100%;
    }
`,oe=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],ae=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],de=({docsType:t})=>{const{data:e,error:n}=B.usePersonalNotifications(),[s,c]=a.useState(),[o,l]=a.useState("docs"),[p,x]=a.useState(""),[d,g]=a.useState({id:"all",title:"Все"}),[u,f]=a.useState({id:"all",title:"Все"});a.useEffect(()=>{c(JSON.parse(JSON.stringify(e)))},[e]),a.useEffect(()=>{e&&c(G(p,(d==null?void 0:d.id)??"",JSON.parse(JSON.stringify(e))))},[d,p]),a.useEffect(()=>{h.setNotificationsType(o),h.getPersonalNotificationsFx()},[o]);const m=w=>{l(w)},k=a.useMemo(()=>{const w=(e==null?void 0:e.vacation)||[],D=(e==null?void 0:e.businesstrip)||[],T=(e==null?void 0:e.fire)||[];switch(u==null?void 0:u.id){case"all":return[...w,...D,...T].sort((y,N)=>{const E=y.notificationType==="docs"?new Date(y.date):new Date(y.startDate||"");return(N.notificationType==="docs"?new Date(N.date):new Date(N.startDate||"")).getTime()<E.getTime()?-1:1});case"vacation":return w;case"fire":return T;case"businesstrip":return D;default:return[]}},[e,u]);return i.jsx(U,{load:()=>{h.setNotificationsType(o),h.getPersonalNotificationsFx()},error:n,data:s,children:i.jsx(ne,{children:i.jsxs(J,{children:[i.jsxs(se,{children:[i.jsx(M,{value:p,setValue:x,placeholder:"Поиск",leftIcon:i.jsx(R,{})}),i.jsx($,{items:o==="notifications"?ae:oe,selected:o==="notifications"?u:d,setSelected:o==="notifications"?f:g})]}),t&&(s!=null&&s.docs)?i.jsx(S,{listNotification:s==null?void 0:s.docs}):i.jsx(z,{onChangePage:m,pages:[{id:"docs",title:"Приказы",content:(s==null?void 0:s.docs)&&i.jsx(S,{listNotification:s==null?void 0:s.docs})},{id:"notifications",title:"Кадровые уведомления",content:k.length?i.jsx(S,{listNotification:k}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})};export{de as N};
