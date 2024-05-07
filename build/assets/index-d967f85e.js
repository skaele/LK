import{s as a,j as t,co as G,cp as P,r as h,R as T,cq as W}from"./vendor-cbee1f3c.js";import{cU as L,bg as l,n as $,cV as z,cW as f,y as M,N as c,bt as R,cX as q,Y as u,bs as U,cY as H,T as y,O as x,bo as V,Q as X,bk as S,bG as B,U as p,cZ as D,c_ as O,a8 as Y,W as J,P as K,x as Q,a3 as C,aD as Z}from"./index-8dc5684d.js";const w=(e,i)=>{const n=new Date(e).getMonth();return n>1&&n<8?+i*2:+i*2-1},ee=e=>{const i=w(new Date().toISOString(),e),n=[];for(let r=1;r<=i;r++)n.push({id:r,title:`${r} семестр`});return n.push({id:-1,title:"Все семестры"}),n},te=(e,i)=>L(i.filter(n=>l(n.name).includes(l(e))||l(n.teacher).includes(l(e))||l($(n.exam_date)).includes(l(e))||l(n.bill_num).includes(l(e))));function ne(e){const i={5:0,4:0,3:0,2:0},n=e.filter(r=>!!r.grade&&r.exam_type!=="Зачет").length;return e.forEach(({grade:r,exam_type:s})=>{s!=="Зачет"&&r!==void 0&&i[z[r]]++}),n===0?i:Object.keys(i).reduce((r,s)=>(r[+s]=i[+s]/n,r),{})}const ie=2.7;a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & .center {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 500;
        opacity: 0.8;
        display: block;
    }

    & svg {
        width: ${({width:e})=>e}px;
        height: ${({width:e})=>e}px;

        & g {
            & circle {
                fill: none;
                stroke-width: ${({width:e})=>e/10};
                stroke: var(--almostTransparentOpposite);
                transform: translate(10px, 10px);
                transition: 0.3s;
            }

            & :nth-child(2) circle {
                transition: 0.3s;
                stroke-dasharray: ${({width:e})=>e*ie}px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`;a.div`
    display: flex;
    gap: 16px;

    @media (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }
`;a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        width: 200px;
    }
`;a.div`
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`;const v=(e,i)=>e?i?f[e]||f.default:f[e].main||f.default.main:"var(--grey)",se=e=>e.split(" ").reduce((i,n,r)=>(r===0?i.push(n):i.push(`${n[0]}.`),i),[]).join(" "),re=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({grade:e})=>v(e)};

    width: ${({superWide:e})=>e?"105px":"22px"};
    height: 22px;

    min-width: 22px;
    min-height: 22px;
    border-radius: 50%;

    svg {
        width: 100%;
        height: 100%;
    }
`,ae=({grade:e})=>t.jsx(re,{grade:e,superWide:e==="Не явился",children:e==="Не явился"?e:e&&(z[e]>2?t.jsx(G,{}):t.jsx(P,{}))}),oe=a.div`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({isGraded:e})=>e?1:.4};
`,ce=a.div`
    display: flex;
    margin-right: 10px;
    font-weight: 500;
    hyphens: auto;

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`,de=a.strong`
    color: ${({color:e})=>e};
    font-weight: 600;
    width: ${({superWide:e})=>e?"105px":"30px"};
    display: flex;
    justify-content: flex-end;
`,le=({item:e,type:i})=>{const{open:n}=M(),{name:r,grade:s}=e,g=v(s),d=()=>e.grade&&n(t.jsx(ue,{item:e,color:v(s,!0)}));return t.jsxs(oe,{onClick:d,isGraded:!!e.grade,children:[t.jsxs(c,{gap:"16px",children:[t.jsx(R,{color:g,borderRadius:"9px",children:q(r)}),t.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(ce,{children:r}),t.jsx(u,{children:t.jsx(U,{words:[se(e.teacher),$(e.exam_date)]})})]})]}),t.jsx(de,{color:g,superWide:s==="Не явился",children:i==="Зачет"?t.jsx(ae,{grade:s}):s==="Не явился"?"Не явился":s&&z[s]})]})},xe=a.div`
    width: 400px;

    @media (max-width: 800px) {
        width: 100%;
    }
`,pe=a.div`
    margin: 20px 0;
`,ue=({item:e,color:i})=>t.jsxs(xe,{children:[t.jsx(H,{subjectName:e.name,color:i,noPadding:!0}),t.jsx(pe,{children:t.jsx(y,{size:3,align:"left",children:e.name})}),t.jsx(x,{keyStr:"Курс",value:e.course}),t.jsx(x,{keyStr:"Форма аттестации",value:e.exam_type}),t.jsx(x,{keyStr:"Дата проведения",value:$(e.exam_date)}),t.jsx(x,{keyStr:"Оценка",value:e.grade}),t.jsx(x,{keyStr:"Номер ведомости",value:e.bill_num}),t.jsx(x,{keyStr:"Семестр",value:w(e.exam_date,+e.course)}),t.jsx(x,{keyStr:"Кафедра",value:e.chair}),t.jsx(x,{keyStr:"Преподаватель",value:t.jsx(V,{type:"staff",name:e.teacher}),direction:"vertical"})]}),he=({items:e,type:i})=>t.jsx(t.Fragment,{children:e.map((n,r)=>t.jsxs(T.Fragment,{children:[t.jsx(le,{item:n,type:i}),r!==e.length-1&&t.jsx(X,{margin:"0",width:"100%"})]},n.id))}),ge=h.memo(he),me=({items:e,loading:i})=>{var n;return e?i?t.jsxs(c,{d:"column",ai:"flex-start",gap:"12px",children:[t.jsx(S,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx(B,{quantity:5,avatarShape:"rect"}),t.jsx(S,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx(B,{quantity:10,avatarShape:"rect"})]}):t.jsx(c,{d:"column",gap:"20px",children:(n=Object.keys(e))==null?void 0:n.map(r=>t.jsxs(c,{d:"column",children:[t.jsxs(y,{size:3,align:"left",width:"fit-content",children:[r,t.jsx(u,{children:e[r].length})]}),t.jsx(ge,{items:e[r]||[],type:r,loading:i})]},r))}):null},fe=h.memo(me),je=a.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    gap: 2px;
    height: 10px;
    background: var(--block-content);
`,j=a.div`
    width: ${({percent:e})=>`calc(${e} * 100%)`};
    height: 10px;
    background: ${({color:e})=>e};
    display: flex;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    display: ${({percent:e})=>e===0&&"none"};
`,b=a(c)`
    opacity: ${({percentage:e})=>e===0&&"0.2"};
`,k=a.div`
    min-width: 10px;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${({color:e})=>e};
`,be=({data:e,loading:i})=>{if(!e)return null;if(i)return t.jsx(S,{margin:"0",shape:"rect",size:{width:"100%",height:"12px"}});const n=ne(e);return t.jsxs(c,{d:"column",gap:"10px",children:[t.jsxs(je,{children:[t.jsx(j,{percent:n[5],color:p.green.main}),t.jsx(j,{percent:n[4],color:p.blue.main}),t.jsx(j,{percent:n[3],color:p.orange.main}),t.jsx(j,{percent:n[2],color:p.red.main})]}),t.jsxs(c,{gap:"30px",children:[t.jsxs(b,{percentage:n[5],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:p.green.main}),t.jsxs(u,{children:["5 - ",(n[5]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[4],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:p.blue.main}),t.jsxs(u,{children:["4 - ",(n[4]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[3],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:p.orange.main}),t.jsxs(u,{children:["3 - ",(n[3]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[2],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:p.red.main}),t.jsxs(u,{children:["2 - ",(n[2]*100).toFixed(1),"%"]})]})]})]})},ke=a.div`
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: linear-gradient(270deg, #246655, #46b99b, #46a4b9);
    background-size: 600% 600%;

    -webkit-animation: AStudentBackground 10s ease infinite;
    -moz-animation: AStudentBackground 10s ease infinite;
    animation: AStudentBackground 10s ease infinite;

    img {
        filter: drop-shadow(2px 4px 25px black);
    }

    @-webkit-keyframes AStudentBackground {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AStudentBackground {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AStudentBackground {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`,ye=a.div`
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: linear-gradient(270deg, #243766, #4657b9, #46a4b9, #5d46b9);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`,we=e=>{if(!e)return"empty";let i=0,n=!1;for(let r=0;r<e.length;r++){const{grade:s}=e[r];if(!s)return"empty";s!=="Отлично"&&s!=="Хорошо"&&s!=="Зачтено"&&(n=!0),s!=="Зачтено"&&s!=="Отлично"&&i++}return n?"empty":i===1?"almost":i>1?"empty":"a-student"},Se=({data:e})=>{const i=we(e);return i==="empty"?null:i==="almost"?t.jsxs(ye,{children:[t.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(y,{size:3,align:"left",children:"Почти отличник"}),t.jsx(u,{fontSize:"1rem",children:"В следующий раз повезет"})]}),t.jsx(D,{src:"https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g",width:"70px",height:"70px",loading:!1})]}):t.jsxs(ke,{children:[t.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(y,{size:3,align:"left",children:"В этом семестре ты отличник!"}),t.jsx(u,{fontSize:"1rem",children:"Наши поздравления!"})]}),t.jsx(D,{src:"https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif",width:"70px",height:"70px",loading:!1})]})},ze=()=>{const{data:e,preparedData:i,loading:n,error:r}=O.selectors.useData(),{data:{user:s}}=Y.useUser(),g=h.useMemo(()=>ee((s==null?void 0:s.course)??0),[s]),[d,N]=h.useState({id:w(new Date().toString(),(s==null?void 0:s.course)??1),title:w(new Date().toString(),(s==null?void 0:s.course)??1).toString()+" семестр"}),[m,_]=h.useState(null),I=(e==null?void 0:e.length)===0&&!n,A=m&&!Object.keys(m??{}).find(o=>(o==null?void 0:o.length)!==0)&&!n,E=`${(d==null?void 0:d.id)!==-1?d==null?void 0:d.id:""}`,F=o=>{O.effects.getFx({semestr:o?`${(o==null?void 0:o.id)!==-1?o==null?void 0:o.id:""}`:E})};return t.jsx(J,{loading:n,load:F,error:r,data:e,children:t.jsx(K,{topRightCornerElement:!!(s!=null&&s.id)&&t.jsx(Q,{onClick:F,width:"150px",items:g,selected:d,setSelected:N}),children:I||!e?t.jsx(C,{text:"Данных за этот семестр нет, попробуйте другой!"}):t.jsxs(t.Fragment,{children:[!m&&!n&&t.jsx(Se,{data:e}),t.jsx(Z,{whereToSearch:e,searchEngine:te,setResult:_,placeholder:"Поиск предметов",loadingOnType:!0}),A&&t.jsx(C,{text:"По данному запросу ничего не найдено",image:t.jsx(W,{})}),!A&&t.jsxs(c,{d:"column",gap:"40px",children:[t.jsx(be,{data:e,loading:n}),t.jsx(fe,{items:m??i,loading:n})]})]})})})};export{ze as default};
