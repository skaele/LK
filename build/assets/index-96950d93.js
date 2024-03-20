import{y as l,s as p,o as d,b$ as g,j as e}from"./vendor-561dac3a.js";import{b7 as m,a8 as x,W as P,P as j,z as y,y as v}from"./index-da3e5de5.js";import{c as $,L as k}from"./index-517681b5.js";import"./index-c0de1c43.js";const F=l(async n=>{const{search:o="",page:c,limit:r,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,r);return{results:a.items}}),u=$({getFx:F,limit:50}),L=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,W=()=>{const{$isPending:n,$items:o}=u,c=d(n),r=g(),s=d(o),{data:{user:a}}=x.useUser(),i=r.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(P,{load:function(){},loading:c,error:null,data:s,children:e.jsx(L,{children:e.jsx(j,{children:e.jsx(k,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:y,filterPlaceholder:"Группа",defaultFilter:i,filter:(a==null?void 0:a.user_status)==="stud"?i:void 0,customMask:v.groupMask,underSearchText:h})})})})};export{W as default};
