import{s as n,j as e,ah as r,r as a,b7 as I}from"./vendor-198a3a64.js";import{k as u,A as $,l as C,m as O,n as v,c as k}from"./ui-ce8e5228.js";import{T as P,m as h,k as A,j as m,r as L,B as S,l as E,u as T,q as U}from"./index-e5639c5e.js";const V=n.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`,_=n.div`
    display: flex;
    gap: 5px;
    flex-direction: row;
`,p=({label:t,value:s})=>e.jsxs(G,{children:[e.jsx(P,{size:3,children:t}),e.jsx(D,{children:s})]}),G=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--primary-background);

    flex: 1;
`,D=n.span``,J=n(h)`
    flex: 1;
`,F=n.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,R=()=>{const[t]=r([u.$selectedStudent]);return t?e.jsxs(F,{children:[e.jsx($,{studentGuid:t.studentGuid}),e.jsx(J,{columns:tt,data:t.visitsHistory})]}):null};var o=(t=>(t.Activist="ACTIVIST",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(o||{});const g=[{id:o.Activist,title:"Активист"},{id:o.ExternalFitness,title:"Внешний фитнес"},{id:o.GTO,title:"ГТО"},{id:o.InternalTeam,title:"Внутренняя команда"},{id:o.OnlineWork,title:"Работа в LMS"},{id:o.Science,title:"Научная работа"}],M=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:t=>{var s;return(s=g.find(({id:i})=>i===t))==null?void 0:s.title}},{title:"Количество баллов",field:"points"}],w=n.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-bottom: 50px;
`,W=()=>{const t=r(u.$selectedStudent),[s,i]=a.useState(""),[l,f]=a.useState(null),[c,j]=a.useState("0"),[x,b]=a.useState(""),N=()=>{C.addAdditionPoints({comment:x,date:E(s,"numeric"),pointsAmount:Number(c),studentGuid:t==null?void 0:t.studentGuid,workType:l==null?void 0:l.id})};return e.jsxs(w,{children:[e.jsx(P,{size:3,children:"Дополнительные баллы"}),e.jsx(A,{title:"Тип работ",items:g,selected:l,setSelected:f}),e.jsx(m,{title:"Дата",setValue:i,value:s,type:"date"}),e.jsx(m,{title:"Количество баллов",setValue:j,value:c,type:"number",maxValue:50}),e.jsx(L,{setValue:b,value:x,title:"Комментарий"}),e.jsx(S,{text:"Добавить",onClick:N})]})},z=n.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,H=n(h)`
    flex: 1;
`,q=()=>{const[t]=r([u.$selectedStudent]),{open:s}=T(),i=()=>{s(e.jsx(W,{}))};return t?e.jsxs(z,{children:[e.jsx(S,{text:"Добавить дополнительные баллы",onClick:i}),e.jsx(H,{columns:M,data:t.pointsHistory})]}):null};var d=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t))(d||{});const y=[{id:d.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:d.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:d.Jumps,title:"Прыжки"},{id:d.PullUps,title:"Подтягивания"},{id:d.ShuttleRun,title:"Челночный бег"},{id:d.Squats,title:"Приседания"},{id:d.Tilts,title:"Наклон"},{id:d.TorsoLifts,title:"Подъемы туловища"}],B=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:t=>{var s;return(s=y.find(({id:i})=>i===t))==null?void 0:s.title}},{title:"Количество баллов",field:"points"}],X=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input {
        height: auto !important;
    }
`,K=()=>{const t=r(u.$selectedStudent),[s,i]=a.useState(""),[l,f]=a.useState(null),[c,j]=a.useState("0"),x=()=>{O.addRegulationPoints({date:E(s,"numeric"),pointsAmount:Number(c),studentGuid:t==null?void 0:t.studentGuid,standardType:l==null?void 0:l.id})};return e.jsxs(X,{children:[e.jsx(A,{title:"Тип работ",items:y,selected:l,setSelected:f}),e.jsx(m,{title:"Дата",setValue:i,value:s,type:"date"}),e.jsx(m,{title:"Количество баллов",setValue:j,value:c,type:"number",maxValue:50}),e.jsx(S,{text:"Добавить",onClick:x})]})},Q=n(h)`
    flex: 1;
`,Y=n.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,Z=()=>{const[t]=r([u.$selectedStudent]),{open:s}=T(),i=()=>{s(e.jsx(K,{}))};return t?e.jsxs(Y,{children:[e.jsx(S,{text:"Добавить норматив",onClick:i}),e.jsx(Q,{data:t.standardsHistory,columns:B})]}):null},tt=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:t=>t.fullName}],et=[{title:"Посещения",content:e.jsx(R,{})},{title:"Нормативы ",content:e.jsx(Z,{})},{title:"Дополнительные баллы ",content:e.jsx(q,{})}],lt=()=>{const{studentId:t}=I(),[s]=r([u.$selectedStudent]);return a.useEffect(()=>(v.setCurrentStudentId(t),()=>v.resetStudentId()),[t]),s?e.jsxs(V,{children:[e.jsx(P,{size:1,children:s.fullName}),e.jsxs(_,{children:[e.jsx(p,{label:"Группа",value:s.groupNumber}),e.jsx(p,{label:"Баллы",value:k(s).toString()}),e.jsx(p,{label:"Курс",value:s.course.toString()}),e.jsx(p,{label:"Факультет",value:s.department})]}),e.jsx(U,{pages:et})]}):null};export{lt as default};
