import"./vendor-3c67dcca.js";import{$ as o,g as r}from"./index-15ca9195.js";import{c as s}from"./create-form-store-f846b505.js";const p=()=>o.get(`?getAppData&token=${r()}`),l=e=>{const t=new FormData;t.set("token",r()),t.set("saveAppData",e.formId);for(const[a,n]of Object.entries(e))t.set(a,n);return o.post(`?saveAppData=${e.formId}`,t,{headers:{"Content-Type":"multipart/form-data"}})},{effects:c,events:m,selectors:f}=s({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:p,post:l}}),g=Object.freeze(Object.defineProperty({__proto__:null,effects:c,events:m,selectors:f},Symbol.toStringTag,{value:"Module"}));export{g as t};
