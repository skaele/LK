import{F as Je,a as mi,b as kt,c as nn,H as Nn,d as Ot,y as z,u as k,p as J,e as q,x as C,S as Le,m as es,r as l,s as p,j as t,f as Xe,I as op,g as ap,h as rp,i as lp,k as Lo,A as ts,l as D,n as cp,o as je,q as Bt,t as En,v as dp,w as pp,R as le,z as St,B as wi,C as ht,L as Z,D as bi,E as up,G as hp,J as sn,K as Vt,M as gp,N as fp,O as gt,P as Ue,Q as zo,T as Gt,U as Mo,V as is,W as ct,X as Fo,Y as Bo,Z as ji,_ as Ho,$ as Uo,a0 as xp,a1 as mp,a2 as bp,a3 as vp,a4 as qe,a5 as Ht,a6 as yp,a7 as _p,a8 as wp,a9 as jp,aa as kp,ab as Sp,ac as X,ad as Tp,ae as Wo,af as Vo,ag as Ep,ah as $p,ai as Go,aj as At,ak as ns,al as qo,am as Pp,an as Cp,ao as Op,ap as Yo,aq as Ap,ar as on,as as Dp,at as Jo,au as Xo,av as Ko,aw as Qo,ax as Np,ay as Ip,az as Zo,aA as ea,aB as qi,aC as Rp,aD as Lp,aE as ri,aF as ta,aG as ia,aH as ne,aI as ss,aJ as Ns,aK as na,aL as zp,aM as Mp,aN as Fp,aO as Bp,aP as Ui,aQ as Hp,aR as Up,aS as Wp,aT as Vp,aU as Gp,aV as qp,aW as Yp,aX as Jp,aY as Xp,aZ as Kp,a_ as Qp,a$ as Zp,b0 as eu,b1 as tu,b2 as iu,b3 as nu,b4 as su,b5 as ou,b6 as au,b7 as ru,b8 as lu,b9 as cu,ba as sa,bb as du,bc as pu,bd as uu,be as hu,bf as gu,bg as fu,bh as xu,bi as os,bj as mu,bk as bu,bl as vu,bm as yu,bn as _u,bo as wu,bp as ju,bq as ku,br as Su,bs as oa,bt as Tu,bu as In,bv as Eu,bw as $u,bx as Pu,by as Is,bz as Cu,bA as Ou,bB as Au,bC as Du,bD as aa,bE as Rs,bF as Nu,bG as Iu,bH as Ru,bI as Lu,bJ as zu,bK as Mu,bL as ra,bM as la,bN as Fu,bO as Bu,bP as Hu,bQ as Uu}from"./vendor-561dac3a.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Wu="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Vu=3,an=["home","settings","all"],ca=["home","settings","download-agreements","all"],da="https://lk.eseur.ru/signup",Gu="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Lt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},TT={Зачтено:w.green,"Не зачтено":w.red,Отлично:w.green,Хорошо:w.blue,Удовлетворительно:w.orange,Неудовлетворительно:w.red,"Не явился":w.red,default:w.red},ET={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",qu="2023-10-03T10:43:43",Tt={info:{icon:Je,color:"blue",title:"Информация"},alert:{icon:mi,color:"orange",title:"Внимание!"},failure:{icon:kt,color:"red",title:"Ошибка"},success:{icon:nn,color:"green",title:"Успешно"},tip:{icon:Nn,color:"grey",title:"Подсказка"},hint:{icon:Nn,color:"white",title:"Подсказка"},hrFailure:{icon:kt,color:"red",title:"Ошибка"}},Yu={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Ju=["image/jpeg","image/jpg","image/png","application/pdf"],Xu=10,pa="(max-width: 766px)",Ku="(min-width: 767px)",ua="(max-width: 1000px)",ha="(max-width: 1380px)",ga="(min-width: 1381px)",ee={isMobile:`@media ${pa}`,isNotMobile:`@media ${Ku}`,isTablet:`@media ${ua}`,isSmallTesktop:`@media ${ha}`,isMiddleTesktop:`@media ${ga}`},Qu=[{query:pa,title:"isMobile",value:"mobile"},{query:ua,title:"isTablet",value:"tablet"},{query:ha,title:"isSmallDesktop",value:"smallDesktop"},{query:ga,title:"isMiddleDesktop",value:"middleDesktop"}],as={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},T=!window.location.port||window.location.port==="80"||window.location.port==="4001";console.log("Running on production",T);var F=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(F||{});const Ke=()=>localStorage.getItem(F.JWT)||sessionStorage.getItem(F.JWT),qt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Zu=()=>JSON.parse(localStorage.getItem(F.SavePassword)??"true"),Rn=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Ct.logout();else{n._retry=!0;const h=localStorage.getItem(F.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await oh(h??"");return Zu()?(localStorage.setItem(F.JWT,f),localStorage.setItem(F.JWTRefresh,g)):(sessionStorage.setItem(F.JWT,f),sessionStorage.setItem(F.JWTRefresh,g)),e(n)}catch{Ct.logout()}}return Promise.reject(i)},fa=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${Ke()}`,e),eh=`${R}/lk_api.php`,th="https://api.mospolytech.ru/serviceforfrontpersonnelorders",U=Ot.create({baseURL:eh,withCredentials:!0}),he=Ot.create({baseURL:th});he.interceptors.request.use(fa);!T&&he.interceptors.response.use(e=>e,Rn(he));function rs(e){return e.isAxiosError}function V(){return localStorage.getItem(F.Token)??sessionStorage.getItem(F.Token)??""}const ih=({login:e,password:i})=>U.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),nh=e=>U.get(`?getUser&token=${e}`),sh=e=>U.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),$T=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",V()),U.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},PT=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),U.post(`?changeADPass=1&token=${V()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},CT=async e=>{const i=new FormData;return i.set("email",e),i.set("token",V()),U.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},OT=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",V()),U.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},oh=async e=>{const{data:i}=await Ot.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},ah=e=>U.get(`?getSchedule&group=${e}&token=${V()}`),rh=e=>U.get(`?getScheduleTeacher&fio=${e}&token=${V()}`),lh=()=>U.get(`?getSchedule&session=1&token=${V()}`),ch=e=>U.get(`?getScheduleTeacher&fio=${e}&session=1&token=${V()}`),dh=()=>U.get(`?getPayments&token=${V()}`),ph=e=>U.get(`?signAgreement=${e}&token=${V()}`),uh=e=>U.get(`?signContract=${e}&token=${V()}`),hh=async({semestr:e})=>{var i,n;return(n=(i=await U.get(`?getAcademicPerformance&semestr=${e}&token=${V()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},gh=e=>U.get(`?getMessages&token=${V()}&id=${e}`),fh=async()=>(await U.get(`?getPEPStatus&token=${V()}`)).data,xh=async()=>(await U.get(`?setPEPAccept&token=${V()}`)).data,mh=()=>U.get(`?getContactData&token=${V()}`),bh=e=>{const i=new FormData;i.set("token",V()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return U.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},vh=()=>U.get(`?getRequestHighComfort&token=${V()}`),AT=e=>{const i=new FormData;i.set("token",V()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return U.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},yh=()=>U.get(`?getAppRequests&token=${V()}`),xa=()=>U.get(`?getAppData&token=${V()}`),_h=async()=>await he.get(`/Dismissal.GetAllHistory?employeeGuid=${qt(Ke()??"").IndividualGuid}`),wh=async()=>{const{data:e}=await he.get("/AnotherPlaceWork.GetDivisions");return e.divisions},jh=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",V()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await U.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},kh=()=>he.get(`?getAppRequests&token=${V()}`),Sh=()=>he.get(`?getAppData&token=${V()}`),Th=e=>he.post("Dismissal.Post",e),Eh=async()=>(await U.get(`?getAdminLinks&token=${V()}`)).data,$h=async e=>(await U.get(`?PDinfo&token=${V()}`)).data,ma=()=>U.get(`?getNotification&token=${V()}`),Ph=e=>U.get(`?viewNotification=${e}&token=${V()}`),Ch=Object.freeze(Object.defineProperty({__proto__:null,get:ma,view:Ph},Symbol.toStringTag,{value:"Module"})),ba=()=>U.get(`?getDocList&token=${V()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),Oh=e=>U.get(`?viewDoc=${e}&token=${V()}`),Ah=Object.freeze(Object.defineProperty({__proto__:null,get:ba,view:Oh},Symbol.toStringTag,{value:"Module"})),Dh=(e,i,n,s)=>U.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${V()}`),Nh=e=>U.get(`?getDivs=${e}&page=1&token=${V()}`),Ih=()=>U.get(`?getCheckData&token=${V()}`),Rh=e=>{const i=new FormData;i.set("token",V()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return U.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Lh=(e,i,n,s)=>U.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${V()}`),zh=async e=>await U.get(`?getGroups=${e}&perpage=30&page=1&token=${V()}`),Mh=async()=>(await U.get(`?getAlerts&token=${V()}`)).data,Fh=()=>U.get(`?getNotifications&token=${V()}`),Bh=e=>U.get(`?clearNotificationById=${e}&token=${V()}`),Hh=()=>U.get(`?clearAllNotifications&token=${V()}`);function Uh({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Ls={data:null,preparedData:null,loading:!1,error:null},rn=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Wu})=>{const o=e??Ls,a=()=>({data:q(u).data,preparedData:q(u).preparedData,loading:q(r.pending),error:q(u).error}),r=z(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=z(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),u=J(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...Ls}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function Wh(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Vh=rn({api:{get:hh},prepareData:Wh}),Ye=rn({api:{get:Eh}}),Gh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),qh=rn({api:{get:Mh},prepareData:Gh}),zs={message:"",type:"success",isOpen:!1,time:2e3},va=k(),ya=k(),_a=k();J(zs).on(va,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ya,(e,{isOpen:i})=>({...e,isOpen:i})).on(_a,()=>({...zs}));const ft={evokePopUpMessage:va,openPopUpMessage:ya,clearStore:_a},Ms={listApplication:null,error:null,dataUserApplication:null},li=z(async()=>{const e=await kh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Wi=z(async()=>{const e=await Sh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ln=z(async e=>await Th(e));C({clock:ln.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ft.evokePopUpMessage});C({clock:ln.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:ft.evokePopUpMessage});const Yh=k();Le({from:ln.doneData,to:li});J(Ms).on(Wi,e=>({...e,error:null})).on(Wi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Wi.failData,(e,i)=>({...e,error:i.message})).on(li,e=>({...e,error:null})).on(li.doneData,(e,i)=>({...e,listApplication:i})).on(li.failData,(e,i)=>({...e,error:i.message})).on(Yh,()=>({...Ms}));const Jh={getApplicationsFx:li,getUserDataApplicationsFx:Wi,postApplicationFx:ln},Fs={message:"",type:"success",isOpen:!1,time:2e3},Xh=()=>q(Kh),wa=k(),ja=k(),ka=k(),Kh=J(Fs).on(wa,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ja,(e,{isOpen:i})=>({...e,isOpen:i})).on(ka,()=>({...Fs})),Sa={usePopUpMessage:Xh},H={evokePopUpMessage:wa,openPopUpMessage:ja,clearStore:ka},Qh=Object.freeze(Object.defineProperty({__proto__:null,events:H,selectors:Sa},Symbol.toStringTag,{value:"Module"})),Bs={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},ci=z(async()=>{const e=await _h();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),di=z(async()=>{const e=await yh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),pi=z(async()=>{const e=await xa();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ls=z(async e=>{const i=await jh(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Zh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(eg);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(pi.pending),workerLoading:q(es(ci.pending,Jh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},Ta=k();Le({from:ls.doneData,to:di});C({clock:ls.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:H.evokePopUpMessage});const eg=J(Bs).on(pi,e=>({...e,error:null})).on(pi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(pi.failData,(e,i)=>({...e,error:i.message})).on(di,e=>({...e,error:null})).on(di.doneData,(e,i)=>({...e,listApplication:i})).on(di.failData,(e,i)=>({...e,error:i.message})).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(Ta,()=>({...Bs})),me={useApplications:Zh},Re={getApplicationsFx:di,getUserDataApplicationsFx:pi,postApplicationFx:ls,getWorkerPosts:ci},tg={clearStore:Ta},ig=Object.freeze(Object.defineProperty({__proto__:null,effects:Re,events:tg,selectors:me},Symbol.toStringTag,{value:"Module"})),Hs={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},ng=()=>q(sg),Ea=k(),$a=k(),Pa=k(),sg=J(Hs).on(Ea,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on($a,e=>({...e,isOpen:!1})).on(Pa,()=>({...Hs})),Ca={useConfirm:ng},ot={evokeConfirm:Ea,closeConfirm:$a,clearStore:Pa},og=Object.freeze(Object.defineProperty({__proto__:null,events:ot,selectors:Ca},Symbol.toStringTag,{value:"Module"})),ag=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=z(async u=>{const h=await i.post(u);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});C({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:H.evokePopUpMessage}),C({clock:a.failData,fn:u=>({message:`${u.message}`,type:"failure"}),target:H.evokePopUpMessage}),C({clock:a.doneData,target:Re.getApplicationsFx});const r=z(async u=>{if(i.get)try{return{...(await i.get(u)).data}}catch(h){throw new Error(h)}return n.data}),c=k(),d=J(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:rg,events:lg,selectors:cg}=ag({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:mh,post:bh}}),dg=Object.freeze(Object.defineProperty({__proto__:null,effects:rg,events:lg,selectors:cg},Symbol.toStringTag,{value:"Module"})),Oa=k(),Aa=k(),Da=k(),Na=k(),ki=z(async()=>{const i=(await xh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});C({clock:ki.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:H.evokePopUpMessage});C({clock:ki.doneData,fn:()=>!0,target:Da});C({clock:ki.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:H.evokePopUpMessage});const vi=z(async()=>{try{return(await fh())[0]}catch(e){throw new Error(e)}});C({clock:Aa,target:ki});C({clock:Oa,target:vi});const Ia=k(),pg=vi.pending,ug=ki.pending,hg=J(!1).on(Na,(e,i)=>i),gg=J(!1).on(Da,(e,i)=>i),fg=J(null).on(vi,()=>null).on(vi.failData,(e,i)=>i.message),xg=J(null).on(vi.doneData,(e,i)=>i).on(Ia,()=>null),Ra={$error:fg,$electronicInteractionStore:xg,$completed:hg,$done:gg,$loading:pg,$workerLoading:ug},Ln={getElectronicInteraction:Oa,postElectronicInteraction:Aa,changeCompleted:Na,clearStore:Ia},mg=Object.freeze(Object.defineProperty({__proto__:null,events:Ln,stores:Ra},Symbol.toStringTag,{value:"Module"})),bg="Sep 07 2023 12:00:00 GMT+0300",La="Sep 08 2023 12:00:00 GMT+0300",DT=e=>{const i=new Date;return i<new Date(bg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(La)?"Подача заявок закрыта":""},se=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Us=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),se(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),se(n,"extraWeird")}},st=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Us(-30*11),maxValueInput:Us(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Mi={kvdCert:st({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:st({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:st({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:st({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},ue=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const d=new Date(a.minValueInput);if(c<d)return!0}if(a.maxValueInput){const d=new Date(a.maxValueInput);if(c>d)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},vg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},yg=()=>Object.keys(Me).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),za=(e="")=>({[e]:{...yg(),[Me["settings-appearance"]]:{id:Me["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Me["settings-home-page"]]:{id:Me["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Me["settings-customize-menu"]]:{id:Me["settings-customize-menu"],property:{pages:an}},[Me["settings-notifications"]]:{id:Me["settings-notifications"],property:vg}}});var Me=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Me||{});const zn={settings:za(),error:null,completed:!1};let Ae;const _g=()=>({settings:q(Vi).settings[Ae],error:q(Vi).error,completed:q(Vi).completed}),wg=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},Ma=z(e=>{Ae=e;const i=JSON.parse(localStorage.getItem(F.NewSettings)??"{}")[Ae];return wg(i,za(e)[e])}),Fa=k(),Ba=k(),Ha=k(),Vi=J(zn).on(Ba,(e,i)=>({...e,completed:i.completed})).on(Ma.doneData,(e,i)=>({...e,settings:{[Ae]:i}})).on(Fa,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Ae]:{...e.settings[Ae],[i]:{...e.settings[Ae][i],property:{...e.settings[Ae][i].property,[n]:s}}}}})).on(Ha,()=>({...zn}));Vi.watch(e=>{if(e!==zn&&Ae){const i=JSON.parse(localStorage.getItem(F.NewSettings)??JSON.stringify({}));i[Ae]=e.settings[Ae],localStorage.setItem(F.NewSettings,JSON.stringify(i))}});const Yt={useSettings:_g},Si={updateSetting:Fa,changeCompleted:Ba,clearStore:Ha},jg={getLocalSettingsFx:Ma},xt=()=>{var a,r;const{settings:e}=Yt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),Si.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},kg=p.button`
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

    ${ee.isTablet} {
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:m,direction:x="horizontal",isActive:b=!0,height:v,notActiveClickMessage:E,flipped:I,...j}=e,S=A=>{b?s==null||s(A):E&&H.evokePopUpMessage({type:"failure",message:E,time:1e4})};return t.jsxs(kg,{text:!!n,onClick:S,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:u,direction:x,isActive:b,fixedInMobile:m,height:v,flipped:I,...j,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const Mn=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Ws=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Sg=p.div`
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
`,Tg=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],cn=p.div.withConfig({shouldForwardProp:e=>!Tg.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Ws(n):Mn(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Mn(i):Ws(n)};
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
`,Eg=p.div`
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
`;function Y({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Eg,{pulse:s,size:i,shape:e,margin:n})}const $g=p(cn)`
    height: 100%;
`,Pg=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx($g,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(Y,{...o,key:a}))}),bt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Cg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:bt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:bt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:bt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:bt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:bt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:bt(n),children:i});default:return t.jsx("h1",{className:"title",style:bt(n),children:i})}}const Og=p.div`
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
`,Ag=p.span`
    color: var(--red);
    margin-right: 5px;
`,Dg=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function W(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(Og,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(Cg,{size:o,width:r,children:[a&&t.jsx(Ag,{children:"*"}),t.jsx(Dg,{width:r,children:s})]})]}):null}const Ng=(e,i,n)=>n?"#fff":e?w[Tt[i].color].dark3:w[Tt[i].color].light3,Ig=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Ng(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[Tt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[Tt[e].color][i?"main":"light2"]};
    }
`,Rg=()=>t.jsx(Pg,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function Q({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f=!1,align:g="left",visible:m=!0,loading:x=!1}){if(!m)return null;const{theme:b}=xt();return t.jsxs(Ig,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f,children:[t.jsx(W,{size:4,align:g,icon:n===null?null:n??Tt[e].icon({}),children:a??Tt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Xe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),x&&t.jsx(Rg,{})]})}p.div`
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
        background: ${({reached:e,current:i})=>i?"var(--reallyBlue)":e?w.green.main:w.grey.main};
        outline: 6px solid
            ${({reached:e,current:i})=>i?w.blue.transparent3:e?w.green.transparent3:w.grey.transparent3};
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
`;const Lg=p.div`
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
        background: ${({reached:e})=>e?w.green.main:"none"};
    }
`,zg=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(Lg,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),xe=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Mg="/assets/sad-emoji-0c60bf90.gif",oe=p.span`
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
`,Fg=p.div`
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
`;function fe({text:e,image:i,size:n,children:s}){return t.jsxs(Fg,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Mg,alt:"груфтим("}):i}),t.jsx(oe,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Bg="/assets/loading-c8041cd3.gif",Hg=p.img`
    width: 40px;
`;function Qe(e){return t.jsx(Hg,{...e,src:Bg,alt:"loading",className:"loading-circle"})}const Ug="/assets/logo-4d9aa449.png",Wg="/assets/mospolytech-logo-white-b1e4f630.png",Vg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function dn({width:e,className:i,short:n=!1}){return t.jsx(Vg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Wg:Ug,alt:"Logo"})})}const Gg=p.img``;function cs({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(Y,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Gg,{src:i,alt:o,height:n,width:s})}const qg=p.div`
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
`;function Ua({size:e,color:i}){return t.jsx(qg,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Yg=p.div`
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
`;function Jg(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Yg,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(W,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const Xg=p.button`
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
`,dt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:m=!1,repeatable:x=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(H.evokePopUpMessage({message:c,type:"success"}),x&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const v=()=>{if(f&&!h&&!g)return i();b&&H.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Xg,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:f&&!h&&!m,onClick:v,isDone:h,width:n,height:s,repeatable:x,tabIndex:f&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(op,{})," ",r]}):g?t.jsx(Qe,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Yi={small:"32px",middle:"36px",big:"44px"},Fe=e=>({size:i})=>e[i],Kg=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Qg=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},Zg={groupMask:Kg,phoneMask:Qg},ef=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const g=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(i(c?r?r(v.target.value,e):n==="tel"?Zg.phoneMask(v):n==="email"?g(v.target.value):v.target.value:v.target.value),n==="date"&&(o||a)){const E=new Date(v.target.value);let I=!1;if(o){const j=new Date(o);I=E<j}if(a&&!I){const j=new Date(a);I=E>j}f(I)}i(v.target.value)}}},tf=p.div`
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
        height: ${Fe(Yi)};
        max-height: ${Fe(Yi)};
        border: ${({danger:e})=>e&&`2px solid ${w.red.main}`};

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
`,pt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:m,alertMessage:x,loading:b=!1,isActive:v=!0,inputAppearance:E=!0,mask:I=!1,autocomplete:j=!1,minValue:S=void 0,maxValue:A=void 0,maxLength:L=void 0,hideCross:N=!1,stepSize:K=.1,size:M="middle"}=i,{inputType:ie,buttonOnClick:ce,danger:$e,handleOnChange:ke,phoneMaskKeyDown:Ge}=ef(s,o,g,m,S,A,h,I),ge=s&&g==="date"?ap(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(tf,{leftIcon:!!a,isActive:v,inputAppearance:E,width:d,danger:$e,minWidth:u,size:M,children:[t.jsx(W,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(Q,{type:"alert",visible:!!x,icon:t.jsx(rp,{}),title:x??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:S,max:A,maxLength:L,step:K??void 0,type:ie,placeholder:f,value:ge,autoComplete:j?"on":"off",onKeyDown:Ce=>g==="tel"&&Ge(Ce),onChange:ke,required:c,readOnly:!v,ref:n}),g!=="password"?!!(s!=null&&s.length)&&E&&(b?t.jsx(Qe,{}):!N&&t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ie==="password"?t.jsx(lp,{}):t.jsx(Lo,{}),tabIndex:-1,onClick:ce})]})}),nf=p.div`
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
`,sf="/assets/thinking-emoji-f3c10f79.gif",of=["loading"],af=p.div.withConfig({shouldForwardProp:e=>!of.includes(e)})`
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
`,We=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(af,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(fe,{text:n,image:a&&sf,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(ts,{})})})}):t.jsx(Qe,{})}),t.jsx("div",{className:"content",children:e})]})),rf=p.a`
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
`,lf=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(rf,{text:!!i,onClick:m=>f&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Ti=l.memo(lf),pn=p.div`
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
    padding-top: 80px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,cf=p.a`
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
`,df=({title:e,link:i,type:n})=>t.jsxs(cf,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(D,{}):t.jsx(cp,{})}),t.jsx("div",{className:"title",children:e})]}),pf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),uf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},hf=()=>je(gf),Wa=k(),Va=k(),Ga=k(),gf=J(uf).on(Wa,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:pf(n,220,s),open:!0,content:i,type:o})).on(Va,e=>({...e,open:!1})).on(Ga,(e,{position:i})=>({...e,position:i})),Ie={open:Wa,close:Va,changePosition:Ga},ff={useContextMenu:hf},xf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},$n=new Set,qa=(e,i)=>{l.useEffect(()=>{const n=o=>{$n.add(o.which),!e.slice(0,e.length-1).find(r=>!$n.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{$n.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Ze=p.div`
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

    ${ee.isMobile} {
        flex-direction: column;
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,O=p.div`
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
`,ye=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Ya=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=ye(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Ja=e=>/[A-Za-z]/.test(e),mf=p.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${w.blue.transparent2};
    }

    &:focus-visible {
        background: ${w.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,Xa=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Ja(e))return null;const s=Ya(e),o=()=>i(s);return t.jsxs(oe,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(mf,{tabIndex:10,children:s})]})};function Jt(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function ut(e,i,n=0){return e>i?n:e<n?i:e}const bf=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,vf=p(Ze)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,yf=p.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?w.blue.main:"transparent"};
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
        background: ${({selected:e})=>e?w.blue.main:"var(--theme-1)"};
    }
`,Ka=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[m,x]=l.useState(0),[b,v]=l.useState(!1),E=l.useRef(null),I=l.useRef(null),j=l.useRef(null);Jt(E,()=>v(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var N;return(N=j.current)==null?void 0:N.focus()},50)},[c]);const S=N=>{var K,M;(((a==null?void 0:a.length)??0)>0||o)&&v(!0),N.key==="ArrowDown"?((K=I.current)==null||K.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&x(ut(m+1,((a==null?void 0:a.length)??1)-1,0))):N.key==="ArrowUp"?((M=I.current)==null||M.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&x(ut(m-1,((a==null?void 0:a.length)??1)-1,0))):N.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),v(!1),h==null||h(a==null?void 0:a[m??0])):x(0)},A=N=>()=>{x(N),d((a==null?void 0:a[N].title)??""),v(!1),h==null||h(a==null?void 0:a[N])},L=()=>{a!=null&&a.length&&v(!0)};return t.jsxs(bf,{width:i,onKeyDown:S,onMouseDown:L,ref:E,children:[t.jsx(pt,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(Bt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:j}),t.jsx(Xa,{setValue:d,value:e,visible:f}),b&&t.jsx(vf,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:S,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:N,icon:K},M)=>{const ie=m===M;return t.jsxs(yf,{onClick:A(M),ref:ie?I:null,selected:ie,children:[K&&t.jsx("div",{className:"icon",children:K}),t.jsx("span",{children:N})]},N+M)})})]})},un=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Vs={small:"30px",middle:"44px",big:"68px"},Qa={small:"8px",middle:"10px",big:"16px"},_f={small:"0.8rem",middle:"0.9rem",big:"1rem"},wf={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},jf=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Fe(Vs)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Fe(Qa)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Fe(Vs)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${ee.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`,kf=p.div`
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
        font-size: ${Fe(_f)};
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

    ${ee.isMobile} {
        & > b {
            font-size: ${Fe(wf)};
        }
    }
`,Sf=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(kf,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),Tf=l.memo(Sf),Ef=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Fe(Qa)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,$f=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(Ef,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},Pf=l.memo($f),Cf=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=un();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(jf,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Pf,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(Tf,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},ds=l.memo(Cf),Of=300,Za=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Of})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,f]},Et=p.span`
    color: #fff;
    background: ${({color:e})=>w[e??"red"].light1};
    position: ${({position:e})=>e??"absolute"};
    box-shadow: ${({color:e,shadow:i})=>i&&`0 0 35px ${w[e??"red"].main}`};
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
        background: ${({color:e})=>w[e??"red"].light1};
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
`,Af=p.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e??"15px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({backgroud:e})=>w[e]?w[e].main:e};
    transition: 0.2s;

    svg {
        color: #fff;
        width: 100%;
        height: 100%;
        scale: 0.5;
    }
`,mt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(Af,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(Et,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},er=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=v=>{n(i(v,e))},f=()=>{n(null)},[g,m,x]=Za({onDebounce:h,onClear:f}),b=v=>{m(v),o&&o(v)};return t.jsx(Ka,{value:g??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?x:!1,hints:a,width:r})},Df=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(nf,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),tr=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Nf=p(tr)`
    background: var(--almostTransparentOpposite);
`,If=p(tr)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,ir=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Ee,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Nf,{},a)),t.jsx(If,{color:n,current:i})]}),Rf=p.label`
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
`,Lf=p.div`
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
`,Be=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(Rf,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(Lf,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(nn,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},nr=e=>e.split("/")[1],zf=e=>e*1024*1024,Mf=(e,i)=>(i??Ju).indexOf(e.type)!==-1,Gs=(e,i,n,s,o=Xu)=>{if(n&&i.length+e.length>n)return H.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Mf(e[a],s)?e[a].size>zf(o)?(H.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),H.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>nr(r))}`,type:"failure",time:5e3}),i)},Ff=p.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${w.blue.main}`:`2px dashed ${w.grey.main}`};
    background: ${({showPulse:e})=>e?w.blue.transparent3:""};
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
`,Ne=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Bf=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=x=>{const b=x.target.files;b!=null&&b.length&&n(Gs(b,e,i,o,a))},h=x=>{x.preventDefault()},f=x=>{x.preventDefault(),d(!1);const b=x.dataTransfer.files;b.length&&n(Gs(b,e,i,o,a))},g=x=>{x.preventDefault(),d(!0)},m=x=>{x.preventDefault(),d(!1)};return t.jsxs(Ff,{isActive:s,showPulse:c,onDragOver:x=>s&&h(x),onDragEnter:x=>s&&g(x),onDragLeave:x=>s&&m(x),onDrop:x=>s&&f(x),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(En,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(En,{className:"icon-1"}),t.jsx(En,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(oe,{align:"center",children:t.jsx(Ne,{words:[`Форматы: ${o?o.map(x=>nr(x)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Hf=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Uf=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Wf=p.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${w.grey.transparent3};
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
`,Vf=({file:e,files:i,setFiles:n})=>{const{open:s}=te(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(cs,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>ot.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Uf(r,e.name,i))});return t.jsxs(Wf,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(dp,{}):t.jsx(pp,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(oe,{fontSize:"0.7em",children:Hf(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Xe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Gf=({files:e,setFiles:i})=>t.jsx(Ee,{title:"Список файлов",visible:!!e.length,onDelete:()=>ot.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Vf,{file:n,files:e,setFiles:i},n.name))}),sr=e=>t.jsxs(Ee,{gap:12,children:[t.jsx(Bf,{...e}),t.jsx(Gf,{files:e.files,setFiles:e.setFiles})]}),qf=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Yf=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(qf,{children:[t.jsx(Be,{...e}),n&&t.jsx(sr,{...i})]}),Jf=p.div`
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
`,or=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=se(u,"extraWeird")}return t.jsxs(Jf,{children:[t.jsx(W,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(Q,{title:"Внимание",type:"alert",icon:t.jsx(mi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(pt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(pt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Xf=e=>{var x,b,v;const{width:i}=un(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,d]=l.useState(0),[u,h]=l.useState(0),f=((x=n.current)==null?void 0:x.clientWidth)??1,g=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(f+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(v=n.current)==null?void 0:v.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:d,pageOffset:f,amountOfPages:g,currentPage:u,setCurrentPage:h,handleScroll:E=>{h(Math.ceil(E.currentTarget.scrollLeft/(f+(e??0))))}}},Kf=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:f,showPages:g,innerPadding:m,minWidth:x,wrapOnMobile:b,position:v,direction:E="vertical",verticalAlign:I="top",horizontalAlign:j="left",scroll:S=!0,visible:A=!0,...L}=e;if(!A)return null;const{listRef:N,leftArrow:K,rightArrow:M,handleScroll:ie,setScrollLeft:ce,pageOffset:$e,amountOfPages:ke,currentPage:Ge}=Xf(s);return t.jsxs(Sg,{padding:r,position:v,width:o,minWidth:x,height:a,children:[t.jsxs(W,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(_,{icon:t.jsx(St,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(_,{width:"50px",height:"15px",background:w.blue.transparent3,textColor:w.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(cn,{verticalAlign:I,horizontalAlign:j,direction:E,ref:N,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:S,wrapOnMobile:b,onScroll:ie,...L,children:n}),(M||K)&&t.jsxs("div",{className:"bottom-wrapper",children:[K&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(wi,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{ce(ge=>{var Ce;return ut(ge-$e-(s??0),((Ce=N.current)==null?void 0:Ce.scrollWidth)??0)})}}),g&&t.jsx(ir,{direction:"horizontal",current:Ge,amount:ke}),M&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(ht,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{ce(ge=>{var Ce;return ut(ge+$e+(s??0),((Ce=N.current)==null?void 0:Ce.scrollWidth)??0)})}})]})]})},Ee=le.memo(Kf),Qf=()=>t.jsx("div",{className:"left",children:t.jsxs(Ee,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(dn,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Ee,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:js,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(bi,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Pl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(up,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:$l,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(mi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Cl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(mi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(xe,{}),t.jsx(Z,{to:El,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(hp,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Ti,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(sn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),Zf=()=>{const{search:e}=Vt();return le.useMemo(()=>new URLSearchParams(e),[e])},ex=()=>{const e=Zf(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=Ct.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},m=b=>{Ct.changeSavePassword({savePassword:b})},x=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:m,handleKeyPress:g,handleLogin:x,setPassword:r,setLogin:o}},tx=()=>{const{loading:e,error:i,data:n}=_e.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:f,setLogin:g}=ex();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Ee,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(dn,{width:"50px",short:!0,className:"logo second"}),t.jsx(O,{jc:"space-between",children:t.jsx(W,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(Q,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Ee,{gap:16,scroll:!1,children:[t.jsx(W,{size:4,align:"left",children:"Вход"}),t.jsx(oe,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(Q,{type:"failure",visible:!!i,children:i}),t.jsx(Q,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(pt,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(pt,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Be,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(dt,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},ix=p(Ze)`
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
`,nx=()=>{const{data:{isAuthenticated:e}}=_e.useUser();return t.jsxs(ix,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Qf,{}),t.jsx(tx,{})]})},sx=p.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${ee.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,ox=()=>t.jsx(sx,{children:t.jsx(nx,{})}),Te=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(fe,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(sn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),ax="modulepreload",rx=function(e){return"/"+e},qs={},y=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=rx(a),a in qs)return;qs[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":ax,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},lx=l.lazy(()=>y(()=>import("./index-ed8a706e.js"),["assets/index-ed8a706e.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),cx=l.lazy(()=>y(()=>import("./index-3e9ebdaa.js"),["assets/index-3e9ebdaa.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-a874cb3c.js"])),Ys=l.lazy(()=>y(()=>import("./index-ac30c75f.js"),["assets/index-ac30c75f.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js"])),dx=l.lazy(()=>y(()=>import("./index-a5124668.js"),["assets/index-a5124668.js","assets/vendor-561dac3a.js","assets/get-default-subdivision-17957fb0.js"])),px=l.lazy(()=>y(()=>import("./index-31426284.js"),["assets/index-31426284.js","assets/vendor-561dac3a.js","assets/index-b3042779.js","assets/form-0f97650a.js","assets/find-current-in-select-ba4611d5.js","assets/send-form-5a4a94a0.js"])),ux=l.lazy(()=>y(()=>import("./form-0f97650a.js"),["assets/form-0f97650a.js","assets/vendor-561dac3a.js","assets/find-current-in-select-ba4611d5.js","assets/send-form-5a4a94a0.js"])),ar=l.lazy(()=>y(()=>import("./index-5f30b9e6.js"),["assets/index-5f30b9e6.js","assets/vendor-561dac3a.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>zb),void 0));const hx=l.lazy(()=>y(()=>import("./index-5e94f0da.js"),["assets/index-5e94f0da.js","assets/vendor-561dac3a.js","assets/index-ceb059de.js"])),gx=l.lazy(()=>y(()=>import("./index-825dcbcc.js"),["assets/index-825dcbcc.js","assets/vendor-561dac3a.js","assets/index-f17e074f.js"])),fx=l.lazy(()=>y(()=>import("./index-79e57ad3.js"),["assets/index-79e57ad3.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),xx=l.lazy(()=>y(()=>import("./index-97f20994.js"),["assets/index-97f20994.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js"])),mx=l.lazy(()=>y(()=>import("./index-92b09b9f.js"),["assets/index-92b09b9f.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-a874cb3c.js"])),bx=l.lazy(()=>y(()=>import("./index-252ea57e.js"),["assets/index-252ea57e.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-a874cb3c.js"])),vx=l.lazy(()=>y(()=>import("./index-5f44b814.js"),["assets/index-5f44b814.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-a874cb3c.js"])),yx=l.lazy(()=>y(()=>import("./index-84ed318c.js"),["assets/index-84ed318c.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-a874cb3c.js"])),_x=l.lazy(()=>y(()=>import("./index-2ee8064c.js"),["assets/index-2ee8064c.js","assets/vendor-561dac3a.js","assets/ui-0fd3a678.js","assets/index-6a3ce409.js"])),wx=l.lazy(()=>y(()=>import("./index-4d0f628e.js"),["assets/index-4d0f628e.js","assets/vendor-561dac3a.js","assets/ui-0fd3a678.js"])),jx=l.lazy(()=>y(()=>import("./index-ef25f29a.js"),["assets/index-ef25f29a.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-a874cb3c.js"])),kx=l.lazy(()=>y(()=>import("./index-c7aadce4.js"),["assets/index-c7aadce4.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-a874cb3c.js"])),Sx=l.lazy(()=>y(()=>import("./index-f297cfca.js"),["assets/index-f297cfca.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-a874cb3c.js"])),Tx=l.lazy(()=>y(()=>import("./index-8b45607c.js"),["assets/index-8b45607c.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-a874cb3c.js"])),Ex=l.lazy(()=>y(()=>import("./index-71896cfb.js"),["assets/index-71896cfb.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-a874cb3c.js"])),$x=l.lazy(()=>y(()=>import("./index-259936b7.js"),["assets/index-259936b7.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-a874cb3c.js"])),Px=l.lazy(()=>y(()=>import("./index-269a1cea.js"),["assets/index-269a1cea.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-a874cb3c.js"])),Cx=l.lazy(()=>y(()=>import("./index-d651b4ab.js"),["assets/index-d651b4ab.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),Ox=l.lazy(()=>y(()=>import("./index-2cab7c35.js"),["assets/index-2cab7c35.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-a874cb3c.js"])),Ax=l.lazy(()=>y(()=>import("./index-f745b0f6.js"),["assets/index-f745b0f6.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-a874cb3c.js"])),Dx=l.lazy(()=>y(()=>import("./index-b2fd0f78.js"),["assets/index-b2fd0f78.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-a874cb3c.js"])),Nx=l.lazy(()=>y(()=>import("./index-7eeb7af1.js"),["assets/index-7eeb7af1.js","assets/vendor-561dac3a.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-a874cb3c.js"])),Ix=l.lazy(()=>y(()=>import("./index-5e31d3ec.js"),["assets/index-5e31d3ec.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Rx=l.lazy(()=>y(()=>import("./index-68d51af9.js"),["assets/index-68d51af9.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Lx=l.lazy(()=>y(()=>import("./index-813605b9.js"),["assets/index-813605b9.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),zx=l.lazy(()=>y(()=>import("./index-e30e0899.js"),["assets/index-e30e0899.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Mx=l.lazy(()=>y(()=>import("./index-772fc8a6.js"),["assets/index-772fc8a6.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Fx=l.lazy(()=>y(()=>import("./index-5de2c8b7.js"),["assets/index-5de2c8b7.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Bx=l.lazy(()=>y(()=>import("./index-3b87cc6c.js"),["assets/index-3b87cc6c.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Hx=l.lazy(()=>y(()=>import("./index-68f7511a.js"),["assets/index-68f7511a.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ux=l.lazy(()=>y(()=>import("./index-9f449403.js"),["assets/index-9f449403.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Wx=l.lazy(()=>y(()=>import("./index-3eb93857.js"),["assets/index-3eb93857.js","assets/vendor-561dac3a.js","assets/index-a874cb3c.js","assets/index-5281eaa7.js","assets/send-form-5a4a94a0.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Vx=l.lazy(()=>y(()=>import("./index-565a502d.js"),["assets/index-565a502d.js","assets/vendor-561dac3a.js"]));l.lazy(()=>y(()=>import("./index-863708f5.js"),["assets/index-863708f5.js","assets/vendor-561dac3a.js","assets/index-d89ae84e.js","assets/index-6a3ce409.js"]));const ps=l.lazy(()=>y(()=>import("./index-ff55d358.js"),["assets/index-ff55d358.js","assets/vendor-561dac3a.js"])),Gx=l.lazy(()=>y(()=>import("./index-bfc82bd2.js"),["assets/index-bfc82bd2.js","assets/vendor-561dac3a.js"])),qx=l.lazy(()=>y(()=>import("./index-2c7d632c.js"),["assets/index-2c7d632c.js","assets/vendor-561dac3a.js"])),Yx=l.lazy(()=>y(()=>import("./index-0987c619.js"),["assets/index-0987c619.js","assets/vendor-561dac3a.js"])),Jx=l.lazy(()=>y(()=>import("./index-7f4c262e.js"),["assets/index-7f4c262e.js","assets/vendor-561dac3a.js"])),Xx=l.lazy(()=>y(()=>import("./index-7ee31fe2.js"),["assets/index-7ee31fe2.js","assets/vendor-561dac3a.js"])),Kx=l.lazy(()=>y(()=>import("./index-6ac66f70.js"),["assets/index-6ac66f70.js","assets/vendor-561dac3a.js","assets/get-default-subdivision-17957fb0.js"])),Qx=l.lazy(()=>y(()=>import("./index-97c9ca20.js"),["assets/index-97c9ca20.js","assets/vendor-561dac3a.js","assets/get-default-subdivision-17957fb0.js"])),Zx=l.lazy(()=>y(()=>import("./index-edbd5750.js"),["assets/index-edbd5750.js","assets/vendor-561dac3a.js"])),em=l.lazy(()=>y(()=>import("./index-e0e5c102.js"),["assets/index-e0e5c102.js","assets/vendor-561dac3a.js","assets/send-hr-form-work-transfer-33e68888.js"])),tm=l.lazy(()=>y(()=>import("./index-7ae1a600.js"),["assets/index-7ae1a600.js","assets/vendor-561dac3a.js","assets/send-hr-form-work-transfer-33e68888.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>y0),void 0));l.lazy(()=>y(()=>import("./index-3f46e11e.js"),["assets/index-3f46e11e.js","assets/vendor-561dac3a.js","assets/BoldText-68a8be97.js","assets/help-links-7e49718e.js"]));const im=l.lazy(()=>y(()=>import("./index-625e7a22.js"),["assets/index-625e7a22.js","assets/vendor-561dac3a.js"])),rr=l.lazy(()=>y(()=>import("./index-973040d3.js"),["assets/index-973040d3.js","assets/vendor-561dac3a.js","assets/index-d89ae84e.js","assets/index-6a3ce409.js"])),lr=l.lazy(()=>y(()=>import("./index-863708f5.js"),["assets/index-863708f5.js","assets/vendor-561dac3a.js","assets/index-d89ae84e.js","assets/index-6a3ce409.js"])),nm=l.lazy(()=>y(()=>import("./index-fe5276d3.js"),["assets/index-fe5276d3.js","assets/vendor-561dac3a.js"]));l.lazy(()=>y(()=>import("./index-e573ad07.js"),["assets/index-e573ad07.js","assets/vendor-561dac3a.js","assets/index.esm-7da5ec35.js"]));const sm=l.lazy(()=>y(()=>import("./index-b5069860.js"),["assets/index-b5069860.js","assets/vendor-561dac3a.js"])),cr=l.lazy(()=>y(()=>import("./index-79b4505f.js"),["assets/index-79b4505f.js","assets/vendor-561dac3a.js","assets/help-links-7e49718e.js"])),om=l.lazy(()=>y(()=>import("./index-d6e53bf2.js"),["assets/index-d6e53bf2.js","assets/vendor-561dac3a.js"])),am=l.lazy(()=>y(()=>import("./index-f226ea1a.js"),["assets/index-f226ea1a.js","assets/vendor-561dac3a.js","assets/alert-item-e082835e.js","assets/is-valid-url-08a91344.js"])),rm=l.lazy(()=>y(()=>import("./index-5cad3833.js"),["assets/index-5cad3833.js","assets/vendor-561dac3a.js","assets/index-9ec36af3.js","assets/alert-item-e082835e.js","assets/is-valid-url-08a91344.js"])),lm=l.lazy(()=>y(()=>import("./index-e8801a44.js"),["assets/index-e8801a44.js","assets/vendor-561dac3a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>jv),void 0));const cm=l.lazy(()=>y(()=>import("./index-b8ca9f82.js"),["assets/index-b8ca9f82.js","assets/vendor-561dac3a.js"])),dr=l.lazy(()=>y(()=>import("./index-4e794f85.js"),["assets/index-4e794f85.js","assets/vendor-561dac3a.js","assets/index-9ec36af3.js","assets/index-6a3ce409.js"])),dm=l.lazy(()=>y(()=>import("./index-ad5d9413.js"),["assets/index-ad5d9413.js","assets/vendor-561dac3a.js","assets/index-d6ecdccc.js"])),pm=l.lazy(()=>y(()=>import("./index-e2253da1.js"),["assets/index-e2253da1.js","assets/vendor-561dac3a.js","assets/index-d6ecdccc.js"])),um=l.lazy(()=>y(()=>import("./index-1e8bf1cc.js"),["assets/index-1e8bf1cc.js","assets/vendor-561dac3a.js","assets/index-d6ecdccc.js"])),hm=l.lazy(()=>y(()=>import("./index-c553e7d3.js"),["assets/index-c553e7d3.js","assets/vendor-561dac3a.js"])),gm=l.lazy(()=>y(()=>import("./index-1078eee3.js"),["assets/index-1078eee3.js","assets/vendor-561dac3a.js","assets/index.esm-7da5ec35.js","assets/index-b3042779.js"])),fm=l.lazy(()=>y(()=>import("./index-e362e7be.js"),["assets/index-e362e7be.js","assets/vendor-561dac3a.js"])),xm=l.lazy(()=>y(()=>import("./index-5779c7ae.js"),["assets/index-5779c7ae.js","assets/vendor-561dac3a.js"])),mm=l.lazy(()=>y(()=>import("./index-72db377c.js"),["assets/index-72db377c.js","assets/vendor-561dac3a.js"])),bm=l.lazy(()=>y(()=>import("./index-bc5846f8.js"),["assets/index-bc5846f8.js","assets/vendor-561dac3a.js","assets/index-ceb059de.js"])),vm=l.lazy(()=>y(()=>import("./index-55a36053.js"),["assets/index-55a36053.js","assets/vendor-561dac3a.js"])),ym=l.lazy(()=>y(()=>import("./index-b1143c5f.js"),["assets/index-b1143c5f.js","assets/vendor-561dac3a.js","assets/help-links-7e49718e.js"])),_m=l.lazy(()=>y(()=>import("./index-0e58ee7d.js"),["assets/index-0e58ee7d.js","assets/vendor-561dac3a.js","assets/help-links-7e49718e.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>Hk),void 0));const wm=l.lazy(()=>y(()=>import("./index-3f46e11e.js"),["assets/index-3f46e11e.js","assets/vendor-561dac3a.js","assets/BoldText-68a8be97.js","assets/help-links-7e49718e.js"])),jm=l.lazy(()=>y(()=>import("./index-e59bda65.js"),["assets/index-e59bda65.js","assets/vendor-561dac3a.js"])),km=p.div`
    width: 100%;
`,Sm=()=>t.jsxs(km,{children:[t.jsx(Y,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(Y,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ve=e=>{const{children:i,skeleton:n=t.jsx(Sm,{}),loading:s=!1,...o}=e;return t.jsx(Ze,{...o,className:"block",children:s?n:i})},Tm=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},Pn=p.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??w.blue.transparent3};
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
`,Em=p.div`
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
`,$m=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:f}=Tm(c,r);return c.length?t.jsxs(Em,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(Pn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(St,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(Pn,{background:g.background,remove:u===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(Xe,{})})]},g.id)}),c.length&&!!n&&t.jsx(Pn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Ut=(e,i)=>{switch(i){case"date":return se(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},Pm=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,Cm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),f=l.useCallback(m=>{var x,b;o(v=>(v&&v[m]&&delete v[m],{...v})),m===((x=i==null?void 0:i.column)==null?void 0:x.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const x=Object.values(s)[0].column;return m={[(x==null?void 0:x.field)??""]:{id:(x==null?void 0:x.field)??"",title:"Фильтр: "+(x==null?void 0:x.title)}},{...m}});else{const m=Object.values(s).find(x=>{var b;return!c[((b=x.column)==null?void 0:b.field)??""]});m&&d(x=>{var E,I;const b=((E=m.column)==null?void 0:E.field)??"",v="Фильтр: "+((I=m.column)==null?void 0:I.title);return x&&(x[b]={id:b,title:v}),{...x}})}i&&d(m=>{var v;const x=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return m?m[x]={id:x,title:b}:m={[x]:{id:x,title:b}},{...m}}),a&&d(m=>{var v;const x=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return m?m[x]={id:x,title:b}:m={[x]:{id:x,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,x=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&x){const v=e==null?void 0:e.filter(E=>ye(Ut(E[x],m==null?void 0:m.type)).includes(ye(Ut(i.value,m==null?void 0:m.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(x=>!Object.values(s).find(b=>{var v;return x[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var x;const m=((x=a==null?void 0:a.column)==null?void 0:x.field)??"";a?h(b=>{const v=[...b??[]];return v==null||v.sort((E,I)=>I[m]<E[m]?a.value==="asc"?1:-1:I[m]>E[m]?a.value==="asc"?-1:1:0),v}):(d(b=>{const v=Pm(b,"Сортировка");return b&&v&&delete b[v],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},Fn=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),Fn(n.children,i)):n?n.children:e},Om=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[m,x]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{x(i)});const E=l.useCallback(()=>{d(S=>!S)},[d]),I=l.useCallback(S=>{if(S.children)f.push(S.id.toString()),x(Fn(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(A=>A.id===S.id)){const A=o.filter(L=>L.id!==S.id);A.length?n(A):n(null)}else n([...o,S]);else n([S]);else n(S);!r&&E(),v(f.join("/"))}s==null||s(S)},[n,f]),j=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?x(i):x(Fn(i,f)??[])},[f,x]);return Jt(u,()=>{c&&E()}),{handleOpen:E,refElement:u,isOpen:c,multiple:r,handleSelect:I,selectedRoute:b,currentItems:m,route:f,goBack:j,refItems:h,appearance:a}},Am=p.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${Fe(Yi)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,Dm=p.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${Fe(Yi)};

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
`,Nm=p.header`
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
        background: ${w.blue.transparent2};
        color: ${w.blue.main};
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
`,Im=p.ul`
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
        top: 36px;
    }
`,Js=p.li`
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
`,Rm=["isOpen"],Lm=p(gp).withConfig({shouldForwardProp:e=>!Rm.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,zm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:f}=Om(e),{isActive:g,width:m,title:x,required:b,selected:v,placeholder:E,size:I="middle"}=e;return t.jsxs(Dm,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:m,size:I,children:[t.jsx(W,{size:4,align:"left",bottomGap:"5px",visible:!!x,required:b,children:x}),t.jsxs(Am,{multiple:o,appearance:f,size:I,children:[t.jsx(Nm,{appearance:f,children:o?v?v.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:E??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:E??"Не выбрано"})})}),t.jsx(Lm,{isOpen:s})]}),t.jsxs(Im,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:x,children:[!!d.length&&t.jsx(Js,{isSelected:!1,onClick:j=>{j.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(wi,{}),"Назад"]})},-1),c.map(({id:j,icon:S,title:A,children:L,data:N})=>t.jsxs(Js,{onClick:K=>{K.stopPropagation(),a({id:j,icon:S,title:A,children:L,data:N})},isSelected:!o&&!!v&&v.title.includes(A),leadingToSelected:r.includes(j.toString()),children:[!!S&&t.jsx("span",{className:"icon",children:S}),t.jsx("span",{className:"select-item-title",children:A}),!!L&&t.jsx("span",{className:"right-icon",children:t.jsx(ht,{})}),o&&!!v&&!!v.find(K=>K.title.includes(A))&&t.jsx("span",{className:"right-icon",children:t.jsx(nn,{})})]},A))]})]})},pr=l.memo(zm),Mm=e=>{switch(e){case"desc":return H.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return H.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return H.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Fm=p.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    cursor: pointer;
    background: ${({even:e})=>e?`${w.blue.transparent3}`:"var(--theme)"};

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
`,ur=p.div`
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
`,Bm=p.div`
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
`,Hm=p.div`
    display: flex;
    align-items: center;
`,Um=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return Mm(h),h?{column:d,value:h}:null})};return t.jsx(Bm,{children:e.map(d=>{var u,h,f,g;return t.jsxs(ur,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Bt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(fp,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Hm,{children:t.jsx(pr,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(x=>(m&&(x={...x,[d.field]:{column:d,value:m}}),x)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},Wm=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(O,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(wi,{}),onClick:()=>r(ut(n-1,e).toString())}),t.jsxs(O,{w:"fit-content",gap:"6px",children:[t.jsx(pt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(oe,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(ht,{}),onClick:()=>r(ut(n+1,e).toString())})]}):null},Vm=p.div`
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
`,vt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Vm,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,Gm=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,qm=({obj:e,columns:i})=>t.jsx(Gm,{children:i.map(n=>t.jsx(vt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Ut(e[n.field],n.type)},n.title))}),hr=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=te(),r=()=>a(t.jsx(qm,{obj:n,columns:i||e}),"Информация");return t.jsx(Fm,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(ur,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:u=>{c.onClick&&(u.stopPropagation(),c.onClick(n))},children:c.render?c.render(Ut(n[c.field],c.type),n):Ut(n[c.field],c.type)},c.field)})})})},Ym=p.div`
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
`,Jm=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Xm=p.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Km=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),u=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(Jm,{children:t.jsx(Qe,{})}):t.jsxs(Ym,{children:[h==null?void 0:h.map((f,g)=>t.jsx(hr,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(fe,{text:"Нет данных"}),u>0&&t.jsx(xe,{margin:"0",width:"100%"}),t.jsx(Xm,{children:t.jsx(Wm,{pages:u,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},Qm=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Zm=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},e0=({search:e,setSearch:i})=>{var n,s;return t.jsx(Qm,{closed:!(e!=null&&e.column),children:t.jsx(pt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Zm((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Bt,{}),minWidth:"auto"})})},t0=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function i0(e){return Object.keys(e).map(i=>({title:"",field:i}))}const n0=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(t0(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(xe,{}),t.jsx(hr,{onRowClick:()=>null,columns:i0(s),el:s,index:1})]})},s0=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,et=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:u,setSearch:h,resultData:f,filter:g,setFilter:m,filterList:x,setFilterList:b,onRemoveOne:v,onRemoveAll:E}=Cm(n);return t.jsxs(s0,{children:[t.jsx($m,{setList:b,padding:"0 10px",list:x,onRemoveOne:v,onRemoveAll:E}),t.jsx(e0,{search:u,setSearch:h}),t.jsx(Um,{sort:c,setSort:d,columns:e,search:u,setSearch:h,filter:g,setFilter:m}),t.jsx(Km,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(n0,{footer:a,data:n,columns:e})]})},NT={ready:"Готово",pending:"В работе",rejected:"Отклонено"},hn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},us={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},IT=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],RT=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],o0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(us).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],a0=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(r0,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(l0,{columns:o0(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},r0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,l0=p(et)`
    width: 100%;
`,c0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${Ke()}`},s=await Ot({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},d0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>se(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(us).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{c0(i.applicationGuid)}})}}],p0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(h0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(u0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(f0,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(g0,{columns:d0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},u0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,h0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,g0=p(et)`
    width: 100%;
`,f0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,x0=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(m0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(p0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(a0,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},m0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,gn=p.div`
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
`,fn=()=>t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),gr=()=>{const{data:{listApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(b0,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(v0,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(fn,{})]}),t.jsx(x0,{})]})})})},b0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,v0=p.div`
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
`,y0=Object.freeze(Object.defineProperty({__proto__:null,default:gr},Symbol.toStringTag,{value:"Module"})),fr=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>se(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],xr=k(),mr=k(),br=z(async()=>{const{data:e}=await he.get(`Weekend.GetAllHistory?PersonalGuid=${qt(Ke()??"").IndividualGuid}`);return e.orders});C({clock:xr,target:br});const Ei=z(async e=>(await he.post("Weekend.AddWeekend",e)).data);C({clock:mr,target:Ei});const vr=J([]),_0=Ei.pending;C({clock:br.doneData,target:vr});C({clock:Ei.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ft.evokePopUpMessage});C({clock:Ei.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ft.evokePopUpMessage});const w0={loadBufferHolidayWork:xr,sendBufferHolidayWork:mr},LT={sendBufferHolidayWorkFx:Ei},j0={useBufferHolidayWork:()=>({data:je(vr),loading:je(_0)})},k0=()=>{const[e,i]=l.useState(!1);l.useEffect(w0.loadBufferHolidayWork,[]);const{data:n}=j0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(S0,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(T0,{columns:fr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},S0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,T0=p(et)`
    width: 100%;
`,E0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(P0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs($0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(C0,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},$0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,P0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,C0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,O0=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(A0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(E0,{info:s,index:o})),t.jsx(k0,{})]}):null},A0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,D0=()=>{const{data:{listApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(N0,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(I0,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(fn,{})]}),t.jsx(O0,{})]})})})},N0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,I0=p.div`
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
`,yr=k(),_r=k(),$i=z(async()=>{const{data:e}=await he.get(`Vacation.GetAllHistory?personalGuid=${qt(Ke()??"").IndividualGuid}`);return e});C({clock:yr,target:$i});const Dt=z(async e=>(await he.post("Vacation.AddVacation",e)).data);C({clock:_r,target:Dt});const Ji=J(null);C({clock:$i.doneData,fn:({employeeVacations:e})=>e,target:Ji});C({clock:Dt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:H.evokePopUpMessage});C({clock:Dt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:H.evokePopUpMessage});C({clock:Dt.doneData,source:Ji,fn:(e,{employeeVacations:i})=>[...e,...i],target:Ji});C({clock:$i.failData,fn:e=>{var n;return{message:rs(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:H.evokePopUpMessage});C({clock:Dt.doneData,target:$i});const R0={loadBufferHolidayPlanning:yr,sendBufferHolidayPlanning:_r},zT={sendBufferHolidayPlanningFx:Dt},L0={useBufferHolidayPlanning:()=>({data:je(Ji),loading:je(Dt.pending),getDataLoading:je($i.pending)})},xn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${Ke()}`},o=await Ot({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var wr=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(wr||{});const hs=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(Q,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>wr[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${se((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${se((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),xn(i.documentGuid,"0")}}):"-"}}],z0=()=>[...hs(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${se((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${se((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),xn(i.documentGuid,"1")}}):"-"}}],M0=()=>{const{data:e,getDataLoading:i}=L0.useBufferHolidayPlanning(),n=()=>R0.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>zo(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(We,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs(O,{jc:"space-between",m:"10px 0",children:[t.jsx(F0,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(St,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(O,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:hs(),columnsExtended:z0(),data:s,maxOnPage:10})})]})})},F0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Cn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},jr=()=>{const e=Gt(),{allRoutes:i}=He.useMenu(),n=i??{},[s,o]=l.useState(Cn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Cn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Cn(a.pathname,n))}),[e,n]),s},B0={small:"600px",middle:"700px",big:"963px",large:"100%"},kr=e=>B0[(e==null?void 0:e.pageSize)??"middle"],H0=p(Ze)`
    position: relative;

    ${ee.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ee.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,U0=p.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: -4px;
        right: 7px;
    }
`,W0=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: 40px;
    }
`,Xt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=jr(),r=kr(a);return t.jsx(Cs,{padding:"0 0 10px 0",children:t.jsxs(H0,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(U0,{children:i}),n&&t.jsx(W0,{children:n}),e]})})});Xt.displayName="PageBlock";const V0=()=>{const{data:{dataWorkerApplication:e},error:i}=me.useApplications(),n=Gt();return t.jsx(We,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Xt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Mo,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(M0,{})]})})},G0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(us).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Sr=k(),Tr=k(),gs=z(async()=>{const{data:e}=await he.get(`CarryForwardVacation.GetAllHistory?personalGuid=${qt(Ke()??"").IndividualGuid}`);return e});C({clock:Sr,target:gs});const Kt=z(async e=>(await he.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);C({clock:Tr,target:Kt});const Xi=J([]);C({clock:gs.doneData,fn:({employeeVacations:e})=>e,target:Xi});C({clock:Kt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:ft.evokePopUpMessage});C({clock:Kt.doneData,source:Xi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Xi});C({clock:gs.failData,fn:e=>{var n;return{message:rs(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:H.evokePopUpMessage});C({clock:Kt.failData,fn:e=>{var n;return{message:rs(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:ft.evokePopUpMessage});const Xs={loadBufferHolidayTransfer:Sr,sendBufferHolidayTransfer:Tr},MT={sendBufferHolidayTransferFx:Kt},fs={useBufferHolidayTransfer:()=>({data:je(Xi),loading:je(Kt.pending)})},q0=()=>{const[e,i]=l.useState(!1),{data:n}=fs.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Y0,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(J0,{columns:G0(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Y0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,J0=p(et)`
    width: 100%;
`,X0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Q0,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(K0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(eb,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(Z0,{columns:hs(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},K0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Q0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Z0=p(et)`
    width: 100%;
`,eb=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,tb=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),{data:i}=fs.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(ib,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(X0,{info:o,index:a,data:i})),t.jsx(q0,{})]})},ib=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,nb=()=>{const{data:e,loading:i}=fs.useBufferHolidayTransfer();return l.useEffect(()=>{Xs.loadBufferHolidayTransfer()},[]),t.jsx(We,{load:Xs.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(sb,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(ob,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(fn,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(tb,{})]})})})},sb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,ob=p.div`
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
`,ab=e=>localStorage.setItem("age",e.toString()),FT=e=>localStorage.getItem(e),rb=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),lb={listMedicalExamination:null,error:null},zt=z(async()=>{const e=await he.get(`MedicalExamination.GetAllHistory?PersonalGuid=${qt(Ke()??"").IndividualGuid}`);try{return ab(e.data.age),rb(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Pi=z(async e=>{try{const i=await he.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),cb=()=>{const{listMedicalExamination:e,error:i}=je(db);return{data:e,loading:je(Pi.pending),getDataLoading:je(zt.pending),error:i}};k();Le({from:Pi.doneData,to:zt});C({clock:Pi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:H.evokePopUpMessage});C({clock:Pi.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:H.evokePopUpMessage});const db=J(lb).on(zt,e=>({...e,error:null})).on(zt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(zt.failData,(e,i)=>({...e,error:i.message})),pb={loadBufferMedicalExaminationFx:zt,sendBufferMedicalExaminationFx:Pi},ub={useBufferMedicalExamination:cb},Er=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${se(i==null?void 0:i.startDate,"numeric")} - ${se(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),xn(i==null?void 0:i.documentGuid,"0")}}):"-"}],hb=()=>[...Er(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),xn(i==null?void 0:i.documentGuid,"1")}}):"-"}],gb=()=>{const{data:e,getDataLoading:i}=ub.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=me.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>zo(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(We,{load:pb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs(O,{jc:"space-between",m:"10px 0",children:[t.jsx(fb,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(St,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(O,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:Er(),columnsExtended:hb(),data:s,maxOnPage:10})})]})},fb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,xb=()=>{const{data:{dataWorkerApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Xt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(gb,{})]})})},$r=k(),Pr=k(),Cr=z(async()=>{const{data:e}=await he.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${qt(Ke()??"").IndividualGuid}`);return e.employeeHistories});C({clock:$r,target:Cr});const Ci=z(async e=>(await he.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);C({clock:Pr,target:Ci});const Or=J([]),mb=Ci.pending;C({clock:Cr.doneData,target:Or});C({clock:Ci.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ft.evokePopUpMessage});C({clock:Ci.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ft.evokePopUpMessage});const bb={loadBufferWorkTransfer:$r,sendBufferWorkTransfer:Pr},BT={sendBufferWorkTransferFx:Ci},vb={useBufferWorkTransfer:()=>({data:je(Or),loading:je(mb)})},yb=()=>{const[e,i]=l.useState(!1);l.useEffect(bb.loadBufferWorkTransfer,[]);const{data:n}=vb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(_b,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(wb,{columns:fr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},_b=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,wb=p(et)`
    width: 100%;
`,jb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Sb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(kb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(Tb,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},kb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Sb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Tb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,Eb=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs($b,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(jb,{info:s,index:o})),t.jsx(yb,{})]}):null},$b=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Pb=()=>{const{data:{listApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Cb,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(Ob,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(fn,{})]}),t.jsx(Eb,{})]})})})},Cb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Ob=p.div`
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
`,Ab=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${se(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${se(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${se(e[0])} по ${se(e[1])}`},Db=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,mn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Ye.selectors.useData();return r?t.jsxs(Db,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(or,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(Q,{type:"info",title:Ab(n)??"",icon:t.jsx(Je,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(W,{size:4,align:"left",children:c.title}),t.jsx(Ti,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(is,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(xe,{})]},c.title)})]})]}):null},Nb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Ib=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Rb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},Lb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},Ar=()=>{var i;const{data:e}=Ye.selectors.useData();return t.jsx(Cs,{padding:"10px",children:t.jsx(Xt,{children:t.jsx(Ss,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Rb,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Nb,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Ib,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(Lb,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(Te,{oldVersionUrl:kv}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},zb=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),Mb=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Dr=k(),Nr=k(),Ir=k(),Wt=z(async()=>{const e=await dh();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),xs=z(async e=>{try{return await uh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Oi=z(async e=>{const i=await ph(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});C({clock:Oi.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:H.evokePopUpMessage});C({clock:Oi.doneData,fn:()=>!0,target:Nr});C({clock:Oi.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:H.evokePopUpMessage});C({clock:Dr,target:Oi});const Rr=k(),Lr=k(),Fb=es(Oi.pending,Wt.pending,Boolean),Bb=J(!1).on(Ir,(e,i)=>i),Hb=J(!1).on(Nr,(e,i)=>i),Ub=J(null).on(Wt,()=>null).on(Wt.failData,(e,i)=>i.message).on(xs.failData,(e,i)=>i.message),Wb=J(null).on(Wt.doneData,(e,i)=>i).on(xs.doneData,(e,i)=>Mb(e,i,!1)).on(Rr,()=>null),at={$loading:Fb,$completed:Bb,$done:Hb,$error:Ub,$paymentsStore:Wb};Le({from:Lr,to:Wt});const ms={getPaymentsFx:Wt,signContractFx:xs},Bn={signAgreement:Dr,setCompleted:Ir,clearStore:Rr,getPayments:Lr},Vb=Object.freeze(Object.defineProperty({__proto__:null,effects:ms,events:Bn,stores:at},Symbol.toStringTag,{value:"Module"})),Gb=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,qb=p.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${w.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,Yb=({date:e,value:i})=>t.jsxs(qb,{children:[t.jsxs(O,{gap:"16px",children:[t.jsx(mt,{color:"grey",size:33,children:t.jsx(ct,{})}),t.jsxs(O,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(oe,{children:se(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(ct,{})," "]})]}),Jb=p.div`
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
`,zr=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Jb,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(ct,{})]})},Xb=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Kb=p.div`
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
`,Qb=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Xb(s.value),0).toFixed(1);return t.jsxs(Kb,{children:[t.jsxs(O,{jc:"space-between",children:[t.jsx(W,{icon:t.jsx(Fo,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(oe,{fontSize:"1rem",width:"fit-content",children:t.jsx(zr,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(fe,{size:"50px",text:"Нет платежей",image:t.jsx(Bo,{})}),e.map((n,s)=>l.createElement(Yb,{...n,key:s}))]})]})},Mr=()=>t.jsx(Q,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Zb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),ev=p.div`
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
`,tv=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:u}=e,{open:h}=te(),[f,g]=l.useState(!1),[m,x]=l.useState(!1),[b,v]=l.useState(!1),E=ji(at.$error),I=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:se(n)},{text:"Действует до",info:se(s)},{text:"Подписан",info:se(u)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Zb(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},S=()=>{e&&(x(!0),ms.signContractFx(e.id),x(!1),v(!0))},A=()=>{h(t.jsx(Mr,{}),"Не получается подписать")};return t.jsxs(ev,{children:[t.jsx("div",{className:"contract-info",children:I.map(({info:L,text:N})=>t.jsx(vt,{keyStr:N,value:L},L))}),r&&t.jsxs(O,{d:"column",gap:"8px",children:[t.jsx(dt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:S,isLoading:m,completed:b,repeatable:!1,popUpFailureMessage:E??"Не удалось подписать договор",setCompleted:v,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:A,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs(O,{gap:"8px",children:[t.jsx(dt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:f,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Ti,{onClick:()=>null,href:c??"",icon:t.jsx(is,{}),width:"45px"})]})]})},iv=p.div`
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
`,nv=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(iv,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Ho,{style:{color:"var(--green)"}}):t.jsx(Uo,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(Ue,{}),onClick:()=>null,background:"transparent"})]}),sv=p.div`
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
`,ov=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(sv,{height:s,open:r,children:[t.jsx(nv,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},av=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,rv=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=ji([at.$done,at.$completed,at.$loading]),h=s||c?140:100,f=()=>Bn.signAgreement(n),g=Bn.setCompleted;return t.jsxs(ov,{height:h,title:o,confirmed:s||c,children:[t.jsxs(av,{children:[t.jsxs(O,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(W,{size:5,align:"left",children:o}),t.jsx(oe,{children:se(r)})]}),t.jsxs(O,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Ti,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(is,{}),isActive:!!e.file}),!(s||c)&&t.jsx(dt,{text:s||c?"Подписано":"Подписать",action:f,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(Q,{type:"success",title:"Подписано",icon:t.jsx(nn,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(oe,{children:["Дата подписания: ",se(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},lv=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Ee,{width:"100%",children:[t.jsx(W,{size:4,align:"left",icon:t.jsx(xp,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(Mr,{}),t.jsx(Q,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(rv,{data:s,isContractSigned:n},o))]}),cv=p.div`
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
`,Fi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(cv,{children:t.jsx(cs,{loading:i,width:"300px",height:"300px",src:e??""})})},dv=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,pv=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Fi,{qrCode:e}):n===1?t.jsx(Fi,{qrCode:i}):t.jsx(dv,{children:t.jsx(Ss,{pages:[{title:"Текущая задолженность",content:t.jsx(Fi,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(Fi,{qrCode:i})}],appearance:!1,currentPage:n})}),uv=({type:e="horizontal",...i})=>{const{open:n}=te(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(pv,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(mp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},hv=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(zr,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},On=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Ai=()=>{const e=Qu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(On(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(On(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(On(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},gv=p.div`
    width: 100%;
`,fv=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,xv=p.div`
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
`,mv=p.div`
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
`,bv=p.div`
    position: relative;
`,vv=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=Ai(),{open:h}=te(),[f,g]=l.useState(0),m=f===0?+n:+s,x=m>0,b=x?f===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",v=f===0?`На ${se(new Date)}`:`До ${se(o)}`,E=()=>{h(t.jsx(tv,{contract:i}),"Реквизиты договора")};return t.jsxs(gv,{children:[t.jsx(W,{icon:t.jsx(bp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(fv,{children:[t.jsx(ds,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(xv,{children:[t.jsxs(O,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(hv,{debt:m}),t.jsxs(O,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{size:3,align:"left",children:b}),t.jsx(oe,{children:v})]})]}),x?t.jsx(uv,{currentPage:f,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(Ua,{color:"green",size:"40px"})]}),t.jsxs(mv,{children:[r&&t.jsx(Ti,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(bv,{children:[t.jsx(_,{onClick:E,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(Et,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Fr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,yv=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Ut(String(o),"rub")})`},_v=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Fr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:yv}],wv=({paygraph:e})=>t.jsxs(O,{d:"column",children:[t.jsx(W,{icon:t.jsx(vp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(et,{columns:_v(),data:e??[],maxOnPage:3})]}),Bi=({contracts:e})=>e?t.jsx(Gb,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,u=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx(O,{gap:"8px",children:t.jsx(O,{w:"fit-content",children:t.jsxs(W,{size:3,align:"left",children:["Договор № ",o," от ",se(d,"numeric")]})})}),t.jsx(vv,{data:i}),t.jsx(Qb,{payments:c??[]}),t.jsx(wv,{paygraph:r}),t.jsx(lv,{isDormitory:u,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(xe,{margin:"0",width:"100%"})]},o)})}):null,bs=()=>{const[e,i,n]=ji([at.$error,at.$loading,at.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{H.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(We,{loading:i,load:ms.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(Xt,{children:[t.jsx(Q,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(fe,{text:"Нет данных"}),s==="both"&&t.jsx(Ss,{pages:[{title:"Общежитие",content:t.jsx(Bi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Bi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Bi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Bi,{contracts:n==null?void 0:n.education})]})})},jv=Object.freeze(Object.defineProperty({__proto__:null,default:bs},Symbol.toStringTag,{value:"Module"})),P="/applications",re="/hr-applications",Ks="/staff_orders",Qs="/staff_blanks",kv="/ad_logins",vs="/doclist",Zs="/pps_vote2020",Sv="/children",Br="/pps_contest",Tv="/electronic-statements",be="/onboarding",Ev="/structure-of-the-university",$v="/addresses-and-contacts",Pv="/brandbook",Cv="/wifi-at-the-university",Ov="/health-care",Av="/psychological-help",Dv="/social-environment",Nv="/vacation",ti="/kpi_pps",ii="/kpi_admin",eo="/sc_news",to="/oop",io="/centers",Iv="/helpful-information",Rv="/download-agreements",no="/physical-education/main",Lv="/physical-education/student/:studentId",Hr=P+"/contact-info-actualization",Ur=P+"/contact-info-actualization-test",Wr=P+"/phonebook",zv=P+"/phonebook/:guid",Vr=P+"/data-verification",Gr=P+"/issuance-of-licenses",qr=P+"/getting-computer-equipment",Yr=P+"/connecting-computer",Jr=P+"/printer-maintenance",Xr=P+"/question-sed",Kr=P+"/question-personal-account",Qr=P+"/other-it-services",Zr=P+"/certificate-from-the-place-of-work",el=P+"/visa-certificate",tl=P+"/certificate-of-work-experience",il=P+"/number-of-unused-vacation-days",nl=P+"/copy-of-the-employment-record",sl=P+"/copies-of-documents-from-the-personal-file",ol=P+"/work-on-the-terms-of-external-concurrency",al=P+"/certificate-time-parental-leave",rl=P+"/arbitrary-request",ll=P+"/courier",cl=P+"/persona-income-tax-reference",dl=P+"/payment-of-child-birth-allowance",pl=P+"/payment-for-child-care",ul=re+"/part-time-employment/",Mv=re+"/dismissal/:id",Fv=re+"/work-transfer/:id",Bv=re+"/extra-holiday-coll",Hv=re+"/holiday-planning",Uv=re+"/holiday-transfer/:id",Wv=re+"/holiday-work/:id",Vv=re+"/work-transfer-change-rate/:id",Gv=re+"/medical-examination",Hn=re+"/buffer-dismissal",Un=re+"/buffer-holiday-planning",Wn=re+"/buffer-holiday-transfer",Vn=re+"/buffer-holiday-work",Gn=re+"/buffer-medical-examination",Gi=re+"/buffer-work-transfer",hl=P+"/living-in-residential-premises",gl=P+"/guests-accomodation-on-campus",fl=P+"/guests-passage-to-campus",xl=P+"/relocation",ml=P+"/termination-of-agreement",bl=P+"/issuance-of-pass",vl=P+"/guest-pass",yl=P+"/certification-and-issuance-of-docs",_l=P+"/deferment-from-conscription",wl=P+"/certified-copies-of-military-docs",B=()=>Te({oldVersionUrl:"/sprav"}),so=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(X,{}),path:be,Component:wm,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...Rl,"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(Fo,{}),path:Rv,Component:Ar,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(Tp,{}),path:Sv,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"],show:!T},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(X,{}),path:Tv,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Wo,{}),path:Ol,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(ct,{}),path:Ki,Component:bs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(X,{}),path:Br,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Vo,{}),path:ti,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ti==null?void 0:ti.slice(1,ti.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(Ep,{}),path:ii,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ii==null?void 0:ii.slice(1,ii.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx($p,{}),path:eo,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:eo}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(D,{}),path:Ks,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:Ks}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Ht,{}),path:Qs,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:Qs}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:vs,Component:hx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Mo,{}),path:Nv,Component:Vx,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:no,pageSize:"big",Component:_x,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(D,{}),color:"pink",show:!1,path:Lv,Component:wx,isTemplate:!1,fallbackPrevPage:no,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(bi,{}),path:to,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:to}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(bi,{}),path:io,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:io}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(D,{}),path:Iv,Component:ps,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Go,{}),path:Zs,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:Zs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:P,Component:gx,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(D,{}),path:re,Component:T?()=>Te({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Gx,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Vr,Component:ar,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"},phonebook:{id:"phonebook",title:"Контактные данные",icon:t.jsx(D,{}),color:"blue",path:Wr,Component:px,isTemplate:!1,group:"COMMUNICATION"}}),oo=()=>({...Ll,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Gr,icon:t.jsx(D,{}),color:"blue",Component:T?B:kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:Hn,icon:t.jsx(D,{}),color:"blue",Component:T?B:gr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Vn,icon:t.jsx(D,{}),color:"blue",Component:T?B:D0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Gn,icon:t.jsx(D,{}),color:"blue",Component:T?B:xb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:Un,icon:t.jsx(D,{}),color:"blue",Component:T?B:V0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:Wn,icon:t.jsx(D,{}),color:"blue",Component:T?B:nb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Gi,icon:t.jsx(D,{}),color:"blue",Component:T?B:Pb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:ul,icon:t.jsx(D,{}),color:"blue",Component:T?B:qx,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Wv,icon:t.jsx(D,{}),color:"blue",Component:T?B:Xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Vn},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:Gv,icon:t.jsx(D,{}),color:"blue",Component:T?B:Kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Gn},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:Hv,icon:t.jsx(D,{}),color:"blue",Component:T?B:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Un},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Uv,icon:t.jsx(D,{}),color:"blue",Component:T?B:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Wn},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:Fv,icon:t.jsx(D,{}),color:"blue",Component:T?B:em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Gi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:Vv,icon:t.jsx(D,{}),color:"blue",Component:T?B:tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Gi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Bv,icon:t.jsx(D,{}),color:"blue",Component:T?B:Jx,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:Mv,icon:t.jsx(D,{}),color:"blue",Component:T?B:Yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Hn},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(D,{}),color:"blue",path:qr,Component:T?B:jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(D,{}),color:"blue",path:Yr,Component:T?B:bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(D,{}),color:"blue",path:Jr,Component:T?B:Cx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(D,{}),color:"blue",path:Xr,Component:T?B:Ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(D,{}),color:"blue",path:Kr,Component:T?B:Ox,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(D,{}),color:"blue",path:Qr,Component:T?B:Tx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(D,{}),color:"blue",path:Zr,Component:lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(D,{}),color:"blue",path:el,Component:Dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(D,{}),color:"blue",path:tl,Component:T?B:xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(D,{}),color:"blue",path:il,Component:Sx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(D,{}),color:"blue",path:nl,Component:T?B:vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(D,{}),color:"blue",path:sl,Component:T?B:cx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(D,{}),color:"blue",path:ol,Component:T?B:Nx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(D,{}),color:"blue",path:al,Component:T?B:mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(D,{}),color:"blue",path:rl,Component:T?B:fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},courier:{id:"courier",title:"Курьер",icon:t.jsx(D,{}),color:"blue",path:ll,Component:T?B:yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(D,{}),color:"blue",path:cl,Component:T?B:Px,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(D,{}),color:"blue",path:dl,Component:T?B:$x,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(D,{}),color:"blue",path:pl,Component:T?B:Ex,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(D,{}),color:"blue",path:Hr,Component:Ys,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"phonebook-form":{id:"phonebook-form",title:"Контактные данные",icon:t.jsx(D,{}),color:"blue",path:zv,Component:ux,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Wr},"data-actualization":{id:"data-actualization",title:"Актуализация контактных данных (тест)",icon:t.jsx(D,{}),color:"blue",path:Ur,Component:T?Ys:dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P,show:!T},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Vr,Component:ar,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(D,{}),color:"blue",path:hl,Component:T?B:Ix,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(D,{}),color:"blue",path:gl,Component:T?B:Rx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(D,{}),color:"blue",path:fl,Component:T?B:Lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(D,{}),color:"blue",path:xl,Component:T?B:zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(D,{}),color:"blue",path:ml,Component:T?B:Mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(D,{}),color:"blue",path:bl,Component:T?B:Fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(D,{}),color:"blue",path:vl,Component:T?B:Bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(D,{}),color:"blue",path:yl,Component:T?B:Hx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(D,{}),color:"blue",path:_l,Component:T?B:Ux,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(D,{}),color:"blue",path:wl,Component:T?B:Wx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(qe,{to:be})),icon:t.jsx(Ht,{}),isTemplate:!1,path:Dv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(qe,{to:be})),icon:t.jsx(yp,{}),isTemplate:!1,path:Av,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(qe,{to:be})),icon:t.jsx(_p,{}),isTemplate:!1,path:Ov,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(qe,{to:be})),icon:t.jsx(wp,{}),isTemplate:!1,path:Cv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(qe,{to:be})),icon:t.jsx(jp,{}),isTemplate:!1,path:Pv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(kp,{}),path:$v,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(qe,{to:be})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(Sp,{}),path:Ev,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(qe,{to:be})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:be,isExternalPage:!0}}),jl="/login",qv="/forgot-password",Yv="/medical-certificate",Jv="/vaccination",ui="/all",ys="/home",_s="/profile",ws="/chat",Xv="/messages",HT=ws+"/:chatId",kl="/electronic-interaction-agreement",Ki="/payments",Nt="/schedule",Sl="/all-students",Kv="/all-students/:filter",Qv="/all-teachers/:filter",Tl="/all-teachers",js="/feedback",El="/cant-access",$l="/memo-freshmen",Pl="/get-your-login",Cl="/memo-teacher",ve="/settings",UT=ve+"/:id",Zv=ve+"/appearance",ey=ve+"/personal",ty=ve+"/security",iy=ve+"/home-page",ny=ve+"/customize-menu",sy=ve+"/notifications",oy="/instructions",Ol="/project-activity",Al="/alerts",Dl="/lk-notifications",Nl="/helpful-information",Di=Nt+"/:page/:filter",Il=Nt+"/current",ay=Nt+"/semestr",ry=Nt+"/session",ly=Nt+"/retake",cy=Nl+"/:infoType";var dy=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(dy||{});const py=[{id:0,title:"",icon:"",path:jl,Component:ox},{id:1,title:"",icon:"",path:qv,Component:om},{id:2,title:"Обратная связь",icon:t.jsx(bi,{}),path:js,Component:cr},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(kt,{}),path:El,Component:nm},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:Pl,Component:vm},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:$l,Component:ym},{id:6,title:"Вниманию сотрудников!",icon:"",path:Cl,Component:_m}],Rl={all:{id:"all",title:"Все разделы",icon:t.jsx(Dp,{}),path:ui,Component:im,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Jo,{}),path:ve,Component:gm,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:vs,Component:bm,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Xo,{}),path:Al,Component:am,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Yo,{}),path:ys,Component:rm,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Ko,{}),path:_s,Component:cm,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(on,{}),path:Dl,Component:jm,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Qo,{}),path:kl,Component:sm,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Np,{}),path:ws,isOldLkPage:!0,Component:()=>Te({oldVersionUrl:Xv}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(At,{}),path:Nt,menuPath:Il,Component:dr,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Ht,{}),path:Sl,Component:rr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Go,{}),path:Tl,Component:lr,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(bi,{}),path:js,Component:cr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Ip,{}),path:oy,Component:lm,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(Zo,{}),path:Jv,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0,show:!T}},uy={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(At,{}),path:Il,Component:dm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(ns,{}),path:ay,Component:pm,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(qo,{}),path:ry,Component:um,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(ts,{}),path:ly,Component:hm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Ll={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(At,{}),path:Di,Component:dr,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...uy,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Ht,{}),path:Kv,Component:rr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Ht,{}),path:Qv,Component:lr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Pp,{}),path:Zv,Component:xm,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:ve,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(Cp,{}),path:ey,Component:fm,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:ve,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(Op,{}),path:ty,Component:mm,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:ve,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Yo,{}),path:iy,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:ve,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(Ap,{}),path:ny,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:ve,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(on,{}),path:sy,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:ve,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:cy,Component:ps,color:"grey",isTemplate:!0,show:!1}},zl=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;Si.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else H.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Ml=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;Si.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},hy=(e,i,n,s)=>{if(i){const o=s.length+Vu;if(n<o){H.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??an;Si.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else H.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},gy=(e,i,n)=>{if(i)if(n.includes(e))H.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{H.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;Si.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},fy=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,xy=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,my=e=>{var m,x,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Yt.useSettings(),{data:r}=_e.useUser(),c=He.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(v=>v===i),u=(x=a["settings-customize-menu"].property.pages)==null?void 0:x.find(v=>v===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?ca:an,f=()=>{zl(i,a),Ie.close()},g=()=>{hy(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Ie.close()};return t.jsxs(fy,{children:[t.jsxs("div",{className:"top",children:[t.jsx(mt,{color:o,size:22,children:n}),t.jsx(xy,{children:s})]}),t.jsx(xe,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(kt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{Ml(i,a),Ie.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(St,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),u?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(kt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>gy(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(St,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},Fl=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ie.open({e:o,height:105,content:t.jsx(my,{...e})})};return t.jsx(_,{icon:t.jsx(ea,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Bl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},Hl=p(Ze)`
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
        background: ${w.red.light2};
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
                    box-shadow: 0 20px 110px 60px ${({color:e})=>w[e].main};
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
`,by=p.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,ao=e=>{var v;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:u,id:h,background:f,orientation:g="vertical"}=e,m=g==="vertical",{settings:x}=Yt.useSettings(),b=!!((v=x["settings-home-page"].property.pages)!=null&&v.find(E=>E===h));return t.jsxs(Hl,{padding:"0",width:"100%",maxWidth:"100%",height:m?"135px":"60px",isVertical:m,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:f,children:[(d||c)&&m&&t.jsxs(by,{children:[d&&t.jsx(sn,{title:"Раздел в старом ЛК"}),c&&t.jsx(qi,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(mt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(Rp,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Bl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),u==="use"&&t.jsx(Fl,{route:e}),u==="add"?b?t.jsx(_,{icon:t.jsx(Xe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>Ml(h,x)}):t.jsx(_,{icon:t.jsx(St,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>zl(h,x)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},vy=p(Hl)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,WT=()=>t.jsx(Z,{to:ui,onClick:()=>{tt.changeOpen({isOpen:!1,currentPage:ui.slice(1,ui.length)})},children:t.jsx(vy,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(mt,{color:"blue",children:t.jsx(Lp,{})}),t.jsx("b",{children:"Все разделы"})]})})}),yy=p(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,_y=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,wy=e=>{const{close:i}=te(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(_y,{width:o==="vertical"?c:"100%",children:t.jsx(ao,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),tt.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(yy,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(ao,{...e,maxWordLength:r,mode:a})})},jy=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,ky=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(fe,{text:"Ничего не было найдено"}):t.jsx(jy,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(wy,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),Sy=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(ye(s.title).includes(ye(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>ye(a).includes(ye(e))))&&(n[s.id]=s),n},{}),Ty=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Ey=p(Z)`
    width: 100%;
`,$y=({division:e})=>{const{close:i}=te();return t.jsxs(Ty,{children:[t.jsxs(O,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(mt,{size:120,color:"purple",children:t.jsx(ri,{})}),t.jsx(oe,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(Ey,{to:`${Tl}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(ta,{}),width:"100%",text:"Список"})})]})},Py=p.div`
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
`,Cy=({division:e})=>{const{open:i}=te(),n=()=>{i(t.jsx($y,{division:e}),"Подразделение")};return t.jsx(Py,{onClick:n,children:t.jsxs(O,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(O,{gap:"8px",children:[t.jsx(ri,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(ht,{})]})})},Oy=({divisions:e})=>!e||e.length===0?null:t.jsx(O,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Cy,{division:i},i))}),bn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),Ay=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,ro=p(Z)`
    width: 100%;
`,Ul=({group:e})=>{const{close:i}=te();return t.jsxs(Ay,{children:[t.jsxs(O,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(mt,{size:120,color:"lightBlue",children:t.jsx(ia,{})}),t.jsx(oe,{fontSize:"1.2rem",children:e})]}),t.jsxs(O,{gap:"8px",onClick:i,children:[t.jsx(ro,{to:bn(Di,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(At,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(ro,{to:`${Sl}/${e}`,children:t.jsx(_,{icon:t.jsx(ta,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},Dy=p.div`
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
`,Ny=({group:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Ul,{group:e}),"Группа")};return t.jsx(Dy,{onClick:n,children:t.jsxs(O,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(O,{gap:"8px",h:"50px",children:[t.jsx(ia,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(ht,{})]})})},Iy=({groups:e})=>e?t.jsx(O,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Ny,{group:i},i))}):null,An=[{title:"Инструкции",links:[{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ne},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ne},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ne},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ne},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ne},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ne},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ne},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ne}]}];var Se=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Se||{});const Rt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Ry=[{id:Se.information,title:Rt[Se.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Se.security,title:Rt[Se.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Se.instructions,title:Rt[Se.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...An[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.regulations,title:Rt[Se.regulations],visible:"staff",content:[{title:"Положения",links:[...An[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.orders,title:Rt[Se.orders],visible:"staff",content:[{title:"Приказы",links:[...An[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.courses,title:Rt[Se.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Ly=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ye(a.title).includes(ye(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),zy=p.div`
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
`,My=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(zy,{children:[t.jsx(W,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Ee,{gap:16,children:s.map(({title:a,href:r,visible:c},d)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+d))})]},n+o))}):null;function qn(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Fy=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,By=p.div``,Hy=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Wl=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Fy,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(By,{children:e}),t.jsx(Hy,{isOpen:o,children:i})]})},Vl=k(),Gl=k(),Uy=J(!1).on(Gl,()=>!0).on(Vl,()=>!1),lo={close:Vl,open:Gl},Wy={$isModalOpen:Uy},ks=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Vy=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=ji(Wy.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,v)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,v??""])):(r(()=>[b]),o(v?[v]:[])),n(()=>!0),lo.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),lo.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),x=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(ks.Provider,{value:{back:u,open:h,close:f,isOpen:i,canBack:d,component:g,title:m,setComponent:x},children:e})},te=()=>{const{open:e,isOpen:i,...n}=l.useContext(ks);return{open:e,isOpen:i,...n}},Gy="2.3.0",ql=()=>t.jsx(Q,{icon:null,type:"info",title:Gy,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Oe=({color:e,children:i})=>t.jsx(mt,{color:e,children:i}),qy=()=>({info:t.jsx(Oe,{color:"grey",children:t.jsx(Je,{})}),message:t.jsx(Oe,{color:"red",children:t.jsx(ss,{})}),alert:t.jsx(Oe,{color:"purple",children:t.jsx(Xo,{})}),"payment-dorm":t.jsx(Oe,{color:"green",children:t.jsx(ct,{})}),"payment-ed":t.jsx(Oe,{color:"green",children:t.jsx(ct,{})}),"digital-services":t.jsx(Oe,{color:"red",children:t.jsx(D,{})}),"doc-for-review":t.jsx(Oe,{color:"blue",children:t.jsx(D,{})}),"hr-applications":t.jsx(Oe,{color:"green",children:t.jsx(D,{})}),"kpi-pps":t.jsx(Oe,{color:"pink",children:t.jsx(Vo,{})}),schedule:t.jsx(Oe,{color:"pink",children:t.jsx(At,{})}),"version-update":t.jsx(ql,{}),"electronic-interaction":t.jsx(Oe,{color:"blue",children:t.jsx(Qo,{})})}),Yy=p(Z)`
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
`,Jy=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Xy={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Ky={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},Qy={small:"0px",middle:"1px",large:"2px",big:"3px"},Yl=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:m=!0,fullText:x=!0,maxLetters:b=200,size:v="middle"})=>{const E=se(o,"short"),{close:I}=te(),[j,S]=l.useState(!1),A=N=>{N.stopPropagation(),N.preventDefault(),f?(S(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},L=()=>{a==null||a(),m&&Pt.clearById({id:e,pageId:c}),I()};return t.jsx(Wl,{forceState:!j,bottomMargin:h,children:t.jsxs(Yy,{to:d??"",onClick:L,children:[t.jsx("span",{className:"left-icon",children:qy()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(oe,{fontSize:"0.7rem",children:t.jsx(Ne,{words:[E??"",s??""]})}),t.jsxs(O,{d:"column",gap:Qy[v],ai:"flex-start",children:[t.jsx(Jy,{fontSize:Xy[v],children:x?i:qn(i,b)}),t.jsx(oe,{fontSize:Ky[v],children:x?n:qn(n,b)})]})]}),u&&t.jsx(_,{isActive:!(g&&j),icon:t.jsx(Xe,{}),background:"var(--theme-2)",onClick:A,style:{borderRadius:"20px"}})]})})},Jl=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Pt.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(O,{d:"column",children:e.map((o,a)=>l.createElement(Yl,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Qi=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,co=({people:e,type:i})=>!e||e.length===0?null:t.jsx(O,{d:"column",children:e.map(n=>l.createElement(Ts,{name:n.fio,type:i,...n,key:n.id}))}),Zy=()=>{const{allRoutes:e}=He.useMenu(),{notifications:i,removeNotificationLoading:n}=it.useLkNotifications(),{data:{user:s}}=_e.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Ry.flatMap(({visible:L,content:N})=>L==="staff"&&o||L==="student"&&!o||L==="all"?N:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,f]=l.useState(null),[g,m]=l.useState(null),[x,b]=l.useState(null),[v,E]=l.useState(null),[I,j]=l.useState(null),S=[{title:"Разделы",content:t.jsx(ky,{pages:x,showNotFound:!1}),clear:()=>{b(null)},search:L=>{if(e){const N=Sy(L,e);b(N)}},data:x},{title:"Студенты",content:t.jsx(co,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async L=>{const{data:N}=await Lh(L,"",1,20);m(N.items)}},{title:"Сотрудники",content:t.jsx(co,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async L=>{const{data:N}=await Dh(L,"",1,20);f(N.items)}},{title:"Группы",content:t.jsx(Iy,{groups:r}),data:r,clear:()=>{c(null)},search:async L=>{const{data:N}=await zh(L);c(N.items)}},{title:"Подразделения",content:t.jsx(Oy,{divisions:d}),data:d,clear:()=>{u(null)},search:async L=>{const{data:N}=await Nh(L);u(N.items)}},{title:"Уведомления",content:t.jsx(Jl,{notifications:v,loadingRemove:n}),clear:()=>{E(null)},search:L=>{const N=i.filter(K=>ye(K.title).includes(L));E(N)},data:v},{title:"Полезная информация",content:t.jsx(My,{blocks:I,isStaff:o}),clear:()=>{j(null)},search:L=>{const N=Ly(L,a);j(N)},data:I}];return[(()=>{const{content:L,clear:N,data:K}=S.reduce((M,ie)=>(Qi(ie.data)&&(M.data.push(ie.data),M.content.push(t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",children:ie.title}),ie.content,t.jsx(xe,{})]}))),M.clear.push(ie.clear),M),{content:[],clear:[],data:[]});return{title:"Все",content:L,clear:()=>N.map(M=>M()),search:async M=>{M.length<=8&&/\d|[-]/g.test(M)?await S[3].search(M):(S[0].search(M),S[5].search(M),S[6].search(M),Qi(S[0].data)===0&&(await S[1].search(M),await S[2].search(M),await S[4].search(M)))},data:K}})(),...S]},e_=()=>JSON.parse(localStorage.getItem(F.SearchHistory)??"[]"),t_=()=>{const e=Zy(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>e_(),[]),r=async g=>{e[i].clear();const m=Ja(g)?Ya(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(F.SearchHistory,JSON.stringify(a)))},[c,d,u]=Za({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!u&&!c.length,f=!!c.length&&!u&&!!Qi(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},i_=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Ns,{})})):e?n.filter(s=>ye(s).includes(ye(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Ns,{})})):[],n_=()=>t.jsxs(O,{gap:"8px",ai:"flex-start",children:[t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(O,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),s_=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,o_=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=t_(),u=i_(r,n,d),{isOpen:h}=te();return t.jsx(s_,{children:t.jsxs(O,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ka,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(ds,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(Xa,{value:n,setValue:s}),e&&t.jsx(O,{h:"100%",children:t.jsx(fe,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Bt,{})})}),!r&&n.length!==0&&!e&&!Qi(c[o].data)&&t.jsx(O,{h:"100%",children:t.jsx(fe,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Lo,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(n_,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},a_=p(Ze)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${ee.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,r_=p.div`
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
`,l_=p(O)`
    @media (max-width: 1000px) {
        display: none;
    }
`,c_=()=>{const e=xf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(na,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},Xl=({size:e="large"})=>{const i=c_(),{open:n}=te(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(o_,{}),"Глобальный поиск");return qa(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Bt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(a_,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(oe,{align:"left",fontSize:"0.9rem",children:t.jsxs(O,{gap:"8px",children:[t.jsx(Bt,{}),"Поиск"]})}),t.jsx(l_,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(r_,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},Yn=e=>e.split(" ").map(i=>i[0]),De=(e,i)=>{const n=Yn(e),s=w[Yu[n[0]]];return s==null?void 0:s[i??"main"]},d_=p.div`
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
`,p_=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ni({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:f,onClick:g,borderRadius:m,background:x}){const[b,v]=l.useState(!0),E=Yn(i)[0]+(Yn(i)[1]??""),{open:I}=te(),j=S=>{f?I(t.jsx(Ni,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(S)};return t.jsxs(d_,{selected:e,width:s,height:o,marginRight:a,background:x??De(i),boxShadow:d,border:u,onClick:j,borderRadius:m,children:[n&&b?t.jsx(p_,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:E}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Be,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(Et,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const VT=p.header`
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
`;p.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const GT=p.div`
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
`,u_=p.div`
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
`,qT=p.div`
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
`,YT=p.div`
    margin-top: 50px;
    width: 100%;
`,JT=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,XT=p(Ze)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,KT=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,h_=p.div`
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
            white-space: nowrap;
        }
    }

    &:hover {
        background: var(--theme-1);
    }
`,g_=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(h_,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Df,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},f_=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,x_=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(f_,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(g_,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Kl=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=xt(),{settings:o}=Yt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(zp,{}):t.jsx(Mp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:x=>s(x)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:x=>s(x)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(x=>!x),i==null||i()};return e==="toggle"?t.jsx(x_,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(u_,{width:"30px",background:w.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},m_=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(O,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(O,{gap:"16px",ai:"center",children:[t.jsx(Y,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(O,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),b_=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,v_=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=it.useLkNotifications();return l.useEffect(()=>{o&&H.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Pt.clearAllVisible()},[]),t.jsxs(b_,{children:[s.length===0&&!n&&t.jsx(Cs,{height:"100%",children:t.jsx(fe,{text:i??"Нет новых уведомлений",image:i?t.jsx(kt,{}):t.jsx(Fp,{}),size:"70px"})}),t.jsxs(O,{d:"column",gap:"16px",children:[t.jsx(Q,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Jl,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(m_,{quantity:10})]})},y_=p.div`
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
`,Ql=()=>{const{close:e}=te(),{notifications:i}=it.useLkNotifications(),n=3;return t.jsxs(O,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(O,{d:"column",gap:"16px",children:[t.jsx(v_,{maxNotificationsVisible:n}),t.jsxs(oe,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Bl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Dl,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},__=()=>{const{notifications:e}=it.useLkNotifications(),{open:i}=te(),n=()=>{i(t.jsx(Ql,{}),"Уведомления")};return t.jsxs(y_,{onClick:n,children:[t.jsx(Et,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(on,{})]})},w_=p.div`
    position: relative;
`,Zl=()=>{const{open:e}=te(),{notifications:i}=it.useLkNotifications(),n=()=>Ie.close(),s=()=>{ot.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Ct.logout}),n()},o=()=>{Ie.close(),e(t.jsx(Pc,{}),"Что нового")},a=()=>{e(t.jsx(Ql,{}),"Уведомления"),Ie.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Uw,{padding:"8px",size:"small"}),t.jsx(xe,{}),t.jsx(Kl,{type:"h-button"}),t.jsx(xe,{}),t.jsx(Z,{to:_s,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(Ko,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(w_,{children:[t.jsx(_,{onClick:a,icon:t.jsx(on,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(Et,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:ve,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(Jo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(sn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(xe,{}),t.jsx(_,{align:"left",icon:t.jsx(Bp,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(xe,{}),t.jsx(_,{align:"left",icon:t.jsx(ql,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},j_=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,k_=({showSearch:e=!1})=>{const{data:{user:i}}=_e.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ie.open({e:s,height:143,content:t.jsx(Zl,{})})};return t.jsxs(j_,{children:[e&&t.jsx(Xl,{size:"icon"}),t.jsx(__,{}),t.jsx(Ni,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},S_=p.header`
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
    ${ee.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${ee.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,T_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,E_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,$_=p.div`
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
        max-width: ${T_};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ee.isTablet} {
        max-width: ${E_};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ee.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,P_=()=>{const{pathname:e}=Vt(),[i,n]=l.useState([e]),{action:s}=Gt();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},C_=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=Gt();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Ui,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},O_=({headerVisible:e,currentPage:i})=>{const n=Gt(),s=P_(),o=e||!!(i!=null&&i.planeHeader),a=kr(i),r=(u=ui)=>()=>{tt.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(C_,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Ui,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Ui,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Ui,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},A_=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Ai(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=O_({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(S_,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx($_,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(O,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(k_,{showSearch:!0})]})]})},D_=le.memo(A_),N_=p(Z)`
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
`,I_=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Ie.open({e:c,height:143,content:t.jsx(Zl,{})})};return t.jsxs(N_,{to:_s,children:[t.jsx(_,{icon:t.jsx(ea,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ni,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(W,{size:5,children:e})]})},R_=le.memo(I_),L_=["isCurrent","color"],z_=p(Z).withConfig({shouldForwardProp:e=>!L_.includes(e)})`
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
    color: ${({color:e,isCurrent:i})=>e&&i?w[e].main:"var(--text)"};

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
        background: ${({color:e})=>e?w[e].main:"var(--reallyBlue)"};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({isCurrent:e})=>e?1:0};
    }

    ${ee.isTablet} {
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
`,M_=p.div`
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
`,F_=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,B_=p.button`
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
`,H_=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(z_,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(Et,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(Et,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(Fl,{route:e})]})},ec=le.memo(H_),U_=()=>{const{isOpen:e}=He.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>tt.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},W_=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(B_,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(W_);p.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;p.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const V_=()=>{const{leftsideBarRoutes:e}=He.useMenu(),i=Vt();return e?t.jsx(F_,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(ec,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(O,{d:"column",children:[t.jsxs(O,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(O,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(O,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(O,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},G_=le.memo(V_),q_=()=>{const{isOpen:e}=He.useMenu(),{width:i,height:n}=un(),{data:{user:s}}=_e.useUser(),{visibleRoutes:o}=He.useMenu(),a=Vt();return t.jsxs(M_,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:ys,children:t.jsx(dn,{width:"165px"})}),t.jsx(R_,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Xl,{size:"small"}),t.jsx(G_,{})]}),t.jsx(Kl,{type:"toggle"}),i<1e3&&t.jsx(U_,{})]})},Y_=p.div`
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
`,J_=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Sa.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{H.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),H.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(Y_,{isOpen:e,isClickable:!!o,color:Tt[n].color,onClick:a,children:t.jsx(Q,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>H.openPopUpMessage({isOpen:!1}),children:i})})},vn=p.div`
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
`;p.div`
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
`;const X_=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(ks);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},K_=p.div`
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
`,Q_=p.div`
    padding-top: 30px;
`,Z_=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=X_(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return qa([27],o),Jt(r,()=>{o()}),t.jsx(vn,{isOpen:c,children:t.jsxs(K_,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(wi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(W,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Xe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(Q_,{children:i})]})})},e1=le.memo(Z_),t1=p.div`
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
`,i1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Ca.useConfirm(),o=l.useRef(null);Jt(o,()=>ot.closeConfirm());const a=()=>{n(),ot.closeConfirm()},r=()=>{ot.closeConfirm()};return t.jsx(vn,{isOpen:e,children:t.jsxs(t1,{isOpen:e,ref:o,children:[t.jsx(W,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Ee,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},n1=p.div`
    display: flex;
    align-items: ${({align:e})=>Mn(e)};
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
`,s1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:f}=un(),g=l.useRef(null),m=()=>{var b;g!=null&&g.current&&h(Math.round(((b=g.current)==null?void 0:b.scrollLeft)/f))},x=b=>{var v;h(b),r==null||r((v=e[b])==null?void 0:v.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*b)};return l.useEffect(()=>{x(u)},[i,f]),t.jsxs(n1,{width:n,align:c,maxWidth:o,children:[t.jsx(ds,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:u,setCurrentPage:x,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(fe,{text:"Нет данных"})},b.title))})]})},Ss=s1,po=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},uo=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",tc=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},o1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},a1=p.div`
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
`,r1=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(a1,{width:i,height:n,color:De(e,"dark1"),color2:De(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light2")})})]})}),l1=p.div`
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
`,c1=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",m=tc(h,n,s,o);return t.jsxs(l1,{children:[t.jsx(r1,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ni,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(oe,{fontSize:"0.9rem",children:t.jsx(Ne,{words:m})}),t.jsx(vt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(vt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(vt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(vt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(vt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},d1=p.div`
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

    ${ee.isMobile} {
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
`,ic=e=>{const{children:i}=e;return t.jsxs(d1,{children:[t.jsx(c1,{...e}),t.jsx("div",{className:"buttons",children:i})]})},p1=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,u1=()=>t.jsxs(p1,{children:[t.jsx(Y,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(Y,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(Y,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),nc=e=>{if(e)return()=>{ot.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(F.Token,e),location.reload()}})}},h1=e=>{const{close:i}=te(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${De(s,"main")}, ${De(s,"dark1")})`;return t.jsxs(ic,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:bn(Di,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(At,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(ss,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:nc(n)})]})},g1=e=>{const{close:i}=te(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${De(s,"dark1")}, ${De(s,"main")})`;return t.jsxs(ic,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:bn(Di,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(At,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(ss,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:nc(n)})]})},f1=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?o1(i):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${w.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>po(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${po(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,Ts=e=>{const{open:i}=te(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:m="middle"}=e,x=tc(h,n,d,u);if(f)return t.jsx(u1,{});const b=v=>{r?r(v):h||(Ie.close(),i(n==="staff"?t.jsx(g1,{...e}):t.jsx(h1,{...e})))};return t.jsxs(f1,{orientation:g,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ni,{name:o,avatar:s,width:uo(g,m),height:uo(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ne,{words:x})})]})]})},Zi=e=>{const i=ye(e),s=[{keys:["распознаван"],icon:t.jsx(Up,{})},{keys:["принт"],icon:t.jsx(Wp,{})},{keys:["химич"],icon:t.jsx(Vp,{})},{keys:["сервер"],icon:t.jsx(Gp,{})},{keys:["игр"],icon:t.jsx(qp,{})},{keys:["жизнед"],icon:t.jsx(Yp,{})},{keys:["web","веб"],icon:t.jsx(Jp,{})},{keys:["истор"],icon:t.jsx(Xp,{})},{keys:["информат"],icon:t.jsx(Kp,{})},{keys:["информации"],icon:t.jsx(Je,{})},{keys:["мобильн"],icon:t.jsx(Qp,{})},{keys:["безопасн"],icon:t.jsx(Zp,{})},{keys:["автоматиз"],icon:t.jsx(eu,{})},{keys:["линейн"],icon:t.jsx(tu,{})},{keys:["обработ"],icon:t.jsx(iu,{})},{keys:["презентац"],icon:t.jsx(nu,{})},{keys:["операционн"],icon:t.jsx(na,{})},{keys:["эконом"],icon:t.jsx(ct,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(su,{})},{keys:["анализ"],icon:t.jsx(ou,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(au,{})},{keys:["сети","сетей"],icon:t.jsx(ru,{})},{keys:["матем"],icon:t.jsx(lu,{})},{keys:["вероятн"],icon:t.jsx(cu,{})},{keys:["философ"],icon:t.jsx(sa,{})},{keys:["данны"],icon:t.jsx(du,{})},{keys:["язык"],icon:t.jsx(pu,{})},{keys:["спорт","физичес"],icon:t.jsx(uu,{})},{keys:["проектная"],icon:t.jsx(Nn,{})},{keys:["интеллект"],icon:t.jsx(hu,{})},{keys:["научн"],icon:t.jsx(gu,{})},{keys:["предприним"],icon:t.jsx(fu,{})},{keys:["коммуникац"],icon:t.jsx(xu,{})},{keys:["управлени"],icon:t.jsx(os,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(qo,{})},{keys:["переработ"],icon:t.jsx(mu,{})},{keys:["машин","инжен"],icon:t.jsx(bu,{})},{keys:["проектир","расчет"],icon:t.jsx(vu,{})},{keys:["производ"],icon:t.jsx(Bo,{})},{keys:["эколог"],icon:t.jsx(yu,{})},{keys:["защит"],icon:t.jsx(_u,{})},{keys:["патент"],icon:t.jsx(wu,{})},{keys:["материал"],icon:t.jsx(ju,{})},{keys:["физик"],icon:t.jsx(ku,{})},{keys:["тайм"],icon:t.jsx(Su,{})},{keys:["практика"],icon:t.jsx(oa,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(Hp,{})},Jn={"9:00 - 10:30":w.green,"10:40 - 12:10":w.lightGreen,"12:20 - 13:50":w.blue,"14:30 - 16:00":w.purple,"16:10 - 17:40":w.pink,"17:50 - 19:20":w.red,"18:20 - 19:40":w.orange,"19:30 - 21:00":w.orange,"19:50 - 21:10":w.orange},sc=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},x1=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,yn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},m1=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=yn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},oc=(e,i,n)=>m1(e)===yn(i.startTime)&&n,yi=e=>e<=9?"0"+e:e,b1=e=>`${yi(Math.floor(e/60))}:${yi(e%60)}`,ho=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},v1=p.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${ee.isMobile} {
        width: calc(100% + 40px);
    }
`,y1=p.div`
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
`,_1=p(O)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ee.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,go=p.div`
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

    ${ee.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,w1=p(oe)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,j1=p.div`
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
        background: ${w.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${w.red.main};
    }
`,k1=p.div`
    color: ${w.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${ee.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,S1=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(ho(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(ho(new Date,s[0]*60,s[1]*60))},as.minute),()=>clearInterval(c.current)),[e]),t.jsx(j1,{currentTime:(a-i)*n,children:o&&t.jsx(k1,{children:b1(a)})})},ac=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},Pe=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(_1,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(go,{shortInfo:o,children:e}),t.jsx(w1,{width:"100%",className:"text",children:i}),t.jsx(go,{shortInfo:o,children:s})]}),T1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,E1=p(Z)`
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
`,$1=({groups:e})=>{const{close:i}=te();return t.jsx(T1,{children:e.map(n=>t.jsxs(E1,{to:bn(Di,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Ht,{}),n]}),t.jsx(ht,{})]},n))})},P1=({icon:e,background:i,noPadding:n=!1})=>t.jsx(v1,{background:i,noPadding:n,children:t.jsxs(y1,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),C1=p.div`
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
`,O1=({subjectName:e,color:i,noPadding:n})=>{const s=Zi(e),{theme:o}=xt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(C1,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(P1,{noPadding:n,icon:s,background:r}),t.jsx(mt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},A1=Tu`
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
`,D1=({color:e,start:i})=>`
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
}`,N1=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${D1}
`,I1=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,R1=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ee.isMobile} {
        font-size: 0.7rem;
    }
`,rc=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=xt(),o=s==="light"?i.main:i.light2;return t.jsxs(I1,{children:[t.jsx(N1,{start:n,color:o}),e&&t.jsx(R1,{children:e})]})},L1=p.div`
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
`,z1=p(O)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,M1=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:m=!1}=e,x=(d==null?void 0:d.split(","))??[],{open:b}=te(),v=()=>{x.length===1?b(t.jsx(Ul,{group:x[0]})):b(t.jsx($1,{groups:x}),"Группы")},E=()=>{b(t.jsx(B1,{place:s,link:r,name:n}))},I=ac(n);return t.jsxs(L1,{children:[t.jsx(O1,{subjectName:n,color:u,noPadding:m}),t.jsxs(z1,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(O,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(O,{gap:"8px",children:[t.jsx(rc,{isCurrentEvent:g,color:u,timeInterval:i}),t.jsx(lc,{timeLeft:yn(i.split(" - ")[0],"minutes"),isNext:f,color:u,isCurrentEvent:g})]}),t.jsx(W,{size:3,align:"left",width:"fit-content",children:I.name})]}),t.jsx(xe,{margin:"0",width:"100%"}),t.jsx(Pe,{icon:t.jsx(ns,{}),text:t.jsx(Ne,{words:[h??"",a]})}),((r==null?void 0:r.length)||I.link)&&t.jsx("a",{href:r??I.link,target:"_blank",rel:"noreferrer",children:t.jsx(Pe,{icon:t.jsx(qi,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(Pe,{icon:t.jsx(oa,{}),text:s}),!!c.length&&t.jsx(Pe,{icon:t.jsx(In,{}),text:t.jsx(Ne,{words:c})}),!!x.length&&t.jsx(Pe,{onClick:v,icon:t.jsx(os,{}),text:t.jsx(Ne,{words:x}),rightIcon:t.jsx(ht,{})}),t.jsx(O,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(Ts,{type:"staff",name:j},j))]})}),!r&&t.jsx(xe,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:E})]})]})};p.span`
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
`;const F1=p.a`
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
        background: ${w.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`,Hi=({title:e,link:i,image:n})=>i?t.jsxs(F1,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(W,{size:3,children:e})]}):null,fo=p.div`
    ${ee.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,B1=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(fo,{children:t.jsx(O,{jc:"center",children:t.jsx(Qe,{})})}):t.jsx(fo,{children:e==="Webex"?t.jsx(Hi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Hi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Hi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Hi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},xo=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,lc=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=xt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(xo,{background:c,color:r,children:"Сейчас"}):t.jsxs(xo,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},H1=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,QT=()=>t.jsxs(H1,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(Y,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(Y,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),cc="/assets/sleep-54d590c1.gif";var dc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(dc||{});const U1=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],ZT=[...U1,{title:"Месяц",condition:!0}],jt=Object.keys(Lt).reduce((e,i)=>(e[i]=[],e),{}),W1={schedule:{today:[],week:{...jt},semestr:{data:{...jt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...jt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},V1=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},_i=e=>{const[i,n]=e.split(":");return+i*60+ +n};var en=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(en||{});const pc=e=>{const[i,n]=e.split(" "),s=en[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},uc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=en[o],r=en[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},ai=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[f,g]=r.split(" - "),m=_i(g)-_i(f),[x,b]=d.split("-").map(I=>I.trim()),v=pc(x),E=uc(b,x);return{title:o,people:a,startTime:f,duration:m,startDate:v,endDate:E,placeIcon:t.jsx(Eu,{}),dateInterval:d,color:Jn[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Zi(o)}}):[],G1=e=>new Date(e.setHours(0,0,0,0)),mo=(e,i)=>(e??[]).filter(n=>{const s=G1(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=pc(o),c=uc(a,o);return s>=r&&s<=(c??r)}),hc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),Xn=e=>e instanceof Date&&isFinite(+e),q1=e=>{const i={...jt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!Xn(n)||!Xn(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=hc(a);if(r==="sunday")continue;i[r]=[...i[r],...ai(e[o].lessons,Lt[r].short)]}return{schedule:i,startDate:n,endDate:s}},gc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),fc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return H.evokePopUpMessage({message:f,type:"failure",time:as.ten_seconds}),{schedule:W1.schedule,errorInData:f}}const o=new Date;let a=V1(o);o.getDay()===0&&(a=gc(o,1));const r={...jt},c={...jt};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),x=e[f];"lessons"in x?(r[g]=ai(mo(x.lessons,a),Lt[g].short),c[g]=ai(x.lessons,Lt[g].short)):(r[g]=ai(mo(x,a),Lt[g].short),c[g]=ai(x,Lt[g].short)),n=new Date(Math.min(...c[g].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=q1(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},xc=async e=>{const i=await ah(e),n=await lh();return fc(i.data,n.data)},mc=async e=>{const i=await rh(e),n=await ch(e);return fc(i.data,n.data)},bo={data:{schedule:null,externalSchedule:null,view:dc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},Y1=()=>q(de),$t=z(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await mc(n);if(i&&s==="stud")return await xc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Qt=z(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await xc(e)}catch(i){throw new Error(i.message)}}),Zt=z(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await mc(e)}catch(i){throw new Error(i.message)}}),J1=k(),bc=k(),vc=k(),yc=k(),_c=k(),wc=k(),jc=k(),de=J(bo).on($t,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on($t.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(bc,(e,i)=>({...e,data:{...e.data,view:i}})).on(vc,(e,i)=>({...e,currentChosenDay:i.day})).on(yc,()=>({...bo}));C({clock:$t.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(jt)}}),target:de});C({clock:_c,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});C({clock:wc,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});C({clock:Zt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});C({clock:Qt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});C({clock:[Qt,Zt,$t],source:de,fn:e=>({...e,loading:!0}),target:de});C({clock:[Qt,Zt],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});C({clock:[Qt.doneData,Zt.doneData,$t.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});C({clock:[Qt.failData,Zt.failData,$t.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});C({clock:jc,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const Es={useSchedule:Y1},X1={changeCurrentModule:J1,changeView:bc,changeCurrentChosenDay:vc,clearStore:yc,resetExternalSchedule:jc,setSearchValue:wc,setFilter:_c},K1={getScheduleFx:$t,getGroupScheduleFx:Qt,getTeacherScheduleFx:Zt},Q1=Object.freeze(Object.defineProperty({__proto__:null,effects:K1,events:X1,selectors:Es},Symbol.toStringTag,{value:"Module"})),Z1=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${yi(Math.floor(o/60))}:${yi(o%60)}`},kc=(e,i)=>e?`${e} - ${Z1(e,i)}`:"9:00",Kn=e=>!e||!Xn(e)?0:e.getHours()*60+e.getMinutes(),$s=(e,i)=>_i(e.startTime)<=Kn(new Date)&&Kn(new Date)<=_i(e.startTime)+e.duration&&i,Sc=()=>{const{open:e}=te();return n=>{const s=kc(n.startTime,n.duration);e(t.jsx(M1,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:$s(n,!0),noPadding:!0,...n}))}},vo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},ew=()=>{const{currentDevice:e}=Ai(),[i,n]=l.useState(vo[e]);return l.useEffect(()=>{n(vo[e])},[e]),i},tw=p.div`
    --time-width: 55px;

    ${ee.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${ee.isMobile} {
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
`,iw=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=ew(),o=Sc(),a=[9,22];return e!=null&&e.length?t.jsx(tw,{children:t.jsx($c,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(fe,{text:"В этот день пар нет",image:cc})},Tc=()=>{const{data:{schedule:e}}=Es.useSchedule(),{open:i}=te(),n=gc(new Date,1),s=Fr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=hc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(iw,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},nw=p.div`
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
`,eE=({errorInData:e})=>t.jsxs(nw,{children:[t.jsx("img",{src:cc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(Tc,{})]});p.div`
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
`;const sw=(e,i,n)=>i?e?1:.8:n?1:0,ow=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>sw(e,i,n)};
    transform: scale(${({isVisible:e})=>ow(e)});
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
`;const aw=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,tE=()=>t.jsxs(aw,{children:[t.jsx(Ua,{size:"38px"}),t.jsx(W,{size:4,children:"Учебный день завершился"}),t.jsx(Tc,{})]});p.div`
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
`;p.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;p(Z)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`;p.div`
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
`;p.div`
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
`;const rw=e=>{const[i,n]=e.split(":");return+i*60+ +n},Ec=(e,i,n)=>e?(rw(e)-i)*n:0,lw=p.div`
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

    ${ee.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;p.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${ee.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const cw=p(O)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ee.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,dw=p.span`
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

    ${ee.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,pw=p.div`
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
`,uw=p(O)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,hw=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:f,rooms:g,dateInterval:m,leftShift:x,quantity:b,groups:v,isCurrentEvent:E=!1,nameInOneRow:I=!0,isNextEvent:j=!1,listView:S=!1,shortInfo:A=!1}=e,{theme:L}=xt(),{isMobile:N}=Ai(),K=L==="light"?d.dark3:d.light3,M=L==="light"?d.transparent1:d.transparent2,ie=()=>h(e),ce=(N||b>1)&&A,$e=N&&b>=2&&A,ke=r==null?void 0:r.map(ze=>{var Li,zi;const ei=ze.split(" ");return`${ei[0]??""} ${((Li=ei[1])==null?void 0:Li[0])??""}.${((zi=ei[2])==null?void 0:zi[0])??""}.`}),Ge=Ec(o,c,u),ge=ac(i),Ce=$e?i.split(" ").map(ze=>ze[0].toUpperCase()):qn(ge.name,A?ce?43:35:I?300:64),Ri=(v==null?void 0:v.split(","))??[];return t.jsxs(lw,{background:M,textColor:K,listView:S,leftShift:100*x,quantity:100/b,duration:n,scale:u,top:Ge,onClick:ie,shortInfo:A,children:[t.jsx(pw,{children:s}),t.jsx(O,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(cw,{scale:u,d:"column",ai:"flex-start",shortInfo:A,children:[t.jsxs(O,{d:"column",gap:"2px",children:[!A&&t.jsxs(O,{gap:"8px",children:[t.jsx(rc,{timeInterval:kc(o,n),color:d,isCurrentEvent:E}),t.jsx(lc,{timeLeft:yn(o,"minutes"),isNext:j,color:d,isCurrentEvent:E}),!!(g!=null&&g.length)&&t.jsx(Pe,{shortInfo:A,icon:N&&b>1?void 0:t.jsx(In,{}),text:t.jsx(Ne,{words:g})}),(!!f||ge.link)&&t.jsx("a",{href:f??ge.link,target:"_blank",rel:"noreferrer",children:t.jsx(Pe,{shortInfo:A,icon:t.jsx(qi,{}),text:f?a:"Cсылка"})}),!!Ri.length&&t.jsx(Pe,{icon:t.jsx(os,{}),text:t.jsx(Ne,{words:Ri})})]}),t.jsx(dw,{listView:S,nameInOneRow:I,scale:u,shortInfo:A,children:Ce})]}),!!r.length&&!ce&&t.jsx(Pe,{shortInfo:A,text:t.jsx(Ne,{words:A?[ke[0]]:ke}),icon:t.jsx($u,{})}),!!(g!=null&&g.length)&&A&&!ce&&t.jsx(Pe,{shortInfo:A,icon:t.jsx(In,{}),text:t.jsx(Ne,{words:g})}),!!f&&A&&!ce&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx(Pe,{shortInfo:A,icon:t.jsx(qi,{}),text:a})}),!!m&&!ce&&t.jsx(O,{gap:"5px",children:t.jsx(Pe,{shortInfo:A,icon:t.jsx(ns,{}),text:m})})]})})]})},gw=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},fw=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:u})=>{const h=gw(e),f=u??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(uw,{h:"100%",d:"column",children:[f&&t.jsx(S1,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,x)=>h[m].map((b,v)=>l.createElement(hw,{leftShift:v,quantity:h[m].length,scale:n,isCurrentEvent:$s(b,f),isNextEvent:oc(e,b,f),...b,onClick:c,shift:i,key:b.startTime+b.title+x+v,shortInfo:s})))]})},xw=p(O)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,mw=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,bw=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,vw=p(oe)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ee.isMobile} {
        font-size: 0.65rem;
    }
`,yw=Array(24).fill(0).map((e,i)=>`${yi(i)}:00`),_w=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):yw.slice(e[0],e[1]+1);return t.jsx(xw,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(mw,{children:[t.jsx(vw,{children:o}),t.jsx(bw,{})]},o))})},$c=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=sc({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var u;return Ec((u=i==null?void 0:i[0])==null?void 0:u.startTime,o,n)}});return t.jsxs(x1,{className:"calendar-wrapper",ref:d,children:[t.jsx(_w,{interval:e,scale:n}),t.jsx(fw,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},ww=p.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?w[e].main:"var(--text)"};
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
        color: ${({color:e})=>e?w[e].main:"var(--text)"};
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
`,jw=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=te();return o?t.jsxs(ww,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},kw=p.div`
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
`,Sw=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Tw=p(oe)`
    margin-bottom: 20px;
`,Ew=({image:e,list:i,text:n})=>{const{isMobile:s}=Ai();return t.jsxs(kw,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Tw,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(Sw,{children:i==null?void 0:i.map(o=>l.createElement(jw,{...o,key:o.title}))})]})},$w=p.div`
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
`,Pw=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,Cw=()=>t.jsx(Pw,{children:t.jsx($c,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Jn["16:10 - 17:40"],icon:Zi("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Jn["17:50 - 19:20"],icon:Zi("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),Pc=()=>{const[e,i]=l.useState(0),{close:n}=te(),s=[t.jsx(Ew,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(Cw,{})}},"schedule")];return t.jsxs($w,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(ir,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>ut(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>ut(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},Ow=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return _i(i.startTime)+i.duration<Kn(new Date)}},Aw=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=Es.useSchedule(),o=Sc(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=Ow(e==null?void 0:e.today),c=sc({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,m;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(x=>$s(x,!0)||oc(e.today,x,!0)))??0)}}),d=()=>H.evokePopUpMessage({message:n??"",type:"failure",time:as.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},yo=p(cn)`
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

    ${ee.isTablet} {
        display: flex;
    }
`,ni=()=>t.jsxs(O,{d:"column",gap:"8px",children:[t.jsx(Y,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),Dw=()=>{const{allRoutes:e}=He.useMenu(),{data:{user:i}}=_e.useUser(),{hasNoSchedule:n,loading:s}=Aw(),o=Vt();if(!e||!i||s)return t.jsxs(yo,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(ni,{}),t.jsx(ni,{}),t.jsx(ni,{}),t.jsx(ni,{}),t.jsx(ni,{})]});const a=(i==null?void 0:i.user_status)==="stud"?Jk:n?Kk:Xk;return t.jsx(yo,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(ec,{...e[r],isCurrent:c},r)})})},Nw=(e,i,n)=>({isOpen:i,message:e,position:n}),_o={hints:[]},Iw=()=>q(Rw),Cc=k(),Oc=k(),Ac=k(),Rw=J(_o).on(Cc,(e,{message:i,position:n})=>({hints:[...e.hints,Nw(i,e.hints.length===0,n)]})).on(Oc,e=>({hints:e.hints.splice(1,e.hints.length)})).on(Ac,()=>({..._o})),Lw={useHint:Iw},zw={evoke:Cc,close:Oc,clearStore:Ac},Mw=p.div`
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
    box-shadow: 0 0 30px ${w.blue.transparent3};
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
`,Fw=()=>{const{hints:e}=Lw.useHint(),i=e[0];return i?t.jsx(Mw,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(Q,{type:"hint",title:i.message,onClose:()=>zw.close(),width:"100%",icon:null})}):null},Bw=p.div`
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
`,Hw=50;function iE({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Hw}){const{data:{user:u}}=_e.useUser();let h="";const f=l.useCallback(g=>{const m=g.currentTarget.clientHeight,x=g.currentTarget.scrollHeight,b=g.currentTarget.scrollTop;x-d<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(fe,{text:"Нет результатов",children:c}):t.jsxs(Bw,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var b,v;const x=r?h!==((b=g.fio)==null?void 0:b.charAt(0)):!1;return x&&(h=((v=g.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[x&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(W,{size:4,align:"left",children:h}),t.jsx(xe,{})]}),i(g,(u==null?void 0:u.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(Qe,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Uw=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=_e.useUser();return te(),t.jsxs(Ee,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(oe,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(Ts,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function Ww(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const nE=p.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>Ww(e)};
        opacity: 1;
    }
`,sE=p.div`
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
`,Dc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ye(a.title).includes(ye(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Vw=()=>{const e=T?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Yc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:fd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Jc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Xc,title:"Справка-вызов"},{link:ld,title:"Заявление на пересдачу для получения диплома с отличием"},{link:gd,title:"Запрос на изменение персональных данных"},{link:rd,title:"Запрос на восстановление магнитного пропуска"},{link:Wc,title:"Уточнение паспортных данных"},{link:xd,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:md,title:"Предоставление каникул в связи с окончанием университета"},{link:bd,title:"Предоставление академического отпуска"},{link:vd,title:"Выход из академического отпуска"},{link:yd,title:"Отчисление по инициативе обучающегося"},{link:_d,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Kc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Qc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Zc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:td,title:"Предоставление права проживания льготной категории граждан"},{link:ed,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:id,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:sd,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:od,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:nd,title:"Расторжение договора найма"},{link:ad,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:da,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:pd,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:ud,title:"Заявка на материальную помощь"},{link:qc,title:"Оформить социальную стипендию"},{link:hd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:T,links:[{link:cd,title:"Отправить документы воинского учета"},{link:dd,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:T,links:[{link:Qn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Qn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Gu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Vc,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:T,links:[{link:Gc,title:"Трудоустройство студентов"}]}]},Gw=()=>[{title:"Цифровые сервисы",links:[{link:Zr,title:"Справка с места работы"},{link:el,title:"Справка с места работы для предоставления в визовый центр"},{link:il,title:"Справка о количестве неиспользованных дней отпуска"}]},...qw()],qw=()=>[{title:"Цифровые сервисы (в разработке)",disabled:T,links:[{link:tl,title:"Справка о стаже работы"},{link:nl,title:"Копия трудовой книжки"},{link:sl,title:"Копии документов из личного дела"},{link:ol,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:T,title:"Общее",links:[{link:Hr,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:T,links:[{link:Ur,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",disabled:T,links:[{link:qr,title:"Получение нового компьютерного оборудования"},{link:Yr,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Jr,title:"Обслуживание принтеров, МФУ"},{link:Xr,title:"Вопрос по СЭД Directum и 1С"},{link:Kr,title:"Вопрос по Личному кабинету"},{link:Qr,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:T,links:[{link:cl,title:"Справка по форме 2-НДФЛ"},{link:dl,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:al,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:pl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:T,links:[{link:hl,title:"Предоставление права проживания в жилом помещении"},{link:gl,title:"Временное размещение гостей в студгородке"},{link:fl,title:"Проход гостей на территорию студенческого городка"},{link:xl,title:"Переселение"},{link:ml,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:T,links:[{link:bl,title:"Выдача пропуска (повторная)"},{link:vl,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:T,links:[{link:yl,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:T,links:[{link:Gr,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:T,links:[{link:ll,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:T,links:[{link:_l,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:wl,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:T,links:[{link:rl,title:"Произвольный запрос"},{link:da,title:"Вступить в Профсоюз",isExternalLink:!0}]}],Yw=()=>[{title:"",links:[{link:ul,title:"Заявление на трудоустройство по совместительству"},{link:Hn,title:"Заявление на увольнение"},{link:Vn,title:"Заявление о привлечении к работе в выходной день"},{link:Un,title:"Заявление о предоставлении отпуска"},{link:Wn,title:"Заявление о переносе отпуска"},{link:Gn,title:"Заявление о диспансеризации"},{link:Gi,title:"Заявление на перевод"}]}],Jw=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Xw=p.div`
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
`,oE=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=te(),s=e?Gw():Vw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(Xw,{children:[t.jsx(er,{whereToSearch:s,searchEngine:Dc,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(d=>{if(!d.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:d.title}),t.jsx("div",{className:"links",children:d.links.map((u,h)=>{if(!(u.disabled||!Jw(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},d.title)}),!(r!=null&&r.length)&&!!o.length&&t.jsx(fe,{text:`По запросу ${o} ничего не найдено`})]})})]})},Kw=p.div`
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
`,Qw=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,aE=({})=>{const{data:{listApplication:e},error:i}=me.useApplications(),{close:n}=te(),s=Yw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Xt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Kw,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(er,{whereToSearch:s,searchEngine:Dc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(Qw,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(fe,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Zw=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),wo={isOpen:!1,pages:[],currentPage:0},ej=()=>q(tj),Nc=k(),Ic=k(),Rc=k(),Lc=k(),tj=J(wo).on(Nc,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(Ic,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(Rc,(e,{value:i})=>({...e,currentPage:i})).on(Lc,()=>({...wo})),Ps={useStory:ej},yt={open:Nc,close:Ic,clearStore:Lc,changeCurrentPage:Rc};p(Ze)`
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
`;p.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const ij=p.div`
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
`,Cs=ij,nj=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,u]=l.useState(r===void 0),[h,f]=l.useState(!a),[g,m]=l.useState(!1),x=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!!j.find(S=>!S.value&&S.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(S=>!S.value&&S.required))&&!n.find(j=>!!j.find(S=>{var A;return S.value.id==="not-chosen"&&!!((A=S.items)!=null&&A.length)}))?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var S;return j.value===null&&!!((S=j.items)!=null&&S.length)})?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},b=()=>{s(j=>{const S=j.default[0].map(A=>({fieldName:A.fieldName??"",title:A.title,value:A.type==="select"&&(A!=null&&A.items)?null:"",type:A.type,items:A.items,width:A.width,required:A.required}));return{...j,data:[...j.data,S]}})},v=j=>{s(S=>{const A=S.data.filter((L,N)=>j!==N);return{...S,data:A}})},E=j=>{s(S=>(S.documents&&(S.documents.files=[...j]),{...S}))},I=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{f(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:f,setIncluded:m,setChangeInputArea:u,handleRemove:v,handleAddNew:b,handleLoadFiles:E,handleConfirm:x,handleCheckbox:I}},sj=p.div`
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
`,oj=p.div``,aj=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(oj,{children:[t.jsx(W,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(Yf,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),rj=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(W,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Ee,{children:[!a&&t.jsx(Be,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Be,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),lj=p.div`
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
`,cj=({title:e,value:i,visible:n})=>n?t.jsxs(lj,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,dj=p.div`
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
`,pj=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(dj,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(Pu,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(sa,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,uj=p.div`
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
`,hj=({title:e,visible:i})=>i?t.jsx(uj,{children:t.jsx("span",{className:"title",children:e})}):null,gj=p.div`
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
        border: ${({danger:e})=>e&&`2px solid ${w.red.main}`};

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
`,fj=p.ul`
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
`,xj=p.li`
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
`,mj=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,m]=l.useState([]),[x,b]=l.useState(!0);return l.useEffect(()=>{if(e){const v=f.filter(E=>E.toLowerCase().includes(e.toLowerCase()));m(v)}else m([])},[e,f]),t.jsxs(gj,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(W,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:v=>{i(v.target.value),b(!0)},placeholder:c}),g.length>0&&t.jsx(fj,{width:"100%",isOpen:x,className:x?"open":"close",itemsAmount:g.length,title:s,children:g.map((v,E)=>t.jsx(xj,{isSelected:!1,onClick:()=>{i(v),m([]),b(!1)},children:v},E))})]})]})},bj=p.div`
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
`,vj=({title:e,visible:i})=>i?t.jsx(bj,{children:t.jsx("span",{className:"title",children:e})}):null,jo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:f,setData:g,mask:m,editable:x,placeholder:b,autocomplete:v,isSpecificRadio:E,specialType:I,specialFieldsNameConfig:j,minValueInput:S,maxValueInput:A,maxValueLength:L,diff:N,visible:K=!0,onChange:M,onKeyPress:ie,onBlur:ce,onKeyDown:$e,onKeyUp:ke,onFocus:Ge}=e,ge=x??(f&&!h),[Ce,Ri]=l.useState(!0),ze=(G,pe,It)=>{M==null||M(G),g(we=>(Array.isArray(we.data[0])?we.data[pe][It??0].value=G:we.data[pe].type==="checkbox-docs"?we.data[pe].items[It??0].value=!!G:we.data[pe].value=G,{...we}))},ei=(G,pe,It)=>{M==null||M(G),g(we=>(Array.isArray(we.data[0])?we.data[pe][It??0].value=G:we.data[pe].value=G,{...we}))},Ds=(G,pe,It)=>{g(we=>(we.data[pe].items[It??0].files=G,{...we}))},Li=G=>{M==null||M(G),g(pe=>(pe.data[o].value=G,{...pe}))},zi=G=>{M==null||M(G),ie==null||ie(G),ce==null||ce(G),$e==null||$e(G),ke==null||ke(G),Ge==null||Ge(G),g(pe=>(pe.data[o].value=G,{...pe}))};return j&&I&&!Object.values(j).includes(I)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Be,{text:u,isActive:ge,checked:i,setChecked:G=>ze(G,o,a)}):r==="hr-checkbox"?t.jsx(pj,{text:u,isActive:ge,checked:i,setChecked:G=>ze(G,o,a)}):r==="auto-complete-input"?t.jsx(mj,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:G=>ze(G,o,a)}):r==="textarea"?t.jsx(Jg,{value:i,title:u,setValue:G=>ze(G,o,a),isActive:ge,textAreaAppearance:ge,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(aj,{title:u,items:d,setChecked:(G,pe)=>ze(!G,o,pe),setFiles:(G,pe)=>Ds(G,o,pe)}):r==="date-interval"?K?t.jsx(or,{title:u,required:n,dates:i,setDates:G=>zi(G),valid:Ce,setValid:Ri,minValue:S,diff:N}):null:r==="simple-text"?t.jsx(cj,{title:u,value:i,visible:K}):r==="text-warning"?t.jsx(vj,{title:u,visible:K}):r==="text-header"?t.jsx(hj,{title:u,visible:K}):r==="radio"?t.jsx(rj,{buttons:d,title:u,required:n,current:i,setCurrent:Li,isSpecificRadio:E}):K?t.jsx(pt,{value:i,title:u,minValue:S,maxValue:A,maxLength:L,setValue:G=>ze(G,o,a),type:r,isActive:ge,inputAppearance:ge,placeholder:b??u,required:n,mask:m,width:s,autocomplete:v}):null:K?t.jsx(pr,{items:d,setSelected:G=>ei(G,o,a),selected:i,isActive:ge,title:u,width:s,multiple:r==="multiselect",required:n}):null},yj=p.div`
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
`,_j=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(yj,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(W,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Ho,{}):t.jsx(Uo,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Be,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(Ue,{}),onClick:()=>null,background:"transparent",flipped:c})]}),wj=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Is,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(Cu,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(kt,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(Ou,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Is,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),jj=e=>e.confirmed===void 0?null:t.jsx(Ee,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(wj,{...e,confirmed:e.confirmed})}),_t=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:m,defaultOpenArea:x=!0})=>{const{openArea:b,changeInputArea:v,included:E,setOpenArea:I,setIncluded:j,setChangeInputArea:S,handleRemove:A,handleAddNew:L,handleLoadFiles:N,handleConfirm:K,handleCheckbox:M}=nj({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c,defaultOpenArea:x});return t.jsxs(t.Fragment,{children:[t.jsxs(sj,{openArea:b,children:[t.jsx(_j,{title:e,included:E,optional:d,confirmed:c,setOpenArea:I,setIncluded:j,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(Q,{type:"alert",visible:!!n,icon:t.jsx(mi,{}),children:n}),t.jsx(Q,{type:"info",visible:!!i&&(v||c===void 0),title:"Как заполнить",icon:t.jsx(Je,{}),children:i}),Array.isArray(s[0])?s.map((ie,ce)=>t.jsxs("div",{className:"data-line",children:[ie.map(($e,ke)=>t.jsx(jo,{documents:a,changeInputArea:v&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:ke,specialFieldsNameConfig:m,...$e},ke)),v&&u&&t.jsx(_,{icon:t.jsx(Au,{}),textColor:w.red.main,onClick:()=>A(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((ie,ce)=>t.jsx(jo,{documents:a,changeInputArea:v&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:m,...ie},ce)),u&&v&&t.jsx(_,{icon:t.jsx(Du,{}),text:"Добавить",onClick:L,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&v&&a.visible!==!1&&t.jsx(sr,{files:a.files,setFiles:ie=>N(ie),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(ie=>l.createElement(df,{...ie,key:ie.title})),t.jsx(Be,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||v,checked:(o==null?void 0:o.value)??!1,setChecked:M}),t.jsx(jj,{confirmed:c,changeInputArea:v,setData:r,setChangeInputArea:S,handleConfirm:K})]})]}),h&&t.jsx(xe,{})]})},kj=p.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?w.green.main:w.grey.main};
    outline: 6px solid
        ${({reached:e,current:i})=>i?w.blue.transparent1:e?w.green.transparent3:w.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,Sj=p.div`
    display: flex;
    margin-bottom: -20px;
`,Tj=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,zc=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:ue(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Sj,{children:e.map((r,c)=>t.jsxs(Tj,{lastElement:c===e.length-1,children:[t.jsx(kj,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(zg,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(_t,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Ej=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),$j=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Pj=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),_n=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return Zw(u);if(Array.isArray(u.data[0])){const h=u.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>ko(m)))),f={};return f[e]=JSON.stringify(h),f}else return u.data.map(h=>ko(h))}).flat(),r=i.map(u=>{var f,g;const h={};if((f=u.documents)!=null&&f.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((g=u.documents)==null?void 0:g.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var f,g;const h={};return(f=u.optionalCheckbox)!=null&&f.fieldName&&(h[(g=u.optionalCheckbox)==null?void 0:g.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Re.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},ko=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Cj(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Cj=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,wn=p.div`
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
`;var Ii=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Ii||{}),Oj=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(Oj||{});const Aj=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Dj=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Nj=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Dj},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Aj}]}},Ij=()=>{var M;const[e,i]=l.useState(null),[n,s]=l.useState(Mi.kvdCert),[o,a]=l.useState(Mi.fluorographyCert),[r,c]=l.useState(Mi.vichRwCert),[d,u]=l.useState(Mi.graftCert),{data:{dataUserApplication:h}}=me.useApplications(),{data:{user:f}}=_e.useUser(),[g,m]=l.useState(!1),[x,b]=l.useState(!1),[v,E]=l.useState(null),[I,j]=l.useState(null),[S,A]=l.useState(null),L=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(fe,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const N=!!e&&!!I&&!!v&&!!S;if(l.useEffect(()=>{h&&(i(Nj(h)),E($j()),j(Pj()),A(Ej()))},[h]),!N)return null;const K=[[{dataForm:e,setDataForm:i}],[{dataForm:I,setDataForm:j}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx(wn,{isDone:L,children:t.jsxs(pn,{children:[t.jsx(W,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(zc,{stagesConfig:K}),t.jsx(dt,{text:"Отправить",action:()=>_n(Ii.USG_GETHOSTEL_OOZ,[e,I,v,S,n,o,r,d],b,m),isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:L,isActive:(((M=e.optionalCheckbox)==null?void 0:M.value)??!0)&&ue(e)&&ue(o)&&ue(r)&&ue(d)&&ue(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Rj=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],Lj=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],zj=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],Mj=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],Fj=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],Bj=[{id:0,title:"1"},{id:1,title:"2"}],Hj=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],Uj=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],Wj=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],Vj=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),Gj=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Rj,width:"100%",editable:!0,required:!0}]}),qj=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Lj,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),Yj=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:zj,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:Mj,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:Fj,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:Bj,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:Hj,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),Jj=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:Uj,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),So=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:Wj,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},Mc=()=>{var A;const[e,i]=l.useState(null),[n,s]=l.useState(Gj()),[o,a]=l.useState(qj()),[r,c]=l.useState(Yj()),[d,u]=l.useState(Jj()),[h,f]=l.useState(So(null)),[g,m]=l.useState(!1),[x,b]=l.useState(!1),[v,E]=l.useState(!1),{data:{dataUserApplication:I}}=me.useApplications();l.useEffect(()=>{I&&i(Vj(I))},[I]);const j=l.useMemo(()=>{var L,N;return((N=(L=h==null?void 0:h.data[0])==null?void 0:L.value)==null?void 0:N.id)!==0},[(A=h==null?void 0:h.data[0])==null?void 0:A.value]);if(l.useEffect(()=>{h&&f(So(h.data))},[j]),!e)return null;const S=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:f}]];return t.jsx(wn,{isDone:!1,children:t.jsxs(pn,{children:[t.jsx(W,{size:3,align:"left",children:"Воинский учет"}),t.jsx(zc,{stagesConfig:S}),t.jsx(Be,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(dt,{text:x?"Отправлено":"Отправить",action:()=>_n(Ii.MIL_REG,[e,n,o,r,d,h],E,b),isLoading:v,completed:x,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&ue(e)&&ue(n)&&ue(r)&&ue(d)&&ue(h)&&ue(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Xj=Object.freeze(Object.defineProperty({__proto__:null,default:Mc},Symbol.toStringTag,{value:"Module"})),Kj=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],Qj=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:Kj},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),Zj=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Fc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:u}}=me.useApplications();return l.useEffect(()=>{u&&i(Qj(u))},[u]),l.useEffect(()=>{e&&u&&c(Zj(e.data))},[e]),t.jsx(wn,{isDone:d,children:!!e&&!!i&&t.jsxs(pn,{children:[t.jsx(_t,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(dt,{text:d?"Отправлено":"Отправить",action:()=>_n(Ii.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:ue(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},ek=Object.freeze(Object.defineProperty({__proto__:null,default:Fc},Symbol.toStringTag,{value:"Module"})),tk=l.lazy(()=>y(()=>import("./index-522552c7.js"),["assets/index-522552c7.js","assets/vendor-561dac3a.js"])),ik=l.lazy(()=>y(()=>import("./index-59ae75ca.js"),["assets/index-59ae75ca.js","assets/vendor-561dac3a.js"])),nk=l.lazy(()=>y(()=>import("./index-cc9b0777.js"),["assets/index-cc9b0777.js","assets/vendor-561dac3a.js"])),sk=l.lazy(()=>y(()=>import("./index-2c59df42.js"),["assets/index-2c59df42.js","assets/vendor-561dac3a.js"])),ok=l.lazy(()=>y(()=>import("./index-6ceb006d.js"),["assets/index-6ceb006d.js","assets/vendor-561dac3a.js"])),ak=l.lazy(()=>y(()=>import("./index-4d0f628e.js"),["assets/index-4d0f628e.js","assets/vendor-561dac3a.js","assets/ui-0fd3a678.js"])),rk=l.lazy(()=>y(()=>import("./index-e3f8b1ab.js"),["assets/index-e3f8b1ab.js","assets/vendor-561dac3a.js","assets/get-method-obtaining-fields-155e137c.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),lk=l.lazy(()=>y(()=>import("./index-a987a7fc.js"),["assets/index-a987a7fc.js","assets/vendor-561dac3a.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ck=l.lazy(()=>y(()=>import("./index-2934fe6a.js"),["assets/index-2934fe6a.js","assets/vendor-561dac3a.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),dk=l.lazy(()=>y(()=>import("./index-b074481b.js"),["assets/index-b074481b.js","assets/vendor-561dac3a.js"])),pk=l.lazy(()=>y(()=>import("./index-52512651.js"),["assets/index-52512651.js","assets/vendor-561dac3a.js","assets/index-f17e074f.js"])),uk=l.lazy(()=>y(()=>import("./index-59b0f383.js"),["assets/index-59b0f383.js","assets/vendor-561dac3a.js","assets/is-valid-url-08a91344.js"])),hk=l.lazy(()=>y(()=>import("./index-5dc7439b.js"),["assets/index-5dc7439b.js","assets/vendor-561dac3a.js"])),gk=l.lazy(()=>y(()=>import("./index-b4a60b04.js"),["assets/index-b4a60b04.js","assets/vendor-561dac3a.js"])),fk=l.lazy(()=>y(()=>import("./index-ec689218.js"),["assets/index-ec689218.js","assets/vendor-561dac3a.js"])),xk=l.lazy(()=>y(()=>import("./index-fef13bee.js"),["assets/index-fef13bee.js","assets/vendor-561dac3a.js"])),mk=l.lazy(()=>y(()=>import("./index-11af9088.js"),["assets/index-11af9088.js","assets/vendor-561dac3a.js"])),bk=l.lazy(()=>y(()=>import("./index-b1aa2e91.js"),["assets/index-b1aa2e91.js","assets/vendor-561dac3a.js"])),vk=l.lazy(()=>y(()=>import("./index-a3563c8c.js"),["assets/index-a3563c8c.js","assets/vendor-561dac3a.js"])),yk=l.lazy(()=>y(()=>import("./index-e02005d5.js"),["assets/index-e02005d5.js","assets/vendor-561dac3a.js"])),_k=l.lazy(()=>y(()=>import("./index-3314538a.js"),["assets/index-3314538a.js","assets/vendor-561dac3a.js"])),wk=l.lazy(()=>y(()=>import("./index-4bfc2401.js"),["assets/index-4bfc2401.js","assets/vendor-561dac3a.js","assets/BoldText-68a8be97.js"])),jk=l.lazy(()=>y(()=>import("./index-92f776d1.js"),["assets/index-92f776d1.js","assets/vendor-561dac3a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>Xj),void 0));const kk=l.lazy(()=>y(()=>import("./index-d4bd3a9f.js"),["assets/index-d4bd3a9f.js","assets/vendor-561dac3a.js"])),Sk=l.lazy(()=>y(()=>import("./index-23926ec9.js"),["assets/index-23926ec9.js","assets/vendor-561dac3a.js"])),Tk=l.lazy(()=>y(()=>import("./index-33675d08.js"),["assets/index-33675d08.js","assets/vendor-561dac3a.js"])),Ek=l.lazy(()=>y(()=>import("./index-617ff9fd.js"),["assets/index-617ff9fd.js","assets/vendor-561dac3a.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),$k=l.lazy(()=>y(()=>import("./index-2807b052.js"),["assets/index-2807b052.js","assets/vendor-561dac3a.js","assets/get-method-obtaining-fields-155e137c.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Pk=l.lazy(()=>y(()=>import("./index-2d66faec.js"),["assets/index-2d66faec.js","assets/vendor-561dac3a.js"])),Ck=l.lazy(()=>y(()=>import("./index-540c506c.js"),["assets/index-540c506c.js","assets/vendor-561dac3a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>ek),void 0));const Ok=l.lazy(()=>y(()=>import("./index-66a00f4a.js"),["assets/index-66a00f4a.js","assets/vendor-561dac3a.js"])),Ak=l.lazy(()=>y(()=>import("./index-62d943cc.js"),["assets/index-62d943cc.js","assets/vendor-561dac3a.js"])),Dk=l.lazy(()=>y(()=>import("./index-ca569e33.js"),["assets/index-ca569e33.js","assets/vendor-561dac3a.js"])),Nk=l.lazy(()=>y(()=>import("./index-c44ec493.js"),["assets/index-c44ec493.js","assets/vendor-561dac3a.js"])),Ik=l.lazy(()=>y(()=>import("./index-2a35f274.js"),["assets/index-2a35f274.js","assets/vendor-561dac3a.js"])),Rk=l.lazy(()=>y(()=>import("./index-1248b388.js"),["assets/index-1248b388.js","assets/vendor-561dac3a.js","assets/get-divisions-96cfa1b1.js"])),Lk=l.lazy(()=>y(()=>import("./index-3e924288.js"),["assets/index-3e924288.js","assets/vendor-561dac3a.js"])),zk=()=>U.get(`?getRequestMedicalCertificate&token=${V()}`),Bc=k(),Hc=z(async()=>(await zk()).data);C({clock:Bc,target:Hc});aa(Hc,null);const Mk={load:Bc},Fk=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],Bk=e=>{const{phone:i,email:n}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:n,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:Fk,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},Uc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(null),[o,a]=l.useState(null),[r,c]=l.useState(null),[d,u]=l.useState(!1),[h,f]=l.useState(null),[g,m]=l.useState(!1),[x,b]=l.useState(!1),v=g??!1,{data:{dataUserApplication:E}}=me.useApplications();return l.useEffect(()=>{E&&i(Bk(E))},[E]),l.useEffect(()=>{Mk.load(),s(st({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),a(st({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),c(st({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),f(st({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),t.jsx(wn,{isDone:!1,children:t.jsxs(pn,{children:[e&&i&&t.jsx(_t,{...e,setData:i}),n&&s&&t.jsx(_t,{...n,setData:s}),o&&a&&t.jsx(_t,{...o,setData:a}),r&&c&&t.jsx(_t,{...r,setData:c}),h&&f&&t.jsx(_t,{...h,setData:f}),t.jsx(Be,{checked:d,setChecked:u,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(dt,{text:v?"Отправлено":"Отправить",action:()=>{_n(Ii.MEDICAL_CERT,[e,n,o,r,h],b,m)},isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:!!d&&!!e&&!!o&&!!r&&!!h&&!!n&&ue(e)&&ue(o)&&ue(r)&&ue(h)&&ue(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Hk=Object.freeze(Object.defineProperty({__proto__:null,default:Uc},Symbol.toStringTag,{value:"Module"})),$="/applications",Uk="/application-for-superior-room",Wk="/acad-performance",Vk="/dormitory",Wc=$+"/clarification-of-passport-data",Vc=$+"/arbitrary-request",Gc=$+"/student-employment",qc=$+"/social-scollarship",Yc=$+"/certificate-of-attendance",Jc=$+"/social-agencies",Xc=$+"/paper-call",Kc=$+"/regular-accommodation",Qc=$+"/full-time-part-time-form",Zc=$+"/accommodation-correspondence-form",ed=$+"/academic-leave-accommodation",td=$+"/preferential-accommodation",id=$+"/family-room",nd=$+"/termination-of-employment-contract",sd=$+"/relocation-inside-hostel",od=$+"/relocation-to-another-hostel",ad=$+"/accommodation-for-graduates",Qn=$+"/payment-recipient",rd=$+"/restoring-the-magnetic-pass",ld=$+"/retake-for-diploma",cd=$+"/military-registration-documents",dd=$+"/military-registration",pd=$+"/financial-support",ud=$+"/financial-assistance",hd=$+"/increased-state-academic-scholarship",gd=$+"/changing-personal-data",fd=$+"/student-status",xd=$+"/state-accreditation",Gk=$+"/military-registration-card",md=$+"/holidays-after-training",bd=$+"/provision-academic-leave",vd=$+"/exit-academic-leave",yd=$+"/independently-deducted",_d=$+"/extension-attestation",qk="/physical-education/student",nt=()=>Te({oldVersionUrl:"/sprav"}),si=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:$,Component:pk,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...Rl,"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Zo,{}),path:Yv,Component:Uc,color:"blue",isTemplate:!1,group:"GENERAL"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(ct,{}),path:Ki,Component:bs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Rs,{}),path:Vk,Component:nk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Nu,{}),path:Wk,Component:ik,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:qk,pageSize:"big",Component:ak,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Wo,{}),path:Ol,Component:uk,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Iu,{}),path:Nl,Component:ps,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Rs,{}),path:Uk,Component:tk,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(La))}}),To=e=>{var i,n,s;return{...Ll,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(ri,{}),path:Wc,Component:sk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(ri,{}),path:Vc,Component:Rk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(ri,{}),path:Gc,Component:T?nt:Lk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(X,{}),path:qc,Component:T?nt:ok,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(X,{}),path:Yc,Component:rk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(X,{}),path:Jc,Component:lk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(X,{}),path:Xc,Component:ck,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(X,{}),path:Kc,Component:dk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(X,{}),path:Qc,Component:Ij,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(X,{}),path:Zc,Component:Nk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(X,{}),path:ed,Component:hk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(X,{}),path:td,Component:gk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(X,{}),path:id,Component:Ik,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(X,{}),path:nd,Component:fk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(X,{}),path:sd,Component:xk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(X,{}),path:od,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(Te,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):bk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:X,path:ad,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?mk:()=>t.jsx(Te,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(X,{}),path:Qn,Component:vk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(X,{}),path:rd,Component:yk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(X,{}),path:cd,Component:T?nt:jk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(Ru,{}),path:dd,Component:T?nt:Mc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:$},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(X,{}),path:ld,Component:wk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(X,{}),path:hd,Component:T?nt:_k,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(X,{}),path:pd,Component:T?nt:kk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(X,{}),path:ud,Component:T?nt:Sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(X,{}),path:gd,Component:Tk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(X,{}),path:fd,Component:Ek,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(X,{}),path:xd,Component:$k,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(X,{}),path:md,Component:Pk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(X,{}),path:bd,Component:Ck,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(X,{}),path:vd,Component:Fc,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(X,{}),path:yd,Component:Ok,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(X,{}),path:_d,Component:Ak,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(X,{}),path:Gk,Component:T?nt:Dk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:$}}},Eo=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Yk=["settings","profile","chat","schedule","payments","project-activity","all-students"],Jk=["home","schedule","acad-performance","all","profile"],Xk=["home","schedule","alerts","all","profile"],Kk=["home","doclist","alerts","all","profile"],Qk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(F.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??an,s=ca.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},$o={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Zk=()=>q(tS),wd=k(),jd=k(),kd=k(),Sd=k(),eS=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},oi=e=>{if(!e)return so();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(so()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},tS=J($o).on(wd,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(jd,()=>({...$o})).on(kd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?oi(n)[window.location.hash.slice(2,window.location.hash.length)]:si()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...oi(n),...oo()}:{...si(),...To(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?oi(n):si(),leftsideBarRoutes:Eo(Qk(i),(i==null?void 0:i.user_status)==="staff"?oi(n):si()),homeRoutes:Eo(s??JSON.parse(localStorage.getItem(F.HomeRoutes)??JSON.stringify(Yk)),(i==null?void 0:i.user_status)==="staff"?{...oi(n),...oo()}:{...si(),...To(i)})})).on(Sd,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:eS(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),He={useMenu:Zk},tt={changeOpen:wd,clearStore:jd,defineMenu:kd,changeNotifications:Sd},Td=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:Al,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Nt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Ki,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Ki,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:ws,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Br,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:vs,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:$,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:kl,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},iS={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},Ed=(e,i)=>i.filter(({type:n})=>e[iS[n]]),nS={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},jn=z(async({settings:e})=>{try{const{data:i}=await Fh();return Ed(e,i).map(({id:n,type:s,title:o,text:a})=>Td(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),sS=z(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&tt.changeNotifications({page:i,notifications:1})})}),oS=z(({notifications:e})=>{const{pageId:i}=e[0];i&&tt.changeNotifications({page:i,notifications:1})}),kn=z(async({id:e,pageId:i})=>{try{return await Bh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Sn=z(async()=>{try{await Hh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),aS=e=>{e&&tt.changeNotifications({page:e,notifications:0})},$d=k(),Pd=k(),Cd=k(),Od=k(),Ad=k(),Dd=k(),Nd=k(),ae=J(nS).reset(Nd);Le({from:Pd,to:jn});C({clock:jn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});C({clock:jn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});C({clock:jn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,sS]});C({clock:$d,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,oS]});Le({from:Od,to:kn});C({clock:kn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(aS(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});C({clock:kn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});C({clock:kn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});Le({from:Ad,to:Sn});C({clock:Sn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});C({clock:Sn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});C({clock:Sn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});C({clock:Cd,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});C({clock:Dd,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const rS=()=>je(ae),Pt={initialize:Pd,add:$d,clearById:Od,clearVisibleById:Cd,clearAll:Ad,clearAllVisible:Dd,clearStore:Nd},it={useLkNotifications:rS},lS=Object.freeze(Object.defineProperty({__proto__:null,events:Pt,selectors:it},Symbol.toStringTag,{value:"Module"})),Po={messages:null,error:null},cS=()=>({data:q(Co).messages,loading:q(hi.pending),error:q(Co).error}),hi=z(async()=>{try{return(await gh("1")).data}catch(e){throw new Error(e)}}),Id=k(),Co=J(Po).on(hi,e=>({...e,error:null})).on(hi.doneData,(e,i)=>({...e,messages:i})).on(hi.failData,(e,i)=>({...e,error:i.message})).on(Id,()=>({...Po})),dS={useMessages:cS},pS={getMessagesFx:hi},uS={clearStore:Id},hS=Object.freeze(Object.defineProperty({__proto__:null,effects:pS,events:uS,selectors:dS},Symbol.toStringTag,{value:"Module"})),Oo={type:null,personalNotifications:null,error:null,completed:!1},gS=()=>({data:q(Ft).personalNotifications,loading:q(Mt.pending),error:q(Ft).error,completed:q(Ft).completed}),fS=()=>q(Ft).type,Rd=k(),Ld=z(e=>e),Mt=z(async()=>{const{type:e}=Ft.getState();if(e==="notifications")try{return(await ma()).data}catch(i){throw new Error(i)}try{return{docs:(await ba()).data}}catch(i){throw new Error(i)}}),tn=z(async e=>{const{type:i}=Ft.getState(),n=i==="notifications"?Ch:Ah;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),zd=k(),Ft=J(Oo).on(Ld,(e,i)=>({...e,type:i})).on(Mt,e=>({...e,error:null})).on(Mt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Mt.failData,(e,i)=>({...e,error:i.message})).on(tn.doneData,e=>({...e})).on(tn.failData,(e,i)=>({...e,error:i.message})).on(Rd,(e,i)=>({...e,completed:i.completed})).on(zd,()=>({...Oo}));tn.doneData.watch(()=>Mt());const xS={usePersonalNotifications:gS,useType:fS},mS={setNotificationsType:Ld,getPersonalNotificationsFx:Mt,viewPersonalNotificationsFx:tn},bS={changeCompleted:Rd,clearStore:zd},vS=Object.freeze(Object.defineProperty({__proto__:null,effects:mS,events:bS,selectors:xS},Symbol.toStringTag,{value:"Module"})),yS=rn({api:{get:$h}}),Ao={superiorRoom:null,error:null},_S=()=>({data:q(Do).superiorRoom,loading:q(gi.pending),error:q(Do).error}),Md=k(),wS=z(async e=>{});Le({from:Md,to:wS});const gi=z(async()=>{try{return(await vh()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Fd=k(),Do=J(Ao).on(gi,e=>({...e,error:null})).on(gi.doneData,(e,i)=>({...e,superiorRoom:i})).on(gi.failData,(e,i)=>({...e,error:i.message})).on(Fd,()=>({...Ao})),jS={useSuperiorRoom:_S},kS={getSuperiorRoomFx:gi},SS={postSuperiorRoom:Md,clearStore:Fd},TS=Object.freeze(Object.defineProperty({__proto__:null,effects:kS,events:SS,selectors:jS},Symbol.toStringTag,{value:"Module"})),No={teacherDataVerification:null,error:null,completed:!1},ES=()=>({data:q(Dn).teacherDataVerification,loading:q(fi.pending),error:q(Dn).error,completed:q(Dn).completed}),Bd=k(),Hd=k(),$S=z(async e=>{try{return(await Rh(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Le({from:Bd,to:$S});const fi=z(async()=>{try{return(await Ih()).data}catch{throw new Error("Не удалось войти")}}),Ud=k(),Dn=J(No).on(fi,e=>({...e,error:null})).on(fi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(fi.failData,(e,i)=>({...e,error:i.message})).on(Hd,(e,i)=>({...e,completed:i.completed})).on(Ud,()=>({...No})),PS={useTeacherDataVerification:ES},CS={getTeacherDataVerificationFx:fi},OS={postTeacherDataVerification:Bd,changeCompleted:Hd,clearStore:Ud},AS=Object.freeze(Object.defineProperty({__proto__:null,effects:CS,events:OS,selectors:PS},Symbol.toStringTag,{value:"Module"})),DS=[Vh,Ye,ig,og,mg,hS,vS,Vb,Qh,yS,Q1,TS,AS,dg,qh,lS],NS=()=>{DS.forEach(e=>{e.events.clearStore()})},IS=()=>{localStorage.removeItem(F.Token),localStorage.removeItem(F.JWT),localStorage.removeItem(F.JWTRefresh),sessionStorage.removeItem(F.Token),sessionStorage.removeItem(F.JWT),localStorage.removeItem(F.JWTRefresh)},rt=localStorage.getItem(F.Token)??"",lt=()=>JSON.parse(localStorage.getItem(F.SavePassword)??"true"),Tn=z(async e=>{try{const{data:i}=await ih(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await Ot.post("/old",n)}catch{}return IS(),lt()?(localStorage.setItem(F.Token,i.token),localStorage.setItem(F.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(F.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(F.Token,i.token),sessionStorage.setItem(F.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(F.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),wt=z(async e=>{try{const[i,n]=await Promise.all([nh(e.token),xa()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:Uh({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:lt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),Zn=z(async e=>{try{return(await sh(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Wd=z(()=>{lt()?(localStorage.removeItem(F.Token),localStorage.removeItem(F.JWT),localStorage.removeItem(F.JWTRefresh)):(sessionStorage.removeItem(F.Token),sessionStorage.removeItem(F.JWT),sessionStorage.removeItem(F.JWTRefresh)),NS()}),Vd=e=>{const i=localStorage.getItem(F.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(F.SavePassword,n.toString()),n},Gd=k(),Os=k(),qd=k(),Yd=k(),Jd=k();Le({from:Gd,to:Tn});C({clock:Tn.doneData,target:wt});Le({from:Os,to:Wd});rt&&lt()?wt({token:rt,jwt:localStorage.getItem(F.JWT)}):Wd();const RS={currentUser:null,error:null,isAuthenticated:!!(rt!=null&&rt.length),savePassword:lt(),loginEuz:""};Vd();const Xd=J(RS).on(wt,e=>({...e,error:null})).on(wt.doneData,(e,i)=>i).on(wt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(rt!=null&&rt.length),savePassword:lt()})).on(Tn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:lt()})).on(Os,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:lt()})).on(Jd,(e,{savePassword:i})=>({...e,savePassword:Vd(i)})).on(Zn,e=>({...e,error:null})).on(Zn.doneData,(e,i)=>({...e,loginEuz:i})).on(wt.failData,(e,i)=>({...e,error:i.message})).on(Yd,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(qd,e=>({...e,currentUser:null})),_e={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Xd);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(Tn.pending),error:i}}},Ct={login:Gd,logout:Os,changeSavePassword:Jd,clear:qd,update:Yd},LS={getUserFx:wt,getLoginEuzFx:Zn},zS=()=>{const e="0.0.1";localStorage.getItem(F.Version)!==e&&(localStorage.clear(),localStorage.setItem(F.Version,e),Ct.logout())},MS=p.div`
    max-height: 400px;
    overflow-y: auto;
`,FS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(fe,{text:e.message,image:t.jsx(Lu,{}),children:t.jsxs(O,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(xe,{}),t.jsx(Wl,{title:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:t.jsxs(O,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(zu,{})]})}),children:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(MS,{children:e.stack})})})]})})});class Kd extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(FS,{error:this.state.error}):this.props.children}}const BS=T?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",xi=Ot.create({baseURL:BS}),HS={headers:{"Content-Type":"application/json"}};xi.interceptors.request.use(fa);xi.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await Rn(xi)(e):e},Rn(xi));const US=async e=>{var n;const i=await xi.post("",{query:e},HS);if(Qd(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Qd(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Qd(e[i]))return!0}return!1}const WS=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Zd=k(),As=Mu({effect:async({currentUser:e})=>({...(await US(WS((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Xd}),VS=aa(As,null);C({clock:Zd,target:As});const GS=As.pending,qS={load:Zd},rE={peTeacher:VS,isLoading:GS},ep=k(),tp=z(wh);C({clock:ep,target:tp});const ip=J([]),lE=es(ip,e=>e.map(i=>i.divisionName));C({clock:tp.doneData,target:ip});function np(e){const{pathname:i}=Vt();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const YS=()=>{const{allRoutes:e}=He.useMenu();return e?t.jsxs(ra,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(la,{path:i,component:n,exact:!s},i)),t.jsx(qe,{exact:!0,to:ys})]}):null},JS=le.memo(YS),XS=p.div`
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
`,KS=()=>{const{open:e,content:i,position:n}=ff.useContextMenu(),s=l.useRef(null);return Jt(s,()=>Ie.close()),t.jsx(vn,{isOpen:e,children:t.jsx(XS,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},sp=200,QS=5e3,ZS=()=>{const{visibleNotifications:e}=it.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Pt.clearVisibleById(a)},sp)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??QS))},[e]),{handleClose:o,closing:i}},eT=p.div`
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
`,tT=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${sp/1e3}s forwards;

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
`;p.div`
    height: 4px;
    border-radius: 3px;
    background: ${w.blue.main};
    animation: ${({started:e,duration:i})=>e&&`decrease ${i/1e3}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`;const iT=()=>{const{visibleNotifications:e}=it.useLkNotifications(),{closing:i,handleClose:n}=ZS();return t.jsx(eT,{children:e.map(s=>t.jsx(tT,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Yl,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Io=p.div`
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
`,nT=({loading:e})=>{const{data:{user:i},error:n}=_e.useUser(),s=i?De(i==null?void 0:i.fullName):w.blue.main,o=()=>LS.getUserFx(JSON.parse(localStorage.getItem(F.Token)??"")),a=()=>Ct.logout();return n?t.jsx(Io,{$loading:!0,color:s,children:t.jsx(fe,{text:n,children:t.jsxs(O,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(ts,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(Io,{color:s,$loading:e,children:[t.jsx(dn,{short:!0,width:"100px"}),e&&t.jsx(Qe,{})]})},sT=p.div`
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
`,oT=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Ps.useStory();return t.jsx(sT,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():yt.changeCurrentPage({value:o+1})})})},aT=p(cn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,rT=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Ps.useStory();return t.jsxs(aT,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(oT,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Bu,{}):t.jsx(Fu,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Xe,{}),onClick:n})]})},lT=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,cT=p(Ze)`
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
`,dT=p.div`
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
    transform: ${({align:e})=>lT(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,pT=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=Gt();return t.jsxs(cT,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(cs,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(dT,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(W,{size:2,align:f,children:o}),t.jsx(oe,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),yt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},uT=p.div`
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
`,Ro=p.div`
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
`,hT=()=>{const{pages:e,isOpen:i,currentPage:n}=Ps.useStory(),s=l.useRef(null);Jt(s,()=>yt.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(vn,{isOpen:i,children:t.jsx(uT,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(rT,{pages:e.length,onClose:()=>yt.close(),playing:o}),t.jsx(Ro,{left:"15px",onClick:()=>{n!==0&&yt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(wi,{})}),t.jsx(pT,{setPlaying:a,currentPage:n,...r}),t.jsx(Ro,{right:"15px",onClick:()=>{n!==e.length-1?yt.changeCurrentPage({value:n+1}):yt.close(),a(!0)},children:t.jsx(ht,{})})]})})})},gT=()=>{const{data:{user:e}}=_e.useUser(),{notifications:i,loading:n,loaded:s}=it.useLkNotifications(),{settings:o}=Yt.useSettings(),[a]=ji([Ra.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{Ln.getElectronicInteraction(),a&&!a.status&&Pt.add(Td("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Ln.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(Ed(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,Pt.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{tt.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},fT=()=>{const{data:{user:e}}=_e.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(qu);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},xT=()=>{const e=jr(),{open:i}=te(),n=fT();return gT(),xt(),l.useEffect(()=>{n&&n&&i(t.jsx(Pc,{}),"Что нового")},[n]),{currentPage:e}},mT=p.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,bT=p.div`
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
`,vT=p.div`
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
`,yT=()=>{const{data:{user:e}}=_e.useUser(),i=l.useRef(null),{allRoutes:n}=He.useMenu(),{currentPage:s}=xT(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return np(i.current),t.jsxs(mT,{children:[t.jsx(nT,{loading:!e||!n}),t.jsx(hT,{}),t.jsx(q_,{}),t.jsxs(bT,{children:[t.jsx(D_,{headerVisible:o,currentPage:s}),t.jsx(vT,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(Kd,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(JS,{})})})}),t.jsx(Dw,{})]}),t.jsx(e1,{}),t.jsx(J_,{}),t.jsx(i1,{}),t.jsx(KS,{}),t.jsx(Fw,{}),t.jsx(iT,{})]})},_T=le.memo(yT),wT=()=>{const{data:{isAuthenticated:e,user:i}}=_e.useUser(),{data:n}=Ye.selectors.useData(),{settings:s}=Yt.useSettings();return np(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Re.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Ye.effects.getFx(),Re.getWorkerPosts(),ep()),qS.load())},[e,i]),l.useEffect(()=>{i&&(s?tt.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):jg.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(_T,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(ra,{children:[py.map(({path:o,Component:a},r)=>t.jsx(la,{path:o,component:a,exact:!0},r)),t.jsx(qe,{exact:!0,to:jl})]})})},jT=p.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;zS();const kT=()=>(xt(),t.jsx(Vy,{children:t.jsx(Hu,{basename:"/",children:t.jsx(jT,{children:t.jsx(Kd,{children:t.jsx(wT,{})})})})}));Uu.render(t.jsxs(le.StrictMode,{children:[t.jsx(A1,{}),t.jsx(kT,{})]}),document.getElementById("root"));export{U as $,Oj as A,wn as B,Be as C,Xd as D,ee as E,pn as F,O as G,xe as H,_t as I,Lv as J,vt as K,w as L,Q as M,Wm as N,Qe as O,Xt as P,oe as Q,ot as R,dt as S,W as T,Cs as U,ds as V,We as W,rE as X,Jg as Y,fe as Z,C_ as _,cg as a,re as a$,Zw as a0,RT as a1,Ee as a2,Ua as a3,PT as a4,Si as a5,_e as a6,c1 as a7,sr as a8,$T as a9,Ry as aA,Nl as aB,cy as aC,aE as aD,ft as aE,he as aF,qt as aG,Ke as aH,LT as aI,lE as aJ,Jh as aK,Us as aL,_n as aM,j0 as aN,pb as aO,FT as aP,ub as aQ,zT as aR,L0 as aS,MT as aT,fs as aU,vb as aV,ip as aW,BT as aX,wy as aY,sj as aZ,_j as a_,Ct as aa,$m as ab,yi as ac,Ti as ad,mS as ae,Pt as af,xS as ag,Ss as ah,nE as ai,sE as aj,NT as ak,Re as al,oE as am,rn as an,Ze as ao,qn as ap,Bl as aq,Dh as ar,Nh as as,Za as at,iE as au,Ts as av,er as aw,Ly as ax,My as ay,He as az,ue as b,Di as b$,Vc as b0,Ki as b1,dy as b2,WT as b3,Sy as b4,ky as b5,Lh as b6,Ve as b7,ye as b8,HT as b9,Es as bA,Bn as bB,K1 as bC,Xl as bD,k_ as bE,R as bF,An as bG,VT as bH,r1 as bI,JT as bJ,XT as bK,KT as bL,YT as bM,qT as bN,GT as bO,ve as bP,u_ as bQ,Kl as bR,ey as bS,Uw as bT,uy as bU,ly as bV,ry as bW,ay as bX,dc as bY,X1 as bZ,bn as b_,ws as ba,Ni as bb,Y as bc,Ie as bd,un as be,Jt as bf,Ra as bg,Ln as bh,qh as bi,Ne as bj,mt as bk,at as bl,hv as bm,uv as bn,Aw as bo,eE as bp,QT as bq,hw as br,oc as bs,$s as bt,tE as bu,Yt as bv,Ai as bw,Al as bx,m_ as by,De as bz,dg as c,as as c0,ZT as c1,U1 as c2,Il as c3,W1 as c4,V1 as c5,gc as c6,Lt as c7,ew as c8,Sc as c9,sy as cA,v_ as cB,AT as cC,jS as cD,kS as cE,DT as cF,Wh as cG,ET as cH,TT as cI,Zi as cJ,O1 as cK,cs as cL,Vh as cM,df as cN,IT as cO,Aj as cP,Mi as cQ,$j as cR,Pj as cS,Ej as cT,zc as cU,yS as cV,Z1 as ca,$c as cb,M1 as cc,x1 as cd,_w as ce,fw as cf,xt as cg,rc as ch,hc as ci,Fr as cj,iw as ck,Hl as cl,ao as cm,ca as cn,an as co,gy as cp,hy as cq,OT as cr,CT as cs,Ml as ct,zl as cu,UT as cv,cn as cw,x_ as cx,LS as cy,it as cz,Wr as d,rg as e,ag as f,V as g,OS as h,H as i,PS as j,CS as k,se as l,Ii as m,lo as n,pt as o,US as p,_ as q,Ka as r,me as s,pr as t,te as u,et as v,Zg as w,zh as x,g_ as y,qS as z};
