import{s as l,r as c,j as e,aZ as m,Q as h}from"./vendor-9cc634b6.js";import{b1 as p,i as f,ab as g,aa as x,f as d}from"./index-c587e0f5.js";const u=l.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 4px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        min-width: 100%;
    }
`,a=({qrCode:t})=>{const[i,n]=c.useState(!0);return c.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),e.jsx(u,{children:e.jsx(p,{loading:i,width:"300px",height:"300px",src:t??""})})},j=l.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,w=({qr_current:t,qr_total:i,currentPage:n})=>n===0?e.jsx(a,{qrCode:t}):n===1?e.jsx(a,{qrCode:i}):e.jsx(j,{children:e.jsx(f,{pages:[{title:"Текущая залолженность",content:e.jsx(a,{qrCode:t})},{title:"Общая залолженность",content:e.jsx(a,{qrCode:i})}],appearance:!1,currentPage:n})}),R=({type:t="horizontal",...i})=>{const{open:n}=g(),o="Оплатить через QR-code",s=`linear-gradient(45deg, ${d.green.main}, ${d.green.dark1})`,r=()=>{n(e.jsx(w,{...i}),o)};return t==="vertical"?e.jsx(x,{onClick:r,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:e.jsx(m,{}),textColor:"#fff",background:s}):e.jsx(x,{text:o,onClick:r,width:"100%",textColor:"#fff",background:s})},C=l.div`
    display: flex;
    align-items: center;
    font-size: ${({fontSize:t})=>t};
    font-weight: ${({fontWeight:t})=>t};
    color: ${({color:t})=>t};

    svg {
        width: ${({iconSize:t})=>t};
        max-width: ${({iconSize:t})=>t};
        height: ${({iconSize:t})=>t};
        min-width: ${({iconSize:t})=>t};
        margin: 0;
        stroke-width: 0.2;
    }
`,b=({children:t,size:i,color:n,fontWeight:o})=>{const s=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",r=i==="small"?"17px":i==="big"?"22px":"18px";return e.jsxs(C,{color:n,fontSize:s,iconSize:r,fontWeight:o,children:[t,e.jsx(h,{})]})},Q=({debt:t,size:i="big"})=>{const n=t>0?d.red.main:d.green.main;return e.jsx(b,{size:i,color:n,fontWeight:"600",children:t>=0?t:`+${-t}`})};export{Q as D,R as P,b as R};
