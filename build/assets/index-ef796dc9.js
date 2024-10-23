import{s as f,K as D,cO as I,j as e,q as v,r as c,cM as W}from"./vendor-48260ac4.js";import{l as _,P as w,m as U,n as A,A as K,o as Z,p as y,s as Q,e as X,q as L,r as Y,t as tt,u as et,v as it,w as st,x as O,h as nt,g as lt}from"./student-c4d468d1.js";import{r as k,Z as b,q as h,x as G,p as $,a1 as ot,L as g,l as F,u as H,M as at,h as B,G as J,z as dt,a2 as rt,_ as ct,P as ut,a3 as mt,a0 as pt,a4 as xt,b as gt}from"./index-167ac109.js";const ft=f(k).withConfig({componentId:"sc-1qi5h46-0"})(["flex:1;"]),ht=f.div.withConfig({componentId:"sc-1qi5h46-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),St=D({and:[b.peTeacher,_.pendingRemoveVisit,(t,n)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacherFullName"},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(o,a)=>{const i=a,s=I(new Date(i.date),new Date)<-7,r=[w.AdminAccess,w.SuperUser].some(u=>{var d;return(d=t==null?void 0:t.permissions)==null?void 0:d.includes(u)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||r?e.jsx(h,{width:"100%",text:"Удалить",isActive:!n,onClick:()=>{U.removeVisit({id:i.id.toString()})}}):null}}]:[]]}],or:{name:"$peStudentVisitsColumns",sid:"bwdu0h"}}),jt=()=>{var o;const[t,n,l]=v([A.$selectedStudent,St,b.peTeacher]);return t?e.jsxs(ht,{children:[!!((o=l==null?void 0:l.permissions)!=null&&o.length)&&e.jsx(K,{studentGuid:t.studentGuid}),e.jsx(ft,{columns:n,data:t.visitsHistory})]}):null};var p=(t=>(t.Activist="Activist",t.Competition="Competition",t.ExternalFitness="ExternalFitness",t.GTO="GTO",t.InternalTeam="InternalTeam",t.OnlineWork="OnlineWork",t.Science="Science",t))(p||{});const z=[{id:p.Activist,title:"Активист"},{id:p.Competition,title:"Соревнование"},{id:p.GTO,title:"ГТО"},{id:p.InternalTeam,title:"Сборная"},{id:p.OnlineWork,title:"Работа в LMS"},{id:p.Science,title:"Научная работа"}],Ct=D({and:[b.peTeacher,Z.pendingRemoveAdditionPoints,(t,n)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"type",render:(o,a)=>{const i=z.find(({id:s})=>s===o);return(i==null?void 0:i.id)===p.Competition?a.comment:i==null?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five",render:(o,a)=>{const i=z.find(({id:s})=>s===a.workType);return(i==null?void 0:i.id)!==p.Competition?a.comment:null}},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(o,a)=>{const i=a,s=I(new Date(i.date),new Date)<-7,r=[w.AdminAccess,w.SuperUser].some(u=>{var d;return(d=t==null?void 0:t.permissions)==null?void 0:d.includes(u)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||r?e.jsx(h,{width:"100%",text:"Удалить",isActive:!n,onClick:()=>y.removeAdditionPoints({id:i.id.toString()})}):null}}]:[]]}],or:{name:"$additionalPointsColumns",sid:"cv7zhj"}}),bt=f.div.withConfig({componentId:"sc-xw90or-0"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),vt=()=>{const[t,n]=v([A.$selectedStudent,Q.$competitions]),[l,o]=c.useState(null),[a,i]=c.useState(new Date().toISOString()),[s,r]=c.useState(null),[u,d]=c.useState("0"),[S,P]=c.useState(""),R=()=>{y.addAdditionPoints({comment:(s==null?void 0:s.id)===p.Competition?(l==null?void 0:l.title)??"":S,date:F(a,"numeric"),points:Number(u),studentGuid:t==null?void 0:t.studentGuid,type:s==null?void 0:s.id})};c.useEffect(()=>{X.load()},[]),c.useEffect(()=>{(s==null?void 0:s.id)===p.Competition&&u==="0"&&d("5"),(s==null?void 0:s.id)===p.InternalTeam&&u==="0"&&d("50")},[s==null?void 0:s.id]);const T=new Date(a),E=T.getDay()!==0&&T.getDay()!==1,q=n.map(V=>({id:V,title:V}));return e.jsxs(bt,{children:[e.jsx(G,{width:"100%",size:"big",title:"Тип работ",items:z,selected:s,setSelected:r}),(s==null?void 0:s.id)===p.Competition&&e.jsx(G,{width:"100%",size:"big",title:"Соревнование",items:q,selected:l,setSelected:o}),e.jsx($,{alertMessage:E?"":"Не допустимая дата",size:"big",title:"Дата",setValue:i,value:a,type:"date"}),e.jsx($,{width:"100%",size:"big",title:"Количество баллов",setValue:d,value:u,type:"number",stepSize:1,minValue:1}),(s==null?void 0:s.id)!==p.Competition&&e.jsx(ot,{width:"100%",setValue:P,value:S,title:"Комментарий"}),e.jsx(h,{isActive:E,text:"Добавить",onClick:R,background:g.blue.main,textColor:g.white.main,width:"100%"})]})},Pt=f.div.withConfig({componentId:"sc-19i0iom-0"})(["display:flex;flex-direction:column;height:100%;gap:10px;"]),At=f(k).withConfig({componentId:"sc-19i0iom-1"})(["flex:1;"]),wt=()=>{var i;const[t,n,l]=v([A.$selectedStudent,Ct,b.peTeacher]),{open:o}=H(),a=()=>{o(e.jsx(vt,{}),"Дополнительные баллы")};return t?e.jsxs(Pt,{children:[!!((i=l==null?void 0:l.permissions)!=null&&i.length)&&e.jsx(h,{text:"Добавить дополнительные баллы",onClick:a,background:g.blue.main,textColor:g.white.main}),e.jsx(At,{columns:n,data:t.pointsHistory})]}):null};var x=(t=>(t.FlexionAndExtensionOfArms="FlexionAndExtensionOfArms",t.JumpingRopeJumps="JumpingRopeJumps",t.Jumps="Jumps",t.PullUps="PullUps",t.ShuttleRun="ShuttleRun",t.Squats="Squats",t.Tilts="Tilts",t.TorsoLifts="TorsoLifts",t.Other="Other",t))(x||{});const M=[{id:x.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:x.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:x.Jumps,title:"Прыжок в длину"},{id:x.PullUps,title:"Подтягивания(Вис)"},{id:x.ShuttleRun,title:"Челночный бег"},{id:x.Squats,title:"Приседания"},{id:x.Tilts,title:"Наклон"},{id:x.TorsoLifts,title:"Подъемы туловища"},{id:x.Other,title:"Другое"}],$t=f.div.withConfig({componentId:"sc-uipy8z-0"})(["display:flex;flex-direction:column;align-items:center;gap:10px;height:100%;"]),Gt=()=>{const t=v(A.$selectedStudent),[n,l]=c.useState(new Date().toISOString()),[o,a]=c.useState(null),[i,s]=c.useState("0"),[r,u]=c.useState(""),d=()=>{L.addRegulationPoints({date:F(n,"numeric"),points:Number(i),studentGuid:t==null?void 0:t.studentGuid,type:o==null?void 0:o.id,comment:(o==null?void 0:o.id)===x.Other?r??"":""})},S=new Date(n),P=S.getDay()!==0&&S.getDay()!==1;return e.jsxs($t,{children:[e.jsx(G,{width:"100%",size:"big",title:"Тип работ",items:M,selected:o,setSelected:a}),(o==null?void 0:o.id)===x.Other&&e.jsx($,{width:"100%",size:"big",title:"Комментарий",setValue:u,value:r}),e.jsx($,{alertMessage:P?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:n,type:"date",width:"100%"}),e.jsx($,{width:"100%",size:"big",title:"Количество баллов",setValue:s,value:i,type:"number",stepSize:1,minValue:1}),e.jsx(h,{text:"Добавить",isActive:P,onClick:d,background:g.blue.main,textColor:g.white.main,width:"100%"})]})},zt=f(k).withConfig({componentId:"sc-4mpo2k-0"})(["flex:1;"]),Dt=f.div.withConfig({componentId:"sc-4mpo2k-1"})(["display:flex;flex-direction:column;justify-content:center;gap:10px;"]),It=D({and:[b.peTeacher,Y.pendingRemoveRegulationPoints,(t,n)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"type",render:(o,a)=>{var i;return o===x.Other?a.comment:(i=M.find(({id:s})=>s===o))==null?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacherFullName"},{title:"Комментарий",field:"comment",priority:"five"},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(o,a)=>{const i=a,s=I(new Date(i.date),new Date)<-30,r=[w.AdminAccess,w.SuperUser].some(u=>{var d;return(d=t==null?void 0:t.permissions)==null?void 0:d.includes(u)});return i.teacherGuid===(t==null?void 0:t.id)&&!s||r?e.jsx(h,{width:"100%",text:"Удалить",isActive:!n,onClick:()=>L.removeRegulationPoints({id:i.id.toString()})}):null}}]:[]]}],or:{name:"$regularPointsColumns",sid:"levsbz"}}),kt=()=>{var r;const[t,n,l]=v([A.$selectedStudent,It,b.peTeacher]),{open:o}=H(),a=t==null?void 0:t.totalPoints,i=()=>{o(e.jsx(Gt,{}),"Добавить норматив")},s=Number(a)<20;return t?e.jsxs(Dt,{children:[!t&&s&&e.jsx(at,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!((r=l==null?void 0:l.permissions)!=null&&r.length)&&e.jsx(h,{text:"Добавить норматив",onClick:i,background:g.blue.main,textColor:g.white.main,isActive:!s}),e.jsx(zt,{data:t.standardsHistory,columns:n})]}):null},N=[{title:"Посещения",content:e.jsx(jt,{})},{title:"Нормативы ",content:e.jsx(kt,{})},{title:"Дополнительные баллы ",content:e.jsx(wt,{})}],j=({label:t,value:n})=>e.jsxs(Tt,{children:[e.jsx(B,{size:3,children:t}),e.jsx(Et,{children:n})]}),Tt=f.div.withConfig({componentId:"sc-bzc523-0"})(["display:flex;flex-direction:column;align-items:center;row-gap:4px;border-radius:4px;padding:12px;background-color:var(--theme-2);flex:1;"]),Et=f.span.withConfig({componentId:"sc-bzc523-1"})([""]),Vt=f.div.withConfig({componentId:"sc-1i85cbe-0"})(["margin-top:auto;width:100%;"]),C=[{id:"None",title:"-"},{id:"Basic",title:"Основная"},{id:"Preparatory",title:"Подготовительная"},{id:"SpecialA",title:"Специальная А"},{id:"SpecialB",title:"Специальная Б"},{id:"HealthLimitations",title:"ОВЗ"},{id:"Disabled",title:"Инвалид"}],Ot={None:C[0],Basic:C[1],Preparatory:C[2],SpecialA:C[3],SpecialB:C[4],HealthLimitations:C[5],Disabled:C[6]},Nt=({studentGuid:t,healthGroup:n})=>{const[l,o]=c.useState(Ot[n]),a=v(tt.pendingSetHealthGroup),i=()=>{et.setHealthGroup({studentGuid:t,healthGroup:l.id})};return e.jsxs(J,{gap:"4px",ai:"flex-start",children:[e.jsx(G,{isActive:!a,size:"big",width:"100%",title:"Группа здоровья",items:C,selected:l,setSelected:o}),e.jsx(Vt,{children:e.jsx(h,{isActive:!a,text:"Сменить группу здоровья",width:"100%",onClick:i,background:g.blue.main,textColor:g.white.main})})]})},yt=f.div.withConfig({componentId:"sc-jh5rb1-0"})(["margin-top:auto;width:100%;"]),m=[{id:"None",title:"-"},{id:"Basketball",title:"Баскетбол"},{id:"Volleyball",title:"Волейбол"},{id:"Aerobics",title:"Аэробика"},{id:"PowerLiftingAndCrossfit",title:"Пауэрлифтинг и кроссфит"},{id:"StreetLiftingAndArmLifting",title:"Стритлифтинг и армлифтинг"},{id:"GeneralPhysicalTraining",title:"ОФП"},{id:"GeneralPhysicalTrainingGym",title:"ОФП (тренажерный зал)"},{id:"FootRoom",title:"Футзал"},{id:"SMG",title:"СМГ"},{id:"TableTennis",title:"СМГ настольный теннис"},{id:"NordicWalking",title:"СМГ скандинавская ходьба"},{id:"InternalTeam",title:"Сборная"}],Lt={None:m[0],Basketball:m[1],Volleyball:m[2],Aerobics:m[3],PowerLiftingAndCrossfit:m[4],StreetLiftingAndArmLifting:m[5],GeneralPhysicalTraining:m[6],GeneralPhysicalTrainingGym:m[7],FootRoom:m[8],SMG:m[9],TableTennis:m[10],NordicWalking:m[11],InternalTeam:m[12]},Ft=({studentGuid:t,specialization:n})=>{const[l,o]=c.useState(Lt[n]),[a]=v([it.pendingSetSpecialization]),i=()=>{st.setSpecialization({studentGuid:t,specialization:l.id})};return e.jsxs(J,{gap:"4px",ai:"flex-start",children:[e.jsx(G,{isActive:!a,size:"big",width:"100%",title:"Специализация",items:m,selected:l,setSelected:o}),e.jsx(yt,{children:e.jsx(h,{isActive:!a,text:"Сменить специализацию",width:"100%",onClick:i,background:g.blue.main,textColor:g.white.main})})]})},Mt=()=>{var d,S,P;const{studentId:t}=W(),[n,{currentUser:l},o,a,i]=v([A.$selectedStudent,gt.user,b.isLoading,A.$loading,b.peTeacher]),s=(l==null?void 0:l.user_status)==="staff"?t:(l==null?void 0:l.guid)??"",[r,u]=c.useState(0);return c.useEffect(()=>(O.setCurrentStudentId(s),dt.load(),()=>O.resetStudentId()),[s]),!n&&s&&!o&&!a?e.jsx(rt,{text:"Нет данных"}):n?e.jsx(ct,{padding:"10px",children:e.jsxs(ut,{children:[e.jsx(B,{size:3,align:"left",children:n.fullName}),e.jsxs(mt,{children:[e.jsx(j,{label:"Группа",value:n.groupNumber}),e.jsx(j,{label:"Баллы",value:n.totalPoints.toString()}),e.jsx(j,{label:"Курс",value:n.course.toString()}),e.jsx(j,{label:"ЛМС",value:n.lmsPoints.toString()}),e.jsx(j,{label:"Куратор",value:((d=n.curator)==null?void 0:d.fullName)??"-"}),e.jsx(j,{label:"Группа здоровья",value:n.healthGroup==="None"?"-":`${nt[n.healthGroup]} (${((S=n.healthGroupTeacher)==null?void 0:S.fullName)??""})`}),e.jsx(j,{label:"Специализация",value:lt[n.specialization]}),e.jsx(j,{label:"Долг",value:n.hasDebt?"Есть":"Нет"})]}),!!((P=i==null?void 0:i.permissions)!=null&&P.length)&&e.jsxs(e.Fragment,{children:[e.jsx(Ft,{studentGuid:n.studentGuid,specialization:n.specialization}),e.jsx(Nt,{studentGuid:n.studentGuid,healthGroup:n.healthGroup})]}),e.jsx(pt,{appearance:!1,pages:N,currentPage:r,setCurrentPage:u}),e.jsx(xt,{children:N[r].content})]})}):null};export{Mt as default};
