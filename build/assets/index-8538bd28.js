import{y as l,s as p,n as d,b7 as g,j as e}from"./vendor-1f18e8c3.js";import{aP as m,Q as x,W as P,R as j,aQ as v,aR as y}from"./index-8228fcb5.js";import{c as R,L as k}from"./index-a22f8c52.js";import"./index-0eae065a.js";const F=l(async n=>{const{search:o="",page:c,limit:r,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,r);return{results:a.items}}),u=R({getFx:F,limit:50}),L=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,W=()=>{const{$isPending:n,$items:o}=u,c=d(n),r=g(),s=d(o),{data:{user:a}}=x.useUser(),i=r.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(P,{load:function(){},loading:c,error:null,data:s,children:e.jsx(L,{children:e.jsx(j,{children:e.jsx(k,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:v,filterPlaceholder:"Группа",defaultFilter:i,filter:(a==null?void 0:a.user_status)==="stud"?i:void 0,customMask:y.groupMask,underSearchText:h})})})})};export{W as default};
