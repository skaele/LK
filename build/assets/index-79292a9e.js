import{u as c,bS as pe,bT as Je,p as f,x as a,bU as Xe,bV as Ze,y as v,s as l,r as u,j as s,d as Ye,Z as k,aG as ve,bJ as J,T as et,m as tt,bW as st,c as rt}from"./vendor-4355a046.js";import{i as m,n as C,p as h,o as F,q as p,T as M,r as X,t as V,u as _,v as I,w as ye,x as ke,y as nt,z as at,D as ot,E as it,G as j,K as T,H as ct,J as lt,L as P,N as ut,O as dt,Q as pt,M as mt,R as gt,U as xt,P as ft,V as ht,X as jt}from"./index-15c11f6c.js";import{j as U,e as Z,d as $e,P as A,s as St,a as vt,b as we,c as $,f as yt,g as Y,h as w,A as kt,i as O,k as $t,l as wt,S as Ct,m as Et,n as Pt,o as me}from"./ui-8c2d14b3.js";import{S as Ce}from"./index-ec40a62a.js";function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function bt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(r),!0).forEach(function(n){Nt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Nt(e,t,r){return t=Dt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Dt(e){var t=Gt(e,"string");return typeof t=="symbol"?t:String(t)}function Gt(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ee(e){var{events:t,reset:r,target:n=c({name:"target",sid:"aip3nf"},{name:"target",sid:"aip3nf"})}=e;return pe.unit(n)||xe("target should be a unit"),r&&!pe.unit(r)&&xe("reset should be a unit"),Je(n,()=>{var o=Object.keys(t),i=Array.isArray(t)?[...o].fill(""):{},d=f(o.length,{and:{serialize:"ignore"},name:"$counter",sid:"-dby0v3"}),g=f(i,{and:{serialize:"ignore"},name:"$results",sid:"c60qbe"});d.reset(a({and:[{source:n}],or:{sid:"-8hxq8z"}})),g.reset(n),r&&(d.reset(a({and:[{source:r}],or:{sid:"3c6u5p"}})),g.reset(r));var q=function(B){var ue=f(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"uttu1j"}).on(t[B],()=>!0).reset(n);r&&ue.reset(r),d.on(ue,E=>E-1),g.on(t[B],(E,Qe)=>{var de=Array.isArray(E)?[...E]:bt({},E);return de[B]=Qe,de})};for(var Ke of o)q(Ke);Xe({and:[{source:a({and:[{source:g,clock:Ze(Object.values(t),{name:"clock",sid:"-531esq"})}],or:{name:"source",sid:"uwap9g"}}),filter:d.map(le=>le===0),target:n}],or:{sid:"ciyd7d"}})}),n}function xe(e){throw new Error(e)}const Tt=e=>`mutation addNewComp{
      createCompetition(input: ${U(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,Pe=c(),b=v(async e=>await h(Tt(e)));a({clock:Pe,target:b});a({clock:b.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:m.evokePopUpMessage});a({clock:b.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:m.evokePopUpMessage});a({clock:b.doneData,target:Z.load});a({clock:b.doneData,target:C.close});const At=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Ot=()=>{const[e,t]=u.useState(""),r=()=>{Pe({competitionName:e})};return s.jsxs(At,{children:[s.jsx(F,{title:"Название",setValue:t,value:e}),s.jsx(p,{text:"Добавить",onClick:r})]})},K=c(),be=c(),Ne=v(async e=>{const{employees:t}=(await Ye.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t}),R=f(null).on(K,(e,t)=>t);$e({source:a({source:R,filter:e=>e!==null}),timeout:200,target:Ne});a({source:R,filter:e=>e!==null});const Ft=f([]).on(Ne.doneData,(e,t)=>t);a({clock:be,target:R.reinit});const Mt=({onChange:e,onSearchChange:t})=>{const[r,n]=k([Ft,R]),o=i=>{i!=null&&i.id&&e(i.id)};return u.useEffect(()=>(K(""),be),[]),u.useEffect(()=>{n&&(t==null||t(n))},[n]),s.jsxs(s.Fragment,{children:[s.jsx(M,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(X,{value:n??"",setValue:K,hints:r.map(i=>({id:i.guid,title:i.fullName,value:i.guid})),onHintClick:o})]})},Vt=e=>`mutation addRole {
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
    `,De=c(),L=v(async e=>await h(Vt(e)));a({clock:L.failData,fn:()=>({message:"Не удалось добавить права преподавателю",type:"failure",time:3e3}),target:m.evokePopUpMessage});a({clock:L.doneData,fn:()=>({message:"Права добавлены",type:"success",time:3e3}),target:m.evokePopUpMessage});a({clock:De,target:L});const _t=e=>`mutation createTeacher{
        createTeacher(
          input: ${U(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ge=c(),N=v(async e=>{const{permission:t,...r}=e;return await h(_t(r)),e});a({clock:N.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:m.evokePopUpMessage});a({clock:N.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:m.evokePopUpMessage});a({clock:N.doneData,filter:({permission:e})=>!!e,fn:({teacherGuid:e,permission:t})=>({teacherGuid:e,permission:t}),target:De});a({clock:Ge,target:N});a({clock:Ee({events:[N.doneData,L.doneData]}),target:C.close});const It=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Ut={[A.AdminAccess]:"Админ",[A.OnlineCourseAccess]:"Доступ к ЛМС",[A.SecretaryAccess]:"Секретарь",[A.DefaultAccess]:"Преподаватель"},Rt=Object.entries(Ut).map(([e,t])=>({title:t,id:e})),Lt=()=>{const[e,t]=u.useState(""),[r,n]=u.useState(""),[o,i]=u.useState(null),d=()=>{Ge({fullName:e,teacherGuid:r,permission:o==null?void 0:o.id})};return s.jsxs(It,{children:[s.jsx(Mt,{onChange:n,onSearchChange:t}),s.jsx(V,{title:"Доступ",items:Rt,setSelected:i,selected:o}),s.jsx(p,{text:"Добавить",onClick:d})]})},Q=c(),Te=c(),Ae=v(async e=>{const{teachers:{items:t}}=await h(`
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
      }`);return t}),ee=f("").on(Q,(e,t)=>t);$e({source:a({source:ee,filter:e=>e!==null}),timeout:200,target:Ae});const Wt=f([]).on(Ae.doneData,(e,t)=>t);a({clock:Te,target:ee.reinit});const zt=({onChange:e})=>{const[t,r]=k([Wt,ee]),n=o=>{o!=null&&o.id&&e(o.id)};return u.useEffect(()=>(Q(""),Te),[]),s.jsxs(s.Fragment,{children:[s.jsx(M,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(X,{value:r,setValue:Q,hints:t.map(o=>({id:o.teacherGuid,title:o.fullName,value:o.teacherGuid})),onHintClick:n})]})},Ht=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${U(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,qt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${U(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,te=c(),D=v(async({groupName:e,newVisitValue:t})=>await h(qt({groupName:e,newVisitValue:t})));a({clock:D.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:m.evokePopUpMessage});a({clock:D.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:m.evokePopUpMessage});a({clock:te,target:D});a({clock:D.doneData,target:C.close});const se=c(),W=v(async({groupName:e,teacherGuid:t})=>await h(Ht({groupName:e,teacherGuid:t})));a({clock:se,target:W});a({clock:se,target:te});a({clock:W.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:m.evokePopUpMessage});a({clock:W.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:m.evokePopUpMessage});a({clock:Ee({events:[W.doneData,D.doneData]}),target:C.close});const Bt=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Kt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Qt=()=>{const[e,t]=u.useState(null),[r,n]=u.useState(""),[o,i]=u.useState(""),d=()=>{se({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:o,teacherGuid:r})};return s.jsxs(Bt,{children:[s.jsx(F,{title:"Группа",setValue:i,value:o}),s.jsx(zt,{onChange:n}),s.jsx(V,{title:"Стоимость посещения",items:Kt,selected:e,setSelected:t}),s.jsx(p,{text:"Добавить",onClick:d})]})},Jt=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,Xt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"2.5",title:"2.5"},{id:"3",title:"3"},{id:"3.5",title:"3.5"},{id:"4",title:"4"}],Zt=()=>{const[e,t]=u.useState(null),[r,n]=u.useState(""),o=()=>{te({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:r})};return s.jsxs(Jt,{children:[s.jsx(F,{title:"Группа",setValue:n,value:r}),s.jsx(V,{title:"Стоимость",items:Xt,selected:e,setSelected:t}),s.jsx(p,{text:"Добавить",onClick:o})]})},Yt=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,Oe=c(),z=v(async e=>await h(Yt(e)));a({clock:Oe,target:z});a({clock:z.doneData,target:C.close});a({clock:z.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:m.evokePopUpMessage});a({clock:z.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:m.evokePopUpMessage});const es={startNewSemester:Oe},ts=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,ss=()=>{const[e,t]=u.useState(""),r=()=>{es.startNewSemester(e)};return s.jsxs(ts,{children:[s.jsx(F,{title:"Новый семестр",setValue:t,value:e}),s.jsx(p,{text:"Начать новый семестр",onClick:r})]})},rs=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,Fe=c(),G=v(async()=>await h(rs()));a({clock:Fe,target:G});a({clock:G.doneData,target:C.close});a({clock:G.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:m.evokePopUpMessage});a({clock:G.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:m.evokePopUpMessage});G.pending;const ns=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(p,{onClick:()=>Z.remove(e),text:"Удалить"})}],as=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`,os=l.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
`,is=l.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    gap: 10px;
`,cs=()=>{const[e,t]=k([Fe,St.$competitions]),{open:r}=_(),n=()=>{r(s.jsx(Lt,{}))},o=()=>{r(s.jsx(Qt,{}))},i=()=>{r(s.jsx(Zt,{}))},d=()=>{r(s.jsx(Ot,{}))},g=()=>{r(s.jsx(ss,{}))};return u.useEffect(()=>{Z.load()},[]),s.jsxs(os,{children:[s.jsxs(is,{children:[s.jsx(p,{onClick:n,text:"Добавить нового преподавателя"}),s.jsx(p,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(p,{onClick:o,text:"Назначить куратора"}),s.jsx(p,{onClick:i,text:"Назначить стоимость посещения"}),s.jsx(p,{onClick:g,text:"Начать новый семестр"})]}),s.jsxs(as,{children:[s.jsx(M,{align:"left",size:4,children:"Соревнования"}),s.jsx(p,{onClick:d,text:"Добавить соревнование"}),s.jsx(I,{data:t.map(q=>({name:q})),columns:ns,onRowClick:()=>{}})]})]})},ls=l.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;var Me=(e=>(e.Group="group.groupName",e.Course="course",e))(Me||{});const fe=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],us=()=>{var o;const[e,t]=k([vt.$filters,we.$isExam]),[r,n]=u.useState(((o=e["group.groupName"])==null?void 0:o.value)??"");return s.jsxs(ls,{children:[s.jsx(Ce,{leftIcon:s.jsx(ve,{}),placeholder:"Номер группы",value:r,setValue:n,customMask:ye.groupMask,onValueEmpty:()=>$.addFilter({name:"group.groupName",value:""}),onHintClick:i=>$.addFilter({name:"group.groupName",value:(i==null?void 0:i.id)??"",strict:!0}),request:ke,size:"big"}),s.jsx(V,{items:fe,size:"big",placeholder:"Курс",selected:fe.find(i=>{var d;return i.id===((d=e.course)==null?void 0:d.value)})??null,setSelected:i=>{if(i!=null&&i.id){$.addFilter({name:"course",value:i.id});return}$.addFilter({name:"course",value:""})}}),s.jsx(nt,{title:"Зачет",state:t,action:i=>yt.setIsExam(i)})]})},re=c(),Ve=c(),ds=f(0).on(re,(e,t)=>t);a({clock:Ve,target:[Y.load,at.load]});const ps=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,_e=c(),Ie=J({effect:async({currentUser:e})=>(await h(ps((e==null?void 0:e.guid)??""))).groups.items,source:ot});a({clock:_e,target:Ie});const ms=f([]).on(Ie.doneData,(e,t)=>t);function he(){const[e]=k([ms]);u.useEffect(()=>{_e()},[]);const t=r=>{$.resetFilters(),$.addFilter({name:Me.Group,value:r.groupName,strict:!0}),re(0)};return s.jsx(I,{onRowClick:t,data:e,columns:gs})}const gs=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],xs=(e,t)=>{let r=e;for(const n in t)r=r.replace(`:${n}`,t[n]);return r};l.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;const fs=l.div`
    ${it.isNotMobile} {
        width: 500px;
    }
`,hs=({student:e})=>{const t=et(),{close:r}=_(),n=()=>{t.push(xs(lt,{studentId:e.studentGuid})),r()};return s.jsx(fs,{children:s.jsxs(j,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(j,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(T,{keyStr:"Группа",value:e.groupNumber}),s.jsx(T,{keyStr:"Баллы",value:w(e)}),s.jsx(T,{keyStr:"Курс",value:e.course}),s.jsx(T,{keyStr:"ЛМС",value:e.pointsHistory.reduce((o,i)=>o+i.points,0)})]}),s.jsx(ct,{width:"100%",margin:"0"}),s.jsxs(j,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(M,{align:"left",size:4,children:"Дата"}),s.jsx(kt,{studentGuid:e.studentGuid})]}),s.jsx(p,{onClick:n,text:"Перейти к студенту",width:"100%"})]})})},js=l.div`
    display: grid;
    width: 100%;
`,Ss=l.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,vs=l(j)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,ne=l.span`
    color: ${({hasDebt:e})=>e&&P.red.main};
`,ys=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(ne,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"pointsCount",priority:"one",render:(e,t)=>w(t)},{title:"Нормативы",field:"pointsStandardsCount",priority:"two",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",priority:"two",render:(e,t)=>t.pointsHistory.reduce((r,n)=>r+n.points,0)}],ks=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(ne,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>w(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>w(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Ue=c();a({clock:Ue,target:Y.load});const je=()=>{const{open:e}=_(),{students:t,totalCount:r,page:n,search:o,loading:i,isExam:d}=k({students:O.$pEStudents,loading:O.$loading,totalCount:O.$pEStudentsTotalCount,page:O.$pEStudentsPage,search:$t.$search,isExam:we.$isExam});return u.useEffect(()=>{Ue()},[]),s.jsx(js,{children:s.jsxs(Ss,{children:[s.jsxs(vs,{children:[s.jsx(X,{value:o,setValue:wt.update,size:"big"}),s.jsx(us,{})]}),s.jsx(I,{loading:i,data:t,columns:d?ks:ys,onRowClick:g=>{e(s.jsx(hs,{student:g}),g.fullName)}}),s.jsx(ut,{condition:!0,align:"right",pages:Math.floor(r/Ct),currentPage:n,setCurrentPage:Y.setPage})]})})},$s=e=>`mutation EndSemesterForStudent {
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
`,ae=c(),Re=c(),H=v(async({studentId:e})=>(await h($s(e))).archivedStudentEntity);var S=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(S||{});const y=f({}).reset(Re);a({clock:ae,source:y,fn:(e,{studentId:t})=>({...e,[t]:"loading"}),target:y});a({clock:H.doneData,source:y,fn:(e,{studentGuid:t})=>({...e,[t]:"success"}),target:y});a({clock:H.fail,source:y,fn:(e,{params:t})=>({...e,[t.studentId]:"error"}),target:y});a({clock:H.done,source:y,fn:(e,{params:t})=>({...e,[t.studentId]:"success"}),target:y});a({clock:ae,target:H});const ws={endSemester:ae,reset:Re},Le={statuses:y},We=c(),ze=c(),oe=c(),He=c(),ie=f("").on(We,(e,t)=>t).reset(oe),ce=J({source:ie,effect:async e=>{const{students:t}=await h(Et(0,Pt({"group.groupName":{value:e??"",strict:!0}}),1e3));return t}});a({source:ie,filter:Boolean,target:ce});const qe=f([]).on(ce.doneData,(e,t)=>t.items).reset(oe),Cs=tt(ce.pending,Boolean),Es=J({source:qe,effect:async e=>{e.forEach(t=>ws.endSemester({studentId:t.studentGuid}))}});a({clock:Le.statuses,filter:e=>Object.values(e).every(t=>t!==S.LOADING),target:ze});a({clock:He,target:Es});const Ps={load:ze,reset:oe,selectedGroupChanged:We,endSemesterForGroup:He},bs={$loading:Cs,$pEStudents:qe,$selectedGroup:ie},x={events:Ps,stores:bs},Ns={[S.LOADING]:"Загрузка",[S.ERROR]:"Не зачтено",[S.SUCCESS]:"Успешно"},Ds={[S.LOADING]:s.jsx(dt,{}),[S.ERROR]:s.jsx(st,{color:P.red.main}),[S.SUCCESS]:s.jsx(rt,{color:P.green.main})},Gs=l.span`
    color: var(--text);
    font-size: 1em;
`,Ts=()=>{const[e,t]=k([Le.statuses,x.stores.$pEStudents]);return s.jsx(j,{p:"30px",d:"column",jc:"space-between",children:t.map(r=>s.jsxs(j,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(Gs,{children:r.fullName}),s.jsxs(j,{gap:"8px",w:"auto",children:[s.jsx(pt,{align:"center",children:Ns[e[r.studentGuid]??S.LOADING]}),Ds[e[r.studentGuid]??S.LOADING]]})]},r.studentGuid))})},Be=c(),As=c();a({clock:Be,target:x.events.load});a({clock:As,target:x.events.reset});const Os=l.div`
    display: grid;
    width: 100%;
`,Fs=l.div`
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
`;const Ms=l(j)``,Vs=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(ne,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>w(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>w(t)>=50?"Зачтено":"Не зачтено",priority:"one"}],Se=()=>{const{open:e,close:t}=_(),{students:r,loading:n,selectedGroup:o}=k({students:x.stores.$pEStudents,loading:x.stores.$loading,selectedGroup:x.stores.$selectedGroup}),i=!!(r.length&&!n&&o),d=()=>{gt.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{x.events.endSemesterForGroup(),e(s.jsx(Ts,{}))},onReject:()=>{t(),x.events.reset()}})};return u.useEffect(()=>(Be(),()=>{x.events.reset()}),[]),s.jsxs(Os,{children:[!i&&s.jsx(mt,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(Fs,{children:[s.jsxs(Ms,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(Ce,{leftIcon:s.jsx(ve,{}),placeholder:"Номер группы",value:o,setValue:x.events.selectedGroupChanged,customMask:ye.groupMask,onValueEmpty:()=>x.events.selectedGroupChanged(""),onHintClick:g=>g&&x.events.selectedGroupChanged(g.id),request:ke,size:"big"}),i&&s.jsx(p,{text:`Завершить семестр для ${o}`,width:"210px",background:P.green.main,textColor:P.white.main,onClick:d})]}),i&&s.jsx(I,{loading:n,data:r,columns:Vs})]})]})},Ls=()=>{const[e,t]=k([jt.peTeacher,ds]);u.useEffect(()=>{Ve()},[]);const r=[me.AdminAccess,me.SuperUser].some(n=>{var o;return(o=e==null?void 0:e.permissions)==null?void 0:o.includes(n)})?[{title:"Студенты",content:s.jsx(je,{})},{title:"Управление",content:s.jsx(cs,{})},{title:"Мои Группы",content:s.jsx(he,{})},{title:"Проведение зачета",content:s.jsx(Se,{})}]:[{title:"Студенты",content:s.jsx(je,{})},{title:"Мои Группы",content:s.jsx(he,{})},{title:"Проведение зачета",content:s.jsx(Se,{})}];return s.jsx(xt,{padding:"10px",children:s.jsx(ft,{children:s.jsxs(j,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(ht,{appearance:!1,pages:r,currentPage:t,setCurrentPage:re}),r[t].content]})})})};export{Ls as default};
