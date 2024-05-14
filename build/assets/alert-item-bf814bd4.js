import{$ as x,g as h,ae as g,O as s,b7 as d,l as c,G as m,J as p,u as v,ag as f}from"./index-07cca455.js";import{s as o,j as i,aP as u}from"./vendor-ab783af7.js";import{i as b}from"./is-valid-url-08a91344.js";const w=async()=>(await x.get(`?getAlerts&token=${h()}`)).data,$=t=>t.reduce((e,a)=>{const r=new Date(a.date).getFullYear();return e[r]?e[r].push(a):e[r]=[a],e},{}),O=g({api:{get:w},prepareData:$}),j=({alert:t})=>{const{content:e,time:a,date:r}=t;return i.jsxs(y,{children:[i.jsx(s,{fontSize:"0.9rem",children:i.jsx(d,{words:[c(r),a]})}),i.jsx(m,{width:"100%",margin:"12px 0"}),i.jsx("div",{dangerouslySetInnerHTML:{__html:e}})]})},y=o.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;

    & > div {
        width: 100%;

        p {
            margin-top: 10px;
            width: 100%;
            opacity: 0.9;
            line-height: 1.7rem;
        }

        a {
            text-decoration: underline;
        }

        strong {
            font-weight: 600;
        }

        p:nth-child(1) {
            margin: 0;
            opacity: 1;
            text-align: left !important;
        }

        span {
            font-size: 1rem !important;
        }

        img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
            border-radius: var(--brLight);
            margin-bottom: 20px;
            box-shadow: var(--block-content-shadow);
        }
    }
`,k=t=>{const e=t.indexOf('src="')+5;let a=0;if(e===-1)return null;for(let n=e;n<t.length;n++)if(t[n]==='"'){a=n;break}const r=t.slice(e,a);return b(r)?r:null},A=o.div`
    display: ${({visible:t})=>t?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${p.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,I=o.div`
    width: 100%;
    border-radius: ${({orientation:t})=>t==="vertical"?"calc(var(--brLight) - 3px)":"8px"};
    background: ${({orientation:t})=>"var(--block-content)"};
    box-shadow: ${({orientation:t})=>t==="vertical"?"var(--block-shadow)":"0 0 1px #707070"};
    position: relative;
    display: flex;
    flex-direction: ${({orientation:t})=>t==="vertical"?"column":"row-reverse"};
    align-items: ${({orientation:t})=>t==="vertical"?"flex-start":"stretch"};
    height: ${({orientation:t})=>t==="vertical"?"150px":"fit-content"};
    overflow: hidden;
    padding: ${({orientation:t})=>t==="vertical"?"0":"12px"};
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`,S=o.div`
    height: ${({orientation:t})=>t==="vertical"?"50px":"auto"};
    width: ${({orientation:t})=>t==="vertical"?"50px":"65px"};
    min-width: ${({orientation:t})=>t==="vertical"?"50px":"65px"};
    min-height: ${({orientation:t})=>t==="vertical"?"50px":"65px"};
    overflow: hidden;
    background: ${p.purple.transparent2};
    border-radius: ${({orientation:t})=>t==="vertical"?"calc(var(--brLight) - 3px)":"7px"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({orientation:t})=>t==="vertical"?"12px":"0"};
    margin-top: ${({orientation:t})=>t==="vertical"?"12px":"0"};
    box-shadow: ${({orientation:t})=>t==="vertical"?"0 0 30px rgba(0, 0, 0, 0.101)":"none"};

    svg {
        width: 40%;
        height: 40%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`,D=o.div`
    min-height: 60px;
    width: 100%;
    padding: ${({orientation:t})=>t==="vertical"?"12px":"0"};
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: space-between;
`,L=o.div`
    font-weight: 500;
    width: ${({orientation:t})=>t==="vertical"?"100%":"85%"};
    hyphens: auto;
`;o.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.86rem;
    margin-bottom: 6px;
    height: 20px;
    opacity: 0.8;

    p {
        text-align: left;
    }

    strong {
        font-weight: 400;
    }

    img {
        display: none;
    }
`;const z=o(A)`
    position: absolute;
    top: 6px;
    right: -4px;
`,R=({news:t,orientation:e="vertical",isNew:a=!1})=>{const r=k(t.content),{open:n}=v(),l=()=>n(i.jsx(j,{alert:t}),t.title);return i.jsxs(I,{onClick:l,orientation:e,children:[i.jsx(S,{orientation:e,children:r?i.jsx("img",{src:r,alt:""}):i.jsx(u,{})}),i.jsxs(D,{orientation:e,children:[i.jsx(L,{orientation:e,children:e==="vertical"?f(t.title,38):t.title}),i.jsx(s,{children:i.jsx(d,{words:[c(t.date),t.time]})})]}),i.jsx(z,{visible:a,children:"New"})]})};export{R as A,O as a};
