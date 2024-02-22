import{s as f,r as d,j as e,bI as g}from"./vendor-4355a046.js";import{b8 as h,T as j,H as v,Q as w,a6 as b,aw as A,G as y,bi as u,af as C,W as S,P as E,Z as I}from"./index-af042de3.js";import{A as N}from"./alert-item-628e951d.js";import"./is-valid-url-08a91344.js";const k=(t,l)=>Object.keys(l).reduce((s,r)=>{const a=l[r].filter(i=>h(i.title).includes(h(t)));return s[r],s[r]=a,s},{}),D=f.div`
    width: 100%;
    opacity: ${({noChildren:t})=>t?"0.5":"1"};
    .top {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 10px 0;
        width: 100%;
        justify-content: space-between;

        .title-wrapper {
            width: 50px;
        }

        .left {
            display: flex;
            align-items: center;
            svg {
                transform: rotate(${({collapsed:t})=>t?"0deg":"180deg"});
            }
        }
    }

    .children {
        transition: 0.2s;

        /* img {
            max-width: 100%;
            height: unset;
        } */
    }

    .children.close {
        opacity: 0;
        visibility: hidden;
        height: 0;
        pointer-events: none;
        transform: translateY(-30px);
    }

    .children.open {
        opacity: 1;
        visibility: visible;
        height: fit-content;
        pointer-events: all;
        transform: translateY(0px);
    }
`,F=({title:t,children:l,initiallyCollapsed:s,sideText:r,isCollapsed:a})=>{const[i,n]=d.useState(s??!0),o=l==null,c=()=>n(p=>!p);return d.useEffect(()=>{a!==void 0&&n(o)},[a,l]),e.jsxs(D,{collapsed:i,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(j,{size:4,align:"left",children:t}),e.jsx(g,{})]}),e.jsx(v,{margin:"0 20px"}),e.jsx(w,{children:r})]}),e.jsx("div",{className:"children"+(i?" close":" open"),children:l})]})},T=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,Y=({alerts:t,listView:l})=>{const{data:{user:s}}=b.useUser(),[r,a]=d.useState(null),i=r??t;return e.jsxs(T,{children:[!l&&e.jsx(A,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:k,setResult:a,loadingOnType:!0,validationCheck:!0}),Object.keys(i).sort((n,o)=>Number.parseInt(o)-Number.parseInt(n)).map(n=>{const o=new Date().getFullYear().toString(),c=r===null?n!==o:!1,p=`Новостей: ${i[n].length}`;return e.jsx(F,{sideText:p,title:n,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(y,{d:"column",gap:"8px",children:i[n].map((x,m)=>e.jsx(N,{isNew:n===o&&m===0&&(s==null?void 0:s.hasAlerts),news:x,orientation:"horizontal"},x.id))})},n)})]})},B=()=>{const{preparedData:t,error:l,loading:s}=u.selectors.useData();return d.useEffect(()=>{C.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(S,{load:u.effects.getFx,error:l,loading:s,data:t,children:e.jsx(E,{children:t?e.jsx(Y,{alerts:t}):e.jsx(I,{text:"У вас нет оповещений"})})})};export{B as default};
