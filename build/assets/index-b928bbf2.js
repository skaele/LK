import{s as p,m as $,bV as D,j as e,Z as A,r as x,bW as J}from"./vendor-f1fdae2f.js";import{m as v,n as H,o as W,p as S,A as B,q as _,r as q,s as X,e as K,t as L,u as Q,h as z,v as V}from"./ui-f3701fc2.js";import{j as T,B as g,y as j,i as w,g as P,z as Z,E as f,l as G,u as R,M as Y,T as M,o as tt,G as et,v as it,w as st,x as nt,$ as lt}from"./index-751fe807.js";var u=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(u||{});const ot=p(T)`
    flex: 1;
`,dt=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,rt=$(j.peTeacher,W.pendingRemoveVisit,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:n=>n.fullName},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,d)=>{const s=d,i=D(new Date(s.date),new Date)<-7,c=[v.AdminAccess,v.SuperUser].some(r=>{var a;return(a=t==null?void 0:t.permissions)==null?void 0:a.includes(r)});return s.teacherGuid===(t==null?void 0:t.id)&&!i||c?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{H.removeVisit({id:s.id.toString()})}}):null}}]:[]]}),at=()=>{var n;const[t,o,l]=A([S.$selectedStudent,rt,j.peTeacher]);return t?e.jsxs(dt,{children:[!!((n=l==null?void 0:l.permissions)!=null&&n.length)&&e.jsx(B,{studentGuid:t.studentGuid}),e.jsx(ot,{columns:o,data:t.visitsHistory})]}):null},h=[{id:u.Activist,title:"Активист"},{id:u.ExternalFitness,title:"Внешний фитнес"},{id:u.Competition,title:"Соревнование"},{id:u.GTO,title:"ГТО"},{id:u.InternalTeam,title:"Сборная"},{id:u.OnlineWork,title:"Работа в LMS"},{id:u.Science,title:"Научная работа"}],ut=$(j.peTeacher,q.pendingRemoveAdditionPoints,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:(n,d)=>{const s=h.find(({id:i})=>i===n);return(s==null?void 0:s.id)===u.Competition?d.comment:s==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:n=>n.fullName},{title:"Комментарий",field:"comment",priority:"five",render:(n,d)=>{const s=h.find(({id:i})=>i===d.workType);return(s==null?void 0:s.id)!==u.Competition?d.comment:null}},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,d)=>{const s=d,i=D(new Date(s.date),new Date)<-7,c=[v.AdminAccess,v.SuperUser].some(r=>{var a;return(a=t==null?void 0:t.permissions)==null?void 0:a.includes(r)});return s.teacherGuid===(t==null?void 0:t.id)&&!i||c?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>_.removeAdditionPoints({id:s.id.toString()})}):null}}]:[]]}),ct=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,mt=()=>{const[t,o]=A([S.$selectedStudent,X.$competitions]),[l,n]=x.useState(null),[d,s]=x.useState(new Date().toISOString()),[i,c]=x.useState(null),[r,a]=x.useState("0"),[C,b]=x.useState(""),y=()=>{_.addAdditionPoints({comment:(i==null?void 0:i.id)===u.Competition?(l==null?void 0:l.title)??"":C,date:G(d,"numeric"),pointsAmount:Number(r),studentGuid:t==null?void 0:t.studentGuid,workType:i==null?void 0:i.id})};x.useEffect(()=>{K.load()},[]),x.useEffect(()=>{(i==null?void 0:i.id)===u.Competition&&r==="0"&&a("5"),(i==null?void 0:i.id)===u.InternalTeam&&r==="0"&&a("50")},[i==null?void 0:i.id]);const O=new Date(d),I=O.getDay()!==0&&O.getDay()!==1,F=o.map(N=>({id:N,title:N}));return e.jsxs(ct,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:h,selected:i,setSelected:c}),(i==null?void 0:i.id)===u.Competition&&e.jsx(w,{width:"100%",size:"big",title:"Соревнование",items:F,selected:l,setSelected:n}),e.jsx(P,{alertMessage:I?"":"Не допустимая дата",size:"big",title:"Дата",setValue:s,value:d,type:"date"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:a,value:r,type:"number",stepSize:1,minValue:1}),(i==null?void 0:i.id)!==u.Competition&&e.jsx(Z,{width:"100%",setValue:b,value:C,title:"Комментарий"}),e.jsx(g,{isActive:I,text:"Добавить",onClick:y,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},xt=p.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,pt=p(T)`
    flex: 1;
`,ft=()=>{var s;const[t,o,l]=A([S.$selectedStudent,ut,j.peTeacher]),{open:n}=R(),d=()=>{n(e.jsx(mt,{}),"Дополнительные баллы")};return t?e.jsxs(xt,{children:[!!((s=l==null?void 0:l.permissions)!=null&&s.length)&&e.jsx(g,{text:"Добавить дополнительные баллы",onClick:d,background:f.blue.main,textColor:f.white.main}),e.jsx(pt,{columns:o,data:t.pointsHistory})]}):null};var m=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t.Other="OTHER",t))(m||{});const U=[{id:m.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:m.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:m.Jumps,title:"Прыжок в длину"},{id:m.PullUps,title:"Подтягивания(Вис)"},{id:m.ShuttleRun,title:"Челночный бег"},{id:m.Squats,title:"Приседания"},{id:m.Tilts,title:"Наклон"},{id:m.TorsoLifts,title:"Подъемы туловища"},{id:m.Other,title:"Другое"}],St=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
`,gt=()=>{const t=A(S.$selectedStudent),[o,l]=x.useState(new Date().toISOString()),[n,d]=x.useState(null),[s,i]=x.useState("0"),[c,r]=x.useState(""),a=()=>{L.addRegulationPoints({date:G(o,"numeric"),pointsAmount:Number(s),studentGuid:t==null?void 0:t.studentGuid,standardType:n==null?void 0:n.id,isOverride:!1,comment:(n==null?void 0:n.id)===m.Other?c??"":""})},C=new Date(o),b=C.getDay()!==0&&C.getDay()!==1;return e.jsxs(St,{children:[e.jsx(w,{width:"100%",size:"big",title:"Тип работ",items:U,selected:n,setSelected:d}),(n==null?void 0:n.id)===m.Other&&e.jsx(P,{width:"100%",size:"big",title:"Комментарий",setValue:r,value:c}),e.jsx(P,{alertMessage:b?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:o,type:"date",width:"100%"}),e.jsx(P,{width:"100%",size:"big",title:"Количество баллов",setValue:i,value:s,type:"number",stepSize:1,minValue:1}),e.jsx(g,{text:"Добавить",isActive:b,onClick:a,background:f.blue.main,textColor:f.white.main,width:"100%"})]})},jt=p(T)`
    flex: 1;
`,vt=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,At=$(j.peTeacher,Q.pendingRemoveRegulationPoints,(t,o)=>{var l;return[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:(n,d)=>{var s;return n===m.Other?d.comment:(s=U.find(({id:i})=>i===n))==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:n=>n.fullName},{title:"Комментарий",field:"comment",priority:"five"},...(l=t==null?void 0:t.permissions)!=null&&l.length?[{title:"Действия",field:"actions",onClick:()=>null,render:(n,d)=>{const s=d,i=D(new Date(s.date),new Date)<-30,c=[v.AdminAccess,v.SuperUser].some(r=>{var a;return(a=t==null?void 0:t.permissions)==null?void 0:a.includes(r)});return s.teacherGuid===(t==null?void 0:t.id)&&!i||c?e.jsx(g,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>L.removeRegulationPoints({id:s.id.toString()})}):null}}]:[]]}),Ct=()=>{var c;const[t,o,l]=A([S.$selectedStudent,At,j.peTeacher]),{open:n}=R(),d=!!t&&z(t),s=()=>{n(e.jsx(gt,{}),"Добавить норматив")},i=Number(d)<20;return t?e.jsxs(vt,{children:[!t&&i&&e.jsx(Y,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),!!((c=l==null?void 0:l.permissions)!=null&&c.length)&&e.jsx(g,{text:"Добавить норматив",onClick:s,background:f.blue.main,textColor:f.white.main,isActive:!i}),e.jsx(jt,{data:t.standardsHistory,columns:o})]}):null},k=[{title:"Посещения",content:e.jsx(at,{})},{title:"Нормативы ",content:e.jsx(Ct,{})},{title:"Дополнительные баллы ",content:e.jsx(ft,{})}];p.div`
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
`,E=({label:t,value:o})=>e.jsxs(Et,{children:[e.jsx(M,{size:3,children:t}),e.jsx(wt,{children:o})]}),Et=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,wt=p.span``,Tt=()=>{const{studentId:t}=J(),[o,{currentUser:l},n,d]=A([S.$selectedStudent,lt,j.isLoading,S.$loading]),s=(l==null?void 0:l.user_status)==="staff"?t:(l==null?void 0:l.guid)??"",[i,c]=x.useState(0);return x.useEffect(()=>(V.setCurrentStudentId(s),tt.load(),()=>V.resetStudentId()),[s]),!o&&s&&!n&&!d?e.jsx(et,{text:"Нет данных"}):o?e.jsx(it,{padding:"10px",children:e.jsxs(st,{children:[e.jsx(M,{size:3,align:"left",children:o.fullName}),e.jsxs(Pt,{children:[e.jsx(E,{label:"Группа",value:o.groupNumber}),e.jsx(E,{label:"Баллы",value:z(o).toString()}),e.jsx(E,{label:"Курс",value:o.course.toString()}),e.jsx(E,{label:"ЛМС",value:o.pointsHistory.filter(r=>r.workType===u.OnlineWork).reduce((r,a)=>r+a.points,0).toString()})]}),e.jsx(nt,{appearance:!1,pages:k,currentPage:i,setCurrentPage:c}),e.jsx(bt,{children:k[i].content})]})}):null};export{Tt as default};
