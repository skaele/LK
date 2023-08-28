import{s as u,j as s,r as o}from"./vendor-e9654bfa.js";import{a0 as c,E as j,b7 as p,T as h,bP as x,bQ as b,u as v,bR as m,bV as S,U as w,b_ as y}from"./index-5ad0a555.js";import{C as E}from"./customize-leftside-bar-item-2db53026.js";import"./index.esm-6c739436.js";const P=u.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        width: 500px;
        height: 500px;
    }

    .links-wrapper {
        overflow-y: auto;
        padding-right: 8px;
        height: 100%;
    }
`,R=()=>{const{visibleRoutes:n}=c.useMenu(),t=c.useMenu();if(!n)return s.jsx(j,{text:"Не удалось загрузить пункты меню("});if(!t.visibleRoutes)return null;const{settings:r}=p.useSettings(),l=e=>{var i;(i=t==null?void 0:t.homeRoutes)!=null&&i[e]?x(e,r):b(e,r)};return s.jsxs(P,{children:[s.jsx(h,{size:3,align:"left",bottomGap:!0,children:"Добавить страницы"}),s.jsx("div",{className:"links-wrapper",children:Object.values(t.visibleRoutes).map((e,i)=>{var a;return o.createElement(E,{...e,key:i,chosen:!!((a=t==null?void 0:t.homeRoutes)!=null&&a[e.id]),switchMenuItem:l})})})]})},k=u.div``,H=()=>{const{homeRoutes:n}=c.useMenu(),{open:t}=v(),[r,l]=o.useState([]),{settings:e}=p.useSettings(),[i,a]=o.useState(n);return o.useEffect(()=>{n&&i&&Object.keys(n).length>Object.keys(i).length&&a(n)},[n]),o.useEffect(()=>{if(e){const{widgetPayment:d,widgetSchedule:f}=e["settings-home-page"].property;l([{title:"Расписание",state:!!f,action:g=>m.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:g})},{title:"Оплата",state:!!d,action:g=>m.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:g})}])}},[e]),s.jsxs(k,{children:[s.jsx(h,{size:2,align:"left",bottomGap:!0,children:"Разделы"}),s.jsx(S,{list:i,onRemoveOne:d=>x(d,e),onAddElement:()=>t(s.jsx(R,{})),setList:a,padding:"10px 0",height:"fit-content"}),s.jsx(w,{margin:"30px 0"}),s.jsx(y,{title:"Виджеты",toggles:r,setToggles:l})]})};export{H as default};
