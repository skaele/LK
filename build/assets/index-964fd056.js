import{u as f,b1 as D,b2 as Z,p as $,x as a,b3 as J,b4 as Q,s as o,ah as k,j as n,ag as X,r as u,y as S}from"./vendor-1f18e8c3.js";import{c as h,s as ee,a as W,e as P,b as te,A as se,d as m,f as ne,g as G,h as re,S as ie,j as E,p as y}from"./ui-45f67453.js";import{f as p,g as T,h as ae,u as V,T as I,K as j,B as c,P as oe,i as le,j as ce,k as ue,m as v,n as de,o as pe}from"./index-8228fcb5.js";function F(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),s.push.apply(s,r)}return s}function xe(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?F(Object(s),!0).forEach(function(r){ge(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):F(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function ge(e,t,s){return t=fe(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function fe(e){var t=me(e,"string");return typeof t=="symbol"?t:String(t)}function me(e,t){if(typeof e!="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var r=s.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function je(e){var{events:t,reset:s,target:r=f({name:"target",sid:"aip3nf"},{name:"target",sid:"aip3nf"})}=e;return D.unit(r)||L("target should be a unit"),s&&!D.unit(s)&&L("reset should be a unit"),Z(r,()=>{var i=Object.keys(t),x=Array.isArray(t)?[...i].fill(""):{},l=$(i.length,{and:{serialize:"ignore"},name:"$counter",sid:"-dby0v3"}),d=$(x,{and:{serialize:"ignore"},name:"$results",sid:"c60qbe"});l.reset(a({and:[{source:r}],or:{sid:"-8hxq8z"}})),d.reset(r),s&&(l.reset(a({and:[{source:s}],or:{sid:"3c6u5p"}})),d.reset(s));var b=function(C){var N=$(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"uttu1j"}).on(t[C],()=>!0).reset(r);s&&N.reset(s),l.on(N,g=>g-1),d.on(t[C],(g,Y)=>{var _=Array.isArray(g)?[...g]:xe({},g);return _[C]=Y,_})};for(var H of i)b(H);J({and:[{source:a({and:[{source:d,clock:Q(Object.values(t),{name:"clock",sid:"-531esq"})}],or:{name:"source",sid:"uwap9g"}}),filter:l.map(A=>A===0),target:r}],or:{sid:"ciyd7d"}})}),r}function L(e){throw new Error(e)}const he=[{title:"ФИО",field:"fullName"},{title:"Группа",field:"groupNumber"},{title:"Посещений",field:"visits"},{title:"Баллы",field:"pointsCount",render:(e,t)=>h(t)}],Se=[{title:"ФИО",field:"name",render:(e,t)=>t.fullName},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber},{title:"Баллы",field:"points",render:(e,t)=>h(t)},{title:"Зачтено",field:"isDone",render:(e,t)=>h(t)>=55?"Зачтено":"Не зачтено"}],ye=o.div`
    display: grid;
    padding: 12px;
`,ve=o.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,be=o.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    gap: 10px;
`,U=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Ce=()=>{const[e,t]=k([ee.$filters,W.$isExam]);return n.jsxs(be,{children:[n.jsx(p,{title:"Номер группы",value:e["group.groupName"],setValue:s=>{P.addFilter({name:"group.groupName",value:s})}}),n.jsx(T,{title:"Курс",items:U,selected:U.find(s=>s.id===e.course)??null,setSelected:s=>{if(s!=null&&s.id){P.addFilter({name:"course",value:s.id});return}P.addFilter({name:"course",value:""})}}),n.jsx(ae,{title:"Проведение зачета",state:t,action:s=>te.setIsExam(s)})]})},$e=(e,t)=>{let s=e;for(const r in t)s=s.replace(`:${r}`,t[r]);return s},Pe=o.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 12px;
`,ke=o.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`,Ee=o.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`,Te=({student:e})=>{const t=X(),{close:s}=V(),r=()=>{t.push($e(oe,{studentId:e.studentGuid})),s()};return n.jsxs(Pe,{children:[n.jsx(I,{size:2,children:e.fullName}),n.jsxs(ke,{children:[n.jsx(j,{keyStr:"Группа",value:e.groupNumber}),n.jsx(j,{keyStr:"Баллы",value:h(e)}),n.jsx(j,{keyStr:"Курс",value:e.course}),n.jsx(j,{keyStr:"Факультет",value:e.department})]}),n.jsxs(Ee,{children:[n.jsx(I,{size:2,children:"Посещения"}),n.jsx(se,{studentGuid:e.studentGuid})]}),n.jsx(c,{onClick:r,text:"Перейти к студенту"})]})},Ve=()=>{const{open:e}=V(),{students:t,totalCount:s,page:r,search:i,loading:x,isExam:l}=k({students:m.$pEStudents,loading:m.$loading,totalCount:m.$pEStudentsTotalCount,page:m.$pEStudentsPage,search:ne.$search,isExam:W.$isExam});return u.useEffect(()=>{G.load()},[]),n.jsx(ye,{children:n.jsxs(ve,{children:[n.jsx(le,{value:i,setValue:re.update}),n.jsx(Ce,{}),n.jsx(ce,{loading:x,data:t,columns:l?Se:he,onRowClick:({studentGuid:d})=>{e(n.jsx(Te,{student:t.find(b=>b.studentGuid===d)}))}}),n.jsx(ue,{condition:!0,align:"right",pages:Math.floor(s/ie),currentPage:r,setCurrentPage:G.setPage})]})})},we=e=>`mutation createTeacher {
        createTeacher(
          input: ${E(e)}
        ) {
          errors {
            __typename
          }
        }
      }`,z=f(),M=S(async e=>await y(we(e)));a({clock:z,target:M});a({clock:M.doneData,target:v.close});const Oe=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,Ae=()=>{const[e,t]=u.useState(""),[s,r]=u.useState(""),i=()=>{z({fullName:e,teacherGuid:s})};return n.jsxs(Oe,{children:[n.jsx(p,{title:"Имя",setValue:t,value:e}),n.jsx(p,{title:"Айди",setValue:r,value:s}),n.jsx(c,{text:"Добавить",onClick:i})]})},Ne=e=>`mutation assignCuratorToGroup {
      assignCuratorToGroup(input: ${E(e)} {
        success
      }
    }`,_e=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${E(e)} {
        success
      }
    }`,q=f(),w=S(async e=>await y(_e(e)));a({clock:q,target:w});a({clock:w.doneData,target:v.close});const K=f(),R=S(async({groupName:e,teacherGuid:t})=>await y(Ne({groupName:e,teacherGuid:t})));a({clock:K,target:R});a({clock:je({events:[R.doneData,w.doneData]}),target:v.close});const De=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,Ge=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"4",title:"4"}],Ie=()=>{const[e,t]=u.useState(null),[s,r]=u.useState(""),[i,x]=u.useState(""),l=()=>{K({cost:(e==null?void 0:e.id.toString())??"",groupName:i,teacherGuid:s})};return n.jsxs(De,{children:[n.jsx(p,{title:"Группа",setValue:x,value:i}),n.jsx(p,{title:"Айди преподавателя",setValue:r,value:s}),n.jsx(T,{title:"Стоимость",items:Ge,selected:e,setSelected:t}),n.jsx(c,{text:"Добавить",onClick:l})]})},Fe=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,Le=[{id:"2",title:"2"},{id:"4",title:"4"}],Ue=()=>{const[e,t]=u.useState(null),[s,r]=u.useState(""),i=()=>{q({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:s})};return n.jsxs(Fe,{children:[n.jsx(p,{title:"Группа",setValue:r,value:s}),n.jsx(T,{title:"Стоимость",items:Le,selected:e,setSelected:t}),n.jsx(c,{text:"Добавить",onClick:i})]})},We=()=>`mutation {
      updateStudentsInfo {
        success
      }
     }`,B=f(),O=S(async()=>await y(We()));a({clock:B,target:O});a({clock:O.doneData,target:v.close});O.pending;const ze=()=>{const[e]=k([B]),{open:t}=V(),s=()=>{t(n.jsx(Ae,{}))},r=()=>{t(n.jsx(Ie,{}))},i=()=>{t(n.jsx(Ue,{}))};return n.jsxs(de,{children:[n.jsx(c,{onClick:s,text:"Добавить нового преподавателя"}),n.jsx(c,{onClick:e,text:"Обновить данные о студентах"}),n.jsx(c,{onClick:r,text:"Назначить куратора"}),n.jsx(c,{onClick:i,text:"Назначить стоимость посещения"})]})},Re=()=>n.jsx(pe,{pages:[{title:"Студенты",content:n.jsx(Ve,{})},{title:"Администрирование",content:n.jsx(ze,{})}]});export{Re as default};
