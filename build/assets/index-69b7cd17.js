import{s as x,m as h,bV as $,j as e,Z as j,r as m,bW as J}from"./vendor-f1fdae2f.js";import{m as g,n as H,o as W,p as v,A as B,q as k,r as q,s as X,e as K,t as _,u as Q,h as z,v as N}from"./ui-ede0464f.js";import{j as D,B as S,y as A,i as w,g as P,z as Z,E as f,l as G,u as R,M as Y,T as L,o as tt,v as et,w as st,x as it,$ as nt}from"./index-4e411d46.js";var r=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(r||{});const lt=x(D)`
    flex: 1;
`,ot=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,dt=h(A.peTeacher,W.pendingRemoveVisit,(t,o)=>{var n;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:i=>i.fullName},...(n=t==null?void 0:t.permissions)!=null&&n.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(i,d)=>{const l=d,s=$(new Date(l.date),new Date)<-7,a=[g.AdminAccess,g.SuperUser].some(p=>{var u;return(u=t==null?void 0:t.permissions)==null?void 0:u.includes(p)});return l.teacherGuid===(t==null?void 0:t.id)&&!s||a?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{H.removeVisit({id:l.id.toString()})}}):null}}]:[]]}),at=()=>{var i;const[t,o,n]=j([v.$selectedStudent,dt,A.peTeacher]);return t?e.jsxs(ot,{children:[!!((i=n==null?void 0:n.permissions)!=null&&i.length)&&e.jsx(B,{studentGuid:t.studentGuid}),e.jsx(lt,{columns:o,data:t.visitsHistory})]}):null},M=[{id:r.Activist,title:"Активист"},{id:r.ExternalFitness,title:"Внешний фитнес"},{id:r.Competition,title:"Соревнование"},{id:r.GTO,title:"ГТО"},{id:r.InternalTeam,title:"Сборная"},{id:r.OnlineWork,title:"Работа в LMS"},{id:r.Science,title:"Научная работа"}],rt=h(A.peTeacher,q.pendingRemoveAdditionPoints,(t,o)=>{var n;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:(i,d)=>{const l=M.find(({id:s})=>s===i);return(l==null?void 0:l.id)===r.Competition?d.comment:l==null?void 0:l.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:i=>i.fullName},...(n=t==null?void 0:t.permissions)!=null&&n.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(i,d)=>{const l=d,s=$(new Date(l.date),new Date)<-7,a=[g.AdminAccess,g.SuperUser].some(p=>{var u;return(u=t==null?void 0:t.permissions)==null?void 0:u.includes(p)});return l.teacherGuid===(t==null?void 0:t.id)&&!s||a?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>k.removeAdditionPoints({id:l.id.toString()})}):null}}]:[]]}),ut=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,ct=()=>{const[t,o]=j([v.$selectedStudent,X.$competitions]),[n,i]=m.useState(null),[d,l]=m.useState(new Date().toISOString()),[s,a]=m.useState(null),[p,u]=m.useState("0"),[C,b]=m.useState(""),y=()=>{k.addAdditionPoints({comment:(s==null?void 0:s.id)===r.Competition?(n==null?void 0:n.title)??"":C,date:G(d,"numeric"),pointsAmount:Number(p),studentGuid:t==null?void 0:t.studentGuid,workType:s==null?void 0:s.id})};m.useEffect(()=>{K.load()},[]),m.useEffect(()=>{(s==null?void 0:s.id)===r.Competition&&p==="0"&&u("5"),(s==null?void 0:s.id)===r.InternalTeam&&p==="0"&&u("50")},[s==null?void 0:s.id]);const T=new Date(d),O=T.getDay()!==0&&T.getDay()!==1,F=o.map(I=>({id:I,title:I}));return e.jsxs(ut,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:M,selected:s,setSelected:a}),(s==null?void 0:s.id)===r.Competition&&e.jsx(w,{width:"100%",size:"big",title:"Соревнование",items:F,selected:n,setSelected:i}),e.jsx(P,{alertMessage:O?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:d,type:"date"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:u,value:p,type:"number",stepSize:1,minValue:1}),(s==null?void 0:s.id)!==r.Competition&&e.jsx(Z,{width:"100%",setValue:b,value:C,title:"Комментарий"}),e.jsx(S,{isActive:O,text:"Добавить",onClick:y,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},mt=x.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,xt=x(D)`
    flex: 1;
`,pt=()=>{var l;const[t,o,n]=j([v.$selectedStudent,rt,A.peTeacher]),{open:i}=R(),d=()=>{i(e.jsx(ct,{}),"Дополнительные баллы")};return t?e.jsxs(mt,{children:[!!((l=n==null?void 0:n.permissions)!=null&&l.length)&&e.jsx(S,{text:"Добавить дополнительные баллы",onClick:d,background:f.blue.main,textColor:f.white.main}),e.jsx(xt,{columns:o,data:t.pointsHistory})]}):null};var c=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t.Other="OTHER",t))(c||{});const U=[{id:c.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:c.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:c.Jumps,title:"Прыжки"},{id:c.PullUps,title:"Подтягивания"},{id:c.ShuttleRun,title:"Челночный бег"},{id:c.Squats,title:"Приседания"},{id:c.Tilts,title:"Наклон"},{id:c.TorsoLifts,title:"Подъемы туловища"},{id:c.Other,title:"Другое"}],ft=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
`,St=()=>{const t=j(v.$selectedStudent),[o,n]=m.useState(new Date().toISOString()),[i,d]=m.useState(null),[l,s]=m.useState("0"),[a,p]=m.useState(""),u=()=>{_.addRegulationPoints({date:G(o,"numeric"),pointsAmount:Number(l),studentGuid:t==null?void 0:t.studentGuid,standardType:i==null?void 0:i.id,isOverride:!1,comment:(i==null?void 0:i.id)===c.Other?a??"":""})},C=new Date(o),b=C.getDay()!==0&&C.getDay()!==1;return e.jsxs(ft,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:U,selected:i,setSelected:d}),(i==null?void 0:i.id)===c.Other&&e.jsx(P,{width:"100%",size:"big",title:"Комментарий",setValue:p,value:a}),e.jsx(P,{alertMessage:b?"":"Не допустимая дата",size:"big",title:"Дата",setValue:n,value:o,type:"date",width:"100%"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:s,value:l,type:"number",stepSize:1,minValue:1}),e.jsx(S,{text:"Добавить",isActive:b,onClick:u,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},gt=x(D)`
    flex: 1;
`,jt=x.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,vt=h(A.peTeacher,Q.pendingRemoveRegulationPoints,(t,o)=>{var n;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:(i,d)=>{var l;return i===c.Other?d.comment:(l=U.find(({id:s})=>s===i))==null?void 0:l.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:i=>i.fullName},{title:"Комментарий",field:"comment",priority:"five"},...(n=t==null?void 0:t.permissions)!=null&&n.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(i,d)=>{const l=d,s=$(new Date(l.date),new Date)<-30,a=[g.AdminAccess,g.SuperUser].some(p=>{var u;return(u=t==null?void 0:t.permissions)==null?void 0:u.includes(p)});return l.teacherGuid===(t==null?void 0:t.id)&&!s||a?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>_.removeRegulationPoints({id:l.id.toString()})}):null}}]:[]]}),At=()=>{var a;const[t,o,n]=j([v.$selectedStudent,vt,A.peTeacher]),{open:i}=R(),d=!!t&&z(t),l=()=>{i(e.jsx(St,{}),"Добавить норматив")},s=d<20;return t?e.jsxs(jt,{children:[s&&e.jsx(Y,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!((a=n==null?void 0:n.permissions)!=null&&a.length)&&e.jsx(S,{text:"Добавить норматив",onClick:l,background:f.blue.main,textColor:f.white.main,isActive:!s}),e.jsx(gt,{data:t.standardsHistory,columns:o})]}):null},V=[{title:"Посещения",content:e.jsx(at,{})},{title:"Нормативы ",content:e.jsx(At,{})},{title:"Дополнительные баллы ",content:e.jsx(pt,{})}];x.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`;const Ct=x.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,Pt=x.div`
    width: 100%;
`,E=({label:t,value:o})=>e.jsxs(bt,{children:[e.jsx(L,{size:3,children:t}),e.jsx(Et,{children:o})]}),bt=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,Et=x.span``,Dt=()=>{const{studentId:t}=J(),[o,{currentUser:n}]=j([v.$selectedStudent,nt]),i=(n==null?void 0:n.user_status)==="staff"?t:(n==null?void 0:n.guid)??"",[d,l]=m.useState(0);return m.useEffect(()=>(N.setCurrentStudentId(i),tt.load(),()=>N.resetStudentId()),[i]),o?e.jsx(et,{padding:"10px",children:e.jsxs(st,{children:[e.jsx(L,{size:3,align:"left",children:o.fullName}),e.jsxs(Ct,{children:[e.jsx(E,{label:"Группа",value:o.groupNumber}),e.jsx(E,{label:"Баллы",value:z(o).toString()}),e.jsx(E,{label:"Курс",value:o.course.toString()}),e.jsx(E,{label:"ЛМС",value:o.pointsHistory.filter(s=>s.workType===r.OnlineWork).reduce((s,a)=>s+a.points,0).toString()})]}),e.jsx(it,{appearance:!1,pages:V,currentPage:d,setCurrentPage:l}),e.jsx(Pt,{children:V[d].content})]})}):null};export{Dt as default};
