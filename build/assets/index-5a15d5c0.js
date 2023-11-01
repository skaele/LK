import{j as s,q as P,aF as N,bv as W,s as v,L as G,K as V,aO as z,r as E,Q as q,ap as B,c1 as K,bI as Q,bJ as A,a2 as J}from"./vendor-4af360a6.js";import{U as F,k as X,m as Y,aa as Z,x as ee,V as H,p as j,bk as U,B as $,D as se,bG as k,bg as te,bH as ae,bI as ne,bJ as re,u as ie,bK as _,bL as x,bm as y,bM as I,bN as T,a as oe,bO as le,o as ce,ai as de,W as ue,t as he,v as pe,bP as xe,bQ as Se,bR as fe}from"./index-2ef5f28f.js";import{E as ge}from"./index-707a7e2d.js";import{S as me}from"./index-d35d2ae9.js";const Ee=({value:e,setValue:c,onHintClick:l,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=F.useUser(),u=async n=>t?await Y(n):await Z(n,"",1,20);return s.jsx(me,{value:e,width:"100%",setValue:c,onHintClick:l(t),placeholder:"Поиск",customMask:t?X.groupMask:void 0,transformRequest:t?void 0:n=>n.fio,request:u,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=v(G)`
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
`,be=v.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,Me=v.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,ke=({route:e,collapsed:c=!1,disabled:l=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:n,shortTitle:r}=e,h=S=>{if(l)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:l,isCurrent:d,to:t,title:r??a,color:n,onClick:h,children:s.jsxs(j,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:r??a})]})})},D=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:l,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=U.useSchedule(),n=V();return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:l,onHintClick:d})]}),c!==a&&s.jsx($,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(j,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(k??{}).map(r=>{const h=k[r],{id:S,path:p}=h,i=u?`${p}/${u}`:p;return s.jsx(ke,{collapsed:!t,isCurrent:n.pathname===i,route:{...h,path:i}},S)})})]})},ve=()=>{const{data:{user:e}}=F.useUser(),{data:{filter:c,view:l,errorInData:d}}=U.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,n]=E.useState(!0),r=V(),h=q(),S=r.pathname!==ae,p=r.pathname.split("/"),i=p.length===4?p[p.length-1]:null,C=i?/\d/.test(i):!1,g=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",b=r.pathname.includes(ne),w=r.pathname.includes(re),m=b||w,{open:R}=ie(),f=()=>{c&&h.push(I(T,{page:r.pathname.split("/")[2]})),x.setSearchValue(g),x.setFilter(""),x.resetExternalSchedule()};E.useLayoutEffect(()=>{l===_.month&&!m&&x.changeView(_.day)},[l,m]),E.useEffect(()=>{n(!(a||t))},[t,a]),E.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),C?y.getGroupScheduleFx({group:i}):y.getTeacherScheduleFx({fullName:i})):f()},[i]),E.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const O=()=>{y.getScheduleFx(e)},M=()=>o=>{(o==null?void 0:o.id)===(e==null?void 0:e.group)&&f(),o!=null&&o.id&&(r.pathname.split("/")[2]==="retake"?h.push(I(T,{page:"current",filter:o.value})):h.push(I(T,{page:r.pathname.split("/")[2],filter:o.value})))},L=o=>{x.setSearchValue(o)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:b,baseSearchValue:g,showMonth:m,handleErrorClick:()=>{oe.evokePopUpMessage({message:d,type:"failure",time:le.ten_seconds})},handleValue:L,onHintClick:M,handleReturnToMySchedule:f,handleLoad:O,handleOpenSideMenu:()=>{a?R(s.jsx(j,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(D,{isSideMenuOpen:!0,baseSearchValue:g,handleReturnToMySchedule:f,onHintClick:M,handleValue:L})})):n(o=>!o)}}},Ce=v.div`
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
`,we=e=>s.jsx(Ce,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(D,{...e})}),Le=()=>{const{data:{view:e,schedule:c,externalSchedule:l,errorInData:d},loading:t,error:a}=U.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:n,shouldShowSlider:r,showMonth:h,baseSearchValue:S,isMobile:p,onHintClick:i,handleValue:C,handleReturnToMySchedule:g,handleLoad:b,handleOpenSideMenu:w,handleErrorClick:m}=ve();return s.jsx(ue,{loading:t,load:b,error:a,data:t?l:c,children:s.jsx(he,{topCenterElement:r&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:h?xe:Se,currentPage:e,appearance:!p,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(j,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:m}),s.jsx($,{icon:p?s.jsx(B,{}):s.jsx(K,{}),width:"36px",height:"36px",onClick:w})]}),children:u&&s.jsxs(j,{gap:"16px",ai:"flex-start",children:[!p&&s.jsx(we,{isSideMenuOpen:n,baseSearchValue:S,handleReturnToMySchedule:g,onHintClick:i,handleValue:C}),s.jsxs(Q,{children:[Object.keys(k??{}).map(R=>{const{path:f,id:O,Component:M}=k[R];return s.jsx(A,{path:f,children:s.jsx(M,{})},O)}),s.jsx(J,{to:fe})]})]})})})};export{Le as default};
