import{s as x,m as h,bV as $,j as e,Z as j,r as m,bW as J}from"./vendor-f1fdae2f.js";import{m as g,n as H,o as W,p as v,A as B,q as k,r as q,s as X,e as K,t as _,u as Q,h as z,v as N}from"./ui-e0f2b0c8.js";import{j as D,B as S,y as A,i as w,g as P,z as Z,E as f,l as G,u as R,M as Y,T as L,o as tt,G as et,v as st,w as it,x as nt,$ as lt}from"./index-6982b600.js";var a=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(a||{});const ot=x(D)`
    flex: 1;
`,dt=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,rt=h(A.peTeacher,W.pendingRemoveVisit,(t,o)=>{var n;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:i=>i.fullName},...(n=t==null?void 0:t.permissions)!=null&&n.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(i,d)=>{const l=d,s=$(new Date(l.date),new Date)<-7,r=[g.AdminAccess,g.SuperUser].some(p=>{var u;return(u=t==null?void 0:t.permissions)==null?void 0:u.includes(p)});return l.teacherGuid===(t==null?void 0:t.id)&&!s||r?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{H.removeVisit({id:l.id.toString()})}}):null}}]:[]]}),at=()=>{var i;const[t,o,n]=j([v.$selectedStudent,rt,A.peTeacher]);return t?e.jsxs(dt,{children:[!!((i=n==null?void 0:n.permissions)!=null&&i.length)&&e.jsx(B,{studentGuid:t.studentGuid}),e.jsx(ot,{columns:o,data:t.visitsHistory})]}):null},M=[{id:a.Activist,title:"Активист"},{id:a.ExternalFitness,title:"Внешний фитнес"},{id:a.Competition,title:"Соревнование"},{id:a.GTO,title:"ГТО"},{id:a.InternalTeam,title:"Сборная"},{id:a.OnlineWork,title:"Работа в LMS"},{id:a.Science,title:"Научная работа"}],ut=h(A.peTeacher,q.pendingRemoveAdditionPoints,(t,o)=>{var n;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:(i,d)=>{const l=M.find(({id:s})=>s===i);return(l==null?void 0:l.id)===a.Competition?d.comment:l==null?void 0:l.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:i=>i.fullName},...(n=t==null?void 0:t.permissions)!=null&&n.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(i,d)=>{const l=d,s=$(new Date(l.date),new Date)<-7,r=[g.AdminAccess,g.SuperUser].some(p=>{var u;return(u=t==null?void 0:t.permissions)==null?void 0:u.includes(p)});return l.teacherGuid===(t==null?void 0:t.id)&&!s||r?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>k.removeAdditionPoints({id:l.id.toString()})}):null}}]:[]]}),ct=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,mt=()=>{const[t,o]=j([v.$selectedStudent,X.$competitions]),[n,i]=m.useState(null),[d,l]=m.useState(new Date().toISOString()),[s,r]=m.useState(null),[p,u]=m.useState("0"),[C,E]=m.useState(""),y=()=>{k.addAdditionPoints({comment:(s==null?void 0:s.id)===a.Competition?(n==null?void 0:n.title)??"":C,date:G(d,"numeric"),pointsAmount:Number(p),studentGuid:t==null?void 0:t.studentGuid,workType:s==null?void 0:s.id})};m.useEffect(()=>{K.load()},[]),m.useEffect(()=>{(s==null?void 0:s.id)===a.Competition&&p==="0"&&u("5"),(s==null?void 0:s.id)===a.InternalTeam&&p==="0"&&u("50")},[s==null?void 0:s.id]);const T=new Date(d),O=T.getDay()!==0&&T.getDay()!==1,F=o.map(I=>({id:I,title:I}));return e.jsxs(ct,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:M,selected:s,setSelected:r}),(s==null?void 0:s.id)===a.Competition&&e.jsx(w,{width:"100%",size:"big",title:"Соревнование",items:F,selected:n,setSelected:i}),e.jsx(P,{alertMessage:O?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:d,type:"date"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:u,value:p,type:"number",stepSize:1,minValue:1}),(s==null?void 0:s.id)!==a.Competition&&e.jsx(Z,{width:"100%",setValue:E,value:C,title:"Комментарий"}),e.jsx(S,{isActive:O,text:"Добавить",onClick:y,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},xt=x.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,pt=x(D)`
    flex: 1;
`,ft=()=>{var l;const[t,o,n]=j([v.$selectedStudent,ut,A.peTeacher]),{open:i}=R(),d=()=>{i(e.jsx(mt,{}),"Дополнительные баллы")};return t?e.jsxs(xt,{children:[!!((l=n==null?void 0:n.permissions)!=null&&l.length)&&e.jsx(S,{text:"Добавить дополнительные баллы",onClick:d,background:f.blue.main,textColor:f.white.main}),e.jsx(pt,{columns:o,data:t.pointsHistory})]}):null};var c=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t.Other="OTHER",t))(c||{});const U=[{id:c.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:c.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:c.Jumps,title:"Прыжки"},{id:c.PullUps,title:"Подтягивания"},{id:c.ShuttleRun,title:"Челночный бег"},{id:c.Squats,title:"Приседания"},{id:c.Tilts,title:"Наклон"},{id:c.TorsoLifts,title:"Подъемы туловища"},{id:c.Other,title:"Другое"}],St=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
`,gt=()=>{const t=j(v.$selectedStudent),[o,n]=m.useState(new Date().toISOString()),[i,d]=m.useState(null),[l,s]=m.useState("0"),[r,p]=m.useState(""),u=()=>{_.addRegulationPoints({date:G(o,"numeric"),pointsAmount:Number(l),studentGuid:t==null?void 0:t.studentGuid,standardType:i==null?void 0:i.id,isOverride:!1,comment:(i==null?void 0:i.id)===c.Other?r??"":""})},C=new Date(o),E=C.getDay()!==0&&C.getDay()!==1;return e.jsxs(St,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:U,selected:i,setSelected:d}),(i==null?void 0:i.id)===c.Other&&e.jsx(P,{width:"100%",size:"big",title:"Комментарий",setValue:p,value:r}),e.jsx(P,{alertMessage:E?"":"Не допустимая дата",size:"big",title:"Дата",setValue:n,value:o,type:"date",width:"100%"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:s,value:l,type:"number",stepSize:1,minValue:1}),e.jsx(S,{text:"Добавить",isActive:E,onClick:u,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},jt=x(D)`
    flex: 1;
`,vt=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,At=h(A.peTeacher,Q.pendingRemoveRegulationPoints,(t,o)=>{var n;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:(i,d)=>{var l;return i===c.Other?d.comment:(l=U.find(({id:s})=>s===i))==null?void 0:l.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:i=>i.fullName},{title:"Комментарий",field:"comment",priority:"five"},...(n=t==null?void 0:t.permissions)!=null&&n.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(i,d)=>{const l=d,s=$(new Date(l.date),new Date)<-30,r=[g.AdminAccess,g.SuperUser].some(p=>{var u;return(u=t==null?void 0:t.permissions)==null?void 0:u.includes(p)});return l.teacherGuid===(t==null?void 0:t.id)&&!s||r?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>_.removeRegulationPoints({id:l.id.toString()})}):null}}]:[]]}),Ct=()=>{var r;const[t,o,n]=j([v.$selectedStudent,At,A.peTeacher]),{open:i}=R(),d=!!t&&z(t),l=()=>{i(e.jsx(gt,{}),"Добавить норматив")},s=d<20;return t?e.jsxs(vt,{children:[s&&e.jsx(Y,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!((r=n==null?void 0:n.permissions)!=null&&r.length)&&e.jsx(S,{text:"Добавить норматив",onClick:l,background:f.blue.main,textColor:f.white.main,isActive:!s}),e.jsx(jt,{data:t.standardsHistory,columns:o})]}):null},V=[{title:"Посещения",content:e.jsx(at,{})},{title:"Нормативы ",content:e.jsx(Ct,{})},{title:"Дополнительные баллы ",content:e.jsx(ft,{})}];x.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`;const Pt=x.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,Et=x.div`
    width: 100%;
`,b=({label:t,value:o})=>e.jsxs(bt,{children:[e.jsx(L,{size:3,children:t}),e.jsx(wt,{children:o})]}),bt=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,wt=x.span``,Tt=()=>{const{studentId:t}=J(),[o,{currentUser:n}]=j([v.$selectedStudent,lt]),i=(n==null?void 0:n.user_status)==="staff"?t:(n==null?void 0:n.guid)??"",[d,l]=m.useState(0);return m.useEffect(()=>(N.setCurrentStudentId(i),tt.load(),()=>N.resetStudentId()),[i]),i&&!o?e.jsx(et,{text:"Нет данных"}):o?e.jsx(st,{padding:"10px",children:e.jsxs(it,{children:[e.jsx(L,{size:3,align:"left",children:o.fullName}),e.jsxs(Pt,{children:[e.jsx(b,{label:"Группа",value:o.groupNumber}),e.jsx(b,{label:"Баллы",value:z(o).toString()}),e.jsx(b,{label:"Курс",value:o.course.toString()}),e.jsx(b,{label:"ЛМС",value:o.pointsHistory.filter(s=>s.workType===a.OnlineWork).reduce((s,r)=>s+r.points,0).toString()})]}),e.jsx(nt,{appearance:!1,pages:V,currentPage:d,setCurrentPage:l}),e.jsx(Et,{children:V[d].content})]})}):null};export{Tt as default};
