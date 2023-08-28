import{y as l,s as p,n as d,b6 as g,j as e}from"./vendor-e9654bfa.js";import{aO as m,O as x,W as P,Q as j,aP as v,aQ as y}from"./index-5ad0a555.js";import{c as k,L as F}from"./index-3075abf3.js";import"./index-11402b8c.js";const L=l(async n=>{const{search:o="",page:c,limit:r,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,r);return{results:a.items}}),u=k({getFx:L,limit:50}),M=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,R=()=>{const{$isPending:n,$items:o}=u,c=d(n),r=g(),s=d(o),{data:{user:a}}=x.useUser(),i=r.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(P,{load:function(){},loading:c,error:null,data:s,children:e.jsx(M,{children:e.jsx(j,{children:e.jsx(F,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:v,filterPlaceholder:"Группа",defaultFilter:i,filter:(a==null?void 0:a.user_status)==="stud"?i:void 0,customMask:y.groupMask,underSearchText:h})})})})};export{R as default};
