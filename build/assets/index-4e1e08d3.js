var fe=Object.defineProperty,je=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var O=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&O(e,n,t[n]);if(U)for(var n of U(t))$e.call(t,n)&&O(e,n,t[n]);return e},S=(e,t)=>je(e,ve(t));var y=(e,t,n)=>new Promise((o,r)=>{var x=l=>{try{a(n.next(l))}catch(F){r(F)}},h=l=>{try{a(n.throw(l))}catch(F){r(F)}},a=l=>l.done?o(l.value):Promise.resolve(l.value).then(x,h);a((n=n.apply(e,t)).next())});import{p as c,e as K,x as i,s as d,r as f,j as s,q as j,bj as Q,h as k,v as T,E as Se,cN as ye,c as we,X as ke}from"./vendor-33947725.js";import{m as Ee,n as Ge,d as Y,o as be,p as Ie,q as E,u as I,h as Z,r as P,t as J,v as ee,w as te,x as Pe,y as Ne,z as Fe,D as Te,b as De,E as _e,G as Ae,L as Le,H as w,J as p,K as Re,M as Me,N as ze,O as qe,Q as v,R as Ue,U as Oe,V as We,X as Ve,Y as He,Z as Be,_ as Xe,P as Ke,a0 as Qe}from"./index-5e1edf2c.js";import{e as D,s as Ye,a as Ze,b as se,c as C,d as Je,f as _,h as ne,g as et,A as tt,i as b,j as st,k as nt,P as W}from"./ui-922c6ceb.js";const oe=c({name:"addCompetition",sid:"ebmam4"}),G=K(e=>Ee(e.competitionName),{name:"addCompetitionFx",sid:"-cvy5ax"});i({and:[{clock:oe,target:G}],or:{sid:"-pbpeie"}});i({and:[{clock:G.failData,fn:e=>({message:Ge(e,"Не удалось добавить соревнование"),type:"failure",time:3e3}),target:Y.evokePopUpMessage}],or:{sid:"-p9i84y"}});i({and:[{clock:G.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:Y.evokePopUpMessage}],or:{sid:"-orwt5e"}});i({and:[{clock:G.doneData,target:D.load}],or:{sid:"-oabe5u"}});i({and:[{clock:G.doneData,target:be.close}],or:{sid:"-nwkjbt"}});const ot=d.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),at=()=>{const[e,t]=f.useState(""),n=()=>{oe({competitionName:e})};return s.jsxs(ot,{children:[s.jsx(Ie,{title:"Название",setValue:t,value:e}),s.jsx(E,{text:"Добавить",onClick:n})]})},rt=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>s.jsx(E,{onClick:()=>D.remove(e),text:"Удалить"})}],it=d.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),dt=d.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;width:100%;gap:10px;"]);d.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]);const lt=()=>{const[e]=j([Ye.$competitions]),{open:t}=I(),n=()=>{t(s.jsx(at,{}))};return f.useEffect(()=>{D.load()},[]),s.jsx(dt,{children:s.jsxs(it,{children:[s.jsx(Z,{align:"left",size:4,children:"Соревнования"}),s.jsx(E,{onClick:n,text:"Добавить соревнование"}),s.jsx(P,{data:e.map(o=>({name:o})),columns:rt,onRowClick:()=>{}})]})})},ct=d.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]);var ae=(e=>(e.Group="group.groupName",e.Course="course",e))(ae||{});const V=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],ut=()=>{var e,t,n;const[o,r]=j([Ze.$filters,se.$isExam]),[x,h]=f.useState((e=(t=o["group.groupName"])===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:"");return s.jsxs(ct,{children:[s.jsx(J,{leftIcon:s.jsx(Q,{}),placeholder:"Номер группы",value:x,setValue:h,customMask:ee.groupMask,onValueEmpty:()=>C.addFilter({name:"group.groupName",value:""}),onHintClick:a=>{var l;return C.addFilter({name:"group.groupName",value:(l=a==null?void 0:a.id)!==null&&l!==void 0?l:"",strict:!0})},request:te,size:"big"}),s.jsx(Pe,{items:V,size:"big",placeholder:"Курс",selected:(n=V.find(a=>{var l;return a.id===((l=o.course)===null||l===void 0?void 0:l.value)}))!==null&&n!==void 0?n:null,setSelected:a=>{if(a!=null&&a.id){C.addFilter({name:"course",value:a.id});return}C.addFilter({name:"course",value:""})}}),s.jsx(Ne,{title:"Зачет",state:r,action:a=>Je.setIsExam(a)})]})},A=c({name:"pageIndexChanged",sid:"-yqoz9l"}),re=c({name:"pageLoaded",sid:"adwljo"}),pt=k(0,{name:"$page",sid:"ndbopj"}).on(A,(e,t)=>t);i({and:[{clock:re,target:[_.load,Fe.load]}],or:{sid:"8a9ft4"}});const ie=c({name:"load",sid:"h6031v"}),de=T({and:{effect:t=>y(void 0,[t],function*({currentUser:e}){var n;const{data:o}=yield Te((n=e==null?void 0:e.guid)!==null&&n!==void 0?n:"");return o.data}),source:De.user},or:{name:"loadFx",sid:"-fzko9u"}});i({and:[{clock:ie,target:de}],or:{sid:"-b03ras"}});const mt=k([],{name:"$myGroups",sid:"qqeqg2"}).on(de.doneData,(e,t)=>t);function H(){const[e]=j([mt]);f.useEffect(()=>{ie()},[]);const t=n=>{C.resetFilters(),C.addFilter({name:ae.Group,value:n.groupName,strict:!0}),A(0)};return s.jsx(P,{onRowClick:t,data:e,columns:xt})}const xt=[{field:"groupName",title:"Группа"},{field:"curatorFullName",title:"Преподаватель"}],L=c({name:"endSemester",sid:"-50inz6"}),le=c({name:"reset",sid:"-jpbmuk"}),N=K(t=>y(void 0,[t],function*({studentId:e}){return yield _e(e),{studentGuid:e}}),{name:"endSemesterFx",sid:"yxjzgs"});var m=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(m||{});const g=k({},{name:"$statuses",sid:"-dggygt"}).reset(le);i({and:[{clock:L,source:g,fn:(e,{studentId:t})=>S($({},e),{[t]:"loading"}),target:g}],or:{sid:"77dp82"}});i({and:[{clock:N.doneData,source:g,fn:(e,{studentGuid:t})=>S($({},e),{[t]:"success"}),target:g}],or:{sid:"7q2pec"}});i({and:[{clock:N.fail,source:g,fn:(e,{params:t})=>S($({},e),{[t.studentId]:"error"}),target:g}],or:{sid:"88rpkm"}});i({and:[{clock:N.done,source:g,fn:(e,{params:t})=>S($({},e),{[t.studentId]:"success"}),target:g}],or:{sid:"8rgpqw"}});i({and:[{clock:L,target:N}],or:{sid:"9lpedr"}});const gt={endSemester:L,reset:le},ce={statuses:g},ue=c({name:"selectedGroupChanged",sid:"-yusgt0"}),pe=c({name:"load",sid:"4qbbdm"}),R=c({name:"reset",sid:"g7h26n"}),me=c({name:"endSemesterForGroup",sid:"842241"}),M=k("",{name:"$selectedGroup",sid:"-n8kqn6"}).on(ue,(e,t)=>t).reset(R),z=T({and:{source:M,effect:e=>y(void 0,null,function*(){const{data:t}=yield Ae(0,{group:{value:e}},200);return t.data.students})},or:{name:"loadFx",sid:"xfnq33"}});i({and:[{source:M,filter:Boolean,target:z}],or:{sid:"gule9"}});const xe=k([],{name:"$pEStudents",sid:"-7tia7t"}).on(z.doneData,(e,t)=>t).reset(R),ht=Se({and:[z.pending,Boolean],or:{name:"$loading",sid:"ghro6d"}}),ft=T({and:{source:xe,effect:e=>y(void 0,null,function*(){e.forEach(t=>gt.endSemester({studentId:t.studentGuid}))})},or:{name:"endSemesterForGroupFx",sid:"3q6tp7"}});i({and:[{clock:ce.statuses,filter:e=>Object.values(e).every(t=>t!==m.LOADING),target:pe}],or:{sid:"10n6r9"}});i({and:[{clock:me,target:ft}],or:{sid:"1exu6n"}});const jt={load:pe,reset:R,selectedGroupChanged:ue,endSemesterForGroup:me},vt={$loading:ht,$pEStudents:xe,$selectedGroup:M},u={events:jt,stores:vt},Ct={[m.LOADING]:"Загрузка",[m.ERROR]:"Не зачтено",[m.SUCCESS]:"Успешно"},$t={[m.LOADING]:s.jsx(Le,{}),[m.ERROR]:s.jsx(ye,{color:w.red.main}),[m.SUCCESS]:s.jsx(we,{color:w.green.main})},St=d.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),yt=()=>{const[e,t]=j([ce.statuses,u.stores.$pEStudents]);return s.jsx(p,{p:"30px",d:"column",jc:"space-between",children:t.map(n=>{var o,r;return s.jsxs(p,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[s.jsx(St,{children:n.fullName}),s.jsxs(p,{gap:"8px",w:"auto",children:[s.jsx(Re,{align:"center",children:Ct[(o=e[n.studentGuid])!==null&&o!==void 0?o:m.LOADING]}),$t[(r=e[n.studentGuid])!==null&&r!==void 0?r:m.LOADING]]})]},n.studentGuid)})})},wt=d.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),kt=d.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),Et=d(p).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),q=d.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&w.red.main),Gt=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(q,{hasDebt:t.hasDebtFromPreviousSemester,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>t.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],ge=c({name:"pageLoaded",sid:"4q0med"}),bt=c({name:"pageUnloaded",sid:"he5rd5"});i({and:[{clock:ge,target:u.events.load}],or:{sid:"74c8dr"}});i({and:[{clock:bt,target:u.events.reset}],or:{sid:"76jer7"}});const It=d.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),Pt=d.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);d(p).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const Nt=d(p).withConfig({componentId:"sc-s6hadh-3"})([""]),B=()=>{const{open:e,close:t}=I(),{students:n,loading:o,selectedGroup:r}=j({students:u.stores.$pEStudents,loading:u.stores.$loading,selectedGroup:u.stores.$selectedGroup}),x=!!(n.length&&!o&&r),h=()=>{ze.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{u.events.endSemesterForGroup(),e(s.jsx(yt,{}))},onReject:()=>{t(),u.events.reset()}})};return f.useEffect(()=>(ge(),()=>{u.events.reset()}),[]),s.jsxs(It,{children:[!x&&s.jsx(Me,{type:"alert",children:"Выберите группу чтобы провести зачет"}),s.jsxs(Pt,{children:[s.jsxs(Nt,{d:"row",jc:"space-between",p:"8px",children:[s.jsx(J,{leftIcon:s.jsx(Q,{}),placeholder:"Номер группы",value:r,setValue:u.events.selectedGroupChanged,customMask:ee.groupMask,onValueEmpty:()=>u.events.selectedGroupChanged(""),onHintClick:a=>a&&u.events.selectedGroupChanged(a.id),request:te,size:"big"}),x&&s.jsx(E,{text:`Завершить семестр для ${r}`,width:"210px",background:w.green.main,textColor:w.white.main,onClick:h})]}),x&&s.jsx(P,{loading:o,data:n,columns:Gt})]})]})},Ft=(e,t)=>{let n=e;for(const o in t)n=n.replace(`:${o}`,t[o]);return n};d.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const Tt=d.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],qe.isNotMobile),Dt=({student:e})=>{const t=ke(),{close:n}=I(),o=()=>{t.push(Ft(Oe,{studentId:e.studentGuid})),n()};return s.jsx(Tt,{children:s.jsxs(p,{d:"column",gap:"16px",ai:"flex-start",children:[s.jsxs(p,{d:"column",ai:"flex-start",gap:"2px",children:[s.jsx(v,{keyStr:"Группа",value:e.groupNumber}),s.jsx(v,{keyStr:"Баллы",value:e.totalPoints}),s.jsx(v,{keyStr:"Курс",value:e.course}),s.jsx(v,{keyStr:"ЛМС",value:e.lmsPoints}),s.jsx(v,{keyStr:"Группа здоровья",value:ne[e.healthGroup]}),s.jsx(v,{keyStr:"Специализация",value:et[e.specialization]})]}),s.jsx(Ue,{width:"100%",margin:"0"}),s.jsxs(p,{d:"column",gap:"4px",ai:"flex-start",children:[s.jsx(Z,{align:"left",size:4,children:"Дата"}),s.jsx(tt,{studentGuid:e.studentGuid})]}),s.jsx(E,{onClick:o,text:"Перейти к студенту",width:"100%"})]})})},_t=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,t)=>s.jsx(q,{hasDebt:t.hasDebt,children:t.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"totalPoints",priority:"one"},{title:"Нормативы",field:"standardPoints",priority:"two"},{title:"ЛМС",field:"lmsPoints",priority:"two"},{title:"Группа здоровья",showFull:!0,field:"healthGroup",priority:"two",render:e=>{const t=ne[e];return s.jsx("span",{children:t})}}],At=[{title:"ФИО",field:"name",render:(e,t)=>s.jsx(q,{hasDebt:t.hasDebt,children:t.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,t)=>t.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],he=c({name:"pageLoaded",sid:"-n45vlm"});i({and:[{clock:he,target:_.load}],or:{sid:"t4c48d"}});const X=()=>{const{open:e}=I(),{students:t,totalCount:n,page:o,search:r,loading:x,isExam:h}=j({students:b.$pEStudents,loading:b.$loading,totalCount:b.$pEStudentsTotalCount,page:b.$pEStudentsPage,search:st.$search,isExam:se.$isExam});return f.useEffect(()=>{he()},[]),s.jsx(wt,{children:s.jsxs(kt,{children:[s.jsxs(Et,{children:[s.jsx(We,{value:r,setValue:nt.update,size:"big"}),s.jsx(ut,{})]}),s.jsx(P,{loading:x,data:t,columns:h?At:_t,onRowClick:a=>{e(s.jsx(Dt,{student:a}),a.fullName)}}),s.jsx(Ve,{condition:!0,align:"right",pages:Math.floor(n/He),currentPage:o,setCurrentPage:_.setPage})]})})},qt=()=>{const[e,t]=j([Be.peTeacher,pt]);f.useEffect(()=>{re()},[]);const n=[W.AdminAccess,W.SuperUser].some(o=>{var r;return e==null||(r=e.permissions)===null||r===void 0?void 0:r.includes(o)})?[{title:"Студенты",content:s.jsx(X,{})},{title:"Управление",content:s.jsx(lt,{})},{title:"Мои Группы",content:s.jsx(H,{})},{title:"Проведение зачета",content:s.jsx(B,{})}]:[{title:"Студенты",content:s.jsx(X,{})},{title:"Мои Группы",content:s.jsx(H,{})},{title:"Проведение зачета",content:s.jsx(B,{})}];return s.jsx(Xe,{padding:"10px",children:s.jsx(Ke,{children:s.jsxs(p,{d:"column",gap:"2px",ai:"flex-start",children:[s.jsx(Qe,{appearance:!1,pages:n,currentPage:t,setCurrentPage:A}),n[t].content]})})})};export{qt as default};
