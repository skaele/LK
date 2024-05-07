import{y as l,s as g,o as d,a7 as p,j as e}from"./vendor-cbee1f3c.js";import{bc as x,bd as m,a8 as P,W as j,P as v,be as y,G as k,E as F}from"./index-b503cf02.js";const M=l(async n=>{const{search:o="",page:c,limit:i,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,i);return{results:a.items}}),u=x({getFx:M,limit:50}),S=g.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,w=()=>{const{$isPending:n,$items:o}=u,c=d(n),i=p(),s=d(o),{data:{user:a}}=P.useUser(),r=i.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(j,{load:function(){},loading:c,error:null,data:s,children:e.jsx(S,{children:e.jsx(v,{children:e.jsx(y,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:k,filterPlaceholder:"Группа",defaultFilter:r,filter:(a==null?void 0:a.user_status)==="stud"?r:void 0,customMask:F.groupMask,underSearchText:h})})})})};export{w as default};
