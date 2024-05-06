import{j as t,c4 as W,c6 as O,ck as H,aO as U,ar as G,aI as q,cl as Q,aj as J,au as X,l as K,cm as Y,bs as Z,s as h,R as ee,r as m,c0 as L,bM as te,bN as T,at as ie}from"./vendor-35c3991b.js";import{ac as b,V as se,ag as x,t as ne,cw as ae,ab as B,aF as f,aC as z,b9 as le,cq as oe,a1 as ce,w as de,cx as re,cy as ue,cz as F,cA as pe,cB as ge,bd as he,cC as C,cD as me,aa as S,cE as fe,c1 as xe,c2 as ve,a6 as k,a0 as N,U as je,cF as $,T as we,X as P,bv as ye,bk as I,H as Se,cG as be,aw as _e,b1 as Re,P as Ae,J as Ee}from"./index-46a096a9.js";import{a as Te,b as Fe}from"./index.esm-e824fb2f.js";import{S as Ce}from"./index-73d7a4e0.js";import"./get-form-30ba56ae.js";import"./find-current-in-select-ba4611d5.js";import"./getCabinetMask-cea96108.js";const Ie=(i,s,e)=>i?[]:[{id:"phone_staff",title:"Служебный мобильный телефон",type:"tel",settingsName:b["settings-personal"],value:s==null?void 0:s.value.phone_staff,icon:t.jsx(O,{}),description:s.description,action:s.action,objectAction:s.objectAction,subfields:[{id:"allow_mobphone_in",title:"Показывать мобильный телефон внутри Личного кабинета",type:"toggle",value:s==null?void 0:s.value.allow_mobphone_in},{id:"allow_mobphone_out",title:"Показывать мобильный телефон на сайте",type:"toggle",value:s==null?void 0:s.value.allow_mobphone_out}]},{id:"guid_staff",title:"Адрес рабочего места",type:"address",settingsName:b["settings-personal"],value:e==null?void 0:e.value,icon:t.jsx(Z,{}),description:e.description,objectAction:e.objectAction,subfields:[{id:"address",title:"Адрес",type:"select"},{id:"room",title:"Номер кабинета",type:"text"}]}],Me=({isStudent:i,theme:s,scheduledLightTheme:e,lightThemeRange:a,email:l,avatar:c,homepage:o,phone:u,phonebookPhone:g,phonebookLocation:d,menu:p,settings:r})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:s.value,disabled:e,action:s.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:p.value,additionalActions:p.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:o.sections.value,additionalActions:o.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:o.widgets.schedule.value,action:o.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:o.widgets.payments.value,action:o.widgets.payments.action}]},{title:"Новости",fields:[{title:"Последние новости",type:"toggle",value:o.news.value,action:o.news.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:c.value,icon:c.icon,description:c.description,action:()=>null},{title:i?"Email":"Почта для уведомлений",type:"text",value:l.value,icon:t.jsx(W,{}),description:l.description,action:l.action,additionalActions:l.additionalActions},{id:"phone",title:"Телефон",type:"tel",settingsName:b["settings-personal"],value:u.value,icon:t.jsx(O,{}),description:u.description,action:u.action,additionalActions:u.additionalActions,objectAction:u.objectAction},...Ie(i,g,d),{title:"Пароль",type:"password",value:"",icon:t.jsx(H,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(U,{}),action:()=>se.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:x.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(G,{}),value:r.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:r.messages,icon:t.jsx(q,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:r.newVersion,icon:t.jsx(Q,{})},{id:"schedule",title:"Расписание",type:"toggle",value:r.schedule,icon:t.jsx(J,{})},{id:"news",title:"Новости",type:"toggle",value:r.news,icon:t.jsx(X,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:r.applications,icon:t.jsx(K,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:r.doclist,icon:t.jsx(Y,{})}]}]}]}),Oe=h.div`
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
`,Le=({chosen:i,onClick:s})=>t.jsx(ne,{minWidth:"35px",background:"transparent",icon:i?t.jsx(Te,{style:{color:"var(--blue)"}}):t.jsx(Fe,{}),onClick:s}),Be=i=>{const{id:s,chosen:e,switchMenuItem:a}=i;return t.jsxs(Oe,{chosen:e,onClick:()=>a(s),children:[t.jsx(ae,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...i}),t.jsx("div",{className:"buttons",children:t.jsx(Le,{chosen:e,onClick:()=>{a(s)}})})]})},ze=ee.memo(Be),ke=h.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,M=({enabledList:i,requiredList:s,add:e,remove:a})=>{const{settings:l}=B.useSettings(),c=f.useMenu(),{visibleRoutes:o}=f.useMenu(),[u,g]=m.useState(null),d=c[i];if(!d||!o)return null;const p=r=>{d[r]?a(r,l,s):e(r,l,Object.keys(d).length,s)};return t.jsxs(ke,{children:[t.jsx(z,{placeholder:"Поиск",whereToSearch:o,searchEngine:le,setResult:g}),Object.values(u??o).map((r,v)=>m.createElement(ze,{...r,key:v,chosen:!!d[r.id],switchMenuItem:p}))]})},Ne=i=>!i||i.length===0?"Не указан":i,$e=()=>{const{theme:i,switchTheme:s}=oe(),{data:{user:e}}=ce.useUser(),{open:a}=de(),{leftsideBarRoutes:l,homeRoutes:c}=f.useMenu(),{settings:o}=B.useSettings(),[u,g]=m.useState(null),{property:d}=o["settings-notifications"],{property:p}=o["settings-appearance"],{widgetPayment:r,widgetSchedule:v,news:_}=o["settings-home-page"].property,V=(e==null?void 0:e.user_status)==="stud",R=(e==null?void 0:e.user_status)==="staff"?re:ue;return m.useEffect(()=>{var A,E;g({...Me({scheduledLightTheme:p.scheduledLightTheme,lightThemeRange:p.lightThemeRange,settings:d,menu:{value:l,additionalActions:{onAdd:()=>a(t.jsx(M,{enabledList:"leftsideBarRoutes",requiredList:R,remove:F,add:pe}),"Настройка меню"),onRemoveOne:n=>F(n,o,R)}},theme:{value:i==="dark",action:n=>s(n)},email:{value:(e==null?void 0:e.email)??"",description:Ne(e==null?void 0:e.email),action:n=>ge(n??""),additionalActions:{onSuccess:n=>{x.update({key:"email",value:n})}}},avatar:{value:e==null?void 0:e.avatar,description:"Смена аватара",icon:t.jsx(he,{avatar:e==null?void 0:e.avatar,name:(e==null?void 0:e.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:c,additionalActions:{onRemoveOne:n=>C(n,o),onAdd:()=>a(t.jsx(M,{enabledList:"homeRoutes",requiredList:[],remove:C,add:me}),"Добавить страницы")}},widgets:{schedule:{value:v,action:n=>S.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!!n})},payments:{value:r,action:n=>S.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!!n})}},news:{value:_,action:n=>S.updateSetting({nameSettings:"settings-home-page",nameParam:"news",value:!!n})}},phone:{value:(e==null?void 0:e.phone)??"",description:e==null?void 0:e.phone,action:n=>{fe({phone:n??""})},additionalActions:{onSuccess:n=>{x.update({key:"phone",value:n})}}},phonebookPhone:{value:{phone_staff:e==null?void 0:e.phone_staff,allow_mobphone_in:e==null?void 0:e.allow_mobphone_in,allow_mobphone_out:e==null?void 0:e.allow_mobphone_out},description:e==null?void 0:e.phone_staff,objectAction:n=>{xe(n),Object.entries(n).forEach(([j,w])=>{x.update({key:j,value:w})})}},phonebookLocation:{value:((A=e==null?void 0:e.subdivisions)==null?void 0:A.map(n=>({guid_staff:n.guid_staff,post:n.post||"",address:n.address||"",room:n.room||""})))??[],description:((E=e==null?void 0:e.subdivisions)==null?void 0:E.map(n=>n.room).join(", "))||"-",objectAction:n=>{var j;if(ve(n),e!=null&&e.subdivisions){const w=(j=e==null?void 0:e.subdivisions)==null?void 0:j.map(y=>y.guid_staff===n.guid_staff?{...y,...n}:y);x.update({key:"subdivisions",value:w})}}},isStudent:V})})},[i,c,v,r,_,Object.keys(l??{}).length,Object.keys(c??{}).length]),u},D=h.section`
    width: 100%;
    background: var(--block);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,Pe=h.div`
    padding: 12px;
    width: 100%;
`,De=({list:i})=>{const{allRoutes:s}=f.useMenu();return s?t.jsx(D,{children:t.jsxs(k,{children:[(i==null?void 0:i.length)===0&&t.jsx(N,{text:"Не удалось ничего найти"}),i==null?void 0:i.map((e,a)=>t.jsx(Pe,{children:t.jsx(je,{fontSize:"0.85rem",children:e.map((l,c)=>t.jsxs(t.Fragment,{children:[l,c!==e.length-1&&" > "]}))})},a))]})}):null},Ve=h.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:i})=>i?"flex":"none"};
    }
`,We=h.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,He=h.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Ue=({searchValue:i,searchResult:s,settingsConfig:e})=>{var c,o;const{allRoutes:a}=f.useMenu(),l=(c=L($))==null?void 0:c.params;return!a||e===void 0?null:t.jsx(Ve,{open:!!(l!=null&&l.id),children:t.jsx(We,{children:t.jsxs(te,{children:[i&&t.jsx(De,{list:s}),(o=Object.keys(e??{}))==null?void 0:o.map(u=>{const g=e[u],{path:d}=a[u];return t.jsx(T,{path:d,children:t.jsx(k,{direction:"vertical",gap:12,children:!i&&g.map(({title:p,fields:r})=>t.jsxs(D,{children:[t.jsx(He,{children:t.jsx(we,{size:4,align:"left",children:p})}),t.jsx(Ce,{fields:r,settingsName:u})]},p))})},d)}),t.jsx(T,{path:"/",children:t.jsx(P,{height:"100%",children:t.jsx(N,{text:"Ничего не выбрано",image:t.jsx(ye,{color:"grey",size:50,children:t.jsx(ie,{})})})})})]})})})},Ge=(i,s,e)=>{const a=[];if(!e)return a;let l=0,c=!1;for(const o in s){c=!1,a.push([]);const u=e[o].title.split(". ")[1];a[l].push(u);const g=s[o];for(const d of g)for(const p of d.fields)I(p.title).includes(I(i))&&(c?(a.push([...a[l].slice(0,a[l].length-1),p.title]),l++):(a[l].push(d.title),a[l].push(p.title)),c=!0);c?l++:a.pop()}return a},qe=h(be)`
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
`,Qe=({settingsConfig:i,setSearchResult:s,setSearchValue:e})=>{var u,g;const{allRoutes:a}=f.useMenu(),{isMobile:l}=_e(),c=(u=L($))==null?void 0:u.params,o=(d,p)=>Ge(d,p,a);return a?t.jsxs(qe,{width:"250px",open:!(c!=null&&c.id),children:[t.jsx(z,{whereToSearch:i,searchEngine:o,placeholder:"Поиск",setExternalValue:e,setResult:s,validationCheck:!0,loadingOnType:!0}),(g=Object.keys(i??{}))==null?void 0:g.map(d=>{if(l&&d!=="settings-customize-menu"||!l)return m.createElement(Re,{...a[d],title:a[d].title.slice(11,a[d].title.length),key:d,orientation:"horizontal",shadow:!1})})]}):null},it=()=>{const[i,s]=m.useState(""),[e,a]=m.useState(null),l=$e();return l===null?null:t.jsx(P,{padding:"10px",children:t.jsx(Ae,{children:t.jsxs(Ee,{ai:"flex-start",children:[t.jsx(Qe,{settingsConfig:l,setSearchResult:a,setSearchValue:s}),t.jsx(Ue,{searchValue:i,searchResult:e,settingsConfig:l})]})})})};export{it as default};
