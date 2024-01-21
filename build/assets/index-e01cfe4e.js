import{s as n,j as t,h as s}from"./vendor-4a800e6d.js";import{t as o}from"./index-7ab5fc9f.js";const a=n.div`
    position: ${({topRightConrer:r})=>r?"absolute":"relative"};
    top: ${({topRightConrer:r})=>r?"18px":"0"};
    right: ${({topRightConrer:r})=>r?"18px":"0"};
    width: 36px;
    height: 36px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${o.red.main};
    transition: 0.1s background;
    cursor: pointer;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        background: ${o.red.transparent3};
    }
`,c=({topRightConrer:r,onClick:e,visible:i})=>i?t.jsx(a,{topRightConrer:r,onClick:e,children:t.jsx(s,{})}):null;export{c as E};
