import{e as l,s as g,u as d,aF as p,j as e}from"./vendor-ab783af7.js";import{aU as x,aV as m,a2 as P,W as j,P as v,aW as F,x as k,w}from"./index-07cca455.js";const y=l(async n=>{const{search:o="",page:c,limit:i,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,i);return{results:a.items}}),u=x({getFx:y,limit:50}),M=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,$=()=>{const{$isPending:n,$items:o}=u,c=d(n),i=p(),s=d(o),{data:{user:a}}=P.useUser(),r=i.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(j,{load:function(){},loading:c,error:null,data:s,children:e.jsx(M,{children:e.jsx(v,{children:e.jsx(F,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:k,filterPlaceholder:"Группа",defaultFilter:r,filter:(a==null?void 0:a.user_status)==="stud"?r:void 0,customMask:w.groupMask,underSearchText:h})})})})};export{$ as default};
