import{s as f,r as d,j as e,w as g}from"./vendor-ab783af7.js";import{A as j,a as h}from"./alert-item-bf814bd4.js";import{aY as u,h as v,G as w,O as A,a2 as b,aj as y,E as C,a8 as S,W as E,P as N,Y}from"./index-07cca455.js";import"./is-valid-url-08a91344.js";const k=(t,l)=>Object.keys(l).reduce((s,r)=>{const a=l[r].filter(i=>u(i.title).includes(u(t)));return s[r],s[r]=a,s},{}),D=f.div`
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
`,F=({title:t,children:l,initiallyCollapsed:s,sideText:r,isCollapsed:a})=>{const[i,n]=d.useState(s??!0),o=l==null,c=()=>n(p=>!p);return d.useEffect(()=>{a!==void 0&&n(o)},[a,l]),e.jsxs(D,{collapsed:i,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(v,{size:4,align:"left",children:t}),e.jsx(g,{})]}),e.jsx(w,{margin:"0 20px"}),e.jsx(A,{children:r})]}),e.jsx("div",{className:"children"+(i?" close":" open"),children:l})]})},I=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,O=({alerts:t,listView:l})=>{const{data:{user:s}}=b.useUser(),[r,a]=d.useState(null),i=r??t;return e.jsxs(I,{children:[!l&&e.jsx(y,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:k,setResult:a,loadingOnType:!0,validationCheck:!0}),Object.keys(i).sort((n,o)=>Number.parseInt(o)-Number.parseInt(n)).map(n=>{const o=new Date().getFullYear().toString(),c=r===null?n!==o:!1,p=`Новостей: ${i[n].length}`;return e.jsx(F,{sideText:p,title:n,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(C,{d:"column",gap:"8px",children:i[n].map((x,m)=>e.jsx(j,{isNew:n===o&&m===0&&(s==null?void 0:s.hasAlerts),news:x,orientation:"horizontal"},x.id))})},n)})]})},B=()=>{const{preparedData:t,error:l,loading:s}=h.selectors.useData();return d.useEffect(()=>{S.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(E,{load:h.effects.getFx,error:l,loading:s,data:t,children:e.jsx(N,{children:t?e.jsx(O,{alerts:t}):e.jsx(Y,{text:"У вас нет оповещений"})})})};export{B as default};
