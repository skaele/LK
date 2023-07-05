import{y as p,s as g,aR as m,m as d,j as n}from"./vendor-9cc634b6.js";import{J as x,z as P,W as j,P as v,N as y}from"./index-c587e0f5.js";import{c as F,L}from"./index-cb5f0a0b.js";import"./index-6a87ec9d.js";const R=p(async a=>{const{search:i,page:o,limit:c,filter:t}=a,s=(t==null?void 0:t.title)==="Все"?"":(t==null?void 0:t.title)??"",{data:r}=await x(i??"",s,o,c);return{results:r.items}}),h=F({getFx:R,limit:50}),$=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,f=()=>{var l;const{data:{user:a}}=P.useUser(),{$isPending:i,$items:o}=h,c=m(),t=d(i),s=d(o),r=c.params.filter??((l=a==null?void 0:a.subdivisions)==null?void 0:l[0].subdivision)??"",u=e=>e!=null&&e.title?`Кафедра: ${e==null?void 0:e.title} • Всего: ${(s==null?void 0:s.length)??0}`:null;return n.jsx(j,{load:function(){},loading:t,error:null,data:s,children:n.jsx($,{children:n.jsx(v,{children:n.jsx(L,{searchPlaceholder:"Поиск сотрудников",paginationList:h,filterRequest:y,defaultFilter:r,filterPlaceholder:"Подразделения",underSearchText:u})})})})};export{f as default};
