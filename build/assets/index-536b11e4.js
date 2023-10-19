import{j as t,c9 as ge,ca as me,cb as fe,aK as ve,at as je,N as Se,cc as ye,T as Y,O as we,k as be,cd as ke,s as p,R as Ce,r as x,bX as Fe,B as Ee,bT as J,bE as Re,bF as $,W as Ae}from"./vendor-831b4923.js";import{bD as K,bE as L,B as T,c9 as Le,bf as ee,a6 as F,a3 as te,aQ as Te,c2 as Me,_ as se,u as C,ca as ze,cb as Pe,cc as B,cd as Ie,ce as _e,cf as Oe,aX as De,cg as N,ch as $e,ci as P,Y as E,O as ne,V as O,T as M,M as _,g as I,D as Be,S as z,n as Ne,cj as Ve,ck as Ue,x as D,cl as V,cm as We,c6 as U,C as W,cn as Ge,co as qe,cp as ie,r as ae,b4 as He,aU as G,o as Ze,cq as Qe,bg as Xe,aJ as Ye,t as Je,p as Ke}from"./index-774d803f.js";import{a as et,b as tt}from"./index.esm-29d01972.js";const st=({theme:e,scheduledLightTheme:n,lightThemeRange:s,email:i,avatar:a,homepage:o,phone:l,menu:r,settings:c})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:e.value,disabled:n,action:e.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:r.value,additionalActions:r.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:o.sections.value,additionalActions:o.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:o.widgets.schedule.value,action:o.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:o.widgets.payments.value,action:o.widgets.payments.action}]},{title:"Новости",fields:[{title:"Последние новости",type:"toggle",value:o.news.value,action:o.news.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:a.value,icon:a.icon,description:a.description,action:()=>null},{title:"Email",type:"text",value:i.value,icon:t.jsx(ge,{}),description:i.description,action:i.action,additionalActions:i.additionalActions},{title:"Телефон",type:"tel",value:l.value,icon:t.jsx(me,{}),description:l.description,action:l.action,additionalActions:l.additionalActions},{title:"Пароль",type:"password",value:"",icon:t.jsx(fe,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(ve,{}),action:()=>K.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:L.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(je,{}),value:c.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:c.messages,icon:t.jsx(Se,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:c.newVersion,icon:t.jsx(ye,{})},{id:"schedule",title:"Расписание",type:"toggle",value:c.schedule,icon:t.jsx(Y,{})},{id:"news",title:"Новости",type:"toggle",value:c.news,icon:t.jsx(we,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:c.applications,icon:t.jsx(be,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:c.doclist,icon:t.jsx(ke,{})}]}]}]}),nt=p.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;

    .icon-and-title {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    svg {
        width: 22px;
        height: 22px;
    }

    .buttons {
        display: flex;
        align-items: center;
        column-gap: 5px;

        svg {
            margin: 0;
        }
    }

    &:hover::before {
        width: 5px;
        background: var(--red);
    }
`,it=({chosen:e,onClick:n})=>t.jsx(T,{minWidth:"35px",background:"transparent",icon:e?t.jsx(et,{style:{color:"var(--blue)"}}):t.jsx(tt,{}),onClick:n}),at=e=>{const{id:n,chosen:s,switchMenuItem:i}=e;return t.jsxs(nt,{chosen:s,onClick:()=>i(n),children:[t.jsx(Le,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...e}),t.jsx("div",{className:"buttons",children:t.jsx(it,{chosen:s,onClick:()=>{i(n)}})})]})},ot=Ce.memo(at),lt=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,q=({enabledList:e,requiredList:n,add:s,remove:i})=>{const{settings:a}=ee.useSettings(),o=F.useMenu(),{visibleRoutes:l}=F.useMenu(),[r,c]=x.useState(null),d=o[e];if(!d||!l)return null;const u=m=>{d[m]?i(m,a,n):s(m,a,Object.keys(d).length,n)};return t.jsxs(lt,{children:[t.jsx(te,{placeholder:"Поиск",whereToSearch:l,searchEngine:Te,setResult:c}),Object.values(r??l).map((m,g)=>x.createElement(ot,{...m,key:g,chosen:!!d[m.id],switchMenuItem:u}))]})},rt=e=>!e||e.length===0?"Не указан":e,ct=()=>{const{theme:e,switchTheme:n}=Me(),{data:{user:s}}=se.useUser(),{open:i}=C(),{leftsideBarRoutes:a,homeRoutes:o}=F.useMenu(),{settings:l}=ee.useSettings(),[r,c]=x.useState(null),{property:d}=l["settings-notifications"],{property:u}=l["settings-appearance"],{widgetPayment:m,widgetSchedule:g,news:j}=l["settings-home-page"].property,v=(s==null?void 0:s.user_status)==="staff"?ze:Pe;return x.useEffect(()=>{c({...st({scheduledLightTheme:u.scheduledLightTheme,lightThemeRange:u.lightThemeRange,settings:d,isStudent:(s==null?void 0:s.user_status)==="stud",menu:{value:a,additionalActions:{onAdd:()=>i(t.jsx(q,{enabledList:"leftsideBarRoutes",requiredList:v,remove:B,add:Ie}),"Настройка меню"),onRemoveOne:h=>B(h,l,v)}},theme:{value:e==="dark",action:h=>n(h)},phone:{value:(s==null?void 0:s.phone)??"",description:s==null?void 0:s.phone,action:h=>_e(h??""),additionalActions:{onSuccess:h=>{L.update({key:"phone",value:h})}}},email:{value:(s==null?void 0:s.email)??"",description:rt(s==null?void 0:s.email),action:h=>Oe(h??""),additionalActions:{onSuccess:h=>{L.update({key:"email",value:h})}}},avatar:{value:s==null?void 0:s.avatar,description:"Смена аватара",icon:t.jsx(De,{avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:o,additionalActions:{onRemoveOne:h=>N(h,l),onAdd:()=>i(t.jsx(q,{enabledList:"homeRoutes",requiredList:[],remove:N,add:$e}),"Добавить страницы")}},widgets:{schedule:{value:g,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!!h})},payments:{value:m,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!!h})}},news:{value:j,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"news",value:!!h})}}})})},[e,o,g,m,j,Object.keys(a??{}).length,Object.keys(o??{}).length]),r},oe=p.section`
    width: 100%;
    background: var(--block);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,dt=p.div`
    padding: 12px;
    width: 100%;
`,ut=({list:e})=>{const{allRoutes:n}=F.useMenu();return n?t.jsx(oe,{children:t.jsxs(E,{children:[(e==null?void 0:e.length)===0&&t.jsx(ne,{text:"Не удалось ничего найти"}),e==null?void 0:e.map((s,i)=>t.jsx(dt,{children:t.jsx(O,{fontSize:"0.85rem",children:s.map((a,o)=>t.jsxs(t.Fragment,{children:[a,o!==s.length-1&&" > "]}))})},i))]})}):null},ht=p.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0px 12px;
    min-height: 45px;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-1);
    }

    .icon {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
        }
    }

    span {
        opacity: 0.8;
    }
`,xt=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    b {
        opacity: 0.8;
        font-weight: 500;
        font-size: 0.85rem;
    }

    span {
        opacity: 0.6;
        font-size: 0.8rem;
        margin-top: 2px;
    }
`,A=({title:e,description:n,onClick:s,icon:i,rightIcon:a,editable:o=!0})=>t.jsxs(ht,{onClick:s,children:[i&&t.jsx("div",{className:"icon",children:i}),t.jsxs(xt,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:n})]}),a??(o?t.jsx(Fe,{}):null)]}),le=(e,n)=>{const s=e.find(({test:o})=>!o(...n)),i=!s,a=!n.find(o=>o.length===0)&&i;return{allChecked:i,isActive:a,validationError:s}},pt=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,gt=p.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,mt=[{text:"Необходимо изменить строку",test:(e,n)=>e!==n}],ft=e=>{const{value:n,message:s,action:i,type:a,title:o,additionalActions:l}=e,[r,c]=x.useState(n),[d,u]=x.useState(!1),[m,g]=x.useState(""),[j,v]=x.useState(!1),{close:h}=C(),{isActive:b,validationError:w}=le(mt,[r,n]),f=async()=>{var y;try{u(!0),await(i==null?void 0:i(r)),(y=l==null?void 0:l.onSuccess)==null||y.call(l,r),u(!1),v(!0)}catch(k){g("Возникла ошибка: "+k.message),u(!1)}};return x.useEffect(()=>{c(n),g(null)},[o]),t.jsxs(pt,{children:[t.jsx(M,{size:3,align:"left",children:o}),s&&t.jsx(_,{type:s.type??"",title:s.title,children:s.body}),t.jsx(_,{type:"failure",visible:!!m,children:m}),t.jsx(I,{value:r,setValue:c,type:a,mask:!0}),t.jsx(Be,{}),t.jsxs(gt,{children:[t.jsx(T,{text:"Отменить",width:"100%",onClick:h}),t.jsx(z,{isLoading:d,completed:j,isActive:b,text:"Обновить",action:f,setCompleted:v,popUpFailureMessage:w==null?void 0:w.text,height:"38px"})]})]},o)},H=e=>{const{open:n}=C(),s=()=>{n(t.jsx(ft,{...e}))};return t.jsx(A,{...e,onClick:s})},vt=({title:e,action:n,value:s,subfields:i,icon:a,settingsName:o,disabled:l})=>{const[r,c]=x.useState(s),d=u=>{n==null||n(u),c(u)};return x.useEffect(()=>{c(s)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(Ne,{disabled:l,title:e,state:r,action:d,icon:a}),i&&r&&t.jsx(he,{settingsName:o,fields:i,asChild:!0})]})},jt=e=>t.jsx(A,{...e,rightIcon:t.jsx(Ee,{})}),St=e=>{const n=()=>{var s;return(s=e==null?void 0:e.action)==null?void 0:s.call(e)};return t.jsx(A,{...e,editable:!1,onClick:n})},Z=e=>{const n=x.useState(!1),s=x.useState(!1),i=x.useState(null);return{loading:n,error:i,completed:s,isActive:e}},yt=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,wt=e=>{const{data:{user:n}}=se.useUser();if(!n)return null;const[s,i]=x.useState([]),[a,o]=x.useState(null),{completed:[l,r],loading:[c,d],error:[u,m],isActive:g}=Z(!!(n!=null&&n.avatar)),{completed:[j,v],loading:[h,b],error:[w,f],isActive:y}=Z(s.length===1);x.useEffect(()=>{const S=new FileReader;S.onloadend=()=>{o(S.result)},s[0]?S.readAsDataURL(s[0]):o(null)},[s]);const k=async()=>{try{b(!0),v(!1);const S=await V(s[0]);if(S.data.result!=="ok")throw new Error(S.data.errors);v(!0),b(!1),i([]),L.update({key:"avatar",value:a})}catch(S){f("Ошибка: "+S.message)}},xe=async()=>{try{d(!0),r(!1);const S=await V();if(S.data.result!=="ok")throw new Error(S.data.errors);r(!0),d(!1),L.update({key:"avatar",value:""})}catch(S){m("Ошибка: "+S.message)}},pe=()=>K.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:xe});return t.jsxs(yt,{children:[t.jsx(Ve,{avatar:a??(n==null?void 0:n.avatar),name:(n==null?void 0:n.fullName)??"",isMe:!1,type:n==null?void 0:n.user_status,noInfo:!0}),t.jsx(_,{type:"failure",visible:!!w||!!u,children:w||u}),t.jsx(Ue,{files:s,maxFiles:1,formats:["image/jpeg"],setFiles:i,isActive:!0}),t.jsxs(E,{direction:"horizontal",children:[(n==null?void 0:n.avatar)&&t.jsx(z,{isLoading:c,background:D.red.main,completed:l,isActive:g,text:"Удалить фото профиля",action:pe,setCompleted:r}),t.jsx(z,{isLoading:h,completed:j,isActive:y,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:k,setCompleted:v})]})]})},bt=e=>{const{open:n}=C(),s=()=>{n(t.jsx(wt,{...e}))};return t.jsx(A,{...e,onClick:s})},kt=e=>{const{value:n,additionalActions:s}=e,[i,a]=x.useState(n),o=r=>{var c;return(c=s==null?void 0:s.onRemoveOne)==null?void 0:c.call(s,r)},l=()=>{var r;return(r=s==null?void 0:s.onAdd)==null?void 0:r.call(s)};return t.jsx(We,{list:i,onRemoveOne:o,onAddElement:l,setList:a})},Q=(e,n)=>e/n*100,Ct=p.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .values {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input[type='range'] {
        width: 100%;
    }

    .slider {
        position: relative;
        width: 100%;
        height: 20px;
    }

    .slider__track,
    .slider__range {
        border-radius: 3px;
        height: 5px;
        position: absolute;
    }

    .slider__track {
        background-color: var(--almostTransparent);
        width: 100%;
        z-index: 1;
    }

    .slider__range {
        width: calc(${({width:e})=>e+"%"} - 5px);
        background-color: var(--blue);
        left: ${({left:e})=>e+"%"};
        z-index: 2;
    }

    .thumb,
    .thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .thumb {
        pointer-events: none;
        position: absolute;
        height: 0;
        width: 200px;
        outline: none;
    }

    .thumb--zindex-3 {
        z-index: 3;
    }

    .thumb--zindex-4 {
        z-index: 4;
    }

    .thumb::-webkit-slider-thumb {
        background-color: var(--blue);
        filter: brightness(1.1);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
`,Ft=({range:e,step:n,initialValues:s,onSave:i,onChange:a,valueTransform:o})=>{const[l,r]=s,[c,d]=e,[u,m]=x.useState(l),[g,j]=x.useState(r),v=o?o(u):u,h=o?o(g):g,b=()=>{i([u,g])},w=f=>f===1?y=>{const k=Math.min(+y.target.value,g-n);m(k),y.target.value=k.toString()}:y=>{const k=Math.max(+y.target.value,u+n);j(k),y.target.value=k.toString()};return x.useEffect(()=>{a==null||a([u,g])},[u,g]),t.jsxs(Ct,{left:Q(u,d-c),width:Q(g-u,d-c),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:c,max:d,step:n,value:u,onChange:w(1),onMouseUp:b}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:c,max:d,step:n,value:g,onChange:w(2),onMouseUp:b})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:v}),t.jsx("span",{children:h})]})]})},Et=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Rt=e=>{const{value:n,action:s}=e,{close:i}=C(),[a,o]=n,[l,r]=x.useState(a),[c,d]=x.useState(o),[u,m]=x.useState(!1),g=()=>{s==null||s([l,c]),i()},j=h=>U(Math.floor(h/60))+":"+U(h%60),v=h=>{r(h[0]),d(h[1])};return t.jsxs(Et,{children:[t.jsx(Ft,{range:[0,1440],step:60,valueTransform:j,initialValues:[a,o],onSave:()=>null,onChange:v}),t.jsxs(E,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(T,{text:"Отменить",width:"120px",onClick:i}),t.jsx(z,{width:"120px",isLoading:!1,completed:u,text:"Сохранить",action:g,setCompleted:m})]})]})},At=e=>{const{open:n}=C(),s=()=>{n(t.jsx(Rt,{...e}))};return t.jsx(A,{...e,editable:!1,onClick:s,icon:t.jsx(Y,{})})},re=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",ce={small:4,middle:9,large:12,big:14},Lt=p.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:n})=>e?D[re(n)].main:"var(--text)"};
    }
`,Tt=p.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>ce[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:n})=>e?D[re(n)].main:"var(--block)"};
`,Mt=p.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--theme-2);
    height: ${({size:e})=>ce[e]}px;
    overflow: hidden;
`,zt=({title:e,value:n,size:s="middle",coloring:i=!0})=>t.jsxs(Lt,{value:n,coloring:i,children:[t.jsx(M,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(Mt,{size:s,children:t.jsx(Tt,{size:s,coloring:i,value:n})})]}),R=7,de=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${R+3},})`),ue=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${R},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${R+3},}))`),X=[{text:`Минимальная длина ${R} знаков`,test:e=>e.length>=R},{text:"Не повторяет старый пароль",test:(e,n,s)=>s.length>0&&e.length>0&&e!==s},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>ue.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,n)=>e.length>0&&n.length>0&&e===n}],Pt=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>de.test(e)}],It=e=>{const n="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";for(let i=0;i<e;i++)s+=n.charAt(Math.floor(Math.random()*n.length));return s},_t=e=>de.test(e)?{title:"надежный",value:100}:ue.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<R?{title:"очень слабый",value:10}:{title:"слабый",value:20},Ot=p.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,Dt=p.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,$t=p.div`
    height: 100%;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Bt=p.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Nt=p.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Vt=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,Ut=p.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Wt=()=>{const[e,n]=x.useState(""),[s,i]=x.useState(""),[a,o]=x.useState(""),[l,r]=x.useState(null),[c,d]=x.useState(!1),[u,m]=x.useState(!1),{isActive:g,validationError:j}=le(X,[s,a,e]),v=_t(s),{close:h}=C(),b=()=>{const f=It(12);i(f),o(f)},w=async()=>{try{d(!0);const f=await qe(e,s);if(f.data.result!=="ok")throw new Error(f.data.errors);m(!0),d(!1),i(""),o(""),n("")}catch(f){const y=f.message??f;r("Возникла ошибка: "+y),d(!1)}};return t.jsxs(Ot,{children:[t.jsxs($t,{children:[t.jsxs(Bt,{children:[t.jsx(M,{size:3,align:"left",children:"Смена пароля"}),t.jsx(O,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:X.map(f=>t.jsx(W,{fontSize:"0.85rem",setChecked:()=>null,text:f.text,checked:f.test(s,a,e)},f.text))}),t.jsx(O,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Pt.map(f=>t.jsx(W,{fontSize:"0.85rem",setChecked:()=>null,text:f.text,checked:f.test(s,a,e)},f.text))})]}),!g&&t.jsx(T,{width:"100%",text:"Сгенерировать пароль",onClick:b,background:"var(--theme-2)"}),g&&t.jsxs(Vt,{children:[t.jsx(Ge,{size:"40px"}),t.jsx(M,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(Dt,{children:[t.jsxs(Ut,{children:[t.jsx(_,{title:"Ошибка",type:"failure",visible:!!l,children:l}),t.jsx(I,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:n,required:!0}),t.jsx(I,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:s,setValue:i,required:!0}),t.jsx(I,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:o,required:!0}),t.jsx(zt,{value:v.value,size:"small",title:`Сложность пароля: ${v.title}`})]}),t.jsxs(Nt,{children:[t.jsx(T,{text:"Отменить",width:"100%",onClick:h}),t.jsx(z,{isLoading:c,completed:u,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${j==null?void 0:j.text}`,action:w,setCompleted:m,height:"38px",isActive:g})]})]})]})},Gt=e=>{const{open:n}=C(),s=()=>n(t.jsx(Wt,{}));return t.jsx(A,{...e,onClick:s})},qt=p.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    margin-left: ${({asChild:e})=>e?"16px":"0"};

    &::before {
        content: '';
        position: absolute;
        height: calc(100% - 12px);
        width: 2px;
        background-color: var(--almostTransparentOpposite);
        display: ${({asChild:e})=>e?"block":"none"};
        left: -2px;
        opacity: 0.4;
        top: 6px;
    }
`,Ht=e=>({toggle:t.jsx(vt,{...e},e.title),photo:t.jsx(bt,{...e},e.title),choices:t.jsx(kt,{...e},e.title),text:t.jsx(H,{...e},e.title),display:t.jsx(St,{...e},e.title),interval:t.jsx(At,{...e},e.title),tel:t.jsx(H,{...e},e.title),password:t.jsx(Gt,{...e},e.title),link:t.jsx(jt,{...e},e.title)}),he=({fields:e,settingsName:n,asChild:s=!1})=>{const i=a=>!a||!n?()=>null:o=>{console.log(o),P.updateSetting({nameSettings:n,nameParam:a,value:o})};return t.jsx(qt,{asChild:s,children:e.map(a=>{const o=a.action??i(a.id),{type:l,visible:r=!0}=a;if(r)return Ht({...a,action:o,settingsName:n})[l]})})},Zt=p.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:e})=>e?"flex":"none"};
    }
`,Qt=p.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,Xt=p.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Yt=({searchValue:e,searchResult:n,settingsConfig:s})=>{var o,l;const{allRoutes:i}=F.useMenu(),a=(o=J(ie))==null?void 0:o.params;return!i||s===void 0?null:t.jsx(Zt,{open:!!(a!=null&&a.id),children:t.jsx(Qt,{children:t.jsxs(Re,{children:[e&&t.jsx(ut,{list:n}),(l=Object.keys(s??{}))==null?void 0:l.map(r=>{const c=s[r],{path:d}=i[r];return t.jsx($,{path:d,children:t.jsx(E,{direction:"vertical",gap:12,children:!e&&c.map(({title:u,fields:m})=>t.jsxs(oe,{children:[t.jsx(Xt,{children:t.jsx(M,{size:4,align:"left",children:u})}),t.jsx(he,{fields:m,settingsName:r})]},u))})},d)}),t.jsx($,{path:"/",children:t.jsx(ae,{height:"100%",children:t.jsx(ne,{text:"Ничего не выбрано",image:t.jsx(He,{color:"grey",size:50,children:t.jsx(Ae,{})})})})})]})})})},Jt=(e,n,s)=>{const i=[];if(!s)return i;let a=0,o=!1;for(const l in n){o=!1,i.push([]);const r=s[l].title.split(". ")[1];i[a].push(r);const c=n[l];for(const d of c)for(const u of d.fields)G(u.title).includes(G(e))&&(o?(i.push([...i[a].slice(0,i[a].length-1),u.title]),a++):(i[a].push(d.title),i[a].push(u.title)),o=!0);o?a++:i.pop()}return i},Kt=p(Qe)`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--block-shadow);
    margin-right: 20px;
    background: var(--block-content);

    ${Ze.isMobile} {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({open:e})=>e?"100%":"0"};
        max-width: ${({open:e})=>e?"100%":"0"};
        min-width: 0;
        display: ${({open:e})=>e?"flex":"none"};
    }
`,es=({settingsConfig:e,setSearchResult:n,setSearchValue:s})=>{var r,c;const{allRoutes:i}=F.useMenu(),{isMobile:a}=Xe(),o=(r=J(ie))==null?void 0:r.params,l=(d,u)=>Jt(d,u,i);return i?t.jsxs(Kt,{width:"250px",open:!(o!=null&&o.id),children:[t.jsx(te,{whereToSearch:e,searchEngine:l,placeholder:"Поиск",setExternalValue:s,setResult:n,validationCheck:!0,loadingOnType:!0}),(c=Object.keys(e??{}))==null?void 0:c.map(d=>{if(a&&d!=="settings-customize-menu"||!a)return x.createElement(Ye,{...i[d],title:i[d].title.slice(11,i[d].title.length),key:d,orientation:"horizontal",shadow:!1})})]}):null},is=()=>{const[e,n]=x.useState(""),[s,i]=x.useState(null),a=ct();return a===null?null:t.jsx(ae,{padding:"10px",children:t.jsx(Je,{children:t.jsxs(Ke,{ai:"flex-start",children:[t.jsx(es,{settingsConfig:a,setSearchResult:i,setSearchValue:n}),t.jsx(Yt,{searchValue:e,searchResult:s,settingsConfig:a})]})})})};export{is as default};
