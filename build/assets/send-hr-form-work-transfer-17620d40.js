import{bi as c}from"./index-0892b83f.js";const v=async(f,d,n,u)=>{n(!1);const l=d.map(s=>{if(Array.isArray(s.data[0])){const e=s.data.map(r=>Object.assign({},...r?.map(i=>{const o={};return i?.fieldName&&(o[i?.fieldName]=i?.value?.title?i?.value?.title:i?.value),o}))),a={};return a[f]=JSON.stringify(e),a}else return s.data.map(e=>{const a={};return e?.fieldName&&(a[e?.fieldName??""]=typeof e.value!="object"?e?.value:e.value.title),e.type==="multiselect"&&(a[e?.fieldName??""]=JSON.stringify(e?.value.map(r=>r.title))),a})}).flat(),t=Object.assign({},...l);!(await c.sendBufferWorkTransferFx({employeeGuid:t.jobGuid,transferDate:t.transferDate,divisionGuid:u.find(s=>s.divisionName===t.newPlaceOfWork)?.divisionGuid??"",desiredJob:t.newPost,desiredRate:t.newRate})).isError&&n(!0)};export{v as s};
