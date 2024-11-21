import{s as f,r as P,j as e,R as B,aa as b,bq as N,ck as H,br as q,a5 as O,cm as U,cT as I,cl as $}from"./vendor-48260ac4.js";import{H as _,K as z,X as W,ai as A,_ as L,bu as R,b_ as G,b$ as K,c0 as Y,c1 as w,c2 as J,c3 as Q,c4 as V,as as X,bC as Z,a0 as ee,c5 as se,c6 as te,q as y,L as u,c7 as k,c8 as ie,c9 as ne,Y as ae,ca as re,G as T,M as ce,h as S,T as C,cb as oe,cc as le,cd as de,ce as xe,cf as he,aJ as ue,a2 as pe,W as ge,cg as je}from"./index-b11f750d.js";const me=s=>s==="Male"?"Мужской":"Женский",E=P.memo(ve),fe=f.div.withConfig({componentId:"sc-p4s4cd-0"})(["width:100%;"]);function ve({user:s}){const{status:t,sex:n,birthday:r,code:a,faculty:p,course:g,group:j,specialty:c,specialization:x,degreeLength:m,educationForm:v,finance:o,degreeLevel:M,enterYear:D,subdivisions:l,authorIDs:d}=s,F=[{key:"Статус",value:t},{key:"Пол",value:me(n)},{key:"Дата рождения",value:r},{key:"Код студента",value:a},{key:"Факультет",value:p},{key:"Курс",value:g},{key:"Группа",value:j},{key:"Направление",value:c},{key:"Специализация",value:x},{key:"Срок обучения",value:m},{key:"Форма обучения",value:v},{key:"Вид финансирования",value:o},{key:"Сведения о трудоустройстве",value:!!(l!=null&&l.length)&&(l==null?void 0:l.map((i,h)=>e.jsxs(B.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[i.subdivision&&e.jsxs("div",{children:["Подразделение: ",i.subdivision]}),i.post&&e.jsxs("div",{children:["Должность: ",i.post]}),i.wage&&i.jobType&&e.jsxs("div",{children:["Ставка: ",i.wage,"; ",i.jobType]})]}),h<l.length-1&&e.jsx(_,{margin:"16px 0",width:"100%"})]},h)))},{key:"Уровень образования",value:M},{key:"Год набора",value:D},{key:"Авторские идентификаторы",value:!!d&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[d.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",d.wosReasearcher]}),d.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",d.scopus]}),d.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",d.eLibrary]})]})}];return e.jsx(fe,{children:F.map(({key:i,value:h})=>!!h&&e.jsx(z,{keyStr:i,value:h,direction:typeof h=="object"?"vertical":"horizontal"},i))})}const ye=f.div.withConfig({componentId:"sc-guqxj3-0"})(["display:flex;flex-direction:column;gap:16px;"]),ke=f.div.withConfig({componentId:"sc-guqxj3-1"})([""]),be=({orders:s})=>e.jsxs(ye,{children:[!(s!=null&&s.length)&&e.jsx(W,{children:"Нет приказов"}),s==null?void 0:s.map(t=>e.jsx(ke,{children:t},t))]}),Ie=P.memo(be),we=({pages:s,currentPage:t})=>{const{data:{user:n}}=A.useUser();return n?e.jsx(L,{padding:"0 0 10px 0",children:e.jsx(R,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:s[t]})}):null},Te=({pages:s,user:t,currentPage:n,setCurrentPage:r})=>{const{fullName:a,avatar:p,user_status:g,degreeLevel:j}=t,c=g==="stud"?"Студент":"Сотрудник",x=()=>{ae.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:re.logout})};return e.jsxs(G,{children:[e.jsx(K,{fullName:a,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(Y,{children:[e.jsxs(w,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(J,{children:e.jsx(Q,{name:a,avatar:p,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs(V,{children:[e.jsxs(X,{children:[e.jsx("b",{children:a}),e.jsx(W,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(Z,{words:[c,j??""]})})]}),e.jsx(ee,{sliderWidth:"100%",pages:s,currentPage:n,setCurrentPage:r,appearance:!1})]})]}),e.jsx(w,{maxWidth:"250px",height:"fit-content",children:e.jsxs(se,{children:[e.jsx(b,{to:te,children:e.jsx(y,{background:u.white.transparent2,icon:e.jsx(k,{width:"30px",background:u.grey.main,children:e.jsx(N,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(ie,{type:"v-button"}),e.jsx(b,{to:ne,children:e.jsx(y,{background:u.white.transparent2,icon:e.jsx(k,{width:"30px",background:u.purple.main,children:e.jsx(H,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(y,{background:u.white.transparent2,icon:e.jsx(k,{width:"30px",background:u.red.main,children:e.jsx(q,{})}),text:"Выйти",height:"73px",onClick:x,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},Se=({user:s})=>{var n;const t=O();return e.jsxs(T,{d:"column",gap:"1rem",children:[e.jsx(ce,{type:"info",children:"Корпоративную электронную почту и внутренний телефон можно изменить, отправив запрос в техническую поддержку."}),(n=s.subdivisions)==null?void 0:n.map((r,a)=>e.jsxs(T,{d:"column",gap:"8px",ai:"flex-start",children:[e.jsx(S,{align:"left",size:3,children:r.subdivision}),e.jsx(S,{align:"left",size:4,children:r.post}),e.jsx(C,{title:"Корпоративная электронная почта",icon:e.jsx(U,{}),description:s==null?void 0:s.email_staff,rightIcon:e.jsx(I,{}),onClick:()=>t.push(oe)}),e.jsx(C,{title:"Внутренний телефон",icon:e.jsx($,{}),description:r.phone_inner,rightIcon:e.jsx(I,{}),onClick:()=>t.push(le)}),e.jsx(de,{}),e.jsx(xe,{subDivisionGuidStaff:r.guid_staff}),a<s.subdivisions.length-1&&e.jsx(_,{margin:"16px 0",width:"100%"})]},a))]})},Ce=f.div.withConfig({componentId:"sc-1aqajbb-0"})(["display:flex;flex-direction:column;gap:12px;width:100%;align-items:center;"]),Oe=()=>{const{data:{user:s},error:t}=A.useUser(),n=O(),a=he().get("page"),{allRoutes:p}=ue.useMenu();if(!s||!p)return null;if(t)return e.jsx(pe,{text:t});const g=[{title:"Учетная карточка",content:e.jsx(E,{user:s}),id:"userCard"},{title:"Приказы",content:e.jsx(Ie,{orders:s.orders}),id:"orders"}],j=[{title:"Учетная карточка",content:e.jsx(E,{user:s}),id:"userCard"},{title:"Контактные данные",content:e.jsx(Se,{user:s}),id:"contactDetails"}],c=s.user_status==="stud"?g:j,x=c.findIndex(o=>o.id===a)||0,m=x===-1?0:x,v=o=>{n.push({search:`?page=${c[o].id}`})};return e.jsx(ge,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(Ce,{children:[e.jsx(Te,{user:s,currentPage:m,setCurrentPage:v,pages:c}),e.jsx(L,{children:e.jsx(R,{height:"100%",maxWidth:"750px",children:e.jsx(je,{})})}),e.jsx(we,{currentPage:m,pages:c.map(o=>o.content)})]})})};export{Oe as default};
