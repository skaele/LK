import{y as p,s as g,bU as x,n as d,j as n}from"./vendor-52b5ac7c.js";import{a1 as m,_ as P,W as j,t as v,a2 as y}from"./index-d0879ffc.js";import{c as F,L}from"./index-8c964437.js";import"./index-f8de2f69.js";const $=p(async a=>{const{search:i,page:o,limit:c,filter:t}=a,s=(t==null?void 0:t.title)==="Все"?"":(t==null?void 0:t.title)??"",{data:r}=await m(i??"",s,o,c);return{results:r.items}}),h=F({getFx:$,limit:50}),b=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,f=()=>{var l;const{data:{user:a}}=P.useUser(),{$isPending:i,$items:o}=h,c=x(),t=d(i),s=d(o),r=c.params.filter??((l=a==null?void 0:a.subdivisions)==null?void 0:l[0].subdivision)??"",u=e=>e!=null&&e.title?`Кафедра: ${e==null?void 0:e.title} • Всего: ${(s==null?void 0:s.length)??0}`:null;return n.jsx(j,{load:function(){},loading:t,error:null,data:s,children:n.jsx(b,{children:n.jsx(v,{children:n.jsx(L,{searchPlaceholder:"Поиск сотрудников",paginationList:h,filterRequest:y,defaultFilter:r,filterPlaceholder:"Подразделения",underSearchText:u})})})})};export{f as default};
