var pe=Object.defineProperty,fe=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var B=(e,t,a)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))ke.call(t,a)&&B(e,a,t[a]);if(_)for(var a of _(t))$e.call(t,a)&&B(e,a,t[a]);return e},M=(e,t)=>fe(e,ve(t));var i=(e,t,a)=>new Promise((r,d)=>{var f=l=>{try{u(a.next(l))}catch(v){d(v)}},R=l=>{try{u(a.throw(l))}catch(v){d(v)}},u=l=>l.done?r(l.value):Promise.resolve(l.value).then(f,R);u((a=a.apply(e,t)).next())});import{p as n,e as c,x as s,h as g,v as xe,m as ye,cN as Pe,K as C,r as O,q as De,cO as Se,cP as Ae,j as U}from"./vendor-3c67dcca.js";import{X as he,Y as Fe,b as q,a as m,e as o,z as we,Z as be,_ as Ve,a0 as Re,a1 as ze,a2 as Me,a3 as Ue,a4 as je,a5 as Ce,a6 as qe,H as Ge,r as Ee,d as Ie,B as He,l as N,t as L}from"./index-ba49d757.js";const K=n({name:"addVisit",sid:"3ybve7"}),X=n({name:"removeVisit",sid:"w1vlkj"}),p=c(e=>i(void 0,null,function*(){return yield he(e),e}),{name:"addVisitFx",sid:"-lbpib"}),k=c(t=>i(void 0,[t],function*({id:e}){return yield Fe(e),e}),{name:"removeVisitFx",sid:"-wpy18p"}),Te=k.pending,_e=p.pending;s({and:[{clock:K,target:p}],or:{sid:"-tzueuh"}});s({and:[{clock:p.doneData,target:q.close}],or:{sid:"-txn8h1"}});s({and:[{clock:p.failData,fn:e=>({message:m(e,"Не удалось добавить посещение"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-tvg23l"}});s({and:[{clock:p.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-tey8ar"}});s({and:[{clock:X,target:k}],or:{sid:"-sygehx"}});s({and:[{clock:k.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-skpjnw"}});s({and:[{clock:k.failData,fn:e=>({message:m(e,"Не удалось удалить посещение"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-sfrebn"}});const Be={addVisit:K,removeVisit:X},F={addVisitFx:p,removeVisitFx:k},Oe={pendingRemoveVisit:Te,pendingAddVisit:_e},Y=n({name:"update",sid:"-tu363b"}),Ne=g("",{name:"$search",sid:"gw0gkq"}).on(Y,(e,t)=>t),Le={update:Y},We={$search:Ne},Z=n({name:"addFilter",sid:"3pahp2"}),G=n({name:"resetFilters",sid:"sk6sju"}),Q=g({},{name:"$filters",sid:"im200n"}).on(We.$search,(e,t)=>M(A({},e),{fullName:{value:t}})).on(Z,(e,{name:t,value:a,strict:r})=>{const d=A({},e);return a?M(A({},d),{[t]:{value:a,strict:r}}):(delete d[t],d)});s({and:[{clock:G,target:Q.reinit}],or:{sid:"-drxh28"}});s({and:[{clock:G,fn:()=>"",target:Le.update}],or:{sid:"-dpqaos"}});const E={$filters:Q},ct={addFilter:Z,resetFilters:G},ee=n({name:"setIsExam",sid:"shha4n"}),Je=g(!1,{name:"$isExam",sid:"4al1my"}).on(ee,(e,t)=>t),rt={$isExam:Je},lt={setIsExam:ee},I=n({name:"load",sid:"-ip5e0a"}),te=n({name:"setPage",sid:"266xmv"}),H=g(0,{name:"$pEStudentsPage",sid:"x1jwze"}).on(te,(e,t)=>t).on(E.$filters,()=>0),w=xe({and:{source:{page:H,filters:E.$filters},effect:a=>i(void 0,[a],function*({filters:e,page:t}){const{data:r}=yield we(t,e);return r.data})},or:{name:"loadPageFx",sid:"-u9ar2s"}});ye({sid:"-mlc78y",fn:()=>Pe({source:C({and:[H,E.$filters],or:{name:"source",sid:"-ne89m1"}}),timeout:200,target:I}),name:"none",method:"debounce"});s({and:[{clock:I,target:w}],or:{sid:"-mil8a5"}});const j=g([],{name:"$pEStudents",sid:"-a7h5qn"}).on(w.doneData,(e,t)=>t.students),Ke=g(0,{name:"$pEStudentsTotalCount",sid:"-hptisk"}).on(w.doneData,(e,t)=>t.totalCount),Xe=C({and:[w.pending,Boolean],or:{name:"$loading",sid:"-way26q"}});s({and:[{clock:F.addVisitFx.doneData,source:j,filter:(e,{studentGuid:t})=>e.some(a=>a.studentGuid===t),fn:(e,t)=>{const a=JSON.parse(JSON.stringify(e)),r=a.find(d=>d.studentGuid===t.studentGuid);return++r.visits,a},target:j}],or:{sid:"-m36zo1"}});const gt={load:I,setPage:te},mt={$loading:Xe,$pEStudents:j,$pEStudentsPage:H,$pEStudentsTotalCount:Ke},se=n({name:"addAdditionPoints",sid:"-gfwajq"}),ae=n({name:"removeAdditionPoints",sid:"s7fafn"}),$=c(t=>i(void 0,[t],function*({id:e}){yield be(e)}),{name:"removeAdditionPointsFx",sid:"-yz8fw7"});s({and:[{clock:ae,target:$}],or:{sid:"-8u8zpu"}});const Ye=$.pending,x=c(e=>i(void 0,null,function*(){return yield Ve(e),e}),{name:"addAdditionPointsFx",sid:"htakn7"});s({and:[{clock:se,target:x}],or:{sid:"-8dr5x0"}});s({and:[{clock:x.doneData,target:q.close}],or:{sid:"-8bjzjk"}});s({and:[{clock:x.doneData,fn:()=>({message:"Баллы добавлены",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-7xt4pj"}});s({and:[{clock:x.failData,fn:e=>({message:m(e,"Не удалось добавить баллы"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-7suzda"}});s({and:[{clock:$.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-7cd5kg"}});s({and:[{clock:$.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-6vvbrm"}});const ut={addAdditionPoints:se,removeAdditionPoints:ae},W={addAdditionPointsFx:x,removeAdditionPointsFx:$},pt={pendingRemoveAdditionPoints:Ye},ne=n({name:"addRegulationPoints",sid:"r944lm"}),oe=n({name:"removeRegulationPoints",sid:"2sncem"}),y=c(t=>i(void 0,[t],function*({id:e}){yield Re(e)}),{name:"removeRegulationPointsFx",sid:"-krrp8n"});s({and:[{clock:oe,target:y}],or:{sid:"mz5r9q"}});const Ze=y.pending,P=c(e=>i(void 0,null,function*(){return yield ze(e),e}),{name:"addRegulationPointsFx",sid:"-dsdequ"});s({and:[{clock:ne,target:P}],or:{sid:"nfnl2k"}});s({and:[{clock:P.doneData,target:q.close}],or:{sid:"nhurg0"}});s({and:[{clock:P.doneData,fn:()=>({message:"Норматив добавлен",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"nvlma1"}});s({and:[{clock:P.failData,fn:e=>({message:m(e,"Не удалось добавить норматив"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"o0jrma"}});s({and:[{clock:y.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"oh1lf4"}});s({and:[{clock:y.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:o.evokePopUpMessage}],or:{sid:"oxjf7y"}});const ft={addRegulationPoints:ne,removeRegulationPoints:oe},J={addRegulationPointsFx:P,removeRegulationPointsFx:y},vt={pendingRemoveRegulationPoints:Ze},ie=n({name:"setSpecialization",sid:"hrz73m"}),D=c(e=>i(void 0,null,function*(){return yield Me(e),e}),{name:"setSpecializationFx",sid:"-aw52yn"}),Qe=D.pending;s({and:[{clock:ie,target:D}],or:{sid:"-4x6l4a"}});s({and:[{clock:D.failData,fn:e=>({message:m(e,"Не удалось добавить специализацию"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-4uzequ"}});s({and:[{clock:D.doneData,fn:()=>({message:"Специализация добавлена",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-4ehky0"}});const kt={setSpecialization:ie},et={setSpecializationFx:D},$t={pendingSetSpecialization:Qe},de=n({name:"setHealthGroup",sid:"8b83ja"}),S=c(e=>i(void 0,null,function*(){return yield Ue(e),e}),{name:"setHealthGroupFx",sid:"a5qgdx"}),tt=S.pending;s({and:[{clock:de,target:S}],or:{sid:"-fydy6l"}});s({and:[{clock:S.failData,fn:e=>({message:m(e,"Не удалось добавить группу здоровья"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-fw6rt5"}});s({and:[{clock:S.doneData,fn:()=>({message:"Группа здоровья добавлена",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"-ffoy0b"}});const xt={setHealthGroup:de},st={setHealthGroupFx:S},yt={pendingSetHealthGroup:tt},ce=n({name:"setCurrentStudentId",sid:"-yi431d"}),re=n({name:"resetStudentId",sid:"b5joy3"}),le=n({name:"reload",sid:"-4igy6g"}),b=c(e=>i(void 0,null,function*(){const{data:t}=yield je(e);return t.data}),{name:"loadCurrentStudent",sid:"-htqwl5"});s({and:[{clock:ce,target:b}],or:{sid:"-e9batg"}});const T=g(null,{name:"$selectedStudent",sid:"ffg61i"}).reset(re),at=C({and:[F.addVisitFx.pending,b.pending,Boolean],or:{name:"$loading",sid:"4dn8ye"}});s({and:[{clock:[F.addVisitFx.doneData,F.removeVisitFx.doneData,st.setHealthGroupFx.doneData,et.setSpecializationFx.doneData,W.addAdditionPointsFx.doneData,W.removeAdditionPointsFx.doneData,J.addRegulationPointsFx.doneData,J.removeRegulationPointsFx.doneData],target:le}],or:{sid:"-dugusp"}});s({and:[{clock:le,source:T,filter:e=>!!e,fn:e=>e.studentGuid,target:b}],or:{sid:"-ds9of9"}});s({and:[{clock:b.doneData,target:T}],or:{sid:"-dcvft5"}});const Pt={$selectedStudent:T,$loading:at},Dt={setCurrentStudentId:ce,resetStudentId:re},ge=n({name:"load",sid:"-1nsq63"}),me=n({name:"remove",sid:"wecpac"}),ue=c(()=>i(void 0,null,function*(){const{data:e}=yield Ce();return e.competitions}),{name:"loadFx",sid:"-d34r01"}),V=c(e=>i(void 0,null,function*(){return yield qe(e),e}),{name:"removeFx",sid:"y5v9by"});s({and:[{clock:me,target:V}],or:{sid:"q9j9ts"}});s({and:[{clock:V.failData,fn:e=>({message:m(e,"Не удалось удалить соревнование"),type:"failure",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"qna4nt"}});s({and:[{clock:V.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:o.evokePopUpMessage}],or:{sid:"r3rygn"}});s({and:[{clock:ge,target:ue}],or:{sid:"r8q3sw"}});const nt=g([],{name:"$competitions",sid:"dxwaax"}).on(ue.doneData,(e,t)=>t).on(V.doneData,(e,t)=>e.filter(a=>a!==t)),St={load:ge,remove:me},At={$competitions:nt};var h=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(h||{});const ht=({studentGuid:e})=>{const[t,a]=O.useState(new Date().toISOString()),[r,d]=De([Oe.pendingAddVisit,Ge.peTeacher]),f=new Date(t),R=[h.AdminAccess,h.SuperUser,h.SecretaryAccess].some(v=>{var z;return d==null||(z=d.permissions)===null||z===void 0?void 0:z.includes(v)}),u=(Se(f,{start:Ae(new Date,1),end:new Date})||R)&&f.getDay()!==0&&f.getDay()!==1;O.useEffect(()=>{a(new Date().toISOString())},[e]);const l=()=>{Be.addVisit({studentGuid:e,date:N(t,"numeric")})};return U.jsxs(Ee,{gap:"4px",ai:"flex-start",children:[U.jsx(Ie,{alertMessage:u?"":"Не допустимая дата",type:"date",setValue:a,value:t,hideCross:!0}),U.jsx(He,{isActive:u&&!r,text:`Добавить посещение ${N(t,"numeric")}`,onClick:l,width:"100%",background:L.blue.main,textColor:L.white.main})]})},Ft={None:"-",Basic:"Основная",SpecialA:"Специальная А",SpecialB:"Специальная Б",Preparatory:"Подготовительная",HealthLimitations:"ОВЗ",Disabled:"Инвалид"},wt={None:"-",Basketball:"Баскетбол",Volleyball:"Волейбол",Aerobics:"Аэробика",PowerLiftingAndCrossfit:"Пауэрлифтинг и кроссфит",StreetLiftingAndArmLifting:"Стритлифтинг и армлифтинг",GeneralPhysicalTraining:"ОФП",GeneralPhysicalTrainingGym:"ОФП (тренажерный зал)",FootRoom:"Футзал",SMG:"СМГ",TableTennis:"СМГ настольный теннис",NordicWalking:"СМГ скандинавская ходьба",InternalTeam:"Сборная"};export{ht as A,h as P,E as a,rt as b,ct as c,lt as d,St as e,gt as f,wt as g,Ft as h,mt as i,We as j,Le as k,Oe as l,Be as m,Pt as n,pt as o,ut as p,ft as q,vt as r,At as s,yt as t,xt as u,$t as v,kt as w,Dt as x};
