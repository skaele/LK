import{a5 as c,d as m}from"./index-fe28ea49.js";const f=async(s,a,e,o,r)=>{e(!0);const t=c(s);try{r?await a({...t,formId:r}):await a({...t}),e(!1),o({completed:!0})}catch(p){e(!1),m.evokePopUpMessage({message:`${p}`,type:"failure",time:3e4})}};export{f as s};
