var M=Object.defineProperty;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(s,e,o)=>e in s?M(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,h=(s,e)=>{for(var o in e||(e={}))T.call(e,o)&&g(s,o,e[o]);if(f)for(var o of f(e))B.call(e,o)&&g(s,o,e[o]);return s};var j=(s,e,o)=>new Promise((d,a)=>{var l=r=>{try{i(o.next(r))}catch(c){a(c)}},t=r=>{try{i(o.throw(r))}catch(c){a(c)}},i=r=>r.done?d(r.value):Promise.resolve(r.value).then(l,t);i((o=o.apply(s,e)).next())});import{s as N,j as n,r as m,M as E}from"./vendor-91dd51cf.js";import{$ as U,g as L,aE as H,aF as A,h as $,X as _,aG as I,aH as F,K as y,r as R,ap as p,l as u,ai as K,W as q,_ as G,P as O,q as X,an as P,H as J,x as Q}from"./index-2caaee2c.js";const Y=()=>j(void 0,null,function*(){return(yield U.get(`?getVacations&token=${L()}`)).data}),V=H({api:{get:Y},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),Z=N(A).withConfig({componentId:"sc-13iobzb-0"})(["border-radius:var(--brLight);background:var(--block-content);position:relative;.background{font-size:6em;position:absolute;bottom:0px;right:10px;font-weight:bold;opacity:0.5;}.content{height:100%;display:flex;align-items:flex-end;}"]),b=({children:s,title:e,text:o,width:d,height:a,background:l,padding:t})=>n.jsxs(Z,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:d!=null?d:"15vw",minHeight:a!=null?a:"150px",maxHeight:a!=null?a:"150px",padding:t,children:[n.jsx($,{size:4,align:"left",children:e}),n.jsx(_,{visible:!!o,fontSize:"0.9em",children:I(o!=null?o:"",60)}),l&&n.jsx("div",{className:"background",children:l}),s&&n.jsx("div",{className:"content",children:s})]}),x={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},ee=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0},{title:"Остаток отпуска",field:"unusedVacationPeriods",showFull:!0}],oe=s=>{const{division:e,post:o,vacations:d,allActualVacationPeriods:a,allPlannedVacationPeriods:l,allUnusedVacationPeriods:t}=ae(s);return n.jsxs(n.Fragment,{children:[n.jsxs(F,{children:[n.jsx(y,{keyStr:"Подразделение",value:e}),n.jsx(y,{keyStr:"Должность",value:o})]}),n.jsx(R,{columns:ee,data:d,footer:()=>({allPlannedVacationPeriods:v(l),allActualVacationPeriods:v(a),allUnusedVacationPeriods:v(t)})})]})};function v(s){return`Всего: ${s} ${p(Math.trunc(s||0),x)}`}function ae(s){const{fact:e,plan:o,unused:d,division:a,post:l}=s;return{division:a,post:l,vacations:te(e,o,d),allActualVacationPeriods:e.reduce((t,{numdays:i})=>(t+=+i,t),0),allPlannedVacationPeriods:o.reduce((t,{numdays:i})=>(t+=+i,t),0),allUnusedVacationPeriods:d.reduce((t,{numdays:i})=>(t+=+i,t),0)}}function te(s,e,o){const d=Math.max(s.length,e.length,o.length),a=[];for(let l=0;l<d;l++){const t=s[l],i=e[l],r=o[l],c={actualVacationPeriods:"",plannedVacationPeriods:"",unusedVacationPeriods:""},C=u(t==null?void 0:t.from,"numeric"),S=u(t==null?void 0:t.to,"numeric"),w=u(i==null?void 0:i.from,"numeric"),W=u(i==null?void 0:i.to,"numeric"),z=u(r==null?void 0:r.from,"numeric"),D=u(r==null?void 0:r.to,"numeric");t&&(c.actualVacationPeriods=`${C} - ${S} (${t.numdays} ${p(Number(t.numdays)||0,x)})`),i&&(c.plannedVacationPeriods=`${w} - ${W} (${i.numdays} ${p(Number(i.numdays)||0,x)})`),r&&(c.unusedVacationPeriods=`${z} - ${D} (${r.numdays} ${p(Math.trunc(Number(r.numdays))||0,x)})`),a.push(c)}return a}const k={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_pyatidnevnoj_rabochej_nedeli.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_shestidnevnoj_rabochej.pdf"},ne=()=>{var i;const{data:{user:s}}=K.useUser(),{data:e,error:o}=V.selectors.useData(),d=m.useMemo(()=>(e==null?void 0:e.map((r,c)=>({id:c,title:r.division})))||[],[e]),[a,l]=m.useState((i=d[0])!=null?i:{});m.useEffect(()=>{a!=null&&a.id||l(d[0])},[a==null?void 0:a.id,l,d]);const t=e==null?void 0:e[Number((a==null?void 0:a.id)||0)];return n.jsx(q,{load:V.effects.getFx,error:o,data:e,children:n.jsx(G,{alignItems:"flex-start",children:n.jsxs(O,{topRightCornerElement:n.jsx(X,{onClick:()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vacation")},text:"Заполнить график",background:"var(--reallyBlue)",textColor:"#fff",icon:n.jsx(E,{}),minWidth:"35px",height:"36px"}),children:[n.jsx(_,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2024 год"}),n.jsxs(F,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[n.jsx(b,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:n.jsx(P,{onClick:()=>null,href:k.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),n.jsx(b,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:n.jsx(P,{onClick:()=>null,href:k.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),n.jsx(J,{}),n.jsx($,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&n.jsx(Q,{width:"fit-content",items:d,selected:a,setSelected:l}),t&&n.jsx(oe,h({},t))]})})})},le=()=>n.jsx(ne,{});export{le as default};
