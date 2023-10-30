import{s as m,m as w,bT as E,j as e,X as g,r as c,bU as F}from"./vendor-4af360a6.js";import{n as f,q as H,r as W,o as D,t as j,A as B,u as V,v as X,s as q,e as K,w as U,x as Q,i as _,y as N,h as Y}from"./ui-de15f955.js";import{j as T,B as S,i as b,g as A,w as Z,x as p,l as z,u as G,M as tt,T as R,r as et,t as it,v as st}from"./index-3edf5efe.js";var a=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(a||{});const nt=m(T)`
    flex: 1;
`,lt=m.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,ot=w(D.peTeacher,W.pendingRemoveVisit,(t,o)=>[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:l=>l.fullName},{title:"Действия",field:"actions",onClick:()=>null,render:(l,i)=>{const s=i,d=E(new Date(s.date),new Date)<-7,n=[f.AdminAccess,f.SuperUser].some(x=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(x)});return s.teacherGuid===(t==null?void 0:t.id)&&!d||n?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>{H.removeVisit({id:s.id.toString()})}}):null}}]),dt=()=>{const[t,o]=g([j.$selectedStudent,ot]);return t?e.jsxs(lt,{children:[e.jsx(B,{studentGuid:t.studentGuid}),e.jsx(nt,{columns:o,data:t.visitsHistory})]}):null},y=[{id:a.Activist,title:"Активист"},{id:a.ExternalFitness,title:"Внешний фитнес"},{id:a.Competition,title:"Соревнование"},{id:a.GTO,title:"ГТО"},{id:a.InternalTeam,title:"Сборная"},{id:a.OnlineWork,title:"Работа в LMS"},{id:a.Science,title:"Научная работа"}],rt=w(D.peTeacher,X.pendingRemoveAdditionPoints,(t,o)=>[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:(l,i)=>{const s=y.find(({id:d})=>d===l);return(s==null?void 0:s.id)===a.Competition?i.comment:s==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:l=>l.fullName},{title:"Действия",field:"actions",onClick:()=>null,render:(l,i)=>{const s=i,d=E(new Date(s.date),new Date)<-7,n=[f.AdminAccess,f.SuperUser].some(x=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(x)});return s.teacherGuid===(t==null?void 0:t.id)&&!d||n?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>V.removeAdditionPoints({id:s.id.toString()})}):null}}]),at=m.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,ut=()=>{const[t,o]=g([j.$selectedStudent,q.$competitions]),[l,i]=c.useState(null),[s,d]=c.useState(new Date().toISOString()),[n,x]=c.useState(null),[r,C]=c.useState("0"),[v,P]=c.useState(""),M=()=>{V.addAdditionPoints({comment:(n==null?void 0:n.id)===a.Competition?(l==null?void 0:l.title)??"":v,date:z(s,"numeric"),pointsAmount:Number(r),studentGuid:t==null?void 0:t.studentGuid,workType:n==null?void 0:n.id})};c.useEffect(()=>{K.load()},[]),c.useEffect(()=>{(n==null?void 0:n.id)===a.Competition&&r==="0"&&C("5")},[n==null?void 0:n.id]);const $=new Date(s),O=$.getDay()!==0&&$.getDay()!==1,J=o.map(I=>({id:I,title:I}));return e.jsxs(at,{children:[e.jsx(b,{width:"100%",size:"big",title:"Тип работ",items:y,selected:n,setSelected:x}),(n==null?void 0:n.id)===a.Competition&&e.jsx(b,{width:"100%",size:"big",title:"Соревнование",items:J,selected:l,setSelected:i}),e.jsx(A,{alertMessage:O?"":"Не допустимая дата",size:"big",title:"Дата",setValue:d,value:s,type:"date"}),e.jsx(A,{width:"100%",size:"big",title:"Количество баллов",setValue:C,value:r,type:"number",stepSize:1,minValue:1}),(n==null?void 0:n.id)!==a.Competition&&e.jsx(Z,{width:"100%",setValue:P,value:v,title:"Комментарий"}),e.jsx(S,{isActive:O,text:"Добавить",onClick:M,background:p.blue.main,textColor:p.white.main,width:"100%"})]})},ct=m.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,mt=m(T)`
    flex: 1;
`,xt=()=>{const[t,o]=g([j.$selectedStudent,rt]),{open:l}=G(),i=()=>{l(e.jsx(ut,{}),"Дополнительные баллы")};return t?e.jsxs(ct,{children:[e.jsx(S,{text:"Добавить дополнительные баллы",onClick:i,background:p.blue.main,textColor:p.white.main}),e.jsx(mt,{columns:o,data:t.pointsHistory})]}):null};var u=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t.Other="OTHER",t))(u||{});const L=[{id:u.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:u.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:u.Jumps,title:"Прыжки"},{id:u.PullUps,title:"Подтягивания"},{id:u.ShuttleRun,title:"Челночный бег"},{id:u.Squats,title:"Приседания"},{id:u.Tilts,title:"Наклон"},{id:u.TorsoLifts,title:"Подъемы туловища"},{id:u.Other,title:"Другое"}],pt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
`,St=()=>{const t=g(j.$selectedStudent),[o,l]=c.useState(new Date().toISOString()),[i,s]=c.useState(null),[d,n]=c.useState("0"),[x,r]=c.useState(""),C=()=>{U.addRegulationPoints({date:z(o,"numeric"),pointsAmount:Number(d),studentGuid:t==null?void 0:t.studentGuid,standardType:i==null?void 0:i.id,isOverride:!1,comment:(i==null?void 0:i.id)===u.Other?x??"":""})},v=new Date(o),P=v.getDay()!==0&&v.getDay()!==1;return e.jsxs(pt,{children:[e.jsx(b,{width:"100%",size:"big",title:"Тип работ",items:L,selected:i,setSelected:s}),(i==null?void 0:i.id)===u.Other&&e.jsx(A,{width:"100%",size:"big",title:"Комментарий",setValue:r,value:x}),e.jsx(A,{alertMessage:P?"":"Не допустимая дата",size:"big",title:"Дата",setValue:l,value:o,type:"date",width:"100%"}),e.jsx(A,{width:"100%",size:"big",title:"Количество баллов",setValue:n,value:d,type:"number",stepSize:1,minValue:1}),e.jsx(S,{text:"Добавить",isActive:P,onClick:C,background:p.blue.main,textColor:p.white.main,width:"100%"})]})},ft=m(T)`
    flex: 1;
`,gt=m.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,jt=w(D.peTeacher,Q.pendingRemoveRegulationPoints,(t,o)=>[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:(l,i)=>{var s;return l===u.Other?i.comment:(s=L.find(({id:d})=>d===l))==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:l=>l.fullName},{title:"Комментарий",field:"comment",priority:"five"},{title:"Действия",field:"actions",onClick:()=>null,render:(l,i)=>{const s=i,d=E(new Date(s.date),new Date)<-30,n=[f.AdminAccess,f.SuperUser].some(x=>{var r;return(r=t==null?void 0:t.permissions)==null?void 0:r.includes(x)});return s.teacherGuid===(t==null?void 0:t.id)&&!d||n?e.jsx(S,{width:"100%",text:"Удалить",isActive:!o,onClick:()=>U.removeRegulationPoints({id:s.id.toString()})}):null}}]),vt=()=>{const[t,o]=g([j.$selectedStudent,jt]),{open:l}=G(),i=!!t&&_(t),s=()=>{l(e.jsx(St,{}),"Добавить норматив")},d=i<20;return t?e.jsxs(gt,{children:[d&&e.jsx(tt,{type:"alert",children:"Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов"}),e.jsx(S,{text:"Добавить норматив",onClick:s,background:p.blue.main,textColor:p.white.main,isActive:!d}),e.jsx(ft,{data:t.standardsHistory,columns:o})]}):null},k=[{title:"Посещения",content:e.jsx(dt,{})},{title:"Нормативы ",content:e.jsx(vt,{})},{title:"Дополнительные баллы ",content:e.jsx(xt,{})}];m.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`;const At=m.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,Ct=m.div`
    width: 100%;
`,h=({label:t,value:o})=>e.jsxs(Pt,{children:[e.jsx(R,{size:3,children:t}),e.jsx(ht,{children:o})]}),Pt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,ht=m.span``,Dt=()=>{const{studentId:t}=F(),[o,l]=c.useState(0),[i]=g([j.$selectedStudent]);return c.useEffect(()=>(N.setCurrentStudentId(t),Y.load(),()=>N.resetStudentId()),[t]),i?e.jsx(et,{padding:"10px",children:e.jsxs(it,{children:[e.jsx(R,{size:3,align:"left",children:i.fullName}),e.jsxs(At,{children:[e.jsx(h,{label:"Группа",value:i.groupNumber}),e.jsx(h,{label:"Баллы",value:_(i).toString()}),e.jsx(h,{label:"Курс",value:i.course.toString()}),e.jsx(h,{label:"ЛМС",value:i.pointsHistory.filter(s=>s.workType===a.OnlineWork).reduce((s,d)=>s+d.points,0).toString()})]}),e.jsx(st,{appearance:!1,pages:k,currentPage:o,setCurrentPage:l}),e.jsx(Ct,{children:k[o].content})]})}):null};export{Dt as default};
