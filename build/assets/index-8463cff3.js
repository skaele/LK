import{j as s,K as N,bp as W,cb as G,s as k,a8 as $,a4 as F,bt as z,r as j,a3 as K,cF as q,cS as A,cl as B,cm as Q,aV as J}from"./vendor-905eebdf.js";import{a2 as U,v as X,w as Y,x as Z,bK as ee,J as se,O as D,E as b,bj as V,o as H,G as te,bL as M,bf as ae,bM as ne,bN as re,bO as ie,u as oe,bP as L,bQ as x,bl as O,bR as y,bS as T,d as le,bT as ce,D as de,am as ue,W as he,P as pe,V as xe,bU as fe,bV as Se,bW as ge}from"./index-fe28ea49.js";import{E as me}from"./index-7a8520e9.js";const Ee=({value:e,setValue:c,onHintClick:l,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=U.useUser(),u=async r=>t?await Z(r):await ee(r,"",1,20);return s.jsx(X,{value:e,width:"100%",setValue:c,onHintClick:l(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(N,{}):t?s.jsx(W,{}):s.jsx(G,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=k($).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?se.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),be=k.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Ce=k.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),we=({route:e,collapsed:c=!1,disabled:l=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(D,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(l)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:l,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(b,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Ce,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:l,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=V.useSchedule(),r=F(),{data:{user:n}}=U.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(D,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:l,onHintClick:d})]}),c!==a&&s.jsx(H,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(te,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(M??{}).map(S=>{const h=M[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(we,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},Me=()=>{const{data:{user:e}}=U.useUser(),{data:{filter:c,view:l,errorInData:d}}=V.useSchedule(),{isTablet:t,isMobile:a}=ae(),[u,r]=j.useState(!0),n=F(),p=K(),S=n.pathname!==ne,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",C=n.pathname.includes(re),v=n.pathname.includes(ie),E=C||v,{open:R}=oe(),m=()=>{c&&p.push(y(T,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{l===L.month&&!E&&x.changeView(L.day)},[l,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?O.getGroupScheduleFx({group:i}):O.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const I=()=>{O.getScheduleFx(e)},w=()=>o=>{(o==null?void 0:o.id)===(e==null?void 0:e.group)&&m(),o!=null&&o.id&&(n.pathname.split("/")[2]==="retake"?p.push(y(T,{page:"current",filter:o.value})):p.push(y(T,{page:n.pathname.split("/")[2],filter:o.value})))},_=o=>{x.setSearchValue(o)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:C,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:ce.ten_seconds})},handleValue:_,onHintClick:w,handleReturnToMySchedule:m,handleLoad:I,handleOpenSideMenu:()=>{a?R(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:w,handleValue:_})})):r(o=>!o)}}},ke=k.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",de.isMobile),ve=e=>s.jsx(ke,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),Ue=()=>{const{data:{view:e,schedule:c,externalSchedule:l,errorInData:d},loading:t,error:a}=V.useSchedule(),{allRoutes:u}=ue.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:C,handleOpenSideMenu:v,handleErrorClick:E}=Me();return s.jsx(he,{loading:t,load:C,error:a,data:t?l:c,children:s.jsx(pe,{topCenterElement:n&&s.jsx(xe,{size:"small",sliderWidth:"240px",pages:p?fe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(b,{w:"fit-content",gap:"20px",children:[s.jsx(me,{visible:!!d,onClick:E}),s.jsx(H,{icon:h?s.jsx(q,{}):s.jsx(A,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(ve,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(B,{children:[Object.keys(M??{}).map(R=>{const{path:m,id:I,Component:w}=M[R];return s.jsx(Q,{path:m,children:s.jsx(w,{})},I)}),s.jsx(J,{to:ge})]})]})})})};export{Ue as default};
