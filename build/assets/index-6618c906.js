import{s as r,j as e,bm as G,bn as N,bo as R,bp as I,bq as T,br as _,bs as M,bt as W,bu as q,bv as K,bw as U,bx as J,W as Q,Q as V,by as X,bz as Y,bA as Z,bB as ee,bC as ie,G as ne,bD as te,bE as se,bF as ae,H as re,bG as oe,b4 as ce,bH as le,bI as de,bJ as xe,bK as ue,bL as pe,bM as he,bN as ge,bO as je,bP as me,bQ as fe,bR as be,bS as ke,bT as ye,bU as we,bV as Se,r as g,R as Oe,bW as ve}from"./vendor-9cc634b6.js";import{bP as He,av as x,l as O,bQ as v,bR as F,ab as Ce,a7 as c,aJ as Fe,u as h,bf as Be,K as u,ah as ze,g as $e,az as y,aP as B,T as w,f as p,b1 as z,bS as $,z as Ae,W as De,P as Pe,H as Le,E as A,O as Ee}from"./index-c587e0f5.js";const k=(i,s)=>{const n=new Date(i).getMonth();return n>1&&n<7?+s*2:+s*2-1},Ge=i=>{const s=k(new Date().toISOString(),i),n=[];for(let t=1;t<=s;t++)n.push({id:t,title:`${t} семестр`});return n.push({id:-1,title:"Все семестры"}),n},Ne=(i,s)=>He(s.filter(n=>x(n.name).includes(x(i))||x(n.teacher).includes(x(i))||x(O(n.exam_date)).includes(x(i))||x(n.bill_num).includes(x(i))));function Re(i){const s={5:0,4:0,3:0,2:0},n=i.filter(t=>!!t.grade&&t.exam_type!=="Зачет").length;return i.forEach(({grade:t,exam_type:a})=>{a!=="Зачет"&&t!==void 0&&s[v[t]]++}),n===0?s:Object.keys(s).reduce((t,a)=>(t[+a]=s[+a]/n,t),{})}const Ie=2.7;r.div`
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
        width: ${({width:i})=>i}px;
        height: ${({width:i})=>i}px;

        & g {
            & circle {
                fill: none;
                stroke-width: ${({width:i})=>i/10};
                stroke: var(--almostTransparentOpposite);
                transform: translate(10px, 10px);
                transition: 0.3s;
            }

            & :nth-child(2) circle {
                transition: 0.3s;
                stroke-dasharray: ${({width:i})=>i*Ie}px;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 200px;
    }
`;r.div`
    display: flex;
    gap: 16px;

    @media (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }
`;r.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        width: 200px;
    }
`;r.div`
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
`;const S=i=>i?F[i]||F.default:"var(--grey)",Te=i=>i.split(" ").reduce((s,n,t)=>(t===0?s.push(n):s.push(`${n[0]}.`),s),[]).join(" "),_e=r.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    color: ${({grade:i})=>S(i)};

    width: 22px;
    height: 22px;

    min-width: 22px;
    min-height: 22px;
    border-radius: 50%;

    svg {
        width: 100%;
        height: 100%;
    }
`,Me=({grade:i})=>e.jsx(_e,{grade:i,children:i&&(v[i]>2?e.jsx(G,{}):e.jsx(N,{}))}),We=r.div`
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({isGraded:i})=>i?1:.4};
`,qe=r.div`
    display: flex;
    margin-right: 10px;
    font-weight: 500;
    hyphens: auto;

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`,Ke=r.strong`
    color: ${({color:i})=>i};
    font-weight: 600;
    width: 30px;
    display: flex;
    justify-content: flex-end;
`,Ue=i=>{const s=x(i),t=[{keys:["распознаван"],icon:e.jsx(I,{})},{keys:["принт"],icon:e.jsx(T,{})},{keys:["жизнед"],icon:e.jsx(_,{})},{keys:["истор"],icon:e.jsx(M,{})},{keys:["информат"],icon:e.jsx(W,{})},{keys:["мобильн"],icon:e.jsx(q,{})},{keys:["безопасн"],icon:e.jsx(K,{})},{keys:["автоматиз"],icon:e.jsx(U,{})},{keys:["обработ"],icon:e.jsx(J,{})},{keys:["операционн"],icon:e.jsx(Q,{})},{keys:["эконом"],icon:e.jsx(V,{})},{keys:["информацион","программир"],icon:e.jsx(X,{})},{keys:["анализ"],icon:e.jsx(Y,{})},{keys:["компьют","алгоритм","электрон"],icon:e.jsx(Z,{})},{keys:["сети","сетей"],icon:e.jsx(ee,{})},{keys:["матем"],icon:e.jsx(ie,{})},{keys:["философ"],icon:e.jsx(ne,{})},{keys:["данны"],icon:e.jsx(te,{})},{keys:["язык"],icon:e.jsx(se,{})},{keys:["спорт"],icon:e.jsx(ae,{})},{keys:["проектная"],icon:e.jsx(re,{})},{keys:["интеллект"],icon:e.jsx(oe,{})},{keys:["практика"],icon:e.jsx(ce,{})},{keys:["предприним"],icon:e.jsx(le,{})},{keys:["коммуникац"],icon:e.jsx(de,{})},{keys:["управлени"],icon:e.jsx(xe,{})},{keys:["научн"],icon:e.jsx(ue,{})},{keys:["вкр","итоговая","аттестация"],icon:e.jsx(pe,{})},{keys:["переработ"],icon:e.jsx(he,{})},{keys:["машин","инжен"],icon:e.jsx(ge,{})},{keys:["проектир","расчет"],icon:e.jsx(je,{})},{keys:["производ"],icon:e.jsx(me,{})},{keys:["эколог"],icon:e.jsx(fe,{})},{keys:["защит"],icon:e.jsx(be,{})},{keys:["хими"],icon:e.jsx(ke,{})},{keys:["патент"],icon:e.jsx(ye,{})},{keys:["материал"],icon:e.jsx(we,{})},{keys:["физик"],icon:e.jsx(Se,{})}].find(a=>a.keys.find(l=>s.includes(l)));return t?t.icon:e.jsx(R,{})},Je=({item:i,number:s,type:n})=>{const{open:t}=Ce(),{name:a,grade:l}=i,d=()=>i.grade&&t(e.jsx(Ve,{item:i}),i.name);return e.jsxs(We,{onClick:d,isGraded:!!i.grade,children:[e.jsxs(c,{gap:"16px",children:[e.jsx(Fe,{color:S(l),borderRadius:"9px",children:Ue(a)}),e.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(qe,{children:a}),e.jsx(h,{children:e.jsx(Be,{words:[Te(i.teacher),O(i.exam_date)]})})]})]}),e.jsx(Ke,{color:S(l),children:n==="Зачет"?e.jsx(Me,{grade:l}):l&&v[l]})]})},Qe=r.div`
    width: 400px;

    @media (max-width: 800px) {
        width: 100%;
    }
`,Ve=({item:i})=>e.jsxs(Qe,{children:[e.jsx(u,{keyStr:"Курс",value:i.course}),e.jsx(u,{keyStr:"Форма аттестации",value:i.exam_type}),e.jsx(u,{keyStr:"Дата проведения",value:O(i.exam_date)}),e.jsx(u,{keyStr:"Оценка",value:i.grade}),e.jsx(u,{keyStr:"Номер ведомости",value:i.bill_num}),e.jsx(u,{keyStr:"Семестр",value:k(i.exam_date,+i.course)}),e.jsx(u,{keyStr:"Кафедра",value:i.chair}),e.jsx(u,{keyStr:"Преподаватель",value:e.jsx(ze,{type:"staff",name:i.teacher}),direction:"vertical"})]}),Xe=({items:i,type:s})=>e.jsx(e.Fragment,{children:i.map((n,t)=>e.jsxs(Oe.Fragment,{children:[e.jsx(Je,{item:n,number:t+1,type:s}),t!==i.length-1&&e.jsx($e,{margin:"0",width:"100%"})]},n.id))}),Ye=g.memo(Xe),Ze=({items:i,loading:s})=>{var n;return i?s?e.jsxs(c,{d:"column",ai:"flex-start",gap:"12px",children:[e.jsx(y,{shape:"rect",size:{width:"100px",height:"30px"}}),e.jsx(B,{quantity:5,avatarShape:"rect"}),e.jsx(y,{shape:"rect",size:{width:"100px",height:"30px"}}),e.jsx(B,{quantity:10,avatarShape:"rect"})]}):e.jsx(c,{d:"column",gap:"20px",children:(n=Object.keys(i))==null?void 0:n.map(t=>e.jsxs(c,{d:"column",children:[e.jsxs(w,{size:3,align:"left",width:"fit-content",children:[t,e.jsx(h,{children:i[t].length})]}),e.jsx(Ye,{items:i[t]||[],type:t,loading:s})]},t))}):null},ei=g.memo(Ze),ii=r.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    gap: 2px;
    height: 10px;
    background: var(--form);
`,m=r.div`
    width: ${({percent:i})=>`calc(${i} * 100%)`};
    height: 10px;
    background: ${({color:i})=>i};
    display: flex;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    display: ${({percent:i})=>i===0&&"none"};
`,f=r(c)`
    opacity: ${({percentage:i})=>i===0&&"0.2"};
`,b=r.div`
    min-width: 10px;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${({color:i})=>i};
`,ni=({data:i,loading:s})=>{if(!i)return null;if(s)return e.jsx(y,{margin:"0",shape:"rect",size:{width:"100%",height:"12px"}});const n=Re(i);return e.jsxs(c,{d:"column",gap:"10px",children:[e.jsxs(ii,{children:[e.jsx(m,{percent:n[5],color:p.green.main}),e.jsx(m,{percent:n[4],color:p.blue.main}),e.jsx(m,{percent:n[3],color:p.orange.main}),e.jsx(m,{percent:n[2],color:p.red.main})]}),e.jsxs(c,{gap:"30px",children:[e.jsxs(f,{percentage:n[5],gap:"4px",w:"fit-content",children:[e.jsx(b,{color:p.green.main}),e.jsxs(h,{children:["5 - ",(n[5]*100).toFixed(1),"%"]})]}),e.jsxs(f,{percentage:n[4],gap:"4px",w:"fit-content",children:[e.jsx(b,{color:p.blue.main}),e.jsxs(h,{children:["4 - ",(n[4]*100).toFixed(1),"%"]})]}),e.jsxs(f,{percentage:n[3],gap:"4px",w:"fit-content",children:[e.jsx(b,{color:p.orange.main}),e.jsxs(h,{children:["3 - ",(n[3]*100).toFixed(1),"%"]})]}),e.jsxs(f,{percentage:n[2],gap:"4px",w:"fit-content",children:[e.jsx(b,{color:p.red.main}),e.jsxs(h,{children:["2 - ",(n[2]*100).toFixed(1),"%"]})]})]})]})},ti=r.div`
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
`,si=r.div`
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
`,ai=i=>{if(!i)return"empty";let s=0;for(let n=0;n<i.length;n++){const{grade:t}=i[n];if(!t)return"empty";t!=="Зачтено"&&t!=="Отлично"&&s++}return s===1?"almost":s>1?"empty":"a-student"},ri=({data:i})=>{const s=ai(i);return s==="empty"?null:s==="almost"?e.jsxs(si,{children:[e.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(w,{size:3,align:"left",children:"Почти отличник"}),e.jsx(h,{fontSize:"1rem",children:"В следующий раз повезет"})]}),e.jsx(z,{src:"https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g",width:"70px",height:"70px",loading:!1})]}):e.jsxs(ti,{children:[e.jsxs(c,{d:"column",ai:"flex-start",gap:"4px",children:[e.jsx(w,{size:3,align:"left",children:"В этом семестре ты отличник!"}),e.jsx(h,{fontSize:"1rem",children:"Наши поздравления!"})]}),e.jsx(z,{src:"https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif",width:"70px",height:"70px",loading:!1})]})},li=()=>{const{data:i,preparedData:s,loading:n,error:t}=$.selectors.useData(),{data:{user:a}}=Ae.useUser(),l=g.useMemo(()=>Ge((a==null?void 0:a.course)??0),[a]),[d,D]=g.useState({id:k(new Date().toString(),(a==null?void 0:a.course)??1),title:k(new Date().toString(),(a==null?void 0:a.course)??1).toString()+" семестр"}),[j,P]=g.useState(null),L=(i==null?void 0:i.length)===0&&!n,H=j&&!Object.keys(j??{}).find(o=>(o==null?void 0:o.length)!==0)&&!n,E=`${(d==null?void 0:d.id)!==-1?d==null?void 0:d.id:""}`,C=o=>{$.effects.getFx({semestr:o?`${(o==null?void 0:o.id)!==-1?o==null?void 0:o.id:""}`:E})};return e.jsx(De,{loading:n,load:C,error:t,data:i,children:e.jsx(Pe,{topRightCornerElement:!!(a!=null&&a.id)&&e.jsx(Le,{onClick:C,width:"150px",items:l,selected:d,setSelected:D}),children:L||!i?e.jsx(A,{text:"Данных за этот семестр нет, попробуйте другой!"}):e.jsxs(e.Fragment,{children:[!j&&!n&&e.jsx(ri,{data:i}),e.jsx(Ee,{whereToSearch:i,searchEngine:Ne,setResult:P,placeholder:"Поиск предметов",loadingOnType:!0}),H&&e.jsx(A,{text:"По данному запросу ничего не найдено",image:e.jsx(ve,{})}),!H&&e.jsxs(c,{d:"column",gap:"40px",children:[e.jsx(ni,{data:i,loading:n}),e.jsx(ei,{items:j??s,loading:n})]})]})})})};export{li as default};
