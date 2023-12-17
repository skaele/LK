import{s as W,j as e,r as h,z}from"./vendor-f1fdae2f.js";import{H as _,J as D,a8 as T,a9 as B,T as P,X as b,aa as M,ab as k,K as g,j as N,ac as p,l as d,V as U,W as E,v as L,w as A,B as H,Y as f,D as R,i as I}from"./index-f5c6ecdc.js";const K=async()=>(await _.get(`?getVacations&token=${D()}`)).data,v=T({api:{get:K},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),J=W(B)`
    border-radius: var(--brLight);
    background: var(--block-content);
    position: relative;

    .background {
        font-size: 6em;
        position: absolute;
        bottom: 0px;
        right: 10px;
        font-weight: bold;
        /* transform: rotate(-35deg); */
        opacity: 0.5;
    }
    .content {
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
`,y=({children:s,title:o,text:l,width:i,height:a,background:r,padding:t})=>e.jsxs(J,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:i??"15vw",minHeight:a??"150px",maxHeight:a??"150px",padding:t,children:[e.jsx(P,{size:4,align:"left",children:o}),e.jsx(b,{visible:!!l,fontSize:"0.9em",children:M(l??"",60)}),r&&e.jsx("div",{className:"background",children:r}),s&&e.jsx("div",{className:"content",children:s})]}),x={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},O=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0},{title:"Остаток отпуска",field:"unusedVacationPeriods",showFull:!0}],X=s=>{const{division:o,post:l,vacations:i,allActualVacationPeriods:a,allPlannedVacationPeriods:r,allUnusedVacationPeriods:t}=Y(s);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(g,{keyStr:"Подразделение",value:o}),e.jsx(g,{keyStr:"Должность",value:l})]}),e.jsx(N,{columns:O,data:i,footer:()=>({allPlannedVacationPeriods:m(r),allActualVacationPeriods:m(a),allUnusedVacationPeriods:m(t)})})]})};function m(s){return`Всего: ${s} ${p(Math.trunc(s||0),x)}`}function Y(s){const{fact:o,plan:l,unused:i,division:a,post:r}=s;return{division:a,post:r,vacations:q(o,l,i),allActualVacationPeriods:o.reduce((t,{numdays:n})=>(t+=+n,t),0),allPlannedVacationPeriods:l.reduce((t,{numdays:n})=>(t+=+n,t),0),allUnusedVacationPeriods:i.reduce((t,{numdays:n})=>(t+=+n,t),0)}}function q(s,o,l){const i=Math.max(s.length,o.length,l.length),a=[];for(let r=0;r<i;r++){const t=s[r],n=o[r],c=l[r],u={actualVacationPeriods:"",plannedVacationPeriods:"",unusedVacationPeriods:""},V=d(t==null?void 0:t.from,"numeric"),w=d(t==null?void 0:t.to,"numeric"),$=d(n==null?void 0:n.from,"numeric"),F=d(n==null?void 0:n.to,"numeric"),S=d(c==null?void 0:c.from,"numeric"),C=d(c==null?void 0:c.to,"numeric");t&&(u.actualVacationPeriods=`${V} - ${w} (${t.numdays} ${p(Number(t.numdays)||0,x)})`),n&&(u.plannedVacationPeriods=`${$} - ${F} (${n.numdays} ${p(Number(n.numdays)||0,x)})`),c&&(u.unusedVacationPeriods=`${S} - ${C} (${c.numdays} ${p(Math.trunc(Number(c.numdays))||0,x)})`),a.push(u)}return a}const j={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_pyatidnevnya_rabochaya_nedelya.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_shestidnevnaya_rabochaya_nedelya.pdf"},G=()=>{const{data:{user:s}}=U.useUser(),{data:o,error:l}=v.selectors.useData(),i=h.useMemo(()=>(o==null?void 0:o.map((n,c)=>({id:c,title:n.division})))||[],[o]),[a,r]=h.useState(i[0]??{});h.useEffect(()=>{a!=null&&a.id||r(i[0])},[a==null?void 0:a.id,r,i]);const t=o==null?void 0:o[Number((a==null?void 0:a.id)||0)];return e.jsx(E,{load:v.effects.getFx,error:l,data:o,children:e.jsx(L,{alignItems:"flex-start",children:e.jsxs(A,{topRightCornerElement:e.jsx(H,{onClick:()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vacation")},text:"Заполнить график",background:"var(--reallyBlue)",textColor:"#fff",icon:e.jsx(z,{}),minWidth:"35px",height:"36px"}),children:[e.jsx(b,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2023 год"}),e.jsxs(k,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[e.jsx(y,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:e.jsx(f,{onClick:()=>null,href:j.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),e.jsx(y,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:e.jsx(f,{onClick:()=>null,href:j.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),e.jsx(R,{}),e.jsx(P,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&e.jsx(I,{width:"fit-content",items:i,selected:a,setSelected:r}),t&&e.jsx(X,{...t})]})})})},ee=()=>e.jsx(G,{});export{ee as default};
