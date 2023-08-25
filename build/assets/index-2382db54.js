import{s as a,ag as y,j as e,ah as x,r as $}from"./vendor-e9654bfa.js";import{c as o,A as v,s as P,a as f,e as d,b as C,d as l,f as T,g as u,h as k,S as N}from"./ui-bd19e710.js";import{u as m,T as c,K as r,B as _,P as b,f as I,g as A,h as D,i as G,j as V,k as F}from"./index-0d70e53d.js";const L=(t,s)=>{let i=t;for(const n in s)i=i.replace(`:${n}`,s[n]);return i},U=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 12px;
`,W=a.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`,M=a.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`,R=({student:t})=>{const s=y(),{close:i}=m(),n=()=>{s.push(L(b,{studentId:t.studentGuid})),i()};return e.jsxs(U,{children:[e.jsx(c,{size:2,children:t.fullName}),e.jsxs(W,{children:[e.jsx(r,{keyStr:"Группа",value:t.groupNumber}),e.jsx(r,{keyStr:"Баллы",value:o(t)}),e.jsx(r,{keyStr:"Курс",value:t.course}),e.jsx(r,{keyStr:"Факультет",value:t.department})]}),e.jsxs(M,{children:[e.jsx(c,{size:2,children:"Посещения"}),e.jsx(v,{studentGuid:t.studentGuid})]}),e.jsx(_,{onClick:n,text:"Перейти к студенту"})]})},w=[{title:"ФИО",field:"fullName"},{title:"Группа",field:"groupNumber"},{title:"Посещений",field:"visits"},{title:"Баллы",field:"pointsCount",render:(t,s)=>o(s)}],z=[{title:"ФИО",field:"name",render:(t,s)=>s.fullName},{title:"Группа",field:"group",render:(t,s)=>s.groupNumber},{title:"Баллы",field:"points",render:(t,s)=>o(s)},{title:"Зачтено",field:"isDone",render:(t,s)=>o(s)>=55?"Зачтено":"Не зачтено"}],B=a.div`
    display: grid;
    padding: 12px;
`,H=a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,K=a.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    gap: 10px;
`,p=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],O=()=>{const[t,s]=x([P.$filters,f.$isExam]);return e.jsxs(K,{children:[e.jsx(I,{title:"Номер группы",value:t["group.groupName"],setValue:i=>{d.addFilter({name:"group.groupName",value:i})}}),e.jsx(A,{title:"Курс",items:p,selected:p.find(i=>i.id===t.course)??null,setSelected:i=>{if(i!=null&&i.id){d.addFilter({name:"course",value:i.id});return}d.addFilter({name:"course",value:""})}}),e.jsx(D,{title:"Проведение зачета",state:s,action:i=>C.setIsExam(i)})]})},Y=()=>{const{open:t}=m(),{students:s,totalCount:i,page:n,search:g,loading:j,isExam:h}=x({students:l.$pEStudents,loading:l.$loading,totalCount:l.$pEStudentsTotalCount,page:l.$pEStudentsPage,search:T.$search,isExam:f.$isExam});return $.useEffect(()=>{u.load()},[]),e.jsx(B,{children:e.jsxs(H,{children:[e.jsx(G,{value:g,setValue:k.update}),e.jsx(O,{}),e.jsx(V,{loading:j,data:s,columns:h?z:w,onRowClick:({studentGuid:S})=>{t(e.jsx(R,{student:s.find(E=>E.studentGuid===S)}))}}),e.jsx(F,{condition:!0,align:"right",pages:Math.floor(i/N),currentPage:n,setCurrentPage:u.setPage})]})})},Q=()=>e.jsx(Y,{});export{Q as default};
