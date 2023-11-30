import{y as p,s as g,bZ as x,o as d,j as n}from"./vendor-f1fdae2f.js";import{ad as m,V as P,W as j,w as v,ae as y}from"./index-415ac6e5.js";import{c as w,L as F}from"./index-19b82201.js";import"./index-195edc1e.js";const L=p(async a=>{const{search:i,page:o,limit:c,filter:t}=a,e=(t==null?void 0:t.title)==="Все"?"":(t==null?void 0:t.title)??"",{data:r}=await m(i??"",e,o,c);return{results:r.items}}),h=w({getFx:L,limit:50}),$=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,f=()=>{var l;const{data:{user:a}}=P.useUser(),{$isPending:i,$items:o}=h,c=x(),t=d(i),e=d(o),r=c.params.filter??((l=a==null?void 0:a.subdivisions)==null?void 0:l[0].subdivision)??"",u=s=>s!=null&&s.title?`Кафедра: ${s==null?void 0:s.title} • Всего: ${(e==null?void 0:e.length)??0}`:null;return n.jsx(j,{load:function(){},loading:t,error:null,data:e,children:n.jsx($,{children:n.jsx(v,{children:n.jsx(F,{searchPlaceholder:"Поиск сотрудников",paginationList:h,filterRequest:y,defaultFilter:r,filterPlaceholder:"Подразделения",underSearchText:u})})})})};export{f as default};
