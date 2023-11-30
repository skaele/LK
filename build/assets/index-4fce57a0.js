import{s as p,m as h,bV as $,j as e,Z as A,r as x,bW as J}from"./vendor-f1fdae2f.js";import{m as v,n as H,o as W,p as S,A as B,q as k,r as q,s as X,e as K,t as _,u as Q,h as L,v as N}from"./ui-83be83ef.js";import{j as D,B as g,y as j,i as w,g as P,z as Z,E as f,l as z,u as G,M as Y,T as R,o as tt,G as et,v as it,w as st,x as nt,$ as lt}from"./index-415ac6e5.js";var c=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(c||{});const ot=p(D)`
    flex: 1;
`,dt=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,at=h(j.peTeacher,W.pendingRemoveVisit,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:s=>s.fullName},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(s,d)=>{const n=d,i=$(new Date(n.date),new Date)<-7,u=[v.AdminAccess,v.SuperUser].some(a=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(a)});return n.teacherGuid===(t==null?void 0:t.id)&&!i||u?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{H.removeVisit({id:n.id.toString()})}}):null}}]:[]]}),rt=()=>{var s;const[t,o,l]=A([S.$selectedStudent,at,j.peTeacher]);return t?e.jsxs(dt,{children:[!!((s=l==null?void 0:l.permissions)!=null&&s.length)&&e.jsx(B,{studentGuid:t.studentGuid}),e.jsx(ot,{columns:o,data:t.visitsHistory})]}):null},M=[{id:c.Activist,title:"Активист"},{id:c.ExternalFitness,title:"Внешний фитнес"},{id:c.Competition,title:"Соревнование"},{id:c.GTO,title:"ГТО"},{id:c.InternalTeam,title:"Сборная"},{id:c.OnlineWork,title:"Работа в LMS"},{id:c.Science,title:"Научная работа"}],ut=h(j.peTeacher,q.pendingRemoveAdditionPoints,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:(s,d)=>{const n=M.find(({id:i})=>i===s);return(n==null?void 0:n.id)===c.Competition?d.comment:n==null?void 0:n.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:s=>s.fullName},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(s,d)=>{const n=d,i=$(new Date(n.date),new Date)<-7,u=[v.AdminAccess,v.SuperUser].some(a=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(a)});return n.teacherGuid===(t==null?void 0:t.id)&&!i||u?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>k.removeAdditionPoints({id:n.id.toString()})}):null}}]:[]]}),ct=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,mt=()=>{const[t,o]=A([S.$selectedStudent,X.$competitions]),[l,s]=x.useState(null),[d,n]=x.useState(new Date().toISOString()),[i,u]=x.useState(null),[a,r]=x.useState("0"),[C,b]=x.useState(""),y=()=>{k.addAdditionPoints({comment:(i==null?void 0:i.id)===c.Competition?(l==null?void 0:l.title)??"":C,date:z(d,"numeric"),pointsAmount:Number(a),studentGuid:t==null?void 0:t.studentGuid,workType:i==null?void 0:i.id})};x.useEffect(()=>{K.load()},[]),x.useEffect(()=>{(i==null?void 0:i.id)===c.Competition&&a==="0"&&r("5"),(i==null?void 0:i.id)===c.InternalTeam&&a==="0"&&r("50")},[i==null?void 0:i.id]);const T=new Date(d),O=T.getDay()!==0&&T.getDay()!==1,F=o.map(I=>({id:I,title:I}));return e.jsxs(ct,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:M,selected:i,setSelected:u}),(i==null?void 0:i.id)===c.Competition&&e.jsx(w,{width:"100%",size:"big",title:"Соревнование",items:F,selected:l,setSelected:s}),e.jsx(P,{alertMessage:O?"":"Не допустимая дата",size:"big",title:"Дата",setValue:n,value:d,type:"date"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:r,value:a,type:"number",stepSize:1,minValue:1}),(i==null?void 0:i.id)!==c.Competition&&e.jsx(Z,{width:"100%",setValue:b,value:C,title:"Комментарий"}),e.jsx(g,{isActive:O,text:"Добавить",onClick:y,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},xt=p.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,pt=p(D)`
    flex: 1;
`,ft=()=>{var n;const[t,o,l]=A([S.$selectedStudent,ut,j.peTeacher]),{open:s}=G(),d=()=>{s(e.jsx(mt,{}),"Дополнительные баллы")};return t?e.jsxs(xt,{children:[!!((n=l==null?void 0:l.permissions)!=null&&n.length)&&e.jsx(g,{text:"Добавить дополнительные баллы",onClick:d,background:f.blue.main,textColor:f.white.main}),e.jsx(pt,{columns:o,data:t.pointsHistory})]}):null};var m=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t.Other="OTHER",t))(m||{});const U=[{id:m.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:m.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:m.Jumps,title:"Прыжок в длину"},{id:m.PullUps,title:"Подтягивания(Вис)"},{id:m.ShuttleRun,title:"Челночный бег"},{id:m.Squats,title:"Приседания"},{id:m.Tilts,title:"Наклон"},{id:m.TorsoLifts,title:"Подъемы туловища"},{id:m.Other,title:"Другое"}],St=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
`,gt=()=>{const t=A(S.$selectedStudent),[o,l]=x.useState(new Date().toISOString()),[s,d]=x.useState(null),[n,i]=x.useState("0"),[u,a]=x.useState(""),r=()=>{_.addRegulationPoints({date:z(o,"numeric"),pointsAmount:Number(n),studentGuid:t==null?void 0:t.studentGuid,standardType:s==null?void 0:s.id,isOverride:!1,comment:(s==null?void 0:s.id)===m.Other?u??"":""})},C=new Date(o),b=C.getDay()!==0&&C.getDay()!==1;return e.jsxs(St,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:U,selected:s,setSelected:d}),(s==null?void 0:s.id)===m.Other&&e.jsx(P,{width:"100%",size:"big",title:"Комментарий",setValue:a,value:u}),e.jsx(P,{alertMessage:b?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:o,type:"date",width:"100%"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:i,value:n,type:"number",stepSize:1,minValue:1}),e.jsx(g,{text:"Добавить",isActive:b,onClick:r,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},jt=p(D)`
    flex: 1;
`,vt=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,At=h(j.peTeacher,Q.pendingRemoveRegulationPoints,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:(s,d)=>{var n;return s===m.Other?d.comment:(n=U.find(({id:i})=>i===s))==null?void 0:n.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:s=>s.fullName},{title:"Комментарий",field:"comment",priority:"five"},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(s,d)=>{const n=d,i=$(new Date(n.date),new Date)<-30,u=[v.AdminAccess,v.SuperUser].some(a=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(a)});return n.teacherGuid===(t==null?void 0:t.id)&&!i||u?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>_.removeRegulationPoints({id:n.id.toString()})}):null}}]:[]]}),Ct=()=>{var u;const[t,o,l]=A([S.$selectedStudent,At,j.peTeacher]),{open:s}=G(),d=!!t&&L(t),n=()=>{s(e.jsx(gt,{}),"Добавить норматив")},i=Number(d)<20;return t?e.jsxs(vt,{children:[!t&&i&&e.jsx(Y,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!((u=l==null?void 0:l.permissions)!=null&&u.length)&&e.jsx(g,{text:"Добавить норматив",onClick:n,background:f.blue.main,textColor:f.white.main,isActive:!i}),e.jsx(jt,{data:t.standardsHistory,columns:o})]}):null},V=[{title:"Посещения",content:e.jsx(rt,{})},{title:"Нормативы ",content:e.jsx(Ct,{})},{title:"Дополнительные баллы ",content:e.jsx(ft,{})}];p.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`;const Pt=p.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,bt=p.div`
    width: 100%;
`,E=({label:t,value:o})=>e.jsxs(Et,{children:[e.jsx(R,{size:3,children:t}),e.jsx(wt,{children:o})]}),Et=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,wt=p.span``,Tt=()=>{const{studentId:t}=J(),[o,{currentUser:l},s,d]=A([S.$selectedStudent,lt,j.isLoading,S.$loading]),n=(l==null?void 0:l.user_status)==="staff"?t:(l==null?void 0:l.guid)??"",[i,u]=x.useState(0);return x.useEffect(()=>(N.setCurrentStudentId(n),tt.load(),()=>N.resetStudentId()),[n]),!o&&n&&!s&&!d?e.jsx(et,{text:"Нет данных"}):o?e.jsx(it,{padding:"10px",children:e.jsxs(st,{children:[e.jsx(R,{size:3,align:"left",children:o.fullName}),e.jsxs(Pt,{children:[e.jsx(E,{label:"Группа",value:o.groupNumber}),e.jsx(E,{label:"Баллы",value:L(o).toString()}),e.jsx(E,{label:"Курс",value:o.course.toString()}),e.jsx(E,{label:"ЛМС",value:o.pointsHistory.filter(a=>a.workType===c.OnlineWork).reduce((a,r)=>a+r.points,0).toString()})]}),e.jsx(nt,{appearance:!1,pages:V,currentPage:i,setCurrentPage:u}),e.jsx(bt,{children:V[i].content})]})}):null};export{Tt as default};
