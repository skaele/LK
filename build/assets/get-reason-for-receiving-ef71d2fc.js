const n=l=>{const e=l.find(t=>t.fieldName==="reason");let a=null;return e!=null&&e.value&&(e==null?void 0:e.value).title==="отчислением из"&&(a="dueToWithdrawal"),{reason:a}};export{n as g};
