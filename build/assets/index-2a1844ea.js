import{y as l,s as p,o as d,b$ as g,j as e}from"./vendor-4355a046.js";import{b6 as x,a6 as m,W as P,P as j,x as v,w as y}from"./index-af042de3.js";import{c as $,L as k}from"./index-e6676b01.js";import"./index-55f430c7.js";const w=l(async n=>{const{search:o="",page:c,limit:r,filter:s}=n,{data:a}=await x(o,(s==null?void 0:s.id.toString())??"",c,r);return{results:a.items}}),u=$({getFx:w,limit:50}),F=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,W=()=>{const{$isPending:n,$items:o}=u,c=d(n),r=g(),s=d(o),{data:{user:a}}=m.useUser(),i=r.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(P,{load:function(){},loading:c,error:null,data:s,children:e.jsx(F,{children:e.jsx(j,{children:e.jsx(k,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:v,filterPlaceholder:"Группа",defaultFilter:i,filter:(a==null?void 0:a.user_status)==="stud"?i:void 0,customMask:y.groupMask,underSearchText:h})})})})};export{W as default};
