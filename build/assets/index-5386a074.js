import{j as s,G as P,aN as N,bI as W,s as v,a7 as G,a3 as F,a_ as q,r as j,a2 as z,b_ as A,cf as B,bS as Q,bT as J,aq as K}from"./vendor-ab783af7.js";import{a2 as y,v as X,w as Y,x as Z,bO as ee,J as se,O as $,E as b,bo as I,o as D,G as te,bP as C,bk as ae,bQ as ne,bR as re,bS as ie,u as le,bT as L,bU as x,bq as O,bV as T,bW as U,d as oe,bX as ce,D as de,am as ue,W as he,P as pe,U as xe,bY as fe,bZ as Se,b_ as ge}from"./index-07cca455.js";import{E as Ee}from"./index-9298ab17.js";const me=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=y.useUser(),u=async r=>t?await Z(r):await ee(r,"",1,20);return s.jsx(X,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=v(G)`
    color: var(--text);
    padding: 15px 15px;
    max-width: 140px;
    width: 100%;
    opacity: ${({disabled:e})=>e?.5:1};
    border-radius: 10px;
    background: ${({isCurrent:e})=>e?se.blue.transparent3:"transparent"};
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
`,ke=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(b,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:n??a})]})})},H=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=I.useSchedule(),r=F(),{data:{user:n}}=y.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(me,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(q,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(te,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(C??{}).map(S=>{const h=C[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(ke,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},Ce=()=>{const{data:{user:e}}=y.useUser(),{data:{filter:c,view:o,errorInData:d}}=I.useSchedule(),{isTablet:t,isMobile:a}=ae(),[u,r]=j.useState(!0),n=F(),p=z(),S=n.pathname!==ne,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",M=n.pathname.includes(re),w=n.pathname.includes(ie),m=M||w,{open:R}=le(),E=()=>{c&&p.push(T(U,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===L.month&&!m&&x.changeView(L.day)},[o,m]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?O.getGroupScheduleFx({group:i}):O.getTeacherScheduleFx({fullName:i})):E()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const _=()=>{O.getScheduleFx(e)},k=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&E(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(T(U,{page:"current",filter:l.value})):p.push(T(U,{page:n.pathname.split("/")[2],filter:l.value})))},V=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:M,baseSearchValue:f,showMonth:m,handleErrorClick:()=>{oe.evokePopUpMessage({message:d,type:"failure",time:ce.ten_seconds})},handleValue:V,onHintClick:k,handleReturnToMySchedule:E,handleLoad:_,handleOpenSideMenu:()=>{a?R(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(H,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:E,onHintClick:k,handleValue:V})})):r(l=>!l)}}},ve=v.div`
    min-width: ${({isSideMenuOpen:e})=>e?"210px":"60px"};
    width: ${({isSideMenuOpen:e})=>e?"210px":"60px"};
    padding-right: 10px;
    height: calc(100vh - var(--header-height) - 112px);
    display: flex;
    z-index: 10;
    gap: 8px;
    flex-direction: column;
    align-items: ${({isSideMenuOpen:e})=>e?"flex-start":"center"};

    ${de.isMobile} {
        display: none;
    }
`,we=e=>s.jsx(ve,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(H,{...e})}),ye=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=I.useSchedule(),{allRoutes:u}=ue.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:M,handleOpenSideMenu:w,handleErrorClick:m}=Ce();return s.jsx(he,{loading:t,load:M,error:a,data:t?o:c,children:s.jsx(pe,{topCenterElement:n&&s.jsx(xe,{size:"small",sliderWidth:"240px",pages:p?fe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(b,{w:"fit-content",gap:"20px",children:[s.jsx(Ee,{visible:!!d,onClick:m}),s.jsx(D,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:w})]}),children:u&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(we,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(Q,{children:[Object.keys(C??{}).map(R=>{const{path:E,id:_,Component:k}=C[R];return s.jsx(J,{path:E,children:s.jsx(k,{})},_)}),s.jsx(K,{to:ge})]})]})})})};export{ye as default};
