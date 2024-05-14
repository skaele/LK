import{p as c,c4 as M,c5 as Ye,h as f,x as n,e as v,s as l,r as u,j as s,d as Ze,n as k,aN as ve,v as X,a2 as et,J as tt,c6 as st,c as rt}from"./vendor-ab783af7.js";import{d as m,m as E,p as h,n as V,o as p,h as _,q as Y,r as I,u as U,t as R,v as ye,w as ke,x as $e,y as nt,z as at,b as ot,D as it,E as j,K as A,G as ct,H as lt,J as N,L as ut,N as dt,O as pt,M as mt,Q as gt,R as xt,P as ft,U as ht,V as jt}from"./index-07cca455.js";import{j as L,e as Z,d as Ce,P as O,s as St,a as vt,b as we,c as C,f as yt,g as ee,h as w,A as kt,i as F,k as $t,l as Ct,S as wt,m as Et,n as Pt,o as me}from"./ui-a5deeacb.js";function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function Nt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(r),!0).forEach(function(a){bt(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function bt(e,t,r){return t=Dt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Dt(e){var t=Gt(e,"string");return typeof t=="symbol"?t:String(t)}function Gt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ee(e){var t=Tt(e)?{events:e}:e,{events:r,reset:a,target:o=c({name:"target",sid:"p73fff"})}=t;return M.unit(o)&&M.targetable(o)||xe("target should be a targetable unit"),a&&!M.unit(a)&&xe("reset should be a unit"),Ye(o,()=>{var i=Object.keys(r),d=Array.isArray(r)?[...i].fill(""):{},g=f(i.length,{and:{serialize:"ignore"},name:"$counter",sid:"-ahoahx"}),$=f(d,{and:{serialize:"ignore"},name:"$results",sid:"oy8iyn"});n({and:[{source:o,target:g.reinit}],or:{sid:"blex0c"}}),$.reset(o),a&&(n({and:[{source:a,target:g.reinit}],or:{sid:"bnm3fi"}}),$.reset(a));var Ke=function(K){var de=f(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"-rf2fac"}).on(r[K],()=>!0).reset(o);a&&de.reset(a),g.on(de,P=>P-1),$.on(r[K],(P,Xe)=>{var pe=Array.isArray(P)?[...P]:Nt({},P);return pe[K]=Xe,pe})};for(var Qe of i)Ke(Qe);var Je=n({and:[{source:$,clock:[...Object.values(r)]}],or:{name:"eventsTrriggered",sid:"-lro8bq"}});n({and:[{source:Je,filter:g.map(ue=>ue===0,{skipVoid:!1}),target:o}],or:{sid:"-dlkr2s"}})}),o}function Tt(e){return Object.keys(e).some(t=>!["events","reset","target"].includes(t)&&M.unit(e[t]))}function xe(e){throw new Error(e)}const At=e=>`mutation addNewComp{
      createCompetition(input: ${L(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,Pe=c(),b=v(async e=>await h(At(e)));n({clock:Pe,target:b});n({clock:b.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:m.evokePopUpMessage});n({clock:b.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:m.evokePopUpMessage});n({clock:b.doneData,target:Z.load});n({clock:b.doneData,target:E.close});const Ot=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Ft=()=>{const[e,t]=u.useState(""),r=()=>{Pe({competitionName:e})};return s.jsxs(Ot,{children:[s.jsx(V,{title:"Название",setValue:t,value:e}),s.jsx(p,{text:"Добавить",onClick:r})]})},Q=c(),Ne=c(),be=v(async e=>{const{employees:t}=(await Ze.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t}),W=f(null).on(Q,(e,t)=>t);Ce({source:n({source:W,filter:e=>e!==null}),timeout:200,target:be});n({source:W,filter:e=>e!==null});const Mt=f([]).on(be.doneData,(e,t)=>t);n({clock:Ne,target:W.reinit});const Vt=({onChange:e,onSearchChange:t})=>{const[r,a]=k([Mt,W]),o=i=>{i!=null&&i.id&&e(i.id)};return u.useEffect(()=>(Q(""),Ne),[]),u.useEffect(()=>{a&&(t==null||t(a))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(_,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(Y,{value:a??"",setValue:Q,hints:r.map(i=>({id:i.guid,title:i.fullName,value:i.guid})),onHintClick:o})]})},_t=e=>`mutation addRole {
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
    `,De=c(),z=v(async e=>await h(_t(e)));n({clock:z.failData,fn:()=>({message:"Не удалось добавить права преподавателю",type:"failure",time:3e3}),target:m.evokePopUpMessage});n({clock:z.doneData,fn:()=>({message:"Права добавлены",type:"success",time:3e3}),target:m.evokePopUpMessage});n({clock:De,target:z});const It=e=>`mutation createTeacher{
        createTeacher(
          input: ${L(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ge=c(),D=v(async e=>{const{permission:t,...r}=e;return await h(It(r)),e});n({clock:D.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:m.evokePopUpMessage});n({clock:D.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:m.evokePopUpMessage});n({clock:D.doneData,filter:({permission:e})=>!!e,fn:({teacherGuid:e,permission:t})=>({teacherGuid:e,permission:t}),target:De});n({clock:Ge,target:D});n({clock:Ee({events:[D.doneData,z.doneData]}),target:E.close});const Ut=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Rt={[O.AdminAccess]:"Админ",[O.OnlineCourseAccess]:"Доступ к ЛМС",[O.SecretaryAccess]:"Секретарь",[O.DefaultAccess]:"Преподаватель"},Lt=Object.entries(Rt).map(([e,t])=>({title:t,id:e})),Wt=()=>{const[e,t]=u.useState(""),[r,a]=u.useState(""),[o,i]=u.useState(null),d=()=>{Ge({fullName:e,teacherGuid:r,permission:o==null?void 0:o.id})};return s.jsxs(Ut,{children:[s.jsx(Vt,{onChange:a,onSearchChange:t}),s.jsx(I,{title:"Доступ",items:Lt,setSelected:i,selected:o}),s.jsx(p,{text:"Добавить",onClick:d})]})},J=c(),Te=c(),Ae=v(async e=>{const{teachers:{items:t}}=await h(`
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
      }`);return t}),te=f("").on(J,(e,t)=>t);Ce({source:n({source:te,filter:e=>e!==null}),timeout:200,target:Ae});const zt=f([]).on(Ae.doneData,(e,t)=>t);n({clock:Te,target:te.reinit});const Ht=({onChange:e})=>{const[t,r]=k([zt,te]),a=o=>{o!=null&&o.id&&e(o.id)};return u.useEffect(()=>(J(""),Te),[]),s.jsxs(s.Fragment,{children:[s.jsx(_,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(Y,{value:r,setValue:J,hints:t.map(o=>({id:o.teacherGuid,title:o.fullName,value:o.teacherGuid})),onHintClick:a})]})},qt=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${L(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,Bt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${L(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,se=c(),G=v(async({groupName:e,newVisitValue:t})=>await h(Bt({groupName:e,newVisitValue:t})));n({clock:G.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:m.evokePopUpMessage});n({clock:G.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:m.evokePopUpMessage});n({clock:se,target:G});n({clock:G.doneData,target:E.close});const re=c(),H=v(async({groupName:e,teacherGuid:t})=>await h(qt({groupName:e,teacherGuid:t})));n({clock:re,target:H});n({clock:re,target:se});n({clock:H.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:m.evokePopUpMessage});n({clock:H.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:m.evokePopUpMessage});n({clock:Ee({events:[H.doneData,G.doneData]}),target:E.close});const Kt=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Qt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Jt=()=>{const[e,t]=u.useState(null),[r,a]=u.useState(""),[o,i]=u.useState(""),d=()=>{re({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:o,teacherGuid:r})};return s.jsxs(Kt,{children:[s.jsx(V,{title:"Группа",setValue:i,value:o}),s.jsx(Ht,{onChange:a}),s.jsx(I,{title:"Стоимость посещения",items:Qt,selected:e,setSelected:t}),s.jsx(p,{text:"Добавить",onClick:d})]})},Xt=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Yt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Zt=()=>{const[e,t]=u.useState(null),[r,a]=u.useState(""),o=()=>{se({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:r})};return s.jsxs(Xt,{children:[s.jsx(V,{title:"Группа",setValue:a,value:r}),s.jsx(I,{title:"Стоимость",items:Yt,selected:e,setSelected:t}),s.jsx(p,{text:"Добавить",onClick:o})]})},es=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,Oe=c(),q=v(async e=>await h(es(e)));n({clock:Oe,target:q});n({clock:q.doneData,target:E.close});n({clock:q.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:m.evokePopUpMessage});n({clock:q.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:m.evokePopUpMessage});const ts={startNewSemester:Oe},ss=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,rs=()=>{const[e,t]=u.useState(""),r=()=>{ts.startNewSemester(e)};return s.jsxs(ss,{children:[s.jsx(V,{title:"Новый семестр",setValue:t,value:e}),s.jsx(p,{text:"Начать новый семестр",onClick:r})]})},ns=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,Fe=c(),T=v(async()=>await h(ns()));n({clock:Fe,target:T});n({clock:T.doneData,target:E.close});n({clock:T.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:m.evokePopUpMessage});n({clock:T.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:m.evokePopUpMessage});T.pending;const as=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(p,{onClick:()=>Z.remove(e),text:"Удалить"})}],os=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`,is=l.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
`,cs=l.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    gap: 10px;
`,ls=()=>{const[e,t]=k([Fe,St.$competitions]),{open:r}=U(),a=()=>{r(s.jsx(Wt,{}))},o=()=>{r(s.jsx(Jt,{}))},i=()=>{r(s.jsx(Zt,{}))},d=()=>{r(s.jsx(Ft,{}))},g=()=>{r(s.jsx(rs,{}))};return u.useEffect(()=>{Z.load()},[]),s.jsxs(is,{children:[s.jsxs(cs,{children:[s.jsx(p,{onClick:a,text:"Добавить нового преподавателя"}),s.jsx(p,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(p,{onClick:o,text:"Назначить куратора"}),s.jsx(p,{onClick:i,text:"Назначить стоимость посещения"}),s.jsx(p,{onClick:g,text:"Начать новый семестр"})]}),s.jsxs(os,{children:[s.jsx(_,{align:"left",size:4,children:"Соревнования"}),s.jsx(p,{onClick:d,text:"Добавить соревнование"}),s.jsx(R,{data:t.map($=>({name:$})),columns:as,onRowClick:()=>{}})]})]})},us=l.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;var Me=(e=>(e.Group="group.groupName",e.Course="course",e))(Me||{});const fe=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],ds=()=>{var o;const[e,t]=k([vt.$filters,we.$isExam]),[r,a]=u.useState(((o=e["group.groupName"])==null?void 0:o.value)??"");return s.jsxs(us,{children:[s.jsx(ye,{leftIcon:s.jsx(ve,{}),placeholder:"Номер группы",value:r,setValue:a,customMask:ke.groupMask,onValueEmpty:()=>C.addFilter({name:"group.groupName",value:""}),onHintClick:i=>C.addFilter({name:"group.groupName",value:(i==null?void 0:i.id)??"",strict:!0}),request:$e,size:"big"}),s.jsx(I,{items:fe,size:"big",placeholder:"Курс",selected:fe.find(i=>{var d;return i.id===((d=e.course)==null?void 0:d.value)})??null,setSelected:i=>{if(i!=null&&i.id){C.addFilter({name:"course",value:i.id});return}C.addFilter({name:"course",value:""})}}),s.jsx(nt,{title:"Зачет",state:t,action:i=>yt.setIsExam(i)})]})},ne=c(),Ve=c(),ps=f(0).on(ne,(e,t)=>t);n({clock:Ve,target:[ee.load,at.load]});const ms=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,_e=c(),Ie=X({effect:async({currentUser:e})=>(await h(ms((e==null?void 0:e.guid)??""))).groups.items,source:ot.user});n({clock:_e,target:Ie});const gs=f([]).on(Ie.doneData,(e,t)=>t);function he(){const[e]=k([gs]);u.useEffect(()=>{_e()},[]);const t=r=>{C.resetFilters(),C.addFilter({name:Me.Group,value:r.groupName,strict:!0}),ne(0)};return s.jsx(R,{onRowClick:t,data:e,columns:xs})}const xs=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],fs=(e,t)=>{let r=e;for(const a in t)r=r.replace(`:${a}`,t[a]);return r};l.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;const hs=l.div`
    ${it.isNotMobile} {
        width: 500px;
    }
`,js=({student:e})=>{const t=et(),{close:r}=U(),a=()=>{t.push(fs(lt,{studentId:e.studentGuid})),r()};return s.jsx(hs,{children:s.jsxs(j,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(j,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(A,{keyStr:"Группа",value:e.groupNumber}),s.jsx(A,{keyStr:"Баллы",value:w(e)}),s.jsx(A,{keyStr:"Курс",value:e.course}),s.jsx(A,{keyStr:"ЛМС",value:e.pointsHistory.reduce((o,i)=>o+i.points,0)})]}),s.jsx(ct,{width:"100%",margin:"0"}),s.jsxs(j,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(_,{align:"left",size:4,children:"Дата"}),s.jsx(kt,{studentGuid:e.studentGuid})]}),s.jsx(p,{onClick:a,text:"Перейти к студенту",width:"100%"})]})})},Ss=l.div`
    display: grid;
    width: 100%;
`,vs=l.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,ys=l(j)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,ae=l.span`
    color: ${({hasDebt:e})=>e&&N.red.main};
`,ks=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(ae,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"pointsCount",priority:"one",render:(e,t)=>w(t)},{title:"Нормативы",field:"pointsStandardsCount",priority:"two",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",priority:"two",render:(e,t)=>t.pointsHistory.reduce((r,a)=>r+a.points,0)}],$s=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(ae,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>w(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>w(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Ue=c();n({clock:Ue,target:ee.load});const je=()=>{const{open:e}=U(),{students:t,totalCount:r,page:a,search:o,loading:i,isExam:d}=k({students:F.$pEStudents,loading:F.$loading,totalCount:F.$pEStudentsTotalCount,page:F.$pEStudentsPage,search:$t.$search,isExam:we.$isExam});return u.useEffect(()=>{Ue()},[]),s.jsx(Ss,{children:s.jsxs(vs,{children:[s.jsxs(ys,{children:[s.jsx(Y,{value:o,setValue:Ct.update,size:"big"}),s.jsx(ds,{})]}),s.jsx(R,{loading:i,data:t,columns:d?$s:ks,onRowClick:g=>{e(s.jsx(js,{student:g}),g.fullName)}}),s.jsx(ut,{condition:!0,align:"right",pages:Math.floor(r/wt),currentPage:a,setCurrentPage:ee.setPage})]})})},Cs=e=>`mutation EndSemesterForStudent {
    archiveStudent (input: {studentGuid: "${e}"}){
      archivedStudentEntity {
        studentGuid
        fullName
      }
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,oe=c(),Re=c(),B=v(async({studentId:e})=>(await h(Cs(e))).archivedStudentEntity);var S=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(S||{});const y=f({}).reset(Re);n({clock:oe,source:y,fn:(e,{studentId:t})=>({...e,[t]:"loading"}),target:y});n({clock:B.doneData,source:y,fn:(e,{studentGuid:t})=>({...e,[t]:"success"}),target:y});n({clock:B.fail,source:y,fn:(e,{params:t})=>({...e,[t.studentId]:"error"}),target:y});n({clock:B.done,source:y,fn:(e,{params:t})=>({...e,[t.studentId]:"success"}),target:y});n({clock:oe,target:B});const ws={endSemester:oe,reset:Re},Le={statuses:y},We=c(),ze=c(),ie=c(),He=c(),ce=f("").on(We,(e,t)=>t).reset(ie),le=X({source:ce,effect:async e=>{const{students:t}=await h(Et(0,Pt({"group.groupName":{value:e??"",strict:!0}}),1e3));return t}});n({source:ce,filter:Boolean,target:le});const qe=f([]).on(le.doneData,(e,t)=>t.items).reset(ie),Es=tt(le.pending,Boolean),Ps=X({source:qe,effect:async e=>{e.forEach(t=>ws.endSemester({studentId:t.studentGuid}))}});n({clock:Le.statuses,filter:e=>Object.values(e).every(t=>t!==S.LOADING),target:ze});n({clock:He,target:Ps});const Ns={load:ze,reset:ie,selectedGroupChanged:We,endSemesterForGroup:He},bs={$loading:Es,$pEStudents:qe,$selectedGroup:ce},x={events:Ns,stores:bs},Ds={[S.LOADING]:"Загрузка",[S.ERROR]:"Не зачтено",[S.SUCCESS]:"Успешно"},Gs={[S.LOADING]:s.jsx(dt,{}),[S.ERROR]:s.jsx(st,{color:N.red.main}),[S.SUCCESS]:s.jsx(rt,{color:N.green.main})},Ts=l.span`
    color: var(--text);
    font-size: 1em;
`,As=()=>{const[e,t]=k([Le.statuses,x.stores.$pEStudents]);return s.jsx(j,{p:"30px",d:"column",jc:"space-between",children:t.map(r=>s.jsxs(j,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(Ts,{children:r.fullName}),s.jsxs(j,{gap:"8px",w:"auto",children:[s.jsx(pt,{align:"center",children:Ds[e[r.studentGuid]??S.LOADING]}),Gs[e[r.studentGuid]??S.LOADING]]})]},r.studentGuid))})},Be=c(),Os=c();n({clock:Be,target:x.events.load});n({clock:Os,target:x.events.reset});const Fs=l.div`
    display: grid;
    width: 100%;
`,Ms=l.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`;l(j)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;const Vs=l(j)``,_s=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(ae,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>w(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>w(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Se=()=>{const{open:e,close:t}=U(),{students:r,loading:a,selectedGroup:o}=k({students:x.stores.$pEStudents,loading:x.stores.$loading,selectedGroup:x.stores.$selectedGroup}),i=!!(r.length&&!a&&o),d=()=>{gt.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{x.events.endSemesterForGroup(),e(s.jsx(As,{}))},onReject:()=>{t(),x.events.reset()}})};return u.useEffect(()=>(Be(),()=>{x.events.reset()}),[]),s.jsxs(Fs,{children:[!i&&s.jsx(mt,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(Ms,{children:[s.jsxs(Vs,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(ye,{leftIcon:s.jsx(ve,{}),placeholder:"Номер группы",value:o,setValue:x.events.selectedGroupChanged,customMask:ke.groupMask,onValueEmpty:()=>x.events.selectedGroupChanged(""),onHintClick:g=>g&&x.events.selectedGroupChanged(g.id),request:$e,size:"big"}),i&&s.jsx(p,{text:`Завершить семестр для ${o}`,width:"210px",background:N.green.main,textColor:N.white.main,onClick:d})]}),i&&s.jsx(R,{loading:a,data:r,columns:_s})]})]})},Ls=()=>{const[e,t]=k([jt.peTeacher,ps]);u.useEffect(()=>{Ve()},[]);const r=[me.AdminAccess,me.SuperUser].some(a=>{var o;return(o=e==null?void 0:e.permissions)==null?void 0:o.includes(a)})?[{title:"Студенты",content:s.jsx(je,{})},{title:"Управление",content:s.jsx(ls,{})},{title:"Мои Группы",content:s.jsx(he,{})},{title:"Проведение зачета",content:s.jsx(Se,{})}]:[{title:"Студенты",content:s.jsx(je,{})},{title:"Мои Группы",content:s.jsx(he,{})},{title:"Проведение зачета",content:s.jsx(Se,{})}];return s.jsx(xt,{padding:"10px",children:s.jsx(ft,{children:s.jsxs(j,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(ht,{appearance:!1,pages:r,currentPage:t,setCurrentPage:ne}),r[t].content]})})})};export{Ls as default};
