import{s as N,q as B,j as n,r as L,Q as R,T as W,cM as V}from"./vendor-48260ac4.js";import{aq as v,h as A,X as d,l as b,M as g,au as S,G as c,at as $,q as F,aU as q,aV as J,aW as O,d as X,V as E,aX as _,ax as u,P as D,aY as G,ay as M,H as U}from"./index-b11f750d.js";import{D as H}from"./dev-mode-message-a89422b6.js";import{A as Q,F as Y}from"./forbidden-44c50965.js";const I=t=>t==="Approved"?"success":t==="Declined"||t==="Expired"?"failure":t==="Unknown"?"hint":"alert",C=({employee:t,role:r,userId:e,id:i})=>{var x,j,l;const[p,a]=B([v.approve,v.reject]),s=(t==null?void 0:t.approvalStatus)||((x=t==null?void 0:t.employeeVerdicts)!=null&&x.every(o=>o.approvalStatus==="Approved")&&t.zkguApprovalStatus==="Approved"&&t.selfApprovalStatus==="Approved"&&t.orderStatus==="Ready"?"Approved":(j=t==null?void 0:t.employeeVerdicts)!=null&&j.some(o=>o.approvalStatus==="Declined")||t.zkguApprovalStatus==="Declined"||t.selfApprovalStatus==="Declined"?"Declined":"InProgress");return n.jsxs(K,{children:[n.jsx(A,{align:"left",size:4,children:t.initials}),n.jsxs(A,{align:"left",size:5,children:[t.divisionName,", ",t.position]}),t.paymentIdentifier&&n.jsx(d,{children:t.paymentIdentifier}),n.jsxs(d,{children:["Сумма: ",t.sum," руб."]}),n.jsxs(d,{children:["Период: ",b(t.startDate)," - ",b(t.endDate)]}),n.jsx(g,{type:s==="Approved"?"success":s==="Declined"?"failure":"alert",title:S[s]||"—",align:"left",icon:null,children:t.commentary}),r==="Initiator"&&n.jsxs(n.Fragment,{children:[(l=t.employeeVerdicts)==null?void 0:l.map(o=>n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsxs(c,{d:"column",ai:"flex-start",children:[n.jsx(d,{fontSize:"0.9rem",children:o.approverPosition}),n.jsx(d,{children:o.approverName})]}),n.jsx(g,{minWidth:"180px",width:"180px",type:I(o.approvalStatus),icon:o.approvalStatus==="Unknown"?null:void 0,title:S[o.approvalStatus]||"—",align:o.approvalStatus==="Unknown"?"center":"left"})]},o.approverEmployeeId)),n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsx(d,{fontSize:"0.9rem",children:"1С:ЗКГУ"}),n.jsx(g,{width:"180px",type:I(t.zkguApprovalStatus),icon:t.zkguApprovalStatus==="Unknown"?null:void 0,title:S[t.zkguApprovalStatus]||"—",align:t.zkguApprovalStatus==="Unknown"?"center":"left"})]}),n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsxs(c,{d:"column",ai:"flex-start",children:[n.jsx(d,{fontSize:"0.9rem",children:"Получатель надбавки"}),n.jsx(d,{children:t.initials})]}),n.jsx(g,{minWidth:"180px",width:"180px",type:I(t.selfApprovalStatus),icon:t.selfApprovalStatus==="Unknown"?null:void 0,title:S[t.selfApprovalStatus]||"—",align:t.selfApprovalStatus==="Unknown"?"center":"left"})]}),t.orderStatus&&n.jsxs(c,{w:"100%",jc:"space-between",ai:"center",children:[n.jsxs(c,{d:"column",ai:"flex-start",children:[n.jsx(d,{fontSize:"0.9rem",children:"Статус приказа"}),t.orderTitle&&n.jsx(d,{children:t.orderTitle})]}),n.jsx(g,{minWidth:"180px",width:"180px",type:t.orderStatus==="Ready"?"success":"alert",title:$[t.orderStatus]||"—"})]})]}),r==="Approver"&&s!=="Approved"&&s!=="Declined"&&n.jsxs(c,{jc:"space-between",children:[n.jsx(F,{text:"Отказать",background:"var(--red)",textColor:"white",onClick:()=>{a({allowanceId:i,approverEmployeeId:e,employeeId:t.id})}}),n.jsx(F,{text:"Согласовать",background:"var(--green)",textColor:"white",onClick:()=>{p({allowanceId:i,approverEmployeeId:e,employeeId:t.id})}})]})]})},K=N.div.withConfig({componentId:"sc-n1ez6c-0"})(["width:100%;display:flex;flex-direction:column;gap:0.5rem;background-color:var(--block-content);padding:1rem 0.5rem;border-radius:0.5rem;"]),P=({file:t})=>{const[r,e]=L.useState(!1);return n.jsx(q,{onClick:i=>i.preventDefault(),children:n.jsxs("div",{className:"file-body",onClick:()=>{t.sizeB?(e(!0),fetch(`${J}files?${new URLSearchParams({fileId:t.id})}`,{headers:{Authorization:`Bearer ${O()}`}}).then(i=>i.blob()).then(i=>{var p;(p=window.open(window.URL.createObjectURL(i),"_blank"))==null||p.focus()}).catch(i=>{console.log(i)}).finally(()=>e(!1))):X.evokePopUpMessage({message:"Файл недоступен",type:"failure"})},children:[n.jsx("div",{className:"image-container",children:r?n.jsx(E,{width:"16px",height:"16px"}):t.contentType.includes("image")?n.jsx(R,{}):n.jsx(W,{})}),n.jsxs("div",{className:"name-and-size",children:[n.jsxs("b",{className:"file-name",children:[t.name,".",t.extension]}),t.digitalSignature&&n.jsxs(d,{fontSize:"0.7em",children:["Подпись: ",t.digitalSignature]}),!!t.sizeB&&n.jsx(d,{fontSize:"0.7em",children:_(t.sizeB)})]})]})})},en=()=>{var k,z;const{id:t}=V(),[r,e,i,p,a,s,x,j,l,o]=B([v.infoPageMounted,u.allowance.data,u.allowance.loading,u.allowance.error,u.roles,u.jobRoles,u.allowance.role,v.setCurrentRole,u.allowance.jobId,v.setCurrentJobId]),T=a.includes("Initiator"),f=a.includes("Approver"),w=T||f;return w&&(l||(f?(o(((k=s==null?void 0:s.find(h=>h.roles.includes("Approver")))==null?void 0:k.employeeId)||""),j("Approver")):(o(((z=s==null?void 0:s.find(h=>h.roles.includes("Initiator")))==null?void 0:z.employeeId)||""),j("Initiator")))),L.useEffect(()=>{w&&x&&l&&r({id:t,role:x,userId:l})},[t,x,l,w]),i?n.jsx(D,{children:n.jsx(c,{w:"100%",jc:"center",ai:"center",children:n.jsx(E,{})})}):w?n.jsx(D,{children:n.jsx(G,{load:()=>{},data:e,loading:i,error:p?p.message:null,children:x&&l?n.jsxs(n.Fragment,{children:[n.jsx(H,{}),a.length>1?n.jsx(M,{pages:[{id:"Approver",title:"Согласование",content:n.jsx(m,{id:t,role:x,jobId:l,files:e==null?void 0:e.files,employees:e==null?void 0:e.employees})},{id:"Initiator",title:"Установление",content:n.jsx(m,{id:t,role:x,jobId:l,files:e==null?void 0:e.files,employees:e==null?void 0:e.employees})}],currentPage:x==="Initiator"?1:0,onChangePage:h=>{j(h||"Approver")},appearance:!1}):a[0]==="Initiator"?n.jsx(m,{id:t,role:"Initiator",jobId:l,files:e==null?void 0:e.files,employees:e==null?void 0:e.employees}):n.jsx(m,{id:t,role:"Approver",jobId:l,files:e==null?void 0:e.files,employees:e==null?void 0:e.employees})]}):n.jsx(Y,{text:"Произошла ошибка"})})}):n.jsx(Q,{jobRoles:s})};function m({id:t,files:r,employees:e,role:i,jobId:p}){return r!=null&&r.application.length||r!=null&&r.other.length?n.jsx(M,{pages:[{title:"Сотрудники",content:n.jsx(c,{d:"column",gap:"1rem",w:"100%",children:e==null?void 0:e.map((a,s)=>n.jsxs(n.Fragment,{children:[s!==0&&n.jsx(U,{}),n.jsx(C,{employee:a,role:i,userId:p,id:t},a.id)]}))})},{title:"Файлы",content:n.jsxs(c,{d:"column",gap:"2rem",children:[!!(r!=null&&r.application.length)&&n.jsxs(n.Fragment,{children:[n.jsx(A,{size:4,align:"left",children:"Файлы заявления"}),n.jsx(c,{d:"column",gap:"1rem",children:r==null?void 0:r.application.map(a=>n.jsx(P,{file:a},a.id))})]}),!!(r!=null&&r.other.length)&&n.jsxs(n.Fragment,{children:[!!(r!=null&&r.application.length)&&n.jsx(A,{size:4,align:"left",children:"Другое"}),n.jsx(c,{d:"column",gap:"0.5rem",children:r==null?void 0:r.other.map(a=>n.jsx(P,{file:a},a.id))})]})]})}]}):n.jsx(c,{d:"column",gap:"1rem",w:"100%",children:e==null?void 0:e.map((a,s)=>n.jsxs(n.Fragment,{children:[s!==0&&n.jsx(U,{}),n.jsx(C,{employee:a,role:i,userId:p,id:t},a.id)]}))})}export{en as default};
