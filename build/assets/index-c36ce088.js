import{s as p,u as o,bb as l,j as e}from"./vendor-48260ac4.js";import{ai as g,W as x,P as m,bs as P,bt as c,w as j,v}from"./index-4085bf87.js";const k=p.div.withConfig({componentId:"sc-2phkr-0"})(["width:100%;display:flex;justify-content:center;height:calc(100vh - var(--header-height) - 20px);@media (max-width:1000px){height:calc(100vh - 125px);}"]),M=()=>{const{$isPending:r,$items:d}=c,i=o(r),h=l(),a=o(d),{data:{user:t}}=g.useUser(),n=h.params.filter??(t==null?void 0:t.group)??"",u=s=>(s==null?void 0:s.title)==="Все"||!(s!=null&&s.id)?null:`Группа: ${s==null?void 0:s.id} • Всего: ${(a==null?void 0:a.length)??0}`;return e.jsx(x,{load:function(){},loading:i,error:null,data:a,children:e.jsx(k,{children:e.jsx(m,{children:e.jsx(P,{searchPlaceholder:"Поиск студентов",paginationList:c,filterRequest:j,filterPlaceholder:"Группа",defaultFilter:n,filter:(t==null?void 0:t.user_status)==="stud"?n:void 0,customMask:v.groupMask,underSearchText:u})})})})};export{M as default};
