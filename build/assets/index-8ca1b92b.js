import{s as f,r as d,j as e,bJ as g}from"./vendor-831b4923.js";import{aU as x,T as j,D as v,V as w,_ as b,a3 as A,Y as y,b2 as u,ae as C,W as S,t as D,O as E}from"./index-774d803f.js";import{A as N}from"./alert-item-17572479.js";import"./is-valid-url-08a91344.js";const k=(t,l)=>Object.keys(l).reduce((s,r)=>{const a=l[r].filter(i=>x(i.title).includes(x(t)));return s[r],s[r]=a,s},{}),I=f.div`
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
`,T=({title:t,children:l,initiallyCollapsed:s,sideText:r,isCollapsed:a})=>{const[i,n]=d.useState(s??!0),o=l==null,c=()=>n(p=>!p);return d.useEffect(()=>{a!==void 0&&n(o)},[a,l]),e.jsxs(I,{collapsed:i,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(j,{size:4,align:"left",children:t}),e.jsx(g,{})]}),e.jsx(v,{margin:"0 20px"}),e.jsx(w,{children:r})]}),e.jsx("div",{className:"children"+(i?" close":" open"),children:l})]})},Y=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,F=({alerts:t,listView:l})=>{const{data:{user:s}}=b.useUser(),[r,a]=d.useState(null),i=r??t;return e.jsxs(Y,{children:[!l&&e.jsx(A,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:k,setResult:a,loadingOnType:!0,validationCheck:!0}),Object.keys(i).sort((n,o)=>Number.parseInt(o)-Number.parseInt(n)).map(n=>{const o=new Date().getFullYear().toString(),c=r===null?n!==o:!1,p=`Новостей: ${i[n].length}`;return e.jsx(T,{sideText:p,title:n,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(y,{scroll:!1,gap:20,children:i[n].map((h,m)=>e.jsx(N,{isNew:n===o&&m===0&&(s==null?void 0:s.hasAlerts),news:h,orientation:"horizontal"},h.id))})},n)})]})},L=()=>{const{preparedData:t,error:l,loading:s}=u.selectors.useData();return d.useEffect(()=>{C.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(S,{load:u.effects.getFx,error:l,loading:s,data:t,children:e.jsx(D,{children:t?e.jsx(F,{alerts:t}):e.jsx(E,{text:"У вас нет оповещений"})})})};export{L as default};
