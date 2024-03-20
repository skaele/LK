import{j as s,q as P,aG as W,bw as N,s as k,L as G,K as F,aP as z,r as j,T as q,aq as A,c3 as B,bL as K,bM as Y,a4 as J}from"./vendor-561dac3a.js";import{a8 as _,y as Q,z as X,as as Z,O as ee,U as $,J as b,bB as L,t as H,L as se,bV as C,bx as te,bW as ae,bX as ne,bY as re,w as ie,bZ as V,b_ as x,bD as O,b$ as T,c0 as U,j as le,c1 as oe,H as ce,aA as de,W as ue,P as he,Y as pe,c2 as xe,c3 as fe,c4 as Se}from"./index-da3e5de5.js";import{E as ge}from"./index-83016f36.js";import{S as me}from"./index-c0de1c43.js";const Ee=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=_.useUser(),u=async r=>t?await X(r):await Z(r,"",1,20);return s.jsx(me,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?Q.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(W,{}):s.jsx(N,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=k(G)`
    color: var(--text);
    padding: 15px 15px;
    max-width: 140px;
    width: 100%;
    opacity: ${({disabled:e})=>e?.5:1};
    border-radius: 10px;
    background: ${({isCurrent:e})=>e?ee.blue.transparent3:"transparent"};
    color: ${({isCurrent:e})=>e?"var(--blue)":"var(--grey)"};

    &:hover {
        filter: brightness(0.97);
    }
`,be=k.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,Me=k.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,we=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(b,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:n??a})]})})},D=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=L.useSchedule(),r=F(),{data:{user:n}}=_.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx(H,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(C??{}).map(S=>{const h=C[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(we,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},Ce=()=>{const{data:{user:e}}=_.useUser(),{data:{filter:c,view:o,errorInData:d}}=L.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,r]=j.useState(!0),n=F(),p=q(),S=n.pathname!==ae,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",M=n.pathname.includes(ne),v=n.pathname.includes(re),E=M||v,{open:y}=ie(),m=()=>{c&&p.push(T(U,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===V.month&&!E&&x.changeView(V.day)},[o,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?O.getGroupScheduleFx({group:i}):O.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const R=()=>{O.getScheduleFx(e)},w=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&m(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(T(U,{page:"current",filter:l.value})):p.push(T(U,{page:n.pathname.split("/")[2],filter:l.value})))},I=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:M,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:I,onHintClick:w,handleReturnToMySchedule:m,handleLoad:R,handleOpenSideMenu:()=>{a?y(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(D,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:w,handleValue:I})})):r(l=>!l)}}},ke=k.div`
    min-width: ${({isSideMenuOpen:e})=>e?"210px":"60px"};
    width: ${({isSideMenuOpen:e})=>e?"210px":"60px"};
    padding-right: 10px;
    height: calc(100vh - var(--header-height) - 112px);
    display: flex;
    z-index: 10;
    gap: 8px;
    flex-direction: column;
    align-items: ${({isSideMenuOpen:e})=>e?"flex-start":"center"};

    ${ce.isMobile} {
        display: none;
    }
`,ve=e=>s.jsx(ke,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(D,{...e})}),Le=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=L.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:M,handleOpenSideMenu:v,handleErrorClick:E}=Ce();return s.jsx(ue,{loading:t,load:M,error:a,data:t?o:c,children:s.jsx(he,{topCenterElement:n&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:p?xe:fe,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(b,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:E}),s.jsx(H,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(ve,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(K,{children:[Object.keys(C??{}).map(y=>{const{path:m,id:R,Component:w}=C[y];return s.jsx(Y,{path:m,children:s.jsx(w,{})},R)}),s.jsx(J,{to:Se})]})]})})})};export{Le as default};
