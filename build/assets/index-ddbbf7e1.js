import{j as s,q as P,aJ as N,by as W,s as b,L as G,K as F,aR as z,r as j,T as q,at as K,c7 as A,bN as B,bO as Q,a8 as J}from"./vendor-cbee1f3c.js";import{a8 as _,D as Y,E as X,G as Z,c5 as ee,U as se,Y as $,N as M,bI as I,v as D,Q as te,c6 as v,bE as ae,c7 as ne,c8 as re,c9 as ie,y as le,ca as V,cb as x,bK as O,cc as T,cd as U,k as ce,ce as oe,L as de,aG as ue,W as he,P as pe,a0 as xe,cf as fe,cg as Se,ch as ge}from"./index-1f9cdbd4.js";import{E as Ee}from"./index-23a49f7f.js";const me=({value:e,setValue:o,onHintClick:c,onValueEmpty:d})=>{const t=/\d/.test(e),{data:{user:a}}=_.useUser(),u=async r=>t?await Z(r):await ee(r,"",1,20);return s.jsx(Y,{value:e,width:"100%",setValue:o,onHintClick:c(t),placeholder:"Поиск",customMask:t?X.groupMask:void 0,transformRequest:t?void 0:r=>r.fio,request:u,leftIcon:e.length===0?s.jsx(P,{}):t?s.jsx(N,{}):s.jsx(W,{}),onValueEmpty:(a==null?void 0:a.user_status)==="staff"?d:void 0})},je=b(G)`
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
`,Me=b.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`,ke=b.div`
    font-weight: ${({isCurrent:e})=>e?500:400};
    font-size: 0.9rem;
`,Ce=({route:e,collapsed:o=!1,disabled:c=!1,isCurrent:d=!1})=>{if(!e)return s.jsx($,{children:"Ссылка не определена"});const{path:t,title:a,icon:u,color:r,shortTitle:n}=e,p=S=>{if(c)return S.preventDefault()};return s.jsx(je,{collapsed:o,disabled:c,isCurrent:d,to:t,title:n??a,color:r,onClick:p,children:s.jsxs(M,{gap:"8px",children:[s.jsx(Me,{children:u}),!o&&s.jsx(ke,{isCurrent:d,children:n??a})]})})},H=({handleReturnToMySchedule:e,baseSearchValue:o,handleValue:c,onHintClick:d,isSideMenuOpen:t})=>{const{data:{searchValue:a,filter:u}}=I.useSchedule(),r=F(),{data:{user:n}}=_.useUser(),p=(n==null?void 0:n.user_status)==="staff";return s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx($,{children:"Группа или преподаватель"}),s.jsx(me,{value:a,setValue:c,onHintClick:d})]}),o!==a&&s.jsx(D,{text:t&&"Мое расписание",onClick:e,icon:s.jsx(z,{}),background:"var(--block)",textColor:"var(--blue)"}),s.jsx(te,{margin:"16px 0",width:"100%"}),s.jsx(M,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(v??{}).map(S=>{const h=v[S],{id:i,path:g}=h,f=u?`${g}/${u}`:g;return i==="schedule-session"&&p?null:s.jsx(Ce,{collapsed:!t,isCurrent:r.pathname===f,route:{...h,path:f}},i)})})]})},ve=()=>{const{data:{user:e}}=_.useUser(),{data:{filter:o,view:c,errorInData:d}}=I.useSchedule(),{isTablet:t,isMobile:a}=ae(),[u,r]=j.useState(!0),n=F(),p=q(),S=n.pathname!==ne,h=n.pathname.split("/"),i=h.length===4?h[h.length-1]:null,g=i?/\d/.test(i):!1,f=(e==null?void 0:e.user_status)==="staff"?(e==null?void 0:e.fullName)??"":(e==null?void 0:e.group)??"",k=n.pathname.includes(re),w=n.pathname.includes(ie),m=k||w,{open:y}=le(),E=()=>{o&&p.push(T(U,{page:n.pathname.split("/")[2]})),x.setSearchValue(f),x.setFilter(""),x.resetExternalSchedule()};j.useLayoutEffect(()=>{c===V.month&&!m&&x.changeView(V.day)},[c,m]),j.useEffect(()=>{r(!(a||t))},[t,a]),j.useEffect(()=>{i?(x.setFilter(i),x.setSearchValue(i),g?O.getGroupScheduleFx({group:i}):O.getTeacherScheduleFx({fullName:i})):E()},[i]),j.useEffect(()=>()=>{x.resetExternalSchedule()},[]);const R=()=>{O.getScheduleFx(e)},C=()=>l=>{(l==null?void 0:l.id)===(e==null?void 0:e.group)&&E(),l!=null&&l.id&&(n.pathname.split("/")[2]==="retake"?p.push(T(U,{page:"current",filter:l.value})):p.push(T(U,{page:n.pathname.split("/")[2],filter:l.value})))},L=l=>{x.setSearchValue(l)};return{isSideMenuOpen:u,shouldShowSlider:S,isMobile:a,isSessionPage:k,baseSearchValue:f,showMonth:m,handleErrorClick:()=>{ce.evokePopUpMessage({message:d,type:"failure",time:oe.ten_seconds})},handleValue:L,onHintClick:C,handleReturnToMySchedule:E,handleLoad:R,handleOpenSideMenu:()=>{a?y(s.jsx(M,{d:"column",gap:"8px",ai:"flex-start",children:s.jsx(H,{isSideMenuOpen:!0,baseSearchValue:f,handleReturnToMySchedule:E,onHintClick:C,handleValue:L})})):r(l=>!l)}}},be=b.div`
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
`,we=e=>s.jsx(be,{isSideMenuOpen:e.isSideMenuOpen,children:s.jsx(H,{...e})}),_e=()=>{const{data:{view:e,schedule:o,externalSchedule:c,errorInData:d},loading:t,error:a}=I.useSchedule(),{allRoutes:u}=ue.useMenu(),{isSideMenuOpen:r,shouldShowSlider:n,showMonth:p,baseSearchValue:S,isMobile:h,onHintClick:i,handleValue:g,handleReturnToMySchedule:f,handleLoad:k,handleOpenSideMenu:w,handleErrorClick:m}=ve();return s.jsx(he,{loading:t,load:k,error:a,data:t?c:o,children:s.jsx(pe,{topCenterElement:n&&s.jsx(xe,{size:"small",sliderWidth:"240px",pages:p?fe:Se,currentPage:e,appearance:!h,setCurrentPage:x.changeView}),topRightCornerElement:s.jsxs(M,{w:"fit-content",gap:"20px",children:[s.jsx(Ee,{visible:!!d,onClick:m}),s.jsx(D,{icon:h?s.jsx(K,{}):s.jsx(A,{}),width:"36px",height:"36px",onClick:w})]}),children:u&&s.jsxs(M,{gap:"16px",ai:"flex-start",children:[!h&&s.jsx(we,{isSideMenuOpen:r,baseSearchValue:S,handleReturnToMySchedule:f,onHintClick:i,handleValue:g}),s.jsxs(B,{children:[Object.keys(v??{}).map(y=>{const{path:E,id:R,Component:C}=v[y];return s.jsx(Q,{path:E,children:s.jsx(C,{})},R)}),s.jsx(J,{to:ge})]})]})})})};export{_e as default};
