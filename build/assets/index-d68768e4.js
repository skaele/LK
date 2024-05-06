import{j as s,q as D,aG as N,bw as W,s as k,L as G,K as V,aP as z,r as j,T as q,aq as A,c7 as B,bM as J,bN as K,a4 as Q}from"./vendor-35c3991b.js";import{a1 as L,y as Y,z as X,av as Z,O as ee,U as H,J as M,bJ as _,t as $,L as se,c4 as b,aw as te,c5 as ae,c6 as ne,c7 as re,w as ie,c8 as F,c9 as x,bL as O,bg as T,bh as U,i as le,ca as oe,H as ce,aF as de,W as ue,P as he,Y as pe,cb as xe,cc as fe,cd as Se}from"./index-46a096a9.js";import{E as ge}from"./index-b6e0bd93.js";import{S as me}from"./index-4ee90ac4.js";const Ee=({value:e,setValue:c,onHintClick:o,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=L.useUser(),u=async r=>t?await X(r):await Z(r,"",1,20);return s.jsx(me,{value:e,width:"100%",setValue:c,onHintClick:o(t),placeholder:"Поиск",customMask:t?Y.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(D,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=k(G)`
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
`,Me=k.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,we=k.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,Ce=({route:e,collapsed:c=!1,disabled:o=!1,isCurrent:d=!1})=>{if(!e)return s.jsx(H,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(o)return S.preventDefault()};return s.jsx(je,{collapsed:c,disabled:o,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(M,{gap:"8px",children:[s.jsx(Me,{children:u}),!c&&s.jsx(we,{isCurrent:d,children:n??a})]})})},P=({handleReturnToMySchedule:e,baseSearchValue:c,handleValue:o,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=_.useSchedule(),r=V(),{data:{user:n}}=L.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(H,{children:"Группа или преподаватель"}),s.jsx(Ee,{value:a,setValue:o,onHintClick:d})]}),c!==a&&s.jsx($,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(se,{margin:"16px 0",width:"100%"}),s.jsx(M,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(b??{}).map(S=>{const h=b[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(Ce,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},be=()=>{const{data:{user:e}}=L.useUser(),{data:{filter:c,view:o,errorInData:d}}=_.useSchedule(),{isTablet:t,isMobile:a}=te(),[u,r]=j.useState(!0),n=V(),p=q(),S=n.pathname!==ae,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",w=n.pathname.includes(ne),v=n.pathname.includes(re),E=w||v,{open:y}=ie(),m=()=>{c&&p.push(T(U,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{o===F.month&&!E&&x.changeView(F.day)},[o,E]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?O.getGroupScheduleFx({group:i}):O.getTeacherScheduleFx({fullName:i})):m()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const R=()=>{O.getScheduleFx(e)},C=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&m(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(T(U,{page:"current",filter:l.value})):p.push(T(U,{page:n.pathname.split("/")[2],filter:l.value})))},I=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:w,baseSearchValue:f,showMonth:E,handleErrorClick:()=>{le.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:I,onHintClick:C,handleReturnToMySchedule:m,handleLoad:R,handleOpenSideMenu:()=>{a?y(s.jsx(M,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(P,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:m,onHintClick:C,handleValue:I})})):r(l=>!l)}}},ke=k.div`
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
`,ve=e=>s.jsx(ke,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(P,{...e})}),_e=()=>{const{data:{view:e,schedule:c,externalSchedule:o,errorInData:d},loading:t,error:a}=_.useSchedule(),{allRoutes:u}=de.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:w,handleOpenSideMenu:v,handleErrorClick:E}=be();return s.jsx(ue,{loading:t,load:w,error:a,data:t?o:c,children:s.jsx(he,{topCenterElement:n&&s.jsx(pe,{size:"small",sliderWidth:"240px",pages:p?xe:fe,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(M,{w:"fit-content",gap:"20px",children:[s.jsx(ge,{visible:!!d,onClick:E}),s.jsx($,{icon:h?s.jsx(A,{}):s.jsx(B,{}),width:"36px",height:"36px",onClick:v})]}),children:u&&s.jsxs(M,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(ve,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(J,{children:[Object.keys(b??{}).map(y=>{const{path:m,id:R,Component:C}=b[y];return s.jsx(K,{path:m,children:s.jsx(C,{})},R)}),s.jsx(Q,{to:Se})]})]})})})};export{_e as default};
