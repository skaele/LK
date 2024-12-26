var le=Object.defineProperty,ae=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var J=(e,t,i)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,f=(e,t)=>{for(var i in t||(t={}))re.call(t,i)&&J(e,i,t[i]);if(G)for(var i of G(t))ne.call(t,i)&&J(e,i,t[i]);return e},m=(e,t)=>ae(e,oe(t));var A=(e,t,i)=>new Promise((l,o)=>{var r=u=>{try{a(i.next(u))}catch(c){o(c)}},n=u=>{try{a(i.throw(u))}catch(c){o(c)}},a=u=>u.done?l(u.value):Promise.resolve(u.value).then(r,n);a((i=i.apply(e,t)).next())});import{p as Q,e as X,S as se,h as de,f as S,j as s,s as ue,r as v,a0 as ce}from"./vendor-91dd51cf.js";import{$ as Y,g as Z,b as fe,f as E,d as me,W as ve,F as pe,h as he,M as ge,l as xe,I as g,i as _e,S as ye}from"./index-2caaee2c.js";const Ne=()=>Y.get(`?getCheckData&token=${Z()}`),be=e=>{const t=new FormData;t.set("token",Z()),t.set("saveCheckData","1");for(const[i,l]of Object.entries(e))t.set(i,l);return Y.post("?saveCheckData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},H={teacherDataVerification:null,error:null,completed:!1},De=()=>({data:S(T).teacherDataVerification,loading:S(F.pending),error:S(T).error,completed:S(T).completed}),ee=Q({name:"postTeacherDataVerification",sid:"-jc1rtz"}),te=Q({name:"changeCompleted",sid:"6vr460"}),we=X(e=>A(void 0,null,function*(){try{return(yield be(e)).data}catch(t){throw new Error("Не удалось загрузить раздел")}}),{name:"postTeacherDataVerificationFx",sid:"b8s0pe"});se({from:ee,to:we});const F=X(()=>A(void 0,null,function*(){try{return(yield Ne()).data}catch(e){throw new Error("Не удалось войти")}}),{name:"getTeacherDataVerificationFx",sid:"6736yk"}),T=de(H,{name:"$teacherDataVerificationStore",sid:"-t2u8dj"}).on(F,e=>m(f({},e),{error:null})).on(F.doneData,(e,t)=>m(f({},e),{teacherDataVerification:t})).on(F.failData,(e,t)=>m(f({},e),{error:t.message})).on(te,(e,t)=>m(f({},e),{completed:t.completed})).on(fe.userGuid,()=>f({},H)),je={useTeacherDataVerification:De},qe={getTeacherDataVerificationFx:F},V={postTeacherDataVerification:ee,changeCompleted:te},ke=e=>{let t,i,l,o,r;r=Math.floor(e/1e3),o=Math.floor(r/60),r=r%60,l=Math.floor(o/60),o=o%60,i=Math.floor(l/24),l=l%24,t=Math.floor(i/30),i=i%30;const n=Math.floor(t/12);return t=t%12,{year:n,month:t,day:i,hour:l,minute:o,second:r}},Fe=(e,t)=>{const i=e.sex==="Мужской",l=ke(new Date().getTime()-new Date(e.bdate).getTime()).year;return{title:"Воинская служба",hint:s.jsxs(s.Fragment,{children:["При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву).",s.jsx("br",{}),s.jsx("br",{}),"Для иностранных работников - скан-копию страницы паспорта иностранного гражданина с серией и номером."]}),data:[],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"armyFiles",maxFiles:10},optionalCheckbox:{fieldName:"army_doc_none",title:"Документ о воинской службе отсутствует",value:l>=66?!0:!i&&(e==null?void 0:e.army_doc_none),required:!0,visible:!i||l>=66},confirmed:t}},Se=(e,t)=>{var i,l,o,r,n;return{title:"Контактные данные",hint:"Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.",data:[{fieldName:"tel_mob_private",title:"Мобильный телефон (личный)",type:"tel",value:(i=e==null?void 0:e.tel_mob_private)!=null?i:"",required:!0,mask:!0,autocomplete:!1},{fieldName:"tel_mob_staff",title:"Мобильный телефон (рабочий)",type:"tel",value:(l=e==null?void 0:e.tel_mob_staff)!=null?l:"",mask:!0,autocomplete:!1},{fieldName:"tel_staff",title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:(o=e==null?void 0:e.tel_staff)!=null?o:"",autocomplete:!1},{fieldName:"email_private",title:"Личный e-mail",type:"email",value:(r=e==null?void 0:e.email_private)!=null?r:"",required:!0,autocomplete:!1},{fieldName:"email_staff",title:"Рабочий e-mail",type:"email",value:(n=e==null?void 0:e.email_staff)!=null?n:"",autocomplete:!1}],confirmed:t}},Ce=(e,t)=>({title:"Инвалидность",hint:"Необходимо приложить скан-копию справки об инвалидности",data:[],optionalCheckbox:{fieldName:"is_not_invalid",value:e==null?void 0:e.is_not_invalid,title:"Нет документа об инвалидности",required:!0},documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1},confirmed:t}),Ae=(e,t)=>({title:"Водительское удостоверение",hint:"При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон",data:[],optionalCheckbox:{fieldName:"dr_lic_none",title:"Водительское удостоверение отсутствует",value:e.dr_lic_none,required:!0},documents:{files:[],required:!0,fieldName:"driveLicenseFiles",maxFiles:2},confirmed:t}),Te=(e,t)=>{var i,l,o,r;return{title:"Образование",hint:"Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения",data:[{fieldName:"edu_doc",title:"Вид документа",value:e==null?void 0:e.edu_doc,width:"100%"},{fieldName:"edu_level",title:"Уровень образования",value:e.edu_level,width:"100%"},{fieldName:"edu_org",title:"Учебное заведение",value:(i=e==null?void 0:e.edu_org)!=null?i:"",required:!0},{fieldName:"edu_spec",title:"Квалификация",value:(l=e==null?void 0:e.edu_spec)!=null?l:"",required:!0},{fieldName:"edu_doc_num",title:"Серия и номер",value:(o=e==null?void 0:e.edu_doc_num)!=null?o:"",required:!0},{fieldName:"edu_year",title:"Дата выдачи",value:(r=e==null?void 0:e.edu_year)!=null?r:"",type:"date",required:!1}],documents:{files:[],required:!0,fieldName:"educationFiles",maxFiles:5},confirmed:t}},O=[{id:"mother",title:"Мать"},{id:"father",title:"Отец"},{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"sister",title:"Сестра"},{id:"brother",title:"Брат"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],Oe=(e,t)=>{var l;var i;return{title:"Состав семьи",hint:"Необходимо указать актуальную информацию о ближайших родственниках",data:[...(l=(i=e.family)===null||i===void 0?void 0:i.map(o=>[{fieldName:"relation",title:"Степень родства",value:E(O,o.relation),type:"select",items:O,width:"100%"},{fieldName:"fio",title:"ФИО",value:o.fio,required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:o.bdate,type:"date",required:!0,width:"30%"}]))!=null?l:[]],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:O,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:e.family_none,required:!0},confirmed:t}},K=e=>{switch(e){case"Мужской":return[{id:"single",title:"Холост"},{id:"married",title:"Женат"},{id:"divorced",title:"Разведен"},{id:"widow",title:"Вдовец"}];case"Женский":return[{id:"single",title:"Не замужем"},{id:"married",title:"Замужем"},{id:"divorced",title:"Разведена"},{id:"widow",title:"Вдова"}];default:return[{id:"single",title:"Холост/Не замужем"},{id:"married",title:"Женат/Замужем"},{id:"divorced",title:"Разведен/Разведена"},{id:"widow",title:"Вдовец/Вдова"}]}},Ve=(e,t)=>({title:"Семейное положение",hint:"Необходимо указать актуальную информацию",data:[{fieldName:"familyStatus",title:"",value:E(K(e.sex),e.familyStatus),type:"select",items:K(e.sex),width:"100%"}],confirmed:t}),C=[{id:"a",title:"Читаю и перевожу со словарем"},{id:"b",title:"Читаю и могу объясняться"},{id:"с",title:"Владею свободно"}],Ee=(e,t)=>{var l;var i;return{title:"Знание иностранных языков",hint:"Необходимо указать иностранные языки и степень владения ими",data:[...(l=(i=e.languages)===null||i===void 0?void 0:i.map(o=>[{fieldName:"language",title:"Язык",required:!0,value:o.language},{fieldName:"level",title:"Уровень владения",value:E(C,o.level),type:"select",items:C,width:"100%"}]))!=null?l:[]],default:[[{fieldName:"language",title:"Язык",required:!0,value:"Английский"},{fieldName:"level",title:"Уровень владения",value:C[0],type:"select",items:C,width:"100%"}]],addNew:!0,confirmed:t}},Me=(e,t)=>{var i,l;return{title:"Проживание",hint:"Необходимо указать фактический адрес проживания",data:[{fieldName:"loc_addr",title:"Адрес проживания",value:(i=e==null?void 0:e.loc_addr)!=null?i:"",required:!0},{fieldName:"loc_date",title:"Дата начала проживания",value:(l=e==null?void 0:e.loc_date)!=null?l:"",type:"date",required:!0}],optionalCheckbox:{fieldName:"loc_match_reg",title:"Адрес проживания совпадает с адресом регистрации",value:e.loc_match_reg,required:!0},confirmed:t}},$e=(e,t)=>{var i,l,o,r,n,a;return{title:"Паспортные данные",hint:"Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.",data:[{fieldName:"",title:"Вид документа",value:e==null?void 0:e.pass_type,width:"100%"},{fieldName:"pass_ser",title:"Серия",value:(i=e==null?void 0:e.pass_ser)!=null?i:"",required:!0},{fieldName:"pass_num",title:"Номер",value:(l=e==null?void 0:e.pass_num)!=null?l:"",required:!0},{fieldName:"pass_div",title:"Кем выдан",value:(o=e==null?void 0:e.pass_div)!=null?o:"",required:!0},{fieldName:"pass_date",title:"Дата выдачи",value:(r=e==null?void 0:e.pass_date)!=null?r:"",required:!0,type:"date"},{fieldName:"pass_div_code",title:"Код подразделения",value:(n=e==null?void 0:e.pass_div_code)!=null?n:"",required:!0},{fieldName:"pass_citizenship",title:"Гражданство",value:(a=e==null?void 0:e.pass_citizenship)!=null?a:"",required:!1}],documents:{files:[],required:!0,fieldName:"passportFiles",maxFiles:1},confirmed:t}},Le=(e,t)=>{var i,l,o,r;return{title:"Личные данные",hint:"Необходимо приложить скан-копию документа, подтверждающего изменения",data:[{fieldName:"fio",title:"ФИО",value:(i=e==null?void 0:e.fio)!=null?i:"",required:!0},{fieldName:"sex",title:"Пол",value:(l=e==null?void 0:e.sex)!=null?l:"",required:!0},{fieldName:"bdate",title:"Дата рождения",value:(o=e==null?void 0:e.bdate)!=null?o:"",required:!0,type:"date"},{fieldName:"bplace",title:"Место рождения",value:(r=e==null?void 0:e.bplace)!=null?r:"",required:!0}],documents:{files:[],required:!0,fieldName:"personalFiles",maxFiles:2},confirmed:t}},Ie=(e,t)=>{var i,l;return{title:"Регистрация",hint:"Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.",data:[{fieldName:"reg_addr",title:"Адрес регистрации",value:(i=e==null?void 0:e.reg_addr)!=null?i:"",required:!0},{fieldName:"reg_date",title:"Дата регистрации",value:(l=e==null?void 0:e.reg_date)!=null?l:"",type:"date",required:!0}],documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:2},optionalCheckbox:{fieldName:"reg_none",title:"Регистрация отсутствует",value:!1},confirmed:t}},Pe=(e,t)=>{t(!0);const i=e.map(n=>{if(Array.isArray(n.data[0])){const a=n.data.map(p=>Object.assign({},...p==null?void 0:p.map(d=>{var _,x;const k={};return d!=null&&d.fieldName&&(k[d==null?void 0:d.fieldName]=d!=null&&(_=d.value)!==null&&_!==void 0&&_.title?d==null||(x=d.value)===null||x===void 0?void 0:x.title:d==null?void 0:d.value),k}))),u={},c=n.title=="Состав семьи"?"family":"langs";return u[c]=JSON.stringify(a),u}else return n.data.map(a=>{var p,d;var u;const c={};return a!=null&&a.fieldName&&(c[(p=a==null?void 0:a.fieldName)!=null?p:""]=typeof a.value!="object"?a==null?void 0:a.value:(d=(u=a.value)===null||u===void 0?void 0:u.title)!=null?d:null),c})}).flat(),l=e.map(n=>{var a;const u={};if((a=n.documents)!==null&&a!==void 0&&a.fieldName)for(let p=0;p<n.documents.files.length;p++){var c;u[((c=n.documents)===null||c===void 0?void 0:c.fieldName)+`[${p}]`]=n.documents.files[p]}return u}),o=e.map(n=>{var a;const u={};if((a=n.optionalCheckbox)!==null&&a!==void 0&&a.fieldName){var c;u[(c=n.optionalCheckbox)===null||c===void 0?void 0:c.fieldName]=n.optionalCheckbox.value}return u}),r=Object.assign({},...i,...l,...o);try{V.postTeacherDataVerification(r),t(!1),V.changeCompleted({completed:!0})}catch(n){t(!1),me.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${n}`,type:"failure",time:3e4})}},ze=ue.div.withConfig({componentId:"sc-1g5zkfe-0"})(["display:flex;align-items:flex-start;justify-content:center;width:100%;padding:10px;color:var(--text);.data-verification-block{width:100%;height:100%;max-width:600px;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);display:flex;flex-direction:column;row-gap:20px;}@media (max-width:1000px){padding:50px 0;.data-verification-block{box-shadow:none;}}"]),Be=()=>{var B;const{data:e,error:t,completed:i}=je.useTeacherDataVerification(),[l,o]=v.useState(!1),[r,n]=v.useState(null),[a,u]=v.useState(null),[c,p]=v.useState(null),[d,_]=v.useState(null),[x,k]=v.useState(null),[y,M]=v.useState(null),[N,$]=v.useState(null),[b,L]=v.useState(null),[D,I]=v.useState(null),[w,P]=v.useState(null),[j,z]=v.useState(null),[q,R]=v.useState(null),h=!!(e!=null&&e.validated),[U,W]=v.useState(!1);return v.useEffect(()=>{W(!1)},[!!(q!=null&&q.confirmed),!!(D!=null&&D.confirmed),!!(r!=null&&r.confirmed),!!(j!=null&&j.confirmed),!!(b!=null&&b.confirmed),!!(y!=null&&y.confirmed),!!(x!=null&&x.confirmed),!!(d!=null&&d.confirmed),!!(a!=null&&a.confirmed),!!(w!=null&&w.confirmed),!!(N!=null&&N.confirmed),!!(c!=null&&c.confirmed)]),v.useEffect(()=>{e&&(n(Le(e,h)),p(Se(e,h)),L($e(e,h)),P(Ie(e,h)),z(Me(e,h)),u(Ve(e,h)),_(Oe(e,h)),M(Te(e,h)),$(Ee(e,h)),I(Ae(e,h)),k(Ce(e,h)),R(Fe(e,h)))},[e]),s.jsx(ve,{load:()=>qe.getTeacherDataVerificationFx(),loading:!e,error:t,data:e,children:r&&c&&b&&w&&j&&a&&d&&y&&N&&D&&x&&q?s.jsx(ze,{children:s.jsxs(pe,{children:[s.jsx(he,{size:3,align:"left",bottomGap:!0,children:"Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите изменения"}),s.jsx(ge,{type:"success",title:`Данные успешно отправлены ${xe((B=e==null?void 0:e.valid_date)!=null?B:new Date)}`,icon:s.jsx(ce,{}),visible:h}),s.jsx(g,m(f({},r),{setData:n,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},c),{setData:p,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},b),{setData:L,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},w),{setData:P,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},j),{setData:z,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},a),{setData:u,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},d),{setData:_,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},y),{setData:M,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},N),{setData:$,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},D),{setData:I,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},x),{setData:k,divider:!0,defaultOpenArea:!1})),s.jsx(g,m(f({},q),{setData:R,divider:!0,defaultOpenArea:!1})),s.jsxs(s.Fragment,{children:[s.jsx(_e,{checked:U,setChecked:W,text:"Я подтверждаю корректность указанных данных"}),s.jsx(ye,{text:i?"Отправлено":"Отправить",action:()=>Pe([q,D,r,j,b,y,x,d,a,w,N,c],o),isLoading:l,completed:i,setCompleted:ie=>V.changeCompleted({completed:ie}),isDone:i,buttonSuccessText:"Отправлено",repeatable:!0,isActive:!!U,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были подтверждены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})]})}):null})};export{Be as default};
