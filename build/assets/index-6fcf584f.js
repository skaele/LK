import{F as Je,a as fi,b as _t,c as en,H as Cn,d as $t,y as M,u as k,p as J,e as q,x as $,S as Le,m as Kn,r as l,s as p,j as t,f as Xe,I as tp,g as ip,h as np,i as sp,k as zo,A as Qn,l as D,n as op,o as we,q as Mt,t as jn,v as ap,w as rp,R as le,z as wt,B as vi,C as pt,L as Z,D as xi,E as lp,G as cp,J as tn,K as Ut,M as dp,N as pp,O as ut,P as He,Q as Mo,T as Wt,U as Fo,V as Zn,W as lt,X as Bo,Y as Ho,Z as _i,_ as Uo,$ as Wo,a0 as up,a1 as hp,a2 as gp,a3 as fp,a4 as Ge,a5 as Ft,a6 as xp,a7 as mp,a8 as bp,a9 as yp,aa as vp,ab as _p,ac as X,ad as wp,ae as Vo,af as Go,ag as jp,ah as kp,ai as qo,aj as Ct,ak as es,al as Yo,am as Sp,an as Tp,ao as Ep,ap as Jo,aq as Pp,ar as nn,as as $p,at as Xo,au as Ko,av as Qo,aw as Zo,ax as Cp,ay as Op,az as Ns,aA as ea,aB as Vi,aC as Ap,aD as Dp,aE as oi,aF as ta,aG as ia,aH as ne,aI as ts,aJ as Is,aK as na,aL as Np,aM as Ip,aN as Rp,aO as Lp,aP as Bi,aQ as zp,aR as Mp,aS as Fp,aT as Bp,aU as Hp,aV as Up,aW as Wp,aX as Vp,aY as Gp,aZ as qp,a_ as Yp,a$ as Jp,b0 as Xp,b1 as Kp,b2 as Qp,b3 as Zp,b4 as eu,b5 as tu,b6 as iu,b7 as nu,b8 as su,b9 as ou,ba as sa,bb as au,bc as ru,bd as lu,be as cu,bf as du,bg as pu,bh as uu,bi as is,bj as hu,bk as gu,bl as fu,bm as xu,bn as mu,bo as bu,bp as yu,bq as vu,br as _u,bs as oa,bt as wu,bu as On,bv as ju,bw as ku,bx as Su,by as Rs,bz as Tu,bA as Eu,bB as Pu,bC as $u,bD as Ls,bE as Cu,bF as Ou,bG as Au,bH as Du,bI as Nu,bJ as Iu,bK as Ru,bL as aa,bM as ra,bN as Lu,bO as zu,bP as Mu,bQ as Fu}from"./vendor-4355a046.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Bu="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Hu=3,sn=["home","settings","all"],la=["home","settings","download-agreements","all"],ca="https://lk.eseur.ru/signup",Uu="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},It={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},yT={Зачтено:w.green,"Не зачтено":w.red,Отлично:w.green,Хорошо:w.blue,Удовлетворительно:w.orange,Неудовлетворительно:w.red,"Не явился":w.red,default:w.red},vT={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",Wu="2023-10-03T10:43:43",jt={info:{icon:Je,color:"blue",title:"Информация"},alert:{icon:fi,color:"orange",title:"Внимание!"},failure:{icon:_t,color:"red",title:"Ошибка"},success:{icon:en,color:"green",title:"Успешно"},tip:{icon:Cn,color:"grey",title:"Подсказка"},hint:{icon:Cn,color:"white",title:"Подсказка"},hrFailure:{icon:_t,color:"red",title:"Ошибка"}},Vu={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Gu=["image/jpeg","image/jpg","image/png","application/pdf"],qu=10,da="(max-width: 766px)",Yu="(min-width: 767px)",pa="(max-width: 1000px)",ua="(max-width: 1380px)",ha="(min-width: 1381px)",ee={isMobile:`@media ${da}`,isNotMobile:`@media ${Yu}`,isTablet:`@media ${pa}`,isSmallTesktop:`@media ${ua}`,isMiddleTesktop:`@media ${ha}`},Ju=[{query:da,title:"isMobile",value:"mobile"},{query:pa,title:"isTablet",value:"tablet"},{query:ua,title:"isSmallDesktop",value:"smallDesktop"},{query:ha,title:"isMiddleDesktop",value:"middleDesktop"}],ns={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},S=!window.location.port||window.location.port==="80"||window.location.port==="4001";console.log("Running on production",S);var F=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(F||{});const Ke=()=>localStorage.getItem(F.JWT)||sessionStorage.getItem(F.JWT),Vt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Xu=()=>JSON.parse(localStorage.getItem(F.SavePassword)??"true"),An=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Pt.logout();else{n._retry=!0;const h=localStorage.getItem(F.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await ih(h??"");return Xu()?(localStorage.setItem(F.JWT,f),localStorage.setItem(F.JWTRefresh,g)):(sessionStorage.setItem(F.JWT,f),sessionStorage.setItem(F.JWTRefresh,g)),e(n)}catch{Pt.logout()}}return Promise.reject(i)},ga=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${Ke()}`,e),Ku=`${R}/lk_api.php`,Qu="https://api.mospolytech.ru/serviceforfrontpersonnelorders",W=$t.create({baseURL:Ku,withCredentials:!0}),ue=$t.create({baseURL:Qu});ue.interceptors.request.use(ga);!S&&ue.interceptors.response.use(e=>e,An(ue));function ss(e){return e.isAxiosError}function V(){return localStorage.getItem(F.Token)??sessionStorage.getItem(F.Token)??""}const Zu=({login:e,password:i})=>W.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),eh=e=>W.get(`?getUser&token=${e}`),th=e=>W.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),_T=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",V()),W.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},wT=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),W.post(`?changeADPass=1&token=${V()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},jT=async e=>{const i=new FormData;return i.set("email",e),i.set("token",V()),W.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},kT=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",V()),W.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ih=async e=>{const{data:i}=await $t.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},nh=e=>W.get(`?getSchedule&group=${e}&token=${V()}`),sh=e=>W.get(`?getScheduleTeacher&fio=${e}&token=${V()}`),oh=()=>W.get(`?getSchedule&session=1&token=${V()}`),ah=e=>W.get(`?getScheduleTeacher&fio=${e}&session=1&token=${V()}`),rh=()=>W.get(`?getPayments&token=${V()}`),lh=e=>W.get(`?signAgreement=${e}&token=${V()}`),ch=e=>W.get(`?signContract=${e}&token=${V()}`),dh=async({semestr:e})=>{var i,n;return(n=(i=await W.get(`?getAcademicPerformance&semestr=${e}&token=${V()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},ph=e=>W.get(`?getMessages&token=${V()}&id=${e}`),uh=async()=>(await W.get(`?getPEPStatus&token=${V()}`)).data,hh=async()=>(await W.get(`?setPEPAccept&token=${V()}`)).data,gh=()=>W.get(`?getContactData&token=${V()}`),fh=e=>{const i=new FormData;i.set("token",V()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return W.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},xh=()=>W.get(`?getRequestHighComfort&token=${V()}`),ST=e=>{const i=new FormData;i.set("token",V()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return W.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},mh=()=>W.get(`?getAppRequests&token=${V()}`),fa=()=>W.get(`?getAppData&token=${V()}`),bh=async()=>await ue.get(`/Dismissal.GetAllHistory?employeeGuid=${Vt(Ke()??"").IndividualGuid}`),yh=async()=>{const{data:e}=await ue.get("/AnotherPlaceWork.GetDivisions");return e.divisions},vh=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",V()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await W.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},_h=()=>ue.get(`?getAppRequests&token=${V()}`),wh=()=>ue.get(`?getAppData&token=${V()}`),jh=e=>ue.post("Dismissal.Post",e),kh=async()=>(await W.get(`?getAdminLinks&token=${V()}`)).data,Sh=async e=>(await W.get(`?PDinfo&token=${V()}`)).data,xa=()=>W.get(`?getNotification&token=${V()}`),Th=e=>W.get(`?viewNotification=${e}&token=${V()}`),Eh=Object.freeze(Object.defineProperty({__proto__:null,get:xa,view:Th},Symbol.toStringTag,{value:"Module"})),ma=()=>W.get(`?getDocList&token=${V()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),Ph=e=>W.get(`?viewDoc=${e}&token=${V()}`),$h=Object.freeze(Object.defineProperty({__proto__:null,get:ma,view:Ph},Symbol.toStringTag,{value:"Module"})),Ch=(e,i,n,s)=>W.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${V()}`),Oh=e=>W.get(`?getDivs=${e}&page=1&token=${V()}`),Ah=()=>W.get(`?getCheckData&token=${V()}`),Dh=e=>{const i=new FormData;i.set("token",V()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return W.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Nh=(e,i,n,s)=>W.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${V()}`),Ih=async e=>await W.get(`?getGroups=${e}&perpage=30&page=1&token=${V()}`),Rh=async()=>(await W.get(`?getAlerts&token=${V()}`)).data,Lh=()=>W.get(`?getNotifications&token=${V()}`),zh=e=>W.get(`?clearNotificationById=${e}&token=${V()}`),Mh=()=>W.get(`?clearAllNotifications&token=${V()}`);function Fh({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const zs={data:null,preparedData:null,loading:!1,error:null},on=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Bu})=>{const o=e??zs,a=()=>({data:q(u).data,preparedData:q(u).preparedData,loading:q(r.pending),error:q(u).error}),r=M(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=M(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),u=J(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...zs}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function Bh(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Hh=on({api:{get:dh},prepareData:Bh}),qe=on({api:{get:kh}}),Uh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Wh=on({api:{get:Rh},prepareData:Uh}),Ms={message:"",type:"success",isOpen:!1,time:2e3},ba=k(),ya=k(),va=k();J(Ms).on(ba,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ya,(e,{isOpen:i})=>({...e,isOpen:i})).on(va,()=>({...Ms}));const ht={evokePopUpMessage:ba,openPopUpMessage:ya,clearStore:va},Fs={listApplication:null,error:null,dataUserApplication:null},ai=M(async()=>{const e=await _h();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Hi=M(async()=>{const e=await wh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),an=M(async e=>await jh(e));$({clock:an.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ht.evokePopUpMessage});$({clock:an.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:ht.evokePopUpMessage});const Vh=k();Le({from:an.doneData,to:ai});J(Fs).on(Hi,e=>({...e,error:null})).on(Hi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Hi.failData,(e,i)=>({...e,error:i.message})).on(ai,e=>({...e,error:null})).on(ai.doneData,(e,i)=>({...e,listApplication:i})).on(ai.failData,(e,i)=>({...e,error:i.message})).on(Vh,()=>({...Fs}));const Gh={getApplicationsFx:ai,getUserDataApplicationsFx:Hi,postApplicationFx:an},Bs={message:"",type:"success",isOpen:!1,time:2e3},qh=()=>q(Yh),_a=k(),wa=k(),ja=k(),Yh=J(Bs).on(_a,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(wa,(e,{isOpen:i})=>({...e,isOpen:i})).on(ja,()=>({...Bs})),ka={usePopUpMessage:qh},H={evokePopUpMessage:_a,openPopUpMessage:wa,clearStore:ja},Jh=Object.freeze(Object.defineProperty({__proto__:null,events:H,selectors:ka},Symbol.toStringTag,{value:"Module"})),Hs={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},ri=M(async()=>{const e=await bh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),li=M(async()=>{const e=await mh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),ci=M(async()=>{const e=await fa();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),os=M(async e=>{const i=await vh(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Xh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(Kh);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(ci.pending),workerLoading:q(Kn(ri.pending,Gh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},Sa=k();Le({from:os.doneData,to:li});$({clock:os.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:H.evokePopUpMessage});const Kh=J(Hs).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,dataUserApplication:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(li,e=>({...e,error:null})).on(li.doneData,(e,i)=>({...e,listApplication:i})).on(li.failData,(e,i)=>({...e,error:i.message})).on(ri,e=>({...e,error:null})).on(ri.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(ri.failData,(e,i)=>({...e,error:i.message})).on(Sa,()=>({...Hs})),ye={useApplications:Xh},Re={getApplicationsFx:li,getUserDataApplicationsFx:ci,postApplicationFx:os,getWorkerPosts:ri},Qh={clearStore:Sa},Zh=Object.freeze(Object.defineProperty({__proto__:null,effects:Re,events:Qh,selectors:ye},Symbol.toStringTag,{value:"Module"})),Us={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},eg=()=>q(tg),Ta=k(),Ea=k(),Pa=k(),tg=J(Us).on(Ta,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(Ea,e=>({...e,isOpen:!1})).on(Pa,()=>({...Us})),$a={useConfirm:eg},st={evokeConfirm:Ta,closeConfirm:Ea,clearStore:Pa},ig=Object.freeze(Object.defineProperty({__proto__:null,events:st,selectors:$a},Symbol.toStringTag,{value:"Module"})),ng=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=M(async u=>{const h=await i.post(u);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});$({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:H.evokePopUpMessage}),$({clock:a.failData,fn:u=>({message:`${u.message}`,type:"failure"}),target:H.evokePopUpMessage}),$({clock:a.doneData,target:Re.getApplicationsFx});const r=M(async u=>{if(i.get)try{return{...(await i.get(u)).data}}catch(h){throw new Error(h)}return n.data}),c=k(),d=J(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:sg,events:og,selectors:ag}=ng({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:gh,post:fh}}),rg=Object.freeze(Object.defineProperty({__proto__:null,effects:sg,events:og,selectors:ag},Symbol.toStringTag,{value:"Module"})),Ca=k(),Oa=k(),Aa=k(),Da=k(),wi=M(async()=>{const i=(await hh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});$({clock:wi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:H.evokePopUpMessage});$({clock:wi.doneData,fn:()=>!0,target:Aa});$({clock:wi.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:H.evokePopUpMessage});const mi=M(async()=>{try{return(await uh())[0]}catch(e){throw new Error(e)}});$({clock:Oa,target:wi});$({clock:Ca,target:mi});const Na=k(),lg=mi.pending,cg=wi.pending,dg=J(!1).on(Da,(e,i)=>i),pg=J(!1).on(Aa,(e,i)=>i),ug=J(null).on(mi,()=>null).on(mi.failData,(e,i)=>i.message),hg=J(null).on(mi.doneData,(e,i)=>i).on(Na,()=>null),Ia={$error:ug,$electronicInteractionStore:hg,$completed:dg,$done:pg,$loading:lg,$workerLoading:cg},Dn={getElectronicInteraction:Ca,postElectronicInteraction:Oa,changeCompleted:Da,clearStore:Na},gg=Object.freeze(Object.defineProperty({__proto__:null,events:Dn,stores:Ia},Symbol.toStringTag,{value:"Module"})),fg="Sep 07 2023 12:00:00 GMT+0300",Ra="Sep 08 2023 12:00:00 GMT+0300",TT=e=>{const i=new Date;return i<new Date(fg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(Ra)?"Подача заявок закрыта":""},se=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Ws=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),se(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),se(n,"extraWeird")}},Ri=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Ws(-30*11),maxValueInput:Ws(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Li={kvdCert:Ri({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Ri({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Ri({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Ri({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Te=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const d=new Date(a.minValueInput);if(c<d)return!0}if(a.maxValueInput){const d=new Date(a.maxValueInput);if(c>d)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},xg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},mg=()=>Object.keys(Me).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),La=(e="")=>({[e]:{...mg(),[Me["settings-appearance"]]:{id:Me["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Me["settings-home-page"]]:{id:Me["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Me["settings-customize-menu"]]:{id:Me["settings-customize-menu"],property:{pages:sn}},[Me["settings-notifications"]]:{id:Me["settings-notifications"],property:xg}}});var Me=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Me||{});const Nn={settings:La(),error:null,completed:!1};let Ae;const bg=()=>({settings:q(Ui).settings[Ae],error:q(Ui).error,completed:q(Ui).completed}),yg=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},za=M(e=>{Ae=e;const i=JSON.parse(localStorage.getItem(F.NewSettings)??"{}")[Ae];return yg(i,La(e)[e])}),Ma=k(),Fa=k(),Ba=k(),Ui=J(Nn).on(Fa,(e,i)=>({...e,completed:i.completed})).on(za.doneData,(e,i)=>({...e,settings:{[Ae]:i}})).on(Ma,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Ae]:{...e.settings[Ae],[i]:{...e.settings[Ae][i],property:{...e.settings[Ae][i].property,[n]:s}}}}})).on(Ba,()=>({...Nn}));Ui.watch(e=>{if(e!==Nn&&Ae){const i=JSON.parse(localStorage.getItem(F.NewSettings)??JSON.stringify({}));i[Ae]=e.settings[Ae],localStorage.setItem(F.NewSettings,JSON.stringify(i))}});const Gt={useSettings:bg},ji={updateSetting:Ma,changeCompleted:Fa,clearStore:Ba},vg={getLocalSettingsFx:za},gt=()=>{var a,r;const{settings:e}=Gt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),ji.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},_g=p.button`
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:m,direction:x="horizontal",isActive:b=!0,height:y,notActiveClickMessage:O,flipped:I,...j}=e,T=A=>{b?s==null||s(A):O&&H.evokePopUpMessage({type:"failure",message:O,time:1e4})};return t.jsxs(_g,{text:!!n,onClick:T,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:u,direction:x,isActive:b,fixedInMobile:m,height:y,flipped:I,...j,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const In=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Vs=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},wg=p.div`
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
`,jg=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],rn=p.div.withConfig({shouldForwardProp:e=>!jg.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Vs(n):In(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?In(i):Vs(n)};
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
`,kg=p.div`
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
`;function Y({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(kg,{pulse:s,size:i,shape:e,margin:n})}const Sg=p(rn)`
    height: 100%;
`,Tg=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(Sg,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(Y,{...o,key:a}))}),xt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Eg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:xt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:xt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:xt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:xt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:xt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:xt(n),children:i});default:return t.jsx("h1",{className:"title",style:xt(n),children:i})}}const Pg=p.div`
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
`,$g=p.span`
    color: var(--red);
    margin-right: 5px;
`,Cg=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function U(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(Pg,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(Eg,{size:o,width:r,children:[a&&t.jsx($g,{children:"*"}),t.jsx(Cg,{width:r,children:s})]})]}):null}const Og=(e,i,n)=>n?"#fff":e?w[jt[i].color].dark3:w[jt[i].color].light3,Ag=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Og(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[jt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[jt[e].color][i?"main":"light2"]};
    }
`,Dg=()=>t.jsx(Tg,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function Q({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f=!1,align:g="left",visible:m=!0,loading:x=!1}){if(!m)return null;const{theme:b}=gt();return t.jsxs(Ag,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f,children:[t.jsx(U,{size:4,align:g,icon:n===null?null:n??jt[e].icon({}),children:a??jt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Xe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),x&&t.jsx(Dg,{})]})}p.div`
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
`;const Ng=p.div`
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
`,Ig=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(Ng,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),fe=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Rg="/assets/sad-emoji-0c60bf90.gif",oe=p.span`
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
`,Lg=p.div`
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
`;function ge({text:e,image:i,size:n,children:s}){return t.jsxs(Lg,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Rg,alt:"груфтим("}):i}),t.jsx(oe,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const zg="/assets/loading-c8041cd3.gif",Mg=p.img`
    width: 40px;
`;function Qe(e){return t.jsx(Mg,{...e,src:zg,alt:"loading",className:"loading-circle"})}const Fg="/assets/logo-4d9aa449.png",Bg="/assets/mospolytech-logo-white-b1e4f630.png",Hg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function ln({width:e,className:i,short:n=!1}){return t.jsx(Hg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Bg:Fg,alt:"Logo"})})}const Ug=p.img``;function as({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(Y,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Ug,{src:i,alt:o,height:n,width:s})}const Wg=p.div`
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
`;function Ha({size:e,color:i}){return t.jsx(Wg,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Vg=p.div`
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
`;function Gg(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Vg,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(U,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const qg=p.button`
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
`,kt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:m=!1,repeatable:x=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(H.evokePopUpMessage({message:c,type:"success"}),x&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const y=()=>{if(f&&!h&&!g)return i();b&&H.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(qg,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:f&&!h&&!m,onClick:y,isDone:h,width:n,height:s,repeatable:x,tabIndex:f&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(tp,{})," ",r]}):g?t.jsx(Qe,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Gi={small:"32px",middle:"36px",big:"44px"},Fe=e=>({size:i})=>e[i],Yg=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Jg=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},Xg={groupMask:Yg,phoneMask:Jg},Kg=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const g=l.useCallback(y=>y.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:y=>{y.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(y=>y==="password"?"text":"password"),handleOnChange:y=>{if(i(c?r?r(y.target.value,e):n==="tel"?Xg.phoneMask(y):n==="email"?g(y.target.value):y.target.value:y.target.value),n==="date"&&(o||a)){const O=new Date(y.target.value);let I=!1;if(o){const j=new Date(o);I=O<j}if(a&&!I){const j=new Date(a);I=O>j}f(I)}i(y.target.value)}}},Qg=p.div`
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
        height: ${Fe(Gi)};
        max-height: ${Fe(Gi)};
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
`,ct=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:m,alertMessage:x,loading:b=!1,isActive:y=!0,inputAppearance:O=!0,mask:I=!1,autocomplete:j=!1,minValue:T=void 0,maxValue:A=void 0,maxLength:L=void 0,hideCross:N=!1,stepSize:K=.1,size:z="middle"}=i,{inputType:ie,buttonOnClick:ce,danger:Pe,handleOnChange:je,phoneMaskKeyDown:Ve}=Kg(s,o,g,m,T,A,h,I),he=s&&g==="date"?ip(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(Qg,{leftIcon:!!a,isActive:y,inputAppearance:O,width:d,danger:Pe,minWidth:u,size:z,children:[t.jsx(U,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(Q,{type:"alert",visible:!!x,icon:t.jsx(np,{}),title:x??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:T,max:A,maxLength:L,step:K??void 0,type:ie,placeholder:f,value:he,autoComplete:j?"on":"off",onKeyDown:Ce=>g==="tel"&&Ve(Ce),onChange:je,required:c,readOnly:!y,ref:n}),g!=="password"?!!(s!=null&&s.length)&&O&&(b?t.jsx(Qe,{}):!N&&t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ie==="password"?t.jsx(sp,{}):t.jsx(zo,{}),tabIndex:-1,onClick:ce})]})}),Zg=p.div`
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
`,ef="/assets/thinking-emoji-f3c10f79.gif",tf=["loading"],nf=p.div.withConfig({shouldForwardProp:e=>!tf.includes(e)})`
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
`,Ue=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(nf,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ge,{text:n,image:a&&ef,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Qn,{})})})}):t.jsx(Qe,{})}),t.jsx("div",{className:"content",children:e})]})),sf=p.a`
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
`,of=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(sf,{text:!!i,onClick:m=>f&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),ki=l.memo(of),rs=p.div`
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
`,af=p.a`
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
`,rf=({title:e,link:i,type:n})=>t.jsxs(af,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(D,{}):t.jsx(op,{})}),t.jsx("div",{className:"title",children:e})]}),lf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),cf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},df=()=>we(pf),Ua=k(),Wa=k(),Va=k(),pf=J(cf).on(Ua,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:lf(n,220,s),open:!0,content:i,type:o})).on(Wa,e=>({...e,open:!1})).on(Va,(e,{position:i})=>({...e,position:i})),Ie={open:Ua,close:Wa,changePosition:Va},uf={useContextMenu:df},hf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},kn=new Set,Ga=(e,i)=>{l.useEffect(()=>{const n=o=>{kn.add(o.which),!e.slice(0,e.length-1).find(r=>!kn.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{kn.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Ze=p.div`
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
`,C=p.div`
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
`,be=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},qa=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=be(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Ya=e=>/[A-Za-z]/.test(e),gf=p.span`
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
`,Ja=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Ya(e))return null;const s=qa(e),o=()=>i(s);return t.jsxs(oe,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(gf,{tabIndex:10,children:s})]})};function qt(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function dt(e,i,n=0){return e>i?n:e<n?i:e}const ff=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,xf=p(Ze)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,mf=p.div`
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
`,Xa=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[m,x]=l.useState(0),[b,y]=l.useState(!1),O=l.useRef(null),I=l.useRef(null),j=l.useRef(null);qt(O,()=>y(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var N;return(N=j.current)==null?void 0:N.focus()},50)},[c]);const T=N=>{var K,z;(((a==null?void 0:a.length)??0)>0||o)&&y(!0),N.key==="ArrowDown"?((K=I.current)==null||K.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&x(dt(m+1,((a==null?void 0:a.length)??1)-1,0))):N.key==="ArrowUp"?((z=I.current)==null||z.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&x(dt(m-1,((a==null?void 0:a.length)??1)-1,0))):N.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),y(!1),h==null||h(a==null?void 0:a[m??0])):x(0)},A=N=>()=>{x(N),d((a==null?void 0:a[N].title)??""),y(!1),h==null||h(a==null?void 0:a[N])},L=()=>{a!=null&&a.length&&y(!0)};return t.jsxs(ff,{width:i,onKeyDown:T,onMouseDown:L,ref:O,children:[t.jsx(ct,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(Mt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:j}),t.jsx(Ja,{setValue:d,value:e,visible:f}),b&&t.jsx(xf,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:T,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:N,icon:K},z)=>{const ie=m===z;return t.jsxs(mf,{onClick:A(z),ref:ie?I:null,selected:ie,children:[K&&t.jsx("div",{className:"icon",children:K}),t.jsx("span",{children:N})]},N+z)})})]})},cn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Gs={small:"30px",middle:"44px",big:"68px"},Ka={small:"8px",middle:"10px",big:"16px"},bf={small:"0.8rem",middle:"0.9rem",big:"1rem"},yf={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},vf=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Fe(Gs)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Fe(Ka)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Fe(Gs)};
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
`,_f=p.div`
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
        font-size: ${Fe(bf)};
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
            font-size: ${Fe(yf)};
        }
    }
`,wf=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(_f,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),jf=l.memo(wf),kf=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Fe(Ka)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,Sf=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(kf,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},Tf=l.memo(Sf),Ef=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=cn();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(vf,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Tf,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(jf,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},ls=l.memo(Ef),Pf=300,Qa=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Pf})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,f]},St=p.span`
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
`,$f=p.div`
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
`,ft=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs($f,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(St,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Za=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=y=>{n(i(y,e))},f=()=>{n(null)},[g,m,x]=Qa({onDebounce:h,onClear:f}),b=y=>{m(y),o&&o(y)};return t.jsx(Xa,{value:g??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?x:!1,hints:a,width:r})},Cf=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Zg,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),er=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Of=p(er)`
    background: var(--almostTransparentOpposite);
`,Af=p(er)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,tr=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Ee,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Of,{},a)),t.jsx(Af,{color:n,current:i})]}),Df=p.label`
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
`,Nf=p.div`
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
`,Ye=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(Df,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(Nf,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(en,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},ir=e=>e.split("/")[1],If=e=>e*1024*1024,Rf=(e,i)=>(i??Gu).indexOf(e.type)!==-1,qs=(e,i,n,s,o=qu)=>{if(n&&i.length+e.length>n)return H.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Rf(e[a],s)?e[a].size>If(o)?(H.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),H.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>ir(r))}`,type:"failure",time:5e3}),i)},Lf=p.label`
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
`,Ne=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},zf=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=x=>{const b=x.target.files;b!=null&&b.length&&n(qs(b,e,i,o,a))},h=x=>{x.preventDefault()},f=x=>{x.preventDefault(),d(!1);const b=x.dataTransfer.files;b.length&&n(qs(b,e,i,o,a))},g=x=>{x.preventDefault(),d(!0)},m=x=>{x.preventDefault(),d(!1)};return t.jsxs(Lf,{isActive:s,showPulse:c,onDragOver:x=>s&&h(x),onDragEnter:x=>s&&g(x),onDragLeave:x=>s&&m(x),onDrop:x=>s&&f(x),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(jn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(jn,{className:"icon-1"}),t.jsx(jn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(oe,{align:"center",children:t.jsx(Ne,{words:[`Форматы: ${o?o.map(x=>ir(x)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Mf=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Ff=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Bf=p.div`
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
`,Hf=({file:e,files:i,setFiles:n})=>{const{open:s}=te(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(as,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>st.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Ff(r,e.name,i))});return t.jsxs(Bf,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(ap,{}):t.jsx(rp,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(oe,{fontSize:"0.7em",children:Mf(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Xe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Uf=({files:e,setFiles:i})=>t.jsx(Ee,{title:"Список файлов",visible:!!e.length,onDelete:()=>st.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Hf,{file:n,files:e,setFiles:i},n.name))}),nr=e=>t.jsxs(Ee,{gap:12,children:[t.jsx(zf,{...e}),t.jsx(Uf,{files:e.files,setFiles:e.setFiles})]}),Wf=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Vf=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Wf,{children:[t.jsx(Ye,{...e}),n&&t.jsx(nr,{...i})]}),Gf=p.div`
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
`,sr=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=se(u,"extraWeird")}return t.jsxs(Gf,{children:[t.jsx(U,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(Q,{title:"Внимание",type:"alert",icon:t.jsx(fi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(ct,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(ct,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},qf=e=>{var x,b,y;const{width:i}=cn(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,d]=l.useState(0),[u,h]=l.useState(0),f=((x=n.current)==null?void 0:x.clientWidth)??1,g=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(f+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(y=n.current)==null?void 0:y.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:d,pageOffset:f,amountOfPages:g,currentPage:u,setCurrentPage:h,handleScroll:O=>{h(Math.ceil(O.currentTarget.scrollLeft/(f+(e??0))))}}},Yf=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:f,showPages:g,innerPadding:m,minWidth:x,wrapOnMobile:b,position:y,direction:O="vertical",verticalAlign:I="top",horizontalAlign:j="left",scroll:T=!0,visible:A=!0,...L}=e;if(!A)return null;const{listRef:N,leftArrow:K,rightArrow:z,handleScroll:ie,setScrollLeft:ce,pageOffset:Pe,amountOfPages:je,currentPage:Ve}=qf(s);return t.jsxs(wg,{padding:r,position:y,width:o,minWidth:x,height:a,children:[t.jsxs(U,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(_,{icon:t.jsx(wt,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(_,{width:"50px",height:"15px",background:w.blue.transparent3,textColor:w.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(rn,{verticalAlign:I,horizontalAlign:j,direction:O,ref:N,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:T,wrapOnMobile:b,onScroll:ie,...L,children:n}),(z||K)&&t.jsxs("div",{className:"bottom-wrapper",children:[K&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(vi,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{ce(he=>{var Ce;return dt(he-Pe-(s??0),((Ce=N.current)==null?void 0:Ce.scrollWidth)??0)})}}),g&&t.jsx(tr,{direction:"horizontal",current:Ve,amount:je}),z&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(pt,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{ce(he=>{var Ce;return dt(he+Pe+(s??0),((Ce=N.current)==null?void 0:Ce.scrollWidth)??0)})}})]})]})},Ee=le.memo(Yf),Jf=()=>t.jsx("div",{className:"left",children:t.jsxs(Ee,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(ln,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Ee,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:_s,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(xi,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:El,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(lp,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Tl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(fi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Pl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(fi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(fe,{}),t.jsx(Z,{to:Sl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(cp,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(ki,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(tn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),Xf=()=>{const{search:e}=Ut();return le.useMemo(()=>new URLSearchParams(e),[e])},Kf=()=>{const e=Xf(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=Pt.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},m=b=>{Pt.changeSavePassword({savePassword:b})},x=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:m,handleKeyPress:g,handleLogin:x,setPassword:r,setLogin:o}},Qf=()=>{const{loading:e,error:i,data:n}=ve.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:f,setLogin:g}=Kf();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Ee,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(ln,{width:"50px",short:!0,className:"logo second"}),t.jsx(C,{jc:"space-between",children:t.jsx(U,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(Q,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Ee,{gap:16,scroll:!1,children:[t.jsx(U,{size:4,align:"left",children:"Вход"}),t.jsx(oe,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(Q,{type:"failure",visible:!!i,children:i}),t.jsx(Q,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(ct,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(ct,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Ye,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(kt,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Zf=p(Ze)`
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
`,ex=()=>{const{data:{isAuthenticated:e}}=ve.useUser();return t.jsxs(Zf,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Jf,{}),t.jsx(Qf,{})]})},tx=p.div`
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
`,ix=()=>t.jsx(tx,{children:t.jsx(ex,{})}),Se=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ge,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(tn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),nx="modulepreload",sx=function(e){return"/"+e},Ys={},v=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=sx(a),a in Ys)return;Ys[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":nx,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},ox=l.lazy(()=>v(()=>import("./index-7f358768.js"),["assets/index-7f358768.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),ax=l.lazy(()=>v(()=>import("./index-2b063df8.js"),["assets/index-2b063df8.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-05f1dac2.js"])),Js=l.lazy(()=>v(()=>import("./index-d9d48a5d.js"),["assets/index-d9d48a5d.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js"])),rx=l.lazy(()=>v(()=>import("./index-6db3207c.js"),["assets/index-6db3207c.js","assets/vendor-4355a046.js","assets/get-default-subdivision-17957fb0.js"])),lx=l.lazy(()=>v(()=>import("./index-e5483cc0.js"),["assets/index-e5483cc0.js","assets/vendor-4355a046.js","assets/index-f1ce6e42.js","assets/form-da6d455e.js","assets/find-current-in-select-ba4611d5.js","assets/send-form-0fc83150.js"])),cx=l.lazy(()=>v(()=>import("./form-da6d455e.js"),["assets/form-da6d455e.js","assets/vendor-4355a046.js","assets/find-current-in-select-ba4611d5.js","assets/send-form-0fc83150.js"])),or=l.lazy(()=>v(()=>import("./index-7d0d4909.js"),["assets/index-7d0d4909.js","assets/vendor-4355a046.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Rb),void 0));const dx=l.lazy(()=>v(()=>import("./index-67b2488e.js"),["assets/index-67b2488e.js","assets/vendor-4355a046.js","assets/index-1587e2a5.js"])),px=l.lazy(()=>v(()=>import("./index-f101bbf6.js"),["assets/index-f101bbf6.js","assets/vendor-4355a046.js","assets/index-19575c1b.js"])),ux=l.lazy(()=>v(()=>import("./index-480709ec.js"),["assets/index-480709ec.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),hx=l.lazy(()=>v(()=>import("./index-b78e2aed.js"),["assets/index-b78e2aed.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js"])),gx=l.lazy(()=>v(()=>import("./index-3812f593.js"),["assets/index-3812f593.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-05f1dac2.js"])),fx=l.lazy(()=>v(()=>import("./index-d41a18b7.js"),["assets/index-d41a18b7.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-05f1dac2.js"])),xx=l.lazy(()=>v(()=>import("./index-8ea432d8.js"),["assets/index-8ea432d8.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-05f1dac2.js"])),mx=l.lazy(()=>v(()=>import("./index-3a9e5124.js"),["assets/index-3a9e5124.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-05f1dac2.js"])),bx=l.lazy(()=>v(()=>import("./index-ef3c9965.js"),["assets/index-ef3c9965.js","assets/vendor-4355a046.js","assets/ui-473dfc85.js","assets/index-8c818fc0.js"])),yx=l.lazy(()=>v(()=>import("./index-b0ee57cb.js"),["assets/index-b0ee57cb.js","assets/vendor-4355a046.js","assets/ui-473dfc85.js"])),vx=l.lazy(()=>v(()=>import("./index-4c4aa31b.js"),["assets/index-4c4aa31b.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-05f1dac2.js"])),_x=l.lazy(()=>v(()=>import("./index-19d70a70.js"),["assets/index-19d70a70.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-05f1dac2.js"])),wx=l.lazy(()=>v(()=>import("./index-b2fb6b89.js"),["assets/index-b2fb6b89.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-05f1dac2.js"])),jx=l.lazy(()=>v(()=>import("./index-39ad86da.js"),["assets/index-39ad86da.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-05f1dac2.js"])),kx=l.lazy(()=>v(()=>import("./index-c3ad3dca.js"),["assets/index-c3ad3dca.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-05f1dac2.js"])),Sx=l.lazy(()=>v(()=>import("./index-6f10b072.js"),["assets/index-6f10b072.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-05f1dac2.js"])),Tx=l.lazy(()=>v(()=>import("./index-4629b7ac.js"),["assets/index-4629b7ac.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-05f1dac2.js"])),Ex=l.lazy(()=>v(()=>import("./index-58085d78.js"),["assets/index-58085d78.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),Px=l.lazy(()=>v(()=>import("./index-082ca030.js"),["assets/index-082ca030.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-05f1dac2.js"])),$x=l.lazy(()=>v(()=>import("./index-77a9b521.js"),["assets/index-77a9b521.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-05f1dac2.js"])),Cx=l.lazy(()=>v(()=>import("./index-75e2847f.js"),["assets/index-75e2847f.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-05f1dac2.js"])),Ox=l.lazy(()=>v(()=>import("./index-f0473a40.js"),["assets/index-f0473a40.js","assets/vendor-4355a046.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-05f1dac2.js"])),Ax=l.lazy(()=>v(()=>import("./index-83fba286.js"),["assets/index-83fba286.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Dx=l.lazy(()=>v(()=>import("./index-e06483b8.js"),["assets/index-e06483b8.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Nx=l.lazy(()=>v(()=>import("./index-841f000f.js"),["assets/index-841f000f.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ix=l.lazy(()=>v(()=>import("./index-24543d04.js"),["assets/index-24543d04.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Rx=l.lazy(()=>v(()=>import("./index-8ba984c2.js"),["assets/index-8ba984c2.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Lx=l.lazy(()=>v(()=>import("./index-8df638da.js"),["assets/index-8df638da.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),zx=l.lazy(()=>v(()=>import("./index-b399e709.js"),["assets/index-b399e709.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Mx=l.lazy(()=>v(()=>import("./index-12337230.js"),["assets/index-12337230.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Fx=l.lazy(()=>v(()=>import("./index-28090807.js"),["assets/index-28090807.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Bx=l.lazy(()=>v(()=>import("./index-15095934.js"),["assets/index-15095934.js","assets/vendor-4355a046.js","assets/index-05f1dac2.js","assets/index-d0f38f88.js","assets/send-form-0fc83150.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Hx=l.lazy(()=>v(()=>import("./index-99011b27.js"),["assets/index-99011b27.js","assets/vendor-4355a046.js"]));l.lazy(()=>v(()=>import("./index-e65f8f05.js"),["assets/index-e65f8f05.js","assets/vendor-4355a046.js","assets/index-db6665fb.js","assets/index-8c818fc0.js"]));const cs=l.lazy(()=>v(()=>import("./index-2c7e3083.js"),["assets/index-2c7e3083.js","assets/vendor-4355a046.js"])),Ux=l.lazy(()=>v(()=>import("./index-05bdd43b.js"),["assets/index-05bdd43b.js","assets/vendor-4355a046.js"])),Wx=l.lazy(()=>v(()=>import("./index-2b56b478.js"),["assets/index-2b56b478.js","assets/vendor-4355a046.js"])),Vx=l.lazy(()=>v(()=>import("./index-469cc2ac.js"),["assets/index-469cc2ac.js","assets/vendor-4355a046.js"])),Gx=l.lazy(()=>v(()=>import("./index-5fd64984.js"),["assets/index-5fd64984.js","assets/vendor-4355a046.js"])),qx=l.lazy(()=>v(()=>import("./index-8b8a291b.js"),["assets/index-8b8a291b.js","assets/vendor-4355a046.js"])),Yx=l.lazy(()=>v(()=>import("./index-720f5015.js"),["assets/index-720f5015.js","assets/vendor-4355a046.js","assets/get-default-subdivision-17957fb0.js"])),Jx=l.lazy(()=>v(()=>import("./index-8e04d295.js"),["assets/index-8e04d295.js","assets/vendor-4355a046.js","assets/get-default-subdivision-17957fb0.js"])),Xx=l.lazy(()=>v(()=>import("./index-cdc68fc3.js"),["assets/index-cdc68fc3.js","assets/vendor-4355a046.js"])),Kx=l.lazy(()=>v(()=>import("./index-1bc3422e.js"),["assets/index-1bc3422e.js","assets/vendor-4355a046.js","assets/send-hr-form-work-transfer-a32f45a0.js"])),Qx=l.lazy(()=>v(()=>import("./index-beb59126.js"),["assets/index-beb59126.js","assets/vendor-4355a046.js","assets/send-hr-form-work-transfer-a32f45a0.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>b0),void 0));l.lazy(()=>v(()=>import("./index-4a7f24b2.js"),["assets/index-4a7f24b2.js","assets/vendor-4355a046.js","assets/BoldText-01da95f8.js","assets/help-links-3da42443.js"]));const Zx=l.lazy(()=>v(()=>import("./index-1f8f7afc.js"),["assets/index-1f8f7afc.js","assets/vendor-4355a046.js"])),ar=l.lazy(()=>v(()=>import("./index-c83329f7.js"),["assets/index-c83329f7.js","assets/vendor-4355a046.js","assets/index-db6665fb.js","assets/index-8c818fc0.js"])),rr=l.lazy(()=>v(()=>import("./index-e65f8f05.js"),["assets/index-e65f8f05.js","assets/vendor-4355a046.js","assets/index-db6665fb.js","assets/index-8c818fc0.js"])),em=l.lazy(()=>v(()=>import("./index-e01f9740.js"),["assets/index-e01f9740.js","assets/vendor-4355a046.js"]));l.lazy(()=>v(()=>import("./index-13a35a46.js"),["assets/index-13a35a46.js","assets/vendor-4355a046.js","assets/index.esm-4517625b.js"]));const tm=l.lazy(()=>v(()=>import("./index-e500ed58.js"),["assets/index-e500ed58.js","assets/vendor-4355a046.js"])),lr=l.lazy(()=>v(()=>import("./index-5d2d6d35.js"),["assets/index-5d2d6d35.js","assets/vendor-4355a046.js","assets/help-links-3da42443.js"])),im=l.lazy(()=>v(()=>import("./index-c0472452.js"),["assets/index-c0472452.js","assets/vendor-4355a046.js"])),nm=l.lazy(()=>v(()=>import("./index-42f0d2fa.js"),["assets/index-42f0d2fa.js","assets/vendor-4355a046.js","assets/alert-item-d1f1500d.js","assets/is-valid-url-08a91344.js"])),sm=l.lazy(()=>v(()=>import("./index-560a8c37.js"),["assets/index-560a8c37.js","assets/vendor-4355a046.js","assets/index-d74fe718.js","assets/alert-item-d1f1500d.js","assets/is-valid-url-08a91344.js"])),om=l.lazy(()=>v(()=>import("./index-06df05f3.js"),["assets/index-06df05f3.js","assets/vendor-4355a046.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>_y),void 0));const am=l.lazy(()=>v(()=>import("./index-c362ef5e.js"),["assets/index-c362ef5e.js","assets/vendor-4355a046.js"])),cr=l.lazy(()=>v(()=>import("./index-ad08b273.js"),["assets/index-ad08b273.js","assets/vendor-4355a046.js","assets/index-d74fe718.js","assets/index-8c818fc0.js"])),rm=l.lazy(()=>v(()=>import("./index-0d5a5a02.js"),["assets/index-0d5a5a02.js","assets/vendor-4355a046.js","assets/index-370526e1.js"])),lm=l.lazy(()=>v(()=>import("./index-0e295ea7.js"),["assets/index-0e295ea7.js","assets/vendor-4355a046.js","assets/index-370526e1.js"])),cm=l.lazy(()=>v(()=>import("./index-d6ac6753.js"),["assets/index-d6ac6753.js","assets/vendor-4355a046.js","assets/index-370526e1.js"])),dm=l.lazy(()=>v(()=>import("./index-8d737629.js"),["assets/index-8d737629.js","assets/vendor-4355a046.js"])),pm=l.lazy(()=>v(()=>import("./index-0e020645.js"),["assets/index-0e020645.js","assets/vendor-4355a046.js","assets/index.esm-4517625b.js","assets/index-f1ce6e42.js"])),um=l.lazy(()=>v(()=>import("./index-72c6a2bd.js"),["assets/index-72c6a2bd.js","assets/vendor-4355a046.js"])),hm=l.lazy(()=>v(()=>import("./index-45262ea8.js"),["assets/index-45262ea8.js","assets/vendor-4355a046.js"])),gm=l.lazy(()=>v(()=>import("./index-c9453c20.js"),["assets/index-c9453c20.js","assets/vendor-4355a046.js"])),fm=l.lazy(()=>v(()=>import("./index-86ff40ec.js"),["assets/index-86ff40ec.js","assets/vendor-4355a046.js","assets/index-1587e2a5.js"])),xm=l.lazy(()=>v(()=>import("./index-d220b8c5.js"),["assets/index-d220b8c5.js","assets/vendor-4355a046.js"])),mm=l.lazy(()=>v(()=>import("./index-41a69e5c.js"),["assets/index-41a69e5c.js","assets/vendor-4355a046.js","assets/help-links-3da42443.js"])),bm=l.lazy(()=>v(()=>import("./index-9e8bcb62.js"),["assets/index-9e8bcb62.js","assets/vendor-4355a046.js","assets/help-links-3da42443.js"])),ym=l.lazy(()=>v(()=>import("./index-b749d354.js"),["assets/index-b749d354.js","assets/vendor-4355a046.js"])),vm=l.lazy(()=>v(()=>import("./index-4a7f24b2.js"),["assets/index-4a7f24b2.js","assets/vendor-4355a046.js","assets/BoldText-01da95f8.js","assets/help-links-3da42443.js"])),_m=l.lazy(()=>v(()=>import("./index-e7fbe44a.js"),["assets/index-e7fbe44a.js","assets/vendor-4355a046.js"])),wm=p.div`
    width: 100%;
`,jm=()=>t.jsxs(wm,{children:[t.jsx(Y,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(Y,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),We=e=>{const{children:i,skeleton:n=t.jsx(jm,{}),loading:s=!1,...o}=e;return t.jsx(Ze,{...o,className:"block",children:s?n:i})},km=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},Sn=p.div`
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
`,Sm=p.div`
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
`,Tm=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:f}=km(c,r);return c.length?t.jsxs(Sm,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(Sn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(wt,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(Sn,{background:g.background,remove:u===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(Xe,{})})]},g.id)}),c.length&&!!n&&t.jsx(Sn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Bt=(e,i)=>{switch(i){case"date":return se(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},Em=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,Pm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),f=l.useCallback(m=>{var x,b;o(y=>(y&&y[m]&&delete y[m],{...y})),m===((x=i==null?void 0:i.column)==null?void 0:x.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const x=Object.values(s)[0].column;return m={[(x==null?void 0:x.field)??""]:{id:(x==null?void 0:x.field)??"",title:"Фильтр: "+(x==null?void 0:x.title)}},{...m}});else{const m=Object.values(s).find(x=>{var b;return!c[((b=x.column)==null?void 0:b.field)??""]});m&&d(x=>{var O,I;const b=((O=m.column)==null?void 0:O.field)??"",y="Фильтр: "+((I=m.column)==null?void 0:I.title);return x&&(x[b]={id:b,title:y}),{...x}})}i&&d(m=>{var y;const x=((y=i.column)==null?void 0:y.field)??"",b="Поиск";return m?m[x]={id:x,title:b}:m={[x]:{id:x,title:b}},{...m}}),a&&d(m=>{var y;const x=((y=a.column)==null?void 0:y.field)??"",b="Сортировка";return m?m[x]={id:x,title:b}:m={[x]:{id:x,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,x=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&x){const y=e==null?void 0:e.filter(O=>be(Bt(O[x],m==null?void 0:m.type)).includes(be(Bt(i.value,m==null?void 0:m.type))));h(y)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(x=>!Object.values(s).find(b=>{var y;return x[((y=b.column)==null?void 0:y.field)??""]!==b.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var x;const m=((x=a==null?void 0:a.column)==null?void 0:x.field)??"";a?h(b=>{const y=[...b??[]];return y==null||y.sort((O,I)=>I[m]<O[m]?a.value==="asc"?1:-1:I[m]>O[m]?a.value==="asc"?-1:1:0),y}):(d(b=>{const y=Em(b,"Сортировка");return b&&y&&delete b[y],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},Rn=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),Rn(n.children,i)):n?n.children:e},$m=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[m,x]=l.useState(i),[b,y]=l.useState("");l.useEffect(()=>{x(i)});const O=l.useCallback(()=>{d(T=>!T)},[d]),I=l.useCallback(T=>{if(T.children)f.push(T.id.toString()),x(Rn(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(A=>A.id===T.id)){const A=o.filter(L=>L.id!==T.id);A.length?n(A):n(null)}else n([...o,T]);else n([T]);else n(T);!r&&O(),y(f.join("/"))}s==null||s(T)},[n,f]),j=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?x(i):x(Rn(i,f)??[])},[f,x]);return qt(u,()=>{c&&O()}),{handleOpen:O,refElement:u,isOpen:c,multiple:r,handleSelect:I,selectedRoute:b,currentItems:m,route:f,goBack:j,refItems:h,appearance:a}},Cm=p.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${Fe(Gi)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,Om=p.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${Fe(Gi)};

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
`,Am=p.header`
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
`,Dm=p.ul`
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
`,Xs=p.li`
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
`,Nm=["isOpen"],Im=p(dp).withConfig({shouldForwardProp:e=>!Nm.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Rm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:f}=$m(e),{isActive:g,width:m,title:x,required:b,selected:y,placeholder:O,size:I="middle"}=e;return t.jsxs(Om,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:m,size:I,children:[t.jsx(U,{size:4,align:"left",bottomGap:"5px",visible:!!x,required:b,children:x}),t.jsxs(Cm,{multiple:o,appearance:f,size:I,children:[t.jsx(Am,{appearance:f,children:o?y?y.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:O??"Не выбрано"}):t.jsx("div",{className:"single-header",children:y?t.jsxs(t.Fragment,{children:[!!y.icon&&t.jsx("span",{className:"icon",children:y.icon}),t.jsx("span",{className:"header-title",children:y.title})]}):t.jsx("span",{className:"not-chosen",children:O??"Не выбрано"})})}),t.jsx(Im,{isOpen:s})]}),t.jsxs(Dm,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:x,children:[!!d.length&&t.jsx(Xs,{isSelected:!1,onClick:j=>{j.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(vi,{}),"Назад"]})},-1),c.map(({id:j,icon:T,title:A,children:L,data:N})=>t.jsxs(Xs,{onClick:K=>{K.stopPropagation(),a({id:j,icon:T,title:A,children:L,data:N})},isSelected:!o&&!!y&&y.title.includes(A),leadingToSelected:r.includes(j.toString()),children:[!!T&&t.jsx("span",{className:"icon",children:T}),t.jsx("span",{className:"select-item-title",children:A}),!!L&&t.jsx("span",{className:"right-icon",children:t.jsx(pt,{})}),o&&!!y&&!!y.find(K=>K.title.includes(A))&&t.jsx("span",{className:"right-icon",children:t.jsx(en,{})})]},A))]})]})},dr=l.memo(Rm),Lm=e=>{switch(e){case"desc":return H.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return H.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return H.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},zm=p.div`
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
`,pr=p.div`
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
`,Mm=p.div`
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
`,Fm=p.div`
    display: flex;
    align-items: center;
`,Bm=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return Lm(h),h?{column:d,value:h}:null})};return t.jsx(Mm,{children:e.map(d=>{var u,h,f,g;return t.jsxs(pr,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Mt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(pp,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Fm,{children:t.jsx(dr,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(x=>(m&&(x={...x,[d.field]:{column:d,value:m}}),x)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},Hm=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(C,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(vi,{}),onClick:()=>r(dt(n-1,e).toString())}),t.jsxs(C,{w:"fit-content",gap:"6px",children:[t.jsx(ct,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(oe,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(pt,{}),onClick:()=>r(dt(n+1,e).toString())})]}):null},Um=p.div`
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
`,mt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Um,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,Wm=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Vm=({obj:e,columns:i})=>t.jsx(Wm,{children:i.map(n=>t.jsx(mt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Bt(e[n.field],n.type)},n.title))}),ur=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=te(),r=()=>a(t.jsx(Vm,{obj:n,columns:i||e}),"Информация");return t.jsx(zm,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(pr,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:u=>{c.onClick&&(u.stopPropagation(),c.onClick(n))},children:c.render?c.render(Bt(n[c.field],c.type),n):Bt(n[c.field],c.type)},c.field)})})})},Gm=p.div`
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
`,qm=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Ym=p.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Jm=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),u=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(qm,{children:t.jsx(Qe,{})}):t.jsxs(Gm,{children:[h==null?void 0:h.map((f,g)=>t.jsx(ur,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(ge,{text:"Нет данных"}),u>0&&t.jsx(fe,{margin:"0",width:"100%"}),t.jsx(Ym,{children:t.jsx(Hm,{pages:u,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},Xm=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Km=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Qm=({search:e,setSearch:i})=>{var n,s;return t.jsx(Xm,{closed:!(e!=null&&e.column),children:t.jsx(ct,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Km((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Mt,{}),minWidth:"auto"})})},Zm=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function e0(e){return Object.keys(e).map(i=>({title:"",field:i}))}const t0=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Zm(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(fe,{}),t.jsx(ur,{onRowClick:()=>null,columns:e0(s),el:s,index:1})]})},i0=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,et=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:u,setSearch:h,resultData:f,filter:g,setFilter:m,filterList:x,setFilterList:b,onRemoveOne:y,onRemoveAll:O}=Pm(n);return t.jsxs(i0,{children:[t.jsx(Tm,{setList:b,padding:"0 10px",list:x,onRemoveOne:y,onRemoveAll:O}),t.jsx(Qm,{search:u,setSearch:h}),t.jsx(Bm,{sort:c,setSort:d,columns:e,search:u,setSearch:h,filter:g,setFilter:m}),t.jsx(Jm,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(t0,{footer:a,data:n,columns:e})]})},ET={ready:"Готово",pending:"В работе",rejected:"Отклонено"},dn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},ds={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},PT=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],$T=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],n0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(ds).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],s0=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(o0,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(a0,{columns:n0(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},o0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,a0=p(et)`
    width: 100%;
`,r0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${Ke()}`},s=await $t({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},l0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>se(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(ds).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{r0(i.applicationGuid)}})}}],c0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(p0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(d0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(h0,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(u0,{columns:l0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},d0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,p0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,u0=p(et)`
    width: 100%;
`,h0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,g0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(f0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(c0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(s0,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},f0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,pn=p.div`
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
`,un=()=>t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),hr=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(x0,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(m0,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(un,{})]}),t.jsx(g0,{})]})})})},x0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,m0=p.div`
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
`,b0=Object.freeze(Object.defineProperty({__proto__:null,default:hr},Symbol.toStringTag,{value:"Module"})),gr=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>se(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],fr=k(),xr=k(),mr=M(async()=>{const{data:e}=await ue.get(`Weekend.GetAllHistory?PersonalGuid=${Vt(Ke()??"").IndividualGuid}`);return e.orders});$({clock:fr,target:mr});const Si=M(async e=>(await ue.post("Weekend.AddWeekend",e)).data);$({clock:xr,target:Si});const br=J([]),y0=Si.pending;$({clock:mr.doneData,target:br});$({clock:Si.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ht.evokePopUpMessage});$({clock:Si.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ht.evokePopUpMessage});const v0={loadBufferHolidayWork:fr,sendBufferHolidayWork:xr},CT={sendBufferHolidayWorkFx:Si},_0={useBufferHolidayWork:()=>({data:we(br),loading:we(y0)})},w0=()=>{const[e,i]=l.useState(!1);l.useEffect(v0.loadBufferHolidayWork,[]);const{data:n}=_0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(j0,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(k0,{columns:gr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},j0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,k0=p(et)`
    width: 100%;
`,S0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(E0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(T0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(P0,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},T0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,E0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,P0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,$0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(C0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(S0,{info:s,index:o})),t.jsx(w0,{})]}):null},C0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,O0=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(A0,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(D0,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(un,{})]}),t.jsx($0,{})]})})})},A0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,D0=p.div`
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
`,yr=k(),vr=k(),Ti=M(async()=>{const{data:e}=await ue.get(`Vacation.GetAllHistory?personalGuid=${Vt(Ke()??"").IndividualGuid}`);return e});$({clock:yr,target:Ti});const Ot=M(async e=>(await ue.post("Vacation.AddVacation",e)).data);$({clock:vr,target:Ot});const qi=J(null);$({clock:Ti.doneData,fn:({employeeVacations:e})=>e,target:qi});$({clock:Ot.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:H.evokePopUpMessage});$({clock:Ot.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:H.evokePopUpMessage});$({clock:Ot.doneData,source:qi,fn:(e,{employeeVacations:i})=>[...e,...i],target:qi});$({clock:Ti.failData,fn:e=>{var n;return{message:ss(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:H.evokePopUpMessage});$({clock:Ot.doneData,target:Ti});const N0={loadBufferHolidayPlanning:yr,sendBufferHolidayPlanning:vr},OT={sendBufferHolidayPlanningFx:Ot},I0={useBufferHolidayPlanning:()=>({data:we(qi),loading:we(Ot.pending),getDataLoading:we(Ti.pending)})},hn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${Ke()}`},o=await $t({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var _r=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(_r||{});const ps=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(Q,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>_r[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${se((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${se((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),hn(i.documentGuid,"0")}}):"-"}}],R0=()=>[...ps(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${se((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${se((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),hn(i.documentGuid,"1")}}):"-"}}],L0=()=>{const{data:e,getDataLoading:i}=I0.useBufferHolidayPlanning(),n=()=>N0.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>Mo(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(Ue,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs(C,{jc:"space-between",m:"10px 0",children:[t.jsx(z0,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(wt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(C,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:ps(),columnsExtended:R0(),data:s,maxOnPage:10})})]})})},z0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Tn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},wr=()=>{const e=Wt(),{allRoutes:i}=Be.useMenu(),n=i??{},[s,o]=l.useState(Tn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Tn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Tn(a.pathname,n))}),[e,n]),s},M0={small:"600px",middle:"700px",big:"963px",large:"100%"},jr=e=>M0[(e==null?void 0:e.pageSize)??"middle"],F0=p(Ze)`
    position: relative;

    ${ee.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ee.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,B0=p.div`
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
`,H0=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: 40px;
    }
`,Yt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=wr(),r=jr(a);return t.jsx(Ps,{padding:"0 0 10px 0",children:t.jsxs(F0,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(B0,{children:i}),n&&t.jsx(H0,{children:n}),e]})})});Yt.displayName="PageBlock";const U0=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications(),n=Wt();return t.jsx(Ue,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Yt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Fo,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(L0,{})]})})},W0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(ds).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],kr=k(),Sr=k(),us=M(async()=>{const{data:e}=await ue.get(`CarryForwardVacation.GetAllHistory?personalGuid=${Vt(Ke()??"").IndividualGuid}`);return e});$({clock:kr,target:us});const Jt=M(async e=>(await ue.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);$({clock:Sr,target:Jt});const Yi=J([]);$({clock:us.doneData,fn:({employeeVacations:e})=>e,target:Yi});$({clock:Jt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:ht.evokePopUpMessage});$({clock:Jt.doneData,source:Yi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Yi});$({clock:us.failData,fn:e=>{var n;return{message:ss(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:H.evokePopUpMessage});$({clock:Jt.failData,fn:e=>{var n;return{message:ss(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:ht.evokePopUpMessage});const Ks={loadBufferHolidayTransfer:kr,sendBufferHolidayTransfer:Sr},AT={sendBufferHolidayTransferFx:Jt},hs={useBufferHolidayTransfer:()=>({data:we(Yi),loading:we(Jt.pending)})},V0=()=>{const[e,i]=l.useState(!1),{data:n}=hs.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(G0,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(q0,{columns:W0(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},G0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,q0=p(et)`
    width: 100%;
`,Y0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(X0,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(J0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(Q0,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(K0,{columns:ps(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},J0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,X0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,K0=p(et)`
    width: 100%;
`,Q0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Z0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=hs.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(eb,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Y0,{info:o,index:a,data:i})),t.jsx(V0,{})]})},eb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,tb=()=>{const{data:e,loading:i}=hs.useBufferHolidayTransfer();return l.useEffect(()=>{Ks.loadBufferHolidayTransfer()},[]),t.jsx(Ue,{load:Ks.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(ib,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(nb,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(un,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(Z0,{})]})})})},ib=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,nb=p.div`
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
`,sb=e=>localStorage.setItem("age",e.toString()),DT=e=>localStorage.getItem(e),ob=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),ab={listMedicalExamination:null,error:null},Rt=M(async()=>{const e=await ue.get(`MedicalExamination.GetAllHistory?PersonalGuid=${Vt(Ke()??"").IndividualGuid}`);try{return sb(e.data.age),ob(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Ei=M(async e=>{try{const i=await ue.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),rb=()=>{const{listMedicalExamination:e,error:i}=we(lb);return{data:e,loading:we(Ei.pending),getDataLoading:we(Rt.pending),error:i}};k();Le({from:Ei.doneData,to:Rt});$({clock:Ei.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:H.evokePopUpMessage});$({clock:Ei.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:H.evokePopUpMessage});const lb=J(ab).on(Rt,e=>({...e,error:null})).on(Rt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(Rt.failData,(e,i)=>({...e,error:i.message})),cb={loadBufferMedicalExaminationFx:Rt,sendBufferMedicalExaminationFx:Ei},db={useBufferMedicalExamination:rb},Tr=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${se(i==null?void 0:i.startDate,"numeric")} - ${se(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),hn(i==null?void 0:i.documentGuid,"0")}}):"-"}],pb=()=>[...Tr(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),hn(i==null?void 0:i.documentGuid,"1")}}):"-"}],ub=()=>{const{data:e,getDataLoading:i}=db.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=ye.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>Mo(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(Ue,{load:cb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs(C,{jc:"space-between",m:"10px 0",children:[t.jsx(hb,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(wt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(C,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:Tr(),columnsExtended:pb(),data:s,maxOnPage:10})})]})},hb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,gb=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(ub,{})]})})},Er=k(),Pr=k(),$r=M(async()=>{const{data:e}=await ue.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${Vt(Ke()??"").IndividualGuid}`);return e.employeeHistories});$({clock:Er,target:$r});const Pi=M(async e=>(await ue.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);$({clock:Pr,target:Pi});const Cr=J([]),fb=Pi.pending;$({clock:$r.doneData,target:Cr});$({clock:Pi.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ht.evokePopUpMessage});$({clock:Pi.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ht.evokePopUpMessage});const xb={loadBufferWorkTransfer:Er,sendBufferWorkTransfer:Pr},NT={sendBufferWorkTransferFx:Pi},mb={useBufferWorkTransfer:()=>({data:we(Cr),loading:we(fb)})},bb=()=>{const[e,i]=l.useState(!1);l.useEffect(xb.loadBufferWorkTransfer,[]);const{data:n}=mb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(yb,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(vb,{columns:gr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},yb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,vb=p(et)`
    width: 100%;
`,_b=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(jb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(wb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(kb,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},wb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,jb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,kb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,Sb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Tb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(_b,{info:s,index:o})),t.jsx(bb,{})]}):null},Tb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Eb=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Pb,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs($b,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(un,{})]}),t.jsx(Sb,{})]})})})},Pb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,$b=p.div`
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
`,Cb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${se(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${se(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${se(e[0])} по ${se(e[1])}`},Ob=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,gn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=qe.selectors.useData();return r?t.jsxs(Ob,{children:[t.jsx(U,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(sr,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(Q,{type:"info",title:Cb(n)??"",icon:t.jsx(Je,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(U,{size:4,align:"left",children:c.title}),t.jsx(ki,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(Zn,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(fe,{})]},c.title)})]})]}):null},Ab=()=>{const{data:e}=qe.selectors.useData();return t.jsx(gn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Db=()=>{const{data:e}=qe.selectors.useData();return t.jsx(gn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Nb=()=>{const{data:e}=qe.selectors.useData();return t.jsx(gn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},Ib=()=>{const{data:e}=qe.selectors.useData();return t.jsx(gn,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},Or=()=>{var i;const{data:e}=qe.selectors.useData();return t.jsx(Ps,{padding:"10px",children:t.jsx(Yt,{children:t.jsx(js,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Nb,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Ab,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Db,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(Ib,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(Se,{oldVersionUrl:wy}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Rb=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),Lb=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Ar=k(),Dr=k(),Nr=k(),Ht=M(async()=>{const e=await rh();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),gs=M(async e=>{try{return await ch(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),$i=M(async e=>{const i=await lh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});$({clock:$i.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:H.evokePopUpMessage});$({clock:$i.doneData,fn:()=>!0,target:Dr});$({clock:$i.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:H.evokePopUpMessage});$({clock:Ar,target:$i});const Ir=k(),Rr=k(),zb=Kn($i.pending,Ht.pending,Boolean),Mb=J(!1).on(Nr,(e,i)=>i),Fb=J(!1).on(Dr,(e,i)=>i),Bb=J(null).on(Ht,()=>null).on(Ht.failData,(e,i)=>i.message).on(gs.failData,(e,i)=>i.message),Hb=J(null).on(Ht.doneData,(e,i)=>i).on(gs.doneData,(e,i)=>Lb(e,i,!1)).on(Ir,()=>null),ot={$loading:zb,$completed:Mb,$done:Fb,$error:Bb,$paymentsStore:Hb};Le({from:Rr,to:Ht});const fs={getPaymentsFx:Ht,signContractFx:gs},Ln={signAgreement:Ar,setCompleted:Nr,clearStore:Ir,getPayments:Rr},Ub=Object.freeze(Object.defineProperty({__proto__:null,effects:fs,events:Ln,stores:ot},Symbol.toStringTag,{value:"Module"})),Wb=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Vb=p.div`
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
`,Gb=({date:e,value:i})=>t.jsxs(Vb,{children:[t.jsxs(C,{gap:"16px",children:[t.jsx(ft,{color:"grey",size:33,children:t.jsx(lt,{})}),t.jsxs(C,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(oe,{children:se(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(lt,{})," "]})]}),qb=p.div`
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
`,Lr=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(qb,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(lt,{})]})},Yb=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Jb=p.div`
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
`,Xb=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Yb(s.value),0).toFixed(1);return t.jsxs(Jb,{children:[t.jsxs(C,{jc:"space-between",children:[t.jsx(U,{icon:t.jsx(Bo,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(oe,{fontSize:"1rem",width:"fit-content",children:t.jsx(Lr,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ge,{size:"50px",text:"Нет платежей",image:t.jsx(Ho,{})}),e.map((n,s)=>l.createElement(Gb,{...n,key:s}))]})]})},zr=()=>t.jsx(Q,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Kb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Qb=p.div`
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
`,Zb=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:u}=e,{open:h}=te(),[f,g]=l.useState(!1),[m,x]=l.useState(!1),[b,y]=l.useState(!1),O=_i(ot.$error),I=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:se(n)},{text:"Действует до",info:se(s)},{text:"Подписан",info:se(u)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Kb(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},T=()=>{e&&(x(!0),fs.signContractFx(e.id),x(!1),y(!0))},A=()=>{h(t.jsx(zr,{}),"Не получается подписать")};return t.jsxs(Qb,{children:[t.jsx("div",{className:"contract-info",children:I.map(({info:L,text:N})=>t.jsx(mt,{keyStr:N,value:L},L))}),r&&t.jsxs(C,{d:"column",gap:"8px",children:[t.jsx(kt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:T,isLoading:m,completed:b,repeatable:!1,popUpFailureMessage:O??"Не удалось подписать договор",setCompleted:y,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:A,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs(C,{gap:"8px",children:[t.jsx(kt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:f,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(ki,{onClick:()=>null,href:c??"",icon:t.jsx(Zn,{}),width:"45px"})]})]})},ey=p.div`
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
`,ty=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(ey,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Uo,{style:{color:"var(--green)"}}):t.jsx(Wo,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(He,{}),onClick:()=>null,background:"transparent"})]}),iy=p.div`
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
`,ny=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(iy,{height:s,open:r,children:[t.jsx(ty,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},sy=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,oy=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=_i([ot.$done,ot.$completed,ot.$loading]),h=s||c?140:100,f=()=>Ln.signAgreement(n),g=Ln.setCompleted;return t.jsxs(ny,{height:h,title:o,confirmed:s||c,children:[t.jsxs(sy,{children:[t.jsxs(C,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(U,{size:5,align:"left",children:o}),t.jsx(oe,{children:se(r)})]}),t.jsxs(C,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(ki,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Zn,{}),isActive:!!e.file}),!(s||c)&&t.jsx(kt,{text:s||c?"Подписано":"Подписать",action:f,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(Q,{type:"success",title:"Подписано",icon:t.jsx(en,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(oe,{children:["Дата подписания: ",se(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},ay=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Ee,{width:"100%",children:[t.jsx(U,{size:4,align:"left",icon:t.jsx(up,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(zr,{}),t.jsx(Q,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(oy,{data:s,isContractSigned:n},o))]}),ry=p.div`
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
`,zi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(ry,{children:t.jsx(as,{loading:i,width:"300px",height:"300px",src:e??""})})},ly=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,cy=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(zi,{qrCode:e}):n===1?t.jsx(zi,{qrCode:i}):t.jsx(ly,{children:t.jsx(js,{pages:[{title:"Текущая задолженность",content:t.jsx(zi,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(zi,{qrCode:i})}],appearance:!1,currentPage:n})}),dy=({type:e="horizontal",...i})=>{const{open:n}=te(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(cy,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(hp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},py=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(Lr,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},En=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Ci=()=>{const e=Ju.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(En(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(En(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(En(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},uy=p.div`
    width: 100%;
`,hy=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,gy=p.div`
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
`,fy=p.div`
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
`,xy=p.div`
    position: relative;
`,my=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=Ci(),{open:h}=te(),[f,g]=l.useState(0),m=f===0?+n:+s,x=m>0,b=x?f===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",y=f===0?`На ${se(new Date)}`:`До ${se(o)}`,O=()=>{h(t.jsx(Zb,{contract:i}),"Реквизиты договора")};return t.jsxs(uy,{children:[t.jsx(U,{icon:t.jsx(gp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(hy,{children:[t.jsx(ls,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(gy,{children:[t.jsxs(C,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(py,{debt:m}),t.jsxs(C,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(U,{size:3,align:"left",children:b}),t.jsx(oe,{children:y})]})]}),x?t.jsx(dy,{currentPage:f,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(Ha,{color:"green",size:"40px"})]}),t.jsxs(fy,{children:[r&&t.jsx(ki,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(xy,{children:[t.jsx(_,{onClick:O,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(St,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Mr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,by=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Bt(String(o),"rub")})`},yy=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Mr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:by}],vy=({paygraph:e})=>t.jsxs(C,{d:"column",children:[t.jsx(U,{icon:t.jsx(fp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(et,{columns:yy(),data:e??[],maxOnPage:3})]}),Mi=({contracts:e})=>e?t.jsx(Wb,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,u=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx(C,{gap:"8px",children:t.jsx(C,{w:"fit-content",children:t.jsxs(U,{size:3,align:"left",children:["Договор № ",o," от ",se(d,"numeric")]})})}),t.jsx(my,{data:i}),t.jsx(Xb,{payments:c??[]}),t.jsx(vy,{paygraph:r}),t.jsx(ay,{isDormitory:u,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(fe,{margin:"0",width:"100%"})]},o)})}):null,xs=()=>{const[e,i,n]=_i([ot.$error,ot.$loading,ot.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{H.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(Ue,{loading:i,load:fs.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ge,{text:"Нет данных"}),s==="both"&&t.jsx(js,{pages:[{title:"Общежитие",content:t.jsx(Mi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Mi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Mi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Mi,{contracts:n==null?void 0:n.education})]})})},_y=Object.freeze(Object.defineProperty({__proto__:null,default:xs},Symbol.toStringTag,{value:"Module"})),E="/applications",re="/hr-applications",Qs="/staff_orders",Zs="/staff_blanks",wy="/ad_logins",ms="/doclist",eo="/pps_vote2020",jy="/children",Fr="/pps_contest",ky="/electronic-statements",xe="/onboarding",Sy="/structure-of-the-university",Ty="/addresses-and-contacts",Ey="/brandbook",Py="/wifi-at-the-university",$y="/health-care",Cy="/psychological-help",Oy="/social-environment",Ay="/vacation",Zt="/kpi_pps",ei="/kpi_admin",to="/sc_news",io="/oop",no="/centers",Dy="/helpful-information",Ny="/download-agreements",so="/physical-education/main",Iy="/physical-education/student/:studentId",Br=E+"/contact-info-actualization",Hr=E+"/contact-info-actualization-test",zn=E+"/phonebook",Ry=E+"/phonebook/:guid",Ur=E+"/data-verification",Wr=E+"/issuance-of-licenses",Vr=E+"/getting-computer-equipment",Gr=E+"/connecting-computer",qr=E+"/printer-maintenance",Yr=E+"/question-sed",Jr=E+"/question-personal-account",Xr=E+"/other-it-services",Kr=E+"/certificate-from-the-place-of-work",Qr=E+"/visa-certificate",Zr=E+"/certificate-of-work-experience",el=E+"/number-of-unused-vacation-days",tl=E+"/copy-of-the-employment-record",il=E+"/copies-of-documents-from-the-personal-file",nl=E+"/work-on-the-terms-of-external-concurrency",sl=E+"/certificate-time-parental-leave",ol=E+"/arbitrary-request",al=E+"/courier",rl=E+"/persona-income-tax-reference",ll=E+"/payment-of-child-birth-allowance",cl=E+"/payment-for-child-care",dl=re+"/part-time-employment/",Ly=re+"/dismissal/:id",zy=re+"/work-transfer/:id",My=re+"/extra-holiday-coll",Fy=re+"/holiday-planning",By=re+"/holiday-transfer/:id",Hy=re+"/holiday-work/:id",Uy=re+"/work-transfer-change-rate/:id",Wy=re+"/medical-examination",Mn=re+"/buffer-dismissal",Fn=re+"/buffer-holiday-planning",Bn=re+"/buffer-holiday-transfer",Hn=re+"/buffer-holiday-work",Un=re+"/buffer-medical-examination",Wi=re+"/buffer-work-transfer",pl=E+"/living-in-residential-premises",ul=E+"/guests-accomodation-on-campus",hl=E+"/guests-passage-to-campus",gl=E+"/relocation",fl=E+"/termination-of-agreement",xl=E+"/issuance-of-pass",ml=E+"/guest-pass",bl=E+"/certification-and-issuance-of-docs",yl=E+"/deferment-from-conscription",vl=E+"/certified-copies-of-military-docs",B=()=>Se({oldVersionUrl:"/sprav"}),oo=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(X,{}),path:xe,Component:vm,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...Nl,"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(Bo,{}),path:Ny,Component:Or,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(wp,{}),path:jy,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"]},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(X,{}),path:ky,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Vo,{}),path:$l,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(lt,{}),path:Ji,Component:xs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(X,{}),path:Fr,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Go,{}),path:Zt,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${Zt==null?void 0:Zt.slice(1,Zt.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(jp,{}),path:ei,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ei==null?void 0:ei.slice(1,ei.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(kp,{}),path:to,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:to}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(D,{}),path:Qs,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:Qs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Ft,{}),path:Zs,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:Zs}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:ms,Component:dx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Fo,{}),path:Ay,Component:Hx,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:so,pageSize:"big",Component:bx,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(D,{}),color:"pink",show:!1,path:Iy,Component:yx,isTemplate:!1,fallbackPrevPage:so,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(xi,{}),path:io,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:io}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(xi,{}),path:no,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:no}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(D,{}),path:Dy,Component:cs,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(qo,{}),path:eo,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:eo}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:E,Component:px,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(D,{}),path:re,Component:S?()=>Se({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Ux,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Ur,Component:or,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"}}),ao=()=>({...Il,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Wr,icon:t.jsx(D,{}),color:"blue",Component:S?B:_x,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:Mn,icon:t.jsx(D,{}),color:"blue",Component:S?B:hr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Hn,icon:t.jsx(D,{}),color:"blue",Component:S?B:O0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Un,icon:t.jsx(D,{}),color:"blue",Component:S?B:gb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:Fn,icon:t.jsx(D,{}),color:"blue",Component:S?B:U0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:Bn,icon:t.jsx(D,{}),color:"blue",Component:S?B:tb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Wi,icon:t.jsx(D,{}),color:"blue",Component:S?B:Eb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:dl,icon:t.jsx(D,{}),color:"blue",Component:S?B:Wx,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Hy,icon:t.jsx(D,{}),color:"blue",Component:S?B:qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Hn},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:Wy,icon:t.jsx(D,{}),color:"blue",Component:S?B:Yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Un},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:Fy,icon:t.jsx(D,{}),color:"blue",Component:S?B:Jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Fn},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:By,icon:t.jsx(D,{}),color:"blue",Component:S?B:Xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Bn},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:zy,icon:t.jsx(D,{}),color:"blue",Component:S?B:Kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Wi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:Uy,icon:t.jsx(D,{}),color:"blue",Component:S?B:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Wi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:My,icon:t.jsx(D,{}),color:"blue",Component:S?B:Gx,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:Ly,icon:t.jsx(D,{}),color:"blue",Component:S?B:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Mn},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(D,{}),color:"blue",path:Vr,Component:S?B:vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(D,{}),color:"blue",path:Gr,Component:S?B:fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(D,{}),color:"blue",path:qr,Component:S?B:Ex,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(D,{}),color:"blue",path:Yr,Component:S?B:$x,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(D,{}),color:"blue",path:Jr,Component:S?B:Px,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(D,{}),color:"blue",path:Xr,Component:S?B:jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(D,{}),color:"blue",path:Kr,Component:ox,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(D,{}),color:"blue",path:Qr,Component:Cx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(D,{}),color:"blue",path:Zr,Component:S?B:hx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(D,{}),color:"blue",path:el,Component:wx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(D,{}),color:"blue",path:tl,Component:S?B:xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(D,{}),color:"blue",path:il,Component:S?B:ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(D,{}),color:"blue",path:nl,Component:S?B:Ox,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(D,{}),color:"blue",path:sl,Component:S?B:gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(D,{}),color:"blue",path:ol,Component:S?B:ux,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},courier:{id:"courier",title:"Курьер",icon:t.jsx(D,{}),color:"blue",path:al,Component:S?B:mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(D,{}),color:"blue",path:rl,Component:S?B:Tx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(D,{}),color:"blue",path:ll,Component:S?B:Sx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(D,{}),color:"blue",path:cl,Component:S?B:kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(D,{}),color:"blue",path:Br,Component:Js,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},phonebook:{id:"phonebook",title:"Телефонный справочник",icon:t.jsx(D,{}),color:"blue",path:zn,Component:S?B:lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",fallbackPrevPage:E,show:!S},"phonebook-form":{id:"phonebook-form",title:"Телефонный справочник",icon:t.jsx(D,{}),color:"blue",path:Ry,Component:S?B:cx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:zn,show:!S},"data-actualization":{id:"data-actualization",title:"Актуализация контактных данных (тест)",icon:t.jsx(D,{}),color:"blue",path:Hr,Component:S?Js:rx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,show:!S},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Ur,Component:or,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(D,{}),color:"blue",path:pl,Component:S?B:Ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(D,{}),color:"blue",path:ul,Component:S?B:Dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(D,{}),color:"blue",path:hl,Component:S?B:Nx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(D,{}),color:"blue",path:gl,Component:S?B:Ix,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(D,{}),color:"blue",path:fl,Component:S?B:Rx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(D,{}),color:"blue",path:xl,Component:S?B:Lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(D,{}),color:"blue",path:ml,Component:S?B:zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(D,{}),color:"blue",path:bl,Component:S?B:Mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(D,{}),color:"blue",path:yl,Component:S?B:Fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(D,{}),color:"blue",path:vl,Component:S?B:Bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ge,{to:xe})),icon:t.jsx(Ft,{}),isTemplate:!1,path:Oy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ge,{to:xe})),icon:t.jsx(xp,{}),isTemplate:!1,path:Cy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ge,{to:xe})),icon:t.jsx(mp,{}),isTemplate:!1,path:$y,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ge,{to:xe})),icon:t.jsx(bp,{}),isTemplate:!1,path:Py,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ge,{to:xe})),icon:t.jsx(yp,{}),isTemplate:!1,path:Ey,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(vp,{}),path:Ty,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ge,{to:xe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(_p,{}),path:Sy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ge,{to:xe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0}}),_l="/login",Vy="/forgot-password",Gy="/medical-certificate",qy="/vaccination",di="/all",bs="/home",ys="/profile",vs="/chat",Yy="/messages",IT=vs+"/:chatId",wl="/electronic-interaction-agreement",Ji="/payments",At="/schedule",jl="/all-students",Jy="/all-students/:filter",Xy="/all-teachers/:filter",kl="/all-teachers",_s="/feedback",Sl="/cant-access",Tl="/memo-freshmen",El="/get-your-login",Pl="/memo-teacher",me="/settings",RT=me+"/:id",Ky=me+"/appearance",Qy=me+"/personal",Zy=me+"/security",ev=me+"/home-page",tv=me+"/customize-menu",iv=me+"/notifications",nv="/instructions",$l="/project-activity",Cl="/alerts",Ol="/lk-notifications",Al="/helpful-information",Oi=At+"/:page/:filter",Dl=At+"/current",sv=At+"/semestr",ov=At+"/session",av=At+"/retake",rv=Al+"/:infoType";var lv=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(lv||{});const cv=[{id:0,title:"",icon:"",path:_l,Component:ix},{id:1,title:"",icon:"",path:Vy,Component:im},{id:2,title:"Обратная связь",icon:t.jsx(xi,{}),path:_s,Component:lr},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(_t,{}),path:Sl,Component:em},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:El,Component:xm},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:Tl,Component:mm},{id:6,title:"Вниманию сотрудников!",icon:"",path:Pl,Component:bm}],Nl={all:{id:"all",title:"Все разделы",icon:t.jsx($p,{}),path:di,Component:Zx,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Xo,{}),path:me,Component:pm,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:ms,Component:fm,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Ko,{}),path:Cl,Component:nm,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Jo,{}),path:bs,Component:sm,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Qo,{}),path:ys,Component:am,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(nn,{}),path:Ol,Component:_m,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Zo,{}),path:wl,Component:tm,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Cp,{}),path:vs,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:Yy}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Ct,{}),path:At,menuPath:Dl,Component:cr,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Ft,{}),path:jl,Component:ar,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(qo,{}),path:kl,Component:rr,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(xi,{}),path:_s,Component:lr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Op,{}),path:nv,Component:om,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Ns,{}),path:Gy,Component:ym,color:"blue",isTemplate:!1,group:"GENERAL"},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(Ns,{}),path:qy,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0}},dv={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(Ct,{}),path:Dl,Component:rm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(es,{}),path:sv,Component:lm,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Yo,{}),path:ov,Component:cm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(Qn,{}),path:av,Component:dm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Il={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(Ct,{}),path:Oi,Component:cr,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...dv,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Ft,{}),path:Jy,Component:ar,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Ft,{}),path:Xy,Component:rr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Sp,{}),path:Ky,Component:hm,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(Tp,{}),path:Qy,Component:um,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(Ep,{}),path:Zy,Component:gm,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Jo,{}),path:ev,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(Pp,{}),path:tv,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(nn,{}),path:iv,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:me,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:rv,Component:cs,color:"grey",isTemplate:!0,show:!1}},Rl=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;ji.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else H.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Ll=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;ji.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},pv=(e,i,n,s)=>{if(i){const o=s.length+Hu;if(n<o){H.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??sn;ji.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else H.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},uv=(e,i,n)=>{if(i)if(n.includes(e))H.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{H.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;ji.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},hv=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,gv=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,fv=e=>{var m,x,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Gt.useSettings(),{data:r}=ve.useUser(),c=Be.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(y=>y===i),u=(x=a["settings-customize-menu"].property.pages)==null?void 0:x.find(y=>y===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?la:sn,f=()=>{Rl(i,a),Ie.close()},g=()=>{pv(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Ie.close()};return t.jsxs(hv,{children:[t.jsxs("div",{className:"top",children:[t.jsx(ft,{color:o,size:22,children:n}),t.jsx(gv,{children:s})]}),t.jsx(fe,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(_t,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{Ll(i,a),Ie.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(wt,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),u?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(_t,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>uv(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(wt,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},zl=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ie.open({e:o,height:105,content:t.jsx(fv,{...e})})};return t.jsx(_,{icon:t.jsx(ea,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Ml=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},Fl=p(Ze)`
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
`,xv=p.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,ro=e=>{var y;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:u,id:h,background:f,orientation:g="vertical"}=e,m=g==="vertical",{settings:x}=Gt.useSettings(),b=!!((y=x["settings-home-page"].property.pages)!=null&&y.find(O=>O===h));return t.jsxs(Fl,{padding:"0",width:"100%",maxWidth:"100%",height:m?"135px":"60px",isVertical:m,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:f,children:[(d||c)&&m&&t.jsxs(xv,{children:[d&&t.jsx(tn,{title:"Раздел в старом ЛК"}),c&&t.jsx(Vi,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(ft,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(Ap,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Ml(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),u==="use"&&t.jsx(zl,{route:e}),u==="add"?b?t.jsx(_,{icon:t.jsx(Xe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>Ll(h,x)}):t.jsx(_,{icon:t.jsx(wt,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>Rl(h,x)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},mv=p(Fl)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,LT=()=>t.jsx(Z,{to:di,onClick:()=>{tt.changeOpen({isOpen:!1,currentPage:di.slice(1,di.length)})},children:t.jsx(mv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(ft,{color:"blue",children:t.jsx(Dp,{})}),t.jsx("b",{children:"Все разделы"})]})})}),bv=p(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,yv=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,vv=e=>{const{close:i}=te(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(yv,{width:o==="vertical"?c:"100%",children:t.jsx(ro,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),tt.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(bv,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(ro,{...e,maxWordLength:r,mode:a})})},_v=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,wv=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ge,{text:"Ничего не было найдено"}):t.jsx(_v,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(vv,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),jv=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(be(s.title).includes(be(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>be(a).includes(be(e))))&&(n[s.id]=s),n},{}),kv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Sv=p(Z)`
    width: 100%;
`,Tv=({division:e})=>{const{close:i}=te();return t.jsxs(kv,{children:[t.jsxs(C,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(ft,{size:120,color:"purple",children:t.jsx(oi,{})}),t.jsx(oe,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(Sv,{to:`${kl}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(ta,{}),width:"100%",text:"Список"})})]})},Ev=p.div`
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
`,Pv=({division:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Tv,{division:e}),"Подразделение")};return t.jsx(Ev,{onClick:n,children:t.jsxs(C,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(C,{gap:"8px",children:[t.jsx(oi,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(pt,{})]})})},$v=({divisions:e})=>!e||e.length===0?null:t.jsx(C,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Pv,{division:i},i))}),fn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),Cv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,lo=p(Z)`
    width: 100%;
`,Bl=({group:e})=>{const{close:i}=te();return t.jsxs(Cv,{children:[t.jsxs(C,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(ft,{size:120,color:"lightBlue",children:t.jsx(ia,{})}),t.jsx(oe,{fontSize:"1.2rem",children:e})]}),t.jsxs(C,{gap:"8px",onClick:i,children:[t.jsx(lo,{to:fn(Oi,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(Ct,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(lo,{to:`${jl}/${e}`,children:t.jsx(_,{icon:t.jsx(ta,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},Ov=p.div`
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
`,Av=({group:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Bl,{group:e}),"Группа")};return t.jsx(Ov,{onClick:n,children:t.jsxs(C,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(C,{gap:"8px",h:"50px",children:[t.jsx(ia,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(pt,{})]})})},Dv=({groups:e})=>e?t.jsx(C,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Av,{group:i},i))}):null,Pn=[{title:"Инструкции",links:[{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ne},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ne},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ne},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ne},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ne},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ne},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ne},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ne}]}];var ke=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(ke||{});const Nt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Nv=[{id:ke.information,title:Nt[ke.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:ke.security,title:Nt[ke.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:ke.instructions,title:Nt[ke.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Pn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.regulations,title:Nt[ke.regulations],visible:"staff",content:[{title:"Положения",links:[...Pn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.orders,title:Nt[ke.orders],visible:"staff",content:[{title:"Приказы",links:[...Pn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.courses,title:Nt[ke.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Iv=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Rv=p.div`
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
`,Lv=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(Rv,{children:[t.jsx(U,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Ee,{gap:16,children:s.map(({title:a,href:r,visible:c},d)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+d))})]},n+o))}):null;function Wn(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const zv=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Mv=p.div``,Fv=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Hl=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(zv,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Mv,{children:e}),t.jsx(Fv,{isOpen:o,children:i})]})},Ul=k(),Wl=k(),Bv=J(!1).on(Wl,()=>!0).on(Ul,()=>!1),co={close:Ul,open:Wl},Hv={$isModalOpen:Bv},ws=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Uv=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=_i(Hv.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,y)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,y??""])):(r(()=>[b]),o(y?[y]:[])),n(()=>!0),co.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),co.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),x=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(ws.Provider,{value:{back:u,open:h,close:f,isOpen:i,canBack:d,component:g,title:m,setComponent:x},children:e})},te=()=>{const{open:e,isOpen:i,...n}=l.useContext(ws);return{open:e,isOpen:i,...n}},Wv="2.3.0",Vl=()=>t.jsx(Q,{icon:null,type:"info",title:Wv,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Oe=({color:e,children:i})=>t.jsx(ft,{color:e,children:i}),Vv=()=>({info:t.jsx(Oe,{color:"grey",children:t.jsx(Je,{})}),message:t.jsx(Oe,{color:"red",children:t.jsx(ts,{})}),alert:t.jsx(Oe,{color:"purple",children:t.jsx(Ko,{})}),"payment-dorm":t.jsx(Oe,{color:"green",children:t.jsx(lt,{})}),"payment-ed":t.jsx(Oe,{color:"green",children:t.jsx(lt,{})}),"digital-services":t.jsx(Oe,{color:"red",children:t.jsx(D,{})}),"doc-for-review":t.jsx(Oe,{color:"blue",children:t.jsx(D,{})}),"hr-applications":t.jsx(Oe,{color:"green",children:t.jsx(D,{})}),"kpi-pps":t.jsx(Oe,{color:"pink",children:t.jsx(Go,{})}),schedule:t.jsx(Oe,{color:"pink",children:t.jsx(Ct,{})}),"version-update":t.jsx(Vl,{}),"electronic-interaction":t.jsx(Oe,{color:"blue",children:t.jsx(Zo,{})})}),Gv=p(Z)`
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
`,qv=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Yv={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Jv={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},Xv={small:"0px",middle:"1px",large:"2px",big:"3px"},Gl=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:m=!0,fullText:x=!0,maxLetters:b=200,size:y="middle"})=>{const O=se(o,"short"),{close:I}=te(),[j,T]=l.useState(!1),A=N=>{N.stopPropagation(),N.preventDefault(),f?(T(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},L=()=>{a==null||a(),m&&Et.clearById({id:e,pageId:c}),I()};return t.jsx(Hl,{forceState:!j,bottomMargin:h,children:t.jsxs(Gv,{to:d??"",onClick:L,children:[t.jsx("span",{className:"left-icon",children:Vv()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(oe,{fontSize:"0.7rem",children:t.jsx(Ne,{words:[O??"",s??""]})}),t.jsxs(C,{d:"column",gap:Xv[y],ai:"flex-start",children:[t.jsx(qv,{fontSize:Yv[y],children:x?i:Wn(i,b)}),t.jsx(oe,{fontSize:Jv[y],children:x?n:Wn(n,b)})]})]}),u&&t.jsx(_,{isActive:!(g&&j),icon:t.jsx(Xe,{}),background:"var(--theme-2)",onClick:A,style:{borderRadius:"20px"}})]})})},ql=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Et.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(C,{d:"column",children:e.map((o,a)=>l.createElement(Gl,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Xi=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,po=({people:e,type:i})=>!e||e.length===0?null:t.jsx(C,{d:"column",children:e.map(n=>l.createElement(ks,{name:n.fio,type:i,...n,key:n.id}))}),Kv=()=>{const{allRoutes:e}=Be.useMenu(),{notifications:i,removeNotificationLoading:n}=it.useLkNotifications(),{data:{user:s}}=ve.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Nv.flatMap(({visible:L,content:N})=>L==="staff"&&o||L==="student"&&!o||L==="all"?N:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,f]=l.useState(null),[g,m]=l.useState(null),[x,b]=l.useState(null),[y,O]=l.useState(null),[I,j]=l.useState(null),T=[{title:"Разделы",content:t.jsx(wv,{pages:x,showNotFound:!1}),clear:()=>{b(null)},search:L=>{if(e){const N=jv(L,e);b(N)}},data:x},{title:"Студенты",content:t.jsx(po,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async L=>{const{data:N}=await Nh(L,"",1,20);m(N.items)}},{title:"Сотрудники",content:t.jsx(po,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async L=>{const{data:N}=await Ch(L,"",1,20);f(N.items)}},{title:"Группы",content:t.jsx(Dv,{groups:r}),data:r,clear:()=>{c(null)},search:async L=>{const{data:N}=await Ih(L);c(N.items)}},{title:"Подразделения",content:t.jsx($v,{divisions:d}),data:d,clear:()=>{u(null)},search:async L=>{const{data:N}=await Oh(L);u(N.items)}},{title:"Уведомления",content:t.jsx(ql,{notifications:y,loadingRemove:n}),clear:()=>{O(null)},search:L=>{const N=i.filter(K=>be(K.title).includes(L));O(N)},data:y},{title:"Полезная информация",content:t.jsx(Lv,{blocks:I,isStaff:o}),clear:()=>{j(null)},search:L=>{const N=Iv(L,a);j(N)},data:I}];return[(()=>{const{content:L,clear:N,data:K}=T.reduce((z,ie)=>(Xi(ie.data)&&(z.data.push(ie.data),z.content.push(t.jsxs(t.Fragment,{children:[t.jsx(U,{size:4,align:"left",children:ie.title}),ie.content,t.jsx(fe,{})]}))),z.clear.push(ie.clear),z),{content:[],clear:[],data:[]});return{title:"Все",content:L,clear:()=>N.map(z=>z()),search:async z=>{z.length<=8&&/\d|[-]/g.test(z)?await T[3].search(z):(T[0].search(z),T[5].search(z),T[6].search(z),Xi(T[0].data)===0&&(await T[1].search(z),await T[2].search(z),await T[4].search(z)))},data:K}})(),...T]},Qv=()=>JSON.parse(localStorage.getItem(F.SearchHistory)??"[]"),Zv=()=>{const e=Kv(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>Qv(),[]),r=async g=>{e[i].clear();const m=Ya(g)?qa(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(F.SearchHistory,JSON.stringify(a)))},[c,d,u]=Qa({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!u&&!c.length,f=!!c.length&&!u&&!!Xi(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},e1=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Is,{})})):e?n.filter(s=>be(s).includes(be(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Is,{})})):[],t1=()=>t.jsxs(C,{gap:"8px",ai:"flex-start",children:[t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(C,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),i1=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,n1=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=Zv(),u=e1(r,n,d),{isOpen:h}=te();return t.jsx(i1,{children:t.jsxs(C,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Xa,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(ls,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(Ja,{value:n,setValue:s}),e&&t.jsx(C,{h:"100%",children:t.jsx(ge,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Mt,{})})}),!r&&n.length!==0&&!e&&!Xi(c[o].data)&&t.jsx(C,{h:"100%",children:t.jsx(ge,{size:"60px",text:"Ничего не было найдено",image:t.jsx(zo,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(t1,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},s1=p(Ze)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${ee.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,o1=p.div`
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
`,a1=p(C)`
    @media (max-width: 1000px) {
        display: none;
    }
`,r1=()=>{const e=hf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(na,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},Yl=({size:e="large"})=>{const i=r1(),{open:n}=te(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(n1,{}),"Глобальный поиск");return Ga(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Mt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(s1,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(oe,{align:"left",fontSize:"0.9rem",children:t.jsxs(C,{gap:"8px",children:[t.jsx(Mt,{}),"Поиск"]})}),t.jsx(a1,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(o1,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},Vn=e=>e.split(" ").map(i=>i[0]),De=(e,i)=>{const n=Vn(e),s=w[Vu[n[0]]];return s==null?void 0:s[i??"main"]},l1=p.div`
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
`,c1=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ai({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:f,onClick:g,borderRadius:m,background:x}){const[b,y]=l.useState(!0),O=Vn(i)[0]+(Vn(i)[1]??""),{open:I}=te(),j=T=>{f?I(t.jsx(Ai,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(T)};return t.jsxs(l1,{selected:e,width:s,height:o,marginRight:a,background:x??De(i),boxShadow:d,border:u,onClick:j,borderRadius:m,children:[n&&b?t.jsx(c1,{loading:"lazy",round:!0,onLoadedData:()=>y(!0),onError:()=>y(!1),src:n}):t.jsx("div",{className:"name",children:O}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Ye,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(St,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const zT=p.header`
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
`;const MT=p.div`
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
`,d1=p.div`
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
`,FT=p.div`
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
`,BT=p.div`
    margin-top: 50px;
    width: 100%;
`,HT=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,UT=p(Ze)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,WT=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,p1=p.div`
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
`,u1=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(p1,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Cf,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},h1=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,g1=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(h1,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(u1,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Jl=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=gt(),{settings:o}=Gt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(Np,{}):t.jsx(Ip,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:x=>s(x)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:x=>s(x)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(x=>!x),i==null||i()};return e==="toggle"?t.jsx(g1,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(d1,{width:"30px",background:w.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},f1=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(C,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(C,{gap:"16px",ai:"center",children:[t.jsx(Y,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(C,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),x1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,m1=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=it.useLkNotifications();return l.useEffect(()=>{o&&H.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Et.clearAllVisible()},[]),t.jsxs(x1,{children:[s.length===0&&!n&&t.jsx(Ps,{height:"100%",children:t.jsx(ge,{text:i??"Нет новых уведомлений",image:i?t.jsx(_t,{}):t.jsx(Rp,{}),size:"70px"})}),t.jsxs(C,{d:"column",gap:"16px",children:[t.jsx(Q,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(ql,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(f1,{quantity:10})]})},b1=p.div`
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
`,Xl=()=>{const{close:e}=te(),{notifications:i}=it.useLkNotifications(),n=3;return t.jsxs(C,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(C,{d:"column",gap:"16px",children:[t.jsx(m1,{maxNotificationsVisible:n}),t.jsxs(oe,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Ml(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Ol,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},y1=()=>{const{notifications:e}=it.useLkNotifications(),{open:i}=te(),n=()=>{i(t.jsx(Xl,{}),"Уведомления")};return t.jsxs(b1,{onClick:n,children:[t.jsx(St,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(nn,{})]})},v1=p.div`
    position: relative;
`,Kl=()=>{const{open:e}=te(),{notifications:i}=it.useLkNotifications(),n=()=>Ie.close(),s=()=>{st.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Pt.logout}),n()},o=()=>{Ie.close(),e(t.jsx(Ec,{}),"Что нового")},a=()=>{e(t.jsx(Xl,{}),"Уведомления"),Ie.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Bw,{padding:"8px",size:"small"}),t.jsx(fe,{}),t.jsx(Jl,{type:"h-button"}),t.jsx(fe,{}),t.jsx(Z,{to:ys,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(Qo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(v1,{children:[t.jsx(_,{onClick:a,icon:t.jsx(nn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(St,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:me,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(Xo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(tn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(fe,{}),t.jsx(_,{align:"left",icon:t.jsx(Lp,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(fe,{}),t.jsx(_,{align:"left",icon:t.jsx(Vl,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},_1=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,w1=({showSearch:e=!1})=>{const{data:{user:i}}=ve.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ie.open({e:s,height:143,content:t.jsx(Kl,{})})};return t.jsxs(_1,{children:[e&&t.jsx(Yl,{size:"icon"}),t.jsx(y1,{}),t.jsx(Ai,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},j1=p.header`
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
`,k1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,S1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,T1=p.div`
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
        max-width: ${k1};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ee.isTablet} {
        max-width: ${S1};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ee.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,E1=()=>{const{pathname:e}=Ut(),[i,n]=l.useState([e]),{action:s}=Wt();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},P1=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=Wt();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Bi,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},$1=({headerVisible:e,currentPage:i})=>{const n=Wt(),s=E1(),o=e||!!(i!=null&&i.planeHeader),a=jr(i),r=(u=di)=>()=>{tt.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(P1,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Bi,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Bi,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Bi,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},C1=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Ci(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=$1({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(j1,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(T1,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(C,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(w1,{showSearch:!0})]})]})},O1=le.memo(C1),A1=p(Z)`
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
`,D1=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Ie.open({e:c,height:143,content:t.jsx(Kl,{})})};return t.jsxs(A1,{to:ys,children:[t.jsx(_,{icon:t.jsx(ea,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ai,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(U,{size:5,children:e})]})},N1=le.memo(D1),I1=["isCurrent","color"],R1=p(Z).withConfig({shouldForwardProp:e=>!I1.includes(e)})`
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
`,L1=p.div`
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
`,z1=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,M1=p.button`
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
`,F1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(R1,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(St,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(St,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(zl,{route:e})]})},Ql=le.memo(F1),B1=()=>{const{isOpen:e}=Be.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>tt.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},H1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(M1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(H1);p.section`
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
`;const U1=()=>{const{leftsideBarRoutes:e}=Be.useMenu(),i=Ut();return e?t.jsx(z1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Ql,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(C,{d:"column",children:[t.jsxs(C,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(C,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(C,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(C,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},W1=le.memo(U1),V1=()=>{const{isOpen:e}=Be.useMenu(),{width:i,height:n}=cn(),{data:{user:s}}=ve.useUser(),{visibleRoutes:o}=Be.useMenu(),a=Ut();return t.jsxs(L1,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:bs,children:t.jsx(ln,{width:"165px"})}),t.jsx(N1,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Yl,{size:"small"}),t.jsx(W1,{})]}),t.jsx(Jl,{type:"toggle"}),i<1e3&&t.jsx(B1,{})]})},G1=p.div`
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
`,q1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=ka.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{H.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),H.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(G1,{isOpen:e,isClickable:!!o,color:jt[n].color,onClick:a,children:t.jsx(Q,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>H.openPopUpMessage({isOpen:!1}),children:i})})},xn=p.div`
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
`;const Y1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(ws);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},J1=p.div`
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
`,X1=p.div`
    padding-top: 30px;
`,K1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Y1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return Ga([27],o),qt(r,()=>{o()}),t.jsx(xn,{isOpen:c,children:t.jsxs(J1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(vi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(U,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Xe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(X1,{children:i})]})})},Q1=le.memo(K1),Z1=p.div`
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
`,e_=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=$a.useConfirm(),o=l.useRef(null);qt(o,()=>st.closeConfirm());const a=()=>{n(),st.closeConfirm()},r=()=>{st.closeConfirm()};return t.jsx(xn,{isOpen:e,children:t.jsxs(Z1,{isOpen:e,ref:o,children:[t.jsx(U,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Ee,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},t_=p.div`
    display: flex;
    align-items: ${({align:e})=>In(e)};
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
`,i_=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:f}=cn(),g=l.useRef(null),m=()=>{var b;g!=null&&g.current&&h(Math.round(((b=g.current)==null?void 0:b.scrollLeft)/f))},x=b=>{var y;h(b),r==null||r((y=e[b])==null?void 0:y.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*b)};return l.useEffect(()=>{x(u)},[i,f]),t.jsxs(t_,{width:n,align:c,maxWidth:o,children:[t.jsx(ls,{pages:e.map(({title:b,condition:y})=>({title:b,condition:y})),currentPage:u,setCurrentPage:x,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ge,{text:"Нет данных"})},b.title))})]})},js=i_,uo=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},ho=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Zl=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},n_=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},s_=p.div`
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
`,o_=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(s_,{width:i,height:n,color:De(e,"dark1"),color2:De(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light2")})})]})}),a_=p.div`
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
`,r_=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",m=Zl(h,n,s,o);return t.jsxs(a_,{children:[t.jsx(o_,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ai,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(oe,{fontSize:"0.9rem",children:t.jsx(Ne,{words:m})}),t.jsx(mt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(mt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(mt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(mt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(mt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},l_=p.div`
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
`,ec=e=>{const{children:i}=e;return t.jsxs(l_,{children:[t.jsx(r_,{...e}),t.jsx("div",{className:"buttons",children:i})]})},c_=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,d_=()=>t.jsxs(c_,{children:[t.jsx(Y,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(Y,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(Y,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),tc=e=>{if(e)return()=>{st.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(F.Token,e),location.reload()}})}},p_=e=>{const{close:i}=te(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${De(s,"main")}, ${De(s,"dark1")})`;return t.jsxs(ec,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:fn(Oi,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(Ct,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(ts,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:tc(n)})]})},u_=e=>{const{close:i}=te(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${De(s,"dark1")}, ${De(s,"main")})`;return t.jsxs(ec,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:fn(Oi,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(Ct,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(ts,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:tc(n)})]})},h_=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?n_(i):"100%"};

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
            font-size: ${({size:e})=>uo(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${uo(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,ks=e=>{const{open:i}=te(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:m="middle"}=e,x=Zl(h,n,d,u);if(f)return t.jsx(d_,{});const b=y=>{r?r(y):h||(Ie.close(),i(n==="staff"?t.jsx(u_,{...e}):t.jsx(p_,{...e})))};return t.jsxs(h_,{orientation:g,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ai,{name:o,avatar:s,width:ho(g,m),height:ho(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ne,{words:x})})]})]})},Ki=e=>{const i=be(e),s=[{keys:["распознаван"],icon:t.jsx(Mp,{})},{keys:["принт"],icon:t.jsx(Fp,{})},{keys:["химич"],icon:t.jsx(Bp,{})},{keys:["сервер"],icon:t.jsx(Hp,{})},{keys:["игр"],icon:t.jsx(Up,{})},{keys:["жизнед"],icon:t.jsx(Wp,{})},{keys:["web","веб"],icon:t.jsx(Vp,{})},{keys:["истор"],icon:t.jsx(Gp,{})},{keys:["информат"],icon:t.jsx(qp,{})},{keys:["информации"],icon:t.jsx(Je,{})},{keys:["мобильн"],icon:t.jsx(Yp,{})},{keys:["безопасн"],icon:t.jsx(Jp,{})},{keys:["автоматиз"],icon:t.jsx(Xp,{})},{keys:["линейн"],icon:t.jsx(Kp,{})},{keys:["обработ"],icon:t.jsx(Qp,{})},{keys:["презентац"],icon:t.jsx(Zp,{})},{keys:["операционн"],icon:t.jsx(na,{})},{keys:["эконом"],icon:t.jsx(lt,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(eu,{})},{keys:["анализ"],icon:t.jsx(tu,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(iu,{})},{keys:["сети","сетей"],icon:t.jsx(nu,{})},{keys:["матем"],icon:t.jsx(su,{})},{keys:["вероятн"],icon:t.jsx(ou,{})},{keys:["философ"],icon:t.jsx(sa,{})},{keys:["данны"],icon:t.jsx(au,{})},{keys:["язык"],icon:t.jsx(ru,{})},{keys:["спорт","физичес"],icon:t.jsx(lu,{})},{keys:["проектная"],icon:t.jsx(Cn,{})},{keys:["интеллект"],icon:t.jsx(cu,{})},{keys:["научн"],icon:t.jsx(du,{})},{keys:["предприним"],icon:t.jsx(pu,{})},{keys:["коммуникац"],icon:t.jsx(uu,{})},{keys:["управлени"],icon:t.jsx(is,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Yo,{})},{keys:["переработ"],icon:t.jsx(hu,{})},{keys:["машин","инжен"],icon:t.jsx(gu,{})},{keys:["проектир","расчет"],icon:t.jsx(fu,{})},{keys:["производ"],icon:t.jsx(Ho,{})},{keys:["эколог"],icon:t.jsx(xu,{})},{keys:["защит"],icon:t.jsx(mu,{})},{keys:["патент"],icon:t.jsx(bu,{})},{keys:["материал"],icon:t.jsx(yu,{})},{keys:["физик"],icon:t.jsx(vu,{})},{keys:["тайм"],icon:t.jsx(_u,{})},{keys:["практика"],icon:t.jsx(oa,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(zp,{})},Gn={"9:00 - 10:30":w.green,"10:40 - 12:10":w.lightGreen,"12:20 - 13:50":w.blue,"14:30 - 16:00":w.purple,"16:10 - 17:40":w.pink,"17:50 - 19:20":w.red,"18:20 - 19:40":w.orange,"19:30 - 21:00":w.orange,"19:50 - 21:10":w.orange},ic=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},g_=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,mn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},f_=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=mn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},nc=(e,i,n)=>f_(e)===mn(i.startTime)&&n,bi=e=>e<=9?"0"+e:e,x_=e=>`${bi(Math.floor(e/60))}:${bi(e%60)}`,go=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},m_=p.div`
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
`,b_=p.div`
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
`,y_=p(C)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ee.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,fo=p.div`
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
`,v_=p(oe)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,__=p.div`
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
`,w_=p.div`
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
`,j_=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(go(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(go(new Date,s[0]*60,s[1]*60))},ns.minute),()=>clearInterval(c.current)),[e]),t.jsx(__,{currentTime:(a-i)*n,children:o&&t.jsx(w_,{children:x_(a)})})},sc=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},$e=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(y_,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(fo,{shortInfo:o,children:e}),t.jsx(v_,{width:"100%",className:"text",children:i}),t.jsx(fo,{shortInfo:o,children:s})]}),k_=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,S_=p(Z)`
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
`,T_=({groups:e})=>{const{close:i}=te();return t.jsx(k_,{children:e.map(n=>t.jsxs(S_,{to:fn(Oi,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Ft,{}),n]}),t.jsx(pt,{})]},n))})},E_=({icon:e,background:i,noPadding:n=!1})=>t.jsx(m_,{background:i,noPadding:n,children:t.jsxs(b_,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),P_=p.div`
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
`,$_=({subjectName:e,color:i,noPadding:n})=>{const s=Ki(e),{theme:o}=gt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(P_,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(E_,{noPadding:n,icon:s,background:r}),t.jsx(ft,{color:i.main,size:70,borderRadius:"19px",children:s})]})},C_=wu`
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
`,O_=({color:e,start:i})=>`
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
}`,A_=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${O_}
`,D_=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,N_=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ee.isMobile} {
        font-size: 0.7rem;
    }
`,oc=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=gt(),o=s==="light"?i.main:i.light2;return t.jsxs(D_,{children:[t.jsx(A_,{start:n,color:o}),e&&t.jsx(N_,{children:e})]})},I_=p.div`
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
`,R_=p(C)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,L_=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:m=!1}=e,x=(d==null?void 0:d.split(","))??[],{open:b}=te(),y=()=>{x.length===1?b(t.jsx(Bl,{group:x[0]})):b(t.jsx(T_,{groups:x}),"Группы")},O=()=>{b(t.jsx(M_,{place:s,link:r,name:n}))},I=sc(n);return t.jsxs(I_,{children:[t.jsx($_,{subjectName:n,color:u,noPadding:m}),t.jsxs(R_,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(C,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(C,{gap:"8px",children:[t.jsx(oc,{isCurrentEvent:g,color:u,timeInterval:i}),t.jsx(ac,{timeLeft:mn(i.split(" - ")[0],"minutes"),isNext:f,color:u,isCurrentEvent:g})]}),t.jsx(U,{size:3,align:"left",width:"fit-content",children:I.name})]}),t.jsx(fe,{margin:"0",width:"100%"}),t.jsx($e,{icon:t.jsx(es,{}),text:t.jsx(Ne,{words:[h??"",a]})}),((r==null?void 0:r.length)||I.link)&&t.jsx("a",{href:r??I.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{icon:t.jsx(Vi,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx($e,{icon:t.jsx(oa,{}),text:s}),!!c.length&&t.jsx($e,{icon:t.jsx(On,{}),text:t.jsx(Ne,{words:c})}),!!x.length&&t.jsx($e,{onClick:y,icon:t.jsx(is,{}),text:t.jsx(Ne,{words:x}),rightIcon:t.jsx(pt,{})}),t.jsx(C,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(U,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(ks,{type:"staff",name:j},j))]})}),!r&&t.jsx(fe,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:O})]})]})};p.span`
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
`;const z_=p.a`
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
`,Fi=({title:e,link:i,image:n})=>i?t.jsxs(z_,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(U,{size:3,children:e})]}):null,xo=p.div`
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
`,M_=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(xo,{children:t.jsx(C,{jc:"center",children:t.jsx(Qe,{})})}):t.jsx(xo,{children:e==="Webex"?t.jsx(Fi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Fi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Fi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Fi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},mo=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,ac=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=gt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(mo,{background:c,color:r,children:"Сейчас"}):t.jsxs(mo,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},F_=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,VT=()=>t.jsxs(F_,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(Y,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(Y,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),rc="/assets/sleep-54d590c1.gif";var lc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(lc||{});const B_=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],GT=[...B_,{title:"Месяц",condition:!0}],vt=Object.keys(It).reduce((e,i)=>(e[i]=[],e),{}),H_={schedule:{today:[],week:{...vt},semestr:{data:{...vt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...vt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},U_=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},yi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Qi=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Qi||{});const cc=e=>{const[i,n]=e.split(" "),s=Qi[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},dc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Qi[o],r=Qi[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},si=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[f,g]=r.split(" - "),m=yi(g)-yi(f),[x,b]=d.split("-").map(I=>I.trim()),y=cc(x),O=dc(b,x);return{title:o,people:a,startTime:f,duration:m,startDate:y,endDate:O,placeIcon:t.jsx(ju,{}),dateInterval:d,color:Gn[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Ki(o)}}):[],W_=e=>new Date(e.setHours(0,0,0,0)),bo=(e,i)=>(e??[]).filter(n=>{const s=W_(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=cc(o),c=dc(a,o);return s>=r&&s<=(c??r)}),pc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),qn=e=>e instanceof Date&&isFinite(+e),V_=e=>{const i={...vt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!qn(n)||!qn(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=pc(a);if(r==="sunday")continue;i[r]=[...i[r],...si(e[o].lessons,It[r].short)]}return{schedule:i,startDate:n,endDate:s}},uc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),hc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return H.evokePopUpMessage({message:f,type:"failure",time:ns.ten_seconds}),{schedule:H_.schedule,errorInData:f}}const o=new Date;let a=U_(o);o.getDay()===0&&(a=uc(o,1));const r={...vt},c={...vt};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),x=e[f];"lessons"in x?(r[g]=si(bo(x.lessons,a),It[g].short),c[g]=si(x.lessons,It[g].short)):(r[g]=si(bo(x,a),It[g].short),c[g]=si(x,It[g].short)),n=new Date(Math.min(...c[g].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=V_(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},gc=async e=>{const i=await nh(e),n=await oh();return hc(i.data,n.data)},fc=async e=>{const i=await sh(e),n=await ah(e);return hc(i.data,n.data)},yo={data:{schedule:null,externalSchedule:null,view:lc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},G_=()=>q(de),Tt=M(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await fc(n);if(i&&s==="stud")return await gc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Xt=M(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await gc(e)}catch(i){throw new Error(i.message)}}),Kt=M(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await fc(e)}catch(i){throw new Error(i.message)}}),q_=k(),xc=k(),mc=k(),bc=k(),yc=k(),vc=k(),_c=k(),de=J(yo).on(Tt,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Tt.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(xc,(e,i)=>({...e,data:{...e.data,view:i}})).on(mc,(e,i)=>({...e,currentChosenDay:i.day})).on(bc,()=>({...yo}));$({clock:Tt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(vt)}}),target:de});$({clock:yc,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});$({clock:vc,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});$({clock:Kt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});$({clock:Xt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});$({clock:[Xt,Kt,Tt],source:de,fn:e=>({...e,loading:!0}),target:de});$({clock:[Xt,Kt],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});$({clock:[Xt.doneData,Kt.doneData,Tt.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});$({clock:[Xt.failData,Kt.failData,Tt.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});$({clock:_c,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const Ss={useSchedule:G_},Y_={changeCurrentModule:q_,changeView:xc,changeCurrentChosenDay:mc,clearStore:bc,resetExternalSchedule:_c,setSearchValue:vc,setFilter:yc},J_={getScheduleFx:Tt,getGroupScheduleFx:Xt,getTeacherScheduleFx:Kt},X_=Object.freeze(Object.defineProperty({__proto__:null,effects:J_,events:Y_,selectors:Ss},Symbol.toStringTag,{value:"Module"})),K_=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${bi(Math.floor(o/60))}:${bi(o%60)}`},wc=(e,i)=>e?`${e} - ${K_(e,i)}`:"9:00",Yn=e=>!e||!qn(e)?0:e.getHours()*60+e.getMinutes(),Ts=(e,i)=>yi(e.startTime)<=Yn(new Date)&&Yn(new Date)<=yi(e.startTime)+e.duration&&i,jc=()=>{const{open:e}=te();return n=>{const s=wc(n.startTime,n.duration);e(t.jsx(L_,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:Ts(n,!0),noPadding:!0,...n}))}},vo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},Q_=()=>{const{currentDevice:e}=Ci(),[i,n]=l.useState(vo[e]);return l.useEffect(()=>{n(vo[e])},[e]),i},Z_=p.div`
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
`,ew=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=Q_(),o=jc(),a=[9,22];return e!=null&&e.length?t.jsx(Z_,{children:t.jsx(Tc,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ge,{text:"В этот день пар нет",image:rc})},kc=()=>{const{data:{schedule:e}}=Ss.useSchedule(),{open:i}=te(),n=uc(new Date,1),s=Mr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=pc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(ew,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},tw=p.div`
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
`,qT=({errorInData:e})=>t.jsxs(tw,{children:[t.jsx("img",{src:rc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(kc,{})]});p.div`
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
`;const iw=(e,i,n)=>i?e?1:.8:n?1:0,nw=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>iw(e,i,n)};
    transform: scale(${({isVisible:e})=>nw(e)});
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
`;const sw=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,YT=()=>t.jsxs(sw,{children:[t.jsx(Ha,{size:"38px"}),t.jsx(U,{size:4,children:"Учебный день завершился"}),t.jsx(kc,{})]});p.div`
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
`;const ow=e=>{const[i,n]=e.split(":");return+i*60+ +n},Sc=(e,i,n)=>e?(ow(e)-i)*n:0,aw=p.div`
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
`;const rw=p(C)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ee.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,lw=p.span`
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
`,cw=p.div`
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
`,dw=p(C)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,pw=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:f,rooms:g,dateInterval:m,leftShift:x,quantity:b,groups:y,isCurrentEvent:O=!1,nameInOneRow:I=!0,isNextEvent:j=!1,listView:T=!1,shortInfo:A=!1}=e,{theme:L}=gt(),{isMobile:N}=Ci(),K=L==="light"?d.dark3:d.light3,z=L==="light"?d.transparent1:d.transparent2,ie=()=>h(e),ce=(N||b>1)&&A,Pe=N&&b>=2&&A,je=r==null?void 0:r.map(ze=>{var Ni,Ii;const Qt=ze.split(" ");return`${Qt[0]??""} ${((Ni=Qt[1])==null?void 0:Ni[0])??""}.${((Ii=Qt[2])==null?void 0:Ii[0])??""}.`}),Ve=Sc(o,c,u),he=sc(i),Ce=Pe?i.split(" ").map(ze=>ze[0].toUpperCase()):Wn(he.name,A?ce?43:35:I?300:64),Di=(y==null?void 0:y.split(","))??[];return t.jsxs(aw,{background:z,textColor:K,listView:T,leftShift:100*x,quantity:100/b,duration:n,scale:u,top:Ve,onClick:ie,shortInfo:A,children:[t.jsx(cw,{children:s}),t.jsx(C,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(rw,{scale:u,d:"column",ai:"flex-start",shortInfo:A,children:[t.jsxs(C,{d:"column",gap:"2px",children:[!A&&t.jsxs(C,{gap:"8px",children:[t.jsx(oc,{timeInterval:wc(o,n),color:d,isCurrentEvent:O}),t.jsx(ac,{timeLeft:mn(o,"minutes"),isNext:j,color:d,isCurrentEvent:O}),!!(g!=null&&g.length)&&t.jsx($e,{shortInfo:A,icon:N&&b>1?void 0:t.jsx(On,{}),text:t.jsx(Ne,{words:g})}),(!!f||he.link)&&t.jsx("a",{href:f??he.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:A,icon:t.jsx(Vi,{}),text:f?a:"Cсылка"})}),!!Di.length&&t.jsx($e,{icon:t.jsx(is,{}),text:t.jsx(Ne,{words:Di})})]}),t.jsx(lw,{listView:T,nameInOneRow:I,scale:u,shortInfo:A,children:Ce})]}),!!r.length&&!ce&&t.jsx($e,{shortInfo:A,text:t.jsx(Ne,{words:A?[je[0]]:je}),icon:t.jsx(ku,{})}),!!(g!=null&&g.length)&&A&&!ce&&t.jsx($e,{shortInfo:A,icon:t.jsx(On,{}),text:t.jsx(Ne,{words:g})}),!!f&&A&&!ce&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:A,icon:t.jsx(Vi,{}),text:a})}),!!m&&!ce&&t.jsx(C,{gap:"5px",children:t.jsx($e,{shortInfo:A,icon:t.jsx(es,{}),text:m})})]})})]})},uw=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},hw=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:u})=>{const h=uw(e),f=u??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(dw,{h:"100%",d:"column",children:[f&&t.jsx(j_,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,x)=>h[m].map((b,y)=>l.createElement(pw,{leftShift:y,quantity:h[m].length,scale:n,isCurrentEvent:Ts(b,f),isNextEvent:nc(e,b,f),...b,onClick:c,shift:i,key:b.startTime+b.title+x+y,shortInfo:s})))]})},gw=p(C)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,fw=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,xw=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,mw=p(oe)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ee.isMobile} {
        font-size: 0.65rem;
    }
`,bw=Array(24).fill(0).map((e,i)=>`${bi(i)}:00`),yw=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):bw.slice(e[0],e[1]+1);return t.jsx(gw,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(fw,{children:[t.jsx(mw,{children:o}),t.jsx(xw,{})]},o))})},Tc=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=ic({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var u;return Sc((u=i==null?void 0:i[0])==null?void 0:u.startTime,o,n)}});return t.jsxs(g_,{className:"calendar-wrapper",ref:d,children:[t.jsx(yw,{interval:e,scale:n}),t.jsx(hw,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},vw=p.div`
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
`,_w=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=te();return o?t.jsxs(vw,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},ww=p.div`
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
`,jw=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,kw=p(oe)`
    margin-bottom: 20px;
`,Sw=({image:e,list:i,text:n})=>{const{isMobile:s}=Ci();return t.jsxs(ww,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(U,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(kw,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(jw,{children:i==null?void 0:i.map(o=>l.createElement(_w,{...o,key:o.title}))})]})},Tw=p.div`
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
`,Ew=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,Pw=()=>t.jsx(Ew,{children:t.jsx(Tc,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Gn["16:10 - 17:40"],icon:Ki("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Gn["17:50 - 19:20"],icon:Ki("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),Ec=()=>{const[e,i]=l.useState(0),{close:n}=te(),s=[t.jsx(Sw,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(Pw,{})}},"schedule")];return t.jsxs(Tw,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(tr,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>dt(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>dt(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},$w=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return yi(i.startTime)+i.duration<Yn(new Date)}},Cw=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=Ss.useSchedule(),o=jc(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=$w(e==null?void 0:e.today),c=ic({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,m;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(x=>Ts(x,!0)||nc(e.today,x,!0)))??0)}}),d=()=>H.evokePopUpMessage({message:n??"",type:"failure",time:ns.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},_o=p(rn)`
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
`,ti=()=>t.jsxs(C,{d:"column",gap:"8px",children:[t.jsx(Y,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),Ow=()=>{const{allRoutes:e}=Be.useMenu(),{data:{user:i}}=ve.useUser(),{hasNoSchedule:n,loading:s}=Cw(),o=Ut();if(!e||!i||s)return t.jsxs(_o,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(ti,{}),t.jsx(ti,{}),t.jsx(ti,{}),t.jsx(ti,{}),t.jsx(ti,{})]});const a=(i==null?void 0:i.user_status)==="stud"?Hk:n?Wk:Uk;return t.jsx(_o,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Ql,{...e[r],isCurrent:c},r)})})},Aw=(e,i,n)=>({isOpen:i,message:e,position:n}),wo={hints:[]},Dw=()=>q(Nw),Pc=k(),$c=k(),Cc=k(),Nw=J(wo).on(Pc,(e,{message:i,position:n})=>({hints:[...e.hints,Aw(i,e.hints.length===0,n)]})).on($c,e=>({hints:e.hints.splice(1,e.hints.length)})).on(Cc,()=>({...wo})),Iw={useHint:Dw},Rw={evoke:Pc,close:$c,clearStore:Cc},Lw=p.div`
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
`,zw=()=>{const{hints:e}=Iw.useHint(),i=e[0];return i?t.jsx(Lw,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(Q,{type:"hint",title:i.message,onClose:()=>Rw.close(),width:"100%",icon:null})}):null},Mw=p.div`
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
`,Fw=50;function JT({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Fw}){const{data:{user:u}}=ve.useUser();let h="";const f=l.useCallback(g=>{const m=g.currentTarget.clientHeight,x=g.currentTarget.scrollHeight,b=g.currentTarget.scrollTop;x-d<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ge,{text:"Нет результатов",children:c}):t.jsxs(Mw,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var b,y;const x=r?h!==((b=g.fio)==null?void 0:b.charAt(0)):!1;return x&&(h=((y=g.fio)==null?void 0:y.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[x&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(U,{size:4,align:"left",children:h}),t.jsx(fe,{})]}),i(g,(u==null?void 0:u.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(Qe,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Bw=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ve.useUser();return te(),t.jsxs(Ee,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(oe,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(ks,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function Hw(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const XT=p.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>Hw(e)};
        opacity: 1;
    }
`,KT=p.div`
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
`,Oc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Uw=()=>{const e=S?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Wc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:pd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Vc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Gc,title:"Справка-вызов"},{link:sd,title:"Заявление на пересдачу для получения диплома с отличием"},{link:dd,title:"Запрос на изменение персональных данных"},{link:nd,title:"Запрос на восстановление магнитного пропуска"},{link:Fc,title:"Уточнение паспортных данных"},{link:ud,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:hd,title:"Предоставление каникул в связи с окончанием университета"},{link:gd,title:"Предоставление академического отпуска"},{link:fd,title:"Выход из академического отпуска"},{link:xd,title:"Отчисление по инициативе обучающегося"},{link:md,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:qc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Yc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Jc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Kc,title:"Предоставление права проживания льготной категории граждан"},{link:Xc,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Qc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:ed,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:td,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Zc,title:"Расторжение договора найма"},{link:id,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:ca,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:rd,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:ld,title:"Заявка на материальную помощь"},{link:Uc,title:"Оформить социальную стипендию"},{link:cd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:S,links:[{link:od,title:"Отправить документы воинского учета"},{link:ad,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:S,links:[{link:Jn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Jn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Uu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Bc,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:S,links:[{link:Hc,title:"Трудоустройство студентов"}]}]},Ww=()=>[{title:"Цифровые сервисы",links:[{link:Kr,title:"Справка с места работы"},{link:Qr,title:"Справка с места работы для предоставления в визовый центр"},{link:el,title:"Справка о количестве неиспользованных дней отпуска"}]},...Vw()],Vw=()=>[{title:"Цифровые сервисы (в разработке)",disabled:S,links:[{link:Zr,title:"Справка о стаже работы"},{link:tl,title:"Копия трудовой книжки"},{link:il,title:"Копии документов из личного дела"},{link:nl,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:S,title:"Общее",links:[{link:Br,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:S,links:[{link:zn,title:"Форма телефонного справочника"},{link:Hr,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",disabled:S,links:[{link:Vr,title:"Получение нового компьютерного оборудования"},{link:Gr,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:qr,title:"Обслуживание принтеров, МФУ"},{link:Yr,title:"Вопрос по СЭД Directum и 1С"},{link:Jr,title:"Вопрос по Личному кабинету"},{link:Xr,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:S,links:[{link:rl,title:"Справка по форме 2-НДФЛ"},{link:ll,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:sl,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:cl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:S,links:[{link:pl,title:"Предоставление права проживания в жилом помещении"},{link:ul,title:"Временное размещение гостей в студгородке"},{link:hl,title:"Проход гостей на территорию студенческого городка"},{link:gl,title:"Переселение"},{link:fl,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:S,links:[{link:xl,title:"Выдача пропуска (повторная)"},{link:ml,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:S,links:[{link:bl,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:S,links:[{link:Wr,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:S,links:[{link:al,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:S,links:[{link:yl,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:vl,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:S,links:[{link:ol,title:"Произвольный запрос"},{link:ca,title:"Вступить в Профсоюз",isExternalLink:!0}]}],Gw=()=>[{title:"",links:[{link:dl,title:"Заявление на трудоустройство по совместительству"},{link:Mn,title:"Заявление на увольнение"},{link:Hn,title:"Заявление о привлечении к работе в выходной день"},{link:Fn,title:"Заявление о предоставлении отпуска"},{link:Bn,title:"Заявление о переносе отпуска"},{link:Un,title:"Заявление о диспансеризации"},{link:Wi,title:"Заявление на перевод"}]}],qw=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Yw=p.div`
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
`,QT=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=te(),s=e?Ww():Uw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(Yw,{children:[t.jsx(Za,{whereToSearch:s,searchEngine:Oc,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(d=>{if(!d.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(U,{size:4,align:"left",bottomGap:!0,children:d.title}),t.jsx("div",{className:"links",children:d.links.map((u,h)=>{if(!(u.disabled||!qw(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},d.title)}),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})})]})},Jw=p.div`
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
`,Xw=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,ZT=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=te(),s=Gw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Jw,{children:[t.jsx(U,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Za,{whereToSearch:s,searchEngine:Oc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(Xw,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Kw=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),jo={isOpen:!1,pages:[],currentPage:0},Qw=()=>q(Zw),Ac=k(),Dc=k(),Nc=k(),Ic=k(),Zw=J(jo).on(Ac,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(Dc,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(Nc,(e,{value:i})=>({...e,currentPage:i})).on(Ic,()=>({...jo})),Es={useStory:Qw},bt={open:Ac,close:Dc,clearStore:Ic,changeCurrentPage:Nc};p(Ze)`
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
`;const ej=p.div`
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
`,Ps=ej,tj=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,u]=l.useState(r===void 0),[h,f]=l.useState(!a),[g,m]=l.useState(!1),x=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!!j.find(T=>!T.value&&T.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(T=>!T.value&&T.required))&&!n.find(j=>!!j.find(T=>{var A;return T.value.id==="not-chosen"&&!!((A=T.items)!=null&&A.length)}))?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var T;return j.value===null&&!!((T=j.items)!=null&&T.length)})?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},b=()=>{s(j=>{const T=j.default[0].map(A=>({fieldName:A.fieldName??"",title:A.title,value:A.type==="select"&&(A!=null&&A.items)?null:"",type:A.type,items:A.items,width:A.width,required:A.required}));return{...j,data:[...j.data,T]}})},y=j=>{s(T=>{const A=T.data.filter((L,N)=>j!==N);return{...T,data:A}})},O=j=>{s(T=>(T.documents&&(T.documents.files=[...j]),{...T}))},I=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{f(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:f,setIncluded:m,setChangeInputArea:u,handleRemove:y,handleAddNew:b,handleLoadFiles:O,handleConfirm:x,handleCheckbox:I}},ij=p.div`
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
`,nj=p.div``,sj=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(nj,{children:[t.jsx(U,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(Vf,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),oj=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(U,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Ee,{children:[!a&&t.jsx(Ye,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Ye,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),aj=p.div`
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
`,rj=({title:e,value:i,visible:n})=>n?t.jsxs(aj,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,lj=p.div`
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
`,cj=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(lj,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(Su,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(sa,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,dj=p.div`
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
`,pj=({title:e,visible:i})=>i?t.jsx(dj,{children:t.jsx("span",{className:"title",children:e})}):null,uj=p.div`
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
`,hj=p.ul`
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
`,gj=p.li`
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
`,fj=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,m]=l.useState([]),[x,b]=l.useState(!0);return l.useEffect(()=>{if(e){const y=f.filter(O=>O.toLowerCase().includes(e.toLowerCase()));m(y)}else m([])},[e,f]),t.jsxs(uj,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(U,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:y=>{i(y.target.value),b(!0)},placeholder:c}),g.length>0&&t.jsx(hj,{width:"100%",isOpen:x,className:x?"open":"close",itemsAmount:g.length,title:s,children:g.map((y,O)=>t.jsx(gj,{isSelected:!1,onClick:()=>{i(y),m([]),b(!1)},children:y},O))})]})]})},xj=p.div`
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
`,mj=({title:e,visible:i})=>i?t.jsx(xj,{children:t.jsx("span",{className:"title",children:e})}):null,ko=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:f,setData:g,mask:m,editable:x,placeholder:b,autocomplete:y,isSpecificRadio:O,specialType:I,specialFieldsNameConfig:j,minValueInput:T,maxValueInput:A,maxValueLength:L,diff:N,visible:K=!0,onChange:z,onKeyPress:ie,onBlur:ce,onKeyDown:Pe,onKeyUp:je,onFocus:Ve}=e,he=x??(f&&!h),[Ce,Di]=l.useState(!0),ze=(G,pe,Dt)=>{z==null||z(G),g(_e=>(Array.isArray(_e.data[0])?_e.data[pe][Dt??0].value=G:_e.data[pe].type==="checkbox-docs"?_e.data[pe].items[Dt??0].value=!!G:_e.data[pe].value=G,{..._e}))},Qt=(G,pe,Dt)=>{z==null||z(G),g(_e=>(Array.isArray(_e.data[0])?_e.data[pe][Dt??0].value=G:_e.data[pe].value=G,{..._e}))},Ds=(G,pe,Dt)=>{g(_e=>(_e.data[pe].items[Dt??0].files=G,{..._e}))},Ni=G=>{z==null||z(G),g(pe=>(pe.data[o].value=G,{...pe}))},Ii=G=>{z==null||z(G),ie==null||ie(G),ce==null||ce(G),Pe==null||Pe(G),je==null||je(G),Ve==null||Ve(G),g(pe=>(pe.data[o].value=G,{...pe}))};return j&&I&&!Object.values(j).includes(I)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Ye,{text:u,isActive:he,checked:i,setChecked:G=>ze(G,o,a)}):r==="hr-checkbox"?t.jsx(cj,{text:u,isActive:he,checked:i,setChecked:G=>ze(G,o,a)}):r==="auto-complete-input"?t.jsx(fj,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:G=>ze(G,o,a)}):r==="textarea"?t.jsx(Gg,{value:i,title:u,setValue:G=>ze(G,o,a),isActive:he,textAreaAppearance:he,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(sj,{title:u,items:d,setChecked:(G,pe)=>ze(!G,o,pe),setFiles:(G,pe)=>Ds(G,o,pe)}):r==="date-interval"?K?t.jsx(sr,{title:u,required:n,dates:i,setDates:G=>Ii(G),valid:Ce,setValid:Di,minValue:T,diff:N}):null:r==="simple-text"?t.jsx(rj,{title:u,value:i,visible:K}):r==="text-warning"?t.jsx(mj,{title:u,visible:K}):r==="text-header"?t.jsx(pj,{title:u,visible:K}):r==="radio"?t.jsx(oj,{buttons:d,title:u,required:n,current:i,setCurrent:Ni,isSpecificRadio:O}):K?t.jsx(ct,{value:i,title:u,minValue:T,maxValue:A,maxLength:L,setValue:G=>ze(G,o,a),type:r,isActive:he,inputAppearance:he,placeholder:b??u,required:n,mask:m,width:s,autocomplete:y}):null:K?t.jsx(dr,{items:d,setSelected:G=>Qt(G,o,a),selected:i,isActive:he,title:u,width:s,multiple:r==="multiselect",required:n}):null},bj=p.div`
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
`,yj=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(bj,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(U,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Uo,{}):t.jsx(Wo,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Ye,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(He,{}),onClick:()=>null,background:"transparent",flipped:c})]}),vj=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Rs,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(Tu,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(_t,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(Eu,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Rs,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),_j=e=>e.confirmed===void 0?null:t.jsx(Ee,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(vj,{...e,confirmed:e.confirmed})}),Rc=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:m,defaultOpenArea:x=!0})=>{const{openArea:b,changeInputArea:y,included:O,setOpenArea:I,setIncluded:j,setChangeInputArea:T,handleRemove:A,handleAddNew:L,handleLoadFiles:N,handleConfirm:K,handleCheckbox:z}=tj({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c,defaultOpenArea:x});return t.jsxs(t.Fragment,{children:[t.jsxs(ij,{openArea:b,children:[t.jsx(yj,{title:e,included:O,optional:d,confirmed:c,setOpenArea:I,setIncluded:j,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(Q,{type:"alert",visible:!!n,icon:t.jsx(fi,{}),children:n}),t.jsx(Q,{type:"info",visible:!!i&&(y||c===void 0),title:"Как заполнить",icon:t.jsx(Je,{}),children:i}),Array.isArray(s[0])?s.map((ie,ce)=>t.jsxs("div",{className:"data-line",children:[ie.map((Pe,je)=>t.jsx(ko,{documents:a,changeInputArea:y&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:je,specialFieldsNameConfig:m,...Pe},je)),y&&u&&t.jsx(_,{icon:t.jsx(Pu,{}),textColor:w.red.main,onClick:()=>A(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((ie,ce)=>t.jsx(ko,{documents:a,changeInputArea:y&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:m,...ie},ce)),u&&y&&t.jsx(_,{icon:t.jsx($u,{}),text:"Добавить",onClick:L,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&y&&a.visible!==!1&&t.jsx(nr,{files:a.files,setFiles:ie=>N(ie),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(ie=>l.createElement(rf,{...ie,key:ie.title})),t.jsx(Ye,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||y,checked:(o==null?void 0:o.value)??!1,setChecked:z}),t.jsx(_j,{confirmed:c,changeInputArea:y,setData:r,setChangeInputArea:T,handleConfirm:K})]})]}),h&&t.jsx(fe,{})]})},wj=p.div`
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
`,jj=p.div`
    display: flex;
    margin-bottom: -20px;
`,kj=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Lc=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:Te(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(jj,{children:e.map((r,c)=>t.jsxs(kj,{lastElement:c===e.length-1,children:[t.jsx(wj,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(Ig,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Rc,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Sj=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Tj=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Ej=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),$s=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return Kw(u);if(Array.isArray(u.data[0])){const h=u.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>So(m)))),f={};return f[e]=JSON.stringify(h),f}else return u.data.map(h=>So(h))}).flat(),r=i.map(u=>{var f,g;const h={};if((f=u.documents)!=null&&f.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((g=u.documents)==null?void 0:g.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var f,g;const h={};return(f=u.optionalCheckbox)!=null&&f.fieldName&&(h[(g=u.optionalCheckbox)==null?void 0:g.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Re.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},So=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Pj(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Pj=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Cs=p.div`
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
`;var bn=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(bn||{}),$j=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))($j||{});const Cj=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Oj=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Aj=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Oj},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Cj}]}},Dj=()=>{var z;const[e,i]=l.useState(null),[n,s]=l.useState(Li.kvdCert),[o,a]=l.useState(Li.fluorographyCert),[r,c]=l.useState(Li.vichRwCert),[d,u]=l.useState(Li.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:f}}=ve.useUser(),[g,m]=l.useState(!1),[x,b]=l.useState(!1),[y,O]=l.useState(null),[I,j]=l.useState(null),[T,A]=l.useState(null),L=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(ge,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const N=!!e&&!!I&&!!y&&!!T;if(l.useEffect(()=>{h&&(i(Aj(h)),O(Tj()),j(Ej()),A(Sj()))},[h]),!N)return null;const K=[[{dataForm:e,setDataForm:i}],[{dataForm:I,setDataForm:j}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx(Cs,{isDone:L,children:t.jsxs(rs,{children:[t.jsx(U,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Lc,{stagesConfig:K}),t.jsx(kt,{text:"Отправить",action:()=>$s(bn.USG_GETHOSTEL_OOZ,[e,I,y,T,n,o,r,d],b,m),isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:L,isActive:(((z=e.optionalCheckbox)==null?void 0:z.value)??!0)&&Te(e)&&Te(o)&&Te(r)&&Te(d)&&Te(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Nj=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],Ij=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],Rj=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],Lj=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],zj=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],Mj=[{id:0,title:"1"},{id:1,title:"2"}],Fj=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],Bj=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],Hj=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],Uj=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),Wj=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Nj,width:"100%",editable:!0,required:!0}]}),Vj=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Ij,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),Gj=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:Rj,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:Lj,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:zj,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:Mj,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:Fj,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),qj=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:Bj,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),To=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:Hj,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},zc=()=>{var A;const[e,i]=l.useState(null),[n,s]=l.useState(Wj()),[o,a]=l.useState(Vj()),[r,c]=l.useState(Gj()),[d,u]=l.useState(qj()),[h,f]=l.useState(To(null)),[g,m]=l.useState(!1),[x,b]=l.useState(!1),[y,O]=l.useState(!1),{data:{dataUserApplication:I}}=ye.useApplications();l.useEffect(()=>{I&&i(Uj(I))},[I]);const j=l.useMemo(()=>{var L,N;return((N=(L=h==null?void 0:h.data[0])==null?void 0:L.value)==null?void 0:N.id)!==0},[(A=h==null?void 0:h.data[0])==null?void 0:A.value]);if(l.useEffect(()=>{h&&f(To(h.data))},[j]),!e)return null;const T=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:f}]];return t.jsx(Cs,{isDone:!1,children:t.jsxs(rs,{children:[t.jsx(U,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Lc,{stagesConfig:T}),t.jsx(Ye,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(kt,{text:x?"Отправлено":"Отправить",action:()=>$s(bn.MIL_REG,[e,n,o,r,d,h],O,b),isLoading:y,completed:x,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&Te(e)&&Te(n)&&Te(r)&&Te(d)&&Te(h)&&Te(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Yj=Object.freeze(Object.defineProperty({__proto__:null,default:zc},Symbol.toStringTag,{value:"Module"})),Jj=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],Xj=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:Jj},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),Kj=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Mc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:u}}=ye.useApplications();return l.useEffect(()=>{u&&i(Xj(u))},[u]),l.useEffect(()=>{e&&u&&c(Kj(e.data))},[e]),t.jsx(Cs,{isDone:d,children:!!e&&!!i&&t.jsxs(rs,{children:[t.jsx(Rc,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(kt,{text:d?"Отправлено":"Отправить",action:()=>$s(bn.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:Te(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Qj=Object.freeze(Object.defineProperty({__proto__:null,default:Mc},Symbol.toStringTag,{value:"Module"})),Zj=l.lazy(()=>v(()=>import("./index-4557692c.js"),["assets/index-4557692c.js","assets/vendor-4355a046.js"])),ek=l.lazy(()=>v(()=>import("./index-cdd44f54.js"),["assets/index-cdd44f54.js","assets/vendor-4355a046.js"])),tk=l.lazy(()=>v(()=>import("./index-4c421a38.js"),["assets/index-4c421a38.js","assets/vendor-4355a046.js"])),ik=l.lazy(()=>v(()=>import("./index-ae1b60f4.js"),["assets/index-ae1b60f4.js","assets/vendor-4355a046.js"])),nk=l.lazy(()=>v(()=>import("./index-dc78b411.js"),["assets/index-dc78b411.js","assets/vendor-4355a046.js"])),sk=l.lazy(()=>v(()=>import("./index-b0ee57cb.js"),["assets/index-b0ee57cb.js","assets/vendor-4355a046.js","assets/ui-473dfc85.js"])),ok=l.lazy(()=>v(()=>import("./index-13f7737a.js"),["assets/index-13f7737a.js","assets/vendor-4355a046.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ak=l.lazy(()=>v(()=>import("./index-e395233e.js"),["assets/index-e395233e.js","assets/vendor-4355a046.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),rk=l.lazy(()=>v(()=>import("./index-5ae6abb8.js"),["assets/index-5ae6abb8.js","assets/vendor-4355a046.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),lk=l.lazy(()=>v(()=>import("./index-eba713d7.js"),["assets/index-eba713d7.js","assets/vendor-4355a046.js"])),ck=l.lazy(()=>v(()=>import("./index-b81d8b1b.js"),["assets/index-b81d8b1b.js","assets/vendor-4355a046.js","assets/index-19575c1b.js"])),dk=l.lazy(()=>v(()=>import("./index-f023db32.js"),["assets/index-f023db32.js","assets/vendor-4355a046.js","assets/is-valid-url-08a91344.js"])),pk=l.lazy(()=>v(()=>import("./index-88b2738f.js"),["assets/index-88b2738f.js","assets/vendor-4355a046.js"])),uk=l.lazy(()=>v(()=>import("./index-98e91609.js"),["assets/index-98e91609.js","assets/vendor-4355a046.js"])),hk=l.lazy(()=>v(()=>import("./index-89ad9b60.js"),["assets/index-89ad9b60.js","assets/vendor-4355a046.js"])),gk=l.lazy(()=>v(()=>import("./index-437702c1.js"),["assets/index-437702c1.js","assets/vendor-4355a046.js"])),fk=l.lazy(()=>v(()=>import("./index-97846bf2.js"),["assets/index-97846bf2.js","assets/vendor-4355a046.js"])),xk=l.lazy(()=>v(()=>import("./index-53fd71c5.js"),["assets/index-53fd71c5.js","assets/vendor-4355a046.js"])),mk=l.lazy(()=>v(()=>import("./index-588776d9.js"),["assets/index-588776d9.js","assets/vendor-4355a046.js"])),bk=l.lazy(()=>v(()=>import("./index-58c3a8d1.js"),["assets/index-58c3a8d1.js","assets/vendor-4355a046.js"])),yk=l.lazy(()=>v(()=>import("./index-49f68b62.js"),["assets/index-49f68b62.js","assets/vendor-4355a046.js"])),vk=l.lazy(()=>v(()=>import("./index-5950235b.js"),["assets/index-5950235b.js","assets/vendor-4355a046.js","assets/BoldText-01da95f8.js"])),_k=l.lazy(()=>v(()=>import("./index-d43c796c.js"),["assets/index-d43c796c.js","assets/vendor-4355a046.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Yj),void 0));const wk=l.lazy(()=>v(()=>import("./index-775b6d86.js"),["assets/index-775b6d86.js","assets/vendor-4355a046.js"])),jk=l.lazy(()=>v(()=>import("./index-a4d1272f.js"),["assets/index-a4d1272f.js","assets/vendor-4355a046.js"])),kk=l.lazy(()=>v(()=>import("./index-99223723.js"),["assets/index-99223723.js","assets/vendor-4355a046.js"])),Sk=l.lazy(()=>v(()=>import("./index-face3f0a.js"),["assets/index-face3f0a.js","assets/vendor-4355a046.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Tk=l.lazy(()=>v(()=>import("./index-dd3485f6.js"),["assets/index-dd3485f6.js","assets/vendor-4355a046.js","assets/get-method-obtaining-fields-fe0a2d24.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Ek=l.lazy(()=>v(()=>import("./index-20c4fa99.js"),["assets/index-20c4fa99.js","assets/vendor-4355a046.js"])),Pk=l.lazy(()=>v(()=>import("./index-266fcc7f.js"),["assets/index-266fcc7f.js","assets/vendor-4355a046.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Qj),void 0));const $k=l.lazy(()=>v(()=>import("./index-28b69892.js"),["assets/index-28b69892.js","assets/vendor-4355a046.js"])),Ck=l.lazy(()=>v(()=>import("./index-072d6322.js"),["assets/index-072d6322.js","assets/vendor-4355a046.js"])),Ok=l.lazy(()=>v(()=>import("./index-ff5a2ef9.js"),["assets/index-ff5a2ef9.js","assets/vendor-4355a046.js"])),Ak=l.lazy(()=>v(()=>import("./index-e1759e40.js"),["assets/index-e1759e40.js","assets/vendor-4355a046.js"])),Dk=l.lazy(()=>v(()=>import("./index-725b6b5d.js"),["assets/index-725b6b5d.js","assets/vendor-4355a046.js"])),Nk=l.lazy(()=>v(()=>import("./index-7b1d57e2.js"),["assets/index-7b1d57e2.js","assets/vendor-4355a046.js","assets/get-divisions-96cfa1b1.js"])),Ik=l.lazy(()=>v(()=>import("./index-a158ca75.js"),["assets/index-a158ca75.js","assets/vendor-4355a046.js"])),P="/applications",Rk="/application-for-superior-room",Lk="/acad-performance",zk="/dormitory",Fc=P+"/clarification-of-passport-data",Bc=P+"/arbitrary-request",Hc=P+"/student-employment",Uc=P+"/social-scollarship",Wc=P+"/certificate-of-attendance",Vc=P+"/social-agencies",Gc=P+"/paper-call",qc=P+"/regular-accommodation",Yc=P+"/full-time-part-time-form",Jc=P+"/accommodation-correspondence-form",Xc=P+"/academic-leave-accommodation",Kc=P+"/preferential-accommodation",Qc=P+"/family-room",Zc=P+"/termination-of-employment-contract",ed=P+"/relocation-inside-hostel",td=P+"/relocation-to-another-hostel",id=P+"/accommodation-for-graduates",Jn=P+"/payment-recipient",nd=P+"/restoring-the-magnetic-pass",sd=P+"/retake-for-diploma",od=P+"/military-registration-documents",ad=P+"/military-registration",rd=P+"/financial-support",ld=P+"/financial-assistance",cd=P+"/increased-state-academic-scholarship",dd=P+"/changing-personal-data",pd=P+"/student-status",ud=P+"/state-accreditation",Mk=P+"/military-registration-card",hd=P+"/holidays-after-training",gd=P+"/provision-academic-leave",fd=P+"/exit-academic-leave",xd=P+"/independently-deducted",md=P+"/extension-attestation",Fk="/physical-education/student",nt=()=>Se({oldVersionUrl:"/sprav"}),ii=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:P,Component:ck,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...Nl,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(lt,{}),path:Ji,Component:xs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Ls,{}),path:zk,Component:tk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Cu,{}),path:Lk,Component:ek,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:Fk,pageSize:"big",Component:sk,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Vo,{}),path:$l,Component:dk,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Ou,{}),path:Al,Component:cs,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Ls,{}),path:Rk,Component:Zj,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(Ra))}}),Eo=e=>{var i,n,s;return{...Il,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(oi,{}),path:Fc,Component:ik,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(oi,{}),path:Bc,Component:Nk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(oi,{}),path:Hc,Component:S?nt:Ik,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(X,{}),path:Uc,Component:S?nt:nk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(X,{}),path:Wc,Component:ok,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(X,{}),path:Vc,Component:ak,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(X,{}),path:Gc,Component:rk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(X,{}),path:qc,Component:lk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(X,{}),path:Yc,Component:Dj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(X,{}),path:Jc,Component:Ak,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(X,{}),path:Xc,Component:pk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(X,{}),path:Kc,Component:uk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(X,{}),path:Qc,Component:Dk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(X,{}),path:Zc,Component:hk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(X,{}),path:ed,Component:gk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(X,{}),path:td,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(Se,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):xk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:X,path:id,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?fk:()=>t.jsx(Se,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(X,{}),path:Jn,Component:mk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(X,{}),path:nd,Component:bk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(X,{}),path:od,Component:S?nt:_k,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(Au,{}),path:ad,Component:S?nt:zc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:P},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(X,{}),path:sd,Component:vk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(X,{}),path:cd,Component:S?nt:yk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(X,{}),path:rd,Component:S?nt:wk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(X,{}),path:ld,Component:S?nt:jk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(X,{}),path:dd,Component:kk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(X,{}),path:pd,Component:Sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(X,{}),path:ud,Component:Tk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(X,{}),path:hd,Component:Ek,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(X,{}),path:gd,Component:Pk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(X,{}),path:fd,Component:Mc,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(X,{}),path:xd,Component:$k,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(X,{}),path:md,Component:Ck,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(X,{}),path:Mk,Component:S?nt:Ok,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P}}},Po=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Bk=["settings","profile","chat","schedule","payments","project-activity","all-students"],Hk=["home","schedule","acad-performance","all","profile"],Uk=["home","schedule","alerts","all","profile"],Wk=["home","doclist","alerts","all","profile"],Vk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(F.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??sn,s=la.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},$o={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Gk=()=>q(Yk),bd=k(),yd=k(),vd=k(),_d=k(),qk=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},ni=e=>{if(!e)return oo();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(oo()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},Yk=J($o).on(bd,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(yd,()=>({...$o})).on(vd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?ni(n)[window.location.hash.slice(2,window.location.hash.length)]:ii()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...ni(n),...ao()}:{...ii(),...Eo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?ni(n):ii(),leftsideBarRoutes:Po(Vk(i),(i==null?void 0:i.user_status)==="staff"?ni(n):ii()),homeRoutes:Po(s??JSON.parse(localStorage.getItem(F.HomeRoutes)??JSON.stringify(Bk)),(i==null?void 0:i.user_status)==="staff"?{...ni(n),...ao()}:{...ii(),...Eo(i)})})).on(_d,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:qk(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Be={useMenu:Gk},tt={changeOpen:bd,clearStore:yd,defineMenu:vd,changeNotifications:_d},wd=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:Cl,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:At,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Ji,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Ji,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:vs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Fr,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:ms,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:P,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:wl,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Jk={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},jd=(e,i)=>i.filter(({type:n})=>e[Jk[n]]),Xk={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},yn=M(async({settings:e})=>{try{const{data:i}=await Lh();return jd(e,i).map(({id:n,type:s,title:o,text:a})=>wd(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Kk=M(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&tt.changeNotifications({page:i,notifications:1})})}),Qk=M(({notifications:e})=>{const{pageId:i}=e[0];i&&tt.changeNotifications({page:i,notifications:1})}),vn=M(async({id:e,pageId:i})=>{try{return await zh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),_n=M(async()=>{try{await Mh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Zk=e=>{e&&tt.changeNotifications({page:e,notifications:0})},kd=k(),Sd=k(),Td=k(),Ed=k(),Pd=k(),$d=k(),Cd=k(),ae=J(Xk).reset(Cd);Le({from:Sd,to:yn});$({clock:yn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});$({clock:yn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});$({clock:yn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,Kk]});$({clock:kd,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,Qk]});Le({from:Ed,to:vn});$({clock:vn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Zk(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});$({clock:vn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});$({clock:vn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});Le({from:Pd,to:_n});$({clock:_n.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});$({clock:_n.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});$({clock:_n.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});$({clock:Td,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});$({clock:$d,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const eS=()=>we(ae),Et={initialize:Sd,add:kd,clearById:Ed,clearVisibleById:Td,clearAll:Pd,clearAllVisible:$d,clearStore:Cd},it={useLkNotifications:eS},tS=Object.freeze(Object.defineProperty({__proto__:null,events:Et,selectors:it},Symbol.toStringTag,{value:"Module"})),Co={messages:null,error:null},iS=()=>({data:q(Oo).messages,loading:q(pi.pending),error:q(Oo).error}),pi=M(async()=>{try{return(await ph("1")).data}catch(e){throw new Error(e)}}),Od=k(),Oo=J(Co).on(pi,e=>({...e,error:null})).on(pi.doneData,(e,i)=>({...e,messages:i})).on(pi.failData,(e,i)=>({...e,error:i.message})).on(Od,()=>({...Co})),nS={useMessages:iS},sS={getMessagesFx:pi},oS={clearStore:Od},aS=Object.freeze(Object.defineProperty({__proto__:null,effects:sS,events:oS,selectors:nS},Symbol.toStringTag,{value:"Module"})),Ao={type:null,personalNotifications:null,error:null,completed:!1},rS=()=>({data:q(zt).personalNotifications,loading:q(Lt.pending),error:q(zt).error,completed:q(zt).completed}),lS=()=>q(zt).type,Ad=k(),Dd=M(e=>e),Lt=M(async()=>{const{type:e}=zt.getState();if(e==="notifications")try{return(await xa()).data}catch(i){throw new Error(i)}try{return{docs:(await ma()).data}}catch(i){throw new Error(i)}}),Zi=M(async e=>{const{type:i}=zt.getState(),n=i==="notifications"?Eh:$h;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),Nd=k(),zt=J(Ao).on(Dd,(e,i)=>({...e,type:i})).on(Lt,e=>({...e,error:null})).on(Lt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Lt.failData,(e,i)=>({...e,error:i.message})).on(Zi.doneData,e=>({...e})).on(Zi.failData,(e,i)=>({...e,error:i.message})).on(Ad,(e,i)=>({...e,completed:i.completed})).on(Nd,()=>({...Ao}));Zi.doneData.watch(()=>Lt());const cS={usePersonalNotifications:rS,useType:lS},dS={setNotificationsType:Dd,getPersonalNotificationsFx:Lt,viewPersonalNotificationsFx:Zi},pS={changeCompleted:Ad,clearStore:Nd},uS=Object.freeze(Object.defineProperty({__proto__:null,effects:dS,events:pS,selectors:cS},Symbol.toStringTag,{value:"Module"})),hS=on({api:{get:Sh}}),Do={superiorRoom:null,error:null},gS=()=>({data:q(No).superiorRoom,loading:q(ui.pending),error:q(No).error}),Id=k(),fS=M(async e=>{});Le({from:Id,to:fS});const ui=M(async()=>{try{return(await xh()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Rd=k(),No=J(Do).on(ui,e=>({...e,error:null})).on(ui.doneData,(e,i)=>({...e,superiorRoom:i})).on(ui.failData,(e,i)=>({...e,error:i.message})).on(Rd,()=>({...Do})),xS={useSuperiorRoom:gS},mS={getSuperiorRoomFx:ui},bS={postSuperiorRoom:Id,clearStore:Rd},yS=Object.freeze(Object.defineProperty({__proto__:null,effects:mS,events:bS,selectors:xS},Symbol.toStringTag,{value:"Module"})),Io={teacherDataVerification:null,error:null,completed:!1},vS=()=>({data:q($n).teacherDataVerification,loading:q(hi.pending),error:q($n).error,completed:q($n).completed}),Ld=k(),zd=k(),_S=M(async e=>{try{return(await Dh(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Le({from:Ld,to:_S});const hi=M(async()=>{try{return(await Ah()).data}catch{throw new Error("Не удалось войти")}}),Md=k(),$n=J(Io).on(hi,e=>({...e,error:null})).on(hi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(hi.failData,(e,i)=>({...e,error:i.message})).on(zd,(e,i)=>({...e,completed:i.completed})).on(Md,()=>({...Io})),wS={useTeacherDataVerification:vS},jS={getTeacherDataVerificationFx:hi},kS={postTeacherDataVerification:Ld,changeCompleted:zd,clearStore:Md},SS=Object.freeze(Object.defineProperty({__proto__:null,effects:jS,events:kS,selectors:wS},Symbol.toStringTag,{value:"Module"})),TS=[Hh,qe,Zh,ig,gg,aS,uS,Ub,Jh,hS,X_,yS,SS,rg,Wh,tS],ES=()=>{TS.forEach(e=>{e.events.clearStore()})},PS=()=>{localStorage.removeItem(F.Token),localStorage.removeItem(F.JWT),localStorage.removeItem(F.JWTRefresh),sessionStorage.removeItem(F.Token),sessionStorage.removeItem(F.JWT),localStorage.removeItem(F.JWTRefresh)},at=localStorage.getItem(F.Token)??"",rt=()=>JSON.parse(localStorage.getItem(F.SavePassword)??"true"),wn=M(async e=>{try{const{data:i}=await Zu(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await $t.post("/old",n)}catch{}return PS(),rt()?(localStorage.setItem(F.Token,i.token),localStorage.setItem(F.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(F.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(F.Token,i.token),sessionStorage.setItem(F.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(F.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),yt=M(async e=>{try{const[i,n]=await Promise.all([eh(e.token),fa()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:Fh({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:rt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),Xn=M(async e=>{try{return(await th(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Fd=M(()=>{rt()?(localStorage.removeItem(F.Token),localStorage.removeItem(F.JWT),localStorage.removeItem(F.JWTRefresh)):(sessionStorage.removeItem(F.Token),sessionStorage.removeItem(F.JWT),sessionStorage.removeItem(F.JWTRefresh)),ES()}),Bd=e=>{const i=localStorage.getItem(F.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(F.SavePassword,n.toString()),n},Hd=k(),Os=k(),Ud=k(),Wd=k(),Vd=k();Le({from:Hd,to:wn});$({clock:wn.doneData,target:yt});Le({from:Os,to:Fd});at&&rt()?yt({token:at,jwt:localStorage.getItem(F.JWT)}):Fd();const $S={currentUser:null,error:null,isAuthenticated:!!(at!=null&&at.length),savePassword:rt(),loginEuz:""};Bd();const Gd=J($S).on(yt,e=>({...e,error:null})).on(yt.doneData,(e,i)=>i).on(yt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(at!=null&&at.length),savePassword:rt()})).on(wn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:rt()})).on(Os,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:rt()})).on(Vd,(e,{savePassword:i})=>({...e,savePassword:Bd(i)})).on(Xn,e=>({...e,error:null})).on(Xn.doneData,(e,i)=>({...e,loginEuz:i})).on(yt.failData,(e,i)=>({...e,error:i.message})).on(Wd,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Ud,e=>({...e,currentUser:null})),ve={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Gd);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(wn.pending),error:i}}},Pt={login:Hd,logout:Os,changeSavePassword:Vd,clear:Ud,update:Wd},CS={getUserFx:yt,getLoginEuzFx:Xn},OS=()=>{const e="0.0.1";localStorage.getItem(F.Version)!==e&&(localStorage.clear(),localStorage.setItem(F.Version,e),Pt.logout())},AS=p.div`
    max-height: 400px;
    overflow-y: auto;
`,DS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ge,{text:e.message,image:t.jsx(Du,{}),children:t.jsxs(C,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(fe,{}),t.jsx(Hl,{title:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:t.jsxs(C,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(Nu,{})]})}),children:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(AS,{children:e.stack})})})]})})});class qd extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(DS,{error:this.state.error}):this.props.children}}const NS=S?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",gi=$t.create({baseURL:NS}),IS={headers:{"Content-Type":"application/json"}};gi.interceptors.request.use(ga);gi.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await An(gi)(e):e},An(gi));const RS=async e=>{var n;const i=await gi.post("",{query:e},IS);if(Yd(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Yd(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Yd(e[i]))return!0}return!1}const LS=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Jd=k(),As=Iu({effect:async({currentUser:e})=>({...(await RS(LS((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Gd}),zS=Ru(As,null);$({clock:Jd,target:As});const MS=As.pending,FS={load:Jd},eE={peTeacher:zS,isLoading:MS},Xd=k(),Kd=M(yh);$({clock:Xd,target:Kd});const Qd=J([]),tE=Kn(Qd,e=>e.map(i=>i.divisionName));$({clock:Kd.doneData,target:Qd});function Zd(e){const{pathname:i}=Ut();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const BS=()=>{const{allRoutes:e}=Be.useMenu();return e?t.jsxs(aa,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(ra,{path:i,component:n,exact:!s},i)),t.jsx(Ge,{exact:!0,to:bs})]}):null},HS=le.memo(BS),US=p.div`
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
`,WS=()=>{const{open:e,content:i,position:n}=uf.useContextMenu(),s=l.useRef(null);return qt(s,()=>Ie.close()),t.jsx(xn,{isOpen:e,children:t.jsx(US,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},ep=200,VS=5e3,GS=()=>{const{visibleNotifications:e}=it.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Et.clearVisibleById(a)},ep)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??VS))},[e]),{handleClose:o,closing:i}},qS=p.div`
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
`,YS=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${ep/1e3}s forwards;

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
`;const JS=()=>{const{visibleNotifications:e}=it.useLkNotifications(),{closing:i,handleClose:n}=GS();return t.jsx(qS,{children:e.map(s=>t.jsx(YS,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Gl,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Ro=p.div`
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
`,XS=({loading:e})=>{const{data:{user:i},error:n}=ve.useUser(),s=i?De(i==null?void 0:i.fullName):w.blue.main,o=()=>CS.getUserFx(JSON.parse(localStorage.getItem(F.Token)??"")),a=()=>Pt.logout();return n?t.jsx(Ro,{$loading:!0,color:s,children:t.jsx(ge,{text:n,children:t.jsxs(C,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(Qn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(Ro,{color:s,$loading:e,children:[t.jsx(ln,{short:!0,width:"100px"}),e&&t.jsx(Qe,{})]})},KS=p.div`
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
`,QS=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Es.useStory();return t.jsx(KS,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():bt.changeCurrentPage({value:o+1})})})},ZS=p(rn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,eT=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Es.useStory();return t.jsxs(ZS,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(QS,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(zu,{}):t.jsx(Lu,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Xe,{}),onClick:n})]})},tT=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,iT=p(Ze)`
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
`,nT=p.div`
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
    transform: ${({align:e})=>tT(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,sT=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=Wt();return t.jsxs(iT,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(as,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(nT,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(U,{size:2,align:f,children:o}),t.jsx(oe,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),bt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},oT=p.div`
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
`,Lo=p.div`
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
`,aT=()=>{const{pages:e,isOpen:i,currentPage:n}=Es.useStory(),s=l.useRef(null);qt(s,()=>bt.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(xn,{isOpen:i,children:t.jsx(oT,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(eT,{pages:e.length,onClose:()=>bt.close(),playing:o}),t.jsx(Lo,{left:"15px",onClick:()=>{n!==0&&bt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(vi,{})}),t.jsx(sT,{setPlaying:a,currentPage:n,...r}),t.jsx(Lo,{right:"15px",onClick:()=>{n!==e.length-1?bt.changeCurrentPage({value:n+1}):bt.close(),a(!0)},children:t.jsx(pt,{})})]})})})},rT=()=>{const{data:{user:e}}=ve.useUser(),{notifications:i,loading:n,loaded:s}=it.useLkNotifications(),{settings:o}=Gt.useSettings(),[a]=_i([Ia.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{Dn.getElectronicInteraction(),a&&!a.status&&Et.add(wd("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Dn.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(jd(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,Et.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{tt.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},lT=()=>{const{data:{user:e}}=ve.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Wu);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},cT=()=>{const e=wr(),{open:i}=te(),n=lT();return rT(),gt(),l.useEffect(()=>{n&&n&&i(t.jsx(Ec,{}),"Что нового")},[n]),{currentPage:e}},dT=p.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,pT=p.div`
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
`,uT=p.div`
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
`,hT=()=>{const{data:{user:e}}=ve.useUser(),i=l.useRef(null),{allRoutes:n}=Be.useMenu(),{currentPage:s}=cT(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return Zd(i.current),t.jsxs(dT,{children:[t.jsx(XS,{loading:!e||!n}),t.jsx(aT,{}),t.jsx(V1,{}),t.jsxs(pT,{children:[t.jsx(O1,{headerVisible:o,currentPage:s}),t.jsx(uT,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(qd,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(HS,{})})})}),t.jsx(Ow,{})]}),t.jsx(Q1,{}),t.jsx(q1,{}),t.jsx(e_,{}),t.jsx(WS,{}),t.jsx(zw,{}),t.jsx(JS,{})]})},gT=le.memo(hT),fT=()=>{const{data:{isAuthenticated:e,user:i}}=ve.useUser(),{data:n}=qe.selectors.useData(),{settings:s}=Gt.useSettings();return Zd(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Re.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(qe.effects.getFx(),Re.getWorkerPosts(),Xd()),FS.load())},[e,i]),l.useEffect(()=>{i&&(s?tt.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):vg.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(gT,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(aa,{children:[cv.map(({path:o,Component:a},r)=>t.jsx(ra,{path:o,component:a,exact:!0},r)),t.jsx(Ge,{exact:!0,to:_l})]})})},xT=p.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;OS();const mT=()=>(gt(),t.jsx(Uv,{children:t.jsx(Mu,{basename:"/",children:t.jsx(xT,{children:t.jsx(qd,{children:t.jsx(fT,{})})})})}));Fu.render(t.jsxs(le.StrictMode,{children:[t.jsx(C_,{}),t.jsx(mT,{})]}),document.getElementById("root"));export{W as $,$j as A,Cs as B,Ye as C,Gd as D,ee as E,rs as F,C as G,fe as H,Rc as I,Iy as J,mt as K,w as L,Q as M,Hm as N,Qe as O,Yt as P,oe as Q,st as R,kt as S,U as T,Ps as U,ls as V,Ue as W,eE as X,Gg as Y,ge as Z,P1 as _,ag as a,re as a$,Kw as a0,$T as a1,Ee as a2,Ha as a3,wT as a4,ji as a5,ve as a6,r_ as a7,nr as a8,_T as a9,Nv as aA,Al as aB,rv as aC,ZT as aD,ht as aE,ue as aF,Vt as aG,Ke as aH,CT as aI,tE as aJ,Gh as aK,Ws as aL,$s as aM,_0 as aN,cb as aO,DT as aP,db as aQ,OT as aR,I0 as aS,AT as aT,hs as aU,mb as aV,Qd as aW,NT as aX,vv as aY,ij as aZ,yj as a_,Pt as aa,Tm as ab,bi as ac,ki as ad,dS as ae,Et as af,cS as ag,js as ah,XT as ai,KT as aj,ET as ak,Re as al,QT as am,on as an,Ze as ao,Wn as ap,Ml as aq,Ch as ar,Oh as as,Qa as at,JT as au,ks as av,Za as aw,Iv as ax,Lv as ay,Be as az,Te as b,Oi as b$,Bc as b0,Ji as b1,lv as b2,LT as b3,jv as b4,wv as b5,Nh as b6,We as b7,be as b8,IT as b9,Ss as bA,Ln as bB,J_ as bC,Yl as bD,w1 as bE,R as bF,Pn as bG,zT as bH,o_ as bI,HT as bJ,UT as bK,WT as bL,BT as bM,FT as bN,MT as bO,me as bP,d1 as bQ,Jl as bR,Qy as bS,Bw as bT,dv as bU,av as bV,ov as bW,sv as bX,lc as bY,Y_ as bZ,fn as b_,vs as ba,Ai as bb,Y as bc,Ie as bd,cn as be,qt as bf,Ia as bg,Dn as bh,Wh as bi,Ne as bj,ft as bk,ot as bl,py as bm,dy as bn,Cw as bo,qT as bp,VT as bq,pw as br,nc as bs,Ts as bt,YT as bu,Gt as bv,Ci as bw,Cl as bx,f1 as by,De as bz,rg as c,ns as c0,GT as c1,B_ as c2,Dl as c3,H_ as c4,U_ as c5,uc as c6,It as c7,Q_ as c8,jc as c9,it as cA,iv as cB,m1 as cC,ST as cD,xS as cE,mS as cF,TT as cG,Bh as cH,vT as cI,yT as cJ,Ki as cK,$_ as cL,as as cM,Hh as cN,rf as cO,PT as cP,Cj as cQ,Li as cR,Tj as cS,Ej as cT,Sj as cU,Lc as cV,hS as cW,K_ as ca,Tc as cb,L_ as cc,g_ as cd,yw as ce,hw as cf,gt as cg,oc as ch,pc as ci,Mr as cj,ew as ck,Fl as cl,ro as cm,la as cn,sn as co,uv as cp,pv as cq,kT as cr,jT as cs,Ll as ct,Rl as cu,RT as cv,rn as cw,g1 as cx,CS as cy,Ri as cz,zn as d,sg as e,ng as f,V as g,kS as h,H as i,wS as j,jS as k,se as l,bn as m,co as n,ct as o,RS as p,_ as q,Xa as r,ye as s,dr as t,te as u,et as v,Xg as w,Ih as x,u1 as y,FS as z};
