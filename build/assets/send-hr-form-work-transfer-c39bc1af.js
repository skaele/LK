import{bi as b}from"./index-0ac1f95c.js";const j=async(m,c,o,p)=>{var f;o(!1);const v=c.map(i=>{if(Array.isArray(i.data[0])){const e=i.data.map(n=>Object.assign({},...n==null?void 0:n.map(a=>{var u,r;const d={};return a!=null&&a.fieldName&&(d[a==null?void 0:a.fieldName]=(u=a==null?void 0:a.value)!=null&&u.title?(r=a==null?void 0:a.value)==null?void 0:r.title:a==null?void 0:a.value),d}))),t={};return t[m]=JSON.stringify(e),t}else return i.data.map(e=>{const t={};return e!=null&&e.fieldName&&(t[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(t[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(n=>n.title))),t})}).flat(),s=Object.assign({},...v);!(await b.sendBufferWorkTransferFx({employeeGuid:s.jobGuid,transferDate:s.transferDate,divisionGuid:((f=p.find(i=>i.divisionName===s.newPlaceOfWork))==null?void 0:f.divisionGuid)??"",desiredJob:s.newPost,desiredRate:s.newRate})).isError&&o(!0)};export{j as s};
