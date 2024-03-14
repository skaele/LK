import{j as s,q as D,aG as W,bw as N,s as k,L as G,K as F,aP as q,r as j,T as z,aq as A,c3 as B,bL as K,bM as Q,a4 as X}from"./vendor-561dac3a.js";import{a6 as L,w as Y,x as Z,ar as J,L as ee,Q as $,G as b,bA as O,q as H,H as se,bU as C,bw as te,bV as ae,bW as ne,bX as re,u as ie,bY as I,bZ as x,bC as T,b_ as U,b$ as _,i as le,c0 as oe,E as ce,az as de,W as ue,P as he,V as pe,c1 as xe,c2 as fe,c3 as Se}from"./index-9d4b4175.js";import{E as ge}from"./index-9ec36af3.js";import{S as Ee}from"./index-6a3ce409.js";const me=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=L.useUser(),u=async r=>t?await Z(r):await J(r,"",1,20);return s.jsx(Ee,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(D,{}):t?s.jsx(W,{}):s.jsx(N,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=k(G)`
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
`,we=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(b,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=O.useSchedule(),r=F(),{data:{user:n}}=L.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(me,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx(H,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(q,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(C??{}).map(S=>{const h=C[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(we,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},Ce=()=>{const{data:{user:e}}=L.useUser(),{data:{filter:c,view:o,errorInData:d}}=O.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,r]=j.useState(!0),n=F(),p=z(),S=n.pathname!==ae,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",M=n.pathname.includes(ne),v=n.pathname.includes(re),m=M||v,{open:R}=ie(),E=()=>{c&&p.push(U(_,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===I.month&&!m&&x.changeView(I.day)},[o,m]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?T.getGroupScheduleFx({group:i}):T.getTeacherScheduleFx({fullName:i})):E()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const y=()=>{T.getScheduleFx(e)},w=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&E(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(U(_,{page:"current",filter:l.value})):p.push(U(_,{page:n.pathname.split("/")[2],filter:l.value})))},V=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:M,baseSearchValue:f,showMonth:m,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:V,onHintClick:w,handleReturnToMySchedule:E,handleLoad:y,handleOpenSideMenu:()=>{a?R(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:E,onHintClick:w,handleValue:V})})):r(l=>!l)}}},ke=k.div`
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
`,ve=e=>s.jsx(ke,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),Oe=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=O.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:M,handleOpenSideMenu:v,handleErrorClick:m}=Ce();return s.jsx(ue,{loading:t,load:M,error:a,data:t?o:c,children:s.jsx(he,{topCenterElement:n&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:p?xe:fe,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(b,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:m}),s.jsx(H,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(ve,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(K,{children:[Object.keys(C??{}).map(R=>{const{path:E,id:y,Component:w}=C[R];return s.jsx(Q,{path:E,children:s.jsx(w,{})},y)}),s.jsx(X,{to:Se})]})]})})})};export{Oe as default};
