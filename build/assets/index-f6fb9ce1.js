import{y as x,s as m,c0 as v,T as P,o as d,j as i}from"./vendor-35c3991b.js";import{av as y,a1 as j,aw as F,ax as L,W as T,P as $,ay as b}from"./index-46a096a9.js";import{c as w,L as R}from"./index-ccdbdbae.js";import"./index-4ee90ac4.js";const f=x(async a=>{const{search:n,page:o,limit:c,filter:s}=a,r=(s==null?void 0:s.title)==="Все"?"":(s==null?void 0:s.title)??"",{data:t}=await y(n??"",r,o,c);return{results:t.items}}),u=w({getFx:f,limit:50}),A=m.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,O=()=>{var h;const{data:{user:a}}=j.useUser(),{$isPending:n,$items:o}=u,c=v(),s=P(),r=d(n),t=d(o),l=c.params.filter??((h=a==null?void 0:a.subdivisions)==null?void 0:h[0].subdivision)??"",p=e=>e!=null&&e.title?`Кафедра: ${e==null?void 0:e.title} • Всего: ${(t==null?void 0:t.length)??0}`:null,{isMobile:g}=F();return g||s.push(`${L}?subdivision=${l}`),i.jsx(T,{load:function(){},loading:r,error:null,data:t,children:i.jsx(A,{children:i.jsx($,{children:i.jsx(R,{searchPlaceholder:"Поиск сотрудников",paginationList:u,filterRequest:b,defaultFilter:l,filterPlaceholder:"Подразделения",underSearchText:p})})})})};export{O as default};
