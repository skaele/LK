import{j as t,c9 as ge,ca as me,cb as fe,aM as ve,av as je,P as Se,cc as ye,V as Y,Q as we,k as be,cd as ke,s as g,R as Ce,r as x,bX as Fe,D as Ee,bT as J,bD as Re,bE as $,Y as Ae}from"./vendor-2bd70a0f.js";import{bE as K,bF as M,B as z,ca as Le,bf as ee,a5 as F,T as E,a2 as te,aQ as Me,c3 as ze,Z as se,u as C,cb as Te,cc as Pe,cd as B,ce as Ie,cf as _e,cg as De,aX as Oe,ch as N,ci as $e,cj as P,X as R,N as ne,U as D,M as _,g as I,D as Be,S as T,n as Ne,ck as Ve,cl as Ue,ac as O,cm as V,cn as We,c7 as U,C as W,co as Ge,cp as Ze,cq as ie,r as ae,b4 as qe,aU as G,o as He,cr as Qe,bg as Xe,aJ as Ye,t as Je,p as Ke}from"./index-bc77f324.js";import{a as et,b as tt}from"./index.esm-79fc39e7.js";const st=({theme:e,scheduledLightTheme:n,lightThemeRange:s,email:i,avatar:a,homepage:o,phone:r,menu:l,settings:d})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:e.value,disabled:n,action:e.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:l.value,additionalActions:l.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:o.sections.value,additionalActions:o.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:o.widgets.schedule.value,action:o.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:o.widgets.payments.value,action:o.widgets.payments.action}]},{title:"Новости",fields:[{title:"Последние новости",type:"toggle",value:o.news.value,action:o.news.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:a.value,icon:a.icon,description:a.description,action:()=>null},{title:"Email",type:"text",value:i.value,icon:t.jsx(ge,{}),description:i.description,action:i.action,additionalActions:i.additionalActions},{title:"Телефон",type:"tel",value:r.value,icon:t.jsx(me,{}),description:r.description,action:r.action,additionalActions:r.additionalActions},{title:"Пароль",type:"password",value:"",icon:t.jsx(fe,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(ve,{}),action:()=>K.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:M.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(je,{}),value:d.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:d.messages,icon:t.jsx(Se,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:d.newVersion,icon:t.jsx(ye,{})},{id:"schedule",title:"Расписание",type:"toggle",value:d.schedule,icon:t.jsx(Y,{})},{id:"news",title:"Новости",type:"toggle",value:d.news,icon:t.jsx(we,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:d.applications,icon:t.jsx(be,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:d.doclist,icon:t.jsx(ke,{})}]}]}]}),nt=g.div`
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
`,it=({chosen:e,onClick:n})=>t.jsx(z,{minWidth:"35px",background:"transparent",icon:e?t.jsx(et,{style:{color:"var(--blue)"}}):t.jsx(tt,{}),onClick:n}),at=e=>{const{id:n,chosen:s,switchMenuItem:i}=e;return t.jsxs(nt,{chosen:s,onClick:()=>i(n),children:[t.jsx(Le,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...e}),t.jsx("div",{className:"buttons",children:t.jsx(it,{chosen:s,onClick:()=>{i(n)}})})]})},ot=Ce.memo(at),lt=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,Z=({title:e,enabledList:n,requiredList:s,add:i,remove:a})=>{const{settings:o}=ee.useSettings(),r=F.useMenu(),{visibleRoutes:l}=F.useMenu(),[d,u]=x.useState(null),c=r[n];if(!c||!l)return null;const f=p=>{c[p]?a(p,o,s):i(p,o,Object.keys(c).length,s)};return t.jsxs(lt,{children:[t.jsx(E,{size:2,align:"left",bottomGap:!0,children:e}),t.jsx(te,{placeholder:"Поиск",whereToSearch:l,searchEngine:Me,setResult:u}),Object.values(d??l).map((p,v)=>x.createElement(ot,{...p,key:v,chosen:!!c[p.id],switchMenuItem:f}))]})},rt=e=>!e||e.length===0?"Не указан":e,ct=()=>{const{theme:e,switchTheme:n}=ze(),{data:{user:s}}=se.useUser(),{open:i}=C(),{leftsideBarRoutes:a,homeRoutes:o}=F.useMenu(),{settings:r}=ee.useSettings(),[l,d]=x.useState(null),{property:u}=r["settings-notifications"],{property:c}=r["settings-appearance"],{widgetPayment:f,widgetSchedule:p,news:v}=r["settings-home-page"].property,j=(s==null?void 0:s.user_status)==="staff"?Te:Pe;return x.useEffect(()=>{d({...st({scheduledLightTheme:c.scheduledLightTheme,lightThemeRange:c.lightThemeRange,settings:u,isStudent:(s==null?void 0:s.user_status)==="stud",menu:{value:a,additionalActions:{onAdd:()=>i(t.jsx(Z,{title:"Настройка меню",enabledList:"leftsideBarRoutes",requiredList:j,remove:B,add:Ie})),onRemoveOne:h=>B(h,r,j)}},theme:{value:e==="dark",action:h=>n(h)},phone:{value:(s==null?void 0:s.phone)??"",description:s==null?void 0:s.phone,action:h=>_e(h??""),additionalActions:{onSuccess:h=>{M.update({key:"phone",value:h})}}},email:{value:(s==null?void 0:s.email)??"",description:rt(s==null?void 0:s.email),action:h=>De(h??""),additionalActions:{onSuccess:h=>{M.update({key:"email",value:h})}}},avatar:{value:s==null?void 0:s.avatar,description:"Смена аватара",icon:t.jsx(Oe,{avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:o,additionalActions:{onRemoveOne:h=>N(h,r),onAdd:()=>i(t.jsx(Z,{title:"Добавить страницы",enabledList:"homeRoutes",requiredList:[],remove:N,add:$e}))}},widgets:{schedule:{value:p,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!!h})},payments:{value:f,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!!h})}},news:{value:v,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"news",value:!!h})}}})})},[e,o,p,f,v,Object.keys(a??{}).length,Object.keys(o??{}).length]),l},oe=g.section`
    width: 100%;
    background: var(--block);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,dt=g.div`
    padding: 12px;
    width: 100%;
`,ut=({list:e})=>{const{allRoutes:n}=F.useMenu();return n?t.jsx(oe,{children:t.jsxs(R,{children:[(e==null?void 0:e.length)===0&&t.jsx(ne,{text:"Не удалось ничего найти"}),e==null?void 0:e.map((s,i)=>t.jsx(dt,{children:t.jsx(D,{fontSize:"0.85rem",children:s.map((a,o)=>t.jsxs(t.Fragment,{children:[a,o!==s.length-1&&" > "]}))})},i))]})}):null},ht=g.div`
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
`,xt=g.div`
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
`,L=({title:e,description:n,onClick:s,icon:i,rightIcon:a,editable:o=!0})=>t.jsxs(ht,{onClick:s,children:[i&&t.jsx("div",{className:"icon",children:i}),t.jsxs(xt,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:n})]}),a??(o?t.jsx(Fe,{}):null)]}),le=(e,n)=>{const s=e.find(({test:o})=>!o(...n)),i=!s,a=!n.find(o=>o.length===0)&&i;return{allChecked:i,isActive:a,validationError:s}},pt=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,gt=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,mt=[{text:"Необходимо изменить строку",test:(e,n)=>e!==n}],ft=e=>{const{value:n,message:s,action:i,type:a,title:o,additionalActions:r}=e,[l,d]=x.useState(n),[u,c]=x.useState(!1),[f,p]=x.useState(""),[v,j]=x.useState(!1),{close:h}=C(),{isActive:b,validationError:w}=le(mt,[l,n]),m=async()=>{var y;try{c(!0),await(i==null?void 0:i(l)),(y=r==null?void 0:r.onSuccess)==null||y.call(r,l),c(!1),j(!0)}catch(k){p("Возникла ошибка: "+k.message),c(!1)}};return x.useEffect(()=>{d(n),p(null)},[o]),t.jsxs(pt,{children:[t.jsx(E,{size:3,align:"left",children:o}),s&&t.jsx(_,{type:s.type??"",title:s.title,children:s.body}),t.jsx(_,{type:"failure",visible:!!f,children:f}),t.jsx(I,{value:l,setValue:d,type:a,mask:!0}),t.jsx(Be,{}),t.jsxs(gt,{children:[t.jsx(z,{text:"Отменить",width:"100%",onClick:h}),t.jsx(T,{isLoading:u,completed:v,isActive:b,text:"Обновить",action:m,setCompleted:j,popUpFailureMessage:w==null?void 0:w.text,height:"38px"})]})]},o)},q=e=>{const{open:n}=C(),s=()=>{n(t.jsx(ft,{...e}))};return t.jsx(L,{...e,onClick:s})},vt=({title:e,action:n,value:s,subfields:i,icon:a,settingsName:o,disabled:r})=>{const[l,d]=x.useState(s),u=c=>{n==null||n(c),d(c)};return x.useEffect(()=>{d(s)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(Ne,{disabled:r,title:e,state:l,action:u,icon:a}),i&&l&&t.jsx(he,{settingsName:o,fields:i,asChild:!0})]})},jt=e=>t.jsx(L,{...e,rightIcon:t.jsx(Ee,{})}),St=e=>{const n=()=>{var s;return(s=e==null?void 0:e.action)==null?void 0:s.call(e)};return t.jsx(L,{...e,editable:!1,onClick:n})},H=e=>{const n=x.useState(!1),s=x.useState(!1),i=x.useState(null);return{loading:n,error:i,completed:s,isActive:e}},yt=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,wt=e=>{const{data:{user:n}}=se.useUser();if(!n)return null;const[s,i]=x.useState([]),[a,o]=x.useState(null),{completed:[r,l],loading:[d,u],error:[c,f],isActive:p}=H(!!(n!=null&&n.avatar)),{completed:[v,j],loading:[h,b],error:[w,m],isActive:y}=H(s.length===1);x.useEffect(()=>{const S=new FileReader;S.onloadend=()=>{o(S.result)},s[0]?S.readAsDataURL(s[0]):o(null)},[s]);const k=async()=>{try{b(!0),j(!1);const S=await V(s[0]);if(S.data.result!=="ok")throw new Error(S.data.errors);j(!0),b(!1),i([]),M.update({key:"avatar",value:a})}catch(S){m("Ошибка: "+S.message)}},xe=async()=>{try{u(!0),l(!1);const S=await V();if(S.data.result!=="ok")throw new Error(S.data.errors);l(!0),u(!1),M.update({key:"avatar",value:""})}catch(S){f("Ошибка: "+S.message)}},pe=()=>K.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:xe});return t.jsxs(yt,{children:[t.jsx(Ve,{avatar:a??(n==null?void 0:n.avatar),name:(n==null?void 0:n.fullName)??"",isMe:!1,type:n==null?void 0:n.user_status,noInfo:!0}),t.jsx(_,{type:"failure",visible:!!w||!!c,children:w||c}),t.jsx(Ue,{files:s,maxFiles:1,formats:["image/jpeg"],setFiles:i,isActive:!0}),t.jsxs(R,{direction:"horizontal",children:[(n==null?void 0:n.avatar)&&t.jsx(T,{isLoading:d,background:O.red.main,completed:r,isActive:p,text:"Удалить фото профиля",action:pe,setCompleted:l}),t.jsx(T,{isLoading:h,completed:v,isActive:y,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:k,setCompleted:j})]})]})},bt=e=>{const{open:n}=C(),s=()=>{n(t.jsx(wt,{...e}))};return t.jsx(L,{...e,onClick:s})},kt=e=>{const{value:n,additionalActions:s}=e,[i,a]=x.useState(n),o=l=>{var d;return(d=s==null?void 0:s.onRemoveOne)==null?void 0:d.call(s,l)},r=()=>{var l;return(l=s==null?void 0:s.onAdd)==null?void 0:l.call(s)};return t.jsx(We,{list:i,onRemoveOne:o,onAddElement:r,setList:a})},Q=(e,n)=>e/n*100,Ct=g.div`
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
`,Ft=({range:e,step:n,initialValues:s,onSave:i,onChange:a,valueTransform:o})=>{const[r,l]=s,[d,u]=e,[c,f]=x.useState(r),[p,v]=x.useState(l),j=o?o(c):c,h=o?o(p):p,b=()=>{i([c,p])},w=m=>m===1?y=>{const k=Math.min(+y.target.value,p-n);f(k),y.target.value=k.toString()}:y=>{const k=Math.max(+y.target.value,c+n);v(k),y.target.value=k.toString()};return x.useEffect(()=>{a==null||a([c,p])},[c,p]),t.jsxs(Ct,{left:Q(c,u-d),width:Q(p-c,u-d),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:d,max:u,step:n,value:c,onChange:w(1),onMouseUp:b}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:d,max:u,step:n,value:p,onChange:w(2),onMouseUp:b})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:j}),t.jsx("span",{children:h})]})]})},Et=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Rt=e=>{const{value:n,action:s}=e,{close:i}=C(),[a,o]=n,[r,l]=x.useState(a),[d,u]=x.useState(o),[c,f]=x.useState(!1),p=()=>{s==null||s([r,d]),i()},v=h=>U(Math.floor(h/60))+":"+U(h%60),j=h=>{l(h[0]),u(h[1])};return t.jsxs(Et,{children:[t.jsx(Ft,{range:[0,1440],step:60,valueTransform:v,initialValues:[a,o],onSave:()=>null,onChange:j}),t.jsxs(R,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(z,{text:"Отменить",width:"120px",onClick:i}),t.jsx(T,{width:"120px",isLoading:!1,completed:c,text:"Сохранить",action:p,setCompleted:f})]})]})},At=e=>{const{open:n}=C(),s=()=>{n(t.jsx(Rt,{...e}))};return t.jsx(L,{...e,editable:!1,onClick:s,icon:t.jsx(Y,{})})},re=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",ce={small:4,middle:9,large:12,big:14},Lt=g.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:n})=>e?O[re(n)].main:"var(--text)"};
    }
`,Mt=g.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>ce[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:n})=>e?O[re(n)].main:"var(--block)"};
`,zt=g.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--theme-2);
    height: ${({size:e})=>ce[e]}px;
    overflow: hidden;
`,Tt=({title:e,value:n,size:s="middle",coloring:i=!0})=>t.jsxs(Lt,{value:n,coloring:i,children:[t.jsx(E,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(zt,{size:s,children:t.jsx(Mt,{size:s,coloring:i,value:n})})]}),A=7,de=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${A+3},})`),ue=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${A},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${A+3},}))`),X=[{text:`Минимальная длина ${A} знаков`,test:e=>e.length>=A},{text:"Не повторяет старый пароль",test:(e,n,s)=>s.length>0&&e.length>0&&e!==s},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>ue.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,n)=>e.length>0&&n.length>0&&e===n}],Pt=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>de.test(e)}],It=e=>{const n="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";for(let i=0;i<e;i++)s+=n.charAt(Math.floor(Math.random()*n.length));return s},_t=e=>de.test(e)?{title:"надежный",value:100}:ue.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<A?{title:"очень слабый",value:10}:{title:"слабый",value:20},Dt=g.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,Ot=g.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,$t=g.div`
    height: 100%;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Bt=g.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Nt=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Vt=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,Ut=g.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Wt=()=>{const[e,n]=x.useState(""),[s,i]=x.useState(""),[a,o]=x.useState(""),[r,l]=x.useState(null),[d,u]=x.useState(!1),[c,f]=x.useState(!1),{isActive:p,validationError:v}=le(X,[s,a,e]),j=_t(s),{close:h}=C(),b=()=>{const m=It(12);i(m),o(m)},w=async()=>{try{u(!0);const m=await Ze(e,s);if(m.data.result!=="ok")throw new Error(m.data.errors);f(!0),u(!1),i(""),o(""),n("")}catch(m){const y=m.message??m;l("Возникла ошибка: "+y),u(!1)}};return t.jsxs(Dt,{children:[t.jsxs($t,{children:[t.jsxs(Bt,{children:[t.jsx(E,{size:3,align:"left",children:"Смена пароля"}),t.jsx(D,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(R,{gap:8,direction:"vertical",children:X.map(m=>t.jsx(W,{fontSize:"0.85rem",setChecked:()=>null,text:m.text,checked:m.test(s,a,e)},m.text))}),t.jsx(D,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(R,{gap:8,direction:"vertical",children:Pt.map(m=>t.jsx(W,{fontSize:"0.85rem",setChecked:()=>null,text:m.text,checked:m.test(s,a,e)},m.text))})]}),!p&&t.jsx(z,{width:"100%",text:"Сгенерировать пароль",onClick:b,background:"var(--theme-2)"}),p&&t.jsxs(Vt,{children:[t.jsx(Ge,{size:"40px"}),t.jsx(E,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(Ot,{children:[t.jsxs(Ut,{children:[t.jsx(_,{title:"Ошибка",type:"failure",visible:!!r,children:r}),t.jsx(I,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:n,required:!0}),t.jsx(I,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:s,setValue:i,required:!0}),t.jsx(I,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:o,required:!0}),t.jsx(Tt,{value:j.value,size:"small",title:`Сложность пароля: ${j.title}`})]}),t.jsxs(Nt,{children:[t.jsx(z,{text:"Отменить",width:"100%",onClick:h}),t.jsx(T,{isLoading:d,completed:c,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${v==null?void 0:v.text}`,action:w,setCompleted:f,height:"38px",isActive:p})]})]})]})},Gt=e=>{const{open:n}=C(),s=()=>n(t.jsx(Wt,{}));return t.jsx(L,{...e,onClick:s})},Zt=g.div`
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
`,qt=e=>({toggle:t.jsx(vt,{...e},e.title),photo:t.jsx(bt,{...e},e.title),choices:t.jsx(kt,{...e},e.title),text:t.jsx(q,{...e},e.title),display:t.jsx(St,{...e},e.title),interval:t.jsx(At,{...e},e.title),tel:t.jsx(q,{...e},e.title),password:t.jsx(Gt,{...e},e.title),link:t.jsx(jt,{...e},e.title)}),he=({fields:e,settingsName:n,asChild:s=!1})=>{const i=a=>!a||!n?()=>null:o=>{console.log(o),P.updateSetting({nameSettings:n,nameParam:a,value:o})};return t.jsx(Zt,{asChild:s,children:e.map(a=>{const o=a.action??i(a.id),{type:r,visible:l=!0}=a;if(l)return qt({...a,action:o,settingsName:n})[r]})})},Ht=g.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:e})=>e?"flex":"none"};
    }
`,Qt=g.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,Xt=g.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Yt=({searchValue:e,searchResult:n,settingsConfig:s})=>{var o,r;const{allRoutes:i}=F.useMenu(),a=(o=J(ie))==null?void 0:o.params;return!i||s===void 0?null:t.jsx(Ht,{open:!!(a!=null&&a.id),children:t.jsx(Qt,{children:t.jsxs(Re,{children:[e&&t.jsx(ut,{list:n}),(r=Object.keys(s??{}))==null?void 0:r.map(l=>{const d=s[l],{path:u}=i[l];return t.jsx($,{path:u,children:t.jsx(R,{direction:"vertical",gap:12,children:!e&&d.map(({title:c,fields:f})=>t.jsxs(oe,{children:[t.jsx(Xt,{children:t.jsx(E,{size:4,align:"left",children:c})}),t.jsx(he,{fields:f,settingsName:l})]},c))})},u)}),t.jsx($,{path:"/",children:t.jsx(ae,{height:"100%",children:t.jsx(ne,{text:"Ничего не выбрано",image:t.jsx(qe,{color:"grey",size:50,children:t.jsx(Ae,{})})})})})]})})})},Jt=(e,n,s)=>{const i=[];if(!s)return i;let a=0,o=!1;for(const r in n){o=!1,i.push([]);const l=s[r].title.split(". ")[1];i[a].push(l);const d=n[r];for(const u of d)for(const c of u.fields)G(c.title).includes(G(e))&&(o?(i.push([...i[a].slice(0,i[a].length-1),c.title]),a++):(i[a].push(u.title),i[a].push(c.title)),o=!0);o?a++:i.pop()}return i},Kt=g(Qe)`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--block-shadow);
    margin-right: 20px;
    background: var(--block-content);

    ${He.isMobile} {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({open:e})=>e?"100%":"0"};
        max-width: ${({open:e})=>e?"100%":"0"};
        min-width: 0;
        display: ${({open:e})=>e?"flex":"none"};
    }
`,es=({settingsConfig:e,setSearchResult:n,setSearchValue:s})=>{var l,d;const{allRoutes:i}=F.useMenu(),{isMobile:a}=Xe(),o=(l=J(ie))==null?void 0:l.params,r=(u,c)=>Jt(u,c,i);return i?t.jsxs(Kt,{width:"250px",open:!(o!=null&&o.id),children:[t.jsx(te,{whereToSearch:e,searchEngine:r,placeholder:"Поиск",setExternalValue:s,setResult:n,validationCheck:!0,loadingOnType:!0}),(d=Object.keys(e??{}))==null?void 0:d.map(u=>{if(a&&u!=="settings-customize-menu"||!a)return x.createElement(Ye,{...i[u],title:i[u].title.slice(11,i[u].title.length),key:u,orientation:"horizontal",shadow:!1})})]}):null},is=()=>{const[e,n]=x.useState(""),[s,i]=x.useState(null),a=ct();return a===null?null:t.jsx(ae,{padding:"10px",children:t.jsx(Je,{children:t.jsxs(Ke,{ai:"flex-start",children:[t.jsx(es,{settingsConfig:a,setSearchResult:i,setSearchValue:n}),t.jsx(Yt,{searchValue:e,searchResult:s,settingsConfig:a})]})})})};export{is as default};
