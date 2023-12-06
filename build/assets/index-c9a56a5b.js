import{F as Xe,a as xi,b as lt,c as Zi,H as Pn,d as ht,y as M,u as k,p as X,e as q,x as O,S as Ie,m as Yn,r as l,s as p,j as t,f as Ke,I as Jd,g as Xd,h as Kd,i as Qd,k as No,A as Jn,l as D,n as Zd,o as Te,q as zt,t as wn,v as ep,w as tp,R as le,z as jt,B as _i,C as gt,L as Z,D as mi,E as ip,G as np,J as en,K as Ht,M as sp,N as op,O as ft,P as He,Q as Io,T as Ut,U as Ro,V as Xn,W as ct,X as Lo,Y as zo,Z as wi,_ as Mo,$ as Fo,a0 as ap,a1 as rp,a2 as lp,a3 as cp,a4 as Ye,a5 as Mt,a6 as dp,a7 as pp,a8 as up,a9 as hp,aa as gp,ab as fp,ac as K,ad as xp,ae as Bo,af as Ho,ag as mp,ah as bp,ai as Uo,aj as Ct,ak as Kn,al as Wo,am as yp,an as vp,ao as _p,ap as Vo,aq as wp,ar as tn,as as jp,at as Go,au as qo,av as Yo,aw as Jo,ax as kp,ay as Sp,az as As,aA as Xo,aB as Ui,aC as Tp,aD as Ep,aE as ai,aF as Ko,aG as Qo,aH as ie,aI as Qn,aJ as Ds,aK as Zo,aL as $p,aM as Pp,aN as Cp,aO as Op,aP as Mi,aQ as Ap,aR as Dp,aS as Np,aT as Ip,aU as Rp,aV as Lp,aW as zp,aX as Mp,aY as Fp,aZ as Bp,a_ as Hp,a$ as Up,b0 as Wp,b1 as Vp,b2 as Gp,b3 as qp,b4 as Yp,b5 as Jp,b6 as Xp,b7 as Kp,b8 as Qp,b9 as Zp,ba as ea,bb as eu,bc as tu,bd as iu,be as nu,bf as su,bg as ou,bh as au,bi as Zn,bj as ru,bk as lu,bl as cu,bm as du,bn as pu,bo as uu,bp as hu,bq as gu,br as fu,bs as ta,bt as xu,bu as Cn,bv as mu,bw as bu,bx as yu,by as vu,bz as _u,bA as wu,bB as ju,bC as ku,bD as Ns,bE as Su,bF as Tu,bG as Eu,bH as $u,bI as Pu,bJ as Cu,bK as Ou,bL as ia,bM as na,bN as Au,bO as Du,bP as Nu,bQ as Iu}from"./vendor-f1fdae2f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Ru="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Lu=3,nn=["home","settings","all"],sa=["home","settings","download-agreements","all"],oa="https://lk.eseur.ru/signup",zu="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",j={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Nt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},uT={Зачтено:j.green,"Не зачтено":j.red,Отлично:j.green,Хорошо:j.blue,Удовлетворительно:j.orange,Неудовлетворительно:j.red,"Не явился":j.red,default:j.red},hT={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},z="https://e.mospolytech.ru/old",Mu="2023-10-03T10:43:43",kt={info:{icon:Xe,color:"blue",title:"Информация"},alert:{icon:xi,color:"orange",title:"Внимание!"},failure:{icon:lt,color:"red",title:"Ошибка"},success:{icon:Zi,color:"green",title:"Успешно"},tip:{icon:Pn,color:"grey",title:"Подсказка"},hint:{icon:Pn,color:"white",title:"Подсказка"},hrFailure:{icon:lt,color:"red",title:"Ошибка"}},Fu={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Bu=["image/jpeg","image/jpg","image/png","application/pdf"],Hu=10,aa="(max-width: 766px)",Uu="(min-width: 767px)",ra="(max-width: 1000px)",la="(max-width: 1380px)",ca="(min-width: 1381px)",ee={isMobile:`@media ${aa}`,isNotMobile:`@media ${Uu}`,isTablet:`@media ${ra}`,isSmallTesktop:`@media ${la}`,isMiddleTesktop:`@media ${ca}`},Wu=[{query:aa,title:"isMobile",value:"mobile"},{query:ra,title:"isTablet",value:"tablet"},{query:la,title:"isSmallDesktop",value:"smallDesktop"},{query:ca,title:"isMiddleDesktop",value:"middleDesktop"}],es={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},A=!window.location.port||window.location.port==="80";console.log("Running on production",A);var B=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(B||{});const Ue=()=>localStorage.getItem(B.JWT)||sessionStorage.getItem(B.JWT),Wt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Vu=()=>JSON.parse(localStorage.getItem(B.SavePassword)??"true"),On=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===403||i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Pt.logout();else{n._retry=!0;const h=localStorage.getItem(B.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await Ku(h??"");return Vu()?(localStorage.setItem(B.JWT,f),localStorage.setItem(B.JWTRefresh,g)):(sessionStorage.setItem(B.JWT,f),sessionStorage.setItem(B.JWTRefresh,g)),e(n)}catch{Pt.logout()}}return Promise.reject(i)},da=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${Ue()}`,e),Gu=`${z}/lk_api.php`,qu="https://api.mospolytech.ru/serviceforfrontpersonnelorders",U=ht.create({baseURL:Gu,withCredentials:!0}),pe=ht.create({baseURL:qu});pe.interceptors.request.use(da);!A&&pe.interceptors.response.use(e=>e,On(pe));function ts(e){return e.isAxiosError}function W(){return localStorage.getItem(B.Token)??sessionStorage.getItem(B.Token)??""}const Yu=({login:e,password:i})=>U.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Ju=e=>U.get(`?getUser&token=${e}`),Xu=e=>U.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),gT=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",W()),U.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},fT=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),U.post(`?changeADPass=1&token=${W()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},xT=async e=>{const i=new FormData;return i.set("email",e),i.set("token",W()),U.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},mT=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",W()),U.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Ku=async e=>{const{data:i}=await ht.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Qu=e=>U.get(`?getSchedule&group=${e}&token=${W()}`),Zu=e=>U.get(`?getScheduleTeacher&fio=${e}&token=${W()}`),eh=()=>U.get(`?getSchedule&session=1&token=${W()}`),th=e=>U.get(`?getScheduleTeacher&fio=${e}&session=1&token=${W()}`),ih=()=>U.get(`?getPayments&token=${W()}`),nh=e=>U.get(`?signAgreement=${e}&token=${W()}`),sh=e=>U.get(`?signContract=${e}&token=${W()}`),oh=async({semestr:e})=>{var i,n;return(n=(i=await U.get(`?getAcademicPerformance&semestr=${e}&token=${W()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},ah=e=>U.get(`?getMessages&token=${W()}&id=${e}`),rh=async()=>(await U.get(`?getPEPStatus&token=${W()}`)).data,lh=async()=>(await U.get(`?setPEPAccept&token=${W()}`)).data,ch=()=>U.get(`?getContactData&token=${W()}`),dh=e=>{const i=new FormData;i.set("token",W()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return U.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ph=()=>U.get(`?getRequestHighComfort&token=${W()}`),bT=e=>{const i=new FormData;i.set("token",W()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return U.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},uh=()=>U.get(`?getAppRequests&token=${W()}`),pa=()=>U.get(`?getAppData&token=${W()}`),hh=async()=>await pe.get(`/Dismissal.GetAllHistory?employeeGuid=${Wt(Ue()??"").IndividualGuid}`),gh=async()=>{const{data:e}=await pe.get("/AnotherPlaceWork.GetDivisions");return e.divisions},fh=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",W()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await U.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},xh=()=>pe.get(`?getAppRequests&token=${W()}`),mh=()=>pe.get(`?getAppData&token=${W()}`),bh=e=>pe.post("Dismissal.Post",e),yh=async()=>(await U.get(`?getAdminLinks&token=${W()}`)).data,vh=async e=>(await U.get(`?PDinfo&token=${W()}`)).data,ua=()=>U.get(`?getNotification&token=${W()}`),_h=e=>U.get(`?viewNotification=${e}&token=${W()}`),wh=Object.freeze(Object.defineProperty({__proto__:null,get:ua,view:_h},Symbol.toStringTag,{value:"Module"})),ha=()=>U.get(`?getDocList&token=${W()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),jh=e=>U.get(`?viewDoc=${e}&token=${W()}`),kh=Object.freeze(Object.defineProperty({__proto__:null,get:ha,view:jh},Symbol.toStringTag,{value:"Module"})),Sh=(e,i,n,s)=>U.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${W()}`),Th=e=>U.get(`?getDivs=${e}&page=1&token=${W()}`),Eh=()=>U.get(`?getCheckData&token=${W()}`),$h=e=>{const i=new FormData;i.set("token",W()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return U.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Ph=(e,i,n,s)=>U.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${W()}`),Ch=async e=>await U.get(`?getGroups=${e}&perpage=30&page=1&token=${W()}`),Oh=async()=>(await U.get(`?getAlerts&token=${W()}`)).data,Ah=()=>U.get(`?getNotifications&token=${W()}`),Dh=e=>U.get(`?clearNotificationById=${e}&token=${W()}`),Nh=()=>U.get(`?clearAllNotifications&token=${W()}`);function Ih({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Is={data:null,preparedData:null,loading:!1,error:null},sn=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Ru})=>{const o=e??Is,a=()=>({data:q(u).data,preparedData:q(u).preparedData,loading:q(r.pending),error:q(u).error}),r=M(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=M(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),u=X(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...Is}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function Rh(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Lh=sn({api:{get:oh},prepareData:Rh}),dt=sn({api:{get:yh}}),zh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Mh=sn({api:{get:Oh},prepareData:zh}),Rs={message:"",type:"success",isOpen:!1,time:2e3},ga=k(),fa=k(),xa=k();X(Rs).on(ga,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(fa,(e,{isOpen:i})=>({...e,isOpen:i})).on(xa,()=>({...Rs}));const We={evokePopUpMessage:ga,openPopUpMessage:fa,clearStore:xa},Ls={listApplication:null,error:null,dataUserApplication:null},ri=M(async()=>{const e=await xh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Fi=M(async()=>{const e=await mh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),on=M(async e=>await bh(e));O({clock:on.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:We.evokePopUpMessage});O({clock:on.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:We.evokePopUpMessage});const Fh=k();Ie({from:on.doneData,to:ri});X(Ls).on(Fi,e=>({...e,error:null})).on(Fi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Fi.failData,(e,i)=>({...e,error:i.message})).on(ri,e=>({...e,error:null})).on(ri.doneData,(e,i)=>({...e,listApplication:i})).on(ri.failData,(e,i)=>({...e,error:i.message})).on(Fh,()=>({...Ls}));const Bh={getApplicationsFx:ri,getUserDataApplicationsFx:Fi,postApplicationFx:on},zs={message:"",type:"success",isOpen:!1,time:2e3},Hh=()=>q(Uh),ma=k(),ba=k(),ya=k(),Uh=X(zs).on(ma,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ba,(e,{isOpen:i})=>({...e,isOpen:i})).on(ya,()=>({...zs})),va={usePopUpMessage:Hh},G={evokePopUpMessage:ma,openPopUpMessage:ba,clearStore:ya},Wh=Object.freeze(Object.defineProperty({__proto__:null,events:G,selectors:va},Symbol.toStringTag,{value:"Module"})),Ms={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},li=M(async()=>{const e=await hh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ci=M(async()=>{const e=await uh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),di=M(async()=>{const e=await pa();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),is=M(async e=>{const i=await fh(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Vh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(Gh);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(di.pending),workerLoading:q(Yn(li.pending,Bh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},_a=k();Ie({from:is.doneData,to:ci});O({clock:is.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:G.evokePopUpMessage});const Gh=X(Ms).on(di,e=>({...e,error:null})).on(di.doneData,(e,i)=>({...e,dataUserApplication:i})).on(di.failData,(e,i)=>({...e,error:i.message})).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,listApplication:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(li,e=>({...e,error:null})).on(li.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(li.failData,(e,i)=>({...e,error:i.message})).on(_a,()=>({...Ms})),ye={useApplications:Vh},Fe={getApplicationsFx:ci,getUserDataApplicationsFx:di,postApplicationFx:is,getWorkerPosts:li},qh={clearStore:_a},Yh=Object.freeze(Object.defineProperty({__proto__:null,effects:Fe,events:qh,selectors:ye},Symbol.toStringTag,{value:"Module"})),Fs={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Jh=()=>q(Xh),wa=k(),ja=k(),ka=k(),Xh=X(Fs).on(wa,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(ja,e=>({...e,isOpen:!1})).on(ka,()=>({...Fs})),Sa={useConfirm:Jh},st={evokeConfirm:wa,closeConfirm:ja,clearStore:ka},Kh=Object.freeze(Object.defineProperty({__proto__:null,events:st,selectors:Sa},Symbol.toStringTag,{value:"Module"})),Qh=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=M(async u=>{try{return(await i.post(u)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=M(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(u){throw new Error(u)}return n.data}),c=k(),d=X(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Zh,events:eg,selectors:tg}=Qh({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:ch,post:dh}}),ig=Object.freeze(Object.defineProperty({__proto__:null,effects:Zh,events:eg,selectors:tg},Symbol.toStringTag,{value:"Module"})),Ta=k(),Ea=k(),$a=k(),Pa=k(),ji=M(async()=>{const i=(await lh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});O({clock:ji.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:G.evokePopUpMessage});O({clock:ji.doneData,fn:()=>!0,target:$a});O({clock:ji.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:G.evokePopUpMessage});const bi=M(async()=>{try{return(await rh())[0]}catch(e){throw new Error(e)}});O({clock:Ea,target:ji});O({clock:Ta,target:bi});const Ca=k(),ng=bi.pending,sg=ji.pending,og=X(!1).on(Pa,(e,i)=>i),ag=X(!1).on($a,(e,i)=>i),rg=X(null).on(bi,()=>null).on(bi.failData,(e,i)=>i.message),lg=X(null).on(bi.doneData,(e,i)=>i).on(Ca,()=>null),Oa={$error:rg,$electronicInteractionStore:lg,$completed:og,$done:ag,$loading:ng,$workerLoading:sg},An={getElectronicInteraction:Ta,postElectronicInteraction:Ea,changeCompleted:Pa,clearStore:Ca},cg=Object.freeze(Object.defineProperty({__proto__:null,events:An,stores:Oa},Symbol.toStringTag,{value:"Module"})),dg="Sep 07 2023 12:00:00 GMT+0300",Aa="Sep 08 2023 12:00:00 GMT+0300",yT=e=>{const i=new Date;return i<new Date(dg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(Aa)?"Подача заявок закрыта":""},oe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Bs=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),oe(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),oe(n,"extraWeird")}},Ni=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Bs(-30*11),maxValueInput:Bs(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Ii={kvdCert:Ni({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Ni({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Ni({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Ni({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Se=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const d=new Date(a.minValueInput);if(c<d)return!0}if(a.maxValueInput){const d=new Date(a.maxValueInput);if(c>d)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},pg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},ug=()=>Object.keys(ze).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),Da=(e="")=>({[e]:{...ug(),[ze["settings-appearance"]]:{id:ze["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[ze["settings-home-page"]]:{id:ze["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[ze["settings-customize-menu"]]:{id:ze["settings-customize-menu"],property:{pages:nn}},[ze["settings-notifications"]]:{id:ze["settings-notifications"],property:pg}}});var ze=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(ze||{});const Dn={settings:Da(),error:null,completed:!1};let Oe;const hg=()=>({settings:q(Bi).settings[Oe],error:q(Bi).error,completed:q(Bi).completed}),gg=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},Na=M(e=>{Oe=e;const i=JSON.parse(localStorage.getItem(B.NewSettings)??"{}")[Oe];return gg(i,Da(e)[e])}),Ia=k(),Ra=k(),La=k(),Bi=X(Dn).on(Ra,(e,i)=>({...e,completed:i.completed})).on(Na.doneData,(e,i)=>({...e,settings:{[Oe]:i}})).on(Ia,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Oe]:{...e.settings[Oe],[i]:{...e.settings[Oe][i],property:{...e.settings[Oe][i].property,[n]:s}}}}})).on(La,()=>({...Dn}));Bi.watch(e=>{if(e!==Dn&&Oe){const i=JSON.parse(localStorage.getItem(B.NewSettings)??JSON.stringify({}));i[Oe]=e.settings[Oe],localStorage.setItem(B.NewSettings,JSON.stringify(i))}});const Vt={useSettings:hg},ki={updateSetting:Ia,changeCompleted:Ra,clearStore:La},fg={getLocalSettingsFx:Na},xt=()=>{var a,r;const{settings:e}=Vt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),ki.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},xg=p.button`
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:m,direction:x="horizontal",isActive:b=!0,height:y,notActiveClickMessage:$,flipped:w,...S}=e,T=R=>{b?s==null||s(R):$&&G.evokePopUpMessage({type:"failure",message:$,time:1e4})};return t.jsxs(xg,{text:!!n,onClick:T,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:u,direction:x,isActive:b,fixedInMobile:m,height:y,flipped:w,...S,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const Nn=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Hs=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},mg=p.div`
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
`,bg=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],an=p.div.withConfig({shouldForwardProp:e=>!bg.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Hs(n):Nn(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Nn(i):Hs(n)};
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
`,yg=p.div`
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
`;function Y({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(yg,{pulse:s,size:i,shape:e,margin:n})}const vg=p(an)`
    height: 100%;
`,_g=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(vg,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(Y,{...o,key:a}))}),bt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function wg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:bt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:bt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:bt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:bt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:bt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:bt(n),children:i});default:return t.jsx("h1",{className:"title",style:bt(n),children:i})}}const jg=p.div`
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
`,kg=p.span`
    color: var(--red);
    margin-right: 5px;
`,Sg=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function H(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(jg,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(wg,{size:o,width:r,children:[a&&t.jsx(kg,{children:"*"}),t.jsx(Sg,{width:r,children:s})]})]}):null}const Tg=(e,i,n)=>n?"#fff":e?j[kt[i].color].dark3:j[kt[i].color].light3,Eg=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Tg(i,e,n)};
    background: ${({type:e,solidBackground:i})=>j[kt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>j[kt[e].color][i?"main":"light2"]};
    }
`,$g=()=>t.jsx(_g,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function Q({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f=!1,align:g="left",visible:m=!0,loading:x=!1}){if(!m)return null;const{theme:b}=xt();return t.jsxs(Eg,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:f,children:[t.jsx(H,{size:4,align:g,icon:n===null?null:n??kt[e].icon({}),children:a??kt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Ke,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),x&&t.jsx($g,{})]})}p.div`
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
`;const Pg=p.div`
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
`,Cg=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(Pg,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),fe=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Og="/assets/sad-emoji-0c60bf90.gif",se=p.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,Ag=p.div`
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
`;function he({text:e,image:i,size:n,children:s}){return t.jsxs(Ag,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Og,alt:"груфтим("}):i}),t.jsx(se,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Dg="/assets/loading-c8041cd3.gif",Ng=p.img`
    width: 40px;
`;function Qe(e){return t.jsx(Ng,{...e,src:Dg,alt:"loading",className:"loading-circle"})}const Ig="/assets/logo-4d9aa449.png",Rg="/assets/mospolytech-logo-white-b1e4f630.png",Lg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function rn({width:e,className:i,short:n=!1}){return t.jsx(Lg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Rg:Ig,alt:"Logo"})})}const zg=p.img``;function ns({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(Y,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(zg,{src:i,alt:o,height:n,width:s})}const Mg=p.div`
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
`;function za({size:e,color:i}){return t.jsx(Mg,{size:e,color:i?j[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Fg=p.div`
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
`;function Bg(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Fg,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(H,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const Hg=p.button`
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
`,St=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:m=!1,repeatable:x=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(G.evokePopUpMessage({message:c,type:"success"}),x&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const y=()=>{if(f&&!h&&!g)return i();b&&G.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Hg,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:f&&!h&&!m,onClick:y,isDone:h,width:n,height:s,repeatable:x,tabIndex:f&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Jd,{})," ",r]}):g?t.jsx(Qe,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Wi={small:"32px",middle:"36px",big:"44px"},Me=e=>({size:i})=>e[i],Ug=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Wg=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},Vg={groupMask:Ug,phoneMask:Wg},Gg=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const g=l.useCallback(y=>y.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:y=>{y.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(y=>y==="password"?"text":"password"),handleOnChange:y=>{if(i(c?r?r(y.target.value,e):n==="tel"?Vg.phoneMask(y):n==="email"?g(y.target.value):y.target.value:y.target.value),n==="date"&&(o||a)){const $=new Date(y.target.value);let w=!1;if(o){const S=new Date(o);w=$<S}if(a&&!w){const S=new Date(a);w=$>S}f(w)}i(y.target.value)}}},qg=p.div`
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
        height: ${Me(Wi)};
        max-height: ${Me(Wi)};
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
`,pt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:m,alertMessage:x,loading:b=!1,isActive:y=!0,inputAppearance:$=!0,mask:w=!1,autocomplete:S=!1,minValue:T=void 0,maxValue:R=void 0,maxLength:I=void 0,hideCross:N=!1,stepSize:J=.1,size:L="middle"}=i,{inputType:ne,buttonOnClick:ge,danger:je,handleOnChange:Re,phoneMaskKeyDown:qe}=Gg(s,o,g,m,T,R,h,w),ue=s&&g==="date"?Xd(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(qg,{leftIcon:!!a,isActive:y,inputAppearance:$,width:d,danger:je,minWidth:u,size:L,children:[t.jsx(H,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(Q,{type:"alert",visible:!!x,icon:t.jsx(Kd,{}),title:x??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:T,max:R,maxLength:I,step:J??void 0,type:ne,placeholder:f,value:ue,autoComplete:S?"on":"off",onKeyDown:Pe=>g==="tel"&&qe(Pe),onChange:Re,required:c,readOnly:!y,ref:n}),g!=="password"?!!(s!=null&&s.length)&&$&&(b?t.jsx(Qe,{}):!N&&t.jsx(_,{icon:t.jsx(Ke,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ne==="password"?t.jsx(Qd,{}):t.jsx(No,{}),tabIndex:-1,onClick:ge})]})}),Yg=p.div`
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
`,Jg="/assets/thinking-emoji-f3c10f79.gif",Xg=["loading"],Kg=p.div.withConfig({shouldForwardProp:e=>!Xg.includes(e)})`
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
`,Ve=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Kg,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(he,{text:n,image:a&&Jg,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Jn,{})})})}):t.jsx(Qe,{})}),t.jsx("div",{className:"content",children:e})]})),Qg=p.a`
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
`,Zg=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(Qg,{text:!!i,onClick:m=>f&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Si=l.memo(Zg),ss=p.div`
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
`,ef=p.a`
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
`,tf=({title:e,link:i,type:n})=>t.jsxs(ef,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(D,{}):t.jsx(Zd,{})}),t.jsx("div",{className:"title",children:e})]}),nf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),sf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},of=()=>Te(af),Ma=k(),Fa=k(),Ba=k(),af=X(sf).on(Ma,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:nf(n,220,s),open:!0,content:i,type:o})).on(Fa,e=>({...e,open:!1})).on(Ba,(e,{position:i})=>({...e,position:i})),Ne={open:Ma,close:Fa,changePosition:Ba},rf={useContextMenu:of},lf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},jn=new Set,Ha=(e,i)=>{l.useEffect(()=>{const n=o=>{jn.add(o.which),!e.slice(0,e.length-1).find(r=>!jn.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{jn.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Ze=p.div`
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
`,P=p.div`
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
`,be=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Ua=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=be(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Wa=e=>/[A-Za-z]/.test(e),cf=p.span`
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
`,Va=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Wa(e))return null;const s=Ua(e),o=()=>i(s);return t.jsxs(se,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(cf,{tabIndex:10,children:s})]})};function Gt(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function ut(e,i,n=0){return e>i?n:e<n?i:e}const df=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,pf=p(Ze)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,uf=p.div`
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
`,Ga=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[m,x]=l.useState(0),[b,y]=l.useState(!1),$=l.useRef(null),w=l.useRef(null),S=l.useRef(null);Gt($,()=>y(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var N;return(N=S.current)==null?void 0:N.focus()},50)},[c]);const T=N=>{var J,L;(((a==null?void 0:a.length)??0)>0||o)&&y(!0),N.key==="ArrowDown"?((J=w.current)==null||J.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&x(ut(m+1,((a==null?void 0:a.length)??1)-1,0))):N.key==="ArrowUp"?((L=w.current)==null||L.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&x(ut(m-1,((a==null?void 0:a.length)??1)-1,0))):N.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),y(!1),h==null||h(a==null?void 0:a[m??0])):x(0)},R=N=>()=>{x(N),d((a==null?void 0:a[N].title)??""),y(!1),h==null||h(a==null?void 0:a[N])},I=()=>{a!=null&&a.length&&y(!0)};return t.jsxs(df,{width:i,onKeyDown:T,onMouseDown:I,ref:$,children:[t.jsx(pt,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(zt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:S}),t.jsx(Va,{setValue:d,value:e,visible:f}),b&&t.jsx(pf,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:T,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:N,icon:J},L)=>{const ne=m===L;return t.jsxs(uf,{onClick:R(L),ref:ne?w:null,selected:ne,children:[J&&t.jsx("div",{className:"icon",children:J}),t.jsx("span",{children:N})]},N+L)})})]})},ln=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Us={small:"30px",middle:"44px",big:"68px"},qa={small:"8px",middle:"10px",big:"16px"},hf={small:"0.8rem",middle:"0.9rem",big:"1rem"},gf={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},ff=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Me(Us)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Me(qa)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Me(Us)};
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
`,xf=p.div`
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
        font-size: ${Me(hf)};
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
            font-size: ${Me(gf)};
        }
    }
`,mf=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(xf,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),bf=l.memo(mf),yf=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Me(qa)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,vf=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(yf,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},_f=l.memo(vf),wf=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=ln();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(ff,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(_f,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(bf,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},os=l.memo(wf),jf=300,Ya=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=jf})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,f]},Tt=p.span`
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
`,kf=p.div`
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
`,mt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(kf,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(Tt,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Ja=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=y=>{n(i(y,e))},f=()=>{n(null)},[g,m,x]=Ya({onDebounce:h,onClear:f}),b=y=>{m(y),o&&o(y)};return t.jsx(Ga,{value:g??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?x:!1,hints:a,width:r})},Sf=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Yg,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Xa=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Tf=p(Xa)`
    background: var(--almostTransparentOpposite);
`,Ef=p(Xa)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>j[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Ka=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Ee,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Tf,{},a)),t.jsx(Ef,{color:n,current:i})]}),$f=p.label`
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
`,Pf=p.div`
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
`,Je=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs($f,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(Pf,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(Zi,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},Qa=e=>e.split("/")[1],Cf=e=>e*1024*1024,Of=(e,i)=>(i??Bu).indexOf(e.type)!==-1,Ws=(e,i,n,s,o=Hu)=>{if(n&&i.length+e.length>n)return G.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Of(e[a],s)?e[a].size>Cf(o)?(G.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),G.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>Qa(r))}`,type:"failure",time:5e3}),i)},Af=p.label`
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
`,De=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Df=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=x=>{const b=x.target.files;b!=null&&b.length&&n(Ws(b,e,i,o,a))},h=x=>{x.preventDefault()},f=x=>{x.preventDefault(),d(!1);const b=x.dataTransfer.files;b.length&&n(Ws(b,e,i,o,a))},g=x=>{x.preventDefault(),d(!0)},m=x=>{x.preventDefault(),d(!1)};return t.jsxs(Af,{isActive:s,showPulse:c,onDragOver:x=>s&&h(x),onDragEnter:x=>s&&g(x),onDragLeave:x=>s&&m(x),onDrop:x=>s&&f(x),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(wn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(wn,{className:"icon-1"}),t.jsx(wn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(se,{align:"center",children:t.jsx(De,{words:[`Форматы: ${o?o.map(x=>Qa(x)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Nf=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},If=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Rf=p.div`
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
`,Lf=({file:e,files:i,setFiles:n})=>{const{open:s}=te(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(ns,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>st.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(If(r,e.name,i))});return t.jsxs(Rf,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(ep,{}):t.jsx(tp,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(se,{fontSize:"0.7em",children:Nf(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Ke,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},zf=({files:e,setFiles:i})=>t.jsx(Ee,{title:"Список файлов",visible:!!e.length,onDelete:()=>st.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Lf,{file:n,files:e,setFiles:i},n.name))}),Za=e=>t.jsxs(Ee,{gap:12,children:[t.jsx(Df,{...e}),t.jsx(zf,{files:e.files,setFiles:e.setFiles})]}),Mf=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Ff=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Mf,{children:[t.jsx(Je,{...e}),n&&t.jsx(Za,{...i})]}),Bf=p.div`
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
`,er=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=oe(u,"extraWeird")}return t.jsxs(Bf,{children:[t.jsx(H,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(Q,{title:"Внимание",type:"alert",icon:t.jsx(xi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(pt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(pt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Hf=e=>{var x,b,y;const{width:i}=ln(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,d]=l.useState(0),[u,h]=l.useState(0),f=((x=n.current)==null?void 0:x.clientWidth)??1,g=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(f+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(y=n.current)==null?void 0:y.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:d,pageOffset:f,amountOfPages:g,currentPage:u,setCurrentPage:h,handleScroll:$=>{h(Math.ceil($.currentTarget.scrollLeft/(f+(e??0))))}}},Uf=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:f,showPages:g,innerPadding:m,minWidth:x,wrapOnMobile:b,position:y,direction:$="vertical",verticalAlign:w="top",horizontalAlign:S="left",scroll:T=!0,visible:R=!0,...I}=e;if(!R)return null;const{listRef:N,leftArrow:J,rightArrow:L,handleScroll:ne,setScrollLeft:ge,pageOffset:je,amountOfPages:Re,currentPage:qe}=Hf(s);return t.jsxs(mg,{padding:r,position:y,width:o,minWidth:x,height:a,children:[t.jsxs(H,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(_,{icon:t.jsx(jt,{}),width:"35px",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(_,{width:"50px",height:"15px",background:j.blue.transparent3,textColor:j.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(an,{verticalAlign:w,horizontalAlign:S,direction:$,ref:N,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:T,wrapOnMobile:b,onScroll:ne,...I,children:n}),(L||J)&&t.jsxs("div",{className:"bottom-wrapper",children:[J&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(_i,{}),className:"left-button",textColor:j.grey.main,onClick:()=>{ge(ue=>{var Pe;return ut(ue-je-(s??0),((Pe=N.current)==null?void 0:Pe.scrollWidth)??0)})}}),g&&t.jsx(Ka,{direction:"horizontal",current:qe,amount:Re}),L&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(gt,{}),className:"right-button",textColor:j.grey.main,onClick:()=>{ge(ue=>{var Pe;return ut(ue+je+(s??0),((Pe=N.current)==null?void 0:Pe.scrollWidth)??0)})}})]})]})},Ee=le.memo(Uf),Wf=()=>t.jsx("div",{className:"left",children:t.jsxs(Ee,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(rn,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Ee,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:ys,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(mi,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:_l,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ip,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:vl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(xi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:wl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(xi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(fe,{}),t.jsx(Z,{to:yl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(np,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Si,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(en,{}),align:"left",padding:"0",width:"100%",href:`${z}/index.php`})]})}),Vf=()=>{const{search:e}=Ht();return le.useMemo(()=>new URLSearchParams(e),[e])},Gf=()=>{const e=Vf(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=Pt.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},m=b=>{Pt.changeSavePassword({savePassword:b})},x=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:m,handleKeyPress:g,handleLogin:x,setPassword:r,setLogin:o}},qf=()=>{const{loading:e,error:i,data:n}=ve.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:f,setLogin:g}=Gf();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Ee,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(rn,{width:"50px",short:!0,className:"logo second"}),t.jsx(P,{jc:"space-between",children:t.jsx(H,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(Q,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Ee,{gap:16,scroll:!1,children:[t.jsx(H,{size:4,align:"left",children:"Вход"}),t.jsx(se,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(Q,{type:"failure",visible:!!i,children:i}),t.jsx(Q,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(pt,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(pt,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Je,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(St,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Yf=p(Ze)`
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
`,Jf=()=>{const{data:{isAuthenticated:e}}=ve.useUser();return t.jsxs(Yf,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Wf,{}),t.jsx(qf,{})]})},Xf=p.div`
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
`,Kf=()=>t.jsx(Xf,{children:t.jsx(Jf,{})}),we=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(he,{text:i,children:o&&t.jsx("a",{href:`${z}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(en,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Qf="modulepreload",Zf=function(e){return"/"+e},Vs={},v=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Zf(a),a in Vs)return;Vs[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":Qf,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},ex=l.lazy(()=>v(()=>import("./index-1588479f.js"),["assets/index-1588479f.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),tx=l.lazy(()=>v(()=>import("./index-fd3debaf.js"),["assets/index-fd3debaf.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/index-d4f6672e.js"])),ix=l.lazy(()=>v(()=>import("./index-e06015cc.js"),["assets/index-e06015cc.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js"])),nx=l.lazy(()=>v(()=>import("./index-67a7e4bd.js"),["assets/index-67a7e4bd.js","assets/vendor-f1fdae2f.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Ob),void 0));const sx=l.lazy(()=>v(()=>import("./index-1d518c02.js"),["assets/index-1d518c02.js","assets/vendor-f1fdae2f.js","assets/index-c89feeb2.js"])),ox=l.lazy(()=>v(()=>import("./index-593a2ec3.js"),["assets/index-593a2ec3.js","assets/vendor-f1fdae2f.js","assets/index-7d18a486.js"])),ax=l.lazy(()=>v(()=>import("./index-8bded386.js"),["assets/index-8bded386.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),rx=l.lazy(()=>v(()=>import("./index-c4e72253.js"),["assets/index-c4e72253.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),lx=l.lazy(()=>v(()=>import("./index-09aac703.js"),["assets/index-09aac703.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/index-d4f6672e.js"])),cx=l.lazy(()=>v(()=>import("./index-fc510f5f.js"),["assets/index-fc510f5f.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d4f6672e.js"])),dx=l.lazy(()=>v(()=>import("./index-a1455aa2.js"),["assets/index-a1455aa2.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/index-d4f6672e.js"])),px=l.lazy(()=>v(()=>import("./index-de49f424.js"),["assets/index-de49f424.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-d4f6672e.js"])),ux=l.lazy(()=>v(()=>import("./index-fc250369.js"),["assets/index-fc250369.js","assets/vendor-f1fdae2f.js","assets/ui-e9d412fb.js","assets/index-89192f0a.js"])),hx=l.lazy(()=>v(()=>import("./index-f16a9901.js"),["assets/index-f16a9901.js","assets/vendor-f1fdae2f.js","assets/ui-e9d412fb.js"])),gx=l.lazy(()=>v(()=>import("./index-f6e999ae.js"),["assets/index-f6e999ae.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d4f6672e.js"])),fx=l.lazy(()=>v(()=>import("./index-2d648d24.js"),["assets/index-2d648d24.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/index-d4f6672e.js"])),xx=l.lazy(()=>v(()=>import("./index-719671cd.js"),["assets/index-719671cd.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-d4f6672e.js"])),mx=l.lazy(()=>v(()=>import("./index-14bfd3c3.js"),["assets/index-14bfd3c3.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d4f6672e.js"])),bx=l.lazy(()=>v(()=>import("./index-a6e47246.js"),["assets/index-a6e47246.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-d4f6672e.js"])),yx=l.lazy(()=>v(()=>import("./index-994d2ce7.js"),["assets/index-994d2ce7.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/index-d4f6672e.js"])),vx=l.lazy(()=>v(()=>import("./index-9813584a.js"),["assets/index-9813584a.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-d4f6672e.js"])),_x=l.lazy(()=>v(()=>import("./index-488da93a.js"),["assets/index-488da93a.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),wx=l.lazy(()=>v(()=>import("./index-15d4b8f3.js"),["assets/index-15d4b8f3.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d4f6672e.js"])),jx=l.lazy(()=>v(()=>import("./index-6ba2d834.js"),["assets/index-6ba2d834.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d4f6672e.js"])),kx=l.lazy(()=>v(()=>import("./index-e47fb0f6.js"),["assets/index-e47fb0f6.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-d4f6672e.js"])),Sx=l.lazy(()=>v(()=>import("./index-fa3705f2.js"),["assets/index-fa3705f2.js","assets/vendor-f1fdae2f.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/index-d4f6672e.js"])),Tx=l.lazy(()=>v(()=>import("./index-c84893f9.js"),["assets/index-c84893f9.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ex=l.lazy(()=>v(()=>import("./index-46a408d9.js"),["assets/index-46a408d9.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),$x=l.lazy(()=>v(()=>import("./index-487a2778.js"),["assets/index-487a2778.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Px=l.lazy(()=>v(()=>import("./index-7b3834dc.js"),["assets/index-7b3834dc.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Cx=l.lazy(()=>v(()=>import("./index-23b93671.js"),["assets/index-23b93671.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ox=l.lazy(()=>v(()=>import("./index-09f33997.js"),["assets/index-09f33997.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ax=l.lazy(()=>v(()=>import("./index-9039e203.js"),["assets/index-9039e203.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Dx=l.lazy(()=>v(()=>import("./index-463f3697.js"),["assets/index-463f3697.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Nx=l.lazy(()=>v(()=>import("./index-500ad5dc.js"),["assets/index-500ad5dc.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ix=l.lazy(()=>v(()=>import("./index-cd6398fe.js"),["assets/index-cd6398fe.js","assets/vendor-f1fdae2f.js","assets/index-d4f6672e.js","assets/index-4b9084b7.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),Rx=l.lazy(()=>v(()=>import("./index-294fa294.js"),["assets/index-294fa294.js","assets/vendor-f1fdae2f.js"]));l.lazy(()=>v(()=>import("./index-582ebe2c.js"),["assets/index-582ebe2c.js","assets/vendor-f1fdae2f.js","assets/index-9d730397.js","assets/index-89192f0a.js"]));const as=l.lazy(()=>v(()=>import("./index-92519bba.js"),["assets/index-92519bba.js","assets/vendor-f1fdae2f.js"])),Lx=l.lazy(()=>v(()=>import("./index-a72a8e4e.js"),["assets/index-a72a8e4e.js","assets/vendor-f1fdae2f.js"])),zx=l.lazy(()=>v(()=>import("./index-494151c8.js"),["assets/index-494151c8.js","assets/vendor-f1fdae2f.js"])),Mx=l.lazy(()=>v(()=>import("./index-7e74ea40.js"),["assets/index-7e74ea40.js","assets/vendor-f1fdae2f.js"])),Fx=l.lazy(()=>v(()=>import("./index-8337a281.js"),["assets/index-8337a281.js","assets/vendor-f1fdae2f.js"])),Bx=l.lazy(()=>v(()=>import("./index-6a0fedd7.js"),["assets/index-6a0fedd7.js","assets/vendor-f1fdae2f.js"])),Hx=l.lazy(()=>v(()=>import("./index-6744d007.js"),["assets/index-6744d007.js","assets/vendor-f1fdae2f.js","assets/get-default-subdivision-17957fb0.js"])),Ux=l.lazy(()=>v(()=>import("./index-67473713.js"),["assets/index-67473713.js","assets/vendor-f1fdae2f.js","assets/get-default-subdivision-17957fb0.js"])),Wx=l.lazy(()=>v(()=>import("./index-676eec34.js"),["assets/index-676eec34.js","assets/vendor-f1fdae2f.js"])),Vx=l.lazy(()=>v(()=>import("./index-7d254003.js"),["assets/index-7d254003.js","assets/vendor-f1fdae2f.js","assets/send-hr-form-work-transfer-c1df8541.js"])),Gx=l.lazy(()=>v(()=>import("./index-9cfe47b9.js"),["assets/index-9cfe47b9.js","assets/vendor-f1fdae2f.js","assets/send-hr-form-work-transfer-c1df8541.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>u0),void 0));l.lazy(()=>v(()=>import("./index-ab460507.js"),["assets/index-ab460507.js","assets/vendor-f1fdae2f.js","assets/BoldText-f34d4292.js","assets/help-links-61b97769.js"]));const qx=l.lazy(()=>v(()=>import("./index-ffd18c5c.js"),["assets/index-ffd18c5c.js","assets/vendor-f1fdae2f.js"])),tr=l.lazy(()=>v(()=>import("./index-5c5ae50e.js"),["assets/index-5c5ae50e.js","assets/vendor-f1fdae2f.js","assets/index-9d730397.js","assets/index-89192f0a.js"])),ir=l.lazy(()=>v(()=>import("./index-582ebe2c.js"),["assets/index-582ebe2c.js","assets/vendor-f1fdae2f.js","assets/index-9d730397.js","assets/index-89192f0a.js"])),Yx=l.lazy(()=>v(()=>import("./index-832fd3f4.js"),["assets/index-832fd3f4.js","assets/vendor-f1fdae2f.js"]));l.lazy(()=>v(()=>import("./index-4d99f493.js"),["assets/index-4d99f493.js","assets/vendor-f1fdae2f.js","assets/index.esm-8a5217b6.js"]));const Jx=l.lazy(()=>v(()=>import("./index-abd9fac1.js"),["assets/index-abd9fac1.js","assets/vendor-f1fdae2f.js"])),nr=l.lazy(()=>v(()=>import("./index-855dfcc8.js"),["assets/index-855dfcc8.js","assets/vendor-f1fdae2f.js","assets/help-links-61b97769.js"])),Xx=l.lazy(()=>v(()=>import("./index-c6d8c116.js"),["assets/index-c6d8c116.js","assets/vendor-f1fdae2f.js"])),Kx=l.lazy(()=>v(()=>import("./index-c111f1ec.js"),["assets/index-c111f1ec.js","assets/vendor-f1fdae2f.js","assets/alert-item-3dc70f16.js","assets/is-valid-url-08a91344.js"])),Qx=l.lazy(()=>v(()=>import("./index-7ad5d64e.js"),["assets/index-7ad5d64e.js","assets/vendor-f1fdae2f.js","assets/index-311d84d8.js","assets/alert-item-3dc70f16.js","assets/is-valid-url-08a91344.js"])),Zx=l.lazy(()=>v(()=>import("./index-1ccb9fd8.js"),["assets/index-1ccb9fd8.js","assets/vendor-f1fdae2f.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>xy),void 0));const em=l.lazy(()=>v(()=>import("./index-9d7c1b29.js"),["assets/index-9d7c1b29.js","assets/vendor-f1fdae2f.js"])),sr=l.lazy(()=>v(()=>import("./index-bfe9d064.js"),["assets/index-bfe9d064.js","assets/vendor-f1fdae2f.js","assets/index-311d84d8.js","assets/index-89192f0a.js"])),tm=l.lazy(()=>v(()=>import("./index-33a5885b.js"),["assets/index-33a5885b.js","assets/vendor-f1fdae2f.js","assets/index-7ca5d0fa.js"])),im=l.lazy(()=>v(()=>import("./index-705d16df.js"),["assets/index-705d16df.js","assets/vendor-f1fdae2f.js","assets/index-7ca5d0fa.js"])),nm=l.lazy(()=>v(()=>import("./index-42f660d0.js"),["assets/index-42f660d0.js","assets/vendor-f1fdae2f.js","assets/index-7ca5d0fa.js"])),sm=l.lazy(()=>v(()=>import("./index-5dab6437.js"),["assets/index-5dab6437.js","assets/vendor-f1fdae2f.js"])),om=l.lazy(()=>v(()=>import("./index-b1225390.js"),["assets/index-b1225390.js","assets/vendor-f1fdae2f.js","assets/index.esm-8a5217b6.js"])),am=l.lazy(()=>v(()=>import("./index-f777bfcd.js"),["assets/index-f777bfcd.js","assets/vendor-f1fdae2f.js"])),rm=l.lazy(()=>v(()=>import("./index-5e968e59.js"),["assets/index-5e968e59.js","assets/vendor-f1fdae2f.js"])),lm=l.lazy(()=>v(()=>import("./index-11d9d7d0.js"),["assets/index-11d9d7d0.js","assets/vendor-f1fdae2f.js"])),cm=l.lazy(()=>v(()=>import("./index-592e7e4b.js"),["assets/index-592e7e4b.js","assets/vendor-f1fdae2f.js","assets/index-c89feeb2.js"])),dm=l.lazy(()=>v(()=>import("./index-fd9a187f.js"),["assets/index-fd9a187f.js","assets/vendor-f1fdae2f.js"])),pm=l.lazy(()=>v(()=>import("./index-9bd71845.js"),["assets/index-9bd71845.js","assets/vendor-f1fdae2f.js","assets/help-links-61b97769.js"])),um=l.lazy(()=>v(()=>import("./index-2016c121.js"),["assets/index-2016c121.js","assets/vendor-f1fdae2f.js","assets/help-links-61b97769.js"])),hm=l.lazy(()=>v(()=>import("./index-bf0ad565.js"),["assets/index-bf0ad565.js","assets/vendor-f1fdae2f.js"])),gm=l.lazy(()=>v(()=>import("./index-ab460507.js"),["assets/index-ab460507.js","assets/vendor-f1fdae2f.js","assets/BoldText-f34d4292.js","assets/help-links-61b97769.js"])),fm=l.lazy(()=>v(()=>import("./index-f032cc0e.js"),["assets/index-f032cc0e.js","assets/vendor-f1fdae2f.js"])),xm=p.div`
    width: 100%;
`,mm=()=>t.jsxs(xm,{children:[t.jsx(Y,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(Y,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ge=e=>{const{children:i,skeleton:n=t.jsx(mm,{}),loading:s=!1,...o}=e;return t.jsx(Ze,{...o,className:"block",children:s?n:i})},bm=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},kn=p.div`
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
`,ym=p.div`
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
`,vm=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:f}=bm(c,r);return c.length?t.jsxs(ym,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(kn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(jt,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(kn,{background:g.background,remove:u===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(Ke,{})})]},g.id)}),c.length&&!!n&&t.jsx(kn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Ft=(e,i)=>{switch(i){case"date":return oe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},_m=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,wm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),f=l.useCallback(m=>{var x,b;o(y=>(y&&y[m]&&delete y[m],{...y})),m===((x=i==null?void 0:i.column)==null?void 0:x.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const x=Object.values(s)[0].column;return m={[(x==null?void 0:x.field)??""]:{id:(x==null?void 0:x.field)??"",title:"Фильтр: "+(x==null?void 0:x.title)}},{...m}});else{const m=Object.values(s).find(x=>{var b;return!c[((b=x.column)==null?void 0:b.field)??""]});m&&d(x=>{var $,w;const b=(($=m.column)==null?void 0:$.field)??"",y="Фильтр: "+((w=m.column)==null?void 0:w.title);return x&&(x[b]={id:b,title:y}),{...x}})}i&&d(m=>{var y;const x=((y=i.column)==null?void 0:y.field)??"",b="Поиск";return m?m[x]={id:x,title:b}:m={[x]:{id:x,title:b}},{...m}}),a&&d(m=>{var y;const x=((y=a.column)==null?void 0:y.field)??"",b="Сортировка";return m?m[x]={id:x,title:b}:m={[x]:{id:x,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,x=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&x){const y=e==null?void 0:e.filter($=>be(Ft($[x],m==null?void 0:m.type)).includes(be(Ft(i.value,m==null?void 0:m.type))));h(y)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(x=>!Object.values(s).find(b=>{var y;return x[((y=b.column)==null?void 0:y.field)??""]!==b.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var x;const m=((x=a==null?void 0:a.column)==null?void 0:x.field)??"";a?h(b=>{const y=[...b??[]];return y==null||y.sort(($,w)=>w[m]<$[m]?a.value==="asc"?1:-1:w[m]>$[m]?a.value==="asc"?-1:1:0),y}):(d(b=>{const y=_m(b,"Сортировка");return b&&y&&delete b[y],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},In=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),In(n.children,i)):n?n.children:e},jm=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[m,x]=l.useState(i),[b,y]=l.useState("");l.useEffect(()=>{x(i)});const $=l.useCallback(()=>{d(T=>!T)},[d]),w=l.useCallback(T=>{if(T.children)f.push(T.id.toString()),x(In(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(R=>R.id===T.id)){const R=o.filter(I=>I.id!==T.id);R.length?n(R):n(null)}else n([...o,T]);else n([T]);else n(T);!r&&$(),y(f.join("/"))}s==null||s(T)},[n,f]),S=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?x(i):x(In(i,f)??[])},[f,x]);return Gt(u,()=>{c&&$()}),{handleOpen:$,refElement:u,isOpen:c,multiple:r,handleSelect:w,selectedRoute:b,currentItems:m,route:f,goBack:S,refItems:h,appearance:a}},km=p.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${Me(Wi)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,Sm=p.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${Me(Wi)};

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
`,Tm=p.header`
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
`,Em=p.ul`
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
`,Gs=p.li`
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
`,$m=["isOpen"],Pm=p(sp).withConfig({shouldForwardProp:e=>!$m.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Cm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:f}=jm(e),{isActive:g,width:m,title:x,required:b,selected:y,placeholder:$,size:w="middle"}=e;return t.jsxs(Sm,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:m,size:w,children:[t.jsx(H,{size:4,align:"left",bottomGap:"5px",visible:!!x,required:b,children:x}),t.jsxs(km,{multiple:o,appearance:f,size:w,children:[t.jsx(Tm,{appearance:f,children:o?y?y.map(S=>t.jsxs("div",{className:"header-item",children:[!!S.icon&&t.jsx("span",{className:"icon",children:S.icon}),t.jsx("span",{className:"header-title",children:S.title})]},S.id)):t.jsx("span",{className:"not-chosen multi",children:$??"Не выбрано"}):t.jsx("div",{className:"single-header",children:y?t.jsxs(t.Fragment,{children:[!!y.icon&&t.jsx("span",{className:"icon",children:y.icon}),t.jsx("span",{className:"header-title",children:y.title})]}):t.jsx("span",{className:"not-chosen",children:$??"Не выбрано"})})}),t.jsx(Pm,{isOpen:s})]}),t.jsxs(Em,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:x,children:[!!d.length&&t.jsx(Gs,{isSelected:!1,onClick:S=>{S.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(_i,{}),"Назад"]})},-1),c.map(({id:S,icon:T,title:R,children:I,data:N})=>t.jsxs(Gs,{onClick:J=>{J.stopPropagation(),a({id:S,icon:T,title:R,children:I,data:N})},isSelected:!o&&!!y&&y.title.includes(R),leadingToSelected:r.includes(S.toString()),children:[!!T&&t.jsx("span",{className:"icon",children:T}),t.jsx("span",{className:"select-item-title",children:R}),!!I&&t.jsx("span",{className:"right-icon",children:t.jsx(gt,{})}),o&&!!y&&!!y.find(J=>J.title.includes(R))&&t.jsx("span",{className:"right-icon",children:t.jsx(Zi,{})})]},R))]})]})},or=l.memo(Cm),Om=e=>{switch(e){case"desc":return G.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return G.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return G.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Am=p.div`
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
`,ar=p.div`
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
`,Dm=p.div`
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
`,Nm=p.div`
    display: flex;
    align-items: center;
`,Im=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return Om(h),h?{column:d,value:h}:null})};return t.jsx(Dm,{children:e.map(d=>{var u,h,f,g;return t.jsxs(ar,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(zt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(op,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Nm,{children:t.jsx(or,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(x=>(m&&(x={...x,[d.field]:{column:d,value:m}}),x)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},Rm=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(P,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(_i,{}),onClick:()=>r(ut(n-1,e).toString())}),t.jsxs(P,{w:"fit-content",gap:"6px",children:[t.jsx(pt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(se,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(gt,{}),onClick:()=>r(ut(n+1,e).toString())})]}):null},Lm=p.div`
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
`,yt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Lm,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,zm=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Mm=({obj:e,columns:i})=>t.jsx(zm,{children:i.map(n=>t.jsx(yt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Ft(e[n.field],n.type)},n.title))}),rr=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=te(),r=()=>a(t.jsx(Mm,{obj:n,columns:i||e}),"Информация");return t.jsx(Am,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(ar,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:u=>{c.onClick&&(u.stopPropagation(),c.onClick(n))},children:c.render?c.render(Ft(n[c.field],c.type),n):Ft(n[c.field],c.type)},c.field)})})})},Fm=p.div`
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
`,Bm=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Hm=p.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Um=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),u=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(Bm,{children:t.jsx(Qe,{})}):t.jsxs(Fm,{children:[h==null?void 0:h.map((f,g)=>t.jsx(rr,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(he,{text:"Нет данных"}),u>0&&t.jsx(fe,{margin:"0",width:"100%"}),t.jsx(Hm,{children:t.jsx(Rm,{pages:u,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},Wm=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Vm=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Gm=({search:e,setSearch:i})=>{var n,s;return t.jsx(Wm,{closed:!(e!=null&&e.column),children:t.jsx(pt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Vm((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(zt,{}),minWidth:"auto"})})},qm=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Ym(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Jm=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(qm(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(fe,{}),t.jsx(rr,{onRowClick:()=>null,columns:Ym(s),el:s,index:1})]})},Xm=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,et=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:u,setSearch:h,resultData:f,filter:g,setFilter:m,filterList:x,setFilterList:b,onRemoveOne:y,onRemoveAll:$}=wm(n);return t.jsxs(Xm,{children:[t.jsx(vm,{setList:b,padding:"0 10px",list:x,onRemoveOne:y,onRemoveAll:$}),t.jsx(Gm,{search:u,setSearch:h}),t.jsx(Im,{sort:c,setSort:d,columns:e,search:u,setSearch:h,filter:g,setFilter:m}),t.jsx(Um,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(Jm,{footer:a,data:n,columns:e})]})},vT={ready:"Готово",pending:"В работе",rejected:"Отклонено"},cn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},rs={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},_T=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],wT=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],Km=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(cn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(rs).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Qm=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Zm,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(e0,{columns:Km(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Zm=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,e0=p(et)`
    width: 100%;
`,t0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${Ue()}`},s=await ht({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},i0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(cn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>oe(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(rs).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{t0(i.applicationGuid)}})}}],n0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(o0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(s0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(r0,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(a0,{columns:i0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},s0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,o0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,a0=p(et)`
    width: 100%;
`,r0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,l0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(c0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(n0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(Qm,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},c0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,dn=p.div`
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
`,pn=()=>t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),lr=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ve,{load:()=>Fe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(d0,{children:t.jsxs(dn,{maxWidth:"1500px",children:[t.jsxs(p0,{children:[t.jsx(H,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(pn,{})]}),t.jsx(l0,{})]})})})},d0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,p0=p.div`
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
`,u0=Object.freeze(Object.defineProperty({__proto__:null,default:lr},Symbol.toStringTag,{value:"Module"})),cr=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(cn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>oe(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],dr=k(),pr=k(),ur=M(async()=>{const{data:e}=await pe.get(`Weekend.GetAllHistory?PersonalGuid=${Wt(Ue()??"").IndividualGuid}`);return e.orders});O({clock:dr,target:ur});const Ti=M(async e=>(await pe.post("Weekend.AddWeekend",e)).data);O({clock:pr,target:Ti});const hr=X([]),h0=Ti.pending;O({clock:ur.doneData,target:hr});O({clock:Ti.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:We.evokePopUpMessage});O({clock:Ti.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:We.evokePopUpMessage});const g0={loadBufferHolidayWork:dr,sendBufferHolidayWork:pr},jT={sendBufferHolidayWorkFx:Ti},f0={useBufferHolidayWork:()=>({data:Te(hr),loading:Te(h0)})},x0=()=>{const[e,i]=l.useState(!1);l.useEffect(g0.loadBufferHolidayWork,[]);const{data:n}=f0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(m0,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(b0,{columns:cr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},m0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,b0=p(et)`
    width: 100%;
`,y0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(_0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(v0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(w0,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},v0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,_0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,w0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,j0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(k0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(y0,{info:s,index:o})),t.jsx(x0,{})]}):null},k0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,S0=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ve,{load:()=>Fe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(T0,{children:t.jsxs(dn,{maxWidth:"1500px",children:[t.jsxs(E0,{children:[t.jsx(H,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(pn,{})]}),t.jsx(j0,{})]})})})},T0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,E0=p.div`
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
`,gr=k(),fr=k(),un=M(async()=>{const{data:e}=await pe.get(`Vacation.GetAllHistory?personalGuid=${Wt(Ue()??"").IndividualGuid}`);return e});O({clock:gr,target:un});const qt=M(async e=>(await pe.post("Vacation.AddVacation",e)).data);O({clock:fr,target:qt});const Vi=X(null);O({clock:un.doneData,fn:({employeeVacations:e})=>e,target:Vi});O({clock:qt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:G.evokePopUpMessage});O({clock:qt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:G.evokePopUpMessage});O({clock:qt.doneData,source:Vi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Vi});O({clock:un.failData,fn:e=>{var n;return{message:ts(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:G.evokePopUpMessage});const $0={loadBufferHolidayPlanning:gr,sendBufferHolidayPlanning:fr},kT={sendBufferHolidayPlanningFx:qt},P0={useBufferHolidayPlanning:()=>({data:Te(Vi),loading:Te(qt.pending),getDataLoading:Te(un.pending)})},C0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=0`,n={Authorization:`Bearer ${Ue()}`},s=await ht({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()};var xr=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(xr||{});const ls=()=>[{title:"Дата",field:"vacation",width:"100px",render:e=>{var i;return oe((i=e==null?void 0:e.status)==null?void 0:i.creationDate,"numeric")}},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(Q,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>xr[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),C0(i.documentGuid)}}):"-"}}],O0=()=>[...ls(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${oe((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${oe((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}}],A0=()=>{const{data:e,getDataLoading:i}=P0.useBufferHolidayPlanning(),n=()=>$0.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle})),...o.schedule.map(a=>({...a,jobTitle:o.jobTitle})),...o.spent.map(a=>({...a,jobTitle:o.jobTitle}))]).flat().filter(o=>{if(o.vacation.status.orderStatus!="false"&&o.vacation.status.orderStatus!="")return o.vacation.status.orderStatus}).sort((o,a)=>Io(new Date(o.vacation.status.creationDate),new Date(a.vacation.status.creationDate)));return t.jsx(Ve,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs(P,{jc:"space-between",m:"10px 0",children:[t.jsx(D0,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(jt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(P,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:ls(),columnsExtended:O0(),data:s,maxOnPage:10})})]})})},D0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Sn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},mr=()=>{const e=Ut(),{allRoutes:i}=Be.useMenu(),n=i??{},[s,o]=l.useState(Sn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Sn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Sn(a.pathname,n))}),[e,n]),s},N0={small:"600px",middle:"700px",big:"963px",large:"100%"},br=e=>N0[(e==null?void 0:e.pageSize)??"middle"],I0=p(Ze)`
    position: relative;

    ${ee.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ee.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,R0=p.div`
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
`,L0=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: 40px;
    }
`,Yt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=mr(),r=br(a);return t.jsx(Ts,{padding:"0 0 10px 0",children:t.jsxs(I0,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(R0,{children:i}),n&&t.jsx(L0,{children:n}),e]})})});Yt.displayName="PageBlock";const z0=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications(),n=Ut();return t.jsx(Ve,{load:Fe.getWorkerPosts,error:i,data:e,children:t.jsxs(Yt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Ro,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(A0,{})]})})},M0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(cn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(rs).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],yr=k(),vr=k(),cs=M(async()=>{const{data:e}=await pe.get(`CarryForwardVacation.GetAllHistory?personalGuid=${Wt(Ue()??"").IndividualGuid}`);return e});O({clock:yr,target:cs});const Jt=M(async e=>(await pe.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);O({clock:vr,target:Jt});const Gi=X([]);O({clock:cs.doneData,fn:({employeeVacations:e})=>e,target:Gi});O({clock:Jt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:We.evokePopUpMessage});O({clock:Jt.doneData,source:Gi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Gi});O({clock:cs.failData,fn:e=>{var n;return{message:ts(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:G.evokePopUpMessage});O({clock:Jt.failData,fn:e=>{var n;return{message:ts(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:We.evokePopUpMessage});const qs={loadBufferHolidayTransfer:yr,sendBufferHolidayTransfer:vr},ST={sendBufferHolidayTransferFx:Jt},ds={useBufferHolidayTransfer:()=>({data:Te(Gi),loading:Te(Jt.pending)})},F0=()=>{const[e,i]=l.useState(!1),{data:n}=ds.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(B0,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(H0,{columns:M0(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},B0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,H0=p(et)`
    width: 100%;
`,U0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(V0,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(W0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(q0,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(G0,{columns:ls(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},W0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,V0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,G0=p(et)`
    width: 100%;
`,q0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Y0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=ds.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(J0,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(U0,{info:o,index:a,data:i})),t.jsx(F0,{})]})},J0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,X0=()=>{const{data:e,loading:i}=ds.useBufferHolidayTransfer();return l.useEffect(()=>{qs.loadBufferHolidayTransfer()},[]),t.jsx(Ve,{load:qs.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(K0,{children:t.jsxs(dn,{maxWidth:"1500px",children:[t.jsxs(Q0,{children:[t.jsx(H,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(pn,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(Y0,{})]})})})},K0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Q0=p.div`
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
`,Z0=e=>localStorage.setItem("age",e.toString()),TT=e=>localStorage.getItem(e),eb=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),tb={listMedicalExamination:null,error:null},It=M(async()=>{const e=await pe.get(`MedicalExamination.GetAllHistory?PersonalGuid=${Wt(Ue()??"").IndividualGuid}`);try{return Z0(e.data.age),eb(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),hn=M(async e=>{try{const i=await pe.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),ib=()=>{const{listMedicalExamination:e,error:i}=Te(nb);return{data:e,loading:Te(It.pending),error:i}};k();Ie({from:hn.doneData,to:It});O({clock:hn.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success",time:0}),target:We.evokePopUpMessage});O({clock:hn.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e3}),target:We.evokePopUpMessage});const nb=X(tb).on(It,e=>({...e,error:null})).on(It.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(It.failData,(e,i)=>({...e,error:i.message})),sb={loadBufferMedicalExaminationFx:It,sendBufferMedicalExaminationFx:hn},ob={useBufferMedicalExamination:ib},ab=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/MedicalExamination.DownloadFile?DocumentGuid=${e}&Type=0`,n={Authorization:`Bearer ${Ue()}`},s=await ht({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},_r=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${oe(i==null?void 0:i.startDate,"numeric")} - ${oe(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),ab(i==null?void 0:i.documentGuid)}}):"-"}],rb=()=>[..._r(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"}],lb=()=>{const{data:e,loading:i}=ob.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=ye.useApplications(),s=e&&e.map(o=>{const a=n&&n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().filter(o=>{if(o.orderStatus!="false"&&o.orderStatus!="")return!0}).sort((o,a)=>Io(new Date(o.creationDate),new Date(a.creationDate)));return t.jsxs(Ve,{load:sb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs(P,{jc:"space-between",m:"10px 0",children:[t.jsx(cb,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(jt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(P,{w:"100%",jc:"center",ai:"center",children:t.jsx(Qe,{})}):t.jsx(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(et,{columns:_r(),columnsExtended:rb(),data:s,maxOnPage:10})})]})},cb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,db=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications();return t.jsx(Ve,{load:Fe.getWorkerPosts,error:i,data:e,children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(lb,{})]})})},wr=k(),jr=k(),kr=M(async()=>{const{data:e}=await pe.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${Wt(Ue()??"").IndividualGuid}`);return e.employeeHistories});O({clock:wr,target:kr});const Ei=M(async e=>(await pe.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);O({clock:jr,target:Ei});const Sr=X([]),pb=Ei.pending;O({clock:kr.doneData,target:Sr});O({clock:Ei.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:We.evokePopUpMessage});O({clock:Ei.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:We.evokePopUpMessage});const ub={loadBufferWorkTransfer:wr,sendBufferWorkTransfer:jr},ET={sendBufferWorkTransferFx:Ei},hb={useBufferWorkTransfer:()=>({data:Te(Sr),loading:Te(pb)})},gb=()=>{const[e,i]=l.useState(!1);l.useEffect(ub.loadBufferWorkTransfer,[]);const{data:n}=hb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(fb,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(xb,{columns:cr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},fb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,xb=p(et)`
    width: 100%;
`,mb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ge,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(yb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(ft,{}):t.jsx(He,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(bb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(vb,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},bb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,yb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,vb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,_b=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(wb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(mb,{info:s,index:o})),t.jsx(gb,{})]}):null},wb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,jb=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ve,{load:()=>Fe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(kb,{children:t.jsxs(dn,{maxWidth:"1500px",children:[t.jsxs(Sb,{children:[t.jsx(H,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(pn,{})]}),t.jsx(_b,{})]})})})},kb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Sb=p.div`
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
`,Tb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${oe(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${oe(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${oe(e[0])} по ${oe(e[1])}`},Eb=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,ps=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=dt.selectors.useData();return r?t.jsxs(Eb,{children:[t.jsx(H,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(er,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(Q,{type:"info",title:Tb(n)??"",icon:t.jsx(Xe,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(H,{size:4,align:"left",children:c.title}),t.jsx(Si,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(Xn,{}),width:"170px",background:j.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(fe,{})]},c.title)})]})]}):null},$b=()=>{const{data:e}=dt.selectors.useData();return t.jsx(ps,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Pb=()=>{const{data:e}=dt.selectors.useData();return t.jsx(ps,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Cb=()=>{const{data:e}=dt.selectors.useData();return t.jsx(ps,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},Tr=()=>{var i;const{data:e}=dt.selectors.useData();return t.jsx(Ts,{padding:"10px",children:t.jsx(Yt,{children:t.jsx(_s,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Cb,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx($b,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Pb,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(we,{oldVersionUrl:my}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Ob=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"})),Ab=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Er=k(),$r=k(),Pr=k(),Bt=M(async()=>{const e=await ih();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),us=M(async e=>{try{return await sh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),$i=M(async e=>{const i=await nh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});O({clock:$i.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:G.evokePopUpMessage});O({clock:$i.doneData,fn:()=>!0,target:$r});O({clock:$i.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:G.evokePopUpMessage});O({clock:Er,target:$i});const Cr=k(),Or=k(),Db=Yn($i.pending,Bt.pending,Boolean),Nb=X(!1).on(Pr,(e,i)=>i),Ib=X(!1).on($r,(e,i)=>i),Rb=X(null).on(Bt,()=>null).on(Bt.failData,(e,i)=>i.message).on(us.failData,(e,i)=>i.message),Lb=X(null).on(Bt.doneData,(e,i)=>i).on(us.doneData,(e,i)=>Ab(e,i,!1)).on(Cr,()=>null),ot={$loading:Db,$completed:Nb,$done:Ib,$error:Rb,$paymentsStore:Lb};Ie({from:Or,to:Bt});const hs={getPaymentsFx:Bt,signContractFx:us},Rn={signAgreement:Er,setCompleted:Pr,clearStore:Cr,getPayments:Or},zb=Object.freeze(Object.defineProperty({__proto__:null,effects:hs,events:Rn,stores:ot},Symbol.toStringTag,{value:"Module"})),Mb=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Fb=p.div`
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
`,Bb=({date:e,value:i})=>t.jsxs(Fb,{children:[t.jsxs(P,{gap:"16px",children:[t.jsx(mt,{color:"grey",size:33,children:t.jsx(ct,{})}),t.jsxs(P,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(se,{children:oe(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(ct,{})," "]})]}),Hb=p.div`
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
`,Ar=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Hb,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(ct,{})]})},Ub=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Wb=p.div`
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
`,Vb=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Ub(s.value),0).toFixed(1);return t.jsxs(Wb,{children:[t.jsxs(P,{jc:"space-between",children:[t.jsx(H,{icon:t.jsx(Lo,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(se,{fontSize:"1rem",width:"fit-content",children:t.jsx(Ar,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(he,{size:"50px",text:"Нет платежей",image:t.jsx(zo,{})}),e.map((n,s)=>l.createElement(Bb,{...n,key:s}))]})]})},Dr=()=>t.jsx(Q,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Gb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),qb=p.div`
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
`,Yb=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d}=e,{open:u}=te(),[h,f]=l.useState(!1),[g,m]=l.useState(!1),[x,b]=l.useState(!1),y=wi(ot.$error),$=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:oe(n)},{text:"Действует до",info:oe(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Gb(a)??""},{text:"Статус",info:""}],w=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),f(!0)},S=()=>{e&&(m(!0),hs.signContractFx(e.id),m(!1),b(!0))},T=()=>{u(t.jsx(Dr,{}),"Не получается подписать")};return t.jsxs(qb,{children:[t.jsx("div",{className:"contract-info",children:$.map(({info:R,text:I})=>t.jsx(yt,{keyStr:I,value:R},R))}),r&&t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(St,{text:"Подписать договор",buttonSuccessText:"Подписан",action:S,isLoading:g,completed:x,repeatable:!1,popUpFailureMessage:y??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:T,text:"Не получается подписать?",background:"transparent",textColor:j.grey.main})]}),!r&&t.jsxs(P,{gap:"8px",children:[t.jsx(St,{text:"Скопировать номер договора",action:w,isLoading:!1,completed:h,setCompleted:f,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Si,{onClick:()=>null,href:c??"",icon:t.jsx(Xn,{}),width:"45px"})]})]})},Jb=p.div`
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
`,Xb=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Jb,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Mo,{style:{color:"var(--green)"}}):t.jsx(Fo,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(He,{}),onClick:()=>null,background:"transparent"})]}),Kb=p.div`
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
`,Qb=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(Kb,{height:s,open:r,children:[t.jsx(Xb,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},Zb=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,ey=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=wi([ot.$done,ot.$completed,ot.$loading]),h=s||c?140:100,f=()=>Rn.signAgreement(n),g=Rn.setCompleted;return t.jsxs(Qb,{height:h,title:o,confirmed:s||c,children:[t.jsxs(Zb,{children:[t.jsxs(P,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(H,{size:5,align:"left",children:o}),t.jsx(se,{children:oe(r)})]}),t.jsxs(P,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Si,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Xn,{}),isActive:!!e.file}),!(s||c)&&t.jsx(St,{text:s||c?"Подписано":"Подписать",action:f,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(Q,{type:"success",title:"Подписано",icon:t.jsx(Zi,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(se,{children:["Дата подписания: ",oe(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},ty=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Ee,{width:"100%",children:[t.jsx(H,{size:4,align:"left",icon:t.jsx(ap,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(Dr,{}),t.jsx(Q,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(ey,{data:s,isContractSigned:n},o))]}),iy=p.div`
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
`,Ri=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(iy,{children:t.jsx(ns,{loading:i,width:"300px",height:"300px",src:e??""})})},ny=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,sy=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Ri,{qrCode:e}):n===1?t.jsx(Ri,{qrCode:i}):t.jsx(ny,{children:t.jsx(_s,{pages:[{title:"Текущая залолженность",content:t.jsx(Ri,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(Ri,{qrCode:i})}],appearance:!1,currentPage:n})}),oy=({type:e="horizontal",...i})=>{const{open:n}=te(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${j.green.main}, ${j.green.dark1})`,a=()=>{n(t.jsx(sy,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(rp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},ay=({debt:e,size:i="big"})=>{const n=e>0?j.red.main:j.green.main;return t.jsx(Ar,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},Tn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Xt=()=>{const e=Wu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Tn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Tn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Tn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},ry=p.div`
    width: 100%;
`,ly=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,cy=p.div`
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
`,dy=p.div`
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
`,py=p.div`
    position: relative;
`,uy=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=Xt(),{open:h}=te(),[f,g]=l.useState(0),m=f===0?+n:+s,x=m>0,b=x?f===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",y=f===0?`На ${oe(new Date)}`:`До ${oe(o)}`,$=()=>{h(t.jsx(Yb,{contract:i}),"Реквизиты договора")};return t.jsxs(ry,{children:[t.jsx(H,{icon:t.jsx(lp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(ly,{children:[t.jsx(os,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(cy,{children:[t.jsxs(P,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(ay,{debt:m}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(H,{size:3,align:"left",children:b}),t.jsx(se,{children:y})]})]}),x?t.jsx(oy,{currentPage:f,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(za,{color:"green",size:"40px"})]}),t.jsxs(dy,{children:[r&&t.jsx(Si,{text:"Квитанция на оплату",background:"transparent",textColor:j.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(py,{children:[t.jsx(_,{onClick:$,text:"Реквизиты договора",background:"transparent",textColor:j.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(Tt,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Nr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,hy=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Ft(String(o),"rub")})`},gy=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Nr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:hy}],fy=({paygraph:e})=>t.jsxs(P,{d:"column",children:[t.jsx(H,{icon:t.jsx(cp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(et,{columns:gy(),data:e??[],maxOnPage:3})]}),Li=({contracts:e})=>e?t.jsx(Mb,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user:d}=i,u=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[e.length!==1&&t.jsxs(P,{gap:"8px",children:[t.jsx(P,{w:"fit-content",children:t.jsxs(H,{size:3,align:"left",children:["Договор:"," "]})}),t.jsxs(se,{fontSize:"1rem",children:[a,", ",o]})]}),t.jsx(uy,{data:i}),t.jsx(Vb,{payments:c??[]}),t.jsx(fy,{paygraph:r}),t.jsx(ty,{isDormitory:u,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(fe,{margin:"0",width:"100%"})]},o)})}):null,gs=()=>{const[e,i,n]=wi([ot.$error,ot.$loading,ot.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{G.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(Ve,{loading:i,load:hs.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(he,{text:"Нет данных"}),s==="both"&&t.jsx(_s,{pages:[{title:"Общежитие",content:t.jsx(Li,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Li,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Li,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Li,{contracts:n==null?void 0:n.education})]})})},xy=Object.freeze(Object.defineProperty({__proto__:null,default:gs},Symbol.toStringTag,{value:"Module"})),C="/applications",re="/hr-applications",Ys="/staff_orders",Js="/staff_blanks",my="/ad_logins",fs="/doclist",Xs="/pps_vote2020",by="/children",Ir="/pps_contest",yy="/electronic-statements",xe="/onboarding",vy="/structure-of-the-university",_y="/addresses-and-contacts",wy="/brandbook",jy="/wifi-at-the-university",ky="/health-care",Sy="/psychological-help",Ty="/social-environment",Ey="/vacation",ei="/kpi_pps",ti="/kpi_admin",Ks="/sc_news",Qs="/oop",Zs="/centers",$y="/helpful-information",Py="/download-agreements",eo="/physical-education/main",Cy="/physical-education/student/:studentId",Rr=C+"/contact-info-actualization",Lr=C+"/data-verification",zr=C+"/issuance-of-licenses",Mr=C+"/getting-computer-equipment",Fr=C+"/connecting-computer",Br=C+"/printer-maintenance",Hr=C+"/question-sed",Ur=C+"/question-personal-account",Wr=C+"/other-it-services",Vr=C+"/certificate-from-the-place-of-work",Gr=C+"/visa-certificate",qr=C+"/certificate-of-work-experience",Yr=C+"/number-of-unused-vacation-days",Jr=C+"/copy-of-the-employment-record",Xr=C+"/copies-of-documents-from-the-personal-file",Kr=C+"/work-on-the-terms-of-external-concurrency",Qr=C+"/certificate-time-parental-leave",Zr=C+"/arbitrary-request",el=C+"/courier",tl=C+"/persona-income-tax-reference",il=C+"/payment-of-child-birth-allowance",nl=C+"/payment-for-child-care",sl=re+"/part-time-employment/",Oy=re+"/dismissal/:id",Ay=re+"/work-transfer/:id",Dy=re+"/extra-holiday-coll",Ny=re+"/holiday-planning",Iy=re+"/holiday-transfer/:id",Ry=re+"/holiday-work/:id",Ly=re+"/work-transfer-change-rate/:id",zy=re+"/medical-examination",Ln=re+"/buffer-dismissal",zn=re+"/buffer-holiday-planning",Mn=re+"/buffer-holiday-transfer",Fn=re+"/buffer-holiday-work",Bn=re+"/buffer-medical-examination",Hi=re+"/buffer-work-transfer",ol=C+"/living-in-residential-premises",al=C+"/guests-accomodation-on-campus",rl=C+"/guests-passage-to-campus",ll=C+"/relocation",cl=C+"/termination-of-agreement",dl=C+"/issuance-of-pass",pl=C+"/guest-pass",ul=C+"/certification-and-issuance-of-docs",hl=C+"/deferment-from-conscription",gl=C+"/certified-copies-of-military-docs",F=()=>we({oldVersionUrl:"/sprav"}),to=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(K,{}),path:xe,Component:gm,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...$l,"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(Lo,{}),path:Py,Component:Tr,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(xp,{}),path:by,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"]},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(K,{}),path:yy,Component:()=>(le.useEffect(()=>{window.location.replace(`${z}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Bo,{}),path:jl,Component:()=>(le.useEffect(()=>{window.location.replace(`${z}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(ct,{}),path:qi,Component:gs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(K,{}),path:Ir,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Ho,{}),path:ei,Component:()=>(le.useEffect(()=>{window.location.replace(`${z}/?p=${ei==null?void 0:ei.slice(1,ei.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(mp,{}),path:ti,Component:()=>(le.useEffect(()=>{window.location.replace(`${z}/?p=${ti==null?void 0:ti.slice(1,ti.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(bp,{}),path:Ks,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Ks}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(D,{}),path:Ys,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Ys}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Mt,{}),path:Js,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Js}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:fs,Component:sx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Ro,{}),path:Ey,Component:Rx,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:eo,pageSize:"big",Component:ux,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(D,{}),color:"pink",show:!1,path:Cy,Component:hx,isTemplate:!1,fallbackPrevPage:eo,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(mi,{}),path:Qs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Qs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(mi,{}),path:Zs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Zs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(D,{}),path:$y,Component:as,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Uo,{}),path:Xs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Xs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:C,Component:A?F:ox,color:"red",isTemplate:!1,pageSize:"large",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(D,{}),path:re,Component:A?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Lx,color:"green",isTemplate:!1,group:"FINANCES_DOCS"}}),io=()=>({...Pl,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:zr,icon:t.jsx(D,{}),color:"blue",Component:A?F:fx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:Ln,icon:t.jsx(D,{}),color:"blue",Component:A?F:lr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Fn,icon:t.jsx(D,{}),color:"blue",Component:A?F:S0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Bn,icon:t.jsx(D,{}),color:"blue",Component:A?F:db,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:zn,icon:t.jsx(D,{}),color:"blue",Component:A?F:z0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:Mn,icon:t.jsx(D,{}),color:"blue",Component:A?F:X0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Hi,icon:t.jsx(D,{}),color:"blue",Component:A?F:jb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:sl,icon:t.jsx(D,{}),color:"blue",Component:A?F:zx,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Ry,icon:t.jsx(D,{}),color:"blue",Component:A?F:Bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Fn},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:zy,icon:t.jsx(D,{}),color:"blue",Component:A?F:Hx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Bn},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:Ny,icon:t.jsx(D,{}),color:"blue",Component:A?F:Ux,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:zn},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Iy,icon:t.jsx(D,{}),color:"blue",Component:A?F:Wx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Mn},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:Ay,icon:t.jsx(D,{}),color:"blue",Component:A?F:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Hi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:Ly,icon:t.jsx(D,{}),color:"blue",Component:A?F:Gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Hi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Dy,icon:t.jsx(D,{}),color:"blue",Component:A?F:Fx,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:Oy,icon:t.jsx(D,{}),color:"blue",Component:A?F:Mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Ln},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(D,{}),color:"blue",path:Mr,Component:A?F:gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(D,{}),color:"blue",path:Fr,Component:A?F:cx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(D,{}),color:"blue",path:Br,Component:A?F:_x,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(D,{}),color:"blue",path:Hr,Component:A?F:jx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(D,{}),color:"blue",path:Ur,Component:A?F:wx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(D,{}),color:"blue",path:Wr,Component:A?F:mx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(D,{}),color:"blue",path:Vr,Component:A?F:ex,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(D,{}),color:"blue",path:Gr,Component:A?F:kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(D,{}),color:"blue",path:qr,Component:A?F:rx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(D,{}),color:"blue",path:Yr,Component:A?F:xx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(D,{}),color:"blue",path:Jr,Component:A?F:dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(D,{}),color:"blue",path:Xr,Component:A?F:tx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(D,{}),color:"blue",path:Kr,Component:A?F:Sx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(D,{}),color:"blue",path:Qr,Component:A?F:lx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(D,{}),color:"blue",path:Zr,Component:A?F:ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},courier:{id:"courier",title:"Курьер",icon:t.jsx(D,{}),color:"blue",path:el,Component:A?F:px,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(D,{}),color:"blue",path:tl,Component:A?F:vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(D,{}),color:"blue",path:il,Component:A?F:yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(D,{}),color:"blue",path:nl,Component:A?F:bx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(D,{}),color:"blue",path:Rr,Component:ix,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Lr,Component:nx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(D,{}),color:"blue",path:ol,Component:A?F:Tx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(D,{}),color:"blue",path:al,Component:A?F:Ex,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(D,{}),color:"blue",path:rl,Component:A?F:$x,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(D,{}),color:"blue",path:ll,Component:A?F:Px,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(D,{}),color:"blue",path:cl,Component:A?F:Cx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(D,{}),color:"blue",path:dl,Component:A?F:Ox,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(D,{}),color:"blue",path:pl,Component:A?F:Ax,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(D,{}),color:"blue",path:ul,Component:A?F:Dx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(D,{}),color:"blue",path:hl,Component:A?F:Nx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(D,{}),color:"blue",path:gl,Component:A?F:Ix,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ye,{to:xe})),icon:t.jsx(Mt,{}),isTemplate:!1,path:Ty,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ye,{to:xe})),icon:t.jsx(dp,{}),isTemplate:!1,path:Sy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ye,{to:xe})),icon:t.jsx(pp,{}),isTemplate:!1,path:ky,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ye,{to:xe})),icon:t.jsx(up,{}),isTemplate:!1,path:jy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ye,{to:xe})),icon:t.jsx(hp,{}),isTemplate:!1,path:wy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(gp,{}),path:_y,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ye,{to:xe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(fp,{}),path:vy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ye,{to:xe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:xe,isExternalPage:!0}}),fl="/login",My="/forgot-password",Fy="/medical-certificate",By="/vaccination",pi="/all",xs="/home",ms="/profile",bs="/chat",Hy="/messages",$T=bs+"/:chatId",xl="/electronic-interaction-agreement",qi="/payments",Ot="/schedule",ml="/all-students",Uy="/all-students/:filter",Wy="/all-teachers/:filter",bl="/all-teachers",ys="/feedback",yl="/cant-access",vl="/memo-freshmen",_l="/get-your-login",wl="/memo-teacher",me="/settings",PT=me+"/:id",Vy=me+"/appearance",Gy=me+"/personal",qy=me+"/security",Yy=me+"/home-page",Jy=me+"/customize-menu",Xy=me+"/notifications",Ky="/instructions",jl="/project-activity",kl="/alerts",Sl="/lk-notifications",Tl="/helpful-information",Pi=Ot+"/:page/:filter",El=Ot+"/current",Qy=Ot+"/semestr",Zy=Ot+"/session",ev=Ot+"/retake",tv=Tl+"/:infoType";var iv=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(iv||{});const nv=[{id:0,title:"",icon:"",path:fl,Component:Kf},{id:1,title:"",icon:"",path:My,Component:Xx},{id:2,title:"Обратная связь",icon:t.jsx(mi,{}),path:ys,Component:nr},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(lt,{}),path:yl,Component:Yx},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:_l,Component:dm},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:vl,Component:pm},{id:6,title:"Вниманию сотрудников!",icon:"",path:wl,Component:um}],$l={all:{id:"all",title:"Все разделы",icon:t.jsx(jp,{}),path:pi,Component:qx,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Go,{}),path:me,Component:om,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:fs,Component:cm,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(qo,{}),path:kl,Component:Kx,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Vo,{}),path:xs,Component:Qx,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Yo,{}),path:ms,Component:em,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(tn,{}),path:Sl,Component:fm,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Jo,{}),path:xl,Component:Jx,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(kp,{}),path:bs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Hy}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Ct,{}),path:Ot,menuPath:El,Component:sr,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Mt,{}),path:ml,Component:tr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Uo,{}),path:bl,Component:ir,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(mi,{}),path:ys,Component:nr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Sp,{}),path:Ky,Component:Zx,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(As,{}),path:Fy,Component:hm,color:"blue",isTemplate:!1,group:"GENERAL"},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(As,{}),path:By,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0}},sv={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(Ct,{}),path:El,Component:tm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(Kn,{}),path:Qy,Component:im,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Wo,{}),path:Zy,Component:nm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(Jn,{}),path:ev,Component:sm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Pl={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(Ct,{}),path:Pi,Component:sr,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...sv,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Mt,{}),path:Uy,Component:tr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Mt,{}),path:Wy,Component:ir,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(yp,{}),path:Vy,Component:rm,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(vp,{}),path:Gy,Component:am,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(_p,{}),path:qy,Component:lm,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Vo,{}),path:Yy,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(wp,{}),path:Jy,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(tn,{}),path:Xy,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:me,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:tv,Component:as,color:"grey",isTemplate:!0,show:!1}},Cl=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;ki.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else G.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Ol=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;ki.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},ov=(e,i,n,s)=>{if(i){const o=s.length+Lu;if(n<o){G.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??nn;ki.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else G.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},av=(e,i,n)=>{if(i)if(n.includes(e))G.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{G.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;ki.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},rv=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,lv=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,cv=e=>{var m,x,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Vt.useSettings(),{data:r}=ve.useUser(),c=Be.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(y=>y===i),u=(x=a["settings-customize-menu"].property.pages)==null?void 0:x.find(y=>y===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?sa:nn,f=()=>{Cl(i,a),Ne.close()},g=()=>{ov(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Ne.close()};return t.jsxs(rv,{children:[t.jsxs("div",{className:"top",children:[t.jsx(mt,{color:o,size:22,children:n}),t.jsx(lv,{children:s})]}),t.jsx(fe,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(lt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{Ol(i,a),Ne.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(jt,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),u?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(lt,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>av(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(jt,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},Al=({route:e})=>{var s;const i=j[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ne.open({e:o,height:105,content:t.jsx(cv,{...e})})};return t.jsx(_,{icon:t.jsx(Xo,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Dl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine};function Yi(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Nl=p(Ze)`
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
`,dv=p.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,no=e=>{var R;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:c,isExternalPage:d,isOldLkPage:u,mode:h,id:f,background:g,orientation:m="vertical"}=e,x=m==="vertical",{settings:b}=Vt.useSettings(),y=!!((R=b["settings-home-page"].property.pages)!=null&&R.find(I=>I===f)),$=11,w=l.useMemo(()=>(I,N)=>{const J=I.split(" ")[0];return J.length>N&&J.length!==N+1&&x?`${I.substring(0,N)}-${I.substring(N,I.length)}`:I},[]),{isMobile:S,isTablet:T}=Xt();return t.jsxs(Nl,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:g,children:[(u||d)&&x&&t.jsxs(dv,{children:[u&&t.jsx(en,{title:"Раздел в старом ЛК"}),d&&t.jsx(Ui,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(mt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:c??t.jsx(Tp,{})}),t.jsx("b",{title:a,children:S||T?w(a,$):Yi(w(a,$),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Dl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),h==="use"&&t.jsx(Al,{route:e}),h==="add"?y?t.jsx(_,{icon:t.jsx(Ke,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>Ol(f,b)}):t.jsx(_,{icon:t.jsx(jt,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>Cl(f,b)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},pv=p(Nl)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,CT=()=>t.jsx(Z,{to:pi,onClick:()=>{tt.changeOpen({isOpen:!1,currentPage:pi.slice(1,pi.length)})},children:t.jsx(pv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(mt,{color:"blue",children:t.jsx(Ep,{})}),t.jsx("b",{children:"Все разделы"})]})})}),uv=p(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,hv=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,gv=e=>{const{close:i}=te(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(hv,{width:o==="vertical"?c:"100%",children:t.jsx(no,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),tt.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(uv,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(no,{...e,maxWordLength:r,mode:a})})},fv=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,xv=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(he,{text:"Ничего не было найдено"}):t.jsx(fv,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(gv,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),mv=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(be(s.title).includes(be(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>be(a).includes(be(e))))&&(n[s.id]=s),n},{}),bv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,yv=p(Z)`
    width: 100%;
`,vv=({division:e})=>{const{close:i}=te();return t.jsxs(bv,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(mt,{size:120,color:"purple",children:t.jsx(ai,{})}),t.jsx(se,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(yv,{to:`${bl}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(Ko,{}),width:"100%",text:"Список"})})]})},_v=p.div`
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
`,wv=({division:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(vv,{division:e}),"Подразделение")};return t.jsx(_v,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(ai,{}),t.jsx(se,{fontSize:"1rem",children:e})]}),t.jsx(gt,{})]})})},jv=({divisions:e})=>!e||e.length===0?null:t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(wv,{division:i},i))}),gn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),kv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,so=p(Z)`
    width: 100%;
`,Il=({group:e})=>{const{close:i}=te();return t.jsxs(kv,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(mt,{size:120,color:"lightBlue",children:t.jsx(Qo,{})}),t.jsx(se,{fontSize:"1.2rem",children:e})]}),t.jsxs(P,{gap:"8px",onClick:i,children:[t.jsx(so,{to:gn(Pi,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(Ct,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(so,{to:`${ml}/${e}`,children:t.jsx(_,{icon:t.jsx(Ko,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},Sv=p.div`
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
`,Tv=({group:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Il,{group:e}),"Группа")};return t.jsx(Sv,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",h:"50px",children:[t.jsx(Qo,{}),t.jsx(se,{fontSize:"1rem",children:e})]}),t.jsx(gt,{})]})})},Ev=({groups:e})=>e?t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Tv,{group:i},i))}):null,En=[{title:"Инструкции",links:[{link:z+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:z+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:z+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:z+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:z+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:z+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:z+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:z+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:z+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:z+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:z+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:z+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:z+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:z+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:z+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:z+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:z+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:z+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ie},{link:z+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:z+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie}]},{title:"Положения",links:[{link:z+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ie},{link:z+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ie},{link:z+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ie},{link:z+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ie},{link:z+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ie},{link:z+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ie},{link:z+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ie},{link:z+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ie},{link:z+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ie},{link:z+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ie},{link:z+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ie},{link:z+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ie},{link:z+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ie},{link:z+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ie},{link:z+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ie}]}];var ke=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(ke||{});const Dt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},$v=[{id:ke.information,title:Dt[ke.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:ke.security,title:Dt[ke.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:ke.instructions,title:Dt[ke.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...En[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.regulations,title:Dt[ke.regulations],visible:"staff",content:[{title:"Положения",links:[...En[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.orders,title:Dt[ke.orders],visible:"staff",content:[{title:"Приказы",links:[...En[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ke.courses,title:Dt[ke.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Pv=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Cv=p.div`
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
`,Ov=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(Cv,{children:[t.jsx(H,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Ee,{gap:16,children:s.map(({title:a,href:r,visible:c},d)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+d))})]},n+o))}):null,Av=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Dv=p.div``,Nv=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Rl=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Av,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Dv,{children:e}),t.jsx(Nv,{isOpen:o,children:i})]})},Ll=k(),zl=k(),Iv=X(!1).on(zl,()=>!0).on(Ll,()=>!1),oo={close:Ll,open:zl},Rv={$isModalOpen:Iv},vs=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Lv=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=wi(Rv.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,y)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,y??""])):(r(()=>[b]),o(y?[y]:[])),n(()=>!0),oo.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),oo.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),x=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(vs.Provider,{value:{back:u,open:h,close:f,isOpen:i,canBack:d,component:g,title:m,setComponent:x},children:e})},te=()=>{const{open:e,isOpen:i,...n}=l.useContext(vs);return{open:e,isOpen:i,...n}},zv="2.3.0",Ml=()=>t.jsx(Q,{icon:null,type:"info",title:zv,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Ce=({color:e,children:i})=>t.jsx(mt,{color:e,children:i}),Mv=()=>({info:t.jsx(Ce,{color:"grey",children:t.jsx(Xe,{})}),message:t.jsx(Ce,{color:"red",children:t.jsx(Qn,{})}),alert:t.jsx(Ce,{color:"purple",children:t.jsx(qo,{})}),"payment-dorm":t.jsx(Ce,{color:"green",children:t.jsx(ct,{})}),"payment-ed":t.jsx(Ce,{color:"green",children:t.jsx(ct,{})}),"digital-services":t.jsx(Ce,{color:"red",children:t.jsx(D,{})}),"doc-for-review":t.jsx(Ce,{color:"blue",children:t.jsx(D,{})}),"hr-applications":t.jsx(Ce,{color:"green",children:t.jsx(D,{})}),"kpi-pps":t.jsx(Ce,{color:"pink",children:t.jsx(Ho,{})}),schedule:t.jsx(Ce,{color:"pink",children:t.jsx(Ct,{})}),"version-update":t.jsx(Ml,{}),"electronic-interaction":t.jsx(Ce,{color:"blue",children:t.jsx(Jo,{})})}),Fv=p(Z)`
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
`,Bv=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Hv={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Uv={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},Wv={small:"0px",middle:"1px",large:"2px",big:"3px"},Fl=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:m=!0,fullText:x=!0,maxLetters:b=200,size:y="middle"})=>{const $=oe(o,"short"),{close:w}=te(),[S,T]=l.useState(!1),R=N=>{N.stopPropagation(),N.preventDefault(),f?(T(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},I=()=>{a==null||a(),m&&$t.clearById({id:e,pageId:c}),w()};return t.jsx(Rl,{forceState:!S,bottomMargin:h,children:t.jsxs(Fv,{to:d??"",onClick:I,children:[t.jsx("span",{className:"left-icon",children:Mv()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(se,{fontSize:"0.7rem",children:t.jsx(De,{words:[$??"",s??""]})}),t.jsxs(P,{d:"column",gap:Wv[y],ai:"flex-start",children:[t.jsx(Bv,{fontSize:Hv[y],children:x?i:Yi(i,b)}),t.jsx(se,{fontSize:Uv[y],children:x?n:Yi(n,b)})]})]}),u&&t.jsx(_,{isActive:!(g&&S),icon:t.jsx(Ke,{}),background:"var(--theme-2)",onClick:R,style:{borderRadius:"20px"}})]})})},Bl=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{$t.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(P,{d:"column",children:e.map((o,a)=>l.createElement(Fl,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Ji=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,ao=({people:e,type:i})=>!e||e.length===0?null:t.jsx(P,{d:"column",children:e.map(n=>l.createElement(ws,{name:n.fio,type:i,...n,key:n.id}))}),Vv=()=>{const{allRoutes:e}=Be.useMenu(),{notifications:i,removeNotificationLoading:n}=it.useLkNotifications(),{data:{user:s}}=ve.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>$v.flatMap(({visible:I,content:N})=>I==="staff"&&o||I==="student"&&!o||I==="all"?N:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,f]=l.useState(null),[g,m]=l.useState(null),[x,b]=l.useState(null),[y,$]=l.useState(null),[w,S]=l.useState(null),T=[{title:"Разделы",content:t.jsx(xv,{pages:x,showNotFound:!1}),clear:()=>{b(null)},search:I=>{if(e){const N=mv(I,e);b(N)}},data:x},{title:"Студенты",content:t.jsx(ao,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async I=>{const{data:N}=await Ph(I,"",1,20);m(N.items)}},{title:"Сотрудники",content:t.jsx(ao,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async I=>{const{data:N}=await Sh(I,"",1,20);f(N.items)}},{title:"Группы",content:t.jsx(Ev,{groups:r}),data:r,clear:()=>{c(null)},search:async I=>{const{data:N}=await Ch(I);c(N.items)}},{title:"Подразделения",content:t.jsx(jv,{divisions:d}),data:d,clear:()=>{u(null)},search:async I=>{const{data:N}=await Th(I);u(N.items)}},{title:"Уведомления",content:t.jsx(Bl,{notifications:y,loadingRemove:n}),clear:()=>{$(null)},search:I=>{const N=i.filter(J=>be(J.title).includes(I));$(N)},data:y},{title:"Полезная информация",content:t.jsx(Ov,{blocks:w,isStaff:o}),clear:()=>{S(null)},search:I=>{const N=Pv(I,a);S(N)},data:w}];return[(()=>{const{content:I,clear:N,data:J}=T.reduce((L,ne)=>(Ji(ne.data)&&(L.data.push(ne.data),L.content.push(t.jsxs(t.Fragment,{children:[t.jsx(H,{size:4,align:"left",children:ne.title}),ne.content,t.jsx(fe,{})]}))),L.clear.push(ne.clear),L),{content:[],clear:[],data:[]});return{title:"Все",content:I,clear:()=>N.map(L=>L()),search:async L=>{L.length<=8&&/\d|[-]/g.test(L)?await T[3].search(L):(T[0].search(L),T[5].search(L),T[6].search(L),Ji(T[0].data)===0&&(await T[1].search(L),await T[2].search(L),await T[4].search(L)))},data:J}})(),...T]},Gv=()=>JSON.parse(localStorage.getItem(B.SearchHistory)??"[]"),qv=()=>{const e=Vv(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>Gv(),[]),r=async g=>{e[i].clear();const m=Wa(g)?Ua(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(B.SearchHistory,JSON.stringify(a)))},[c,d,u]=Ya({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!u&&!c.length,f=!!c.length&&!u&&!!Ji(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},Yv=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Ds,{})})):e?n.filter(s=>be(s).includes(be(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Ds,{})})):[],Jv=()=>t.jsxs(P,{gap:"8px",ai:"flex-start",children:[t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),Xv=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,Kv=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=qv(),u=Yv(r,n,d),{isOpen:h}=te();return t.jsx(Xv,{children:t.jsxs(P,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ga,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(os,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(Va,{value:n,setValue:s}),e&&t.jsx(P,{h:"100%",children:t.jsx(he,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(zt,{})})}),!r&&n.length!==0&&!e&&!Ji(c[o].data)&&t.jsx(P,{h:"100%",children:t.jsx(he,{size:"60px",text:"Ничего не было найдено",image:t.jsx(No,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(Jv,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},Qv=p(Ze)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${ee.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,Zv=p.div`
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
`,e1=p(P)`
    @media (max-width: 1000px) {
        display: none;
    }
`,t1=()=>{const e=lf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(Zo,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},Hl=({size:e="large"})=>{const i=t1(),{open:n}=te(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(Kv,{}),"Глобальный поиск");return Ha(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(zt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(Qv,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(se,{align:"left",fontSize:"0.9rem",children:t.jsxs(P,{gap:"8px",children:[t.jsx(zt,{}),"Поиск"]})}),t.jsx(e1,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(Zv,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},Hn=e=>e.split(" ").map(i=>i[0]),Ae=(e,i)=>{const n=Hn(e),s=j[Fu[n[0]]];return s==null?void 0:s[i??"main"]},i1=p.div`
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
`,n1=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ci({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:f,onClick:g,borderRadius:m,background:x}){const[b,y]=l.useState(!0),$=Hn(i)[0]+(Hn(i)[1]??""),{open:w}=te(),S=T=>{f?w(t.jsx(Ci,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(T)};return t.jsxs(i1,{selected:e,width:s,height:o,marginRight:a,background:x??Ae(i),boxShadow:d,border:u,onClick:S,borderRadius:m,children:[n&&b?t.jsx(n1,{loading:"lazy",round:!0,onLoadedData:()=>y(!0),onError:()=>y(!1),src:n}):t.jsx("div",{className:"name",children:$}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Je,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(Tt,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const OT=p.header`
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
`;const AT=p.div`
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
`,s1=p.div`
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
`,DT=p.div`
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
`,NT=p.div`
    margin-top: 50px;
    width: 100%;
`,IT=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,RT=p(Ze)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,LT=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,o1=p.div`
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
`,a1=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(o1,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Sf,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},r1=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,l1=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(r1,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(a1,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Ul=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=xt(),{settings:o}=Vt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx($p,{}):t.jsx(Pp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:x=>s(x)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:x=>s(x)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(x=>!x),i==null||i()};return e==="toggle"?t.jsx(l1,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:j.white.transparent2,icon:t.jsx(s1,{width:"30px",background:j.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},c1=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(P,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(P,{gap:"16px",ai:"center",children:[t.jsx(Y,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),d1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,p1=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=it.useLkNotifications();return l.useEffect(()=>{o&&G.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{$t.clearAllVisible()},[]),t.jsxs(d1,{children:[s.length===0&&!n&&t.jsx(Ts,{height:"100%",children:t.jsx(he,{text:i??"Нет новых уведомлений",image:i?t.jsx(lt,{}):t.jsx(Cp,{}),size:"70px"})}),t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(Q,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Bl,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(c1,{quantity:10})]})},u1=p.div`
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
`,Wl=()=>{const{close:e}=te(),{notifications:i}=it.useLkNotifications(),n=3;return t.jsxs(P,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(p1,{maxNotificationsVisible:n}),t.jsxs(se,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Dl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Sl,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},h1=()=>{const{notifications:e}=it.useLkNotifications(),{open:i}=te(),n=()=>{i(t.jsx(Wl,{}),"Уведомления")};return t.jsxs(u1,{onClick:n,children:[t.jsx(Tt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(tn,{})]})},g1=p.div`
    position: relative;
`,Vl=()=>{const{open:e}=te(),{notifications:i}=it.useLkNotifications(),n=()=>Ne.close(),s=()=>{st.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Pt.logout}),n()},o=()=>{Ne.close(),e(t.jsx(_c,{}),"Что нового")},a=()=>{e(t.jsx(Wl,{}),"Уведомления"),Ne.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Iw,{padding:"8px",size:"small"}),t.jsx(fe,{}),t.jsx(Ul,{type:"h-button"}),t.jsx(fe,{}),t.jsx(Z,{to:ms,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(Yo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(g1,{children:[t.jsx(_,{onClick:a,icon:t.jsx(tn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(Tt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:me,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(Go,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${z}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(en,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(fe,{}),t.jsx(_,{align:"left",icon:t.jsx(Op,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(fe,{}),t.jsx(_,{align:"left",icon:t.jsx(Ml,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},f1=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,x1=({showSearch:e=!1})=>{const{data:{user:i}}=ve.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ne.open({e:s,height:143,content:t.jsx(Vl,{})})};return t.jsxs(f1,{children:[e&&t.jsx(Hl,{size:"icon"}),t.jsx(h1,{}),t.jsx(Ci,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},m1=p.header`
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
`,b1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,y1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,v1=p.div`
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
        max-width: ${b1};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ee.isTablet} {
        max-width: ${y1};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ee.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,_1=()=>{const{pathname:e}=Ht(),[i,n]=l.useState([e]),{action:s}=Ut();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},w1=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=Ut();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Mi,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},j1=({headerVisible:e,currentPage:i})=>{const n=Ut(),s=_1(),o=e||!!(i!=null&&i.planeHeader),a=br(i),r=(u=pi)=>()=>{tt.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(w1,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Mi,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Mi,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Mi,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},k1=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Xt(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=j1({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(m1,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(v1,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(P,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(x1,{showSearch:!0})]})]})},S1=le.memo(k1),T1=p(Z)`
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
`,E1=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Ne.open({e:c,height:143,content:t.jsx(Vl,{})})};return t.jsxs(T1,{to:ms,children:[t.jsx(_,{icon:t.jsx(Xo,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ci,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(H,{size:5,children:e})]})},$1=le.memo(E1),P1=["isCurrent","color"],C1=p(Z).withConfig({shouldForwardProp:e=>!P1.includes(e)})`
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
`,O1=p.div`
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
`,A1=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,D1=p.button`
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
`,N1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(C1,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(Tt,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(Tt,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(Al,{route:e})]})},Gl=le.memo(N1),I1=()=>{const{isOpen:e}=Be.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Ke,{}),onClick:()=>tt.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},R1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(D1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(R1);p.section`
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
`;const L1=()=>{const{leftsideBarRoutes:e}=Be.useMenu(),i=Ht();return e?t.jsx(A1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Gl,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(P,{d:"column",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},z1=le.memo(L1),M1=()=>{const{isOpen:e}=Be.useMenu(),{width:i,height:n}=ln(),{data:{user:s}}=ve.useUser(),{visibleRoutes:o}=Be.useMenu(),a=Ht();return t.jsxs(O1,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:xs,children:t.jsx(rn,{width:"165px"})}),t.jsx($1,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Hl,{size:"small"}),t.jsx(z1,{})]}),t.jsx(Ul,{type:"toggle"}),i<1e3&&t.jsx(I1,{})]})},F1=p.div`
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
`,B1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=va.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{G.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),G.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(F1,{isOpen:e,isClickable:!!o,color:kt[n].color,onClick:a,children:t.jsx(Q,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>G.openPopUpMessage({isOpen:!1}),children:i})})},fn=p.div`
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
`;const H1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(vs);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},U1=p.div`
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
`,W1=p.div`
    padding-top: 30px;
`,V1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=H1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return Ha([27],o),Gt(r,()=>{o()}),t.jsx(fn,{isOpen:c,children:t.jsxs(U1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(_i,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(H,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Ke,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(W1,{children:i})]})})},G1=le.memo(V1),q1=p.div`
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
`,Y1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Sa.useConfirm(),o=l.useRef(null);Gt(o,()=>st.closeConfirm());const a=()=>{n(),st.closeConfirm()},r=()=>{st.closeConfirm()};return t.jsx(fn,{isOpen:e,children:t.jsxs(q1,{isOpen:e,ref:o,children:[t.jsx(H,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Ee,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:j.red.main,background:"transparent",hoverBackground:j.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:j.blue.main,background:"transparent",hoverBackground:j.blue.transparent3})]})]})})},J1=p.div`
    display: flex;
    align-items: ${({align:e})=>Nn(e)};
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
`,X1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:f}=ln(),g=l.useRef(null),m=()=>{var b;g!=null&&g.current&&h(Math.round(((b=g.current)==null?void 0:b.scrollLeft)/f))},x=b=>{var y;h(b),r==null||r((y=e[b])==null?void 0:y.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*b)};return l.useEffect(()=>{x(u)},[i,f]),t.jsxs(J1,{width:n,align:c,maxWidth:o,children:[t.jsx(os,{pages:e.map(({title:b,condition:y})=>({title:b,condition:y})),currentPage:u,setCurrentPage:x,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(he,{text:"Нет данных"})},b.title))})]})},_s=X1,ro=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},lo=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",ql=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},K1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},Q1=p.div`
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
`,Z1=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Q1,{width:i,height:n,color:Ae(e,"dark1"),color2:Ae(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ae(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ae(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ae(e,"light2")})})]})}),e_=p.div`
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
`,t_=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",m=ql(h,n,s,o);return t.jsxs(e_,{children:[t.jsx(Z1,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ci,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(se,{fontSize:"0.9rem",children:t.jsx(De,{words:m})}),t.jsx(yt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(yt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(yt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(yt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(yt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},i_=p.div`
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
`,Yl=e=>{const{children:i}=e;return t.jsxs(i_,{children:[t.jsx(t_,{...e}),t.jsx("div",{className:"buttons",children:i})]})},n_=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,s_=()=>t.jsxs(n_,{children:[t.jsx(Y,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(Y,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(Y,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Jl=e=>{if(e)return()=>{st.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(B.Token,e),location.reload()}})}},o_=e=>{const{close:i}=te(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Ae(s,"main")}, ${Ae(s,"dark1")})`;return t.jsxs(Yl,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:gn(Pi,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(Ct,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(Qn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Jl(n)})]})},a_=e=>{const{close:i}=te(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Ae(s,"dark1")}, ${Ae(s,"main")})`;return t.jsxs(Yl,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:gn(Pi,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(Ct,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(Qn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Jl(n)})]})},r_=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?K1(i):"100%"};

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
            font-size: ${({size:e})=>ro(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${ro(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,ws=e=>{const{open:i}=te(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:m="middle"}=e,x=ql(h,n,d,u);if(f)return t.jsx(s_,{});const b=y=>{r?r(y):h||(Ne.close(),i(n==="staff"?t.jsx(a_,{...e}):t.jsx(o_,{...e})))};return t.jsxs(r_,{orientation:g,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ci,{name:o,avatar:s,width:lo(g,m),height:lo(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(De,{words:x})})]})]})},Xi=e=>{const i=be(e),s=[{keys:["распознаван"],icon:t.jsx(Dp,{})},{keys:["принт"],icon:t.jsx(Np,{})},{keys:["химич"],icon:t.jsx(Ip,{})},{keys:["сервер"],icon:t.jsx(Rp,{})},{keys:["игр"],icon:t.jsx(Lp,{})},{keys:["жизнед"],icon:t.jsx(zp,{})},{keys:["web","веб"],icon:t.jsx(Mp,{})},{keys:["истор"],icon:t.jsx(Fp,{})},{keys:["информат"],icon:t.jsx(Bp,{})},{keys:["информации"],icon:t.jsx(Xe,{})},{keys:["мобильн"],icon:t.jsx(Hp,{})},{keys:["безопасн"],icon:t.jsx(Up,{})},{keys:["автоматиз"],icon:t.jsx(Wp,{})},{keys:["линейн"],icon:t.jsx(Vp,{})},{keys:["обработ"],icon:t.jsx(Gp,{})},{keys:["презентац"],icon:t.jsx(qp,{})},{keys:["операционн"],icon:t.jsx(Zo,{})},{keys:["эконом"],icon:t.jsx(ct,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(Yp,{})},{keys:["анализ"],icon:t.jsx(Jp,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Xp,{})},{keys:["сети","сетей"],icon:t.jsx(Kp,{})},{keys:["матем"],icon:t.jsx(Qp,{})},{keys:["вероятн"],icon:t.jsx(Zp,{})},{keys:["философ"],icon:t.jsx(ea,{})},{keys:["данны"],icon:t.jsx(eu,{})},{keys:["язык"],icon:t.jsx(tu,{})},{keys:["спорт","физичес"],icon:t.jsx(iu,{})},{keys:["проектная"],icon:t.jsx(Pn,{})},{keys:["интеллект"],icon:t.jsx(nu,{})},{keys:["научн"],icon:t.jsx(su,{})},{keys:["предприним"],icon:t.jsx(ou,{})},{keys:["коммуникац"],icon:t.jsx(au,{})},{keys:["управлени"],icon:t.jsx(Zn,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Wo,{})},{keys:["переработ"],icon:t.jsx(ru,{})},{keys:["машин","инжен"],icon:t.jsx(lu,{})},{keys:["проектир","расчет"],icon:t.jsx(cu,{})},{keys:["производ"],icon:t.jsx(zo,{})},{keys:["эколог"],icon:t.jsx(du,{})},{keys:["защит"],icon:t.jsx(pu,{})},{keys:["патент"],icon:t.jsx(uu,{})},{keys:["материал"],icon:t.jsx(hu,{})},{keys:["физик"],icon:t.jsx(gu,{})},{keys:["тайм"],icon:t.jsx(fu,{})},{keys:["практика"],icon:t.jsx(ta,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(Ap,{})},Un={"9:00 - 10:30":j.green,"10:40 - 12:10":j.lightGreen,"12:20 - 13:50":j.blue,"14:30 - 16:00":j.purple,"16:10 - 17:40":j.pink,"17:50 - 19:20":j.red,"18:20 - 19:40":j.orange,"19:30 - 21:00":j.orange,"19:50 - 21:10":j.orange},Xl=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},l_=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,xn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},c_=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=xn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Kl=(e,i,n)=>c_(e)===xn(i.startTime)&&n,yi=e=>e<=9?"0"+e:e,d_=e=>`${yi(Math.floor(e/60))}:${yi(e%60)}`,co=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},p_=p.div`
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
`,u_=p.div`
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
`,h_=p(P)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ee.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,po=p.div`
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
`,g_=p(se)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,f_=p.div`
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
`,x_=p.div`
    color: ${j.red.main};
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
`,m_=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(co(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(co(new Date,s[0]*60,s[1]*60))},es.minute),()=>clearInterval(c.current)),[e]),t.jsx(f_,{currentTime:(a-i)*n,children:o&&t.jsx(x_,{children:d_(a)})})},Ql=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},$e=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(h_,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(po,{shortInfo:o,children:e}),t.jsx(g_,{width:"100%",className:"text",children:i}),t.jsx(po,{shortInfo:o,children:s})]}),b_=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,y_=p(Z)`
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
`,v_=({groups:e})=>{const{close:i}=te();return t.jsx(b_,{children:e.map(n=>t.jsxs(y_,{to:gn(Pi,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Mt,{}),n]}),t.jsx(gt,{})]},n))})},__=({icon:e,background:i,noPadding:n=!1})=>t.jsx(p_,{background:i,noPadding:n,children:t.jsxs(u_,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),w_=p.div`
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
`,j_=({subjectName:e,color:i,noPadding:n})=>{const s=Xi(e),{theme:o}=xt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(w_,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(__,{noPadding:n,icon:s,background:r}),t.jsx(mt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},k_=xu`
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
`,S_=({color:e,start:i})=>`
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
}`,T_=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${S_}
`,E_=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,$_=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ee.isMobile} {
        font-size: 0.7rem;
    }
`,Zl=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=xt(),o=s==="light"?i.main:i.light2;return t.jsxs(E_,{children:[t.jsx(T_,{start:n,color:o}),e&&t.jsx($_,{children:e})]})},P_=p.div`
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
`,C_=p(P)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,O_=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:m=!1}=e,x=(d==null?void 0:d.split(","))??[],{open:b}=te(),y=()=>{x.length===1?b(t.jsx(Il,{group:x[0]})):b(t.jsx(v_,{groups:x}),"Группы")},$=()=>{b(t.jsx(D_,{place:s,link:r,name:n}))},w=Ql(n);return t.jsxs(P_,{children:[t.jsx(j_,{subjectName:n,color:u,noPadding:m}),t.jsxs(C_,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(P,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(Zl,{isCurrentEvent:g,color:u,timeInterval:i}),t.jsx(ec,{timeLeft:xn(i.split(" - ")[0],"minutes"),isNext:f,color:u,isCurrentEvent:g})]}),t.jsx(H,{size:3,align:"left",width:"fit-content",children:w.name})]}),t.jsx(fe,{margin:"0",width:"100%"}),t.jsx($e,{icon:t.jsx(Kn,{}),text:t.jsx(De,{words:[h??"",a]})}),((r==null?void 0:r.length)||w.link)&&t.jsx("a",{href:r??w.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{icon:t.jsx(Ui,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx($e,{icon:t.jsx(ta,{}),text:s}),!!c.length&&t.jsx($e,{icon:t.jsx(Cn,{}),text:t.jsx(De,{words:c})}),!!x.length&&t.jsx($e,{onClick:y,icon:t.jsx(Zn,{}),text:t.jsx(De,{words:x}),rightIcon:t.jsx(gt,{})}),t.jsx(P,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(H,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(S=>t.jsx(ws,{type:"staff",name:S},S))]})}),!r&&t.jsx(fe,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:$})]})]})};p.span`
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
`;const A_=p.a`
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
`,zi=({title:e,link:i,image:n})=>i?t.jsxs(A_,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(H,{size:3,children:e})]}):null,uo=p.div`
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
`,D_=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(uo,{children:t.jsx(P,{jc:"center",children:t.jsx(Qe,{})})}):t.jsx(uo,{children:e==="Webex"?t.jsx(zi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(zi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(zi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(zi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},ho=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,ec=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=xt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(ho,{background:c,color:r,children:"Сейчас"}):t.jsxs(ho,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},N_=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,zT=()=>t.jsxs(N_,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(Y,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(Y,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),tc="/assets/sleep-54d590c1.gif";var ic=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(ic||{});const I_=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],MT=[...I_,{title:"Месяц",condition:!0}],wt=Object.keys(Nt).reduce((e,i)=>(e[i]=[],e),{}),R_={schedule:{today:[],week:{...wt},semestr:{data:{...wt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...wt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},L_=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},vi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Ki=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Ki||{});const nc=e=>{const[i,n]=e.split(" "),s=Ki[n],o=s<8?new Date().getFullYear()+1:new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},sc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Ki[o],r=Ki[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},oi=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[f,g]=r.split(" - "),m=vi(g)-vi(f),[x,b]=d.split("-").map(w=>w.trim()),y=nc(x),$=sc(b,x);return{title:o,people:a,startTime:f,duration:m,startDate:y,endDate:$,placeIcon:t.jsx(mu,{}),dateInterval:d,color:Un[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Xi(o)}}):[],z_=e=>new Date(e.setHours(0,0,0,0)),go=(e,i)=>(e??[]).filter(n=>{const s=z_(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=nc(o),c=sc(a,o);return s>=r&&s<=(c??r)}),oc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),Wn=e=>e instanceof Date&&isFinite(+e),M_=e=>{const i={...wt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!Wn(n)||!Wn(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=oc(a);if(r==="sunday")continue;i[r]=oi(e[o].lessons,Nt[r].short)}return{schedule:i,startDate:n,endDate:s}},ac=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),rc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return G.evokePopUpMessage({message:f,type:"failure",time:es.ten_seconds}),{schedule:R_.schedule,errorInData:f}}const o=new Date;let a=L_(o);o.getDay()===0&&(a=ac(o,1));const r={...wt},c={...wt};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),x=e[f];"lessons"in x?(r[g]=oi(go(x.lessons,a),Nt[g].short),c[g]=oi(x.lessons,Nt[g].short)):(r[g]=oi(go(x,a),Nt[g].short),c[g]=oi(x,Nt[g].short)),n=new Date(Math.min(...c[g].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=M_(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},lc=async e=>{const i=await Qu(e),n=await eh();return rc(i.data,n.data)},cc=async e=>{const i=await Zu(e),n=await th(e);return rc(i.data,n.data)},fo={data:{schedule:null,externalSchedule:null,view:ic.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},F_=()=>q(ce),Et=M(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await cc(n);if(i&&s==="stud")return await lc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Kt=M(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await lc(e)}catch(i){throw new Error(i.message)}}),Qt=M(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await cc(e)}catch(i){throw new Error(i.message)}}),B_=k(),dc=k(),pc=k(),uc=k(),hc=k(),gc=k(),fc=k(),ce=X(fo).on(Et,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Et.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(dc,(e,i)=>({...e,data:{...e.data,view:i}})).on(pc,(e,i)=>({...e,currentChosenDay:i.day})).on(uc,()=>({...fo}));O({clock:Et.doneData,source:ce,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(wt)}}),target:ce});O({clock:hc,source:ce,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:ce});O({clock:gc,source:ce,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:ce});O({clock:Qt.doneData,source:ce,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:ce});O({clock:Kt.doneData,source:ce,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:ce});O({clock:[Kt,Qt,Et],source:ce,fn:e=>({...e,loading:!0}),target:ce});O({clock:[Kt,Qt],source:ce,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:ce});O({clock:[Kt.doneData,Qt.doneData,Et.doneData],source:ce,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:ce});O({clock:[Kt.failData,Qt.failData,Et.failData],source:ce,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:ce});O({clock:fc,source:ce,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:ce});const js={useSchedule:F_},H_={changeCurrentModule:B_,changeView:dc,changeCurrentChosenDay:pc,clearStore:uc,resetExternalSchedule:fc,setSearchValue:gc,setFilter:hc},U_={getScheduleFx:Et,getGroupScheduleFx:Kt,getTeacherScheduleFx:Qt},W_=Object.freeze(Object.defineProperty({__proto__:null,effects:U_,events:H_,selectors:js},Symbol.toStringTag,{value:"Module"})),V_=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${yi(Math.floor(o/60))}:${yi(o%60)}`},xc=(e,i)=>e?`${e} - ${V_(e,i)}`:"9:00",Vn=e=>!e||!Wn(e)?0:e.getHours()*60+e.getMinutes(),ks=(e,i)=>vi(e.startTime)<=Vn(new Date)&&Vn(new Date)<=vi(e.startTime)+e.duration&&i,mc=()=>{const{open:e}=te();return n=>{const s=xc(n.startTime,n.duration);e(t.jsx(O_,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:ks(n,!0),noPadding:!0,...n}))}},xo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},G_=()=>{const{currentDevice:e}=Xt(),[i,n]=l.useState(xo[e]);return l.useEffect(()=>{n(xo[e])},[e]),i},q_=p.div`
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
`,Y_=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=G_(),o=mc(),a=[9,22];return e!=null&&e.length?t.jsx(q_,{children:t.jsx(vc,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(he,{text:"В этот день пар нет",image:tc})},bc=()=>{const{data:{schedule:e}}=js.useSchedule(),{open:i}=te(),n=ac(new Date,1),s=Nr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=oc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(Y_,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},J_=p.div`
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
`,FT=({errorInData:e})=>t.jsxs(J_,{children:[t.jsx("img",{src:tc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(bc,{})]});p.div`
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
`;const X_=(e,i,n)=>i?e?1:.8:n?1:0,K_=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>X_(e,i,n)};
    transform: scale(${({isVisible:e})=>K_(e)});
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
`;const Q_=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,BT=()=>t.jsxs(Q_,{children:[t.jsx(za,{size:"38px"}),t.jsx(H,{size:4,children:"Учебный день завершился"}),t.jsx(bc,{})]});p.div`
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
`;const Z_=e=>{const[i,n]=e.split(":");return+i*60+ +n},yc=(e,i,n)=>e?(Z_(e)-i)*n:0,ew=p.div`
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
`;const tw=p(P)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ee.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,iw=p.span`
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
`,nw=p.div`
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
`,sw=p(P)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,ow=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:f,rooms:g,dateInterval:m,leftShift:x,quantity:b,groups:y,isCurrentEvent:$=!1,nameInOneRow:w=!0,isNextEvent:S=!1,listView:T=!1,shortInfo:R=!1}=e,{theme:I}=xt(),{isMobile:N}=Xt(),J=I==="light"?d.dark3:d.light3,L=I==="light"?d.transparent1:d.transparent2,ne=()=>h(e),ge=(N||b>1)&&R,je=N&&b>=2&&R,Re=r==null?void 0:r.map(Le=>{var Ai,Di;const Zt=Le.split(" ");return`${Zt[0]??""} ${((Ai=Zt[1])==null?void 0:Ai[0])??""}.${((Di=Zt[2])==null?void 0:Di[0])??""}.`}),qe=yc(o,c,u),ue=Ql(i),Pe=je?i.split(" ").map(Le=>Le[0].toUpperCase()):Yi(ue.name,R?ge?43:35:w?300:64),Oi=(y==null?void 0:y.split(","))??[];return t.jsxs(ew,{background:L,textColor:J,listView:T,leftShift:100*x,quantity:100/b,duration:n,scale:u,top:qe,onClick:ne,shortInfo:R,children:[t.jsx(nw,{children:s}),t.jsx(P,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(tw,{scale:u,d:"column",ai:"flex-start",shortInfo:R,children:[t.jsxs(P,{d:"column",gap:"2px",children:[!R&&t.jsxs(P,{gap:"8px",children:[t.jsx(Zl,{timeInterval:xc(o,n),color:d,isCurrentEvent:$}),t.jsx(ec,{timeLeft:xn(o,"minutes"),isNext:S,color:d,isCurrentEvent:$}),!!(g!=null&&g.length)&&t.jsx($e,{shortInfo:R,icon:N&&b>1?void 0:t.jsx(Cn,{}),text:t.jsx(De,{words:g})}),(!!f||ue.link)&&t.jsx("a",{href:f??ue.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:R,icon:t.jsx(Ui,{}),text:f?a:"Cсылка"})}),!!Oi.length&&t.jsx($e,{icon:t.jsx(Zn,{}),text:t.jsx(De,{words:Oi})})]}),t.jsx(iw,{listView:T,nameInOneRow:w,scale:u,shortInfo:R,children:Pe})]}),!!r.length&&!ge&&t.jsx($e,{shortInfo:R,text:t.jsx(De,{words:R?[Re[0]]:Re}),icon:t.jsx(bu,{})}),!!(g!=null&&g.length)&&R&&!ge&&t.jsx($e,{shortInfo:R,icon:t.jsx(Cn,{}),text:t.jsx(De,{words:g})}),!!f&&R&&!ge&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:R,icon:t.jsx(Ui,{}),text:a})}),!!m&&!ge&&t.jsx(P,{gap:"5px",children:t.jsx($e,{shortInfo:R,icon:t.jsx(Kn,{}),text:m})})]})})]})},aw=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},rw=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:u})=>{const h=aw(e),f=u??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(sw,{h:"100%",d:"column",children:[f&&t.jsx(m_,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,x)=>h[m].map((b,y)=>l.createElement(ow,{leftShift:y,quantity:h[m].length,scale:n,isCurrentEvent:ks(b,f),isNextEvent:Kl(e,b,f),...b,onClick:c,shift:i,key:b.startTime+b.title+x+y,shortInfo:s})))]})},lw=p(P)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,cw=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,dw=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,pw=p(se)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ee.isMobile} {
        font-size: 0.65rem;
    }
`,uw=Array(24).fill(0).map((e,i)=>`${yi(i)}:00`),hw=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):uw.slice(e[0],e[1]+1);return t.jsx(lw,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(cw,{children:[t.jsx(pw,{children:o}),t.jsx(dw,{})]},o))})},vc=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Xl({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var u;return yc((u=i==null?void 0:i[0])==null?void 0:u.startTime,o,n)}});return t.jsxs(l_,{className:"calendar-wrapper",ref:d,children:[t.jsx(hw,{interval:e,scale:n}),t.jsx(rw,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},gw=p.div`
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
`,fw=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=te();return o?t.jsxs(gw,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},xw=p.div`
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
`,mw=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,bw=p(se)`
    margin-bottom: 20px;
`,yw=({image:e,list:i,text:n})=>{const{isMobile:s}=Xt();return t.jsxs(xw,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(H,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(bw,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(mw,{children:i==null?void 0:i.map(o=>l.createElement(fw,{...o,key:o.title}))})]})},vw=p.div`
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
`,_w=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,ww=()=>t.jsx(_w,{children:t.jsx(vc,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Un["16:10 - 17:40"],icon:Xi("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Un["17:50 - 19:20"],icon:Xi("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),_c=()=>{const[e,i]=l.useState(0),{close:n}=te(),s=[t.jsx(yw,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(ww,{})}},"schedule")];return t.jsxs(vw,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(Ka,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>ut(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:j.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>ut(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},jw=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return vi(i.startTime)+i.duration<Vn(new Date)}},kw=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=js.useSchedule(),o=mc(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=jw(e==null?void 0:e.today),c=Xl({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,m;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(x=>ks(x,!0)||Kl(e.today,x,!0)))??0)}}),d=()=>G.evokePopUpMessage({message:n??"",type:"failure",time:es.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},mo=p(an)`
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
`,ii=()=>t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(Y,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),Sw=()=>{const{allRoutes:e}=Be.useMenu(),{data:{user:i}}=ve.useUser(),{hasNoSchedule:n,loading:s}=kw(),o=Ht();if(!e||!i||s)return t.jsxs(mo,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(ii,{}),t.jsx(ii,{}),t.jsx(ii,{}),t.jsx(ii,{}),t.jsx(ii,{})]});const a=(i==null?void 0:i.user_status)==="stud"?Ik:n?Lk:Rk;return t.jsx(mo,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Gl,{...e[r],isCurrent:c},r)})})},Tw=(e,i,n)=>({isOpen:i,message:e,position:n}),bo={hints:[]},Ew=()=>q($w),wc=k(),jc=k(),kc=k(),$w=X(bo).on(wc,(e,{message:i,position:n})=>({hints:[...e.hints,Tw(i,e.hints.length===0,n)]})).on(jc,e=>({hints:e.hints.splice(1,e.hints.length)})).on(kc,()=>({...bo})),Pw={useHint:Ew},Cw={evoke:wc,close:jc,clearStore:kc},Ow=p.div`
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
`,Aw=()=>{const{hints:e}=Pw.useHint(),i=e[0];return i?t.jsx(Ow,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(Q,{type:"hint",title:i.message,onClose:()=>Cw.close(),width:"100%",icon:null})}):null},Dw=p.div`
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
`,Nw=50;function HT({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Nw}){const{data:{user:u}}=ve.useUser();let h="";const f=l.useCallback(g=>{const m=g.currentTarget.clientHeight,x=g.currentTarget.scrollHeight,b=g.currentTarget.scrollTop;x-d<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(he,{text:"Нет результатов",children:c}):t.jsxs(Dw,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var b,y;const x=r?h!==((b=g.fio)==null?void 0:b.charAt(0)):!1;return x&&(h=((y=g.fio)==null?void 0:y.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[x&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(H,{size:4,align:"left",children:h}),t.jsx(fe,{})]}),i(g,(u==null?void 0:u.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(Qe,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Iw=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ve.useUser();return te(),t.jsxs(Ee,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(se,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(ws,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function Rw(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const UT=p.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>Rw(e)};
        opacity: 1;
    }
`,WT=p.div`
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
`,Sc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Lw=()=>{const e=A?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:zc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:od,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Mc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Fc,title:"Справка-вызов"},{link:Qc,title:"Заявление на пересдачу для получения диплома с отличием"},{link:sd,title:"Запрос на изменение персональных данных"},{link:Kc,title:"Запрос на восстановление магнитного пропуска"},{link:Nc,title:"Уточнение паспортных данных"},{link:ad,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:rd,title:"Предоставление каникул в связи с окончанием университета"},{link:ld,title:"Предоставление академического отпуска"},{link:cd,title:"Выход из академического отпуска"},{link:dd,title:"Отчисление по инициативе обучающегося"},{link:pd,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Bc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Hc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Uc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Vc,title:"Предоставление права проживания льготной категории граждан"},{link:Wc,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Gc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Yc,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Jc,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:qc,title:"Расторжение договора найма"},{link:Xc,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:oa,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:td,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:id,title:"Заявка на материальную помощь"},{link:Lc,title:"Оформить социальную стипендию"},{link:nd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:A,links:[{link:Zc,title:"Отправить документы воинского учета"},{link:ed,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:A,links:[{link:Gn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Gn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:zu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Ic,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:A,links:[{link:Rc,title:"Трудоустройство студентов"}]}]},zw=()=>[{title:"Цифровые сервисы",links:[{link:qr,title:"Справка о стаже работы"},{link:Jr,title:"Копия трудовой книжки"},{link:Xr,title:"Копии документов из личного дела"},{link:Kr,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{title:"Общее",links:[{link:Rr,title:"Актуализация контактных данных"},{link:Lr,title:"Анкета для сверки данных"}]},{title:"ИТ-обслуживание",links:[{link:Mr,title:"Получение нового компьютерного оборудования"},{link:Fr,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Br,title:"Обслуживание принтеров, МФУ"},{link:Hr,title:"Вопрос по СЭД Directum и 1С"},{link:Ur,title:"Вопрос по Личному кабинету"},{link:Wr,title:"Прочее ИТ-обслуживание"}]},{title:"Отдел кадров",links:[{link:Vr,title:"Справка с места работы"},{link:Gr,title:"Справка с места работы для предоставления в визовый центр"},{link:Yr,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Бухгалтерия",links:[{link:tl,title:"Справка по форме 2-НДФЛ"},{link:il,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Qr,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:nl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",links:[{link:ol,title:"Предоставление права проживания в жилом помещении"},{link:al,title:"Временное размещение гостей в студгородке"},{link:rl,title:"Проход гостей на территорию студенческого городка"},{link:ll,title:"Переселение"},{link:cl,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",links:[{link:dl,title:"Выдача пропуска (повторная)"},{link:pl,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",links:[{link:ul,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",links:[{link:zr,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:el,title:"Курьер"}]},{title:"Мобилизационный отдел",links:[{link:hl,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:gl,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",links:[{link:Zr,title:"Произвольный запрос"},{link:oa,title:"Вступить в Профсоюз",isExternalLink:!0}]}],Mw=()=>[{title:"",links:[{link:sl,title:"Заявление на трудоустройство по совместительству"},{link:Ln,title:"Заявление на увольнение"},{link:Fn,title:"Заявление о привлечении к работе в выходной день"},{link:zn,title:"Заявление о предоставлении отпуска"},{link:Mn,title:"Заявление о переносе отпуска"},{link:Bn,title:"Заявление о диспансеризации"},{link:Hi,title:"Заявление на перевод"}]}],Fw=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Bw=p.div`
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
`,VT=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=te(),s=e?zw():Lw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(Bw,{children:[t.jsx(Ja,{whereToSearch:s,searchEngine:Sc,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(d=>{if(!d.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(H,{size:4,align:"left",bottomGap:!0,children:d.title}),t.jsx("div",{className:"links",children:d.links.map((u,h)=>{if(!(u.disabled||!Fw(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},d.title)}),!(r!=null&&r.length)&&!!o.length&&t.jsx(he,{text:`По запросу ${o} ничего не найдено`})]})})]})},Hw=p.div`
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
`,Uw=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,GT=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=te(),s=Mw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(Ve,{load:()=>Fe.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Xe,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Hw,{children:[t.jsx(H,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Ja,{whereToSearch:s,searchEngine:Sc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(Uw,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(he,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Ww=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),yo={isOpen:!1,pages:[],currentPage:0},Vw=()=>q(Gw),Tc=k(),Ec=k(),$c=k(),Pc=k(),Gw=X(yo).on(Tc,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(Ec,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on($c,(e,{value:i})=>({...e,currentPage:i})).on(Pc,()=>({...yo})),Ss={useStory:Vw},vt={open:Tc,close:Ec,clearStore:Pc,changeCurrentPage:$c};p(Ze)`
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
`;const qw=p.div`
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
`,Ts=qw,Yw=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[c,d]=l.useState(r===void 0),[u,h]=l.useState(!a),[f,g]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return G.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!c&&!n.find(w=>!!w.find(S=>!S.value&&S.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(w=>!!w.find(S=>!S.value&&S.required))&&!n.find(w=>!!w.find(S=>{var T;return S.value.id==="not-chosen"&&!!((T=S.items)!=null&&T.length)}))?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):G.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!c&&!n.find(w=>!w.value&&w.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(w=>!w.value&&w.required)&&!n.find(w=>{var S;return w.value===null&&!!((S=w.items)!=null&&S.length)})?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):G.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},x=()=>{s(w=>{const S=w.default[0].map(T=>({fieldName:T.fieldName??"",title:T.title,value:T.type==="select"&&(T!=null&&T.items)?null:"",type:T.type,items:T.items,width:T.width,required:T.required}));return{...w,data:[...w.data,S]}})},b=w=>{s(S=>{const T=S.data.filter((R,I)=>w!==I);return{...S,data:T}})},y=w=>{s(S=>(S.documents&&(S.documents.files=[...w]),{...S}))},$=()=>{i&&(i.value=!i.value),s(w=>({...w,optionalCheckbox:i}))};return l.useEffect(()=>{h(!f&&o?!1:!a)},[f,a]),{openArea:u,changeInputArea:c,included:f,setOpenArea:h,setIncluded:g,setChangeInputArea:d,handleRemove:b,handleAddNew:x,handleLoadFiles:y,handleConfirm:m,handleCheckbox:$}},Jw=p.div`
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
`,Xw=p.div``,Kw=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Xw,{children:[t.jsx(H,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(Ff,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),Qw=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(H,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Ee,{children:[!a&&t.jsx(Je,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Je,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),Zw=p.div`
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
`,ej=({title:e,value:i,visible:n})=>n?t.jsxs(Zw,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,tj=p.div`
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
`,ij=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(tj,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(yu,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(ea,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,nj=p.div`
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
`,sj=({title:e,visible:i})=>i?t.jsx(nj,{children:t.jsx("span",{className:"title",children:e})}):null,oj=p.div`
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
`,aj=p.ul`
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
`,rj=p.li`
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
`,lj=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,m]=l.useState([]),[x,b]=l.useState(!0);return l.useEffect(()=>{if(e){const y=f.filter($=>$.toLowerCase().includes(e.toLowerCase()));m(y)}else m([])},[e,f]),t.jsxs(oj,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(H,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:y=>{i(y.target.value),b(!0)},placeholder:c}),g.length>0&&t.jsx(aj,{width:"100%",isOpen:x,className:x?"open":"close",itemsAmount:g.length,title:s,children:g.map((y,$)=>t.jsx(rj,{isSelected:!1,onClick:()=>{i(y),m([]),b(!1)},children:y},$))})]})]})},cj=p.div`
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
`,dj=({title:e,visible:i})=>i?t.jsx(cj,{children:t.jsx("span",{className:"title",children:e})}):null,vo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:f,setData:g,mask:m,editable:x,placeholder:b,autocomplete:y,isSpecificRadio:$,specialType:w,specialFieldsNameConfig:S,minValueInput:T,maxValueInput:R,maxValueLength:I,diff:N,visible:J=!0,onChange:L,onKeyPress:ne,onBlur:ge,onKeyDown:je,onKeyUp:Re,onFocus:qe}=e,ue=x??(f&&!h),[Pe,Oi]=l.useState(!0),Le=(V,de,At)=>{L==null||L(V),g(_e=>(Array.isArray(_e.data[0])?_e.data[de][At??0].value=V:_e.data[de].type==="checkbox-docs"?_e.data[de].items[At??0].value=!!V:_e.data[de].value=V,{..._e}))},Zt=(V,de,At)=>{L==null||L(V),g(_e=>(Array.isArray(_e.data[0])?_e.data[de][At??0].value=V:_e.data[de].value=V,{..._e}))},Os=(V,de,At)=>{g(_e=>(_e.data[de].items[At??0].files=V,{..._e}))},Ai=V=>{L==null||L(V),g(de=>(de.data[o].value=V,{...de}))},Di=V=>{L==null||L(V),ne==null||ne(V),ge==null||ge(V),je==null||je(V),Re==null||Re(V),qe==null||qe(V),g(de=>(de.data[o].value=V,{...de}))};return S&&w&&!Object.values(S).includes(w)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Je,{text:u,isActive:ue,checked:i,setChecked:V=>Le(V,o,a)}):r==="hr-checkbox"?t.jsx(ij,{text:u,isActive:ue,checked:i,setChecked:V=>Le(V,o,a)}):r==="auto-complete-input"?t.jsx(lj,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:V=>Le(V,o,a)}):r==="textarea"?t.jsx(Bg,{value:i,title:u,setValue:V=>Le(V,o,a),isActive:ue,textAreaAppearance:ue,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(Kw,{title:u,items:d,setChecked:(V,de)=>Le(!V,o,de),setFiles:(V,de)=>Os(V,o,de)}):r==="date-interval"?J?t.jsx(er,{title:u,required:n,dates:i,setDates:V=>Di(V),valid:Pe,setValid:Oi,minValue:T,diff:N}):null:r==="simple-text"?t.jsx(ej,{title:u,value:i,visible:J}):r==="text-warning"?t.jsx(dj,{title:u,visible:J}):r==="text-header"?t.jsx(sj,{title:u,visible:J}):r==="radio"?t.jsx(Qw,{buttons:d,title:u,required:n,current:i,setCurrent:Ai,isSpecificRadio:$}):J?t.jsx(pt,{value:i,title:u,minValue:T,maxValue:R,maxLength:I,setValue:V=>Le(V,o,a),type:r,isActive:ue,inputAppearance:ue,placeholder:b??u,required:n,mask:m,width:s,autocomplete:y}):null:J?t.jsx(or,{items:d,setSelected:V=>Zt(V,o,a),selected:i,isActive:ue,title:u,width:s,multiple:r==="multiselect",required:n}):null},pj=p.div`
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
`,uj=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(pj,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(H,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Mo,{}):t.jsx(Fo,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Je,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(He,{}),onClick:()=>null,background:"transparent",flipped:c})]}),hj=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(lt,{}),textColor:j.red.main,hoverBackground:j.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(vu,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(lt,{}),textColor:j.red.main,hoverBackground:j.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(_u,{}),textColor:j.green.main,hoverBackground:j.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(wu,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"})]}),gj=e=>e.confirmed===void 0?null:t.jsx(Ee,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(hj,{...e,confirmed:e.confirmed})}),Cc=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:m})=>{const{openArea:x,changeInputArea:b,included:y,setOpenArea:$,setIncluded:w,setChangeInputArea:S,handleRemove:T,handleAddNew:R,handleLoadFiles:I,handleConfirm:N,handleCheckbox:J}=Yw({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c});return t.jsxs(t.Fragment,{children:[t.jsxs(Jw,{openArea:x,children:[t.jsx(uj,{title:e,included:y,optional:d,confirmed:c,setOpenArea:$,setIncluded:w,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(Q,{type:"alert",visible:!!n,icon:t.jsx(xi,{}),children:n}),t.jsx(Q,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Xe,{}),children:i}),Array.isArray(s[0])?s.map((L,ne)=>t.jsxs("div",{className:"data-line",children:[L.map((ge,je)=>t.jsx(vo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ne,indexJ:je,specialFieldsNameConfig:m,...ge},je)),b&&u&&t.jsx(_,{icon:t.jsx(ju,{}),textColor:j.red.main,onClick:()=>T(ne),background:"transparent",isActive:!(o!=null&&o.value)})]},ne)):s.map((L,ne)=>t.jsx(vo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ne,specialFieldsNameConfig:m,...L},ne)),u&&b&&t.jsx(_,{icon:t.jsx(ku,{}),text:"Добавить",onClick:R,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(Za,{files:a.files,setFiles:L=>I(L),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(L=>l.createElement(tf,{...L,key:L.title})),t.jsx(Je,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:J}),t.jsx(gj,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:S,handleConfirm:N})]})]}),h&&t.jsx(fe,{})]})},fj=p.div`
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
`,xj=p.div`
    display: flex;
    margin-bottom: -20px;
`,mj=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Oc=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:Se(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(xj,{children:e.map((r,c)=>t.jsxs(mj,{lastElement:c===e.length-1,children:[t.jsx(fj,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(Cg,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Cc,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},bj=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),yj=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),vj=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Es=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return Ww(u);if(Array.isArray(u.data[0])){const h=u.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>_o(m)))),f={};return f[e]=JSON.stringify(h),f}else return u.data.map(h=>_o(h))}).flat(),r=i.map(u=>{var f,g;const h={};if((f=u.documents)!=null&&f.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((g=u.documents)==null?void 0:g.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var f,g;const h={};return(f=u.optionalCheckbox)!=null&&f.fieldName&&(h[(g=u.optionalCheckbox)==null?void 0:g.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Fe.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},_o=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=_j(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},_j=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,$s=p.div`
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
`;var mn=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(mn||{}),wj=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(wj||{});const jj=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],kj=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Sj=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:kj},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:jj}]}},Tj=()=>{var L;const[e,i]=l.useState(null),[n,s]=l.useState(Ii.kvdCert),[o,a]=l.useState(Ii.fluorographyCert),[r,c]=l.useState(Ii.vichRwCert),[d,u]=l.useState(Ii.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:f}}=ve.useUser(),[g,m]=l.useState(!1),[x,b]=l.useState(!1),[y,$]=l.useState(null),[w,S]=l.useState(null),[T,R]=l.useState(null),I=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(he,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const N=!!e&&!!w&&!!y&&!!T;if(l.useEffect(()=>{h&&(i(Sj(h)),$(yj()),S(vj()),R(bj()))},[h]),!N)return null;const J=[[{dataForm:e,setDataForm:i}],[{dataForm:w,setDataForm:S}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx($s,{isDone:I,children:t.jsxs(ss,{children:[t.jsx(H,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Oc,{stagesConfig:J}),t.jsx(St,{text:"Отправить",action:()=>Es(mn.USG_GETHOSTEL_OOZ,[e,w,y,T,n,o,r,d],b,m),isLoading:x,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:I,isActive:(((L=e.optionalCheckbox)==null?void 0:L.value)??!0)&&Se(e)&&Se(o)&&Se(r)&&Se(d)&&Se(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Ej=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],$j=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],Pj=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],Cj=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],Oj=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],Aj=[{id:0,title:"1"},{id:1,title:"2"}],Dj=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],Nj=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],Ij=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],Rj=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),Lj=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Ej,width:"100%",editable:!0,required:!0}]}),zj=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:$j,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),Mj=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:Pj,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:Cj,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:Oj,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:Aj,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:Dj,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),Fj=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:Nj,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),wo=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:Ij,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},Ac=()=>{var R;const[e,i]=l.useState(null),[n,s]=l.useState(Lj()),[o,a]=l.useState(zj()),[r,c]=l.useState(Mj()),[d,u]=l.useState(Fj()),[h,f]=l.useState(wo(null)),[g,m]=l.useState(!1),[x,b]=l.useState(!1),[y,$]=l.useState(!1),{data:{dataUserApplication:w}}=ye.useApplications();l.useEffect(()=>{w&&i(Rj(w))},[w]);const S=l.useMemo(()=>{var I,N;return((N=(I=h==null?void 0:h.data[0])==null?void 0:I.value)==null?void 0:N.id)!==0},[(R=h==null?void 0:h.data[0])==null?void 0:R.value]);if(l.useEffect(()=>{h&&f(wo(h.data))},[S]),!e)return null;const T=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:f}]];return t.jsx($s,{isDone:!1,children:t.jsxs(ss,{children:[t.jsx(H,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Oc,{stagesConfig:T}),t.jsx(Je,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(St,{text:x?"Отправлено":"Отправить",action:()=>Es(mn.MIL_REG,[e,n,o,r,d,h],$,b),isLoading:y,completed:x,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:x,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&Se(e)&&Se(n)&&Se(r)&&Se(d)&&Se(h)&&Se(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Bj=Object.freeze(Object.defineProperty({__proto__:null,default:Ac},Symbol.toStringTag,{value:"Module"})),Hj=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],Uj=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:Hj},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),Wj=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Dc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:u}}=ye.useApplications();return l.useEffect(()=>{u&&i(Uj(u))},[u]),l.useEffect(()=>{e&&u&&c(Wj(e.data))},[e]),t.jsx($s,{isDone:d,children:!!e&&!!i&&t.jsxs(ss,{children:[t.jsx(Cc,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(St,{text:d?"Отправлено":"Отправить",action:()=>Es(mn.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:Se(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Vj=Object.freeze(Object.defineProperty({__proto__:null,default:Dc},Symbol.toStringTag,{value:"Module"})),Gj=l.lazy(()=>v(()=>import("./index-a676561b.js"),["assets/index-a676561b.js","assets/vendor-f1fdae2f.js"])),qj=l.lazy(()=>v(()=>import("./index-b3fad798.js"),["assets/index-b3fad798.js","assets/vendor-f1fdae2f.js"])),Yj=l.lazy(()=>v(()=>import("./index-3a434af6.js"),["assets/index-3a434af6.js","assets/vendor-f1fdae2f.js"])),Jj=l.lazy(()=>v(()=>import("./index-4e87aad8.js"),["assets/index-4e87aad8.js","assets/vendor-f1fdae2f.js"])),Xj=l.lazy(()=>v(()=>import("./index-a3370cee.js"),["assets/index-a3370cee.js","assets/vendor-f1fdae2f.js"])),Kj=l.lazy(()=>v(()=>import("./index-f16a9901.js"),["assets/index-f16a9901.js","assets/vendor-f1fdae2f.js","assets/ui-e9d412fb.js"])),Qj=l.lazy(()=>v(()=>import("./index-2949a085.js"),["assets/index-2949a085.js","assets/vendor-f1fdae2f.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Zj=l.lazy(()=>v(()=>import("./index-7a057cd3.js"),["assets/index-7a057cd3.js","assets/vendor-f1fdae2f.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ek=l.lazy(()=>v(()=>import("./index-6a39e2ab.js"),["assets/index-6a39e2ab.js","assets/vendor-f1fdae2f.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),tk=l.lazy(()=>v(()=>import("./index-8b53a1e9.js"),["assets/index-8b53a1e9.js","assets/vendor-f1fdae2f.js"])),ik=l.lazy(()=>v(()=>import("./index-5ead8dce.js"),["assets/index-5ead8dce.js","assets/vendor-f1fdae2f.js","assets/index-7d18a486.js"])),nk=l.lazy(()=>v(()=>import("./index-ccf6f612.js"),["assets/index-ccf6f612.js","assets/vendor-f1fdae2f.js","assets/is-valid-url-08a91344.js"])),sk=l.lazy(()=>v(()=>import("./index-5ca9d154.js"),["assets/index-5ca9d154.js","assets/vendor-f1fdae2f.js"])),ok=l.lazy(()=>v(()=>import("./index-ba32dd22.js"),["assets/index-ba32dd22.js","assets/vendor-f1fdae2f.js"])),ak=l.lazy(()=>v(()=>import("./index-327539e6.js"),["assets/index-327539e6.js","assets/vendor-f1fdae2f.js"])),rk=l.lazy(()=>v(()=>import("./index-3076f274.js"),["assets/index-3076f274.js","assets/vendor-f1fdae2f.js"])),lk=l.lazy(()=>v(()=>import("./index-b0bd2a5c.js"),["assets/index-b0bd2a5c.js","assets/vendor-f1fdae2f.js"])),ck=l.lazy(()=>v(()=>import("./index-64a7da3b.js"),["assets/index-64a7da3b.js","assets/vendor-f1fdae2f.js"])),dk=l.lazy(()=>v(()=>import("./index-4bfa56ac.js"),["assets/index-4bfa56ac.js","assets/vendor-f1fdae2f.js"])),pk=l.lazy(()=>v(()=>import("./index-e309418d.js"),["assets/index-e309418d.js","assets/vendor-f1fdae2f.js"])),uk=l.lazy(()=>v(()=>import("./index-da5eef29.js"),["assets/index-da5eef29.js","assets/vendor-f1fdae2f.js"])),hk=l.lazy(()=>v(()=>import("./index-d015fb02.js"),["assets/index-d015fb02.js","assets/vendor-f1fdae2f.js","assets/BoldText-f34d4292.js"])),gk=l.lazy(()=>v(()=>import("./index-eacde5ea.js"),["assets/index-eacde5ea.js","assets/vendor-f1fdae2f.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Bj),void 0));const fk=l.lazy(()=>v(()=>import("./index-336403e3.js"),["assets/index-336403e3.js","assets/vendor-f1fdae2f.js"])),xk=l.lazy(()=>v(()=>import("./index-36ed1406.js"),["assets/index-36ed1406.js","assets/vendor-f1fdae2f.js"])),mk=l.lazy(()=>v(()=>import("./index-61c173e4.js"),["assets/index-61c173e4.js","assets/vendor-f1fdae2f.js"])),bk=l.lazy(()=>v(()=>import("./index-3768cf55.js"),["assets/index-3768cf55.js","assets/vendor-f1fdae2f.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),yk=l.lazy(()=>v(()=>import("./index-adbfda53.js"),["assets/index-adbfda53.js","assets/vendor-f1fdae2f.js","assets/get-method-obtaining-fields-e4b927e8.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),vk=l.lazy(()=>v(()=>import("./index-5e9a40cc.js"),["assets/index-5e9a40cc.js","assets/vendor-f1fdae2f.js"])),_k=l.lazy(()=>v(()=>import("./index-89bc1ab5.js"),["assets/index-89bc1ab5.js","assets/vendor-f1fdae2f.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Vj),void 0));const wk=l.lazy(()=>v(()=>import("./index-7e048299.js"),["assets/index-7e048299.js","assets/vendor-f1fdae2f.js"])),jk=l.lazy(()=>v(()=>import("./index-5f34dce0.js"),["assets/index-5f34dce0.js","assets/vendor-f1fdae2f.js"])),kk=l.lazy(()=>v(()=>import("./index-bffe7a52.js"),["assets/index-bffe7a52.js","assets/vendor-f1fdae2f.js"])),Sk=l.lazy(()=>v(()=>import("./index-aba914ff.js"),["assets/index-aba914ff.js","assets/vendor-f1fdae2f.js"])),Tk=l.lazy(()=>v(()=>import("./index-e5b5a710.js"),["assets/index-e5b5a710.js","assets/vendor-f1fdae2f.js"])),Ek=l.lazy(()=>v(()=>import("./index-90a2d169.js"),["assets/index-90a2d169.js","assets/vendor-f1fdae2f.js","assets/get-divisions-96cfa1b1.js"])),$k=l.lazy(()=>v(()=>import("./index-7bd590d3.js"),["assets/index-7bd590d3.js","assets/vendor-f1fdae2f.js"])),E="/applications",Pk="/application-for-superior-room",Ck="/acad-performance",Ok="/dormitory",Nc=E+"/clarification-of-passport-data",Ic=E+"/arbitrary-request",Rc=E+"/student-employment",Lc=E+"/social-scollarship",zc=E+"/certificate-of-attendance",Mc=E+"/social-agencies",Fc=E+"/paper-call",Bc=E+"/regular-accommodation",Hc=E+"/full-time-part-time-form",Uc=E+"/accommodation-correspondence-form",Wc=E+"/academic-leave-accommodation",Vc=E+"/preferential-accommodation",Gc=E+"/family-room",qc=E+"/termination-of-employment-contract",Yc=E+"/relocation-inside-hostel",Jc=E+"/relocation-to-another-hostel",Xc=E+"/accommodation-for-graduates",Gn=E+"/payment-recipient",Kc=E+"/restoring-the-magnetic-pass",Qc=E+"/retake-for-diploma",Zc=E+"/military-registration-documents",ed=E+"/military-registration",td=E+"/financial-support",id=E+"/financial-assistance",nd=E+"/increased-state-academic-scholarship",sd=E+"/changing-personal-data",od=E+"/student-status",ad=E+"/state-accreditation",Ak=E+"/military-registration-card",rd=E+"/holidays-after-training",ld=E+"/provision-academic-leave",cd=E+"/exit-academic-leave",dd=E+"/independently-deducted",pd=E+"/extension-attestation",Dk="/physical-education/student",nt=()=>we({oldVersionUrl:"/sprav"}),ni=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:E,Component:ik,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...$l,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(ct,{}),path:qi,Component:gs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Ns,{}),path:Ok,Component:Yj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Su,{}),path:Ck,Component:qj,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:Dk,pageSize:"big",Component:Kj,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Bo,{}),path:jl,Component:nk,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Tu,{}),path:Tl,Component:as,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Ns,{}),path:Pk,Component:Gj,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(Aa))}}),jo=e=>{var i,n,s;return{...Pl,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(ai,{}),path:Nc,Component:Jj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(ai,{}),path:Ic,Component:Ek,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(ai,{}),path:Rc,Component:A?nt:$k,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(K,{}),path:Lc,Component:A?nt:Xj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(K,{}),path:zc,Component:Qj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(K,{}),path:Mc,Component:Zj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(K,{}),path:Fc,Component:ek,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(K,{}),path:Bc,Component:tk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(K,{}),path:Hc,Component:Tj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(K,{}),path:Uc,Component:Sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(K,{}),path:Wc,Component:sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(K,{}),path:Vc,Component:ok,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(K,{}),path:Gc,Component:Tk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(K,{}),path:qc,Component:ak,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(K,{}),path:Yc,Component:A?()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):rk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(K,{}),path:Jc,Component:A?()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):ck,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:K,path:Xc,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?lk:()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(K,{}),path:Gn,Component:dk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(K,{}),path:Kc,Component:pk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(K,{}),path:Zc,Component:A?nt:gk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(Eu,{}),path:ed,Component:A?nt:Ac,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:E},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(K,{}),path:Qc,Component:hk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(K,{}),path:nd,Component:A?nt:uk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(K,{}),path:td,Component:A?nt:fk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(K,{}),path:id,Component:A?nt:xk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(K,{}),path:sd,Component:mk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(K,{}),path:od,Component:bk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(K,{}),path:ad,Component:yk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(K,{}),path:rd,Component:vk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(K,{}),path:ld,Component:_k,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(K,{}),path:cd,Component:Dc,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(K,{}),path:dd,Component:wk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(K,{}),path:pd,Component:jk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(K,{}),path:Ak,Component:A?nt:kk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E}}},ko=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Nk=["settings","profile","chat","schedule","payments","project-activity","all-students"],Ik=["home","schedule","acad-performance","all","profile"],Rk=["home","schedule","alerts","all","profile"],Lk=["home","doclist","alerts","all","profile"],zk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(B.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??nn,s=sa.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},So={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Mk=()=>q(Bk),ud=k(),hd=k(),gd=k(),fd=k(),Fk=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},si=e=>{if(!e)return to();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(to()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},Bk=X(So).on(ud,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(hd,()=>({...So})).on(gd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?si(n)[window.location.hash.slice(2,window.location.hash.length)]:ni()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...si(n),...io()}:{...ni(),...jo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?si(n):ni(),leftsideBarRoutes:ko(zk(i),(i==null?void 0:i.user_status)==="staff"?si(n):ni()),homeRoutes:ko(s??JSON.parse(localStorage.getItem(B.HomeRoutes)??JSON.stringify(Nk)),(i==null?void 0:i.user_status)==="staff"?{...si(n),...io()}:{...ni(),...jo(i)})})).on(fd,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Fk(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Be={useMenu:Mk},tt={changeOpen:ud,clearStore:hd,defineMenu:gd,changeNotifications:fd},xd=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:kl,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ot,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:qi,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:qi,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:bs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Ir,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:fs,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:E,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:xl,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Hk={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},md=(e,i)=>i.filter(({type:n})=>e[Hk[n]]),Uk={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},bn=M(async({settings:e})=>{try{const{data:i}=await Ah();return md(e,i).map(({id:n,type:s,title:o,text:a})=>xd(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Wk=M(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&tt.changeNotifications({page:i,notifications:1})})}),Vk=M(({notifications:e})=>{const{pageId:i}=e[0];i&&tt.changeNotifications({page:i,notifications:1})}),yn=M(async({id:e,pageId:i})=>{try{return await Dh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),vn=M(async()=>{try{await Nh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Gk=e=>{e&&tt.changeNotifications({page:e,notifications:0})},bd=k(),yd=k(),vd=k(),_d=k(),wd=k(),jd=k(),kd=k(),ae=X(Uk).reset(kd);Ie({from:yd,to:bn});O({clock:bn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});O({clock:bn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});O({clock:bn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,Wk]});O({clock:bd,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,Vk]});Ie({from:_d,to:yn});O({clock:yn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Gk(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});O({clock:yn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});O({clock:yn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});Ie({from:wd,to:vn});O({clock:vn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});O({clock:vn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});O({clock:vn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});O({clock:vd,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});O({clock:jd,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const qk=()=>Te(ae),$t={initialize:yd,add:bd,clearById:_d,clearVisibleById:vd,clearAll:wd,clearAllVisible:jd,clearStore:kd},it={useLkNotifications:qk},Yk=Object.freeze(Object.defineProperty({__proto__:null,events:$t,selectors:it},Symbol.toStringTag,{value:"Module"})),To={messages:null,error:null},Jk=()=>({data:q(Eo).messages,loading:q(ui.pending),error:q(Eo).error}),ui=M(async()=>{try{return(await ah("1")).data}catch(e){throw new Error(e)}}),Sd=k(),Eo=X(To).on(ui,e=>({...e,error:null})).on(ui.doneData,(e,i)=>({...e,messages:i})).on(ui.failData,(e,i)=>({...e,error:i.message})).on(Sd,()=>({...To})),Xk={useMessages:Jk},Kk={getMessagesFx:ui},Qk={clearStore:Sd},Zk=Object.freeze(Object.defineProperty({__proto__:null,effects:Kk,events:Qk,selectors:Xk},Symbol.toStringTag,{value:"Module"})),$o={type:null,personalNotifications:null,error:null,completed:!1},eS=()=>({data:q(Lt).personalNotifications,loading:q(Rt.pending),error:q(Lt).error,completed:q(Lt).completed}),tS=()=>q(Lt).type,Td=k(),Ed=M(e=>e),Rt=M(async()=>{const{type:e}=Lt.getState();if(e==="notifications")try{return(await ua()).data}catch(i){throw new Error(i)}try{return{docs:(await ha()).data}}catch(i){throw new Error(i)}}),Qi=M(async e=>{const{type:i}=Lt.getState(),n=i==="notifications"?wh:kh;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),$d=k(),Lt=X($o).on(Ed,(e,i)=>({...e,type:i})).on(Rt,e=>({...e,error:null})).on(Rt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Rt.failData,(e,i)=>({...e,error:i.message})).on(Qi.doneData,e=>({...e})).on(Qi.failData,(e,i)=>({...e,error:i.message})).on(Td,(e,i)=>({...e,completed:i.completed})).on($d,()=>({...$o}));Qi.doneData.watch(()=>Rt());const iS={usePersonalNotifications:eS,useType:tS},nS={setNotificationsType:Ed,getPersonalNotificationsFx:Rt,viewPersonalNotificationsFx:Qi},sS={changeCompleted:Td,clearStore:$d},oS=Object.freeze(Object.defineProperty({__proto__:null,effects:nS,events:sS,selectors:iS},Symbol.toStringTag,{value:"Module"})),aS=sn({api:{get:vh}}),Po={superiorRoom:null,error:null},rS=()=>({data:q(Co).superiorRoom,loading:q(hi.pending),error:q(Co).error}),Pd=k(),lS=M(async e=>{});Ie({from:Pd,to:lS});const hi=M(async()=>{try{return(await ph()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Cd=k(),Co=X(Po).on(hi,e=>({...e,error:null})).on(hi.doneData,(e,i)=>({...e,superiorRoom:i})).on(hi.failData,(e,i)=>({...e,error:i.message})).on(Cd,()=>({...Po})),cS={useSuperiorRoom:rS},dS={getSuperiorRoomFx:hi},pS={postSuperiorRoom:Pd,clearStore:Cd},uS=Object.freeze(Object.defineProperty({__proto__:null,effects:dS,events:pS,selectors:cS},Symbol.toStringTag,{value:"Module"})),Oo={teacherDataVerification:null,error:null,completed:!1},hS=()=>({data:q($n).teacherDataVerification,loading:q(gi.pending),error:q($n).error,completed:q($n).completed}),Od=k(),Ad=k(),gS=M(async e=>{try{return(await $h(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Ie({from:Od,to:gS});const gi=M(async()=>{try{return(await Eh()).data}catch{throw new Error("Не удалось войти")}}),Dd=k(),$n=X(Oo).on(gi,e=>({...e,error:null})).on(gi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(gi.failData,(e,i)=>({...e,error:i.message})).on(Ad,(e,i)=>({...e,completed:i.completed})).on(Dd,()=>({...Oo})),fS={useTeacherDataVerification:hS},xS={getTeacherDataVerificationFx:gi},mS={postTeacherDataVerification:Od,changeCompleted:Ad,clearStore:Dd},bS=Object.freeze(Object.defineProperty({__proto__:null,effects:xS,events:mS,selectors:fS},Symbol.toStringTag,{value:"Module"})),yS=[Lh,dt,Yh,Kh,cg,Zk,oS,zb,Wh,aS,W_,uS,bS,ig,Mh,Yk],vS=()=>{yS.forEach(e=>{e.events.clearStore()})},_S=()=>{localStorage.removeItem(B.Token),localStorage.removeItem(B.JWT),localStorage.removeItem(B.JWTRefresh),sessionStorage.removeItem(B.Token),sessionStorage.removeItem(B.JWT),localStorage.removeItem(B.JWTRefresh)},at=localStorage.getItem(B.Token)??"",rt=()=>JSON.parse(localStorage.getItem(B.SavePassword)??"true"),_n=M(async e=>{try{const{data:i}=await Yu(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await ht.post("/old",n)}catch{}return _S(),rt()?(localStorage.setItem(B.Token,i.token),localStorage.setItem(B.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(B.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(B.Token,i.token),sessionStorage.setItem(B.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(B.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),_t=M(async e=>{try{const[i,n]=await Promise.all([Ju(e.token),pa()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:Ih({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:rt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),qn=M(async e=>{try{return(await Xu(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Nd=M(()=>{rt()?(localStorage.removeItem(B.Token),localStorage.removeItem(B.JWT),localStorage.removeItem(B.JWTRefresh)):(sessionStorage.removeItem(B.Token),sessionStorage.removeItem(B.JWT),sessionStorage.removeItem(B.JWTRefresh)),vS()}),Id=e=>{const i=localStorage.getItem(B.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(B.SavePassword,n.toString()),n},Rd=k(),Ps=k(),Ld=k(),zd=k(),Md=k();Ie({from:Rd,to:_n});O({clock:_n.doneData,target:_t});Ie({from:Ps,to:Nd});at&&rt()?_t({token:at,jwt:localStorage.getItem(B.JWT)}):Nd();const wS={currentUser:null,error:null,isAuthenticated:!!(at!=null&&at.length),savePassword:rt(),loginEuz:""};Id();const Fd=X(wS).on(_t,e=>({...e,error:null})).on(_t.doneData,(e,i)=>i).on(_t.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(at!=null&&at.length),savePassword:rt()})).on(_n.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:rt()})).on(Ps,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:rt()})).on(Md,(e,{savePassword:i})=>({...e,savePassword:Id(i)})).on(qn,e=>({...e,error:null})).on(qn.doneData,(e,i)=>({...e,loginEuz:i})).on(_t.failData,(e,i)=>({...e,error:i.message})).on(zd,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Ld,e=>({...e,currentUser:null})),ve={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Fd);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(_n.pending),error:i}}},Pt={login:Rd,logout:Ps,changeSavePassword:Md,clear:Ld,update:zd},jS={getUserFx:_t,getLoginEuzFx:qn},kS=()=>{const e="0.0.1";localStorage.getItem(B.Version)!==e&&(localStorage.clear(),localStorage.setItem(B.Version,e),Pt.logout())},SS=p.div`
    max-height: 400px;
    overflow-y: auto;
`,TS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(he,{text:e.message,image:t.jsx($u,{}),children:t.jsxs(P,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(fe,{}),t.jsx(Rl,{title:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:t.jsxs(P,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(Pu,{})]})}),children:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(SS,{children:e.stack})})})]})})});class Bd extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(TS,{error:this.state.error}):this.props.children}}const ES="https://api.mospolytech.ru/physedjournal/graphql/",fi=ht.create({baseURL:ES}),$S={headers:{"Content-Type":"application/json"}};fi.interceptors.request.use(da);fi.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await On(fi)(e):e},On(fi));const PS=async e=>{var n;const i=await fi.post("",{query:e},$S);if(Hd(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Hd(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Hd(e[i]))return!0}return!1}const CS=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Ud=k(),Cs=Cu({effect:async({currentUser:e})=>({...(await PS(CS((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Fd}),OS=Ou(Cs,null);O({clock:Ud,target:Cs});const AS=Cs.pending,DS={load:Ud},qT={peTeacher:OS,isLoading:AS},Wd=k(),Vd=M(gh);O({clock:Wd,target:Vd});const Gd=X([]),YT=Yn(Gd,e=>e.map(i=>i.divisionName));O({clock:Vd.doneData,target:Gd});function qd(e){const{pathname:i}=Ht();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const NS=()=>{const{allRoutes:e}=Be.useMenu();return e?t.jsxs(ia,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(na,{path:i,component:n,exact:!s},i)),t.jsx(Ye,{exact:!0,to:xs})]}):null},IS=le.memo(NS),RS=p.div`
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
`,LS=()=>{const{open:e,content:i,position:n}=rf.useContextMenu(),s=l.useRef(null);return Gt(s,()=>Ne.close()),t.jsx(fn,{isOpen:e,children:t.jsx(RS,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Yd=200,zS=5e3,MS=()=>{const{visibleNotifications:e}=it.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{$t.clearVisibleById(a)},Yd)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??zS))},[e]),{handleClose:o,closing:i}},FS=p.div`
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
`,BS=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Yd/1e3}s forwards;

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
`;const HS=()=>{const{visibleNotifications:e}=it.useLkNotifications(),{closing:i,handleClose:n}=MS();return t.jsx(FS,{children:e.map(s=>t.jsx(BS,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Fl,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Ao=p.div`
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
`,US=({loading:e})=>{const{data:{user:i},error:n}=ve.useUser(),s=i?Ae(i==null?void 0:i.fullName):j.blue.main,o=()=>jS.getUserFx(JSON.parse(localStorage.getItem(B.Token)??"")),a=()=>Pt.logout();return n?t.jsx(Ao,{$loading:!0,color:s,children:t.jsx(he,{text:n,children:t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(Jn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(Ao,{color:s,$loading:e,children:[t.jsx(rn,{short:!0,width:"100px"}),e&&t.jsx(Qe,{})]})},WS=p.div`
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
`,VS=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Ss.useStory();return t.jsx(WS,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():vt.changeCurrentPage({value:o+1})})})},GS=p(an)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,qS=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Ss.useStory();return t.jsxs(GS,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(VS,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Du,{}):t.jsx(Au,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Ke,{}),onClick:n})]})},YS=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,JS=p(Ze)`
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
`,XS=p.div`
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
    transform: ${({align:e})=>YS(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,KS=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=Ut();return t.jsxs(JS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(ns,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(XS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(H,{size:2,align:f,children:o}),t.jsx(se,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),vt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},QS=p.div`
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
`,Do=p.div`
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
`,ZS=()=>{const{pages:e,isOpen:i,currentPage:n}=Ss.useStory(),s=l.useRef(null);Gt(s,()=>vt.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(fn,{isOpen:i,children:t.jsx(QS,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(qS,{pages:e.length,onClose:()=>vt.close(),playing:o}),t.jsx(Do,{left:"15px",onClick:()=>{n!==0&&vt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(_i,{})}),t.jsx(KS,{setPlaying:a,currentPage:n,...r}),t.jsx(Do,{right:"15px",onClick:()=>{n!==e.length-1?vt.changeCurrentPage({value:n+1}):vt.close(),a(!0)},children:t.jsx(gt,{})})]})})})},eT=()=>{const{data:{user:e}}=ve.useUser(),{notifications:i,loading:n,loaded:s}=it.useLkNotifications(),{settings:o}=Vt.useSettings(),[a]=wi([Oa.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{An.getElectronicInteraction(),a&&!a.status&&$t.add(xd("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||An.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(md(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,$t.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{tt.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},tT=()=>{const{data:{user:e}}=ve.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Mu);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},iT=()=>{const e=mr(),{open:i}=te(),n=tT();return eT(),xt(),l.useEffect(()=>{n&&n&&i(t.jsx(_c,{}),"Что нового")},[n]),{currentPage:e}},nT=p.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,sT=p.div`
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
`,oT=p.div`
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
`,aT=()=>{const{data:{user:e}}=ve.useUser(),i=l.useRef(null),{allRoutes:n}=Be.useMenu(),{currentPage:s}=iT(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return qd(i.current),t.jsxs(nT,{children:[t.jsx(US,{loading:!e||!n}),t.jsx(ZS,{}),t.jsx(M1,{}),t.jsxs(sT,{children:[t.jsx(S1,{headerVisible:o,currentPage:s}),t.jsx(oT,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(Bd,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(IS,{})})})}),t.jsx(Sw,{})]}),t.jsx(G1,{}),t.jsx(B1,{}),t.jsx(Y1,{}),t.jsx(LS,{}),t.jsx(Aw,{}),t.jsx(HS,{})]})},rT=le.memo(aT),lT=()=>{const{data:{isAuthenticated:e,user:i}}=ve.useUser(),{data:n}=dt.selectors.useData(),{settings:s}=Vt.useSettings();return qd(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Fe.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(dt.effects.getFx(),Fe.getWorkerPosts(),Wd()),DS.load())},[e,i]),l.useEffect(()=>{i&&(s?tt.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):fg.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(rT,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(ia,{children:[nv.map(({path:o,Component:a},r)=>t.jsx(na,{path:o,component:a,exact:!0},r)),t.jsx(Ye,{exact:!0,to:fl})]})})},cT=p.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;kS();const dT=()=>(xt(),t.jsx(Lv,{children:t.jsx(Nu,{basename:"/",children:t.jsx(cT,{children:t.jsx(Bd,{children:t.jsx(lT,{})})})})}));Iu.render(t.jsxs(le.StrictMode,{children:[t.jsx(k_,{}),t.jsx(dT,{})]}),document.getElementById("root"));export{Fd as $,wj as A,_ as B,Je as C,fe as D,j as E,ss as F,he as G,U as H,Cc as I,W as J,yt as K,Qh as L,Q as M,Ww as N,Qe as O,Cy as P,Se as Q,w1 as R,St as S,H as T,wT as U,ve as V,Ve as W,se as X,Si as Y,nS as Z,$t as _,G as a,Y as a$,iS as a0,_s as a1,UT as a2,WT as a3,vT as a4,ye as a5,Fe as a6,VT as a7,sn as a8,Ze as a9,f0 as aA,sb as aB,TT as aC,ob as aD,kT as aE,P0 as aF,ST as aG,ds as aH,hb as aI,Gd as aJ,ET as aK,gv as aL,Jw as aM,uj as aN,re as aO,Ic as aP,qi as aQ,iv as aR,CT as aS,mv as aT,xv as aU,Ph as aV,Ge as aW,be as aX,$T as aY,bs as aZ,Ci as a_,Yi as aa,Ee as ab,Dl as ac,Sh as ad,Th as ae,Ya as af,HT as ag,ws as ah,Ja as ai,Pv as aj,Ov as ak,Be as al,$v as am,Tl as an,tv as ao,GT as ap,We as aq,pe as ar,Wt as as,Ue as at,jT as au,$s as av,YT as aw,Bh as ax,Bs as ay,Es as az,xS as b,V_ as b$,Ne as b0,ln as b1,Gt as b2,Oa as b3,An as b4,Mh as b5,De as b6,mt as b7,ot as b8,ay as b9,DT as bA,AT as bB,me as bC,s1 as bD,Ul as bE,Gy as bF,st as bG,Pt as bH,Iw as bI,sv as bJ,ev as bK,Zy as bL,Qy as bM,ic as bN,H_ as bO,gn as bP,Pi as bQ,es as bR,MT as bS,I_ as bT,El as bU,R_ as bV,L_ as bW,ac as bX,Nt as bY,G_ as bZ,mc as b_,oy as ba,kw as bb,FT as bc,zT as bd,ow as be,Kl as bf,ks as bg,BT as bh,Vt as bi,Xt as bj,kl as bk,c1 as bl,Ae as bm,js as bn,Rn as bo,U_ as bp,Hl as bq,x1 as br,z as bs,En as bt,OT as bu,Z1 as bv,IT as bw,RT as bx,LT as by,NT as bz,ig as c,vc as c0,O_ as c1,l_ as c2,hw as c3,rw as c4,xt as c5,Zl as c6,oc as c7,Nr as c8,yi as c9,bT as cA,cS as cB,dS as cC,yT as cD,Rh as cE,hT as cF,uT as cG,Xi as cH,j_ as cI,ns as cJ,Lh as cK,tf as cL,_T as cM,jj as cN,Ii as cO,yj as cP,vj as cQ,bj as cR,Oc as cS,aS as cT,Y_ as ca,Nl as cb,no as cc,sa as cd,nn as ce,av as cf,ov as cg,mT as ch,xT as ci,Ol as cj,Cl as ck,ki as cl,t_ as cm,Za as cn,gT as co,vm as cp,za as cq,fT as cr,PT as cs,an as ct,l1 as cu,jS as cv,Ni as cw,it as cx,Xy as cy,p1 as cz,mn as d,mS as e,oo as f,pt as g,Ga as h,or as i,et as j,Vg as k,oe as l,Ch as m,a1 as n,DS as o,PS as p,ee as q,P as r,fS as s,Rm as t,te as u,Ts as v,Yt as w,os as x,qT as y,Bg as z};
