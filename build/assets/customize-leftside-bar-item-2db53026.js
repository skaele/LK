import{s as i,j as e,R as a}from"./vendor-e9654bfa.js";import{B as r,bZ as c}from"./index-5ad0a555.js";import{a as d,b as l}from"./index.esm-6c739436.js";const p=i.div`
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
`,m=({chosen:t,onClick:n})=>e.jsx(r,{minWidth:"35px",background:"transparent",icon:t?e.jsx(d,{style:{color:"var(--blue)"}}):e.jsx(l,{}),onClick:n}),x=t=>{const{id:n,chosen:o,switchMenuItem:s}=t;return e.jsxs(p,{chosen:o,onClick:()=>s(n),children:[e.jsx(c,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...t}),e.jsx("div",{className:"buttons",children:e.jsx(m,{chosen:o,onClick:()=>{s(n)}})})]})},h=a.memo(x);export{h as C};
