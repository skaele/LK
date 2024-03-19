import{j as e,cg as O,ch as z,ci as B,aO as _,ar as $,aI as N,cj as V,aj as W,au as D,l as U,ck as G,s as g,R as H,r as x,b$ as T,bL as q,bM as S,at as Q}from"./vendor-561dac3a.js";import{U as Y,ab as j,r as J,cm as K,bv as L,az as m,aw as A,b4 as X,cg as Z,a7 as ee,v as te,cn as se,co as ie,cp as b,cq as ne,cr as ae,cs as oe,bb as le,ct as R,cu as ce,a6 as f,a3 as F,_ as I,R as de,cv as M,T as re,V as P,bk as ue,b8 as k,G as he,cw as pe,bw as ge,aY as xe,P as me,H as ve}from"./index-7cc4f467.js";import{a as fe,b as je}from"./index.esm-7da5ec35.js";import{S as we}from"./index-755e93cb.js";const ye=({theme:s,scheduledLightTheme:o,lightThemeRange:t,email:i,avatar:n,homepage:a,phone:l,menu:u,settings:r})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:s.value,disabled:o,action:s.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:u.value,additionalActions:u.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:a.sections.value,additionalActions:a.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:a.widgets.schedule.value,action:a.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:a.widgets.payments.value,action:a.widgets.payments.action}]},{title:"Новости",fields:[{title:"Последние новости",type:"toggle",value:a.news.value,action:a.news.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:n.value,icon:n.icon,description:n.description,action:()=>null},{title:"Email",type:"text",value:i.value,icon:e.jsx(O,{}),description:i.description,action:i.action,additionalActions:i.additionalActions},{title:"Телефон",type:"tel",value:l.value,icon:e.jsx(z,{}),description:l.description,action:l.action,additionalActions:l.additionalActions},{title:"Пароль",type:"password",value:"",icon:e.jsx(B,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:e.jsx(_,{}),action:()=>Y.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:j.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:e.jsx($,{}),value:r.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:r.messages,icon:e.jsx(N,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:r.newVersion,icon:e.jsx(V,{})},{id:"schedule",title:"Расписание",type:"toggle",value:r.schedule,icon:e.jsx(W,{})},{id:"news",title:"Новости",type:"toggle",value:r.news,icon:e.jsx(D,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:r.applications,icon:e.jsx(U,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:r.doclist,icon:e.jsx(G,{})}]}]}]}),Se=g.div`
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
`,be=({chosen:s,onClick:o})=>e.jsx(J,{minWidth:"35px",background:"transparent",icon:s?e.jsx(fe,{style:{color:"var(--blue)"}}):e.jsx(je,{}),onClick:o}),Re=s=>{const{id:o,chosen:t,switchMenuItem:i}=s;return e.jsxs(Se,{chosen:t,onClick:()=>i(o),children:[e.jsx(K,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...s}),e.jsx("div",{className:"buttons",children:e.jsx(be,{chosen:t,onClick:()=>{i(o)}})})]})},ke=H.memo(Re),Ee=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,E=({enabledList:s,requiredList:o,add:t,remove:i})=>{const{settings:n}=L.useSettings(),a=m.useMenu(),{visibleRoutes:l}=m.useMenu(),[u,r]=x.useState(null),c=a[s];if(!c||!l)return null;const h=p=>{c[p]?i(p,n,o):t(p,n,Object.keys(c).length,o)};return e.jsxs(Ee,{children:[e.jsx(A,{placeholder:"Поиск",whereToSearch:l,searchEngine:X,setResult:r}),Object.values(u??l).map((p,v)=>x.createElement(ke,{...p,key:v,chosen:!!c[p.id],switchMenuItem:h}))]})},Te=s=>!s||s.length===0?"Не указан":s,Le=()=>{const{theme:s,switchTheme:o}=Z(),{data:{user:t}}=ee.useUser(),{open:i}=te(),{leftsideBarRoutes:n,homeRoutes:a}=m.useMenu(),{settings:l}=L.useSettings(),[u,r]=x.useState(null),{property:c}=l["settings-notifications"],{property:h}=l["settings-appearance"],{widgetPayment:p,widgetSchedule:v,news:w}=l["settings-home-page"].property,y=(t==null?void 0:t.user_status)==="staff"?se:ie;return x.useEffect(()=>{r({...ye({scheduledLightTheme:h.scheduledLightTheme,lightThemeRange:h.lightThemeRange,settings:c,isStudent:(t==null?void 0:t.user_status)==="stud",menu:{value:n,additionalActions:{onAdd:()=>i(e.jsx(E,{enabledList:"leftsideBarRoutes",requiredList:y,remove:b,add:ne}),"Настройка меню"),onRemoveOne:d=>b(d,l,y)}},theme:{value:s==="dark",action:d=>o(d)},phone:{value:(t==null?void 0:t.phone)??"",description:t==null?void 0:t.phone,action:d=>ae(d??""),additionalActions:{onSuccess:d=>{j.update({key:"phone",value:d})}}},email:{value:(t==null?void 0:t.email)??"",description:Te(t==null?void 0:t.email),action:d=>oe(d??""),additionalActions:{onSuccess:d=>{j.update({key:"email",value:d})}}},avatar:{value:t==null?void 0:t.avatar,description:"Смена аватара",icon:e.jsx(le,{avatar:t==null?void 0:t.avatar,name:(t==null?void 0:t.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:a,additionalActions:{onRemoveOne:d=>R(d,l),onAdd:()=>i(e.jsx(E,{enabledList:"homeRoutes",requiredList:[],remove:R,add:ce}),"Добавить страницы")}},widgets:{schedule:{value:v,action:d=>f.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!!d})},payments:{value:p,action:d=>f.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!!d})}},news:{value:w,action:d=>f.updateSetting({nameSettings:"settings-home-page",nameParam:"news",value:!!d})}}})})},[s,a,v,p,w,Object.keys(n??{}).length,Object.keys(a??{}).length]),u},C=g.section`
    width: 100%;
    background: var(--block);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,Ae=g.div`
    padding: 12px;
    width: 100%;
`,Fe=({list:s})=>{const{allRoutes:o}=m.useMenu();return o?e.jsx(C,{children:e.jsxs(F,{children:[(s==null?void 0:s.length)===0&&e.jsx(I,{text:"Не удалось ничего найти"}),s==null?void 0:s.map((t,i)=>e.jsx(Ae,{children:e.jsx(de,{fontSize:"0.85rem",children:t.map((n,a)=>e.jsxs(e.Fragment,{children:[n,a!==t.length-1&&" > "]}))})},i))]})}):null},Ie=g.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:s})=>s?"flex":"none"};
    }
`,Me=g.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,Pe=g.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Ce=({searchValue:s,searchResult:o,settingsConfig:t})=>{var a,l;const{allRoutes:i}=m.useMenu(),n=(a=T(M))==null?void 0:a.params;return!i||t===void 0?null:e.jsx(Ie,{open:!!(n!=null&&n.id),children:e.jsx(Me,{children:e.jsxs(q,{children:[s&&e.jsx(Fe,{list:o}),(l=Object.keys(t??{}))==null?void 0:l.map(u=>{const r=t[u],{path:c}=i[u];return e.jsx(S,{path:c,children:e.jsx(F,{direction:"vertical",gap:12,children:!s&&r.map(({title:h,fields:p})=>e.jsxs(C,{children:[e.jsx(Pe,{children:e.jsx(re,{size:4,align:"left",children:h})}),e.jsx(we,{fields:p,settingsName:u})]},h))})},c)}),e.jsx(S,{path:"/",children:e.jsx(P,{height:"100%",children:e.jsx(I,{text:"Ничего не выбрано",image:e.jsx(ue,{color:"grey",size:50,children:e.jsx(Q,{})})})})})]})})})},Oe=(s,o,t)=>{const i=[];if(!t)return i;let n=0,a=!1;for(const l in o){a=!1,i.push([]);const u=t[l].title.split(". ")[1];i[n].push(u);const r=o[l];for(const c of r)for(const h of c.fields)k(h.title).includes(k(s))&&(a?(i.push([...i[n].slice(0,i[n].length-1),h.title]),n++):(i[n].push(c.title),i[n].push(h.title)),a=!0);a?n++:i.pop()}return i},ze=g(pe)`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--block-shadow);
    margin-right: 20px;
    background: var(--block-content);

    ${he.isMobile} {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({open:s})=>s?"100%":"0"};
        max-width: ${({open:s})=>s?"100%":"0"};
        min-width: 0;
        display: ${({open:s})=>s?"flex":"none"};
    }
`,Be=({settingsConfig:s,setSearchResult:o,setSearchValue:t})=>{var u,r;const{allRoutes:i}=m.useMenu(),{isMobile:n}=ge(),a=(u=T(M))==null?void 0:u.params,l=(c,h)=>Oe(c,h,i);return i?e.jsxs(ze,{width:"250px",open:!(a!=null&&a.id),children:[e.jsx(A,{whereToSearch:s,searchEngine:l,placeholder:"Поиск",setExternalValue:t,setResult:o,validationCheck:!0,loadingOnType:!0}),(r=Object.keys(s??{}))==null?void 0:r.map(c=>{if(n&&c!=="settings-customize-menu"||!n)return x.createElement(xe,{...i[c],title:i[c].title.slice(11,i[c].title.length),key:c,orientation:"horizontal",shadow:!1})})]}):null},We=()=>{const[s,o]=x.useState(""),[t,i]=x.useState(null),n=Le();return n===null?null:e.jsx(P,{padding:"10px",children:e.jsx(me,{children:e.jsxs(ve,{ai:"flex-start",children:[e.jsx(Be,{settingsConfig:n,setSearchResult:i,setSearchValue:o}),e.jsx(Ce,{searchValue:s,searchResult:t,settingsConfig:n})]})})})};export{We as default};
