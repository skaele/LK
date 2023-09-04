import{s as n,ah as r,j as e,r as a,b1 as I}from"./vendor-e9654bfa.js";import{i as u,A as $,j as C,k as O,l as v,c as L}from"./ui-52956162.js";import{j as P,T as h,g as A,f as m,m as U,B as S,l as E,u as T,n as V}from"./index-c2d11f9e.js";const _=n(P)`
    flex: 1;
`,k=n.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,G=()=>{const[t]=r([u.$selectedStudent]);return t?e.jsxs(k,{children:[e.jsx($,{studentGuid:t.studentGuid}),e.jsx(_,{columns:K,data:t.visitsHistory})]}):null};var o=(t=>(t.Activist="ACTIVIST",t.ExternalFitness="EXTERNAL_FITNESS",t.GTO="GTO",t.InternalTeam="INTERNAL_TEAM",t.OnlineWork="ONLINE_WORK",t.Science="SCIENCE",t))(o||{});const g=[{id:o.Activist,title:"Активист"},{id:o.ExternalFitness,title:"Внешний фитнес"},{id:o.GTO,title:"ГТО"},{id:o.InternalTeam,title:"Внутренняя команда"},{id:o.OnlineWork,title:"Работа в LMS"},{id:o.Science,title:"Научная работа"}],D=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Тип работ",field:"workType",render:t=>{var s;return(s=g.find(({id:i})=>i===t))==null?void 0:s.title}},{title:"Количество баллов",field:"points"}],J=n.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-bottom: 50px;
`,F=()=>{const t=r(u.$selectedStudent),[s,i]=a.useState(""),[l,f]=a.useState(null),[c,j]=a.useState("0"),[x,b]=a.useState(""),N=()=>{C.addAdditionPoints({comment:x,date:E(s,"numeric"),pointsAmount:Number(c),studentGuid:t==null?void 0:t.studentGuid,workType:l==null?void 0:l.id})};return e.jsxs(J,{children:[e.jsx(h,{size:3,children:"Дополнительные баллы"}),e.jsx(A,{title:"Тип работ",items:g,selected:l,setSelected:f}),e.jsx(m,{title:"Дата",setValue:i,value:s,type:"date"}),e.jsx(m,{title:"Количество баллов",setValue:j,value:c,type:"number",maxValue:50}),e.jsx(U,{setValue:b,value:x,title:"Комментарий"}),e.jsx(S,{text:"Добавить",onClick:N})]})},R=n.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`,M=n(P)`
    flex: 1;
`,w=()=>{const[t]=r([u.$selectedStudent]),{open:s}=T(),i=()=>{s(e.jsx(F,{}))};return t?e.jsxs(R,{children:[e.jsx(S,{text:"Добавить дополнительные баллы",onClick:i}),e.jsx(M,{columns:D,data:t.pointsHistory})]}):null};var d=(t=>(t.FlexionAndExtensionOfArms="FLEXION_AND_EXTENSION_OF_ARMS",t.JumpingRopeJumps="JUMPING_ROPE_JUMPS",t.Jumps="JUMPS",t.PullUps="PULL_UPS",t.ShuttleRun="SHUTTLE_RUN",t.Squats="SQUATS",t.Tilts="TILTS",t.TorsoLifts="TORSO_LIFTS",t))(d||{});const y=[{id:d.FlexionAndExtensionOfArms,title:"Сгибание и разгибание рук"},{id:d.JumpingRopeJumps,title:"Прыжки со скакалкой"},{id:d.Jumps,title:"Прыжки"},{id:d.PullUps,title:"Подтягивания"},{id:d.ShuttleRun,title:"Челночный бег"},{id:d.Squats,title:"Приседания"},{id:d.Tilts,title:"Наклон"},{id:d.TorsoLifts,title:"Подъемы туловища"}],W=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Норматив",field:"standardType",render:t=>{var s;return(s=y.find(({id:i})=>i===t))==null?void 0:s.title}},{title:"Количество баллов",field:"points"}],z=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input {
        height: auto !important;
    }
`,H=()=>{const t=r(u.$selectedStudent),[s,i]=a.useState(""),[l,f]=a.useState(null),[c,j]=a.useState("0"),x=()=>{O.addRegulationPoints({date:E(s,"numeric"),pointsAmount:Number(c),studentGuid:t==null?void 0:t.studentGuid,standardType:l==null?void 0:l.id})};return e.jsxs(z,{children:[e.jsx(A,{title:"Тип работ",items:y,selected:l,setSelected:f}),e.jsx(m,{title:"Дата",setValue:i,value:s,type:"date"}),e.jsx(m,{title:"Количество баллов",setValue:j,value:c,type:"number",maxValue:50}),e.jsx(S,{text:"Добавить",onClick:x})]})},B=n(P)`
    flex: 1;
`,X=n.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`,q=()=>{const[t]=r([u.$selectedStudent]),{open:s}=T(),i=()=>{s(e.jsx(H,{}))};return t?e.jsxs(X,{children:[e.jsx(S,{text:"Добавить норматив",onClick:i}),e.jsx(B,{data:t.standardsHistory,columns:W})]}):null},K=[{title:"Дата",field:"date",type:"date",sort:!0},{title:"Преподаватель",field:"teacher",render:t=>t.fullName}],Q=[{title:"Посещения",content:e.jsx(G,{})},{title:"Нормативы ",content:e.jsx(q,{})},{title:"Дополнительные баллы ",content:e.jsx(w,{})}],Y=n.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`,Z=n.div`
    display: flex;
    gap: 5px;
    flex-direction: row;
`,p=({label:t,value:s})=>e.jsxs(tt,{children:[e.jsx(h,{size:3,children:t}),e.jsx(et,{children:s})]}),tt=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    border-radius: 4px;
    padding: 12px;
    background-color: var(--primary-background);

    flex: 1;
`,et=n.span``,lt=()=>{const{studentId:t}=I(),[s]=r([u.$selectedStudent]);return a.useEffect(()=>(v.setCurrentStudentId(t),()=>v.resetStudentId()),[t]),s?e.jsxs(Y,{children:[e.jsx(h,{size:1,children:s.fullName}),e.jsxs(Z,{children:[e.jsx(p,{label:"Группа",value:s.groupNumber}),e.jsx(p,{label:"Баллы",value:L(s).toString()}),e.jsx(p,{label:"Курс",value:s.course.toString()}),e.jsx(p,{label:"Факультет",value:s.department})]}),e.jsx(V,{pages:Q})]}):null};export{lt as default};
