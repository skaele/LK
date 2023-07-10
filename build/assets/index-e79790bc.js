import{s as f,r as d,j as e,aV as m}from"./vendor-9cc634b6.js";import{av as x,T as j,g as v,u as w,z as b,O as y,w as A,aH as C,aI as u,a5 as S,W as E,P as I,E as N}from"./index-74590cb5.js";const k=(t,l)=>Object.keys(l).reduce((s,r)=>{const i=l[r].filter(a=>x(a.title).includes(x(t)));return s[r],s[r]=i,s},{}),D=f.div`
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
`,T=({title:t,children:l,initiallyCollapsed:s,sideText:r,isCollapsed:i})=>{const[a,n]=d.useState(s??!0),o=l==null,c=()=>n(p=>!p);return d.useEffect(()=>{i!==void 0&&n(o)},[i,l]),e.jsxs(D,{collapsed:a,noChildren:o,children:[e.jsxs("div",{className:"top",onClick:c,children:[e.jsxs("div",{className:"left",children:[e.jsx(j,{size:4,align:"left",children:t}),e.jsx(m,{})]}),e.jsx(v,{margin:"0 20px"}),e.jsx(w,{children:r})]}),e.jsx("div",{className:"children"+(a?" close":" open"),children:l})]})},z=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,F=({alerts:t,listView:l})=>{const{data:{user:s}}=b.useUser(),[r,i]=d.useState(null),a=r??t;return e.jsxs(z,{children:[!l&&e.jsx(y,{placeholder:"Поиск новостей",whereToSearch:t,searchEngine:k,setResult:i,loadingOnType:!0,validationCheck:!0}),Object.keys(a).sort((n,o)=>Number.parseInt(o)-Number.parseInt(n)).map(n=>{const o=new Date().getFullYear().toString(),c=r===null?n!==o:!1,p=`Новостей: ${a[n].length}`;return e.jsx(T,{sideText:p,title:n,isCollapsed:c,initiallyCollapsed:c,children:e.jsx(A,{scroll:!1,gap:12,children:a[n].map((h,g)=>e.jsx(C,{isNew:n===o&&g===0&&(s==null?void 0:s.hasAlerts),news:h,orientation:"horizontal"},h.id))})},n)})]})},P=()=>{const{preparedData:t,error:l,loading:s}=u.selectors.useData();return d.useEffect(()=>{S.clearById({id:"alert",pageId:"alerts"})},[]),e.jsx(E,{load:u.effects.getFx,error:l,loading:s,data:t,children:e.jsx(I,{children:t?e.jsx(F,{alerts:t}):e.jsx(N,{text:"У вас нет оповещений"})})})};export{P as default};
