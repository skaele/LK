import{j as t,bf as ge,bg as me,bh as fe,a2 as ve,$ as je,O as be,bi as Se,C as Y,P as ye,k as we,bj as ke,s as m,r as h,b2 as Ce,z as Fe,aR as K,aI as Ae,aJ as D,a0 as Ee}from"./vendor-9cc634b6.js";import{bl as X,bm as z,aM as ee,U as F,T as A,O as te,ap as Re,bp as Le,z as se,ab as C,bq as ze,br as Te,bs as B,bt as Me,bu as Pe,bv as Ie,ay as Oe,bw as N,bx as _e,by as O,w as E,E as ne,u as _,M as P,a8 as M,g as $e,aa as I,S as T,bz as De,bA as Be,bB as Ne,f as $,bC as V,bD as Ve,C as U,bE as Ue,bF as ie,h as ae,aJ as Ge,av as G,bG as We,aN as qe,an as He,P as Ze,a7 as Je}from"./index-3fee83b2.js";import{C as Qe}from"./customize-leftside-bar-item-ddffd88f.js";import{A as Ye}from"./index-ce139e30.js";import"./index.esm-c297f790.js";const Ke=({theme:e,scheduledLightTheme:n,lightThemeRange:s,email:i,avatar:a,homepage:l,phone:r,menu:o,settings:d})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:e.value,disabled:n,action:e.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:o.value,additionalActions:o.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:l.sections.value,additionalActions:l.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:l.widgets.schedule.value,action:l.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:l.widgets.payments.value,action:l.widgets.payments.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:a.value,icon:a.icon,description:a.description,action:()=>null},{title:"Email",type:"text",value:i.value,icon:t.jsx(ge,{}),description:i.description,action:i.action,additionalActions:i.additionalActions},{title:"Телефон",type:"tel",value:r.value,icon:t.jsx(me,{}),description:r.description,action:r.action,additionalActions:r.additionalActions},{title:"Пароль",type:"password",value:"",icon:t.jsx(fe,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(ve,{}),action:()=>X.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:z.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(je,{}),value:d.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:d.messages,icon:t.jsx(be,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:d.newVersion,icon:t.jsx(Se,{})},{id:"schedule",title:"Расписание",type:"toggle",value:d.schedule,icon:t.jsx(Y,{})},{id:"news",title:"Новости",type:"toggle",value:d.news,icon:t.jsx(ye,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:d.applications,icon:t.jsx(we,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:d.doclist,icon:t.jsx(ke,{})}]}]}]}),Xe=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,W=({title:e,enabledList:n,requiredList:s,add:i,remove:a})=>{const{settings:l}=ee.useSettings(),r=F.useMenu(),{visibleRoutes:o}=F.useMenu(),[d,u]=h.useState(null),c=r[n];if(!c||!o)return null;const f=p=>{c[p]?a(p,l,s):i(p,l,Object.keys(c).length,s)};return t.jsxs(Xe,{children:[t.jsx(A,{size:2,align:"left",bottomGap:!0,children:e}),t.jsx(te,{placeholder:"Поиск",whereToSearch:o,searchEngine:Re,setResult:u}),Object.values(d??o).map((p,v)=>h.createElement(Qe,{...p,key:v,chosen:!!c[p.id],switchMenuItem:f}))]})},et=e=>!e||e.length===0?"Не указан":e,tt=()=>{const{theme:e,switchTheme:n}=Le(),{data:{user:s}}=se.useUser(),{open:i}=C(),{leftsideBarRoutes:a,homeRoutes:l}=F.useMenu(),{settings:r}=ee.useSettings(),[o,d]=h.useState(null),{property:u}=r["settings-notifications"],{property:c}=r["settings-appearance"],{widgetPayment:f,widgetSchedule:p}=r["settings-home-page"].property,v=(s==null?void 0:s.user_status)==="staff"?ze:Te;return h.useEffect(()=>{d({...Ke({scheduledLightTheme:c.scheduledLightTheme,lightThemeRange:c.lightThemeRange,settings:u,isStudent:(s==null?void 0:s.user_status)==="stud",menu:{value:a,additionalActions:{onAdd:()=>i(t.jsx(W,{title:"Настройка меню",enabledList:"leftsideBarRoutes",requiredList:v,remove:B,add:Me})),onRemoveOne:x=>B(x,r,v)}},theme:{value:e==="dark",action:x=>n(x)},phone:{value:(s==null?void 0:s.phone)??"",description:s==null?void 0:s.phone,action:x=>Pe(x??""),additionalActions:{onSuccess:x=>{z.update({key:"phone",value:x})}}},email:{value:(s==null?void 0:s.email)??"",description:et(s==null?void 0:s.email),action:x=>Ie(x??""),additionalActions:{onSuccess:x=>{z.update({key:"email",value:x})}}},avatar:{value:s==null?void 0:s.avatar,description:"Смена аватара",icon:t.jsx(Oe,{avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:l,additionalActions:{onRemoveOne:x=>N(x,r),onAdd:()=>i(t.jsx(W,{title:"Добавить страницы",enabledList:"homeRoutes",requiredList:[],remove:N,add:_e}))}},widgets:{schedule:{value:p,action:x=>O.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!x})},payments:{value:f,action:x=>O.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!x})}}}})})},[e,l,p,f,Object.keys(a??{}).length,Object.keys(l??{}).length]),o},le=m.section`
    width: 100%;
    background: var(--schedule);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,st=m.div`
    padding: 12px;
    width: 100%;
`,nt=({list:e})=>{const{allRoutes:n}=F.useMenu();return n?t.jsx(le,{children:t.jsxs(E,{children:[(e==null?void 0:e.length)===0&&t.jsx(ne,{text:"Не удалось ничего найти"}),e==null?void 0:e.map((s,i)=>t.jsx(st,{children:t.jsx(_,{fontSize:"0.85rem",children:s.map((a,l)=>t.jsxs(t.Fragment,{children:[a,l!==s.length-1&&" > "]}))})},i))]})}):null},it=m.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0px 12px;
    min-height: 45px;
    border-radius: var(--brLight);

    &:hover {
        background: var(--mild-theme);
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
`,at=m.div`
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
`,L=({title:e,description:n,onClick:s,icon:i,rightIcon:a,editable:l=!0})=>t.jsxs(it,{onClick:s,children:[i&&t.jsx("div",{className:"icon",children:i}),t.jsxs(at,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:n})]}),a??(l?t.jsx(Ce,{}):null)]}),oe=(e,n)=>{const s=e.find(({test:l})=>!l(...n)),i=!s,a=!n.find(l=>l.length===0)&&i;return{allChecked:i,isActive:a,validationError:s}},lt=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,ot=m.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,rt=[{text:"Необходимо изменить строку",test:(e,n)=>e!==n}],ct=e=>{const{value:n,message:s,action:i,type:a,title:l,additionalActions:r}=e,[o,d]=h.useState(n),[u,c]=h.useState(!1),[f,p]=h.useState(""),[v,x]=h.useState(!1),{close:j}=C(),{isActive:y,validationError:g}=oe(rt,[o,n]),k=async()=>{var S;try{c(!0),await(i==null?void 0:i(o)),(S=r==null?void 0:r.onSuccess)==null||S.call(r,o),c(!1),x(!0)}catch(w){p("Возникла ошибка: "+w.message),c(!1)}};return h.useEffect(()=>{d(n),p(null)},[l]),t.jsxs(lt,{children:[t.jsx(A,{size:3,align:"left",children:l}),s&&t.jsx(P,{type:s.type??"",title:s.title,children:s.body}),t.jsx(P,{type:"failure",visible:!!f,children:f}),t.jsx(M,{value:o,setValue:d,type:a,mask:!0}),t.jsx($e,{}),t.jsxs(ot,{children:[t.jsx(I,{text:"Отменить",width:"100%",onClick:j}),t.jsx(T,{isLoading:u,completed:v,isActive:y,text:"Обновить",action:k,setCompleted:x,popUpFailureMessage:g==null?void 0:g.text,height:"38px"})]})]},l)},q=e=>{const{open:n}=C(),s=()=>{n(t.jsx(ct,{...e}))};return t.jsx(L,{...e,onClick:s})},dt=({title:e,action:n,value:s,subfields:i,icon:a,settingsName:l,disabled:r})=>{const[o,d]=h.useState(s),u=c=>{n==null||n(c),d(c)};return h.useEffect(()=>{d(s)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(De,{disabled:r,title:e,state:o,action:u,icon:a}),i&&o&&t.jsx(he,{settingsName:l,fields:i,asChild:!0})]})},ut=e=>t.jsx(L,{...e,rightIcon:t.jsx(Fe,{})}),ht=e=>{const n=()=>{var s;return(s=e==null?void 0:e.action)==null?void 0:s.call(e)};return t.jsx(L,{...e,editable:!1,onClick:n})},H=e=>{const n=h.useState(!1),s=h.useState(!1),i=h.useState(null);return{loading:n,error:i,completed:s,isActive:e}},xt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,pt=e=>{const{data:{user:n}}=se.useUser();if(!n)return null;const[s,i]=h.useState([]),[a,l]=h.useState(null),{completed:[r,o],loading:[d,u],error:[c,f],isActive:p}=H(!!(n!=null&&n.avatar)),{completed:[v,x],loading:[j,y],error:[g,k],isActive:S}=H(s.length===1);h.useEffect(()=>{const b=new FileReader;b.onloadend=()=>{l(b.result)},s[0]?b.readAsDataURL(s[0]):l(null)},[s]);const w=async()=>{try{y(!0),x(!1);const b=await V(s[0]);if(b.data.result!=="ok")throw new Error(b.data.errors);x(!0),y(!1),i([]),z.update({key:"avatar",value:a})}catch(b){k("Ошибка: "+b.message)}},xe=async()=>{try{u(!0),o(!1);const b=await V();if(b.data.result!=="ok")throw new Error(b.data.errors);o(!0),u(!1),z.update({key:"avatar",value:""})}catch(b){f("Ошибка: "+b.message)}},pe=()=>X.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:xe});return t.jsxs(xt,{children:[t.jsx(Be,{avatar:a??(n==null?void 0:n.avatar),name:(n==null?void 0:n.fullName)??"",isMe:!1,type:n==null?void 0:n.user_status,noInfo:!0}),t.jsx(P,{type:"failure",visible:!!g||!!c,children:g||c}),t.jsx(Ne,{files:s,maxFiles:1,formats:["image/jpeg"],setFiles:i,isActive:!0}),t.jsxs(E,{direction:"horizontal",children:[(n==null?void 0:n.avatar)&&t.jsx(T,{isLoading:d,background:$.red.main,completed:r,isActive:p,text:"Удалить фото профиля",action:pe,setCompleted:o}),t.jsx(T,{isLoading:j,completed:v,isActive:S,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:w,setCompleted:x})]})]})},gt=e=>{const{open:n}=C(),s=()=>{n(t.jsx(pt,{...e}))};return t.jsx(L,{...e,onClick:s})},mt=e=>{const{value:n,additionalActions:s}=e,[i,a]=h.useState(n),l=o=>{var d;return(d=s==null?void 0:s.onRemoveOne)==null?void 0:d.call(s,o)},r=()=>{var o;return(o=s==null?void 0:s.onAdd)==null?void 0:o.call(s)};return t.jsx(Ve,{list:i,onRemoveOne:l,onAddElement:r,setList:a})},Z=e=>e<=9?"0"+e:e,J=(e,n)=>e/n*100,ft=m.div`
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
`,vt=({range:e,step:n,initialValues:s,onSave:i,onChange:a,valueTransform:l})=>{const[r,o]=s,[d,u]=e,[c,f]=h.useState(r),[p,v]=h.useState(o),x=l?l(c):c,j=l?l(p):p,y=()=>{i([c,p])},g=k=>k===1?S=>{const w=Math.min(+S.target.value,p-n);f(w),S.target.value=w.toString()}:S=>{const w=Math.max(+S.target.value,c+n);v(w),S.target.value=w.toString()};return h.useEffect(()=>{a==null||a([c,p])},[c,p]),t.jsxs(ft,{left:J(c,u-d),width:J(p-c,u-d),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:d,max:u,step:n,value:c,onChange:g(1),onMouseUp:y}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:d,max:u,step:n,value:p,onChange:g(2),onMouseUp:y})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:x}),t.jsx("span",{children:j})]})]})},jt=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,bt=e=>{const{value:n,action:s}=e,{close:i}=C(),[a,l]=n,[r,o]=h.useState(a),[d,u]=h.useState(l),[c,f]=h.useState(!1),p=()=>{s==null||s([r,d]),i()},v=j=>Z(Math.floor(j/60))+":"+Z(j%60),x=j=>{o(j[0]),u(j[1])};return t.jsxs(jt,{children:[t.jsx(vt,{range:[0,1440],step:60,valueTransform:v,initialValues:[a,l],onSave:()=>null,onChange:x}),t.jsxs(E,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(I,{text:"Отменить",width:"120px",onClick:i}),t.jsx(T,{width:"120px",isLoading:!1,completed:c,text:"Сохранить",action:p,setCompleted:f})]})]})},St=e=>{const{open:n}=C(),s=()=>{n(t.jsx(bt,{...e}))};return t.jsx(L,{...e,editable:!1,onClick:s,icon:t.jsx(Y,{})})},re=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",ce={small:4,middle:9,big:14},yt=m.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:n})=>e?$[re(n)].main:"var(--text)"};
    }
`,wt=m.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>ce[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:n})=>e?$[re(n)].main:"var(--schedule)"};
`,kt=m.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--scheduleBg);
    height: ${({size:e})=>ce[e]}px;
    overflow: hidden;
`,Ct=({title:e,value:n,size:s="middle",coloring:i=!0})=>t.jsxs(yt,{value:n,coloring:i,children:[t.jsx(A,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(kt,{size:s,children:t.jsx(wt,{size:s,coloring:i,value:n})})]}),R=7,de=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${R+3},})`),ue=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${R},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${R+3},}))`),Q=[{text:`Минимальная длина ${R} знаков`,test:e=>e.length>=R},{text:"Не повторяет старый пароль",test:(e,n,s)=>s.length>0&&e.length>0&&e!==s},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>ue.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,n)=>e.length>0&&n.length>0&&e===n}],Ft=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>de.test(e)}],At=e=>{const n="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";for(let i=0;i<e;i++)s+=n.charAt(Math.floor(Math.random()*n.length));return s},Et=e=>de.test(e)?{title:"надежный",value:100}:ue.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<R?{title:"очень слабый",value:10}:{title:"слабый",value:20},Rt=m.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,Lt=m.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,zt=m.div`
    height: 100%;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Tt=m.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Mt=m.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Pt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,It=m.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Ot=()=>{const[e,n]=h.useState(""),[s,i]=h.useState(""),[a,l]=h.useState(""),[r,o]=h.useState(null),[d,u]=h.useState(!1),[c,f]=h.useState(!1),{isActive:p,validationError:v}=oe(Q,[s,a,e]),x=Et(s),j=()=>{const g=At(12);i(g),l(g)},y=async()=>{try{u(!0);const g=await Ue(e,s);if(g.data.result!=="ok")throw new Error(g.data.errors);f(!0),u(!1),i(""),l(""),n("")}catch(g){const k=g.message??g;o("Возникла ошибка: "+k),u(!1)}};return t.jsxs(Rt,{children:[t.jsxs(zt,{children:[t.jsxs(Tt,{children:[t.jsx(A,{size:3,align:"left",children:"Смена пароля"}),t.jsx(_,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Q.map(g=>t.jsx(U,{fontSize:"0.85rem",setChecked:()=>null,text:g.text,checked:g.test(s,a,e)},g.text))}),t.jsx(_,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Ft.map(g=>t.jsx(U,{fontSize:"0.85rem",setChecked:()=>null,text:g.text,checked:g.test(s,a,e)},g.text))})]}),!p&&t.jsx(I,{width:"100%",text:"Сгенерировать пароль",onClick:j,background:"var(--scheduleBg)"}),p&&t.jsxs(Pt,{children:[t.jsx(Ye,{size:"40px"}),t.jsx(A,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(Lt,{children:[t.jsxs(It,{children:[t.jsx(P,{title:"Ошибка",type:"failure",visible:!!r,children:r}),t.jsx(M,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:n,required:!0}),t.jsx(M,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:s,setValue:i,required:!0}),t.jsx(M,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:l,required:!0}),t.jsx(Ct,{value:x.value,size:"small",title:`Сложность пароля: ${x.title}`})]}),t.jsxs(Mt,{children:[t.jsx(I,{text:"Отменить",width:"100%"}),t.jsx(T,{isLoading:d,completed:c,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${v==null?void 0:v.text}`,action:y,setCompleted:f,height:"38px",isActive:p})]})]})]})},_t=e=>{const{open:n}=C(),s=()=>n(t.jsx(Ot,{}));return t.jsx(L,{...e,onClick:s})},$t=m.div`
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
`,Dt=e=>({toggle:t.jsx(dt,{...e}),photo:t.jsx(gt,{...e}),choices:t.jsx(mt,{...e}),text:t.jsx(q,{...e}),display:t.jsx(ht,{...e}),interval:t.jsx(St,{...e}),tel:t.jsx(q,{...e}),password:t.jsx(_t,{...e}),link:t.jsx(ut,{...e})}),he=({fields:e,settingsName:n,asChild:s=!1})=>{const i=a=>!a||!n?()=>null:l=>{console.log(l),O.updateSetting({nameSettings:n,nameParam:a,value:l})};return t.jsx($t,{asChild:s,children:e.map(a=>{const l=a.action??i(a.id),{type:r,visible:o=!0}=a;if(o)return Dt({...a,action:l,settingsName:n})[r]})})},Bt=m.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:e})=>e?"flex":"none"};
    }
`,Nt=m.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,Vt=m.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Ut=({searchValue:e,searchResult:n,settingsConfig:s})=>{var l,r;const{allRoutes:i}=F.useMenu(),a=(l=K(ie))==null?void 0:l.params;return!i||s===void 0?null:t.jsx(Bt,{open:!!(a!=null&&a.id),children:t.jsx(Nt,{children:t.jsxs(Ae,{children:[e&&t.jsx(nt,{list:n}),(r=Object.keys(s??{}))==null?void 0:r.map(o=>{const d=s[o],{path:u}=i[o];return t.jsx(D,{path:u,children:t.jsx(E,{direction:"vertical",gap:12,children:!e&&d.map(({title:c,fields:f})=>t.jsxs(le,{children:[t.jsx(Vt,{children:t.jsx(A,{size:4,align:"left",children:c})}),t.jsx(he,{fields:f,settingsName:o})]},c))})},u)}),t.jsx(D,{path:"/",children:t.jsx(ae,{height:"100%",children:t.jsx(ne,{text:"Ничего не выбрано",image:t.jsx(Ge,{color:"grey",size:50,children:t.jsx(Ee,{})})})})})]})})})},Gt=(e,n,s)=>{const i=[];if(!s)return i;let a=0,l=!1;for(const r in n){l=!1,i.push([]);const o=s[r].title.split(". ")[1];i[a].push(o);const d=n[r];for(const u of d)for(const c of u.fields)G(c.title).includes(G(e))&&(l?(i.push([...i[a].slice(0,i[a].length-1),c.title]),a++):(i[a].push(u.title),i[a].push(c.title)),l=!0);l?a++:i.pop()}return i},Wt=m(We)`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--schedule-shadow);
    margin-right: 20px;
    background: var(--form);

    @media (max-width: 600px) {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({open:e})=>e?"100%":"0"};
        max-width: ${({open:e})=>e?"100%":"0"};
        min-width: 0;
        display: ${({open:e})=>e?"flex":"none"};
    }
`,qt=({settingsConfig:e,setSearchResult:n,setSearchValue:s})=>{var o,d;const{allRoutes:i}=F.useMenu(),{isMobile:a}=qe(),l=(o=K(ie))==null?void 0:o.params,r=(u,c)=>Gt(u,c,i);return i?t.jsxs(Wt,{width:"250px",open:!(l!=null&&l.id),children:[t.jsx(te,{whereToSearch:e,searchEngine:r,placeholder:"Поиск",setExternalValue:s,setResult:n,validationCheck:!0,loadingOnType:!0}),(d=Object.keys(e??{}))==null?void 0:d.map(u=>{if(a&&u!=="settings-customize-menu"||!a)return h.createElement(He,{...i[u],title:i[u].title.slice(11,i[u].title.length),key:u,orientation:"horizontal",shadow:!1})})]}):null},Kt=()=>{const[e,n]=h.useState(""),[s,i]=h.useState(null),a=tt();return a===null?null:t.jsx(ae,{padding:"10px",children:t.jsx(Ze,{children:t.jsxs(Je,{ai:"flex-start",children:[t.jsx(qt,{settingsConfig:a,setSearchResult:i,setSearchValue:n}),t.jsx(Ut,{searchValue:e,searchResult:s,settingsConfig:a})]})})})};export{Kt as default};
