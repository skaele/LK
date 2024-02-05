import{y as p,s as g,b_ as x,o as d,j as n}from"./vendor-2324f29b.js";import{ae as m,Y as P,W as j,z as v,af as y}from"./index-e592482b.js";import{c as F,L}from"./index-9ab3a060.js";import"./index-1c03349a.js";const $=p(async a=>{const{search:i,page:o,limit:c,filter:t}=a,e=(t==null?void 0:t.title)==="Все"?"":(t==null?void 0:t.title)??"",{data:r}=await m(i??"",e,o,c);return{results:r.items}}),h=F({getFx:$,limit:50}),b=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,W=()=>{var l;const{data:{user:a}}=P.useUser(),{$isPending:i,$items:o}=h,c=x(),t=d(i),e=d(o),r=c.params.filter??((l=a==null?void 0:a.subdivisions)==null?void 0:l[0].subdivision)??"",u=s=>s!=null&&s.title?`Кафедра: ${s==null?void 0:s.title} • Всего: ${(e==null?void 0:e.length)??0}`:null;return n.jsx(j,{load:function(){},loading:t,error:null,data:e,children:n.jsx(b,{children:n.jsx(v,{children:n.jsx(L,{searchPlaceholder:"Поиск сотрудников",paginationList:h,filterRequest:y,defaultFilter:r,filterPlaceholder:"Подразделения",underSearchText:u})})})})};export{W as default};
