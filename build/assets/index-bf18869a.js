import{d as ue,u as c,b2 as H,b3 as de,p,x as i,b4 as pe,b5 as ge,y as f,ah as x,r as o,j as s,s as l,b6 as fe,ag as xe}from"./vendor-198a3a64.js";import{f as me,g as he,T as v,h as N,i as b,j as C,B as d,k as A,u as O,$ as je,m as Y,n as ye,K as y,P as Se,o as ve,p as $e,q as be}from"./index-e5639c5e.js";import{d as Z,j as _,p as m,c as $,s as Ce,a as J,e as P,b as ke,A as we,f as S,g as Ee,h as M,i as Pe,S as Te}from"./ui-ce8e5228.js";const Ve="http://apilin.mospolytech.ru:3345/userinfo/graphql/",G=ue.create({baseURL:Ve}),Ne={headers:{"Content-Type":"application/json"}};G.interceptors.request.use(me);G.interceptors.response.use(e=>e,he);const Ae=async e=>{const t=await G.post("",{query:e},Ne);if(t.data.errors)throw new Error("Request error");return t.data.data};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?U(Object(r),!0).forEach(function(n){_e(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _e(e,t,r){return t=Ge(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ge(e){var t=De(e,"string");return typeof t=="symbol"?t:String(t)}function De(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qe(e){var{events:t,reset:r,target:n=c({name:"target",sid:"aip3nf"},{name:"target",sid:"aip3nf"})}=e;return H.unit(n)||B("target should be a unit"),r&&!H.unit(r)&&B("reset should be a unit"),de(n,()=>{var a=Object.keys(t),h=Array.isArray(t)?[...a].fill(""):{},u=p(a.length,{and:{serialize:"ignore"},name:"$counter",sid:"-dby0v3"}),g=p(h,{and:{serialize:"ignore"},name:"$results",sid:"c60qbe"});u.reset(i({and:[{source:n}],or:{sid:"-8hxq8z"}})),g.reset(n),r&&(u.reset(i({and:[{source:r}],or:{sid:"3c6u5p"}})),g.reset(r));var w=function(E){var z=p(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"uttu1j"}).on(t[E],()=>!0).reset(n);r&&z.reset(r),u.on(z,j=>j-1),g.on(t[E],(j,le)=>{var W=Array.isArray(j)?[...j]:Oe({},j);return W[E]=le,W})};for(var ce of a)w(ce);pe({and:[{source:i({and:[{source:g,clock:ge(Object.values(t),{name:"clock",sid:"-531esq"})}],or:{name:"source",sid:"uwap9g"}}),filter:u.map(R=>R===0),target:n}],or:{sid:"ciyd7d"}})}),n}function B(e){throw new Error(e)}const T=c(),Q=c(),X=f(async e=>{const{employees:{items:t}}=await Ae(`
    query teachers {
        employees(
          take: 100
          order: { fullName: ASC }
          where: { fullName: { contains: "${e}" } }
        ) {
          items {
            fullName
            guid
          }
        }
      }`);return t}),k=p(null).on(T,(e,t)=>t);Z({source:i({source:k,filter:e=>e!==null}),timeout:200,target:X});i({source:k,filter:e=>e!==null});const Fe=p([]).on(X.doneData,(e,t)=>t);i({clock:Q,target:k.reinit});const Ie=({onChange:e})=>{const[t,r]=x([Fe,k]),n=a=>{a!=null&&a.id&&e(a.id)};return o.useEffect(()=>(T(""),Q),[]),s.jsxs(s.Fragment,{children:[s.jsx(v,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(N,{value:r??"",setValue:T,hints:t.map(a=>({id:a.guid,title:a.fullName,value:a.guid})),onHintClick:n})]})},Le=e=>`mutation createTeacher{
        createTeacher(
          input: ${_(e)}
        ) {
          errors {
            __typename
          }
        }
      }`,ee=c(),te=f(async e=>await m(Le(e)));i({clock:ee,target:te});i({clock:te.doneData,target:b.close});const Re=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,ze=()=>{const[e,t]=o.useState(""),[r,n]=o.useState(""),a=()=>{ee({fullName:e,teacherGuid:r})};return s.jsxs(Re,{children:[s.jsx(C,{title:"Имя",setValue:t,value:e}),s.jsx(Ie,{onChange:n}),s.jsx(d,{text:"Добавить",onClick:a})]})},V=c(),se=c(),re=f(async e=>{const{teachers:{items:t}}=await m(`
    query teachers {
      teachers(
          take: 100
          order: { fullName: ASC }
          where: { fullName: { contains: "${e}" } }
        ) {
          items {
            fullName
            teacherGuid
          }
        }
      }`);return t}),D=p("").on(V,(e,t)=>t);Z({source:i({source:D,filter:e=>e!==null}),timeout:200,target:re});const We=p([]).on(re.doneData,(e,t)=>t);i({clock:se,target:D.reinit});const He=({onChange:e})=>{const[t,r]=x([We,D]),n=a=>{a!=null&&a.id&&e(a.id)};return o.useEffect(()=>(V(""),se),[]),s.jsxs(s.Fragment,{children:[s.jsx(v,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(N,{value:r,setValue:V,hints:t.map(a=>({id:a.teacherGuid,title:a.fullName,value:a.teacherGuid})),onHintClick:n})]})},Me=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${_(e)}) {
        success
      }
    }`,Ue=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${_(e,["newVisitValue"])}) {
        success
      }
    }`,q=c(),F=f(async({groupName:e,newVisitValue:t})=>await m(Ue({groupName:e,newVisitValue:t})));i({clock:q,target:F});i({clock:F.doneData,target:b.close});const I=c(),ne=f(async({groupName:e,teacherGuid:t})=>await m(Me({groupName:e,teacherGuid:t})));i({clock:I,target:ne});i({clock:I,target:q});i({clock:qe({events:[ne.doneData,F.doneData]}),target:b.close});const Be=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,Ke=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"4",title:"4"}],Ye=()=>{const[e,t]=o.useState(null),[r,n]=o.useState(""),[a,h]=o.useState(""),u=()=>{I({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:a,teacherGuid:r})};return s.jsxs(Be,{children:[s.jsx(C,{title:"Группа",setValue:h,value:a}),s.jsx(He,{onChange:n}),s.jsx(A,{title:"Стоимость посещения",items:Ke,selected:e,setSelected:t}),s.jsx(d,{text:"Добавить",onClick:u})]})},Ze=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,Je=[{id:"2",title:"2"},{id:"4",title:"4"}],Qe=()=>{const[e,t]=o.useState(null),[r,n]=o.useState(""),a=()=>{q({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:r})};return s.jsxs(Ze,{children:[s.jsx(C,{title:"Группа",setValue:n,value:r}),s.jsx(A,{title:"Стоимость",items:Je,selected:e,setSelected:t}),s.jsx(d,{text:"Добавить",onClick:a})]})},Xe=()=>`mutation {
      updateStudentsInfo {
        success
      }
     }`,ae=c(),L=f(async()=>await m(Xe()));i({clock:ae,target:L});i({clock:L.doneData,target:b.close});L.pending;const et=()=>{const[e]=x([ae]),{open:t}=O(),r=()=>{t(s.jsx(ze,{}))},n=()=>{t(s.jsx(Ye,{}))},a=()=>{t(s.jsx(Qe,{}))};return s.jsxs(tt,{children:[s.jsx(d,{onClick:r,text:"Добавить нового преподавателя"}),s.jsx(d,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(d,{onClick:n,text:"Назначить куратора"}),s.jsx(d,{onClick:a,text:"Назначить стоимость посещения"})]})},tt=l.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px;
    gap: 12px;
    background-color: var(--schedule);
    height: 100%;
    border-radius: 10px;
`,st=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,ie=c(),oe=fe({effect:async({currentUser:e})=>(await m(st((e==null?void 0:e.guid)??""))).groups.items,source:je});i({clock:ie,target:oe});const rt=p([]).on(oe.doneData,(e,t)=>t);function nt(){const[e]=x([rt]);return o.useEffect(()=>{ie()},[]),s.jsx(Y,{data:e,columns:at})}const at=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],it=[{title:"ФИО",field:"fullName"},{title:"Группа",field:"groupNumber"},{title:"Посещений",field:"visits"},{title:"Баллы",field:"pointsCount",render:(e,t)=>$(t)}],ot=[{title:"ФИО",field:"name",render:(e,t)=>t.fullName},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber},{title:"Баллы",field:"points",render:(e,t)=>$(t)},{title:"Зачтено",field:"isDone",render:(e,t)=>$(t)>=55?"Зачтено":"Не зачтено"}],ct=l.div`
    display: grid;
    padding: 12px;
`,lt=l.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,ut=l.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    gap: 10px;
`,K=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],dt=()=>{const[e,t]=x([Ce.$filters,J.$isExam]);return s.jsxs(ut,{children:[s.jsx(C,{title:"Номер группы",value:e["group.groupName"],setValue:r=>{P.addFilter({name:"group.groupName",value:r})}}),s.jsx(A,{title:"Курс",items:K,selected:K.find(r=>r.id===e.course)??null,setSelected:r=>{if(r!=null&&r.id){P.addFilter({name:"course",value:r.id});return}P.addFilter({name:"course",value:""})}}),s.jsx(ye,{title:"Проведение зачета",state:t,action:r=>ke.setIsExam(r)})]})},pt=(e,t)=>{let r=e;for(const n in t)r=r.replace(`:${n}`,t[n]);return r},gt=l.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 12px;
`,ft=l.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`,xt=l.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`,mt=({student:e})=>{const t=xe(),{close:r}=O(),n=()=>{t.push(pt(Se,{studentId:e.studentGuid})),r()};return s.jsxs(gt,{children:[s.jsx(v,{size:2,children:e.fullName}),s.jsxs(ft,{children:[s.jsx(y,{keyStr:"Группа",value:e.groupNumber}),s.jsx(y,{keyStr:"Баллы",value:$(e)}),s.jsx(y,{keyStr:"Курс",value:e.course}),s.jsx(y,{keyStr:"Факультет",value:e.department})]}),s.jsxs(xt,{children:[s.jsx(v,{size:2,children:"Посещения"}),s.jsx(we,{studentGuid:e.studentGuid})]}),s.jsx(d,{onClick:n,text:"Перейти к студенту"})]})},ht=()=>{const{open:e}=O(),{students:t,totalCount:r,page:n,search:a,loading:h,isExam:u}=x({students:S.$pEStudents,loading:S.$loading,totalCount:S.$pEStudentsTotalCount,page:S.$pEStudentsPage,search:Ee.$search,isExam:J.$isExam});return o.useEffect(()=>{M.load()},[]),s.jsx(ct,{children:s.jsxs(lt,{children:[s.jsx(N,{value:a,setValue:Pe.update}),s.jsx(dt,{}),s.jsx(Y,{loading:h,data:t,columns:u?ot:it,onRowClick:({studentGuid:g})=>{e(s.jsx(mt,{student:t.find(w=>w.studentGuid===g)}))}}),s.jsx(ve,{condition:!0,align:"right",pages:Math.floor(r/Te),currentPage:n,setCurrentPage:M.setPage})]})})},vt=()=>s.jsx($e,{children:s.jsx(be,{pages:[{title:"Студенты",content:s.jsx(ht,{})},{title:"Администрирование",content:s.jsx(et,{})},{title:"Мои Группы",content:s.jsx(nt,{})}]})});export{vt as default};
