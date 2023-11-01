import{s as f,r as d,j as e,bH as g}from"./vendor-4af360a6.js";import{aU as h,T as j,D as v,V as w,U as b,af as A,p as y,b2 as u,Z as C,W as S,t as D,O as E}from"./index-80328a9f.js";import{A as N}from"./alert-item-1875fb81.js";import"./is-valid-url-08a91344.js";const k=(t,l)=>Object.keys(l).reduce((s,r)=>{const a=l[r].filter(i=>h(i.title).includes(h(t)));return s[r],s[r]=a,s},{}),F=f.div`
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
`,I=({title:t,children:l,initiallyCollapsed:s,sideText:r,isCollapsed:a})=>{const[i,n]=d.useState(s??!0),o=l==null,c=()=>n(p=>!p);return d.useEffect(()=>{a!==void 0&&n(o)},[a,l]),e.jsxs(F,{collapsed:i,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(j,{size:4,align:"left",children:t}),e.jsx(g,{})]}),e.jsx(v,{margin:"0 20px"}),e.jsx(w,{children:r})]}),e.jsx("div",{className:"children"+(i?" close":" open"),children:l})]})},T=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,O=({alerts:t,listView:l})=>{const{data:{user:s}}=b.useUser(),[r,a]=d.useState(null),i=r??t;return e.jsxs(T,{children:[!l&&e.jsx(A,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:k,setResult:a,loadingOnType:!0,validationCheck:!0}),Object.keys(i).sort((n,o)=>Number.parseInt(o)-Number.parseInt(n)).map(n=>{const o=new Date().getFullYear().toString(),c=r===null?n!==o:!1,p=`Новостей: ${i[n].length}`;return e.jsx(I,{sideText:p,title:n,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(y,{d:"column",gap:"8px",children:i[n].map((x,m)=>e.jsx(N,{isNew:n===o&&m===0&&(s==null?void 0:s.hasAlerts),news:x,orientation:"horizontal"},x.id))})},n)})]})},B=()=>{const{preparedData:t,error:l,loading:s}=u.selectors.useData();return d.useEffect(()=>{C.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(S,{load:u.effects.getFx,error:l,loading:s,data:t,children:e.jsx(D,{children:t?e.jsx(O,{alerts:t}):e.jsx(E,{text:"У вас нет оповещений"})})})};export{B as default};
