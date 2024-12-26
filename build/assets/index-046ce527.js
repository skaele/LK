import{s as x,K as I,cP as E,j as t,n as b,r as c,cN as M}from"./vendor-91dd51cf.js";import{l as W,P as $,m as q,n as w,A as K,o as Z,p as O,s as Q,e as X,q as L,r as Y,t as ee,u as te,v as ie,w as ne,x as _,h as se,g as le}from"./student-fe03a3a8.js";import{r as V,Z as C,q as g,x as D,p as G,a1 as oe,L as h,l as F,u as H,M as de,h as B,G as J,z as ae,a2 as re,_ as ue,P as ce,a3 as pe,a0 as me,a4 as ve,b as he}from"./index-2caaee2c.js";const xe=x(V).withConfig({componentId:"sc-1qi5h46-0"})(["flex:1;"]),ge=x.div.withConfig({componentId:"sc-1qi5h46-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),fe=I({and:[C.peTeacher,W.pendingRemoveVisit,(e,o)=>{var d;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacherFullName"},...e!=null&&(d=e.permissions)!==null&&d!==void 0&&d.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(l,i)=>{const n=i,s=E(new Date(n.date),new Date)<-7,r=[$.AdminAccess,$.SuperUser].some(u=>{var a;return e==null||(a=e.permissions)===null||a===void 0?void 0:a.includes(u)});return n.teacherGuid===(e==null?void 0:e.id)&&!s||r?t.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{q.removeVisit({id:n.id.toString()})}}):null}}]:[]]}],or:{name:"$peStudentVisitsColumns",sid:"bwdu0h"}}),Se=()=>{var e;const[o,d,l]=b([w.$selectedStudent,fe,C.peTeacher]);return o?t.jsxs(ge,{children:[!!(l!=null&&(e=l.permissions)!==null&&e!==void 0&&e.length)&&t.jsx(K,{studentGuid:o.studentGuid}),t.jsx(xe,{columns:d,data:o.visitsHistory})]}):null};var m=(e=>(e.Activist="Activist",e.Competition="Competition",e.ExternalFitness="ExternalFitness",e.GTO="GTO",e.InternalTeam="InternalTeam",e.OnlineWork="OnlineWork",e.Science="Science",e))(m||{});const z=[{id:m.Activist,title:"Активист"},{id:m.Competition,title:"Соревнование"},{id:m.GTO,title:"ГТО"},{id:m.InternalTeam,title:"Сборная"},{id:m.OnlineWork,title:"Работа в LMS"},{id:m.Science,title:"Научная работа"}],je=I({and:[C.peTeacher,Z.pendingRemoveAdditionPoints,(e,o)=>{var d;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"type",render:(l,i)=>{const n=z.find(({id:s})=>s===l);return(n==null?void 0:n.id)===m.Competition?i.comment:n==null?void 0:n.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five",render:(l,i)=>{const n=z.find(({id:s})=>s===i.workType);return(n==null?void 0:n.id)!==m.Competition?i.comment:null}},...e!=null&&(d=e.permissions)!==null&&d!==void 0&&d.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(l,i)=>{const n=i,s=E(new Date(n.date),new Date)<-7,r=[$.AdminAccess,$.SuperUser].some(u=>{var a;return e==null||(a=e.permissions)===null||a===void 0?void 0:a.includes(u)});return n.teacherGuid===(e==null?void 0:e.id)&&!s||r?t.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>O.removeAdditionPoints({id:n.id.toString()})}):null}}]:[]]}],or:{name:"$additionalPointsColumns",sid:"cv7zhj"}}),Ce=x.div.withConfig({componentId:"sc-xw90or-0"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),be=()=>{const[e,o]=b([w.$selectedStudent,Q.$competitions]),[d,l]=c.useState(null),[i,n]=c.useState(new Date().toISOString()),[s,r]=c.useState(null),[u,a]=c.useState("0"),[f,P]=c.useState(""),k=()=>{var y;O.addAdditionPoints({comment:(s==null?void 0:s.id)===m.Competition?(y=d==null?void 0:d.title)!=null?y:"":f,date:F(i,"numeric"),points:Number(u),studentGuid:e==null?void 0:e.studentGuid,type:s==null?void 0:s.id})};c.useEffect(()=>{X.load()},[]),c.useEffect(()=>{(s==null?void 0:s.id)===m.Competition&&u==="0"&&a("5"),(s==null?void 0:s.id)===m.InternalTeam&&u==="0"&&a("50")},[s==null?void 0:s.id]);const A=new Date(i),T=A.getDay()!==0&&A.getDay()!==1,U=o.map(y=>({id:y,title:y}));return t.jsxs(Ce,{children:[t.jsx(D,{width:"100%",size:"big",title:"Тип работ",items:z,selected:s,setSelected:r}),(s==null?void 0:s.id)===m.Competition&&t.jsx(D,{width:"100%",size:"big",title:"Соревнование",items:U,selected:d,setSelected:l}),t.jsx(G,{alertMessage:T?"":"Не допустимая дата",size:"big",title:"Дата",setValue:n,value:i,type:"date"}),t.jsx(G,{width:"100%",size:"big",title:"Количество баллов",setValue:a,value:u,type:"number",stepSize:1,minValue:1}),(s==null?void 0:s.id)!==m.Competition&&t.jsx(oe,{width:"100%",setValue:P,value:f,title:"Комментарий"}),t.jsx(g,{isActive:T,text:"Добавить",onClick:k,background:h.blue.main,textColor:h.white.main,width:"100%"})]})},we=x.div.withConfig({componentId:"sc-19i0iom-0"})(["display:flex;flex-direction:column;height:100%;gap:10px;"]),Pe=x(V).withConfig({componentId:"sc-19i0iom-1"})(["flex:1;"]),$e=()=>{var e;const[o,d,l]=b([w.$selectedStudent,je,C.peTeacher]),{open:i}=H(),n=()=>{i(t.jsx(be,{}),"Дополнительные баллы")};return o?t.jsxs(we,{children:[!!(l!=null&&(e=l.permissions)!==null&&e!==void 0&&e.length)&&t.jsx(g,{text:"Добавить дополнительные баллы",onClick:n,background:h.blue.main,textColor:h.white.main}),t.jsx(Pe,{columns:d,data:o.pointsHistory})]}):null};var v=(e=>(e.FlexionAndExtensionOfArms="FlexionAndExtensionOfArms",e.JumpingRopeJumps="JumpingRopeJumps",e.Jumps="Jumps",e.PullUps="PullUps",e.ShuttleRun="ShuttleRun",e.Squats="Squats",e.Tilts="Tilts",e.TorsoLifts="TorsoLifts",e.Other="Other",e))(v||{});const R=[{id:v.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:v.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:v.Jumps,title:"Прыжок в длину"},{id:v.PullUps,title:"Подтягивания(Вис)"},{id:v.ShuttleRun,title:"Челночный бег"},{id:v.Squats,title:"Приседания"},{id:v.Tilts,title:"Наклон"},{id:v.TorsoLifts,title:"Подъемы туловища"},{id:v.Other,title:"Другое"}],Ae=x.div.withConfig({componentId:"sc-uipy8z-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;height:100%;"]),Te=()=>{const e=b(w.$selectedStudent),[o,d]=c.useState(new Date().toISOString()),[l,i]=c.useState(null),[n,s]=c.useState("0"),[r,u]=c.useState(""),a=()=>{L.addRegulationPoints({date:F(o,"numeric"),points:Number(n),studentGuid:e==null?void 0:e.studentGuid,type:l==null?void 0:l.id,comment:(l==null?void 0:l.id)===v.Other&&r!=null?r:""})},f=new Date(o),P=f.getDay()!==0&&f.getDay()!==1;return t.jsxs(Ae,{children:[t.jsx(D,{width:"100%",size:"big",title:"Тип работ",items:R,selected:l,setSelected:i}),(l==null?void 0:l.id)===v.Other&&t.jsx(G,{width:"100%",size:"big",title:"Комментарий",setValue:u,value:r}),t.jsx(G,{alertMessage:P?"":"Не допустимая дата",size:"big",title:"Дата",setValue:d,value:o,type:"date",width:"100%"}),t.jsx(G,{width:"100%",size:"big",title:"Количество баллов",setValue:s,value:n,type:"number",stepSize:1,minValue:1}),t.jsx(g,{text:"Добавить",isActive:P,onClick:a,background:h.blue.main,textColor:h.white.main,width:"100%"})]})},ye=x(V).withConfig({componentId:"sc-4mpo2k-0"})(["flex:1;"]),Ge=x.div.withConfig({componentId:"sc-4mpo2k-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),De=I({and:[C.peTeacher,Y.pendingRemoveRegulationPoints,(e,o)=>{var d;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"type",render:(l,i)=>{var n;return l===v.Other?i.comment:(n=R.find(({id:s})=>s===l))===null||n===void 0?void 0:n.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five"},...e!=null&&(d=e.permissions)!==null&&d!==void 0&&d.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(l,i)=>{const n=i,s=E(new Date(n.date),new Date)<-30,r=[$.AdminAccess,$.SuperUser].some(u=>{var a;return e==null||(a=e.permissions)===null||a===void 0?void 0:a.includes(u)});return n.teacherGuid===(e==null?void 0:e.id)&&!s||r?t.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>L.removeRegulationPoints({id:n.id.toString()})}):null}}]:[]]}],or:{name:"$regularPointsColumns",sid:"levsbz"}}),ke=()=>{var e;const[o,d,l]=b([w.$selectedStudent,De,C.peTeacher]),{open:i}=H(),n=o==null?void 0:o.totalPoints,s=()=>{i(t.jsx(Te,{}),"Добавить норматив")},r=Number(n)<20;return o?t.jsxs(Ge,{children:[!o&&r&&t.jsx(de,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!(l!=null&&(e=l.permissions)!==null&&e!==void 0&&e.length)&&t.jsx(g,{text:"Добавить норматив",onClick:s,background:h.blue.main,textColor:h.white.main,isActive:!r}),t.jsx(ye,{data:o.standardsHistory,columns:d})]}):null},N=[{title:"Посещения",content:t.jsx(Se,{})},{title:"Нормативы ",content:t.jsx(ke,{})},{title:"Дополнительные баллы ",content:t.jsx($e,{})}],S=({label:e,value:o})=>t.jsxs(ze,{children:[t.jsx(B,{size:3,children:e}),t.jsx(Ie,{children:o})]}),ze=x.div.withConfig({componentId:"sc-bzc523-0"})(["display:flex;flex-direction:column;align-items:center;row-gap:4px;border-radius:4px;padding:12px;background-color:var(--theme-2);flex:1;"]),Ie=x.span.withConfig({componentId:"sc-bzc523-1"})([""]),Ee=x.div.withConfig({componentId:"sc-1i85cbe-0"})(["margin-top:auto;width:100%;"]),j=[{id:"None",title:"-"},{id:"Basic",title:"Основная"},{id:"Preparatory",title:"Подготовительная"},{id:"SpecialA",title:"Специальная А"},{id:"SpecialB",title:"Специальная Б"},{id:"HealthLimitations",title:"ОВЗ"},{id:"Disabled",title:"Инвалид"}],Ve={None:j[0],Basic:j[1],Preparatory:j[2],SpecialA:j[3],SpecialB:j[4],HealthLimitations:j[5],Disabled:j[6]},_e=({studentGuid:e,healthGroup:o})=>{const[d,l]=c.useState(Ve[o]),i=b(ee.pendingSetHealthGroup),n=()=>{te.setHealthGroup({studentGuid:e,healthGroup:d.id})};return t.jsxs(J,{gap:"4px",ai:"flex-start",children:[t.jsx(D,{isActive:!i,size:"big",width:"100%",title:"Группа здоровья",items:j,selected:d,setSelected:l}),t.jsx(Ee,{children:t.jsx(g,{isActive:!i,text:"Сменить группу здоровья",width:"100%",onClick:n,background:h.blue.main,textColor:h.white.main})})]})},Ne=x.div.withConfig({componentId:"sc-jh5rb1-0"})(["margin-top:auto;width:100%;"]),p=[{id:"None",title:"-"},{id:"Basketball",title:"Баскетбол"},{id:"Volleyball",title:"Волейбол"},{id:"Aerobics",title:"Аэробика"},{id:"PowerLiftingAndCrossfit",title:"Пауэрлифтинг и кроссфит"},{id:"StreetLiftingAndArmLifting",title:"Стритлифтинг и армлифтинг"},{id:"GeneralPhysicalTraining",title:"ОФП"},{id:"GeneralPhysicalTrainingGym",title:"ОФП (тренажерный зал)"},{id:"FootRoom",title:"Футзал"},{id:"SMG",title:"СМГ"},{id:"TableTennis",title:"СМГ настольный теннис"},{id:"NordicWalking",title:"СМГ скандинавская ходьба"},{id:"InternalTeam",title:"Сборная"}],Oe={None:p[0],Basketball:p[1],Volleyball:p[2],Aerobics:p[3],PowerLiftingAndCrossfit:p[4],StreetLiftingAndArmLifting:p[5],GeneralPhysicalTraining:p[6],GeneralPhysicalTrainingGym:p[7],FootRoom:p[8],SMG:p[9],TableTennis:p[10],NordicWalking:p[11],InternalTeam:p[12]},Le=({studentGuid:e,specialization:o})=>{const[d,l]=c.useState(Oe[o]),[i]=b([ie.pendingSetSpecialization]),n=()=>{ne.setSpecialization({studentGuid:e,specialization:d.id})};return t.jsxs(J,{gap:"4px",ai:"flex-start",children:[t.jsx(D,{isActive:!i,size:"big",width:"100%",title:"Специализация",items:p,selected:d,setSelected:l}),t.jsx(Ne,{children:t.jsx(g,{isActive:!i,text:"Сменить специализацию",width:"100%",onClick:n,background:h.blue.main,textColor:h.white.main})})]})},Je=()=>{var k,A,T;var e,o,d;const{studentId:l}=M(),[i,{currentUser:n},s,r,u]=b([w.$selectedStudent,he.user,C.isLoading,w.$loading,C.peTeacher]),a=(n==null?void 0:n.user_status)==="staff"?l:(k=n==null?void 0:n.guid)!=null?k:"",[f,P]=c.useState(0);return c.useEffect(()=>(_.setCurrentStudentId(a),ae.load(),()=>_.resetStudentId()),[a]),!i&&a&&!s&&!r?t.jsx(re,{text:"Нет данных"}):i?t.jsx(ue,{padding:"10px",children:t.jsxs(ce,{children:[t.jsx(B,{size:3,align:"left",children:i.fullName}),t.jsxs(pe,{children:[t.jsx(S,{label:"Группа",value:i.groupNumber}),t.jsx(S,{label:"Баллы",value:i.totalPoints.toString()}),t.jsx(S,{label:"Курс",value:i.course.toString()}),t.jsx(S,{label:"ЛМС",value:i.lmsPoints.toString()}),t.jsx(S,{label:"Куратор",value:(A=(e=i.curator)===null||e===void 0?void 0:e.fullName)!=null?A:"-"}),t.jsx(S,{label:"Группа здоровья",value:i.healthGroup==="None"?"-":`${se[i.healthGroup]} (${(T=(o=i.healthGroupTeacher)===null||o===void 0?void 0:o.fullName)!=null?T:""})`}),t.jsx(S,{label:"Специализация",value:le[i.specialization]}),t.jsx(S,{label:"Долг",value:i.hasDebt?"Есть":"Нет"})]}),!!(u!=null&&(d=u.permissions)!==null&&d!==void 0&&d.length)&&t.jsxs(t.Fragment,{children:[t.jsx(Le,{studentGuid:i.studentGuid,specialization:i.specialization}),t.jsx(_e,{studentGuid:i.studentGuid,healthGroup:i.healthGroup})]}),t.jsx(me,{appearance:!1,pages:N,currentPage:f,setCurrentPage:P}),t.jsx(ve,{children:N[f].content})]})}):null};export{Je as default};
