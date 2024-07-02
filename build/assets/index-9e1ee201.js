import{s as S,j as e,r as h,L as W}from"./vendor-905eebdf.js";import{$ as z,g as D,ae as T,af as B,h as P,O as b,ag as M,ah as k,K as g,t as N,ai as p,l as d,a2 as U,W as L,U as E,P as A,o as I,a7 as f,G as R,r as H}from"./index-fe28ea49.js";const K=async()=>(await z.get(`?getVacations&token=${D()}`)).data,j=T({api:{get:K},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),O=S(B).withConfig({componentId:"sc-13iobzb-0"})(["border-radius:var(--brLight);background:var(--block-content);position:relative;.background{font-size:6em;position:absolute;bottom:0px;right:10px;font-weight:bold;opacity:0.5;}.content{height:100%;display:flex;align-items:flex-end;}"]),v=({children:s,title:a,text:l,width:i,height:o,background:r,padding:t})=>e.jsxs(O,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:i??"15vw",minHeight:o??"150px",maxHeight:o??"150px",padding:t,children:[e.jsx(P,{size:4,align:"left",children:a}),e.jsx(b,{visible:!!l,fontSize:"0.9em",children:M(l??"",60)}),r&&e.jsx("div",{className:"background",children:r}),s&&e.jsx("div",{className:"content",children:s})]}),x={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},G=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0},{title:"Остаток отпуска",field:"unusedVacationPeriods",showFull:!0}],q=s=>{const{division:a,post:l,vacations:i,allActualVacationPeriods:o,allPlannedVacationPeriods:r,allUnusedVacationPeriods:t}=J(s);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(g,{keyStr:"Подразделение",value:a}),e.jsx(g,{keyStr:"Должность",value:l})]}),e.jsx(N,{columns:G,data:i,footer:()=>({allPlannedVacationPeriods:m(r),allActualVacationPeriods:m(o),allUnusedVacationPeriods:m(t)})})]})};function m(s){return`Всего: ${s} ${p(Math.trunc(s||0),x)}`}function J(s){const{fact:a,plan:l,unused:i,division:o,post:r}=s;return{division:o,post:r,vacations:Q(a,l,i),allActualVacationPeriods:a.reduce((t,{numdays:n})=>(t+=+n,t),0),allPlannedVacationPeriods:l.reduce((t,{numdays:n})=>(t+=+n,t),0),allUnusedVacationPeriods:i.reduce((t,{numdays:n})=>(t+=+n,t),0)}}function Q(s,a,l){const i=Math.max(s.length,a.length,l.length),o=[];for(let r=0;r<i;r++){const t=s[r],n=a[r],c=l[r],u={actualVacationPeriods:"",plannedVacationPeriods:"",unusedVacationPeriods:""},$=d(t==null?void 0:t.from,"numeric"),w=d(t==null?void 0:t.to,"numeric"),V=d(n==null?void 0:n.from,"numeric"),_=d(n==null?void 0:n.to,"numeric"),C=d(c==null?void 0:c.from,"numeric"),F=d(c==null?void 0:c.to,"numeric");t&&(u.actualVacationPeriods=`${$} - ${w} (${t.numdays} ${p(Number(t.numdays)||0,x)})`),n&&(u.plannedVacationPeriods=`${V} - ${_} (${n.numdays} ${p(Number(n.numdays)||0,x)})`),c&&(u.unusedVacationPeriods=`${C} - ${F} (${c.numdays} ${p(Math.trunc(Number(c.numdays))||0,x)})`),o.push(u)}return o}const y={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_pyatidnevnoj_rabochej_nedeli.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_shestidnevnoj_rabochej.pdf"},X=()=>{const{data:{user:s}}=U.useUser(),{data:a,error:l}=j.selectors.useData(),i=h.useMemo(()=>(a==null?void 0:a.map((n,c)=>({id:c,title:n.division})))||[],[a]),[o,r]=h.useState(i[0]??{});h.useEffect(()=>{o!=null&&o.id||r(i[0])},[o==null?void 0:o.id,r,i]);const t=a==null?void 0:a[Number((o==null?void 0:o.id)||0)];return e.jsx(L,{load:j.effects.getFx,error:l,data:a,children:e.jsx(E,{alignItems:"flex-start",children:e.jsxs(A,{topRightCornerElement:e.jsx(I,{onClick:()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vacation")},text:"Заполнить график",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(W,{}),minWidth:"35px",height:"36px"}),children:[e.jsx(b,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2024 год"}),e.jsxs(k,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[e.jsx(v,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:e.jsx(f,{onClick:()=>null,href:y.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),e.jsx(v,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:e.jsx(f,{onClick:()=>null,href:y.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),e.jsx(R,{}),e.jsx(P,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&e.jsx(H,{width:"fit-content",items:i,selected:o,setSelected:r}),t&&e.jsx(q,{...t})]})})})},ee=()=>e.jsx(X,{});export{ee as default};
