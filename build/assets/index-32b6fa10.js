import{s as p,j as t,b$ as K,r as l,C as Q,aj as X}from"./vendor-3b6459b9.js";import{w as C,T as E,M,r as A,L as ee,t as D,S as L,O as _,U as T,a4 as $,C as P,a5 as te,a6 as se,a7 as ne,D as ie,a8 as ae,a9 as re,aa as le,ab as I,ac as R,V as oe,ad as ce,ae as V}from"./index-b517f30d.js";const de=p.div`
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
`,xe=p.div`
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
`,z=({title:e,description:s,onClick:n,icon:i,rightIcon:a,editable:r=!0})=>t.jsxs(de,{onClick:n,children:[i&&t.jsx("div",{className:"icon",children:i}),t.jsxs(xe,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:s})]}),a??(r?t.jsx(K,{}):null)]}),Z=(e,s)=>{const n=e.find(({test:r})=>!r(...s)),i=!n,a=!s.find(r=>r.length===0)&&i;return{allChecked:i,isActive:a,validationError:n}},ue=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,he=p.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,pe=[{text:"Необходимо изменить строку",test:(e,s)=>e!==s}],ge=e=>{const{value:s,message:n,action:i,type:a,title:r,additionalActions:x}=e,[o,u]=l.useState(s),[g,c]=l.useState(!1),[S,h]=l.useState(""),[b,m]=l.useState(!1),{close:f}=C(),{isActive:y,validationError:w}=Z(pe,[o,s]),d=async()=>{var v;try{c(!0),await(i==null?void 0:i(o)),(v=x==null?void 0:x.onSuccess)==null||v.call(x,o),c(!1),m(!0)}catch(k){h("Возникла ошибка: "+k.message),c(!1)}};return l.useEffect(()=>{u(s),h(null)},[r]),t.jsxs(ue,{children:[t.jsx(E,{size:3,align:"left",children:r}),n&&t.jsx(M,{type:n.type??"",title:n.title,children:n.body}),t.jsx(M,{type:"failure",visible:!!S,children:S}),t.jsx(A,{value:o,setValue:u,type:a,mask:!0}),t.jsx(ee,{}),t.jsxs(he,{children:[t.jsx(D,{text:"Отменить",width:"100%",onClick:f}),t.jsx(L,{isLoading:g,completed:b,isActive:y,text:"Обновить",action:d,setCompleted:m,popUpFailureMessage:w==null?void 0:w.text,height:"38px"})]})]},r)},U=e=>{const{open:s}=C(),n=()=>{s(t.jsx(ge,{...e}))};return t.jsx(z,{...e,onClick:n})},G=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",q={small:4,middle:9,large:12,big:14},me=p.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:s})=>e?_[G(s)].main:"var(--text)"};
    }
`,fe=p.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>q[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:s})=>e?_[G(s)].main:"var(--block)"};
`,je=p.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--theme-2);
    height: ${({size:e})=>q[e]}px;
    overflow: hidden;
`,ve=({title:e,value:s,size:n="middle",coloring:i=!0})=>t.jsxs(me,{value:s,coloring:i,children:[t.jsx(E,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(je,{size:n,children:t.jsx(fe,{size:n,coloring:i,value:s})})]}),F=7,W=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${F+3},})`),H=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${F},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${F+3},}))`),N=[{text:`Минимальная длина ${F} знаков`,test:e=>e.length>=F},{text:"Не повторяет старый пароль",test:(e,s,n)=>n.length>0&&e.length>0&&e!==n},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>H.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,s)=>e.length>0&&s.length>0&&e===s}],Se=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>W.test(e)}],be=e=>{const s="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let n="";for(let i=0;i<e;i++)n+=s.charAt(Math.floor(Math.random()*s.length));return n},we=e=>W.test(e)?{title:"надежный",value:100}:H.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<F?{title:"очень слабый",value:10}:{title:"слабый",value:20},ye=p.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,ke=p.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,Ce=p.div`
    height: 100%;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Fe=p.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,ze=p.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Le=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,Ae=p.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,Ee=()=>{const[e,s]=l.useState(""),[n,i]=l.useState(""),[a,r]=l.useState(""),[x,o]=l.useState(null),[u,g]=l.useState(!1),[c,S]=l.useState(!1),{isActive:h,validationError:b}=Z(N,[n,a,e]),m=we(n),{close:f}=C(),y=()=>{const d=be(12);i(d),r(d)},w=async()=>{try{g(!0);const d=await se(e,n);if(d.data.result!=="ok")throw new Error(d.data.errors);S(!0),g(!1),i(""),r(""),s("")}catch(d){const v=d.message??d;o("Возникла ошибка: "+v),g(!1)}};return t.jsxs(ye,{children:[t.jsxs(Ce,{children:[t.jsxs(Fe,{children:[t.jsx(E,{size:3,align:"left",children:"Смена пароля"}),t.jsx(T,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx($,{gap:8,direction:"vertical",children:N.map(d=>t.jsx(P,{fontSize:"0.85rem",setChecked:()=>null,text:d.text,checked:d.test(n,a,e)},d.text))}),t.jsx(T,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx($,{gap:8,direction:"vertical",children:Se.map(d=>t.jsx(P,{fontSize:"0.85rem",setChecked:()=>null,text:d.text,checked:d.test(n,a,e)},d.text))})]}),!h&&t.jsx(D,{width:"100%",text:"Сгенерировать пароль",onClick:y,background:"var(--theme-2)"}),h&&t.jsxs(Le,{children:[t.jsx(te,{size:"40px"}),t.jsx(E,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(ke,{children:[t.jsxs(Ae,{children:[t.jsx(M,{title:"Ошибка",type:"failure",visible:!!x,children:x}),t.jsx(A,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:s,required:!0}),t.jsx(A,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:n,setValue:i,required:!0}),t.jsx(A,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:a,setValue:r,required:!0}),t.jsx(ve,{value:m.value,size:"small",title:`Сложность пароля: ${m.title}`})]}),t.jsxs(ze,{children:[t.jsx(D,{text:"Отменить",width:"100%",onClick:f}),t.jsx(L,{isLoading:u,completed:c,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${b==null?void 0:b.text}`,action:w,setCompleted:S,height:"38px",isActive:h})]})]})]})},Me=e=>{const{open:s}=C(),n=()=>s(t.jsx(Ee,{}));return t.jsx(z,{...e,onClick:n})},De=p.div`
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
`,$e=e=>({toggle:t.jsx(Te,{...e},e.title),photo:t.jsx(Ue,{...e},e.title),choices:t.jsx(Ne,{...e},e.title),text:t.jsx(U,{...e},e.title),display:t.jsx(Ie,{...e},e.title),interval:t.jsx(qe,{...e},e.title),tel:t.jsx(U,{...e},e.title),password:t.jsx(Me,{...e},e.title),link:t.jsx(Pe,{...e},e.title)}),_e=({fields:e,settingsName:s,asChild:n=!1})=>{const i=a=>!a||!s?()=>null:r=>{console.log(r),ne.updateSetting({nameSettings:s,nameParam:a,value:r})};return t.jsx(De,{asChild:n,children:e.map(a=>{const r=a.action??i(a.id),{type:x,visible:o=!0}=a;if(o)return $e({...a,action:r,settingsName:s})[x]})})},Te=({title:e,action:s,value:n,subfields:i,icon:a,settingsName:r,disabled:x})=>{const[o,u]=l.useState(n),g=c=>{s==null||s(c),u(c)};return l.useEffect(()=>{u(n)},[n]),t.jsxs(t.Fragment,{children:[t.jsx(ie,{disabled:x,title:e,state:o,action:g,icon:a}),i&&o&&t.jsx(_e,{settingsName:r,fields:i,asChild:!0})]})},Pe=({action:e,...s})=>t.jsx(z,{onClick:e,...s,rightIcon:t.jsx(Q,{})}),Ie=e=>{const s=()=>{var n;return(n=e==null?void 0:e.action)==null?void 0:n.call(e)};return t.jsx(z,{...e,editable:!1,onClick:s})},O=e=>{const s=l.useState(!1),n=l.useState(!1),i=l.useState(null);return{loading:s,error:i,completed:n,isActive:e}},Re=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,Ve=e=>{const{data:{user:s}}=ae.useUser();if(!s)return null;const[n,i]=l.useState([]),[a,r]=l.useState(null),{completed:[x,o],loading:[u,g],error:[c,S],isActive:h}=O(!!(s!=null&&s.avatar)),{completed:[b,m],loading:[f,y],error:[w,d],isActive:v}=O(n.length===1);l.useEffect(()=>{const j=new FileReader;j.onloadend=()=>{r(j.result)},n[0]?j.readAsDataURL(n[0]):r(null)},[n]);const k=async()=>{try{y(!0),m(!1);const j=await I(n[0]);if(j.data.result!=="ok")throw new Error(j.data.errors);m(!0),y(!1),i([]),R.update({key:"avatar",value:a})}catch(j){d("Ошибка: "+j.message)}},Y=async()=>{try{g(!0),o(!1);const j=await I();if(j.data.result!=="ok")throw new Error(j.data.errors);o(!0),g(!1),R.update({key:"avatar",value:""})}catch(j){S("Ошибка: "+j.message)}},J=()=>oe.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:Y});return t.jsxs(Re,{children:[t.jsx(re,{avatar:a??(s==null?void 0:s.avatar),name:(s==null?void 0:s.fullName)??"",isMe:!1,type:s==null?void 0:s.user_status,noInfo:!0}),t.jsx(M,{type:"failure",visible:!!w||!!c,children:w||c}),t.jsx(le,{files:n,maxFiles:1,formats:["image/jpeg"],setFiles:i,isActive:!0}),t.jsxs($,{direction:"horizontal",children:[(s==null?void 0:s.avatar)&&t.jsx(L,{isLoading:u,background:_.red.main,completed:x,isActive:h,text:"Удалить фото профиля",action:J,setCompleted:o}),t.jsx(L,{isLoading:f,completed:b,isActive:v,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:k,setCompleted:m})]})]})},Ue=e=>{const{open:s}=C(),n=()=>{s(t.jsx(Ve,{...e}))};return t.jsx(z,{...e,onClick:n})},Ne=e=>{const{value:s,additionalActions:n}=e,[i,a]=l.useState(s),r=o=>{var u;return(u=n==null?void 0:n.onRemoveOne)==null?void 0:u.call(n,o)},x=()=>{var o;return(o=n==null?void 0:n.onAdd)==null?void 0:o.call(n)};return t.jsx(ce,{list:i,onRemoveOne:r,onAddElement:x,setList:a})},B=(e,s)=>e/s*100,Oe=p.div`
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
`,Be=({range:e,step:s,initialValues:n,onSave:i,onChange:a,valueTransform:r})=>{const[x,o]=n,[u,g]=e,[c,S]=l.useState(x),[h,b]=l.useState(o),m=r?r(c):c,f=r?r(h):h,y=()=>{i([c,h])},w=d=>d===1?v=>{const k=Math.min(+v.target.value,h-s);S(k),v.target.value=k.toString()}:v=>{const k=Math.max(+v.target.value,c+s);b(k),v.target.value=k.toString()};return l.useEffect(()=>{a==null||a([c,h])},[c,h]),t.jsxs(Oe,{left:B(c,g-u),width:B(h-c,g-u),children:[t.jsxs("div",{className:"inputs",children:[t.jsx("input",{type:"range",className:"thumb thumb--zindex-3",min:u,max:g,step:s,value:c,onChange:w(1),onMouseUp:y}),t.jsx("input",{type:"range",className:"thumb thumb--zindex-4",min:u,max:g,step:s,value:h,onChange:w(2),onMouseUp:y})]}),t.jsxs("div",{className:"slider",children:[t.jsx("div",{className:"slider__track"}),t.jsx("div",{className:"slider__range"})]}),t.jsxs("div",{className:"values",children:[t.jsx("span",{children:m}),t.jsx("span",{children:f})]})]})},Ze=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Ge=e=>{const{value:s,action:n}=e,{close:i}=C(),[a,r]=s,[x,o]=l.useState(a),[u,g]=l.useState(r),[c,S]=l.useState(!1),h=()=>{n==null||n([x,u]),i()},b=f=>V(Math.floor(f/60))+":"+V(f%60),m=f=>{o(f[0]),g(f[1])};return t.jsxs(Ze,{children:[t.jsx(Be,{range:[0,1440],step:60,valueTransform:b,initialValues:[a,r],onSave:()=>null,onChange:m}),t.jsxs($,{gap:8,direction:"horizontal",horizontalAlign:"right",children:[t.jsx(D,{text:"Отменить",width:"120px",onClick:i}),t.jsx(L,{width:"120px",isLoading:!1,completed:c,text:"Сохранить",action:h,setCompleted:S})]})]})},qe=e=>{const{open:s}=C(),n=()=>{s(t.jsx(Ge,{...e}))};return t.jsx(z,{...e,editable:!1,onClick:n,icon:t.jsx(X,{})})};export{Pe as L,_e as S};
