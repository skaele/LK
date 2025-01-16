import{s as R,q as U,j as e,r as E,Q as T,T as V,cM as W}from"./vendor-3c67dcca.js";import{au as g,T as f,E as p,l as b,M as h,ay as w,r as d,az as $,B as D,aA as J,aB as O,aC as _,e as q,L as P,aD as y,at as v,N as F,aE as Q,ar as M,D as B}from"./index-ba49d757.js";import{D as G}from"./dev-mode-message-f8ae46b0.js";import{A as H,F as K}from"./forbidden-0c0c2458.js";const k=n=>n==="Approved"?"success":n==="Declined"||n==="Expired"?"failure":n==="Unknown"?"hint":"alert",C=({employee:n,role:t,userId:a,id:r})=>{var c,i,s;const[u,x]=U([g.approve,g.reject]),o=(n==null?void 0:n.approvalStatus)||(n!=null&&(c=n.employeeVerdicts)!==null&&c!==void 0&&c.every(l=>l.approvalStatus==="Approved")&&n.zkguApprovalStatus==="Approved"&&n.selfApprovalStatus==="Approved"&&n.orderStatus==="Ready"?"Approved":n!=null&&(i=n.employeeVerdicts)!==null&&i!==void 0&&i.some(l=>l.approvalStatus==="Declined")||n.zkguApprovalStatus==="Declined"||n.selfApprovalStatus==="Declined"?"Declined":"InProgress");return e.jsxs(X,{children:[e.jsx(f,{align:"left",size:4,children:n.initials}),e.jsxs(f,{align:"left",size:5,children:[n.divisionName,", ",n.position]}),n.paymentIdentifier&&e.jsx(p,{children:n.paymentIdentifier.name}),e.jsxs(p,{children:["Сумма: ",n.sum," руб."]}),e.jsxs(p,{children:["Период: ",b(n.startDate)," - ",b(n.endDate)]}),e.jsx(h,{type:o==="Approved"?"success":o==="Declined"?"failure":"alert",title:w[o]||"—",align:"left",icon:null,children:n.commentary}),t==="Initiator"&&e.jsxs(e.Fragment,{children:[(s=n.employeeVerdicts)===null||s===void 0?void 0:s.map(l=>e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(d,{d:"column",ai:"flex-start",children:[e.jsx(p,{fontSize:"0.9rem",children:l.approverPosition}),e.jsx(p,{children:l.approverName})]}),e.jsx(h,{minWidth:"180px",width:"180px",type:k(l.approvalStatus),icon:l.approvalStatus==="Unknown"?null:void 0,title:w[l.approvalStatus]||"—",align:l.approvalStatus==="Unknown"?"center":"left"})]},l.approverEmployeeId)),e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsx(p,{fontSize:"0.9rem",children:"Должностное лицо УЭФ"}),e.jsx(h,{width:"180px",type:k(n.zkguApprovalStatus),icon:n.zkguApprovalStatus==="Unknown"?null:void 0,title:w[n.zkguApprovalStatus]||"—",align:n.zkguApprovalStatus==="Unknown"?"center":"left"})]}),e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsxs(d,{d:"column",ai:"flex-start",children:[e.jsx(p,{fontSize:"0.9rem",children:"Работник (получатель надбавки)"}),e.jsx(p,{children:n.initials})]}),e.jsx(h,{minWidth:"180px",width:"180px",type:k(n.selfApprovalStatus),icon:n.selfApprovalStatus==="Unknown"?null:void 0,title:w[n.selfApprovalStatus]||"—",align:n.selfApprovalStatus==="Unknown"?"center":"left"})]}),n.orderStatus&&e.jsxs(d,{w:"100%",jc:"space-between",ai:"center",children:[e.jsx(d,{d:"column",ai:"flex-start",children:e.jsx(p,{fontSize:"0.9rem",children:"Статус приказа"})}),e.jsx(h,{minWidth:"180px",width:"180px",type:n.orderStatus==="Ready"?"success":"alert",title:$[n.orderStatus]||"—"})]})]}),t==="Approver"&&o!=="Approved"&&o!=="Declined"&&e.jsxs(d,{jc:"space-between",children:[e.jsx(D,{text:"Отказать",background:"var(--red)",textColor:"white",onClick:()=>{x({allowanceId:r,approverEmployeeId:a,employeeId:n.id})}}),e.jsx(D,{text:"Согласовать",background:"var(--green)",textColor:"white",onClick:()=>{u({allowanceId:r,approverEmployeeId:a,employeeId:n.id})}})]})]})},X=R.div.withConfig({componentId:"sc-n1ez6c-0"})(["width:100%;display:flex;flex-direction:column;gap:0.5rem;background-color:var(--block-content);padding:1rem 0.5rem;border-radius:0.5rem;"]),L=({file:n})=>{const[t,a]=E.useState(!1);return e.jsx(J,{onClick:r=>r.preventDefault(),children:e.jsxs("div",{className:"file-body",onClick:()=>{n.sizeB?(a(!0),fetch(`${O}files?${new URLSearchParams({fileId:n.id})}`,{headers:{Authorization:`Bearer ${_()}`}}).then(r=>r.blob()).then(r=>{var c;(c=window.open(window.URL.createObjectURL(r),"_blank"))===null||c===void 0||c.focus()}).catch(r=>{console.log(r)}).finally(()=>a(!1))):q.evokePopUpMessage({message:"Файл недоступен",type:"failure"})},children:[e.jsx("div",{className:"image-container",children:t?e.jsx(P,{width:"16px",height:"16px"}):n.contentType.includes("image")?e.jsx(T,{}):e.jsx(V,{})}),e.jsxs("div",{className:"name-and-size",children:[e.jsxs("b",{className:"file-name",children:[n.name,".",n.extension]}),n.digitalSignature&&e.jsxs(p,{fontSize:"0.7em",children:["Подпись: ",n.digitalSignature]}),!!n.sizeB&&e.jsx(p,{fontSize:"0.7em",children:y(n.sizeB)})]})]})})},ae=()=>{const{id:n}=W(),[t,a,r,c,i,s,u,x,o,l]=U([g.infoPageMounted,v.allowance.data,v.allowance.loading,v.allowance.error,v.roles,v.jobRoles,v.allowance.role,g.setCurrentRole,v.allowance.jobId,g.setCurrentJobId]),N=i.includes("Initiator"),z=i.includes("Approver"),m=N||z;if(m&&!o)if(z){var A;l((s==null||(A=s.find(j=>j.roles.includes("Approver")))===null||A===void 0?void 0:A.employeeId)||""),x("Approver")}else{var I;l((s==null||(I=s.find(j=>j.roles.includes("Initiator")))===null||I===void 0?void 0:I.employeeId)||""),x("Initiator")}return E.useEffect(()=>{m&&u&&o&&t({id:n,role:u,userId:o})},[n,u,o,m]),r?e.jsx(F,{children:e.jsx(d,{w:"100%",jc:"center",ai:"center",children:e.jsx(P,{})})}):m?e.jsx(F,{children:e.jsx(Q,{load:()=>{},data:a,loading:r,error:c?c.message:null,children:u&&o?e.jsxs(e.Fragment,{children:[e.jsx(G,{}),i.length>1?e.jsx(M,{pages:[{id:"Approver",title:"Согласование",content:e.jsx(S,{id:n,role:u,jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees})},{id:"Initiator",title:"Установление",content:e.jsx(S,{id:n,role:u,jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees})}],currentPage:u==="Initiator"?1:0,onChangePage:j=>{x(j||"Approver")},appearance:!1}):i[0]==="Initiator"?e.jsx(S,{id:n,role:"Initiator",jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees}):e.jsx(S,{id:n,role:"Approver",jobId:o,files:a==null?void 0:a.files,employees:a==null?void 0:a.employees})]}):e.jsx(K,{text:"Произошла ошибка"})})}):e.jsx(H,{jobRoles:s})};function S({id:n,files:t,employees:a,role:r,jobId:c}){return t!=null&&t.application.length||t!=null&&t.other.length?e.jsx(M,{pages:[{title:"Сотрудники",content:e.jsx(d,{d:"column",gap:"1rem",w:"100%",children:a==null?void 0:a.map((i,s)=>e.jsxs(e.Fragment,{children:[s!==0&&e.jsx(B,{}),e.jsx(C,{employee:i,role:r,userId:c,id:n},i.id)]}))})},{title:"Файлы",content:e.jsxs(d,{d:"column",gap:"2rem",children:[!!(t!=null&&t.application.length)&&e.jsxs(e.Fragment,{children:[e.jsx(f,{size:4,align:"left",children:"Файлы заявления"}),e.jsx(d,{d:"column",gap:"1rem",children:t==null?void 0:t.application.map(i=>e.jsx(L,{file:i},i.id))})]}),!!(t!=null&&t.other.length)&&e.jsxs(e.Fragment,{children:[!!(t!=null&&t.application.length)&&e.jsx(f,{size:4,align:"left",children:"Другое"}),e.jsx(d,{d:"column",gap:"0.5rem",children:t==null?void 0:t.other.map(i=>e.jsx(L,{file:i},i.id))})]})]})}]}):e.jsx(d,{d:"column",gap:"1rem",w:"100%",children:a==null?void 0:a.map((i,s)=>e.jsxs(e.Fragment,{children:[s!==0&&e.jsx(B,{}),e.jsx(C,{employee:i,role:r,userId:c,id:n},i.id)]}))})}export{ae as default};
