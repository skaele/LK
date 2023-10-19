import{j as s,o as P,aE as N,bt as W,s as C,L as G,J as V,aL as z,r as m,K as B,as as K,bY as q,bE as A,bF as J,a8 as Q}from"./vendor-831b4923.js";import{_ as F,k as Y,m as X,a1 as Z,x as ee,V as H,p as j,bk as L,B as $,D as se,bG as k,bg as te,bH as ae,bI as ne,bJ as re,u as ie,bK as _,bL as x,bm as O,bM as I,bN as U,a as oe,bO as le,o as ce,a6 as de,W as ue,t as he,v as pe,bP as xe,bQ as Se,bR as fe}from"./index-774d803f.js";import{E as ge}from"./index-4213fb0b.js";import{S as Ee}from"./index-580abb32.js";const me=({value:e,setValue:d,onHintClick:o,onValueEmpty:u})=>{const t=/\d/.test(e),{data:{user:a}}=F.useUser(),l=async n=>t?await X(n):await Z(n,"",1,20);return s.jsx(Ee,{value:e,width:"100%",setValue:d,onHintClick:o(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:n=>n.fio,request:l,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?u:void 0})},je=C(G)`
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
`,be=C.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,Me=C.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,ke=({route:e,collapsed:d=!1,disabled:o=!1,isCurrent:u=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:a,icon:l,color:n,shortTitle:r}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:d,disabled:o,isCurrent:u,to:t,title:r??a,color:n,onClick:p,children:s.jsxs(j,{gap:"8px",children:[s.jsx(be,{children:l}),!d&&s.jsx(Me,{isCurrent:u,children:r??a})]})})},D=({handleReturnToMySchedule:e,baseSearchValue:d,handleValue:o,onHintClick:u,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:l}}=L.useSchedule(),n=V();return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(me,{value:a,setValue:o,onHintClick:u})]}),d!==a&&s.jsx($,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(j,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(k??{}).map(r=>{const p=k[r],{id:S,path:h}=p,i=l?`${h}/${l}`:h;return s.jsx(ke,{collapsed:!t,disabled:S==="schedule-retake"&&!!l,isCurrent:n.pathname===i,route:{...p,path:i}},S)})})]})},Ce=()=>{const{data:{user:e}}=F.useUser(),{data:{filter:d,view:o,errorInData:u}}=L.useSchedule(),{isTablet:t,isMobile:a}=te(),[l,n]=m.useState(!0),r=V(),p=B(),S=r.pathname!==ae,h=r.pathname.split("/"),i=h.length===4?h[h.length-1]:null,v=i?/\d/.test(i):!1,g=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",b=r.pathname.includes(ne),w=r.pathname.includes(re),E=b||w,{open:R}=ie(),f=()=>{d&&p.push(I(U,{page:r.pathname.split("/")[2]})),x.setSearchValue(g),x.setFilter(""),x.resetExternalSchedule()};m.useLayoutEffect(()=>{o===_.month&&!E&&x.changeView(_.day)},[o,E]),m.useEffect(()=>{n(!(a||t))},[t,a]),m.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),v?O.getGroupScheduleFx({group:i}):O.getTeacherScheduleFx({fullName:i})):f()},[i]),m.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const y=()=>{O.getScheduleFx(e)},M=()=>c=>{(c==null?void 0:c.id)===(e==null?void 0:e.group)&&f(),c!=null&&c.id&&p.push(I(U,{page:r.pathname.split("/")[2],filter:c.value}))},T=c=>{x.setSearchValue(c)};return{isSideMenuOpen:l,shouldShowSlider:S,isMobile:a,isSessionPage:b,baseSearchValue:g,showMonth:E,handleErrorClick:()=>{oe.evokePopUpMessage({message:u,type:"failure",time:le.ten_seconds})},handleValue:T,onHintClick:M,handleReturnToMySchedule:f,handleLoad:y,handleOpenSideMenu:()=>{a?R(s.jsx(j,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(D,{isSideMenuOpen:!0,baseSearchValue:g,handleReturnToMySchedule:f,onHintClick:M,handleValue:T})})):n(c=>!c)}}},ve=C.div`
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
`,we=e=>s.jsx(ve,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(D,{...e})}),Ie=()=>{const{data:{view:e,schedule:d,externalSchedule:o,errorInData:u},loading:t,error:a}=L.useSchedule(),{allRoutes:l}=de.useMenu(),{isSideMenuOpen:n,shouldShowSlider:r,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:v,handleReturnToMySchedule:g,handleLoad:b,handleOpenSideMenu:w,handleErrorClick:E}=Ce();return s.jsx(ue,{loading:t,load:b,error:a,data:t?o:d,children:s.jsx(he,{topCenterElement:r&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:p?xe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(j,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!u,onClick:E}),s.jsx($,{icon:h?s.jsx(K,{}):s.jsx(q,{}),width:"36px",height:"36px",onClick:w})]}),children:l&&s.jsxs(j,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(we,{isSideMenuOpen:n,baseSearchValue:S,handleReturnToMySchedule:g,onHintClick:i,handleValue:v}),s.jsxs(A,{children:[Object.keys(k??{}).map(R=>{const{path:f,id:y,Component:M}=k[R];return s.jsx(J,{path:f,children:s.jsx(M,{})},y)}),s.jsx(Q,{to:fe})]})]})})})};export{Ie as default};
