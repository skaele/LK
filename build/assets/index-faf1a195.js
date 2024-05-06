import{s as x,r as m,j as t,A as V,u as C,y as N,x as Q,p as L,T as _,Z as y,bK as J,C as K,k as Z,L as X,aj as Y,aI as ee}from"./vendor-35c3991b.js";import{W as te}from"./styled-eb00b56a.js";import{$ as ie,g as se,R as ne,a0 as F,t as $,bc as R,J as f,H as j,U as I,bd as T,be as B,w as A,aw as U,bf as oe,a6 as ae,bg as re,bh as le,az as de,bi as ce,P as xe,ay as pe,u as he}from"./index-46a096a9.js";import{S as ue}from"./index-4ee90ac4.js";const fe=()=>ie.get(`?getPhoneBookDivisions&token=${se()}`),ge=x.div`
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 100px;
    height: 100%;

    @media (max-width: 550px) {
        padding: 10px;
    }
`,me=x.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.2s;
    opacity: ${({$loading:e})=>e?1:0};
    visibility: ${({$loading:e})=>e?"visible":"hidden"};
    transform: scale(${({$loading:e})=>e?"1":"0.98"});
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    img {
        width: 40px;
    }
`,ve=x.div`
    transition: 0.2s;
    height: 100%;
`,je=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);

    & > * + * {
        margin-top: 10px;
    }
`,be=({children:e,load:i,loading:a,error:s,data:o,deps:n=[],couldBeReloaded:r})=>(m.useEffect(()=>{!o&&!a&&i()},n),t.jsx(ge,{children:o?!s&&t.jsx(ve,{children:e}):t.jsx(me,{$loading:!!s||!o,children:s?t.jsx(je,{children:t.jsx(F,{text:s,children:r&&t.jsx($,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(V,{})})})}):t.jsx(ne,{})})})),H=C(),W=C(),b=N(async()=>{const{data:e}=await fe();if(!(e!=null&&e.map))throw new Error("Не удалось загрузить подразделения");return e});Q({clock:W,target:b});const we=b.pending,Se=C(),$e=L(null).on(H,(e,i)=>i),ye=L(null).on(b.doneData,(e,i)=>i),ke=L(null).on(b.failData,(e,i)=>i.message).on(b,()=>null),z={setSubdivisionPath:H,getSubdivisions:W,clearSubdivisionData:Se},v={subdivisionPath:$e,subdivisions:ye,error:ke,pedningGetSubdividions:we},q=({item:e,parents:i})=>{var l;const a=_(),o=R().get("fio")||"",n=e.subdivs,r=y(v.subdivisionPath),[c,h]=m.useState(!1);return m.useEffect(()=>{h(!!(r&&r.some(d=>d.name===e.name)))},[r]),t.jsxs(f,{p:`5px 0 5px ${i.length*15}px`,d:"column",children:[t.jsx(Ee,{$chosen:!!(r&&((l=r[0])==null?void 0:l.name)===e.name),onClick:()=>{z.setSubdivisionPath([e,...i]),a.push({search:new URLSearchParams({subdivision:e.name,fio:o}).toString()})},children:t.jsxs(f,{ai:"center",jc:"space-between",w:"100%",gap:"5px",children:[e.name,n.length>0&&t.jsx($,{icon:c?t.jsx(J,{size:20}):t.jsx(K,{size:20}),width:"20px",height:"20px",background:"transparent",onClick:d=>{d.stopPropagation(),h(u=>!u)}})]})}),c&&n.map(d=>t.jsx(q,{item:d,parents:[e,...i]},d.name))]})},Ee=x.div`
    background-color: ${({$chosen:e})=>e?"var(--theme-1t)":"transparent"};
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`,Pe=x.div`
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    min-height: 110px;
    width: 100%;
    padding-left: ${({isEmployee:e})=>e?"125px":"20px"};

    ${j.isNotMobile} {
        padding-left: ${({isEmployee:e})=>e?"180px":"0"};
    }

    @media (max-width: 800px) {
        padding-bottom: 0;
    }
`,Ce=x.div`
    width: 700px;
    padding-bottom: 20px;
    /* padding: 40px 35px 20px 35px; */

    @media (max-width: 800px) {
        width: 100%;
        /* padding: 20px 16px 10px 36px; */
    }
`,Le=x.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding: 60px 20px 10px 20px;

    ${j.isNotMobile} {
        padding: 35px 20px 10px ${({isEmployee:e})=>e?"180px":"0"};
    }
`,Re=x.h3`
    font-size: 1.17rem;
    line-height: 28px;
`,ze=x.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`,Be=x.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;

    a {
        width: 100%;
    }
    button {
        width: 100%;
    }
`,De=x.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 50;

    ${j.isMobile} {
        top: 95px;
        left: 10px;
    }
`,P=x(f)`
    overflow-x: hidden;
    padding-right: 10px;
    ${j.isNotMobile} {
        overflow-y: scroll;
        height: calc(100vh - 240px);
    }
    ${j.isTablet} {
        height: calc(100vh - 300px);
    }
`,Me=()=>{const{subdivisions:e}=y({subdivisions:v.subdivisions});return e?t.jsx(P,{d:"column",children:e.map(i=>t.jsx(q,{item:i,parents:[]},i.name))}):null},w=({title:e,items:i,action:a})=>t.jsxs(f,{d:"column",ai:"flex-start",gap:"7px",children:[t.jsx(I,{children:e}),i.length>0?i.map(s=>t.jsxs(_e,{onClick:()=>a("fio"in s?s:null),children:["fio"in s&&t.jsx(T,{name:s.fio,avatar:s.avatar,width:B("horizontal","middle"),height:B("horizontal","middle"),marginRight:"7px"}),"fio"in s?s.fio:s.name]},"fio"in s?s.fio+s.post:s.name)):t.jsx(F,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Z,{})})]}),_e=x.button`
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    text-align: left;
    width: 100%;
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`,Fe=({title:e,children:i})=>i?t.jsxs(f,{d:"column",ai:"flex-start",jc:"flex-start",gap:"10px",children:[t.jsx(I,{fontSize:"0.9rem",children:e}),t.jsx(Ie,{children:i})]}):null,Ie=x.p`
    padding-left: 14px;
`,S=({title:e,info:i,isEmployee:a,avatar:s})=>{const{close:o}=A(),{isMobile:n}=U();return t.jsxs(f,{d:"column",children:[t.jsxs(Pe,{isEmployee:!!a,children:[t.jsx(oe,{fullName:e,height:"200px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),a&&t.jsx(De,{children:t.jsx(T,{avatarModal:!0,border:!0,name:e,avatar:s,width:n?"110px":"150px",height:n?"110px":"150px",marginRight:"0"})}),t.jsx(Re,{children:e})]}),t.jsx(Ce,{children:t.jsx(ae,{minWidth:"100%",direction:"horizontal",showPages:!0,gap:20,children:i.map(({subtitle:r,attributes:c})=>{const h=c.find(l=>l.id==="jobType");return t.jsxs(Le,{isEmployee:!!a,children:[r&&t.jsx(ze,{children:r}),c.map(({title:l,text:d,id:u})=>t.jsx(Fe,{title:l,children:d?u==="email"?t.jsx("a",{href:`mailto:${d}`,children:d}):u==="innerPhone"?d.split("; ").map((g,k,p)=>t.jsx("a",{href:`tel:+7(495) 223-05-23,${g}`,children:k===p.length-1?g:`${g}; `},g)):u==="mobile"?t.jsx("a",{href:`tel:${d}`,children:d}):t.jsx(t.Fragment,{children:d}):"-"},l))]},r?e+r+(h==null?void 0:h.text):e)})},e)}),a&&t.jsxs(Be,{children:[t.jsx(X,{to:re(le,{page:"current",filter:e}),children:t.jsx($,{icon:t.jsx(Y,{}),text:"Расписание",onClick:()=>{o()},background:"var(--theme-4)",width:"100%"})}),t.jsx($,{icon:t.jsx(ee,{}),text:"Написать",onClick:()=>o(),width:"100%",background:"var(--theme-4)",isActive:!1})]})]})},G=(e,i)=>{if(e.length===0)return[];const a=[];return e.forEach(s=>{var n,r;(r=(n=s.head)==null?void 0:n.fio)!=null&&r.toLowerCase().includes(i)&&a.push(s.head),s.staff.forEach(c=>{c.fio.toLowerCase().includes(i)&&a.push(c)});const o=G(s.subdivs,i);a.push(...o)}),a.filter((s,o,n)=>o===n.findIndex(r=>r.fio===s.fio))},E=e=>e.job.map(i=>({subtitle:i.subdivision+" • "+i.post,attributes:[{id:"jobType",title:"Тип работы",text:i.jobType},{id:"email",title:"Корпоративная электронная почта",text:i.email},{id:"innerPhone",title:"Внутренний телефон",text:i.phone_inner},{id:"mobile",title:"Служебный мобильный телефон",text:i.phone_direct},{title:"Адрес рабочего места",text:i.address},{title:"Номер кабинета",text:i.room}]})),Te=()=>{var h;const e=R(),i=e.get("fio")||"",a=e.get("subdivision")||"",{subdivisionPath:s,subdivisions:o}=y({subdivisionPath:v.subdivisionPath,subdivisions:v.subdivisions}),n=s==null?void 0:s[0],{open:r}=A(),c=m.useMemo(()=>i&&o?G(n?[n]:o,i.toLowerCase()):[],[i,a,o]);return i&&o?t.jsx(P,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:t.jsx(w,{title:"Сотрудники",items:c,action:l=>{r(t.jsx(S,{title:l.fio,info:E(l),avatar:l.avatar,isEmployee:!0}))}})}):n?t.jsxs(P,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:[t.jsx(w,{title:"Информация",items:[n],action:()=>{r(t.jsx(S,{title:n.name,info:[{attributes:[{title:"Руководитель",text:n.head.fio},{title:"Корпоративная электронная почта подразделения",text:n.email},{id:"innerPhone",title:"Внутренний телефон",text:n.phone_inner},{id:"mobile",title:"Прямой телефон",text:n.phone_direct},{title:"Адрес рабочего места",text:n.address},{title:"Номер кабинета",text:n.room}]}]}))}}),((h=n==null?void 0:n.head)==null?void 0:h.fio)&&t.jsx(w,{title:"Руководитель",items:[n.head],action:l=>{r(t.jsx(S,{title:l.fio,info:E(l),avatar:l.avatar,isEmployee:!0}))}}),n.staff.filter(l=>l.fio!==n.head.fio).length>0&&t.jsx(w,{title:"Сотрудники",items:n.staff,action:l=>{r(t.jsx(S,{title:l.fio,info:E(l),avatar:l.avatar,isEmployee:!0}))}})]}):null},D=x.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    row-gap: ${({rowGap:e})=>e};
    column-gap: ${({columnGap:e})=>e};
    padding: ${({padding:e})=>e};
`,O=(e,i)=>{if(i==="")return null;const a=[],s=e.find(o=>o.name===i);if(s)a.push(s);else{for(const o of e){const n=O(o.subdivs,i);n&&n.length>0&&a.push(...n,o)}return a}return a},M=(e,i)=>{const a=O(e,i)||null;z.setSubdivisionPath(a)},qe=()=>{const e=R(),i=e.get("subdivision")||"",a=e.get("fio")||"",s=_(),[o,n]=y([v.subdivisions,v.error]);m.useEffect(()=>{i&&(o!=null&&o.find)&&r({id:i,value:i,title:i})},[o]);const r=p=>{o&&M(o,(p==null?void 0:p.value)??"")},{isMobile:c}=U(),[h,l]=m.useState(""),d=p=>{s.push({search:new URLSearchParams({subdivision:i,fio:p}).toString()})},[u,g,k]=de({onDebounce:d,delay:400,defaultValue:a,triggerDelay:200,triggerOn:p=>(l(p),h!==p),onClear:d});return c&&s.push(ce),t.jsx(te,{children:t.jsx(xe,{children:t.jsxs(f,{d:"column",gap:"15px",children:[t.jsxs(D,{columns:c?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(ue,{width:"100%",value:i,setValue:p=>{s.push({search:new URLSearchParams({subdivision:p,fio:a}).toString()}),p===""&&o&&M(o,p)},onHintClick:r,placeholder:"Структура",request:pe}),!c&&t.jsx(he,{value:u,setValue:g,loading:k,placeholder:"Сотрудник"})]}),t.jsx(be,{data:o,error:n,load:()=>{z.getSubdivisions()},couldBeReloaded:!0,children:t.jsxs(D,{columns:c?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(Me,{}),!c&&t.jsx(Te,{})]})})]})})})};export{qe as default};
