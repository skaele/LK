import{s as b,r as C,j as e,R as N,aa as k,bq as B,ck as H,br as q,a5 as O,cm as U,cT as I,cl as z}from"./vendor-9c916fad.js";import{H as W,K,X as _,ag as A,_ as L,b8 as R,bH as $,bI as G,bJ as Y,bK as w,bL as Q,bM as V,bN as X,bO as J,bg as Z,a0 as ee,bP as se,bQ as te,q as v,L as u,bR as y,bS as ie,bT as ne,Y as ae,bU as re,G as T,h as S,T as E,bV as oe,bW as ce,bX as le,bY as de,bZ as xe,aA as he,a2 as ue,W as pe,b_ as ge}from"./index-69617f61.js";const je=s=>s==="Male"?"Мужской":"Женский",P=C.memo(be),me=b.div.withConfig({componentId:"sc-p4s4cd-0"})(["width:100%;"]);function be({user:s}){const{status:t,sex:n,birthday:r,code:a,faculty:p,course:g,group:j,specialty:o,specialization:x,degreeLength:m,educationForm:f,finance:c,degreeLevel:D,enterYear:M,subdivisions:l,authorIDs:d}=s,F=[{key:"Статус",value:t},{key:"Пол",value:je(n)},{key:"Дата рождения",value:r},{key:"Код студента",value:a},{key:"Факультет",value:p},{key:"Курс",value:g},{key:"Группа",value:j},{key:"Направление",value:o},{key:"Специализация",value:x},{key:"Срок обучения",value:m},{key:"Форма обучения",value:f},{key:"Вид финансирования",value:c},{key:"Сведения о трудоустройстве",value:!!(l!=null&&l.length)&&(l==null?void 0:l.map((i,h)=>e.jsxs(N.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[i.subdivision&&e.jsxs("div",{children:["Подразделение: ",i.subdivision]}),i.post&&e.jsxs("div",{children:["Должность: ",i.post]}),i.wage&&i.jobType&&e.jsxs("div",{children:["Ставка: ",i.wage,"; ",i.jobType]})]}),h<l.length-1&&e.jsx(W,{margin:"16px 0",width:"100%"})]},h)))},{key:"Уровень образования",value:D},{key:"Год набора",value:M},{key:"Авторские идентификаторы",value:!!d&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[d.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",d.wosReasearcher]}),d.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",d.scopus]}),d.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",d.eLibrary]})]})}];return e.jsx(me,{children:F.map(({key:i,value:h})=>!!h&&e.jsx(K,{keyStr:i,value:h,direction:typeof h=="object"?"vertical":"horizontal"},i))})}const fe=b.div.withConfig({componentId:"sc-guqxj3-0"})(["display:flex;flex-direction:column;gap:16px;"]),ve=b.div.withConfig({componentId:"sc-guqxj3-1"})([""]),ye=({orders:s})=>e.jsxs(fe,{children:[!(s!=null&&s.length)&&e.jsx(_,{children:"Нет приказов"}),s==null?void 0:s.map(t=>e.jsx(ve,{children:t},t))]}),ke=C.memo(ye),Ie=({pages:s,currentPage:t})=>{const{data:{user:n}}=A.useUser();return n?e.jsx(L,{children:e.jsx(R,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:s[t]})}):null},we=({pages:s,user:t,currentPage:n,setCurrentPage:r})=>{const{fullName:a,avatar:p,user_status:g,degreeLevel:j}=t,o=g==="stud"?"Студент":"Сотрудник",x=()=>{ae.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:re.logout})};return e.jsxs($,{children:[e.jsx(G,{fullName:a,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(Y,{children:[e.jsxs(w,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(Q,{children:e.jsx(V,{name:a,avatar:p,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs(X,{children:[e.jsxs(J,{children:[e.jsx("b",{children:a}),e.jsx(_,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(Z,{words:[o,j??""]})})]}),e.jsx(ee,{sliderWidth:"100%",pages:s,currentPage:n,setCurrentPage:r,appearance:!1})]})]}),e.jsx(w,{maxWidth:"250px",height:"fit-content",children:e.jsxs(se,{children:[e.jsx(k,{to:te,children:e.jsx(v,{background:u.white.transparent2,icon:e.jsx(y,{width:"30px",background:u.grey.main,children:e.jsx(B,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(ie,{type:"v-button"}),e.jsx(k,{to:ne,children:e.jsx(v,{background:u.white.transparent2,icon:e.jsx(y,{width:"30px",background:u.purple.main,children:e.jsx(H,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(v,{background:u.white.transparent2,icon:e.jsx(y,{width:"30px",background:u.red.main,children:e.jsx(q,{})}),text:"Выйти",height:"73px",onClick:x,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},Te=({user:s})=>{var n;const t=O();return e.jsx(T,{d:"column",children:(n=s.subdivisions)==null?void 0:n.map((r,a)=>e.jsxs(T,{d:"column",gap:"8px",ai:"flex-start",children:[e.jsx(S,{align:"left",size:3,children:r.subdivision}),e.jsx(S,{align:"left",size:4,children:r.post}),e.jsx(E,{title:"Корпоративная электронная почта",icon:e.jsx(U,{}),description:s==null?void 0:s.email_staff,rightIcon:e.jsx(I,{}),onClick:()=>t.push(oe)}),e.jsx(E,{title:"Внутренний телефон",icon:e.jsx(z,{}),description:r.phone_inner,rightIcon:e.jsx(I,{}),onClick:()=>t.push(ce)}),e.jsx(le,{}),e.jsx(de,{subDivisionGuidStaff:r.guid_staff}),a<s.subdivisions.length-1&&e.jsx(W,{margin:"16px 0",width:"100%"})]},a))})},Se=b.div.withConfig({componentId:"sc-1aqajbb-0"})(["display:flex;flex-direction:column;gap:12px;width:100%;align-items:center;"]),Ce=()=>{const{data:{user:s},error:t}=A.useUser(),n=O(),a=xe().get("page"),{allRoutes:p}=he.useMenu();if(!s||!p)return null;if(t)return e.jsx(ue,{text:t});const g=[{title:"Учетная карточка",content:e.jsx(P,{user:s}),id:"userCard"},{title:"Приказы",content:e.jsx(ke,{orders:s.orders}),id:"orders"}],j=[{title:"Учетная карточка",content:e.jsx(P,{user:s}),id:"userCard"},{title:"Контактные данные",content:e.jsx(Te,{user:s}),id:"contactDetails"}],o=s.user_status==="stud"?g:j,x=o.findIndex(c=>c.id===a)||0,m=x===-1?0:x,f=c=>{n.push({search:`?page=${o[c].id}`})};return e.jsx(pe,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(Se,{children:[e.jsx(we,{user:s,currentPage:m,setCurrentPage:f,pages:o}),e.jsx(L,{children:e.jsx(R,{height:"100%",maxWidth:"750px",children:e.jsx(ge,{})})}),e.jsx(Ie,{currentPage:m,pages:o.map(c=>c.content)})]})})};export{Ce as default};
