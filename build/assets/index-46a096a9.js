import{F as Je,a as mi,b as kt,c as nn,H as In,d as Ot,y as z,u as k,p as K,e as G,x as $,S as Le,m as is,r as l,s as p,j as t,f as Ke,I as pp,g as up,h as hp,i as gp,k as Bo,A as ns,l as O,n as fp,o as ke,q as Ht,t as En,v as xp,w as mp,R as le,z as St,B as wi,C as ht,L as Z,D as bi,E as bp,G as yp,J as sn,K as Gt,M as vp,N as _p,O as gt,P as Ue,Q as Ho,T as qt,U as Uo,V as ss,W as ct,X as Wo,Y as Vo,Z as ji,_ as Go,$ as qo,a0 as wp,a1 as jp,a2 as kp,a3 as Sp,a4 as qe,a5 as Ut,a6 as Tp,a7 as Ep,a8 as Pp,a9 as Cp,aa as $p,ab as Op,ac as X,ad as Ap,ae as Yo,af as Jo,ag as Dp,ah as Np,ai as Rn,aj as At,ak as os,al as Ko,am as Ip,an as Rp,ao as Lp,ap as Xo,aq as zp,ar as on,as as Mp,at as Qo,au as Zo,av as ea,aw as ta,ax as Fp,ay as Bp,az as ia,aA as na,aB as Gi,aC as Hp,aD as Up,aE as li,aF as sa,aG as oa,aH as ie,aI as as,aJ as Rs,aK as aa,aL as Wp,aM as Vp,aN as Gp,aO as qp,aP as Hi,aQ as Yp,aR as Jp,aS as Kp,aT as Xp,aU as Qp,aV as Zp,aW as eu,aX as tu,aY as iu,aZ as nu,a_ as su,a$ as ou,b0 as au,b1 as ru,b2 as lu,b3 as cu,b4 as du,b5 as pu,b6 as uu,b7 as hu,b8 as gu,b9 as fu,ba as ra,bb as xu,bc as mu,bd as bu,be as yu,bf as vu,bg as _u,bh as wu,bi as rs,bj as ju,bk as ku,bl as Su,bm as Tu,bn as Eu,bo as Pu,bp as Cu,bq as $u,br as Ou,bs as la,bt as Au,bu as Ln,bv as Du,bw as Nu,bx as Iu,by as Ls,bz as Ru,bA as Lu,bB as zu,bC as Mu,bD as ca,bE as zs,bF as Fu,bG as Bu,bH as Hu,bI as Uu,bJ as Wu,bK as Vu,bL as Gu,bM as da,bN as pa,bO as qu,bP as Yu,bQ as Ju,bR as Ku}from"./vendor-35c3991b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Xu="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Qu=3,an=["home","settings","all"],ua=["home","settings","download-agreements","all"],ha="https://lk.eseur.ru/signup",Zu="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},zt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},WT={Зачтено:w.green,"Не зачтено":w.red,Отлично:w.green,Хорошо:w.blue,Удовлетворительно:w.orange,Неудовлетворительно:w.red,"Не явился":w.red,default:w.red},VT={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",eh="2023-10-03T10:43:43",Tt={info:{icon:Je,color:"blue",title:"Информация"},alert:{icon:mi,color:"orange",title:"Внимание!"},failure:{icon:kt,color:"red",title:"Ошибка"},success:{icon:nn,color:"green",title:"Успешно"},tip:{icon:In,color:"grey",title:"Подсказка"},hint:{icon:In,color:"white",title:"Подсказка"},hrFailure:{icon:kt,color:"red",title:"Ошибка"}},th={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},ih=["image/jpeg","image/jpg","image/png","application/pdf"],nh=10,ga="(max-width: 766px)",sh="(min-width: 767px)",fa="(max-width: 1000px)",xa="(max-width: 1380px)",ma="(min-width: 1381px)",ee={isMobile:`@media ${ga}`,isNotMobile:`@media ${sh}`,isTablet:`@media ${fa}`,isSmallTesktop:`@media ${xa}`,isMiddleTesktop:`@media ${ma}`},oh=[{query:ga,title:"isMobile",value:"mobile"},{query:fa,title:"isTablet",value:"tablet"},{query:xa,title:"isSmallDesktop",value:"smallDesktop"},{query:ma,title:"isMiddleDesktop",value:"middleDesktop"}],ls={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},C=!window.location.port||window.location.port==="80"||window.location.port==="4001"||window.location.port==="4002";console.log("Running on production",C);var M=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(M||{});const Xe=()=>localStorage.getItem(M.JWT)||sessionStorage.getItem(M.JWT),Yt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},ah=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),zn=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)$t.logout();else{n._retry=!0;const h=localStorage.getItem(M.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await uh(h??"");return ah()?(localStorage.setItem(M.JWT,f),localStorage.setItem(M.JWTRefresh,g)):(sessionStorage.setItem(M.JWT,f),sessionStorage.setItem(M.JWTRefresh,g)),e(n)}catch{$t.logout()}}return Promise.reject(i)},ba=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${Xe()}`,e),rh=`${R}/lk_api.php`,lh="https://api.mospolytech.ru/serviceforfrontpersonnelorders",F=Ot.create({baseURL:rh,withCredentials:!0}),he=Ot.create({baseURL:lh});he.interceptors.request.use(ba);!C&&he.interceptors.response.use(e=>e,zn(he));function cs(e){return e.isAxiosError}function B(){return localStorage.getItem(M.Token)??sessionStorage.getItem(M.Token)??""}const ch=({login:e,password:i})=>F.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),dh=e=>F.get(`?getUser&token=${e}`),ph=e=>F.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),GT=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",B()),F.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},qT=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),F.post(`?changeADPass=1&token=${B()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},YT=async e=>{const i=new FormData;return i.set("email",e),i.set("token",B()),F.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},JT=async e=>{const i=new FormData;return Object.entries(e).forEach(([n,s])=>{i.set(n,s)}),i.set("token",B()),F.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},KT=async e=>{var n,s;const i=new FormData;return i.set("token",B()),i.set("phone",e.phone_staff||""),i.set("allow_mobphone_in",((n=e.allow_mobphone_in)==null?void 0:n.toString())??"false"),i.set("allow_mobphone_out",((s=e.allow_mobphone_out)==null?void 0:s.toString())??"false"),F.post("?changeStaffPhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},XT=async e=>{const i=new FormData;return i.set("token",B()),i.set("guid",e.guid_staff),i.set("room",e.room),i.set("address",e.address),F.post("?changeStaffAddress=1",i,{headers:{"Content-Type":"multipart/form-data"}})},uh=async e=>{const{data:i}=await Ot.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},hh=e=>F.get(`?getSchedule&group=${e}&token=${B()}`),gh=e=>F.get(`?getScheduleTeacher&fio=${e}&token=${B()}`),fh=()=>F.get(`?getSchedule&session=1&token=${B()}`),xh=e=>F.get(`?getScheduleTeacher&fio=${e}&session=1&token=${B()}`),mh=()=>F.get(`?getPayments&token=${B()}`),bh=e=>F.get(`?signAgreement=${e}&token=${B()}`),yh=e=>F.get(`?signContract=${e}&token=${B()}`),vh=async({semestr:e})=>{var i,n;return(n=(i=await F.get(`?getAcademicPerformance&semestr=${e}&token=${B()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},_h=e=>F.get(`?getMessages&token=${B()}&id=${e}`),wh=async()=>(await F.get(`?getPEPStatus&token=${B()}`)).data,jh=async()=>(await F.get(`?setPEPAccept&token=${B()}`)).data,kh=()=>F.get(`?getContactData&token=${B()}`),Sh=e=>{const i=new FormData;i.set("token",B()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Th=()=>F.get(`?getRequestHighComfort&token=${B()}`),QT=e=>{const i=new FormData;i.set("token",B()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Eh=()=>F.get(`?getAppRequests&token=${B()}`),ya=()=>F.get(`?getAppData&token=${B()}`),Ph=async()=>await he.get(`/Dismissal.GetAllHistory?employeeGuid=${Yt(Xe()??"").IndividualGuid}`),Ch=async()=>{const{data:e}=await he.get("/AnotherPlaceWork.GetDivisions");return e.divisions},$h=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",B()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await F.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},Oh=()=>he.get(`?getAppRequests&token=${B()}`),Ah=()=>he.get(`?getAppData&token=${B()}`),Dh=e=>he.post("Dismissal.Post",e),Nh=async()=>(await F.get(`?getAdminLinks&token=${B()}`)).data,Ih=async e=>(await F.get(`?PDinfo&token=${B()}`)).data,va=()=>F.get(`?getNotification&token=${B()}`),Rh=e=>F.get(`?viewNotification=${e}&token=${B()}`),Lh=Object.freeze(Object.defineProperty({__proto__:null,get:va,view:Rh},Symbol.toStringTag,{value:"Module"})),_a=()=>F.get(`?getDocList&token=${B()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),zh=e=>F.get(`?viewDoc=${e}&token=${B()}`),Mh=Object.freeze(Object.defineProperty({__proto__:null,get:_a,view:zh},Symbol.toStringTag,{value:"Module"})),Fh=(e,i,n,s)=>F.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${B()}`),Bh=e=>F.get(`?getDivs=${e}&page=1&token=${B()}`),Hh=()=>F.get(`?getCheckData&token=${B()}`),Uh=e=>{const i=new FormData;i.set("token",B()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Wh=(e,i,n,s)=>F.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${B()}`),Vh=async e=>await F.get(`?getGroups=${e}&perpage=30&page=1&token=${B()}`),Gh=async()=>(await F.get(`?getAlerts&token=${B()}`)).data,qh=()=>F.get(`?getNotifications&token=${B()}`),Yh=e=>F.get(`?clearNotificationById=${e}&token=${B()}`),Jh=()=>F.get(`?clearAllNotifications&token=${B()}`);function Kh({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Ms={data:null,preparedData:null,loading:!1,error:null},rn=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Xu})=>{const o=e??Ms,a=()=>({data:G(u).data,preparedData:G(u).preparedData,loading:G(r.pending),error:G(u).error}),r=z(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=z(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),u=K(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...Ms}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function Xh(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Qh=rn({api:{get:vh},prepareData:Xh}),Ye=rn({api:{get:Nh}}),Zh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),eg=rn({api:{get:Gh},prepareData:Zh}),Fs={message:"",type:"success",isOpen:!1,time:2e3},wa=k(),ja=k(),ka=k();K(Fs).on(wa,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ja,(e,{isOpen:i})=>({...e,isOpen:i})).on(ka,()=>({...Fs}));const ft={evokePopUpMessage:wa,openPopUpMessage:ja,clearStore:ka},Bs={listApplication:null,error:null,dataUserApplication:null},ci=z(async()=>{const e=await Oh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Ui=z(async()=>{const e=await Ah();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ln=z(async e=>await Dh(e));$({clock:ln.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ft.evokePopUpMessage});$({clock:ln.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:ft.evokePopUpMessage});const tg=k();Le({from:ln.doneData,to:ci});K(Bs).on(Ui,e=>({...e,error:null})).on(Ui.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Ui.failData,(e,i)=>({...e,error:i.message})).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,listApplication:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(tg,()=>({...Bs}));const ig={getApplicationsFx:ci,getUserDataApplicationsFx:Ui,postApplicationFx:ln},Hs={message:"",type:"success",isOpen:!1,time:2e3},ng=()=>G(sg),Sa=k(),Ta=k(),Ea=k(),sg=K(Hs).on(Sa,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ta,(e,{isOpen:i})=>({...e,isOpen:i})).on(Ea,()=>({...Hs})),Pa={usePopUpMessage:ng},U={evokePopUpMessage:Sa,openPopUpMessage:Ta,clearStore:Ea},og=Object.freeze(Object.defineProperty({__proto__:null,events:U,selectors:Pa},Symbol.toStringTag,{value:"Module"})),Us={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},qi=z(async()=>{const e=await Ph();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),di=z(async()=>{const e=await Eh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),pi=z(async()=>{const e=await ya();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ds=z(async e=>{const i=await $h(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),ag=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=G(rg);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:G(pi.pending),workerLoading:G(is(qi.pending,ig.postApplicationFx.pending,(o,a)=>o||a)),error:s}},Ca=k();Le({from:ds.doneData,to:di});$({clock:ds.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:U.evokePopUpMessage});const rg=K(Us).on(pi,e=>({...e,error:null})).on(pi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(pi.failData,(e,i)=>({...e,error:i.message})).on(di,e=>({...e,error:null})).on(di.doneData,(e,i)=>({...e,listApplication:i})).on(di.failData,(e,i)=>({...e,error:i.message})).on(qi,e=>({...e,error:null})).on(qi.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Ca,()=>({...Us})),me={useApplications:ag},Re={getApplicationsFx:di,getUserDataApplicationsFx:pi,postApplicationFx:ds,getWorkerPosts:qi},lg={clearStore:Ca},cg=Object.freeze(Object.defineProperty({__proto__:null,effects:Re,events:lg,selectors:me},Symbol.toStringTag,{value:"Module"})),Ws={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},dg=()=>G(pg),$a=k(),Oa=k(),Aa=k(),pg=K(Ws).on($a,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(Oa,e=>({...e,isOpen:!1})).on(Aa,()=>({...Ws})),Da={useConfirm:dg},ot={evokeConfirm:$a,closeConfirm:Oa,clearStore:Aa},ug=Object.freeze(Object.defineProperty({__proto__:null,events:ot,selectors:Da},Symbol.toStringTag,{value:"Module"})),hg=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:G(d).data,loading:G(r.pending),error:G(d).error,completed:G(d).completed}),o=k(),a=z(async u=>{const h=await i.post(u);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});$({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:U.evokePopUpMessage}),$({clock:a.failData,fn:u=>({message:`${u.message}`,type:"failure"}),target:U.evokePopUpMessage}),$({clock:a.doneData,target:Re.getApplicationsFx});const r=z(async u=>{if(i.get)try{return{...(await i.get(u)).data}}catch(h){throw new Error(h)}return n.data}),c=k(),d=K(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:gg,events:fg,selectors:xg}=hg({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:kh,post:Sh}}),mg=Object.freeze(Object.defineProperty({__proto__:null,effects:gg,events:fg,selectors:xg},Symbol.toStringTag,{value:"Module"})),Na=k(),Ia=k(),Ra=k(),La=k(),ki=z(async()=>{const i=(await jh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});$({clock:ki.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});$({clock:ki.doneData,fn:()=>!0,target:Ra});$({clock:ki.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:U.evokePopUpMessage});const yi=z(async()=>{try{return(await wh())[0]}catch(e){throw new Error(e)}});$({clock:Ia,target:ki});$({clock:Na,target:yi});const za=k(),bg=yi.pending,yg=ki.pending,vg=K(!1).on(La,(e,i)=>i),_g=K(!1).on(Ra,(e,i)=>i),wg=K(null).on(yi,()=>null).on(yi.failData,(e,i)=>i.message),jg=K(null).on(yi.doneData,(e,i)=>i).on(za,()=>null),Ma={$error:wg,$electronicInteractionStore:jg,$completed:vg,$done:_g,$loading:bg,$workerLoading:yg},Mn={getElectronicInteraction:Na,postElectronicInteraction:Ia,changeCompleted:La,clearStore:za},kg=Object.freeze(Object.defineProperty({__proto__:null,events:Mn,stores:Ma},Symbol.toStringTag,{value:"Module"})),Sg="Sep 07 2023 12:00:00 GMT+0300",Fa="Sep 08 2023 12:00:00 GMT+0300",ZT=e=>{const i=new Date;return i<new Date(Sg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(Fa)?"Подача заявок закрыта":""},se=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Vs=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),se(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),se(n,"extraWeird")}},st=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Vs(-30*11),maxValueInput:Vs(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),zi={kvdCert:st({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:st({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:st({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:st({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},ue=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var c,d,u;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const h=new Date(((c=a.value)==null?void 0:c.toString())??0);if(a.minValueInput){const f=new Date(a.minValueInput);if(h<f)return!0}if(a.maxValueInput){const f=new Date(a.maxValueInput);if(h>f)return!0}}const r=(u=(d=a.value)==null?void 0:d.toString())==null?void 0:u.length;return a.minValueLength&&r&&r<a.minValueLength?!0:i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(h=>!!h.files.length)})&&n&&s},Tg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Eg=()=>Object.keys(Me).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),Ba=(e="")=>({[e]:{...Eg(),[Me["settings-appearance"]]:{id:Me["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Me["settings-home-page"]]:{id:Me["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Me["settings-customize-menu"]]:{id:Me["settings-customize-menu"],property:{pages:an}},[Me["settings-notifications"]]:{id:Me["settings-notifications"],property:Tg}}});var Me=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Me||{});const Fn={settings:Ba(),error:null,completed:!1};let Ae;const Pg=()=>({settings:G(Wi).settings[Ae],error:G(Wi).error,completed:G(Wi).completed}),Cg=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},Ha=z(e=>{Ae=e;const i=JSON.parse(localStorage.getItem(M.NewSettings)??"{}")[Ae];return Cg(i,Ba(e)[e])}),Ua=k(),Wa=k(),Va=k(),Wi=K(Fn).on(Wa,(e,i)=>({...e,completed:i.completed})).on(Ha.doneData,(e,i)=>({...e,settings:{[Ae]:i}})).on(Ua,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Ae]:{...e.settings[Ae],[i]:{...e.settings[Ae][i],property:{...e.settings[Ae][i].property,[n]:s}}}}})).on(Va,()=>({...Fn}));Wi.watch(e=>{if(e!==Fn&&Ae){const i=JSON.parse(localStorage.getItem(M.NewSettings)??JSON.stringify({}));i[Ae]=e.settings[Ae],localStorage.setItem(M.NewSettings,JSON.stringify(i))}});const Jt={useSettings:Pg},Si={updateSetting:Ua,changeCompleted:Wa,clearStore:Va},$g={getLocalSettingsFx:Ha},xt=()=>{var a,r;const{settings:e}=Jt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),Si.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},Og=p.button`
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:m,direction:x="horizontal",isActive:y=!0,height:b,notActiveClickMessage:E,flipped:N,...j}=e,S=D=>{y?s==null||s(D):E&&U.evokePopUpMessage({type:"failure",message:E,time:1e4})};return t.jsxs(Og,{text:!!n,onClick:S,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:u,direction:x,isActive:y,fixedInMobile:m,height:b,flipped:N,...j,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const Bn=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Gs=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Ag=p.div`
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
`,Dg=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],cn=p.div.withConfig({shouldForwardProp:e=>!Dg.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Gs(n):Bn(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Bn(i):Gs(n)};
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
`,Ng=p.div`
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
`;function J({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Ng,{pulse:s,size:i,shape:e,margin:n})}const Ig=p(cn)`
    height: 100%;
`,Rg=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(Ig,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(J,{...o,key:a}))}),bt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Lg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:bt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:bt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:bt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:bt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:bt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:bt(n),children:i});default:return t.jsx("h1",{className:"title",style:bt(n),children:i})}}const zg=p.div`
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
`,Mg=p.span`
    color: var(--red);
    margin-right: 5px;
`,Fg=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function W(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(zg,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(Lg,{size:o,width:r,children:[a&&t.jsx(Mg,{children:"*"}),t.jsx(Fg,{width:r,children:s})]})]}):null}const Bg=(e,i,n)=>n?"#fff":e?w[Tt[i].color].dark3:w[Tt[i].color].light3,Hg=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Bg(i,e,n)};
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
`,Ug=()=>t.jsx(Rg,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function Q({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f=!1,align:g="left",visible:m=!0,loading:x=!1}){if(!m)return null;const{theme:y}=xt();return t.jsxs(Hg,{isLightTheme:y==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f,children:[t.jsx(W,{size:4,align:g,icon:n===null?null:n??Tt[e].icon({}),children:a??Tt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Ke,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),x&&t.jsx(Ug,{})]})}p.div`
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
`;const Wg=p.div`
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
`,Vg=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(Wg,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),xe=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Gg="/assets/sad-emoji-0c60bf90.gif",oe=p.span`
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
`,qg=p.div`
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
`;function fe({text:e,image:i,size:n,children:s}){return t.jsxs(qg,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Gg,alt:"груфтим("}):i}),t.jsx(oe,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Yg="/assets/loading-c8041cd3.gif",Jg=p.img`
    width: 40px;
`;function Qe(e){return t.jsx(Jg,{...e,src:Yg,alt:"loading",className:"loading-circle"})}const Kg="/assets/logo-4d9aa449.png",Xg="/assets/mospolytech-logo-white-b1e4f630.png",Qg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function dn({width:e,className:i,short:n=!1}){return t.jsx(Qg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Xg:Kg,alt:"Logo"})})}const Zg=p.img``;function ps({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(J,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Zg,{src:i,alt:o,height:n,width:s})}const ef=p.div`
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
`;function Ga({size:e,color:i}){return t.jsx(ef,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const tf=p.div`
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
`;function nf(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(tf,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(W,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const sf=p.button`
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
`,dt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:m=!1,repeatable:x=!0,alerts:y=!0})=>{l.useEffect(()=>{m&&y&&(U.evokePopUpMessage({message:c,type:"success"}),x&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const b=()=>{if(f&&!h&&!g)return i();y&&U.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(sf,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:f&&!h&&!m,onClick:b,isDone:h,width:n,height:s,repeatable:x,tabIndex:f&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(pp,{})," ",r]}):g?t.jsx(Qe,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Yi={small:"32px",middle:"36px",big:"44px"},Fe=e=>({size:i})=>e[i],of=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,af=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},rf=(e,i)=>{var a,r,c,d,u,h,f,g,m,x,y,b,E,N;const n=e.replace(/\D/g,""),s=e.match(new RegExp("(?<=\\d)[а-яА-Я]"));let o="";if(!e)return"";switch(i){case"БС":if(e==="БС")return"";o="БС ";const j=e.substring(3).match(/^[а-яА-Я]{1,2}/);return!j||!((r=(a=j[0])==null?void 0:a.toUpperCase())!=null&&r.match(/^[А-Я]{1,2}$/))?o:(o+=j[0].toUpperCase(),(j[0].length===1?e[3]&&!e[5]&&e[4]==="-":e[4]&&!e[6]&&e[5]==="-")?o+"-":(n.length>0&&(o+="-"),o+=n.substring(0,3),!s||!((d=(c=s[0])==null?void 0:c.toLowerCase())!=null&&d.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,10))));case"ПР":return e==="ПР"?"":(o="ПР-",o+=n.substring(0,4),!s||!((h=(u=s[0])==null?void 0:u.toLowerCase())!=null&&h.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,8)));case"АВ":return e==="АВ"?"":(o="АВ-",o+=n.substring(0,4),!s||!((g=(f=s[0])==null?void 0:f.toLowerCase())!=null&&g.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,8)));case"ПК":return e==="ПК"?"":(o="ПК-",o+=n.substring(0,3),!s||!((x=(m=s[0])==null?void 0:m.toLowerCase())!=null&&x.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,7)));case"МИХ":return e==="МИХ"?"":(o="МИХ-",o+=n.substring(0,4),!s||!((b=(y=s[0])==null?void 0:y.toLowerCase())!=null&&b.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,9)));case"СС":return e==="СС"?"":(o="СС-",o+=n.substring(0,4),!s||!((N=(E=s[0])==null?void 0:E.toLowerCase())!=null&&N.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,9)));default:return e}},lf=e=>e.replace(/\D/g,"").substring(0,4),Pn={groupMask:of,phoneMask:af,cabinetMask:rf,innerPhoneMask:lf},cf=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const g=l.useCallback(b=>b.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:b=>{b.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(b=>b==="password"?"text":"password"),handleOnChange:b=>{if(i(c?r?r(b.target.value,e):n==="tel"?Pn.phoneMask(b):n==="email"?g(b.target.value):n==="cabinet"?Pn.cabinetMask(b.target.value,b.target.value.substring(0,2)):n==="innerPhone"?Pn.innerPhoneMask(b.target.value):b.target.value:b.target.value),n==="date"&&(o||a)){const E=new Date(b.target.value);let N=!1;if(o){const j=new Date(o);N=E<j}if(a&&!N){const j=new Date(a);N=E>j}f(N)}}}},df=p.div`
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
`,pt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:m,alertMessage:x,loading:y=!1,isActive:b=!0,inputAppearance:E=!0,mask:N=!1,autocomplete:j=!1,minValue:S=void 0,maxValue:D=void 0,minLength:L=void 0,maxLength:I=void 0,hideCross:ne=!1,stepSize:H=.1,size:q="middle"}=i,{inputType:ce,buttonOnClick:Ce,danger:Se,handleOnChange:Ge,phoneMaskKeyDown:Te}=cf(s,o,g,m,S,D,h,N),ge=s&&g==="date"?up(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(df,{leftIcon:!!a,isActive:b,inputAppearance:E,width:d,danger:Se,minWidth:u,size:q,children:[t.jsx(W,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(Q,{type:"alert",visible:!!x,icon:t.jsx(hp,{}),title:x??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:S,max:D,minLength:L,maxLength:I,step:H??void 0,type:ce,placeholder:f,value:ge,autoComplete:j?"on":"off",onKeyDown:It=>g==="tel"&&Te(It),onChange:Ge,required:c,readOnly:!b,ref:n}),g!=="password"?!!(s!=null&&s.length)&&E&&(y?t.jsx(Qe,{}):!ne&&t.jsx(_,{icon:t.jsx(Ke,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ce==="password"?t.jsx(gp,{}):t.jsx(Bo,{}),tabIndex:-1,onClick:Ce})]})}),pf=p.div`
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
`,uf="/assets/thinking-emoji-f3c10f79.gif",hf=["loading"],gf=p.div.withConfig({shouldForwardProp:e=>!hf.includes(e)})`
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
`,We=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(gf,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(fe,{text:n,image:a&&uf,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(ns,{})})})}):t.jsx(Qe,{})}),t.jsx("div",{className:"content",children:e})]})),ff=p.a`
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
`,xf=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(ff,{text:!!i,onClick:m=>f&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Ti=l.memo(xf),pn=p.div`
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
`,mf=p.a`
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
`,bf=({title:e,link:i,type:n})=>t.jsxs(mf,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(O,{}):t.jsx(fp,{})}),t.jsx("div",{className:"title",children:e})]}),yf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),vf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},_f=()=>ke(wf),qa=k(),Ya=k(),Ja=k(),wf=K(vf).on(qa,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:yf(n,220,s),open:!0,content:i,type:o})).on(Ya,e=>({...e,open:!1})).on(Ja,(e,{position:i})=>({...e,position:i})),Ie={open:qa,close:Ya,changePosition:Ja},jf={useContextMenu:_f},kf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},Cn=new Set,Ka=(e,i)=>{l.useEffect(()=>{const n=o=>{Cn.add(o.which),!e.slice(0,e.length-1).find(r=>!Cn.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{Cn.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Ze=p.div`
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
`,A=p.div`
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
`,we=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Xa=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"Х","]":"ъ","}":"Ъ","'":"э",";":"ж",",":"б",".":"ю","<":"Б",">":"Ю",":":"Ж",'"':"Э"};let n="";for(let s=0;s<e.length;s++){const o=we(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Qa=e=>/[A-Za-z]/.test(e),Sf=p.span`
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
`,Za=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Qa(e))return null;const s=Xa(e),o=()=>i(s);return t.jsxs(oe,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Sf,{tabIndex:10,children:s})]})};function Kt(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function ut(e,i,n=0){return e>i?n:e<n?i:e}const Tf=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,Ef=p(Ze)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,Pf=p.div`
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
`,er=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[m,x]=l.useState(0),[y,b]=l.useState(!1),E=l.useRef(null),N=l.useRef(null),j=l.useRef(null);Kt(E,()=>b(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var I;return(I=j.current)==null?void 0:I.focus()},50)},[c]);const S=I=>{var ne,H;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),I.key==="ArrowDown"?((ne=N.current)==null||ne.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&x(ut(m+1,((a==null?void 0:a.length)??1)-1,0))):I.key==="ArrowUp"?((H=N.current)==null||H.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&x(ut(m-1,((a==null?void 0:a.length)??1)-1,0))):I.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),b(!1),h==null||h(a==null?void 0:a[m??0])):x(0)},D=I=>()=>{x(I),d((a==null?void 0:a[I].title)??""),b(!1),h==null||h(a==null?void 0:a[I])},L=()=>{a!=null&&a.length&&b(!0)};return t.jsxs(Tf,{width:i,onKeyDown:S,onMouseDown:L,ref:E,children:[t.jsx(pt,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(Ht,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:j}),t.jsx(Za,{setValue:d,value:e,visible:f}),y&&t.jsx(Ef,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:S,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:I,icon:ne},H)=>{const q=m===H;return t.jsxs(Pf,{onClick:D(H),ref:q?N:null,selected:q,children:[ne&&t.jsx("div",{className:"icon",children:ne}),t.jsx("span",{children:I})]},I+H)})})]})},un=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},qs={small:"30px",middle:"44px",big:"68px"},tr={small:"8px",middle:"10px",big:"16px"},Cf={small:"0.8rem",middle:"0.9rem",big:"1rem"},$f={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},Of=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Fe(qs)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Fe(tr)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Fe(qs)};
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
`,Af=p.div`
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
        font-size: ${Fe(Cf)};
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
            font-size: ${Fe($f)};
        }
    }
`,Df=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(Af,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),Nf=l.memo(Df),If=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Fe(tr)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,Rf=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(If,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},Lf=l.memo(Rf),zf=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=un();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(Of,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Lf,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(Nf,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},us=l.memo(zf),Mf=300,ir=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Mf})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,f]},Et=p.span`
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
`,Ff=p.div`
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
`,mt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(Ff,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(Et,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},nr=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=b=>{n(i(b,e))},f=()=>{n(null)},[g,m,x]=ir({onDebounce:h,onClear:f}),y=b=>{m(b),o&&o(b)};return t.jsx(er,{value:g??"",setValue:y,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?x:!1,hints:a,width:r})},Bf=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(pf,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),sr=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Hf=p(sr)`
    background: var(--almostTransparentOpposite);
`,Uf=p(sr)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,or=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Pe,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Hf,{},a)),t.jsx(Uf,{color:n,current:i})]}),Wf=p.label`
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
`,Vf=p.div`
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
`,Be=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(Wf,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(Vf,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(nn,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},ar=e=>e.split("/")[1],Gf=e=>e*1024*1024,qf=(e,i)=>(i??ih).indexOf(e.type)!==-1,Ys=(e,i,n,s,o=nh)=>{if(n&&i.length+e.length>n)return U.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return qf(e[a],s)?e[a].size>Gf(o)?(U.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),U.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>ar(r))}`,type:"failure",time:5e3}),i)},Yf=p.label`
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
`,Ne=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Jf=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=x=>{const y=x.target.files;y!=null&&y.length&&n(Ys(y,e,i,o,a))},h=x=>{x.preventDefault()},f=x=>{x.preventDefault(),d(!1);const y=x.dataTransfer.files;y.length&&n(Ys(y,e,i,o,a))},g=x=>{x.preventDefault(),d(!0)},m=x=>{x.preventDefault(),d(!1)};return t.jsxs(Yf,{isActive:s,showPulse:c,onDragOver:x=>s&&h(x),onDragEnter:x=>s&&g(x),onDragLeave:x=>s&&m(x),onDrop:x=>s&&f(x),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(En,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(En,{className:"icon-1"}),t.jsx(En,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(oe,{align:"center",children:t.jsx(Ne,{words:[`Форматы: ${o?o.map(x=>ar(x)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Kf=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Xf=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Qf=p.div`
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
`,Zf=({file:e,files:i,setFiles:n})=>{const{open:s}=te(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(ps,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>ot.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Xf(r,e.name,i))});return t.jsxs(Qf,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(xp,{}):t.jsx(mp,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(oe,{fontSize:"0.7em",children:Kf(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Ke,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},ex=({files:e,setFiles:i})=>t.jsx(Pe,{title:"Список файлов",visible:!!e.length,onDelete:()=>ot.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Zf,{file:n,files:e,setFiles:i},n.name))}),rr=e=>t.jsxs(Pe,{gap:12,children:[t.jsx(Jf,{...e}),t.jsx(ex,{files:e.files,setFiles:e.setFiles})]}),tx=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,ix=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(tx,{children:[t.jsx(Be,{...e}),n&&t.jsx(rr,{...i})]}),nx=p.div`
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
`,lr=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=se(u,"extraWeird")}return t.jsxs(nx,{children:[t.jsx(W,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(Q,{title:"Внимание",type:"alert",icon:t.jsx(mi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(pt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(pt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},sx=(e,i)=>{var y,b,E;const{width:n}=un(),s=l.useRef(null),[o,a]=l.useState(!1),[r,c]=l.useState(!1),[d,u]=l.useState(0),[h,f]=l.useState(0),g=((y=s.current)==null?void 0:y.clientWidth)??1,m=Math.ceil((((b=s.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{s.current&&(s.current.scrollLeft=d,s.current.clientWidth<s.current.scrollWidth?(a(!0),c(!0)):(c(!1),a(!1)))},[d,(E=s.current)==null?void 0:E.clientWidth,n,i]),{listRef:s,leftArrow:o,rightArrow:r,setScrollLeft:u,pageOffset:g,amountOfPages:m,currentPage:h,setCurrentPage:f,handleScroll:N=>{f(Math.ceil(N.currentTarget.scrollLeft/(g+(e??0))))}}},ox=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:f,showPages:g,innerPadding:m,minWidth:x,wrapOnMobile:y,position:b,direction:E="vertical",verticalAlign:N="top",horizontalAlign:j="left",scroll:S=!0,visible:D=!0,...L}=e;if(!D)return null;const{listRef:I,leftArrow:ne,rightArrow:H,handleScroll:q,setScrollLeft:ce,pageOffset:Ce,amountOfPages:Se,currentPage:Ge}=sx(s,n);return t.jsxs(Ag,{padding:r,position:b,width:o,minWidth:x,height:a,children:[t.jsxs(W,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(_,{icon:t.jsx(St,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(_,{width:"50px",height:"15px",background:w.blue.transparent3,textColor:w.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(cn,{verticalAlign:N,horizontalAlign:j,direction:E,ref:I,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:S,wrapOnMobile:y,onScroll:q,...L,children:n}),(H||ne)&&t.jsxs("div",{className:"bottom-wrapper",children:[ne&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(wi,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{ce(Te=>{var ge;return ut(Te-Ce-(s??0),((ge=I.current)==null?void 0:ge.scrollWidth)??0)})}}),g&&t.jsx(or,{direction:"horizontal",current:Ge,amount:Se}),H&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(ht,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{ce(Te=>{var ge;return ut(Te+Ce+(s??0),((ge=I.current)==null?void 0:ge.scrollWidth)??0)})}})]})]})},Pe=le.memo(ox),ax=()=>t.jsx("div",{className:"left",children:t.jsxs(Pe,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(dn,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Pe,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:Ss,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(bi,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Nl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(bp,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Dl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(mi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Il,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(mi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(xe,{}),t.jsx(Z,{to:Al,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(yp,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Ti,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(sn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),rx=()=>{const{search:e}=Gt();return le.useMemo(()=>new URLSearchParams(e),[e])},lx=()=>{const e=rx(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=$t.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=y=>{d(y.getModifierState("CapsLock")),y.key==="Enter"&&h({login:s,password:a})},m=y=>{$t.changeSavePassword({savePassword:y})},x=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:m,handleKeyPress:g,handleLogin:x,setPassword:r,setLogin:o}},cx=()=>{const{loading:e,error:i,data:n}=be.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:f,setLogin:g}=lx();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Pe,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(dn,{width:"50px",short:!0,className:"logo second"}),t.jsx(A,{jc:"space-between",children:t.jsx(W,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(Q,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Pe,{gap:16,scroll:!1,children:[t.jsx(W,{size:4,align:"left",children:"Вход"}),t.jsx(oe,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(Q,{type:"failure",visible:!!i,children:i}),t.jsx(Q,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(pt,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(pt,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Be,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(dt,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},dx=p(Ze)`
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
`,px=()=>{const{data:{isAuthenticated:e}}=be.useUser();return t.jsxs(dx,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(ax,{}),t.jsx(cx,{})]})},ux=p.div`
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
`,hx=()=>t.jsx(ux,{children:t.jsx(px,{})}),ve=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(fe,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(sn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),gx="modulepreload",fx=function(e){return"/"+e},Js={},v=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=fx(a),a in Js)return;Js[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":gx,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},xx=l.lazy(()=>v(()=>import("./index-97e38a5a.js"),["assets/index-97e38a5a.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),mx=l.lazy(()=>v(()=>import("./index-e0d484e6.js"),["assets/index-e0d484e6.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-14a391c3.js"])),Ks=l.lazy(()=>v(()=>import("./index-f5557759.js"),["assets/index-f5557759.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js"])),bx=l.lazy(()=>v(()=>import("./index-b3784598.js"),["assets/index-b3784598.js","assets/vendor-35c3991b.js","assets/get-default-subdivision-17957fb0.js"])),yx=l.lazy(()=>v(()=>import("./index-7e72f921.js"),["assets/index-7e72f921.js","assets/vendor-35c3991b.js","assets/index-73d7a4e0.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-cea96108.js","assets/form-19ea5ea7.js","assets/send-form-6070792d.js"])),vx=l.lazy(()=>v(()=>import("./form-19ea5ea7.js"),["assets/form-19ea5ea7.js","assets/vendor-35c3991b.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/send-form-6070792d.js"])),cr=l.lazy(()=>v(()=>import("./index-a4db5afd.js"),["assets/index-a4db5afd.js","assets/vendor-35c3991b.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Kb),void 0));const _x=l.lazy(()=>v(()=>import("./index-30651e3d.js"),["assets/index-30651e3d.js","assets/vendor-35c3991b.js","assets/index-5c3f88c1.js"])),wx=l.lazy(()=>v(()=>import("./index-caaed012.js"),["assets/index-caaed012.js","assets/vendor-35c3991b.js","assets/index-cd03f08f.js"])),jx=l.lazy(()=>v(()=>import("./index-d595dfbd.js"),["assets/index-d595dfbd.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),kx=l.lazy(()=>v(()=>import("./index-71e817c0.js"),["assets/index-71e817c0.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Sx=l.lazy(()=>v(()=>import("./index-4689b28d.js"),["assets/index-4689b28d.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-14a391c3.js"])),Tx=l.lazy(()=>v(()=>import("./index-709c81a4.js"),["assets/index-709c81a4.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-14a391c3.js"])),Ex=l.lazy(()=>v(()=>import("./index-96de1aa3.js"),["assets/index-96de1aa3.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-14a391c3.js"])),Px=l.lazy(()=>v(()=>import("./index-72b6cf38.js"),["assets/index-72b6cf38.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-14a391c3.js"])),Cx=l.lazy(()=>v(()=>import("./index-dd46e2e3.js"),["assets/index-dd46e2e3.js","assets/vendor-35c3991b.js","assets/ui-0db464c6.js","assets/index-4ee90ac4.js"])),$x=l.lazy(()=>v(()=>import("./index-0766002a.js"),["assets/index-0766002a.js","assets/vendor-35c3991b.js","assets/ui-0db464c6.js","assets/styled-eb00b56a.js"])),Ox=l.lazy(()=>v(()=>import("./index-449e9605.js"),["assets/index-449e9605.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-14a391c3.js"])),Ax=l.lazy(()=>v(()=>import("./index-f87ac7b8.js"),["assets/index-f87ac7b8.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-14a391c3.js"])),Dx=l.lazy(()=>v(()=>import("./index-ba5aa441.js"),["assets/index-ba5aa441.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-14a391c3.js"])),Nx=l.lazy(()=>v(()=>import("./index-f94d6f8f.js"),["assets/index-f94d6f8f.js","assets/vendor-35c3991b.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-cea96108.js"])),Ix=l.lazy(()=>v(()=>import("./index-0a50137f.js"),["assets/index-0a50137f.js","assets/vendor-35c3991b.js","assets/get-default-subdivision-17957fb0.js"])),Rx=l.lazy(()=>v(()=>import("./index-27f68cc0.js"),["assets/index-27f68cc0.js","assets/vendor-35c3991b.js","assets/get-default-subdivision-17957fb0.js"])),Lx=l.lazy(()=>v(()=>import("./index-20de8e82.js"),["assets/index-20de8e82.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-14a391c3.js"])),zx=l.lazy(()=>v(()=>import("./index-72e110e7.js"),["assets/index-72e110e7.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-14a391c3.js"])),Mx=l.lazy(()=>v(()=>import("./index-c9bfcae1.js"),["assets/index-c9bfcae1.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-14a391c3.js"])),Fx=l.lazy(()=>v(()=>import("./index-669dbb8c.js"),["assets/index-669dbb8c.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-14a391c3.js"])),Bx=l.lazy(()=>v(()=>import("./index-d6f51e66.js"),["assets/index-d6f51e66.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),Hx=l.lazy(()=>v(()=>import("./index-8a5acd9b.js"),["assets/index-8a5acd9b.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-14a391c3.js"])),Ux=l.lazy(()=>v(()=>import("./index-208c9482.js"),["assets/index-208c9482.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-14a391c3.js"])),Wx=l.lazy(()=>v(()=>import("./index-6aace31b.js"),["assets/index-6aace31b.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-14a391c3.js"])),Vx=l.lazy(()=>v(()=>import("./index-fde8602f.js"),["assets/index-fde8602f.js","assets/vendor-35c3991b.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-14a391c3.js"])),Gx=l.lazy(()=>v(()=>import("./index-ea820004.js"),["assets/index-ea820004.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),qx=l.lazy(()=>v(()=>import("./index-c6945892.js"),["assets/index-c6945892.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Yx=l.lazy(()=>v(()=>import("./index-cba676f0.js"),["assets/index-cba676f0.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Jx=l.lazy(()=>v(()=>import("./index-2efe79dc.js"),["assets/index-2efe79dc.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Kx=l.lazy(()=>v(()=>import("./index-51995f9a.js"),["assets/index-51995f9a.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Xx=l.lazy(()=>v(()=>import("./index-45540986.js"),["assets/index-45540986.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Qx=l.lazy(()=>v(()=>import("./index-cb34c0a3.js"),["assets/index-cb34c0a3.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Zx=l.lazy(()=>v(()=>import("./index-fe20ac82.js"),["assets/index-fe20ac82.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),em=l.lazy(()=>v(()=>import("./index-4119a2f7.js"),["assets/index-4119a2f7.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),tm=l.lazy(()=>v(()=>import("./index-51f34e79.js"),["assets/index-51f34e79.js","assets/vendor-35c3991b.js","assets/index-14a391c3.js","assets/index-4622042e.js","assets/send-form-6070792d.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),im=l.lazy(()=>v(()=>import("./index-7c0838f0.js"),["assets/index-7c0838f0.js","assets/vendor-35c3991b.js"]));l.lazy(()=>v(()=>import("./index-f6fb9ce1.js"),["assets/index-f6fb9ce1.js","assets/vendor-35c3991b.js","assets/index-ccdbdbae.js","assets/index-4ee90ac4.js"]));const hs=l.lazy(()=>v(()=>import("./index-5c2310d1.js"),["assets/index-5c2310d1.js","assets/vendor-35c3991b.js"])),nm=l.lazy(()=>v(()=>import("./index-d9b957fb.js"),["assets/index-d9b957fb.js","assets/vendor-35c3991b.js"])),sm=l.lazy(()=>v(()=>import("./index-30428720.js"),["assets/index-30428720.js","assets/vendor-35c3991b.js"])),om=l.lazy(()=>v(()=>import("./index-98801fce.js"),["assets/index-98801fce.js","assets/vendor-35c3991b.js"])),am=l.lazy(()=>v(()=>import("./index-1483ee0c.js"),["assets/index-1483ee0c.js","assets/vendor-35c3991b.js"])),rm=l.lazy(()=>v(()=>import("./index-3f521a94.js"),["assets/index-3f521a94.js","assets/vendor-35c3991b.js"])),lm=l.lazy(()=>v(()=>import("./index-c4708d72.js"),["assets/index-c4708d72.js","assets/vendor-35c3991b.js","assets/get-default-subdivision-17957fb0.js"])),cm=l.lazy(()=>v(()=>import("./index-f6333fd2.js"),["assets/index-f6333fd2.js","assets/vendor-35c3991b.js","assets/get-default-subdivision-17957fb0.js"])),dm=l.lazy(()=>v(()=>import("./index-caa50976.js"),["assets/index-caa50976.js","assets/vendor-35c3991b.js"])),pm=l.lazy(()=>v(()=>import("./index-39005bc1.js"),["assets/index-39005bc1.js","assets/vendor-35c3991b.js","assets/send-hr-form-work-transfer-4229bb8f.js"])),um=l.lazy(()=>v(()=>import("./index-2d219624.js"),["assets/index-2d219624.js","assets/vendor-35c3991b.js","assets/send-hr-form-work-transfer-4229bb8f.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>A0),void 0));l.lazy(()=>v(()=>import("./index-0d81aabb.js"),["assets/index-0d81aabb.js","assets/vendor-35c3991b.js","assets/BoldText-86f64fef.js","assets/help-links-c8e9b261.js"]));const hm=l.lazy(()=>v(()=>import("./index-e07f3ff6.js"),["assets/index-e07f3ff6.js","assets/vendor-35c3991b.js"])),dr=l.lazy(()=>v(()=>import("./index-fcab91f4.js"),["assets/index-fcab91f4.js","assets/vendor-35c3991b.js","assets/index-ccdbdbae.js","assets/index-4ee90ac4.js"])),pr=l.lazy(()=>v(()=>import("./index-f6fb9ce1.js"),["assets/index-f6fb9ce1.js","assets/vendor-35c3991b.js","assets/index-ccdbdbae.js","assets/index-4ee90ac4.js"])),gm=l.lazy(()=>v(()=>import("./index-faf1a195.js"),["assets/index-faf1a195.js","assets/vendor-35c3991b.js","assets/styled-eb00b56a.js","assets/index-4ee90ac4.js"])),fm=l.lazy(()=>v(()=>import("./index-099c0abf.js"),["assets/index-099c0abf.js","assets/vendor-35c3991b.js"]));l.lazy(()=>v(()=>import("./index-fc1cb642.js"),["assets/index-fc1cb642.js","assets/vendor-35c3991b.js","assets/index.esm-e824fb2f.js"]));const xm=l.lazy(()=>v(()=>import("./index-768644b2.js"),["assets/index-768644b2.js","assets/vendor-35c3991b.js"])),ur=l.lazy(()=>v(()=>import("./index-e606f86a.js"),["assets/index-e606f86a.js","assets/vendor-35c3991b.js","assets/help-links-c8e9b261.js"])),mm=l.lazy(()=>v(()=>import("./index-db2cb0df.js"),["assets/index-db2cb0df.js","assets/vendor-35c3991b.js"])),bm=l.lazy(()=>v(()=>import("./index-5ca197d2.js"),["assets/index-5ca197d2.js","assets/vendor-35c3991b.js","assets/alert-item-81ddda62.js","assets/is-valid-url-08a91344.js"])),ym=l.lazy(()=>v(()=>import("./index-7c34f294.js"),["assets/index-7c34f294.js","assets/vendor-35c3991b.js","assets/index-b6e0bd93.js","assets/alert-item-81ddda62.js","assets/is-valid-url-08a91344.js"])),vm=l.lazy(()=>v(()=>import("./index-57ac9653.js"),["assets/index-57ac9653.js","assets/vendor-35c3991b.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Iy),void 0));const _m=l.lazy(()=>v(()=>import("./index-e7139d5b.js"),["assets/index-e7139d5b.js","assets/vendor-35c3991b.js","assets/index-73d7a4e0.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-cea96108.js"])),hr=l.lazy(()=>v(()=>import("./index-d68768e4.js"),["assets/index-d68768e4.js","assets/vendor-35c3991b.js","assets/index-b6e0bd93.js","assets/index-4ee90ac4.js"])),wm=l.lazy(()=>v(()=>import("./index-caf75310.js"),["assets/index-caf75310.js","assets/vendor-35c3991b.js","assets/index-7c92bdfa.js"])),jm=l.lazy(()=>v(()=>import("./index-567e7a8e.js"),["assets/index-567e7a8e.js","assets/vendor-35c3991b.js","assets/index-7c92bdfa.js"])),km=l.lazy(()=>v(()=>import("./index-a7bdd800.js"),["assets/index-a7bdd800.js","assets/vendor-35c3991b.js","assets/index-7c92bdfa.js"])),Sm=l.lazy(()=>v(()=>import("./index-670e2aab.js"),["assets/index-670e2aab.js","assets/vendor-35c3991b.js"])),Tm=l.lazy(()=>v(()=>import("./index-29e020e0.js"),["assets/index-29e020e0.js","assets/vendor-35c3991b.js","assets/index.esm-e824fb2f.js","assets/index-73d7a4e0.js","assets/get-form-30ba56ae.js","assets/find-current-in-select-ba4611d5.js","assets/getCabinetMask-cea96108.js"])),Em=l.lazy(()=>v(()=>import("./index-77887edb.js"),["assets/index-77887edb.js","assets/vendor-35c3991b.js"])),Pm=l.lazy(()=>v(()=>import("./index-30e152a3.js"),["assets/index-30e152a3.js","assets/vendor-35c3991b.js"])),Cm=l.lazy(()=>v(()=>import("./index-f24ac8dd.js"),["assets/index-f24ac8dd.js","assets/vendor-35c3991b.js"])),$m=l.lazy(()=>v(()=>import("./index-d5e41511.js"),["assets/index-d5e41511.js","assets/vendor-35c3991b.js","assets/index-5c3f88c1.js"])),Om=l.lazy(()=>v(()=>import("./index-c6b2ac12.js"),["assets/index-c6b2ac12.js","assets/vendor-35c3991b.js"])),Am=l.lazy(()=>v(()=>import("./index-0c7079fd.js"),["assets/index-0c7079fd.js","assets/vendor-35c3991b.js","assets/help-links-c8e9b261.js"])),Dm=l.lazy(()=>v(()=>import("./index-4119ff92.js"),["assets/index-4119ff92.js","assets/vendor-35c3991b.js","assets/help-links-c8e9b261.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>nS),void 0));const Nm=l.lazy(()=>v(()=>import("./index-0d81aabb.js"),["assets/index-0d81aabb.js","assets/vendor-35c3991b.js","assets/BoldText-86f64fef.js","assets/help-links-c8e9b261.js"])),Im=l.lazy(()=>v(()=>import("./index-e3ce980b.js"),["assets/index-e3ce980b.js","assets/vendor-35c3991b.js"])),Rm=p.div`
    width: 100%;
`,Lm=()=>t.jsxs(Rm,{children:[t.jsx(J,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(J,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ve=e=>{const{children:i,skeleton:n=t.jsx(Lm,{}),loading:s=!1,...o}=e;return t.jsx(Ze,{...o,className:"block",children:s?n:i})},zm=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},$n=p.div`
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
`,Mm=p.div`
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
`,Fm=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:f}=zm(c,r);return c.length?t.jsxs(Mm,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs($n,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(St,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs($n,{background:g.background,remove:u===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(Ke,{})})]},g.id)}),c.length&&!!n&&t.jsx($n,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Wt=(e,i)=>{switch(i){case"date":return se(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},Bm=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,Hm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),f=l.useCallback(m=>{var x,y;o(b=>(b&&b[m]&&delete b[m],{...b})),m===((x=i==null?void 0:i.column)==null?void 0:x.field)&&n(null),m===((y=a==null?void 0:a.column)==null?void 0:y.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const x=Object.values(s)[0].column;return m={[(x==null?void 0:x.field)??""]:{id:(x==null?void 0:x.field)??"",title:"Фильтр: "+(x==null?void 0:x.title)}},{...m}});else{const m=Object.values(s).find(x=>{var y;return!c[((y=x.column)==null?void 0:y.field)??""]});m&&d(x=>{var E,N;const y=((E=m.column)==null?void 0:E.field)??"",b="Фильтр: "+((N=m.column)==null?void 0:N.title);return x&&(x[y]={id:y,title:b}),{...x}})}i&&d(m=>{var b;const x=((b=i.column)==null?void 0:b.field)??"",y="Поиск";return m?m[x]={id:x,title:y}:m={[x]:{id:x,title:y}},{...m}}),a&&d(m=>{var b;const x=((b=a.column)==null?void 0:b.field)??"",y="Сортировка";return m?m[x]={id:x,title:y}:m={[x]:{id:x,title:y}},{...m}})},[i,s,a]),l.useEffect(()=>{var y;const m=i==null?void 0:i.column,x=(y=i==null?void 0:i.column)==null?void 0:y.field;if(i&&x){const b=e==null?void 0:e.filter(E=>we(Wt(E[x],m==null?void 0:m.type)).includes(we(Wt(i.value,m==null?void 0:m.type))));h(b)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(x=>!Object.values(s).find(y=>{var b;return x[((b=y.column)==null?void 0:b.field)??""]!==y.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var x;const m=((x=a==null?void 0:a.column)==null?void 0:x.field)??"";a?h(y=>{const b=[...y??[]];return b==null||b.sort((E,N)=>N[m]<E[m]?a.value==="asc"?1:-1:N[m]>E[m]?a.value==="asc"?-1:1:0),b}):(d(y=>{const b=Bm(y,"Сортировка");return y&&b&&delete y[b],{...y}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},Hn=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),Hn(n.children,i)):n?n.children:e},Um=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[m,x]=l.useState(i),[y,b]=l.useState("");l.useEffect(()=>{x(i)});const E=l.useCallback(()=>{d(S=>!S)},[d]),N=l.useCallback(S=>{if(S.children)f.push(S.id.toString()),x(Hn(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(D=>D.id===S.id)){const D=o.filter(L=>L.id!==S.id);D.length?n(D):n(null)}else n([...o,S]);else n([S]);else n(S);!r&&E(),b(f.join("/"))}s==null||s(S)},[n,f]),j=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?x(i):x(Hn(i,f)??[])},[f,x]);return Kt(u,()=>{c&&E()}),{handleOpen:E,refElement:u,isOpen:c,multiple:r,handleSelect:N,selectedRoute:y,currentItems:m,route:f,goBack:j,refItems:h,appearance:a}},Wm=p.div`
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
`,Vm=p.div`
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
`,Gm=p.header`
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
`,qm=p.ul`
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
`,Ym=["isOpen"],Jm=p(vp).withConfig({shouldForwardProp:e=>!Ym.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Km=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:f}=Um(e),{isActive:g,width:m,title:x,required:y,selected:b,placeholder:E,size:N="middle"}=e;return t.jsxs(Vm,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:m,size:N,children:[t.jsx(W,{size:4,align:"left",bottomGap:"5px",visible:!!x,required:y,children:x}),t.jsxs(Wm,{multiple:o,appearance:f,size:N,children:[t.jsx(Gm,{appearance:f,children:o?b?b.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:E??"Не выбрано"}):t.jsx("div",{className:"single-header",children:b?t.jsxs(t.Fragment,{children:[!!b.icon&&t.jsx("span",{className:"icon",children:b.icon}),t.jsx("span",{className:"header-title",children:b.title})]}):t.jsx("span",{className:"not-chosen",children:E??"Не выбрано"})})}),t.jsx(Jm,{isOpen:s})]}),t.jsxs(qm,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:x,children:[!!d.length&&t.jsx(Xs,{isSelected:!1,onClick:j=>{j.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(wi,{}),"Назад"]})},-1),c.map(({id:j,icon:S,title:D,children:L,data:I})=>t.jsxs(Xs,{onClick:ne=>{ne.stopPropagation(),a({id:j,icon:S,title:D,children:L,data:I})},isSelected:!o&&!!b&&b.title.includes(D),leadingToSelected:r.includes(j.toString()),children:[!!S&&t.jsx("span",{className:"icon",children:S}),t.jsx("span",{className:"select-item-title",children:D}),!!L&&t.jsx("span",{className:"right-icon",children:t.jsx(ht,{})}),o&&!!b&&!!b.find(ne=>ne.title.includes(D))&&t.jsx("span",{className:"right-icon",children:t.jsx(nn,{})})]},D))]})]})},gr=l.memo(Km),Xm=e=>{switch(e){case"desc":return U.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return U.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return U.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Qm=p.div`
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
`,fr=p.div`
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
`,Zm=p.div`
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
`,e0=p.div`
    display: flex;
    align-items: center;
`,t0=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return Xm(h),h?{column:d,value:h}:null})};return t.jsx(Zm,{children:e.map(d=>{var u,h,f,g;return t.jsxs(fr,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Ht,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(_p,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(e0,{children:t.jsx(gr,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(x=>(m&&(x={...x,[d.field]:{column:d,value:m}}),x)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},i0=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(A,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(wi,{}),onClick:()=>r(ut(n-1,e).toString())}),t.jsxs(A,{w:"fit-content",gap:"6px",children:[t.jsx(pt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(oe,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(ht,{}),onClick:()=>r(ut(n+1,e).toString())})]}):null},n0=p.div`
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
`,yt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(n0,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,s0=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,o0=({obj:e,columns:i})=>t.jsx(s0,{children:i.map(n=>t.jsx(yt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Wt(e[n.field],n.type)},n.title))}),xr=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=te(),r=()=>a(t.jsx(o0,{obj:n,columns:i||e}),"Информация");return t.jsx(Qm,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(fr,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:u=>{c.onClick&&(u.stopPropagation(),c.onClick(n))},children:c.render?c.render(Wt(n[c.field],c.type),n):Wt(n[c.field],c.type)},c.field)})})})},a0=p.div`
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
`,r0=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,l0=p.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,c0=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),u=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(r0,{children:t.jsx(Qe,{})}):t.jsxs(a0,{children:[h==null?void 0:h.map((f,g)=>t.jsx(xr,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(fe,{text:"Нет данных"}),u>0&&t.jsx(xe,{margin:"0",width:"100%"}),t.jsx(l0,{children:t.jsx(i0,{pages:u,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},d0=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,p0=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},u0=({search:e,setSearch:i})=>{var n,s;return t.jsx(d0,{closed:!(e!=null&&e.column),children:t.jsx(pt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:p0((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Ht,{}),minWidth:"auto"})})},h0=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function g0(e){return Object.keys(e).map(i=>({title:"",field:i}))}const f0=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(h0(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(xe,{}),t.jsx(xr,{onRowClick:()=>null,columns:g0(s),el:s,index:1})]})},x0=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,et=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:u,setSearch:h,resultData:f,filter:g,setFilter:m,filterList:x,setFilterList:y,onRemoveOne:b,onRemoveAll:E}=Hm(n);return t.jsxs(x0,{children:[t.jsx(Fm,{setList:y,padding:"0 10px",list:x,onRemoveOne:b,onRemoveAll:E}),t.jsx(u0,{search:u,setSearch:h}),t.jsx(t0,{sort:c,setSort:d,columns:e,search:u,setSearch:h,filter:g,setFilter:m}),t.jsx(c0,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(f0,{footer:a,data:n,columns:e})]})},eE={ready:"Готово",pending:"В работе",rejected:"Отклонено"},hn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},gs={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},tE=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],iE=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],m0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(gs).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],b0=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(y0,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(v0,{columns:m0(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},y0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,v0=p(et)`
    width: 100%;
`,_0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${Xe()}`},s=await Ot({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},w0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>se(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(gs).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{_0(i.applicationGuid)}})}}],j0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(S0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(k0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(E0,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(T0,{columns:w0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},k0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,S0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,T0=p(et)`
    width: 100%;
`,E0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,P0=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(C0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(j0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(b0,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},C0=p.div`
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
`,fn=()=>t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),mr=()=>{const{data:{listApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx($0,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(O0,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(fn,{})]}),t.jsx(P0,{})]})})})},$0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,O0=p.div`
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
`,A0=Object.freeze(Object.defineProperty({__proto__:null,default:mr},Symbol.toStringTag,{value:"Module"})),br=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>se(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],yr=k(),vr=k(),_r=z(async()=>{const{data:e}=await he.get(`Weekend.GetAllHistory?PersonalGuid=${Yt(Xe()??"").IndividualGuid}`);return e.orders});$({clock:yr,target:_r});const Ei=z(async e=>(await he.post("Weekend.AddWeekend",e)).data);$({clock:vr,target:Ei});const wr=K([]),D0=Ei.pending;$({clock:_r.doneData,target:wr});$({clock:Ei.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ft.evokePopUpMessage});$({clock:Ei.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ft.evokePopUpMessage});const N0={loadBufferHolidayWork:yr,sendBufferHolidayWork:vr},nE={sendBufferHolidayWorkFx:Ei},I0={useBufferHolidayWork:()=>({data:ke(wr),loading:ke(D0)})},R0=()=>{const[e,i]=l.useState(!1);l.useEffect(N0.loadBufferHolidayWork,[]);const{data:n}=I0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(L0,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(z0,{columns:br(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},L0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,z0=p(et)`
    width: 100%;
`,M0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(B0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(F0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(H0,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},F0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,B0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,H0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,U0=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(W0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(M0,{info:s,index:o})),t.jsx(R0,{})]}):null},W0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,V0=()=>{const{data:{listApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(G0,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(q0,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(fn,{})]}),t.jsx(U0,{})]})})})},G0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,q0=p.div`
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
`,jr=k(),kr=k(),Pi=z(async()=>{const{data:e}=await he.get(`Vacation.GetAllHistory?personalGuid=${Yt(Xe()??"").IndividualGuid}`);return e});$({clock:jr,target:Pi});const Dt=z(async e=>(await he.post("Vacation.AddVacation",e)).data);$({clock:kr,target:Dt});const Ji=K(null);$({clock:Pi.doneData,fn:({employeeVacations:e})=>e,target:Ji});$({clock:Dt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:U.evokePopUpMessage});$({clock:Dt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:U.evokePopUpMessage});$({clock:Dt.doneData,source:Ji,fn:(e,{employeeVacations:i})=>[...e,...i],target:Ji});$({clock:Pi.failData,fn:e=>{var n;return{message:cs(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:U.evokePopUpMessage});$({clock:Dt.doneData,target:Pi});const Y0={loadBufferHolidayPlanning:jr,sendBufferHolidayPlanning:kr},sE={sendBufferHolidayPlanningFx:Dt},J0={useBufferHolidayPlanning:()=>({data:ke(Ji),loading:ke(Dt.pending),getDataLoading:ke(Pi.pending)})},xn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${Xe()}`},o=await Ot({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var Sr=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(Sr||{});const fs=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(Q,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>Sr[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${se((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${se((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),xn(i.documentGuid,"0")}}):"-"}}],K0=()=>[...fs(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${se((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${se((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),xn(i.documentGuid,"1")}}):"-"}}],X0=()=>{const{data:e,getDataLoading:i}=J0.useBufferHolidayPlanning(),n=()=>Y0.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>Ho(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(We,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs(A,{jc:"space-between",m:"10px 0",children:[t.jsx(Q0,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(St,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(A,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:fs(),columnsExtended:K0(),data:s,maxOnPage:10})})]})})},Q0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,On=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},Tr=()=>{const e=qt(),{allRoutes:i}=He.useMenu(),n=i??{},[s,o]=l.useState(On(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(On(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(On(a.pathname,n))}),[e,n]),s},Z0={small:"600px",middle:"700px",big:"963px",large:"100%"},Er=e=>Z0[(e==null?void 0:e.pageSize)??"middle"],eb=p(Ze)`
    position: relative;

    ${ee.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ee.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,tb=p.div`
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
`,ib=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: 40px;
    }
`,Xt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=Tr(),r=Er(a);return t.jsx(As,{padding:"0 0 10px 0",children:t.jsxs(eb,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(tb,{children:i}),n&&t.jsx(ib,{children:n}),e]})})});Xt.displayName="PageBlock";const nb=()=>{const{data:{dataWorkerApplication:e},error:i}=me.useApplications(),n=qt();return t.jsx(We,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Xt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Uo,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(X0,{})]})})},sb=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(hn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(gs).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Pr=k(),Cr=k(),xs=z(async()=>{const{data:e}=await he.get(`CarryForwardVacation.GetAllHistory?personalGuid=${Yt(Xe()??"").IndividualGuid}`);return e});$({clock:Pr,target:xs});const Qt=z(async e=>(await he.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);$({clock:Cr,target:Qt});const Ki=K([]);$({clock:xs.doneData,fn:({employeeVacations:e})=>e,target:Ki});$({clock:Qt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:ft.evokePopUpMessage});$({clock:Qt.doneData,source:Ki,fn:(e,{employeeVacations:i})=>[...e,...i],target:Ki});$({clock:xs.failData,fn:e=>{var n;return{message:cs(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:U.evokePopUpMessage});$({clock:Qt.failData,fn:e=>{var n;return{message:cs(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:ft.evokePopUpMessage});const Qs={loadBufferHolidayTransfer:Pr,sendBufferHolidayTransfer:Cr},oE={sendBufferHolidayTransferFx:Qt},ms={useBufferHolidayTransfer:()=>({data:ke(Ki),loading:ke(Qt.pending)})},ob=()=>{const[e,i]=l.useState(!1),{data:n}=ms.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ab,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(rb,{columns:sb(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},ab=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,rb=p(et)`
    width: 100%;
`,lb=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(db,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(cb,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(ub,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(pb,{columns:fs(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},cb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,db=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,pb=p(et)`
    width: 100%;
`,ub=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,hb=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),{data:i}=ms.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(gb,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(lb,{info:o,index:a,data:i})),t.jsx(ob,{})]})},gb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,fb=()=>{const{data:e,loading:i}=ms.useBufferHolidayTransfer();return l.useEffect(()=>{Qs.loadBufferHolidayTransfer()},[]),t.jsx(We,{load:Qs.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(xb,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(mb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(fn,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(hb,{})]})})})},xb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,mb=p.div`
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
`,bb=e=>localStorage.setItem("age",e.toString()),aE=e=>localStorage.getItem(e),yb=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),vb={listMedicalExamination:null,error:null},Mt=z(async()=>{const e=await he.get(`MedicalExamination.GetAllHistory?PersonalGuid=${Yt(Xe()??"").IndividualGuid}`);try{return bb(e.data.age),yb(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Ci=z(async e=>{try{const i=await he.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),_b=()=>{const{listMedicalExamination:e,error:i}=ke(wb);return{data:e,loading:ke(Ci.pending),getDataLoading:ke(Mt.pending),error:i}};k();Le({from:Ci.doneData,to:Mt});$({clock:Ci.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});$({clock:Ci.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:U.evokePopUpMessage});const wb=K(vb).on(Mt,e=>({...e,error:null})).on(Mt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(Mt.failData,(e,i)=>({...e,error:i.message})),jb={loadBufferMedicalExaminationFx:Mt,sendBufferMedicalExaminationFx:Ci},kb={useBufferMedicalExamination:_b},$r=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${se(i==null?void 0:i.startDate,"numeric")} - ${se(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),xn(i==null?void 0:i.documentGuid,"0")}}):"-"}],Sb=()=>[...$r(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),xn(i==null?void 0:i.documentGuid,"1")}}):"-"}],Tb=()=>{const{data:e,getDataLoading:i}=kb.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=me.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>Ho(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(We,{load:jb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs(A,{jc:"space-between",m:"10px 0",children:[t.jsx(Eb,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(St,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(A,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:$r(),columnsExtended:Sb(),data:s,maxOnPage:10})})]})},Eb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Pb=()=>{const{data:{dataWorkerApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Xt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(Tb,{})]})})},Or=k(),Ar=k(),Dr=z(async()=>{const{data:e}=await he.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${Yt(Xe()??"").IndividualGuid}`);return e.employeeHistories});$({clock:Or,target:Dr});const $i=z(async e=>(await he.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);$({clock:Ar,target:$i});const Nr=K([]),Cb=$i.pending;$({clock:Dr.doneData,target:Nr});$({clock:$i.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ft.evokePopUpMessage});$({clock:$i.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ft.evokePopUpMessage});const $b={loadBufferWorkTransfer:Or,sendBufferWorkTransfer:Ar},rE={sendBufferWorkTransferFx:$i},Ob={useBufferWorkTransfer:()=>({data:ke(Nr),loading:ke(Cb)})},Ab=()=>{const[e,i]=l.useState(!1);l.useEffect($b.loadBufferWorkTransfer,[]);const{data:n}=Ob.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Db,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(Nb,{columns:br(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Db=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Nb=p(et)`
    width: 100%;
`,Ib=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ve,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Lb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(gt,{}):t.jsx(Ue,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(Rb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(zb,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},Rb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Lb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,zb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,Mb=()=>{const{data:{dataWorkerApplication:e}}=me.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Fb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(Ib,{info:s,index:o})),t.jsx(Ab,{})]}):null},Fb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Bb=()=>{const{data:{listApplication:e},error:i}=me.useApplications();return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Hb,{children:t.jsxs(gn,{maxWidth:"1500px",children:[t.jsxs(Ub,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(fn,{})]}),t.jsx(Mb,{})]})})})},Hb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Ub=p.div`
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
`,Wb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${se(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${se(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${se(e[0])} по ${se(e[1])}`},Vb=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,mn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Ye.selectors.useData();return r?t.jsxs(Vb,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(lr,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(Q,{type:"info",title:Wb(n)??"",icon:t.jsx(Je,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(W,{size:4,align:"left",children:c.title}),t.jsx(Ti,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(ss,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(xe,{})]},c.title)})]})]}):null},Gb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},qb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Yb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},Jb=()=>{const{data:e}=Ye.selectors.useData();return t.jsx(mn,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},Ir=()=>{var i;const{data:e}=Ye.selectors.useData();return t.jsx(As,{padding:"10px",children:t.jsx(Xt,{children:t.jsx(Es,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Yb,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Gb,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(qb,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(Jb,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(ve,{oldVersionUrl:Ry}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Kb=Object.freeze(Object.defineProperty({__proto__:null,default:Ir},Symbol.toStringTag,{value:"Module"})),Xb=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Rr=k(),Lr=k(),zr=k(),Vt=z(async()=>{const e=await mh();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),bs=z(async e=>{try{return await yh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Oi=z(async e=>{const i=await bh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});$({clock:Oi.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:U.evokePopUpMessage});$({clock:Oi.doneData,fn:()=>!0,target:Lr});$({clock:Oi.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:U.evokePopUpMessage});$({clock:Rr,target:Oi});const Mr=k(),Fr=k(),Qb=is(Oi.pending,Vt.pending,Boolean),Zb=K(!1).on(zr,(e,i)=>i),ey=K(!1).on(Lr,(e,i)=>i),ty=K(null).on(Vt,()=>null).on(Vt.failData,(e,i)=>i.message).on(bs.failData,(e,i)=>i.message),iy=K(null).on(Vt.doneData,(e,i)=>i).on(bs.doneData,(e,i)=>Xb(e,i,!1)).on(Mr,()=>null),at={$loading:Qb,$completed:Zb,$done:ey,$error:ty,$paymentsStore:iy};Le({from:Fr,to:Vt});const ys={getPaymentsFx:Vt,signContractFx:bs},Un={signAgreement:Rr,setCompleted:zr,clearStore:Mr,getPayments:Fr},ny=Object.freeze(Object.defineProperty({__proto__:null,effects:ys,events:Un,stores:at},Symbol.toStringTag,{value:"Module"})),sy=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,oy=p.div`
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
`,ay=({date:e,value:i})=>t.jsxs(oy,{children:[t.jsxs(A,{gap:"16px",children:[t.jsx(mt,{color:"grey",size:33,children:t.jsx(ct,{})}),t.jsxs(A,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(oe,{children:se(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(ct,{})," "]})]}),ry=p.div`
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
`,Br=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(ry,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(ct,{})]})},ly=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),cy=p.div`
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
`,dy=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+ly(s.value),0).toFixed(1);return t.jsxs(cy,{children:[t.jsxs(A,{jc:"space-between",children:[t.jsx(W,{icon:t.jsx(Wo,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(oe,{fontSize:"1rem",width:"fit-content",children:t.jsx(Br,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(fe,{size:"50px",text:"Нет платежей",image:t.jsx(Vo,{})}),e.map((n,s)=>l.createElement(ay,{...n,key:s}))]})]})},Hr=()=>t.jsx(Q,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),py=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),uy=p.div`
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
`,hy=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:u}=e,{open:h}=te(),[f,g]=l.useState(!1),[m,x]=l.useState(!1),[y,b]=l.useState(!1),E=ji(at.$error),N=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:se(n)},{text:"Действует до",info:se(s)},{text:"Подписан",info:se(u)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:py(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},S=()=>{e&&(x(!0),ys.signContractFx(e.id),x(!1),b(!0))},D=()=>{h(t.jsx(Hr,{}),"Не получается подписать")};return t.jsxs(uy,{children:[t.jsx("div",{className:"contract-info",children:N.map(({info:L,text:I})=>t.jsx(yt,{keyStr:I,value:L},L))}),r&&t.jsxs(A,{d:"column",gap:"8px",children:[t.jsx(dt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:S,isLoading:m,completed:y,repeatable:!1,popUpFailureMessage:E??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:D,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs(A,{gap:"8px",children:[t.jsx(dt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:f,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Ti,{onClick:()=>null,href:c??"",icon:t.jsx(ss,{}),width:"45px"})]})]})},gy=p.div`
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
`,fy=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(gy,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Go,{style:{color:"var(--green)"}}):t.jsx(qo,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(Ue,{}),onClick:()=>null,background:"transparent"})]}),xy=p.div`
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
`,my=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(xy,{height:s,open:r,children:[t.jsx(fy,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},by=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,yy=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=ji([at.$done,at.$completed,at.$loading]),h=s||c?140:100,f=()=>Un.signAgreement(n),g=Un.setCompleted;return t.jsxs(my,{height:h,title:o,confirmed:s||c,children:[t.jsxs(by,{children:[t.jsxs(A,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(W,{size:5,align:"left",children:o}),t.jsx(oe,{children:se(r)})]}),t.jsxs(A,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Ti,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(ss,{}),isActive:!!e.file}),!(s||c)&&t.jsx(dt,{text:s||c?"Подписано":"Подписать",action:f,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(Q,{type:"success",title:"Подписано",icon:t.jsx(nn,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(oe,{children:["Дата подписания: ",se(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},vy=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Pe,{width:"100%",children:[t.jsx(W,{size:4,align:"left",icon:t.jsx(wp,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(Hr,{}),t.jsx(Q,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(yy,{data:s,isContractSigned:n},o))]}),_y=p.div`
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
`,Mi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(_y,{children:t.jsx(ps,{loading:i,width:"300px",height:"300px",src:e??""})})},wy=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,jy=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Mi,{qrCode:e}):n===1?t.jsx(Mi,{qrCode:i}):t.jsx(wy,{children:t.jsx(Es,{pages:[{title:"Текущая задолженность",content:t.jsx(Mi,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(Mi,{qrCode:i})}],appearance:!1,currentPage:n})}),ky=({type:e="horizontal",...i})=>{const{open:n}=te(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(jy,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(jp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},Sy=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(Br,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},An=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Ai=()=>{const e=oh.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(An(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(An(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(An(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},Ty=p.div`
    width: 100%;
`,Ey=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,Py=p.div`
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
`,Cy=p.div`
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
`,$y=p.div`
    position: relative;
`,Oy=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=Ai(),{open:h}=te(),[f,g]=l.useState(0),m=f===0?+n:+s,x=m>0,y=x?f===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",b=f===0?`На ${se(new Date)}`:`До ${se(o)}`,E=()=>{h(t.jsx(hy,{contract:i}),"Реквизиты договора")};return t.jsxs(Ty,{children:[t.jsx(W,{icon:t.jsx(kp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(Ey,{children:[t.jsx(us,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(Py,{children:[t.jsxs(A,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(Sy,{debt:m}),t.jsxs(A,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{size:3,align:"left",children:y}),t.jsx(oe,{children:b})]})]}),x?t.jsx(ky,{currentPage:f,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(Ga,{color:"green",size:"40px"})]}),t.jsxs(Cy,{children:[r&&t.jsx(Ti,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs($y,{children:[t.jsx(_,{onClick:E,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(Et,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Ur=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,Ay=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Wt(String(o),"rub")})`},Dy=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Ur(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:Ay}],Ny=({paygraph:e})=>t.jsxs(A,{d:"column",children:[t.jsx(W,{icon:t.jsx(Sp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(et,{columns:Dy(),data:e??[],maxOnPage:3})]}),Fi=({contracts:e})=>e?t.jsx(sy,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,u=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx(A,{gap:"8px",children:t.jsx(A,{w:"fit-content",children:t.jsxs(W,{size:3,align:"left",children:["Договор № ",o," от ",se(d,"numeric")]})})}),t.jsx(Oy,{data:i}),t.jsx(dy,{payments:c??[]}),t.jsx(Ny,{paygraph:r}),t.jsx(vy,{isDormitory:u,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(xe,{margin:"0",width:"100%"})]},o)})}):null,vs=()=>{const[e,i,n]=ji([at.$error,at.$loading,at.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{U.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(We,{loading:i,load:ys.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(Xt,{children:[t.jsx(Q,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(fe,{text:"Нет данных"}),s==="both"&&t.jsx(Es,{pages:[{title:"Общежитие",content:t.jsx(Fi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Fi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Fi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Fi,{contracts:n==null?void 0:n.education})]})})},Iy=Object.freeze(Object.defineProperty({__proto__:null,default:vs},Symbol.toStringTag,{value:"Module"})),T="/applications",re="/hr-applications",Zs="/staff_orders",eo="/staff_blanks",Ry="/ad_logins",_s="/doclist",to="/pps_vote2020",Ly="/children",Wr="/pps_contest",zy="/electronic-statements",ye="/onboarding",My="/structure-of-the-university",Fy="/addresses-and-contacts",By="/brandbook",Hy="/wifi-at-the-university",Uy="/health-care",Wy="/psychological-help",Vy="/social-environment",Gy="/vacation",ii="/kpi_pps",ni="/kpi_admin",io="/sc_news",no="/oop",so="/centers",qy="/helpful-information",Yy="/download-agreements",oo="/physical-education/main",Jy="/physical-education/student/:studentId",Vr=T+"/contact-info-actualization",Gr=T+"/contact-info-actualization-test",qr=T+"/data-verification",Yr=T+"/issuance-of-licenses",Jr=T+"/getting-computer-equipment",Kr=T+"/connecting-computer",Xr=T+"/printer-maintenance",Qr=T+"/question-sed",Zr=T+"/question-personal-account",el=T+"/other-it-services",tl=T+"/certificate-from-the-place-of-work",il=T+"/visa-certificate",nl=T+"/certificate-of-work-experience",sl=T+"/number-of-unused-vacation-days",ao=T+"/contact-details",Ky=T+"/contact-details/:guid",ol=T+"/edit-phonebook-subdivision",al=T+"/edit-phonebook-inner-phone",rl=T+"/edit-phonebook-email",ll=T+"/copy-of-the-employment-record",cl=T+"/copies-of-documents-from-the-personal-file",dl=T+"/work-on-the-terms-of-external-concurrency",pl=T+"/certificate-time-parental-leave",ul=T+"/arbitrary-request",hl=T+"/courier",gl=T+"/persona-income-tax-reference",fl=T+"/payment-of-child-birth-allowance",xl=T+"/payment-for-child-care",ml=re+"/part-time-employment/",Xy=re+"/dismissal/:id",Qy=re+"/work-transfer/:id",Zy=re+"/extra-holiday-coll",ev=re+"/holiday-planning",tv=re+"/holiday-transfer/:id",iv=re+"/holiday-work/:id",nv=re+"/work-transfer-change-rate/:id",sv=re+"/medical-examination",Wn=re+"/buffer-dismissal",Vn=re+"/buffer-holiday-planning",Gn=re+"/buffer-holiday-transfer",qn=re+"/buffer-holiday-work",Yn=re+"/buffer-medical-examination",Vi=re+"/buffer-work-transfer",bl=T+"/living-in-residential-premises",yl=T+"/guests-accomodation-on-campus",vl=T+"/guests-passage-to-campus",_l=T+"/relocation",wl=T+"/termination-of-agreement",jl=T+"/issuance-of-pass",kl=T+"/guest-pass",Sl=T+"/certification-and-issuance-of-docs",Tl=T+"/deferment-from-conscription",El=T+"/certified-copies-of-military-docs",Y=()=>ve({oldVersionUrl:"/sprav"}),ro=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(X,{}),path:ye,Component:Nm,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...Bl,"contact-details":{id:"contact-details",title:"Контактные данные",icon:t.jsx(O,{}),color:"blue",path:ao,Component:C?()=>ve({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):yx,isTemplate:!1,group:"GENERAL",show:!C},"contact-details-form":{id:"contact-details-form",title:"Контактные данные",hiddenTitle:!0,icon:t.jsx(O,{}),color:"blue",path:Ky,Component:C?()=>ve({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):vx,isTemplate:!1,group:"GENERAL",isSubPage:!0,show:!1,backButtonText:"Назад",fallbackPrevPage:ao},"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(Wo,{}),path:Yy,Component:Ir,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(Ap,{}),path:Ly,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"],show:!C},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(X,{}),path:zy,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Yo,{}),path:Rl,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(ct,{}),path:Xi,Component:vs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(X,{}),path:Wr,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Jo,{}),path:ii,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ii==null?void 0:ii.slice(1,ii.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(Dp,{}),path:ni,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ni==null?void 0:ni.slice(1,ni.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(Np,{}),path:io,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:io}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(O,{}),path:Zs,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:Zs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Ut,{}),path:eo,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:eo}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(O,{}),path:_s,Component:_x,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Uo,{}),path:Gy,Component:im,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(O,{}),color:"lightGreen",path:oo,pageSize:"big",Component:Cx,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(O,{}),color:"pink",show:!1,path:Jy,Component:$x,isTemplate:!1,fallbackPrevPage:oo,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(bi,{}),path:no,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:no}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(bi,{}),path:so,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:so}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(O,{}),path:qy,Component:hs,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Rn,{}),path:to,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:to}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(O,{}),path:T,Component:wx,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(O,{}),path:re,Component:C?()=>ve({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):nm,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(O,{}),color:"blue",path:qr,Component:cr,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"}}),lo=()=>({...Hl,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Yr,icon:t.jsx(O,{}),color:"blue",Component:C?Y:Ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:Wn,icon:t.jsx(O,{}),color:"blue",Component:C?Y:mr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:qn,icon:t.jsx(O,{}),color:"blue",Component:C?Y:V0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Yn,icon:t.jsx(O,{}),color:"blue",Component:C?Y:Pb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:Vn,icon:t.jsx(O,{}),color:"blue",Component:C?Y:nb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:Gn,icon:t.jsx(O,{}),color:"blue",Component:C?Y:fb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Vi,icon:t.jsx(O,{}),color:"blue",Component:C?Y:Bb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:ml,icon:t.jsx(O,{}),color:"blue",Component:C?Y:sm,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:iv,icon:t.jsx(O,{}),color:"blue",Component:C?Y:rm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:qn},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:sv,icon:t.jsx(O,{}),color:"blue",Component:C?Y:lm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Yn},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:ev,icon:t.jsx(O,{}),color:"blue",Component:C?Y:cm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Vn},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:tv,icon:t.jsx(O,{}),color:"blue",Component:C?Y:dm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Gn},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:Qy,icon:t.jsx(O,{}),color:"blue",Component:C?Y:pm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Vi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:nv,icon:t.jsx(O,{}),color:"blue",Component:C?Y:um,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Vi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Zy,icon:t.jsx(O,{}),color:"blue",Component:C?Y:am,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:Xy,icon:t.jsx(O,{}),color:"blue",Component:C?Y:om,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Wn},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(O,{}),color:"blue",path:Jr,Component:Ox,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(O,{}),color:"blue",path:Kr,Component:Tx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(O,{}),color:"blue",path:Xr,Component:Bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(O,{}),color:"blue",path:Qr,Component:Ux,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(O,{}),color:"blue",path:Zr,Component:Hx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(O,{}),color:"blue",path:el,Component:Lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(O,{}),color:"blue",path:tl,Component:xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(O,{}),color:"blue",path:il,Component:Wx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(O,{}),color:"blue",path:nl,Component:C?Y:kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(O,{}),color:"blue",path:sl,Component:Dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"edit-phonebook-subdivision":{id:"edit-phonebook-subdivision",title:"Внесение изменений данных подразделения в телефонном справочнике",hiddenTitle:!0,icon:t.jsx(O,{}),color:"blue",path:ol,Component:Nx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T,keywords:["изменение данных подразделения в телефонном справочнике"]},"edit-phonebook-inner-phone":{id:"edit-phonebook-inner-phone",hiddenTitle:!0,title:"Запрос на изменение внутреннего телефона",icon:t.jsx(O,{}),color:"blue",path:al,Component:Ix,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"edit-phonebook-email":{id:"edit-phonebook-email",hiddenTitle:!0,title:"Запрос на изменение корпоративной электронной почты",icon:t.jsx(O,{}),color:"blue",path:rl,Component:Rx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(O,{}),color:"blue",path:ll,Component:C?Y:Ex,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(O,{}),color:"blue",path:cl,Component:C?Y:mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(O,{}),color:"blue",path:dl,Component:C?Y:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(O,{}),color:"blue",path:pl,Component:C?Y:Sx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(O,{}),color:"blue",path:ul,Component:C?Y:jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},courier:{id:"courier",title:"Курьер",icon:t.jsx(O,{}),color:"blue",path:hl,Component:C?Y:Px,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(O,{}),color:"blue",path:gl,Component:C?Y:Fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(O,{}),color:"blue",path:fl,Component:C?Y:Mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(O,{}),color:"blue",path:xl,Component:C?Y:zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(O,{}),color:"blue",path:Vr,Component:Ks,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,show:!1,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"data-actualization":{id:"data-actualization",title:"Актуализация контактных данных (тест)",icon:t.jsx(O,{}),color:"blue",path:Gr,Component:C?Ks:bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T,show:!1},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(O,{}),color:"blue",path:qr,Component:cr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(O,{}),color:"blue",path:bl,Component:C?Y:Gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(O,{}),color:"blue",path:yl,Component:C?Y:qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(O,{}),color:"blue",path:vl,Component:C?Y:Yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(O,{}),color:"blue",path:_l,Component:C?Y:Jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(O,{}),color:"blue",path:wl,Component:C?Y:Kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(O,{}),color:"blue",path:jl,Component:C?Y:Xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(O,{}),color:"blue",path:kl,Component:C?Y:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(O,{}),color:"blue",path:Sl,Component:C?Y:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(O,{}),color:"blue",path:Tl,Component:C?Y:em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(O,{}),color:"blue",path:El,Component:C?Y:tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(qe,{to:ye})),icon:t.jsx(Ut,{}),isTemplate:!1,path:Vy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(qe,{to:ye})),icon:t.jsx(Tp,{}),isTemplate:!1,path:Wy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(qe,{to:ye})),icon:t.jsx(Ep,{}),isTemplate:!1,path:Uy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(qe,{to:ye})),icon:t.jsx(Pp,{}),isTemplate:!1,path:Hy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(qe,{to:ye})),icon:t.jsx(Cp,{}),isTemplate:!1,path:By,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx($p,{}),path:Fy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(qe,{to:ye})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(Op,{}),path:My,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(qe,{to:ye})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ye,isExternalPage:!0}}),Pl="/login",ov="/forgot-password",av="/medical-certificate",rv="/vaccination",ui="/all",ws="/home",js="/profile",ks="/chat",lv="/messages",lE=ks+"/:chatId",Cl="/electronic-interaction-agreement",Xi="/payments",Nt="/schedule",$l="/all-students",cv="/all-students/:filter",dv="/all-teachers/:filter",pv="/all-teachers",Ol="/all-staff",Ss="/feedback",Al="/cant-access",Dl="/memo-freshmen",Nl="/get-your-login",Il="/memo-teacher",_e="/settings",cE=_e+"/:id",uv=_e+"/appearance",hv=_e+"/personal",gv=_e+"/security",fv=_e+"/home-page",xv=_e+"/customize-menu",mv=_e+"/notifications",bv="/instructions",Rl="/project-activity",yv="/softskills",Ll="/alerts",zl="/lk-notifications",Ml="/helpful-information",Di=Nt+"/:page/:filter",Fl=Nt+"/current",vv=Nt+"/semestr",_v=Nt+"/session",wv=Nt+"/retake",jv=Ml+"/:infoType";var kv=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(kv||{});const Sv=[{id:0,title:"",icon:"",path:Pl,Component:hx},{id:1,title:"",icon:"",path:ov,Component:mm},{id:2,title:"Обратная связь",icon:t.jsx(bi,{}),path:Ss,Component:ur},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(kt,{}),path:Al,Component:fm},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:Nl,Component:Om},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:Dl,Component:Am},{id:6,title:"Вниманию сотрудников!",icon:"",path:Il,Component:Dm}],Bl={all:{id:"all",title:"Все разделы",icon:t.jsx(Mp,{}),path:ui,Component:hm,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Qo,{}),path:_e,Component:Tm,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(O,{}),path:_s,Component:$m,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Zo,{}),path:Ll,Component:bm,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Xo,{}),path:ws,Component:ym,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(ea,{}),path:js,Component:_m,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(on,{}),path:zl,Component:Im,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(ta,{}),path:Cl,Component:xm,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Fp,{}),path:ks,isOldLkPage:!0,Component:()=>ve({oldVersionUrl:lv}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(At,{}),path:Nt,menuPath:Fl,Component:hr,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Ut,{}),path:$l,Component:dr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Rn,{}),path:pv,Component:pr,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],show:!1},"all-staff":{id:"all-staff",title:"Сотрудники",icon:t.jsx(Rn,{}),path:Ol,Component:gm,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],pageSize:"big"},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(bi,{}),path:Ss,Component:ur,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Bp,{}),path:bv,Component:vm,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(ia,{}),path:rv,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0,show:!C}},Tv={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(At,{}),path:Fl,Component:wm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(os,{}),path:vv,Component:jm,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Ko,{}),path:_v,Component:km,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(ns,{}),path:wv,Component:Sm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Hl={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(At,{}),path:Di,Component:hr,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...Tv,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Ut,{}),path:cv,Component:dr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Ut,{}),path:dv,Component:pr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Ip,{}),path:uv,Component:Pm,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:_e,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(Rp,{}),path:hv,Component:Em,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:_e,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(Lp,{}),path:gv,Component:Cm,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:_e,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Xo,{}),path:fv,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:_e,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(zp,{}),path:xv,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:_e,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(on,{}),path:mv,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:_e,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:jv,Component:hs,color:"grey",isTemplate:!0,show:!1}},Ul=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;Si.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else U.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Wl=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;Si.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},Ev=(e,i,n,s)=>{if(i){const o=s.length+Qu;if(n<o){U.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??an;Si.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else U.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},Pv=(e,i,n)=>{if(i)if(n.includes(e))U.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{U.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;Si.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},Cv=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,$v=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,Ov=e=>{var m,x,y;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Jt.useSettings(),{data:r}=be.useUser(),c=He.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(b=>b===i),u=(x=a["settings-customize-menu"].property.pages)==null?void 0:x.find(b=>b===i),h=((y=r.user)==null?void 0:y.user_status)==="staff"?ua:an,f=()=>{Ul(i,a),Ie.close()},g=()=>{Ev(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Ie.close()};return t.jsxs(Cv,{children:[t.jsxs("div",{className:"top",children:[t.jsx(mt,{color:o,size:22,children:n}),t.jsx($v,{children:s})]}),t.jsx(xe,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(kt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{Wl(i,a),Ie.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(St,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),u?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(kt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>Pv(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(St,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},Vl=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ie.open({e:o,height:105,content:t.jsx(Ov,{...e})})};return t.jsx(_,{icon:t.jsx(na,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Gl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},ql=p(Ze)`
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
`,Av=p.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,co=e=>{var b;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:u,id:h,background:f,orientation:g="vertical"}=e,m=g==="vertical",{settings:x}=Jt.useSettings(),y=!!((b=x["settings-home-page"].property.pages)!=null&&b.find(E=>E===h));return t.jsxs(ql,{padding:"0",width:"100%",maxWidth:"100%",height:m?"135px":"60px",isVertical:m,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:f,children:[(d||c)&&m&&t.jsxs(Av,{children:[d&&t.jsx(sn,{title:"Раздел в старом ЛК"}),c&&t.jsx(Gi,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(mt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(Hp,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Gl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),u==="use"&&t.jsx(Vl,{route:e}),u==="add"?y?t.jsx(_,{icon:t.jsx(Ke,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>Wl(h,x)}):t.jsx(_,{icon:t.jsx(St,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>Ul(h,x)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},Dv=p(ql)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,dE=()=>t.jsx(Z,{to:ui,onClick:()=>{tt.changeOpen({isOpen:!1,currentPage:ui.slice(1,ui.length)})},children:t.jsx(Dv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(mt,{color:"blue",children:t.jsx(Up,{})}),t.jsx("b",{children:"Все разделы"})]})})}),Nv=p(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,Iv=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,Rv=e=>{const{close:i}=te(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(Iv,{width:o==="vertical"?c:"100%",children:t.jsx(co,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),tt.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(Nv,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(co,{...e,maxWordLength:r,mode:a})})},Lv=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,zv=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(fe,{text:"Ничего не было найдено"}):t.jsx(Lv,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(Rv,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),Mv=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(we(s.title).includes(we(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>we(a).includes(we(e))))&&(n[s.id]=s),n},{}),Fv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Bv=p(Z)`
    width: 100%;
`,Hv=({division:e})=>{const{close:i}=te();return t.jsxs(Fv,{children:[t.jsxs(A,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(mt,{size:120,color:"purple",children:t.jsx(li,{})}),t.jsx(oe,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(Bv,{to:`${Ol}?subdivision=${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(sa,{}),width:"100%",text:"Список"})})]})},Uv=p.div`
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
`,Wv=({division:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Hv,{division:e}),"Подразделение")};return t.jsx(Uv,{onClick:n,children:t.jsxs(A,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(A,{gap:"8px",children:[t.jsx(li,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(ht,{})]})})},Vv=({divisions:e})=>!e||e.length===0?null:t.jsx(A,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Wv,{division:i},i))}),bn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),Gv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,po=p(Z)`
    width: 100%;
`,Yl=({group:e})=>{const{close:i}=te();return t.jsxs(Gv,{children:[t.jsxs(A,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(mt,{size:120,color:"lightBlue",children:t.jsx(oa,{})}),t.jsx(oe,{fontSize:"1.2rem",children:e})]}),t.jsxs(A,{gap:"8px",onClick:i,children:[t.jsx(po,{to:bn(Di,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(At,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(po,{to:`${$l}/${e}`,children:t.jsx(_,{icon:t.jsx(sa,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},qv=p.div`
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
`,Yv=({group:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Yl,{group:e}),"Группа")};return t.jsx(qv,{onClick:n,children:t.jsxs(A,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(A,{gap:"8px",h:"50px",children:[t.jsx(oa,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(ht,{})]})})},Jv=({groups:e})=>e?t.jsx(A,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Yv,{group:i},i))}):null,Dn=[{title:"Инструкции",links:[{link:R+"/storage/files/instruction_business_trip_docs.docx",title:"Инструкция для командируемых работников",icon:""},{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ie},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ie},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ie},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ie},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ie},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ie},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ie},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ie}]}];var Ee=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Ee||{});const Lt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Kv=[{id:Ee.information,title:Lt[Ee.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Воинский учёт",visible:"student",links:[{title:"Военнообязанным и призывникам",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/voennoobyazannym-i-prizyvnikam/"},{title:"Единый пункт призыва",visible:"student",href:"https://www.mos.ru/city/projects/prizyv/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Ee.security,title:Lt[Ee.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Ee.instructions,title:Lt[Ee.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Dn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Ee.regulations,title:Lt[Ee.regulations],visible:"staff",content:[{title:"Положения",links:[...Dn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Ee.orders,title:Lt[Ee.orders],visible:"staff",content:[{title:"Приказы",links:[...Dn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Ee.courses,title:Lt[Ee.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Xv=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>we(a.title).includes(we(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Qv=p.div`
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
`,Zv=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s,visible:o},a)=>o==="staff"&&!i||o==="student"&&i?null:t.jsxs(Qv,{children:[t.jsx(W,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Pe,{gap:16,children:s.map(({title:r,href:c,visible:d},u)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:c,target:"_blank",rel:"noreferrer",children:r},r+u))})]},n+a))}):null;function Jn(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const e_=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,t_=p.div``,i_=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Jl=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(e_,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(t_,{children:e}),t.jsx(i_,{isOpen:o,children:i})]})},Kl=k(),Xl=k(),n_=K(!1).on(Xl,()=>!0).on(Kl,()=>!1),uo={close:Kl,open:Xl},s_={$isModalOpen:n_},Ts=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),o_=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=ji(s_.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((y,b)=>{y&&(i?(r(()=>[...a,y]),o(()=>[...s,b??""])):(r(()=>[y]),o(b?[b]:[])),n(()=>!0),uo.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),uo.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),x=l.useCallback(y=>{y&&r([...a,y])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(Ts.Provider,{value:{back:u,open:h,close:f,isOpen:i,canBack:d,component:g,title:m,setComponent:x},children:e})},te=()=>{const{open:e,isOpen:i,...n}=l.useContext(Ts);return{open:e,isOpen:i,...n}},a_="2.3.0",Ql=()=>t.jsx(Q,{icon:null,type:"info",title:a_,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Oe=({color:e,children:i})=>t.jsx(mt,{color:e,children:i}),r_=()=>({info:t.jsx(Oe,{color:"grey",children:t.jsx(Je,{})}),message:t.jsx(Oe,{color:"red",children:t.jsx(as,{})}),alert:t.jsx(Oe,{color:"purple",children:t.jsx(Zo,{})}),"payment-dorm":t.jsx(Oe,{color:"green",children:t.jsx(ct,{})}),"payment-ed":t.jsx(Oe,{color:"green",children:t.jsx(ct,{})}),"digital-services":t.jsx(Oe,{color:"red",children:t.jsx(O,{})}),"doc-for-review":t.jsx(Oe,{color:"blue",children:t.jsx(O,{})}),"hr-applications":t.jsx(Oe,{color:"green",children:t.jsx(O,{})}),"kpi-pps":t.jsx(Oe,{color:"pink",children:t.jsx(Jo,{})}),schedule:t.jsx(Oe,{color:"pink",children:t.jsx(At,{})}),"version-update":t.jsx(Ql,{}),"electronic-interaction":t.jsx(Oe,{color:"blue",children:t.jsx(ta,{})})}),l_=p(Z)`
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
`,c_=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,d_={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},p_={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},u_={small:"0px",middle:"1px",large:"2px",big:"3px"},Zl=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:m=!0,fullText:x=!0,maxLetters:y=200,size:b="middle"})=>{const E=se(o,"short"),{close:N}=te(),[j,S]=l.useState(!1),D=I=>{I.stopPropagation(),I.preventDefault(),f?(S(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},L=()=>{a==null||a(),m&&Ct.clearById({id:e,pageId:c}),N()};return t.jsx(Jl,{forceState:!j,bottomMargin:h,children:t.jsxs(l_,{to:d??"",onClick:L,children:[t.jsx("span",{className:"left-icon",children:r_()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(oe,{fontSize:"0.7rem",children:t.jsx(Ne,{words:[E??"",s??""]})}),t.jsxs(A,{d:"column",gap:u_[b],ai:"flex-start",children:[t.jsx(c_,{fontSize:d_[b],children:x?i:Jn(i,y)}),t.jsx(oe,{fontSize:p_[b],children:x?n:Jn(n,y)})]})]}),u&&t.jsx(_,{isActive:!(g&&j),icon:t.jsx(Ke,{}),background:"var(--theme-2)",onClick:D,style:{borderRadius:"20px"}})]})})},ec=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Ct.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(A,{d:"column",children:e.map((o,a)=>l.createElement(Zl,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Qi=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,ho=({people:e,type:i})=>!e||e.length===0?null:t.jsx(A,{d:"column",children:e.map(n=>l.createElement(Ps,{name:n.fio,type:i,...n,key:n.id}))}),h_=()=>{const{allRoutes:e}=He.useMenu(),{notifications:i,removeNotificationLoading:n}=it.useLkNotifications(),{data:{user:s}}=be.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Kv.flatMap(({visible:L,content:I})=>L==="staff"&&o||L==="student"&&!o||L==="all"?I:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,f]=l.useState(null),[g,m]=l.useState(null),[x,y]=l.useState(null),[b,E]=l.useState(null),[N,j]=l.useState(null),S=[{title:"Разделы",content:t.jsx(zv,{pages:x,showNotFound:!1}),clear:()=>{y(null)},search:L=>{if(e){const I=Mv(L,e);y(I)}},data:x},{title:"Студенты",content:t.jsx(ho,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async L=>{const{data:I}=await Wh(L,"",1,20);m(I.items)}},{title:"Сотрудники",content:t.jsx(ho,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async L=>{const{data:I}=await Fh(L,"",1,20);f(I.items)}},{title:"Группы",content:t.jsx(Jv,{groups:r}),data:r,clear:()=>{c(null)},search:async L=>{const{data:I}=await Vh(L);c(I.items)}},{title:"Подразделения",content:t.jsx(Vv,{divisions:d}),data:d,clear:()=>{u(null)},search:async L=>{const{data:I}=await Bh(L);u(I.items)}},{title:"Уведомления",content:t.jsx(ec,{notifications:b,loadingRemove:n}),clear:()=>{E(null)},search:L=>{const I=i.filter(ne=>we(ne.title).includes(L));E(I)},data:b},{title:"Полезная информация",content:t.jsx(Zv,{blocks:N,isStaff:o}),clear:()=>{j(null)},search:L=>{const I=Xv(L,a);j(I)},data:N}];return[(()=>{const{content:L,clear:I,data:ne}=S.reduce((H,q)=>(Qi(q.data)&&(H.data.push(q.data),H.content.push(t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",children:q.title}),q.content,t.jsx(xe,{})]}))),H.clear.push(q.clear),H),{content:[],clear:[],data:[]});return{title:"Все",content:L,clear:()=>I.map(H=>H()),search:async H=>{H.length<=8&&/\d|[-]/g.test(H)?await S[3].search(H):(S[0].search(H),S[5].search(H),S[6].search(H),Qi(S[0].data)===0&&(await S[1].search(H),await S[2].search(H),await S[4].search(H)))},data:ne}})(),...S]},g_=()=>JSON.parse(localStorage.getItem(M.SearchHistory)??"[]"),f_=()=>{const e=h_(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>g_(),[]),r=async g=>{e[i].clear();const m=Qa(g)?Xa(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(M.SearchHistory,JSON.stringify(a)))},[c,d,u]=ir({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!u&&!c.length,f=!!c.length&&!u&&!!Qi(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},x_=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Rs,{})})):e?n.filter(s=>we(s).includes(we(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Rs,{})})):[],m_=()=>t.jsxs(A,{gap:"8px",ai:"flex-start",children:[t.jsx(J,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(A,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(J,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),b_=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,y_=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=f_(),u=x_(r,n,d),{isOpen:h}=te();return t.jsx(b_,{children:t.jsxs(A,{d:"column",gap:"8px",h:"100%",children:[t.jsx(er,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(us,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(Za,{value:n,setValue:s}),e&&t.jsx(A,{h:"100%",children:t.jsx(fe,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Ht,{})})}),!r&&n.length!==0&&!e&&!Qi(c[o].data)&&t.jsx(A,{h:"100%",children:t.jsx(fe,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Bo,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(m_,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},v_=p(Ze)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${ee.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,__=p.div`
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
`,w_=p(A)`
    @media (max-width: 1000px) {
        display: none;
    }
`,j_=()=>{const e=kf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(aa,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},tc=({size:e="large"})=>{const i=j_(),{open:n}=te(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(y_,{}),"Глобальный поиск");return Ka(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Ht,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(v_,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(oe,{align:"left",fontSize:"0.9rem",children:t.jsxs(A,{gap:"8px",children:[t.jsx(Ht,{}),"Поиск"]})}),t.jsx(w_,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(__,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},Kn=e=>e.split(" ").map(i=>i[0]),De=(e,i)=>{const n=Kn(e),s=w[th[n[0]]];return s==null?void 0:s[i??"main"]},k_=p.div`
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
`,S_=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ni({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:f,onClick:g,borderRadius:m,background:x}){const[y,b]=l.useState(!0),E=Kn(i)[0]+(Kn(i)[1]??""),{open:N}=te(),j=S=>{f?N(t.jsx(Ni,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(S)};return t.jsxs(k_,{selected:e,width:s,height:o,marginRight:a,background:x??De(i),boxShadow:d,border:u,onClick:j,borderRadius:m,children:[n&&y?t.jsx(S_,{loading:"lazy",round:!0,onLoadedData:()=>b(!0),onError:()=>b(!1),src:n}):t.jsx("div",{className:"name",children:E}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Be,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(Et,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const pE=p.header`
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
`;const uE=p.div`
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
`,T_=p.div`
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
`,hE=p.div`
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
`,gE=p.div`
    margin-top: 50px;
    width: 100%;
`,fE=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,xE=p(Ze)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,mE=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,E_=p.div`
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
`,P_=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(E_,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Bf,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},C_=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,$_=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(C_,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(P_,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},ic=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=xt(),{settings:o}=Jt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(Wp,{}):t.jsx(Vp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:x=>s(x)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:x=>s(x)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(x=>!x),i==null||i()};return e==="toggle"?t.jsx($_,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(T_,{width:"30px",background:w.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},O_=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(A,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(A,{gap:"16px",ai:"center",children:[t.jsx(J,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(A,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(J,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),A_=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,D_=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=it.useLkNotifications();return l.useEffect(()=>{o&&U.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Ct.clearAllVisible()},[]),t.jsxs(A_,{children:[s.length===0&&!n&&t.jsx(As,{height:"100%",children:t.jsx(fe,{text:i??"Нет новых уведомлений",image:i?t.jsx(kt,{}):t.jsx(Gp,{}),size:"70px"})}),t.jsxs(A,{d:"column",gap:"16px",children:[t.jsx(Q,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(ec,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(O_,{quantity:10})]})},N_=p.div`
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
`,nc=()=>{const{close:e}=te(),{notifications:i}=it.useLkNotifications(),n=3;return t.jsxs(A,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(A,{d:"column",gap:"16px",children:[t.jsx(D_,{maxNotificationsVisible:n}),t.jsxs(oe,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Gl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:zl,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},I_=()=>{const{notifications:e}=it.useLkNotifications(),{open:i}=te(),n=()=>{i(t.jsx(nc,{}),"Уведомления")};return t.jsxs(N_,{onClick:n,children:[t.jsx(Et,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(on,{})]})},R_=p.div`
    position: relative;
`,sc=()=>{const{open:e}=te(),{notifications:i}=it.useLkNotifications(),n=()=>Ie.close(),s=()=>{ot.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:$t.logout}),n()},o=()=>{Ie.close(),e(t.jsx(Nc,{}),"Что нового")},a=()=>{e(t.jsx(nc,{}),"Уведомления"),Ie.close()};return t.jsxs(t.Fragment,{children:[t.jsx(nj,{padding:"8px",size:"small"}),t.jsx(xe,{}),t.jsx(ic,{type:"h-button"}),t.jsx(xe,{}),t.jsx(Z,{to:js,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(ea,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(R_,{children:[t.jsx(_,{onClick:a,icon:t.jsx(on,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(Et,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:_e,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(Qo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(sn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(xe,{}),t.jsx(_,{align:"left",icon:t.jsx(qp,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(xe,{}),t.jsx(_,{align:"left",icon:t.jsx(Ql,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},L_=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,z_=({showSearch:e=!1})=>{const{data:{user:i}}=be.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ie.open({e:s,height:143,content:t.jsx(sc,{})})};return t.jsxs(L_,{children:[e&&t.jsx(tc,{size:"icon"}),t.jsx(I_,{}),t.jsx(Ni,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},M_=p.header`
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
`,F_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,B_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,H_=p.div`
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
        max-width: ${F_};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ee.isTablet} {
        max-width: ${B_};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ee.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,U_=()=>{const{pathname:e}=Gt(),[i,n]=l.useState([e]),{action:s}=qt();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},W_=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=qt();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Hi,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},V_=({headerVisible:e,currentPage:i})=>{const n=qt(),s=U_(),o=e||!!(i!=null&&i.planeHeader),a=Er(i),r=(u=ui)=>()=>{tt.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(W_,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Hi,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Hi,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Hi,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},G_=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Ai(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=V_({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(M_,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(H_,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(A,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(z_,{showSearch:!0})]})]})},q_=le.memo(G_),Y_=p(Z)`
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
`,J_=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(J,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Ie.open({e:c,height:143,content:t.jsx(sc,{})})};return t.jsxs(Y_,{to:js,children:[t.jsx(_,{icon:t.jsx(na,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ni,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(W,{size:5,children:e})]})},K_=le.memo(J_),X_=["isCurrent","color"],Q_=p(Z).withConfig({shouldForwardProp:e=>!X_.includes(e)})`
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
`,Z_=p.div`
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
`,e1=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,t1=p.button`
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
`,i1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(Q_,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(Et,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(Et,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(Vl,{route:e})]})},oc=le.memo(i1),n1=()=>{const{isOpen:e}=He.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Ke,{}),onClick:()=>tt.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},s1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(t1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(s1);p.section`
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
`;const o1=()=>{const{leftsideBarRoutes:e}=He.useMenu(),i=Gt();return e?t.jsx(e1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(oc,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(A,{d:"column",children:[t.jsxs(A,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(A,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(A,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(A,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},a1=le.memo(o1),r1=()=>{const{isOpen:e}=He.useMenu(),{width:i,height:n}=un(),{data:{user:s}}=be.useUser(),{visibleRoutes:o}=He.useMenu(),a=Gt();return t.jsxs(Z_,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:ws,children:t.jsx(dn,{width:"165px"})}),t.jsx(K_,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(tc,{size:"small"}),t.jsx(a1,{})]}),t.jsx(ic,{type:"toggle"}),i<1e3&&t.jsx(n1,{})]})},l1=p.div`
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
`,c1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Pa.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{U.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),U.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(l1,{isOpen:e,isClickable:!!o,color:Tt[n].color,onClick:a,children:t.jsx(Q,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>U.openPopUpMessage({isOpen:!1}),children:i})})},yn=p.div`
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
`;const d1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Ts);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},p1=p.div`
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
`,u1=p.div`
    padding-top: 30px;
`,h1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=d1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return Ka([27],o),Kt(r,()=>{o()}),t.jsx(yn,{isOpen:c,children:t.jsxs(p1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(wi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(W,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Ke,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(u1,{children:i})]})})},g1=le.memo(h1),f1=p.div`
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
`,x1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Da.useConfirm(),o=l.useRef(null);Kt(o,()=>ot.closeConfirm());const a=()=>{n(),ot.closeConfirm()},r=()=>{ot.closeConfirm()};return t.jsx(yn,{isOpen:e,children:t.jsxs(f1,{isOpen:e,ref:o,children:[t.jsx(W,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Pe,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},m1=p.div`
    display: flex;
    align-items: ${({align:e})=>Bn(e)};
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
`,b1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:f}=un(),g=l.useRef(null),m=()=>{var y,b;g!=null&&g.current&&h(Math.round(((y=g.current)==null?void 0:y.scrollLeft)/((b=g.current)==null?void 0:b.clientWidth)))},x=y=>{var b;h(y),r==null||r((b=e[y])==null?void 0:b.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*y)};return l.useEffect(()=>{x(u)},[i,f]),t.jsxs(m1,{width:n,align:c,maxWidth:o,children:[t.jsx(us,{pages:e.map(({title:y,condition:b})=>({title:y,condition:b})),currentPage:u,setCurrentPage:x,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(y=>y.condition!==void 0&&y.condition||y.condition===void 0?t.jsx("div",{className:"slider-page",children:y.content},y.title):t.jsx("div",{className:"slider-page",children:t.jsx(fe,{text:"Нет данных"})},y.title))})]})},Es=b1,go=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},fo=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",ac=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},y1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},v1=p.div`
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
`,_1=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(v1,{width:i,height:n,color:De(e,"dark1"),color2:De(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light2")})})]})}),w1=p.div`
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
`,j1=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",m=ac(h,n,s,o);return t.jsxs(w1,{children:[t.jsx(_1,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ni,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(oe,{fontSize:"0.9rem",children:t.jsx(Ne,{words:m})}),t.jsx(yt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(yt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(yt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(yt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(yt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},k1=p.div`
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
`,rc=e=>{const{children:i}=e;return t.jsxs(k1,{children:[t.jsx(j1,{...e}),t.jsx("div",{className:"buttons",children:i})]})},S1=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,T1=()=>t.jsxs(S1,{children:[t.jsx(J,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(J,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(J,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),lc=e=>{if(e)return()=>{ot.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(M.Token,e),location.reload()}})}},E1=e=>{const{close:i}=te(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${De(s,"main")}, ${De(s,"dark1")})`;return t.jsxs(rc,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:bn(Di,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(At,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(as,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:lc(n)})]})},P1=e=>{const{close:i}=te(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${De(s,"dark1")}, ${De(s,"main")})`;return t.jsxs(rc,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:bn(Di,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(At,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(as,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:lc(n)})]})},C1=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?y1(i):"100%"};

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
            font-size: ${({size:e})=>go(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${go(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,Ps=e=>{const{open:i}=te(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:m="middle"}=e,x=ac(h,n,d,u);if(f)return t.jsx(T1,{});const y=b=>{r?r(b):h||(Ie.close(),i(n==="staff"?t.jsx(P1,{...e}):t.jsx(E1,{...e})))};return t.jsxs(C1,{orientation:g,size:m,onClick:y,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ni,{name:o,avatar:s,width:fo(g,m),height:fo(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ne,{words:x})})]})]})},Zi=e=>{const i=we(e),s=[{keys:["распознаван"],icon:t.jsx(Jp,{})},{keys:["принт"],icon:t.jsx(Kp,{})},{keys:["химич"],icon:t.jsx(Xp,{})},{keys:["сервер"],icon:t.jsx(Qp,{})},{keys:["игр"],icon:t.jsx(Zp,{})},{keys:["жизнед"],icon:t.jsx(eu,{})},{keys:["web","веб"],icon:t.jsx(tu,{})},{keys:["истор"],icon:t.jsx(iu,{})},{keys:["информат"],icon:t.jsx(nu,{})},{keys:["информации"],icon:t.jsx(Je,{})},{keys:["мобильн"],icon:t.jsx(su,{})},{keys:["безопасн"],icon:t.jsx(ou,{})},{keys:["автоматиз"],icon:t.jsx(au,{})},{keys:["линейн"],icon:t.jsx(ru,{})},{keys:["обработ"],icon:t.jsx(lu,{})},{keys:["презентац"],icon:t.jsx(cu,{})},{keys:["операционн"],icon:t.jsx(aa,{})},{keys:["эконом"],icon:t.jsx(ct,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(du,{})},{keys:["анализ"],icon:t.jsx(pu,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(uu,{})},{keys:["сети","сетей"],icon:t.jsx(hu,{})},{keys:["матем"],icon:t.jsx(gu,{})},{keys:["вероятн"],icon:t.jsx(fu,{})},{keys:["философ"],icon:t.jsx(ra,{})},{keys:["данны"],icon:t.jsx(xu,{})},{keys:["язык"],icon:t.jsx(mu,{})},{keys:["спорт","физичес"],icon:t.jsx(bu,{})},{keys:["проектная"],icon:t.jsx(In,{})},{keys:["интеллект"],icon:t.jsx(yu,{})},{keys:["научн"],icon:t.jsx(vu,{})},{keys:["предприним"],icon:t.jsx(_u,{})},{keys:["коммуникац"],icon:t.jsx(wu,{})},{keys:["управлени"],icon:t.jsx(rs,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Ko,{})},{keys:["переработ"],icon:t.jsx(ju,{})},{keys:["машин","инжен"],icon:t.jsx(ku,{})},{keys:["проектир","расчет"],icon:t.jsx(Su,{})},{keys:["производ"],icon:t.jsx(Vo,{})},{keys:["эколог"],icon:t.jsx(Tu,{})},{keys:["защит"],icon:t.jsx(Eu,{})},{keys:["патент"],icon:t.jsx(Pu,{})},{keys:["материал"],icon:t.jsx(Cu,{})},{keys:["физик"],icon:t.jsx($u,{})},{keys:["тайм"],icon:t.jsx(Ou,{})},{keys:["практика"],icon:t.jsx(la,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(Yp,{})},Xn={"9:00 - 10:30":w.green,"10:40 - 12:10":w.lightGreen,"12:20 - 13:50":w.blue,"14:30 - 16:00":w.purple,"16:10 - 17:40":w.pink,"17:50 - 19:20":w.red,"18:20 - 19:40":w.orange,"19:30 - 21:00":w.orange,"19:50 - 21:10":w.orange},cc=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},$1=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,vn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},O1=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=vn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},dc=(e,i,n)=>O1(e)===vn(i.startTime)&&n,vi=e=>e<=9?"0"+e:e,A1=e=>`${vi(Math.floor(e/60))}:${vi(e%60)}`,xo=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},D1=p.div`
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
`,N1=p.div`
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
`,I1=p(A)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ee.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,mo=p.div`
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
`,R1=p(oe)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,L1=p.div`
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
`,z1=p.div`
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
`,M1=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(xo(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(xo(new Date,s[0]*60,s[1]*60))},ls.minute),()=>clearInterval(c.current)),[e]),t.jsx(L1,{currentTime:(a-i)*n,children:o&&t.jsx(z1,{children:A1(a)})})},pc=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},$e=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(I1,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(mo,{shortInfo:o,children:e}),t.jsx(R1,{width:"100%",className:"text",children:i}),t.jsx(mo,{shortInfo:o,children:s})]}),F1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,B1=p(Z)`
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
`,H1=({groups:e})=>{const{close:i}=te();return t.jsx(F1,{children:e.map(n=>t.jsxs(B1,{to:bn(Di,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Ut,{}),n]}),t.jsx(ht,{})]},n))})},U1=({icon:e,background:i,noPadding:n=!1})=>t.jsx(D1,{background:i,noPadding:n,children:t.jsxs(N1,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),W1=p.div`
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
`,V1=({subjectName:e,color:i,noPadding:n})=>{const s=Zi(e),{theme:o}=xt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(W1,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(U1,{noPadding:n,icon:s,background:r}),t.jsx(mt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},G1=Au`
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
`,q1=({color:e,start:i})=>`
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
}`,Y1=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${q1}
`,J1=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,K1=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ee.isMobile} {
        font-size: 0.7rem;
    }
`,uc=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=xt(),o=s==="light"?i.main:i.light2;return t.jsxs(J1,{children:[t.jsx(Y1,{start:n,color:o}),e&&t.jsx(K1,{children:e})]})},X1=p.div`
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
`,Q1=p(A)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,Z1=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:m=!1}=e,x=(d==null?void 0:d.split(","))??[],{open:y}=te(),b=()=>{x.length===1?y(t.jsx(Yl,{group:x[0]})):y(t.jsx(H1,{groups:x}),"Группы")},E=()=>{y(t.jsx(tw,{place:s,link:r,name:n}))},N=pc(n);return t.jsxs(X1,{children:[t.jsx(V1,{subjectName:n,color:u,noPadding:m}),t.jsxs(Q1,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(A,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(A,{gap:"8px",children:[t.jsx(uc,{isCurrentEvent:g,color:u,timeInterval:i}),t.jsx(hc,{timeLeft:vn(i.split(" - ")[0],"minutes"),isNext:f,color:u,isCurrentEvent:g})]}),t.jsx(W,{size:3,align:"left",width:"fit-content",children:N.name})]}),t.jsx(xe,{margin:"0",width:"100%"}),t.jsx($e,{icon:t.jsx(os,{}),text:t.jsx(Ne,{words:[h??"",a]})}),((r==null?void 0:r.length)||N.link)&&t.jsx("a",{href:r??N.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{icon:t.jsx(Gi,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx($e,{icon:t.jsx(la,{}),text:s}),!!c.length&&t.jsx($e,{icon:t.jsx(Ln,{}),text:t.jsx(Ne,{words:c})}),!!x.length&&t.jsx($e,{onClick:b,icon:t.jsx(rs,{}),text:t.jsx(Ne,{words:x}),rightIcon:t.jsx(ht,{})}),t.jsx(A,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(Ps,{type:"staff",name:j},j))]})}),!r&&t.jsx(xe,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:E})]})]})};p.span`
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
`;const ew=p.a`
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
`,Bi=({title:e,link:i,image:n})=>i?t.jsxs(ew,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(W,{size:3,children:e})]}):null,bo=p.div`
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
`,tw=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(bo,{children:t.jsx(A,{jc:"center",children:t.jsx(Qe,{})})}):t.jsx(bo,{children:e==="Webex"?t.jsx(Bi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Bi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Bi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Bi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},yo=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,hc=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=xt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(yo,{background:c,color:r,children:"Сейчас"}):t.jsxs(yo,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},iw=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,bE=()=>t.jsxs(iw,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(J,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(J,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(J,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(J,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),gc="/assets/sleep-54d590c1.gif";var fc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(fc||{});const nw=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],yE=[...nw,{title:"Месяц",condition:!0}],jt=Object.keys(zt).reduce((e,i)=>(e[i]=[],e),{}),sw={schedule:{today:[],week:{...jt},semestr:{data:{...jt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...jt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},ow=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},_i=e=>{const[i,n]=e.split(":");return+i*60+ +n};var en=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(en||{});const xc=e=>{const[i,n]=e.split(" "),s=en[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},mc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=en[o],r=en[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},ri=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[f,g]=r.split(" - "),m=_i(g)-_i(f),[x,y]=d.split("-").map(N=>N.trim()),b=xc(x),E=mc(y,x);return{title:o,people:a,startTime:f,duration:m,startDate:b,endDate:E,placeIcon:t.jsx(Du,{}),dateInterval:d,color:Xn[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Zi(o)}}):[],aw=e=>new Date(e.setHours(0,0,0,0)),vo=(e,i)=>(e??[]).filter(n=>{const s=aw(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=xc(o),c=mc(a,o);return s>=r&&s<=(c??r)}),bc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),Qn=e=>e instanceof Date&&isFinite(+e),rw=e=>{const i={...jt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!Qn(n)||!Qn(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=bc(a);if(r==="sunday")continue;i[r]=[...i[r],...ri(e[o].lessons,zt[r].short)]}return{schedule:i,startDate:n,endDate:s}},yc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),vc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return U.evokePopUpMessage({message:f,type:"failure",time:ls.ten_seconds}),{schedule:sw.schedule,errorInData:f}}const o=new Date;let a=ow(o);o.getDay()===0&&(a=yc(o,1));const r={...jt},c={...jt};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),x=e[f];"lessons"in x?(r[g]=ri(vo(x.lessons,a),zt[g].short),c[g]=ri(x.lessons,zt[g].short)):(r[g]=ri(vo(x,a),zt[g].short),c[g]=ri(x,zt[g].short)),n=new Date(Math.min(...c[g].map(y=>y.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(y=>(y.endDate??y.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=rw(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},_c=async e=>{const i=await hh(e),n=await fh();return vc(i.data,n.data)},wc=async e=>{const i=await gh(e),n=await xh(e);return vc(i.data,n.data)},_o={data:{schedule:null,externalSchedule:null,view:fc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},lw=()=>G(de),Pt=z(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await wc(n);if(i&&s==="stud")return await _c(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Zt=z(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await _c(e)}catch(i){throw new Error(i.message)}}),ei=z(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await wc(e)}catch(i){throw new Error(i.message)}}),cw=k(),jc=k(),kc=k(),Sc=k(),Tc=k(),Ec=k(),Pc=k(),de=K(_o).on(Pt,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Pt.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(jc,(e,i)=>({...e,data:{...e.data,view:i}})).on(kc,(e,i)=>({...e,currentChosenDay:i.day})).on(Sc,()=>({..._o}));$({clock:Pt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(jt)}}),target:de});$({clock:Tc,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});$({clock:Ec,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});$({clock:ei.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});$({clock:Zt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});$({clock:[Zt,ei,Pt],source:de,fn:e=>({...e,loading:!0}),target:de});$({clock:[Zt,ei],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});$({clock:[Zt.doneData,ei.doneData,Pt.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});$({clock:[Zt.failData,ei.failData,Pt.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});$({clock:Pc,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const Cs={useSchedule:lw},dw={changeCurrentModule:cw,changeView:jc,changeCurrentChosenDay:kc,clearStore:Sc,resetExternalSchedule:Pc,setSearchValue:Ec,setFilter:Tc},pw={getScheduleFx:Pt,getGroupScheduleFx:Zt,getTeacherScheduleFx:ei},uw=Object.freeze(Object.defineProperty({__proto__:null,effects:pw,events:dw,selectors:Cs},Symbol.toStringTag,{value:"Module"})),hw=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${vi(Math.floor(o/60))}:${vi(o%60)}`},Cc=(e,i)=>e?`${e} - ${hw(e,i)}`:"9:00",Zn=e=>!e||!Qn(e)?0:e.getHours()*60+e.getMinutes(),$s=(e,i)=>_i(e.startTime)<=Zn(new Date)&&Zn(new Date)<=_i(e.startTime)+e.duration&&i,$c=()=>{const{open:e}=te();return n=>{const s=Cc(n.startTime,n.duration);e(t.jsx(Z1,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:$s(n,!0),noPadding:!0,...n}))}},wo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},gw=()=>{const{currentDevice:e}=Ai(),[i,n]=l.useState(wo[e]);return l.useEffect(()=>{n(wo[e])},[e]),i},fw=p.div`
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
`,xw=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=gw(),o=$c(),a=[9,22];return e!=null&&e.length?t.jsx(fw,{children:t.jsx(Dc,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(fe,{text:"В этот день пар нет",image:gc})},Oc=()=>{const{data:{schedule:e}}=Cs.useSchedule(),{open:i}=te(),n=yc(new Date,1),s=Ur(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=bc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(xw,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},mw=p.div`
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
`,vE=({errorInData:e})=>t.jsxs(mw,{children:[t.jsx("img",{src:gc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(Oc,{})]});p.div`
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
`;const bw=(e,i,n)=>i?e?1:.8:n?1:0,yw=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>bw(e,i,n)};
    transform: scale(${({isVisible:e})=>yw(e)});
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
`;const vw=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,_E=()=>t.jsxs(vw,{children:[t.jsx(Ga,{size:"38px"}),t.jsx(W,{size:4,children:"Учебный день завершился"}),t.jsx(Oc,{})]});p.div`
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
`;const _w=e=>{const[i,n]=e.split(":");return+i*60+ +n},Ac=(e,i,n)=>e?(_w(e)-i)*n:0,ww=p.div`
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
`;const jw=p(A)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ee.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,kw=p.span`
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
`,Sw=p.div`
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
`,Tw=p(A)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,Ew=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:f,rooms:g,dateInterval:m,leftShift:x,quantity:y,groups:b,isCurrentEvent:E=!1,nameInOneRow:N=!0,isNextEvent:j=!1,listView:S=!1,shortInfo:D=!1}=e,{theme:L}=xt(),{isMobile:I}=Ai(),ne=L==="light"?d.dark3:d.light3,H=L==="light"?d.transparent1:d.transparent2,q=()=>h(e),ce=(I||y>1)&&D,Ce=I&&y>=2&&D,Se=r==null?void 0:r.map(ti=>{var Ri,Li;const ze=ti.split(" ");return`${ze[0]??""} ${((Ri=ze[1])==null?void 0:Ri[0])??""}.${((Li=ze[2])==null?void 0:Li[0])??""}.`}),Ge=Ac(o,c,u),Te=pc(i),ge=Ce?i.split(" ").map(ti=>ti[0].toUpperCase()):Jn(Te.name,D?ce?43:35:N?300:64),It=(b==null?void 0:b.split(","))??[];return t.jsxs(ww,{background:H,textColor:ne,listView:S,leftShift:100*x,quantity:100/y,duration:n,scale:u,top:Ge,onClick:q,shortInfo:D,children:[t.jsx(Sw,{children:s}),t.jsx(A,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(jw,{scale:u,d:"column",ai:"flex-start",shortInfo:D,children:[t.jsxs(A,{d:"column",gap:"2px",children:[!D&&t.jsxs(A,{gap:"8px",children:[t.jsx(uc,{timeInterval:Cc(o,n),color:d,isCurrentEvent:E}),t.jsx(hc,{timeLeft:vn(o,"minutes"),isNext:j,color:d,isCurrentEvent:E}),!!(g!=null&&g.length)&&t.jsx($e,{shortInfo:D,icon:I&&y>1?void 0:t.jsx(Ln,{}),text:t.jsx(Ne,{words:g})}),(!!f||Te.link)&&t.jsx("a",{href:f??Te.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:D,icon:t.jsx(Gi,{}),text:f?a:"Cсылка"})}),!!It.length&&t.jsx($e,{icon:t.jsx(rs,{}),text:t.jsx(Ne,{words:It})})]}),t.jsx(kw,{listView:S,nameInOneRow:N,scale:u,shortInfo:D,children:ge})]}),!!r.length&&!ce&&t.jsx($e,{shortInfo:D,text:t.jsx(Ne,{words:D?[Se[0]]:Se}),icon:t.jsx(Nu,{})}),!!(g!=null&&g.length)&&D&&!ce&&t.jsx($e,{shortInfo:D,icon:t.jsx(Ln,{}),text:t.jsx(Ne,{words:g})}),!!f&&D&&!ce&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:D,icon:t.jsx(Gi,{}),text:a})}),!!m&&!ce&&t.jsx(A,{gap:"5px",children:t.jsx($e,{shortInfo:D,icon:t.jsx(os,{}),text:m})})]})})]})},Pw=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},Cw=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:u})=>{const h=Pw(e),f=u??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(Tw,{h:"100%",d:"column",children:[f&&t.jsx(M1,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,x)=>h[m].map((y,b)=>l.createElement(Ew,{leftShift:b,quantity:h[m].length,scale:n,isCurrentEvent:$s(y,f),isNextEvent:dc(e,y,f),...y,onClick:c,shift:i,key:y.startTime+y.title+x+b,shortInfo:s})))]})},$w=p(A)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,Ow=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,Aw=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,Dw=p(oe)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ee.isMobile} {
        font-size: 0.65rem;
    }
`,Nw=Array(24).fill(0).map((e,i)=>`${vi(i)}:00`),Iw=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):Nw.slice(e[0],e[1]+1);return t.jsx($w,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(Ow,{children:[t.jsx(Dw,{children:o}),t.jsx(Aw,{})]},o))})},Dc=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=cc({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var u;return Ac((u=i==null?void 0:i[0])==null?void 0:u.startTime,o,n)}});return t.jsxs($1,{className:"calendar-wrapper",ref:d,children:[t.jsx(Iw,{interval:e,scale:n}),t.jsx(Cw,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},Rw=p.div`
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
`,Lw=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=te();return o?t.jsxs(Rw,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},zw=p.div`
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
`,Mw=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Fw=p(oe)`
    margin-bottom: 20px;
`,Bw=({image:e,list:i,text:n})=>{const{isMobile:s}=Ai();return t.jsxs(zw,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Fw,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(Mw,{children:i==null?void 0:i.map(o=>l.createElement(Lw,{...o,key:o.title}))})]})},Hw=p.div`
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
`,Uw=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,Ww=()=>t.jsx(Uw,{children:t.jsx(Dc,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Xn["16:10 - 17:40"],icon:Zi("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Xn["17:50 - 19:20"],icon:Zi("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),Nc=()=>{const[e,i]=l.useState(0),{close:n}=te(),s=[t.jsx(Bw,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(Ww,{})}},"schedule")];return t.jsxs(Hw,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(or,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>ut(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>ut(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},Vw=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return _i(i.startTime)+i.duration<Zn(new Date)}},Gw=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=Cs.useSchedule(),o=$c(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=Vw(e==null?void 0:e.today),c=cc({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,m;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(x=>$s(x,!0)||dc(e.today,x,!0)))??0)}}),d=()=>U.evokePopUpMessage({message:n??"",type:"failure",time:ls.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},jo=p(cn)`
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
`,si=()=>t.jsxs(A,{d:"column",gap:"8px",children:[t.jsx(J,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),qw=()=>{const{allRoutes:e}=He.useMenu(),{data:{user:i}}=be.useUser(),{hasNoSchedule:n,loading:s}=Gw(),o=Gt();if(!e||!i||s)return t.jsxs(jo,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(si,{}),t.jsx(si,{}),t.jsx(si,{}),t.jsx(si,{}),t.jsx(si,{})]});const a=(i==null?void 0:i.user_status)==="stud"?dS:n?uS:pS;return t.jsx(jo,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(oc,{...e[r],isCurrent:c},r)})})},Yw=(e,i,n)=>({isOpen:i,message:e,position:n}),ko={hints:[]},Jw=()=>G(Kw),Ic=k(),Rc=k(),Lc=k(),Kw=K(ko).on(Ic,(e,{message:i,position:n})=>({hints:[...e.hints,Yw(i,e.hints.length===0,n)]})).on(Rc,e=>({hints:e.hints.splice(1,e.hints.length)})).on(Lc,()=>({...ko})),Xw={useHint:Jw},Qw={evoke:Ic,close:Rc,clearStore:Lc},Zw=p.div`
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
`,ej=()=>{const{hints:e}=Xw.useHint(),i=e[0];return i?t.jsx(Zw,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(Q,{type:"hint",title:i.message,onClose:()=>Qw.close(),width:"100%",icon:null})}):null},tj=p.div`
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
`,ij=50;function wE({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=ij}){const{data:{user:u}}=be.useUser();let h="";const f=l.useCallback(g=>{const m=g.currentTarget.clientHeight,x=g.currentTarget.scrollHeight,y=g.currentTarget.scrollTop;x-d<y+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(fe,{text:"Нет результатов",children:c}):t.jsxs(tj,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var y,b;const x=r?h!==((y=g.fio)==null?void 0:y.charAt(0)):!1;return x&&(h=((b=g.fio)==null?void 0:b.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[x&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(W,{size:4,align:"left",children:h}),t.jsx(xe,{})]}),i(g,(u==null?void 0:u.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(Qe,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const nj=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=be.useUser();return te(),t.jsxs(Pe,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(oe,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(Ps,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function sj(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const jE=p.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>sj(e)};
        opacity: 1;
    }
`,kE=p.div`
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
`,zc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>we(a.title).includes(we(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),oj=()=>{const e=C?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Zc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:vd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:ed,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:td,title:"Справка-вызов"},{link:hd,title:"Заявление на пересдачу для получения диплома с отличием"},{link:yd,title:"Запрос на изменение персональных данных"},{link:ud,title:"Запрос на восстановление магнитного пропуска"},{link:Jc,title:"Уточнение паспортных данных"},{link:_d,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:wd,title:"Предоставление каникул в связи с окончанием университета"},{link:jd,title:"Предоставление академического отпуска"},{link:kd,title:"Выход из академического отпуска"},{link:Sd,title:"Отчисление по инициативе обучающегося"},{link:Td,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:id,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:nd,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:sd,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:ad,title:"Предоставление права проживания льготной категории граждан"},{link:od,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:rd,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:cd,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:dd,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:ld,title:"Расторжение договора найма"},{link:pd,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:ha,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:xd,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:md,title:"Заявка на материальную помощь"},{link:Qc,title:"Оформить социальную стипендию"},{link:bd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:C,links:[{link:gd,title:"Отправить документы воинского учета"},{link:fd,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:C,links:[{link:es,title:"Оформить дополнительное соглашение к договору об обучении"},{link:es,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Zu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Kc,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:C,links:[{link:Xc,title:"Трудоустройство студентов"}]}]},aj=e=>[{title:"Цифровые сервисы",links:[{link:tl,title:"Справка с места работы"},{link:il,title:"Справка с места работы для предоставления в визовый центр"},{link:sl,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Телефонный справочник",links:[...cj(e),{link:al,title:"Запрос на изменение внутреннего телефона"},{link:rl,title:"Запрос на изменение корпоративной электронной почты"}]},...rj()],rj=()=>[{title:"Цифровые сервисы (в разработке)",disabled:C,links:[{link:nl,title:"Справка о стаже работы"},{link:ll,title:"Копия трудовой книжки"},{link:cl,title:"Копии документов из личного дела"},{link:dl,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:C,title:"Общее",links:[{link:Vr,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:C,links:[{link:Gr,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",links:[{link:Jr,title:"Получение нового компьютерного оборудования"},{link:Kr,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Xr,title:"Обслуживание принтеров, МФУ"},{link:Qr,title:"Вопрос по СЭД Directum и 1С"},{link:Zr,title:"Вопрос по Личному кабинету"},{link:el,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:C,links:[{link:gl,title:"Справка по форме 2-НДФЛ"},{link:fl,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:pl,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:xl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:C,links:[{link:bl,title:"Предоставление права проживания в жилом помещении"},{link:yl,title:"Временное размещение гостей в студгородке"},{link:vl,title:"Проход гостей на территорию студенческого городка"},{link:_l,title:"Переселение"},{link:wl,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:C,links:[{link:jl,title:"Выдача пропуска (повторная)"},{link:kl,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:C,links:[{link:Sl,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:C,links:[{link:Yr,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:C,links:[{link:hl,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:C,links:[{link:Tl,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:El,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:C,links:[{link:ul,title:"Произвольный запрос"},{link:ha,title:"Вступить в Профсоюз",isExternalLink:!0}]}],lj=()=>[{title:"",links:[{link:ml,title:"Заявление на трудоустройство по совместительству"},{link:Wn,title:"Заявление на увольнение"},{link:qn,title:"Заявление о привлечении к работе в выходной день"},{link:Vn,title:"Заявление о предоставлении отпуска"},{link:Gn,title:"Заявление о переносе отпуска"},{link:Yn,title:"Заявление о диспансеризации"},{link:Vi,title:"Заявление на перевод"}]}],cj=e=>e.head_div&&e.head_div.length>0?[{link:ol,title:"Внесение изменений данных подразделения в телефонном справочнике"}]:[],dj=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),pj=p.div`
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
`,SE=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=te(),{data:{user:s}}=be.useUser(),o=e&&s?aj(s):oj(),[a,r]=l.useState(""),[c,d]=l.useState(o);return t.jsxs(pj,{children:[t.jsx(nr,{whereToSearch:o,searchEngine:zc,setResult:d,placeholder:"Поиск заявок",setExternalValue:r}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(c??o).map(u=>{if(!u.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:u.title}),t.jsx("div",{className:"links",children:u.links.map((h,f)=>{if(!(h.disabled||!dj(i,h.exceptionalFormEducationList)))return h.isExternalLink?t.jsx("a",{href:h.link,target:h.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:h.title},h.link+f):t.jsx(Z,{to:h.link,onClick:n,children:h.title},h.link+f)})})]},u.title)}),!(c!=null&&c.length)&&!!a.length&&t.jsx(fe,{text:`По запросу ${a} ничего не найдено`})]})})]})},uj=p.div`
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
`,hj=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,TE=({})=>{const{data:{listApplication:e},error:i}=me.useApplications(),{close:n}=te(),s=lj(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(We,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Xt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Je,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(uj,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(nr,{whereToSearch:s,searchEngine:zc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(hj,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(fe,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},gj=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),So={isOpen:!1,pages:[],currentPage:0},fj=()=>G(xj),Mc=k(),Fc=k(),Bc=k(),Hc=k(),xj=K(So).on(Mc,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(Fc,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(Bc,(e,{value:i})=>({...e,currentPage:i})).on(Hc,()=>({...So})),Os={useStory:fj},vt={open:Mc,close:Fc,clearStore:Hc,changeCurrentPage:Bc};p(Ze)`
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
`;const mj=p.div`
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
`,As=mj,bj=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,u]=l.useState(r===void 0),[h,f]=l.useState(!a),[g,m]=l.useState(!1),x=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!!j.find(S=>!S.value&&S.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(S=>!S.value&&S.required))&&!n.find(j=>!!j.find(S=>{var D;return S.value.id==="not-chosen"&&!!((D=S.items)!=null&&D.length)}))?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var S;return j.value===null&&!!((S=j.items)!=null&&S.length)})?(s(j=>(j.confirmed=!0,{...j})),u(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},y=()=>{s(j=>{const S=j.default[0].map(D=>({fieldName:D.fieldName??"",title:D.title,value:D.type==="select"&&(D!=null&&D.items)?null:"",type:D.type,items:D.items,width:D.width,required:D.required}));return{...j,data:[...j.data,S]}})},b=j=>{s(S=>{const D=S.data.filter((L,I)=>j!==I);return{...S,data:D}})},E=j=>{s(S=>(S.documents&&(S.documents.files=[...j]),{...S}))},N=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{f(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:f,setIncluded:m,setChangeInputArea:u,handleRemove:b,handleAddNew:y,handleLoadFiles:E,handleConfirm:x,handleCheckbox:N}},yj=p.div`
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
`,vj=p.div``,_j=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(vj,{children:[t.jsx(W,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(ix,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),wj=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(W,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Pe,{children:[!a&&t.jsx(Be,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Be,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),jj=p.div`
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
`,kj=({title:e,value:i,visible:n})=>n?t.jsxs(jj,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Sj=p.div`
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
`,Tj=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(Sj,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(Iu,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(ra,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,Ej=p.div`
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
`,Pj=({title:e,visible:i})=>i?t.jsx(Ej,{children:t.jsx("span",{className:"title",children:e})}):null,Cj=p.div`
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
`,$j=p.ul`
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
`,Oj=p.li`
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
`,Aj=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,m]=l.useState([]),[x,y]=l.useState(!0);return l.useEffect(()=>{if(e){const b=f.filter(E=>E.toLowerCase().includes(e.toLowerCase()));m(b)}else m([])},[e,f]),t.jsxs(Cj,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(W,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:b=>{i(b.target.value),y(!0)},placeholder:c}),g.length>0&&t.jsx($j,{width:"100%",isOpen:x,className:x?"open":"close",itemsAmount:g.length,title:s,children:g.map((b,E)=>t.jsx(Oj,{isSelected:!1,onClick:()=>{i(b),m([]),y(!1)},children:b},E))})]})]})},Dj=p.div`
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
`,Nj=({title:e,visible:i})=>i?t.jsx(Dj,{children:t.jsx("span",{className:"title",children:e})}):null,To=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:f,setData:g,mask:m,editable:x,placeholder:y,autocomplete:b,isSpecificRadio:E,specialType:N,specialFieldsNameConfig:j,minValueInput:S,maxValueInput:D,minValueLength:L,maxValueLength:I,diff:ne,visible:H=!0,onChange:q,onKeyPress:ce,onBlur:Ce,onKeyDown:Se,onKeyUp:Ge,onFocus:Te}=e,ge=x??(f&&!h),[It,ti]=l.useState(!0),ze=(V,pe,Rt)=>{q==null||q(V),g(je=>(Array.isArray(je.data[0])?je.data[pe][Rt??0].value=V:je.data[pe].type==="checkbox-docs"?je.data[pe].items[Rt??0].value=!!V:je.data[pe].value=V,{...je}))},Is=(V,pe,Rt)=>{q==null||q(V),g(je=>(Array.isArray(je.data[0])?je.data[pe][Rt??0].value=V:je.data[pe].value=V,{...je}))},Ri=(V,pe,Rt)=>{g(je=>(je.data[pe].items[Rt??0].files=V,{...je}))},Li=V=>{q==null||q(V),g(pe=>(pe.data[o].value=V,{...pe}))},dp=V=>{q==null||q(V),ce==null||ce(V),Ce==null||Ce(V),Se==null||Se(V),Ge==null||Ge(V),Te==null||Te(V),g(pe=>(pe.data[o].value=V,{...pe}))};return j&&N&&!Object.values(j).includes(N)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Be,{text:u,isActive:ge,checked:i,setChecked:V=>ze(V,o,a)}):r==="hr-checkbox"?t.jsx(Tj,{text:u,isActive:ge,checked:i,setChecked:V=>ze(V,o,a)}):r==="auto-complete-input"?t.jsx(Aj,{title:u,suggestions:c??[],required:n,value:i,placeholder:y??u,setValue:V=>ze(V,o,a)}):r==="textarea"?t.jsx(nf,{value:i,title:u,setValue:V=>ze(V,o,a),isActive:ge,textAreaAppearance:ge,placeholder:y??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(_j,{title:u,items:d,setChecked:(V,pe)=>ze(!V,o,pe),setFiles:(V,pe)=>Ri(V,o,pe)}):r==="date-interval"?H?t.jsx(lr,{title:u,required:n,dates:i,setDates:V=>dp(V),valid:It,setValid:ti,minValue:S,diff:ne}):null:r==="simple-text"?t.jsx(kj,{title:u,value:i,visible:H}):r==="text-warning"?t.jsx(Nj,{title:u,visible:H}):r==="text-header"?t.jsx(Pj,{title:u,visible:H}):r==="radio"?t.jsx(wj,{buttons:d,title:u,required:n,current:i,setCurrent:Li,isSpecificRadio:E}):H?t.jsx(pt,{value:i,title:u,minValue:S,maxValue:D,minLength:L,maxLength:I,setValue:V=>ze(V,o,a),type:r,isActive:ge,inputAppearance:ge,placeholder:y??u,required:n,mask:m,width:s,autocomplete:b}):null:H?t.jsx(gr,{items:d,setSelected:V=>Is(V,o,a),selected:i,isActive:ge,title:u,width:s,multiple:r==="multiselect",required:n}):null},Ij=p.div`
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
`,Rj=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(Ij,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(W,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Go,{}):t.jsx(qo,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Be,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(Ue,{}),onClick:()=>null,background:"transparent",flipped:c})]}),Lj=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Ls,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(Ru,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(kt,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(Lu,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Ls,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),zj=e=>e.confirmed===void 0?null:t.jsx(Pe,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(Lj,{...e,confirmed:e.confirmed})}),_t=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:m,defaultOpenArea:x=!0})=>{const{openArea:y,changeInputArea:b,included:E,setOpenArea:N,setIncluded:j,setChangeInputArea:S,handleRemove:D,handleAddNew:L,handleLoadFiles:I,handleConfirm:ne,handleCheckbox:H}=bj({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c,defaultOpenArea:x});return t.jsxs(t.Fragment,{children:[t.jsxs(yj,{openArea:y,children:[t.jsx(Rj,{title:e,included:E,optional:d,confirmed:c,setOpenArea:N,setIncluded:j,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(Q,{type:"alert",visible:!!n,icon:t.jsx(mi,{}),children:n}),t.jsx(Q,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Je,{}),children:i}),Array.isArray(s[0])?s.map((q,ce)=>t.jsxs("div",{className:"data-line",children:[q.map((Ce,Se)=>t.jsx(To,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:Se,specialFieldsNameConfig:m,...Ce},Se)),b&&u&&t.jsx(_,{icon:t.jsx(zu,{}),textColor:w.red.main,onClick:()=>D(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((q,ce)=>t.jsx(To,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:m,...q},ce)),u&&b&&t.jsx(_,{icon:t.jsx(Mu,{}),text:"Добавить",onClick:L,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(rr,{files:a.files,setFiles:q=>I(q),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(q=>l.createElement(bf,{...q,key:q.title})),t.jsx(Be,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:H}),t.jsx(zj,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:S,handleConfirm:ne})]})]}),h&&t.jsx(xe,{})]})},Mj=p.div`
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
`,Fj=p.div`
    display: flex;
    margin-bottom: -20px;
`,Bj=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Uc=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:ue(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Fj,{children:e.map((r,c)=>t.jsxs(Bj,{lastElement:c===e.length-1,children:[t.jsx(Mj,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(Vg,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(_t,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Hj=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Uj=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Wj=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),_n=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return gj(u);if(Array.isArray(u.data[0])){const h=u.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>Eo(m)))),f={};return f[e]=JSON.stringify(h),f}else return u.data.map(h=>Eo(h))}).flat(),r=i.map(u=>{var f,g;const h={};if((f=u.documents)!=null&&f.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((g=u.documents)==null?void 0:g.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var f,g;const h={};return(f=u.optionalCheckbox)!=null&&f.fieldName&&(h[(g=u.optionalCheckbox)==null?void 0:g.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Re.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},Eo=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Vj(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Vj=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,wn=p.div`
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
`;var Ii=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Ii||{}),Gj=(e=>(e.EDIT_PHONEBOOK_SUBDIVISION="edit-phonebook-subdivision",e.EDIT_PHONEBOOK_INNER_PHONE="edit-phonebook-inner-phone",e.EDIT_PHONEBOOK_EMAIL="edit-phonebook-email",e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(Gj||{});const qj=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Yj=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Jj=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Yj},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:qj}]}},Kj=()=>{var H;const[e,i]=l.useState(null),[n,s]=l.useState(zi.kvdCert),[o,a]=l.useState(zi.fluorographyCert),[r,c]=l.useState(zi.vichRwCert),[d,u]=l.useState(zi.graftCert),{data:{dataUserApplication:h}}=me.useApplications(),{data:{user:f}}=be.useUser(),[g,m]=l.useState(!1),[x,y]=l.useState(!1),[b,E]=l.useState(null),[N,j]=l.useState(null),[S,D]=l.useState(null),L=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(fe,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const I=!!e&&!!N&&!!b&&!!S;if(l.useEffect(()=>{h&&(i(Jj(h)),E(Uj()),j(Wj()),D(Hj()))},[h]),!I)return null;const ne=[[{dataForm:e,setDataForm:i}],[{dataForm:N,setDataForm:j}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx(wn,{isDone:L,children:t.jsxs(pn,{children:[t.jsx(W,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Uc,{stagesConfig:ne}),t.jsx(dt,{text:"Отправить",action:()=>_n(Ii.USG_GETHOSTEL_OOZ,[e,N,b,S,n,o,r,d],y,m),isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:L,isActive:(((H=e.optionalCheckbox)==null?void 0:H.value)??!0)&&ue(e)&&ue(o)&&ue(r)&&ue(d)&&ue(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Xj=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],Qj=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],Zj=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],ek=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],tk=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],ik=[{id:0,title:"1"},{id:1,title:"2"}],nk=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],sk=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],ok=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],ak=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),rk=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Xj,width:"100%",editable:!0,required:!0}]}),lk=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Qj,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),ck=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:Zj,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:ek,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:tk,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:ik,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:nk,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),dk=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:sk,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Po=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:ok,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},Wc=()=>{var D;const[e,i]=l.useState(null),[n,s]=l.useState(rk()),[o,a]=l.useState(lk()),[r,c]=l.useState(ck()),[d,u]=l.useState(dk()),[h,f]=l.useState(Po(null)),[g,m]=l.useState(!1),[x,y]=l.useState(!1),[b,E]=l.useState(!1),{data:{dataUserApplication:N}}=me.useApplications();l.useEffect(()=>{N&&i(ak(N))},[N]);const j=l.useMemo(()=>{var L,I;return((I=(L=h==null?void 0:h.data[0])==null?void 0:L.value)==null?void 0:I.id)!==0},[(D=h==null?void 0:h.data[0])==null?void 0:D.value]);if(l.useEffect(()=>{h&&f(Po(h.data))},[j]),!e)return null;const S=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:f}]];return t.jsx(wn,{isDone:!1,children:t.jsxs(pn,{children:[t.jsx(W,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Uc,{stagesConfig:S}),t.jsx(Be,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(dt,{text:x?"Отправлено":"Отправить",action:()=>_n(Ii.MIL_REG,[e,n,o,r,d,h],E,y),isLoading:b,completed:x,setCompleted:y,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&ue(e)&&ue(n)&&ue(r)&&ue(d)&&ue(h)&&ue(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},pk=Object.freeze(Object.defineProperty({__proto__:null,default:Wc},Symbol.toStringTag,{value:"Module"})),uk=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],hk=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:uk},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),gk=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Vc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:u}}=me.useApplications();return l.useEffect(()=>{u&&i(hk(u))},[u]),l.useEffect(()=>{e&&u&&c(gk(e.data))},[e]),t.jsx(wn,{isDone:d,children:!!e&&!!i&&t.jsxs(pn,{children:[t.jsx(_t,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(dt,{text:d?"Отправлено":"Отправить",action:()=>_n(Ii.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:ue(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},fk=Object.freeze(Object.defineProperty({__proto__:null,default:Vc},Symbol.toStringTag,{value:"Module"})),xk=l.lazy(()=>v(()=>import("./index-69fb9a38.js"),["assets/index-69fb9a38.js","assets/vendor-35c3991b.js"])),mk=l.lazy(()=>v(()=>import("./index-2bacff24.js"),["assets/index-2bacff24.js","assets/vendor-35c3991b.js"])),bk=l.lazy(()=>v(()=>import("./index-4f975d67.js"),["assets/index-4f975d67.js","assets/vendor-35c3991b.js"])),yk=l.lazy(()=>v(()=>import("./index-9f80f312.js"),["assets/index-9f80f312.js","assets/vendor-35c3991b.js"])),vk=l.lazy(()=>v(()=>import("./index-05ba2bf9.js"),["assets/index-05ba2bf9.js","assets/vendor-35c3991b.js"])),_k=l.lazy(()=>v(()=>import("./index-0766002a.js"),["assets/index-0766002a.js","assets/vendor-35c3991b.js","assets/ui-0db464c6.js","assets/styled-eb00b56a.js"])),wk=l.lazy(()=>v(()=>import("./index-b9171abb.js"),["assets/index-b9171abb.js","assets/vendor-35c3991b.js","assets/get-method-obtaining-fields-513337ca.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),jk=l.lazy(()=>v(()=>import("./index-b0749fac.js"),["assets/index-b0749fac.js","assets/vendor-35c3991b.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),kk=l.lazy(()=>v(()=>import("./index-8ac0fa72.js"),["assets/index-8ac0fa72.js","assets/vendor-35c3991b.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Sk=l.lazy(()=>v(()=>import("./index-5b3a5d0c.js"),["assets/index-5b3a5d0c.js","assets/vendor-35c3991b.js"])),Tk=l.lazy(()=>v(()=>import("./index-5fdf393f.js"),["assets/index-5fdf393f.js","assets/vendor-35c3991b.js","assets/index-cd03f08f.js"])),Ek=l.lazy(()=>v(()=>import("./index-7f8b266a.js"),["assets/index-7f8b266a.js","assets/vendor-35c3991b.js","assets/is-valid-url-08a91344.js"])),Pk=l.lazy(()=>v(()=>import("./index-a0b91ed4.js"),["assets/index-a0b91ed4.js","assets/vendor-35c3991b.js"])),Ck=l.lazy(()=>v(()=>import("./index-11a25fef.js"),["assets/index-11a25fef.js","assets/vendor-35c3991b.js"])),$k=l.lazy(()=>v(()=>import("./index-9991f268.js"),["assets/index-9991f268.js","assets/vendor-35c3991b.js"])),Ok=l.lazy(()=>v(()=>import("./index-17c7d993.js"),["assets/index-17c7d993.js","assets/vendor-35c3991b.js"])),Ak=l.lazy(()=>v(()=>import("./index-e4d3d813.js"),["assets/index-e4d3d813.js","assets/vendor-35c3991b.js"])),Dk=l.lazy(()=>v(()=>import("./index-172ae22f.js"),["assets/index-172ae22f.js","assets/vendor-35c3991b.js"])),Nk=l.lazy(()=>v(()=>import("./index-e7aefeb5.js"),["assets/index-e7aefeb5.js","assets/vendor-35c3991b.js"])),Ik=l.lazy(()=>v(()=>import("./index-1545d975.js"),["assets/index-1545d975.js","assets/vendor-35c3991b.js"])),Rk=l.lazy(()=>v(()=>import("./index-496edff3.js"),["assets/index-496edff3.js","assets/vendor-35c3991b.js"])),Lk=l.lazy(()=>v(()=>import("./index-08279ac0.js"),["assets/index-08279ac0.js","assets/vendor-35c3991b.js","assets/BoldText-86f64fef.js"])),zk=l.lazy(()=>v(()=>import("./index-e532e046.js"),["assets/index-e532e046.js","assets/vendor-35c3991b.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>pk),void 0));const Mk=l.lazy(()=>v(()=>import("./index-0e468f45.js"),["assets/index-0e468f45.js","assets/vendor-35c3991b.js"])),Fk=l.lazy(()=>v(()=>import("./index-86fb2e43.js"),["assets/index-86fb2e43.js","assets/vendor-35c3991b.js"])),Bk=l.lazy(()=>v(()=>import("./index-e78e0805.js"),["assets/index-e78e0805.js","assets/vendor-35c3991b.js"])),Hk=l.lazy(()=>v(()=>import("./index-c7df4f93.js"),["assets/index-c7df4f93.js","assets/vendor-35c3991b.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Uk=l.lazy(()=>v(()=>import("./index-475ca9be.js"),["assets/index-475ca9be.js","assets/vendor-35c3991b.js","assets/get-method-obtaining-fields-513337ca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Wk=l.lazy(()=>v(()=>import("./index-0defc1bf.js"),["assets/index-0defc1bf.js","assets/vendor-35c3991b.js"])),Vk=l.lazy(()=>v(()=>import("./index-4c5920fe.js"),["assets/index-4c5920fe.js","assets/vendor-35c3991b.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>fk),void 0));const Gk=l.lazy(()=>v(()=>import("./index-c9b62c98.js"),["assets/index-c9b62c98.js","assets/vendor-35c3991b.js"])),qk=l.lazy(()=>v(()=>import("./index-08e80642.js"),["assets/index-08e80642.js","assets/vendor-35c3991b.js"])),Yk=l.lazy(()=>v(()=>import("./index-958975fd.js"),["assets/index-958975fd.js","assets/vendor-35c3991b.js"])),Jk=l.lazy(()=>v(()=>import("./index-740b6512.js"),["assets/index-740b6512.js","assets/vendor-35c3991b.js"])),Kk=l.lazy(()=>v(()=>import("./index-3f79f1a0.js"),["assets/index-3f79f1a0.js","assets/vendor-35c3991b.js"])),Xk=l.lazy(()=>v(()=>import("./index-568d2969.js"),["assets/index-568d2969.js","assets/vendor-35c3991b.js","assets/get-divisions-96cfa1b1.js"])),Qk=l.lazy(()=>v(()=>import("./index-710fcde5.js"),["assets/index-710fcde5.js","assets/vendor-35c3991b.js"])),Zk=()=>F.get(`?getRequestMedicalCertificate&token=${B()}`),Gc=k(),qc=z(async()=>(await Zk()).data);$({clock:Gc,target:qc});ca(qc,null);const eS={load:Gc},tS=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],iS=e=>{const{phone:i,email:n}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:n,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:tS,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},Yc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(null),[o,a]=l.useState(null),[r,c]=l.useState(null),[d,u]=l.useState(!1),[h,f]=l.useState(null),[g,m]=l.useState(!1),[x,y]=l.useState(!1),b=g??!1,{data:{dataUserApplication:E}}=me.useApplications();return l.useEffect(()=>{E&&i(iS(E))},[E]),l.useEffect(()=>{eS.load(),s(st({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),a(st({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),c(st({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),f(st({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),t.jsx(wn,{isDone:!1,children:t.jsxs(pn,{children:[e&&i&&t.jsx(_t,{...e,setData:i}),n&&s&&t.jsx(_t,{...n,setData:s}),o&&a&&t.jsx(_t,{...o,setData:a}),r&&c&&t.jsx(_t,{...r,setData:c}),h&&f&&t.jsx(_t,{...h,setData:f}),t.jsx(Be,{checked:d,setChecked:u,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(dt,{text:b?"Отправлено":"Отправить",action:()=>{_n(Ii.MEDICAL_CERT,[e,n,o,r,h],y,m)},isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:!!d&&!!e&&!!o&&!!r&&!!h&&!!n&&ue(e)&&ue(o)&&ue(r)&&ue(h)&&ue(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},nS=Object.freeze(Object.defineProperty({__proto__:null,default:Yc},Symbol.toStringTag,{value:"Module"})),P="/applications",sS="/application-for-superior-room",oS="/acad-performance",aS="/dormitory",Jc=P+"/clarification-of-passport-data",Kc=P+"/arbitrary-request",Xc=P+"/student-employment",Qc=P+"/social-scollarship",Zc=P+"/certificate-of-attendance",ed=P+"/social-agencies",td=P+"/paper-call",id=P+"/regular-accommodation",nd=P+"/full-time-part-time-form",sd=P+"/accommodation-correspondence-form",od=P+"/academic-leave-accommodation",ad=P+"/preferential-accommodation",rd=P+"/family-room",ld=P+"/termination-of-employment-contract",cd=P+"/relocation-inside-hostel",dd=P+"/relocation-to-another-hostel",pd=P+"/accommodation-for-graduates",es=P+"/payment-recipient",ud=P+"/restoring-the-magnetic-pass",hd=P+"/retake-for-diploma",gd=P+"/military-registration-documents",fd=P+"/military-registration",xd=P+"/financial-support",md=P+"/financial-assistance",bd=P+"/increased-state-academic-scholarship",yd=P+"/changing-personal-data",vd=P+"/student-status",_d=P+"/state-accreditation",rS=P+"/military-registration-card",wd=P+"/holidays-after-training",jd=P+"/provision-academic-leave",kd=P+"/exit-academic-leave",Sd=P+"/independently-deducted",Td=P+"/extension-attestation",lS="/physical-education/student",nt=()=>ve({oldVersionUrl:"/sprav"}),oi=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(O,{}),path:P,Component:Tk,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...Bl,"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(ia,{}),path:av,Component:Yc,color:"blue",isTemplate:!1,group:"GENERAL"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(ct,{}),path:Xi,Component:vs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(zs,{}),path:aS,Component:bk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},softskills:{id:"softskills",title:"Паспорт компетенций",icon:t.jsx(Fu,{}),path:yv,Component:()=>(le.useEffect(()=>{window.location.replace("https://softskills.rsv.ru/")},[]),null),color:"orange",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",isExternalPage:!0,keywords:["рсв","россия страна возможностей","софтскиллс","навыки"],isNew:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Bu,{}),path:oS,Component:mk,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(O,{}),color:"lightGreen",path:lS,pageSize:"big",Component:_k,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Yo,{}),path:Rl,Component:Ek,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Hu,{}),path:Ml,Component:hs,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(zs,{}),path:sS,Component:xk,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(Fa))}}),Co=e=>{var i,n,s;return{...Hl,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(li,{}),path:Jc,Component:yk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(li,{}),path:Kc,Component:Xk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(li,{}),path:Xc,Component:C?nt:Qk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(X,{}),path:Qc,Component:C?nt:vk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(X,{}),path:Zc,Component:wk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(X,{}),path:ed,Component:jk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(X,{}),path:td,Component:kk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(X,{}),path:id,Component:Sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(X,{}),path:nd,Component:Kj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(X,{}),path:sd,Component:Jk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(X,{}),path:od,Component:Pk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(X,{}),path:ad,Component:Ck,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(X,{}),path:rd,Component:Kk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(X,{}),path:ld,Component:$k,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(X,{}),path:cd,Component:Ok,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(X,{}),path:dd,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(ve,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):Dk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:X,path:pd,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?Ak:()=>t.jsx(ve,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(X,{}),path:es,Component:Nk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(X,{}),path:ud,Component:Ik,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(X,{}),path:gd,Component:C?nt:zk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(Uu,{}),path:fd,Component:C?nt:Wc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:P},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(X,{}),path:hd,Component:Lk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(X,{}),path:bd,Component:C?nt:Rk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(X,{}),path:xd,Component:C?nt:Mk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(X,{}),path:md,Component:C?nt:Fk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(X,{}),path:yd,Component:Bk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(X,{}),path:vd,Component:Hk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(X,{}),path:_d,Component:Uk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(X,{}),path:wd,Component:Wk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(X,{}),path:jd,Component:Vk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(X,{}),path:kd,Component:Vc,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(X,{}),path:Sd,Component:Gk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(X,{}),path:Td,Component:qk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:P},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(X,{}),path:rS,Component:C?nt:Yk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:P}}},$o=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),cS=["settings","profile","chat","schedule","payments","project-activity","all-students"],dS=["home","schedule","acad-performance","all","profile"],pS=["home","schedule","alerts","all","profile"],uS=["home","doclist","alerts","all","profile"],hS=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(M.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??an,s=ua.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},Oo={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},gS=()=>G(xS),Ed=k(),Pd=k(),Cd=k(),$d=k(),fS=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},ai=e=>{if(!e)return ro();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(ro()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},xS=K(Oo).on(Ed,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(Pd,()=>({...Oo})).on(Cd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?ai(n)[window.location.hash.slice(2,window.location.hash.length)]:oi()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...ai(n),...lo()}:{...oi(),...Co(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?ai(n):oi(),leftsideBarRoutes:$o(hS(i),(i==null?void 0:i.user_status)==="staff"?ai(n):oi()),homeRoutes:$o(s??JSON.parse(localStorage.getItem(M.HomeRoutes)??JSON.stringify(cS)),(i==null?void 0:i.user_status)==="staff"?{...ai(n),...lo()}:{...oi(),...Co(i)})})).on($d,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:fS(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),He={useMenu:gS},tt={changeOpen:Ed,clearStore:Pd,defineMenu:Cd,changeNotifications:$d},Od=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:Ll,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Nt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Xi,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Xi,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:ks,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Wr,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:_s,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:P,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:Cl,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},mS={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},Ad=(e,i)=>i.filter(({type:n})=>e[mS[n]]),bS={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},jn=z(async({settings:e})=>{try{const{data:i}=await qh();return Ad(e,i).map(({id:n,type:s,title:o,text:a})=>Od(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),yS=z(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&tt.changeNotifications({page:i,notifications:1})})}),vS=z(({notifications:e})=>{const{pageId:i}=e[0];i&&tt.changeNotifications({page:i,notifications:1})}),kn=z(async({id:e,pageId:i})=>{try{return await Yh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Sn=z(async()=>{try{await Jh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),_S=e=>{e&&tt.changeNotifications({page:e,notifications:0})},Dd=k(),Nd=k(),Id=k(),Rd=k(),Ld=k(),zd=k(),Md=k(),ae=K(bS).reset(Md);Le({from:Nd,to:jn});$({clock:jn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});$({clock:jn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});$({clock:jn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,yS]});$({clock:Dd,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,vS]});Le({from:Rd,to:kn});$({clock:kn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(_S(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});$({clock:kn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});$({clock:kn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});Le({from:Ld,to:Sn});$({clock:Sn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});$({clock:Sn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});$({clock:Sn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});$({clock:Id,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});$({clock:zd,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const wS=()=>ke(ae),Ct={initialize:Nd,add:Dd,clearById:Rd,clearVisibleById:Id,clearAll:Ld,clearAllVisible:zd,clearStore:Md},it={useLkNotifications:wS},jS=Object.freeze(Object.defineProperty({__proto__:null,events:Ct,selectors:it},Symbol.toStringTag,{value:"Module"})),Ao={messages:null,error:null},kS=()=>({data:G(Do).messages,loading:G(hi.pending),error:G(Do).error}),hi=z(async()=>{try{return(await _h("1")).data}catch(e){throw new Error(e)}}),Fd=k(),Do=K(Ao).on(hi,e=>({...e,error:null})).on(hi.doneData,(e,i)=>({...e,messages:i})).on(hi.failData,(e,i)=>({...e,error:i.message})).on(Fd,()=>({...Ao})),SS={useMessages:kS},TS={getMessagesFx:hi},ES={clearStore:Fd},PS=Object.freeze(Object.defineProperty({__proto__:null,effects:TS,events:ES,selectors:SS},Symbol.toStringTag,{value:"Module"})),No={type:null,personalNotifications:null,error:null,completed:!1},CS=()=>({data:G(Bt).personalNotifications,loading:G(Ft.pending),error:G(Bt).error,completed:G(Bt).completed}),$S=()=>G(Bt).type,Bd=k(),Hd=z(e=>e),Ft=z(async()=>{const{type:e}=Bt.getState();if(e==="notifications")try{return(await va()).data}catch(i){throw new Error(i)}try{return{docs:(await _a()).data}}catch(i){throw new Error(i)}}),tn=z(async e=>{const{type:i}=Bt.getState(),n=i==="notifications"?Lh:Mh;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),Ud=k(),Bt=K(No).on(Hd,(e,i)=>({...e,type:i})).on(Ft,e=>({...e,error:null})).on(Ft.doneData,(e,i)=>({...e,personalNotifications:i})).on(Ft.failData,(e,i)=>({...e,error:i.message})).on(tn.doneData,e=>({...e})).on(tn.failData,(e,i)=>({...e,error:i.message})).on(Bd,(e,i)=>({...e,completed:i.completed})).on(Ud,()=>({...No}));tn.doneData.watch(()=>Ft());const OS={usePersonalNotifications:CS,useType:$S},AS={setNotificationsType:Hd,getPersonalNotificationsFx:Ft,viewPersonalNotificationsFx:tn},DS={changeCompleted:Bd,clearStore:Ud},NS=Object.freeze(Object.defineProperty({__proto__:null,effects:AS,events:DS,selectors:OS},Symbol.toStringTag,{value:"Module"})),IS=rn({api:{get:Ih}}),Io={superiorRoom:null,error:null},RS=()=>({data:G(Ro).superiorRoom,loading:G(gi.pending),error:G(Ro).error}),Wd=k(),LS=z(async e=>{});Le({from:Wd,to:LS});const gi=z(async()=>{try{return(await Th()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Vd=k(),Ro=K(Io).on(gi,e=>({...e,error:null})).on(gi.doneData,(e,i)=>({...e,superiorRoom:i})).on(gi.failData,(e,i)=>({...e,error:i.message})).on(Vd,()=>({...Io})),zS={useSuperiorRoom:RS},MS={getSuperiorRoomFx:gi},FS={postSuperiorRoom:Wd,clearStore:Vd},BS=Object.freeze(Object.defineProperty({__proto__:null,effects:MS,events:FS,selectors:zS},Symbol.toStringTag,{value:"Module"})),Lo={teacherDataVerification:null,error:null,completed:!1},HS=()=>({data:G(Nn).teacherDataVerification,loading:G(fi.pending),error:G(Nn).error,completed:G(Nn).completed}),Gd=k(),qd=k(),US=z(async e=>{try{return(await Uh(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Le({from:Gd,to:US});const fi=z(async()=>{try{return(await Hh()).data}catch{throw new Error("Не удалось войти")}}),Yd=k(),Nn=K(Lo).on(fi,e=>({...e,error:null})).on(fi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(fi.failData,(e,i)=>({...e,error:i.message})).on(qd,(e,i)=>({...e,completed:i.completed})).on(Yd,()=>({...Lo})),WS={useTeacherDataVerification:HS},VS={getTeacherDataVerificationFx:fi},GS={postTeacherDataVerification:Gd,changeCompleted:qd,clearStore:Yd},qS=Object.freeze(Object.defineProperty({__proto__:null,effects:VS,events:GS,selectors:WS},Symbol.toStringTag,{value:"Module"})),YS=[Qh,Ye,cg,ug,kg,PS,NS,ny,og,IS,uw,BS,qS,mg,eg,jS],JS=()=>{YS.forEach(e=>{e.events.clearStore()})},KS=()=>{localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh),sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)},rt=localStorage.getItem(M.Token)??"",lt=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),Tn=z(async e=>{try{const{data:i}=await ch(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await Ot.post("/old",n)}catch{}return KS(),lt()?(localStorage.setItem(M.Token,i.token),localStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(M.Token,i.token),sessionStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),wt=z(async e=>{try{const[i,n]=await Promise.all([dh(e.token),ya()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:Kh({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:lt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),ts=z(async e=>{try{return(await ph(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Jd=z(()=>{lt()?(localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)):(sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),sessionStorage.removeItem(M.JWTRefresh)),JS()}),Kd=e=>{const i=localStorage.getItem(M.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(M.SavePassword,n.toString()),n},Xd=k(),Ds=k(),Qd=k(),Zd=k(),ep=k();Le({from:Xd,to:Tn});$({clock:Tn.doneData,target:wt});Le({from:Ds,to:Jd});rt&&lt()?wt({token:rt,jwt:localStorage.getItem(M.JWT)}):Jd();const XS={currentUser:null,error:null,isAuthenticated:!!(rt!=null&&rt.length),savePassword:lt(),loginEuz:""};Kd();const tp=K(XS).on(wt,e=>({...e,error:null})).on(wt.doneData,(e,i)=>i).on(wt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(rt!=null&&rt.length),savePassword:lt()})).on(Tn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:lt()})).on(Ds,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:lt()})).on(ep,(e,{savePassword:i})=>({...e,savePassword:Kd(i)})).on(ts,e=>({...e,error:null})).on(ts.doneData,(e,i)=>({...e,loginEuz:i})).on(wt.failData,(e,i)=>({...e,error:i.message})).on(Zd,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Qd,e=>({...e,currentUser:null})),be={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=G(tp);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:G(Tn.pending),error:i}}},$t={login:Xd,logout:Ds,changeSavePassword:ep,clear:Qd,update:Zd},QS={getUserFx:wt,getLoginEuzFx:ts},ZS=()=>{const e="0.0.1";localStorage.getItem(M.Version)!==e&&(localStorage.clear(),localStorage.setItem(M.Version,e),$t.logout())},eT=p.div`
    max-height: 400px;
    overflow-y: auto;
`,tT=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(fe,{text:e.message,image:t.jsx(Wu,{}),children:t.jsxs(A,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(xe,{}),t.jsx(Jl,{title:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:t.jsxs(A,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(Vu,{})]})}),children:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(eT,{children:e.stack})})})]})})}),iT=/Cannot access 'get' before initialization/,nT=/Failed to fetch dynamically imported module/,sT=2,zo="reloadCount";class ip extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n);const s=Number(sessionStorage.getItem("reloadCount"))??0;s<sT&&(i!=null&&i.message)&&(nT.test(i.message)||iT.test(i.message))&&(sessionStorage.setItem(zo,`${s+1}`),window.location.reload())}render(){return this.state.hasError?t.jsx(tT,{error:this.state.error}):(sessionStorage.setItem(zo,"0"),this.props.children)}}const oT=C?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",xi=Ot.create({baseURL:oT}),aT={headers:{"Content-Type":"application/json"}};xi.interceptors.request.use(ba);xi.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await zn(xi)(e):e},zn(xi));const rT=async e=>{var n;const i=await xi.post("",{query:e},aT);if(np(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function np(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(np(e[i]))return!0}return!1}const lT=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,sp=k(),Ns=Gu({effect:async({currentUser:e})=>({...(await rT(lT((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:tp}),cT=ca(Ns,null);$({clock:sp,target:Ns});const dT=Ns.pending,pT={load:sp},EE={peTeacher:cT,isLoading:dT},op=k(),ap=z(Ch);$({clock:op,target:ap});const rp=K([]),PE=is(rp,e=>e.map(i=>i.divisionName));$({clock:ap.doneData,target:rp});function lp(e){const{pathname:i}=Gt();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const uT=()=>{const{allRoutes:e}=He.useMenu();return e?t.jsxs(da,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(pa,{path:i,component:n,exact:!s},i)),t.jsx(qe,{exact:!0,to:ws})]}):null},hT=le.memo(uT),gT=p.div`
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
`,fT=()=>{const{open:e,content:i,position:n}=jf.useContextMenu(),s=l.useRef(null);return Kt(s,()=>Ie.close()),t.jsx(yn,{isOpen:e,children:t.jsx(gT,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},cp=200,xT=5e3,mT=()=>{const{visibleNotifications:e}=it.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Ct.clearVisibleById(a)},cp)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??xT))},[e]),{handleClose:o,closing:i}},bT=p.div`
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
`,yT=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${cp/1e3}s forwards;

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
`;const vT=()=>{const{visibleNotifications:e}=it.useLkNotifications(),{closing:i,handleClose:n}=mT();return t.jsx(bT,{children:e.map(s=>t.jsx(yT,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Zl,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Mo=p.div`
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
`,_T=({loading:e})=>{const{data:{user:i},error:n}=be.useUser(),s=i?De(i==null?void 0:i.fullName):w.blue.main,o=()=>QS.getUserFx(JSON.parse(localStorage.getItem(M.Token)??"")),a=()=>$t.logout();return n?t.jsx(Mo,{$loading:!0,color:s,children:t.jsx(fe,{text:n,children:t.jsxs(A,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(ns,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(Mo,{color:s,$loading:e,children:[t.jsx(dn,{short:!0,width:"100px"}),e&&t.jsx(Qe,{})]})},wT=p.div`
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
`,jT=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Os.useStory();return t.jsx(wT,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():vt.changeCurrentPage({value:o+1})})})},kT=p(cn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,ST=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Os.useStory();return t.jsxs(kT,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(jT,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Yu,{}):t.jsx(qu,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Ke,{}),onClick:n})]})},TT=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,ET=p(Ze)`
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
`,PT=p.div`
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
    transform: ${({align:e})=>TT(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,CT=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=qt();return t.jsxs(ET,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(ps,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(PT,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(W,{size:2,align:f,children:o}),t.jsx(oe,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),vt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},$T=p.div`
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
`,Fo=p.div`
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
`,OT=()=>{const{pages:e,isOpen:i,currentPage:n}=Os.useStory(),s=l.useRef(null);Kt(s,()=>vt.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(yn,{isOpen:i,children:t.jsx($T,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(ST,{pages:e.length,onClose:()=>vt.close(),playing:o}),t.jsx(Fo,{left:"15px",onClick:()=>{n!==0&&vt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(wi,{})}),t.jsx(CT,{setPlaying:a,currentPage:n,...r}),t.jsx(Fo,{right:"15px",onClick:()=>{n!==e.length-1?vt.changeCurrentPage({value:n+1}):vt.close(),a(!0)},children:t.jsx(ht,{})})]})})})},AT=()=>{const{data:{user:e}}=be.useUser(),{notifications:i,loading:n,loaded:s}=it.useLkNotifications(),{settings:o}=Jt.useSettings(),[a]=ji([Ma.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{Mn.getElectronicInteraction(),a&&!a.status&&Ct.add(Od("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Mn.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(Ad(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,Ct.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{tt.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},DT=()=>{const{data:{user:e}}=be.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(eh);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},NT=()=>{const e=Tr(),{open:i}=te(),n=DT();return AT(),xt(),l.useEffect(()=>{n&&n&&i(t.jsx(Nc,{}),"Что нового")},[n]),{currentPage:e}},IT=p.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,RT=p.div`
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
`,LT=p.div`
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
`,zT=()=>{const{data:{user:e}}=be.useUser(),i=l.useRef(null),{allRoutes:n}=He.useMenu(),{currentPage:s}=NT(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return lp(i.current),t.jsxs(IT,{children:[t.jsx(_T,{loading:!e||!n}),t.jsx(OT,{}),t.jsx(r1,{}),t.jsxs(RT,{children:[t.jsx(q_,{headerVisible:(s==null?void 0:s.hiddenTitle)||o,currentPage:s}),t.jsx(LT,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(ip,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(hT,{})})})}),t.jsx(qw,{})]}),t.jsx(g1,{}),t.jsx(c1,{}),t.jsx(x1,{}),t.jsx(fT,{}),t.jsx(ej,{}),t.jsx(vT,{})]})},MT=le.memo(zT),FT=()=>{const{data:{isAuthenticated:e,user:i}}=be.useUser(),{data:n}=Ye.selectors.useData(),{settings:s}=Jt.useSettings();return lp(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Re.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Ye.effects.getFx(),Re.getWorkerPosts(),op()),pT.load())},[e,i]),l.useEffect(()=>{i&&(s?tt.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):$g.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(MT,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(da,{children:[Sv.map(({path:o,Component:a},r)=>t.jsx(pa,{path:o,component:a,exact:!0},r)),t.jsx(qe,{exact:!0,to:Pl})]})})},BT=p.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;ZS();const HT=()=>(xt(),t.jsx(o_,{children:t.jsx(Ju,{basename:"/",children:t.jsx(BT,{children:t.jsx(ip,{children:t.jsx(FT,{})})})})}));Ku.render(t.jsxs(le.StrictMode,{children:[t.jsx(G1,{}),t.jsx(HT,{})]}),document.getElementById("root"));export{F as $,Gj as A,wn as B,ao as C,P_ as D,pT as E,pn as F,tp as G,ee as H,_t as I,A as J,yt as K,xe as L,Q as M,Jy as N,w as O,Xt as P,i0 as Q,Qe as R,dt as S,W as T,oe as U,ot as V,We as W,As as X,us as Y,EE as Z,nf as _,xg as a,rp as a$,fe as a0,be as a1,_n as a2,W_ as a3,gj as a4,iE as a5,Pe as a6,Ga as a7,qT as a8,Es as a9,wE as aA,Ps as aB,nr as aC,Xv as aD,Zv as aE,He as aF,Kv as aG,Ml as aH,jv as aI,TE as aJ,ft as aK,he as aL,Yt as aM,Xe as aN,nE as aO,PE as aP,ig as aQ,Vs as aR,I0 as aS,jb as aT,aE as aU,kb as aV,sE as aW,J0 as aX,oE as aY,ms as aZ,Ob as a_,Si as aa,Jt as ab,Me as ac,j1 as ad,rr as ae,GT as af,$t as ag,Fm as ah,vi as ai,Ti as aj,AS as ak,Ct as al,OS as am,jE as an,kE as ao,eE as ap,SE as aq,rn as ar,Ze as as,Jn as at,Gl as au,Fh as av,Ai as aw,Ol as ax,Bh as ay,ir as az,ue as b,rl as b$,rE as b0,Rv as b1,yj as b2,Rj as b3,re as b4,Kc as b5,Xi as b6,kv as b7,dE as b8,Mv as b9,vE as bA,bE as bB,Ew as bC,dc as bD,$s as bE,_E as bF,Ll as bG,O_ as bH,De as bI,Cs as bJ,Un as bK,pw as bL,tc as bM,z_ as bN,R as bO,Dn as bP,pE as bQ,fE as bR,xE as bS,mE as bT,gE as bU,hE as bV,uE as bW,_e as bX,T_ as bY,ic as bZ,hv as b_,zv as ba,Wh as bb,rx as bc,Ni as bd,fo as be,_1 as bf,bn as bg,Di as bh,pv as bi,Ve as bj,we as bk,lE as bl,ks as bm,J as bn,Ie as bo,un as bp,Kt as bq,Ma as br,Mn as bs,eg as bt,Ne as bu,mt as bv,at as bw,Sy as bx,ky as by,Gw as bz,mg as c,Uj as c$,al as c0,KT as c1,XT as c2,nj as c3,Tv as c4,wv as c5,_v as c6,vv as c7,fc as c8,dw as c9,Ev as cA,YT as cB,Wl as cC,Ul as cD,JT as cE,cE as cF,cn as cG,$_ as cH,QS as cI,it as cJ,mv as cK,D_ as cL,QT as cM,zS as cN,MS as cO,ZT as cP,Xh as cQ,VT as cR,WT as cS,Zi as cT,V1 as cU,ps as cV,Qh as cW,bf as cX,tE as cY,qj as cZ,zi as c_,ls as ca,yE as cb,nw as cc,Fl as cd,sw as ce,ow as cf,yc as cg,zt as ch,gw as ci,$c as cj,hw as ck,Dc as cl,Z1 as cm,$1 as cn,Iw as co,Cw as cp,xt as cq,uc as cr,bc as cs,Ur as ct,xw as cu,ql as cv,co as cw,ua as cx,an as cy,Pv as cz,Re as d,Wj as d0,Hj as d1,Uc as d2,IS as d3,gg as e,hg as f,B as g,GS as h,U as i,WS as j,VS as k,se as l,Be as m,Ii as n,C as o,uo as p,rT as q,pt as r,me as s,_ as t,er as u,gr as v,te as w,et as x,Pn as y,Vh as z};
