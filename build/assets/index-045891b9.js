import{s as f,r as d,j as e,y as g}from"./vendor-48260ac4.js";import{A as j,a as h}from"./alert-item-79a56a07.js";import{bg as u,h as v,H as w,X as b,ai as y,b4 as C,G as A,ao as S,W as I,P as E,a2 as N}from"./index-76f662c4.js";import"./is-valid-url-08a91344.js";const k=(t,n)=>Object.keys(n).reduce((s,i)=>{const a=n[i].filter(r=>u(r.title).includes(u(t)));return s[i],s[i]=a,s},{}),D=f.div.withConfig({componentId:"sc-n7iv4z-0"})(["width:100%;opacity:",";.top{cursor:pointer;display:flex;align-items:center;margin:10px 0;width:100%;justify-content:space-between;.title-wrapper{width:50px;}.left{display:flex;align-items:center;svg{transform:rotate(",");}}}.children{transition:0.2s;}.children.close{opacity:0;visibility:hidden;height:0;pointer-events:none;transform:translateY(-30px);}.children.open{opacity:1;visibility:visible;height:fit-content;pointer-events:all;transform:translateY(0px);}"],({noChildren:t})=>t?"0.5":"1",({collapsed:t})=>t?"0deg":"180deg"),F=({title:t,children:n,initiallyCollapsed:s,sideText:i,isCollapsed:a})=>{const[r,l]=d.useState(s??!0),o=n==null,c=()=>l(p=>!p);return d.useEffect(()=>{a!==void 0&&l(o)},[a,n]),e.jsxs(D,{collapsed:r,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(v,{size:4,align:"left",children:t}),e.jsx(g,{})]}),e.jsx(w,{margin:"0 20px"}),e.jsx(b,{children:i})]}),e.jsx("div",{className:"children"+(r?" close":" open"),children:n})]})},z=f.div.withConfig({componentId:"sc-gyjwiw-0"})(["width:100%;display:flex;flex-direction:column;gap:12px;"]),T=({alerts:t,listView:n})=>{const{data:{user:s}}=y.useUser(),[i,a]=d.useState(null),r=i??t;return e.jsxs(z,{children:[!n&&e.jsx(C,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:k,setResult:a,loadingOnType:!0,validationCheck:!0}),Object.keys(r).sort((l,o)=>Number.parseInt(o)-Number.parseInt(l)).map(l=>{const o=new Date().getFullYear().toString(),c=i===null?l!==o:!1,p=`Новостей: ${r[l].length}`;return e.jsx(F,{sideText:p,title:l,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(A,{d:"column",gap:"8px",children:r[l].map((x,m)=>e.jsx(j,{isNew:l===o&&m===0&&(s==null?void 0:s.hasAlerts),news:x,orientation:"horizontal"},x.id))})},l)})]})},R=()=>{const{preparedData:t,error:n,loading:s}=h.selectors.useData();return d.useEffect(()=>{S.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(I,{load:h.effects.getFx,error:n,loading:s,data:t,children:e.jsx(E,{children:t?e.jsx(T,{alerts:t}):e.jsx(N,{text:"У вас нет оповещений"})})})};export{R as default};
