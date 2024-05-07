import{F as Ke,a as wi,b as Pt,c as pn,H as Kn,d as Rt,y as L,u as k,p as V,e as q,x as P,S as Le,m as un,r as l,s as u,j as t,f as Xe,I as Ip,g as Rp,h as Lp,i as zp,k as ms,A as hn,l as A,n as Mp,o as ge,q as qt,t as Bn,v as Fp,w as Bp,R as le,z as Ct,B as $i,C as Qe,L as ee,D as ji,E as Hp,G as Up,J as gn,K as Qt,M as Wp,N as Vp,O as xt,P as We,Q as sa,T as Ze,U as oa,V as bs,W as ut,X as aa,Y as ra,Z as et,_ as la,$ as ca,a0 as Gp,a1 as qp,a2 as Yp,a3 as Jp,a4 as da,a5 as mt,a6 as fn,a7 as Kp,a8 as Ye,a9 as Yt,aa as Xp,ab as Qp,ac as Zp,ad as eu,ae as tu,af as iu,ag as Q,ah as nu,ai as pa,aj as ua,ak as su,al as ou,am as Yi,an as vs,ao as ha,ap as au,aq as ru,ar as lu,as as ga,at as cu,au as xn,av as du,aw as fa,ax as xa,ay as ma,az as ba,aA as pu,aB as uu,aC as va,aD as ya,aE as Zi,aF as hu,aG as gu,aH as hi,aI as _a,aJ as wa,aK as ie,aL as Xs,aM as ja,aN as fu,aO as xu,aP as mu,aQ as bu,aR as Ji,aS as vu,aT as yu,aU as _u,aV as wu,aW as ju,aX as ku,aY as Su,aZ as Tu,a_ as Eu,a$ as $u,b0 as Pu,b1 as Cu,b2 as Ou,b3 as Au,b4 as Du,b5 as Nu,b6 as Iu,b7 as Ru,b8 as Lu,b9 as zu,ba as Mu,bb as Fu,bc as ka,bd as Bu,be as Hu,bf as Uu,bg as Wu,bh as Vu,bi as Gu,bj as qu,bk as ys,bl as Yu,bm as Ju,bn as Ku,bo as Xu,bp as Qu,bq as Zu,br as eh,bs as th,bt as ih,bu as Sa,bv as nh,bw as Xn,bx as sh,by as oh,bz as ah,bA as Qs,bB as rh,bC as lh,bD as ch,bE as dh,bF as Ta,bG as Zs,bH as ph,bI as uh,bJ as hh,bK as gh,bL as fh,bM as xh,bN as Ea,bO as $a,bP as mh,bQ as bh,bR as vh,bS as yh}from"./vendor-cbee1f3c.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const _h="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",wh=3,mn=["home","settings","all"],Pa=["home","settings","download-agreements","all"],Ca="https://lk.eseur.ru/signup",jh="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",j={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Ut={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},VE={Зачтено:j.green,"Не зачтено":j.red,Отлично:j.green,Хорошо:j.blue,Удовлетворительно:j.orange,Неудовлетворительно:j.red,"Не явился":j.red,default:j.red},GE={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",kh="2023-10-03T10:43:43",Ot={info:{icon:Ke,color:"blue",title:"Информация"},alert:{icon:wi,color:"orange",title:"Внимание!"},failure:{icon:Pt,color:"red",title:"Ошибка"},success:{icon:pn,color:"green",title:"Успешно"},tip:{icon:Kn,color:"grey",title:"Подсказка"},hint:{icon:Kn,color:"white",title:"Подсказка"},hrFailure:{icon:Pt,color:"red",title:"Ошибка"}},Sh={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Th=["image/jpeg","image/jpg","image/png","application/pdf"],Eh=10,Oa="(max-width: 766px)",$h="(min-width: 767px)",Aa="(max-width: 1000px)",Da="(max-width: 1380px)",Na="(min-width: 1381px)",X={isMobile:`@media ${Oa}`,isNotMobile:`@media ${$h}`,isTablet:`@media ${Aa}`,isSmallTesktop:`@media ${Da}`,isMiddleTesktop:`@media ${Na}`},Ph=[{query:Oa,title:"isMobile",value:"mobile"},{query:Aa,title:"isTablet",value:"tablet"},{query:Da,title:"isSmallDesktop",value:"smallDesktop"},{query:Na,title:"isMiddleDesktop",value:"middleDesktop"}],_s={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},O=!window.location.port||window.location.port==="80"||window.location.port==="4001"||window.location.port==="4002";console.log("Running on production",O);var M=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(M||{});const tt=()=>localStorage.getItem(M.JWT)||sessionStorage.getItem(M.JWT),Zt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Ch=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),Qn=e=>async i=>{var s,o,a,r,c,d,p;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((p=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:p.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)It.logout();else{n._retry=!0;const h=localStorage.getItem(M.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await Rh(h??"");return Ch()?(localStorage.setItem(M.JWT,f),localStorage.setItem(M.JWTRefresh,g)):(sessionStorage.setItem(M.JWT,f),sessionStorage.setItem(M.JWTRefresh,g)),e(n)}catch{It.logout()}}return Promise.reject(i)},Ia=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${tt()}`,e),Oh=`${R}/lk_api.php`,Ah="https://api.mospolytech.ru/serviceforfrontpersonnelorders",F=Rt.create({baseURL:Oh,withCredentials:!0}),fe=Rt.create({baseURL:Ah});fe.interceptors.request.use(Ia);!O&&fe.interceptors.response.use(e=>e,Qn(fe));function ws(e){return e.isAxiosError}function B(){return localStorage.getItem(M.Token)??sessionStorage.getItem(M.Token)??""}const Dh=({login:e,password:i})=>F.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Nh=e=>F.get(`?getUser&token=${e}`),Ih=e=>F.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),qE=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",B()),F.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},YE=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),F.post(`?changeADPass=1&token=${B()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},JE=async e=>{const i=new FormData;return i.set("email",e),i.set("token",B()),F.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},KE=async e=>{const i=new FormData;return Object.entries(e).forEach(([n,s])=>{i.set(n,s)}),i.set("token",B()),F.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},XE=async e=>{var n,s;const i=new FormData;return i.set("token",B()),i.set("phone",e.phone_staff||""),i.set("allow_mobphone_in",((n=e.allow_mobphone_in)==null?void 0:n.toString())??"false"),i.set("allow_mobphone_out",((s=e.allow_mobphone_out)==null?void 0:s.toString())??"false"),F.post("?changeStaffPhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},QE=async e=>{const i=new FormData;return i.set("token",B()),i.set("guid",e.guid_staff),i.set("room",e.room),i.set("address",e.address),F.post("?changeStaffAddress=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Rh=async e=>{const{data:i}=await Rt.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Lh=e=>F.get(`?getSchedule&group=${e}&token=${B()}`),zh=e=>F.get(`?getScheduleTeacher&fio=${e}&token=${B()}`),Mh=()=>F.get(`?getSchedule&session=1&token=${B()}`),Fh=e=>F.get(`?getScheduleTeacher&fio=${e}&session=1&token=${B()}`),Bh=()=>F.get(`?getPayments&token=${B()}`),Hh=e=>F.get(`?signAgreement=${e}&token=${B()}`),Uh=e=>F.get(`?signContract=${e}&token=${B()}`),Wh=async({semestr:e})=>{var i,n;return(n=(i=await F.get(`?getAcademicPerformance&semestr=${e}&token=${B()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},Vh=e=>F.get(`?getMessages&token=${B()}&id=${e}`),Gh=async()=>(await F.get(`?getPEPStatus&token=${B()}`)).data,qh=async()=>(await F.get(`?setPEPAccept&token=${B()}`)).data,Yh=()=>F.get(`?getContactData&token=${B()}`),Jh=e=>{const i=new FormData;i.set("token",B()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Kh=()=>F.get(`?getRequestHighComfort&token=${B()}`),ZE=e=>{const i=new FormData;i.set("token",B()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Xh=()=>F.get(`?getAppRequests&token=${B()}`),Ra=()=>F.get(`?getAppData&token=${B()}`),Qh=async()=>await fe.get(`/Dismissal.GetAllHistory?employeeGuid=${Zt(tt()??"").IndividualGuid}`),Zh=async()=>{const{data:e}=await fe.get("/AnotherPlaceWork.GetDivisions");return e.divisions},eg=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",B()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await F.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},tg=()=>fe.get(`?getAppRequests&token=${B()}`),ig=()=>fe.get(`?getAppData&token=${B()}`),ng=e=>fe.post("Dismissal.Post",e),sg=async()=>(await F.get(`?getAdminLinks&token=${B()}`)).data,og=async e=>(await F.get(`?PDinfo&token=${B()}`)).data,ag=()=>F.get(`?getPhoneBookDivisions&token=${B()}`),La=()=>F.get(`?getNotification&token=${B()}`),rg=e=>F.get(`?viewNotification=${e}&token=${B()}`),lg=Object.freeze(Object.defineProperty({__proto__:null,get:La,view:rg},Symbol.toStringTag,{value:"Module"})),za=()=>F.get(`?getDocList&token=${B()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),cg=e=>F.get(`?viewDoc=${e}&token=${B()}`),dg=Object.freeze(Object.defineProperty({__proto__:null,get:za,view:cg},Symbol.toStringTag,{value:"Module"})),Ma=(e,i,n,s)=>F.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${B()}`),js=e=>F.get(`?getDivs=${e}&page=1&token=${B()}`),pg=()=>F.get(`?getCheckData&token=${B()}`),ug=e=>{const i=new FormData;i.set("token",B()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},hg=(e,i,n,s)=>F.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${B()}`),gg=async e=>await F.get(`?getGroups=${e}&perpage=30&page=1&token=${B()}`),fg=async()=>(await F.get(`?getAlerts&token=${B()}`)).data,xg=()=>F.get(`?getNotifications&token=${B()}`),mg=e=>F.get(`?clearNotificationById=${e}&token=${B()}`),bg=()=>F.get(`?clearAllNotifications&token=${B()}`);function vg({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const eo={data:null,preparedData:null,loading:!1,error:null},bn=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>_h})=>{const o=e??eo,a=()=>({data:q(p).data,preparedData:q(p).preparedData,loading:q(r.pending),error:q(p).error}),r=L(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=L(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),p=V(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...eo}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function yg(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const _g=bn({api:{get:Wh},prepareData:yg}),Je=bn({api:{get:sg}}),wg=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),jg=bn({api:{get:fg},prepareData:wg}),to={message:"",type:"success",isOpen:!1,time:2e3},Fa=k(),Ba=k(),Ha=k();V(to).on(Fa,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ba,(e,{isOpen:i})=>({...e,isOpen:i})).on(Ha,()=>({...to}));const bt={evokePopUpMessage:Fa,openPopUpMessage:Ba,clearStore:Ha},io={listApplication:null,error:null,dataUserApplication:null},gi=L(async()=>{const e=await tg();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Ki=L(async()=>{const e=await ig();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),vn=L(async e=>await ng(e));P({clock:vn.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:bt.evokePopUpMessage});P({clock:vn.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:bt.evokePopUpMessage});const kg=k();Le({from:vn.doneData,to:gi});V(io).on(Ki,e=>({...e,error:null})).on(Ki.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Ki.failData,(e,i)=>({...e,error:i.message})).on(gi,e=>({...e,error:null})).on(gi.doneData,(e,i)=>({...e,listApplication:i})).on(gi.failData,(e,i)=>({...e,error:i.message})).on(kg,()=>({...io}));const Sg={getApplicationsFx:gi,getUserDataApplicationsFx:Ki,postApplicationFx:vn},no={message:"",type:"success",isOpen:!1,time:2e3},Tg=()=>q(Eg),Ua=k(),Wa=k(),Va=k(),Eg=V(no).on(Ua,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Wa,(e,{isOpen:i})=>({...e,isOpen:i})).on(Va,()=>({...no})),Ga={usePopUpMessage:Tg},U={evokePopUpMessage:Ua,openPopUpMessage:Wa,clearStore:Va},$g=Object.freeze(Object.defineProperty({__proto__:null,events:U,selectors:Ga},Symbol.toStringTag,{value:"Module"})),so={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},en=L(async()=>{const e=await Qh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),fi=L(async()=>{const e=await Xh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),xi=L(async()=>{const e=await Ra();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ks=L(async e=>{const i=await eg(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Pg=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(Cg);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(xi.pending),workerLoading:q(un(en.pending,Sg.postApplicationFx.pending,(o,a)=>o||a)),error:s}},qa=k();Le({from:ks.doneData,to:fi});P({clock:ks.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:U.evokePopUpMessage});const Cg=V(so).on(xi,e=>({...e,error:null})).on(xi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(xi.failData,(e,i)=>({...e,error:i.message})).on(fi,e=>({...e,error:null})).on(fi.doneData,(e,i)=>({...e,listApplication:i})).on(fi.failData,(e,i)=>({...e,error:i.message})).on(en,e=>({...e,error:null})).on(en.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(qa,()=>({...so})),ve={useApplications:Pg},Re={getApplicationsFx:fi,getUserDataApplicationsFx:xi,postApplicationFx:ks,getWorkerPosts:en},Og={clearStore:qa},Ag=Object.freeze(Object.defineProperty({__proto__:null,effects:Re,events:Og,selectors:ve},Symbol.toStringTag,{value:"Module"})),oo={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Dg=()=>q(Ng),Ya=k(),Ja=k(),Ka=k(),Ng=V(oo).on(Ya,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(Ja,e=>({...e,isOpen:!1})).on(Ka,()=>({...oo})),Xa={useConfirm:Dg},lt={evokeConfirm:Ya,closeConfirm:Ja,clearStore:Ka},Ig=Object.freeze(Object.defineProperty({__proto__:null,events:lt,selectors:Xa},Symbol.toStringTag,{value:"Module"})),Rg=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=L(async p=>{const h=await i.post(p);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});P({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:U.evokePopUpMessage}),P({clock:a.failData,fn:p=>({message:`${p.message}`,type:"failure"}),target:U.evokePopUpMessage}),P({clock:a.doneData,target:Re.getApplicationsFx});const r=L(async p=>{if(i.get)try{return{...(await i.get(p)).data}}catch(h){throw new Error(h)}return n.data}),c=k(),d=V(n).on(r,p=>({...p,error:null})).on(r.doneData,(p,h)=>({...p,data:h})).on(r.failData,(p,h)=>({...p,error:h.message})).on(o,(p,h)=>({...p,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Lg,events:zg,selectors:Mg}=Rg({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Yh,post:Jh}}),Fg=Object.freeze(Object.defineProperty({__proto__:null,effects:Lg,events:zg,selectors:Mg},Symbol.toStringTag,{value:"Module"})),Qa=k(),Za=k(),er=k(),tr=k(),Pi=L(async()=>{const i=(await qh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});P({clock:Pi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});P({clock:Pi.doneData,fn:()=>!0,target:er});P({clock:Pi.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:U.evokePopUpMessage});const ki=L(async()=>{try{return(await Gh())[0]}catch(e){throw new Error(e)}});P({clock:Za,target:Pi});P({clock:Qa,target:ki});const ir=k(),Bg=ki.pending,Hg=Pi.pending,Ug=V(!1).on(tr,(e,i)=>i),Wg=V(!1).on(er,(e,i)=>i),Vg=V(null).on(ki,()=>null).on(ki.failData,(e,i)=>i.message),Gg=V(null).on(ki.doneData,(e,i)=>i).on(ir,()=>null),nr={$error:Vg,$electronicInteractionStore:Gg,$completed:Ug,$done:Wg,$loading:Bg,$workerLoading:Hg},Zn={getElectronicInteraction:Qa,postElectronicInteraction:Za,changeCompleted:tr,clearStore:ir},qg=Object.freeze(Object.defineProperty({__proto__:null,events:Zn,stores:nr},Symbol.toStringTag,{value:"Module"})),Yg="Sep 07 2023 12:00:00 GMT+0300",sr="Sep 08 2023 12:00:00 GMT+0300",e$=e=>{const i=new Date;return i<new Date(Yg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(sr)?"Подача заявок закрыта":""},oe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},ao=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),oe(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),oe(n,"extraWeird")}},rt=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:ao(-30*11),maxValueInput:ao(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Hi={kvdCert:rt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:rt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:rt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:rt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},he=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var c,d,p;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const h=new Date(((c=a.value)==null?void 0:c.toString())??0);if(a.minValueInput){const f=new Date(a.minValueInput);if(h<f)return!0}if(a.maxValueInput){const f=new Date(a.maxValueInput);if(h>f)return!0}}const r=(p=(d=a.value)==null?void 0:d.toString())==null?void 0:p.length;return a.minValueLength&&r&&r<a.minValueLength?!0:i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(h=>!!h.files.length)})&&n&&s},Jg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Kg=()=>Object.keys(Fe).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),or=(e="")=>({[e]:{...Kg(),[Fe["settings-appearance"]]:{id:Fe["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Fe["settings-home-page"]]:{id:Fe["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Fe["settings-customize-menu"]]:{id:Fe["settings-customize-menu"],property:{pages:mn}},[Fe["settings-notifications"]]:{id:Fe["settings-notifications"],property:Jg}}});var Fe=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Fe||{});const es={settings:or(),error:null,completed:!1};let Ae;const Xg=()=>({settings:q(Xi).settings[Ae],error:q(Xi).error,completed:q(Xi).completed}),Qg=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},ar=L(e=>{Ae=e;const i=JSON.parse(localStorage.getItem(M.NewSettings)??"{}")[Ae];return Qg(i,or(e)[e])}),rr=k(),lr=k(),cr=k(),Xi=V(es).on(lr,(e,i)=>({...e,completed:i.completed})).on(ar.doneData,(e,i)=>({...e,settings:{[Ae]:i}})).on(rr,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Ae]:{...e.settings[Ae],[i]:{...e.settings[Ae][i],property:{...e.settings[Ae][i].property,[n]:s}}}}})).on(cr,()=>({...es}));Xi.watch(e=>{if(e!==es&&Ae){const i=JSON.parse(localStorage.getItem(M.NewSettings)??JSON.stringify({}));i[Ae]=e.settings[Ae],localStorage.setItem(M.NewSettings,JSON.stringify(i))}});const ei={useSettings:Xg},Ci={updateSetting:rr,changeCompleted:lr,clearStore:cr},Zg={getLocalSettingsFx:ar},vt=()=>{var a,r;const{settings:e}=ei.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,p=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?p?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),Ci.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},ef=u.button`
    display: flex;
    align-items: center;
    justify-content: ${({align:e="center"})=>e};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--reallyBlue)":i??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({width:e})=>e||"fit-content"};
    min-width: ${({minWidth:e})=>e&&e};
    text-decoration: none;
    flex-direction: ${({direction:e})=>e==="vertical"&&"column"};
    opacity: ${({isActive:e})=>e?1:.5};
    height: ${({height:e="40px"})=>e};
    ${({flipped:e})=>e&&"transform: rotate(180deg);"};

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:isactive {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({hoverBackground:e,isChosen:i,background:n})=>e??(i?"var(--blue)":n??"var(--search)")};
        filter: brightness(0.97);
    }

    .text {
        margin-top: ${({direction:e,text:i})=>e==="vertical"&&i&&"6px"};
    }

    .icon {
        margin-right: ${({text:e,direction:i})=>e&&i==="horizontal"?"7px":"0"};
        width: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"fit-content"};
        min-width: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"fit-content"};
        height: ${({direction:e,text:i})=>e==="vertical"||!i?"20px":"15px"};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 100%;
            height: 100%;
            max-width: 18px;
            max-height: 18px;
            margin-right: 0 !important;
        }
    }

    ${X.isTablet} {
        font-size: 12px;
        height: ${({height:e="36px"})=>e};
        position: ${({fixedInMobile:e})=>e&&"absolute"};
        z-index: ${({fixedInMobile:e})=>e&&"5"};
        bottom: 10px;
        right: 10px;

        .text {
            margin-top: ${({direction:e,shrinkTextInMobile:i})=>e==="vertical"&&!i?"4px":"0px"};
        }

        .icon {
            width: ${({direction:e})=>e==="vertical"?"30px":"15px"};
            min-width: ${({direction:e})=>e==="vertical"?"30px":"15px"};

            margin-right: ${({shrinkTextInMobile:e,text:i,direction:n})=>e||n==="vertical"||!i?"0px":"7px"};
            height: ${({direction:e})=>e==="vertical"?"30px":"15px"};

            svg {
                max-width: 23px;
                /* max-height: 23px; */
            }
        }

        span {
            display: ${({shrinkTextInMobile:e})=>e?"none":"flex"};
        }
    }
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:p,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:m,direction:x="horizontal",isActive:v=!0,height:b,notActiveClickMessage:S,flipped:D,...w}=e,T=N=>{v?s==null||s(N):S&&U.evokePopUpMessage({type:"failure",message:S,time:1e4})};return t.jsxs(ef,{text:!!n,onClick:T,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:p,direction:x,isActive:v,fixedInMobile:m,height:b,flipped:D,...w,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const ts=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},ro=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},tf=u.div`
    padding: ${({padding:e})=>e??"0"};
    position: ${({position:e})=>e??"relative"};
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"fit-content"};
    min-width: ${({minWidth:e})=>e};

    .bottom-wrapper {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`,nf=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],yn=u.div.withConfig({shouldForwardProp:e=>!nf.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?ro(n):ts(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?ts(i):ro(n)};
    gap: ${({gap:e})=>(e??5)+"px"};
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    color: var(--text);
    font-size: ${({fontSize:e})=>e??"1em"};
    overflow-x: ${({scroll:e})=>e&&"auto"};
    flex-wrap: ${({wrap:e})=>e&&"wrap"};
    padding: ${({innerPadding:e})=>e??"0"};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: ${({direction:e})=>e==="horizontal"&&"none"};
    }

    @media (max-width: 1000px) {
        flex-wrap: ${({wrapOnMobile:e})=>e?"wrap":"nowrap"};
        overflow-x: auto;
    }
`,sf=u.div`
    width: ${({size:e})=>e?e.width:"100px"};
    min-width: ${({size:e})=>e?e.width:"100px"};
    height: ${({size:e,shape:i})=>e?i==="circle"?e.width:e.height:"20px"};
    border-radius: ${({shape:e})=>e==="circle"?"100%":"10px"};
    background: var(--almostTransparent);
    margin: ${({margin:e})=>e};
    animation: ${({pulse:e})=>e&&"skeleton 1s infinite"};

    @keyframes skeleton {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
`;function K({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(sf,{pulse:s,size:i,shape:e,margin:n})}const of=u(yn)`
    height: 100%;
`,af=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(of,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(K,{...o,key:a}))}),jt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function rf({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:jt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:jt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:jt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:jt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:jt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:jt(n),children:i});default:return t.jsx("h1",{className:"title",style:jt(n),children:i})}}const lf=u.div`
    width: 100%;
    text-align: ${({align:e})=>e};
    margin-bottom: ${({bottomGap:e})=>typeof e=="string"?e:e?"10px":"0"};
    display: inline-flex;
    align-items: center;
    justify-content: ${({align:e})=>e?e==="left"?"flex-start":e==="right"?"flex-end":e:"center"};

    svg {
        min-width: ${({size:e})=>`${58-e*10}px`};
        height: ${({size:e})=>`${58-e*10}px`};
        margin-right: 8px;
        color: ${({iconColor:e})=>e};
    }
`,cf=u.span`
    color: var(--red);
    margin-right: 5px;
`,df=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function W(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:p=!0}=e;return p?t.jsxs(lf,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(rf,{size:o,width:r,children:[a&&t.jsx(cf,{children:"*"}),t.jsx(df,{width:r,children:s})]})]}):null}const pf=(e,i,n)=>n?"#fff":e?j[Ot[i].color].dark3:j[Ot[i].color].light3,uf=u.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>pf(i,e,n)};
    background: ${({type:e,solidBackground:i})=>j[Ot[e].color][i?"main":"transparent3"]};
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: var(--brLight);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    justify-content: flex-end;
    line-height: ${({lineHeight:e})=>e};
    align-items: ${({align:e})=>e==="left"?"flex-start":e==="center"?"center":"flex-end"};

    .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        gap: ${({gap:e})=>e??0};
    }

    a {
        text-decoration: underline;
        color: ${({type:e,isLightTheme:i})=>j[Ot[e].color][i?"main":"light2"]};
    }
`,hf=()=>t.jsx(af,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function te({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:f=!1,align:g="left",visible:m=!0,loading:x=!1}){if(!m)return null;const{theme:v}=vt();return t.jsxs(uf,{isLightTheme:v==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:f,children:[t.jsx(W,{size:4,align:g,icon:n===null?null:n??Ot[e].icon({}),children:a??Ot[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Xe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),x&&t.jsx(hf,{})]})}u.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .message {
        position: absolute;
        right: ${({direction:e})=>e==="vertical"?"calc(100% + 10px)":"auto"};
        left: ${({direction:e})=>"auto"};
        top: ${({direction:e})=>e==="vertical"?"0%":"auto"};
        bottom: ${({direction:e})=>e==="vertical"?"auto":"calc(100% + 10px)"};
    }

    .circle + .message {
        top: ${({direction:e})=>e==="vertical"?"0%":"calc(100% + 10px)"};
        left: ${({direction:e})=>e==="vertical"?"calc(100% + 10px)":"auto"};
        right: ${({direction:e})=>e==="vertical"?"100%":"auto"};
        bottom: auto;
    }

    .circle {
        min-width: ${({type:e})=>e==="big"?"30px":"20px"};
        min-height: ${({type:e})=>e==="big"?"30px":"20px"};
        background: ${({reached:e,current:i})=>i?"var(--reallyBlue)":e?j.green.main:j.grey.main};
        outline: 6px solid
            ${({reached:e,current:i})=>i?j.blue.transparent3:e?j.green.transparent3:j.grey.transparent3};
        margin: 6px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8em;
        font-weight: bold;
        cursor: pointer;
    }
`;const gf=u.div`
    min-width: ${({direction:e,distance:i})=>e==="vertical"?"5px":(i??100)+"px"};
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    height: ${({direction:e,distance:i})=>e==="vertical"?(i??100)+"px":"5px"};
    overflow: hidden;
    width: 100%;

    .inside-line {
        height: ${({direction:e,filled:i})=>e==="vertical"?(i??100)+"%":"5px"};
        border-radius: 10px;
        width: ${({direction:e,filled:i})=>e==="vertical"?"100%":(i??100)+"%"};
        background: ${({reached:e})=>e?j.green.main:"none"};
    }
`,ff=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(gf,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),be=u.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,xf="/assets/sad-emoji-0c60bf90.gif",ne=u.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
    word-wrap: break-word;
    overflow-wrap: normal;
`,mf=u.div`
    width: 100%;
    height: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    line-height: 1.7rem;

    span {
        font-weight: 500;
    }

    .image {
        margin-bottom: 10px;
        img,
        & > svg {
            min-width: ${({size:e})=>e??"100px"};
            height: ${({size:e})=>e??"100px"};
        }

        & > svg {
            margin: 20px 0;
            opacity: 0.6;
        }
    }

    .error-content {
        margin-top: 20px;
    }
`;function ue({text:e,image:i,size:n,children:s}){return t.jsxs(mf,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||xf,alt:"груфтим("}):i}),t.jsx(ne,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const bf="/assets/loading-c8041cd3.gif",vf=u.img`
    width: 40px;
`;function Ve(e){return t.jsx(vf,{...e,src:bf,alt:"loading",className:"loading-circle"})}const yf="/assets/logo-4d9aa449.png",_f="/assets/mospolytech-logo-white-b1e4f630.png",wf=u.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function _n({width:e,className:i,short:n=!1}){return t.jsx(wf,{width:e,className:i??"logo",children:t.jsx("img",{src:n?_f:yf,alt:"Logo"})})}const jf=u.img``;function Ss({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(K,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(jf,{src:i,alt:o,height:n,width:s})}const kf=u.div`
    .wrapper {
        position: relative;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
    }
    .circle-blue {
        position: absolute;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
        border-radius: 50%;
        background: ${({color:e})=>e??"var(--blue)"};
        animation: expand 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    .circle-blue-shadow {
        position: absolute;
        width: ${({size:e})=>e};
        height: ${({size:e})=>e};
        border-radius: 50%;
        opacity: 1;
    }

    .circle-white {
        position: absolute;
        top: 3px;
        left: 3px;
        width: ${({size:e})=>`calc(${e} - 6px)`};
        height: ${({size:e})=>`calc(${e} - 6px)`};
        transform: scale(0);
        border-radius: 50%;
        background: var(--block);
        animation: expand 0.4s 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    @keyframes expand {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .check-svg {
        position: absolute;
        width: ${({size:e})=>`calc(${e} + 10px)`};
        height: ${({size:e})=>`calc(${e} + 10px)`};
        top: -18px;
        left: -20px;
        width: 50px;
        height: 50px;
        top: -13px;
        left: -14px;
        transform-origin: center;
        animation: 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both scaleCheck;
    }

    .check-poly {
        fill: transparent;
        stroke-width: 3;
        stroke-dasharray: 36px 36px;
        stroke: ${({color:e})=>e??"var(--blue)"};
        animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.4s 1 both drawCheck;
    }

    @keyframes scaleCheck {
        0% {
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        100% {
            transform: scale(0.8);
        }
    }

    @keyframes drawCheck {
        0% {
            stroke-dashoffset: 36px;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
`;function dr({size:e,color:i}){return t.jsx(kf,{size:e,color:i?j[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Sf=u.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    textarea {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({textAreaAppearance:e})=>e?"var(--search)":"transparent"};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({textAreaAppearance:e})=>e?"10px":"0"};
        padding-right: 35px;
        min-height: 36px;
        height: fit-content;
        max-height: 120px;
        overflow-x: hidden;
        resize: none;

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: 4px solid var(--almostTransparentOpposite);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`;function Tf(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Sf,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(W,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const Ef=u.button`
    position: relative;
    width: ${({width:e})=>e??"100%"};
    padding: 10px;
    box-sizing: border-box;
    opacity: ${e=>e.isLoading?.5:1};
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({height:e})=>e??"40px"};
    min-height: ${({height:e})=>e??"40px"};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    background: ${({isDone:e,background:i,isActive:n})=>e?n?"var(--green)":"var(--greenTransparent)":i??(n?"var(--blue)":"var(--blueTransparent)")};
    animation: ${({pulsing:e})=>e&&"1s pulsing infinite"};

    @keyframes pulsing {
        0% {
            outline: 0px solid var(--blue);
        }
        100% {
            outline: 10px solid transparent;
        }
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @keyframes button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes short-button-animation-in {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes button-animation-out {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .inner-button {
        z-index: 1;

        .inner-button-success {
            animation: ${({repeatable:e})=>e?"button-animation-in 2s forwards":"short-button-animation-in 2s forwards"};
        }

        .inner-button-text {
            animation: button-animation-out 0.5s forwards;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--green);
        width: ${e=>e.completed?"2000px":"0"};
        height: ${e=>e.completed?"2000px":"0"};
        border-radius: 100%;
        transition: 0.6s;
        z-index: 0;
    }

    .loading-circle {
        position: relative;
        transform: none;
        left: auto;
        top: auto;
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 0.8em;
        height: 36px;
    }
`,ht=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:p,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:m=!1,repeatable:x=!0,alerts:v=!0})=>{l.useEffect(()=>{m&&v&&(U.evokePopUpMessage({message:c,type:"success"}),x&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const b=()=>{if(f&&!h&&!g)return i();v&&U.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Ef,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:f&&!h&&!m,onClick:b,isDone:h,width:n,height:s,repeatable:x,tabIndex:f&&!h?0:-1,pulsing:p&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Ip,{})," ",r]}):g?t.jsx(Ve,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},tn={small:"32px",middle:"36px",big:"44px"},Be=e=>({size:i})=>e[i],$f=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Pf=e=>{const i=e.target.selectionStart;let n=e.target.value.replace(/\D/g,""),s="";return n.length?e.target.value.length!==i?/\D/g.test(e.nativeEvent.data??"")?n:e.target.value:(n[0]==="9"&&(n="7"+n),s="+7"+" ",n.length&&(s+="("+n.substring(1,4)),n.length>=5&&(s+=") "+n.substring(4,7)),n.length>=8&&(s+="-"+n.substring(7,9)),n.length>=10&&(s+="-"+n.substring(9,11)),s):""},Cf=(e,i)=>{var a,r,c,d,p,h,f,g,m,x,v,b,S,D;const n=e.replace(/\D/g,""),s=e.match(new RegExp("(?<=\\d)[а-яА-Я]"));let o="";if(!e)return"";switch(i){case"БС":if(e==="БС")return"";o="БС ";const w=e.substring(3).match(/^[а-яА-Я]{1,2}/);return!w||!((r=(a=w[0])==null?void 0:a.toUpperCase())!=null&&r.match(/^[А-Я]{1,2}$/))?o:(o+=w[0].toUpperCase(),(w[0].length===1?e[3]&&!e[5]&&e[4]===" ":e[4]&&!e[6]&&e[5]===" ")?o+" ":(n.length>0&&(o+=" "),o+=n.substring(0,3),!s||!((d=(c=s[0])==null?void 0:c.toLowerCase())!=null&&d.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,10))));case"ПР":return e==="ПР"?"":(o="ПР ",o+=n.substring(0,4),!s||!((h=(p=s[0])==null?void 0:p.toLowerCase())!=null&&h.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,8)));case"АВ":return e==="АВ"?"":(o="АВ ",o+=n.substring(0,4),!s||!((g=(f=s[0])==null?void 0:f.toLowerCase())!=null&&g.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,8)));case"ПК":return e==="ПК"?"":(o="ПК ",o+=n.substring(0,3),!s||!((x=(m=s[0])==null?void 0:m.toLowerCase())!=null&&x.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,7)));case"МИХ":return e==="МИХ"?"":(o="МИХ ",o+=n.substring(0,4),!s||!((b=(v=s[0])==null?void 0:v.toLowerCase())!=null&&b.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,9)));case"СС":return e==="СС"?"":(o="СС ",o+=n.substring(0,4),!s||!((D=(S=s[0])==null?void 0:S.toLowerCase())!=null&&D.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,9)));default:return e}},Of=e=>e.replace(/\D/g,"").substring(0,4),Hn={groupMask:$f,phoneMask:Pf,cabinetMask:Cf,innerPhoneMask:Of},Af=(e,i,n,s,o,a,r,c)=>{const[d,p]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const g=l.useCallback(b=>b.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:b=>{b.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(b=>b==="password"?"text":"password"),handleOnChange:b=>{if(i(c?r?r(b.target.value,e):n==="tel"?Hn.phoneMask(b):n==="email"?g(b.target.value):n==="cabinet"?Hn.cabinetMask(b.target.value,b.target.value.substring(0,2)):n==="innerPhone"?Hn.innerPhoneMask(b.target.value):b.target.value:b.target.value),n==="date"&&(o||a)){const S=new Date(b.target.value);let D=!1;if(o){const w=new Date(o);D=S<w}if(a&&!D){const w=new Date(a);D=S>w}f(D)}}}},Df=u.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .left-icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    .message {
        margin-bottom: 5px;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({inputAppearance:e})=>e?"var(--theme-1)":"transparent"};
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({leftIcon:e,inputAppearance:i})=>e?"30px":i?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        height: ${Be(tn)};
        max-height: ${Be(tn)};
        border: ${({danger:e})=>e&&`2px solid ${j.red.main}`};

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: ${({inputAppearance:e})=>e&&"4px solid var(--almostTransparentOpposite)"};
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    .loading-circle {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`,gt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:p,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:m,alertMessage:x,loading:v=!1,isActive:b=!0,inputAppearance:S=!0,mask:D=!1,autocomplete:w=!1,minValue:T=void 0,maxValue:N=void 0,minLength:z=void 0,maxLength:I=void 0,hideCross:se=!1,stepSize:H=.1,size:Y="middle"}=i,{inputType:ce,buttonOnClick:Pe,danger:Te,handleOnChange:qe,phoneMaskKeyDown:Ee}=Af(s,o,g,m,T,N,h,D),xe=s&&g==="date"?Rp(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(Df,{leftIcon:!!a,isActive:b,inputAppearance:S,width:d,danger:Te,minWidth:p,size:Y,children:[t.jsx(W,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(te,{type:"alert",visible:!!x,icon:t.jsx(Lp,{}),title:x??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:T,max:N,minLength:z,maxLength:I,step:H??void 0,type:ce,placeholder:f,value:xe,autoComplete:w?"on":"off",onKeyDown:Ft=>g==="tel"&&Ee(Ft),onChange:qe,required:c,readOnly:!b,ref:n}),g!=="password"?!!(s!=null&&s.length)&&S&&(v?t.jsx(Ve,{}):!se&&t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ce==="password"?t.jsx(zp,{}):t.jsx(ms,{}),tabIndex:-1,onClick:Pe})]})}),Nf=u.div`
    user-select: none;
    min-width: 56px;
    height: 30px;

    .checkbox {
        display: none;
    }

    .toggle-body {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        background: var(--theme-2);
        cursor: pointer;
        border-radius: 50px;
        padding: 4px;
        transition: 0.2s background;
    }

    .toggle-circle {
        height: 100%;
        background: #fff;
        width: 22px;
        display: block;
        border-radius: 100%;
        transition: 0.2s;
    }

    .checkbox:checked + .toggle-body .toggle-circle {
        margin-left: calc(100% - 22px);
    }

    .checkbox:checked + .toggle-body {
        background: #6290e4;
    }

    .checkbox:active + .toggle-body .toggle-circle {
        transform: scale(0.9);
    }
`,If="/assets/thinking-emoji-f3c10f79.gif",Rf=["loading"],Lf=u.div.withConfig({shouldForwardProp:e=>!Rf.includes(e)})`
    width: 100%;
    padding: 10px;
    height: 100%;

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
        opacity: ${({loading:e})=>e?1:0};
        visibility: ${({loading:e})=>e?"visible":"hidden"};
        transform: scale(${({loading:e})=>e?"1":"0.98"});
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;

        img {
            width: 40px;
        }
    }

    .content {
        transition: 0.2s;
        opacity: ${({loading:e})=>e?0:1};
        visibility: ${({loading:e})=>e?"hidden":"visible"};
        /* transform: scale(${({loading:e})=>e?"0.98":"1"}); */
        height: 100%;
    }

    .reload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);

        & > * + * {
            margin-top: 10px;
        }
    }

    @media (max-width: 550px) {
        padding: 10px;
    }
`,ze=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Lf,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ue,{text:n,image:a&&If,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(hn,{})})})}):t.jsx(Ve,{})}),t.jsx("div",{className:"content",children:e})]})),zf=u.a`
    display: flex;
    align-items: center;
    justify-content: ${({align:e})=>e??"center"};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--blue)":i??"var(--search)"};
    padding: ${({padding:e})=>e??"10px"};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({width:e})=>e||"fit-content"};
    text-decoration: none;
    font-size: 0.8em;
    height: ${({height:e="40px"})=>e};
    min-height: ${({minHeight:e="40px"})=>e};
    opacity: ${({isActive:e})=>e?1:.5};
    pointer-events: ${({isActive:e})=>!e&&"none"};

    button {
        outline: none;
    }

    &:focus-visible {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        margin-right: ${({text:e})=>e?"7px":"0"};
        width: 15px;
        height: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: 36px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`,Mf=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:p,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(zf,{text:!!i,onClick:m=>f&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Oi=l.memo(Mf),wn=u.div`
    width: 100%;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"700px"};
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--block-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    // TODO: delete this line but all applications pages must be with 'hiddenTitle'
    // attribute (or another hidden title solution)
    padding-top: ${({noHeader:e})=>e?"20px":"80px"};

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,Ff=u.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
    text-decoration: none;
    color: var(--text);
    padding: 5px;
    border-radius: var(--brLight);

    .title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 0.8em;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 28px;
        width: 28px;
        height: 28px;

        svg {
            width: 21px;
            height: 21px;
        }
    }
`,Bf=({title:e,link:i,type:n})=>t.jsxs(Ff,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(A,{}):t.jsx(Mp,{})}),t.jsx("div",{className:"title",children:e})]}),Hf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Uf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Wf=()=>ge(Vf),pr=k(),ur=k(),hr=k(),Vf=V(Uf).on(pr,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Hf(n,220,s),open:!0,content:i,type:o})).on(ur,e=>({...e,open:!1})).on(hr,(e,{position:i})=>({...e,position:i})),Ie={open:pr,close:ur,changePosition:hr},Gf={useContextMenu:Wf},qf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},Un=new Set,gr=(e,i)=>{l.useEffect(()=>{const n=o=>{Un.add(o.which),!e.slice(0,e.length-1).find(r=>!Un.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{Un.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},it=u.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: ${({justifyContent:e})=>e??"space-between"};
    background: ${({background:e})=>e??"var(--block)"};
    line-height: ${({lineHeight:e})=>e};
    border-radius: var(--brLight);
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    box-shadow: ${({shadow:e})=>(e??!0)&&"var(--very-mild-shadow)"};
    padding: ${({padding:e})=>e??"20px"};
    height: ${({height:e})=>e??"330px"};
    max-width: ${({maxWidth:e})=>e??"800px"};
    width: ${({width:e})=>e??"100%"};
    color: var(--text);
    gap: ${({gap:e})=>e??"0"};
    max-height: ${({maxHeight:e})=>e};
    min-height: ${({minHeight:e})=>e};

    .list {
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: column;
        overflow-y: auto;
        padding-right: 5px;
    }

    ${X.isMobile} {
        flex-direction: column;
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,$=u.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({$wrap:e})=>e&&"wrap"};
    padding: ${({p:e})=>e};
    margin: ${({m:e})=>e};
`,je=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},fr=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"Х","]":"ъ","}":"Ъ","'":"э",";":"ж",",":"б",".":"ю","<":"Б",">":"Ю",":":"Ж",'"':"Э"};let n="";for(let s=0;s<e.length;s++){const o=je(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},xr=e=>/[A-Za-z]/.test(e),Yf=u.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${j.blue.transparent2};
    }

    &:focus-visible {
        background: ${j.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,mr=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!xr(e))return null;const s=fr(e),o=()=>i(s);return t.jsxs(ne,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Yf,{tabIndex:10,children:s})]})};function ti(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function ft(e,i,n=0){return e>i?n:e<n?i:e}const Jf=u.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,Kf=u(it)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,Xf=u.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?j.blue.main:"transparent"};
    font-size: 0.85rem;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 16px;
            height: 16px;
        }
    }

    &:hover {
        background: ${({selected:e})=>e?j.blue.main:"var(--theme-1)"};
    }
`,Ai=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:p,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[m,x]=l.useState(0),[v,b]=l.useState(!1),S=l.useRef(null),D=l.useRef(null),w=l.useRef(null);ti(S,()=>b(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var I;return(I=w.current)==null?void 0:I.focus()},50)},[c]);const T=I=>{var se,H;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),I.key==="ArrowDown"?((se=D.current)==null||se.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&x(ft(m+1,((a==null?void 0:a.length)??1)-1,0))):I.key==="ArrowUp"?((H=D.current)==null||H.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&x(ft(m-1,((a==null?void 0:a.length)??1)-1,0))):I.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),b(!1),h==null||h(a==null?void 0:a[m??0])):x(0)},N=I=>()=>{x(I),d((a==null?void 0:a[I].title)??""),b(!1),h==null||h(a==null?void 0:a[I])},z=()=>{a!=null&&a.length&&b(!0)};return t.jsxs(Jf,{width:i,onKeyDown:T,onMouseDown:z,ref:S,children:[t.jsx(gt,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(qt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:p,ref:w}),t.jsx(mr,{setValue:d,value:e,visible:f}),v&&t.jsx(Kf,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:T,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:I,icon:se},H)=>{const Y=m===H;return t.jsxs(Xf,{onClick:N(H),ref:Y?D:null,selected:Y,children:[se&&t.jsx("div",{className:"icon",children:se}),t.jsx("span",{children:I})]},I+H)})})]})},jn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},lo={small:"30px",middle:"44px",big:"68px"},br={small:"8px",middle:"10px",big:"16px"},Qf={small:"0.8rem",middle:"0.9rem",big:"1rem"},Zf={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},ex=u.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Be(lo)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Be(br)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Be(lo)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${X.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`,tx=u.div`
    width: 100%;
    height: 100%;
    min-width: calc(100% / ${({elementsVisible:e})=>e});
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: ${({condition:e})=>e?.7:.3};
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    color: var(--text);

    & > b {
        word-break: normal;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: ${Be(Qf)};
    }

    &:hover {
        filter: ${({condition:e})=>e&&"brightness(0.8)"};
    }

    &.active {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }

    ${X.isMobile} {
        & > b {
            font-size: ${Be(Zf)};
        }
    }
`,ix=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(tx,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),nx=l.memo(ix),sx=u.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Be(br)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,ox=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(sx,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},ax=l.memo(ox),rx=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:p}=jn();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??p;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[p,d.current]),t.jsx(ex,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(ax,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(nx,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},Ts=l.memo(rx),lx=300,kn=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=lx})=>{const[c,d]=l.useState(e??""),[p,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else p.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,f]},At=u.span`
    color: #fff;
    background: ${({color:e})=>j[e??"red"].light1};
    position: ${({position:e})=>e??"absolute"};
    box-shadow: ${({color:e,shadow:i})=>i&&`0 0 35px ${j[e??"red"].main}`};
    top: ${({top:e})=>e??"50%"};
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"50%"};
    outline: ${({outline:e})=>e};
    font-size: 0.6em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 0 5px;
    min-width: 16px;
    font-weight: bold;
    height: 16px;
    display: ${({visible:e})=>!e&&"none"};

    &::before {
        content: '';
        background: ${({color:e})=>j[e??"red"].light1};
        display: block;
        width: 100%;
        height: 16px;
        border-radius: 10px;
        position: absolute;
        inset: 0;
        top: 0px;
        z-index: -1;
        animation: ${({pulsing:e})=>e?"pulse-animation 1s infinite linear":"none"};
    }

    @keyframes pulse-animation {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        90% {
            transform: scale(2);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`,cx=u.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e??"15px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({backgroud:e})=>j[e]?j[e].main:e};
    transition: 0.2s;

    svg {
        color: #fff;
        width: 100%;
        height: 100%;
        scale: 0.5;
    }
`,yt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(cx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(At,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},vr=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:p=!1})=>{const h=b=>{n(i(b,e))},f=()=>{n(null)},[g,m,x]=kn({onDebounce:h,onClear:f}),v=b=>{m(b),o&&o(b)};return t.jsx(Ai,{value:g??"",setValue:v,inputAppearance:s,placeholder:d,validationCheck:p,loading:c?x:!1,hints:a,width:r})},dx=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Nf,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),yr=u.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,px=u(yr)`
    background: var(--almostTransparentOpposite);
`,ux=u(yr)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>j[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,_r=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Se,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(px,{},a)),t.jsx(ux,{color:n,current:i})]}),hx=u.label`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:i})=>e?i?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:i})=>e?i?1:.8:1});
    display: flex;
    align-items: center;
    opacity: ${({isActive:e})=>!e&&.7};
    cursor: pointer;

    input[type='checkbox'] {
        display: none;
    }

    .checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: ${({fontSize:e})=>e??"1rem"};
        margin-left: 8px;
    }

    &:hover > .checkbox-square {
        box-shadow: 0 0 1px 5px var(--theme-3);
    }
`,gx=u.div`
    min-width: 16px;
    width: 16px;
    height: 16px;
    border: 2px solid var(--grey);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s box-shadow;

    .checkbox:checked + & {
        background: var(--reallyBlue);
        border: 2px solid var(--reallyBlue);
    }

    svg {
        color: #fff;
        width: 13px;
        height: 13px;
    }

    &:focus-visible {
        outline: 4px solid var(--theme-4);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,He=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(hx,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(gx,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(pn,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},wr=e=>e.split("/")[1],fx=e=>e*1024*1024,xx=(e,i)=>(i??Th).indexOf(e.type)!==-1,co=(e,i,n,s,o=Eh)=>{if(n&&i.length+e.length>n)return U.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return xx(e[a],s)?e[a].size>fx(o)?(U.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),U.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>wr(r))}`,type:"failure",time:5e3}),i)},mx=u.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${j.blue.main}`:`2px dashed ${j.grey.main}`};
    background: ${({showPulse:e})=>e?j.blue.transparent3:""};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({isActive:e})=>e&&"pointer"};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.4};
    position: relative;

    .info {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 4px;
        border-radius: var(--brLight);
        background: red;
        pointer-events: none;
        width: calc(100% + 6px);

        .info-item {
            padding: 5px 10px;
            background: var(--block);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: 600;
            pointer-events: none;
        }
    }

    input[type='file'] {
        display: none;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;
        color: var(--text);
        pointer-events: none;

        b {
            font-weight: 600;
            margin-bottom: 4px;
        }

        .front-icon {
            z-index: 2;
        }

        .icons-behind {
            z-index: 1;
            position: absolute;
            filter: grayscale(1);
            opacity: 0.7;
            transform: scale(0.8);

            & .icon-1 {
                opacity: 0;
                animation: ${({showPulse:e})=>e?"behind-1 0.5s forwards":""};
            }
            & .icon-2 {
                opacity: 0;
                animation: ${({showPulse:e})=>e?"behind-2 0.5s forwards":""};
            }

            @keyframes behind-1 {
                0% {
                    opacity: 0;
                    transform: translate(10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(-3px, -15px) rotate(-10deg);
                }
            }
            @keyframes behind-2 {
                0% {
                    opacity: 0;
                    transform: translate(-10px, -15px) rotate(0deg);
                }
                100% {
                    opacity: 1;
                    transform: translate(3px, -15px) rotate(10deg);
                }
            }
        }

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            transition: 0.2s;
            animation: ${({showPulse:e})=>e?"jumping 1s forwards":""};

            @keyframes jumping {
                0% {
                    transform: translateY(0%);
                }
                100% {
                    transform: translateY(-5%) scale(1.1);
                }
            }
        }
    }
`,Ne=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},bx=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),p=x=>{const v=x.target.files;v!=null&&v.length&&n(co(v,e,i,o,a))},h=x=>{x.preventDefault()},f=x=>{x.preventDefault(),d(!1);const v=x.dataTransfer.files;v.length&&n(co(v,e,i,o,a))},g=x=>{x.preventDefault(),d(!0)},m=x=>{x.preventDefault(),d(!1)};return t.jsxs(mx,{isActive:s,showPulse:c,onDragOver:x=>s&&h(x),onDragEnter:x=>s&&g(x),onDragLeave:x=>s&&m(x),onDrop:x=>s&&f(x),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(Bn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(Bn,{className:"icon-1"}),t.jsx(Bn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(ne,{align:"center",children:t.jsx(Ne,{words:[`Форматы: ${o?o.map(x=>wr(x)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},vx=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},yx=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),_x=u.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${j.grey.transparent3};
    border-radius: var(--brLight);

    .file-body {
        display: flex;
        gap: 8px;
        align-items: center;

        .name-and-size {
            display: flex;
            flex-direction: column;

            .file-name {
                font-size: 0.8em;
            }
        }

        .image-container {
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--theme);
            border-radius: var(--brLight);

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`,wx=({file:e,files:i,setFiles:n})=>{const{open:s}=Z(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(Ss,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>lt.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(yx(r,e.name,i))});return t.jsxs(_x,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Fp,{}):t.jsx(Bp,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ne,{fontSize:"0.7em",children:vx(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Xe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},jx=({files:e,setFiles:i})=>t.jsx(Se,{title:"Список файлов",visible:!!e.length,onDelete:()=>lt.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(wx,{file:n,files:e,setFiles:i},n.name))}),jr=e=>t.jsxs(Se,{gap:12,children:[t.jsx(bx,{...e}),t.jsx(jx,{files:e.files,setFiles:e.setFiles})]}),kx=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Sx=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(kx,{children:[t.jsx(He,{...e}),n&&t.jsx(jr,{...i})]}),Tx=u.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;

    .date-interval-inputs {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,kr=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),p=new Date(d);p.setDate(d.getDate()+r),n[1]=oe(p,"extraWeird")}return t.jsxs(Tx,{children:[t.jsx(W,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(te,{title:"Внимание",type:"alert",icon:t.jsx(wi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(gt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(gt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Ex=(e,i)=>{var v,b,S;const{width:n}=jn(),s=l.useRef(null),[o,a]=l.useState(!1),[r,c]=l.useState(!1),[d,p]=l.useState(0),[h,f]=l.useState(0),g=((v=s.current)==null?void 0:v.clientWidth)??1,m=Math.ceil((((b=s.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{s.current&&(s.current.scrollLeft=d,s.current.clientWidth<s.current.scrollWidth?(a(!0),c(!0)):(c(!1),a(!1)))},[d,(S=s.current)==null?void 0:S.clientWidth,n,i]),{listRef:s,leftArrow:o,rightArrow:r,setScrollLeft:p,pageOffset:g,amountOfPages:m,currentPage:h,setCurrentPage:f,handleScroll:D=>{f(Math.ceil(D.currentTarget.scrollLeft/(g+(e??0))))}}},$x=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:p,onWatchMore:h,onDelete:f,showPages:g,innerPadding:m,minWidth:x,wrapOnMobile:v,position:b,direction:S="vertical",verticalAlign:D="top",horizontalAlign:w="left",scroll:T=!0,visible:N=!0,...z}=e;if(!N)return null;const{listRef:I,leftArrow:se,rightArrow:H,handleScroll:Y,setScrollLeft:ce,pageOffset:Pe,amountOfPages:Te,currentPage:qe}=Ex(s,n);return t.jsxs(tf,{padding:r,position:b,width:o,minWidth:x,height:a,children:[t.jsxs(W,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(_,{icon:t.jsx(Ct,{}),width:"35px",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),h&&t.jsx(_,{width:"50px",height:"15px",background:j.blue.transparent3,textColor:j.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(yn,{verticalAlign:D,horizontalAlign:w,direction:S,ref:I,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:T,wrapOnMobile:v,onScroll:Y,...z,children:n}),(H||se)&&t.jsxs("div",{className:"bottom-wrapper",children:[se&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx($i,{}),className:"left-button",textColor:j.grey.main,onClick:()=>{ce(Ee=>{var xe;return ft(Ee-Pe-(s??0),((xe=I.current)==null?void 0:xe.scrollWidth)??0)})}}),g&&t.jsx(_r,{direction:"horizontal",current:qe,amount:Te}),H&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Qe,{}),className:"right-button",textColor:j.grey.main,onClick:()=>{ce(Ee=>{var xe;return ft(Ee+Pe+(s??0),((xe=I.current)==null?void 0:xe.scrollWidth)??0)})}})]})]})},Se=le.memo($x),Px=()=>t.jsx("div",{className:"left",children:t.jsxs(Se,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(_n,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Se,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(ee,{to:Hs,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ji,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ee,{to:cc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Hp,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ee,{to:lc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(wi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ee,{to:dc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(wi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(be,{}),t.jsx(ee,{to:rc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Up,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Oi,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(gn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),Sn=()=>{const{search:e}=Qt();return le.useMemo(()=>new URLSearchParams(e),[e])},Cx=()=>{const e=Sn(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),p=!!a&&!!s,h=It.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=v=>{d(v.getModifierState("CapsLock")),v.key==="Enter"&&h({login:s,password:a})},m=v=>{It.changeSavePassword({savePassword:v})},x=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:p,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:m,handleKeyPress:g,handleLogin:x,setPassword:r,setLogin:o}},Ox=()=>{const{loading:e,error:i,data:n}=me.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:p,handleLogin:h,setPassword:f,setLogin:g}=Cx();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Se,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(_n,{width:"50px",short:!0,className:"logo second"}),t.jsx($,{jc:"space-between",children:t.jsx(W,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(te,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Se,{gap:16,scroll:!1,children:[t.jsx(W,{size:4,align:"left",children:"Вход"}),t.jsx(ne,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(te,{type:"failure",visible:!!i,children:i}),t.jsx(te,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(gt,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(gt,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(He,{text:"Оставаться в системе",checked:n.savePassword,setChecked:p})]}),t.jsx(ht,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Ax=u(it)`
    overflow: hidden;
    box-shadow: ${({isAuthenticated:e})=>e?"none":"0 0 1px var(--theme-mild-opposite)"};
    min-height: 480px;
    transition: 0.2s box-shadow;
    position: relative;
    background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--block)"};

    .left,
    .right {
        height: 100%;
        padding: 22px;
    }

    .right {
        min-width: 350px;
        width: 350px;
        opacity: ${({isAuthenticated:e})=>+!e};
    }

    .left {
        min-width: 320px;
        width: 320px;
        transition: 0.2s background, 0.2s opacity;
        background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--theme-1t)"};
        padding-top: ${({isAuthenticated:e})=>e?"60px":"22px"};

        & > * > * > *:not(.logo) {
            opacity: ${({isAuthenticated:e})=>+!e};
        }
    }

    .logo {
        transform-origin: left;
    }

    .logo.first {
        z-index: 100;
        animation: ${({isAuthenticated:e})=>e&&"logoMove 0.8s forwards ease-in-out"};

        @keyframes logoMove {
            0% {
                position: absolute;
                top: 22px;
                left: 22px;
                transform: scale(1) translateY(0%) translateX(0%);
            }
            100% {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: scale(2) translateY(-25%) translateX(-50%);
            }
        }
    }

    .logo.second {
        display: none;
    }

    @media (max-width: 675px) {
        max-width: 400px;
        max-height: 90%;
        flex-direction: column-reverse;
        overflow-y: auto;
        justify-content: flex-start;

        .right {
            opacity: 1;

            & > * > * > *:not(.logo):not(button) {
                opacity: ${({isAuthenticated:e})=>+!e};
            }

            button {
                opacity: ${({isAuthenticated:e})=>e&&"0"};
            }
        }

        .left {
            padding-top: 22px;
        }

        .logo.first {
            display: none;
        }

        .logo.second {
            display: block;
            z-index: 100;
            animation: ${({isAuthenticated:e})=>e&&"logoMoveMobile 0.8s forwards ease-in-out"};

            @keyframes logoMoveMobile {
                0% {
                    position: absolute;
                    top: 22px;
                    left: 50%;
                    transform: scale(1) translateY(0%) translateX(-50%);
                }
                100% {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: scale(2) translateY(-25%) translateX(-50%);
                }
            }
        }

        .left,
        .right {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        box-shadow: none;
        border-radius: 0px;
        height: 100%;
        max-height: 100%;
    }
`,Dx=()=>{const{data:{isAuthenticated:e}}=me.useUser();return t.jsxs(Ax,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Px,{}),t.jsx(Ox,{})]})},Nx=u.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${X.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,Ix=()=>t.jsx(Nx,{children:t.jsx(Dx,{})}),_e=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ue,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(gn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Rx="modulepreload",Lx=function(e){return"/"+e},po={},y=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Lx(a),a in po)return;po[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Rx,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((h,f)=>{p.addEventListener("load",h),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},zx=l.lazy(()=>y(()=>import("./index-6c17b3ef.js"),["assets/index-6c17b3ef.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),Mx=l.lazy(()=>y(()=>import("./index-77e7dbb4.js"),["assets/index-77e7dbb4.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-88fd493a.js"])),uo=l.lazy(()=>y(()=>import("./index-49c94c75.js"),["assets/index-49c94c75.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js"])),Fx=l.lazy(()=>y(()=>import("./index-0f2dc362.js"),["assets/index-0f2dc362.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),Bx=l.lazy(()=>y(()=>import("./index-4f768f66.js"),["assets/index-4f768f66.js","assets/vendor-cbee1f3c.js","assets/index-d5778bf8.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-8c9aa3b2.js","assets/form-a103149f.js","assets/send-form-83e7f9de.js"])),Hx=l.lazy(()=>y(()=>import("./form-a103149f.js"),["assets/form-a103149f.js","assets/vendor-cbee1f3c.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/send-form-83e7f9de.js"])),Sr=l.lazy(()=>y(()=>import("./index-a2210750.js"),["assets/index-a2210750.js","assets/vendor-cbee1f3c.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>bv),void 0));const Ux=l.lazy(()=>y(()=>import("./index-8f4e09f7.js"),["assets/index-8f4e09f7.js","assets/vendor-cbee1f3c.js","assets/index-32809bd8.js"])),Wx=l.lazy(()=>y(()=>import("./index-00bb092e.js"),["assets/index-00bb092e.js","assets/vendor-cbee1f3c.js","assets/index-c3c04a85.js"])),Vx=l.lazy(()=>y(()=>import("./index-a3e398c2.js"),["assets/index-a3e398c2.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Gx=l.lazy(()=>y(()=>import("./index-e6eae905.js"),["assets/index-e6eae905.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js"])),qx=l.lazy(()=>y(()=>import("./index-76ed49c2.js"),["assets/index-76ed49c2.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-88fd493a.js"])),Yx=l.lazy(()=>y(()=>import("./index-32f4e7c6.js"),["assets/index-32f4e7c6.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-88fd493a.js"])),Jx=l.lazy(()=>y(()=>import("./index-eabcb2a5.js"),["assets/index-eabcb2a5.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-88fd493a.js"])),Kx=l.lazy(()=>y(()=>import("./index-5a93a52d.js"),["assets/index-5a93a52d.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-88fd493a.js"])),Xx=l.lazy(()=>y(()=>import("./index-acdbb590.js"),["assets/index-acdbb590.js","assets/vendor-cbee1f3c.js","assets/ui-05581747.js"])),Qx=l.lazy(()=>y(()=>import("./index-07101e0b.js"),["assets/index-07101e0b.js","assets/vendor-cbee1f3c.js","assets/ui-05581747.js"])),Zx=l.lazy(()=>y(()=>import("./index-0c81022b.js"),["assets/index-0c81022b.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-88fd493a.js"])),em=l.lazy(()=>y(()=>import("./index-43a94964.js"),["assets/index-43a94964.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-88fd493a.js"])),tm=l.lazy(()=>y(()=>import("./index-c550fdb9.js"),["assets/index-c550fdb9.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-88fd493a.js"])),im=l.lazy(()=>y(()=>import("./index-c44e2222.js"),["assets/index-c44e2222.js","assets/vendor-cbee1f3c.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-8c9aa3b2.js"])),nm=l.lazy(()=>y(()=>import("./index-99208e85.js"),["assets/index-99208e85.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),sm=l.lazy(()=>y(()=>import("./index-63333024.js"),["assets/index-63333024.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),om=l.lazy(()=>y(()=>import("./index-130ab7c4.js"),["assets/index-130ab7c4.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-88fd493a.js"])),am=l.lazy(()=>y(()=>import("./index-57314b16.js"),["assets/index-57314b16.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-88fd493a.js"])),rm=l.lazy(()=>y(()=>import("./index-30937694.js"),["assets/index-30937694.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-88fd493a.js"])),lm=l.lazy(()=>y(()=>import("./index-b8e6fc4c.js"),["assets/index-b8e6fc4c.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-88fd493a.js"])),cm=l.lazy(()=>y(()=>import("./index-71a55de3.js"),["assets/index-71a55de3.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),dm=l.lazy(()=>y(()=>import("./index-fcab98fd.js"),["assets/index-fcab98fd.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-88fd493a.js"])),pm=l.lazy(()=>y(()=>import("./index-d5017da5.js"),["assets/index-d5017da5.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-88fd493a.js"])),um=l.lazy(()=>y(()=>import("./index-52c8bad7.js"),["assets/index-52c8bad7.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-88fd493a.js"])),hm=l.lazy(()=>y(()=>import("./index-242a5d2b.js"),["assets/index-242a5d2b.js","assets/vendor-cbee1f3c.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-88fd493a.js"])),gm=l.lazy(()=>y(()=>import("./index-11b45d31.js"),["assets/index-11b45d31.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),fm=l.lazy(()=>y(()=>import("./index-e48c2359.js"),["assets/index-e48c2359.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),xm=l.lazy(()=>y(()=>import("./index-40cbb87c.js"),["assets/index-40cbb87c.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),mm=l.lazy(()=>y(()=>import("./index-d36e0cea.js"),["assets/index-d36e0cea.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),bm=l.lazy(()=>y(()=>import("./index-ceb25c77.js"),["assets/index-ceb25c77.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),vm=l.lazy(()=>y(()=>import("./index-75e8c6a4.js"),["assets/index-75e8c6a4.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),ym=l.lazy(()=>y(()=>import("./index-95ee87dc.js"),["assets/index-95ee87dc.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),_m=l.lazy(()=>y(()=>import("./index-3826e815.js"),["assets/index-3826e815.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),wm=l.lazy(()=>y(()=>import("./index-46973dc4.js"),["assets/index-46973dc4.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),jm=l.lazy(()=>y(()=>import("./index-f1caf0e2.js"),["assets/index-f1caf0e2.js","assets/vendor-cbee1f3c.js","assets/index-88fd493a.js","assets/index-028241ea.js","assets/send-form-83e7f9de.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),km=l.lazy(()=>y(()=>import("./index-6c71e437.js"),["assets/index-6c71e437.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>bl),void 0));const Es=l.lazy(()=>y(()=>import("./index-4062f441.js"),["assets/index-4062f441.js","assets/vendor-cbee1f3c.js"])),Sm=l.lazy(()=>y(()=>import("./index-e73264cc.js"),["assets/index-e73264cc.js","assets/vendor-cbee1f3c.js"])),Tm=l.lazy(()=>y(()=>import("./index-4c75df1f.js"),["assets/index-4c75df1f.js","assets/vendor-cbee1f3c.js"])),Em=l.lazy(()=>y(()=>import("./index-da9c497b.js"),["assets/index-da9c497b.js","assets/vendor-cbee1f3c.js"])),$m=l.lazy(()=>y(()=>import("./index-ac12246a.js"),["assets/index-ac12246a.js","assets/vendor-cbee1f3c.js"])),Pm=l.lazy(()=>y(()=>import("./index-31fada3b.js"),["assets/index-31fada3b.js","assets/vendor-cbee1f3c.js"])),Cm=l.lazy(()=>y(()=>import("./index-6ebdcd2a.js"),["assets/index-6ebdcd2a.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),Om=l.lazy(()=>y(()=>import("./index-7d375dca.js"),["assets/index-7d375dca.js","assets/vendor-cbee1f3c.js","assets/get-default-subdivision-17957fb0.js"])),Am=l.lazy(()=>y(()=>import("./index-d59b6083.js"),["assets/index-d59b6083.js","assets/vendor-cbee1f3c.js"])),Dm=l.lazy(()=>y(()=>import("./index-68a52bdf.js"),["assets/index-68a52bdf.js","assets/vendor-cbee1f3c.js","assets/send-hr-form-work-transfer-1599bd3d.js"])),Nm=l.lazy(()=>y(()=>import("./index-db95b3cb.js"),["assets/index-db95b3cb.js","assets/vendor-cbee1f3c.js","assets/send-hr-form-work-transfer-1599bd3d.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>eb),void 0));l.lazy(()=>y(()=>import("./index-fd6fafec.js"),["assets/index-fd6fafec.js","assets/vendor-cbee1f3c.js","assets/BoldText-36fc7c72.js","assets/help-links-e7078e2d.js"]));const Im=l.lazy(()=>y(()=>import("./index-fde30828.js"),["assets/index-fde30828.js","assets/vendor-cbee1f3c.js"])),Tr=l.lazy(()=>y(()=>import("./index-e5a4ec58.js"),["assets/index-e5a4ec58.js","assets/vendor-cbee1f3c.js"])),Rm=l.lazy(()=>y(()=>Promise.resolve().then(()=>bl),void 0));l.lazy(()=>y(()=>Promise.resolve().then(()=>Oy),void 0));const Lm=l.lazy(()=>y(()=>import("./index-38db8c72.js"),["assets/index-38db8c72.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>import("./index-361500f3.js"),["assets/index-361500f3.js","assets/vendor-cbee1f3c.js","assets/index.esm-d8961b68.js"]));const zm=l.lazy(()=>y(()=>import("./index-22fe4bc0.js"),["assets/index-22fe4bc0.js","assets/vendor-cbee1f3c.js"])),Er=l.lazy(()=>y(()=>import("./index-27ab3372.js"),["assets/index-27ab3372.js","assets/vendor-cbee1f3c.js","assets/help-links-e7078e2d.js"])),Mm=l.lazy(()=>y(()=>import("./index-b56e258a.js"),["assets/index-b56e258a.js","assets/vendor-cbee1f3c.js"])),Fm=l.lazy(()=>y(()=>import("./index-121f8080.js"),["assets/index-121f8080.js","assets/vendor-cbee1f3c.js","assets/alert-item-961b26eb.js","assets/is-valid-url-08a91344.js"])),Bm=l.lazy(()=>y(()=>import("./index-352ededf.js"),["assets/index-352ededf.js","assets/vendor-cbee1f3c.js","assets/index-039840ca.js","assets/alert-item-961b26eb.js","assets/is-valid-url-08a91344.js"])),Hm=l.lazy(()=>y(()=>import("./index-07083c1b.js"),["assets/index-07083c1b.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>ny),void 0));const Um=l.lazy(()=>y(()=>import("./index-bec9341c.js"),["assets/index-bec9341c.js","assets/vendor-cbee1f3c.js","assets/index-d5778bf8.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-8c9aa3b2.js"])),$r=l.lazy(()=>y(()=>import("./index-25a5838f.js"),["assets/index-25a5838f.js","assets/vendor-cbee1f3c.js","assets/index-039840ca.js"])),Wm=l.lazy(()=>y(()=>import("./index-8caa38d3.js"),["assets/index-8caa38d3.js","assets/vendor-cbee1f3c.js","assets/index-976a4bac.js"])),Vm=l.lazy(()=>y(()=>import("./index-c2533b00.js"),["assets/index-c2533b00.js","assets/vendor-cbee1f3c.js","assets/index-976a4bac.js"])),Gm=l.lazy(()=>y(()=>import("./index-23ee8da5.js"),["assets/index-23ee8da5.js","assets/vendor-cbee1f3c.js","assets/index-976a4bac.js"])),qm=l.lazy(()=>y(()=>import("./index-049b9914.js"),["assets/index-049b9914.js","assets/vendor-cbee1f3c.js"])),Ym=l.lazy(()=>y(()=>import("./index-3b167591.js"),["assets/index-3b167591.js","assets/vendor-cbee1f3c.js","assets/index.esm-d8961b68.js","assets/index-d5778bf8.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-8c9aa3b2.js"])),Jm=l.lazy(()=>y(()=>import("./index-645f7977.js"),["assets/index-645f7977.js","assets/vendor-cbee1f3c.js"])),Km=l.lazy(()=>y(()=>import("./index-7fabba54.js"),["assets/index-7fabba54.js","assets/vendor-cbee1f3c.js"])),Xm=l.lazy(()=>y(()=>import("./index-6833a3a6.js"),["assets/index-6833a3a6.js","assets/vendor-cbee1f3c.js"])),Qm=l.lazy(()=>y(()=>import("./index-b9a9528c.js"),["assets/index-b9a9528c.js","assets/vendor-cbee1f3c.js","assets/index-32809bd8.js"])),Zm=l.lazy(()=>y(()=>import("./index-179c1cdb.js"),["assets/index-179c1cdb.js","assets/vendor-cbee1f3c.js"])),e0=l.lazy(()=>y(()=>import("./index-e50751f3.js"),["assets/index-e50751f3.js","assets/vendor-cbee1f3c.js","assets/help-links-e7078e2d.js"])),t0=l.lazy(()=>y(()=>import("./index-d6d3b72a.js"),["assets/index-d6d3b72a.js","assets/vendor-cbee1f3c.js","assets/help-links-e7078e2d.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>sT),void 0));const i0=l.lazy(()=>y(()=>import("./index-fd6fafec.js"),["assets/index-fd6fafec.js","assets/vendor-cbee1f3c.js","assets/BoldText-36fc7c72.js","assets/help-links-e7078e2d.js"])),n0=l.lazy(()=>y(()=>import("./index-e91b2ed2.js"),["assets/index-e91b2ed2.js","assets/vendor-cbee1f3c.js"])),s0=u.div`
    width: 100%;
`,o0=()=>t.jsxs(s0,{children:[t.jsx(K,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(K,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(K,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(K,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(K,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(K,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(K,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(K,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ge=e=>{const{children:i,skeleton:n=t.jsx(o0,{}),loading:s=!1,...o}=e;return t.jsx(it,{...o,className:"block",children:s?n:i})},a0=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},Wn=u.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??j.blue.transparent3};
    font-size: 0.7em;
    font-weight: 600;
    color: ${({color:e})=>e??"var(--reallyBlue)"};
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 26px;
    user-select: none;
    cursor: pointer;

    animation: ${({remove:e})=>e?"element-removed 0.2s forwards normal":"element-added 0.2s forwards normal"};

    .element-text {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .remove {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 15px;
        height: 15px;
        background: var(--theme);
        color: var(--blue);
        border-radius: 100%;

        svg {
            width: 10px;
            height: 10px;
        }
    }

    @keyframes element-added {
        0% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
        100% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
    }

    @keyframes element-removed {
        0% {
            padding: 5px 10px;
            width: 100px;
            max-width: 100px;
            opacity: 1;
            visibility: visible;
            margin-right: 5px;
        }
        100% {
            padding: 0;
            width: 0px;
            max-width: 0px;
            opacity: 0;
            visibility: hidden;
            margin-right: 0;
        }
    }
`,r0=u.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    transition: 0.2s;
    padding: ${({padding:e})=>e??"10px"};
    opacity: ${({removeAll:e})=>e?"0":"1"};
    min-height: ${({removeAll:e,height:i})=>e?"0px":i||"46px"};
    visibility: ${({removeAll:e})=>e?"hidden":"visible"};
    transform: scale(${({removeAll:e})=>e?"0.95":"1"})
        translate(${({removeAll:e})=>e?"-30px, 20px":"0, 0"});
`,l0=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:p,setRemoveAll:h,setRemoveOne:f}=a0(c,r);return c.length?t.jsxs(r0,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(Wn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(Ct,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(Wn,{background:g.background,remove:p===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(Xe,{})})]},g.id)}),c.length&&!!n&&t.jsx(Wn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Jt=(e,i)=>{switch(i){case"date":return oe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},c0=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,d0=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[p,h]=l.useState(e),f=l.useCallback(m=>{var x,v;o(b=>(b&&b[m]&&delete b[m],{...b})),m===((x=i==null?void 0:i.column)==null?void 0:x.field)&&n(null),m===((v=a==null?void 0:a.column)==null?void 0:v.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const x=Object.values(s)[0].column;return m={[(x==null?void 0:x.field)??""]:{id:(x==null?void 0:x.field)??"",title:"Фильтр: "+(x==null?void 0:x.title)}},{...m}});else{const m=Object.values(s).find(x=>{var v;return!c[((v=x.column)==null?void 0:v.field)??""]});m&&d(x=>{var S,D;const v=((S=m.column)==null?void 0:S.field)??"",b="Фильтр: "+((D=m.column)==null?void 0:D.title);return x&&(x[v]={id:v,title:b}),{...x}})}i&&d(m=>{var b;const x=((b=i.column)==null?void 0:b.field)??"",v="Поиск";return m?m[x]={id:x,title:v}:m={[x]:{id:x,title:v}},{...m}}),a&&d(m=>{var b;const x=((b=a.column)==null?void 0:b.field)??"",v="Сортировка";return m?m[x]={id:x,title:v}:m={[x]:{id:x,title:v}},{...m}})},[i,s,a]),l.useEffect(()=>{var v;const m=i==null?void 0:i.column,x=(v=i==null?void 0:i.column)==null?void 0:v.field;if(i&&x){const b=e==null?void 0:e.filter(S=>je(Jt(S[x],m==null?void 0:m.type)).includes(je(Jt(i.value,m==null?void 0:m.type))));h(b)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(x=>!Object.values(s).find(v=>{var b;return x[((b=v.column)==null?void 0:b.field)??""]!==v.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var x;const m=((x=a==null?void 0:a.column)==null?void 0:x.field)??"";a?h(v=>{const b=[...v??[]];return b==null||b.sort((S,D)=>D[m]<S[m]?a.value==="asc"?1:-1:D[m]>S[m]?a.value==="asc"?-1:1:0),b}):(d(v=>{const b=c0(v,"Сортировка");return v&&b&&delete v[b],{...v}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},is=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),is(n.children,i)):n?n.children:e},p0=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),p=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[m,x]=l.useState(i),[v,b]=l.useState("");l.useEffect(()=>{x(i)});const S=l.useCallback(()=>{d(T=>!T)},[d]),D=l.useCallback(T=>{if(T.children)f.push(T.id.toString()),x(is(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(N=>N.id===T.id)){const N=o.filter(z=>z.id!==T.id);N.length?n(N):n(null)}else n([...o,T]);else n([T]);else n(T);!r&&S(),b(f.join("/"))}s==null||s(T)},[n,f]),w=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?x(i):x(is(i,f)??[])},[f,x]);return ti(p,()=>{c&&S()}),{handleOpen:S,refElement:p,isOpen:c,multiple:r,handleSelect:D,selectedRoute:v,currentItems:m,route:f,goBack:w,refItems:h,appearance:a}},u0=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${Be(tn)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,h0=u.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${Be(tn)};

    position: relative;
    user-select: none;
    font-weight: 599;
    white-space: nowrap;
    font-size: ${({appearance:e})=>e&&"0.9em"};
    z-index: ${({isOpen:e})=>e?5:2};
    opacity: ${({isActive:e})=>!e&&.7};
    pointer-events: ${({isActive:e})=>!e&&"none"};

    color: var(--text);
    cursor: pointer;
    transition: 0.3s;

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
    &:active {
        transform: translateY(3px);
    }
`,g0=u.header`
    display: flex;
    align-items: center;
    width: calc(100% - 15px);
    column-gap: 5px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }

    .single-header,
    .header-item {
        display: flex;
        align-items: center;
    }

    .header-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }

    .not-chosen {
        font-size: ${({appearance:e})=>e&&"0.9em"};
        opacity: ${({appearance:e})=>e&&"0.6"};

        &.multi {
            margin-left: 5px;
        }
    }

    .header-item {
        background: ${j.blue.transparent2};
        color: ${j.blue.main};
        border-radius: 6px;
        padding: 5px 10px;
        font-size: 0.85em;
        min-width: fit-content;
    }

    .icon {
        float: left;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }
`,f0=u.ul`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    min-height: 60px;
    /**
    *height: ${({itemsAmount:e})=>e*30+"px"};
    */

    position: absolute;
    top: ${({title:e})=>e?"80px":"46px"};

    box-shadow: var(--very-mild-shadow);
    border-radius: 6px;
    background: var(--block-content);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({title:e})=>e?"60px":"46px"};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        display: none;
        top: 36px;
    }
`,ho=u.li`
    list-style-type: none;
    background: var(${({isSelected:e})=>e?"--reallyBlue":""});
    color: ${({isSelected:e})=>e?"#fff":""};
    min-height: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }

    .select-item-title {
        overflow: hidden;
        white-space: pre-line;
        width: 100%;
        text-overflow: ellipsis;
    }

    animation: fadeIn 0.4s forwards;

    &::before {
        content: '';
        display: block;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -7px;
        min-width: ${({leadingToSelected:e})=>e?"5px":"0px"};
        height: 5px;
        border-radius: 10px;
        background: var(--reallyBlue);
    }

    .back-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--blue);
        transition: 0.2s transform;

        &:active {
            transform: translateX(-20px);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1.04);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`,x0=["isOpen"],m0=u(Wp).withConfig({shouldForwardProp:e=>!x0.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,b0=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:p,refItems:h,appearance:f}=p0(e),{isActive:g,width:m,title:x,required:v,selected:b,placeholder:S,size:D="middle"}=e;return t.jsxs(h0,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:m,size:D,children:[t.jsx(W,{size:4,align:"left",bottomGap:"5px",visible:!!x,required:v,children:x}),t.jsxs(u0,{multiple:o,appearance:f,size:D,children:[t.jsx(g0,{appearance:f,children:o?b?b.map(w=>t.jsxs("div",{className:"header-item",children:[!!w.icon&&t.jsx("span",{className:"icon",children:w.icon}),t.jsx("span",{className:"header-title",children:w.title})]},w.id)):t.jsx("span",{className:"not-chosen multi",children:S??"Не выбрано"}):t.jsx("div",{className:"single-header",children:b?t.jsxs(t.Fragment,{children:[!!b.icon&&t.jsx("span",{className:"icon",children:b.icon}),t.jsx("span",{className:"header-title",children:b.title})]}):t.jsx("span",{className:"not-chosen",children:S??"Не выбрано"})})}),t.jsx(m0,{isOpen:s})]}),t.jsxs(f0,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:x,children:[!!d.length&&t.jsx(ho,{isSelected:!1,onClick:w=>{w.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx($i,{}),"Назад"]})},-1),c.map(({id:w,icon:T,title:N,children:z,data:I})=>t.jsxs(ho,{onClick:se=>{se.stopPropagation(),a({id:w,icon:T,title:N,children:z,data:I})},isSelected:!o&&!!b&&b.title.includes(N),leadingToSelected:r.includes(w.toString()),children:[!!T&&t.jsx("span",{className:"icon",children:T}),t.jsx("span",{className:"select-item-title",children:N}),!!z&&t.jsx("span",{className:"right-icon",children:t.jsx(Qe,{})}),o&&!!b&&!!b.find(se=>se.title.includes(N))&&t.jsx("span",{className:"right-icon",children:t.jsx(pn,{})})]},N))]})]})},Pr=l.memo(b0),v0=e=>{switch(e){case"desc":return U.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return U.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return U.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},y0=u.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    cursor: pointer;
    background: ${({even:e})=>e?`${j.blue.transparent3}`:"var(--theme)"};

    &:hover {
        filter: brightness(0.98);
    }

    .five {
        display: none;
    }

    @media (max-width: 650px) {
        font-size: 0.9em;

        .four {
            display: none;
        }
    }

    @media (max-width: 550px) {
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,Cr=u.div`
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e??"auto"};
    padding: ${({padding:e})=>e??"20px"};
    height: 100%;
    text-align: ${({align:e})=>e&&e};
    cursor: ${({clickable:e})=>e&&"pointer"};
    overflow: ${({overflow:e})=>e??"hidden"};
    display: block;
    white-space: ${({showFull:e})=>e?"wrap":"nowrap"};
    text-overflow: ${({showFull:e})=>e?"clip":"ellipsis"};
    position: relative;

    @media (max-width: 700px) {
        padding: ${({clickable:e})=>!e&&"10px"};
    }
`,_0=u.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 600;
    font-size: 0.9em;
    z-index: 10;

    .icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
    }

    .five {
        display: none;
    }

    @media (max-width: 500px) {
        .four {
            display: none;
        }
    }

    @media (max-width: 400px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`,w0=u.div`
    display: flex;
    align-items: center;
`,j0=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(p=>{const h=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return v0(h),h?{column:d,value:h}:null})};return t.jsx(_0,{children:e.map(d=>{var p,h,f,g;return t.jsxs(Cr,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((p=d.priority)==null?void 0:p.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(qt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(Vp,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(w0,{children:t.jsx(Pr,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(x=>(m&&(x={...x,[d.field]:{column:d,value:m}}),x)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},k0=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs($,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx($i,{}),onClick:()=>r(ft(n-1,e).toString())}),t.jsxs($,{w:"fit-content",gap:"6px",children:[t.jsx(gt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(ne,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(Qe,{}),onClick:()=>r(ft(n+1,e).toString())})]}):null},S0=u.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({direction:e})=>e==="vertical"&&"column"};
    justify-content: flex-start;
    align-items: ${({direction:e})=>e==="vertical"?"flex-start":"center"};
    width: 100%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
    font-size: ${({fontSize:e})=>e};
    color: var(--text);

    .value {
        width: ${({direction:e})=>e==="vertical"?"100%":"fit-content"};
        line-height: 1.4rem;
    }

    strong {
        font-weight: 600;
    }
`,kt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(S0,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,T0=u.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,E0=({obj:e,columns:i})=>t.jsx(T0,{children:i.map(n=>t.jsx(kt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Jt(e[n.field],n.type)},n.title))}),Or=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=Z(),r=()=>a(t.jsx(E0,{obj:n,columns:i||e}),"Информация");return t.jsx(y0,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(Cr,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:p=>{c.onClick&&(p.stopPropagation(),c.onClick(n))},children:c.render?c.render(Jt(n[c.field],c.type),n):Jt(n[c.field],c.type)},c.field)})})})},$0=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--theme-1);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`,P0=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,C0=u.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,O0=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),p=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(P0,{children:t.jsx(Ve,{})}):t.jsxs($0,{children:[h==null?void 0:h.map((f,g)=>t.jsx(Or,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(ue,{text:"Нет данных"}),p>0&&t.jsx(be,{margin:"0",width:"100%"}),t.jsx(C0,{children:t.jsx(k0,{pages:p,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},A0=u.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,D0=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},N0=({search:e,setSearch:i})=>{var n,s;return t.jsx(A0,{closed:!(e!=null&&e.column),children:t.jsx(gt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:D0((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(qt,{}),minWidth:"auto"})})},I0=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function R0(e){return Object.keys(e).map(i=>({title:"",field:i}))}const L0=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(I0(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(be,{}),t.jsx(Or,{onRowClick:()=>null,columns:R0(s),el:s,index:1})]})},z0=u.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,nt=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:p,setSearch:h,resultData:f,filter:g,setFilter:m,filterList:x,setFilterList:v,onRemoveOne:b,onRemoveAll:S}=d0(n);return t.jsxs(z0,{children:[t.jsx(l0,{setList:v,padding:"0 10px",list:x,onRemoveOne:b,onRemoveAll:S}),t.jsx(N0,{search:p,setSearch:h}),t.jsx(j0,{sort:c,setSort:d,columns:e,search:p,setSearch:h,filter:g,setFilter:m}),t.jsx(O0,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(L0,{footer:a,data:n,columns:e})]})},t$={ready:"Готово",pending:"В работе",rejected:"Отклонено"},Tn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},$s={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},i$=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],n$=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],M0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values($s).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],F0=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(B0,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(H0,{columns:M0(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},B0=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,H0=u(nt)`
    width: 100%;
`,U0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${tt()}`},s=await Rt({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},W0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>oe(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values($s).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{U0(i.applicationGuid)}})}}],V0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(q0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>{d(p=>!p)},background:"transparent"})]}),t.jsxs(G0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(J0,{children:[a&&t.jsx(ee,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(Y0,{columns:W0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(p=>!p)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},G0=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,q0=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Y0=u(nt)`
    width: 100%;
`,J0=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,K0=()=>{const{data:{dataWorkerApplication:e}}=ve.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(X0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(V0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(F0,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},X0=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,En=u.div`
    width: 100%;
    margin-bottom: 20px;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"600px"};
    padding: 20px;
    border-radius: var(--brSemi);
    background: transparent;
    box-shadow: var(--block-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,$n=()=>t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ke,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),Ar=()=>{const{data:{listApplication:e},error:i}=ve.useApplications();return t.jsx(ze,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Q0,{children:t.jsxs(En,{maxWidth:"1500px",children:[t.jsxs(Z0,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx($n,{})]}),t.jsx(K0,{})]})})})},Q0=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Z0=u.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,eb=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),Dr=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(Tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>oe(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Nr=k(),Ir=k(),Rr=L(async()=>{const{data:e}=await fe.get(`Weekend.GetAllHistory?PersonalGuid=${Zt(tt()??"").IndividualGuid}`);return e.orders});P({clock:Nr,target:Rr});const Di=L(async e=>(await fe.post("Weekend.AddWeekend",e)).data);P({clock:Ir,target:Di});const Lr=V([]),tb=Di.pending;P({clock:Rr.doneData,target:Lr});P({clock:Di.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:bt.evokePopUpMessage});P({clock:Di.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:bt.evokePopUpMessage});const ib={loadBufferHolidayWork:Nr,sendBufferHolidayWork:Ir},s$={sendBufferHolidayWorkFx:Di},nb={useBufferHolidayWork:()=>({data:ge(Lr),loading:ge(tb)})},sb=()=>{const[e,i]=l.useState(!1);l.useEffect(ib.loadBufferHolidayWork,[]);const{data:n}=nb.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ob,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(ab,{columns:Dr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},ob=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,ab=u(nt)`
    width: 100%;
`,rb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(cb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(lb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(db,{children:t.jsx(ee,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},lb=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,cb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,db=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,pb=()=>{const{data:{dataWorkerApplication:e}}=ve.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(ub,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(rb,{info:s,index:o})),t.jsx(sb,{})]}):null},ub=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,hb=()=>{const{data:{listApplication:e},error:i}=ve.useApplications();return t.jsx(ze,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(gb,{children:t.jsxs(En,{maxWidth:"1500px",children:[t.jsxs(fb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx($n,{})]}),t.jsx(pb,{})]})})})},gb=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,fb=u.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,zr=k(),Mr=k(),Ni=L(async()=>{const{data:e}=await fe.get(`Vacation.GetAllHistory?personalGuid=${Zt(tt()??"").IndividualGuid}`);return e});P({clock:zr,target:Ni});const Lt=L(async e=>(await fe.post("Vacation.AddVacation",e)).data);P({clock:Mr,target:Lt});const nn=V(null);P({clock:Ni.doneData,fn:({employeeVacations:e})=>e,target:nn});P({clock:Lt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:U.evokePopUpMessage});P({clock:Lt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:U.evokePopUpMessage});P({clock:Lt.doneData,source:nn,fn:(e,{employeeVacations:i})=>[...e,...i],target:nn});P({clock:Ni.failData,fn:e=>{var n;return{message:ws(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:U.evokePopUpMessage});P({clock:Lt.doneData,target:Ni});const xb={loadBufferHolidayPlanning:zr,sendBufferHolidayPlanning:Mr},o$={sendBufferHolidayPlanningFx:Lt},mb={useBufferHolidayPlanning:()=>({data:ge(nn),loading:ge(Lt.pending),getDataLoading:ge(Ni.pending)})},Pn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${tt()}`},o=await Rt({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var Fr=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(Fr||{});const Ps=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(te,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>Fr[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),Pn(i.documentGuid,"0")}}):"-"}}],bb=()=>[...Ps(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${oe((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${oe((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),Pn(i.documentGuid,"1")}}):"-"}}],vb=()=>{const{data:e,getDataLoading:i}=mb.useBufferHolidayPlanning(),n=()=>xb.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>sa(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(ze,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(yb,{children:"История заявлений на отпуск:"}),t.jsx(ee,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Ct,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(Ve,{})}):t.jsx(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(nt,{columns:Ps(),columnsExtended:bb(),data:s,maxOnPage:10})})]})})},yb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Vn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},Br=()=>{const e=Ze(),{allRoutes:i}=Ue.useMenu(),n=i??{},[s,o]=l.useState(Vn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Vn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Vn(a.pathname,n))}),[e,n]),s},_b={small:"600px",middle:"700px",big:"963px",large:"100%"},Hr=e=>_b[(e==null?void 0:e.pageSize)??"middle"],wb=u(it)`
    position: relative;

    ${X.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${X.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,jb=u.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${X.isMobile} {
        top: -4px;
        right: 7px;
    }
`,kb=u.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${X.isMobile} {
        top: 40px;
    }
`,_t=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=Br(),r=Hr(a);return t.jsx(qs,{padding:"0 0 10px 0",children:t.jsxs(wb,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(jb,{children:i}),n&&t.jsx(kb,{children:n}),e]})})});_t.displayName="PageBlock";const Sb=()=>{const{data:{dataWorkerApplication:e},error:i}=ve.useApplications(),n=Ze();return t.jsx(ze,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(_t,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(oa,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ke,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(vb,{})]})})},Tb=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values($s).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Ur=k(),Wr=k(),Cs=L(async()=>{const{data:e}=await fe.get(`CarryForwardVacation.GetAllHistory?personalGuid=${Zt(tt()??"").IndividualGuid}`);return e});P({clock:Ur,target:Cs});const ii=L(async e=>(await fe.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);P({clock:Wr,target:ii});const sn=V([]);P({clock:Cs.doneData,fn:({employeeVacations:e})=>e,target:sn});P({clock:ii.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:bt.evokePopUpMessage});P({clock:ii.doneData,source:sn,fn:(e,{employeeVacations:i})=>[...e,...i],target:sn});P({clock:Cs.failData,fn:e=>{var n;return{message:ws(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:U.evokePopUpMessage});P({clock:ii.failData,fn:e=>{var n;return{message:ws(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:bt.evokePopUpMessage});const go={loadBufferHolidayTransfer:Ur,sendBufferHolidayTransfer:Wr},a$={sendBufferHolidayTransferFx:ii},Os={useBufferHolidayTransfer:()=>({data:ge(sn),loading:ge(ii.pending)})},Eb=()=>{const[e,i]=l.useState(!1),{data:n}=Os.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs($b,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Pb,{columns:Tb(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},$b=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Pb=u(nt)`
    width: 100%;
`,Cb=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Ab,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(Ob,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(Nb,{children:[t.jsx(ee,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,p)=>{if(d.employeeGuid==e.jobGuid){const h=n[p].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(Db,{columns:Ps(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},Ob=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Ab=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Db=u(nt)`
    width: 100%;
`,Nb=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Ib=()=>{const{data:{dataWorkerApplication:e}}=ve.useApplications(),{data:i}=Os.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(Rb,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Cb,{info:o,index:a,data:i})),t.jsx(Eb,{})]})},Rb=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Lb=()=>{const{data:e,loading:i}=Os.useBufferHolidayTransfer();return l.useEffect(()=>{go.loadBufferHolidayTransfer()},[]),t.jsx(ze,{load:go.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(zb,{children:t.jsxs(En,{maxWidth:"1500px",children:[t.jsxs(Mb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx($n,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(Ib,{})]})})})},zb=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Mb=u.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,Fb=e=>localStorage.setItem("age",e.toString()),r$=e=>localStorage.getItem(e),Bb=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),Hb={listMedicalExamination:null,error:null},Wt=L(async()=>{const e=await fe.get(`MedicalExamination.GetAllHistory?PersonalGuid=${Zt(tt()??"").IndividualGuid}`);try{return Fb(e.data.age),Bb(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Ii=L(async e=>{try{const i=await fe.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),Ub=()=>{const{listMedicalExamination:e,error:i}=ge(Wb);return{data:e,loading:ge(Ii.pending),getDataLoading:ge(Wt.pending),error:i}};k();Le({from:Ii.doneData,to:Wt});P({clock:Ii.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});P({clock:Ii.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:U.evokePopUpMessage});const Wb=V(Hb).on(Wt,e=>({...e,error:null})).on(Wt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(Wt.failData,(e,i)=>({...e,error:i.message})),Vb={loadBufferMedicalExaminationFx:Wt,sendBufferMedicalExaminationFx:Ii},Gb={useBufferMedicalExamination:Ub},Vr=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${oe(i==null?void 0:i.startDate,"numeric")} - ${oe(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),Pn(i==null?void 0:i.documentGuid,"0")}}):"-"}],qb=()=>[...Vr(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),Pn(i==null?void 0:i.documentGuid,"1")}}):"-"}],Yb=()=>{const{data:e,getDataLoading:i}=Gb.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=ve.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>sa(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(ze,{load:Vb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(Jb,{children:"История заявлений на диспансеризацию:"}),t.jsx(ee,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Ct,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(Ve,{})}):t.jsx(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(nt,{columns:Vr(),columnsExtended:qb(),data:s,maxOnPage:10})})]})},Jb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Kb=()=>{const{data:{dataWorkerApplication:e},error:i}=ve.useApplications();return t.jsx(ze,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(_t,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ke,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(Yb,{})]})})},Gr=k(),qr=k(),Yr=L(async()=>{const{data:e}=await fe.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${Zt(tt()??"").IndividualGuid}`);return e.employeeHistories});P({clock:Gr,target:Yr});const Ri=L(async e=>(await fe.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);P({clock:qr,target:Ri});const Jr=V([]),Xb=Ri.pending;P({clock:Yr.doneData,target:Jr});P({clock:Ri.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:bt.evokePopUpMessage});P({clock:Ri.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:bt.evokePopUpMessage});const Qb={loadBufferWorkTransfer:Gr,sendBufferWorkTransfer:qr},l$={sendBufferWorkTransferFx:Ri},Zb={useBufferWorkTransfer:()=>({data:ge(Jr),loading:ge(Xb)})},ev=()=>{const[e,i]=l.useState(!1);l.useEffect(Qb.loadBufferWorkTransfer,[]);const{data:n}=Zb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(tv,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(iv,{columns:Dr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},tv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,iv=u(nt)`
    width: 100%;
`,nv=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ov,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(xt,{}):t.jsx(We,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(sv,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(av,{children:[t.jsx(ee,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(ee,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},sv=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,ov=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,av=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,rv=()=>{const{data:{dataWorkerApplication:e}}=ve.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(lv,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(nv,{info:s,index:o})),t.jsx(ev,{})]}):null},lv=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,cv=()=>{const{data:{listApplication:e},error:i}=ve.useApplications();return t.jsx(ze,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(dv,{children:t.jsxs(En,{maxWidth:"1500px",children:[t.jsxs(pv,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx($n,{})]}),t.jsx(rv,{})]})})})},dv=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,pv=u.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,uv=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${oe(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${oe(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${oe(e[0])} по ${oe(e[1])}`},hv=u.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,Cn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Je.selectors.useData();return r?t.jsxs(hv,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(kr,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(te,{type:"info",title:uv(n)??"",icon:t.jsx(Ke,{})}),i==null?void 0:i.map((c,d)=>{const p=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(W,{size:4,align:"left",children:c.title}),t.jsx(Oi,{onClick:()=>null,href:p,text:"Загрузить",icon:t.jsx(bs,{}),width:"170px",background:j.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(be,{})]},c.title)})]})]}):null},gv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Cn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},fv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Cn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},xv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Cn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},mv=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Cn,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},Kr=()=>{var i;const{data:e}=Je.selectors.useData();return t.jsx(qs,{padding:"10px",children:t.jsx(_t,{children:t.jsx(Us,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(xv,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(gv,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(fv,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(mv,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(_e,{oldVersionUrl:r1}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},bv=Object.freeze(Object.defineProperty({__proto__:null,default:Kr},Symbol.toStringTag,{value:"Module"})),vv=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Xr=k(),Qr=k(),Zr=k(),Kt=L(async()=>{const e=await Bh();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),As=L(async e=>{try{return await Uh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Li=L(async e=>{const i=await Hh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});P({clock:Li.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:U.evokePopUpMessage});P({clock:Li.doneData,fn:()=>!0,target:Qr});P({clock:Li.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:U.evokePopUpMessage});P({clock:Xr,target:Li});const el=k(),tl=k(),yv=un(Li.pending,Kt.pending,Boolean),_v=V(!1).on(Zr,(e,i)=>i),wv=V(!1).on(Qr,(e,i)=>i),jv=V(null).on(Kt,()=>null).on(Kt.failData,(e,i)=>i.message).on(As.failData,(e,i)=>i.message),kv=V(null).on(Kt.doneData,(e,i)=>i).on(As.doneData,(e,i)=>vv(e,i,!1)).on(el,()=>null),ct={$loading:yv,$completed:_v,$done:wv,$error:jv,$paymentsStore:kv};Le({from:tl,to:Kt});const Ds={getPaymentsFx:Kt,signContractFx:As},ns={signAgreement:Xr,setCompleted:Zr,clearStore:el,getPayments:tl},Sv=Object.freeze(Object.defineProperty({__proto__:null,effects:Ds,events:ns,stores:ct},Symbol.toStringTag,{value:"Module"})),Tv=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Ev=u.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${j.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,$v=({date:e,value:i})=>t.jsxs(Ev,{children:[t.jsxs($,{gap:"16px",children:[t.jsx(yt,{color:"grey",size:33,children:t.jsx(ut,{})}),t.jsxs($,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(ne,{children:oe(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(ut,{})," "]})]}),Pv=u.div`
    display: flex;
    align-items: center;
    font-size: ${({fontSize:e})=>e};
    font-weight: ${({fontWeight:e})=>e};
    color: ${({color:e})=>e};

    svg {
        width: ${({iconSize:e})=>e};
        max-width: ${({iconSize:e})=>e};
        height: ${({iconSize:e})=>e};
        min-width: ${({iconSize:e})=>e};
        margin: 0;
        stroke-width: 0.2;
    }
`,il=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Pv,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(ut,{})]})},Cv=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Ov=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .payment-list {
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        min-height: 195px;
        height: 195px;
        padding-right: 5px;
        background: var(--block-content);
        box-shadow: var(--block-shadow);
        border-radius: 7px;
        margin-top: 10px;
    }
`,Av=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Cv(s.value),0).toFixed(1);return t.jsxs(Ov,{children:[t.jsxs($,{jc:"space-between",children:[t.jsx(W,{icon:t.jsx(aa,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(ne,{fontSize:"1rem",width:"fit-content",children:t.jsx(il,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ue,{size:"50px",text:"Нет платежей",image:t.jsx(ra,{})}),e.map((n,s)=>l.createElement($v,{...n,key:s}))]})]})},nl=()=>t.jsx(te,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Dv=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Nv=u.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`,Iv=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:p}=e,{open:h}=Z(),[f,g]=l.useState(!1),[m,x]=l.useState(!1),[v,b]=l.useState(!1),S=et(ct.$error),D=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:oe(n)},{text:"Действует до",info:oe(s)},{text:"Подписан",info:oe(p)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Dv(a)??""},{text:"Статус",info:""}],w=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},T=()=>{e&&(x(!0),Ds.signContractFx(e.id),x(!1),b(!0))},N=()=>{h(t.jsx(nl,{}),"Не получается подписать")};return t.jsxs(Nv,{children:[t.jsx("div",{className:"contract-info",children:D.map(({info:z,text:I})=>t.jsx(kt,{keyStr:I,value:z},z))}),r&&t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(ht,{text:"Подписать договор",buttonSuccessText:"Подписан",action:T,isLoading:m,completed:v,repeatable:!1,popUpFailureMessage:S??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:N,text:"Не получается подписать?",background:"transparent",textColor:j.grey.main})]}),!r&&t.jsxs($,{gap:"8px",children:[t.jsx(ht,{text:"Скопировать номер договора",action:w,isLoading:!1,completed:f,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Oi,{onClick:()=>null,href:c??"",icon:t.jsx(bs,{}),width:"45px"})]})]})},Rv=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--block);
    z-index: 3;
    width: 100%;
    /* border-radius: var(--brLight) var(--brLight) 0 0; */

    .title-and-icon {
        display: flex;
        align-items: center;
        width: calc(100% - 30px);

        b {
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
        }

        svg {
            min-width: 19px;
            height: 19px;
            margin-right: 7px;
        }
        /* white-space: nowrap; */
    }
`,Lv=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Rv,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(la,{style:{color:"var(--green)"}}):t.jsx(ca,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(We,{}),onClick:()=>null,background:"transparent"})]}),zv=u.div`
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    width: 100%;
    border-radius: var(--brLight);
    overflow: hidden;

    .inputs {
        padding: ${({open:e})=>e?"15px 0":"0"};
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility, 0.2s padding;
        height: ${({height:e,open:i})=>i?e+"px":"0"};
        opacity: ${({open:e})=>e?"1":"0"};
        visibility: ${({open:e})=>e?"visible":"hidden"};
    }

    @media (max-width: 500px) {
        .inputs {
            height: ${({height:e,open:i})=>i?e+63+"px":"0"};
        }
    }
`,Mv=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(zv,{height:s,open:r,children:[t.jsx(Lv,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},Fv=u.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Bv=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,p]=et([ct.$done,ct.$completed,ct.$loading]),h=s||c?140:100,f=()=>ns.signAgreement(n),g=ns.setCompleted;return t.jsxs(Mv,{height:h,title:o,confirmed:s||c,children:[t.jsxs(Fv,{children:[t.jsxs($,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(W,{size:5,align:"left",children:o}),t.jsx(ne,{children:oe(r)})]}),t.jsxs($,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Oi,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(bs,{}),isActive:!!e.file}),!(s||c)&&t.jsx(ht,{text:s||c?"Подписано":"Подписать",action:f,isLoading:p,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(te,{type:"success",title:"Подписано",icon:t.jsx(pn,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(ne,{children:["Дата подписания: ",oe(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},Hv=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Se,{width:"100%",children:[t.jsx(W,{size:4,align:"left",icon:t.jsx(Gp,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(nl,{}),t.jsx(te,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(Bv,{data:s,isContractSigned:n},o))]}),Uv=u.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 4px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        min-width: 100%;
    }
`,Ui=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(Uv,{children:t.jsx(Ss,{loading:i,width:"300px",height:"300px",src:e??""})})},Wv=u.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,Vv=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Ui,{qrCode:e}):n===1?t.jsx(Ui,{qrCode:i}):t.jsx(Wv,{children:t.jsx(Us,{pages:[{title:"Текущая задолженность",content:t.jsx(Ui,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(Ui,{qrCode:i})}],appearance:!1,currentPage:n})}),Gv=({type:e="horizontal",...i})=>{const{open:n}=Z(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${j.green.main}, ${j.green.dark1})`,a=()=>{n(t.jsx(Vv,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(qp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},qv=({debt:e,size:i="big"})=>{const n=e>0?j.red.main:j.green.main;return t.jsx(il,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},Gn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),wt=()=>{const e=Ph.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Gn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Gn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Gn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},Yv=u.div`
    width: 100%;
`,Jv=u.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,Kv=u.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`,Xv=u.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        height: fit-content;
    }
`,Qv=u.div`
    position: relative;
`,Zv=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:p}=wt(),{open:h}=Z(),[f,g]=l.useState(0),m=f===0?+n:+s,x=m>0,v=x?f===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",b=f===0?`На ${oe(new Date)}`:`До ${oe(o)}`,S=()=>{h(t.jsx(Iv,{contract:i}),"Реквизиты договора")};return t.jsxs(Yv,{children:[t.jsx(W,{icon:t.jsx(Yp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(Jv,{children:[t.jsx(Ts,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(Kv,{children:[t.jsxs($,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(qv,{debt:m}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{size:3,align:"left",children:v}),t.jsx(ne,{children:b})]})]}),x?t.jsx(Gv,{currentPage:f,type:p?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(dr,{color:"green",size:"40px"})]}),t.jsxs(Xv,{children:[r&&t.jsx(Oi,{text:"Квитанция на оплату",background:"transparent",textColor:j.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(Qv,{children:[t.jsx(_,{onClick:S,text:"Реквизиты договора",background:"transparent",textColor:j.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(At,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},sl=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,ey=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Jt(String(o),"rub")})`},ty=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return sl(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:ey}],iy=({paygraph:e})=>t.jsxs($,{d:"column",children:[t.jsx(W,{icon:t.jsx(Jp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(nt,{columns:ty(),data:e??[],maxOnPage:3})]}),Wi=({contracts:e})=>e?t.jsx(Tv,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,p=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx($,{gap:"8px",children:t.jsx($,{w:"fit-content",children:t.jsxs(W,{size:3,align:"left",children:["Договор № ",o," от ",oe(d,"numeric")]})})}),t.jsx(Zv,{data:i}),t.jsx(Av,{payments:c??[]}),t.jsx(iy,{paygraph:r}),t.jsx(Hv,{isDormitory:p,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(be,{margin:"0",width:"100%"})]},o)})}):null,Ns=()=>{const[e,i,n]=et([ct.$error,ct.$loading,ct.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{U.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(ze,{loading:i,load:Ds.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(_t,{children:[t.jsx(te,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ue,{text:"Нет данных"}),s==="both"&&t.jsx(Us,{pages:[{title:"Общежитие",content:t.jsx(Wi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Wi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Wi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Wi,{contracts:n==null?void 0:n.education})]})})},ny=Object.freeze(Object.defineProperty({__proto__:null,default:Ns},Symbol.toStringTag,{value:"Module"})),sy=u.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`,c$=u.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,d$=u.div`
    width: 100%;
`,oy=u.div`
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 100px;
    height: 100%;

    @media (max-width: 550px) {
        padding: 10px;
    }
`,ay=u.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.2s;
    opacity: ${({$loading:e})=>e?1:0};
    visibility: ${({$loading:e})=>e?"visible":"hidden"};
    transform: scale(${({$loading:e})=>e?"1":"0.98"});
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    img {
        width: 40px;
    }
`,ry=u.div`
    transition: 0.2s;
    height: 100%;
`,ly=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);

    & > * + * {
        margin-top: 10px;
    }
`,cy=({children:e,load:i,loading:n,error:s,data:o,deps:a=[],couldBeReloaded:r})=>(l.useEffect(()=>{!o&&!n&&i()},a),t.jsx(oy,{children:o?!s&&t.jsx(ry,{children:e}):t.jsx(ay,{$loading:!!s||!o,children:s?t.jsx(ly,{children:t.jsx(ue,{text:s,children:r&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(hn,{})})})}):t.jsx(Ve,{})})})),ol=k(),al=k(),Si=L(async()=>{const{data:e}=await ag();if(!(e!=null&&e.map))throw new Error("Не удалось загрузить подразделения");return e});P({clock:al,target:Si});const dy=Si.pending,py=k(),uy=V(null).on(ol,(e,i)=>i),hy=V(null).on(Si.doneData,(e,i)=>i),gy=V(null).on(Si.failData,(e,i)=>i.message).on(Si,()=>null),Is={setSubdivisionPath:ol,getSubdivisions:al,clearSubdivisionData:py},Xt={subdivisionPath:uy,subdivisions:hy,error:gy,pedningGetSubdividions:dy},rl=({item:e,parents:i})=>{var p;const n=Ze(),o=Sn().get("fio")||"",a=e.subdivs,r=et(Xt.subdivisionPath),[c,d]=l.useState(!1);return l.useEffect(()=>{d(!!(r&&r.some(h=>h.name===e.name)))},[r]),t.jsxs($,{p:`5px 0 5px ${i.length*15}px`,d:"column",children:[t.jsx(fy,{$chosen:!!(r&&((p=r[0])==null?void 0:p.name)===e.name),onClick:()=>{Is.setSubdivisionPath([e,...i]),n.push({search:new URLSearchParams({subdivision:e.name,fio:o}).toString()})},children:t.jsxs($,{ai:"center",jc:"space-between",w:"100%",gap:"5px",children:[e.name,a.length>0&&t.jsx(_,{icon:c?t.jsx(da,{size:20}):t.jsx(Qe,{size:20}),width:"20px",height:"20px",background:"transparent",onClick:h=>{h.stopPropagation(),d(f=>!f)}})]})}),c&&a.map(h=>t.jsx(rl,{item:h,parents:[e,...i]},h.name))]})},fy=u.div`
    background-color: ${({$chosen:e})=>e?"var(--theme-1t)":"transparent"};
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`,xy=u.div`
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    min-height: 110px;
    width: 100%;
    padding-left: ${({isEmployee:e})=>e?"125px":"20px"};

    ${X.isNotMobile} {
        padding-left: ${({isEmployee:e})=>e?"180px":"0"};
    }

    @media (max-width: 800px) {
        padding-bottom: 0;
    }
`,my=u.div`
    width: 700px;
    padding-bottom: 20px;
    /* padding: 40px 35px 20px 35px; */

    @media (max-width: 800px) {
        width: 100%;
        /* padding: 20px 16px 10px 36px; */
    }
`,by=u.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding: 60px 20px 10px 20px;

    ${X.isNotMobile} {
        padding: 35px 20px 10px ${({isEmployee:e})=>e?"180px":"0"};
    }
`,vy=u.h3`
    font-size: 1.17rem;
    line-height: 28px;
`,yy=u.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`,_y=u.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;

    a {
        width: 100%;
    }
    button {
        width: 100%;
    }
`,wy=u.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 50;

    ${X.isMobile} {
        top: 95px;
        left: 10px;
    }
`,ss=u($)`
    overflow-x: hidden;
    padding-right: 10px;
    ${X.isNotMobile} {
        overflow-y: scroll;
        height: calc(100vh - 240px);
    }
    ${X.isTablet} {
        height: calc(100vh - 300px);
    }
`,jy=()=>{const{subdivisions:e}=et({subdivisions:Xt.subdivisions});return e?t.jsx(ss,{d:"column",children:e.map(i=>t.jsx(rl,{item:i,parents:[]},i.name))}):null},os=e=>e.split(" ").map(i=>i[0]),De=(e,i)=>{const n=os(e),s=j[Sh[n[0]]];return s==null?void 0:s[i??"main"]},ky=u.div`
    border-radius: ${({borderRadius:e})=>e?`${e}px`:"50%"};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({background:e})=>e??"var(--almostTransparent)"};
    color: var(--text);
    border: ${({selected:e,border:i})=>(e||i)&&"5px solid var(--theme)"};
    outline: ${({selected:e})=>e&&"4px solid var(--reallyBlue)"};
    position: relative;

    width: ${({width:e})=>e??"160px"};
    min-width: ${({width:e})=>e??"160px"};
    height: ${({height:e})=>e??"160px"};

    margin-right: ${({marginRight:e})=>e??"32px"};
    box-shadow: ${({boxShadow:e})=>e??"0"};

    .icon {
        position: absolute;
        bottom: -2px;
        right: -5px;
        background: var(--theme);
        color: var(--text);
        padding: 2px;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 12px;
            height: 12px;
        }
    }

    .checkbox {
        position: absolute;
        bottom: -9px;
        right: -9px;
    }

    .name {
        display: flex;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: ${({width:e})=>e?parseInt(e)/50+"em":"3em"};
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        width: ${({width:e})=>e??"75px"};
        min-width: ${({width:e})=>e??"75px"};
        height: ${({height:e})=>e??"75px"};
        margin-right: ${({marginRight:e})=>e??"15px"};

        .name {
            font-size: ${({width:e})=>e?parseInt(e)/50+"em":"1.5em"};
        }
    }
`,Sy=u.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function zt({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:p,icon:h,avatarModal:f,onClick:g,borderRadius:m,background:x}){const[v,b]=l.useState(!0),S=os(i)[0]+(os(i)[1]??""),{open:D}=Z(),w=T=>{f?D(t.jsx(zt,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(T)};return t.jsxs(ky,{selected:e,width:s,height:o,marginRight:a,background:x??De(i),boxShadow:d,border:p,onClick:w,borderRadius:m,children:[n&&v?t.jsx(Sy,{loading:"lazy",round:!0,onLoadedData:()=>b(!0),onError:()=>b(!1),src:n}):t.jsx("div",{className:"name",children:S}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(He,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(At,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const on=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Vi=({title:e,items:i,action:n})=>t.jsxs($,{d:"column",ai:"flex-start",gap:"7px",children:[t.jsx(ne,{children:e}),i.length>0?i.map(s=>t.jsxs(Ty,{onClick:()=>n("fio"in s?s:null),children:["fio"in s&&t.jsx(zt,{name:s.fio,avatar:s.avatar,width:on("horizontal","middle"),height:on("horizontal","middle"),marginRight:"7px"}),"fio"in s?s.fio:s.name]},"fio"in s?s.fio+s.post:s.name)):t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(ms,{})})]}),Ty=u.button`
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    text-align: left;
    width: 100%;
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`,Ey=({title:e,children:i})=>i?t.jsxs($,{d:"column",ai:"flex-start",jc:"flex-start",gap:"10px",children:[t.jsx(ne,{fontSize:"0.9rem",children:e}),t.jsx($y,{children:i})]}):null,$y=u.p`
    padding-left: 14px;
`,Py=u.div`
    width: ${({width:e})=>e??"100%"};
    height: ${({height:e})=>e??"100px"};
    position: absolute;
    background: ${({color:e})=>e};
    z-index: -1;
    overflow: hidden;
    top: -16px;
    left: -16px;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(50%);
        filter: drop-shadow(0 0 34px #00000054);
    }

    & svg:nth-child(1) {
        z-index: -3;
        transform: ${({baseScaleDelta:e})=>`scale(${1+e*2})`};
    }

    & svg:nth-child(2) {
        z-index: -2;
        transform: ${({baseScaleDelta:e})=>`scale(${1+e})`};
    }

    & svg:nth-child(3) {
        z-index: -1;
        transform: ${({baseScale:e})=>`scale(${e})`};
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #00000024, transparent);
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`,ll=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Py,{width:i,height:n,color:De(e,"dark1"),color2:De(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light2")})})]})}),zi=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),Gi=({title:e,info:i,isEmployee:n,avatar:s})=>{const{close:o}=Z(),{isMobile:a}=wt();return t.jsxs($,{d:"column",children:[t.jsxs(xy,{isEmployee:!!n,children:[t.jsx(ll,{fullName:e,height:"200px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),n&&t.jsx(wy,{children:t.jsx(zt,{avatarModal:!0,border:!0,name:e,avatar:s,width:a?"110px":"150px",height:a?"110px":"150px",marginRight:"0"})}),t.jsx(vy,{children:e})]}),t.jsx(my,{children:t.jsx(Se,{minWidth:"100%",direction:"horizontal",showPages:!0,gap:20,children:i.map(({subtitle:r,attributes:c})=>{const d=c.find(p=>p.id==="jobType");return t.jsxs(by,{isEmployee:!!n,children:[r&&t.jsx(yy,{children:r}),c.map(({title:p,text:h,id:f})=>t.jsx(Ey,{title:p,children:h?f==="email"?t.jsx("a",{href:`mailto:${h}`,children:h}):f==="innerPhone"?h.split("; ").map((g,m,x)=>t.jsx("a",{href:`tel:+7(495) 223-05-23,${g}`,children:m===x.length-1?g:`${g}; `},g)):f==="mobile"?t.jsx("a",{href:`tel:${h}`,children:h}):t.jsx(t.Fragment,{children:h}):"-"},p))]},r?e+r+(d==null?void 0:d.text):e)})},e)}),n&&t.jsxs(_y,{children:[t.jsx(ee,{to:zi(ni,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(mt,{}),text:"Расписание",onClick:()=>{o()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(fn,{}),text:"Написать",onClick:()=>o(),width:"100%",background:"var(--theme-4)",isActive:!1})]})]})},cl=(e,i)=>{if(e.length===0)return[];const n=[];return e.forEach(s=>{var a,r;(r=(a=s.head)==null?void 0:a.fio)!=null&&r.toLowerCase().includes(i)&&n.push(s.head),s.staff.forEach(c=>{c.fio.toLowerCase().includes(i)&&n.push(c)});const o=cl(s.subdivs,i);n.push(...o)}),n.filter((s,o,a)=>o===a.findIndex(r=>r.fio===s.fio))},qn=e=>e.job.map(i=>({subtitle:i.subdivision+" • "+i.post,attributes:[{id:"jobType",title:"Тип работы",text:i.jobType},{id:"email",title:"Корпоративная электронная почта",text:i.email},{id:"innerPhone",title:"Внутренний телефон",text:i.phone_inner},{id:"mobile",title:"Служебный мобильный телефон",text:i.phone_mobile},{title:"Адрес рабочего места",text:i.address},{title:"Номер кабинета",text:i.room}]})),Cy=()=>{var d;const e=Sn(),i=e.get("fio")||"",n=e.get("subdivision")||"",{subdivisionPath:s,subdivisions:o}=et({subdivisionPath:Xt.subdivisionPath,subdivisions:Xt.subdivisions}),a=s==null?void 0:s[0],{open:r}=Z(),c=l.useMemo(()=>i&&o?cl(a?[a]:o,i.toLowerCase()):[],[i,n,o]);return i&&o?t.jsx(ss,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:t.jsx(Vi,{title:"Сотрудники",items:c,action:p=>{r(t.jsx(Gi,{title:p.fio,info:qn(p),avatar:p.avatar,isEmployee:!0}))}})}):a?t.jsxs(ss,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:[t.jsx(Vi,{title:"Информация",items:[a],action:()=>{r(t.jsx(Gi,{title:a.name,info:[{attributes:[{title:"Руководитель",text:a.head.fio},{title:"Корпоративная электронная почта подразделения",text:a.email},{id:"innerPhone",title:"Внутренний телефон",text:a.phone_inner},{id:"mobile",title:"Прямой телефон",text:a.phone_direct},{title:"Адрес рабочего места",text:a.address},{title:"Номер кабинета",text:a.room}]}]}))}}),((d=a==null?void 0:a.head)==null?void 0:d.fio)&&t.jsx(Vi,{title:"Руководитель",items:[a.head],action:p=>{r(t.jsx(Gi,{title:p.fio,info:qn(p),avatar:p.avatar,isEmployee:!0}))}}),a.staff.filter(p=>p.fio!==a.head.fio).length>0&&t.jsx(Vi,{title:"Сотрудники",items:a.staff,action:p=>{r(t.jsx(Gi,{title:p.fio,info:qn(p),avatar:p.avatar,isEmployee:!0}))}})]}):null},fo=u.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    row-gap: ${({rowGap:e})=>e};
    column-gap: ${({columnGap:e})=>e};
    padding: ${({padding:e})=>e};
`,dl=({value:e,placeholder:i,loading:n,hintIcon:s,leftIcon:o,focusOn:a,width:r,transformRequest:c,setValue:d,request:p,onValueEmpty:h,customMask:f,onHintClick:g,size:m})=>{const[x,v]=l.useState([]),[b,S]=l.useState(!1);return l.useEffect(()=>{e.length>0?(S(!0),p(e).then(D=>{v(D.data.items.map(w=>{const T=c?c(w):w;return{id:T,title:T,value:T,icon:s}})),S(!1)}).catch(()=>{S(!1),v([])})):(S(!1),v([]),h==null||h())},[e]),t.jsx(Ai,{value:e,setValue:d,placeholder:i,hints:x,width:r??"180px",focusOn:a,leftIcon:o,loading:b&&n,onHintClick:g,customMask:f,size:m})},pl=(e,i)=>{if(i==="")return null;const n=[],s=e.find(o=>o.name===i);if(s)n.push(s);else{for(const o of e){const a=pl(o.subdivs,i);a&&a.length>0&&n.push(...a,o)}return n}return n},xo=(e,i)=>{const n=pl(e,i)||null;Is.setSubdivisionPath(n)},ul=()=>{const e=Sn(),i=e.get("subdivision")||"",n=e.get("fio")||"",s=Ze(),[o,a]=et([Xt.subdivisions,Xt.error]);l.useEffect(()=>{i&&(o!=null&&o.find)&&r({id:i,value:i,title:i})},[o]);const r=x=>{o&&xo(o,(x==null?void 0:x.value)??"")},{isMobile:c}=wt(),[d,p]=l.useState(""),h=x=>{s.push({search:new URLSearchParams({subdivision:i,fio:x}).toString()})},[f,g,m]=kn({onDebounce:h,delay:400,defaultValue:n,triggerDelay:200,triggerOn:x=>(p(x),d!==x),onClear:h});return c&&s.push(`${Dn}/${i}`),t.jsx(sy,{children:t.jsx(_t,{children:t.jsxs($,{d:"column",gap:"15px",children:[t.jsxs(fo,{columns:c?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(dl,{width:"100%",value:i,setValue:x=>{s.push({search:new URLSearchParams({subdivision:x,fio:n}).toString()}),x===""&&o&&xo(o,x)},onHintClick:r,placeholder:"Структура",request:js}),!c&&t.jsx(Ai,{value:f,setValue:g,loading:m,placeholder:"Сотрудник"})]}),t.jsx(cy,{data:o,error:a,load:()=>{Is.getSubdivisions()},couldBeReloaded:!0,children:t.jsxs(fo,{columns:c?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(jy,{}),!c&&t.jsx(Cy,{})]})})]})})})},Oy=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"})),Ay=50;function Dy(e){const{getFx:i,limit:n=Ay,reset:s=[]}=e,o=k(),a=k(),r=V(null),c=V(null);c.on(i.doneData,(g,m)=>[...g||[],...m.results||[]]),c.reset([o,...s]);const d=V(1);d.on(i.doneData,g=>++g),d.reset([o,...s]);const p=i.pending,h=V(!1);h.reset([o,...s]);const f=un(c,h,(g,m)=>!!(g!=null&&g.length)&&!m);return P({clock:o,fn:g=>({...g,limit:g.limit||n,page:g.page??1}),target:[i,r]}),P({clock:a,source:{lastArgs:r,page:d},fn:({lastArgs:g={},page:m})=>({...g,limit:n,page:m}),target:i}),P({clock:i.doneData,source:r,fn:(g,m)=>!!g&&(m.results||[]).length<g.limit,target:h}),{$items:c,$isPending:p,$hasNext:f,next:a,load:o}}const Ny=L(async e=>{const{search:i,page:n,limit:s,filter:o}=e,a=(o==null?void 0:o.title)==="Все"?"":(o==null?void 0:o.title)??"",{data:r}=await Ma(i??"",a,n,s);return{results:r.items}}),mo=Dy({getFx:Ny,limit:50}),Iy=({setExternalValue:e,inputAppearance:i,placeholder:n,validationCheck:s,searchApi:o,triggerSearchOn:a,hints:r})=>{const c=async g=>{await o(g)},[d,p,h]=kn({onDebounce:c,onClear:c,delay:1e3,triggerDelay:0,deps:a}),f=g=>{p(g),e&&e(g)};return t.jsx(Ai,{value:d??"",setValue:f,inputAppearance:i,placeholder:n,validationCheck:s,loading:h,hints:r})},Ry=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;

    .scrolable-content {
        width: 100%;
    }

    .alpabet-letter {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .title-wrapper {
            width: fit-content;
            color: var(--theme-mild-opposite);
        }
    }
`,Ly=50;function zy({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Ly}){const{data:{user:p}}=me.useUser();let h="";const f=l.useCallback(g=>{const m=g.currentTarget.clientHeight,x=g.currentTarget.scrollHeight,v=g.currentTarget.scrollTop;x-d<v+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ue,{text:"Нет результатов",children:c}):t.jsxs(Ry,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var v,b;const x=r?h!==((v=g.fio)==null?void 0:v.charAt(0)):!1;return x&&(h=((b=g.fio)==null?void 0:b.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[x&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(W,{size:4,align:"left",children:h}),t.jsx(be,{})]}),i(g,(p==null?void 0:p.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(Ve,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}const bo=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},hl=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},My=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},Fy=u.div`
    display: flex;
    justify-content: center;
    width: 100%;

    .info {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-top: 20px;
        width: 100%;

        b {
            margin-bottom: 15px;
            color: #fff;
            display: flex;
            align-items: flex-end;
            height: 42px;
        }
    }
`,By=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:p,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",m=hl(h,n,s,o);return t.jsxs(Fy,{children:[t.jsx(ll,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(zt,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ne,{fontSize:"0.9rem",children:t.jsx(Ne,{words:m})}),t.jsx(kt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(kt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(kt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(kt,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(kt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},Hy=u.div`
    @media (min-width: 1001px) {
        width: 330px;
        height: fit-content;
        min-height: 120px;
    }

    display: flex;
    align-items: center;
    height: inherit;
    min-height: inherit;
    flex-direction: column;

    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;

        a {
            width: 100%;
        }
        button {
            width: 100%;
        }
    }

    ${X.isMobile} {
        .user {
            .info b {
                width: 90%;
                height: 35px;
            }
            &::before {
                height: 110px;
            }
        }
    }
`,gl=e=>{const{children:i}=e;return t.jsxs(Hy,{children:[t.jsx(By,{...e}),t.jsx("div",{className:"buttons",children:i})]})},Uy=u.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,Wy=()=>t.jsxs(Uy,{children:[t.jsx(K,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(K,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(K,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),fl=k(),xl=k(),Vy=V(!1).on(xl,()=>!0).on(fl,()=>!1),vo={close:fl,open:xl},Gy={$isModalOpen:Vy},Rs=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),qy=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=et(Gy.$isModalOpen),d=a.length>1,p=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((v,b)=>{v&&(i?(r(()=>[...a,v]),o(()=>[...s,b??""])):(r(()=>[v]),o(b?[b]:[])),n(()=>!0),vo.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),vo.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),x=l.useCallback(v=>{v&&r([...a,v])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(Rs.Provider,{value:{back:p,open:h,close:f,isOpen:i,canBack:d,component:g,title:m,setComponent:x},children:e})},Z=()=>{const{open:e,isOpen:i,...n}=l.useContext(Rs);return{open:e,isOpen:i,...n}},Yy=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Rs);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},Jy=u.div`
    background: var(--block);
    color: var(--text);
    padding: 20px;
    min-height: 150px;
    max-height: 90vh;
    border-radius: var(--brLight);
    transition: 0.2s opacity, 0.2s transform;
    overflow: auto;

    & > .title-wrapper {
        margin-left: ${({hasBack:e})=>e?"15px":"0px"};
        padding-right: 50px;
        white-space: break-spaces;
        max-width: 600px;
        hyphens: auto;
    }

    .close-button,
    .back-button {
        position: absolute;
        top: 14px;
    }

    .back-button {
        left: ${({hasTitle:e})=>e?"4px":"12px"};
    }

    .close-button {
        right: 20px;
        z-index: 100;
        padding: 8px;
        border-radius: 100%;
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
        padding-top: 15px;

        /* Swipe bar on top */
        /* 
        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 5px;
            background: var(--almostTransparentOpposite);
            width: 30px;
            height: 4px;
            border-radius: 10px;
        } */
    }

    @media (min-width: 801px) {
        transform: scale(${({isOpen:e})=>e?1:.95});
    }

    @media (max-width: 800px) {
        padding: 15px;
        width: 100%;
        max-height: 80%;
        height: fit-content;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        animation: ${({isOpen:e})=>e?"openAnimation 0.2s forwards":"closeAnimation 0.2s forwards"};
        border-radius: var(--brLight);

        @keyframes openAnimation {
            0% {
                transform: scale(1) translateY(150px);
            }
            100% {
                transform: scale(1) translateY(0px);
            }
        }

        @keyframes closeAnimation {
            0% {
                transform: scale(1) translateY(0px);
            }
            100% {
                transform: scale(1) translateY(150px);
            }
        }

        .close-button {
            right: 15px;
        }

        h3 {
            margin-top: 7px;
        }
    }
`,On=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${({isOpen:e})=>e?"wrapperOpened 0.2s forwards":"wrapperClosed 0.2s forwards"};

    @keyframes wrapperOpened {
        0% {
            opacity: 0;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            visibility: visible;
        }
    }

    @keyframes wrapperClosed {
        0% {
            opacity: 1;
            visibility: visible;
        }
        100% {
            opacity: 0;
            visibility: hidden;
        }
    }

    @media (max-width: 800px) {
        padding: 8px;
        align-items: flex-end;
    }
`,Ky=u.div`
    padding-top: 30px;
`,Xy=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Yy(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return gr([27],o),ti(r,()=>{o()}),t.jsx(On,{isOpen:c,children:t.jsxs(Jy,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx($i,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(W,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Xe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(Ky,{children:i})]})})},Qy=le.memo(Xy),ml=e=>{if(e)return()=>{lt.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(M.Token,e),location.reload()}})}},Zy=e=>{const{close:i}=Z(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${De(s,"main")}, ${De(s,"dark1")})`;return t.jsxs(gl,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(ee,{to:zi(ni,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(mt,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(fn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:ml(n)})]})},e1=e=>{const{close:i}=Z(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${De(s,"dark1")}, ${De(s,"main")})`;return t.jsxs(gl,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(ee,{to:zi(ni,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(mt,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(fn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:ml(n)})]})},t1=u.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?My(i):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${j.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>bo(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${bo(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,An=e=>{const{open:i}=Z(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:p,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:m="middle"}=e,x=hl(h,n,d,p);if(f)return t.jsx(Wy,{});const v=b=>{r?r(b):h||(Ie.close(),i(n==="staff"?t.jsx(e1,{...e}):t.jsx(Zy,{...e})))};return t.jsxs(t1,{orientation:g,size:m,onClick:v,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(zt,{name:o,avatar:s,width:on(g,m),height:on(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ne,{words:x})})]})]})},i1=({filter:e,paginationList:i,noResultContent:n})=>{const{$items:s,$isPending:o,$hasNext:a,next:r,load:c}=i,d=ge(o),p=ge(a),h=()=>{r({filter:e})},f=()=>{c({filter:e})};return t.jsx(zy,{items:s.getState(),renderItem:n1,handleNext:h,isPending:d,hasNext:p,filter:e,handleReload:f,showAlphabetLetters:!0,noResultContent:n})};function n1(e,i,n){return t.jsx(An,{name:e.fio,type:e.division?"staff":"stud",avatar:e.avatar,faculty:e.faculty,group:e.group,isMe:i,division:e.division,indexNumber:(n??0)+1},n)}const s1=u.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-and-filter {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`,o1=({title:e,searchPlaceholder:i,paginationList:n,defaultFilter:s,noResultContent:o,filterPlaceholder:a,filterRequest:r,underSearchText:c,customMask:d,search:p=!0})=>{const{load:h}=n,[f,g]=l.useState(s),[m,x]=l.useState({id:f,value:f,title:f}),v=c==null?void 0:c(m),b=async w=>{await h({filter:m,search:w})},S=w=>{x(w??null)},D=()=>{x(null)};return t.jsxs(s1,{children:[e&&t.jsx(W,{size:2,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"search-and-filter",children:[p&&t.jsx(Iy,{triggerSearchOn:[(m==null?void 0:m.id)??""],placeholder:i??"Поиск",searchApi:b,validationCheck:!0}),r&&t.jsx(dl,{value:f,setValue:g,onHintClick:S,onValueEmpty:D,customMask:d,placeholder:a??"Поиск",request:r})]}),t.jsx(ne,{visible:!!v,children:v}),t.jsx(i1,{paginationList:n,noResultContent:o,filter:m})]})},a1=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,Ls=()=>{var f;const{data:{user:e}}=me.useUser(),{$isPending:i,$items:n}=mo,s=Kp(),o=Ze(),a=ge(i),r=ge(n),c=s.params.filter??((f=e==null?void 0:e.subdivisions)==null?void 0:f[0].subdivision)??"",d=g=>g!=null&&g.title?`Кафедра: ${g==null?void 0:g.title} • Всего: ${(r==null?void 0:r.length)??0}`:null,{isMobile:p}=wt(),h=(e==null?void 0:e.user_status)==="staff";return!p&&h&&o.push(`${yl}?subdivision=${c}`),t.jsx(ze,{load:function(){},loading:a,error:null,data:r,children:t.jsx(a1,{children:t.jsx(_t,{children:t.jsx(o1,{searchPlaceholder:"Поиск сотрудников",paginationList:mo,filterRequest:js,defaultFilter:c,filterPlaceholder:"Подразделения",underSearchText:d})})})})},bl=Object.freeze(Object.defineProperty({__proto__:null,default:Ls},Symbol.toStringTag,{value:"Module"})),E="/applications",re="/hr-applications",yo="/staff_orders",_o="/staff_blanks",r1="/ad_logins",zs="/doclist",wo="/pps_vote2020",l1="/children",vl="/pps_contest",c1="/electronic-statements",ye="/onboarding",d1="/structure-of-the-university",p1="/addresses-and-contacts",u1="/brandbook",h1="/wifi-at-the-university",g1="/health-care",f1="/psychological-help",x1="/social-environment",m1="/vacation",ri="/kpi_pps",li="/kpi_admin",jo="/sc_news",ko="/oop",So="/centers",b1="/helpful-information",v1="/download-agreements",To="/physical-education/main",yl="/all-staff",y1="/physical-education/student/:studentId",_l=E+"/contact-info-actualization",wl=E+"/contact-info-actualization-test",jl=E+"/data-verification",kl=E+"/issuance-of-licenses",Sl=E+"/getting-computer-equipment",Tl=E+"/connecting-computer",El=E+"/printer-maintenance",$l=E+"/question-sed",Pl=E+"/question-personal-account",Cl=E+"/other-it-services",Ol=E+"/certificate-from-the-place-of-work",Al=E+"/visa-certificate",Dl=E+"/certificate-of-work-experience",Nl=E+"/number-of-unused-vacation-days",Eo=E+"/contact-details",_1=E+"/contact-details/:guid",Il=E+"/edit-phonebook-subdivision",Rl=E+"/edit-phonebook-inner-phone",Ll=E+"/edit-phonebook-email",zl=E+"/copy-of-the-employment-record",Ml=E+"/copies-of-documents-from-the-personal-file",Fl=E+"/work-on-the-terms-of-external-concurrency",Bl=E+"/certificate-time-parental-leave",Hl=E+"/arbitrary-request",Ul=E+"/courier",Wl=E+"/persona-income-tax-reference",Vl=E+"/payment-of-child-birth-allowance",Gl=E+"/payment-for-child-care",ql=re+"/part-time-employment/",w1=re+"/dismissal/:id",j1=re+"/work-transfer/:id",k1=re+"/extra-holiday-coll",S1=re+"/holiday-planning",T1=re+"/holiday-transfer/:id",E1=re+"/holiday-work/:id",$1=re+"/work-transfer-change-rate/:id",P1=re+"/medical-examination",as=re+"/buffer-dismissal",rs=re+"/buffer-holiday-planning",ls=re+"/buffer-holiday-transfer",cs=re+"/buffer-holiday-work",ds=re+"/buffer-medical-examination",Qi=re+"/buffer-work-transfer",Yl=E+"/living-in-residential-premises",Jl=E+"/guests-accomodation-on-campus",Kl=E+"/guests-passage-to-campus",Xl=E+"/relocation",Ql=E+"/termination-of-agreement",Zl=E+"/issuance-of-pass",ec=E+"/guest-pass",tc=E+"/certification-and-issuance-of-docs",ic=E+"/deferment-from-conscription",nc=E+"/certified-copies-of-military-docs",J=()=>_e({oldVersionUrl:"/sprav"}),$o=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(Q,{}),path:ye,Component:i0,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...xc,"contact-details":{id:"contact-details",title:"Контактные данные",icon:t.jsx(A,{}),color:"blue",path:Eo,Component:O?()=>_e({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Bx,isTemplate:!1,group:"GENERAL",show:!O},"contact-details-form":{id:"contact-details-form",title:"Контактные данные",hiddenTitle:!0,icon:t.jsx(A,{}),color:"blue",path:_1,Component:O?()=>_e({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Hx,isTemplate:!1,group:"GENERAL",isSubPage:!0,show:!1,backButtonText:"Назад",fallbackPrevPage:Eo},"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(aa,{}),path:v1,Component:Kr,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(nu,{}),path:l1,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"],show:!O},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(Q,{}),path:c1,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(pa,{}),path:pc,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(ut,{}),path:an,Component:Ns,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(Q,{}),path:vl,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(ua,{}),path:ri,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ri==null?void 0:ri.slice(1,ri.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(su,{}),path:li,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${li==null?void 0:li.slice(1,li.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(ou,{}),path:jo,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:jo}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(A,{}),path:yo,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:yo}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Yt,{}),path:_o,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:_o}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(A,{}),path:zs,Component:Ux,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(oa,{}),path:m1,Component:km,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(A,{}),color:"lightGreen",path:To,pageSize:"big",Component:Xx,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(A,{}),color:"pink",show:!1,path:y1,Component:Qx,isTemplate:!1,fallbackPrevPage:To,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(ji,{}),path:ko,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:ko}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(ji,{}),path:So,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:So}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(A,{}),path:b1,Component:Es,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Yi,{}),path:wo,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:wo}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(A,{}),path:E,Component:Wx,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(A,{}),path:re,Component:O?()=>_e({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Sm,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(A,{}),color:"blue",path:jl,Component:Sr,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Yi,{}),path:Dn,Component:Ls,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],show:!1},"all-staff":{id:"all-staff",title:"Сотрудники",icon:t.jsx(Yi,{}),path:yl,Component:ul,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],pageSize:"big"}}),Po=()=>({...mc,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:kl,icon:t.jsx(A,{}),color:"blue",Component:O?J:em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:as,icon:t.jsx(A,{}),color:"blue",Component:O?J:Ar,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:cs,icon:t.jsx(A,{}),color:"blue",Component:O?J:hb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:ds,icon:t.jsx(A,{}),color:"blue",Component:O?J:Kb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:rs,icon:t.jsx(A,{}),color:"blue",Component:O?J:Sb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:ls,icon:t.jsx(A,{}),color:"blue",Component:O?J:Lb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Qi,icon:t.jsx(A,{}),color:"blue",Component:O?J:cv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:ql,icon:t.jsx(A,{}),color:"blue",Component:O?J:Tm,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:E1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Pm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:cs},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:P1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Cm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ds},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:S1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Om,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:rs},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:T1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Am,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:ls},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:j1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Dm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Qi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:$1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Nm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Qi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:k1,icon:t.jsx(A,{}),color:"blue",Component:O?J:$m,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:w1,icon:t.jsx(A,{}),color:"blue",Component:O?J:Em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:as},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(A,{}),color:"blue",path:Sl,Component:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(A,{}),color:"blue",path:Tl,Component:Yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(A,{}),color:"blue",path:El,Component:cm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(A,{}),color:"blue",path:$l,Component:pm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(A,{}),color:"blue",path:Pl,Component:dm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(A,{}),color:"blue",path:Cl,Component:om,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(A,{}),color:"blue",path:Ol,Component:zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(A,{}),color:"blue",path:Al,Component:um,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(A,{}),color:"blue",path:Dl,Component:O?J:Gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(A,{}),color:"blue",path:Nl,Component:tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"edit-phonebook-subdivision":{id:"edit-phonebook-subdivision",title:"Внесение изменений данных подразделения в телефонном справочнике",hiddenTitle:!0,icon:t.jsx(A,{}),color:"blue",path:Il,Component:im,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,keywords:["изменение данных подразделения в телефонном справочнике"]},"edit-phonebook-inner-phone":{id:"edit-phonebook-inner-phone",hiddenTitle:!0,title:"Запрос на изменение внутреннего телефона",icon:t.jsx(A,{}),color:"blue",path:Rl,Component:nm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"edit-phonebook-email":{id:"edit-phonebook-email",hiddenTitle:!0,title:"Запрос на изменение корпоративной электронной почты",icon:t.jsx(A,{}),color:"blue",path:Ll,Component:sm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(A,{}),color:"blue",path:zl,Component:O?J:Jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(A,{}),color:"blue",path:Ml,Component:O?J:Mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(A,{}),color:"blue",path:Fl,Component:O?J:hm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(A,{}),color:"blue",path:Bl,Component:O?J:qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(A,{}),color:"blue",path:Hl,Component:O?J:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},courier:{id:"courier",title:"Курьер",icon:t.jsx(A,{}),color:"blue",path:Ul,Component:O?J:Kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(A,{}),color:"blue",path:Wl,Component:O?J:lm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(A,{}),color:"blue",path:Vl,Component:O?J:rm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(A,{}),color:"blue",path:Gl,Component:O?J:am,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(A,{}),color:"blue",path:_l,Component:uo,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,show:!1,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"data-actualization":{id:"data-actualization",title:"Актуализация контактных данных (тест)",icon:t.jsx(A,{}),color:"blue",path:wl,Component:O?uo:Fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,show:!1},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(A,{}),color:"blue",path:jl,Component:Sr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(A,{}),color:"blue",path:Yl,Component:O?J:gm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(A,{}),color:"blue",path:Jl,Component:O?J:fm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(A,{}),color:"blue",path:Kl,Component:O?J:xm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(A,{}),color:"blue",path:Xl,Component:O?J:mm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(A,{}),color:"blue",path:Ql,Component:O?J:bm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(A,{}),color:"blue",path:Zl,Component:O?J:vm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(A,{}),color:"blue",path:ec,Component:O?J:ym,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(A,{}),color:"blue",path:tc,Component:O?J:_m,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(A,{}),color:"blue",path:ic,Component:O?J:wm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(A,{}),color:"blue",path:nc,Component:O?J:jm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ye,{to:ye})),icon:t.jsx(Yt,{}),isTemplate:!1,path:x1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ye,{to:ye})),icon:t.jsx(Xp,{}),isTemplate:!1,path:f1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ye,{to:ye})),icon:t.jsx(Qp,{}),isTemplate:!1,path:g1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ye,{to:ye})),icon:t.jsx(Zp,{}),isTemplate:!1,path:h1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ye,{to:ye})),icon:t.jsx(eu,{}),isTemplate:!1,path:u1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(tu,{}),path:p1,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ye,{to:ye})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(iu,{}),path:d1,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ye,{to:ye})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0}}),sc="/login",C1="/forgot-password",O1="/medical-certificate",A1="/vaccination",mi="/all",Ms="/home",Fs="/profile",Bs="/chat",D1="/messages",p$=Bs+"/:chatId",oc="/electronic-interaction-agreement",an="/payments",Mt="/schedule",ac="/all-students",N1="/all-students/:filter",Dn="/all-teachers",I1="/all-teachers/:filter",Hs="/feedback",rc="/cant-access",lc="/memo-freshmen",cc="/get-your-login",dc="/memo-teacher",we="/settings",u$=we+"/:id",R1=we+"/appearance",L1=we+"/personal",z1=we+"/security",M1=we+"/home-page",F1=we+"/customize-menu",B1=we+"/notifications",H1="/instructions",pc="/project-activity",U1="/softskills",uc="/alerts",hc="/lk-notifications",gc="/helpful-information",ni=Mt+"/:page/:filter",fc=Mt+"/current",W1=Mt+"/semestr",V1=Mt+"/session",G1=Mt+"/retake",q1=gc+"/:infoType";var Y1=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(Y1||{});const J1=[{id:0,title:"",icon:"",path:sc,Component:Ix},{id:1,title:"",icon:"",path:C1,Component:Mm},{id:2,title:"Обратная связь",icon:t.jsx(ji,{}),path:Hs,Component:Er},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(Pt,{}),path:rc,Component:Lm},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:cc,Component:Zm},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:lc,Component:e0},{id:6,title:"Вниманию сотрудников!",icon:"",path:dc,Component:t0}],xc={all:{id:"all",title:"Все разделы",icon:t.jsx(du,{}),path:mi,Component:Im,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(fa,{}),path:we,Component:Ym,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(A,{}),path:zs,Component:Qm,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(xa,{}),path:uc,Component:Fm,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(ga,{}),path:Ms,Component:Bm,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(ma,{}),path:Fs,Component:Um,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(xn,{}),path:hc,Component:n0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(ba,{}),path:oc,Component:zm,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(pu,{}),path:Bs,isOldLkPage:!0,Component:()=>_e({oldVersionUrl:D1}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(mt,{}),path:Mt,menuPath:fc,Component:$r,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Yt,{}),path:ac,Component:Tr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(ji,{}),path:Hs,Component:Er,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(uu,{}),path:H1,Component:Hm,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(va,{}),path:A1,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0,show:!O}},K1={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(mt,{}),path:fc,Component:Wm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(vs,{}),path:W1,Component:Vm,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(ha,{}),path:V1,Component:Gm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(hn,{}),path:G1,Component:qm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},mc={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(mt,{}),path:ni,Component:$r,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...K1,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Yt,{}),path:N1,Component:Tr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Yt,{}),path:I1,Component:Rm,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(au,{}),path:R1,Component:Km,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:we,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(ru,{}),path:L1,Component:Jm,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:we,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(lu,{}),path:z1,Component:Xm,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:we,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(ga,{}),path:M1,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:we,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(cu,{}),path:F1,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:we,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(xn,{}),path:B1,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:we,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:q1,Component:Es,color:"grey",isTemplate:!0,show:!1}},bc=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;Ci.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else U.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},vc=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;Ci.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},X1=(e,i,n,s)=>{if(i){const o=s.length+wh;if(n<o){U.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??mn;Ci.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else U.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},Q1=(e,i,n)=>{if(i)if(n.includes(e))U.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{U.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;Ci.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},Z1=u.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,e_=u.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,t_=e=>{var m,x,v;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=ei.useSettings(),{data:r}=me.useUser(),c=Ue.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(b=>b===i),p=(x=a["settings-customize-menu"].property.pages)==null?void 0:x.find(b=>b===i),h=((v=r.user)==null?void 0:v.user_status)==="staff"?Pa:mn,f=()=>{bc(i,a),Ie.close()},g=()=>{X1(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Ie.close()};return t.jsxs(Z1,{children:[t.jsxs("div",{className:"top",children:[t.jsx(yt,{color:o,size:22,children:n}),t.jsx(e_,{children:s})]}),t.jsx(be,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(Pt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{vc(i,a),Ie.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(Ct,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),p?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(Pt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>Q1(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(Ct,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},yc=({route:e})=>{var s;const i=j[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ie.open({e:o,height:105,content:t.jsx(t_,{...e})})};return t.jsx(_,{icon:t.jsx(ya,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},_c=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},wc=u(it)`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);
    background: var(--block-content);

    .new {
        position: absolute;
        top: ${({isVertical:e})=>e?"5px":"18px"};
        right: ${({isVertical:e})=>e?"-5px":"50px"};
        border-radius: ${({isVertical:e})=>e?"var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight)":"var(--brLight)"};
        background: ${j.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
    }

    .more-button {
        position: absolute;
        top: ${({isVertical:e})=>e?"5px":"50%"};
        left: ${({isVertical:e})=>e?"5px":"auto"};
        right: ${({isVertical:e})=>!e&&"10px"};
        transform: ${({isVertical:e})=>!e&&"translateY(-50%)"};
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    .outside {
        position: static;
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: ${({isVertical:e})=>e?"column":"row"};
        border-radius: var(--brLight);
        align-items: center;
        justify-content: ${({isVertical:e})=>e?"center":"flex-start"};
        padding: 15px;

        .notifications-title {
            opacity: 0;
            transform: translateY(20px);
            font-size: 0.7em;
            position: absolute;
            transition: 0.2s;
            bottom: 25px;
            font-weight: bold;
            color: var(--text);
            right: ${({isVertical:e})=>!e&&"50px"};
        }

        @media (min-width: 1001px) {
            &:hover {
                .more-button {
                    opacity: 1;
                    visibility: visible;
                }
                .notification-circle {
                    opacity: 0;
                }

                .icon {
                    box-shadow: 0 20px 110px 60px ${({color:e})=>j[e].main};
                    transform: ${({isVertical:e})=>e&&"scale(1.1) translateY(20px)"};
                }

                b {
                    opacity: ${({hasNotifications:e,isVertical:i})=>i&&e&&0};
                    transform: ${({isVertical:e})=>e&&"scale(0.95) translateY(40%)"};
                    color: ${({isVertical:e})=>e?"#fff":"var(--text)"};
                }

                .notifications-title {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: ${({isVertical:e})=>e?"center":"left"};
            color: var(--text);
            transition: 0.2s;
            font-weight: 600;
            height: 30px;
        }
    }
`,i_=u.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,Co=e=>{var b;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:p,id:h,background:f,orientation:g="vertical"}=e,m=g==="vertical",{settings:x}=ei.useSettings(),v=!!((b=x["settings-home-page"].property.pages)!=null&&b.find(S=>S===h));return t.jsxs(wc,{padding:"0",width:"100%",maxWidth:"100%",height:m?"135px":"60px",isVertical:m,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:f,children:[(d||c)&&m&&t.jsxs(i_,{children:[d&&t.jsx(gn,{title:"Раздел в старом ЛК"}),c&&t.jsx(Zi,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(yt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(hu,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",_c(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),p==="use"&&t.jsx(yc,{route:e}),p==="add"?v?t.jsx(_,{icon:t.jsx(Xe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>vc(h,x)}):t.jsx(_,{icon:t.jsx(Ct,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>bc(h,x)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},n_=u(wc)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,h$=()=>t.jsx(ee,{to:mi,onClick:()=>{st.changeOpen({isOpen:!1,currentPage:mi.slice(1,mi.length)})},children:t.jsx(n_,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(yt,{color:"blue",children:t.jsx(gu,{})}),t.jsx("b",{children:"Все разделы"})]})})}),s_=u(ee)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,o_=u.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,a_=e=>{const{close:i}=Z(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(o_,{width:o==="vertical"?c:"100%",children:t.jsx(Co,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),st.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(s_,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(Co,{...e,maxWordLength:r,mode:a})})},r_=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,l_=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ue,{text:"Ничего не было найдено"}):t.jsx(r_,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(a_,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),c_=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(je(s.title).includes(je(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>je(a).includes(je(e))))&&(n[s.id]=s),n},{}),d_=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,p_=u(ee)`
    width: 100%;
`,u_=({division:e})=>{const{close:i}=Z();return t.jsxs(d_,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(yt,{size:120,color:"purple",children:t.jsx(hi,{})}),t.jsx(ne,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(p_,{to:`${Dn}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(_a,{}),width:"100%",text:"Список"})})]})},h_=u.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,g_=({division:e})=>{const{open:i}=Z(),n=()=>{i(t.jsx(u_,{division:e}),"Подразделение")};return t.jsx(h_,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",children:[t.jsx(hi,{}),t.jsx(ne,{fontSize:"1rem",children:e})]}),t.jsx(Qe,{})]})})},f_=({divisions:e})=>!e||e.length===0?null:t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(g_,{division:i},i))}),x_=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Oo=u(ee)`
    width: 100%;
`,jc=({group:e})=>{const{close:i}=Z();return t.jsxs(x_,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(yt,{size:120,color:"lightBlue",children:t.jsx(wa,{})}),t.jsx(ne,{fontSize:"1.2rem",children:e})]}),t.jsxs($,{gap:"8px",onClick:i,children:[t.jsx(Oo,{to:zi(ni,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(mt,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(Oo,{to:`${ac}/${e}`,children:t.jsx(_,{icon:t.jsx(_a,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},m_=u.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,b_=({group:e})=>{const{open:i}=Z(),n=()=>{i(t.jsx(jc,{group:e}),"Группа")};return t.jsx(m_,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",h:"50px",children:[t.jsx(wa,{}),t.jsx(ne,{fontSize:"1rem",children:e})]}),t.jsx(Qe,{})]})})},v_=({groups:e})=>e?t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(b_,{group:i},i))}):null,Yn=[{title:"Инструкции",links:[{link:R+"/storage/files/instruction_business_trip_docs.docx",title:"Инструкция для командируемых работников",icon:""},{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ie},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ie},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ie},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ie},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ie},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ie},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ie},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ie}]}];var $e=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))($e||{});const Ht={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},y_=[{id:$e.information,title:Ht[$e.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Воинский учёт",visible:"student",links:[{title:"Военнообязанным и призывникам",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/voennoobyazannym-i-prizyvnikam/"},{title:"Единый пункт призыва",visible:"student",href:"https://www.mos.ru/city/projects/prizyv/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:$e.security,title:Ht[$e.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:$e.instructions,title:Ht[$e.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Yn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:$e.regulations,title:Ht[$e.regulations],visible:"staff",content:[{title:"Положения",links:[...Yn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:$e.orders,title:Ht[$e.orders],visible:"staff",content:[{title:"Приказы",links:[...Yn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:$e.courses,title:Ht[$e.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],__=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>je(a.title).includes(je(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),w_=u.div`
    width: calc(100% - 2px);
    padding: 16px;
    margin: 1px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    padding: 16px;
    a {
        font-size: 0.95rem;
    }
`,j_=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s,visible:o},a)=>o==="staff"&&!i||o==="student"&&i?null:t.jsxs(w_,{children:[t.jsx(W,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Se,{gap:16,children:s.map(({title:r,href:c,visible:d},p)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:c,target:"_blank",rel:"noreferrer",children:r},r+p))})]},n+a))}):null;function ps(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const k_=u.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,S_=u.div``,T_=u.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,kc=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(k_,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(S_,{children:e}),t.jsx(T_,{isOpen:o,children:i})]})},E_="2.3.0",Sc=()=>t.jsx(te,{icon:null,type:"info",title:E_,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Oe=({color:e,children:i})=>t.jsx(yt,{color:e,children:i}),$_=()=>({info:t.jsx(Oe,{color:"grey",children:t.jsx(Ke,{})}),message:t.jsx(Oe,{color:"red",children:t.jsx(fn,{})}),alert:t.jsx(Oe,{color:"purple",children:t.jsx(xa,{})}),"payment-dorm":t.jsx(Oe,{color:"green",children:t.jsx(ut,{})}),"payment-ed":t.jsx(Oe,{color:"green",children:t.jsx(ut,{})}),"digital-services":t.jsx(Oe,{color:"red",children:t.jsx(A,{})}),"doc-for-review":t.jsx(Oe,{color:"blue",children:t.jsx(A,{})}),"hr-applications":t.jsx(Oe,{color:"green",children:t.jsx(A,{})}),"kpi-pps":t.jsx(Oe,{color:"pink",children:t.jsx(ua,{})}),schedule:t.jsx(Oe,{color:"pink",children:t.jsx(mt,{})}),"version-update":t.jsx(Sc,{}),"electronic-interaction":t.jsx(Oe,{color:"blue",children:t.jsx(ba,{})})}),P_=u(ee)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;

    .left-icon {
        width: fit-content;
        margin-right: 12px;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;

        .top-content {
            width: 100%;
            margin-top: 2px;
            display: flex;
            align-items: center;
        }
    }

    &:hover {
        background: var(--theme-1t);
    }
`,C_=u.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,O_={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},A_={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},D_={small:"0px",middle:"1px",large:"2px",big:"3px"},Tc=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:p,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:m=!0,fullText:x=!0,maxLetters:v=200,size:b="middle"})=>{const S=oe(o,"short"),{close:D}=Z(),[w,T]=l.useState(!1),N=I=>{I.stopPropagation(),I.preventDefault(),f?(T(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},z=()=>{a==null||a(),m&&Nt.clearById({id:e,pageId:c}),D()};return t.jsx(kc,{forceState:!w,bottomMargin:h,children:t.jsxs(P_,{to:d??"",onClick:z,children:[t.jsx("span",{className:"left-icon",children:$_()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ne,{fontSize:"0.7rem",children:t.jsx(Ne,{words:[S??"",s??""]})}),t.jsxs($,{d:"column",gap:D_[b],ai:"flex-start",children:[t.jsx(C_,{fontSize:O_[b],children:x?i:ps(i,v)}),t.jsx(ne,{fontSize:A_[b],children:x?n:ps(n,v)})]})]}),p&&t.jsx(_,{isActive:!(g&&w),icon:t.jsx(Xe,{}),background:"var(--theme-2)",onClick:N,style:{borderRadius:"20px"}})]})})},Ec=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Nt.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx($,{d:"column",children:e.map((o,a)=>l.createElement(Tc,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},rn=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,Ao=({people:e,type:i})=>!e||e.length===0?null:t.jsx($,{d:"column",children:e.map(n=>l.createElement(An,{name:n.fio,type:i,...n,key:n.id}))}),N_=()=>{const{allRoutes:e}=Ue.useMenu(),{notifications:i,removeNotificationLoading:n}=ot.useLkNotifications(),{data:{user:s}}=me.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>y_.flatMap(({visible:z,content:I})=>z==="staff"&&o||z==="student"&&!o||z==="all"?I:[]),[o]),[r,c]=l.useState(null),[d,p]=l.useState(null),[h,f]=l.useState(null),[g,m]=l.useState(null),[x,v]=l.useState(null),[b,S]=l.useState(null),[D,w]=l.useState(null),T=[{title:"Разделы",content:t.jsx(l_,{pages:x,showNotFound:!1}),clear:()=>{v(null)},search:z=>{if(e){const I=c_(z,e);v(I)}},data:x},{title:"Студенты",content:t.jsx(Ao,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async z=>{const{data:I}=await hg(z,"",1,20);m(I.items)}},{title:"Сотрудники",content:t.jsx(Ao,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async z=>{const{data:I}=await Ma(z,"",1,20);f(I.items)}},{title:"Группы",content:t.jsx(v_,{groups:r}),data:r,clear:()=>{c(null)},search:async z=>{const{data:I}=await gg(z);c(I.items)}},{title:"Подразделения",content:t.jsx(f_,{divisions:d}),data:d,clear:()=>{p(null)},search:async z=>{const{data:I}=await js(z);p(I.items)}},{title:"Уведомления",content:t.jsx(Ec,{notifications:b,loadingRemove:n}),clear:()=>{S(null)},search:z=>{const I=i.filter(se=>je(se.title).includes(z));S(I)},data:b},{title:"Полезная информация",content:t.jsx(j_,{blocks:D,isStaff:o}),clear:()=>{w(null)},search:z=>{const I=__(z,a);w(I)},data:D}];return[(()=>{const{content:z,clear:I,data:se}=T.reduce((H,Y)=>(rn(Y.data)&&(H.data.push(Y.data),H.content.push(t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",children:Y.title}),Y.content,t.jsx(be,{})]}))),H.clear.push(Y.clear),H),{content:[],clear:[],data:[]});return{title:"Все",content:z,clear:()=>I.map(H=>H()),search:async H=>{H.length<=8&&/\d|[-]/g.test(H)?await T[3].search(H):(T[0].search(H),T[5].search(H),T[6].search(H),rn(T[0].data)===0&&(await T[1].search(H),await T[2].search(H),await T[4].search(H)))},data:se}})(),...T]},I_=()=>JSON.parse(localStorage.getItem(M.SearchHistory)??"[]"),R_=()=>{const e=N_(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>I_(),[]),r=async g=>{e[i].clear();const m=xr(g)?fr(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(M.SearchHistory,JSON.stringify(a)))},[c,d,p]=kn({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!p&&!c.length,f=!!c.length&&!p&&!!rn(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},L_=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Xs,{})})):e?n.filter(s=>je(s).includes(je(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Xs,{})})):[],z_=()=>t.jsxs($,{gap:"8px",ai:"flex-start",children:[t.jsx(K,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(K,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(K,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),M_=u.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,F_=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=R_(),p=L_(r,n,d),{isOpen:h}=Z();return t.jsx(M_,{children:t.jsxs($,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ai,{value:n,setValue:s,loading:r,focusOn:h,hints:p}),t.jsx(Ts,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(mr,{value:n,setValue:s}),e&&t.jsx($,{h:"100%",children:t.jsx(ue,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(qt,{})})}),!r&&n.length!==0&&!e&&!rn(c[o].data)&&t.jsx($,{h:"100%",children:t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(ms,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(z_,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},B_=u(it)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${X.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,H_=u.div`
    background-color: var(--theme-1);
    width: 23px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.73rem;
    font-weight: 500;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 4px;
    color: var(--theme-mild-opposite);
`,U_=u($)`
    @media (max-width: 1000px) {
        display: none;
    }
`,W_=()=>{const e=qf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(ja,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},$c=({size:e="large"})=>{const i=W_(),{open:n}=Z(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(F_,{}),"Глобальный поиск");return gr(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(qt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(B_,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ne,{align:"left",fontSize:"0.9rem",children:t.jsxs($,{gap:"8px",children:[t.jsx(qt,{}),"Поиск"]})}),t.jsx(U_,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(H_,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},g$=u.header`
    width: 100%;
    /* max-width: 750px; */
    padding-top: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);

    svg {
        min-width: 30px;
    }

    @media (max-width: 1000px) {
        padding: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .info {
            display: none;
        }
    }
`;u.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const f$=u.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
        width: calc(50% - 5px);
    }

    button {
        font-size: 0.7rem;

        span {
            margin-top: 8px;
            margin-bottom: -8px;
        }
    }

    @media (max-width: 1000px) {
        flex-wrap: nowrap;

        button {
            height: 42px;
        }
    }
`,V_=u.div`
    min-width: ${({width:e})=>e??"35px"};
    height: ${({width:e})=>e??"35px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    background: ${({background:e})=>e??"var(--almostTransparent)"};

    @media (max-width: 1000px) {
        background: none;
        color: var(--text);
        /* color: ${({background:e})=>e??"var(--almostTransparent)"}; */
    }
`,x$=u.div`
    margin-bottom: 15px;
    height: fit-content;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 4px;

    b {
        font-size: 1.2rem;
    }

    span {
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        & > .info {
            display: none;
        }
    }
`,m$=u.div`
    margin-top: 50px;
    width: 100%;
`,b$=u.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,v$=u(it)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,y$=u.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,G_=u.div`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
    min-width: fit-content;
    display: flex;
    align-items: center;
    border-radius: var(--brLight);
    opacity: ${({disabled:e})=>e?"0.5":"1"};
    pointer-events: ${({disabled:e})=>e?"none":"all"};

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

    & > label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        user-select: none;
        cursor: pointer;
        min-width: fit-content;
        gap: 8px;

        b {
            color: var(--text);
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.85rem;
            /* white-space: nowrap; */
        }
    }

    &:hover {
        background: var(--theme-1);
    }
`,q_=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(G_,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(dx,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},Y_=u.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,J_=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(Y_,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(q_,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Pc=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=vt(),{settings:o}=ei.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(fu,{}):t.jsx(xu,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:x=>s(x)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:x=>s(x)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(x=>!x),i==null||i()};return e==="toggle"?t.jsx(J_,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:j.white.transparent2,icon:t.jsx(V_,{width:"30px",background:j.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},K_=({quantity:e=1,avatarShape:i="circle"})=>t.jsx($,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs($,{gap:"16px",ai:"center",children:[t.jsx(K,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(K,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(K,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),X_=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,Q_=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=ot.useLkNotifications();return l.useEffect(()=>{o&&U.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Nt.clearAllVisible()},[]),t.jsxs(X_,{children:[s.length===0&&!n&&t.jsx(qs,{height:"100%",children:t.jsx(ue,{text:i??"Нет новых уведомлений",image:i?t.jsx(Pt,{}):t.jsx(mu,{}),size:"70px"})}),t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(te,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Ec,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(K_,{quantity:10})]})},Z_=u.div`
    position: relative;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-1t);
    }

    svg {
        width: 22px;
        height: 22px;
        color: var(--text);
    }
`,Cc=()=>{const{close:e}=Z(),{notifications:i}=ot.useLkNotifications(),n=3;return t.jsxs($,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(Q_,{maxNotificationsVisible:n}),t.jsxs(ne,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",_c(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(ee,{to:hc,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},ew=()=>{const{notifications:e}=ot.useLkNotifications(),{open:i}=Z(),n=()=>{i(t.jsx(Cc,{}),"Уведомления")};return t.jsxs(Z_,{onClick:n,children:[t.jsx(At,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(xn,{})]})},tw=u.div`
    position: relative;
`,Oc=()=>{const{open:e}=Z(),{notifications:i}=ot.useLkNotifications(),n=()=>Ie.close(),s=()=>{lt.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:It.logout}),n()},o=()=>{Ie.close(),e(t.jsx(sd,{}),"Что нового")},a=()=>{e(t.jsx(Cc,{}),"Уведомления"),Ie.close()};return t.jsxs(t.Fragment,{children:[t.jsx(sk,{padding:"8px",size:"small"}),t.jsx(be,{}),t.jsx(Pc,{type:"h-button"}),t.jsx(be,{}),t.jsx(ee,{to:Fs,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(ma,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(tw,{children:[t.jsx(_,{onClick:a,icon:t.jsx(xn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(At,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(ee,{to:we,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(fa,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(gn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(be,{}),t.jsx(_,{align:"left",icon:t.jsx(bu,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(be,{}),t.jsx(_,{align:"left",icon:t.jsx(Sc,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},iw=u.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,nw=({showSearch:e=!1})=>{const{data:{user:i}}=me.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ie.open({e:s,height:143,content:t.jsx(Oc,{})})};return t.jsxs(iw,{children:[e&&t.jsx($c,{size:"icon"}),t.jsx(ew,{}),t.jsx(zt,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},sw=u.header`
    width: calc(100% - 15px);
    height: var(--header-height);
    box-shadow: ${({headerVisible:e})=>e?"var(--very-mild-shadow)":"none"};
    background: ${({headerVisible:e})=>e?"var(--theme)":"transparent"};
    z-index: 12;
    align-items: center;
    position: absolute;
    justify-content: center;
    top: 0;
    padding: 0 15px;
    transition: 0.1s background;
    color: var(--text);
    display: ${({hidden:e=!1})=>e?"none":"flex"};

    & .back-button-wrapper button {
        transform: translateX(${({headerVisible:e})=>e?"-35px":"0"});
    }
    ${X.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${X.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,ow=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,aw=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,rw=u.div`
    max-width: ${({maxWidth:e})=>`calc(${e} - ${e==="100%"?"55":"40"}px)`};
    width: 100%;
    font-size: ${({headerVisible:e})=>e?"1.1rem":"1.4rem"};
    font-weight: 600;
    transition: 0.2s transform, 0.2s font-size;
    position: absolute;
    white-space: ${({headerVisible:e})=>e?"nowrap":"normal"};
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
    will-change: transform;

    @media (max-width: 1232px) {
        max-width: ${ow};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${X.isTablet} {
        max-width: ${aw};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${X.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,lw=()=>{const{pathname:e}=Qt(),[i,n]=l.useState([e]),{action:s}=Ze();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},cw=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=Ze();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Ji,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},dw=({headerVisible:e,currentPage:i})=>{const n=Ze(),s=lw(),o=e||!!(i!=null&&i.planeHeader),a=Hr(i),r=(p=mi)=>()=>{st.changeOpen({isOpen:!1,currentPage:p.slice(1,p.length)}),n.push(p)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(cw,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Ji,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Ji,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Ji,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},pw=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=wt(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=dw({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(sw,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(rw,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs($,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(nw,{showSearch:!0})]})]})},uw=le.memo(pw),hw=u(ee)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: fit-content;
    border-radius: var(--brSemi);
    padding: 20px;
    transition: 0.2s;
    cursor: pointer;
    color: var(--text);
    position: relative;

    .more-button {
        top: 0;
        right: 0;
        position: absolute;
    }
    &:hover {
        background: var(--theme-1);
    }
`,gw=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(K,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Ie.open({e:c,height:143,content:t.jsx(Oc,{})})};return t.jsxs(hw,{to:Fs,children:[t.jsx(_,{icon:t.jsx(ya,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(zt,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(W,{size:5,children:e})]})},fw=le.memo(gw),xw=["isCurrent","color"],mw=u(ee).withConfig({shouldForwardProp:e=>!xw.includes(e)})`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 600;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 3px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border-radius: var(--brLight);
    color: ${({color:e,isCurrent:i})=>e&&i?j[e].main:"var(--text)"};

    & > button {
        opacity: 0;
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
    }

    .title {
        opacity: ${({isCurrent:e})=>e?1:.8};
        width: 100%;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg {
        opacity: ${({isCurrent:e})=>e?1:.8};
        min-width: 22px;
        width: 22px;
        height: 22px;
        margin-right: 12px;
    }

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:hover > button {
        opacity: 1;
    }

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: ${({color:e})=>e?j[e].main:"var(--reallyBlue)"};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({isCurrent:e})=>e?1:0};
    }

    ${X.isTablet} {
        margin: 0;
        height: 100%;
        font-weight: ${({isCurrent:e})=>e?800:600};

        & > button {
            display: none;
        }
        /* span {
            width: 100%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        } */
        justify-content: center;

        svg {
            margin-right: 0px;
            transform: translateY(-5px);
        }

        &::before {
            display: none;
            top: -2px;
            left: 50%;
            transform: translateX(-50%);
        }

        .notification {
            top: 10px;
            right: 0px;
        }

        .title {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: 8px;
            font-size: 0.65em;
            width: 100%;
            text-align: center;
        }
    }
`,bw=u.div`
    min-width: 235px;
    width: 235px;
    height: ${({height:e})=>e+"px"};
    box-shadow: var(--very-mild-shadow);
    border-radius: 0 var(--brSemi) var(--brSemi) 0;
    background: var(--block);
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 15px;
    transition: 0.2s transform, width 0.3s, 0.2s left, 0.2 opacity;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    .top-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        align-items: center;
        max-height: 100%;
    }

    @media (max-width: 1000px) {
        transition: 0.2s left, 0.2s opacity;
        position: absolute;
        left: ${({isOpen:e})=>e?"0":"-100%"};
        opacity: ${({isOpen:e})=>e?"1":"0"};
        width: 100%;
        font-size: 0.9em;

        .top-wrapper {
            max-height: calc(100% - 60px);

            img {
                width: 200px;
            }
        }
    }
`,vw=u.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,yw=u.button`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;
    border: none;
    background: transparent;
    color: var(--text);

    svg {
        width: 22px;
        height: 22px;
        margin-right: 7px;
    }

    &::before {
        content: '';
        height: 20px;
        width: 0;
        display: block;
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        background: var(--blue);
        border-radius: 10px;
        transition: 0.2s width;
    }

    &:hover::before {
        width: 5px;
        background: var(--red);
    }
`,_w=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(mw,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(At,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(At,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(yc,{route:e})]})},Ac=le.memo(_w),ww=()=>{const{isOpen:e}=Ue.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>st.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},jw=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(yw,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(jw);u.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;u.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const kw=()=>{const{leftsideBarRoutes:e}=Ue.useMenu(),i=Qt();return e?t.jsx(vw,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Ac,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs($,{d:"column",children:[t.jsxs($,{gap:"8px",children:[t.jsx(K,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(K,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(K,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(K,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(K,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(K,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(K,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(K,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},Sw=le.memo(kw),Tw=()=>{const{isOpen:e}=Ue.useMenu(),{width:i,height:n}=jn(),{data:{user:s}}=me.useUser(),{visibleRoutes:o}=Ue.useMenu(),a=Qt();return t.jsxs(bw,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(ee,{to:Ms,children:t.jsx(_n,{width:"165px"})}),t.jsx(fw,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx($c,{size:"small"}),t.jsx(Sw,{})]}),t.jsx(Pc,{type:"toggle"}),i<1e3&&t.jsx(ww,{})]})},Ew=u.div`
    width: 300px;
    position: absolute;
    top: calc(var(--header-height) + 10px);
    right: 20px;
    background: var(--theme);
    border-radius: var(--brLight);
    z-index: 100;
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    transform: translateY(${({isOpen:e})=>e?"0px":"-20px"});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    font-weight: 600;
    cursor: ${({isClickable:e})=>e?"pointer":"normal"};

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({isOpen:e})=>e?"-50%, 0px":"-50%, -20px"});
        font-size: 0.8em;
    }
`,$w=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Ga.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{U.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),U.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(Ew,{isOpen:e,isClickable:!!o,color:Ot[n].color,onClick:a,children:t.jsx(te,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>U.openPopUpMessage({isOpen:!1}),children:i})})};u.div`
    display: block;
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    white-space: pre-line;
    padding: 15px;
    transition: 0.2s;
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transform: translateY(${({isOpen:e})=>e?"50%":"51%"}) translateX(-50%)
        scale(${({isOpen:e})=>e?"1":"0.95"});

    @media (max-width: 1000px) {
        bottom: 10px;
        width: calc(100% - 20px);
        transform: translateY(0) translateX(-50%) scale(${({isOpen:e})=>e?"1":"0.95"});
    }
`;const Pw=u.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: 0 0 40px #0000002f;
    color: var(--text);
    z-index: 10000;
    padding: 20px;
    transition: 0.2s;
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transform: translateY(${({isOpen:e})=>e?"50%":"51%"}) translateX(-50%)
        scale(${({isOpen:e})=>e?"1":"0.95"});

    @media (max-width: 1000px) {
        bottom: 10px;
        width: calc(100% - 20px);
        transform: translateY(0) translateX(-50%) scale(${({isOpen:e})=>e?"1":"0.95"});
    }
`,Cw=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Xa.useConfirm(),o=l.useRef(null);ti(o,()=>lt.closeConfirm());const a=()=>{n(),lt.closeConfirm()},r=()=>{lt.closeConfirm()};return t.jsx(On,{isOpen:e,children:t.jsxs(Pw,{isOpen:e,ref:o,children:[t.jsx(W,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Se,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:j.red.main,background:"transparent",hoverBackground:j.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:j.blue.main,background:"transparent",hoverBackground:j.blue.transparent3})]})]})})},Ow=u.div`
    display: flex;
    align-items: ${({align:e})=>ts(e)};
    flex-direction: column;
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"100%"};
    height: 100%;

    & > .slider-content {
        display: flex;
        width: 100%;
        max-width: ${({maxWidth:e})=>e??"100%"};
        overflow-x: auto;
        margin-top: 10px;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            height: 100%;
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`,Aw=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[p,h]=l.useState(i),{width:f}=jn(),g=l.useRef(null),m=()=>{var v,b;g!=null&&g.current&&h(Math.round(((v=g.current)==null?void 0:v.scrollLeft)/((b=g.current)==null?void 0:b.clientWidth)))},x=v=>{var b;h(v),r==null||r((b=e[v])==null?void 0:b.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*v)};return l.useEffect(()=>{x(p)},[i,f]),t.jsxs(Ow,{width:n,align:c,maxWidth:o,children:[t.jsx(Ts,{pages:e.map(({title:v,condition:b})=>({title:v,condition:b})),currentPage:p,setCurrentPage:x,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(v=>v.condition!==void 0&&v.condition||v.condition===void 0?t.jsx("div",{className:"slider-page",children:v.content},v.title):t.jsx("div",{className:"slider-page",children:t.jsx(ue,{text:"Нет данных"})},v.title))})]})},Us=Aw,ln=e=>{const i=je(e),s=[{keys:["распознаван"],icon:t.jsx(yu,{})},{keys:["принт"],icon:t.jsx(_u,{})},{keys:["химич"],icon:t.jsx(wu,{})},{keys:["сервер"],icon:t.jsx(ju,{})},{keys:["игр"],icon:t.jsx(ku,{})},{keys:["жизнед"],icon:t.jsx(Su,{})},{keys:["web","веб"],icon:t.jsx(Tu,{})},{keys:["истор"],icon:t.jsx(Eu,{})},{keys:["информат"],icon:t.jsx($u,{})},{keys:["информации"],icon:t.jsx(Ke,{})},{keys:["мобильн"],icon:t.jsx(Pu,{})},{keys:["безопасн"],icon:t.jsx(Cu,{})},{keys:["автоматиз"],icon:t.jsx(Ou,{})},{keys:["линейн"],icon:t.jsx(Au,{})},{keys:["обработ"],icon:t.jsx(Du,{})},{keys:["презентац"],icon:t.jsx(Nu,{})},{keys:["операционн"],icon:t.jsx(ja,{})},{keys:["эконом"],icon:t.jsx(ut,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(Iu,{})},{keys:["анализ"],icon:t.jsx(Ru,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Lu,{})},{keys:["сети","сетей"],icon:t.jsx(zu,{})},{keys:["матем"],icon:t.jsx(Mu,{})},{keys:["вероятн"],icon:t.jsx(Fu,{})},{keys:["философ"],icon:t.jsx(ka,{})},{keys:["данны"],icon:t.jsx(Bu,{})},{keys:["язык"],icon:t.jsx(Hu,{})},{keys:["спорт","физичес"],icon:t.jsx(Uu,{})},{keys:["проектная"],icon:t.jsx(Kn,{})},{keys:["интеллект"],icon:t.jsx(Wu,{})},{keys:["научн"],icon:t.jsx(Vu,{})},{keys:["предприним"],icon:t.jsx(Gu,{})},{keys:["коммуникац"],icon:t.jsx(qu,{})},{keys:["управлени"],icon:t.jsx(ys,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(ha,{})},{keys:["переработ"],icon:t.jsx(Yu,{})},{keys:["машин","инжен"],icon:t.jsx(Ju,{})},{keys:["проектир","расчет"],icon:t.jsx(Ku,{})},{keys:["производ"],icon:t.jsx(ra,{})},{keys:["эколог"],icon:t.jsx(Xu,{})},{keys:["защит"],icon:t.jsx(Qu,{})},{keys:["патент"],icon:t.jsx(Zu,{})},{keys:["материал"],icon:t.jsx(eh,{})},{keys:["физик"],icon:t.jsx(th,{})},{keys:["тайм"],icon:t.jsx(ih,{})},{keys:["практика"],icon:t.jsx(Sa,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(vu,{})},us={"9:00 - 10:30":j.green,"10:40 - 12:10":j.lightGreen,"12:20 - 13:50":j.blue,"14:30 - 16:00":j.purple,"16:10 - 17:40":j.pink,"17:50 - 19:20":j.red,"18:20 - 19:40":j.orange,"19:30 - 21:00":j.orange,"19:50 - 21:10":j.orange},Dc=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},Dw=u.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,Nn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},Nw=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=Nn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Nc=(e,i,n)=>Nw(e)===Nn(i.startTime)&&n,Ti=e=>e<=9?"0"+e:e,Iw=e=>`${Ti(Math.floor(e/60))}:${Ti(e%60)}`,Do=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},Rw=u.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${X.isMobile} {
        width: calc(100% + 40px);
    }
`,Lw=u.div`
    position: absolute;
    right: 0;
    width: 70%;
    top: 0;
    height: 100%;
    z-index: 1;

    & > div {
        top: 50%;
        left: 50%;
        position: inherit;
    }

    & > div:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.04;
        svg {
            width: 170px;
            height: 170px;
        }
    }
    & > div:nth-child(2) {
        opacity: 0.03;
        transform: translate(100px, -90px);
        svg {
            width: 100px;
            height: 100px;
        }
    }

    & > div:nth-child(3) {
        opacity: 0.02;
        transform: translate(-175px, 0px);
        svg {
            width: 70px;
            height: 70px;
        }
    }

    & > div:nth-child(4) {
        opacity: 0.01;
        transform: translate(90px, 10px);
        svg {
            width: 50px;
            height: 50px;
        }
    }
`,zw=u($)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${X.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,No=u.div`
    opacity: 0.7;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${({shortInfo:e})=>e?16:18}px;
        height: ${({shortInfo:e})=>e?16:18}px;
    }

    ${X.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,Mw=u(ne)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,Fw=u.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2px;
    z-index: -2;
    top: ${({currentTime:e})=>`${e}px`};

    &::before {
        display: block;
        content: '';
        min-width: 10px;
        height: 10px;
        border-radius: 12px;
        background: ${j.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${j.red.main};
    }
`,Bw=u.div`
    color: ${j.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${X.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,Hw=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(Do(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(Do(new Date,s[0]*60,s[1]*60))},_s.minute),()=>clearInterval(c.current)),[e]),t.jsx(Fw,{currentTime:(a-i)*n,children:o&&t.jsx(Bw,{children:Iw(a)})})},Ic=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},Ce=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(zw,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(No,{shortInfo:o,children:e}),t.jsx(Mw,{width:"100%",className:"text",children:i}),t.jsx(No,{shortInfo:o,children:s})]}),Uw=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,Ww=u(ee)`
    padding: 8px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-radius: var(--brLight);

    .start {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    &:hover {
        background: var(--theme-1t);
    }
`,Vw=({groups:e})=>{const{close:i}=Z();return t.jsx(Uw,{children:e.map(n=>t.jsxs(Ww,{to:zi(ni,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Yt,{}),n]}),t.jsx(Qe,{})]},n))})},Gw=({icon:e,background:i,noPadding:n=!1})=>t.jsx(Rw,{background:i,noPadding:n,children:t.jsxs(Lw,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),qw=u.div`
    width: 100%;
    height: 110px;
    position: relative;
    color: var(--text);
    margin-bottom: ${({noPadding:e})=>e?"0px":"40px"};

    .icon {
        position: absolute;
        bottom: ${({noPadding:e})=>e?"-5px":"-50px"};
        left: ${({noPadding:e})=>e?"-5px":"16px"};
        background: ${({iconBackground:e})=>e};
        transition: 0s;

        svg {
            color: ${({textColor:e})=>e};
        }
        border: 5px solid var(--block-content);
    }
`,Yw=({subjectName:e,color:i,noPadding:n})=>{const s=ln(e),{theme:o}=vt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(qw,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(Gw,{noPadding:n,icon:s,background:r}),t.jsx(yt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},Jw=nh`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		line-height: 130%;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
	}

	#root {
		display: flex;
		height: 100%;
		max-height: 100%;
	}

	body {
		-webkit-overflow-scrolling: touch;
		scrollbar-gutter: stable;
		position: relative;
		height: 100vh;
    	height: 100svh;
   		height: 100dvh;

		overflow: hidden;
	}

	@media (min-width: 1001px) {
		::-webkit-scrollbar {
			width: 14px;
		}
	
		::-webkit-scrollbar-track {
			background-color: transparent;
		}
	
		::-webkit-scrollbar-thumb {
			border-radius: 100px;
			border: 4px solid transparent;
			background-clip: content-box;
			background-color: var(--theme-mild-opposite);
		}

		::-webkit-scrollbar-thumb:hover {
			border: 3px solid transparent;
		}
	}



	h1 {
		color: var(--text-color);
	}

	:root {
		--light-box-shadow: 0 0 3px rgba(0, 0, 0, 0.342);
		--header-box-shadow: 3px 0 3px rgba(0, 0, 0, 0.342);
		--grey: #808080;
		--brLight: 9px;
		--brSemi: 19px;
		--brBold: 30px;
		--strong-shadow: 0 0 50px #000;
		--very-mild-shadow: 0 0 32px rgb(0 0 0 / 8%);
		--desktop-page-padding: 40px;
		--mobile-page-padding: 5px;
        --header-height: 55px;
        --mobile-bottom-menu-height: 60px;
		--theme: #fff;
		--block-content-shadow: 0 0 1px #3b3b3bab;
	}

	html[data-theme=dark] {
		--blue: #6d86e3;
		--theme-4: #494949;
		--theme-3: #3b3b3b;
		--theme-3-shadow: 5px 5px 10px rgba(0,0,0,0.377);
		--theme-2: rgb(34, 34, 34);
		--theme-1t: #0000001f;
		--theme-1: #363636;
		--theme-t: #0000005e;
		--theme: #3a3a3a;
		--search2: #313131;
		--search: #313131;
		--text: #f0f0f0;
		--invert-text: #272727;
		--invert: 0;
		--double-invert: 1;
		--theme-mild-opposite: #d2d2d2;
		--settings: #292929;
		--blue: #90b3e7;
		--blueTransparent: #90b3e7b0;
		--green: #94f0b9;
		--greenTransparent: #94f0b9b0;
		--red: #e27992;
		--reallyBlue: #567dff;
		--almostTransparent: rgba(0,0,0,0.281);
		--almostTransparentOpposite: hsla(0,0%,100%,0.103);
		--block: #2e2e2e;
		--block-shadow: 0;
		--block-shadow-1: 0 0 2px #ffffff8f;
		--block-content: #252525;
	}

	html[data-theme=light] {
		--blue: #6d86e3;
		--blueTransparent: #6d86e3b0;
		--theme-4: #f1f1f1;
		--theme-3: #f1f1f1;
		--theme-3-shadow: 5px 5px 10px hsla(0,0%,40.8%,0.24);
		--theme-2: rgb(243, 243, 243);
		--theme-1t: #00000005;
		--theme-1: #f5f5f5;
		--theme-t: #ffffff8f;
		--theme: #fff;
		--text: #272727;
		--invert-text: #f0f0f0;
		--invert: 1;
		--double-invert: 0;
		--theme-mild-opposite: #565656;
		--search2: #eee;
		--search: #f5f5f5;
		--settings: #dadada;
		--green: #62c087;
		--greenTransparent: #62c087b0;
		--red: #e27992;
		--reallyBlue: #567dff;
		--almostTransparent: hsla(0,0%,87.8%,0.486);
		--almostTransparentOpposite: rgba(53,53,53,0.151);
		--block: #fff;
		--block-shadow: 0 0 2px rgb(0 0 0 / 24%);
		--block-shadow-1: 0 0 2px rgb(0 0 0 / 24%);
		--block-content: #fff;
	}

	a {
		text-decoration: none;
		color: var(--blue);
		
		&:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    	}

		&:focus:not(:focus-visible) {
			outline: none;
		}
	}

	@keyframes defaultFadeIn {
		0%{
			transform: translateY(20px);
			opacity: 0;
		}
		100%{
			transform: translateY(0px);
			opacity: 1;
		}
	}
`,Kw=({color:e,start:i})=>`
&::before {
    content: '';
    background: ${e};
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: absolute;
    inset: 0;
    animation: ${i?"pulse-animation 1s infinite linear":"none"};
}

@keyframes pulse-animation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform:  scale(2.5);
        opacity: 0;
    }
}`,Xw=u.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${Kw}
`,Qw=u.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,Zw=u.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${X.isMobile} {
        font-size: 0.7rem;
    }
`,Rc=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=vt(),o=s==="light"?i.main:i.light2;return t.jsxs(Qw,{children:[t.jsx(Xw,{start:n,color:o}),e&&t.jsx(Zw,{children:e})]})},ej=u.div`
    position: relative;
    height: 100%;
    max-width: 400px;

    @media (min-width: 1001px) {
        min-width: 320px;
        width: 100%;
    }

    .date-interval {
        opacity: 0.6;
        font-size: 0.7em;
        font-weight: 600;
    }

    .time-and-next {
        display: flex;
        align-items: center;
        font-size: 0.7em;
        font-weight: bold;
        margin: 10px 0 5px 0;
        column-gap: 3px;
    }

    .teachers {
        & > * + * {
            margin-top: 5px;
        }
    }
`,tj=u($)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,ij=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:p,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:m=!1}=e,x=(d==null?void 0:d.split(","))??[],{open:v}=Z(),b=()=>{x.length===1?v(t.jsx(jc,{group:x[0]})):v(t.jsx(Vw,{groups:x}),"Группы")},S=()=>{v(t.jsx(sj,{place:s,link:r,name:n}))},D=Ic(n);return t.jsxs(ej,{children:[t.jsx(Yw,{subjectName:n,color:p,noPadding:m}),t.jsxs(tj,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs($,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs($,{gap:"8px",children:[t.jsx(Rc,{isCurrentEvent:g,color:p,timeInterval:i}),t.jsx(Lc,{timeLeft:Nn(i.split(" - ")[0],"minutes"),isNext:f,color:p,isCurrentEvent:g})]}),t.jsx(W,{size:3,align:"left",width:"fit-content",children:D.name})]}),t.jsx(be,{margin:"0",width:"100%"}),t.jsx(Ce,{icon:t.jsx(vs,{}),text:t.jsx(Ne,{words:[h??"",a]})}),((r==null?void 0:r.length)||D.link)&&t.jsx("a",{href:r??D.link,target:"_blank",rel:"noreferrer",children:t.jsx(Ce,{icon:t.jsx(Zi,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(Ce,{icon:t.jsx(Sa,{}),text:s}),!!c.length&&t.jsx(Ce,{icon:t.jsx(Xn,{}),text:t.jsx(Ne,{words:c})}),!!x.length&&t.jsx(Ce,{onClick:b,icon:t.jsx(ys,{}),text:t.jsx(Ne,{words:x}),rightIcon:t.jsx(Qe,{})}),t.jsx($,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(w=>t.jsx(An,{type:"staff",name:w},w))]})}),!r&&t.jsx(be,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:S})]})]})};u.span`
    padding: 3px 10px;
    height: 21px;
    display: flex;
    align-items: center;
    background: var(--search);
    background: ${({isCurrent:e,darkColor:i,color2:n})=>e?i:n};
    border-radius: 100px;
    /* box-shadow: ${({transparent:e})=>`0 0 30px ${e}`}; */
    color: #fff;
    white-space: nowrap;
`;const nj=u.a`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: blur(3px);
        transform: scale(1.2);
    }

    h3 {
        bottom: 15px;
        left: 15px;
        position: absolute;
        background: ${j.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`,qi=({title:e,link:i,image:n})=>i?t.jsxs(nj,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(W,{size:3,children:e})]}):null,Io=u.div`
    ${X.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,sj=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(Io,{children:t.jsx($,{jc:"center",children:t.jsx(Ve,{})})}):t.jsx(Io,{children:e==="Webex"?t.jsx(qi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(qi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(qi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(qi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},Ro=u.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Lc=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=vt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(Ro,{background:c,color:r,children:"Сейчас"}):t.jsxs(Ro,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},oj=u.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,_$=()=>t.jsxs(oj,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(K,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(K,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(K,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(K,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(K,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(K,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),zc="/assets/sleep-54d590c1.gif";var Mc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Mc||{});const aj=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],w$=[...aj,{title:"Месяц",condition:!0}],$t=Object.keys(Ut).reduce((e,i)=>(e[i]=[],e),{}),rj={schedule:{today:[],week:{...$t},semestr:{data:{...$t},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...$t},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},lj=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},Ei=e=>{const[i,n]=e.split(":");return+i*60+ +n};var cn=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(cn||{});const Fc=e=>{const[i,n]=e.split(" "),s=cn[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},Bc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=cn[o],r=cn[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},ui=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:p,groups:h})=>{const[f,g]=r.split(" - "),m=Ei(g)-Ei(f),[x,v]=d.split("-").map(D=>D.trim()),b=Fc(x),S=Bc(v,x);return{title:o,people:a,startTime:f,duration:m,startDate:b,endDate:S,placeIcon:t.jsx(sh,{}),dateInterval:d,color:us[r],place:s,link:c,groups:h,weekday:i,rooms:p,icon:ln(o)}}):[],cj=e=>new Date(e.setHours(0,0,0,0)),Lo=(e,i)=>(e??[]).filter(n=>{const s=cj(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=Fc(o),c=Bc(a,o);return s>=r&&s<=(c??r)}),Hc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),hs=e=>e instanceof Date&&isFinite(+e),dj=e=>{const i={...$t},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!hs(n)||!hs(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=Hc(a);if(r==="sunday")continue;i[r]=[...i[r],...ui(e[o].lessons,Ut[r].short)]}return{schedule:i,startDate:n,endDate:s}},Uc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),Wc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return U.evokePopUpMessage({message:f,type:"failure",time:_s.ten_seconds}),{schedule:rj.schedule,errorInData:f}}const o=new Date;let a=lj(o);o.getDay()===0&&(a=Uc(o,1));const r={...$t},c={...$t};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),x=e[f];"lessons"in x?(r[g]=ui(Lo(x.lessons,a),Ut[g].short),c[g]=ui(x.lessons,Ut[g].short)):(r[g]=ui(Lo(x,a),Ut[g].short),c[g]=ui(x,Ut[g].short)),n=new Date(Math.min(...c[g].map(v=>v.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(v=>(v.endDate??v.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),p=r[d],h=dj(i);return{schedule:{today:p,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},Vc=async e=>{const i=await Lh(e),n=await Mh();return Wc(i.data,n.data)},Gc=async e=>{const i=await zh(e),n=await Fh(e);return Wc(i.data,n.data)},zo={data:{schedule:null,externalSchedule:null,view:Mc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},pj=()=>q(de),Dt=L(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await Gc(n);if(i&&s==="stud")return await Vc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),si=L(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await Vc(e)}catch(i){throw new Error(i.message)}}),oi=L(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await Gc(e)}catch(i){throw new Error(i.message)}}),uj=k(),qc=k(),Yc=k(),Jc=k(),Kc=k(),Xc=k(),Qc=k(),de=V(zo).on(Dt,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Dt.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(qc,(e,i)=>({...e,data:{...e.data,view:i}})).on(Yc,(e,i)=>({...e,currentChosenDay:i.day})).on(Jc,()=>({...zo}));P({clock:Dt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify($t)}}),target:de});P({clock:Kc,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});P({clock:Xc,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});P({clock:oi.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});P({clock:si.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});P({clock:[si,oi,Dt],source:de,fn:e=>({...e,loading:!0}),target:de});P({clock:[si,oi],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});P({clock:[si.doneData,oi.doneData,Dt.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});P({clock:[si.failData,oi.failData,Dt.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});P({clock:Qc,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const Ws={useSchedule:pj},hj={changeCurrentModule:uj,changeView:qc,changeCurrentChosenDay:Yc,clearStore:Jc,resetExternalSchedule:Qc,setSearchValue:Xc,setFilter:Kc},gj={getScheduleFx:Dt,getGroupScheduleFx:si,getTeacherScheduleFx:oi},fj=Object.freeze(Object.defineProperty({__proto__:null,effects:gj,events:hj,selectors:Ws},Symbol.toStringTag,{value:"Module"})),xj=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${Ti(Math.floor(o/60))}:${Ti(o%60)}`},Zc=(e,i)=>e?`${e} - ${xj(e,i)}`:"9:00",gs=e=>!e||!hs(e)?0:e.getHours()*60+e.getMinutes(),Vs=(e,i)=>Ei(e.startTime)<=gs(new Date)&&gs(new Date)<=Ei(e.startTime)+e.duration&&i,ed=()=>{const{open:e}=Z();return n=>{const s=Zc(n.startTime,n.duration);e(t.jsx(ij,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:Vs(n,!0),noPadding:!0,...n}))}},Mo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},mj=()=>{const{currentDevice:e}=wt(),[i,n]=l.useState(Mo[e]);return l.useEffect(()=>{n(Mo[e])},[e]),i},bj=u.div`
    --time-width: 55px;

    ${X.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${X.isMobile} {
        --time-width: 35px;
        height: 400px;
    }

    position: relative;

    & {
        .calendar-wrapper {
            scroll-snap-align: center;
            min-width: 100%;
        }
    }
`,vj=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=mj(),o=ed(),a=[9,22];return e!=null&&e.length?t.jsx(bj,{children:t.jsx(nd,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ue,{text:"В этот день пар нет",image:zc})},td=()=>{const{data:{schedule:e}}=Ws.useSchedule(),{open:i}=Z(),n=Uc(new Date,1),s=sl(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=Hc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(vj,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},yj=u.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    font-weight: 500;
    text-align: center;

    img {
        width: 60px;
        height: 60px;
    }
`,j$=({errorInData:e})=>t.jsxs(yj,{children:[t.jsx("img",{src:zc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(td,{})]});u.div`
    border-radius: 15px;
    overflow: hidden;
    padding: 6px;
    background: var(--theme-2);
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow-y: auto;
    scroll-snap-type: y proximity;
    height: 100%;
    max-height: ${({height:e})=>`calc(${e}px - 325px)`};

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 1000px) {
        max-height: ${({height:e,isTeacherSchedule:i})=>`calc(${e}px - ${i?340:280}px)`};
    }
`;const _j=(e,i,n)=>i?e?1:.8:n?1:0,wj=e=>e?1:.9;u.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>_j(e,i,n)};
    transform: scale(${({isVisible:e})=>wj(e)});
    overflow-y: auto;

    .day-title {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: calc(100% - 20px);
        justify-content: space-between;

        h4 {
            color: ${({isCurrent:e})=>e?"var(--blue)":"var(--text)"};
        }

        span {
            font-weight: 500;
            opacity: 0.7;
            font-size: 0.9em;
            width: 90px;
            text-align: center;
        }
    }

    @media (max-width: 1000px) {
        transition: 0.5s opacity;
        opacity: ${({isVisible:e})=>e?"1":"0"};
        width: 100%;
        min-width: 100%;
        scroll-snap-align: start;
        transform: scale(1);
    }
`;const jj=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,k$=()=>t.jsxs(jj,{children:[t.jsx(dr,{size:"38px"}),t.jsx(W,{size:4,children:"Учебный день завершился"}),t.jsx(td,{})]});u.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    width: 100%;
    overflow: hidden;
    position: relative;
    flex-wrap: ${({inModal:e})=>e&&"wrap"};
    gap: 4px;

    &::after {
        content: '';
        display: ${({inModal:e})=>e&&"none"};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({isCurrent:e,color:i})=>`linear-gradient(90deg, transparent, ${e?i:"var(--block)"})`};
    }

    .room {
        width: fit-content;
        background: ${({isCurrent:e})=>e?"var(--almostTransparent)":"var(--theme-2)"};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`;u.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;u(ee)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`;u.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({isCurrent:e})=>e?"#fff":"var(--text)"};
    width: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0.7em;
    font-weight: 600;
    flex-wrap: ${({inModal:e})=>e&&"wrap"};
    gap: 5px;

    &::after {
        content: '';
        display: ${({inModal:e})=>e&&"none"};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({isCurrent:e,color:i})=>`linear-gradient(90deg, transparent, ${e?i:"var(--block)"})`};
    }

    span {
        background: ${({isCurrent:e})=>e?"var(--almostTransparent)":"var(--theme-2)"};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`;u.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--theme-1);
    border-radius: 10px;
    min-width: 80px;
    overflow: hidden;

    button {
        border-radius: 0;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;const kj=e=>{const[i,n]=e.split(":");return+i*60+ +n},id=(e,i,n)=>e?(kj(e)-i)*n:0,Sj=u.div`
    background: ${({background:e})=>e};
    width: ${({quantity:e,listView:i})=>i?"100%":`calc(${e}% - 2.5px)`};
    height: ${({duration:e,scale:i})=>`${e*i}px`};
    border-radius: 5px;
    padding: ${({shortInfo:e,scale:i})=>e?"8px":`${i*8}px`};
    display: flex;
    overflow: hidden;
    color: ${({textColor:e})=>e};
    cursor: pointer;
    position: ${({listView:e})=>e?"static":"absolute"};
    transform: translateX(${({leftShift:e})=>`calc(${e}% + ${1*(e/100)}px)`});
    left: 2px;
    top: ${({top:e})=>`${e}px`};
    /* box-shadow: 0 0 1px ${({color:e})=>e}; */

    a {
        color: ${({textColor:e})=>e};
        text-decoration: underline;
    }

    &:hover {
        filter: brightness(0.98);
    }

    ${X.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;u.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${X.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const Tj=u($)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${X.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,Ej=u.span`
    font-weight: 500;
    font-size: ${({shortInfo:e})=>e?"0.85rem":"0.93rem"};
    padding-top: 2px;
    white-space: ${({shortInfo:e,nameInOneRow:i})=>!e&&i&&"nowrap"};
    text-overflow: ${({shortInfo:e})=>!e&&"ellipsis"};
    overflow: ${({shortInfo:e})=>!e&&"hidden"};
    hyphens: auto;
    width: 100%;
    margin-bottom: 2px;
    margin-top: ${({listView:e})=>e?"2px":"0"};

    ${X.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,$j=u.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: 100%;
    justify-content: center;
    align-items: center;

    svg {
        width: 40%;
        height: auto;
    }
`,Pj=u($)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,Cj=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:p,onClick:h,link:f,rooms:g,dateInterval:m,leftShift:x,quantity:v,groups:b,isCurrentEvent:S=!1,nameInOneRow:D=!0,isNextEvent:w=!1,listView:T=!1,shortInfo:N=!1}=e,{theme:z}=vt(),{isMobile:I}=wt(),se=z==="light"?d.dark3:d.light3,H=z==="light"?d.transparent1:d.transparent2,Y=()=>h(e),ce=(I||v>1)&&N,Pe=I&&v>=2&&N,Te=r==null?void 0:r.map(ai=>{var Fi,Bi;const Me=ai.split(" ");return`${Me[0]??""} ${((Fi=Me[1])==null?void 0:Fi[0])??""}.${((Bi=Me[2])==null?void 0:Bi[0])??""}.`}),qe=id(o,c,p),Ee=Ic(i),xe=Pe?i.split(" ").map(ai=>ai[0].toUpperCase()):ps(Ee.name,N?ce?43:35:D?300:64),Ft=(b==null?void 0:b.split(","))??[];return t.jsxs(Sj,{background:H,textColor:se,listView:T,leftShift:100*x,quantity:100/v,duration:n,scale:p,top:qe,onClick:Y,shortInfo:N,children:[t.jsx($j,{children:s}),t.jsx($,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(Tj,{scale:p,d:"column",ai:"flex-start",shortInfo:N,children:[t.jsxs($,{d:"column",gap:"2px",children:[!N&&t.jsxs($,{gap:"8px",children:[t.jsx(Rc,{timeInterval:Zc(o,n),color:d,isCurrentEvent:S}),t.jsx(Lc,{timeLeft:Nn(o,"minutes"),isNext:w,color:d,isCurrentEvent:S}),!!(g!=null&&g.length)&&t.jsx(Ce,{shortInfo:N,icon:I&&v>1?void 0:t.jsx(Xn,{}),text:t.jsx(Ne,{words:g})}),(!!f||Ee.link)&&t.jsx("a",{href:f??Ee.link,target:"_blank",rel:"noreferrer",children:t.jsx(Ce,{shortInfo:N,icon:t.jsx(Zi,{}),text:f?a:"Cсылка"})}),!!Ft.length&&t.jsx(Ce,{icon:t.jsx(ys,{}),text:t.jsx(Ne,{words:Ft})})]}),t.jsx(Ej,{listView:T,nameInOneRow:D,scale:p,shortInfo:N,children:xe})]}),!!r.length&&!ce&&t.jsx(Ce,{shortInfo:N,text:t.jsx(Ne,{words:N?[Te[0]]:Te}),icon:t.jsx(oh,{})}),!!(g!=null&&g.length)&&N&&!ce&&t.jsx(Ce,{shortInfo:N,icon:t.jsx(Xn,{}),text:t.jsx(Ne,{words:g})}),!!f&&N&&!ce&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx(Ce,{shortInfo:N,icon:t.jsx(Zi,{}),text:a})}),!!m&&!ce&&t.jsx($,{gap:"5px",children:t.jsx(Ce,{shortInfo:N,icon:t.jsx(vs,{}),text:m})})]})})]})},Oj=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},Aj=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:p})=>{const h=Oj(e),f=p??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(Pj,{h:"100%",d:"column",children:[f&&t.jsx(Hw,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,x)=>h[m].map((v,b)=>l.createElement(Cj,{leftShift:b,quantity:h[m].length,scale:n,isCurrentEvent:Vs(v,f),isNextEvent:Nc(e,v,f),...v,onClick:c,shift:i,key:v.startTime+v.title+x+b,shortInfo:s})))]})},Dj=u($)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,Nj=u.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,Ij=u.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,Rj=u(ne)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${X.isMobile} {
        font-size: 0.65rem;
    }
`,Lj=Array(24).fill(0).map((e,i)=>`${Ti(i)}:00`),zj=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):Lj.slice(e[0],e[1]+1);return t.jsx(Dj,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(Nj,{children:[t.jsx(Rj,{children:o}),t.jsx(Ij,{})]},o))})},nd=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Dc({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var p;return id((p=i==null?void 0:i[0])==null?void 0:p.startTime,o,n)}});return t.jsxs(Dw,{className:"calendar-wrapper",ref:d,children:[t.jsx(zj,{interval:e,scale:n}),t.jsx(Aj,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},Mj=u.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?j[e].main:"var(--text)"};
    border-radius: var(--brLight);

    .title {
        height: 40px;
        font-weight: 700;
        color: var(--text);
    }

    a {
        text-decoration: none;
        color: var(--text);
        width: 100%;
    }

    .icon {
        color: ${({color:e})=>e?j[e].main:"var(--text)"};
        width: 45px;
        height: 45px;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--almostTransparent);

        svg {
            width: 20px;
            height: 20px;
        }
    }
`,Fj=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=Z();return o?t.jsxs(Mj,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(ee,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},Bj=u.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .image {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 1000px) {
        img {
            width: 100%;
            object-fit: scale-down;
        }
    }
`,Hj=u.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Uj=u(ne)`
    margin-bottom: 20px;
`,Wj=({image:e,list:i,text:n})=>{const{isMobile:s}=wt();return t.jsxs(Bj,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Uj,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(Hj,{children:i==null?void 0:i.map(o=>l.createElement(Fj,{...o,key:o.title}))})]})},Vj=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 400px;
        min-height: 350px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`,Gj=u.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,qj=()=>t.jsx(Gj,{children:t.jsx(nd,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:us["16:10 - 17:40"],icon:ln("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:us["17:50 - 19:20"],icon:ln("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),sd=()=>{const[e,i]=l.useState(0),{close:n}=Z(),s=[t.jsx(Wj,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(qj,{})}},"schedule")];return t.jsxs(Vj,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(_r,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>ft(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:j.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>ft(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},Yj=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return Ei(i.startTime)+i.duration<gs(new Date)}},Jj=()=>{var p,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=Ws.useSchedule(),o=ed(),a=((p=e==null?void 0:e.today)==null?void 0:p.length)===0||!(e!=null&&e.today),r=Yj(e==null?void 0:e.today),c=Dc({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,m;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(x=>Vs(x,!0)||Nc(e.today,x,!0)))??0)}}),d=()=>U.evokePopUpMessage({message:n??"",type:"failure",time:_s.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},Fo=u(yn)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    will-change: transform;
    transform: translateZ(0);
    display: flex;
    height: var(--mobile-bottom-menu-height);

    width: 100%;
    background: var(--block);
    border-top: 1px solid var(--theme-2);
    padding: 0px 10px;

    display: none;

    ${X.isTablet} {
        display: flex;
    }
`,ci=()=>t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(K,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(K,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),Kj=()=>{const{allRoutes:e}=Ue.useMenu(),{data:{user:i}}=me.useUser(),{hasNoSchedule:n,loading:s}=Jj(),o=Qt();if(!e||!i||s)return t.jsxs(Fo,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(ci,{}),t.jsx(ci,{}),t.jsx(ci,{}),t.jsx(ci,{}),t.jsx(ci,{})]});const a=(i==null?void 0:i.user_status)==="stud"?pT:n?hT:uT;return t.jsx(Fo,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Ac,{...e[r],isCurrent:c},r)})})},Xj=(e,i,n)=>({isOpen:i,message:e,position:n}),Bo={hints:[]},Qj=()=>q(Zj),od=k(),ad=k(),rd=k(),Zj=V(Bo).on(od,(e,{message:i,position:n})=>({hints:[...e.hints,Xj(i,e.hints.length===0,n)]})).on(ad,e=>({hints:e.hints.splice(1,e.hints.length)})).on(rd,()=>({...Bo})),ek={useHint:Qj},tk={evoke:od,close:ad,clearStore:rd},ik=u.div`
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    /* padding: 10px; */
    background: var(--reallyBlue);
    color: #fff;
    border-radius: var(--brLight);
    font-weight: 500;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    max-width: 300px;
    box-shadow: 0 0 30px ${j.blue.transparent3};
    transition: 0.2s;
    opacity: ${({open:e})=>e?1:0};
    visibility: ${({open:e})=>e?"visible":"hidden"};
    transform: ${({open:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    z-index: 5;
    min-width: 150px;

    .message {
        &::before {
            content: '';
            width: 15px;
            height: 15px;
            transform: rotate(45deg);
            background: var(--reallyBlue);
            position: absolute;
            top: 15px;
            left: -5px;
            border-radius: 3px;
            z-index: -1;
        }
    }
`,nk=()=>{const{hints:e}=ek.useHint(),i=e[0];return i?t.jsx(ik,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(te,{type:"hint",title:i.message,onClose:()=>tk.close(),width:"100%",icon:null})}):null};u.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const sk=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=me.useUser();return Z(),t.jsxs(Se,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ne,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(An,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function ok(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const S$=u.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>ok(e)};
        opacity: 1;
    }
`,T$=u.div`
    pointer-events: none;
    padding: 6px 10px;
    border-radius: var(--brLight);
    background: #000000b9;
    color: #fff;
    font-weight: bold;
    position: absolute;
    transform: translate(0, 0);
    transition: 0.2s;
    opacity: 0;
    font-size: 0.8em;
    text-align: center;
    max-width: ${({width:e})=>e??"fit-content"};
`,ld=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>je(a.title).includes(je(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),ak=()=>{const e=O?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:jd,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Wd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:kd,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Sd,title:"Справка-вызов"},{link:Ld,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Ud,title:"Запрос на изменение персональных данных"},{link:Rd,title:"Запрос на восстановление магнитного пропуска"},{link:vd,title:"Уточнение паспортных данных"},{link:Vd,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Gd,title:"Предоставление каникул в связи с окончанием университета"},{link:qd,title:"Предоставление академического отпуска"},{link:Yd,title:"Выход из академического отпуска"},{link:Jd,title:"Отчисление по инициативе обучающегося"},{link:Kd,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Td,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Ed,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:$d,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Cd,title:"Предоставление права проживания льготной категории граждан"},{link:Pd,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Od,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Dd,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Nd,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Ad,title:"Расторжение договора найма"},{link:Id,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:Ca,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Fd,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Bd,title:"Заявка на материальную помощь"},{link:wd,title:"Оформить социальную стипендию"},{link:Hd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:O,links:[{link:zd,title:"Отправить документы воинского учета"},{link:Md,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:O,links:[{link:fs,title:"Оформить дополнительное соглашение к договору об обучении"},{link:fs,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:jh,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:yd,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:O,links:[{link:_d,title:"Трудоустройство студентов"}]}]},rk=e=>[{title:"Цифровые сервисы",links:[{link:Ol,title:"Справка с места работы"},{link:Al,title:"Справка с места работы для предоставления в визовый центр"},{link:Nl,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Телефонный справочник",links:[...dk(e),{link:Rl,title:"Запрос на изменение внутреннего телефона"},{link:Ll,title:"Запрос на изменение корпоративной электронной почты"}]},...lk()],lk=()=>[{title:"Цифровые сервисы (в разработке)",disabled:O,links:[{link:Dl,title:"Справка о стаже работы"},{link:zl,title:"Копия трудовой книжки"},{link:Ml,title:"Копии документов из личного дела"},{link:Fl,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:O,title:"Общее",links:[{link:_l,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:O,links:[{link:wl,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",links:[{link:Sl,title:"Получение нового компьютерного оборудования"},{link:Tl,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:El,title:"Обслуживание принтеров, МФУ"},{link:$l,title:"Вопрос по СЭД Directum и 1С"},{link:Pl,title:"Вопрос по Личному кабинету"},{link:Cl,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:O,links:[{link:Wl,title:"Справка по форме 2-НДФЛ"},{link:Vl,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Bl,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Gl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:O,links:[{link:Yl,title:"Предоставление права проживания в жилом помещении"},{link:Jl,title:"Временное размещение гостей в студгородке"},{link:Kl,title:"Проход гостей на территорию студенческого городка"},{link:Xl,title:"Переселение"},{link:Ql,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:O,links:[{link:Zl,title:"Выдача пропуска (повторная)"},{link:ec,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:O,links:[{link:tc,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:O,links:[{link:kl,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:O,links:[{link:Ul,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:O,links:[{link:ic,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:nc,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:O,links:[{link:Hl,title:"Произвольный запрос"},{link:Ca,title:"Вступить в Профсоюз",isExternalLink:!0}]}],ck=()=>[{title:"",links:[{link:ql,title:"Заявление на трудоустройство по совместительству"},{link:as,title:"Заявление на увольнение"},{link:cs,title:"Заявление о привлечении к работе в выходной день"},{link:rs,title:"Заявление о предоставлении отпуска"},{link:ls,title:"Заявление о переносе отпуска"},{link:ds,title:"Заявление о диспансеризации"},{link:Qi,title:"Заявление на перевод"}]}],dk=e=>e.head_div&&e.head_div.length>0?[{link:Il,title:"Внесение изменений данных подразделения в телефонном справочнике"}]:[],pk=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),uk=u.div`
    @media (min-width: 1001px) {
        width: 100%;
        max-width: 900px;
        min-width: 900px;
        max-height: 600px;
    }

    display: flex;
    flex-direction: column;
    height: 70vh;

    .list {
        padding: 5px;
        margin-top: 10px;
        overflow-y: auto;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: calc(50% - 5px);
                background: var(--block);
                box-shadow: var(--block-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`,E$=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=Z(),{data:{user:s}}=me.useUser(),o=e&&s?rk(s):ak(),[a,r]=l.useState(""),[c,d]=l.useState(o);return t.jsxs(uk,{children:[t.jsx(vr,{whereToSearch:o,searchEngine:ld,setResult:d,placeholder:"Поиск заявок",setExternalValue:r}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(c??o).map(p=>{if(!p.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:p.title}),t.jsx("div",{className:"links",children:p.links.map((h,f)=>{if(!(h.disabled||!pk(i,h.exceptionalFormEducationList)))return h.isExternalLink?t.jsx("a",{href:h.link,target:h.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:h.title},h.link+f):t.jsx(ee,{to:h.link,onClick:n,children:h.title},h.link+f)})})]},p.title)}),!(c!=null&&c.length)&&!!a.length&&t.jsx(ue,{text:`По запросу ${a} ничего не найдено`})]})})]})},hk=u.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .list {
        margin-top: 10px;
        height: 100%;

        .links-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .link-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                background: var(--block);
                box-shadow: var(--block-shadow);
                padding: 10px;
                border-radius: var(--brLight);

                .links {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-size: 0.9em;

                    & a {
                        text-decoration: none;
                        color: var(--blue);
                    }
                    .disabled-link {
                        cursor: not-allowed;
                        opacity: 0.5;
                        text-decoration: none;
                        pointer-events: none;
                    }
                }
            }
        }
    }

    @media (min-width: 1001px) {
        .list {
            .links-wrapper {
                .link-list {
                    padding: 5px;
                }
            }
        }
    }

    @media (max-width: 800px) {
        .list {
            .links-wrapper {
                .link-list {
                    width: 100%;
                }
            }
        }
    }
`,gk=u.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,$$=({})=>{const{data:{listApplication:e},error:i}=ve.useApplications(),{close:n}=Z(),s=ck(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(ze,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(_t,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ke,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(hk,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(vr,{whereToSearch:s,searchEngine:ld,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(gk,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(ee,{to:p.link,onClick:n,children:p.title},p.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ue,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},fk=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let p=0;p<d.files.length;p++)c[(d==null?void 0:d.fieldName)+`[${p}]`]=d.files[p];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),Ho={isOpen:!1,pages:[],currentPage:0},xk=()=>q(mk),cd=k(),dd=k(),pd=k(),ud=k(),mk=V(Ho).on(cd,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(dd,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(pd,(e,{value:i})=>({...e,currentPage:i})).on(ud,()=>({...Ho})),Gs={useStory:xk},St={open:cd,close:dd,clearStore:ud,changeCurrentPage:pd};u(it)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e??"var(--block)"};
    cursor: pointer;
    border-radius: var(--brLight);
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};

    .title {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        font-weight: 500;
        color: ${({color:e})=>e??"var(--text)"};
    }
`;u.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const bk=u.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: center;
    height: ${({height:e})=>e??"auto"};
    min-height: ${({minHeight:e})=>e};
    color: var(--text);
    background: ${({background:e})=>e};
    padding: ${({padding:e})=>e};
    width: 100%;

    /* @media (min-width: 550px) and (max-width: 1000px) {
        margin-top: 25px;
    } */
`,qs=bk,vk=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,p]=l.useState(r===void 0),[h,f]=l.useState(!a),[g,m]=l.useState(!1),x=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(w=>(w.confirmed=!0,{...w})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(w=>!!w.find(T=>!T.value&&T.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(w=>!!w.find(T=>!T.value&&T.required))&&!n.find(w=>!!w.find(T=>{var N;return T.value.id==="not-chosen"&&!!((N=T.items)!=null&&N.length)}))?(s(w=>(w.confirmed=!0,{...w})),p(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(w=>(w.confirmed=!0,{...w})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(w=>!w.value&&w.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(w=>!w.value&&w.required)&&!n.find(w=>{var T;return w.value===null&&!!((T=w.items)!=null&&T.length)})?(s(w=>(w.confirmed=!0,{...w})),p(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},v=()=>{s(w=>{const T=w.default[0].map(N=>({fieldName:N.fieldName??"",title:N.title,value:N.type==="select"&&(N!=null&&N.items)?null:"",type:N.type,items:N.items,width:N.width,required:N.required}));return{...w,data:[...w.data,T]}})},b=w=>{s(T=>{const N=T.data.filter((z,I)=>w!==I);return{...T,data:N}})},S=w=>{s(T=>(T.documents&&(T.documents.files=[...w]),{...T}))},D=()=>{i&&(i.value=!i.value),s(w=>({...w,optionalCheckbox:i}))};return l.useEffect(()=>{f(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:f,setIncluded:m,setChangeInputArea:p,handleRemove:b,handleAddNew:v,handleLoadFiles:S,handleConfirm:x,handleCheckbox:D}},yk=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({openArea:e})=>e?"15px":"0"};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({openArea:e})=>e?"auto":"0"};
        opacity: ${({openArea:e})=>e?"1":"0"};
        visibility: ${({openArea:e})=>e?"visible":"hidden"};

        .data-line {
            display: flex;
            align-items: flex-end;
            column-gap: 5px;
        }
    }
`,_k=u.div``,wk=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(_k,{children:[t.jsx(W,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:p},h)=>t.jsx(Sx,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),jk=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(W,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Se,{children:[!a&&t.jsx(He,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(He,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),kk=u.div`
    width: 100%;
    text-align: start;
    margin-top: -10px;
    margin-bottom: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
    }
    .value {
        font-size: 0.83em;
        padding-left: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Sk=({title:e,value:i,visible:n})=>n?t.jsxs(kk,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Tk=u.div`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:i})=>e?i?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:i})=>e?i?1:.8:1});
    display: flex;
    align-items: center;
    opacity: ${({isActive:e})=>!e&&.7};
    .hr-checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: 0.75em;
    }

    svg {
        color: var(--reallyBlue);
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`,Ek=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(Tk,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(ah,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(ka,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,$k=u.div`
    width: 100%;
    text-align: start;
    margin-top: 5px;
    margin-bottom: 15px;
    .title {
        font-size: 1em;
        font-weight: bold;
    }
    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Pk=({title:e,visible:i})=>i?t.jsx($k,{children:t.jsx("span",{className:"title",children:e})}):null,Ck=u.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({width:e})=>e??"100%"};
    min-width: ${({minWidth:e,width:i})=>e??i};
    pointer-events: ${({isActive:e})=>!e&&"none"};
    opacity: ${({isActive:e})=>!e&&.7};

    .left-icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    .message {
        margin-bottom: 5px;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({inputAppearance:e})=>e?"var(--search)":"transparent"};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({leftIcon:e,inputAppearance:i})=>e?"30px":i?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        max-height: 36px;
        border: ${({danger:e})=>e&&`2px solid ${j.red.main}`};

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: ${({inputAppearance:e})=>e&&"4px solid var(--almostTransparentOpposite)"};
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`,Ok=u.ul`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    z-index: 5;
    cursor: pointer;
    min-height: 60px;
    /**
    *height: ${({itemsAmount:e})=>e*30+"px"};
    */

    position: absolute;
    top: ${({title:e})=>e?"80px":"46px"};

    box-shadow: var(--light-box-shadow);
    border-radius: var(--brLight);
    background: var(--block);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({title:e})=>e?"60px":"46px"};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        top: 36px;
    }
`,Ak=u.li`
    list-style-type: none;
    background: var(${({isSelected:e})=>e?"--reallyBlue":""});
    color: ${({isSelected:e})=>e?"#fff":""};
    min-height: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }

    .select-item-title {
        overflow: hidden;
        white-space: pre-line;
        width: 100%;
        text-overflow: ellipsis;
    }

    animation: fadeIn 0.4s forwards;

    &::before {
        content: '';
        display: block;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -7px;
        min-width: ${({leadingToSelected:e})=>e?"5px":"0px"};
        height: 5px;
        border-radius: 10px;
        background: var(--reallyBlue);
    }

    .back-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--blue);
        transition: 0.2s transform;

        &:active {
            transform: translateX(-20px);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1.04);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`,Dk=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:p=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,m]=l.useState([]),[x,v]=l.useState(!0);return l.useEffect(()=>{if(e){const b=f.filter(S=>S.toLowerCase().includes(e.toLowerCase()));m(b)}else m([])},[e,f]),t.jsxs(Ck,{leftIcon:!!n,isActive:p,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(W,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:b=>{i(b.target.value),v(!0)},placeholder:c}),g.length>0&&t.jsx(Ok,{width:"100%",isOpen:x,className:x?"open":"close",itemsAmount:g.length,title:s,children:g.map((b,S)=>t.jsx(Ak,{isSelected:!1,onClick:()=>{i(b),m([]),v(!1)},children:b},S))})]})]})},Nk=u.div`
    width: 100%;
    text-align: start;
    margin-top: -20px;
    margin-bottom: -10px;
    padding: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
        color: #e27992;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`,Ik=({title:e,visible:i})=>i?t.jsx(Nk,{children:t.jsx("span",{className:"title",children:e})}):null,Uo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:p,documents:h,changeInputArea:f,setData:g,mask:m,editable:x,placeholder:v,autocomplete:b,isSpecificRadio:S,specialType:D,specialFieldsNameConfig:w,minValueInput:T,maxValueInput:N,minValueLength:z,maxValueLength:I,diff:se,visible:H=!0,onChange:Y,onKeyPress:ce,onBlur:Pe,onKeyDown:Te,onKeyUp:qe,onFocus:Ee}=e,xe=x??(f&&!h),[Ft,ai]=l.useState(!0),Me=(G,pe,Bt)=>{Y==null||Y(G),g(ke=>(Array.isArray(ke.data[0])?ke.data[pe][Bt??0].value=G:ke.data[pe].type==="checkbox-docs"?ke.data[pe].items[Bt??0].value=!!G:ke.data[pe].value=G,{...ke}))},Ks=(G,pe,Bt)=>{Y==null||Y(G),g(ke=>(Array.isArray(ke.data[0])?ke.data[pe][Bt??0].value=G:ke.data[pe].value=G,{...ke}))},Fi=(G,pe,Bt)=>{g(ke=>(ke.data[pe].items[Bt??0].files=G,{...ke}))},Bi=G=>{Y==null||Y(G),g(pe=>(pe.data[o].value=G,{...pe}))},Np=G=>{Y==null||Y(G),ce==null||ce(G),Pe==null||Pe(G),Te==null||Te(G),qe==null||qe(G),Ee==null||Ee(G),g(pe=>(pe.data[o].value=G,{...pe}))};return w&&D&&!Object.values(w).includes(D)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(He,{text:p,isActive:xe,checked:i,setChecked:G=>Me(G,o,a)}):r==="hr-checkbox"?t.jsx(Ek,{text:p,isActive:xe,checked:i,setChecked:G=>Me(G,o,a)}):r==="auto-complete-input"?t.jsx(Dk,{title:p,suggestions:c??[],required:n,value:i,placeholder:v??p,setValue:G=>Me(G,o,a)}):r==="textarea"?t.jsx(Tf,{value:i,title:p,setValue:G=>Me(G,o,a),isActive:xe,textAreaAppearance:xe,placeholder:v??p,required:n,width:s}):r==="checkbox-docs"?t.jsx(wk,{title:p,items:d,setChecked:(G,pe)=>Me(!G,o,pe),setFiles:(G,pe)=>Fi(G,o,pe)}):r==="date-interval"?H?t.jsx(kr,{title:p,required:n,dates:i,setDates:G=>Np(G),valid:Ft,setValid:ai,minValue:T,diff:se}):null:r==="simple-text"?t.jsx(Sk,{title:p,value:i,visible:H}):r==="text-warning"?t.jsx(Ik,{title:p,visible:H}):r==="text-header"?t.jsx(Pk,{title:p,visible:H}):r==="radio"?t.jsx(jk,{buttons:d,title:p,required:n,current:i,setCurrent:Bi,isSpecificRadio:S}):H?t.jsx(gt,{value:i,title:p,minValue:T,maxValue:N,minLength:z,maxLength:I,setValue:G=>Me(G,o,a),type:r,isActive:xe,inputAppearance:xe,placeholder:v??p,required:n,mask:m,width:s,autocomplete:b}):null:H?t.jsx(Pr,{items:d,setSelected:G=>Ks(G,o,a),selected:i,isActive:xe,title:p,width:s,multiple:r==="multiselect",required:n}):null},Rk=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--block);
    z-index: 3;
    width: 100%;

    .title-and-icon {
        display: flex;
        align-items: center;
    }

    @media (max-width: 1000px) {
        background: transparent;
        position: relative;
    }
`,Lk=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(Rk,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(W,{size:3,align:"left",icon:s!==void 0?s?t.jsx(la,{}):t.jsx(ca,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(He,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(We,{}),onClick:()=>null,background:"transparent",flipped:c})]}),zk=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Qs,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(rh,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(Pt,{}),textColor:j.red.main,hoverBackground:j.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(lh,{}),textColor:j.green.main,hoverBackground:j.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Qs,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"})]}),Mk=e=>e.confirmed===void 0?null:t.jsx(Se,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(zk,{...e,confirmed:e.confirmed})}),Tt=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:p=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:m,defaultOpenArea:x=!0})=>{const{openArea:v,changeInputArea:b,included:S,setOpenArea:D,setIncluded:w,setChangeInputArea:T,handleRemove:N,handleAddNew:z,handleLoadFiles:I,handleConfirm:se,handleCheckbox:H}=vk({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c,defaultOpenArea:x});return t.jsxs(t.Fragment,{children:[t.jsxs(yk,{openArea:v,children:[t.jsx(Lk,{title:e,included:S,optional:d,confirmed:c,setOpenArea:D,setIncluded:w,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(te,{type:"alert",visible:!!n,icon:t.jsx(wi,{}),children:n}),t.jsx(te,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Ke,{}),children:i}),Array.isArray(s[0])?s.map((Y,ce)=>t.jsxs("div",{className:"data-line",children:[Y.map((Pe,Te)=>t.jsx(Uo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:Te,specialFieldsNameConfig:m,...Pe},Te)),b&&p&&t.jsx(_,{icon:t.jsx(ch,{}),textColor:j.red.main,onClick:()=>N(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((Y,ce)=>t.jsx(Uo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:m,...Y},ce)),p&&b&&t.jsx(_,{icon:t.jsx(dh,{}),text:"Добавить",onClick:z,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(jr,{files:a.files,setFiles:Y=>I(Y),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(Y=>l.createElement(Bf,{...Y,key:Y.title})),t.jsx(He,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:H}),t.jsx(Mk,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:T,handleConfirm:se})]})]}),h&&t.jsx(be,{})]})},Fk=u.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?j.green.main:j.grey.main};
    outline: 6px solid
        ${({reached:e,current:i})=>i?j.blue.transparent1:e?j.green.transparent3:j.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,Bk=u.div`
    display: flex;
    margin-bottom: -20px;
`,Hk=u.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,hd=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:he(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Bk,{children:e.map((r,c)=>t.jsxs(Hk,{lastElement:c===e.length-1,children:[t.jsx(Fk,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(ff,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Tt,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Uk=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Wk=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Vk=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),In=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return fk(p);if(Array.isArray(p.data[0])){const h=p.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>Wo(m)))),f={};return f[e]=JSON.stringify(h),f}else return p.data.map(h=>Wo(h))}).flat(),r=i.map(p=>{var f,g;const h={};if((f=p.documents)!=null&&f.fieldName)for(let m=0;m<p.documents.files.length;m++)h[((g=p.documents)==null?void 0:g.fieldName)+`[${m}]`]=p.documents.files[m];return h}),c=i.map(p=>{var f,g;const h={};return(f=p.optionalCheckbox)!=null&&f.fieldName&&(h[(g=p.optionalCheckbox)==null?void 0:g.fieldName]=p.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Re.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},Wo=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Gk(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Gk=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Rn=u.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    max-height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        margin-top: 35px;
    }
`;var Mi=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Mi||{}),qk=(e=>(e.EDIT_PHONEBOOK_SUBDIVISION="edit-phonebook-subdivision",e.EDIT_PHONEBOOK_INNER_PHONE="edit-phonebook-inner-phone",e.EDIT_PHONEBOOK_EMAIL="edit-phonebook-email",e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(qk||{});const Yk=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Jk=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Kk=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Jk},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Yk}]}},Xk=()=>{var H;const[e,i]=l.useState(null),[n,s]=l.useState(Hi.kvdCert),[o,a]=l.useState(Hi.fluorographyCert),[r,c]=l.useState(Hi.vichRwCert),[d,p]=l.useState(Hi.graftCert),{data:{dataUserApplication:h}}=ve.useApplications(),{data:{user:f}}=me.useUser(),[g,m]=l.useState(!1),[x,v]=l.useState(!1),[b,S]=l.useState(null),[D,w]=l.useState(null),[T,N]=l.useState(null),z=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(ue,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const I=!!e&&!!D&&!!b&&!!T;if(l.useEffect(()=>{h&&(i(Kk(h)),S(Wk()),w(Vk()),N(Uk()))},[h]),!I)return null;const se=[[{dataForm:e,setDataForm:i}],[{dataForm:D,setDataForm:w}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}]];return t.jsx(Rn,{isDone:z,children:t.jsxs(wn,{children:[t.jsx(W,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(hd,{stagesConfig:se}),t.jsx(ht,{text:"Отправить",action:()=>In(Mi.USG_GETHOSTEL_OOZ,[e,D,b,T,n,o,r,d],v,m),isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:z,isActive:(((H=e.optionalCheckbox)==null?void 0:H.value)??!0)&&he(e)&&he(o)&&he(r)&&he(d)&&he(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Qk=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],Zk=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],eS=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],tS=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],iS=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],nS=[{id:0,title:"1"},{id:1,title:"2"}],sS=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],oS=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],aS=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],rS=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),lS=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Qk,width:"100%",editable:!0,required:!0}]}),cS=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Zk,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),dS=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:eS,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:tS,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:iS,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:nS,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:sS,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),pS=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:oS,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Vo=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:aS,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},gd=()=>{var N;const[e,i]=l.useState(null),[n,s]=l.useState(lS()),[o,a]=l.useState(cS()),[r,c]=l.useState(dS()),[d,p]=l.useState(pS()),[h,f]=l.useState(Vo(null)),[g,m]=l.useState(!1),[x,v]=l.useState(!1),[b,S]=l.useState(!1),{data:{dataUserApplication:D}}=ve.useApplications();l.useEffect(()=>{D&&i(rS(D))},[D]);const w=l.useMemo(()=>{var z,I;return((I=(z=h==null?void 0:h.data[0])==null?void 0:z.value)==null?void 0:I.id)!==0},[(N=h==null?void 0:h.data[0])==null?void 0:N.value]);if(l.useEffect(()=>{h&&f(Vo(h.data))},[w]),!e)return null;const T=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}],[{dataForm:h,setDataForm:f}]];return t.jsx(Rn,{isDone:!1,children:t.jsxs(wn,{children:[t.jsx(W,{size:3,align:"left",children:"Воинский учет"}),t.jsx(hd,{stagesConfig:T}),t.jsx(He,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(ht,{text:x?"Отправлено":"Отправить",action:()=>In(Mi.MIL_REG,[e,n,o,r,d,h],S,v),isLoading:b,completed:x,setCompleted:v,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&he(e)&&he(n)&&he(r)&&he(d)&&he(h)&&he(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},uS=Object.freeze(Object.defineProperty({__proto__:null,default:gd},Symbol.toStringTag,{value:"Module"})),hS=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],gS=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:hS},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),fS=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},fd=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:p}}=ve.useApplications();return l.useEffect(()=>{p&&i(gS(p))},[p]),l.useEffect(()=>{e&&p&&c(fS(e.data))},[e]),t.jsx(Rn,{isDone:d,children:!!e&&!!i&&t.jsxs(wn,{children:[t.jsx(Tt,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(ht,{text:d?"Отправлено":"Отправить",action:()=>In(Mi.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:he(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},xS=Object.freeze(Object.defineProperty({__proto__:null,default:fd},Symbol.toStringTag,{value:"Module"})),mS=l.lazy(()=>y(()=>import("./index-df77b505.js"),["assets/index-df77b505.js","assets/vendor-cbee1f3c.js"])),bS=l.lazy(()=>y(()=>import("./index-f803c329.js"),["assets/index-f803c329.js","assets/vendor-cbee1f3c.js"])),vS=l.lazy(()=>y(()=>import("./index-e6412503.js"),["assets/index-e6412503.js","assets/vendor-cbee1f3c.js"])),yS=l.lazy(()=>y(()=>import("./index-91ad8ef8.js"),["assets/index-91ad8ef8.js","assets/vendor-cbee1f3c.js"])),_S=l.lazy(()=>y(()=>import("./index-b8593ded.js"),["assets/index-b8593ded.js","assets/vendor-cbee1f3c.js"])),wS=l.lazy(()=>y(()=>import("./index-07101e0b.js"),["assets/index-07101e0b.js","assets/vendor-cbee1f3c.js","assets/ui-05581747.js"])),jS=l.lazy(()=>y(()=>import("./index-b8ff1e66.js"),["assets/index-b8ff1e66.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),kS=l.lazy(()=>y(()=>import("./index-b9b891e3.js"),["assets/index-b9b891e3.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),SS=l.lazy(()=>y(()=>import("./index-3189d84a.js"),["assets/index-3189d84a.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),TS=l.lazy(()=>y(()=>import("./index-69e4c679.js"),["assets/index-69e4c679.js","assets/vendor-cbee1f3c.js"])),ES=l.lazy(()=>y(()=>import("./index-520e380c.js"),["assets/index-520e380c.js","assets/vendor-cbee1f3c.js","assets/index-c3c04a85.js"])),$S=l.lazy(()=>y(()=>import("./index-78d1ad96.js"),["assets/index-78d1ad96.js","assets/vendor-cbee1f3c.js","assets/is-valid-url-08a91344.js"])),PS=l.lazy(()=>y(()=>import("./index-4253eb41.js"),["assets/index-4253eb41.js","assets/vendor-cbee1f3c.js"])),CS=l.lazy(()=>y(()=>import("./index-7ab577c7.js"),["assets/index-7ab577c7.js","assets/vendor-cbee1f3c.js"])),OS=l.lazy(()=>y(()=>import("./index-7575d93c.js"),["assets/index-7575d93c.js","assets/vendor-cbee1f3c.js"])),AS=l.lazy(()=>y(()=>import("./index-b0d51be6.js"),["assets/index-b0d51be6.js","assets/vendor-cbee1f3c.js"])),DS=l.lazy(()=>y(()=>import("./index-9bb96315.js"),["assets/index-9bb96315.js","assets/vendor-cbee1f3c.js"])),NS=l.lazy(()=>y(()=>import("./index-0e377f11.js"),["assets/index-0e377f11.js","assets/vendor-cbee1f3c.js"])),IS=l.lazy(()=>y(()=>import("./index-dfb0bfff.js"),["assets/index-dfb0bfff.js","assets/vendor-cbee1f3c.js"])),RS=l.lazy(()=>y(()=>import("./index-66329b5f.js"),["assets/index-66329b5f.js","assets/vendor-cbee1f3c.js"])),LS=l.lazy(()=>y(()=>import("./index-ce6c8693.js"),["assets/index-ce6c8693.js","assets/vendor-cbee1f3c.js"])),zS=l.lazy(()=>y(()=>import("./index-84960fdb.js"),["assets/index-84960fdb.js","assets/vendor-cbee1f3c.js","assets/BoldText-36fc7c72.js"])),MS=l.lazy(()=>y(()=>import("./index-be961379.js"),["assets/index-be961379.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>uS),void 0));const FS=l.lazy(()=>y(()=>import("./index-5f953f18.js"),["assets/index-5f953f18.js","assets/vendor-cbee1f3c.js"])),BS=l.lazy(()=>y(()=>import("./index-f9795b36.js"),["assets/index-f9795b36.js","assets/vendor-cbee1f3c.js"])),HS=l.lazy(()=>y(()=>import("./index-dac3a579.js"),["assets/index-dac3a579.js","assets/vendor-cbee1f3c.js"])),US=l.lazy(()=>y(()=>import("./index-c68dc484.js"),["assets/index-c68dc484.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),WS=l.lazy(()=>y(()=>import("./index-41b9e140.js"),["assets/index-41b9e140.js","assets/vendor-cbee1f3c.js","assets/get-method-obtaining-fields-fc00ce2e.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),VS=l.lazy(()=>y(()=>import("./index-8a4d279c.js"),["assets/index-8a4d279c.js","assets/vendor-cbee1f3c.js"])),GS=l.lazy(()=>y(()=>import("./index-cbcc2d9d.js"),["assets/index-cbcc2d9d.js","assets/vendor-cbee1f3c.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>xS),void 0));const qS=l.lazy(()=>y(()=>import("./index-de4c23d0.js"),["assets/index-de4c23d0.js","assets/vendor-cbee1f3c.js"])),YS=l.lazy(()=>y(()=>import("./index-e3fd2ea0.js"),["assets/index-e3fd2ea0.js","assets/vendor-cbee1f3c.js"])),JS=l.lazy(()=>y(()=>import("./index-76441970.js"),["assets/index-76441970.js","assets/vendor-cbee1f3c.js"])),KS=l.lazy(()=>y(()=>import("./index-b1cf42b8.js"),["assets/index-b1cf42b8.js","assets/vendor-cbee1f3c.js"])),XS=l.lazy(()=>y(()=>import("./index-d4286d74.js"),["assets/index-d4286d74.js","assets/vendor-cbee1f3c.js"])),QS=l.lazy(()=>y(()=>import("./index-1d75187a.js"),["assets/index-1d75187a.js","assets/vendor-cbee1f3c.js","assets/get-divisions-96cfa1b1.js"])),ZS=l.lazy(()=>y(()=>import("./index-b2393922.js"),["assets/index-b2393922.js","assets/vendor-cbee1f3c.js"])),eT=()=>F.get(`?getRequestMedicalCertificate&token=${B()}`),xd=k(),md=L(async()=>(await eT()).data);P({clock:xd,target:md});Ta(md,null);const tT={load:xd},iT=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],nT=e=>{const{phone:i,email:n}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:n,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:iT,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},bd=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(null),[o,a]=l.useState(null),[r,c]=l.useState(null),[d,p]=l.useState(!1),[h,f]=l.useState(null),[g,m]=l.useState(!1),[x,v]=l.useState(!1),b=g??!1,{data:{dataUserApplication:S}}=ve.useApplications();return l.useEffect(()=>{S&&i(nT(S))},[S]),l.useEffect(()=>{tT.load(),s(rt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),a(rt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),c(rt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),f(rt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),t.jsx(Rn,{isDone:!1,children:t.jsxs(wn,{children:[e&&i&&t.jsx(Tt,{...e,setData:i}),n&&s&&t.jsx(Tt,{...n,setData:s}),o&&a&&t.jsx(Tt,{...o,setData:a}),r&&c&&t.jsx(Tt,{...r,setData:c}),h&&f&&t.jsx(Tt,{...h,setData:f}),t.jsx(He,{checked:d,setChecked:p,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(ht,{text:b?"Отправлено":"Отправить",action:()=>{In(Mi.MEDICAL_CERT,[e,n,o,r,h],v,m)},isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:!!d&&!!e&&!!o&&!!r&&!!h&&!!n&&he(e)&&he(o)&&he(r)&&he(h)&&he(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},sT=Object.freeze(Object.defineProperty({__proto__:null,default:bd},Symbol.toStringTag,{value:"Module"})),C="/applications",oT="/application-for-superior-room",aT="/acad-performance",rT="/dormitory",vd=C+"/clarification-of-passport-data",yd=C+"/arbitrary-request",_d=C+"/student-employment",wd=C+"/social-scollarship",jd=C+"/certificate-of-attendance",kd=C+"/social-agencies",Sd=C+"/paper-call",Td=C+"/regular-accommodation",Ed=C+"/full-time-part-time-form",$d=C+"/accommodation-correspondence-form",Pd=C+"/academic-leave-accommodation",Cd=C+"/preferential-accommodation",Od=C+"/family-room",Ad=C+"/termination-of-employment-contract",Dd=C+"/relocation-inside-hostel",Nd=C+"/relocation-to-another-hostel",Id=C+"/accommodation-for-graduates",fs=C+"/payment-recipient",Rd=C+"/restoring-the-magnetic-pass",Ld=C+"/retake-for-diploma",zd=C+"/military-registration-documents",Md=C+"/military-registration",Fd=C+"/financial-support",Bd=C+"/financial-assistance",Hd=C+"/increased-state-academic-scholarship",Ud=C+"/changing-personal-data",Wd=C+"/student-status",Vd=C+"/state-accreditation",lT=C+"/military-registration-card",Gd=C+"/holidays-after-training",qd=C+"/provision-academic-leave",Yd=C+"/exit-academic-leave",Jd=C+"/independently-deducted",Kd=C+"/extension-attestation",cT="/physical-education/student",at=()=>_e({oldVersionUrl:"/sprav"}),di=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(A,{}),path:C,Component:ES,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...xc,"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(va,{}),path:O1,Component:bd,color:"blue",isTemplate:!1,group:"GENERAL"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(ut,{}),path:an,Component:Ns,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Zs,{}),path:rT,Component:vS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},softskills:{id:"softskills",title:"Паспорт компетенций",icon:t.jsx(ph,{}),path:U1,Component:()=>(le.useEffect(()=>{window.location.replace("https://softskills.rsv.ru/")},[]),null),color:"orange",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",isExternalPage:!0,keywords:["рсв","россия страна возможностей","софтскиллс","навыки"],isNew:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(uh,{}),path:aT,Component:bS,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(A,{}),color:"lightGreen",path:cT,pageSize:"big",Component:wS,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(pa,{}),path:pc,Component:$S,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(hh,{}),path:gc,Component:Es,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Zs,{}),path:oT,Component:mS,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(sr))},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Yi,{}),path:Dn,Component:Ls,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]}}),Go=e=>{var i,n,s;return{...mc,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(hi,{}),path:vd,Component:yS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(hi,{}),path:yd,Component:QS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(hi,{}),path:_d,Component:O?at:ZS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(Q,{}),path:wd,Component:O?at:_S,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(Q,{}),path:jd,Component:jS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(Q,{}),path:kd,Component:kS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(Q,{}),path:Sd,Component:SS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(Q,{}),path:Td,Component:TS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(Q,{}),path:Ed,Component:Xk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(Q,{}),path:$d,Component:KS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(Q,{}),path:Pd,Component:PS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(Q,{}),path:Cd,Component:CS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(Q,{}),path:Od,Component:XS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(Q,{}),path:Ad,Component:OS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(Q,{}),path:Dd,Component:AS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(Q,{}),path:Nd,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(_e,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):NS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:Q,path:Id,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?DS:()=>t.jsx(_e,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(Q,{}),path:fs,Component:IS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(Q,{}),path:Rd,Component:RS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(Q,{}),path:zd,Component:O?at:MS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(gh,{}),path:Md,Component:O?at:gd,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:C},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(Q,{}),path:Ld,Component:zS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(Q,{}),path:Hd,Component:O?at:LS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(Q,{}),path:Fd,Component:O?at:FS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(Q,{}),path:Bd,Component:O?at:BS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(Q,{}),path:Ud,Component:HS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(Q,{}),path:Wd,Component:US,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(Q,{}),path:Vd,Component:WS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(Q,{}),path:Gd,Component:VS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(Q,{}),path:qd,Component:GS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(Q,{}),path:Yd,Component:fd,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(Q,{}),path:Jd,Component:qS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(Q,{}),path:Kd,Component:YS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(Q,{}),path:lT,Component:O?at:JS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C}}},qo=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),dT=["settings","profile","chat","schedule","payments","project-activity","all-students"],pT=["home","schedule","acad-performance","all","profile"],uT=["home","schedule","alerts","all","profile"],hT=["home","doclist","alerts","all","profile"],gT=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(M.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??mn,s=Pa.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},Yo={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},fT=()=>q(mT),Xd=k(),Qd=k(),Zd=k(),ep=k(),xT=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},pi=e=>{if(!e)return $o();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries($o()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},mT=V(Yo).on(Xd,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(Qd,()=>({...Yo})).on(Zd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?pi(n)[window.location.hash.slice(2,window.location.hash.length)]:di()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...pi(n),...Po()}:{...di(),...Go(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?pi(n):di(),leftsideBarRoutes:qo(gT(i),(i==null?void 0:i.user_status)==="staff"?pi(n):di()),homeRoutes:qo(s??JSON.parse(localStorage.getItem(M.HomeRoutes)??JSON.stringify(dT)),(i==null?void 0:i.user_status)==="staff"?{...pi(n),...Po()}:{...di(),...Go(i)})})).on(ep,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:xT(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Ue={useMenu:fT},st={changeOpen:Xd,clearStore:Qd,defineMenu:Zd,changeNotifications:ep},tp=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:uc,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Mt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:an,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:an,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:Bs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:vl,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:zs,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:C,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:oc,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},bT={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},ip=(e,i)=>i.filter(({type:n})=>e[bT[n]]),vT={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},Ln=L(async({settings:e})=>{try{const{data:i}=await xg();return ip(e,i).map(({id:n,type:s,title:o,text:a})=>tp(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),yT=L(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&st.changeNotifications({page:i,notifications:1})})}),_T=L(({notifications:e})=>{const{pageId:i}=e[0];i&&st.changeNotifications({page:i,notifications:1})}),zn=L(async({id:e,pageId:i})=>{try{return await mg(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Mn=L(async()=>{try{await bg()}catch{throw new Error("Не удалось скрыть все уведомления")}}),wT=e=>{e&&st.changeNotifications({page:e,notifications:0})},np=k(),sp=k(),op=k(),ap=k(),rp=k(),lp=k(),cp=k(),ae=V(vT).reset(cp);Le({from:sp,to:Ln});P({clock:Ln.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});P({clock:Ln.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});P({clock:Ln.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,yT]});P({clock:np,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,_T]});Le({from:ap,to:zn});P({clock:zn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(wT(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});P({clock:zn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});P({clock:zn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});Le({from:rp,to:Mn});P({clock:Mn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});P({clock:Mn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});P({clock:Mn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});P({clock:op,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});P({clock:lp,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const jT=()=>ge(ae),Nt={initialize:sp,add:np,clearById:ap,clearVisibleById:op,clearAll:rp,clearAllVisible:lp,clearStore:cp},ot={useLkNotifications:jT},kT=Object.freeze(Object.defineProperty({__proto__:null,events:Nt,selectors:ot},Symbol.toStringTag,{value:"Module"})),Jo={messages:null,error:null},ST=()=>({data:q(Ko).messages,loading:q(bi.pending),error:q(Ko).error}),bi=L(async()=>{try{return(await Vh("1")).data}catch(e){throw new Error(e)}}),dp=k(),Ko=V(Jo).on(bi,e=>({...e,error:null})).on(bi.doneData,(e,i)=>({...e,messages:i})).on(bi.failData,(e,i)=>({...e,error:i.message})).on(dp,()=>({...Jo})),TT={useMessages:ST},ET={getMessagesFx:bi},$T={clearStore:dp},PT=Object.freeze(Object.defineProperty({__proto__:null,effects:ET,events:$T,selectors:TT},Symbol.toStringTag,{value:"Module"})),Xo={type:null,personalNotifications:null,error:null,completed:!1},CT=()=>({data:q(Gt).personalNotifications,loading:q(Vt.pending),error:q(Gt).error,completed:q(Gt).completed}),OT=()=>q(Gt).type,pp=k(),up=L(e=>e),Vt=L(async()=>{const{type:e}=Gt.getState();if(e==="notifications")try{return(await La()).data}catch(i){throw new Error(i)}try{return{docs:(await za()).data}}catch(i){throw new Error(i)}}),dn=L(async e=>{const{type:i}=Gt.getState(),n=i==="notifications"?lg:dg;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),hp=k(),Gt=V(Xo).on(up,(e,i)=>({...e,type:i})).on(Vt,e=>({...e,error:null})).on(Vt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Vt.failData,(e,i)=>({...e,error:i.message})).on(dn.doneData,e=>({...e})).on(dn.failData,(e,i)=>({...e,error:i.message})).on(pp,(e,i)=>({...e,completed:i.completed})).on(hp,()=>({...Xo}));dn.doneData.watch(()=>Vt());const AT={usePersonalNotifications:CT,useType:OT},DT={setNotificationsType:up,getPersonalNotificationsFx:Vt,viewPersonalNotificationsFx:dn},NT={changeCompleted:pp,clearStore:hp},IT=Object.freeze(Object.defineProperty({__proto__:null,effects:DT,events:NT,selectors:AT},Symbol.toStringTag,{value:"Module"})),RT=bn({api:{get:og}}),Qo={superiorRoom:null,error:null},LT=()=>({data:q(Zo).superiorRoom,loading:q(vi.pending),error:q(Zo).error}),gp=k(),zT=L(async e=>{});Le({from:gp,to:zT});const vi=L(async()=>{try{return(await Kh()).data}catch{throw new Error("Не удалось загрузить раздел")}}),fp=k(),Zo=V(Qo).on(vi,e=>({...e,error:null})).on(vi.doneData,(e,i)=>({...e,superiorRoom:i})).on(vi.failData,(e,i)=>({...e,error:i.message})).on(fp,()=>({...Qo})),MT={useSuperiorRoom:LT},FT={getSuperiorRoomFx:vi},BT={postSuperiorRoom:gp,clearStore:fp},HT=Object.freeze(Object.defineProperty({__proto__:null,effects:FT,events:BT,selectors:MT},Symbol.toStringTag,{value:"Module"})),ea={teacherDataVerification:null,error:null,completed:!1},UT=()=>({data:q(Jn).teacherDataVerification,loading:q(yi.pending),error:q(Jn).error,completed:q(Jn).completed}),xp=k(),mp=k(),WT=L(async e=>{try{return(await ug(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Le({from:xp,to:WT});const yi=L(async()=>{try{return(await pg()).data}catch{throw new Error("Не удалось войти")}}),bp=k(),Jn=V(ea).on(yi,e=>({...e,error:null})).on(yi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(yi.failData,(e,i)=>({...e,error:i.message})).on(mp,(e,i)=>({...e,completed:i.completed})).on(bp,()=>({...ea})),VT={useTeacherDataVerification:UT},GT={getTeacherDataVerificationFx:yi},qT={postTeacherDataVerification:xp,changeCompleted:mp,clearStore:bp},YT=Object.freeze(Object.defineProperty({__proto__:null,effects:GT,events:qT,selectors:VT},Symbol.toStringTag,{value:"Module"})),JT=[_g,Je,Ag,Ig,qg,PT,IT,Sv,$g,RT,fj,HT,YT,Fg,jg,kT],KT=()=>{JT.forEach(e=>{e.events.clearStore()})},XT=()=>{localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh),sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)},dt=localStorage.getItem(M.Token)??"",pt=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),Fn=L(async e=>{try{const{data:i}=await Dh(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await Rt.post("/old",n)}catch{}return XT(),pt()?(localStorage.setItem(M.Token,i.token),localStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(M.Token,i.token),sessionStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),Et=L(async e=>{try{const[i,n]=await Promise.all([Nh(e.token),Ra()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:vg({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:pt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),xs=L(async e=>{try{return(await Ih(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),vp=L(()=>{pt()?(localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)):(sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),sessionStorage.removeItem(M.JWTRefresh)),KT()}),yp=e=>{const i=localStorage.getItem(M.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(M.SavePassword,n.toString()),n},_p=k(),Ys=k(),wp=k(),jp=k(),kp=k();Le({from:_p,to:Fn});P({clock:Fn.doneData,target:Et});Le({from:Ys,to:vp});dt&&pt()?Et({token:dt,jwt:localStorage.getItem(M.JWT)}):vp();const QT={currentUser:null,error:null,isAuthenticated:!!(dt!=null&&dt.length),savePassword:pt(),loginEuz:""};yp();const Sp=V(QT).on(Et,e=>({...e,error:null})).on(Et.doneData,(e,i)=>i).on(Et.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(dt!=null&&dt.length),savePassword:pt()})).on(Fn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:pt()})).on(Ys,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:pt()})).on(kp,(e,{savePassword:i})=>({...e,savePassword:yp(i)})).on(xs,e=>({...e,error:null})).on(xs.doneData,(e,i)=>({...e,loginEuz:i})).on(Et.failData,(e,i)=>({...e,error:i.message})).on(jp,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(wp,e=>({...e,currentUser:null})),me={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Sp);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(Fn.pending),error:i}}},It={login:_p,logout:Ys,changeSavePassword:kp,clear:wp,update:jp},ZT={getUserFx:Et,getLoginEuzFx:xs},eE=()=>{const e="0.0.1";localStorage.getItem(M.Version)!==e&&(localStorage.clear(),localStorage.setItem(M.Version,e),It.logout())},tE=u.div`
    max-height: 400px;
    overflow-y: auto;
`,iE=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ue,{text:e.message,image:t.jsx(fh,{}),children:t.jsxs($,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(be,{}),t.jsx(kc,{title:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:t.jsxs($,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(da,{})]})}),children:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(tE,{children:e.stack})})})]})})}),nE=/Cannot access 'get' before initialization/,sE=/Failed to fetch dynamically imported module/,oE=2,ta="reloadCount";class Tp extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n);const s=Number(sessionStorage.getItem("reloadCount"))??0;s<oE&&(i!=null&&i.message)&&(sE.test(i.message)||nE.test(i.message))&&(sessionStorage.setItem(ta,`${s+1}`),window.location.reload())}render(){return this.state.hasError?t.jsx(iE,{error:this.state.error}):(sessionStorage.setItem(ta,"0"),this.props.children)}}const aE=O?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",_i=Rt.create({baseURL:aE}),rE={headers:{"Content-Type":"application/json"}};_i.interceptors.request.use(Ia);_i.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await Qn(_i)(e):e},Qn(_i));const lE=async e=>{var n;const i=await _i.post("",{query:e},rE);if(Ep(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Ep(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Ep(e[i]))return!0}return!1}const cE=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,$p=k(),Js=xh({effect:async({currentUser:e})=>({...(await lE(cE((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Sp}),dE=Ta(Js,null);P({clock:$p,target:Js});const pE=Js.pending,uE={load:$p},P$={peTeacher:dE,isLoading:pE},Pp=k(),Cp=L(Zh);P({clock:Pp,target:Cp});const Op=V([]),C$=un(Op,e=>e.map(i=>i.divisionName));P({clock:Cp.doneData,target:Op});function Ap(e){const{pathname:i}=Qt();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const hE=()=>{const{allRoutes:e}=Ue.useMenu();return e?t.jsxs(Ea,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx($a,{path:i,component:n,exact:!s},i)),t.jsx(Ye,{exact:!0,to:Ms})]}):null},gE=le.memo(hE),fE=u.div`
    height: fit-content;
    opacity: ${({isVisible:e})=>e?1:0};
    visibility: ${({isVisible:e})=>e?"visible":"hidden"};
    transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    width: 220px;
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    background: var(--block);
    border-radius: var(--brLight);
    box-shadow: var(--very-mild-shadow);
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    z-index: 4;
    padding: 8px;
    color: var(--text);

    @media (max-width: 500px) {
        width: calc(100vw - 20px);
        left: 50%;
        transform: ${({isVisible:e})=>e?"translateY(0) translateX(-50%)":"translateY(20px) translateX(-50%)"};
        bottom: 10px;
        top: auto;
        padding: 16px;
    }
`,xE=()=>{const{open:e,content:i,position:n}=Gf.useContextMenu(),s=l.useRef(null);return ti(s,()=>Ie.close()),t.jsx(On,{isOpen:e,children:t.jsx(fE,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Dp=200,mE=5e3,bE=()=>{const{visibleNotifications:e}=ot.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Nt.clearVisibleById(a)},Dp)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??mE))},[e]),{handleClose:o,closing:i}},vE=u.div`
    position: absolute;
    width: 320px;
    max-width: 500px;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    padding-top: 0;

    @media (max-width: 1000px) {
        width: 90%;
        flex-direction: column;
        left: 50%;
        transform: translateX(-50%);
        top: 10px;
        bottom: auto;
    }
`,yE=u.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Dp/1e3}s forwards;

    @keyframes open {
        0% {
            padding: 0px;
            height: 0px;
            margin-top: 0px;
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            padding: 8px;
            height: 65px;
            margin-top: 8px;
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes close {
        0% {
            height: 65px;
            padding: 8px;
            opacity: 1;
            margin-top: 8px;
            transform: scale(1);
        }
        100% {
            height: 0px;
            opacity: 0;
            padding: 0px;
            margin-top: 0px;
            transform: scale(0.9);
        }
    }
`;u.div`
    height: 4px;
    border-radius: 3px;
    background: ${j.blue.main};
    animation: ${({started:e,duration:i})=>e&&`decrease ${i/1e3}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`;const _E=()=>{const{visibleNotifications:e}=ot.useLkNotifications(),{closing:i,handleClose:n}=bE();return t.jsx(vE,{children:e.map(s=>t.jsx(yE,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Tc,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},ia=u.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({color:e})=>`linear-gradient(360deg, ${e} 50%, var(--theme))`};
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({$loading:e})=>!e&&"load_finished 1.2s forwards ease-in-out reverse"};
    animation-delay: 0.8s;
    background-size: 100% 10000%;
    flex-direction: column;

    .loading-circle {
        width: 40px;
        height: 40px;
        bottom: 40px;
        position: absolute;
        opacity: 0.7;
    }

    @keyframes logo {
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        30% {
            transform: translateY(5px);
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    @keyframes load_finished {
        0% {
            background-size: 10% 100%;
            opacity: 0;
            visibility: hidden;
        }
        50% {
            background-size: 10% 1000%;
            opacity: 1;
            visibility: visible;
        }
        100% {
            background-size: 100% 10000%;
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        animation: ${({$loading:e})=>!e&&"logo 0.7s forwards ease-in-out"};
        animation-delay: ${({$loading:e})=>e?"0s":"1s"};
        width: 100px;
    }
`,wE=({loading:e})=>{const{data:{user:i},error:n}=me.useUser(),s=i?De(i==null?void 0:i.fullName):j.blue.main,o=()=>ZT.getUserFx(JSON.parse(localStorage.getItem(M.Token)??"")),a=()=>It.logout();return n?t.jsx(ia,{$loading:!0,color:s,children:t.jsx(ue,{text:n,children:t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(hn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(ia,{color:s,$loading:e,children:[t.jsx(_n,{short:!0,width:"100px"}),e&&t.jsx(Ve,{})]})},jE=u.div`
    width: 100%;
    height: 5px;
    background: var(--almostTransparentOpposite);
    border-radius: 10px;
    overflow: hidden;

    .inner-line {
        height: 5px;
        transition: 0.2s;
        width: ${({filled:e})=>e??"0%"};
        background: var(--reallyBlue);
        animation: ${({playing:e})=>e!==null&&"10s filling linear forwards"};
        animation-play-state: ${({playing:e})=>e?"running":"paused"};

        @keyframes filling {
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        }
    }
`,kE=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Gs.useStory();return t.jsx(jE,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():St.changeCurrentPage({value:o+1})})})},SE=u(yn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,TE=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Gs.useStory();return t.jsxs(SE,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(kE,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(bh,{}):t.jsx(mh,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Xe,{}),onClick:n})]})},EE=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,$E=u(it)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e};
    display: flex;
    justify-content: ${({imageAlign:e})=>(e==null?void 0:e.horizontal)==="left"?"flex-start":(e==null?void 0:e.horizontal)==="right"?"flex-end":"center"};
    align-items: center;
    user-select: none;

    @media (max-width: 700px) {
        border-radius: 0px;
    }
`,PE=u.div`
    width: 80%;
    height: fit-content;
    position: absolute;
    left: ${({align:e})=>e.horizontal==="left"?"30px":e.horizontal==="center"?"50%":"auto"};
    right: ${({align:e})=>e.horizontal==="right"?"30px":e.horizontal==="center"?"50%":"auto"};
    bottom: ${({align:e})=>e.vertical==="bottom"?"30px":e.vertical==="center"?"50%":"auto"};
    top: ${({align:e})=>e.vertical==="top"?"30px":e.vertical==="center"?"50%":"auto"};
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: ${({color:e})=>e??"var(--text)"};
    transform: ${({align:e})=>EE(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,CE=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:p,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=Ze();return t.jsxs($E,{imageAlign:p,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Ss,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(PE,{imageAlign:p,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(W,{size:2,align:f,children:o}),t.jsx(ne,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),St.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},OE=u.div`
    padding: 15px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 750px;
    transition: 0.2s;
    transform: scale(${({isOpen:e})=>e?1:.95});
    opacity: ${({isOpen:e})=>e?"1":"0"};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    position: relative;
    display: flex;

    @media (max-width: 700px) {
        padding: 0;
    }
`,na=u.div`
    position: absolute;
    top: 50px;
    left: ${({left:e})=>e??"auto"};
    right: ${({right:e})=>e??"auto"};
    height: calc(100% - 65px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    z-index: 3;
    opacity: 0;

    svg {
        width: 30px;
        height: 30px;
        color: var(--text);
        background: var(--almostTransparentOpposite);
        border-radius: var(--brLight);
    }

    @media (min-width: 1001px) {
        &:hover {
            opacity: 1;
            background: ${({left:e})=>e?"linear-gradient(90deg, var(--almostTransparentOpposite), transparent)":"linear-gradient(90deg, transparent, var(--almostTransparentOpposite))"};
        }
    }

    @media (max-width: 1000px) {
        left: ${({left:e})=>`calc(${e} - 15px)`??"auto"};
        right: ${({right:e})=>`calc(${e} - 15px)`??"auto"};
        &:active {
            opacity: 1;
            background: ${({left:e})=>e?"linear-gradient(90deg, var(--almostTransparentOpposite), transparent)":"linear-gradient(90deg, transparent, var(--almostTransparentOpposite))"};
        }
    }
`,AE=()=>{const{pages:e,isOpen:i,currentPage:n}=Gs.useStory(),s=l.useRef(null);ti(s,()=>St.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(On,{isOpen:i,children:t.jsx(OE,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(TE,{pages:e.length,onClose:()=>St.close(),playing:o}),t.jsx(na,{left:"15px",onClick:()=>{n!==0&&St.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx($i,{})}),t.jsx(CE,{setPlaying:a,currentPage:n,...r}),t.jsx(na,{right:"15px",onClick:()=>{n!==e.length-1?St.changeCurrentPage({value:n+1}):St.close(),a(!0)},children:t.jsx(Qe,{})})]})})})},DE=()=>{const{data:{user:e}}=me.useUser(),{notifications:i,loading:n,loaded:s}=ot.useLkNotifications(),{settings:o}=ei.useSettings(),[a]=et([nr.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{Zn.getElectronicInteraction(),a&&!a.status&&Nt.add(tp("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Zn.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(ip(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,Nt.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{st.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},NE=()=>{const{data:{user:e}}=me.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(kh);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},IE=()=>{const e=Br(),{open:i}=Z(),n=NE();return DE(),vt(),l.useEffect(()=>{n&&n&&i(t.jsx(sd,{}),"Что нового")},[n]),{currentPage:e}},RE=u.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,LE=u.div`
    display: flex;
    width: 100%;
    max-height: 100%;
    flex: 1;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,zE=u.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-gutter: stable;
    padding-top: ${({withHeader:e})=>e?"var(--header-height)":"0"};
    width: 100%;
    flex: 1;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
    }
`,ME=()=>{const{data:{user:e}}=me.useUser(),i=l.useRef(null),{allRoutes:n}=Ue.useMenu(),{currentPage:s}=IE(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return Ap(i.current),t.jsxs(RE,{children:[t.jsx(wE,{loading:!e||!n}),t.jsx(AE,{}),t.jsx(Tw,{}),t.jsxs(LE,{children:[t.jsx(uw,{headerVisible:(s==null?void 0:s.hiddenTitle)||o,currentPage:s}),t.jsx(zE,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(Tp,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(gE,{})})})}),t.jsx(Kj,{})]}),t.jsx(Qy,{}),t.jsx($w,{}),t.jsx(Cw,{}),t.jsx(xE,{}),t.jsx(nk,{}),t.jsx(_E,{})]})},FE=le.memo(ME),BE=()=>{const{data:{isAuthenticated:e,user:i}}=me.useUser(),{data:n}=Je.selectors.useData(),{settings:s}=ei.useSettings();return Ap(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Re.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Je.effects.getFx(),Re.getWorkerPosts(),Pp()),uE.load())},[e,i]),l.useEffect(()=>{i&&(s?st.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):Zg.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(FE,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(Ea,{children:[J1.map(({path:o,Component:a},r)=>t.jsx($a,{path:o,component:a,exact:!0},r)),t.jsx(Ye,{exact:!0,to:sc})]})})},HE=u.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;eE();const UE=()=>(vt(),t.jsx(qy,{children:t.jsx(vh,{basename:"/",children:t.jsx(HE,{children:t.jsx(Tp,{children:t.jsx(BE,{})})})})}));yh.render(t.jsxs(le.StrictMode,{children:[t.jsx(Jw,{}),t.jsx(UE,{})]}),document.getElementById("root"));export{F as $,qk as A,Rn as B,Eo as C,gg as D,q_ as E,wn as F,uE as G,Sp as H,Tt as I,X as J,$ as K,kt as L,te as M,be as N,y1 as O,_t as P,j as Q,k0 as R,ht as S,W as T,Ve as U,ne as V,ze as W,lt as X,qs as Y,Ts as Z,P$ as _,Mg as a,Lk as a$,Tf as a0,ue as a1,c$ as a2,d$ as a3,me as a4,In as a5,cw as a6,fk as a7,n$ as a8,Se as a9,j_ as aA,Ue as aB,y_ as aC,gc as aD,q1 as aE,$$ as aF,bt as aG,fe as aH,Zt as aI,tt as aJ,s$ as aK,C$ as aL,Sg as aM,ao as aN,nb as aO,Vb as aP,r$ as aQ,Gb as aR,o$ as aS,mb as aT,a$ as aU,Os as aV,Zb as aW,Op as aX,l$ as aY,a_ as aZ,yk as a_,dr as aa,YE as ab,Us as ac,Ci as ad,ei as ae,Fe as af,By as ag,jr as ah,qE as ai,It as aj,l0 as ak,Ti as al,Oi as am,DT as an,Nt as ao,AT as ap,S$ as aq,T$ as ar,t$ as as,E$ as at,bn as au,it as av,ps as aw,_c as ax,vr as ay,__ as az,he as b,sk as b$,re as b0,yd as b1,an as b2,Y1 as b3,h$ as b4,c_ as b5,l_ as b6,Dy as b7,hg as b8,o1 as b9,uc as bA,K_ as bB,De as bC,Ws as bD,ns as bE,gj as bF,$c as bG,nw as bH,R as bI,Yn as bJ,g$ as bK,ll as bL,b$ as bM,v$ as bN,y$ as bO,m$ as bP,x$ as bQ,f$ as bR,we as bS,V_ as bT,Pc as bU,L1 as bV,Ll as bW,Rl as bX,XE as bY,QE as bZ,Sn as b_,Ge as ba,je as bb,p$ as bc,Bs as bd,zt as be,K as bf,Ie as bg,jn as bh,ti as bi,An as bj,nr as bk,Zn as bl,jg as bm,Ne as bn,yt as bo,ct as bp,qv as bq,Gv as br,Jj as bs,j$ as bt,_$ as bu,Cj as bv,Nc as bw,Vs as bx,k$ as by,wt as bz,Fg as c,Vk as c$,Ma as c0,K1 as c1,G1 as c2,V1 as c3,W1 as c4,Mc as c5,hj as c6,zi as c7,ni as c8,_s as c9,JE as cA,vc as cB,bc as cC,KE as cD,u$ as cE,yn as cF,J_ as cG,ZT as cH,ot as cI,B1 as cJ,Q_ as cK,ZE as cL,MT as cM,FT as cN,e$ as cO,yg as cP,GE as cQ,VE as cR,ln as cS,Yw as cT,Ss as cU,_g as cV,Bf as cW,i$ as cX,Yk as cY,Hi as cZ,Wk as c_,w$ as ca,aj as cb,fc as cc,rj as cd,lj as ce,Uc as cf,Ut as cg,mj as ch,ed as ci,xj as cj,nd as ck,ij as cl,Dw as cm,zj as cn,Aj as co,vt as cp,Rc as cq,Hc as cr,sl as cs,vj as ct,wc as cu,Co as cv,Pa as cw,mn as cx,Q1 as cy,X1 as cz,Re as d,Uk as d0,hd as d1,RT as d2,Lg as e,Rg as f,B as g,qT as h,U as i,VT as j,GT as k,oe as l,He as m,Mi as n,O as o,vo as p,lE as q,gt as r,ve as s,_ as t,Ai as u,Pr as v,Z as w,nt as x,dl as y,Hn as z};
