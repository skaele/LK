import{j as s,q as P,aG as N,bw as W,s as w,L as G,K as V,aP as q,r as E,T as z,aq as B,c2 as K,bL as A,bM as Q,a4 as J}from"./vendor-f1fdae2f.js";import{V as F,k as X,m as Y,ad as Z,E as ee,X as $,r as j,bn as U,B as D,D as se,bJ as k,bj as te,bK as ae,bL as ne,bM as re,u as ie,bN as I,bO as x,bp as y,bP as O,bQ as L,a as le,bR as oe,q as ce,al as de,W as ue,w as he,x as pe,bS as xe,bT as Se,bU as fe}from"./index-9d5e42c4.js";import{E as ge}from"./index-f424f69c.js";import{S as me}from"./index-4543c3d4.js";const Ee=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=F.useUser(),u=async n=>t?await Y(n):await Z(n,"",1,20);return s.jsx(me,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?X.groupMask:void 0,transformRequest:t?void 0:n=>n.fio,request:u,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=w(G)`
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
`,be=w.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,Me=w.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,ke=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:n,shortTitle:r}=e,h=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:r??a,color:n,onClick:h,children:s.jsxs(j,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:r??a})]})})},H=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=U.useSchedule(),n=V();return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(q,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(j,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(k??{}).map(r=>{const h=k[r],{id:S,path:p}=h,i=u?`${p}/${u}`:p;return s.jsx(ke,{collapsed:!t,isCurrent:n.pathname===i,route:{...h,path:i}},S)})})]})},we=()=>{const{data:{user:e}}=F.useUser(),{data:{filter:c,view:o,errorInData:d}}=U.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,n]=E.useState(!0),r=V(),h=z(),S=r.pathname!==ae,p=r.pathname.split("/"),i=p.length===4?p[p.length-1]:null,C=i?/\d/.test(i):!1,g=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",b=r.pathname.includes(ne),v=r.pathname.includes(re),m=b||v,{open:R}=ie(),f=()=>{c&&h.push(O(L,{page:r.pathname.split("/")[2]})),x.setSearchValue(g),x.setFilter(""),x.resetExternalSchedule()};E.useLayoutEffect(()=>{o===I.month&&!m&&x.changeView(I.day)},[o,m]),E.useEffect(()=>{n(!(a||t))},[t,a]),E.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),C?y.getGroupScheduleFx({group:i}):y.getTeacherScheduleFx({fullName:i})):f()},[i]),E.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const T=()=>{y.getScheduleFx(e)},M=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&f(),l!=null&&l.id&&(r.pathname.split("/")[2]==="retake"?h.push(O(L,{page:"current",filter:l.value})):h.push(O(L,{page:r.pathname.split("/")[2],filter:l.value})))},_=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:b,baseSearchValue:g,showMonth:m,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:_,onHintClick:M,handleReturnToMySchedule:f,handleLoad:T,handleOpenSideMenu:()=>{a?R(s.jsx(j,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(H,{isSideMenuOpen:!0,baseSearchValue:g,handleReturnToMySchedule:f,onHintClick:M,handleValue:_})})):n(l=>!l)}}},Ce=w.div`
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
`,ve=e=>s.jsx(Ce,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(H,{...e})}),_e=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=U.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:n,shouldShowSlider:r,showMonth:h,baseSearchValue:S,isMobile:p,onHintClick:i,handleValue:C,handleReturnToMySchedule:g,handleLoad:b,handleOpenSideMenu:v,handleErrorClick:m}=we();return s.jsx(ue,{loading:t,load:b,error:a,data:t?o:c,children:s.jsx(he,{topCenterElement:r&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:h?xe:Se,currentPage:e,appearance:!p,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(j,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:m}),s.jsx(D,{icon:p?s.jsx(B,{}):s.jsx(K,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(j,{gap:"16px",ai:"flex-start",children:[!p&&s.jsx(ve,{isSideMenuOpen:n,baseSearchValue:S,handleReturnToMySchedule:g,onHintClick:i,handleValue:C}),s.jsxs(A,{children:[Object.keys(k??{}).map(R=>{const{path:f,id:T,Component:M}=k[R];return s.jsx(Q,{path:f,children:s.jsx(M,{})},T)}),s.jsx(J,{to:fe})]})]})})})};export{_e as default};
