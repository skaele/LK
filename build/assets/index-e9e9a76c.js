var A=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var H=(e,n,s)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,R=(e,n)=>{for(var s in n||(n={}))J.call(n,s)&&H(e,s,n[s]);if(D)for(var s of D(n))X.call(n,s)&&H(e,s,n[s]);return e},N=(e,n)=>K(e,Q(n));var P=(e,n,s)=>new Promise((h,i)=>{var o=a=>{try{r(s.next(a))}catch(c){i(c)}},l=a=>{try{r(s.throw(a))}catch(c){i(c)}},r=a=>a.done?h(a.value):Promise.resolve(a.value).then(o,l);r((s=s.apply(e,n)).next())});import{j as t,L as Y,bq as Z,cc as ee,s as k,aa as se,a6 as $,bu as te,r as C,a5 as ne,cG as ae,d2 as ie,cm as re,cn as oe,aT as le}from"./vendor-3c67dcca.js";import{a9 as U,i as ce,j as ue,k as de,b_ as he,t as pe,E as G,r as w,bz as L,B as z,D as xe,b$ as g,aN as fe,c0 as Se,c1 as ge,c2 as me,u as ve,c3 as W,c4 as f,bB as y,c5 as O,c6 as T,e as Ee,c7 as je,q as Ce,an as we,W as Me,N as ke,O as be,c8 as _e,c9 as Ie,ca as Re}from"./index-09f1adfd.js";import{E as ye}from"./index-13b10b7d.js";const Oe=({value:e,setValue:n,onHintClick:s,onValueEmpty:h})=>{const i=/\d/.test(e),{data:{user:o}}=U.useUser(),l=r=>P(void 0,null,function*(){return i?yield de(r):yield he(r,"",1,20)});return t.jsx(ce,{value:e,width:"100%",setValue:n,onHintClick:s(i),placeholder:"Поиск",customMask:i?ue.groupMask:void 0,transformRequest:i?void 0:r=>r.fio,request:l,leftIcon:e.length===0?t.jsx(Y,{}):i?t.jsx(Z,{}):t.jsx(ee,{}),onValueEmpty:(o==null?void 0:o.user_status)==="staff"?h:void 0})},Te=k(se).withConfig({componentId:"sc-17n125n-0"})(["color:var(--text);padding:15px 15px;max-width:140px;width:100%;opacity:",";border-radius:10px;background:",";color:",";&:hover{filter:brightness(0.97);}"],({disabled:e})=>e?.5:1,({isCurrent:e})=>e?pe.blue.transparent3:"transparent",({isCurrent:e})=>e?"var(--blue)":"var(--grey)"),Ue=k.div.withConfig({componentId:"sc-17n125n-1"})(["display:flex;align-items:center;justify-content:center;svg{width:20px;min-width:20px;height:20px;}"]),Le=k.div.withConfig({componentId:"sc-17n125n-2"})(["font-weight:",";font-size:0.9rem;"],({isCurrent:e})=>e?500:400),Ve=({route:e,collapsed:n=!1,disabled:s=!1,isCurrent:h=!1})=>{if(!e)return t.jsx(G,{children:"Ссылка не определена"});const{path:i,title:o,icon:l,color:r,shortTitle:a}=e,c=u=>{if(s)return u.preventDefault()};return t.jsx(Te,{collapsed:n,disabled:s,isCurrent:h,to:i,title:a!=null?a:o,color:r,onClick:c,children:t.jsxs(w,{gap:"8px",children:[t.jsx(Ue,{children:l}),!n&&t.jsx(Le,{isCurrent:h,children:a!=null?a:o})]})})},q=({handleReturnToMySchedule:e,baseSearchValue:n,handleValue:s,onHintClick:h,isSideMenuOpen:i})=>{const{data:{searchValue:o,filter:l}}=L.useSchedule(),r=$(),{data:{user:a}}=U.useUser(),c=(a==null?void 0:a.user_status)==="staff";return t.jsxs(t.Fragment,{children:[i&&t.jsxs(t.Fragment,{children:[t.jsx(G,{children:"Группа или преподаватель"}),t.jsx(Oe,{value:o,setValue:s,onHintClick:h})]}),n!==o&&t.jsx(z,{text:i&&"Мое расписание",onClick:e,icon:t.jsx(te,{}),background:"var(--block)",textColor:"var(--blue)"}),t.jsx(xe,{margin:"16px 0",width:"100%"}),t.jsx(w,{d:"column",gap:"2px",ai:"flex-start",children:Object.keys(g!==null&&g!==void 0?g:{}).map(u=>{const x=g[u],{id:m,path:S}=x,d=l?`${S}/${l}`:S;return m==="schedule-session"&&c?null:t.jsx(Ve,{collapsed:!i,isCurrent:r.pathname===d,route:N(R({},x),{path:d})},m)})})]})},Fe=()=>{var e,n;const{data:{user:s}}=U.useUser(),{data:{filter:h,view:i,errorInData:o}}=L.useSchedule(),{isTablet:l,isMobile:r}=fe(),[a,c]=C.useState(!0),u=$(),x=ne(),m=u.pathname!==Se,S=u.pathname.split("/"),d=S.length===4?S[S.length-1]:null,b=d?/\d/.test(d):!1,E=(s==null?void 0:s.user_status)==="staff"?(e=s==null?void 0:s.fullName)!==null&&e!==void 0?e:"":(n=s==null?void 0:s.group)!==null&&n!==void 0?n:"",M=u.pathname.includes(ge),_=u.pathname.includes(me),j=M||_,{open:I}=ve(),v=()=>{h&&x.push(O(T,{page:u.pathname.split("/")[2]})),f.setSearchValue(E),f.setFilter(""),f.resetExternalSchedule()};C.useLayoutEffect(()=>{i===W.month&&!j&&f.changeView(W.day)},[i,j]),C.useEffect(()=>{c(!(r||l))},[l,r]),C.useEffect(()=>{d?(f.setFilter(d),f.setSearchValue(d),b?y.getGroupScheduleFx({group:d}):y.getTeacherScheduleFx({fullName:d})):v()},[d]),C.useEffect(()=>()=>{f.resetExternalSchedule()},[]);const B=()=>{y.getScheduleFx(s)},V=()=>p=>{(p==null?void 0:p.id)===(s==null?void 0:s.group)&&v(),p!=null&&p.id&&(u.pathname.split("/")[2]==="retake"?x.push(O(T,{page:"current",filter:p.value})):x.push(O(T,{page:u.pathname.split("/")[2],filter:p.value})))},F=p=>{f.setSearchValue(p)};return{isSideMenuOpen:a,shouldShowSlider:m,isMobile:r,isSessionPage:M,baseSearchValue:E,showMonth:j,handleErrorClick:()=>{Ee.evokePopUpMessage({message:o,type:"failure",time:je.ten_seconds})},handleValue:F,onHintClick:V,handleReturnToMySchedule:v,handleLoad:B,handleOpenSideMenu:()=>{r?I(t.jsx(w,{d:"column",gap:"8px",ai:"flex-start",children:t.jsx(q,{isSideMenuOpen:!0,baseSearchValue:E,handleReturnToMySchedule:v,onHintClick:V,handleValue:F})})):c(p=>!p)}}},De=k.div.withConfig({componentId:"sc-sh5ff8-0"})(["min-width:",";width:",";padding-right:10px;height:calc(100vh - var(--header-height) - 112px);display:flex;z-index:10;gap:8px;flex-direction:column;align-items:",";","{display:none;}"],({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"210px":"60px",({isSideMenuOpen:e})=>e?"flex-start":"center",Ce.isMobile),He=e=>t.jsx(De,{isSideMenuOpen:e.isSideMenuOpen,children:t.jsx(q,R({},e))}),qe=()=>{const{data:{view:e,schedule:n,externalSchedule:s,errorInData:h},loading:i,error:o}=L.useSchedule(),{allRoutes:l}=we.useMenu(),{isSideMenuOpen:r,shouldShowSlider:a,showMonth:c,baseSearchValue:u,isMobile:x,onHintClick:m,handleValue:S,handleReturnToMySchedule:d,handleLoad:b,handleOpenSideMenu:E,handleErrorClick:M}=Fe();return t.jsx(Me,{loading:i,load:b,error:o,data:i?s:n,children:t.jsx(ke,{topCenterElement:a&&t.jsx(be,{size:"small",sliderWidth:"240px",pages:c?_e:Ie,currentPage:e,appearance:!x,setCurrentPage:f.changeView}),topRightCornerElement:t.jsxs(w,{w:"fit-content",gap:"20px",children:[t.jsx(ye,{visible:!!h,onClick:M}),t.jsx(z,{icon:x?t.jsx(ae,{}):t.jsx(ie,{}),width:"36px",height:"36px",onClick:E})]}),children:l&&t.jsxs(w,{gap:"16px",ai:"flex-start",children:[!x&&t.jsx(He,{isSideMenuOpen:r,baseSearchValue:u,handleReturnToMySchedule:d,onHintClick:m,handleValue:S}),t.jsxs(re,{children:[Object.keys(g!==null&&g!==void 0?g:{}).map(_=>{const{path:j,id:I,Component:v}=g[_];return t.jsx(oe,{path:j,children:t.jsx(v,{})},I)}),t.jsx(le,{to:Re})]})]})})})};export{qe as default};
