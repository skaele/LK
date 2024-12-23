import{s as S,j as e,r as h,M as W}from"./vendor-08ab745b.js";import{$ as z,g as D,aE as M,aF as T,h as P,X as V,aG as B,aH as b,K as f,r as N,ap as p,l as d,ai as E,W as U,_ as L,P as H,q as A,an as g,H as I,x as R}from"./index-0892b83f.js";const K=async()=>(await z.get(`?getVacations&token=${D()}`)).data,j=M({api:{get:K},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),q=S(T).withConfig({componentId:"sc-13iobzb-0"})(["border-radius:var(--brLight);background:var(--block-content);position:relative;.background{font-size:6em;position:absolute;bottom:0px;right:10px;font-weight:bold;opacity:0.5;}.content{height:100%;display:flex;align-items:flex-end;}"]),v=({children:n,title:o,text:l,width:r,height:s,background:a,padding:t})=>e.jsxs(q,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:r??"15vw",minHeight:s??"150px",maxHeight:s??"150px",padding:t,children:[e.jsx(P,{size:4,align:"left",children:o}),e.jsx(V,{visible:!!l,fontSize:"0.9em",children:B(l??"",60)}),a&&e.jsx("div",{className:"background",children:a}),n&&e.jsx("div",{className:"content",children:n})]}),x={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},G=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0},{title:"Остаток отпуска",field:"unusedVacationPeriods",showFull:!0}],O=n=>{const{division:o,post:l,vacations:r,allActualVacationPeriods:s,allPlannedVacationPeriods:a,allUnusedVacationPeriods:t}=X(n);return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(f,{keyStr:"Подразделение",value:o}),e.jsx(f,{keyStr:"Должность",value:l})]}),e.jsx(N,{columns:G,data:r,footer:()=>({allPlannedVacationPeriods:m(a),allActualVacationPeriods:m(s),allUnusedVacationPeriods:m(t)})})]})};function m(n){return`Всего: ${n} ${p(Math.trunc(n||0),x)}`}function X(n){const{fact:o,plan:l,unused:r,division:s,post:a}=n;return{division:s,post:a,vacations:J(o,l,r),allActualVacationPeriods:o.reduce((t,{numdays:i})=>(t+=+i,t),0),allPlannedVacationPeriods:l.reduce((t,{numdays:i})=>(t+=+i,t),0),allUnusedVacationPeriods:r.reduce((t,{numdays:i})=>(t+=+i,t),0)}}function J(n,o,l){const r=Math.max(n.length,o.length,l.length),s=[];for(let a=0;a<r;a++){const t=n[a],i=o[a],c=l[a],u={actualVacationPeriods:"",plannedVacationPeriods:"",unusedVacationPeriods:""},k=d(t?.from,"numeric"),$=d(t?.to,"numeric"),w=d(i?.from,"numeric"),_=d(i?.to,"numeric"),F=d(c?.from,"numeric"),C=d(c?.to,"numeric");t&&(u.actualVacationPeriods=`${k} - ${$} (${t.numdays} ${p(Number(t.numdays)||0,x)})`),i&&(u.plannedVacationPeriods=`${w} - ${_} (${i.numdays} ${p(Number(i.numdays)||0,x)})`),c&&(u.unusedVacationPeriods=`${F} - ${C} (${c.numdays} ${p(Math.trunc(Number(c.numdays))||0,x)})`),s.push(u)}return s}const y={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_pyatidnevnoj_rabochej_nedeli.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_shestidnevnoj_rabochej.pdf"},Q=()=>{const{data:{user:n}}=E.useUser(),{data:o,error:l}=j.selectors.useData(),r=h.useMemo(()=>o?.map((i,c)=>({id:c,title:i.division}))||[],[o]),[s,a]=h.useState(r[0]??{});h.useEffect(()=>{s?.id||a(r[0])},[s?.id,a,r]);const t=o?.[Number(s?.id||0)];return e.jsx(U,{load:j.effects.getFx,error:l,data:o,children:e.jsx(L,{alignItems:"flex-start",children:e.jsxs(H,{topRightCornerElement:e.jsx(A,{onClick:()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vacation")},text:"Заполнить график",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(W,{}),minWidth:"35px",height:"36px"}),children:[e.jsx(V,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2024 год"}),e.jsxs(b,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[e.jsx(v,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:e.jsx(g,{onClick:()=>null,href:y.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),e.jsx(v,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:e.jsx(g,{onClick:()=>null,href:y.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),e.jsx(I,{}),e.jsx(P,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!n?.id&&e.jsx(R,{width:"fit-content",items:r,selected:s,setSelected:a}),t&&e.jsx(O,{...t})]})})})},ee=()=>e.jsx(Q,{});export{ee as default};
