const o=n=>{const e=n.find(l=>l.fieldName==="reason");let a=null;return e?.value&&(e?.value).title==="отчислением из"&&(a="dueToWithdrawal"),{reason:a}};export{o as g};
