import{y as l,s as p,o as d,b_ as g,j as e}from"./vendor-2324f29b.js";import{aW as m,Y as x,W as P,z as j,m as k,k as v}from"./index-96298632.js";import{c as y,L as F}from"./index-56c1cef8.js";import"./index-140d8f78.js";const L=l(async n=>{const{search:o="",page:c,limit:r,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,r);return{results:a.items}}),u=y({getFx:L,limit:50}),M=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,R=()=>{const{$isPending:n,$items:o}=u,c=d(n),r=g(),s=d(o),{data:{user:a}}=x.useUser(),i=r.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(P,{load:function(){},loading:c,error:null,data:s,children:e.jsx(M,{children:e.jsx(j,{children:e.jsx(F,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:k,filterPlaceholder:"Группа",defaultFilter:i,filter:(a==null?void 0:a.user_status)==="stud"?i:void 0,customMask:v.groupMask,underSearchText:h})})})})};export{R as default};
