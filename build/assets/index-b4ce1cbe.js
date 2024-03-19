import{j as s,q as D,aG as N,bw as W,s as k,L as G,K as F,aP as z,r as j,T as q,aq as A,c3 as B,bL as K,bM as X,a4 as J}from"./vendor-561dac3a.js";import{a7 as O,x as Q,y as Y,ar as Z,N as ee,R as $,H as b,bA as L,r as H,J as se,bU as w,bw as te,bV as ae,bW as ne,bX as re,v as ie,bY as V,bZ as x,bC as T,b_ as U,b$ as _,j as le,c0 as oe,G as ce,az as de,W as ue,P as he,X as pe,c1 as xe,c2 as fe,c3 as Se}from"./index-7cc4f467.js";import{E as ge}from"./index-d30cedc6.js";import{S as me}from"./index-462fa016.js";const Ee=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=O.useUser(),u=async r=>t?await Y(r):await Z(r,"",1,20);return s.jsx(me,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?Q.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(D,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=k(G)`
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
`,Ce=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(b,{gap:"8px",children:[s.jsx(be,{children:u}),!c&&s.jsx(Me,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=L.useSchedule(),r=F(),{data:{user:n}}=O.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx(H,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(b,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(w??{}).map(S=>{const h=w[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(Ce,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},we=()=>{const{data:{user:e}}=O.useUser(),{data:{filter:c,view:o,errorInData:d}}=L.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,r]=j.useState(!0),n=F(),p=q(),S=n.pathname!==ae,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",M=n.pathname.includes(ne),v=n.pathname.includes(re),E=M||v,{open:R}=ie(),m=()=>{c&&p.push(U(_,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===V.month&&!E&&x.changeView(V.day)},[o,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?T.getGroupScheduleFx({group:i}):T.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const y=()=>{T.getScheduleFx(e)},C=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&m(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(U(_,{page:"current",filter:l.value})):p.push(U(_,{page:n.pathname.split("/")[2],filter:l.value})))},I=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:M,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:I,onHintClick:C,handleReturnToMySchedule:m,handleLoad:y,handleOpenSideMenu:()=>{a?R(s.jsx(b,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:C,handleValue:I})})):r(l=>!l)}}},ke=k.div`
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
`,ve=e=>s.jsx(ke,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),Le=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=L.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:M,handleOpenSideMenu:v,handleErrorClick:E}=we();return s.jsx(ue,{loading:t,load:M,error:a,data:t?o:c,children:s.jsx(he,{topCenterElement:n&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:p?xe:fe,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(b,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:E}),s.jsx(H,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(b,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(ve,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(K,{children:[Object.keys(w??{}).map(R=>{const{path:m,id:y,Component:C}=w[R];return s.jsx(X,{path:m,children:s.jsx(C,{})},y)}),s.jsx(J,{to:Se})]})]})})})};export{Le as default};
