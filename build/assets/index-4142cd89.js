var L=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(e,s,t)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,k=(e,s)=>{for(var t in s||(s={}))B.call(s,t)&&g(e,t,s[t]);if(S)for(var t of S(s))I.call(s,t)&&g(e,t,s[t]);return e},E=(e,s)=>M(e,T(s));import{r as l,j as o,F as N}from"./vendor-33947725.js";import{L as W,I as z,M as P,h as U,l as G,S as O,c as R,a2 as q,W as w,_ as H,F as J,ak as K}from"./index-5e1edf2c.js";import{g as Q}from"./get-method-obstaing-bad4fac3.js";import{s as V}from"./send-form-2c2c2b51.js";const X=({model:e,getForm:s,successMessage:t,outerForm:i,isAvailableToSend:a=!0,repeatable:d=!0,formId:h,isSpecialField:j})=>{var f,u,c;const{data:r,completed:p}=e.selectors.useForm(),[m,x]=l.useState(!1),[n,v]=l.useState(null),[C,_]=l.useState({}),F=(f=p||!a)!==null&&f!==void 0?f:!1;return l.useEffect(()=>{r&&v(i!=null?i:s(r))},[r]),l.useEffect(()=>{j&&n&&r&&_(Q(n.data))},[n]),!n||!v?o.jsx(W,{}):o.jsxs(o.Fragment,{children:[o.jsx(z,E(k({},n),{collapsed:F&&!d,setData:v,specialFieldsNameConfig:C})),o.jsx(P,{title:"Информация по заявке",type:"info",icon:o.jsx(N,{}),visible:F&&!!t,children:t}),(r==null?void 0:r.last_update)&&o.jsxs(U,{size:5,children:["Дата последней отправки: ",G(r.last_update)]}),o.jsx(O,{text:a?"Отправить":"Отправлено",action:()=>V(n,e.effects.postFormFx,x,e.events.changeCompleted,h),isLoading:m,completed:p,setCompleted:D=>e.events.changeCompleted({completed:D}),buttonSuccessText:"Отправлено",repeatable:d,isDone:F&&!d,isActive:R(n,C)&&((u=(c=n.optionalCheckbox)===null||c===void 0?void 0:c.value)!==null&&u!==void 0?u:!0),popUpFailureMessage:F?"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})},y=({model:e,getForm:s,successMessage:t,goBack:i,pageAvailability:a,isAvailableToSend:d=!0,repeatable:h=!0,formId:j,isSpecialField:f=!1,title:u})=>{var c;const{data:r,error:p}=e.selectors.useForm(),[m,x]=l.useState(null);if((c=!!a&&!(a!=null&&a.isAvailable))!==null&&c!==void 0&&c){var n;return o.jsx(q,{text:(n=a==null?void 0:a.text)!==null&&n!==void 0?n:"Вам не доступен этот раздел"})}return l.useEffect(()=>{r&&x(s(r))},[r]),o.jsx(w,{load:()=>e.effects.getFormFx(),error:p,data:m,children:o.jsx(H,{children:!!m&&!!x&&o.jsxs(J,{children:[o.jsx(K,{text:i,visible:!!i}),u&&o.jsx("h2",{children:u}),o.jsx(X,{model:e,successMessage:t,isAvailableToSend:d,repeatable:h,getForm:s,outerForm:m,formId:j,isSpecialField:f})]})})})};export{y as T};
