import{j as s,q as P,aG as N,bw as W,s as C,L as G,K as F,aP as q,r as j,T as z,aq as B,c2 as K,bL as A,bM as Q,a4 as J}from"./vendor-f1fdae2f.js";import{V as L,k as X,m as Y,ad as Z,E as ee,X as $,r as b,bn as _,B as D,D as se,bJ as w,bj as te,bK as ae,bL as ne,bM as re,u as ie,bN as V,bO as x,bp as y,bP as O,bQ as U,a as le,bR as oe,q as ce,al as de,W as ue,w as he,x as pe,bS as xe,bT as fe,bU as Se}from"./index-f5c6ecdc.js";import{E as ge}from"./index-95ddad41.js";import{S as me}from"./index-e820c298.js";const Ee=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=L.useUser(),u=async r=>t?await Y(r):await Z(r,"",1,20);return s.jsx(me,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?X.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=C(G)`
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
`,ke=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(b,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:n??a})]})})},H=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=_.useSchedule(),r=F(),{data:{user:n}}=L.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(q,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(w??{}).map(S=>{const h=w[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(ke,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},we=()=>{const{data:{user:e}}=L.useUser(),{data:{filter:c,view:o,errorInData:d}}=_.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,r]=j.useState(!0),n=F(),p=z(),S=n.pathname!==ae,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",M=n.pathname.includes(ne),v=n.pathname.includes(re),E=M||v,{open:R}=ie(),m=()=>{c&&p.push(O(U,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===V.month&&!E&&x.changeView(V.day)},[o,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?y.getGroupScheduleFx({group:i}):y.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const T=()=>{y.getScheduleFx(e)},k=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&m(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(O(U,{page:"current",filter:l.value})):p.push(O(U,{page:n.pathname.split("/")[2],filter:l.value})))},I=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:M,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:I,onHintClick:k,handleReturnToMySchedule:m,handleLoad:T,handleOpenSideMenu:()=>{a?R(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(H,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:k,handleValue:I})})):r(l=>!l)}}},Ce=C.div`
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
`,ve=e=>s.jsx(Ce,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(H,{...e})}),_e=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=_.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:M,handleOpenSideMenu:v,handleErrorClick:E}=we();return s.jsx(ue,{loading:t,load:M,error:a,data:t?o:c,children:s.jsx(he,{topCenterElement:n&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:p?xe:fe,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(b,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:E}),s.jsx(D,{icon:h?s.jsx(B,{}):s.jsx(K,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(ve,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(A,{children:[Object.keys(w??{}).map(R=>{const{path:m,id:T,Component:k}=w[R];return s.jsx(Q,{path:m,children:s.jsx(k,{})},T)}),s.jsx(J,{to:Se})]})]})})})};export{_e as default};
