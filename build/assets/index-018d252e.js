import{j as t,O as l,r as n,a5 as m,F as u}from"./vendor-0d3de025.js";import{T as x,s as h,W as g,e as j,P as p,M as d,C}from"./index-0ac1f95c.js";import F from"./form-ea0b86f5.js";import"./send-form-e595be0c.js";import"./create-form-store-a3c54ce7.js";const T=({action:r,...i})=>t.jsx(x,{onClick:r,...i,rightIcon:t.jsx(l,{})}),P=()=>{var o;const[r,i]=n.useState(!1),f=m(),{data:{dataUserApplication:s},error:c}=h.useApplications();return n.useEffect(()=>{var e,a;(e=s==null?void 0:s.subdivisions)!=null&&e.length&&((a=s==null?void 0:s.subdivisions)==null?void 0:a.length)>1&&i(!0)},[s]),r?t.jsx(g,{load:()=>{j.getUserDataApplicationsFx()},data:s,error:c,children:t.jsxs(p,{children:[t.jsx(d,{type:"info",title:"Информация",icon:t.jsx(u,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Выберите должность, чтобы заполнить контактные данные по должности."}),(o=s==null?void 0:s.subdivisions)==null?void 0:o.map(e=>t.jsx(T,{title:e.subdivision+" ("+e.post+")",type:"link",action:()=>f.push(C+"/"+e.guid_staff)},e.guid_staff))]})}):t.jsx(F,{})};export{P as default};
