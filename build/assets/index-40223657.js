import{j as s,o as I,aG as N,bt as P,s as k,L as W,M as F,aN as G,r as j,N as z,au as B,bY as q,bD as A,bE as K,aa as Q}from"./vendor-2bd70a0f.js";import{Z as _,k as J,m as Y,a0 as Z,ac as X,U as H,p as b,bk as O,B as $,D as ee,bH as w,bg as se,bI as te,bJ as ae,bK as ne,u as re,bL as T,bM as p,bm as R,bN as U,bO as V,o as ie,a5 as le,W as oe,t as ce,v as de,bP as ue,bQ as he,bR as pe}from"./index-bc77f324.js";import{S as xe}from"./index-b443b8f6.js";const Se=({value:e,setValue:d,onHintClick:o,onValueEmpty:l})=>{const t=/\d/.test(e),{data:{user:n}}=_.useUser(),r=async a=>t?await Y(a):await Z(a,"",1,20);return s.jsx(xe,{value:e,width:"100%",setValue:d,onHintClick:o(t),placeholder:"Поиск",customMask:t?J.groupMask:void 0,transformRequest:t?void 0:a=>a.fio,request:r,leftIcon:e.length===0?s.jsx(I,{}):t?s.jsx(N,{}):s.jsx(P,{}),onValueEmpty:(n==null?void 0:n.user_status)==="staff"?l:void 0})},fe=k(W)`
    color: var(--text);
    padding: 15px 15px;
    max-width: 140px;
    width: 100%;
    opacity: ${({disabled:e})=>e?.5:1};
    border-radius: 10px;
    background: ${({isCurrent:e})=>e?X.blue.transparent3:"transparent"};
    color: ${({isCurrent:e})=>e?"var(--blue)":"var(--grey)"};

    &:hover {
        filter: brightness(0.97);
    }
`,ge=k.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,me=k.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,Ee=({route:e,collapsed:d=!1,disabled:o=!1,isCurrent:l=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:n,icon:r,color:a,shortTitle:h}=e,x=u=>{if(o)return u.preventDefault()};return s.jsx(fe,{collapsed:d,disabled:o,isCurrent:l,to:t,title:h??n,color:a,onClick:x,children:s.jsxs(b,{gap:"8px",children:[s.jsx(ge,{children:r}),!d&&s.jsx(me,{isCurrent:l,children:h??n})]})})},D=({handleReturnToMySchedule:e,baseSearchValue:d,handleValue:o,onHintClick:l,isSideMenuOpen:t})=>{const{data:{searchValue:n,filter:r}}=O.useSchedule(),a=F();return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(Se,{value:n,setValue:o,onHintClick:l})]}),d!==n&&s.jsx($,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(G,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(ee,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(w??{}).map(h=>{const x=w[h],{id:u,path:i}=x,S=r?`${i}/${r}`:i;return s.jsx(Ee,{collapsed:!t,disabled:u==="schedule-retake"&&!!r,isCurrent:a.pathname===S,route:{...x,path:S}},u)})})]})},je=()=>{const{data:{user:e}}=_.useUser(),{data:{filter:d,view:o}}=O.useSchedule(),{isTablet:l,isMobile:t}=se(),[n,r]=j.useState(!0),a=F(),h=z(),x=a.pathname!==te,u=a.pathname.split("/"),i=u.length===4?u[u.length-1]:null,S=i?/\d/.test(i):!1,g=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",M=a.pathname.includes(ae),m=a.pathname.includes(ne),E=M||m,{open:C}=re(),f=()=>{d&&h.push(U(V,{page:a.pathname.split("/")[2]})),p.setSearchValue(g),p.setFilter(""),p.resetExternalSchedule()};j.useLayoutEffect(()=>{o===T.month&&!E&&p.changeView(T.day)},[o,E]),j.useEffect(()=>{r(!(t||l))},[l,t]),j.useEffect(()=>{i?(p.setFilter(i),p.setSearchValue(i),S?R.getGroupScheduleFx({group:i}):R.getTeacherScheduleFx({fullName:i})):f()},[i]),j.useEffect(()=>()=>{p.resetExternalSchedule()},[]);const v=()=>{R.getScheduleFx(e)},y=()=>c=>{(c==null?void 0:c.id)===(e==null?void 0:e.group)&&f(),c!=null&&c.id&&h.push(U(V,{page:a.pathname.split("/")[2],filter:c.value}))},L=c=>{p.setSearchValue(c)};return{isSideMenuOpen:n,shouldShowSlider:x,isMobile:t,isSessionPage:M,baseSearchValue:g,showMonth:E,handleValue:L,onHintClick:y,handleReturnToMySchedule:f,handleLoad:v,handleOpenSideMenu:()=>{t?C(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(D,{isSideMenuOpen:!0,baseSearchValue:g,handleReturnToMySchedule:f,onHintClick:y,handleValue:L})})):r(c=>!c)}}},be=k.div`
    min-width: ${({isSideMenuOpen:e})=>e?"210px":"60px"};
    width: ${({isSideMenuOpen:e})=>e?"210px":"60px"};
    padding-right: 10px;
    height: calc(100vh - var(--header-height) - 112px);
    display: flex;
    z-index: 10;
    gap: 8px;
    flex-direction: column;
    align-items: ${({isSideMenuOpen:e})=>e?"flex-start":"center"};

    ${ie.isMobile} {
        display: none;
    }
`,Me=e=>s.jsx(be,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(D,{...e})}),Re=()=>{const{data:{view:e,schedule:d,externalSchedule:o},loading:l,error:t}=O.useSchedule(),{allRoutes:n}=le.useMenu(),{isSideMenuOpen:r,onHintClick:a,handleValue:h,handleReturnToMySchedule:x,shouldShowSlider:u,showMonth:i,baseSearchValue:S,handleLoad:g,handleOpenSideMenu:M,isMobile:m}=je();return s.jsx(oe,{loading:l,load:g,error:t,data:l?o:d,children:s.jsx(ce,{topCenterElement:u&&s.jsx(de,{size:"small",sliderWidth:"240px",pages:i?ue:he,currentPage:e,appearance:!m,setCurrentPage:p.changeView}),topRightCornerElement:s.jsx(b,{w:"fit-content",gap:"8px",children:s.jsx($,{icon:m?s.jsx(B,{}):s.jsx(q,{}),width:"36px",height:"36px",onClick:M})}),children:n&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!m&&s.jsx(Me,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:x,onHintClick:a,handleValue:h}),s.jsxs(A,{children:[Object.keys(w??{}).map(E=>{const{path:C,id:f,Component:v}=w[E];return s.jsx(K,{path:C,children:s.jsx(v,{})},f)}),s.jsx(Q,{to:pe})]})]})})})};export{Re as default};
