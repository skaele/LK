import{p as d,e as O,x as a,s as i,r as x,j as t,q as g,bs as U,h as y,v as b,a5 as ce,K as pe,cN as ue,c as me}from"./vendor-48260ac4.js";import{m as xe,n as ge,d as W,o as he,p as fe,q as w,u as $,h as V,r as E,t as H,v as B,w as K,x as je,y as Ce,z as Se,D as ye,b as we,E as ve,G as p,K as f,H as ke,J as $e,L as S,N as Ee,O as Ge,Q as be,R as Ie,U as Pe,V as Ne,X as Fe,M as De,Y as Te,Z as Ae,_ as Le,P as Re,a0 as Me}from"./index-f92dd84a.js";import{e as I,s as _e,a as ze,b as Q,c as j,d as qe,f as P,h as X,g as Oe,A as Ue,i as k,j as We,k as Ve,P as R}from"./student-dff97d6a.js";const Y=d({name:"addCompetition",sid:"ebmam4"}),v=O(e=>xe(e.competitionName),{name:"addCompetitionFx",sid:"-cvy5ax"});a({and:[{clock:Y,target:v}],or:{sid:"-pbpeie"}});a({and:[{clock:v.failData,fn:e=>({message:ge(e,"Не удалось добавить соревнование"),type:"failure",time:3e3}),target:W.evokePopUpMessage}],or:{sid:"-p9i84y"}});a({and:[{clock:v.doneData,fn:()=>({message:"Соревнование добавлено",type:"success",time:3e3}),target:W.evokePopUpMessage}],or:{sid:"-orwt5e"}});a({and:[{clock:v.doneData,target:I.load}],or:{sid:"-oabe5u"}});a({and:[{clock:v.doneData,target:he.close}],or:{sid:"-nwkjbt"}});const He=i.div.withConfig({componentId:"sc-apfm2h-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center;min-height:300px;@media (max-width:800px){min-height:40vh;}"]),Be=()=>{const[e,s]=x.useState(""),n=()=>{Y({competitionName:e})};return t.jsxs(He,{children:[t.jsx(fe,{title:"Название",setValue:s,value:e}),t.jsx(w,{text:"Добавить",onClick:n})]})},Ke=[{field:"name",title:"Название"},{field:"name",title:"",render:e=>t.jsx(w,{onClick:()=>I.remove(e),text:"Удалить"})}],Qe=i.div.withConfig({componentId:"sc-17yyi1s-0"})(["width:100%;display:flex;flex-direction:column;gap:10px;margin-top:20px;"]),Xe=i.div.withConfig({componentId:"sc-17yyi1s-1"})(["display:flex;flex-direction:column;width:100%;gap:10px;"]);i.div.withConfig({componentId:"sc-17yyi1s-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;"]);const Ye=()=>{const[e]=g([_e.$competitions]),{open:s}=$(),n=()=>{s(t.jsx(Be,{}))};return x.useEffect(()=>{I.load()},[]),t.jsx(Xe,{children:t.jsxs(Qe,{children:[t.jsx(V,{align:"left",size:4,children:"Соревнования"}),t.jsx(w,{onClick:n,text:"Добавить соревнование"}),t.jsx(E,{data:e.map(r=>({name:r})),columns:Ke,onRowClick:()=>{}})]})})},Ze=i.div.withConfig({componentId:"sc-12vwvep-0"})(["display:flex;flex-direction:row;align-items:center;gap:10px;@media (max-width:768px){flex-wrap:wrap;}"]);var Z=(e=>(e.Group="group.groupName",e.Course="course",e))(Z||{});const M=[{id:0,title:"Не выбрано"},{id:1,title:"1 курс"},{id:2,title:"2 курс"},{id:3,title:"3 курс"},{id:4,title:"4 курс"}],Je=()=>{var c;const[e,s]=g([ze.$filters,Q.$isExam]),[n,r]=x.useState(((c=e["group.groupName"])==null?void 0:c.value)??"");return t.jsxs(Ze,{children:[t.jsx(H,{leftIcon:t.jsx(U,{}),placeholder:"Номер группы",value:n,setValue:r,customMask:B.groupMask,onValueEmpty:()=>j.addFilter({name:"group.groupName",value:""}),onHintClick:o=>j.addFilter({name:"group.groupName",value:(o==null?void 0:o.id)??"",strict:!0}),request:K,size:"big"}),t.jsx(je,{items:M,size:"big",placeholder:"Курс",selected:M.find(o=>{var h;return o.id===((h=e.course)==null?void 0:h.value)})??null,setSelected:o=>{if(o!=null&&o.id){j.addFilter({name:"course",value:o.id});return}j.addFilter({name:"course",value:""})}}),t.jsx(Ce,{title:"Зачет",state:s,action:o=>qe.setIsExam(o)})]})},N=d({name:"pageIndexChanged",sid:"-yqoz9l"}),J=d({name:"pageLoaded",sid:"adwljo"}),et=y(0,{name:"$page",sid:"ndbopj"}).on(N,(e,s)=>s);a({and:[{clock:J,target:[P.load,Se.load]}],or:{sid:"8a9ft4"}});const ee=d({name:"load",sid:"h6031v"}),te=b({and:{effect:async({currentUser:e})=>{const{data:s}=await ye((e==null?void 0:e.guid)??"");return s.data},source:we.user},or:{name:"loadFx",sid:"-fzko9u"}});a({and:[{clock:ee,target:te}],or:{sid:"-b03ras"}});const tt=y([],{name:"$myGroups",sid:"qqeqg2"}).on(te.doneData,(e,s)=>s);function _(){const[e]=g([tt]);x.useEffect(()=>{ee()},[]);const s=n=>{j.resetFilters(),j.addFilter({name:Z.Group,value:n.groupName,strict:!0}),N(0)};return t.jsx(E,{onRowClick:s,data:e,columns:st})}const st=[{field:"groupName",title:"Группа"},{field:"curatorFullName",title:"Преподаватель"}],nt=(e,s)=>{let n=e;for(const r in s)n=n.replace(`:${r}`,s[r]);return n};i.div.withConfig({componentId:"sc-10c5ztk-0"})(["min-height:50px;display:flex;gap:5px;flex-direction:column;"]);const ot=i.div.withConfig({componentId:"sc-10c5ztk-1"})(["","{width:500px;}"],ve.isNotMobile),at=({student:e})=>{const s=ce(),{close:n}=$(),r=()=>{s.push(nt($e,{studentId:e.studentGuid})),n()};return t.jsx(ot,{children:t.jsxs(p,{d:"column",gap:"16px",ai:"flex-start",children:[t.jsxs(p,{d:"column",ai:"flex-start",gap:"2px",children:[t.jsx(f,{keyStr:"Группа",value:e.groupNumber}),t.jsx(f,{keyStr:"Баллы",value:e.totalPoints}),t.jsx(f,{keyStr:"Курс",value:e.course}),t.jsx(f,{keyStr:"ЛМС",value:e.lmsPoints}),t.jsx(f,{keyStr:"Группа здоровья",value:X[e.healthGroup]}),t.jsx(f,{keyStr:"Специализация",value:Oe[e.specialization]})]}),t.jsx(ke,{width:"100%",margin:"0"}),t.jsxs(p,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(V,{align:"left",size:4,children:"Дата"}),t.jsx(Ue,{studentGuid:e.studentGuid})]}),t.jsx(w,{onClick:r,text:"Перейти к студенту",width:"100%"})]})})},it=i.div.withConfig({componentId:"sc-12o9ec3-0"})(["display:grid;width:100%;"]),rt=i.div.withConfig({componentId:"sc-12o9ec3-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]),dt=i(p).withConfig({componentId:"sc-12o9ec3-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]),F=i.span.withConfig({componentId:"sc-12o9ec3-3"})(["color:",";"],({hasDebt:e})=>e&&S.red.main),lt=[{title:"ФИО",field:"fullName",priority:"one",showFull:!0,render:(e,s)=>t.jsx(F,{hasDebt:s.hasDebt,children:s.fullName})},{title:"Группа",field:"groupNumber",priority:"one"},{title:"Посещений",field:"visits",priority:"two"},{title:"Баллы",field:"totalPoints",priority:"one"},{title:"Нормативы",field:"standardPoints",priority:"two"},{title:"ЛМС",field:"lmsPoints",priority:"two"},{title:"Группа здоровья",showFull:!0,field:"healthGroup",priority:"two",render:e=>{const s=X[e];return t.jsx("span",{children:s})}}],ct=[{title:"ФИО",field:"name",render:(e,s)=>t.jsx(F,{hasDebt:s.hasDebt,children:s.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,s)=>s.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],se=d({name:"pageLoaded",sid:"-n45vlm"});a({and:[{clock:se,target:P.load}],or:{sid:"t4c48d"}});const z=()=>{const{open:e}=$(),{students:s,totalCount:n,page:r,search:c,loading:o,isExam:h}=g({students:k.$pEStudents,loading:k.$loading,totalCount:k.$pEStudentsTotalCount,page:k.$pEStudentsPage,search:We.$search,isExam:Q.$isExam});return x.useEffect(()=>{se()},[]),t.jsx(it,{children:t.jsxs(rt,{children:[t.jsxs(dt,{children:[t.jsx(Ee,{value:c,setValue:Ve.update,size:"big"}),t.jsx(Je,{})]}),t.jsx(E,{loading:o,data:s,columns:h?ct:lt,onRowClick:C=>{e(t.jsx(at,{student:C}),C.fullName)}}),t.jsx(Ge,{condition:!0,align:"right",pages:Math.floor(n/be),currentPage:r,setCurrentPage:P.setPage})]})})},D=d({name:"endSemester",sid:"-50inz6"}),ne=d({name:"reset",sid:"-jpbmuk"}),G=O(async({studentId:e})=>(await Ie(e),{studentGuid:e}),{name:"endSemesterFx",sid:"yxjzgs"});var u=(e=>(e.LOADING="loading",e.SUCCESS="success",e.ERROR="error",e))(u||{});const m=y({},{name:"$statuses",sid:"-dggygt"}).reset(ne);a({and:[{clock:D,source:m,fn:(e,{studentId:s})=>({...e,[s]:"loading"}),target:m}],or:{sid:"77dp82"}});a({and:[{clock:G.doneData,source:m,fn:(e,{studentGuid:s})=>({...e,[s]:"success"}),target:m}],or:{sid:"7q2pec"}});a({and:[{clock:G.fail,source:m,fn:(e,{params:s})=>({...e,[s.studentId]:"error"}),target:m}],or:{sid:"88rpkm"}});a({and:[{clock:G.done,source:m,fn:(e,{params:s})=>({...e,[s.studentId]:"success"}),target:m}],or:{sid:"8rgpqw"}});a({and:[{clock:D,target:G}],or:{sid:"9lpedr"}});const pt={endSemester:D,reset:ne},oe={statuses:m},ae=d({name:"selectedGroupChanged",sid:"-yusgt0"}),ie=d({name:"load",sid:"4qbbdm"}),T=d({name:"reset",sid:"g7h26n"}),re=d({name:"endSemesterForGroup",sid:"842241"}),A=y("",{name:"$selectedGroup",sid:"-n8kqn6"}).on(ae,(e,s)=>s).reset(T),L=b({and:{source:A,effect:async e=>{const{data:s}=await Pe(0,{group:{value:e}},200);return s.data.students}},or:{name:"loadFx",sid:"xfnq33"}});a({and:[{source:A,filter:Boolean,target:L}],or:{sid:"gule9"}});const de=y([],{name:"$pEStudents",sid:"-7tia7t"}).on(L.doneData,(e,s)=>s).reset(T),ut=pe({and:[L.pending,Boolean],or:{name:"$loading",sid:"ghro6d"}}),mt=b({and:{source:de,effect:async e=>{e.forEach(s=>pt.endSemester({studentId:s.studentGuid}))}},or:{name:"endSemesterForGroupFx",sid:"3q6tp7"}});a({and:[{clock:oe.statuses,filter:e=>Object.values(e).every(s=>s!==u.LOADING),target:ie}],or:{sid:"10n6r9"}});a({and:[{clock:re,target:mt}],or:{sid:"1exu6n"}});const xt={load:ie,reset:T,selectedGroupChanged:ae,endSemesterForGroup:re},gt={$loading:ut,$pEStudents:de,$selectedGroup:A},l={events:xt,stores:gt},ht={[u.LOADING]:"Загрузка",[u.ERROR]:"Не зачтено",[u.SUCCESS]:"Успешно"},ft={[u.LOADING]:t.jsx(Ne,{}),[u.ERROR]:t.jsx(ue,{color:S.red.main}),[u.SUCCESS]:t.jsx(me,{color:S.green.main})},jt=i.span.withConfig({componentId:"sc-ph8uia-0"})(["color:var(--text);font-size:1em;"]),Ct=()=>{const[e,s]=g([oe.statuses,l.stores.$pEStudents]);return t.jsx(p,{p:"30px",d:"column",jc:"space-between",children:s.map(n=>t.jsxs(p,{w:"100%",gap:"16px",ai:"flex-start",jc:"space-between",children:[t.jsx(jt,{children:n.fullName}),t.jsxs(p,{gap:"8px",w:"auto",children:[t.jsx(Fe,{align:"center",children:ht[e[n.studentGuid]??u.LOADING]}),ft[e[n.studentGuid]??u.LOADING]]})]},n.studentGuid))})},le=d({name:"pageLoaded",sid:"4q0med"}),St=d({name:"pageUnloaded",sid:"he5rd5"});a({and:[{clock:le,target:l.events.load}],or:{sid:"74c8dr"}});a({and:[{clock:St,target:l.events.reset}],or:{sid:"76jer7"}});const yt=i.div.withConfig({componentId:"sc-s6hadh-0"})(["display:grid;width:100%;"]),wt=i.div.withConfig({componentId:"sc-s6hadh-1"})(["display:flex;flex-direction:column;align-items:flex-end;gap:10px;justify-content:flex-end;"]);i(p).withConfig({componentId:"sc-s6hadh-2"})(["gap:8px;@media (max-width:768px){flex-direction:column;}"]);const vt=i(p).withConfig({componentId:"sc-s6hadh-3"})([""]),kt=[{title:"ФИО",field:"name",render:(e,s)=>t.jsx(F,{hasDebt:s.hasDebtFromPreviousSemester,children:s.fullName}),showFull:!0,priority:"one"},{title:"Группа",field:"groupNumber",priority:"three"},{title:"Баллы",field:"totalPoints",priority:"two"},{title:"Зачтено",field:"isDone",render:(e,s)=>s.totalPoints>=50?"Зачтено":"Не зачтено",priority:"one"}],q=()=>{const{open:e,close:s}=$(),{students:n,loading:r,selectedGroup:c}=g({students:l.stores.$pEStudents,loading:l.stores.$loading,selectedGroup:l.stores.$selectedGroup}),o=!!(n.length&&!r&&c),h=()=>{Te.evokeConfirm({message:"Вы уверены, что хотите завершить семестр?",onConfirm:()=>{l.events.endSemesterForGroup(),e(t.jsx(Ct,{}))},onReject:()=>{s(),l.events.reset()}})};return x.useEffect(()=>(le(),()=>{l.events.reset()}),[]),t.jsxs(yt,{children:[!o&&t.jsx(De,{type:"alert",children:"Выберите группу чтобы провести зачет"}),t.jsxs(wt,{children:[t.jsxs(vt,{d:"row",jc:"space-between",p:"8px",children:[t.jsx(H,{leftIcon:t.jsx(U,{}),placeholder:"Номер группы",value:c,setValue:l.events.selectedGroupChanged,customMask:B.groupMask,onValueEmpty:()=>l.events.selectedGroupChanged(""),onHintClick:C=>C&&l.events.selectedGroupChanged(C.id),request:K,size:"big"}),o&&t.jsx(w,{text:`Завершить семестр для ${c}`,width:"210px",background:S.green.main,textColor:S.white.main,onClick:h})]}),o&&t.jsx(E,{loading:r,data:n,columns:kt})]})]})},bt=()=>{const[e,s]=g([Ae.peTeacher,et]);x.useEffect(()=>{J()},[]);const n=[R.AdminAccess,R.SuperUser].some(r=>{var c;return(c=e==null?void 0:e.permissions)==null?void 0:c.includes(r)})?[{title:"Студенты",content:t.jsx(z,{})},{title:"Управление",content:t.jsx(Ye,{})},{title:"Мои Группы",content:t.jsx(_,{})},{title:"Проведение зачета",content:t.jsx(q,{})}]:[{title:"Студенты",content:t.jsx(z,{})},{title:"Мои Группы",content:t.jsx(_,{})},{title:"Проведение зачета",content:t.jsx(q,{})}];return t.jsx(Le,{padding:"10px",children:t.jsx(Re,{children:t.jsxs(p,{d:"column",gap:"2px",ai:"flex-start",children:[t.jsx(Me,{appearance:!1,pages:n,currentPage:s,setCurrentPage:N}),n[s].content]})})})};export{bt as default};
