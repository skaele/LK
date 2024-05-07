import{s as r,r as o,j as s,V as E,n as O,q as R}from"./vendor-cbee1f3c.js";import{a8 as C,Y as b,n as v,ar as F,U as I,S as L,as as h,at as U,k as W,au as B,N as A,a3 as V,W as _,P as J,u as M,x as $,ag as z}from"./index-8dc5684d.js";const H=(t,e,n)=>{const i={};let c=[];const a=l=>{if("document"in l){const{viewed:u,name:f}=l,m=(f==null?void 0:f.includes(t))||!t.length;return e==="all"&&m?!0:!u&&e!=="all"&&m}const{viewed:p,post:x,event:d}=l,g=(d==null?void 0:d.includes(t))||(x==null?void 0:x.includes(t))||!t.length;return e==="all"&&g?!0:!p&&e!=="all"&&g};return Object.entries(n).map(([l,p])=>{c=[],p.map(x=>{a(x)&&c.push(x)}),i[l]=c}),i},j=(t,e,n)=>{switch(t){case"Female":return n;default:return e}},q=r.div`
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
`,G=r.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Y=r.div`
    display: flex;
    gap: 10px;
    align-self: end;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`,K=r.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`,Q=({data:t})=>{const{data:{user:e}}=C.useUser(),[n,i]=o.useState(!1),[c,a]=o.useState(!1);return s.jsxs(q,{children:[s.jsxs(G,{children:[s.jsx(K,{children:t.event||t.post}),t.startDate&&t.endDate!=="0000-00-00"?s.jsxs(b,{children:["Период: ",v(t.startDate,"numeric")," - ",v(t.endDate,"numeric")]}):s.jsxs(b,{children:["Дата: ",v(t.startDate,"numeric")]})]}),s.jsxs(Y,{children:[t.file&&s.jsx(F,{href:t.file,onClick:()=>null,text:"Скачать",width:"150px",icon:s.jsx(E,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),s.jsx(L,{text:t.viewed?j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:()=>{i(!0),h.viewPersonalNotificationsFx(t.id),i(!1),a(!0)},height:"35px",width:"150px",buttonSuccessText:j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:c,setCompleted:a,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},X=r.div`
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
`,Z=r.div`
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
`,se=({data:t})=>{const{data:{user:e}}=C.useUser(),[n,i]=o.useState(!1),[c,a]=o.useState(!1),l=()=>{try{i(!0),h.viewPersonalNotificationsFx(t.id),U.clearById({id:`studdoc-${t.id}`,pageId:"doclist"}),i(!1),a(!0)}catch{W.evokePopUpMessage({message:"Не удалось отправить данные",type:"failure"})}};return s.jsxs(X,{children:[s.jsxs(Z,{children:[s.jsx(te,{children:t.name}),t.date&&s.jsxs(b,{children:["Дата: ",v(t.date,"numeric")]})]}),s.jsxs(ee,{children:[t.link&&s.jsx(F,{href:t.link,onClick:()=>null,text:"Подробнее",width:"100%",icon:s.jsx(O,{}),height:"35px",minHeight:"30px",background:I.grey.transparent2}),s.jsx(L,{text:t.viewed?j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"):"Ознакомиться",action:l,height:"35px",width:"100%",buttonSuccessText:j(e==null?void 0:e.sex,"Ознакомлен","Ознакомлена"),isLoading:n,completed:c,setCompleted:a,isActive:!0,isDone:t.viewed,repeatable:!1,popUpFailureMessage:"Вы уже ознакомились"})]})]})},S=({listNotification:t})=>{const e=B.useType();return s.jsx(A,{d:"column",gap:"8px",children:t.length?t.map(n=>e==="notifications"?s.jsx(Q,{data:n},n.id):s.jsx(se,{data:n},n.id)):s.jsx(V,{text:"У вас нет приказов, с которыми вы еще не ознакомились"})})},ie=r.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`,ne=r.div`
    .slider-list-notification {
        margin-top: 12px;
        width: 100%;
    }
`,ae=[{id:"all",title:"Все"},{id:"unread",title:"Непрочитанные"}],oe=[{id:"all",title:"Все"},{id:"vacation",title:"Отпуск"},{id:"fire",title:"Увольнение"},{id:"businesstrip",title:"Командировка"}],de=({docsType:t})=>{const{data:e,error:n}=B.usePersonalNotifications(),[i,c]=o.useState(),[a,l]=o.useState("docs"),[p,x]=o.useState(""),[d,g]=o.useState({id:"all",title:"Все"}),[u,f]=o.useState({id:"all",title:"Все"});o.useEffect(()=>{c(JSON.parse(JSON.stringify(e)))},[e]),o.useEffect(()=>{e&&c(H(p,(d==null?void 0:d.id)??"",JSON.parse(JSON.stringify(e))))},[d,p]),o.useEffect(()=>{h.setNotificationsType(a),h.getPersonalNotificationsFx()},[a]);const m=w=>{l(w)},k=o.useMemo(()=>{const w=(e==null?void 0:e.vacation)||[],D=(e==null?void 0:e.businesstrip)||[],T=(e==null?void 0:e.fire)||[];switch(u==null?void 0:u.id){case"all":return[...w,...D,...T].sort((N,y)=>{const P=N.notificationType==="docs"?new Date(N.date):new Date(N.startDate||"");return(y.notificationType==="docs"?new Date(y.date):new Date(y.startDate||"")).getTime()<P.getTime()?-1:1});case"vacation":return w;case"fire":return T;case"businesstrip":return D;default:return[]}},[e,u]);return s.jsx(_,{load:()=>{h.setNotificationsType(a),h.getPersonalNotificationsFx()},error:n,data:i,children:s.jsx(ne,{children:s.jsxs(J,{children:[s.jsxs(ie,{children:[s.jsx(M,{value:p,setValue:x,placeholder:"Поиск",leftIcon:s.jsx(R,{})}),s.jsx($,{items:a==="notifications"?oe:ae,selected:a==="notifications"?u:d,setSelected:a==="notifications"?f:g})]}),t&&(i!=null&&i.docs)?s.jsx(S,{listNotification:i==null?void 0:i.docs}):s.jsx(z,{onChangePage:m,pages:[{id:"docs",title:"Приказы",content:(i==null?void 0:i.docs)&&s.jsx(S,{listNotification:i==null?void 0:i.docs})},{id:"notifications",title:"Кадровые уведомления",content:k.length?s.jsx(S,{listNotification:k}):void 0},{title:"Надбавки",condition:void 0,content:void 0}],className:"slider-list-notification"})]})})})};export{de as N};
