import{u as c,bM as ee,bN as Ce,p as f,x as i,bO as Ne,bP as Ee,y as h,s as l,r as o,j as s,d as Pe,O as j,bQ as ie,bR as be,aG as De,N as Ae}from"./vendor-2bd70a0f.js";import{a as d,f as y,g as k,B as u,T as D,h as W,i as L,u as q,j as H,$ as oe,k as Ve,m as Me,n as Oe,o as Te,p as v,K as N,D as Ge,P as _e,q as Fe,r as Ue,t as Ie,v as We}from"./index-bc77f324.js";import{j as A,e as z,p as x,d as ce,s as Le,a as R,b as qe,c as le,f as E,g as He,h as b,A as ze,i as P,k as Re,l as Ke,S as Be}from"./ui-a83e98b7.js";import{S as Qe}from"./index-b443b8f6.js";function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Ye(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?te(Object(r),!0).forEach(function(n){Ze(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ze(e,t,r){return t=Je(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Je(e){var t=Xe(e,"string");return typeof t=="symbol"?t:String(t)}function Xe(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function et(e){var{events:t,reset:r,target:n=c({name:"target",sid:"aip3nf"},{name:"target",sid:"aip3nf"})}=e;return ee.unit(n)||se("target should be a unit"),r&&!ee.unit(r)&&se("reset should be a unit"),Ce(n,()=>{var a=Object.keys(t),m=Array.isArray(t)?[...a].fill(""):{},p=f(a.length,{and:{serialize:"ignore"},name:"$counter",sid:"-dby0v3"}),g=f(m,{and:{serialize:"ignore"},name:"$results",sid:"c60qbe"});p.reset(i({and:[{source:n}],or:{sid:"-8hxq8z"}})),g.reset(n),r&&(p.reset(i({and:[{source:r}],or:{sid:"3c6u5p"}})),g.reset(r));var G=function(_){var J=f(!1,{and:{serialize:"ignore"},name:"$isDone",sid:"uttu1j"}).on(t[_],()=>!0).reset(n);r&&J.reset(r),p.on(J,S=>S-1),g.on(t[_],(S,we)=>{var X=Array.isArray(S)?[...S]:Ye({},S);return X[_]=we,X})};for(var $e of a)G($e);Ne({and:[{source:i({and:[{source:g,clock:Ee(Object.values(t),{name:"clock",sid:"-531esq"})}],or:{name:"source",sid:"uwap9g"}}),filter:p.map(Z=>Z===0),target:n}],or:{sid:"ciyd7d"}})}),n}function se(e){throw new Error(e)}const tt=e=>`mutation addNewComp{
      createCompetition(input: ${A(e)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`,ue=c(),$=h(async e=>await x(tt(e)));i({clock:ue,target:$});i({clock:$.failData,fn:()=>({message:"Не удалось добавить соревнование",type:"failure",time:3e3}),target:d.evokePopUpMessage});i({clock:$.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:d.evokePopUpMessage});i({clock:$.doneData,target:z.load});i({clock:$.doneData,target:y.close});const st=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,rt=()=>{const[e,t]=o.useState(""),r=()=>{ue({competitionName:e})};return s.jsxs(st,{children:[s.jsx(k,{title:"Название",setValue:t,value:e}),s.jsx(u,{text:"Добавить",onClick:r})]})},F=c(),de=c(),pe=h(async e=>{const{employees:t}=(await Pe.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${e}`)).data;return t}),V=f(null).on(F,(e,t)=>t);ce({source:i({source:V,filter:e=>e!==null}),timeout:200,target:pe});i({source:V,filter:e=>e!==null});const at=f([]).on(pe.doneData,(e,t)=>t);i({clock:de,target:V.reinit});const nt=({onChange:e})=>{const[t,r]=j([at,V]),n=a=>{a!=null&&a.id&&e(a.id)};return o.useEffect(()=>(F(""),de),[]),s.jsxs(s.Fragment,{children:[s.jsx(D,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(W,{value:r??"",setValue:F,hints:t.map(a=>({id:a.guid,title:a.fullName,value:a.guid})),onHintClick:n})]})},it=e=>`mutation createTeacher{
        createTeacher(
          input: ${A(e)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,me=c(),M=h(async e=>await x(it(e)));i({clock:M.failData,fn:()=>({message:"Не удалось создать нового преподавателя",type:"failure",time:3e3}),target:d.evokePopUpMessage});i({clock:M.doneData,fn:()=>({message:"Преподаватель создан",type:"success",time:3e3}),target:d.evokePopUpMessage});i({clock:me,target:M});i({clock:M.doneData,target:y.close});const ot=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,ct=()=>{const[e,t]=o.useState(""),[r,n]=o.useState(""),a=()=>{me({fullName:e,teacherGuid:r})};return s.jsxs(ot,{children:[s.jsx(k,{title:"Имя",setValue:t,value:e}),s.jsx(nt,{onChange:n}),s.jsx(u,{text:"Добавить",onClick:a})]})},U=c(),ge=c(),xe=h(async e=>{const{teachers:{items:t}}=await x(`
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
      }`);return t}),K=f("").on(U,(e,t)=>t);ce({source:i({source:K,filter:e=>e!==null}),timeout:200,target:xe});const lt=f([]).on(xe.doneData,(e,t)=>t);i({clock:ge,target:K.reinit});const ut=({onChange:e})=>{const[t,r]=j([lt,K]),n=a=>{a!=null&&a.id&&e(a.id)};return o.useEffect(()=>(U(""),ge),[]),s.jsxs(s.Fragment,{children:[s.jsx(D,{size:5,align:"left",visible:!0,children:"Преподаватель"}),s.jsx(W,{value:r,setValue:U,hints:t.map(a=>({id:a.teacherGuid,title:a.fullName,value:a.teacherGuid})),onHintClick:n})]})},dt=e=>`mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${A(e)}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,pt=e=>`mutation assignVisitValue {
      assignVisitValue(input: ${A(e,["newVisitValue"])}) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }`,B=c(),w=h(async({groupName:e,newVisitValue:t})=>await x(pt({groupName:e,newVisitValue:t})));i({clock:w.failData,fn:()=>({message:"Не удалось назначить стоимость посещения",type:"failure",time:3e3}),target:d.evokePopUpMessage});i({clock:w.doneData,fn:()=>({message:"Стоимость посещения назначена",type:"success",time:3e3}),target:d.evokePopUpMessage});i({clock:B,target:w});i({clock:w.doneData,target:y.close});const Q=c(),O=h(async({groupName:e,teacherGuid:t})=>await x(dt({groupName:e,teacherGuid:t})));i({clock:Q,target:O});i({clock:Q,target:B});i({clock:O.failData,fn:()=>({message:"Не удалось назначить куратора",type:"failure",time:3e3}),target:d.evokePopUpMessage});i({clock:O.doneData,fn:()=>({message:"Куратор назначен",type:"success",time:3e3}),target:d.evokePopUpMessage});i({clock:et({events:[O.doneData,w.doneData]}),target:y.close});const mt=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,gt=[{id:"",title:"Не выбрано"},{id:"2",title:"2"},{id:"4",title:"4"}],xt=()=>{const[e,t]=o.useState(null),[r,n]=o.useState(""),[a,m]=o.useState(""),p=()=>{Q({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:a,teacherGuid:r})};return s.jsxs(mt,{children:[s.jsx(k,{title:"Группа",setValue:m,value:a}),s.jsx(ut,{onChange:n}),s.jsx(L,{title:"Стоимость посещения",items:gt,selected:e,setSelected:t}),s.jsx(u,{text:"Добавить",onClick:p})]})},ft=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,ht=[{id:"2",title:"2"},{id:"4",title:"4"}],jt=()=>{const[e,t]=o.useState(null),[r,n]=o.useState(""),a=()=>{B({newVisitValue:(e==null?void 0:e.id.toString())??"",groupName:r})};return s.jsxs(ft,{children:[s.jsx(k,{title:"Группа",setValue:n,value:r}),s.jsx(L,{title:"Стоимость",items:ht,selected:e,setSelected:t}),s.jsx(u,{text:"Добавить",onClick:a})]})},yt=e=>`mutation addSemester {
    startNewSemester (input: {semesterName: "${e}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`,fe=c(),T=h(async e=>await x(yt(e)));i({clock:fe,target:T});i({clock:T.doneData,target:y.close});i({clock:T.doneData,fn:()=>({message:"Новый семестр начат",type:"success",time:3e3}),target:d.evokePopUpMessage});i({clock:T.failData,fn:()=>({message:"Не удалось начать новый семестр",type:"failure",time:3e3}),target:d.evokePopUpMessage});const St={startNewSemester:fe},vt=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 800px) {
        min-height: 40vh;
    }
`,kt=()=>{const[e,t]=o.useState(""),r=()=>{St.startNewSemester(e)};return s.jsxs(vt,{children:[s.jsx(k,{title:"Новый семестр",setValue:t,value:e}),s.jsx(u,{text:"Начать новый семестр",onClick:r})]})},$t=()=>`mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`,he=c(),C=h(async()=>await x($t()));i({clock:he,target:C});i({clock:C.doneData,target:y.close});i({clock:C.failData,fn:()=>({message:"Не удалось обновить список студентов",type:"failure",time:3e3}),target:d.evokePopUpMessage});i({clock:C.doneData,fn:()=>({message:"Список студентов обновлен",type:"success",time:3e3}),target:d.evokePopUpMessage});C.pending;const wt=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(u,{onClick:()=>z.remove(e),text:"Удалить"})}],Ct=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`,Nt=l.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
`,Et=l.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    gap: 10px;
`,Pt=()=>{const[e,t]=j([he,Le.$competitions]),{open:r}=q(),n=()=>{r(s.jsx(ct,{}))},a=()=>{r(s.jsx(xt,{}))},m=()=>{r(s.jsx(jt,{}))},p=()=>{r(s.jsx(rt,{}))},g=()=>{r(s.jsx(kt,{}))};return o.useEffect(()=>{z.load()},[]),s.jsxs(Nt,{children:[s.jsxs(Et,{children:[s.jsx(u,{onClick:n,text:"Добавить нового преподавателя"}),s.jsx(u,{onClick:e,text:"Обновить данные о студентах"}),s.jsx(u,{onClick:a,text:"Назначить куратора"}),s.jsx(u,{onClick:m,text:"Назначить стоимость посещения"}),s.jsx(u,{onClick:g,text:"Начать новый семестр"})]}),s.jsxs(Ct,{children:[s.jsx(D,{align:"left",size:4,children:"Соревнования"}),s.jsx(u,{onClick:p,text:"Добавить соревнование"}),s.jsx(H,{data:t.map(G=>({name:G})),columns:wt,onRowClick:()=>{}})]})]})},bt=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,je=c(),Y=ie({effect:async({currentUser:e})=>(await x(bt((e==null?void 0:e.guid)??""))).teacher,source:oe}),Dt=be(Y,null);i({clock:je,target:Y});const At=Y.pending,Vt={load:je},Mt={$peTeacher:Dt,$isLoading:At},ye=c();i({clock:ye,target:[R.load,Vt.load]});const Ot=e=>`query groups {
        groups(where: { curatorGuid: {eq: "${e}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`,Se=c(),ve=ie({effect:async({currentUser:e})=>(await x(Ot((e==null?void 0:e.guid)??""))).groups.items,source:oe});i({clock:Se,target:ve});const Tt=f([]).on(ve.doneData,(e,t)=>t);function re(){const[e]=j([Tt]);return o.useEffect(()=>{Se()},[]),s.jsx(H,{data:e,columns:Gt})}const Gt=[{field:"groupName",title:"Группа"},{field:"curator",title:"Преподаватель",render:e=>e.fullName}],_t=l.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`,ae=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Ft=()=>{const[e,t]=j([qe.$filters,le.$isExam]),[r,n]=o.useState(e["group.groupName"]??"");return s.jsxs(_t,{children:[s.jsx(Qe,{leftIcon:s.jsx(De,{}),placeholder:"Номер группы",value:r,setValue:n,customMask:Ve.groupMask,onValueEmpty:()=>E.addFilter({name:"group.groupName",value:""}),onHintClick:a=>E.addFilter({name:"group.groupName",value:(a==null?void 0:a.id)??""}),request:Me}),s.jsx(L,{items:ae,placeholder:"Курс",selected:ae.find(a=>a.id===e.course)??null,setSelected:a=>{if(a!=null&&a.id){E.addFilter({name:"course",value:a.id});return}E.addFilter({name:"course",value:""})}}),s.jsx(Oe,{title:"Проведение зачета",state:t,action:a=>He.setIsExam(a)})]})},Ut=(e,t)=>{let r=e;for(const n in t)r=r.replace(`:${n}`,t[n]);return r};l.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;const It=l.div`
    ${Te.isNotMobile} {
        width: 500px;
    }
`,Wt=({student:e})=>{const t=Ae(),{close:r}=q(),n=()=>{t.push(Ut(_e,{studentId:e.studentGuid})),r()};return s.jsx(It,{children:s.jsxs(v,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(v,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(N,{keyStr:"Группа",value:e.groupNumber}),s.jsx(N,{keyStr:"Баллы",value:b(e)}),s.jsx(N,{keyStr:"Курс",value:e.course}),s.jsx(N,{keyStr:"ЛМС",value:e.pointsHistory.reduce((a,m)=>a+m.points,0)})]}),s.jsx(Ge,{width:"100%",margin:"0"}),s.jsxs(v,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(D,{align:"left",size:4,children:"Посещения"}),s.jsx(ze,{studentGuid:e.studentGuid})]}),s.jsx(u,{onClick:n,text:"Перейти к студенту",width:"100%"})]})})},Lt=[{title:"ФИО",field:"fullName",priority:"one",width:"40%"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Посещений",field:"visits",priority:"one"},{title:"Баллы",field:"pointsCount",priority:"two",render:(e,t)=>b(t)},{title:"Нормативы",field:"pointsStandardsCount",render:(e,t)=>t.pointsForStandards},{title:"ЛМС",field:"pointsLMSCount",render:(e,t)=>t.pointsHistory.reduce((r,n)=>r+n.points,0)}],qt=[{title:"ФИО",field:"name",render:(e,t)=>t.fullName,width:"40%",priority:"one"},{title:"Группа",field:"group",render:(e,t)=>t.groupNumber,priority:"three"},{title:"Баллы",field:"points",render:(e,t)=>b(t),priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>b(t)>=55?"Зачтено":"Не зачтено",priority:"two"}],ke=c();i({clock:ke,target:R.load});const Ht=l.div`
    display: grid;
    width: 100%;
`,zt=l.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    justify-content: flex-end;
`,Rt=l(v)`
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,ne=()=>{const{open:e}=q(),{students:t,totalCount:r,page:n,search:a,loading:m,isExam:p}=j({students:P.$pEStudents,loading:P.$loading,totalCount:P.$pEStudentsTotalCount,page:P.$pEStudentsPage,search:Re.$search,isExam:le.$isExam});return o.useEffect(()=>{ke()},[]),s.jsx(Ht,{children:s.jsxs(zt,{children:[s.jsxs(Rt,{children:[s.jsx(W,{value:a,setValue:Ke.update}),s.jsx(Ft,{})]}),s.jsx(H,{loading:m,data:t,columns:p?qt:Lt,onRowClick:g=>{e(s.jsx(Wt,{student:g}),g.fullName)}}),s.jsx(Fe,{condition:!0,align:"right",pages:Math.floor(r/Be),currentPage:n,setCurrentPage:R.setPage})]})})};var I=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(I||{});const Zt=()=>{const[e,t]=o.useState(0),[r]=j([Mt.$peTeacher]);o.useEffect(()=>{ye()},[]);const n=[I.AdminAccess,I.SuperUser].some(a=>r==null?void 0:r.permissions.includes(a))?[{title:"Студенты",content:s.jsx(ne,{})},{title:"Управление",content:s.jsx(Pt,{})},{title:"Мои Группы",content:s.jsx(re,{})}]:[{title:"Студенты",content:s.jsx(ne,{})},{title:"Мои Группы",content:s.jsx(re,{})}];return s.jsx(Ue,{padding:"10px",children:s.jsx(Ie,{children:s.jsxs(v,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(We,{appearance:!1,pages:n,currentPage:e,setCurrentPage:t}),n[e].content]})})})};export{Zt as default};
