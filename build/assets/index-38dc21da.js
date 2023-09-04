import{y as p,s as g,b6 as x,n as d,j as n}from"./vendor-e9654bfa.js";import{V as m,O as P,W as j,Q as v,X as y}from"./index-c2d11f9e.js";import{c as F,L}from"./index-f01cf6a7.js";import"./index-0b301f2f.js";const $=p(async a=>{const{search:i,page:o,limit:c,filter:t}=a,s=(t==null?void 0:t.title)==="Все"?"":(t==null?void 0:t.title)??"",{data:r}=await m(i??"",s,o,c);return{results:r.items}}),h=F({getFx:$,limit:50}),b=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,f=()=>{var l;const{data:{user:a}}=P.useUser(),{$isPending:i,$items:o}=h,c=x(),t=d(i),s=d(o),r=c.params.filter??((l=a==null?void 0:a.subdivisions)==null?void 0:l[0].subdivision)??"",u=e=>e!=null&&e.title?`Кафедра: ${e==null?void 0:e.title} • Всего: ${(s==null?void 0:s.length)??0}`:null;return n.jsx(j,{load:function(){},loading:t,error:null,data:s,children:n.jsx(b,{children:n.jsx(v,{children:n.jsx(L,{searchPlaceholder:"Поиск сотрудников",paginationList:h,filterRequest:y,defaultFilter:r,filterPlaceholder:"Подразделения",underSearchText:u})})})})};export{f as default};
