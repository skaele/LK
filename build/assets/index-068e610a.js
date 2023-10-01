import{s as l,r as o,j as i,a1 as E,l as O,o as R}from"./vendor-2bd70a0f.js";import{Z as D,U as C,l as S,_ as F,ac as I,S as L,ad as h,ae as U,a as W,af as B,p as _,N as A,W as J,t as M,g as V,i as $,a8 as z}from"./index-bc77f324.js";const H=(t,e,n)=>{const s={};let c=[];const a=r=>{if("document"in r){const{viewed:u,name:f}=r,m=(f==null?void 0:f.includes(t))||!t.length;return e==="all"&&m?!0:!u&&e!=="all"&&m}const{viewed:p,post:x,event:d}=r,g=(d==null?void 0:d.includes(t))||(x==null?void 0:x.includes(t))||!t.length;return e==="all"&&g?!0:!p&&e!=="all"&&g};return Object.entries(n).map(([r,p])=>{c=[],p.map(x=>{a(x)&&c.push(x)}),s[r]=c}),s},v=(t,e,n)=>{switch(t){case"Female":return n;default:return e}},G=l.div`
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
`,Z=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,q=l.div`
    display: flex;
    gap: 10px;
    align-self: end;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`,K=l.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,Q=({data:t})=>{const{data:{user:e}}=D.useUser(),[n,s]=o.useState(!1),[c,a]=o.useState(!1);return i.jsxs(G,{children:[i.jsxs(Z,{children:[i.jsx(K,{children:t.event||t.post}),t.startDate&&i.jsxs(C,{children:["Период: ",S(t.startDate,"numeric")," - ",S(t.endDate,"numeric")]})]}),i.jsxs(q,{children:[t.file&&i.jsx(F,{href:t.file,onClick:()=>null,text:"Скачать",width:"150px",icon:i.jsx(E,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),i.jsx(L,{text:t.viewed?v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{s(!0),h.viewPersonalNotificationsFx(t.id),s(!1),a(!0)},height:"35px",width:"150px",buttonSuccessText:v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:c,setCompleted:a,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},X=l.div`
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
`,Y=l.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,ee=l.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
    width: 300px;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`,te=l.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,ie=({data:t})=>{const{data:{user:e}}=D.useUser(),[n,s]=o.useState(!1),[c,a]=o.useState(!1),r=()=>{try{s(!0),h.viewPersonalNotificationsFx(t.id),U.clearById({id:`studdoc-${t.id}`,pageId:"doclist"}),s(!1),a(!0)}catch{W.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return i.jsxs(X,{children:[i.jsxs(Y,{children:[i.jsx(te,{children:t.name}),t.date&&i.jsxs(C,{children:["Дата: ",S(t.date,"numeric")]})]}),i.jsxs(ee,{children:[t.link&&i.jsx(F,{href:t.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:i.jsx(O,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),i.jsx(L,{text:t.viewed?v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:r,height:"35px",width:"100%",buttonSuccessText:v(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:c,setCompleted:a,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},y=({listNotification:t})=>{const e=B.useType();return i.jsx(_,{d:"column",gap:"8px",children:t.length?t.map(n=>e==="notifications"?i.jsx(Q,{data:n},n.id):i.jsx(ie,{data:n},n.id)):i.jsx(A,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},se=l.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`,ne=l.div`
    .slider-list-notification {
        margin-top: 12px;
        width: 100%;
    }
`,ae=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],oe=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],de=({docsType:t})=>{const{data:e,error:n}=B.usePersonalNotifications(),[s,c]=o.useState(),[a,r]=o.useState("docs"),[p,x]=o.useState(""),[d,g]=o.useState({id:"all",title:"Все"}),[u,f]=o.useState({id:"all",title:"Все"});o.useEffect(()=>{c(JSON.parse(JSON.stringify(e)))},[e]),o.useEffect(()=>{e&&c(H(p,(d==null?void 0:d.id)??"",JSON.parse(JSON.stringify(e))))},[d,p]),o.useEffect(()=>{h.setNotificationsType(a),h.getPersonalNotificationsFx()},[a]);const m=w=>{r(w)},b=o.useMemo(()=>{const w=(e==null?void 0:e.vacation)||[],k=(e==null?void 0:e.businesstrip)||[],T=(e==null?void 0:e.fire)||[];switch(u==null?void 0:u.id){case"all":return[...w,...k,...T].sort((j,N)=>{const P=j.notificationType==="docs"?new Date(j.date):new Date(j.startDate||"");return(N.notificationType==="docs"?new Date(N.date):new Date(N.startDate||"")).getTime()<P.getTime()?1:-1});case"vacation":return w;case"fire":return T;case"businesstrip":return k;default:return[]}},[e,u]);return i.jsx(J,{load:()=>{h.setNotificationsType(a),h.getPersonalNotificationsFx()},error:n,data:s,children:i.jsx(ne,{children:i.jsxs(M,{children:[i.jsxs(se,{children:[i.jsx(V,{value:p,setValue:x,placeholder:"Поиск",leftIcon:i.jsx(R,{})}),i.jsx($,{items:a==="notifications"?oe:ae,selected:a==="notifications"?u:d,setSelected:a==="notifications"?f:g})]}),t&&(s!=null&&s.docs)?i.jsx(y,{listNotification:s==null?void 0:s.docs}):i.jsx(z,{onChangePage:m,pages:[{id:"docs",title:"Приказы",content:(s==null?void 0:s.docs)&&i.jsx(y,{listNotification:s==null?void 0:s.docs})},{id:"notifications",title:"Кадровые уведомления",content:b.length?i.jsx(y,{listNotification:b}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})};export{de as N};
