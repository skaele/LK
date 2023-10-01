import{s as d,O as x,j as e,r as a,bS as V}from"./vendor-2bd70a0f.js";import{m as p,A as _,s as k,e as G,n as w,o as D,q as C,h as J}from"./ui-a83e98b7.js";import{j as P,T as v,i as h,g as S,w as F,B as f,l as I,u as O,r as M,t as R,v as H}from"./index-bc77f324.js";var o=(t=>(t.Activist="ACTIVIST",t.Competition="COMPETITION",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(o||{});const W=d(P)`
    flex: 1;
`,z=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,B=()=>{const[t]=x([p.$selectedStudent]);return t?e.jsxs(z,{children:[e.jsx(_,{studentGuid:t.studentGuid}),e.jsx(W,{columns:dt,data:t.visitsHistory})]}):null},N=[{id:o.Activist,title:"Активист"},{id:o.ExternalFitness,title:"Внешний фитнес"},{id:o.Competition,title:"Соревнование"},{id:o.GTO,title:"ГТО"},{id:o.InternalTeam,title:"Сборная"},{id:o.OnlineWork,title:"Работа в LMS"},{id:o.Science,title:"Научная работа"}],q=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:t=>{var s;return(s=N.find(({id:n})=>n===t))==null?void 0:s.title}},{title:"Количество баллов",field:"points"}],X=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-bottom: 50px;
`,K=()=>{const[t,s]=x([p.$selectedStudent,k.$competitions]),[n,l]=a.useState(null),[c,u]=a.useState(""),[i,j]=a.useState(null),[g,b]=a.useState("0"),[E,y]=a.useState(""),L=()=>{w.addAdditionPoints({comment:(i==null?void 0:i.id)===o.Competition?(n==null?void 0:n.title)??"":E,date:I(c,"numeric"),pointsAmount:Number(g),studentGuid:t==null?void 0:t.studentGuid,workType:i==null?void 0:i.id})};a.useEffect(()=>{G.load()},[]);const U=s.map(A=>({id:A,title:A}));return e.jsxs(X,{children:[e.jsx(v,{size:3,children:"Дополнительные баллы"}),e.jsx(h,{title:"Тип работ",items:N,selected:i,setSelected:j}),(i==null?void 0:i.id)===o.Competition&&e.jsx(h,{title:"Соревнование",items:U,selected:n,setSelected:l}),e.jsx(S,{title:"Дата",setValue:u,value:c,type:"date"}),e.jsx(S,{title:"Количество баллов",setValue:b,value:g,type:"number",maxValue:50}),(i==null?void 0:i.id)!==o.Competition&&e.jsx(F,{setValue:y,value:E,title:"Комментарий"}),e.jsx(f,{text:"Добавить",onClick:L})]})},Q=d.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,Y=d(P)`
    flex: 1;
`,Z=()=>{const[t]=x([p.$selectedStudent]),{open:s}=O(),n=()=>{s(e.jsx(K,{}))};return t?e.jsxs(Q,{children:[e.jsx(f,{text:"Добавить дополнительные баллы",onClick:n}),e.jsx(Y,{columns:q,data:t.pointsHistory})]}):null};var r=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t))(r||{});const $=[{id:r.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:r.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:r.Jumps,title:"Прыжки"},{id:r.PullUps,title:"Подтягивания"},{id:r.ShuttleRun,title:"Челночный бег"},{id:r.Squats,title:"Приседания"},{id:r.Tilts,title:"Наклон"},{id:r.TorsoLifts,title:"Подъемы туловища"}],tt=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:t=>{var s;return(s=$.find(({id:n})=>n===t))==null?void 0:s.title}},{title:"Количество баллов",field:"points"}],et=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input {
        height: auto !important;
    }
`,st=()=>{const t=x(p.$selectedStudent),[s,n]=a.useState(""),[l,c]=a.useState(null),[u,i]=a.useState("0"),j=()=>{D.addRegulationPoints({date:I(s,"numeric"),pointsAmount:Number(u),studentGuid:t==null?void 0:t.studentGuid,standardType:l==null?void 0:l.id,isOverride:!1})};return e.jsxs(et,{children:[e.jsx(h,{title:"Тип работ",items:$,selected:l,setSelected:c}),e.jsx(S,{title:"Дата",setValue:n,value:s,type:"date"}),e.jsx(S,{title:"Количество баллов",setValue:i,value:u,type:"number",maxValue:50}),e.jsx(f,{text:"Добавить",onClick:j})]})},nt=d(P)`
    flex: 1;
`,it=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,lt=()=>{const[t]=x([p.$selectedStudent]),{open:s}=O(),n=()=>{s(e.jsx(st,{}))};return t?e.jsxs(it,{children:[e.jsx(f,{text:"Добавить норматив",onClick:n}),e.jsx(nt,{data:t.standardsHistory,columns:tt})]}):null},dt=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:t=>t.fullName}],T=[{title:"Посещения",content:e.jsx(B,{})},{title:"Нормативы ",content:e.jsx(lt,{})},{title:"Дополнительные баллы ",content:e.jsx(Z,{})}];d.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`;const ot=d.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,at=d.div`
    width: 100%;
`,m=({label:t,value:s})=>e.jsxs(rt,{children:[e.jsx(v,{size:3,children:t}),e.jsx(ct,{children:s})]}),rt=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--theme-2);

    flex: 1;
`,ct=d.span``,mt=()=>{const{studentId:t}=V(),[s,n]=a.useState(0),[l]=x([p.$selectedStudent]);return a.useEffect(()=>(C.setCurrentStudentId(t),()=>C.resetStudentId()),[t]),l?e.jsx(M,{padding:"10px",children:e.jsxs(R,{children:[e.jsx(v,{size:3,align:"left",children:l.fullName}),e.jsxs(ot,{children:[e.jsx(m,{label:"Группа",value:l.groupNumber}),e.jsx(m,{label:"Баллы",value:J(l).toString()}),e.jsx(m,{label:"Курс",value:l.course.toString()}),e.jsx(m,{label:"ЛМС",value:l.pointsHistory.filter(c=>c.workType===o.OnlineWork).reduce((c,u)=>c+u.points,0).toString()})]}),e.jsx(H,{appearance:!1,pages:T,currentPage:s,setCurrentPage:n}),e.jsx(at,{children:T[s].content})]})}):null};export{mt as default};
