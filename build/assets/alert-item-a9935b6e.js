import{s as r,j as e,at as x}from"./vendor-4af360a6.js";import{V as s,b3 as c,l as d,D as h,x as p,u as g,a7 as m}from"./index-9e567fbd.js";import{i as v}from"./is-valid-url-08a91344.js";const f=({alert:t})=>{const{content:i,time:a,date:o}=t;return e.jsxs(u,{children:[e.jsx(s,{fontSize:"0.9rem",children:e.jsx(c,{words:[d(o),a]})}),e.jsx(h,{width:"100%",margin:"12px 0"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})},u=r.div`
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
`,b=t=>{const i=t.indexOf('src="')+5;let a=0;if(i===-1)return null;for(let n=i;n<t.length;n++)if(t[n]==='"'){a=n;break}const o=t.slice(i,a);return v(o)?o:null},w=r.div`
    display: ${({visible:t})=>t?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${p.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,j=r.div`
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
`,$=r.div`
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
`,y=r.div`
    min-height: 60px;
    width: 100%;
    padding: ${({orientation:t})=>t==="vertical"?"12px":"0"};
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: space-between;
`,k=r.div`
    font-weight: 500;
    width: ${({orientation:t})=>t==="vertical"?"100%":"85%"};
    hyphens: auto;
`;r.div`
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
`;const I=r(w)`
    position: absolute;
    top: 6px;
    right: -4px;
`,z=({news:t,orientation:i="vertical",isNew:a=!1})=>{const o=b(t.content),{open:n}=g(),l=()=>n(e.jsx(f,{alert:t}),t.title);return e.jsxs(j,{onClick:l,orientation:i,children:[e.jsx($,{orientation:i,children:o?e.jsx("img",{src:o,alt:""}):e.jsx(x,{})}),e.jsxs(y,{orientation:i,children:[e.jsx(k,{orientation:i,children:i==="vertical"?m(t.title,38):t.title}),e.jsx(s,{children:e.jsx(c,{words:[d(t.date),t.time]})})]}),e.jsx(I,{visible:a,children:"New"})]})};export{z as A};
