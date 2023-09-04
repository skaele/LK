import{j as t,bq as ge,br as me,bs as fe,aM as ve,at as je,ai as be,bt as Se,ak as J,aj as we,k as ye,bu as ke,s as g,R as Ce,r as x,bd as Fe,D as Re,b6 as X,aW as Ee,aX as $,an as Le}from"./vendor-e9654bfa.js";import{bE as K,bF as M,B as z,bI as Ae,b7 as ee,a0 as F,T as R,Y as te,aM as Me,bJ as ze,O as se,u as C,bK as Te,bL as Pe,bM as B,bN as Ie,bO as Oe,bP as _e,aV as De,bQ as V,bR as $e,bS as P,J as E,E as ne,D as _,M as O,f as I,U as Be,S as T,h as Ve,bT as Ne,bU as Ue,a6 as D,bV as N,bW as We,C as U,bi as Ge,bX as Ze,bY as ie,x as ae,b2 as qe,aS as W,bZ as He,b8 as Qe,aE as Ye,Q as Je,aa as Xe}from"./index-c2d11f9e.js";import{a as Ke,b as et}from"./index.esm-6c739436.js";const tt=({theme:e,scheduledLightTheme:n,lightThemeRange:s,email:i,avatar:a,homepage:l,phone:r,menu:o,settings:d})=>({"settings-appearance":[{title:"Тема",fields:[{title:"Темная тема",type:"toggle",value:e.value,disabled:n,action:e.action}]}],"settings-customize-menu":[{title:"Настройка меню",fields:[{title:"",type:"choices",value:o.value,additionalActions:o.additionalActions}]}],"settings-home-page":[{title:"Разделы быстрого доступа",fields:[{title:"",type:"choices",value:l.sections.value,additionalActions:l.sections.additionalActions,action:()=>null}]},{title:"Виджеты",fields:[{title:"Расписание",type:"toggle",value:l.widgets.schedule.value,action:l.widgets.schedule.action},{title:"Оплаты",type:"toggle",value:l.widgets.payments.value,action:l.widgets.payments.action}]},{title:"Новости",fields:[{title:"Последние новости",type:"toggle",value:l.news.value,action:l.news.action}]}],"settings-personal":[{title:"Данные",fields:[{title:"Фото профиля",type:"photo",value:a.value,icon:a.icon,description:a.description,action:()=>null},{title:"Email",type:"text",value:i.value,icon:t.jsx(ge,{}),description:i.description,action:i.action,additionalActions:i.additionalActions},{title:"Телефон",type:"tel",value:r.value,icon:t.jsx(me,{}),description:r.description,action:r.action,additionalActions:r.additionalActions},{title:"Пароль",type:"password",value:"",icon:t.jsx(fe,{}),description:"Смена пароля",action:()=>null}]},{title:"Действия",fields:[{title:"Выйти из аккаунта",type:"display",icon:t.jsx(ve,{}),action:()=>K.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:M.logout})}]}],"settings-notifications":[{title:"Получать уведомления",fields:[{id:"all",type:"toggle",title:"Все",icon:t.jsx(je,{}),value:d.all,subfields:[{id:"messages",title:"Сообщения",type:"toggle",value:d.messages,icon:t.jsx(be,{})},{id:"newVersion",title:"Новая версия",type:"toggle",value:d.newVersion,icon:t.jsx(Se,{})},{id:"schedule",title:"Расписание",type:"toggle",value:d.schedule,icon:t.jsx(J,{})},{id:"news",title:"Новости",type:"toggle",value:d.news,icon:t.jsx(we,{})},{id:"applications",title:"Цифровые сервисы",type:"toggle",value:d.applications,icon:t.jsx(ye,{})},{id:"doclist",title:"Документы для ознакомления",type:"toggle",value:d.doclist,icon:t.jsx(ke,{})}]}]}]}),st=g.div`
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
`,nt=({chosen:e,onClick:n})=>t.jsx(z,{minWidth:"35px",background:"transparent",icon:e?t.jsx(Ke,{style:{color:"var(--blue)"}}):t.jsx(et,{}),onClick:n}),it=e=>{const{id:n,chosen:s,switchMenuItem:i}=e;return t.jsxs(st,{chosen:s,onClick:()=>i(n),children:[t.jsx(Ae,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...e}),t.jsx("div",{className:"buttons",children:t.jsx(nt,{chosen:s,onClick:()=>{i(n)}})})]})},at=Ce.memo(it),lt=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,G=({title:e,enabledList:n,requiredList:s,add:i,remove:a})=>{const{settings:l}=ee.useSettings(),r=F.useMenu(),{visibleRoutes:o}=F.useMenu(),[d,u]=x.useState(null),c=r[n];if(!c||!o)return null;const f=p=>{c[p]?a(p,l,s):i(p,l,Object.keys(c).length,s)};return t.jsxs(lt,{children:[t.jsx(R,{size:2,align:"left",bottomGap:!0,children:e}),t.jsx(te,{placeholder:"Поиск",whereToSearch:o,searchEngine:Me,setResult:u}),Object.values(d??o).map((p,v)=>x.createElement(at,{...p,key:v,chosen:!!c[p.id],switchMenuItem:f}))]})},ot=e=>!e||e.length===0?"Не указан":e,rt=()=>{const{theme:e,switchTheme:n}=ze(),{data:{user:s}}=se.useUser(),{open:i}=C(),{leftsideBarRoutes:a,homeRoutes:l}=F.useMenu(),{settings:r}=ee.useSettings(),[o,d]=x.useState(null),{property:u}=r["settings-notifications"],{property:c}=r["settings-appearance"],{widgetPayment:f,widgetSchedule:p,news:v}=r["settings-home-page"].property,j=(s==null?void 0:s.user_status)==="staff"?Te:Pe;return x.useEffect(()=>{d({...tt({scheduledLightTheme:c.scheduledLightTheme,lightThemeRange:c.lightThemeRange,settings:u,isStudent:(s==null?void 0:s.user_status)==="stud",menu:{value:a,additionalActions:{onAdd:()=>i(t.jsx(G,{title:"Настройка меню",enabledList:"leftsideBarRoutes",requiredList:j,remove:B,add:Ie})),onRemoveOne:h=>B(h,r,j)}},theme:{value:e==="dark",action:h=>n(h)},phone:{value:(s==null?void 0:s.phone)??"",description:s==null?void 0:s.phone,action:h=>Oe(h??""),additionalActions:{onSuccess:h=>{M.update({key:"phone",value:h})}}},email:{value:(s==null?void 0:s.email)??"",description:ot(s==null?void 0:s.email),action:h=>_e(h??""),additionalActions:{onSuccess:h=>{M.update({key:"email",value:h})}}},avatar:{value:s==null?void 0:s.avatar,description:"Смена аватара",icon:t.jsx(De,{avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",width:"22px",height:"22px",marginRight:"0"})},homepage:{sections:{value:l,additionalActions:{onRemoveOne:h=>V(h,r),onAdd:()=>i(t.jsx(G,{title:"Добавить страницы",enabledList:"homeRoutes",requiredList:[],remove:V,add:$e}))}},widgets:{schedule:{value:p,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:!!h})},payments:{value:f,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:!!h})}},news:{value:v,action:h=>P.updateSetting({nameSettings:"settings-home-page",nameParam:"news",value:!!h})}}})})},[e,l,p,f,v,Object.keys(a??{}).length,Object.keys(l??{}).length]),o},le=g.section`
    width: 100%;
    background: var(--schedule);
    border-radius: var(--brLight);
    padding: 0px;
    overflow: hidden;
    margin-bottom: 16px;

    h4 {
        opacity: 0.9;
    }
`,ct=g.div`
    padding: 12px;
    width: 100%;
`,dt=({list:e})=>{const{allRoutes:n}=F.useMenu();return n?t.jsx(le,{children:t.jsxs(E,{children:[(e==null?void 0:e.length)===0&&t.jsx(ne,{text:"Не удалось ничего найти"}),e==null?void 0:e.map((s,i)=>t.jsx(ct,{children:t.jsx(_,{fontSize:"0.85rem",children:s.map((a,l)=>t.jsxs(t.Fragment,{children:[a,l!==s.length-1&&" > "]}))})},i))]})}):null},ut=g.div`
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
`,ht=g.div`
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
`,A=({title:e,description:n,onClick:s,icon:i,rightIcon:a,editable:l=!0})=>t.jsxs(ut,{onClick:s,children:[i&&t.jsx("div",{className:"icon",children:i}),t.jsxs(ht,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:n})]}),a??(l?t.jsx(Fe,{}):null)]}),oe=(e,n)=>{const s=e.find(({test:l})=>!l(...n)),i=!s,a=!n.find(l=>l.length===0)&&i;return{allChecked:i,isActive:a,validationError:s}},xt=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,pt=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,gt=[{text:"Необходимо изменить строку",test:(e,n)=>e!==n}],mt=e=>{const{value:n,message:s,action:i,type:a,title:l,additionalActions:r}=e,[o,d]=x.useState(n),[u,c]=x.useState(!1),[f,p]=x.useState(""),[v,j]=x.useState(!1),{close:h}=C(),{isActive:y,validationError:w}=oe(gt,[o,n]),m=async()=>{var S;try{c(!0),await(i==null?void 0:i(o)),(S=r==null?void 0:r.onSuccess)==null||S.call(r,o),c(!1),j(!0)}catch(k){p("Возникла ошибка: "+k.message),c(!1)}};return x.useEffect(()=>{d(n),p(null)},[l]),t.jsxs(xt,{children:[t.jsx(R,{size:3,align:"left",children:l}),s&&t.jsx(O,{type:s.type??"",title:s.title,children:s.body}),t.jsx(O,{type:"failure",visible:!!f,children:f}),t.jsx(I,{value:o,setValue:d,type:a,mask:!0}),t.jsx(Be,{}),t.jsxs(pt,{children:[t.jsx(z,{text:"Отменить",width:"100%",onClick:h}),t.jsx(T,{isLoading:u,completed:v,isActive:y,text:"Обновить",action:m,setCompleted:j,popUpFailureMessage:w==null?void 0:w.text,height:"38px"})]})]},l)},Z=e=>{const{open:n}=C(),s=()=>{n(t.jsx(mt,{...e}))};return t.jsx(A,{...e,onClick:s})},ft=({title:e,action:n,value:s,subfields:i,icon:a,settingsName:l,disabled:r})=>{const[o,d]=x.useState(s),u=c=>{n==null||n(c),d(c)};return x.useEffect(()=>{d(s)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(Ve,{disabled:r,title:e,state:o,action:u,icon:a}),i&&o&&t.jsx(he,{settingsName:l,fields:i,asChild:!0})]})},vt=e=>t.jsx(A,{...e,rightIcon:t.jsx(Re,{})}),jt=e=>{const n=()=>{var s;return(s=e==null?void 0:e.action)==null?void 0:s.call(e)};return t.jsx(A,{...e,editable:!1,onClick:n})},q=e=>{const n=x.useState(!1),s=x.useState(!1),i=x.useState(null);return{loading:n,error:i,completed:s,isActive:e}},bt=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,St=e=>{const{data:{user:n}}=se.useUser();if(!n)return null;const[s,i]=x.useState([]),[a,l]=x.useState(null),{completed:[r,o],loading:[d,u],error:[c,f],isActive:p}=q(!!(n!=null&&n.avatar)),{completed:[v,j],loading:[h,y],error:[w,m],isActive:S}=q(s.length===1);x.useEffect(()=>{const b=new FileReader;b.onloadend=()=>{l(b.result)},s[0]?b.readAsDataURL(s[0]):l(null)},[s]);const k=async()=>{try{y(!0),j(!1);const b=await N(s[0]);if(b.data.result!=="ok")throw new Error(b.data.errors);j(!0),y(!1),i([]),M.update({key:"avatar",value:a})}catch(b){m("Ошибка: "+b.message)}},xe=async()=>{try{u(!0),o(!1);const b=await N();if(b.data.result!=="ok")throw new Error(b.data.errors);o(!0),u(!1),M.update({key:"avatar",value:""})}catch(b){f("Ошибка: "+b.message)}},pe=()=>K.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:xe});return t.jsxs(bt,{children:[t.jsx(Ne,{avatar:a??(n==null?void 0:n.avatar),name:(n==null?void 0:n.fullName)??"",isMe:!1,type:n==null?void 0:n.user_status,noInfo:!0}),t.jsx(O,{type:"failure",visible:!!w||!!c,children:w||c}),t.jsx(Ue,{files:s,maxFiles:1,formats:["image/jpeg"],setFiles:i,isActive:!0}),t.jsxs(E,{direction:"horizontal",children:[(n==null?void 0:n.avatar)&&t.jsx(T,{isLoading:d,background:D.red.main,completed:r,isActive:p,text:"Удалить фото профиля",action:pe,setCompleted:o}),t.jsx(T,{isLoading:h,completed:v,isActive:S,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:k,setCompleted:j})]})]})},wt=e=>{const{open:n}=C(),s=()=>{n(t.jsx(St,{...e}))};return t.jsx(A,{...e,onClick:s})},yt=e=>{const{value:n,additionalActions:s}=e,[i,a]=x.useState(n),l=o=>{var d;return(d=s==null?void 0:s.onRemoveOne)==null?void 0:d.call(s,o)},r=()=>{var o;return(o=s==null?void 0:s.onAdd)==null?void 0:o.call(s)};return t.jsx(We,{list:i,onRemoveOne:l,onAddElement:r,setList:a})},H=e=>e<=9?"0"+e:e,Q=(e,n)=>e/n*100,kt=g.div`
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
`,Ct=({range:e,step:n,initialValues:s,onSave:i,onChange:a,valueTransform:l})=>{const[r,o]=s,[d,u]=e,[c,f]=x.useState(r),[p,v]=x.useState(o),j=l?l(c):c,h=l?l(p):p,y=()=>{i([c,p])},w=m=>m===1?S=>{const k=Math.min(+S.target.value,p-n);f(k),S.target.value=k.toString()}:S=>{const k=Math.max(+S.target.value,c+n);v(k),S.target.value=k.toString()};return x.useEffect(()=>{a==null||a([c,p])},[c,p]),t.jsxs(kt,{left:Q(c,u-d),width:Q(p-c,u-d),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:d,max:u,step:n,value:c,onChange:w(1),onMouseUp:y}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:d,max:u,step:n,value:p,onChange:w(2),onMouseUp:y})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:j}),t.jsx("span",{children:h})]})]})},Ft=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Rt=e=>{const{value:n,action:s}=e,{close:i}=C(),[a,l]=n,[r,o]=x.useState(a),[d,u]=x.useState(l),[c,f]=x.useState(!1),p=()=>{s==null||s([r,d]),i()},v=h=>H(Math.floor(h/60))+":"+H(h%60),j=h=>{o(h[0]),u(h[1])};return t.jsxs(Ft,{children:[t.jsx(Ct,{range:[0,1440],step:60,valueTransform:v,initialValues:[a,l],onSave:()=>null,onChange:j}),t.jsxs(E,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(z,{text:"Отменить",width:"120px",onClick:i}),t.jsx(T,{width:"120px",isLoading:!1,completed:c,text:"Сохранить",action:p,setCompleted:f})]})]})},Et=e=>{const{open:n}=C(),s=()=>{n(t.jsx(Rt,{...e}))};return t.jsx(A,{...e,editable:!1,onClick:s,icon:t.jsx(J,{})})},re=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",ce={small:4,middle:9,large:12,big:14},Lt=g.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:n})=>e?D[re(n)].main:"var(--text)"};
    }
`,At=g.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>ce[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:n})=>e?D[re(n)].main:"var(--schedule)"};
`,Mt=g.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--scheduleBg);
    height: ${({size:e})=>ce[e]}px;
    overflow: hidden;
`,zt=({title:e,value:n,size:s="middle",coloring:i=!0})=>t.jsxs(Lt,{value:n,coloring:i,children:[t.jsx(R,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(Mt,{size:s,children:t.jsx(At,{size:s,coloring:i,value:n})})]}),L=7,de=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${L+3},})`),ue=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${L},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${L+3},}))`),Y=[{text:`Минимальная длина ${L} знаков`,test:e=>e.length>=L},{text:"Не повторяет старый пароль",test:(e,n,s)=>s.length>0&&e.length>0&&e!==s},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>ue.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,n)=>e.length>0&&n.length>0&&e===n}],Tt=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>de.test(e)}],Pt=e=>{const n="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";for(let i=0;i<e;i++)s+=n.charAt(Math.floor(Math.random()*n.length));return s},It=e=>de.test(e)?{title:"надежный",value:100}:ue.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<L?{title:"очень слабый",value:10}:{title:"слабый",value:20},Ot=g.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,_t=g.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,Dt=g.div`
    height: 100%;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,$t=g.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Bt=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Vt=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,Nt=g.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Ut=()=>{const[e,n]=x.useState(""),[s,i]=x.useState(""),[a,l]=x.useState(""),[r,o]=x.useState(null),[d,u]=x.useState(!1),[c,f]=x.useState(!1),{isActive:p,validationError:v}=oe(Y,[s,a,e]),j=It(s),{close:h}=C(),y=()=>{const m=Pt(12);i(m),l(m)},w=async()=>{try{u(!0);const m=await Ze(e,s);if(m.data.result!=="ok")throw new Error(m.data.errors);f(!0),u(!1),i(""),l(""),n("")}catch(m){const S=m.message??m;o("Возникла ошибка: "+S),u(!1)}};return t.jsxs(Ot,{children:[t.jsxs(Dt,{children:[t.jsxs($t,{children:[t.jsx(R,{size:3,align:"left",children:"Смена пароля"}),t.jsx(_,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Y.map(m=>t.jsx(U,{fontSize:"0.85rem",setChecked:()=>null,text:m.text,checked:m.test(s,a,e)},m.text))}),t.jsx(_,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(E,{gap:8,direction:"vertical",children:Tt.map(m=>t.jsx(U,{fontSize:"0.85rem",setChecked:()=>null,text:m.text,checked:m.test(s,a,e)},m.text))})]}),!p&&t.jsx(z,{width:"100%",text:"Сгенерировать пароль",onClick:y,background:"var(--scheduleBg)"}),p&&t.jsxs(Vt,{children:[t.jsx(Ge,{size:"40px"}),t.jsx(R,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(_t,{children:[t.jsxs(Nt,{children:[t.jsx(O,{title:"Ошибка",type:"failure",visible:!!r,children:r}),t.jsx(I,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:n,required:!0}),t.jsx(I,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:s,setValue:i,required:!0}),t.jsx(I,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:l,required:!0}),t.jsx(zt,{value:j.value,size:"small",title:`Сложность пароля: ${j.title}`})]}),t.jsxs(Bt,{children:[t.jsx(z,{text:"Отменить",width:"100%",onClick:h}),t.jsx(T,{isLoading:d,completed:c,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${v==null?void 0:v.text}`,action:w,setCompleted:f,height:"38px",isActive:p})]})]})]})},Wt=e=>{const{open:n}=C(),s=()=>n(t.jsx(Ut,{}));return t.jsx(A,{...e,onClick:s})},Gt=g.div`
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
`,Zt=e=>({toggle:t.jsx(ft,{...e},e.title),photo:t.jsx(wt,{...e},e.title),choices:t.jsx(yt,{...e},e.title),text:t.jsx(Z,{...e},e.title),display:t.jsx(jt,{...e},e.title),interval:t.jsx(Et,{...e},e.title),tel:t.jsx(Z,{...e},e.title),password:t.jsx(Wt,{...e},e.title),link:t.jsx(vt,{...e},e.title)}),he=({fields:e,settingsName:n,asChild:s=!1})=>{const i=a=>!a||!n?()=>null:l=>{console.log(l),P.updateSetting({nameSettings:n,nameParam:a,value:l})};return t.jsx(Gt,{asChild:s,children:e.map(a=>{const l=a.action??i(a.id),{type:r,visible:o=!0}=a;if(o)return Zt({...a,action:l,settingsName:n})[r]})})},qt=g.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({open:e})=>e?"flex":"none"};
    }
`,Ht=g.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`,Qt=g.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`,Yt=({searchValue:e,searchResult:n,settingsConfig:s})=>{var l,r;const{allRoutes:i}=F.useMenu(),a=(l=X(ie))==null?void 0:l.params;return!i||s===void 0?null:t.jsx(qt,{open:!!(a!=null&&a.id),children:t.jsx(Ht,{children:t.jsxs(Ee,{children:[e&&t.jsx(dt,{list:n}),(r=Object.keys(s??{}))==null?void 0:r.map(o=>{const d=s[o],{path:u}=i[o];return t.jsx($,{path:u,children:t.jsx(E,{direction:"vertical",gap:12,children:!e&&d.map(({title:c,fields:f})=>t.jsxs(le,{children:[t.jsx(Qt,{children:t.jsx(R,{size:4,align:"left",children:c})}),t.jsx(he,{fields:f,settingsName:o})]},c))})},u)}),t.jsx($,{path:"/",children:t.jsx(ae,{height:"100%",children:t.jsx(ne,{text:"Ничего не выбрано",image:t.jsx(qe,{color:"grey",size:50,children:t.jsx(Le,{})})})})})]})})})},Jt=(e,n,s)=>{const i=[];if(!s)return i;let a=0,l=!1;for(const r in n){l=!1,i.push([]);const o=s[r].title.split(". ")[1];i[a].push(o);const d=n[r];for(const u of d)for(const c of u.fields)W(c.title).includes(W(e))&&(l?(i.push([...i[a].slice(0,i[a].length-1),c.title]),a++):(i[a].push(u.title),i[a].push(c.title)),l=!0);l?a++:i.pop()}return i},Xt=g(He)`
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
`,Kt=({settingsConfig:e,setSearchResult:n,setSearchValue:s})=>{var o,d;const{allRoutes:i}=F.useMenu(),{isMobile:a}=Qe(),l=(o=X(ie))==null?void 0:o.params,r=(u,c)=>Jt(u,c,i);return i?t.jsxs(Xt,{width:"250px",open:!(l!=null&&l.id),children:[t.jsx(te,{whereToSearch:e,searchEngine:r,placeholder:"Поиск",setExternalValue:s,setResult:n,validationCheck:!0,loadingOnType:!0}),(d=Object.keys(e??{}))==null?void 0:d.map(u=>{if(a&&u!=="settings-customize-menu"||!a)return x.createElement(Ye,{...i[u],title:i[u].title.slice(11,i[u].title.length),key:u,orientation:"horizontal",shadow:!1})})]}):null},ns=()=>{const[e,n]=x.useState(""),[s,i]=x.useState(null),a=rt();return a===null?null:t.jsx(ae,{padding:"10px",children:t.jsx(Je,{children:t.jsxs(Xe,{ai:"flex-start",children:[t.jsx(Kt,{settingsConfig:a,setSearchResult:i,setSearchValue:n}),t.jsx(Yt,{searchValue:e,searchResult:s,settingsConfig:a})]})})})};export{ns as default};
