import{r as c,j as e,F as C}from"./vendor-198a3a64.js";import{x as D,a as M,L as T,I as g,M as k,T as z,l as B,S as I,y as N,E as P,W as U,z as W,F as G,G as L}from"./index-7ac35755.js";import{g as _}from"./get-method-obstaing-c0726de9.js";const w=async(r,u,a,m,s)=>{a(!0);const n=D(r);try{await u({...n,formId:s}),a(!1),m({completed:!0})}catch(p){a(!1),M.evokePopUpMessage({message:`${p}`,type:"failure",time:3e4})}},O=({model:r,getForm:u,successMessage:a,outerForm:m,isAvailableToSend:s=!0,repeatable:n=!0,formId:p,isSpecialField:F})=>{var h;const{data:o,completed:f}=r.selectors.useForm(),[d,x]=c.useState(!1),[t,i]=c.useState(null),[j,S]=c.useState({}),l=(f||!s)??!1;return c.useEffect(()=>{o&&i(m??u(o))},[o]),c.useEffect(()=>{F&&t&&o&&S(_(t.data))},[t]),!t||!i?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsx(g,{...t,collapsed:l&&!n,setData:i,specialFieldsNameConfig:j}),e.jsx(k,{title:"Информация по заявке",type:"info",icon:e.jsx(C,{}),visible:l&&!!a,children:a}),(o==null?void 0:o.last_update)&&e.jsxs(z,{size:5,children:["Дата последней отправки: ",B(o.last_update)]}),e.jsx(I,{text:s?"Отправить":"Отправлено",action:()=>w(t,r.effects.postFormFx,x,r.events.changeCompleted,p),isLoading:d,completed:f,setCompleted:E=>r.events.changeCompleted({completed:E}),buttonSuccessText:"Отправлено",repeatable:n,isDone:l&&!n,isActive:N(t,j)&&(((h=t.optionalCheckbox)==null?void 0:h.value)??!0),popUpFailureMessage:l?"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})},H=({model:r,getForm:u,successMessage:a,goBack:m,pageAvailability:s,isAvailableToSend:n=!0,repeatable:p=!0,formId:F,isSpecialField:o=!1})=>{const{data:f,error:d}=r.selectors.useForm(),[x,t]=c.useState(null);return(!!s&&!(s!=null&&s.isAvailable))??!1?e.jsx(P,{text:(s==null?void 0:s.text)??"Вам не доступен этот раздел"}):(c.useEffect(()=>{f&&t(u(f))},[f]),e.jsx(U,{load:()=>r.effects.getFormFx(),error:d,data:x,children:e.jsx(W,{children:!!x&&!!t&&e.jsxs(G,{children:[e.jsx(L,{text:m,visible:!!m}),e.jsx(O,{model:r,successMessage:a,isAvailableToSend:n,repeatable:p,getForm:u,outerForm:x,formId:F,isSpecialField:o})]})})}))};export{H as T};
