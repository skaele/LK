var le=Object.defineProperty,ae=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var J=(e,t,i)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,f=(e,t)=>{for(var i in t||(t={}))re.call(t,i)&&J(e,i,t[i]);if(G)for(var i of G(t))de.call(t,i)&&J(e,i,t[i]);return e},m=(e,t)=>ae(e,oe(t));var C=(e,t,i)=>new Promise((l,a)=>{var d=n=>{try{r(i.next(n))}catch(c){a(c)}},o=n=>{try{r(i.throw(n))}catch(c){a(c)}},r=n=>n.done?l(n.value):Promise.resolve(n.value).then(d,o);r((i=i.apply(e,t)).next())});import{p as Q,e as X,S as ne,h as se,f as F,j as s,s as ue,r as p,a0 as ce}from"./vendor-3c67dcca.js";import{$ as Y,g as Z,s as ve,f as V,e as fe,W as me,F as pe,T as _e,M as he,l as ge,I as h,C as xe,S as ye}from"./index-d81e371e.js";const be=()=>Y.get(`?getCheckData&token=${Z()}`),Ne=e=>{const t=new FormData;t.set("token",Z()),t.set("saveCheckData","1");for(const[i,l]of Object.entries(e))t.set(i,l);return Y.post("?saveCheckData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},H={teacherDataVerification:null,error:null,completed:!1},De=()=>({data:F(T).teacherDataVerification,loading:F(k.pending),error:F(T).error,completed:F(T).completed}),ee=Q({name:"postTeacherDataVerification",sid:"-jc1rtz"}),te=Q({name:"changeCompleted",sid:"6vr460"}),$e=X(e=>C(void 0,null,function*(){try{return(yield Ne(e)).data}catch(t){throw new Error("Не удалось загрузить раздел")}}),{name:"postTeacherDataVerificationFx",sid:"b8s0pe"});ne({from:ee,to:$e});const k=X(()=>C(void 0,null,function*(){try{return(yield be()).data}catch(e){throw new Error("Не удалось войти")}}),{name:"getTeacherDataVerificationFx",sid:"6736yk"}),T=se(H,{name:"$teacherDataVerificationStore",sid:"-t2u8dj"}).on(k,e=>m(f({},e),{error:null})).on(k.doneData,(e,t)=>m(f({},e),{teacherDataVerification:t})).on(k.failData,(e,t)=>m(f({},e),{error:t.message})).on(te,(e,t)=>m(f({},e),{completed:t.completed})).on(ve.userGuid,()=>f({},H)),we={useTeacherDataVerification:De},je={getTeacherDataVerificationFx:k},O={postTeacherDataVerification:ee,changeCompleted:te},qe=e=>{let t,i,l,a,d;d=Math.floor(e/1e3),a=Math.floor(d/60),d=d%60,l=Math.floor(a/60),a=a%60,i=Math.floor(l/24),l=l%24,t=Math.floor(i/30),i=i%30;const o=Math.floor(t/12);return t=t%12,{year:o,month:t,day:i,hour:l,minute:a,second:d}},ke=(e,t)=>{const i=e.sex==="Мужской",l=qe(new Date().getTime()-new Date(e.bdate).getTime()).year;return{title:"Воинская служба",hint:s.jsxs(s.Fragment,{children:["При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву).",s.jsx("br",{}),s.jsx("br",{}),"Для иностранных работников - скан-копию страницы паспорта иностранного гражданина с серией и номером."]}),data:[],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"armyFiles",maxFiles:10},optionalCheckbox:{fieldName:"army_doc_none",title:"Документ о воинской службе отсутствует",value:l>=66?!0:!i&&(e==null?void 0:e.army_doc_none),required:!0,visible:!i||l>=66},confirmed:t}},Fe=(e,t)=>{var i,l,a,d,o;return{title:"Контактные данные",hint:"Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.",data:[{fieldName:"tel_mob_private",title:"Мобильный телефон (личный)",type:"tel",value:(i=e==null?void 0:e.tel_mob_private)!==null&&i!==void 0?i:"",required:!0,mask:!0,autocomplete:!1},{fieldName:"tel_mob_staff",title:"Мобильный телефон (рабочий)",type:"tel",value:(l=e==null?void 0:e.tel_mob_staff)!==null&&l!==void 0?l:"",mask:!0,autocomplete:!1},{fieldName:"tel_staff",title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:(a=e==null?void 0:e.tel_staff)!==null&&a!==void 0?a:"",autocomplete:!1},{fieldName:"email_private",title:"Личный e-mail",type:"email",value:(d=e==null?void 0:e.email_private)!==null&&d!==void 0?d:"",required:!0,autocomplete:!1},{fieldName:"email_staff",title:"Рабочий e-mail",type:"email",value:(o=e==null?void 0:e.email_staff)!==null&&o!==void 0?o:"",autocomplete:!1}],confirmed:t}},Se=(e,t)=>({title:"Инвалидность",hint:"Необходимо приложить скан-копию справки об инвалидности",data:[],optionalCheckbox:{fieldName:"is_not_invalid",value:e==null?void 0:e.is_not_invalid,title:"Нет документа об инвалидности",required:!0},documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1},confirmed:t}),Ce=(e,t)=>({title:"Водительское удостоверение",hint:"При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон",data:[],optionalCheckbox:{fieldName:"dr_lic_none",title:"Водительское удостоверение отсутствует",value:e.dr_lic_none,required:!0},documents:{files:[],required:!0,fieldName:"driveLicenseFiles",maxFiles:2},confirmed:t}),Te=(e,t)=>{var i,l,a,d;return{title:"Образование",hint:"Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения",data:[{fieldName:"edu_doc",title:"Вид документа",value:e==null?void 0:e.edu_doc,width:"100%"},{fieldName:"edu_level",title:"Уровень образования",value:e.edu_level,width:"100%"},{fieldName:"edu_org",title:"Учебное заведение",value:(i=e==null?void 0:e.edu_org)!==null&&i!==void 0?i:"",required:!0},{fieldName:"edu_spec",title:"Квалификация",value:(l=e==null?void 0:e.edu_spec)!==null&&l!==void 0?l:"",required:!0},{fieldName:"edu_doc_num",title:"Серия и номер",value:(a=e==null?void 0:e.edu_doc_num)!==null&&a!==void 0?a:"",required:!0},{fieldName:"edu_year",title:"Дата выдачи",value:(d=e==null?void 0:e.edu_year)!==null&&d!==void 0?d:"",type:"date",required:!1}],documents:{files:[],required:!0,fieldName:"educationFiles",maxFiles:5},confirmed:t}},A=[{id:"mother",title:"Мать"},{id:"father",title:"Отец"},{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"sister",title:"Сестра"},{id:"brother",title:"Брат"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],Ae=(e,t)=>{var i,l;return{title:"Состав семьи",hint:"Необходимо указать актуальную информацию о ближайших родственниках",data:[...(i=(l=e.family)===null||l===void 0?void 0:l.map(a=>[{fieldName:"relation",title:"Степень родства",value:V(A,a.relation),type:"select",items:A,width:"100%"},{fieldName:"fio",title:"ФИО",value:a.fio,required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:a.bdate,type:"date",required:!0,width:"30%"}]))!==null&&i!==void 0?i:[]],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:A,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:e.family_none,required:!0},confirmed:t}},K=e=>{switch(e){case"Мужской":return[{id:"single",title:"Холост"},{id:"married",title:"Женат"},{id:"divorced",title:"Разведен"},{id:"widow",title:"Вдовец"}];case"Женский":return[{id:"single",title:"Не замужем"},{id:"married",title:"Замужем"},{id:"divorced",title:"Разведена"},{id:"widow",title:"Вдова"}];default:return[{id:"single",title:"Холост/Не замужем"},{id:"married",title:"Женат/Замужем"},{id:"divorced",title:"Разведен/Разведена"},{id:"widow",title:"Вдовец/Вдова"}]}},Oe=(e,t)=>({title:"Семейное положение",hint:"Необходимо указать актуальную информацию",data:[{fieldName:"familyStatus",title:"",value:V(K(e.sex),e.familyStatus),type:"select",items:K(e.sex),width:"100%"}],confirmed:t}),S=[{id:"a",title:"Читаю и перевожу со словарем"},{id:"b",title:"Читаю и могу объясняться"},{id:"с",title:"Владею свободно"}],Ve=(e,t)=>{var i,l;return{title:"Знание иностранных языков",hint:"Необходимо указать иностранные языки и степень владения ими",data:[...(i=(l=e.languages)===null||l===void 0?void 0:l.map(a=>[{fieldName:"language",title:"Язык",required:!0,value:a.language},{fieldName:"level",title:"Уровень владения",value:V(S,a.level),type:"select",items:S,width:"100%"}]))!==null&&i!==void 0?i:[]],default:[[{fieldName:"language",title:"Язык",required:!0,value:"Английский"},{fieldName:"level",title:"Уровень владения",value:S[0],type:"select",items:S,width:"100%"}]],addNew:!0,confirmed:t}},Ee=(e,t)=>{var i,l;return{title:"Проживание",hint:"Необходимо указать фактический адрес проживания",data:[{fieldName:"loc_addr",title:"Адрес проживания",value:(i=e==null?void 0:e.loc_addr)!==null&&i!==void 0?i:"",required:!0},{fieldName:"loc_date",title:"Дата начала проживания",value:(l=e==null?void 0:e.loc_date)!==null&&l!==void 0?l:"",type:"date",required:!0}],optionalCheckbox:{fieldName:"loc_match_reg",title:"Адрес проживания совпадает с адресом регистрации",value:e.loc_match_reg,required:!0},confirmed:t}},Me=(e,t)=>{var i,l,a,d,o,r;return{title:"Паспортные данные",hint:"Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.",data:[{fieldName:"",title:"Вид документа",value:e==null?void 0:e.pass_type,width:"100%"},{fieldName:"pass_ser",title:"Серия",value:(i=e==null?void 0:e.pass_ser)!==null&&i!==void 0?i:"",required:!0},{fieldName:"pass_num",title:"Номер",value:(l=e==null?void 0:e.pass_num)!==null&&l!==void 0?l:"",required:!0},{fieldName:"pass_div",title:"Кем выдан",value:(a=e==null?void 0:e.pass_div)!==null&&a!==void 0?a:"",required:!0},{fieldName:"pass_date",title:"Дата выдачи",value:(d=e==null?void 0:e.pass_date)!==null&&d!==void 0?d:"",required:!0,type:"date"},{fieldName:"pass_div_code",title:"Код подразделения",value:(o=e==null?void 0:e.pass_div_code)!==null&&o!==void 0?o:"",required:!0},{fieldName:"pass_citizenship",title:"Гражданство",value:(r=e==null?void 0:e.pass_citizenship)!==null&&r!==void 0?r:"",required:!1}],documents:{files:[],required:!0,fieldName:"passportFiles",maxFiles:1},confirmed:t}},Le=(e,t)=>{var i,l,a,d;return{title:"Личные данные",hint:"Необходимо приложить скан-копию документа, подтверждающего изменения",data:[{fieldName:"fio",title:"ФИО",value:(i=e==null?void 0:e.fio)!==null&&i!==void 0?i:"",required:!0},{fieldName:"sex",title:"Пол",value:(l=e==null?void 0:e.sex)!==null&&l!==void 0?l:"",required:!0},{fieldName:"bdate",title:"Дата рождения",value:(a=e==null?void 0:e.bdate)!==null&&a!==void 0?a:"",required:!0,type:"date"},{fieldName:"bplace",title:"Место рождения",value:(d=e==null?void 0:e.bplace)!==null&&d!==void 0?d:"",required:!0}],documents:{files:[],required:!0,fieldName:"personalFiles",maxFiles:2},confirmed:t}},Ie=(e,t)=>{var i,l;return{title:"Регистрация",hint:"Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.",data:[{fieldName:"reg_addr",title:"Адрес регистрации",value:(i=e==null?void 0:e.reg_addr)!==null&&i!==void 0?i:"",required:!0},{fieldName:"reg_date",title:"Дата регистрации",value:(l=e==null?void 0:e.reg_date)!==null&&l!==void 0?l:"",type:"date",required:!0}],documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:2},optionalCheckbox:{fieldName:"reg_none",title:"Регистрация отсутствует",value:!1},confirmed:t}},ze=(e,t)=>{t(!0);const i=e.map(o=>{if(Array.isArray(o.data[0])){const r=o.data.map(v=>Object.assign({},...v==null?void 0:v.map(u=>{var g,y;const x={};return u!=null&&u.fieldName&&(x[u==null?void 0:u.fieldName]=u!=null&&(g=u.value)!==null&&g!==void 0&&g.title?u==null||(y=u.value)===null||y===void 0?void 0:y.title:u==null?void 0:u.value),x}))),n={},c=o.title=="Состав семьи"?"family":"langs";return n[c]=JSON.stringify(r),n}else return o.data.map(r=>{var n,c,v;const u={};return r!=null&&r.fieldName&&(u[(n=r==null?void 0:r.fieldName)!==null&&n!==void 0?n:""]=typeof r.value!="object"?r==null?void 0:r.value:(c=(v=r.value)===null||v===void 0?void 0:v.title)!==null&&c!==void 0?c:null),u})}).flat(),l=e.map(o=>{var r;const n={};if((r=o.documents)!==null&&r!==void 0&&r.fieldName)for(let v=0;v<o.documents.files.length;v++){var c;n[((c=o.documents)===null||c===void 0?void 0:c.fieldName)+`[${v}]`]=o.documents.files[v]}return n}),a=e.map(o=>{var r;const n={};if((r=o.optionalCheckbox)!==null&&r!==void 0&&r.fieldName){var c;n[(c=o.optionalCheckbox)===null||c===void 0?void 0:c.fieldName]=o.optionalCheckbox.value}return n}),d=Object.assign({},...i,...l,...a);try{O.postTeacherDataVerification(d),t(!1),O.changeCompleted({completed:!0})}catch(o){t(!1),fe.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${o}`,type:"failure",time:3e4})}},Pe=ue.div.withConfig({componentId:"sc-1g5zkfe-0"})(["display:flex;align-items:flex-start;justify-content:center;width:100%;padding:10px;color:var(--text);.data-verification-block{width:100%;height:100%;max-width:600px;padding:20px;border-radius:var(--brLight);background:var(--block-content);box-shadow:var(--block-shadow);display:flex;flex-direction:column;row-gap:20px;}@media (max-width:1000px){padding:50px 0;.data-verification-block{box-shadow:none;}}"]),Be=()=>{var e;const{data:t,error:i,completed:l}=we.useTeacherDataVerification(),[a,d]=p.useState(!1),[o,r]=p.useState(null),[n,c]=p.useState(null),[v,u]=p.useState(null),[g,y]=p.useState(null),[x,E]=p.useState(null),[b,M]=p.useState(null),[N,L]=p.useState(null),[D,I]=p.useState(null),[$,z]=p.useState(null),[w,P]=p.useState(null),[j,R]=p.useState(null),[q,U]=p.useState(null),_=!!(t!=null&&t.validated),[W,B]=p.useState(!1);return p.useEffect(()=>{B(!1)},[!!(q!=null&&q.confirmed),!!($!=null&&$.confirmed),!!(o!=null&&o.confirmed),!!(j!=null&&j.confirmed),!!(D!=null&&D.confirmed),!!(b!=null&&b.confirmed),!!(x!=null&&x.confirmed),!!(g!=null&&g.confirmed),!!(n!=null&&n.confirmed),!!(w!=null&&w.confirmed),!!(N!=null&&N.confirmed),!!(v!=null&&v.confirmed)]),p.useEffect(()=>{t&&(r(Le(t,_)),u(Fe(t,_)),I(Me(t,_)),P(Ie(t,_)),R(Ee(t,_)),c(Oe(t,_)),y(Ae(t,_)),M(Te(t,_)),L(Ve(t,_)),z(Ce(t,_)),E(Se(t,_)),U(ke(t,_)))},[t]),s.jsx(me,{load:()=>je.getTeacherDataVerificationFx(),loading:!t,error:i,data:t,children:o&&v&&D&&w&&j&&n&&g&&b&&N&&$&&x&&q?s.jsx(Pe,{children:s.jsxs(pe,{children:[s.jsx(_e,{size:3,align:"left",bottomGap:!0,children:"Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите изменения"}),s.jsx(he,{type:"success",title:`Данные успешно отправлены ${ge((e=t==null?void 0:t.valid_date)!==null&&e!==void 0?e:new Date)}`,icon:s.jsx(ce,{}),visible:_}),s.jsx(h,m(f({},o),{setData:r,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},v),{setData:u,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},D),{setData:I,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},w),{setData:P,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},j),{setData:R,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},n),{setData:c,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},g),{setData:y,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},b),{setData:M,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},N),{setData:L,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},$),{setData:z,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},x),{setData:E,divider:!0,defaultOpenArea:!1})),s.jsx(h,m(f({},q),{setData:U,divider:!0,defaultOpenArea:!1})),s.jsxs(s.Fragment,{children:[s.jsx(xe,{checked:W,setChecked:B,text:"Я подтверждаю корректность указанных данных"}),s.jsx(ye,{text:l?"Отправлено":"Отправить",action:()=>ze([q,$,o,j,D,b,x,g,n,w,N,v],d),isLoading:a,completed:l,setCompleted:ie=>O.changeCompleted({completed:ie}),isDone:l,buttonSuccessText:"Отправлено",repeatable:!0,isActive:!!W,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были подтверждены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})]})}):null})};export{Be as default};
