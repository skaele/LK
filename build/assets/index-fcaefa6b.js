import{s as g,j as t,c0 as le,r as o,C as oe,a5 as ce}from"./vendor-cbee1f3c.js";import{U as R,T as A,y as C,Y as O,ad as P,o as B,v as E,ae as de,M,u as V,S as z,af as xe,ag as ue,N as Z,Q as N,i as he,a6 as q,a7 as pe,x as ge,E as me,ah as fe,ai as je,aj as ve,ak as Se,H as ye,a8 as be,al as we,am as ke,an as G,ao as H,Z as Ce,ap as Fe,aq as W}from"./index-1f9cdbd4.js";const ze=g.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0px 12px;
    min-height: 45px;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-1);
    }

    .icon {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
        }
    }

    span {
        opacity: 0.8;
    }
`,Le=g.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    b {
        opacity: 0.8;
        font-weight: 500;
        font-size: 0.85rem;
    }

    span {
        opacity: 0.6;
        font-size: 0.8rem;
        margin-top: 2px;
    }
`,L=({title:e,description:s,onClick:n,icon:a,rightIcon:r,editable:i=!0})=>t.jsxs(ze,{onClick:n,children:[a&&t.jsx("div",{className:"icon",children:a}),t.jsxs(Le,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:s})]}),r??(i?t.jsx(le,{}):null)]}),ee=(e,s)=>{const n=e.find(({test:i})=>!i(...s)),a=!n,r=!s.find(i=>i.length===0)&&a;return{allChecked:a,isActive:r,validationError:n}},te=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",se={small:4,middle:9,large:12,big:14},Ae=g.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:s})=>e?R[te(s)].main:"var(--text)"};
    }
`,Ee=g.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>se[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:s})=>e?R[te(s)].main:"var(--block)"};
`,Me=g.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--theme-2);
    height: ${({size:e})=>se[e]}px;
    overflow: hidden;
`,_e=({title:e,value:s,size:n="middle",coloring:a=!0})=>t.jsxs(Ae,{value:s,coloring:a,children:[t.jsx(A,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(Me,{size:n,children:t.jsx(Ee,{size:n,coloring:a,value:s})})]}),_=7,ne=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${_+3},})`),ie=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${_},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${_+3},}))`),Y=[{text:`Минимальная длина ${_} знаков`,test:e=>e.length>=_},{text:"Не повторяет старый пароль",test:(e,s,n)=>n.length>0&&e.length>0&&e!==n},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>ie.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,s)=>e.length>0&&s.length>0&&e===s}],$e=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>ne.test(e)}],Ie=e=>{const s="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let n="";for(let a=0;a<e;a++)n+=s.charAt(Math.floor(Math.random()*s.length));return n},Ve=e=>ne.test(e)?{title:"надежный",value:100}:ie.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<_?{title:"очень слабый",value:10}:{title:"слабый",value:20},De=g.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,Pe=g.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,Te=g.div`
    height: 100%;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Ne=g.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Re=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Ue=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,Oe=g.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Be=()=>{const[e,s]=o.useState(""),[n,a]=o.useState(""),[r,i]=o.useState(""),[u,c]=o.useState(null),[d,h]=o.useState(!1),[x,m]=o.useState(!1),{isActive:p,validationError:y}=ee(Y,[n,r,e]),j=Ve(n),{close:f}=C(),b=()=>{const l=Ie(12);a(l),i(l)},w=async()=>{try{h(!0);const l=await xe(e,n);if(l.data.result!=="ok")throw new Error(l.data.errors);m(!0),h(!1),a(""),i(""),s("")}catch(l){const v=l.message??l;c("Возникла ошибка: "+v),h(!1)}};return t.jsxs(De,{children:[t.jsxs(Te,{children:[t.jsxs(Ne,{children:[t.jsx(A,{size:3,align:"left",children:"Смена пароля"}),t.jsx(O,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(P,{gap:8,direction:"vertical",children:Y.map(l=>t.jsx(B,{fontSize:"0.85rem",setChecked:()=>null,text:l.text,checked:l.test(n,r,e)},l.text))}),t.jsx(O,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(P,{gap:8,direction:"vertical",children:$e.map(l=>t.jsx(B,{fontSize:"0.85rem",setChecked:()=>null,text:l.text,checked:l.test(n,r,e)},l.text))})]}),!p&&t.jsx(E,{width:"100%",text:"Сгенерировать пароль",onClick:b,background:"var(--theme-2)"}),p&&t.jsxs(Ue,{children:[t.jsx(de,{size:"40px"}),t.jsx(A,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(Pe,{children:[t.jsxs(Oe,{children:[t.jsx(M,{title:"Ошибка",type:"failure",visible:!!u,children:u}),t.jsx(V,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:s,required:!0}),t.jsx(V,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:n,setValue:a,required:!0}),t.jsx(V,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:r,setValue:i,required:!0}),t.jsx(_e,{value:j.value,size:"small",title:`Сложность пароля: ${j.title}`})]}),t.jsxs(Re,{children:[t.jsx(E,{text:"Отменить",width:"100%",onClick:f}),t.jsx(z,{isLoading:d,completed:x,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${y==null?void 0:y.text}`,action:w,setCompleted:m,height:"38px",isActive:p})]})]})]})},Ze=e=>{const{open:s}=C(),n=()=>s(t.jsx(Be,{}));return t.jsx(L,{...e,onClick:n})},qe=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: hidden;
    @media (min-width: 1001px) {
        min-width: 500px;
    }
`,Q=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Ge=e=>{var w;const{value:s,message:n,title:a,objectAction:r}=e,[i,u]=o.useState(s),[c,d]=o.useState(!1),[h,x]=o.useState(""),[m,p]=o.useState(!1),[y,j]=o.useState(((w=i[0])==null?void 0:w.guid_staff)||""),{close:f}=C(),b=async()=>{try{d(!0);const l=i.find(v=>v.guid_staff===y);l&&await(r==null?void 0:r(l)),d(!1),p(!0)}catch(l){x("Возникла ошибка: "+l.message),d(!1)}};return o.useEffect(()=>{u(s||[]),x(null)},[a]),t.jsxs(qe,{children:[t.jsx(A,{size:3,align:"left",children:a}),n&&t.jsx(M,{type:n.type??"",title:n.title,children:n.body}),t.jsx(M,{type:"failure",visible:!!h,children:h}),Array.isArray(s)&&(s.length>1?t.jsx(ue,{pages:s.map((l,v)=>typeof l=="object"?{id:l.guid_staff,title:l.post,content:t.jsxs(Z,{gap:"8px",d:"column",children:[t.jsx(J,{...l,setInputValue:k=>{const F=[...i];F[v]=k,u(F)}}),t.jsx(N,{}),t.jsxs(Q,{children:[t.jsx(E,{text:"Отменить",width:"100%",onClick:f}),t.jsx(z,{isLoading:c,completed:m,text:"Обновить",action:b,setCompleted:p,height:"38px"})]})]})}:{title:l.toString(),content:t.jsx(t.Fragment,{})}),onChangePage:l=>j(l||""),appearance:!1}):typeof s[0]=="object"&&t.jsxs(Z,{gap:"8px",d:"column",children:[t.jsx(A,{align:"left",size:3,children:s[0].post}),t.jsx(J,{...s[0],setInputValue:l=>u([l])}),t.jsx(N,{}),t.jsxs(Q,{children:[t.jsx(E,{text:"Отменить",width:"100%",onClick:f}),t.jsx(z,{isLoading:c,completed:m,text:"Обновить",action:b,setCompleted:p,height:"38px"})]})]}))]},a)},J=({room:e,address:s,setInputValue:n,guid_staff:a,post:r})=>{const[i,u]=o.useState(he(q,s)),[c,d]=o.useState(e);return o.useEffect(()=>{n({guid_staff:a,post:r,room:c,address:(i==null?void 0:i.title)??""})},[i,c]),o.useEffect(()=>{i!=null&&i.title&&s!==(i==null?void 0:i.title)?d(pe(i==null?void 0:i.title)):d(e)},[i]),t.jsxs(t.Fragment,{children:[t.jsx(ge,{width:"99%",title:"Адрес рабочего места",items:q,setSelected:u,selected:i}),t.jsx(V,{title:"Кабинет",value:c,type:"cabinet",setValue:h=>d(me.cabinetMask(h,fe((i==null?void 0:i.title)||""))),mask:!0})]})},He=e=>{const{open:s}=C(),n=()=>{s(t.jsx(Ge,{...e}))};return t.jsx(L,{...e,onClick:n})},We=g.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    margin-left: ${({asChild:e})=>e?"16px":"0"};

    &::before {
        content: '';
        position: absolute;
        height: calc(100% - 12px);
        width: 2px;
        background-color: var(--almostTransparentOpposite);
        display: ${({asChild:e})=>e?"block":"none"};
        left: -2px;
        opacity: 0.4;
        top: 6px;
    }
`,Ye=e=>({toggle:t.jsx(et,{...e},e.title),photo:t.jsx(at,{...e},e.title),choices:t.jsx(rt,{...e},e.title),text:t.jsx(I,{...e},e.title),display:t.jsx(st,{...e},e.title),interval:t.jsx(xt,{...e},e.title),tel:t.jsx(I,{...e},e.title),password:t.jsx(Ze,{...e},e.title),link:t.jsx(tt,{...e},e.title),cabinet:t.jsx(I,{...e},e.title),"BS-cabinet":t.jsx(I,{...e},e.title),select:t.jsx(I,{...e},e.title),address:t.jsx(He,{...e},e.title)}),ae=({fields:e,settingsName:s,asChild:n=!1})=>{const a=r=>!r||!s?()=>null:i=>{je.updateSetting({nameSettings:s,nameParam:r,value:i})};return t.jsx(We,{asChild:n,children:e.map(r=>{const i=r.action??a(r.id),{type:u,visible:c=!0}=r;if(c)return Ye({...r,action:i,settingsName:s})[u]})})},Qe=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        min-width: 350px;
    }
`,Je=g.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Ke=[{text:"Необходимо изменить строку",test:(e,s,n)=>n==="Служебный мобильный телефон"?!0:e!==s}],Xe=e=>{const{value:s,message:n,action:a,type:r,title:i,additionalActions:u,subfields:c,objectAction:d,id:h,settingsName:x}=e,[m,p]=o.useState(s),[y,j]=o.useState(!1),[f,b]=o.useState(""),[w,l]=o.useState(!1),{close:v}=C(),{isActive:k,validationError:F}=ee(Ke,[m,s,i]),{settings:D}=ve.useSettings(),S=async()=>{var U;try{if(j(!0),c&&h&&x){const $={};$[h]=m,Object.keys(D[x].property).forEach(T=>{c.some(re=>re.id===T)&&($[T]=D[x].property[T])}),await(d==null?void 0:d($))}else await(a==null?void 0:a(m)),(U=u==null?void 0:u.onSuccess)==null||U.call(u,m);j(!1),l(!0)}catch($){b("Возникла ошибка: "+$.message),j(!1)}};return o.useEffect(()=>{p(s),b(null)},[i]),t.jsxs(Qe,{children:[t.jsx(A,{size:3,align:"left",children:i}),n&&t.jsx(M,{type:n.type??"",title:n.title,children:n.body}),t.jsx(M,{type:"failure",visible:!!f,children:f}),t.jsx(V,{value:m,setValue:p,type:r,mask:!0}),c&&x&&t.jsx(ae,{settingsName:Se[x],fields:c,asChild:!0}),t.jsx(N,{}),t.jsxs(Je,{children:[t.jsx(E,{text:"Отменить",width:"100%",onClick:v}),t.jsx(z,{isLoading:y,completed:w,isActive:k,text:"Обновить",action:S,setCompleted:l,popUpFailureMessage:F==null?void 0:F.text,height:"38px"})]})]},i)},I=e=>{const{open:s}=C(),n=()=>{e.disabled||s(t.jsx(Xe,{...e}))};return t.jsx(L,{...e,onClick:n})},et=({title:e,action:s,value:n,subfields:a,icon:r,settingsName:i,disabled:u})=>{const[c,d]=o.useState(n),h=x=>{s==null||s(x),d(x)};return o.useEffect(()=>{d(n)},[n]),t.jsxs(t.Fragment,{children:[t.jsx(ye,{disabled:u,title:e,state:c,action:h,icon:r}),a&&c&&t.jsx(ae,{settingsName:i,fields:a,asChild:!0})]})},tt=({action:e,...s})=>t.jsx(L,{onClick:e,...s,rightIcon:t.jsx(oe,{})}),st=e=>{const s=()=>{var n;return(n=e==null?void 0:e.action)==null?void 0:n.call(e)};return t.jsx(L,{...e,editable:!1,onClick:s})},K=e=>{const s=o.useState(!1),n=o.useState(!1),a=o.useState(null);return{loading:s,error:a,completed:n,isActive:e}},nt=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,it=e=>{const{data:{user:s}}=be.useUser();if(!s)return null;const[n,a]=o.useState([]),[r,i]=o.useState(null),{completed:[u,c],loading:[d,h],error:[x,m],isActive:p}=K(!!(s!=null&&s.avatar)),{completed:[y,j],loading:[f,b],error:[w,l],isActive:v}=K(n.length===1);o.useEffect(()=>{const S=new FileReader;S.onloadend=()=>{i(S.result)},n[0]?S.readAsDataURL(n[0]):i(null)},[n]);const k=async()=>{try{b(!0),j(!1);const S=await G(n[0]);if(S.data.result!=="ok")throw new Error(S.data.errors);j(!0),b(!1),a([]),H.update({key:"avatar",value:r})}catch(S){l("Ошибка: "+S.message)}},F=async()=>{try{h(!0),c(!1);const S=await G();if(S.data.result!=="ok")throw new Error(S.data.errors);c(!0),h(!1),H.update({key:"avatar",value:""})}catch(S){m("Ошибка: "+S.message)}},D=()=>Ce.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:F});return t.jsxs(nt,{children:[t.jsx(we,{avatar:r??(s==null?void 0:s.avatar),name:(s==null?void 0:s.fullName)??"",isMe:!1,type:s==null?void 0:s.user_status,noInfo:!0}),t.jsx(M,{type:"failure",visible:!!w||!!x,children:w||x}),t.jsx(ke,{files:n,maxFiles:1,formats:["image/jpeg"],setFiles:a,isActive:!0}),t.jsxs(P,{direction:"horizontal",children:[(s==null?void 0:s.avatar)&&t.jsx(z,{isLoading:d,background:R.red.main,completed:u,isActive:p,text:"Удалить фото профиля",action:D,setCompleted:c}),t.jsx(z,{isLoading:f,completed:y,isActive:v,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:k,setCompleted:j})]})]})},at=e=>{const{open:s}=C(),n=()=>{s(t.jsx(it,{...e}))};return t.jsx(L,{...e,onClick:n})},rt=e=>{const{value:s,additionalActions:n}=e,[a,r]=o.useState(s),i=c=>{var d;return(d=n==null?void 0:n.onRemoveOne)==null?void 0:d.call(n,c)},u=()=>{var c;return(c=n==null?void 0:n.onAdd)==null?void 0:c.call(n)};return t.jsx(Fe,{list:a,onRemoveOne:i,onAddElement:u,setList:r})},X=(e,s)=>e/s*100,lt=g.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .values {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input[type='range'] {
        width: 100%;
    }

    .slider {
        position: relative;
        width: 100%;
        height: 20px;
    }

    .slider__track,
    .slider__range {
        border-radius: 3px;
        height: 5px;
        position: absolute;
    }

    .slider__track {
        background-color: var(--almostTransparent);
        width: 100%;
        z-index: 1;
    }

    .slider__range {
        width: calc(${({width:e})=>e+"%"} - 5px);
        background-color: var(--blue);
        left: ${({left:e})=>e+"%"};
        z-index: 2;
    }

    .thumb,
    .thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
    }

    .thumb {
        pointer-events: none;
        position: absolute;
        height: 0;
        width: 200px;
        outline: none;
    }

    .thumb--zindex-3 {
        z-index: 3;
    }

    .thumb--zindex-4 {
        z-index: 4;
    }

    .thumb::-webkit-slider-thumb {
        background-color: var(--blue);
        filter: brightness(1.1);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-top: 4px;
        pointer-events: all;
        position: relative;
    }
`,ot=({range:e,step:s,initialValues:n,onSave:a,onChange:r,valueTransform:i})=>{const[u,c]=n,[d,h]=e,[x,m]=o.useState(u),[p,y]=o.useState(c),j=i?i(x):x,f=i?i(p):p,b=()=>{a([x,p])},w=l=>l===1?v=>{const k=Math.min(+v.target.value,p-s);m(k),v.target.value=k.toString()}:v=>{const k=Math.max(+v.target.value,x+s);y(k),v.target.value=k.toString()};return o.useEffect(()=>{r==null||r([x,p])},[x,p]),t.jsxs(lt,{left:X(x,h-d),width:X(p-x,h-d),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:d,max:h,step:s,value:x,onChange:w(1),onMouseUp:b}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:d,max:h,step:s,value:p,onChange:w(2),onMouseUp:b})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:j}),t.jsx("span",{children:f})]})]})},ct=g.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,dt=e=>{const{value:s,action:n}=e,{close:a}=C(),[r,i]=s,[u,c]=o.useState(r),[d,h]=o.useState(i),[x,m]=o.useState(!1),p=()=>{n==null||n([u,d]),a()},y=f=>W(Math.floor(f/60))+":"+W(f%60),j=f=>{c(f[0]),h(f[1])};return t.jsxs(ct,{children:[t.jsx(ot,{range:[0,1440],step:60,valueTransform:y,initialValues:[r,i],onSave:()=>null,onChange:j}),t.jsxs(P,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(E,{text:"Отменить",width:"120px",onClick:a}),t.jsx(z,{width:"120px",isLoading:!1,completed:x,text:"Сохранить",action:p,setCompleted:m})]})]})},xt=e=>{const{open:s}=C(),n=()=>{s(t.jsx(dt,{...e}))};return t.jsx(L,{...e,editable:!1,onClick:n,icon:t.jsx(ce,{})})};export{He as A,tt as L,ae as S,L as T,I as a};
