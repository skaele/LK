import{r as O,s as b,j as e,R as N,a7 as k,aY as B,bN as H,aZ as U,a2 as A,bQ as z,ce as I,bP as $}from"./vendor-ab783af7.js";import{G as R,K as G,O as W,a2 as C,R as L,aX as _,bv as K,bw as Q,bx as Y,by as w,bz as q,a$ as J,bA as V,bB as X,b7 as Z,U as ee,bC as se,bD as te,o as f,J as u,bE as y,bF as ie,bG as ae,Q as ne,bH as re,E as T,h as E,T as S,bI as oe,bJ as le,bK as ce,bL as de,bM as xe,am as he,Y as ue,W as pe,bN as je}from"./index-07cca455.js";const ge=s=>s==="Male"?"Мужской":"Женский",P=O.memo(be),me=b.div`
    width: 100%;
`;function be({user:s}){const{status:t,sex:a,birthday:r,code:n,faculty:p,course:j,group:g,specialty:o,specialization:x,degreeLength:m,educationForm:v,finance:l,degreeLevel:D,enterYear:F,subdivisions:c,authorIDs:d}=s,M=[{key:"Статус",value:t},{key:"Пол",value:ge(a)},{key:"Дата рождения",value:r},{key:"Код студента",value:n},{key:"Факультет",value:p},{key:"Курс",value:j},{key:"Группа",value:g},{key:"Направление",value:o},{key:"Специализация",value:x},{key:"Срок обучения",value:m},{key:"Форма обучения",value:v},{key:"Вид финансирования",value:l},{key:"Сведения о трудоустройстве",value:!!(c!=null&&c.length)&&(c==null?void 0:c.map((i,h)=>e.jsxs(N.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[i.subdivision&&e.jsxs("div",{children:["Подразделение: ",i.subdivision]}),i.post&&e.jsxs("div",{children:["Должность: ",i.post]}),i.wage&&i.jobType&&e.jsxs("div",{children:["Ставка: ",i.wage,"; ",i.jobType]})]}),h<c.length-1&&e.jsx(R,{margin:"16px 0",width:"100%"})]},h)))},{key:"Уровень образования",value:D},{key:"Год набора",value:F},{key:"Авторские идентификаторы",value:!!d&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[d.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",d.wosReasearcher]}),d.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",d.scopus]}),d.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",d.eLibrary]})]})}];return e.jsx(me,{children:M.map(({key:i,value:h})=>!!h&&e.jsx(G,{keyStr:i,value:h,direction:typeof h=="object"?"vertical":"horizontal"},i))})}const ve=b.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,fe=b.div``,ye=({orders:s})=>e.jsxs(ve,{children:[!(s!=null&&s.length)&&e.jsx(W,{children:"Нет приказов"}),s==null?void 0:s.map(t=>e.jsx(fe,{children:t},t))]}),ke=O.memo(ye),Ie=({pages:s,currentPage:t})=>{const{data:{user:a}}=C.useUser();return a?e.jsx(L,{children:e.jsx(_,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:s[t]})}):null},we=({pages:s,user:t,currentPage:a,setCurrentPage:r})=>{const{fullName:n,avatar:p,user_status:j,degreeLevel:g}=t,o=j==="stud"?"Студент":"Сотрудник",x=()=>{ne.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:re.logout})};return e.jsxs(K,{children:[e.jsx(Q,{fullName:n,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(Y,{children:[e.jsxs(w,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(q,{children:e.jsx(J,{name:n,avatar:p,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs(V,{children:[e.jsxs(X,{children:[e.jsx("b",{children:n}),e.jsx(W,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(Z,{words:[o,g??""]})})]}),e.jsx(ee,{sliderWidth:"100%",pages:s,currentPage:a,setCurrentPage:r,appearance:!1})]})]}),e.jsx(w,{maxWidth:"250px",height:"fit-content",children:e.jsxs(se,{children:[e.jsx(k,{to:te,children:e.jsx(f,{background:u.white.transparent2,icon:e.jsx(y,{width:"30px",background:u.grey.main,children:e.jsx(B,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(ie,{type:"v-button"}),e.jsx(k,{to:ae,children:e.jsx(f,{background:u.white.transparent2,icon:e.jsx(y,{width:"30px",background:u.purple.main,children:e.jsx(H,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(f,{background:u.white.transparent2,icon:e.jsx(y,{width:"30px",background:u.red.main,children:e.jsx(U,{})}),text:"Выйти",height:"73px",onClick:x,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},Te=({user:s})=>{var a;const t=A();return e.jsx(T,{d:"column",children:(a=s.subdivisions)==null?void 0:a.map((r,n)=>e.jsxs(T,{d:"column",gap:"8px",ai:"flex-start",children:[e.jsx(E,{align:"left",size:3,children:r.subdivision}),e.jsx(E,{align:"left",size:4,children:r.post}),e.jsx(S,{title:"Корпоративная электронная почта",icon:e.jsx(z,{}),description:s==null?void 0:s.email_staff,rightIcon:e.jsx(I,{}),onClick:()=>t.push(oe)}),e.jsx(S,{title:"Внутренний телефон",icon:e.jsx($,{}),description:r.phone_inner,rightIcon:e.jsx(I,{}),onClick:()=>t.push(le)}),e.jsx(ce,{}),e.jsx(de,{subDivisionGuidStaff:r.guid_staff}),n<s.subdivisions.length-1&&e.jsx(R,{margin:"16px 0",width:"100%"})]},n))})},Ee=b.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`,Oe=()=>{const{data:{user:s},error:t}=C.useUser(),a=A(),n=xe().get("page"),{allRoutes:p}=he.useMenu();if(!s||!p)return null;if(t)return e.jsx(ue,{text:t});const j=[{title:"Учетная карточка",content:e.jsx(P,{user:s}),id:"userCard"},{title:"Приказы",content:e.jsx(ke,{orders:s.orders}),id:"orders"}],g=[{title:"Учетная карточка",content:e.jsx(P,{user:s}),id:"userCard"},{title:"Контактные данные",content:e.jsx(Te,{user:s}),id:"contactDetails"}],o=s.user_status==="stud"?j:g,x=o.findIndex(l=>l.id===n)||0,m=x===-1?0:x,v=l=>{a.push({search:`?page=${o[l].id}`})};return e.jsx(pe,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(Ee,{children:[e.jsx(we,{user:s,currentPage:m,setCurrentPage:v,pages:o}),e.jsx(L,{children:e.jsx(_,{height:"100%",maxWidth:"750px",children:e.jsx(je,{})})}),e.jsx(Ie,{currentPage:m,pages:o.map(l=>l.content)})]})})};export{Oe as default};
