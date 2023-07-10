import{s as u,j as s,r as o}from"./vendor-9cc634b6.js";import{U as c,E as j,aM as p,T as h,bw as x,bx as b,ab as v,by as m,bD as w,g as S,bI as y}from"./index-74590cb5.js";import{C as E}from"./customize-leftside-bar-item-dd52614e.js";import"./index.esm-c297f790.js";const P=u.div`
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
`,R=()=>{const{visibleRoutes:n}=c.useMenu(),t=c.useMenu();if(!n)return s.jsx(j,{text:"Не удалось загрузить пункты меню("});if(!t.visibleRoutes)return null;const{settings:r}=p.useSettings(),l=e=>{var i;(i=t==null?void 0:t.homeRoutes)!=null&&i[e]?x(e,r):b(e,r)};return s.jsxs(P,{children:[s.jsx(h,{size:3,align:"left",bottomGap:!0,children:"Добавить страницы"}),s.jsx("div",{className:"links-wrapper",children:Object.values(t.visibleRoutes).map((e,i)=>{var a;return o.createElement(E,{...e,key:i,chosen:!!((a=t==null?void 0:t.homeRoutes)!=null&&a[e.id]),switchMenuItem:l})})})]})},M=u.div``,H=()=>{const{homeRoutes:n}=c.useMenu(),{open:t}=v(),[r,l]=o.useState([]),{settings:e}=p.useSettings(),[i,a]=o.useState(n);return o.useEffect(()=>{n&&i&&Object.keys(n).length>Object.keys(i).length&&a(n)},[n]),o.useEffect(()=>{if(e){const{widgetPayment:g,widgetSchedule:f}=e["settings-home-page"].property;l([{title:"Расписание",state:!!f,action:d=>m.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetSchedule",value:d})},{title:"Оплата",state:!!g,action:d=>m.updateSetting({nameSettings:"settings-home-page",nameParam:"widgetPayment",value:d})}])}},[e]),s.jsxs(M,{children:[s.jsx(h,{size:2,align:"left",bottomGap:!0,children:"Разделы"}),s.jsx(w,{list:i,onRemoveOne:g=>x(g,e),onAddElement:()=>t(s.jsx(R,{})),setList:a,padding:"10px 0",height:"fit-content"}),s.jsx(S,{margin:"30px 0"}),s.jsx(y,{title:"Виджеты",toggles:r,setToggles:l})]})};export{H as default};
