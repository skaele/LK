import{j as t,c4 as G,c6 as M,ck as H,aQ as V,av as U,a6 as Q,cl as q,a5 as J,ay as K,l as Y,cm as Z,bu as X,s as h,R as ee,r as m,a8 as L,bN as te,bO as T,ax as ie}from"./vendor-f4aa581a.js";import{ak as b,Z as se,ao as x,v as ne,cA as ae,aj as B,aG as f,aD as z,ba as le,cu as oe,a8 as ce,y as de,cB as re,cC as ue,cD as F,cE as ge,cF as pe,bj as he,cG as C,cH as me,ai as S,cI as fe,c1 as xe,c2 as ve,ad as N,a3 as k,Y as je,cJ as $,T as ye,_ as D,bt as we,bg as I,L as Se,cK as be,bE as _e,b2 as Re,P as Ae,N as Ee}from"./index-2cf64e21.js";import{a as Te,b as Fe}from"./index.esm-8497e7a3.js";import{S as Ce}from"./index-0a0c5d07.js";const Ie=(i,s,e)=>i?[]:[{id:"phone_staff",title:"Служебный мобильный телефон",type:"tel",settingsName:b["settings-personal"],value:s==null?void 0:s.value.phone_staff,icon:t.jsx(M,{}),description:s.description,action:s.action,objectAction:s.objectAction,subfields:[{id:"allow_mobphone_in",title:"Показывать мобильный телефон внутри Личного кабинета",type:"toggle",value:s==null?void 0:s.value.allow_mobphone_in},{id:"allow_mobphone_out",title:"Показывать мобильный телефон на сайте",type:"toggle",value:s==null?void 0:s.value.allow_mobphone_out}]},{id:"guid_staff",title:"Адрес рабочего места",type:"address",settingsName:b["settings-personal"],value:e==null?void 0:e.value,icon:t.jsx(X,{}),description:e.description,objectAction:e.objectAction,subfields:[{id:"address",title:"Адрес",type:"select"},{id:"room",title:"Номер кабинета",type:"text"}]}],Oe=({isStudent:i,theme:s,scheduledLightTheme:e,lightThemeRange:a,email:l,avatar:c,homepage:o,phone:u,phonebookPhone:p,phonebookLocation:d,menu:g,settings:r})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:s.value,disabled:e,action:s.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:g.value,additionalActions:g.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:o.sections.value,additionalActions:o.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:o.widgets.schedule.value,action:o.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:o.widgets.payments.value,action:o.widgets.payments.action}]},{title:"Новости",fields:[{title:"Последние новости",type:"toggle",value:o.news.value,action:o.news.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:c.value,icon:c.icon,description:c.description,action:()=>null},{title:i?"Email":"Почта для уведомлений",type:"text",value:l.value,icon:t.jsx(G,{}),description:l.description,action:l.action,additionalActions:l.additionalActions},{id:"phone",title:"Телефон",type:"tel",settingsName:b["settings-personal"],value:u.value,icon:t.jsx(M,{}),description:u.description,action:u.action,additionalActions:u.additionalActions,objectAction:u.objectAction},...Ie(i,p,d),{title:"Пароль",type:"password",value:"",icon:t.jsx(H,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(V,{}),action:()=>se.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:x.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(U,{}),value:r.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:r.messages,icon:t.jsx(Q,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:r.newVersion,icon:t.jsx(q,{})},{id:"schedule",title:"Расписание",type:"toggle",value:r.schedule,icon:t.jsx(J,{})},{id:"news",title:"Новости",type:"toggle",value:r.news,icon:t.jsx(K,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:r.applications,icon:t.jsx(Y,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:r.doclist,icon:t.jsx(Z,{})}]}]}]}),Me=h.div`
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
`,Le=({chosen:i,onClick:s})=>t.jsx(ne,{minWidth:"35px",background:"transparent",icon:i?t.jsx(Te,{style:{color:"var(--blue)"}}):t.jsx(Fe,{}),onClick:s}),Be=i=>{const{id:s,chosen:e,switchMenuItem:a}=i;return t.jsxs(Me,{chosen:e,onClick:()=>a(s),children:[t.jsx(ae,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...i}),t.jsx("div",{className:"buttons",children:t.jsx(Le,{chosen:e,onClick:()=>{a(s)}})})]})},ze=ee.memo(Be),Ne=h.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,O=({enabledList:i,requiredList:s,add:e,remove:a})=>{const{settings:l}=B.useSettings(),c=f.useMenu(),{visibleRoutes:o}=f.useMenu(),[u,p]=m.useState(null),d=c[i];if(!d||!o)return null;const g=r=>{d[r]?a(r,l,s):e(r,l,Object.keys(d).length,s)};return t.jsxs(Ne,{children:[t.jsx(z,{placeholder:"Поиск",whereToSearch:o,searchEngine:le,setResult:p}),Object.values(u??o).map((r,v)=>m.createElement(ze,{...r,key:v,chosen:!!d[r.id],switchMenuItem:g}))]})},ke=i=>!i||i.length===0?"Не указан":i,$e=()=>{const{theme:i,switchTheme:s}=oe(),{data:{user:e}}=ce.useUser(),{open:a}=de(),{leftsideBarRoutes:l,homeRoutes:c}=f.useMenu(),{settings:o}=B.useSettings(),[u,p]=m.useState(null),{property:d}=o["settings-notifications"],{property:g}=o["settings-appearance"],{widgetPayment:r,widgetSchedule:v,news:_}=o["settings-home-page"].property,W=(e==null?void 0:e.user_status)==="stud",R=(e==null?void 0:e.user_status)==="staff"?re:ue;return m.useEffect(()=>{var A,E;p({...Oe({scheduledLightTheme:g.scheduledLightTheme,lightThemeRange:g.lightThemeRange,settings:d,menu:{value:l,additionalActions:{onAdd:()=>a(t.jsx(O,{enabledList:"leftsideBarRoutes",requiredList:R,remove:F,add:ge}),"Настройка меню"),onRemoveOne:n=>F(n,o,R)}},theme:{value:i==="dark",action:n=>s(n)},email:{value:(e==null?void 0:e.email)??"",description:ke(e==null?void 0:e.email),action:n=>pe(n??""),additionalActions:{onSuccess:n=>{x.update({key:"email",value:n})}}},avatar:{value:e==null?void 0:e.avatar,description:"Смена аватара",icon:t.jsx(he,{avatar:e==null?void 0:e.avatar,name:(e==null?void 0:e.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:c,additionalActions:{onRemoveOne:n=>C(n,o),onAdd:()=>a(t.jsx(O,{enabledList:"homeRoutes",requiredList:[],remove:C,add:me}),"Добавить страницы")}},widgets:{schedule:{value:v,action:n=>S.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!!n})},payments:{value:r,action:n=>S.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!!n})}},news:{value:_,action:n=>S.updateSetting({nameSettings:"settings-home-page",nameParam:"news",value:!!n})}},phone:{value:(e==null?void 0:e.phone)??"",description:e==null?void 0:e.phone,action:n=>{fe({phone:n??""})},additionalActions:{onSuccess:n=>{x.update({key:"phone",value:n})}}},phonebookPhone:{value:{phone_staff:e==null?void 0:e.phone_staff,allow_mobphone_in:e==null?void 0:e.allow_mobphone_in,allow_mobphone_out:e==null?void 0:e.allow_mobphone_out},description:e==null?void 0:e.phone_staff,objectAction:n=>{xe(n),Object.entries(n).forEach(([j,y])=>{x.update({key:j,value:y})})}},phonebookLocation:{value:((A=e==null?void 0:e.subdivisions)==null?void 0:A.map(n=>({guid_staff:n.guid_staff,post:n.post||"",address:n.address||"",room:n.room||""})))??[],description:((E=e==null?void 0:e.subdivisions)==null?void 0:E.map(n=>n.room).join(", "))||"-",objectAction:n=>{var j;if(ve(n),e!=null&&e.subdivisions){const y=(j=e==null?void 0:e.subdivisions)==null?void 0:j.map(w=>w.guid_staff===n.guid_staff?{...w,...n}:w);x.update({key:"subdivisions",value:y})}}},isStudent:W})})},[i,c,v,r,_,Object.keys(l??{}).length,Object.keys(c??{}).length]),u},P=h.section`
    width: 100%;
    background: var(--block);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,De=h.div`
    padding: 12px;
    width: 100%;
`,Pe=({list:i})=>{const{allRoutes:s}=f.useMenu();return s?t.jsx(P,{children:t.jsxs(N,{children:[(i==null?void 0:i.length)===0&&t.jsx(k,{text:"Не удалось ничего найти"}),i==null?void 0:i.map((e,a)=>t.jsx(De,{children:t.jsx(je,{fontSize:"0.85rem",children:e.map((l,c)=>t.jsxs(t.Fragment,{children:[l,c!==e.length-1&&" > "]}))})},a))]})}):null},We=h.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:i})=>i?"flex":"none"};
    }
`,Ge=h.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,He=h.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Ve=({searchValue:i,searchResult:s,settingsConfig:e})=>{var c,o;const{allRoutes:a}=f.useMenu(),l=(c=L($))==null?void 0:c.params;return!a||e===void 0?null:t.jsx(We,{open:!!(l!=null&&l.id),children:t.jsx(Ge,{children:t.jsxs(te,{children:[i&&t.jsx(Pe,{list:s}),(o=Object.keys(e??{}))==null?void 0:o.map(u=>{const p=e[u],{path:d}=a[u];return t.jsx(T,{path:d,children:t.jsx(N,{direction:"vertical",gap:12,children:!i&&p.map(({title:g,fields:r})=>t.jsxs(P,{children:[t.jsx(He,{children:t.jsx(ye,{size:4,align:"left",children:g})}),t.jsx(Ce,{fields:r,settingsName:u})]},g))})},d)}),t.jsx(T,{path:"/",children:t.jsx(D,{height:"100%",children:t.jsx(k,{text:"Ничего не выбрано",image:t.jsx(we,{color:"grey",size:50,children:t.jsx(ie,{})})})})})]})})})},Ue=(i,s,e)=>{const a=[];if(!e)return a;let l=0,c=!1;for(const o in s){c=!1,a.push([]);const u=e[o].title.split(". ")[1];a[l].push(u);const p=s[o];for(const d of p)for(const g of d.fields)I(g.title).includes(I(i))&&(c?(a.push([...a[l].slice(0,a[l].length-1),g.title]),l++):(a[l].push(d.title),a[l].push(g.title)),c=!0);c?l++:a.pop()}return a},Qe=h(be)`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--block-shadow);
    margin-right: 20px;
    background: var(--block-content);

    ${Se.isMobile} {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({open:i})=>i?"100%":"0"};
        max-width: ${({open:i})=>i?"100%":"0"};
        min-width: 0;
        display: ${({open:i})=>i?"flex":"none"};
    }
`,qe=({settingsConfig:i,setSearchResult:s,setSearchValue:e})=>{var u,p;const{allRoutes:a}=f.useMenu(),{isMobile:l}=_e(),c=(u=L($))==null?void 0:u.params,o=(d,g)=>Ue(d,g,a);return a?t.jsxs(Qe,{width:"250px",open:!(c!=null&&c.id),children:[t.jsx(z,{whereToSearch:i,searchEngine:o,placeholder:"Поиск",setExternalValue:e,setResult:s,validationCheck:!0,loadingOnType:!0}),(p=Object.keys(i??{}))==null?void 0:p.map(d=>{if(l&&d!=="settings-customize-menu"||!l)return m.createElement(Re,{...a[d],title:a[d].title.slice(11,a[d].title.length),key:d,orientation:"horizontal",shadow:!1})})]}):null},Xe=()=>{const[i,s]=m.useState(""),[e,a]=m.useState(null),l=$e();return l===null?null:t.jsx(D,{padding:"10px",children:t.jsx(Ae,{children:t.jsxs(Ee,{ai:"flex-start",children:[t.jsx(qe,{settingsConfig:l,setSearchResult:a,setSearchValue:s}),t.jsx(Ve,{searchValue:i,searchResult:e,settingsConfig:l})]})})})};export{Xe as default};
