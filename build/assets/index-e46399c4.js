import{j as s,L as W,bs as N,ce as G,s as v,aa as $,a6 as F,bw as q,r as j,a5 as z,cI as A,cU as B,co as J,cp as K,aW as Q}from"./vendor-48260ac4.js";import{ai as O,t as X,v as Y,w as Z,ch as ee,L as se,X as H,G as w,bT as _,q as D,H as te,ci as k,bx as ae,cj as ne,ck as re,cl as ie,u as oe,cm as V,cn as x,bV as y,co as T,cp as U,d as ce,cq as le,E as de,aJ as ue,W as he,P as pe,a0 as xe,cr as fe,cs as Se,ct as ge}from"./index-6ee74d2e.js";import{E as me}from"./index-0e6cbe29.js";const Ee=({value:e,setValue:l,onHintClick:c,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=O.useUser(),u=async r=>t?await Z(r):await ee(r,"",1,20);return s.jsx(X,{value:e,width:"100%",setValue:l,onHintClick:c(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(W,{}):t?s.jsx(N,{}):s.jsx(G,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=v($).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?se.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),we=v.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ce=v.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Me=({route:e,collapsed:l=!1,disabled:c=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(c)return S.preventDefault()};return s.jsx(je,{collapsed:l,disabled:c,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(w,{gap:"8px",children:[s.jsx(we,{children:u}),!l&&s.jsx(Ce,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:l,handleValue:c,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=_.useSchedule(),r=F(),{data:{user:n}}=O.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:c,onHintClick:d})]}),l!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(q,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(te,{margin:"16px 0",width:"100%"}),s.jsx(w,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(k??{}).map(S=>{const h=k[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(Me,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},ke=()=>{const{data:{user:e}}=O.useUser(),{data:{filter:l,view:c,errorInData:d}}=_.useSchedule(),{isTablet:t,isMobile:a}=ae(),[u,r]=j.useState(!0),n=F(),p=z(),S=n.pathname!==ne,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",C=n.pathname.includes(re),b=n.pathname.includes(ie),E=C||b,{open:I}=oe(),m=()=>{l&&p.push(T(U,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{c===V.month&&!E&&x.changeView(V.day)},[c,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?y.getGroupScheduleFx({group:i}):y.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const R=()=>{y.getScheduleFx(e)},M=()=>o=>{(o==null?void 0:o.id)===(e==null?void 0:e.group)&&m(),o!=null&&o.id&&(n.pathname.split("/")[2]==="retake"?p.push(T(U,{page:"current",filter:o.value})):p.push(T(U,{page:n.pathname.split("/")[2],filter:o.value})))},L=o=>{x.setSearchValue(o)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:C,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{ce.evokePopUpMessage({message:d,type:"failure",time:le.ten_seconds})},handleValue:L,onHintClick:M,handleReturnToMySchedule:m,handleLoad:R,handleOpenSideMenu:()=>{a?I(s.jsx(w,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:M,handleValue:L})})):r(o=>!o)}}},ve=v.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",de.isMobile),be=e=>s.jsx(ve,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),Oe=()=>{const{data:{view:e,schedule:l,externalSchedule:c,errorInData:d},loading:t,error:a}=_.useSchedule(),{allRoutes:u}=ue.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:C,handleOpenSideMenu:b,handleErrorClick:E}=ke();return s.jsx(he,{loading:t,load:C,error:a,data:t?c:l,children:s.jsx(pe,{topCenterElement:n&&s.jsx(xe,{size:"small",sliderWidth:"240px",pages:p?fe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(w,{w:"fit-content",gap:"20px",children:[s.jsx(me,{visible:!!d,onClick:E}),s.jsx(D,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:b})]}),children:u&&s.jsxs(w,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(be,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(J,{children:[Object.keys(k??{}).map(I=>{const{path:m,id:R,Component:M}=k[I];return s.jsx(K,{path:m,children:s.jsx(M,{})},R)}),s.jsx(Q,{to:ge})]})]})})})};export{Oe as default};
