import{u as l,bM as le,bN as Pe,x as n,bO as re,bP as Me,p as x,bQ as Oe,bR as Te,y as h,s as d,r as c,j as s,d as Ve,M as S,aE as _e,K as Fe}from"./vendor-831b4923.js";import{$ as ue,a as p,f as y,g as P,B as m,T as M,h as z,i as O,u as q,j as H,k as Ge,m as Ue,n as Ie,o as Re,p as C,K as A,D as Le,P as We,q as ze,r as qe,t as He,v as Ke}from"./index-911082d8.js";import{p as g,j as T,e as K,d as de,s as Be,a as Qe,b as pe,c as j,f as Ye,g as B,h as D,A as Ze,i as b,k as Je,l as Xe,S as et}from"./ui-82845660.js";import{S as tt}from"./index-ff719fb3.js";const st=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,me=l(),Q=le({effect:async({currentUser:e})=>(await g(st((e==null?void 0:e.guid)??""))).teacher,source:ue}),rt=Pe(Q,null);n({clock:me,target:Q});const at=Q.pending,nt={load:me},it={$peTeacher:rt,$isLoading:at};var R=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(R||{}),k=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(k||{});function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function ot(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(r),!0).forEach(function(a){ct(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ct(e,t,r){return t=lt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lt(e){var t=ut(e,"string");return typeof t=="symbol"?t:String(t)}function ut(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ge(e){var{events:t,reset:r,target:a=l({name:"target",sid:"aip3nf"},{name:"target",sid:"aip3nf"})}=e;return re.unit(a)||ne("target should be a unit"),r&&!re.unit(r)&&ne("reset should be a unit"),Me(a,()=>{var i=Object.keys(t),o=Array.isArray(t)?[...i].fill(""):{},u=x(i.length,{and:{serialize:"ignore"},name:"$counter",sid:"-dby0v3"}),f=x(o,{and:{serialize:"ignore"},name:"$results",sid:"c60qbe"});u.reset(n({and:[{source:a}],or:{sid:"-8hxq8z"}})),f.reset(a),r&&(u.reset(n({and:[{source:r}],or:{sid:"3c6u5p"}})),f.reset(r));var U=function(I){var te=x(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"uttu1j"}).on(t[I],()=>!0).reset(a);r&&te.reset(r),u.on(te,v=>v-1),f.on(t[I],(v,De)=>{var se=Array.isArray(v)?[...v]:ot({},v);return se[I]=De,se})};for(var be of i)U(be);Oe({and:[{source:n({and:[{source:f,clock:Te(Object.values(t),{name:"clock",sid:"-531esq"})}],or:{name:"source",sid:"uwap9g"}}),filter:u.map(ee=>ee===0),target:a}],or:{sid:"ciyd7d"}})}),a}function ne(e){throw new Error(e)}const dt=e=>`mutation addNewComp{
      createCompetition(input: ${T(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,fe=l(),$=h(async e=>await g(dt(e)));n({clock:fe,target:$});n({clock:$.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:$.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:$.doneData,target:K.load});n({clock:$.doneData,target:y.close});const pt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,mt=()=>{const[e,t]=c.useState(""),r=()=>{fe({competitionName:e})};return s.jsxs(pt,{children:[s.jsx(P,{title:"Название",setValue:t,value:e}),s.jsx(m,{text:"Добавить",onClick:r})]})},L=l(),xe=l(),he=h(async e=>{const{employees:t}=(await Ve.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t}),V=x(null).on(L,(e,t)=>t);de({source:n({source:V,filter:e=>e!==null}),timeout:200,target:he});n({source:V,filter:e=>e!==null});const gt=x([]).on(he.doneData,(e,t)=>t);n({clock:xe,target:V.reinit});const ft=({onChange:e,onSearchChange:t})=>{const[r,a]=S([gt,V]),i=o=>{o!=null&&o.id&&e(o.id)};return c.useEffect(()=>(L(""),xe),[]),c.useEffect(()=>{a&&(t==null||t(a))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(M,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(z,{value:a??"",setValue:L,hints:r.map(o=>({id:o.guid,title:o.fullName,value:o.guid})),onHintClick:i})]})},xt=e=>`mutation addRole {
      givePermissionsToTeacher(
        input: { permissions: ${e.permission}, teacherGuid: "${e.teacherGuid}"  }
      ) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,Se=l(),_=h(async e=>await g(xt(e)));n({clock:_.failData,fn:()=>({message:"Не удалось добавить права преподавателю",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:_.doneData,fn:()=>({message:"Права добавлены",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:Se,target:_});const ht=e=>`mutation createTeacher{
        createTeacher(
          input: ${T(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,je=l(),w=h(async e=>{const{permission:t,...r}=e;return await g(ht(r)),e});n({clock:w.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:w.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:w.doneData,filter:({permission:e})=>!!e,fn:({teacherGuid:e,permission:t})=>({teacherGuid:e,permission:t}),target:Se});n({clock:je,target:w});n({clock:ge({events:[w.doneData,_.doneData]}),target:y.close});const St=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,jt={[k.AdminAccess]:"Админ",[k.OnlineCourseAccess]:"Доступ к ЛМС",[k.SecretaryAccess]:"Секретарь",[k.DefaultAccess]:"Преподаватель"},yt=Object.entries(jt).map(([e,t])=>({title:t,id:e})),vt=()=>{const[e,t]=c.useState(""),[r,a]=c.useState(""),[i,o]=c.useState(null),u=()=>{je({fullName:e,teacherGuid:r,permission:i==null?void 0:i.id})};return s.jsxs(St,{children:[s.jsx(ft,{onChange:a,onSearchChange:t}),s.jsx(O,{title:"Доступ",items:yt,setSelected:o,selected:i}),s.jsx(m,{text:"Добавить",onClick:u})]})},W=l(),ye=l(),ve=h(async e=>{const{teachers:{items:t}}=await g(`
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
      }`);return t}),Y=x("").on(W,(e,t)=>t);de({source:n({source:Y,filter:e=>e!==null}),timeout:200,target:ve});const kt=x([]).on(ve.doneData,(e,t)=>t);n({clock:ye,target:Y.reinit});const Ct=({onChange:e})=>{const[t,r]=S([kt,Y]),a=i=>{i!=null&&i.id&&e(i.id)};return c.useEffect(()=>(W(""),ye),[]),s.jsxs(s.Fragment,{children:[s.jsx(M,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(z,{value:r,setValue:W,hints:t.map(i=>({id:i.teacherGuid,title:i.fullName,value:i.teacherGuid})),onHintClick:a})]})},$t=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${T(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,wt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${T(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,Z=l(),E=h(async({groupName:e,newVisitValue:t})=>await g(wt({groupName:e,newVisitValue:t})));n({clock:E.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:E.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:Z,target:E});n({clock:E.doneData,target:y.close});const J=l(),F=h(async({groupName:e,teacherGuid:t})=>await g($t({groupName:e,teacherGuid:t})));n({clock:J,target:F});n({clock:J,target:Z});n({clock:F.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:F.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:ge({events:[F.doneData,E.doneData]}),target:y.close});const Et=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Nt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],At=()=>{const[e,t]=c.useState(null),[r,a]=c.useState(""),[i,o]=c.useState(""),u=()=>{J({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:i,teacherGuid:r})};return s.jsxs(Et,{children:[s.jsx(P,{title:"Группа",setValue:o,value:i}),s.jsx(Ct,{onChange:a}),s.jsx(O,{title:"Стоимость посещения",items:Nt,selected:e,setSelected:t}),s.jsx(m,{text:"Добавить",onClick:u})]})},bt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Dt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Pt=()=>{const[e,t]=c.useState(null),[r,a]=c.useState(""),i=()=>{Z({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:r})};return s.jsxs(bt,{children:[s.jsx(P,{title:"Группа",setValue:a,value:r}),s.jsx(O,{title:"Стоимость",items:Dt,selected:e,setSelected:t}),s.jsx(m,{text:"Добавить",onClick:i})]})},Mt=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,ke=l(),G=h(async e=>await g(Mt(e)));n({clock:ke,target:G});n({clock:G.doneData,target:y.close});n({clock:G.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:G.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:p.evokePopUpMessage});const Ot={startNewSemester:ke},Tt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Vt=()=>{const[e,t]=c.useState(""),r=()=>{Ot.startNewSemester(e)};return s.jsxs(Tt,{children:[s.jsx(P,{title:"Новый семестр",setValue:t,value:e}),s.jsx(m,{text:"Начать новый семестр",onClick:r})]})},_t=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,Ce=l(),N=h(async()=>await g(_t()));n({clock:Ce,target:N});n({clock:N.doneData,target:y.close});n({clock:N.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:N.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:p.evokePopUpMessage});N.pending;const Ft=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(m,{onClick:()=>K.remove(e),text:"Удалить"})}],Gt=d.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`,Ut=d.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
`,It=d.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    gap: 10px;
`,Rt=()=>{const[e,t]=S([Ce,Be.$competitions]),{open:r}=q(),a=()=>{r(s.jsx(vt,{}))},i=()=>{r(s.jsx(At,{}))},o=()=>{r(s.jsx(Pt,{}))},u=()=>{r(s.jsx(mt,{}))},f=()=>{r(s.jsx(Vt,{}))};return c.useEffect(()=>{K.load()},[]),s.jsxs(Ut,{children:[s.jsxs(It,{children:[s.jsx(m,{onClick:a,text:"Добавить нового преподавателя"}),s.jsx(m,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(m,{onClick:i,text:"Назначить куратора"}),s.jsx(m,{onClick:o,text:"Назначить стоимость посещения"}),s.jsx(m,{onClick:f,text:"Начать новый семестр"})]}),s.jsxs(Gt,{children:[s.jsx(M,{align:"left",size:4,children:"Соревнования"}),s.jsx(m,{onClick:u,text:"Добавить соревнование"}),s.jsx(H,{data:t.map(U=>({name:U})),columns:Ft,onRowClick:()=>{}})]})]})},Lt=d.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;var $e=(e=>(e.Group="group.groupName",e.Course="course",e))($e||{});const ie=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Wt=()=>{var i;const[e,t]=S([Qe.$filters,pe.$isExam]),[r,a]=c.useState(((i=e["group.groupName"])==null?void 0:i.value)??"");return s.jsxs(Lt,{children:[s.jsx(tt,{leftIcon:s.jsx(_e,{}),placeholder:"Номер группы",value:r,setValue:a,customMask:Ge.groupMask,onValueEmpty:()=>j.addFilter({name:"group.groupName",value:""}),onHintClick:o=>j.addFilter({name:"group.groupName",value:(o==null?void 0:o.id)??"",strict:!0}),request:Ue,size:"big"}),s.jsx(O,{items:ie,size:"big",placeholder:"Курс",selected:ie.find(o=>{var u;return o.id===((u=e.course)==null?void 0:u.value)})??null,setSelected:o=>{if(o!=null&&o.id){j.addFilter({name:"course",value:o.id});return}j.addFilter({name:"course",value:""})}}),s.jsx(Ie,{title:"Зачет",state:t,action:o=>Ye.setIsExam(o)})]})},X=l(),we=l(),zt=x(0).on(X,(e,t)=>t);n({clock:we,target:[B.load,nt.load]});const qt=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,Ee=l(),Ne=le({effect:async({currentUser:e})=>(await g(qt((e==null?void 0:e.guid)??""))).groups.items,source:ue});n({clock:Ee,target:Ne});const Ht=x([]).on(Ne.doneData,(e,t)=>t);function oe(){const[e]=S([Ht]);c.useEffect(()=>{Ee()},[]);const t=r=>{j.resetFilters(),j.addFilter({name:$e.Group,value:r.groupName,strict:!0}),X(0)};return s.jsx(H,{onRowClick:t,data:e,columns:Kt})}const Kt=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],Bt=(e,t)=>{let r=e;for(const a in t)r=r.replace(`:${a}`,t[a]);return r};d.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;const Qt=d.div`
    ${Re.isNotMobile} {
        width: 500px;
    }
`,Yt=({student:e})=>{const t=Fe(),{close:r}=q(),a=()=>{t.push(Bt(We,{studentId:e.studentGuid})),r()};return s.jsx(Qt,{children:s.jsxs(C,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(C,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(A,{keyStr:"Группа",value:e.groupNumber}),s.jsx(A,{keyStr:"Баллы",value:D(e)}),s.jsx(A,{keyStr:"Курс",value:e.course}),s.jsx(A,{keyStr:"ЛМС",value:e.pointsHistory.reduce((i,o)=>i+o.points,0)})]}),s.jsx(Le,{width:"100%",margin:"0"}),s.jsxs(C,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(M,{align:"left",size:4,children:"Дата"}),s.jsx(Ze,{studentGuid:e.studentGuid})]}),s.jsx(m,{onClick:a,text:"Перейти к студенту",width:"100%"})]})})},Zt=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"pointsCount",priority:"one",render:(e,t)=>D(t)},{title:"Нормативы",field:"pointsStandardsCount",priority:"two",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",priority:"two",render:(e,t)=>t.pointsHistory.reduce((r,a)=>r+a.points,0)}],Jt=[{title:"ФИО",field:"name",render:(e,t)=>t.fullName,showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>D(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>D(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Ae=l();n({clock:Ae,target:B.load});const Xt=d.div`
    display: grid;
    width: 100%;
`,es=d.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,ts=d(C)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,ce=()=>{const{open:e}=q(),{students:t,totalCount:r,page:a,search:i,loading:o,isExam:u}=S({students:b.$pEStudents,loading:b.$loading,totalCount:b.$pEStudentsTotalCount,page:b.$pEStudentsPage,search:Je.$search,isExam:pe.$isExam});return c.useEffect(()=>{Ae()},[]),s.jsx(Xt,{children:s.jsxs(es,{children:[s.jsxs(ts,{children:[s.jsx(z,{value:i,setValue:Xe.update,size:"big"}),s.jsx(Wt,{})]}),s.jsx(H,{loading:o,data:t,columns:u?Jt:Zt,onRowClick:f=>{e(s.jsx(Yt,{student:f}),f.fullName)}}),s.jsx(ze,{condition:!0,align:"right",pages:Math.floor(r/et),currentPage:a,setCurrentPage:B.setPage})]})})},is=()=>{const[e,t]=S([it.$peTeacher,zt]);c.useEffect(()=>{we()},[]);const r=[R.AdminAccess,R.SuperUser].some(a=>e==null?void 0:e.permissions.includes(a))?[{title:"Студенты",content:s.jsx(ce,{})},{title:"Управление",content:s.jsx(Rt,{})},{title:"Мои Группы",content:s.jsx(oe,{})}]:[{title:"Студенты",content:s.jsx(ce,{})},{title:"Мои Группы",content:s.jsx(oe,{})}];return s.jsx(qe,{padding:"10px",children:s.jsx(He,{children:s.jsxs(C,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(Ke,{appearance:!1,pages:r,currentPage:t,setCurrentPage:X}),r[t].content]})})})};export{is as default};
