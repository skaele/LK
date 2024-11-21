import{s as c,j as t,d5 as R,d6 as H,r as h,R as Y,d7 as U}from"./vendor-48260ac4.js";import{$ as X,g as K,aE as V,bB as p,l as I,cT as f,cU as z,u as J,G as d,bR as Q,cV as Z,X as g,bC as ee,cW as te,h as w,K as x,cX as ne,H as ie,cY as v,bQ as $,L as u,cZ as N,ai as re,W as se,P as oe,x as ae,a2 as _,bp as ce}from"./index-b11f750d.js";const de=async({semestr:e})=>{var r,n;return(n=(r=await X.get(`?getAcademicPerformance&semestr=${e}&token=${K()}`))==null?void 0:r.data)==null?void 0:n.academicPerformance};function A(e){const r={};for(const n of e)r[n.exam_type]?r[n.exam_type].push(n):r[n.exam_type]=[n];return r}function P(e,r){const n=e+Math.floor((r-1)/2);return`${n}/${n+1}`}function le(e,r,n){return n===-1?e.filter(i=>(i==null?void 0:i.year)===P(r,Number(i.semestr))):e==null?void 0:e.filter(i=>(i==null?void 0:i.year)===P(r,n))}const E=V({api:{get:de},prepareData:A}),y=(e,r)=>{const n=new Date(e).getMonth();return n>1&&n<8?+r*2:+r*2-1},pe=e=>{const r=y(new Date().toISOString(),e),n=[];for(let i=1;i<=r;i++)n.push({id:i,title:`${i} семестр`});return n.push({id:-1,title:"Все семестры"}),n},xe=(e,r)=>A(r.filter(n=>p(n.name).includes(p(e))||p(n.teacher).includes(p(e))||p(I(n.exam_date)).includes(p(e))||p(n.bill_num).includes(p(e)))),C=(e,r)=>{var n;return e?r?f[e]||f.default:((n=f[e])==null?void 0:n.main)||f.default.main:"var(--grey)"},ue=e=>e.split(" ").reduce((r,n,i)=>(i===0?r.push(n):r.push(`${n[0]}.`),r),[]).join(" "),he=c.div.withConfig({componentId:"sc-1mqkodv-0"})(["display:flex;align-items:center;justify-content:center;color:",";width:",";height:22px;min-width:22px;min-height:22px;border-radius:50%;svg{width:100%;height:100%;}"],({grade:e})=>C(e),({superWide:e})=>e?"105px":"22px"),ge=({grade:e})=>t.jsx(he,{grade:e,superWide:e==="Не явился",children:e==="Не явился"?e:e&&(z[e]>2?t.jsx(R,{}):t.jsx(H,{}))}),me=c.div.withConfig({componentId:"sc-blq100-0"})(["width:100%;display:flex;min-height:60px;align-items:center;justify-content:space-between;padding:15px 0;box-sizing:border-box;cursor:pointer;opacity:",";"],({isGraded:e})=>e?1:.4),fe=c.div.withConfig({componentId:"sc-blq100-1"})(["display:flex;margin-right:10px;font-weight:500;hyphens:auto;@media (max-width:1000px){min-width:0px;}"]),je=c.strong.withConfig({componentId:"sc-blq100-2"})(["color:",";font-weight:600;width:",";display:flex;justify-content:flex-end;"],({color:e})=>e,({superWide:e})=>e?"105px":"30px"),be=({item:e,type:r})=>{const{open:n}=J(),{name:i,grade:s}=e,o=C(s),S=()=>e.grade&&n(t.jsx(ye,{item:e,color:C(s,!0)}));return t.jsxs(me,{onClick:S,isGraded:!!e.grade,children:[t.jsxs(d,{gap:"16px",children:[t.jsx(Q,{color:o,borderRadius:"9px",children:Z(i)}),t.jsxs(d,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(fe,{children:i}),t.jsx(g,{children:t.jsx(ee,{words:[ue(e.teacher),I(e.exam_date)]})})]})]}),t.jsx(je,{color:o,superWide:s==="Не явился",children:r==="Зачет"?t.jsx(ge,{grade:s}):s==="Не явился"?"Не явился":s&&z[s]})]})},ke=c.div.withConfig({componentId:"sc-7hxibl-0"})(["width:400px;@media (max-width:800px){width:100%;}"]),we=c.div.withConfig({componentId:"sc-7hxibl-1"})(["margin:20px 0;"]),ye=({item:e,color:r})=>t.jsxs(ke,{children:[t.jsx(te,{subjectName:e.name,color:r,noPadding:!0}),t.jsx(we,{children:t.jsx(w,{size:3,align:"left",children:e.name})}),t.jsx(x,{keyStr:"Курс",value:e.course}),t.jsx(x,{keyStr:"Форма аттестации",value:e.exam_type}),t.jsx(x,{keyStr:"Дата проведения",value:I(e.exam_date)}),t.jsx(x,{keyStr:"Оценка",value:e.grade}),t.jsx(x,{keyStr:"Номер ведомости",value:e.bill_num}),t.jsx(x,{keyStr:"Семестр",value:y(e.exam_date,+e.course)}),t.jsx(x,{keyStr:"Кафедра",value:e.chair}),t.jsx(x,{keyStr:"Преподаватель",value:t.jsx(ne,{id:void 0,type:"staff",name:e.teacher}),direction:"vertical"})]}),Se=({items:e,type:r})=>t.jsx(t.Fragment,{children:e.map((n,i)=>t.jsxs(Y.Fragment,{children:[t.jsx(be,{item:n,type:r}),i!==e.length-1&&t.jsx(ie,{margin:"0",width:"100%"})]},n.id))}),ve=h.memo(Se),Ce=({items:e,loading:r})=>{var n;return e?r?t.jsxs(d,{d:"column",ai:"flex-start",gap:"12px",children:[t.jsx(v,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx($,{quantity:5,avatarShape:"rect"}),t.jsx(v,{shape:"rect",size:{width:"100px",height:"30px"}}),t.jsx($,{quantity:10,avatarShape:"rect"})]}):t.jsx(d,{d:"column",gap:"20px",children:(n=Object.keys(e))==null?void 0:n.map(i=>t.jsxs(d,{d:"column",children:[t.jsxs(w,{size:3,align:"left",width:"fit-content",children:[i,t.jsx(g,{children:e[i].length})]}),t.jsx(ve,{items:e[i]||[],type:i,loading:r})]},i))}):null},Ie=h.memo(Ce);function ze(e){const r={5:0,4:0,3:0,2:0},n=e.filter(i=>!!i.grade&&i.exam_type!=="Зачет").length;return e.forEach(({grade:i,exam_type:s})=>{s!=="Зачет"&&i!==void 0&&r[z[i]]++}),n===0?r:Object.keys(r).reduce((i,s)=>(i[+s]=r[+s]/n,i),{})}const Ae=c.div.withConfig({componentId:"sc-1gg99m8-0"})(["overflow:hidden;width:100%;display:flex;gap:2px;height:10px;background:var(--block-content);"]),j=c.div.withConfig({componentId:"sc-1gg99m8-1"})(["width:",";height:10px;background:",";display:flex;border-radius:2px;justify-content:center;align-items:center;color:#fff;font-weight:500;display:",";"],({percent:e})=>`calc(${e} * 100%)`,({color:e})=>e,({percent:e})=>e===0&&"none"),b=c(d).withConfig({componentId:"sc-1gg99m8-2"})(["opacity:",";"],({percentage:e})=>e===0&&"0.2"),k=c.div.withConfig({componentId:"sc-1gg99m8-3"})(["min-width:10px;width:10px;height:10px;border-radius:2px;background:",";"],({color:e})=>e),De=({data:e,loading:r})=>{if(!e)return null;if(r)return t.jsx(v,{margin:"0",shape:"rect",size:{width:"100%",height:"12px"}});const n=ze(e);return t.jsxs(d,{d:"column",gap:"10px",children:[t.jsxs(Ae,{children:[t.jsx(j,{percent:n[5],color:u.green.main}),t.jsx(j,{percent:n[4],color:u.blue.main}),t.jsx(j,{percent:n[3],color:u.orange.main}),t.jsx(j,{percent:n[2],color:u.red.main})]}),t.jsxs(d,{gap:"30px",children:[t.jsxs(b,{percentage:n[5],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:u.green.main}),t.jsxs(g,{children:["5 - ",(n[5]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[4],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:u.blue.main}),t.jsxs(g,{children:["4 - ",(n[4]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[3],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:u.orange.main}),t.jsxs(g,{children:["3 - ",(n[3]*100).toFixed(1),"%"]})]}),t.jsxs(b,{percentage:n[2],gap:"4px",w:"fit-content",children:[t.jsx(k,{color:u.red.main}),t.jsxs(g,{children:["2 - ",(n[2]*100).toFixed(1),"%"]})]})]})]})},Be=c.div.withConfig({componentId:"sc-1p3ekrb-0"})(["border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px;background:linear-gradient(270deg,#246655,#46b99b,#46a4b9);background-size:600% 600%;-webkit-animation:AStudentBackground 10s ease infinite;-moz-animation:AStudentBackground 10s ease infinite;animation:AStudentBackground 10s ease infinite;img{filter:drop-shadow(2px 4px 25px black);}@-webkit-keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@-moz-keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AStudentBackground{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"]),Fe=c.div.withConfig({componentId:"sc-1p3ekrb-1"})(["border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px;background:linear-gradient(270deg,#243766,#4657b9,#46a4b9,#5d46b9);background-size:800% 800%;-webkit-animation:AnimationName 10s ease infinite;-moz-animation:AnimationName 10s ease infinite;animation:AnimationName 10s ease infinite;@-webkit-keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@-moz-keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"]),$e=e=>{if(!e)return"empty";let r=0,n=!1;for(let i=0;i<e.length;i++){const{grade:s}=e[i];if(!s)return"empty";s!=="Отлично"&&s!=="Хорошо"&&s!=="Зачтено"&&(n=!0),s!=="Зачтено"&&s!=="Отлично"&&r++}return n?"empty":r===1?"almost":r>1?"empty":"a-student"},Ne=({data:e})=>{const r=$e(e);return r==="empty"?null:r==="almost"?t.jsxs(Fe,{children:[t.jsxs(d,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(w,{size:3,align:"left",children:"Почти отличник"}),t.jsx(g,{fontSize:"1rem",children:"В следующий раз повезет"})]}),t.jsx(N,{src:"https://media2.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif?cid=6c09b952zc1sjle3291d5t30ls5aqkl8kw1xrr1klyc7h5gk&ep=v1_stickers_related&rid=giphy.gif&ct=g",width:"70px",height:"70px",loading:!1})]}):t.jsxs(Be,{children:[t.jsxs(d,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(w,{size:3,align:"left",children:"В этом семестре ты отличник!"}),t.jsx(g,{fontSize:"1rem",children:"Наши поздравления!"})]}),t.jsx(N,{src:"https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif",width:"70px",height:"70px",loading:!1})]})},Ee=()=>{const{data:e,loading:r,error:n}=E.selectors.useData(),{data:{user:i}}=re.useUser(),s=h.useMemo(()=>pe((i==null?void 0:i.course)??0),[i]),[o,S]=h.useState({id:y(new Date().toString(),(i==null?void 0:i.course)??1),title:y(new Date().toString(),(i==null?void 0:i.course)??1).toString()+" семестр"}),[m,O]=h.useState(null),D=m&&!Object.keys(m??{}).find(a=>(a==null?void 0:a.length)!==0)&&!r,G=`${(o==null?void 0:o.id)!==-1?o==null?void 0:o.id:""}`,B=a=>{E.effects.getFx({semestr:a?`${(a==null?void 0:a.id)!==-1?a==null?void 0:a.id:""}`:G})},[l,W]=h.useState(null),[q,L]=h.useState(null);h.useEffect(()=>{if(i&&e){const a=Number(o==null?void 0:o.id),T=Number(i==null?void 0:i.enterYear.split("/")[0]),F=le(e,T,a);W(F),L(A(F))}},[e]);const M=(l==null?void 0:l.length)===0&&!r;return t.jsx(se,{loading:r,load:B,error:n,data:l,children:t.jsx(oe,{topRightCornerElement:!!(i!=null&&i.id)&&t.jsx(ae,{onClick:B,width:"150px",items:s,selected:o,setSelected:S}),children:M||!l?t.jsx(_,{text:"Данных за этот семестр нет, попробуйте другой!"}):t.jsxs(t.Fragment,{children:[!m&&!r&&t.jsx(Ne,{data:l}),t.jsx(ce,{whereToSearch:l,searchEngine:xe,setResult:O,placeholder:"Поиск предметов",loadingOnType:!0}),D&&t.jsx(_,{text:"По данному запросу ничего не найдено",image:t.jsx(U,{})}),!D&&t.jsxs(d,{d:"column",gap:"40px",children:[t.jsx(De,{data:l,loading:r}),t.jsx(Ie,{items:m??q,loading:r})]})]})})})};export{Ee as default};
