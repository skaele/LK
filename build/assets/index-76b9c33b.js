import{s as d,M as m,j as e,r as o,bS as L}from"./vendor-831b4923.js";import{m as p,A as U,s as _,e as M,n as G,o as J,q as N,h as F}from"./ui-9fc0b79b.js";import{j as P,i as C,g,w as R,B as h,x as u,l as D,u as O,T as $,r as H,t as W,v as B}from"./index-564a54c0.js";var a=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(a||{});const q=d(P)`
    flex: 1;
`,X=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,K=()=>{const[t]=m([p.$selectedStudent]);return t?e.jsxs(X,{children:[e.jsx(U,{studentGuid:t.studentGuid}),e.jsx(q,{columns:rt,data:t.visitsHistory})]}):null},y=[{id:a.Activist,title:"Активист"},{id:a.ExternalFitness,title:"Внешний фитнес"},{id:a.Competition,title:"Соревнование"},{id:a.GTO,title:"ГТО"},{id:a.InternalTeam,title:"Сборная"},{id:a.OnlineWork,title:"Работа в LMS"},{id:a.Science,title:"Научная работа"}],Q=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:(t,i)=>{const s=y.find(({id:n})=>n===t);return(s==null?void 0:s.id)===a.Competition?i.comment:s==null?void 0:s.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:t=>t.fullName},{title:"Комментарий",field:"comment",priority:"five"}],Y=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,Z=()=>{const[t,i]=m([p.$selectedStudent,_.$competitions]),[s,n]=o.useState(null),[r,x]=o.useState(""),[l,v]=o.useState(null),[S,f]=o.useState("0"),[b,V]=o.useState(""),k=()=>{G.addAdditionPoints({comment:(l==null?void 0:l.id)===a.Competition?(s==null?void 0:s.title)??"":b,date:D(r,"numeric"),pointsAmount:Number(S),studentGuid:t==null?void 0:t.studentGuid,workType:l==null?void 0:l.id})};o.useEffect(()=>{M.load()},[]);const A=new Date(r),E=A.getDay()!==0&&A.getDay()!==1,z=i.map(T=>({id:T,title:T}));return e.jsxs(Y,{children:[e.jsx(C,{size:"big",title:"Тип работ",items:y,selected:l,setSelected:v}),(l==null?void 0:l.id)===a.Competition&&e.jsx(C,{size:"big",title:"Соревнование",items:z,selected:s,setSelected:n}),e.jsx(g,{alertMessage:E?"":"Не допустимая дата",size:"big",title:"Дата",setValue:x,value:r,type:"date"}),e.jsx(g,{size:"big",title:"Количество баллов",setValue:f,value:S,type:"number",stepSize:1,minValue:1}),(l==null?void 0:l.id)!==a.Competition&&e.jsx(R,{setValue:V,value:b,title:"Комментарий"}),e.jsx(h,{isActive:E,text:"Добавить",onClick:k,background:u.blue.main,textColor:u.white.main,width:"100%"})]})},tt=d.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,et=d(P)`
    flex: 1;
`,st=()=>{const[t]=m([p.$selectedStudent]),{open:i}=O(),s=()=>{i(e.jsx(Z,{}),"Дополнительные баллы")};return t?e.jsxs(tt,{children:[e.jsx(h,{text:"Добавить дополнительные баллы",onClick:s,background:u.blue.main,textColor:u.white.main}),e.jsx(et,{columns:Q,data:t.pointsHistory})]}):null};var c=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t))(c||{});const w=[{id:c.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:c.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:c.Jumps,title:"Прыжки"},{id:c.PullUps,title:"Подтягивания"},{id:c.ShuttleRun,title:"Челночный бег"},{id:c.Squats,title:"Приседания"},{id:c.Tilts,title:"Наклон"},{id:c.TorsoLifts,title:"Подъемы туловища"}],it=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:t=>{var i;return(i=w.find(({id:s})=>s===t))==null?void 0:i.title}},{title:"Количество баллов",field:"points"},{title:"Преподаватель",field:"teacher",render:t=>t.fullName}],nt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
`,lt=()=>{const t=m(p.$selectedStudent),[i,s]=o.useState(""),[n,r]=o.useState(null),[x,l]=o.useState("0"),v=()=>{J.addRegulationPoints({date:D(i,"numeric"),pointsAmount:Number(x),studentGuid:t==null?void 0:t.studentGuid,standardType:n==null?void 0:n.id,isOverride:!1})},S=new Date(i),f=S.getDay()!==0&&S.getDay()!==1;return e.jsxs(nt,{children:[e.jsx(C,{size:"big",title:"Тип работ",items:w,selected:n,setSelected:r}),e.jsx(g,{alertMessage:f?"":"Не допустимая дата",size:"big",title:"Дата",setValue:s,value:i,type:"date"}),e.jsx(g,{size:"big",title:"Количество баллов",setValue:l,value:x,type:"number",stepSize:1,minValue:1}),e.jsx(h,{text:"Добавить",isActive:f,onClick:v,background:u.blue.main,textColor:u.white.main,width:"100%"})]})},at=d(P)`
    flex: 1;
`,dt=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,ot=()=>{const[t]=m([p.$selectedStudent]),{open:i}=O(),s=()=>{i(e.jsx(lt,{}),"Добавить норматив")};return t?e.jsxs(dt,{children:[e.jsx(h,{text:"Добавить норматив",onClick:s,background:u.blue.main,textColor:u.white.main}),e.jsx(at,{data:t.standardsHistory,columns:it})]}):null},rt=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:t=>t.fullName}],I=[{title:"Посещения",content:e.jsx(K,{})},{title:"Нормативы ",content:e.jsx(ot,{})},{title:"Дополнительные баллы ",content:e.jsx(st,{})}];d.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`;const ct=d.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,ut=d.div`
    width: 100%;
`,j=({label:t,value:i})=>e.jsxs(xt,{children:[e.jsx($,{size:3,children:t}),e.jsx(mt,{children:i})]}),xt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,mt=d.span``,jt=()=>{const{studentId:t}=L(),[i,s]=o.useState(0),[n]=m([p.$selectedStudent]);return o.useEffect(()=>(N.setCurrentStudentId(t),()=>N.resetStudentId()),[t]),n?e.jsx(H,{padding:"10px",children:e.jsxs(W,{children:[e.jsx($,{size:3,align:"left",children:n.fullName}),e.jsxs(ct,{children:[e.jsx(j,{label:"Группа",value:n.groupNumber}),e.jsx(j,{label:"Баллы",value:F(n).toString()}),e.jsx(j,{label:"Курс",value:n.course.toString()}),e.jsx(j,{label:"ЛМС",value:n.pointsHistory.filter(r=>r.workType===a.OnlineWork).reduce((r,x)=>r+x.points,0).toString()})]}),e.jsx(B,{appearance:!1,pages:I,currentPage:i,setCurrentPage:s}),e.jsx(ut,{children:I[i].content})]})}):null};export{jt as default};
