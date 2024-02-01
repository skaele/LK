import{F as Ye,a as xi,b as _t,c as en,H as Pn,d as Pt,y as M,u as k,p as J,e as q,x as E,S as Le,m as Jn,r as l,s as p,j as t,f as Je,I as Xd,g as Kd,h as Qd,i as Zd,k as Ro,A as Xn,l as D,n as ep,o as je,q as Mt,t as wn,v as tp,w as ip,R as le,z as wt,B as vi,C as pt,L as Z,D as fi,E as np,G as sp,J as tn,K as Ut,M as op,N as ap,O as ut,P as He,Q as Lo,T as Wt,U as zo,V as Kn,W as rt,X as Mo,Y as Fo,Z as _i,_ as Bo,$ as Ho,a0 as rp,a1 as lp,a2 as cp,a3 as dp,a4 as Ge,a5 as Ft,a6 as pp,a7 as up,a8 as hp,a9 as gp,aa as xp,ab as fp,ac as X,ad as mp,ae as Uo,af as Wo,ag as bp,ah as yp,ai as Vo,aj as Ct,ak as Qn,al as Go,am as vp,an as _p,ao as wp,ap as qo,aq as jp,ar as nn,as as kp,at as Yo,au as Jo,av as Xo,aw as Ko,ax as Sp,ay as Tp,az as Ds,aA as Qo,aB as Vi,aC as Ep,aD as $p,aE as oi,aF as Zo,aG as ea,aH as ne,aI as Zn,aJ as Ns,aK as ta,aL as Pp,aM as Cp,aN as Op,aO as Ap,aP as Bi,aQ as Dp,aR as Np,aS as Ip,aT as Rp,aU as Lp,aV as zp,aW as Mp,aX as Fp,aY as Bp,aZ as Hp,a_ as Up,a$ as Wp,b0 as Vp,b1 as Gp,b2 as qp,b3 as Yp,b4 as Jp,b5 as Xp,b6 as Kp,b7 as Qp,b8 as Zp,b9 as eu,ba as ia,bb as tu,bc as iu,bd as nu,be as su,bf as ou,bg as au,bh as ru,bi as es,bj as lu,bk as cu,bl as du,bm as pu,bn as uu,bo as hu,bp as gu,bq as xu,br as fu,bs as na,bt as mu,bu as Cn,bv as bu,bw as yu,bx as vu,by as Is,bz as _u,bA as wu,bB as ju,bC as ku,bD as Rs,bE as Su,bF as Tu,bG as Eu,bH as $u,bI as Pu,bJ as Cu,bK as Ou,bL as sa,bM as oa,bN as Au,bO as Du,bP as Nu,bQ as Iu}from"./vendor-2324f29b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Ru="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Lu=3,sn=["home","settings","all"],aa=["home","settings","download-agreements","all"],ra="https://lk.eseur.ru/signup",zu="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},It={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},pT={Зачтено:w.green,"Не зачтено":w.red,Отлично:w.green,Хорошо:w.blue,Удовлетворительно:w.orange,Неудовлетворительно:w.red,"Не явился":w.red,default:w.red},uT={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",Mu="2023-10-03T10:43:43",jt={info:{icon:Ye,color:"blue",title:"Информация"},alert:{icon:xi,color:"orange",title:"Внимание!"},failure:{icon:_t,color:"red",title:"Ошибка"},success:{icon:en,color:"green",title:"Успешно"},tip:{icon:Pn,color:"grey",title:"Подсказка"},hint:{icon:Pn,color:"white",title:"Подсказка"},hrFailure:{icon:_t,color:"red",title:"Ошибка"}},Fu={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Bu=["image/jpeg","image/jpg","image/png","application/pdf"],Hu=10,la="(max-width: 766px)",Uu="(min-width: 767px)",ca="(max-width: 1000px)",da="(max-width: 1380px)",pa="(min-width: 1381px)",ee={isMobile:`@media ${la}`,isNotMobile:`@media ${Uu}`,isTablet:`@media ${ca}`,isSmallTesktop:`@media ${da}`,isMiddleTesktop:`@media ${pa}`},Wu=[{query:la,title:"isMobile",value:"mobile"},{query:ca,title:"isTablet",value:"tablet"},{query:da,title:"isSmallDesktop",value:"smallDesktop"},{query:pa,title:"isMiddleDesktop",value:"middleDesktop"}],ts={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},O=!window.location.port||window.location.port==="80";console.log("Running on production",O);var B=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(B||{});const Xe=()=>localStorage.getItem(B.JWT)||sessionStorage.getItem(B.JWT),Vt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Vu=()=>JSON.parse(localStorage.getItem(B.SavePassword)??"true"),On=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)$t.logout();else{n._retry=!0;const h=localStorage.getItem(B.JWTRefresh);try{const{accessToken:x,refreshToken:g}=await Ku(h??"");return Vu()?(localStorage.setItem(B.JWT,x),localStorage.setItem(B.JWTRefresh,g)):(sessionStorage.setItem(B.JWT,x),sessionStorage.setItem(B.JWTRefresh,g)),e(n)}catch{$t.logout()}}return Promise.reject(i)},ua=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${Xe()}`,e),Gu=`${R}/lk_api.php`,qu="https://api.mospolytech.ru/serviceforfrontpersonnelorders",W=Pt.create({baseURL:Gu,withCredentials:!0}),ue=Pt.create({baseURL:qu});ue.interceptors.request.use(ua);!O&&ue.interceptors.response.use(e=>e,On(ue));function is(e){return e.isAxiosError}function V(){return localStorage.getItem(B.Token)??sessionStorage.getItem(B.Token)??""}const Yu=({login:e,password:i})=>W.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Ju=e=>W.get(`?getUser&token=${e}`),Xu=e=>W.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),hT=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",V()),W.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},gT=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),W.post(`?changeADPass=1&token=${V()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},xT=async e=>{const i=new FormData;return i.set("email",e),i.set("token",V()),W.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},fT=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",V()),W.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Ku=async e=>{const{data:i}=await Pt.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Qu=e=>W.get(`?getSchedule&group=${e}&token=${V()}`),Zu=e=>W.get(`?getScheduleTeacher&fio=${e}&token=${V()}`),eh=()=>W.get(`?getSchedule&session=1&token=${V()}`),th=e=>W.get(`?getScheduleTeacher&fio=${e}&session=1&token=${V()}`),ih=()=>W.get(`?getPayments&token=${V()}`),nh=e=>W.get(`?signAgreement=${e}&token=${V()}`),sh=e=>W.get(`?signContract=${e}&token=${V()}`),oh=async({semestr:e})=>{var i,n;return(n=(i=await W.get(`?getAcademicPerformance&semestr=${e}&token=${V()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},ah=e=>W.get(`?getMessages&token=${V()}&id=${e}`),rh=async()=>(await W.get(`?getPEPStatus&token=${V()}`)).data,lh=async()=>(await W.get(`?setPEPAccept&token=${V()}`)).data,ch=()=>W.get(`?getContactData&token=${V()}`),dh=e=>{const i=new FormData;i.set("token",V()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return W.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ph=()=>W.get(`?getRequestHighComfort&token=${V()}`),mT=e=>{const i=new FormData;i.set("token",V()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return W.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},uh=()=>W.get(`?getAppRequests&token=${V()}`),ha=()=>W.get(`?getAppData&token=${V()}`),hh=async()=>await ue.get(`/Dismissal.GetAllHistory?employeeGuid=${Vt(Xe()??"").IndividualGuid}`),gh=async()=>{const{data:e}=await ue.get("/AnotherPlaceWork.GetDivisions");return e.divisions},xh=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",V()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await W.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},fh=()=>ue.get(`?getAppRequests&token=${V()}`),mh=()=>ue.get(`?getAppData&token=${V()}`),bh=e=>ue.post("Dismissal.Post",e),yh=async()=>(await W.get(`?getAdminLinks&token=${V()}`)).data,vh=async e=>(await W.get(`?PDinfo&token=${V()}`)).data,ga=()=>W.get(`?getNotification&token=${V()}`),_h=e=>W.get(`?viewNotification=${e}&token=${V()}`),wh=Object.freeze(Object.defineProperty({__proto__:null,get:ga,view:_h},Symbol.toStringTag,{value:"Module"})),xa=()=>W.get(`?getDocList&token=${V()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),jh=e=>W.get(`?viewDoc=${e}&token=${V()}`),kh=Object.freeze(Object.defineProperty({__proto__:null,get:xa,view:jh},Symbol.toStringTag,{value:"Module"})),Sh=(e,i,n,s)=>W.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${V()}`),Th=e=>W.get(`?getDivs=${e}&page=1&token=${V()}`),Eh=()=>W.get(`?getCheckData&token=${V()}`),$h=e=>{const i=new FormData;i.set("token",V()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return W.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Ph=(e,i,n,s)=>W.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${V()}`),Ch=async e=>await W.get(`?getGroups=${e}&perpage=30&page=1&token=${V()}`),Oh=async()=>(await W.get(`?getAlerts&token=${V()}`)).data,Ah=()=>W.get(`?getNotifications&token=${V()}`),Dh=e=>W.get(`?clearNotificationById=${e}&token=${V()}`),Nh=()=>W.get(`?clearAllNotifications&token=${V()}`);function Ih({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Ls={data:null,preparedData:null,loading:!1,error:null},on=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Ru})=>{const o=e??Ls,a=()=>({data:q(u).data,preparedData:q(u).preparedData,loading:q(r.pending),error:q(u).error}),r=M(async h=>{try{const x=await i.get(h);return{data:x,preparedData:n?n(x):x}}catch(x){throw new Error(s(x))}}),c=M(async h=>{var x;try{const g=await((x=i.post)==null?void 0:x.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),u=J(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:x})=>({...h,error:x,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:x,preparedData:g})=>({...h,data:x,preparedData:g})).on(r.failData,(h,x)=>({...h,error:x.message})).on(d,()=>({...Ls}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function Rh(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Lh=on({api:{get:oh},prepareData:Rh}),lt=on({api:{get:yh}}),zh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Mh=on({api:{get:Oh},prepareData:zh}),zs={message:"",type:"success",isOpen:!1,time:2e3},fa=k(),ma=k(),ba=k();J(zs).on(fa,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ma,(e,{isOpen:i})=>({...e,isOpen:i})).on(ba,()=>({...zs}));const ht={evokePopUpMessage:fa,openPopUpMessage:ma,clearStore:ba},Ms={listApplication:null,error:null,dataUserApplication:null},ai=M(async()=>{const e=await fh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Hi=M(async()=>{const e=await mh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),an=M(async e=>await bh(e));E({clock:an.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ht.evokePopUpMessage});E({clock:an.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:ht.evokePopUpMessage});const Fh=k();Le({from:an.doneData,to:ai});J(Ms).on(Hi,e=>({...e,error:null})).on(Hi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Hi.failData,(e,i)=>({...e,error:i.message})).on(ai,e=>({...e,error:null})).on(ai.doneData,(e,i)=>({...e,listApplication:i})).on(ai.failData,(e,i)=>({...e,error:i.message})).on(Fh,()=>({...Ms}));const Bh={getApplicationsFx:ai,getUserDataApplicationsFx:Hi,postApplicationFx:an},Fs={message:"",type:"success",isOpen:!1,time:2e3},Hh=()=>q(Uh),ya=k(),va=k(),_a=k(),Uh=J(Fs).on(ya,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(va,(e,{isOpen:i})=>({...e,isOpen:i})).on(_a,()=>({...Fs})),wa={usePopUpMessage:Hh},H={evokePopUpMessage:ya,openPopUpMessage:va,clearStore:_a},Wh=Object.freeze(Object.defineProperty({__proto__:null,events:H,selectors:wa},Symbol.toStringTag,{value:"Module"})),Bs={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},ri=M(async()=>{const e=await hh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),li=M(async()=>{const e=await uh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),ci=M(async()=>{const e=await ha();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ns=M(async e=>{const i=await xh(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Vh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(Gh);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(ci.pending),workerLoading:q(Jn(ri.pending,Bh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},ja=k();Le({from:ns.doneData,to:li});E({clock:ns.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:H.evokePopUpMessage});const Gh=J(Bs).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,dataUserApplication:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(li,e=>({...e,error:null})).on(li.doneData,(e,i)=>({...e,listApplication:i})).on(li.failData,(e,i)=>({...e,error:i.message})).on(ri,e=>({...e,error:null})).on(ri.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(ri.failData,(e,i)=>({...e,error:i.message})).on(ja,()=>({...Bs})),ye={useApplications:Vh},Re={getApplicationsFx:li,getUserDataApplicationsFx:ci,postApplicationFx:ns,getWorkerPosts:ri},qh={clearStore:ja},Yh=Object.freeze(Object.defineProperty({__proto__:null,effects:Re,events:qh,selectors:ye},Symbol.toStringTag,{value:"Module"})),Hs={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Jh=()=>q(Xh),ka=k(),Sa=k(),Ta=k(),Xh=J(Hs).on(ka,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(Sa,e=>({...e,isOpen:!1})).on(Ta,()=>({...Hs})),Ea={useConfirm:Jh},nt={evokeConfirm:ka,closeConfirm:Sa,clearStore:Ta},Kh=Object.freeze(Object.defineProperty({__proto__:null,events:nt,selectors:Ea},Symbol.toStringTag,{value:"Module"})),Qh=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=M(async u=>{const h=await i.post(u);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});E({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:H.evokePopUpMessage}),E({clock:a.failData,fn:u=>({message:`${u.message}`,type:"failure"}),target:H.evokePopUpMessage}),E({clock:a.doneData,target:Re.getApplicationsFx});const r=M(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(u){throw new Error(u)}return n.data}),c=k(),d=J(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Zh,events:eg,selectors:tg}=Qh({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:ch,post:dh}}),ig=Object.freeze(Object.defineProperty({__proto__:null,effects:Zh,events:eg,selectors:tg},Symbol.toStringTag,{value:"Module"})),$a=k(),Pa=k(),Ca=k(),Oa=k(),wi=M(async()=>{const i=(await lh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});E({clock:wi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:H.evokePopUpMessage});E({clock:wi.doneData,fn:()=>!0,target:Ca});E({clock:wi.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:H.evokePopUpMessage});const mi=M(async()=>{try{return(await rh())[0]}catch(e){throw new Error(e)}});E({clock:Pa,target:wi});E({clock:$a,target:mi});const Aa=k(),ng=mi.pending,sg=wi.pending,og=J(!1).on(Oa,(e,i)=>i),ag=J(!1).on(Ca,(e,i)=>i),rg=J(null).on(mi,()=>null).on(mi.failData,(e,i)=>i.message),lg=J(null).on(mi.doneData,(e,i)=>i).on(Aa,()=>null),Da={$error:rg,$electronicInteractionStore:lg,$completed:og,$done:ag,$loading:ng,$workerLoading:sg},An={getElectronicInteraction:$a,postElectronicInteraction:Pa,changeCompleted:Oa,clearStore:Aa},cg=Object.freeze(Object.defineProperty({__proto__:null,events:An,stores:Da},Symbol.toStringTag,{value:"Module"})),dg="Sep 07 2023 12:00:00 GMT+0300",Na="Sep 08 2023 12:00:00 GMT+0300",bT=e=>{const i=new Date;return i<new Date(dg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(Na)?"Подача заявок закрыта":""},se=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Us=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),se(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),se(n,"extraWeird")}},Ri=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Us(-30*11),maxValueInput:Us(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Li={kvdCert:Ri({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Ri({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Ri({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Ri({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Te=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const d=new Date(a.minValueInput);if(c<d)return!0}if(a.maxValueInput){const d=new Date(a.maxValueInput);if(c>d)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},pg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},ug=()=>Object.keys(Me).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),Ia=(e="")=>({[e]:{...ug(),[Me["settings-appearance"]]:{id:Me["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Me["settings-home-page"]]:{id:Me["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Me["settings-customize-menu"]]:{id:Me["settings-customize-menu"],property:{pages:sn}},[Me["settings-notifications"]]:{id:Me["settings-notifications"],property:pg}}});var Me=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Me||{});const Dn={settings:Ia(),error:null,completed:!1};let Ae;const hg=()=>({settings:q(Ui).settings[Ae],error:q(Ui).error,completed:q(Ui).completed}),gg=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},Ra=M(e=>{Ae=e;const i=JSON.parse(localStorage.getItem(B.NewSettings)??"{}")[Ae];return gg(i,Ia(e)[e])}),La=k(),za=k(),Ma=k(),Ui=J(Dn).on(za,(e,i)=>({...e,completed:i.completed})).on(Ra.doneData,(e,i)=>({...e,settings:{[Ae]:i}})).on(La,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Ae]:{...e.settings[Ae],[i]:{...e.settings[Ae][i],property:{...e.settings[Ae][i].property,[n]:s}}}}})).on(Ma,()=>({...Dn}));Ui.watch(e=>{if(e!==Dn&&Ae){const i=JSON.parse(localStorage.getItem(B.NewSettings)??JSON.stringify({}));i[Ae]=e.settings[Ae],localStorage.setItem(B.NewSettings,JSON.stringify(i))}});const Gt={useSettings:hg},ji={updateSetting:La,changeCompleted:za,clearStore:Ma},xg={getLocalSettingsFx:Ra},gt=()=>{var a,r;const{settings:e}=Gt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),ji.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},fg=p.button`
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:x,shrinkTextInMobile:g,fixedInMobile:m,direction:f="horizontal",isActive:b=!0,height:y,notActiveClickMessage:P,flipped:I,...j}=e,S=C=>{b?s==null||s(C):P&&H.evokePopUpMessage({type:"failure",message:P,time:1e4})};return t.jsxs(fg,{text:!!n,onClick:S,isChosen:h,width:o,minWidth:a,background:r,padding:x,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:u,direction:f,isActive:b,fixedInMobile:m,height:y,flipped:I,...j,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const Nn=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Ws=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},mg=p.div`
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
`,bg=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],rn=p.div.withConfig({shouldForwardProp:e=>!bg.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Ws(n):Nn(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Nn(i):Ws(n)};
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
`;function Y({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(yg,{pulse:s,size:i,shape:e,margin:n})}const vg=p(rn)`
    height: 100%;
`,_g=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(vg,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(Y,{...o,key:a}))}),ft=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function wg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:ft(n),children:i});case 2:return t.jsx("h2",{className:"title",style:ft(n),children:i});case 3:return t.jsx("h3",{className:"title",style:ft(n),children:i});case 4:return t.jsx("h4",{className:"title",style:ft(n),children:i});case 5:return t.jsx("h5",{className:"title",style:ft(n),children:i});case 6:return t.jsx("h6",{className:"title",style:ft(n),children:i});default:return t.jsx("h1",{className:"title",style:ft(n),children:i})}}const jg=p.div`
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
`;function U(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(jg,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(wg,{size:o,width:r,children:[a&&t.jsx(kg,{children:"*"}),t.jsx(Sg,{width:r,children:s})]})]}):null}const Tg=(e,i,n)=>n?"#fff":e?w[jt[i].color].dark3:w[jt[i].color].light3,Eg=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Tg(i,e,n)};
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
`,$g=()=>t.jsx(_g,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function Q({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:x=!1,align:g="left",visible:m=!0,loading:f=!1}){if(!m)return null;const{theme:b}=gt();return t.jsxs(Eg,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:x,children:[t.jsx(U,{size:4,align:g,icon:n===null?null:n??jt[e].icon({}),children:a??jt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Je,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),f&&t.jsx($g,{})]})}p.div`
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
        background: ${({reached:e})=>e?w.green.main:"none"};
    }
`,Cg=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(Pg,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),xe=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Og="/assets/sad-emoji-0c60bf90.gif",oe=p.span`
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
`;function ge({text:e,image:i,size:n,children:s}){return t.jsxs(Ag,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Og,alt:"груфтим("}):i}),t.jsx(oe,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Dg="/assets/loading-c8041cd3.gif",Ng=p.img`
    width: 40px;
`;function Ke(e){return t.jsx(Ng,{...e,src:Dg,alt:"loading",className:"loading-circle"})}const Ig="/assets/logo-4d9aa449.png",Rg="/assets/mospolytech-logo-white-b1e4f630.png",Lg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function ln({width:e,className:i,short:n=!1}){return t.jsx(Lg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Rg:Ig,alt:"Logo"})})}const zg=p.img``;function ss({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(Y,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(zg,{src:i,alt:o,height:n,width:s})}const Mg=p.div`
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
`;function Fa({size:e,color:i}){return t.jsx(Mg,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Fg=p.div`
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
`;function Bg(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Fg,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(U,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const Hg=p.button`
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
`,kt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:x=!0,isLoading:g=!1,completed:m=!1,repeatable:f=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(H.evokePopUpMessage({message:c,type:"success"}),f&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const y=()=>{if(x&&!h&&!g)return i();b&&H.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Hg,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:x&&!h&&!m,onClick:y,isDone:h,width:n,height:s,repeatable:f,tabIndex:x&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Xd,{})," ",r]}):g?t.jsx(Ke,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Gi={small:"32px",middle:"36px",big:"44px"},Fe=e=>({size:i})=>e[i],Ug=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Wg=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},Vg={groupMask:Ug,phoneMask:Wg},Gg=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,x]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const g=l.useCallback(y=>y.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:y=>{y.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(y=>y==="password"?"text":"password"),handleOnChange:y=>{if(i(c?r?r(y.target.value,e):n==="tel"?Vg.phoneMask(y):n==="email"?g(y.target.value):y.target.value:y.target.value),n==="date"&&(o||a)){const P=new Date(y.target.value);let I=!1;if(o){const j=new Date(o);I=P<j}if(a&&!I){const j=new Date(a);I=P>j}x(I)}i(y.target.value)}}},qg=p.div`
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
`,ct=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:x="Введите сюда",type:g="text",danger:m,alertMessage:f,loading:b=!1,isActive:y=!0,inputAppearance:P=!0,mask:I=!1,autocomplete:j=!1,minValue:S=void 0,maxValue:C=void 0,maxLength:L=void 0,hideCross:N=!1,stepSize:K=.1,size:z="middle"}=i,{inputType:ie,buttonOnClick:ce,danger:$e,handleOnChange:ke,phoneMaskKeyDown:Ve}=Gg(s,o,g,m,S,C,h,I),he=s&&g==="date"?Kd(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(qg,{leftIcon:!!a,isActive:y,inputAppearance:P,width:d,danger:$e,minWidth:u,size:z,children:[t.jsx(U,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(Q,{type:"alert",visible:!!f,icon:t.jsx(Qd,{}),title:f??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:x,min:S,max:C,maxLength:L,step:K??void 0,type:ie,placeholder:x,value:he,autoComplete:j?"on":"off",onKeyDown:Ce=>g==="tel"&&Ve(Ce),onChange:ke,required:c,readOnly:!y,ref:n}),g!=="password"?!!(s!=null&&s.length)&&P&&(b?t.jsx(Ke,{}):!N&&t.jsx(_,{icon:t.jsx(Je,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ie==="password"?t.jsx(Zd,{}):t.jsx(Ro,{}),tabIndex:-1,onClick:ce})]})}),Yg=p.div`
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
`,Ue=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Kg,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ge,{text:n,image:a&&Jg,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Xn,{})})})}):t.jsx(Ke,{})}),t.jsx("div",{className:"content",children:e})]})),Qg=p.a`
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
`,Zg=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:x=!0,isChosen:g=!1})=>t.jsxs(Qg,{text:!!i,onClick:m=>x&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:x,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),ki=l.memo(Zg),os=p.div`
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
`,ex=p.a`
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
`,tx=({title:e,link:i,type:n})=>t.jsxs(ex,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(D,{}):t.jsx(ep,{})}),t.jsx("div",{className:"title",children:e})]}),ix=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),nx={open:!1,content:null,type:"left-click",position:{x:0,y:0}},sx=()=>je(ox),Ba=k(),Ha=k(),Ua=k(),ox=J(nx).on(Ba,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:ix(n,220,s),open:!0,content:i,type:o})).on(Ha,e=>({...e,open:!1})).on(Ua,(e,{position:i})=>({...e,position:i})),Ie={open:Ba,close:Ha,changePosition:Ua},ax={useContextMenu:sx},rx=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},jn=new Set,Wa=(e,i)=>{l.useEffect(()=>{const n=o=>{jn.add(o.which),!e.slice(0,e.length-1).find(r=>!jn.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{jn.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Qe=p.div`
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
`,$=p.div`
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
`,be=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Va=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=be(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Ga=e=>/[A-Za-z]/.test(e),lx=p.span`
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
`,qa=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Ga(e))return null;const s=Va(e),o=()=>i(s);return t.jsxs(oe,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(lx,{tabIndex:10,children:s})]})};function qt(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function dt(e,i,n=0){return e>i?n:e<n?i:e}const cx=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,dx=p(Qe)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,px=p.div`
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
`,Ya=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:x=!1,size:g="middle"})=>{const[m,f]=l.useState(0),[b,y]=l.useState(!1),P=l.useRef(null),I=l.useRef(null),j=l.useRef(null);qt(P,()=>y(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var N;return(N=j.current)==null?void 0:N.focus()},50)},[c]);const S=N=>{var K,z;(((a==null?void 0:a.length)??0)>0||o)&&y(!0),N.key==="ArrowDown"?((K=I.current)==null||K.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&f(dt(m+1,((a==null?void 0:a.length)??1)-1,0))):N.key==="ArrowUp"?((z=I.current)==null||z.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&f(dt(m-1,((a==null?void 0:a.length)??1)-1,0))):N.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),y(!1),h==null||h(a==null?void 0:a[m??0])):f(0)},C=N=>()=>{f(N),d((a==null?void 0:a[N].title)??""),y(!1),h==null||h(a==null?void 0:a[N])},L=()=>{a!=null&&a.length&&y(!0)};return t.jsxs(cx,{width:i,onKeyDown:S,onMouseDown:L,ref:P,children:[t.jsx(ct,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(Mt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:j}),t.jsx(qa,{setValue:d,value:e,visible:x}),b&&t.jsx(dx,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:S,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:N,icon:K},z)=>{const ie=m===z;return t.jsxs(px,{onClick:C(z),ref:ie?I:null,selected:ie,children:[K&&t.jsx("div",{className:"icon",children:K}),t.jsx("span",{children:N})]},N+z)})})]})},cn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Vs={small:"30px",middle:"44px",big:"68px"},Ja={small:"8px",middle:"10px",big:"16px"},ux={small:"0.8rem",middle:"0.9rem",big:"1rem"},hx={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},gx=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Fe(Vs)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Fe(Ja)};
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
`,xx=p.div`
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
        font-size: ${Fe(ux)};
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
            font-size: ${Fe(hx)};
        }
    }
`,fx=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(xx,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),mx=l.memo(fx),bx=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Fe(Ja)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,yx=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(bx,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},vx=l.memo(yx),_x=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=cn();return l.useEffect(()=>{var x;const h=((x=d==null?void 0:d.current)==null?void 0:x.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(gx,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(vx,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,x)=>t.jsx(mx,{size:a,id:x,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},x))]})})},as=l.memo(_x),wx=300,Xa=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=wx})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[x,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,x]},St=p.span`
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
`,jx=p.div`
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
`,xt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(jx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(St,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Ka=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=y=>{n(i(y,e))},x=()=>{n(null)},[g,m,f]=Xa({onDebounce:h,onClear:x}),b=y=>{m(y),o&&o(y)};return t.jsx(Ya,{value:g??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?f:!1,hints:a,width:r})},kx=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Yg,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Qa=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Sx=p(Qa)`
    background: var(--almostTransparentOpposite);
`,Tx=p(Qa)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Za=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Ee,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Sx,{},a)),t.jsx(Tx,{color:n,current:i})]}),Ex=p.label`
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
`,$x=p.div`
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
`,qe=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(Ex,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx($x,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(en,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},er=e=>e.split("/")[1],Px=e=>e*1024*1024,Cx=(e,i)=>(i??Bu).indexOf(e.type)!==-1,Gs=(e,i,n,s,o=Hu)=>{if(n&&i.length+e.length>n)return H.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Cx(e[a],s)?e[a].size>Px(o)?(H.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),H.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>er(r))}`,type:"failure",time:5e3}),i)},Ox=p.label`
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
`,Ne=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Ax=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=f=>{const b=f.target.files;b!=null&&b.length&&n(Gs(b,e,i,o,a))},h=f=>{f.preventDefault()},x=f=>{f.preventDefault(),d(!1);const b=f.dataTransfer.files;b.length&&n(Gs(b,e,i,o,a))},g=f=>{f.preventDefault(),d(!0)},m=f=>{f.preventDefault(),d(!1)};return t.jsxs(Ox,{isActive:s,showPulse:c,onDragOver:f=>s&&h(f),onDragEnter:f=>s&&g(f),onDragLeave:f=>s&&m(f),onDrop:f=>s&&x(f),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(wn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(wn,{className:"icon-1"}),t.jsx(wn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(oe,{align:"center",children:t.jsx(Ne,{words:[`Форматы: ${o?o.map(f=>er(f)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Dx=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Nx=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Ix=p.div`
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
`,Rx=({file:e,files:i,setFiles:n})=>{const{open:s}=te(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(ss,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>nt.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Nx(r,e.name,i))});return t.jsxs(Ix,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(tp,{}):t.jsx(ip,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(oe,{fontSize:"0.7em",children:Dx(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Je,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Lx=({files:e,setFiles:i})=>t.jsx(Ee,{title:"Список файлов",visible:!!e.length,onDelete:()=>nt.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Rx,{file:n,files:e,setFiles:i},n.name))}),tr=e=>t.jsxs(Ee,{gap:12,children:[t.jsx(Ax,{...e}),t.jsx(Lx,{files:e.files,setFiles:e.setFiles})]}),zx=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Mx=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(zx,{children:[t.jsx(qe,{...e}),n&&t.jsx(tr,{...i})]}),Fx=p.div`
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
`,ir=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=se(u,"extraWeird")}return t.jsxs(Fx,{children:[t.jsx(U,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(Q,{title:"Внимание",type:"alert",icon:t.jsx(xi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(ct,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(ct,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Bx=e=>{var f,b,y;const{width:i}=cn(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,d]=l.useState(0),[u,h]=l.useState(0),x=((f=n.current)==null?void 0:f.clientWidth)??1,g=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(x+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(y=n.current)==null?void 0:y.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:d,pageOffset:x,amountOfPages:g,currentPage:u,setCurrentPage:h,handleScroll:P=>{h(Math.ceil(P.currentTarget.scrollLeft/(x+(e??0))))}}},Hx=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:x,showPages:g,innerPadding:m,minWidth:f,wrapOnMobile:b,position:y,direction:P="vertical",verticalAlign:I="top",horizontalAlign:j="left",scroll:S=!0,visible:C=!0,...L}=e;if(!C)return null;const{listRef:N,leftArrow:K,rightArrow:z,handleScroll:ie,setScrollLeft:ce,pageOffset:$e,amountOfPages:ke,currentPage:Ve}=Bx(s);return t.jsxs(mg,{padding:r,position:y,width:o,minWidth:f,height:a,children:[t.jsxs(U,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(_,{icon:t.jsx(wt,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(_,{width:"50px",height:"15px",background:w.blue.transparent3,textColor:w.blue.light1,onClick:h,text:"Ещё"}),x&&t.jsx(_,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:x,text:"Удалить"})]}),t.jsx(rn,{verticalAlign:I,horizontalAlign:j,direction:P,ref:N,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:S,wrapOnMobile:b,onScroll:ie,...L,children:n}),(z||K)&&t.jsxs("div",{className:"bottom-wrapper",children:[K&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(vi,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{ce(he=>{var Ce;return dt(he-$e-(s??0),((Ce=N.current)==null?void 0:Ce.scrollWidth)??0)})}}),g&&t.jsx(Za,{direction:"horizontal",current:Ve,amount:ke}),z&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(pt,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{ce(he=>{var Ce;return dt(he+$e+(s??0),((Ce=N.current)==null?void 0:Ce.scrollWidth)??0)})}})]})]})},Ee=le.memo(Hx),Ux=()=>t.jsx("div",{className:"left",children:t.jsxs(Ee,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(ln,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Ee,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:vs,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(fi,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:wl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(np,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:_l,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(xi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:jl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(xi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(xe,{}),t.jsx(Z,{to:vl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(sp,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(ki,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(tn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),Wx=()=>{const{search:e}=Ut();return le.useMemo(()=>new URLSearchParams(e),[e])},Vx=()=>{const e=Wx(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=$t.login,x=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},m=b=>{$t.changeSavePassword({savePassword:b})},f=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:x,handleSavePassword:m,handleKeyPress:g,handleLogin:f,setPassword:r,setLogin:o}},Gx=()=>{const{loading:e,error:i,data:n}=ve.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:x,setLogin:g}=Vx();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Ee,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(ln,{width:"50px",short:!0,className:"logo second"}),t.jsx($,{jc:"space-between",children:t.jsx(U,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(Q,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Ee,{gap:16,scroll:!1,children:[t.jsx(U,{size:4,align:"left",children:"Вход"}),t.jsx(oe,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(Q,{type:"failure",visible:!!i,children:i}),t.jsx(Q,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(ct,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(ct,{value:o,setValue:x,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(qe,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(kt,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},qx=p(Qe)`
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
`,Yx=()=>{const{data:{isAuthenticated:e}}=ve.useUser();return t.jsxs(qx,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Ux,{}),t.jsx(Gx,{})]})},Jx=p.div`
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
`,Xx=()=>t.jsx(Jx,{children:t.jsx(Yx,{})}),we=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ge,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(tn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Kx="modulepreload",Qx=function(e){return"/"+e},qs={},v=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Qx(a),a in qs)return;qs[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const x=o[h];if(x.href===a&&(!r||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":Kx,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,x)=>{u.addEventListener("load",h),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Zx=l.lazy(()=>v(()=>import("./index-0b787222.js"),["assets/index-0b787222.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),ef=l.lazy(()=>v(()=>import("./index-fba29983.js"),["assets/index-fba29983.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-0d1cdebe.js"])),tf=l.lazy(()=>v(()=>import("./index-0be73b30.js"),["assets/index-0be73b30.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js"])),nf=l.lazy(()=>v(()=>import("./index-626a107c.js"),["assets/index-626a107c.js","assets/vendor-2324f29b.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Pb),void 0));const sf=l.lazy(()=>v(()=>import("./index-551a3442.js"),["assets/index-551a3442.js","assets/vendor-2324f29b.js","assets/index-53d71dd9.js"])),of=l.lazy(()=>v(()=>import("./index-09b291a3.js"),["assets/index-09b291a3.js","assets/vendor-2324f29b.js","assets/index-596e848b.js"])),af=l.lazy(()=>v(()=>import("./index-15facf75.js"),["assets/index-15facf75.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),rf=l.lazy(()=>v(()=>import("./index-2c988d7e.js"),["assets/index-2c988d7e.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js"])),lf=l.lazy(()=>v(()=>import("./index-0a25f970.js"),["assets/index-0a25f970.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-0d1cdebe.js"])),cf=l.lazy(()=>v(()=>import("./index-fe53dda6.js"),["assets/index-fe53dda6.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-0d1cdebe.js"])),df=l.lazy(()=>v(()=>import("./index-c74e2e2b.js"),["assets/index-c74e2e2b.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-0d1cdebe.js"])),pf=l.lazy(()=>v(()=>import("./index-58544b85.js"),["assets/index-58544b85.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-0d1cdebe.js"])),uf=l.lazy(()=>v(()=>import("./index-25af287a.js"),["assets/index-25af287a.js","assets/vendor-2324f29b.js","assets/ui-5e47f4cf.js","assets/index-140d8f78.js"])),hf=l.lazy(()=>v(()=>import("./index-18984d3a.js"),["assets/index-18984d3a.js","assets/vendor-2324f29b.js","assets/ui-5e47f4cf.js"])),gf=l.lazy(()=>v(()=>import("./index-95b95536.js"),["assets/index-95b95536.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-0d1cdebe.js"])),xf=l.lazy(()=>v(()=>import("./index-9d48f8ea.js"),["assets/index-9d48f8ea.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-0d1cdebe.js"])),ff=l.lazy(()=>v(()=>import("./index-b9ca9802.js"),["assets/index-b9ca9802.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-0d1cdebe.js"])),mf=l.lazy(()=>v(()=>import("./index-c23e99f0.js"),["assets/index-c23e99f0.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-0d1cdebe.js"])),bf=l.lazy(()=>v(()=>import("./index-d751829b.js"),["assets/index-d751829b.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-0d1cdebe.js"])),yf=l.lazy(()=>v(()=>import("./index-e5fad227.js"),["assets/index-e5fad227.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-0d1cdebe.js"])),vf=l.lazy(()=>v(()=>import("./index-798213e4.js"),["assets/index-798213e4.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-0d1cdebe.js"])),_f=l.lazy(()=>v(()=>import("./index-5eeb7e3c.js"),["assets/index-5eeb7e3c.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),wf=l.lazy(()=>v(()=>import("./index-cff4bd1e.js"),["assets/index-cff4bd1e.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-0d1cdebe.js"])),jf=l.lazy(()=>v(()=>import("./index-86bbf24d.js"),["assets/index-86bbf24d.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-0d1cdebe.js"])),kf=l.lazy(()=>v(()=>import("./index-cd45da6f.js"),["assets/index-cd45da6f.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-0d1cdebe.js"])),Sf=l.lazy(()=>v(()=>import("./index-9fdedbfe.js"),["assets/index-9fdedbfe.js","assets/vendor-2324f29b.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-0d1cdebe.js"])),Tf=l.lazy(()=>v(()=>import("./index-69b241f0.js"),["assets/index-69b241f0.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Ef=l.lazy(()=>v(()=>import("./index-dad25986.js"),["assets/index-dad25986.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),$f=l.lazy(()=>v(()=>import("./index-fe664434.js"),["assets/index-fe664434.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Pf=l.lazy(()=>v(()=>import("./index-ca619027.js"),["assets/index-ca619027.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Cf=l.lazy(()=>v(()=>import("./index-0e82bfd9.js"),["assets/index-0e82bfd9.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Of=l.lazy(()=>v(()=>import("./index-e58354c7.js"),["assets/index-e58354c7.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Af=l.lazy(()=>v(()=>import("./index-440400db.js"),["assets/index-440400db.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Df=l.lazy(()=>v(()=>import("./index-bd6f3315.js"),["assets/index-bd6f3315.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Nf=l.lazy(()=>v(()=>import("./index-e364177a.js"),["assets/index-e364177a.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),If=l.lazy(()=>v(()=>import("./index-66803a71.js"),["assets/index-66803a71.js","assets/vendor-2324f29b.js","assets/index-0d1cdebe.js","assets/index-f4ab0535.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Rf=l.lazy(()=>v(()=>import("./index-ef6e39a2.js"),["assets/index-ef6e39a2.js","assets/vendor-2324f29b.js"]));l.lazy(()=>v(()=>import("./index-d4e1f9a7.js"),["assets/index-d4e1f9a7.js","assets/vendor-2324f29b.js","assets/index-56c1cef8.js","assets/index-140d8f78.js"]));const rs=l.lazy(()=>v(()=>import("./index-9492ee19.js"),["assets/index-9492ee19.js","assets/vendor-2324f29b.js"])),Lf=l.lazy(()=>v(()=>import("./index-d739681b.js"),["assets/index-d739681b.js","assets/vendor-2324f29b.js"])),zf=l.lazy(()=>v(()=>import("./index-2293bb0b.js"),["assets/index-2293bb0b.js","assets/vendor-2324f29b.js"])),Mf=l.lazy(()=>v(()=>import("./index-977d5c56.js"),["assets/index-977d5c56.js","assets/vendor-2324f29b.js"])),Ff=l.lazy(()=>v(()=>import("./index-565d4bf2.js"),["assets/index-565d4bf2.js","assets/vendor-2324f29b.js"])),Bf=l.lazy(()=>v(()=>import("./index-c90aafa3.js"),["assets/index-c90aafa3.js","assets/vendor-2324f29b.js"])),Hf=l.lazy(()=>v(()=>import("./index-d5b5ae3d.js"),["assets/index-d5b5ae3d.js","assets/vendor-2324f29b.js","assets/get-default-subdivision-17957fb0.js"])),Uf=l.lazy(()=>v(()=>import("./index-e38a5d25.js"),["assets/index-e38a5d25.js","assets/vendor-2324f29b.js","assets/get-default-subdivision-17957fb0.js"])),Wf=l.lazy(()=>v(()=>import("./index-d8e753e4.js"),["assets/index-d8e753e4.js","assets/vendor-2324f29b.js"])),Vf=l.lazy(()=>v(()=>import("./index-49a5f825.js"),["assets/index-49a5f825.js","assets/vendor-2324f29b.js","assets/send-hr-form-work-transfer-e26559cb.js"])),Gf=l.lazy(()=>v(()=>import("./index-ba950452.js"),["assets/index-ba950452.js","assets/vendor-2324f29b.js","assets/send-hr-form-work-transfer-e26559cb.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>u0),void 0));l.lazy(()=>v(()=>import("./index-a6984438.js"),["assets/index-a6984438.js","assets/vendor-2324f29b.js","assets/BoldText-34495506.js","assets/help-links-1a8d01aa.js"]));const qf=l.lazy(()=>v(()=>import("./index-3a5c039d.js"),["assets/index-3a5c039d.js","assets/vendor-2324f29b.js"])),nr=l.lazy(()=>v(()=>import("./index-4968baf8.js"),["assets/index-4968baf8.js","assets/vendor-2324f29b.js","assets/index-56c1cef8.js","assets/index-140d8f78.js"])),sr=l.lazy(()=>v(()=>import("./index-d4e1f9a7.js"),["assets/index-d4e1f9a7.js","assets/vendor-2324f29b.js","assets/index-56c1cef8.js","assets/index-140d8f78.js"])),Yf=l.lazy(()=>v(()=>import("./index-a6bdf888.js"),["assets/index-a6bdf888.js","assets/vendor-2324f29b.js"]));l.lazy(()=>v(()=>import("./index-5d6a9939.js"),["assets/index-5d6a9939.js","assets/vendor-2324f29b.js","assets/index.esm-d8bc35f4.js"]));const Jf=l.lazy(()=>v(()=>import("./index-0b7c4eb0.js"),["assets/index-0b7c4eb0.js","assets/vendor-2324f29b.js"])),or=l.lazy(()=>v(()=>import("./index-661dcdfd.js"),["assets/index-661dcdfd.js","assets/vendor-2324f29b.js","assets/help-links-1a8d01aa.js"])),Xf=l.lazy(()=>v(()=>import("./index-1a696d6f.js"),["assets/index-1a696d6f.js","assets/vendor-2324f29b.js"])),Kf=l.lazy(()=>v(()=>import("./index-0901a4bd.js"),["assets/index-0901a4bd.js","assets/vendor-2324f29b.js","assets/alert-item-3abc138e.js","assets/is-valid-url-08a91344.js"])),Qf=l.lazy(()=>v(()=>import("./index-48e253f2.js"),["assets/index-48e253f2.js","assets/vendor-2324f29b.js","assets/index-53f917b4.js","assets/alert-item-3abc138e.js","assets/is-valid-url-08a91344.js"])),Zf=l.lazy(()=>v(()=>import("./index-0bac042f.js"),["assets/index-0bac042f.js","assets/vendor-2324f29b.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>gy),void 0));const em=l.lazy(()=>v(()=>import("./index-e89bdb12.js"),["assets/index-e89bdb12.js","assets/vendor-2324f29b.js"])),ar=l.lazy(()=>v(()=>import("./index-efecd485.js"),["assets/index-efecd485.js","assets/vendor-2324f29b.js","assets/index-53f917b4.js","assets/index-140d8f78.js"])),tm=l.lazy(()=>v(()=>import("./index-f275a022.js"),["assets/index-f275a022.js","assets/vendor-2324f29b.js","assets/index-fafb2aca.js"])),im=l.lazy(()=>v(()=>import("./index-96ab4ea9.js"),["assets/index-96ab4ea9.js","assets/vendor-2324f29b.js","assets/index-fafb2aca.js"])),nm=l.lazy(()=>v(()=>import("./index-7173b066.js"),["assets/index-7173b066.js","assets/vendor-2324f29b.js","assets/index-fafb2aca.js"])),sm=l.lazy(()=>v(()=>import("./index-f9137244.js"),["assets/index-f9137244.js","assets/vendor-2324f29b.js"])),om=l.lazy(()=>v(()=>import("./index-64e1e35d.js"),["assets/index-64e1e35d.js","assets/vendor-2324f29b.js","assets/index.esm-d8bc35f4.js"])),am=l.lazy(()=>v(()=>import("./index-973bbc85.js"),["assets/index-973bbc85.js","assets/vendor-2324f29b.js"])),rm=l.lazy(()=>v(()=>import("./index-e02f87a3.js"),["assets/index-e02f87a3.js","assets/vendor-2324f29b.js"])),lm=l.lazy(()=>v(()=>import("./index-00c9bdd8.js"),["assets/index-00c9bdd8.js","assets/vendor-2324f29b.js"])),cm=l.lazy(()=>v(()=>import("./index-469d42b4.js"),["assets/index-469d42b4.js","assets/vendor-2324f29b.js","assets/index-53d71dd9.js"])),dm=l.lazy(()=>v(()=>import("./index-8da95f95.js"),["assets/index-8da95f95.js","assets/vendor-2324f29b.js"])),pm=l.lazy(()=>v(()=>import("./index-d0ae4688.js"),["assets/index-d0ae4688.js","assets/vendor-2324f29b.js","assets/help-links-1a8d01aa.js"])),um=l.lazy(()=>v(()=>import("./index-4e985edb.js"),["assets/index-4e985edb.js","assets/vendor-2324f29b.js","assets/help-links-1a8d01aa.js"])),hm=l.lazy(()=>v(()=>import("./index-f1a9c0cd.js"),["assets/index-f1a9c0cd.js","assets/vendor-2324f29b.js"])),gm=l.lazy(()=>v(()=>import("./index-a6984438.js"),["assets/index-a6984438.js","assets/vendor-2324f29b.js","assets/BoldText-34495506.js","assets/help-links-1a8d01aa.js"])),xm=l.lazy(()=>v(()=>import("./index-d71a13f6.js"),["assets/index-d71a13f6.js","assets/vendor-2324f29b.js"])),fm=p.div`
    width: 100%;
`,mm=()=>t.jsxs(fm,{children:[t.jsx(Y,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(Y,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(Y,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),We=e=>{const{children:i,skeleton:n=t.jsx(mm,{}),loading:s=!1,...o}=e;return t.jsx(Qe,{...o,className:"block",children:s?n:i})},bm=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},kn=p.div`
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
`,vm=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:x}=bm(c,r);return c.length?t.jsxs(ym,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(kn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(wt,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(kn,{background:g.background,remove:u===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(x(g.id),s(g.id))},children:t.jsx(Je,{})})]},g.id)}),c.length&&!!n&&t.jsx(kn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Bt=(e,i)=>{switch(i){case"date":return se(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},_m=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,wm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),x=l.useCallback(m=>{var f,b;o(y=>(y&&y[m]&&delete y[m],{...y})),m===((f=i==null?void 0:i.column)==null?void 0:f.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const f=Object.values(s)[0].column;return m={[(f==null?void 0:f.field)??""]:{id:(f==null?void 0:f.field)??"",title:"Фильтр: "+(f==null?void 0:f.title)}},{...m}});else{const m=Object.values(s).find(f=>{var b;return!c[((b=f.column)==null?void 0:b.field)??""]});m&&d(f=>{var P,I;const b=((P=m.column)==null?void 0:P.field)??"",y="Фильтр: "+((I=m.column)==null?void 0:I.title);return f&&(f[b]={id:b,title:y}),{...f}})}i&&d(m=>{var y;const f=((y=i.column)==null?void 0:y.field)??"",b="Поиск";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}}),a&&d(m=>{var y;const f=((y=a.column)==null?void 0:y.field)??"",b="Сортировка";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,f=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&f){const y=e==null?void 0:e.filter(P=>be(Bt(P[f],m==null?void 0:m.type)).includes(be(Bt(i.value,m==null?void 0:m.type))));h(y)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(f=>!Object.values(s).find(b=>{var y;return f[((y=b.column)==null?void 0:y.field)??""]!==b.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var f;const m=((f=a==null?void 0:a.column)==null?void 0:f.field)??"";a?h(b=>{const y=[...b??[]];return y==null||y.sort((P,I)=>I[m]<P[m]?a.value==="asc"?1:-1:I[m]>P[m]?a.value==="asc"?-1:1:0),y}):(d(b=>{const y=_m(b,"Сортировка");return b&&y&&delete b[y],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:x,onRemoveAll:g}},In=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),In(n.children,i)):n?n.children:e},jm=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[x,g]=l.useState([]),[m,f]=l.useState(i),[b,y]=l.useState("");l.useEffect(()=>{f(i)});const P=l.useCallback(()=>{d(S=>!S)},[d]),I=l.useCallback(S=>{if(S.children)x.push(S.id.toString()),f(In(i,[...x])??[]),g([...x]);else{if(r)if(o)if(o.find(C=>C.id===S.id)){const C=o.filter(L=>L.id!==S.id);C.length?n(C):n(null)}else n([...o,S]);else n([S]);else n(S);!r&&P(),y(x.join("/"))}s==null||s(S)},[n,x]),j=l.useCallback(()=>{x.pop(),g([...x]),x.length===0?f(i):f(In(i,x)??[])},[x,f]);return qt(u,()=>{c&&P()}),{handleOpen:P,refElement:u,isOpen:c,multiple:r,handleSelect:I,selectedRoute:b,currentItems:m,route:x,goBack:j,refItems:h,appearance:a}},km=p.div`
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
`,Sm=p.div`
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
`,Ys=p.li`
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
`,$m=["isOpen"],Pm=p(op).withConfig({shouldForwardProp:e=>!$m.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Cm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:x}=jm(e),{isActive:g,width:m,title:f,required:b,selected:y,placeholder:P,size:I="middle"}=e;return t.jsxs(Sm,{onClick:i,appearance:x,ref:n,isOpen:s,isActive:g??!0,width:m,size:I,children:[t.jsx(U,{size:4,align:"left",bottomGap:"5px",visible:!!f,required:b,children:f}),t.jsxs(km,{multiple:o,appearance:x,size:I,children:[t.jsx(Tm,{appearance:x,children:o?y?y.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:P??"Не выбрано"}):t.jsx("div",{className:"single-header",children:y?t.jsxs(t.Fragment,{children:[!!y.icon&&t.jsx("span",{className:"icon",children:y.icon}),t.jsx("span",{className:"header-title",children:y.title})]}):t.jsx("span",{className:"not-chosen",children:P??"Не выбрано"})})}),t.jsx(Pm,{isOpen:s})]}),t.jsxs(Em,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:f,children:[!!d.length&&t.jsx(Ys,{isSelected:!1,onClick:j=>{j.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(vi,{}),"Назад"]})},-1),c.map(({id:j,icon:S,title:C,children:L,data:N})=>t.jsxs(Ys,{onClick:K=>{K.stopPropagation(),a({id:j,icon:S,title:C,children:L,data:N})},isSelected:!o&&!!y&&y.title.includes(C),leadingToSelected:r.includes(j.toString()),children:[!!S&&t.jsx("span",{className:"icon",children:S}),t.jsx("span",{className:"select-item-title",children:C}),!!L&&t.jsx("span",{className:"right-icon",children:t.jsx(pt,{})}),o&&!!y&&!!y.find(K=>K.title.includes(C))&&t.jsx("span",{className:"right-icon",children:t.jsx(en,{})})]},C))]})]})},rr=l.memo(Cm),Om=e=>{switch(e){case"desc":return H.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return H.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return H.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Am=p.div`
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
`,lr=p.div`
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
`,Im=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return Om(h),h?{column:d,value:h}:null})};return t.jsx(Dm,{children:e.map(d=>{var u,h,x,g;return t.jsxs(lr,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Mt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(ap,{className:"icon",style:{color:d.field===((x=a==null?void 0:a.column)==null?void 0:x.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Nm,{children:t.jsx(rr,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(f=>(m&&(f={...f,[d.field]:{column:d,value:m}}),f)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},Rm=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs($,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(vi,{}),onClick:()=>r(dt(n-1,e).toString())}),t.jsxs($,{w:"fit-content",gap:"6px",children:[t.jsx(ct,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(oe,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(pt,{}),onClick:()=>r(dt(n+1,e).toString())})]}):null},Lm=p.div`
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
`,mt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Lm,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,zm=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Mm=({obj:e,columns:i})=>t.jsx(zm,{children:i.map(n=>t.jsx(mt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Bt(e[n.field],n.type)},n.title))}),cr=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=te(),r=()=>a(t.jsx(Mm,{obj:n,columns:i||e}),"Информация");return t.jsx(Am,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(lr,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:u=>{c.onClick&&(u.stopPropagation(),c.onClick(n))},children:c.render?c.render(Bt(n[c.field],c.type),n):Bt(n[c.field],c.type)},c.field)})})})},Fm=p.div`
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
`,Um=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),u=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(Bm,{children:t.jsx(Ke,{})}):t.jsxs(Fm,{children:[h==null?void 0:h.map((x,g)=>t.jsx(cr,{onRowClick:a,columns:n,columnsExtended:s,el:x,index:g},g)),!(h!=null&&h.length)&&t.jsx(ge,{text:"Нет данных"}),u>0&&t.jsx(xe,{margin:"0",width:"100%"}),t.jsx(Hm,{children:t.jsx(Rm,{pages:u,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},Wm=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Vm=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Gm=({search:e,setSearch:i})=>{var n,s;return t.jsx(Wm,{closed:!(e!=null&&e.column),children:t.jsx(ct,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Vm((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Mt,{}),minWidth:"auto"})})},qm=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Ym(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Jm=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(qm(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(xe,{}),t.jsx(cr,{onRowClick:()=>null,columns:Ym(s),el:s,index:1})]})},Xm=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,Ze=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:u,setSearch:h,resultData:x,filter:g,setFilter:m,filterList:f,setFilterList:b,onRemoveOne:y,onRemoveAll:P}=wm(n);return t.jsxs(Xm,{children:[t.jsx(vm,{setList:b,padding:"0 10px",list:f,onRemoveOne:y,onRemoveAll:P}),t.jsx(Gm,{search:u,setSearch:h}),t.jsx(Im,{sort:c,setSort:d,columns:e,search:u,setSearch:h,filter:g,setFilter:m}),t.jsx(Um,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:x,maxOnPage:s}),t.jsx(Jm,{footer:a,data:n,columns:e})]})},yT={ready:"Готово",pending:"В работе",rejected:"Отклонено"},dn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},ls={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},vT=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],_T=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],Km=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(ls).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Qm=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Zm,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(e0,{columns:Km(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Zm=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,e0=p(Ze)`
    width: 100%;
`,t0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${Xe()}`},s=await Pt({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},i0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>se(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(ls).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{t0(i.applicationGuid)}})}}],n0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(o0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(s0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(r0,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(a0,{columns:i0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},s0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,o0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,a0=p(Ze)`
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
`,un=()=>t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Ye,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),dr=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(d0,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(p0,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(un,{})]}),t.jsx(l0,{})]})})})},d0=p.div`
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
`,u0=Object.freeze(Object.defineProperty({__proto__:null,default:dr},Symbol.toStringTag,{value:"Module"})),pr=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>se(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],ur=k(),hr=k(),gr=M(async()=>{const{data:e}=await ue.get(`Weekend.GetAllHistory?PersonalGuid=${Vt(Xe()??"").IndividualGuid}`);return e.orders});E({clock:ur,target:gr});const Si=M(async e=>(await ue.post("Weekend.AddWeekend",e)).data);E({clock:hr,target:Si});const xr=J([]),h0=Si.pending;E({clock:gr.doneData,target:xr});E({clock:Si.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ht.evokePopUpMessage});E({clock:Si.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ht.evokePopUpMessage});const g0={loadBufferHolidayWork:ur,sendBufferHolidayWork:hr},wT={sendBufferHolidayWorkFx:Si},x0={useBufferHolidayWork:()=>({data:je(xr),loading:je(h0)})},f0=()=>{const[e,i]=l.useState(!1);l.useEffect(g0.loadBufferHolidayWork,[]);const{data:n}=x0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(m0,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(b0,{columns:pr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},m0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,b0=p(Ze)`
    width: 100%;
`,y0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(_0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(v0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(w0,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},v0=p.div`
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
`,j0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(k0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(y0,{info:s,index:o})),t.jsx(f0,{})]}):null},k0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,S0=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(T0,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(E0,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(un,{})]}),t.jsx(j0,{})]})})})},T0=p.div`
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
`,fr=k(),mr=k(),Ti=M(async()=>{const{data:e}=await ue.get(`Vacation.GetAllHistory?personalGuid=${Vt(Xe()??"").IndividualGuid}`);return e});E({clock:fr,target:Ti});const Ot=M(async e=>(await ue.post("Vacation.AddVacation",e)).data);E({clock:mr,target:Ot});const qi=J(null);E({clock:Ti.doneData,fn:({employeeVacations:e})=>e,target:qi});E({clock:Ot.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:H.evokePopUpMessage});E({clock:Ot.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:H.evokePopUpMessage});E({clock:Ot.doneData,source:qi,fn:(e,{employeeVacations:i})=>[...e,...i],target:qi});E({clock:Ti.failData,fn:e=>{var n;return{message:is(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:H.evokePopUpMessage});E({clock:Ot.doneData,target:Ti});const $0={loadBufferHolidayPlanning:fr,sendBufferHolidayPlanning:mr},jT={sendBufferHolidayPlanningFx:Ot},P0={useBufferHolidayPlanning:()=>({data:je(qi),loading:je(Ot.pending),getDataLoading:je(Ti.pending)})},hn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${Xe()}`},o=await Pt({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var br=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(br||{});const cs=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(Q,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>br[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${se((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${se((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),hn(i.documentGuid,"0")}}):"-"}}],C0=()=>[...cs(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${se((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${se((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),hn(i.documentGuid,"1")}}):"-"}}],O0=()=>{const{data:e,getDataLoading:i}=P0.useBufferHolidayPlanning(),n=()=>$0.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>Lo(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(Ue,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(A0,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(wt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(Ke,{})}):t.jsx(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(Ze,{columns:cs(),columnsExtended:C0(),data:s,maxOnPage:10})})]})})},A0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Sn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},yr=()=>{const e=Wt(),{allRoutes:i}=Be.useMenu(),n=i??{},[s,o]=l.useState(Sn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Sn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Sn(a.pathname,n))}),[e,n]),s},D0={small:"600px",middle:"700px",big:"963px",large:"100%"},vr=e=>D0[(e==null?void 0:e.pageSize)??"middle"],N0=p(Qe)`
    position: relative;

    ${ee.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ee.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,I0=p.div`
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
`,R0=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ee.isMobile} {
        top: 40px;
    }
`,Yt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=yr(),r=vr(a);return t.jsx(Es,{padding:"0 0 10px 0",children:t.jsxs(N0,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(I0,{children:i}),n&&t.jsx(R0,{children:n}),e]})})});Yt.displayName="PageBlock";const L0=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications(),n=Wt();return t.jsx(Ue,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Yt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(zo,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Ye,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(O0,{})]})})},z0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(ls).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(Q,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],_r=k(),wr=k(),ds=M(async()=>{const{data:e}=await ue.get(`CarryForwardVacation.GetAllHistory?personalGuid=${Vt(Xe()??"").IndividualGuid}`);return e});E({clock:_r,target:ds});const Jt=M(async e=>(await ue.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);E({clock:wr,target:Jt});const Yi=J([]);E({clock:ds.doneData,fn:({employeeVacations:e})=>e,target:Yi});E({clock:Jt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:ht.evokePopUpMessage});E({clock:Jt.doneData,source:Yi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Yi});E({clock:ds.failData,fn:e=>{var n;return{message:is(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:H.evokePopUpMessage});E({clock:Jt.failData,fn:e=>{var n;return{message:is(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:ht.evokePopUpMessage});const Js={loadBufferHolidayTransfer:_r,sendBufferHolidayTransfer:wr},kT={sendBufferHolidayTransferFx:Jt},ps={useBufferHolidayTransfer:()=>({data:je(Yi),loading:je(Jt.pending)})},M0=()=>{const[e,i]=l.useState(!1),{data:n}=ps.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(F0,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(B0,{columns:z0(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},F0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,B0=p(Ze)`
    width: 100%;
`,H0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(W0,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(U0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(G0,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(x=>{if(x.vacation.status.orderStatus!="false"&&x.vacation.status.orderStatus!="")return x.vacation.status.orderStatus});return t.jsx(V0,{columns:cs(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},U0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,W0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,V0=p(Ze)`
    width: 100%;
`,G0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,q0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=ps.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(Y0,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(H0,{info:o,index:a,data:i})),t.jsx(M0,{})]})},Y0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,J0=()=>{const{data:e,loading:i}=ps.useBufferHolidayTransfer();return l.useEffect(()=>{Js.loadBufferHolidayTransfer()},[]),t.jsx(Ue,{load:Js.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(X0,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(K0,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(un,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(q0,{})]})})})},X0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,K0=p.div`
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
`,Q0=e=>localStorage.setItem("age",e.toString()),ST=e=>localStorage.getItem(e),Z0=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),eb={listMedicalExamination:null,error:null},Rt=M(async()=>{const e=await ue.get(`MedicalExamination.GetAllHistory?PersonalGuid=${Vt(Xe()??"").IndividualGuid}`);try{return Q0(e.data.age),Z0(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Ei=M(async e=>{try{const i=await ue.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),tb=()=>{const{listMedicalExamination:e,error:i}=je(ib);return{data:e,loading:je(Ei.pending),getDataLoading:je(Rt.pending),error:i}};k();Le({from:Ei.doneData,to:Rt});E({clock:Ei.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:H.evokePopUpMessage});E({clock:Ei.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:H.evokePopUpMessage});const ib=J(eb).on(Rt,e=>({...e,error:null})).on(Rt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(Rt.failData,(e,i)=>({...e,error:i.message})),nb={loadBufferMedicalExaminationFx:Rt,sendBufferMedicalExaminationFx:Ei},sb={useBufferMedicalExamination:tb},jr=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(Q,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${se(i==null?void 0:i.startDate,"numeric")} - ${se(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),hn(i==null?void 0:i.documentGuid,"0")}}):"-"}],ob=()=>[...jr(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),hn(i==null?void 0:i.documentGuid,"1")}}):"-"}],ab=()=>{const{data:e,getDataLoading:i}=sb.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=ye.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>Lo(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(Ue,{load:nb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(rb,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(wt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(Ke,{})}):t.jsx(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(Ze,{columns:jr(),columnsExtended:ob(),data:s,maxOnPage:10})})]})},rb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,lb=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:Re.getWorkerPosts,error:i,data:e,children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Ye,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(ab,{})]})})},kr=k(),Sr=k(),Tr=M(async()=>{const{data:e}=await ue.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${Vt(Xe()??"").IndividualGuid}`);return e.employeeHistories});E({clock:kr,target:Tr});const $i=M(async e=>(await ue.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);E({clock:Sr,target:$i});const Er=J([]),cb=$i.pending;E({clock:Tr.doneData,target:Er});E({clock:$i.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:ht.evokePopUpMessage});E({clock:$i.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:ht.evokePopUpMessage});const db={loadBufferWorkTransfer:kr,sendBufferWorkTransfer:Sr},TT={sendBufferWorkTransferFx:$i},pb={useBufferWorkTransfer:()=>({data:je(Er),loading:je(cb)})},ub=()=>{const[e,i]=l.useState(!1);l.useEffect(db.loadBufferWorkTransfer,[]);const{data:n}=pb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(hb,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(gb,{columns:pr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},hb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,gb=p(Ze)`
    width: 100%;
`,xb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(We,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(mb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(ut,{}):t.jsx(He,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(fb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(bb,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},fb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,mb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,bb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,yb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(vb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(xb,{info:s,index:o})),t.jsx(ub,{})]}):null},vb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,_b=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(wb,{children:t.jsxs(pn,{maxWidth:"1500px",children:[t.jsxs(jb,{children:[t.jsx(U,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(un,{})]}),t.jsx(yb,{})]})})})},wb=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,jb=p.div`
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
`,kb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${se(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${se(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${se(e[0])} по ${se(e[1])}`},Sb=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,us=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=lt.selectors.useData();return r?t.jsxs(Sb,{children:[t.jsx(U,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(ir,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(Q,{type:"info",title:kb(n)??"",icon:t.jsx(Ye,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(U,{size:4,align:"left",children:c.title}),t.jsx(ki,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(Kn,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(xe,{})]},c.title)})]})]}):null},Tb=()=>{const{data:e}=lt.selectors.useData();return t.jsx(us,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Eb=()=>{const{data:e}=lt.selectors.useData();return t.jsx(us,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},$b=()=>{const{data:e}=lt.selectors.useData();return t.jsx(us,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},$r=()=>{var i;const{data:e}=lt.selectors.useData();return t.jsx(Es,{padding:"10px",children:t.jsx(Yt,{children:t.jsx(ws,{appearance:!1,pages:[{title:"Анкета",content:t.jsx($b,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Tb,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Eb,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(we,{oldVersionUrl:xy}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Pb=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Cb=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Pr=k(),Cr=k(),Or=k(),Ht=M(async()=>{const e=await ih();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),hs=M(async e=>{try{return await sh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Pi=M(async e=>{const i=await nh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});E({clock:Pi.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:H.evokePopUpMessage});E({clock:Pi.doneData,fn:()=>!0,target:Cr});E({clock:Pi.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:H.evokePopUpMessage});E({clock:Pr,target:Pi});const Ar=k(),Dr=k(),Ob=Jn(Pi.pending,Ht.pending,Boolean),Ab=J(!1).on(Or,(e,i)=>i),Db=J(!1).on(Cr,(e,i)=>i),Nb=J(null).on(Ht,()=>null).on(Ht.failData,(e,i)=>i.message).on(hs.failData,(e,i)=>i.message),Ib=J(null).on(Ht.doneData,(e,i)=>i).on(hs.doneData,(e,i)=>Cb(e,i,!1)).on(Ar,()=>null),st={$loading:Ob,$completed:Ab,$done:Db,$error:Nb,$paymentsStore:Ib};Le({from:Dr,to:Ht});const gs={getPaymentsFx:Ht,signContractFx:hs},Rn={signAgreement:Pr,setCompleted:Or,clearStore:Ar,getPayments:Dr},Rb=Object.freeze(Object.defineProperty({__proto__:null,effects:gs,events:Rn,stores:st},Symbol.toStringTag,{value:"Module"})),Lb=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,zb=p.div`
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
`,Mb=({date:e,value:i})=>t.jsxs(zb,{children:[t.jsxs($,{gap:"16px",children:[t.jsx(xt,{color:"grey",size:33,children:t.jsx(rt,{})}),t.jsxs($,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(oe,{children:se(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(rt,{})," "]})]}),Fb=p.div`
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
`,Nr=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Fb,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(rt,{})]})},Bb=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Hb=p.div`
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
`,Ub=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Bb(s.value),0).toFixed(1);return t.jsxs(Hb,{children:[t.jsxs($,{jc:"space-between",children:[t.jsx(U,{icon:t.jsx(Mo,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(oe,{fontSize:"1rem",width:"fit-content",children:t.jsx(Nr,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ge,{size:"50px",text:"Нет платежей",image:t.jsx(Fo,{})}),e.map((n,s)=>l.createElement(Mb,{...n,key:s}))]})]})},Ir=()=>t.jsx(Q,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Wb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Vb=p.div`
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
`,Gb=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:u}=e,{open:h}=te(),[x,g]=l.useState(!1),[m,f]=l.useState(!1),[b,y]=l.useState(!1),P=_i(st.$error),I=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:se(n)},{text:"Действует до",info:se(s)},{text:"Подписан",info:se(u)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Wb(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},S=()=>{e&&(f(!0),gs.signContractFx(e.id),f(!1),y(!0))},C=()=>{h(t.jsx(Ir,{}),"Не получается подписать")};return t.jsxs(Vb,{children:[t.jsx("div",{className:"contract-info",children:I.map(({info:L,text:N})=>t.jsx(mt,{keyStr:N,value:L},L))}),r&&t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(kt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:S,isLoading:m,completed:b,repeatable:!1,popUpFailureMessage:P??"Не удалось подписать договор",setCompleted:y,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:C,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs($,{gap:"8px",children:[t.jsx(kt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:x,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(ki,{onClick:()=>null,href:c??"",icon:t.jsx(Kn,{}),width:"45px"})]})]})},qb=p.div`
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
`,Yb=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(qb,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Bo,{style:{color:"var(--green)"}}):t.jsx(Ho,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(He,{}),onClick:()=>null,background:"transparent"})]}),Jb=p.div`
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
`,Xb=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(Jb,{height:s,open:r,children:[t.jsx(Yb,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},Kb=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Qb=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=_i([st.$done,st.$completed,st.$loading]),h=s||c?140:100,x=()=>Rn.signAgreement(n),g=Rn.setCompleted;return t.jsxs(Xb,{height:h,title:o,confirmed:s||c,children:[t.jsxs(Kb,{children:[t.jsxs($,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(U,{size:5,align:"left",children:o}),t.jsx(oe,{children:se(r)})]}),t.jsxs($,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(ki,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Kn,{}),isActive:!!e.file}),!(s||c)&&t.jsx(kt,{text:s||c?"Подписано":"Подписать",action:x,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(Q,{type:"success",title:"Подписано",icon:t.jsx(en,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(oe,{children:["Дата подписания: ",se(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},Zb=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Ee,{width:"100%",children:[t.jsx(U,{size:4,align:"left",icon:t.jsx(rp,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(Ir,{}),t.jsx(Q,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(Qb,{data:s,isContractSigned:n},o))]}),ey=p.div`
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
`,zi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(ey,{children:t.jsx(ss,{loading:i,width:"300px",height:"300px",src:e??""})})},ty=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,iy=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(zi,{qrCode:e}):n===1?t.jsx(zi,{qrCode:i}):t.jsx(ty,{children:t.jsx(ws,{pages:[{title:"Текущая залолженность",content:t.jsx(zi,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(zi,{qrCode:i})}],appearance:!1,currentPage:n})}),ny=({type:e="horizontal",...i})=>{const{open:n}=te(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(iy,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(lp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},sy=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(Nr,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},Tn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Ci=()=>{const e=Wu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Tn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Tn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Tn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},oy=p.div`
    width: 100%;
`,ay=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,ry=p.div`
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
`,ly=p.div`
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
`,cy=p.div`
    position: relative;
`,dy=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=Ci(),{open:h}=te(),[x,g]=l.useState(0),m=x===0?+n:+s,f=m>0,b=f?x===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",y=x===0?`На ${se(new Date)}`:`До ${se(o)}`,P=()=>{h(t.jsx(Gb,{contract:i}),"Реквизиты договора")};return t.jsxs(oy,{children:[t.jsx(U,{icon:t.jsx(cp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(ay,{children:[t.jsx(as,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:x,setCurrentPage:g,appearance:!1}),t.jsxs(ry,{children:[t.jsxs($,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(sy,{debt:m}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(U,{size:3,align:"left",children:b}),t.jsx(oe,{children:y})]})]}),f?t.jsx(ny,{currentPage:x,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(Fa,{color:"green",size:"40px"})]}),t.jsxs(ly,{children:[r&&t.jsx(ki,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(cy,{children:[t.jsx(_,{onClick:P,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(St,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Rr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,py=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Bt(String(o),"rub")})`},uy=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Rr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:py}],hy=({paygraph:e})=>t.jsxs($,{d:"column",children:[t.jsx(U,{icon:t.jsx(dp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(Ze,{columns:uy(),data:e??[],maxOnPage:3})]}),Mi=({contracts:e})=>e?t.jsx(Lb,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,u=a==="Общежитие",h=!0,x=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx($,{gap:"8px",children:t.jsx($,{w:"fit-content",children:t.jsxs(U,{size:3,align:"left",children:["Договор № ",o," от ",se(d,"numeric")]})})}),t.jsx(dy,{data:i}),t.jsx(Ub,{payments:c??[]}),t.jsx(hy,{paygraph:r}),t.jsx(Zb,{isDormitory:u,isContractSigned:h,electronicAgreements:x}),n!==e.length-1&&t.jsx(xe,{margin:"0",width:"100%"})]},o)})}):null,xs=()=>{const[e,i,n]=_i([st.$error,st.$loading,st.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{H.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(Ue,{loading:i,load:gs.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ge,{text:"Нет данных"}),s==="both"&&t.jsx(ws,{pages:[{title:"Общежитие",content:t.jsx(Mi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Mi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Mi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Mi,{contracts:n==null?void 0:n.education})]})})},gy=Object.freeze(Object.defineProperty({__proto__:null,default:xs},Symbol.toStringTag,{value:"Module"})),A="/applications",re="/hr-applications",Xs="/staff_orders",Ks="/staff_blanks",xy="/ad_logins",fs="/doclist",Qs="/pps_vote2020",fy="/children",Lr="/pps_contest",my="/electronic-statements",fe="/onboarding",by="/structure-of-the-university",yy="/addresses-and-contacts",vy="/brandbook",_y="/wifi-at-the-university",wy="/health-care",jy="/psychological-help",ky="/social-environment",Sy="/vacation",Zt="/kpi_pps",ei="/kpi_admin",Zs="/sc_news",eo="/oop",to="/centers",Ty="/helpful-information",Ey="/download-agreements",io="/physical-education/main",$y="/physical-education/student/:studentId",zr=A+"/contact-info-actualization",Py="/data-verification",Mr=A+"/issuance-of-licenses",Fr=A+"/getting-computer-equipment",Br=A+"/connecting-computer",Hr=A+"/printer-maintenance",Ur=A+"/question-sed",Wr=A+"/question-personal-account",Vr=A+"/other-it-services",Gr=A+"/certificate-from-the-place-of-work",qr=A+"/visa-certificate",Yr=A+"/certificate-of-work-experience",Jr=A+"/number-of-unused-vacation-days",Xr=A+"/copy-of-the-employment-record",Kr=A+"/copies-of-documents-from-the-personal-file",Qr=A+"/work-on-the-terms-of-external-concurrency",Zr=A+"/certificate-time-parental-leave",el=A+"/arbitrary-request",tl=A+"/courier",il=A+"/persona-income-tax-reference",nl=A+"/payment-of-child-birth-allowance",sl=A+"/payment-for-child-care",ol=re+"/part-time-employment/",Cy=re+"/dismissal/:id",Oy=re+"/work-transfer/:id",Ay=re+"/extra-holiday-coll",Dy=re+"/holiday-planning",Ny=re+"/holiday-transfer/:id",Iy=re+"/holiday-work/:id",Ry=re+"/work-transfer-change-rate/:id",Ly=re+"/medical-examination",Ln=re+"/buffer-dismissal",zn=re+"/buffer-holiday-planning",Mn=re+"/buffer-holiday-transfer",Fn=re+"/buffer-holiday-work",Bn=re+"/buffer-medical-examination",Wi=re+"/buffer-work-transfer",al=A+"/living-in-residential-premises",rl=A+"/guests-accomodation-on-campus",ll=A+"/guests-passage-to-campus",cl=A+"/relocation",dl=A+"/termination-of-agreement",pl=A+"/issuance-of-pass",ul=A+"/guest-pass",hl=A+"/certification-and-issuance-of-docs",gl=A+"/deferment-from-conscription",xl=A+"/certified-copies-of-military-docs",F=()=>we({oldVersionUrl:"/sprav"}),no=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(X,{}),path:fe,Component:gm,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...Pl,"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(Mo,{}),path:Ey,Component:$r,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(mp,{}),path:fy,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"]},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(X,{}),path:my,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Uo,{}),path:kl,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(rt,{}),path:Ji,Component:xs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(X,{}),path:Lr,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Wo,{}),path:Zt,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${Zt==null?void 0:Zt.slice(1,Zt.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(bp,{}),path:ei,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ei==null?void 0:ei.slice(1,ei.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(yp,{}),path:Zs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Zs}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(D,{}),path:Xs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Xs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Ft,{}),path:Ks,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Ks}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:fs,Component:sf,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(zo,{}),path:Sy,Component:Rf,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:io,pageSize:"big",Component:uf,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(D,{}),color:"pink",show:!1,path:$y,Component:hf,isTemplate:!1,fallbackPrevPage:io,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(fi,{}),path:eo,isOldLkPage:!0,Component:()=>we({oldVersionUrl:eo}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(fi,{}),path:to,isOldLkPage:!0,Component:()=>we({oldVersionUrl:to}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(D,{}),path:Ty,Component:rs,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Vo,{}),path:Qs,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Qs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:A,Component:O?F:of,color:"red",isTemplate:!1,pageSize:"large",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(D,{}),path:re,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Lf,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Py,Component:nf,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"}}),so=()=>({...Cl,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Mr,icon:t.jsx(D,{}),color:"blue",Component:O?F:xf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:Ln,icon:t.jsx(D,{}),color:"blue",Component:O?F:dr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Fn,icon:t.jsx(D,{}),color:"blue",Component:O?F:S0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Bn,icon:t.jsx(D,{}),color:"blue",Component:O?F:lb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:zn,icon:t.jsx(D,{}),color:"blue",Component:O?F:L0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:Mn,icon:t.jsx(D,{}),color:"blue",Component:O?F:J0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Wi,icon:t.jsx(D,{}),color:"blue",Component:O?F:_b,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:ol,icon:t.jsx(D,{}),color:"blue",Component:O?F:zf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Iy,icon:t.jsx(D,{}),color:"blue",Component:O?F:Bf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Fn},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:Ly,icon:t.jsx(D,{}),color:"blue",Component:O?F:Hf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Bn},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:Dy,icon:t.jsx(D,{}),color:"blue",Component:O?F:Uf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:zn},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Ny,icon:t.jsx(D,{}),color:"blue",Component:O?F:Wf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Mn},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:Oy,icon:t.jsx(D,{}),color:"blue",Component:O?F:Vf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Wi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:Ry,icon:t.jsx(D,{}),color:"blue",Component:O?F:Gf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:Wi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Ay,icon:t.jsx(D,{}),color:"blue",Component:O?F:Ff,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:Cy,icon:t.jsx(D,{}),color:"blue",Component:O?F:Mf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Ln},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(D,{}),color:"blue",path:Fr,Component:O?F:gf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(D,{}),color:"blue",path:Br,Component:O?F:cf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(D,{}),color:"blue",path:Hr,Component:O?F:_f,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(D,{}),color:"blue",path:Ur,Component:O?F:jf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(D,{}),color:"blue",path:Wr,Component:O?F:wf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(D,{}),color:"blue",path:Vr,Component:O?F:mf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(D,{}),color:"blue",path:Gr,Component:O?F:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(D,{}),color:"blue",path:qr,Component:O?F:kf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(D,{}),color:"blue",path:Yr,Component:O?F:rf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(D,{}),color:"blue",path:Jr,Component:O?F:ff,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(D,{}),color:"blue",path:Xr,Component:O?F:df,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(D,{}),color:"blue",path:Kr,Component:O?F:ef,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(D,{}),color:"blue",path:Qr,Component:O?F:Sf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(D,{}),color:"blue",path:Zr,Component:O?F:lf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(D,{}),color:"blue",path:el,Component:O?F:af,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},courier:{id:"courier",title:"Курьер",icon:t.jsx(D,{}),color:"blue",path:tl,Component:O?F:pf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(D,{}),color:"blue",path:il,Component:O?F:vf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(D,{}),color:"blue",path:nl,Component:O?F:yf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(D,{}),color:"blue",path:sl,Component:O?F:bf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(D,{}),color:"blue",path:zr,Component:tf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(D,{}),color:"blue",path:al,Component:O?F:Tf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(D,{}),color:"blue",path:rl,Component:O?F:Ef,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(D,{}),color:"blue",path:ll,Component:O?F:$f,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(D,{}),color:"blue",path:cl,Component:O?F:Pf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(D,{}),color:"blue",path:dl,Component:O?F:Cf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(D,{}),color:"blue",path:pl,Component:O?F:Of,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(D,{}),color:"blue",path:ul,Component:O?F:Af,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(D,{}),color:"blue",path:hl,Component:O?F:Df,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(D,{}),color:"blue",path:gl,Component:O?F:Nf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(D,{}),color:"blue",path:xl,Component:O?F:If,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ge,{to:fe})),icon:t.jsx(Ft,{}),isTemplate:!1,path:ky,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ge,{to:fe})),icon:t.jsx(pp,{}),isTemplate:!1,path:jy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ge,{to:fe})),icon:t.jsx(up,{}),isTemplate:!1,path:wy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ge,{to:fe})),icon:t.jsx(hp,{}),isTemplate:!1,path:_y,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ge,{to:fe})),icon:t.jsx(gp,{}),isTemplate:!1,path:vy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(xp,{}),path:yy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ge,{to:fe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(fp,{}),path:by,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ge,{to:fe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0}}),fl="/login",zy="/forgot-password",My="/medical-certificate",Fy="/vaccination",di="/all",ms="/home",bs="/profile",ys="/chat",By="/messages",ET=ys+"/:chatId",ml="/electronic-interaction-agreement",Ji="/payments",At="/schedule",bl="/all-students",Hy="/all-students/:filter",Uy="/all-teachers/:filter",yl="/all-teachers",vs="/feedback",vl="/cant-access",_l="/memo-freshmen",wl="/get-your-login",jl="/memo-teacher",me="/settings",$T=me+"/:id",Wy=me+"/appearance",Vy=me+"/personal",Gy=me+"/security",qy=me+"/home-page",Yy=me+"/customize-menu",Jy=me+"/notifications",Xy="/instructions",kl="/project-activity",Sl="/alerts",Tl="/lk-notifications",El="/helpful-information",Oi=At+"/:page/:filter",$l=At+"/current",Ky=At+"/semestr",Qy=At+"/session",Zy=At+"/retake",ev=El+"/:infoType";var tv=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(tv||{});const iv=[{id:0,title:"",icon:"",path:fl,Component:Xx},{id:1,title:"",icon:"",path:zy,Component:Xf},{id:2,title:"Обратная связь",icon:t.jsx(fi,{}),path:vs,Component:or},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(_t,{}),path:vl,Component:Yf},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:wl,Component:dm},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:_l,Component:pm},{id:6,title:"Вниманию сотрудников!",icon:"",path:jl,Component:um}],Pl={all:{id:"all",title:"Все разделы",icon:t.jsx(kp,{}),path:di,Component:qf,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Yo,{}),path:me,Component:om,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(D,{}),path:fs,Component:cm,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Jo,{}),path:Sl,Component:Kf,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(qo,{}),path:ms,Component:Qf,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Xo,{}),path:bs,Component:em,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(nn,{}),path:Tl,Component:xm,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Ko,{}),path:ml,Component:Jf,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Sp,{}),path:ys,isOldLkPage:!0,Component:()=>we({oldVersionUrl:By}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Ct,{}),path:At,menuPath:$l,Component:ar,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Ft,{}),path:bl,Component:nr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Vo,{}),path:yl,Component:sr,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(fi,{}),path:vs,Component:or,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Tp,{}),path:Xy,Component:Zf,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Ds,{}),path:My,Component:hm,color:"blue",isTemplate:!1,group:"GENERAL"},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(Ds,{}),path:Fy,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0}},nv={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(Ct,{}),path:$l,Component:tm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(Qn,{}),path:Ky,Component:im,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Go,{}),path:Qy,Component:nm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(Xn,{}),path:Zy,Component:sm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Cl={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(Ct,{}),path:Oi,Component:ar,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...nv,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Ft,{}),path:Hy,Component:nr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Ft,{}),path:Uy,Component:sr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(vp,{}),path:Wy,Component:rm,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(_p,{}),path:Vy,Component:am,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(wp,{}),path:Gy,Component:lm,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(qo,{}),path:qy,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(jp,{}),path:Yy,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(nn,{}),path:Jy,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:me,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:ev,Component:rs,color:"grey",isTemplate:!0,show:!1}},Ol=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;ji.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else H.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Al=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;ji.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},sv=(e,i,n,s)=>{if(i){const o=s.length+Lu;if(n<o){H.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??sn;ji.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else H.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},ov=(e,i,n)=>{if(i)if(n.includes(e))H.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{H.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;ji.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},av=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,rv=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,lv=e=>{var m,f,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Gt.useSettings(),{data:r}=ve.useUser(),c=Be.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(y=>y===i),u=(f=a["settings-customize-menu"].property.pages)==null?void 0:f.find(y=>y===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?aa:sn,x=()=>{Ol(i,a),Ie.close()},g=()=>{sv(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Ie.close()};return t.jsxs(av,{children:[t.jsxs("div",{className:"top",children:[t.jsx(xt,{color:o,size:22,children:n}),t.jsx(rv,{children:s})]}),t.jsx(xe,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(_t,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{Al(i,a),Ie.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(wt,{}),width:"100%",align:"left",background:"var(--block)",onClick:x}),u?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(_t,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>ov(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(wt,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},Dl=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ie.open({e:o,height:105,content:t.jsx(lv,{...e})})};return t.jsx(_,{icon:t.jsx(Qo,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Nl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},Il=p(Qe)`
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
`,cv=p.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,oo=e=>{var y;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:u,id:h,background:x,orientation:g="vertical"}=e,m=g==="vertical",{settings:f}=Gt.useSettings(),b=!!((y=f["settings-home-page"].property.pages)!=null&&y.find(P=>P===h));return t.jsxs(Il,{padding:"0",width:"100%",maxWidth:"100%",height:m?"135px":"60px",isVertical:m,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:x,children:[(d||c)&&m&&t.jsxs(cv,{children:[d&&t.jsx(tn,{title:"Раздел в старом ЛК"}),c&&t.jsx(Vi,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(xt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(Ep,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Nl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),u==="use"&&t.jsx(Dl,{route:e}),u==="add"?b?t.jsx(_,{icon:t.jsx(Je,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>Al(h,f)}):t.jsx(_,{icon:t.jsx(wt,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>Ol(h,f)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},dv=p(Il)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,PT=()=>t.jsx(Z,{to:di,onClick:()=>{et.changeOpen({isOpen:!1,currentPage:di.slice(1,di.length)})},children:t.jsx(dv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(xt,{color:"blue",children:t.jsx($p,{})}),t.jsx("b",{children:"Все разделы"})]})})}),pv=p(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,uv=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,hv=e=>{const{close:i}=te(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(uv,{width:o==="vertical"?c:"100%",children:t.jsx(oo,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),et.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(pv,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(oo,{...e,maxWordLength:r,mode:a})})},gv=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,xv=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ge,{text:"Ничего не было найдено"}):t.jsx(gv,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(hv,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),fv=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(be(s.title).includes(be(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>be(a).includes(be(e))))&&(n[s.id]=s),n},{}),mv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,bv=p(Z)`
    width: 100%;
`,yv=({division:e})=>{const{close:i}=te();return t.jsxs(mv,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(xt,{size:120,color:"purple",children:t.jsx(oi,{})}),t.jsx(oe,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(bv,{to:`${yl}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(Zo,{}),width:"100%",text:"Список"})})]})},vv=p.div`
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
`,_v=({division:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(yv,{division:e}),"Подразделение")};return t.jsx(vv,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",children:[t.jsx(oi,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(pt,{})]})})},wv=({divisions:e})=>!e||e.length===0?null:t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(_v,{division:i},i))}),gn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),jv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,ao=p(Z)`
    width: 100%;
`,Rl=({group:e})=>{const{close:i}=te();return t.jsxs(jv,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(xt,{size:120,color:"lightBlue",children:t.jsx(ea,{})}),t.jsx(oe,{fontSize:"1.2rem",children:e})]}),t.jsxs($,{gap:"8px",onClick:i,children:[t.jsx(ao,{to:gn(Oi,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(Ct,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(ao,{to:`${bl}/${e}`,children:t.jsx(_,{icon:t.jsx(Zo,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},kv=p.div`
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
`,Sv=({group:e})=>{const{open:i}=te(),n=()=>{i(t.jsx(Rl,{group:e}),"Группа")};return t.jsx(kv,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",h:"50px",children:[t.jsx(ea,{}),t.jsx(oe,{fontSize:"1rem",children:e})]}),t.jsx(pt,{})]})})},Tv=({groups:e})=>e?t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Sv,{group:i},i))}):null,En=[{title:"Инструкции",links:[{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ne},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ne},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ne},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ne},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ne},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ne},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ne},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ne}]}];var Se=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Se||{});const Nt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Ev=[{id:Se.information,title:Nt[Se.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Se.security,title:Nt[Se.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Se.instructions,title:Nt[Se.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...En[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.regulations,title:Nt[Se.regulations],visible:"staff",content:[{title:"Положения",links:[...En[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.orders,title:Nt[Se.orders],visible:"staff",content:[{title:"Приказы",links:[...En[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.courses,title:Nt[Se.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],$v=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Pv=p.div`
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
`,Cv=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(Pv,{children:[t.jsx(U,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Ee,{gap:16,children:s.map(({title:a,href:r,visible:c},d)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+d))})]},n+o))}):null;function Hn(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Ov=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Av=p.div``,Dv=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Ll=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Ov,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Av,{children:e}),t.jsx(Dv,{isOpen:o,children:i})]})},zl=k(),Ml=k(),Nv=J(!1).on(Ml,()=>!0).on(zl,()=>!1),ro={close:zl,open:Ml},Iv={$isModalOpen:Nv},_s=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Rv=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=_i(Iv.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,y)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,y??""])):(r(()=>[b]),o(y?[y]:[])),n(()=>!0),ro.open())},[r,n,a,i]),x=l.useCallback(()=>{n(()=>!1),ro.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),f=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(_s.Provider,{value:{back:u,open:h,close:x,isOpen:i,canBack:d,component:g,title:m,setComponent:f},children:e})},te=()=>{const{open:e,isOpen:i,...n}=l.useContext(_s);return{open:e,isOpen:i,...n}},Lv="2.3.0",Fl=()=>t.jsx(Q,{icon:null,type:"info",title:Lv,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Oe=({color:e,children:i})=>t.jsx(xt,{color:e,children:i}),zv=()=>({info:t.jsx(Oe,{color:"grey",children:t.jsx(Ye,{})}),message:t.jsx(Oe,{color:"red",children:t.jsx(Zn,{})}),alert:t.jsx(Oe,{color:"purple",children:t.jsx(Jo,{})}),"payment-dorm":t.jsx(Oe,{color:"green",children:t.jsx(rt,{})}),"payment-ed":t.jsx(Oe,{color:"green",children:t.jsx(rt,{})}),"digital-services":t.jsx(Oe,{color:"red",children:t.jsx(D,{})}),"doc-for-review":t.jsx(Oe,{color:"blue",children:t.jsx(D,{})}),"hr-applications":t.jsx(Oe,{color:"green",children:t.jsx(D,{})}),"kpi-pps":t.jsx(Oe,{color:"pink",children:t.jsx(Wo,{})}),schedule:t.jsx(Oe,{color:"pink",children:t.jsx(Ct,{})}),"version-update":t.jsx(Fl,{}),"electronic-interaction":t.jsx(Oe,{color:"blue",children:t.jsx(Ko,{})})}),Mv=p(Z)`
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
`,Fv=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Bv={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Hv={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},Uv={small:"0px",middle:"1px",large:"2px",big:"3px"},Bl=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:x=!0,loadingRemove:g=!1,canClose:m=!0,fullText:f=!0,maxLetters:b=200,size:y="middle"})=>{const P=se(o,"short"),{close:I}=te(),[j,S]=l.useState(!1),C=N=>{N.stopPropagation(),N.preventDefault(),x?(S(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},L=()=>{a==null||a(),m&&Et.clearById({id:e,pageId:c}),I()};return t.jsx(Ll,{forceState:!j,bottomMargin:h,children:t.jsxs(Mv,{to:d??"",onClick:L,children:[t.jsx("span",{className:"left-icon",children:zv()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(oe,{fontSize:"0.7rem",children:t.jsx(Ne,{words:[P??"",s??""]})}),t.jsxs($,{d:"column",gap:Uv[y],ai:"flex-start",children:[t.jsx(Fv,{fontSize:Bv[y],children:f?i:Hn(i,b)}),t.jsx(oe,{fontSize:Hv[y],children:f?n:Hn(n,b)})]})]}),u&&t.jsx(_,{isActive:!(g&&j),icon:t.jsx(Je,{}),background:"var(--theme-2)",onClick:C,style:{borderRadius:"20px"}})]})})},Hl=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Et.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx($,{d:"column",children:e.map((o,a)=>l.createElement(Bl,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Xi=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,lo=({people:e,type:i})=>!e||e.length===0?null:t.jsx($,{d:"column",children:e.map(n=>l.createElement(js,{name:n.fio,type:i,...n,key:n.id}))}),Wv=()=>{const{allRoutes:e}=Be.useMenu(),{notifications:i,removeNotificationLoading:n}=tt.useLkNotifications(),{data:{user:s}}=ve.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Ev.flatMap(({visible:L,content:N})=>L==="staff"&&o||L==="student"&&!o||L==="all"?N:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,x]=l.useState(null),[g,m]=l.useState(null),[f,b]=l.useState(null),[y,P]=l.useState(null),[I,j]=l.useState(null),S=[{title:"Разделы",content:t.jsx(xv,{pages:f,showNotFound:!1}),clear:()=>{b(null)},search:L=>{if(e){const N=fv(L,e);b(N)}},data:f},{title:"Студенты",content:t.jsx(lo,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async L=>{const{data:N}=await Ph(L,"",1,20);m(N.items)}},{title:"Сотрудники",content:t.jsx(lo,{people:h,type:"staff"}),data:h,clear:()=>{x(null)},search:async L=>{const{data:N}=await Sh(L,"",1,20);x(N.items)}},{title:"Группы",content:t.jsx(Tv,{groups:r}),data:r,clear:()=>{c(null)},search:async L=>{const{data:N}=await Ch(L);c(N.items)}},{title:"Подразделения",content:t.jsx(wv,{divisions:d}),data:d,clear:()=>{u(null)},search:async L=>{const{data:N}=await Th(L);u(N.items)}},{title:"Уведомления",content:t.jsx(Hl,{notifications:y,loadingRemove:n}),clear:()=>{P(null)},search:L=>{const N=i.filter(K=>be(K.title).includes(L));P(N)},data:y},{title:"Полезная информация",content:t.jsx(Cv,{blocks:I,isStaff:o}),clear:()=>{j(null)},search:L=>{const N=$v(L,a);j(N)},data:I}];return[(()=>{const{content:L,clear:N,data:K}=S.reduce((z,ie)=>(Xi(ie.data)&&(z.data.push(ie.data),z.content.push(t.jsxs(t.Fragment,{children:[t.jsx(U,{size:4,align:"left",children:ie.title}),ie.content,t.jsx(xe,{})]}))),z.clear.push(ie.clear),z),{content:[],clear:[],data:[]});return{title:"Все",content:L,clear:()=>N.map(z=>z()),search:async z=>{z.length<=8&&/\d|[-]/g.test(z)?await S[3].search(z):(S[0].search(z),S[5].search(z),S[6].search(z),Xi(S[0].data)===0&&(await S[1].search(z),await S[2].search(z),await S[4].search(z)))},data:K}})(),...S]},Vv=()=>JSON.parse(localStorage.getItem(B.SearchHistory)??"[]"),Gv=()=>{const e=Wv(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>Vv(),[]),r=async g=>{e[i].clear();const m=Ga(g)?Va(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(B.SearchHistory,JSON.stringify(a)))},[c,d,u]=Xa({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!u&&!c.length,x=!!c.length&&!u&&!!Xi(e[i].data);return{showMessage:h,showSearchResult:x,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},qv=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Ns,{})})):e?n.filter(s=>be(s).includes(be(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Ns,{})})):[],Yv=()=>t.jsxs($,{gap:"8px",ai:"flex-start",children:[t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),Jv=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,Xv=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=Gv(),u=qv(r,n,d),{isOpen:h}=te();return t.jsx(Jv,{children:t.jsxs($,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ya,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(as,{pages:c.map(({title:x})=>({title:x})),currentPage:o,setCurrentPage:a}),t.jsx(qa,{value:n,setValue:s}),e&&t.jsx($,{h:"100%",children:t.jsx(ge,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Mt,{})})}),!r&&n.length!==0&&!e&&!Xi(c[o].data)&&t.jsx($,{h:"100%",children:t.jsx(ge,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Ro,{})})}),r&&Array(10).fill(0).map((x,g)=>t.jsx(Yv,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},Kv=p(Qe)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${ee.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,Qv=p.div`
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
`,Zv=p($)`
    @media (max-width: 1000px) {
        display: none;
    }
`,e1=()=>{const e=rx();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(ta,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},Ul=({size:e="large"})=>{const i=e1(),{open:n}=te(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(Xv,{}),"Глобальный поиск");return Wa(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Mt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(Kv,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(oe,{align:"left",fontSize:"0.9rem",children:t.jsxs($,{gap:"8px",children:[t.jsx(Mt,{}),"Поиск"]})}),t.jsx(Zv,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(Qv,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},Un=e=>e.split(" ").map(i=>i[0]),De=(e,i)=>{const n=Un(e),s=w[Fu[n[0]]];return s==null?void 0:s[i??"main"]},t1=p.div`
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
`,i1=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ai({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:x,onClick:g,borderRadius:m,background:f}){const[b,y]=l.useState(!0),P=Un(i)[0]+(Un(i)[1]??""),{open:I}=te(),j=S=>{x?I(t.jsx(Ai,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(S)};return t.jsxs(t1,{selected:e,width:s,height:o,marginRight:a,background:f??De(i),boxShadow:d,border:u,onClick:j,borderRadius:m,children:[n&&b?t.jsx(i1,{loading:"lazy",round:!0,onLoadedData:()=>y(!0),onError:()=>y(!1),src:n}):t.jsx("div",{className:"name",children:P}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(qe,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(St,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const CT=p.header`
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
`;const OT=p.div`
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
`,n1=p.div`
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
`,AT=p.div`
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
`,DT=p.div`
    margin-top: 50px;
    width: 100%;
`,NT=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,IT=p(Qe)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,RT=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,s1=p.div`
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
`,o1=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(s1,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(kx,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},a1=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,r1=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(a1,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(o1,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Wl=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=gt(),{settings:o}=Gt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(Pp,{}):t.jsx(Cp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[x,g]=l.useState([{title:"Темная тема",state:n!=="light",action:f=>s(f)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:f=>s(f)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(f=>!f),i==null||i()};return e==="toggle"?t.jsx(r1,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:x,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(n1,{width:"30px",background:w.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},l1=({quantity:e=1,avatarShape:i="circle"})=>t.jsx($,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs($,{gap:"16px",ai:"center",children:[t.jsx(Y,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(Y,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),c1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,d1=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=tt.useLkNotifications();return l.useEffect(()=>{o&&H.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Et.clearAllVisible()},[]),t.jsxs(c1,{children:[s.length===0&&!n&&t.jsx(Es,{height:"100%",children:t.jsx(ge,{text:i??"Нет новых уведомлений",image:i?t.jsx(_t,{}):t.jsx(Op,{}),size:"70px"})}),t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(Q,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Hl,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(l1,{quantity:10})]})},p1=p.div`
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
`,Vl=()=>{const{close:e}=te(),{notifications:i}=tt.useLkNotifications(),n=3;return t.jsxs($,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(d1,{maxNotificationsVisible:n}),t.jsxs(oe,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Nl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Tl,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},u1=()=>{const{notifications:e}=tt.useLkNotifications(),{open:i}=te(),n=()=>{i(t.jsx(Vl,{}),"Уведомления")};return t.jsxs(p1,{onClick:n,children:[t.jsx(St,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(nn,{})]})},h1=p.div`
    position: relative;
`,Gl=()=>{const{open:e}=te(),{notifications:i}=tt.useLkNotifications(),n=()=>Ie.close(),s=()=>{nt.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:$t.logout}),n()},o=()=>{Ie.close(),e(t.jsx(wc,{}),"Что нового")},a=()=>{e(t.jsx(Vl,{}),"Уведомления"),Ie.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Nw,{padding:"8px",size:"small"}),t.jsx(xe,{}),t.jsx(Wl,{type:"h-button"}),t.jsx(xe,{}),t.jsx(Z,{to:bs,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(Xo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(h1,{children:[t.jsx(_,{onClick:a,icon:t.jsx(nn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(St,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:me,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(Yo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(tn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(xe,{}),t.jsx(_,{align:"left",icon:t.jsx(Ap,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(xe,{}),t.jsx(_,{align:"left",icon:t.jsx(Fl,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},g1=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,x1=({showSearch:e=!1})=>{const{data:{user:i}}=ve.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ie.open({e:s,height:143,content:t.jsx(Gl,{})})};return t.jsxs(g1,{children:[e&&t.jsx(Ul,{size:"icon"}),t.jsx(u1,{}),t.jsx(Ai,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},f1=p.header`
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
`,m1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,b1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,y1=p.div`
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
        max-width: ${m1};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ee.isTablet} {
        max-width: ${b1};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ee.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,v1=()=>{const{pathname:e}=Ut(),[i,n]=l.useState([e]),{action:s}=Wt();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},_1=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=Wt();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Bi,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},w1=({headerVisible:e,currentPage:i})=>{const n=Wt(),s=v1(),o=e||!!(i!=null&&i.planeHeader),a=vr(i),r=(u=di)=>()=>{et.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(_1,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Bi,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Bi,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Bi,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},j1=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Ci(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=w1({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(f1,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(y1,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs($,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(x1,{showSearch:!0})]})]})},k1=le.memo(j1),S1=p(Z)`
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
`,T1=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(Y,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Ie.open({e:c,height:143,content:t.jsx(Gl,{})})};return t.jsxs(S1,{to:bs,children:[t.jsx(_,{icon:t.jsx(Qo,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ai,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(U,{size:5,children:e})]})},E1=le.memo(T1),$1=["isCurrent","color"],P1=p(Z).withConfig({shouldForwardProp:e=>!$1.includes(e)})`
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
`,C1=p.div`
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
`,O1=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,A1=p.button`
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
`,D1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(P1,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(St,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(St,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(Dl,{route:e})]})},ql=le.memo(D1),N1=()=>{const{isOpen:e}=Be.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Je,{}),onClick:()=>et.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},I1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(A1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(I1);p.section`
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
`;const R1=()=>{const{leftsideBarRoutes:e}=Be.useMenu(),i=Ut();return e?t.jsx(O1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(ql,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs($,{d:"column",children:[t.jsxs($,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(Y,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(Y,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},L1=le.memo(R1),z1=()=>{const{isOpen:e}=Be.useMenu(),{width:i,height:n}=cn(),{data:{user:s}}=ve.useUser(),{visibleRoutes:o}=Be.useMenu(),a=Ut();return t.jsxs(C1,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:ms,children:t.jsx(ln,{width:"165px"})}),t.jsx(E1,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Ul,{size:"small"}),t.jsx(L1,{})]}),t.jsx(Wl,{type:"toggle"}),i<1e3&&t.jsx(N1,{})]})},M1=p.div`
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
`,F1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=wa.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{H.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),H.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(M1,{isOpen:e,isClickable:!!o,color:jt[n].color,onClick:a,children:t.jsx(Q,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>H.openPopUpMessage({isOpen:!1}),children:i})})},xn=p.div`
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
`;const B1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(_s);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},H1=p.div`
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
`,U1=p.div`
    padding-top: 30px;
`,W1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=B1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return Wa([27],o),qt(r,()=>{o()}),t.jsx(xn,{isOpen:c,children:t.jsxs(H1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(vi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(U,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Je,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(U1,{children:i})]})})},V1=le.memo(W1),G1=p.div`
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
`,q1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=Ea.useConfirm(),o=l.useRef(null);qt(o,()=>nt.closeConfirm());const a=()=>{n(),nt.closeConfirm()},r=()=>{nt.closeConfirm()};return t.jsx(xn,{isOpen:e,children:t.jsxs(G1,{isOpen:e,ref:o,children:[t.jsx(U,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Ee,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},Y1=p.div`
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
`,J1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:x}=cn(),g=l.useRef(null),m=()=>{var b;g!=null&&g.current&&h(Math.round(((b=g.current)==null?void 0:b.scrollLeft)/x))},f=b=>{var y;h(b),r==null||r((y=e[b])==null?void 0:y.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*b)};return l.useEffect(()=>{f(u)},[i,x]),t.jsxs(Y1,{width:n,align:c,maxWidth:o,children:[t.jsx(as,{pages:e.map(({title:b,condition:y})=>({title:b,condition:y})),currentPage:u,setCurrentPage:f,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ge,{text:"Нет данных"})},b.title))})]})},ws=J1,co=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},po=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Yl=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},X1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},K1=p.div`
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
`,Q1=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(K1,{width:i,height:n,color:De(e,"dark1"),color2:De(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:De(e,"light2")})})]})}),Z1=p.div`
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
`,e_=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:x=!1})=>{const g=x?"140px":"110px",m=Yl(h,n,s,o);return t.jsxs(Z1,{children:[t.jsx(Q1,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ai,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!x&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(oe,{fontSize:"0.9rem",children:t.jsx(Ne,{words:m})}),t.jsx(mt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(mt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(mt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(mt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(mt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},t_=p.div`
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
`,Jl=e=>{const{children:i}=e;return t.jsxs(t_,{children:[t.jsx(e_,{...e}),t.jsx("div",{className:"buttons",children:i})]})},i_=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,n_=()=>t.jsxs(i_,{children:[t.jsx(Y,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(Y,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(Y,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Xl=e=>{if(e)return()=>{nt.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(B.Token,e),location.reload()}})}},s_=e=>{const{close:i}=te(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${De(s,"main")}, ${De(s,"dark1")})`;return t.jsxs(Jl,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:gn(Oi,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(Ct,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(Zn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Xl(n)})]})},o_=e=>{const{close:i}=te(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${De(s,"dark1")}, ${De(s,"main")})`;return t.jsxs(Jl,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:gn(Oi,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(Ct,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(Zn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Xl(n)})]})},a_=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?X1(i):"100%"};

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
            font-size: ${({size:e})=>co(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${co(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,js=e=>{const{open:i}=te(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:x=!1,orientation:g="horizontal",size:m="middle"}=e,f=Yl(h,n,d,u);if(x)return t.jsx(n_,{});const b=y=>{r?r(y):h||(Ie.close(),i(n==="staff"?t.jsx(o_,{...e}):t.jsx(s_,{...e})))};return t.jsxs(a_,{orientation:g,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ai,{name:o,avatar:s,width:po(g,m),height:po(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ne,{words:f})})]})]})},Ki=e=>{const i=be(e),s=[{keys:["распознаван"],icon:t.jsx(Np,{})},{keys:["принт"],icon:t.jsx(Ip,{})},{keys:["химич"],icon:t.jsx(Rp,{})},{keys:["сервер"],icon:t.jsx(Lp,{})},{keys:["игр"],icon:t.jsx(zp,{})},{keys:["жизнед"],icon:t.jsx(Mp,{})},{keys:["web","веб"],icon:t.jsx(Fp,{})},{keys:["истор"],icon:t.jsx(Bp,{})},{keys:["информат"],icon:t.jsx(Hp,{})},{keys:["информации"],icon:t.jsx(Ye,{})},{keys:["мобильн"],icon:t.jsx(Up,{})},{keys:["безопасн"],icon:t.jsx(Wp,{})},{keys:["автоматиз"],icon:t.jsx(Vp,{})},{keys:["линейн"],icon:t.jsx(Gp,{})},{keys:["обработ"],icon:t.jsx(qp,{})},{keys:["презентац"],icon:t.jsx(Yp,{})},{keys:["операционн"],icon:t.jsx(ta,{})},{keys:["эконом"],icon:t.jsx(rt,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(Jp,{})},{keys:["анализ"],icon:t.jsx(Xp,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Kp,{})},{keys:["сети","сетей"],icon:t.jsx(Qp,{})},{keys:["матем"],icon:t.jsx(Zp,{})},{keys:["вероятн"],icon:t.jsx(eu,{})},{keys:["философ"],icon:t.jsx(ia,{})},{keys:["данны"],icon:t.jsx(tu,{})},{keys:["язык"],icon:t.jsx(iu,{})},{keys:["спорт","физичес"],icon:t.jsx(nu,{})},{keys:["проектная"],icon:t.jsx(Pn,{})},{keys:["интеллект"],icon:t.jsx(su,{})},{keys:["научн"],icon:t.jsx(ou,{})},{keys:["предприним"],icon:t.jsx(au,{})},{keys:["коммуникац"],icon:t.jsx(ru,{})},{keys:["управлени"],icon:t.jsx(es,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Go,{})},{keys:["переработ"],icon:t.jsx(lu,{})},{keys:["машин","инжен"],icon:t.jsx(cu,{})},{keys:["проектир","расчет"],icon:t.jsx(du,{})},{keys:["производ"],icon:t.jsx(Fo,{})},{keys:["эколог"],icon:t.jsx(pu,{})},{keys:["защит"],icon:t.jsx(uu,{})},{keys:["патент"],icon:t.jsx(hu,{})},{keys:["материал"],icon:t.jsx(gu,{})},{keys:["физик"],icon:t.jsx(xu,{})},{keys:["тайм"],icon:t.jsx(fu,{})},{keys:["практика"],icon:t.jsx(na,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(Dp,{})},Wn={"9:00 - 10:30":w.green,"10:40 - 12:10":w.lightGreen,"12:20 - 13:50":w.blue,"14:30 - 16:00":w.purple,"16:10 - 17:40":w.pink,"17:50 - 19:20":w.red,"18:20 - 19:40":w.orange,"19:30 - 21:00":w.orange,"19:50 - 21:10":w.orange},Kl=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},r_=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,fn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},l_=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=fn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Ql=(e,i,n)=>l_(e)===fn(i.startTime)&&n,bi=e=>e<=9?"0"+e:e,c_=e=>`${bi(Math.floor(e/60))}:${bi(e%60)}`,uo=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},d_=p.div`
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
`,p_=p.div`
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
`,u_=p($)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ee.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,ho=p.div`
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
`,h_=p(oe)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,g_=p.div`
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
`,x_=p.div`
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
`,f_=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(uo(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(uo(new Date,s[0]*60,s[1]*60))},ts.minute),()=>clearInterval(c.current)),[e]),t.jsx(g_,{currentTime:(a-i)*n,children:o&&t.jsx(x_,{children:c_(a)})})},Zl=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},Pe=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(u_,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(ho,{shortInfo:o,children:e}),t.jsx(h_,{width:"100%",className:"text",children:i}),t.jsx(ho,{shortInfo:o,children:s})]}),m_=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,b_=p(Z)`
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
`,y_=({groups:e})=>{const{close:i}=te();return t.jsx(m_,{children:e.map(n=>t.jsxs(b_,{to:gn(Oi,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Ft,{}),n]}),t.jsx(pt,{})]},n))})},v_=({icon:e,background:i,noPadding:n=!1})=>t.jsx(d_,{background:i,noPadding:n,children:t.jsxs(p_,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),__=p.div`
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
`,w_=({subjectName:e,color:i,noPadding:n})=>{const s=Ki(e),{theme:o}=gt(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(__,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(v_,{noPadding:n,icon:s,background:r}),t.jsx(xt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},j_=mu`
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
`,k_=({color:e,start:i})=>`
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
}`,S_=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${k_}
`,T_=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,E_=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ee.isMobile} {
        font-size: 0.7rem;
    }
`,ec=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=gt(),o=s==="light"?i.main:i.light2;return t.jsxs(T_,{children:[t.jsx(S_,{start:n,color:o}),e&&t.jsx(E_,{children:e})]})},$_=p.div`
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
`,P_=p($)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,C_=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:x,isCurrentEvent:g,noPadding:m=!1}=e,f=(d==null?void 0:d.split(","))??[],{open:b}=te(),y=()=>{f.length===1?b(t.jsx(Rl,{group:f[0]})):b(t.jsx(y_,{groups:f}),"Группы")},P=()=>{b(t.jsx(A_,{place:s,link:r,name:n}))},I=Zl(n);return t.jsxs($_,{children:[t.jsx(w_,{subjectName:n,color:u,noPadding:m}),t.jsxs(P_,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs($,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs($,{gap:"8px",children:[t.jsx(ec,{isCurrentEvent:g,color:u,timeInterval:i}),t.jsx(tc,{timeLeft:fn(i.split(" - ")[0],"minutes"),isNext:x,color:u,isCurrentEvent:g})]}),t.jsx(U,{size:3,align:"left",width:"fit-content",children:I.name})]}),t.jsx(xe,{margin:"0",width:"100%"}),t.jsx(Pe,{icon:t.jsx(Qn,{}),text:t.jsx(Ne,{words:[h??"",a]})}),((r==null?void 0:r.length)||I.link)&&t.jsx("a",{href:r??I.link,target:"_blank",rel:"noreferrer",children:t.jsx(Pe,{icon:t.jsx(Vi,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(Pe,{icon:t.jsx(na,{}),text:s}),!!c.length&&t.jsx(Pe,{icon:t.jsx(Cn,{}),text:t.jsx(Ne,{words:c})}),!!f.length&&t.jsx(Pe,{onClick:y,icon:t.jsx(es,{}),text:t.jsx(Ne,{words:f}),rightIcon:t.jsx(pt,{})}),t.jsx($,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(U,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(js,{type:"staff",name:j},j))]})}),!r&&t.jsx(xe,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:P})]})]})};p.span`
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
`;const O_=p.a`
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
`,Fi=({title:e,link:i,image:n})=>i?t.jsxs(O_,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(U,{size:3,children:e})]}):null,go=p.div`
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
`,A_=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(go,{children:t.jsx($,{jc:"center",children:t.jsx(Ke,{})})}):t.jsx(go,{children:e==="Webex"?t.jsx(Fi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Fi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Fi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Fi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},xo=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,tc=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=gt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(xo,{background:c,color:r,children:"Сейчас"}):t.jsxs(xo,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},D_=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,LT=()=>t.jsxs(D_,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(Y,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(Y,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),ic="/assets/sleep-54d590c1.gif";var nc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(nc||{});const N_=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],zT=[...N_,{title:"Месяц",condition:!0}],vt=Object.keys(It).reduce((e,i)=>(e[i]=[],e),{}),I_={schedule:{today:[],week:{...vt},semestr:{data:{...vt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...vt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},R_=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},yi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Qi=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Qi||{});const sc=e=>{const[i,n]=e.split(" "),s=Qi[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},oc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Qi[o],r=Qi[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},si=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[x,g]=r.split(" - "),m=yi(g)-yi(x),[f,b]=d.split("-").map(I=>I.trim()),y=sc(f),P=oc(b,f);return{title:o,people:a,startTime:x,duration:m,startDate:y,endDate:P,placeIcon:t.jsx(bu,{}),dateInterval:d,color:Wn[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Ki(o)}}):[],L_=e=>new Date(e.setHours(0,0,0,0)),fo=(e,i)=>(e??[]).filter(n=>{const s=L_(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=sc(o),c=oc(a,o);return s>=r&&s<=(c??r)}),ac=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),Vn=e=>e instanceof Date&&isFinite(+e),z_=e=>{const i={...vt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!Vn(n)||!Vn(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=ac(a);if(r==="sunday")continue;i[r]=[...i[r],...si(e[o].lessons,It[r].short)]}return{schedule:i,startDate:n,endDate:s}},rc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),lc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const x=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return H.evokePopUpMessage({message:x,type:"failure",time:ts.ten_seconds}),{schedule:I_.schedule,errorInData:x}}const o=new Date;let a=R_(o);o.getDay()===0&&(a=rc(o,1));const r={...vt},c={...vt};for(const x in e)if(x!=="Sunday"){const g=x.toLocaleLowerCase(),f=e[x];"lessons"in f?(r[g]=si(fo(f.lessons,a),It[g].short),c[g]=si(f.lessons,It[g].short)):(r[g]=si(fo(f,a),It[g].short),c[g]=si(f,It[g].short)),n=new Date(Math.min(...c[g].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=z_(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},cc=async e=>{const i=await Qu(e),n=await eh();return lc(i.data,n.data)},dc=async e=>{const i=await Zu(e),n=await th(e);return lc(i.data,n.data)},mo={data:{schedule:null,externalSchedule:null,view:nc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},M_=()=>q(de),Tt=M(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await dc(n);if(i&&s==="stud")return await cc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Xt=M(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await cc(e)}catch(i){throw new Error(i.message)}}),Kt=M(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await dc(e)}catch(i){throw new Error(i.message)}}),F_=k(),pc=k(),uc=k(),hc=k(),gc=k(),xc=k(),fc=k(),de=J(mo).on(Tt,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Tt.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(pc,(e,i)=>({...e,data:{...e.data,view:i}})).on(uc,(e,i)=>({...e,currentChosenDay:i.day})).on(hc,()=>({...mo}));E({clock:Tt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(vt)}}),target:de});E({clock:gc,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});E({clock:xc,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});E({clock:Kt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});E({clock:Xt.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});E({clock:[Xt,Kt,Tt],source:de,fn:e=>({...e,loading:!0}),target:de});E({clock:[Xt,Kt],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});E({clock:[Xt.doneData,Kt.doneData,Tt.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});E({clock:[Xt.failData,Kt.failData,Tt.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});E({clock:fc,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const ks={useSchedule:M_},B_={changeCurrentModule:F_,changeView:pc,changeCurrentChosenDay:uc,clearStore:hc,resetExternalSchedule:fc,setSearchValue:xc,setFilter:gc},H_={getScheduleFx:Tt,getGroupScheduleFx:Xt,getTeacherScheduleFx:Kt},U_=Object.freeze(Object.defineProperty({__proto__:null,effects:H_,events:B_,selectors:ks},Symbol.toStringTag,{value:"Module"})),W_=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${bi(Math.floor(o/60))}:${bi(o%60)}`},mc=(e,i)=>e?`${e} - ${W_(e,i)}`:"9:00",Gn=e=>!e||!Vn(e)?0:e.getHours()*60+e.getMinutes(),Ss=(e,i)=>yi(e.startTime)<=Gn(new Date)&&Gn(new Date)<=yi(e.startTime)+e.duration&&i,bc=()=>{const{open:e}=te();return n=>{const s=mc(n.startTime,n.duration);e(t.jsx(C_,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:Ss(n,!0),noPadding:!0,...n}))}},bo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},V_=()=>{const{currentDevice:e}=Ci(),[i,n]=l.useState(bo[e]);return l.useEffect(()=>{n(bo[e])},[e]),i},G_=p.div`
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
`,q_=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=V_(),o=bc(),a=[9,22];return e!=null&&e.length?t.jsx(G_,{children:t.jsx(_c,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ge,{text:"В этот день пар нет",image:ic})},yc=()=>{const{data:{schedule:e}}=ks.useSchedule(),{open:i}=te(),n=rc(new Date,1),s=Rr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=ac(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(q_,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},Y_=p.div`
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
`,MT=({errorInData:e})=>t.jsxs(Y_,{children:[t.jsx("img",{src:ic,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(yc,{})]});p.div`
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
`;const J_=(e,i,n)=>i?e?1:.8:n?1:0,X_=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>J_(e,i,n)};
    transform: scale(${({isVisible:e})=>X_(e)});
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
`;const K_=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,FT=()=>t.jsxs(K_,{children:[t.jsx(Fa,{size:"38px"}),t.jsx(U,{size:4,children:"Учебный день завершился"}),t.jsx(yc,{})]});p.div`
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
`;const Q_=e=>{const[i,n]=e.split(":");return+i*60+ +n},vc=(e,i,n)=>e?(Q_(e)-i)*n:0,Z_=p.div`
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
`;const ew=p($)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ee.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,tw=p.span`
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
`,iw=p.div`
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
`,nw=p($)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,sw=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:x,rooms:g,dateInterval:m,leftShift:f,quantity:b,groups:y,isCurrentEvent:P=!1,nameInOneRow:I=!0,isNextEvent:j=!1,listView:S=!1,shortInfo:C=!1}=e,{theme:L}=gt(),{isMobile:N}=Ci(),K=L==="light"?d.dark3:d.light3,z=L==="light"?d.transparent1:d.transparent2,ie=()=>h(e),ce=(N||b>1)&&C,$e=N&&b>=2&&C,ke=r==null?void 0:r.map(ze=>{var Ni,Ii;const Qt=ze.split(" ");return`${Qt[0]??""} ${((Ni=Qt[1])==null?void 0:Ni[0])??""}.${((Ii=Qt[2])==null?void 0:Ii[0])??""}.`}),Ve=vc(o,c,u),he=Zl(i),Ce=$e?i.split(" ").map(ze=>ze[0].toUpperCase()):Hn(he.name,C?ce?43:35:I?300:64),Di=(y==null?void 0:y.split(","))??[];return t.jsxs(Z_,{background:z,textColor:K,listView:S,leftShift:100*f,quantity:100/b,duration:n,scale:u,top:Ve,onClick:ie,shortInfo:C,children:[t.jsx(iw,{children:s}),t.jsx($,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(ew,{scale:u,d:"column",ai:"flex-start",shortInfo:C,children:[t.jsxs($,{d:"column",gap:"2px",children:[!C&&t.jsxs($,{gap:"8px",children:[t.jsx(ec,{timeInterval:mc(o,n),color:d,isCurrentEvent:P}),t.jsx(tc,{timeLeft:fn(o,"minutes"),isNext:j,color:d,isCurrentEvent:P}),!!(g!=null&&g.length)&&t.jsx(Pe,{shortInfo:C,icon:N&&b>1?void 0:t.jsx(Cn,{}),text:t.jsx(Ne,{words:g})}),(!!x||he.link)&&t.jsx("a",{href:x??he.link,target:"_blank",rel:"noreferrer",children:t.jsx(Pe,{shortInfo:C,icon:t.jsx(Vi,{}),text:x?a:"Cсылка"})}),!!Di.length&&t.jsx(Pe,{icon:t.jsx(es,{}),text:t.jsx(Ne,{words:Di})})]}),t.jsx(tw,{listView:S,nameInOneRow:I,scale:u,shortInfo:C,children:Ce})]}),!!r.length&&!ce&&t.jsx(Pe,{shortInfo:C,text:t.jsx(Ne,{words:C?[ke[0]]:ke}),icon:t.jsx(yu,{})}),!!(g!=null&&g.length)&&C&&!ce&&t.jsx(Pe,{shortInfo:C,icon:t.jsx(Cn,{}),text:t.jsx(Ne,{words:g})}),!!x&&C&&!ce&&t.jsx("a",{href:x,target:"_blank",rel:"noreferrer",children:t.jsx(Pe,{shortInfo:C,icon:t.jsx(Vi,{}),text:a})}),!!m&&!ce&&t.jsx($,{gap:"5px",children:t.jsx(Pe,{shortInfo:C,icon:t.jsx(Qn,{}),text:m})})]})})]})},ow=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},aw=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:u})=>{const h=ow(e),x=u??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs(nw,{h:"100%",d:"column",children:[x&&t.jsx(f_,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,f)=>h[m].map((b,y)=>l.createElement(sw,{leftShift:y,quantity:h[m].length,scale:n,isCurrentEvent:Ss(b,x),isNextEvent:Ql(e,b,x),...b,onClick:c,shift:i,key:b.startTime+b.title+f+y,shortInfo:s})))]})},rw=p($)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,lw=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,cw=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,dw=p(oe)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ee.isMobile} {
        font-size: 0.65rem;
    }
`,pw=Array(24).fill(0).map((e,i)=>`${bi(i)}:00`),uw=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):pw.slice(e[0],e[1]+1);return t.jsx(rw,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(lw,{children:[t.jsx(dw,{children:o}),t.jsx(cw,{})]},o))})},_c=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Kl({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var u;return vc((u=i==null?void 0:i[0])==null?void 0:u.startTime,o,n)}});return t.jsxs(r_,{className:"calendar-wrapper",ref:d,children:[t.jsx(uw,{interval:e,scale:n}),t.jsx(aw,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},hw=p.div`
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
`,gw=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=te();return o?t.jsxs(hw,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},xw=p.div`
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
`,fw=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,mw=p(oe)`
    margin-bottom: 20px;
`,bw=({image:e,list:i,text:n})=>{const{isMobile:s}=Ci();return t.jsxs(xw,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(U,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(mw,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(fw,{children:i==null?void 0:i.map(o=>l.createElement(gw,{...o,key:o.title}))})]})},yw=p.div`
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
`,vw=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,_w=()=>t.jsx(vw,{children:t.jsx(_c,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Wn["16:10 - 17:40"],icon:Ki("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Wn["17:50 - 19:20"],icon:Ki("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),wc=()=>{const[e,i]=l.useState(0),{close:n}=te(),s=[t.jsx(bw,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(_w,{})}},"schedule")];return t.jsxs(yw,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(Za,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>dt(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>dt(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},ww=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return yi(i.startTime)+i.duration<Gn(new Date)}},jw=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=ks.useSchedule(),o=bc(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=ww(e==null?void 0:e.today),c=Kl({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:x=>{var g,m;return x.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(f=>Ss(f,!0)||Ql(e.today,f,!0)))??0)}}),d=()=>H.evokePopUpMessage({message:n??"",type:"failure",time:ts.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},yo=p(rn)`
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
`,ti=()=>t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(Y,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(Y,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),kw=()=>{const{allRoutes:e}=Be.useMenu(),{data:{user:i}}=ve.useUser(),{hasNoSchedule:n,loading:s}=jw(),o=Ut();if(!e||!i||s)return t.jsxs(yo,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(ti,{}),t.jsx(ti,{}),t.jsx(ti,{}),t.jsx(ti,{}),t.jsx(ti,{})]});const a=(i==null?void 0:i.user_status)==="stud"?Nk:n?Rk:Ik;return t.jsx(yo,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(ql,{...e[r],isCurrent:c},r)})})},Sw=(e,i,n)=>({isOpen:i,message:e,position:n}),vo={hints:[]},Tw=()=>q(Ew),jc=k(),kc=k(),Sc=k(),Ew=J(vo).on(jc,(e,{message:i,position:n})=>({hints:[...e.hints,Sw(i,e.hints.length===0,n)]})).on(kc,e=>({hints:e.hints.splice(1,e.hints.length)})).on(Sc,()=>({...vo})),$w={useHint:Tw},Pw={evoke:jc,close:kc,clearStore:Sc},Cw=p.div`
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
`,Ow=()=>{const{hints:e}=$w.useHint(),i=e[0];return i?t.jsx(Cw,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(Q,{type:"hint",title:i.message,onClose:()=>Pw.close(),width:"100%",icon:null})}):null},Aw=p.div`
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
`,Dw=50;function BT({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Dw}){const{data:{user:u}}=ve.useUser();let h="";const x=l.useCallback(g=>{const m=g.currentTarget.clientHeight,f=g.currentTarget.scrollHeight,b=g.currentTarget.scrollTop;f-d<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ge,{text:"Нет результатов",children:c}):t.jsxs(Aw,{onScroll:x,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var b,y;const f=r?h!==((b=g.fio)==null?void 0:b.charAt(0)):!1;return f&&(h=((y=g.fio)==null?void 0:y.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[f&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(U,{size:4,align:"left",children:h}),t.jsx(xe,{})]}),i(g,(u==null?void 0:u.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(Ke,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Nw=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ve.useUser();return te(),t.jsxs(Ee,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(oe,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(js,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function Iw(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const HT=p.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>Iw(e)};
        opacity: 1;
    }
`,UT=p.div`
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
`,Tc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Rw=()=>{const e=O?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Mc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:ad,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Fc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Bc,title:"Справка-вызов"},{link:Zc,title:"Заявление на пересдачу для получения диплома с отличием"},{link:od,title:"Запрос на изменение персональных данных"},{link:Qc,title:"Запрос на восстановление магнитного пропуска"},{link:Ic,title:"Уточнение паспортных данных"},{link:rd,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:ld,title:"Предоставление каникул в связи с окончанием университета"},{link:cd,title:"Предоставление академического отпуска"},{link:dd,title:"Выход из академического отпуска"},{link:pd,title:"Отчисление по инициативе обучающегося"},{link:ud,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Hc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Uc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Wc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Gc,title:"Предоставление права проживания льготной категории граждан"},{link:Vc,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:qc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Jc,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Xc,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Yc,title:"Расторжение договора найма"},{link:Kc,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:ra,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:id,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:nd,title:"Заявка на материальную помощь"},{link:zc,title:"Оформить социальную стипендию"},{link:sd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:O,links:[{link:ed,title:"Отправить документы воинского учета"},{link:td,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:O,links:[{link:qn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:qn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:zu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Rc,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:O,links:[{link:Lc,title:"Трудоустройство студентов"}]}]},Lw=()=>[{title:"Цифровые сервисы",links:[{link:Yr,title:"Справка о стаже работы"},{link:Xr,title:"Копия трудовой книжки"},{link:Kr,title:"Копии документов из личного дела"},{link:Qr,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{title:"Общее",links:[{link:zr,title:"Актуализация контактных данных"}]},{title:"ИТ-обслуживание",links:[{link:Fr,title:"Получение нового компьютерного оборудования"},{link:Br,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Hr,title:"Обслуживание принтеров, МФУ"},{link:Ur,title:"Вопрос по СЭД Directum и 1С"},{link:Wr,title:"Вопрос по Личному кабинету"},{link:Vr,title:"Прочее ИТ-обслуживание"}]},{title:"Отдел кадров",links:[{link:Gr,title:"Справка с места работы"},{link:qr,title:"Справка с места работы для предоставления в визовый центр"},{link:Jr,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Бухгалтерия",links:[{link:il,title:"Справка по форме 2-НДФЛ"},{link:nl,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Zr,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:sl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",links:[{link:al,title:"Предоставление права проживания в жилом помещении"},{link:rl,title:"Временное размещение гостей в студгородке"},{link:ll,title:"Проход гостей на территорию студенческого городка"},{link:cl,title:"Переселение"},{link:dl,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",links:[{link:pl,title:"Выдача пропуска (повторная)"},{link:ul,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",links:[{link:hl,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",links:[{link:Mr,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:tl,title:"Курьер"}]},{title:"Мобилизационный отдел",links:[{link:gl,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:xl,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",links:[{link:el,title:"Произвольный запрос"},{link:ra,title:"Вступить в Профсоюз",isExternalLink:!0}]}],zw=()=>[{title:"",links:[{link:ol,title:"Заявление на трудоустройство по совместительству"},{link:Ln,title:"Заявление на увольнение"},{link:Fn,title:"Заявление о привлечении к работе в выходной день"},{link:zn,title:"Заявление о предоставлении отпуска"},{link:Mn,title:"Заявление о переносе отпуска"},{link:Bn,title:"Заявление о диспансеризации"},{link:Wi,title:"Заявление на перевод"}]}],Mw=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Fw=p.div`
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
`,WT=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=te(),s=e?Lw():Rw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(Fw,{children:[t.jsx(Ka,{whereToSearch:s,searchEngine:Tc,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(d=>{if(!d.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(U,{size:4,align:"left",bottomGap:!0,children:d.title}),t.jsx("div",{className:"links",children:d.links.map((u,h)=>{if(!(u.disabled||!Mw(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},d.title)}),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})})]})},Bw=p.div`
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
`,Hw=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,VT=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=te(),s=zw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(Ue,{load:()=>Re.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Yt,{children:[t.jsx(Q,{type:"info",title:"Информация",icon:t.jsx(Ye,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Bw,{children:[t.jsx(U,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Ka,{whereToSearch:s,searchEngine:Tc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(Hw,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Z,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Uw=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),_o={isOpen:!1,pages:[],currentPage:0},Ww=()=>q(Vw),Ec=k(),$c=k(),Pc=k(),Cc=k(),Vw=J(_o).on(Ec,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on($c,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(Pc,(e,{value:i})=>({...e,currentPage:i})).on(Cc,()=>({..._o})),Ts={useStory:Ww},bt={open:Ec,close:$c,clearStore:Cc,changeCurrentPage:Pc};p(Qe)`
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
`;const Gw=p.div`
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
`,Es=Gw,qw=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,u]=l.useState(r===void 0),[h,x]=l.useState(!a),[g,m]=l.useState(!1),f=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),x(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!!j.find(S=>!S.value&&S.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),x(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(S=>!S.value&&S.required))&&!n.find(j=>!!j.find(S=>{var C;return S.value.id==="not-chosen"&&!!((C=S.items)!=null&&C.length)}))?(s(j=>(j.confirmed=!0,{...j})),u(!1),x(!1)):H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),u(!1),x(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),u(!1),x(!1)):H.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var S;return j.value===null&&!!((S=j.items)!=null&&S.length)})?(s(j=>(j.confirmed=!0,{...j})),u(!1),x(!1)):H.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},b=()=>{s(j=>{const S=j.default[0].map(C=>({fieldName:C.fieldName??"",title:C.title,value:C.type==="select"&&(C!=null&&C.items)?null:"",type:C.type,items:C.items,width:C.width,required:C.required}));return{...j,data:[...j.data,S]}})},y=j=>{s(S=>{const C=S.data.filter((L,N)=>j!==N);return{...S,data:C}})},P=j=>{s(S=>(S.documents&&(S.documents.files=[...j]),{...S}))},I=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{x(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:x,setIncluded:m,setChangeInputArea:u,handleRemove:y,handleAddNew:b,handleLoadFiles:P,handleConfirm:f,handleCheckbox:I}},Yw=p.div`
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
`,Jw=p.div``,Xw=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Jw,{children:[t.jsx(U,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(Mx,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:x=>s(x,h)},docVisible:d==="straight"?o:!o},a))]}),Kw=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(U,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Ee,{children:[!a&&t.jsx(qe,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(qe,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),Qw=p.div`
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
`,Zw=({title:e,value:i,visible:n})=>n?t.jsxs(Qw,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,ej=p.div`
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
`,tj=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(ej,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(vu,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(ia,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,ij=p.div`
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
`,nj=({title:e,visible:i})=>i?t.jsx(ij,{children:t.jsx("span",{className:"title",children:e})}):null,sj=p.div`
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
`,oj=p.ul`
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
`,aj=p.li`
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
`,rj=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:x})=>{const[g,m]=l.useState([]),[f,b]=l.useState(!0);return l.useEffect(()=>{if(e){const y=x.filter(P=>P.toLowerCase().includes(e.toLowerCase()));m(y)}else m([])},[e,x]),t.jsxs(sj,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(U,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:y=>{i(y.target.value),b(!0)},placeholder:c}),g.length>0&&t.jsx(oj,{width:"100%",isOpen:f,className:f?"open":"close",itemsAmount:g.length,title:s,children:g.map((y,P)=>t.jsx(aj,{isSelected:!1,onClick:()=>{i(y),m([]),b(!1)},children:y},P))})]})]})},lj=p.div`
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
`,cj=({title:e,visible:i})=>i?t.jsx(lj,{children:t.jsx("span",{className:"title",children:e})}):null,wo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:x,setData:g,mask:m,editable:f,placeholder:b,autocomplete:y,isSpecificRadio:P,specialType:I,specialFieldsNameConfig:j,minValueInput:S,maxValueInput:C,maxValueLength:L,diff:N,visible:K=!0,onChange:z,onKeyPress:ie,onBlur:ce,onKeyDown:$e,onKeyUp:ke,onFocus:Ve}=e,he=f??(x&&!h),[Ce,Di]=l.useState(!0),ze=(G,pe,Dt)=>{z==null||z(G),g(_e=>(Array.isArray(_e.data[0])?_e.data[pe][Dt??0].value=G:_e.data[pe].type==="checkbox-docs"?_e.data[pe].items[Dt??0].value=!!G:_e.data[pe].value=G,{..._e}))},Qt=(G,pe,Dt)=>{z==null||z(G),g(_e=>(Array.isArray(_e.data[0])?_e.data[pe][Dt??0].value=G:_e.data[pe].value=G,{..._e}))},As=(G,pe,Dt)=>{g(_e=>(_e.data[pe].items[Dt??0].files=G,{..._e}))},Ni=G=>{z==null||z(G),g(pe=>(pe.data[o].value=G,{...pe}))},Ii=G=>{z==null||z(G),ie==null||ie(G),ce==null||ce(G),$e==null||$e(G),ke==null||ke(G),Ve==null||Ve(G),g(pe=>(pe.data[o].value=G,{...pe}))};return j&&I&&!Object.values(j).includes(I)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(qe,{text:u,isActive:he,checked:i,setChecked:G=>ze(G,o,a)}):r==="hr-checkbox"?t.jsx(tj,{text:u,isActive:he,checked:i,setChecked:G=>ze(G,o,a)}):r==="auto-complete-input"?t.jsx(rj,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:G=>ze(G,o,a)}):r==="textarea"?t.jsx(Bg,{value:i,title:u,setValue:G=>ze(G,o,a),isActive:he,textAreaAppearance:he,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(Xw,{title:u,items:d,setChecked:(G,pe)=>ze(!G,o,pe),setFiles:(G,pe)=>As(G,o,pe)}):r==="date-interval"?K?t.jsx(ir,{title:u,required:n,dates:i,setDates:G=>Ii(G),valid:Ce,setValid:Di,minValue:S,diff:N}):null:r==="simple-text"?t.jsx(Zw,{title:u,value:i,visible:K}):r==="text-warning"?t.jsx(cj,{title:u,visible:K}):r==="text-header"?t.jsx(nj,{title:u,visible:K}):r==="radio"?t.jsx(Kw,{buttons:d,title:u,required:n,current:i,setCurrent:Ni,isSpecificRadio:P}):K?t.jsx(ct,{value:i,title:u,minValue:S,maxValue:C,maxLength:L,setValue:G=>ze(G,o,a),type:r,isActive:he,inputAppearance:he,placeholder:b??u,required:n,mask:m,width:s,autocomplete:y}):null:K?t.jsx(rr,{items:d,setSelected:G=>Qt(G,o,a),selected:i,isActive:he,title:u,width:s,multiple:r==="multiselect",required:n}):null},dj=p.div`
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
`,pj=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(dj,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(U,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Bo,{}):t.jsx(Ho,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(qe,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(He,{}),onClick:()=>null,background:"transparent",flipped:c})]}),uj=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Is,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(_u,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(_t,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(wu,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Is,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),hj=e=>e.confirmed===void 0?null:t.jsx(Ee,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(uj,{...e,confirmed:e.confirmed})}),Oc=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:x,links:g,specialFieldsNameConfig:m,defaultOpenArea:f})=>{const{openArea:b,changeInputArea:y,included:P,setOpenArea:I,setIncluded:j,setChangeInputArea:S,handleRemove:C,handleAddNew:L,handleLoadFiles:N,handleConfirm:K,handleCheckbox:z}=qw({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:x,confirmed:c,defaultOpenArea:f});return t.jsxs(t.Fragment,{children:[t.jsxs(Yw,{openArea:b,children:[t.jsx(pj,{title:e,included:P,optional:d,confirmed:c,setOpenArea:I,setIncluded:j,collapsed:x}),t.jsxs("div",{className:"inputs",children:[t.jsx(Q,{type:"alert",visible:!!n,icon:t.jsx(xi,{}),children:n}),t.jsx(Q,{type:"info",visible:!!i&&(y||c===void 0),title:"Как заполнить",icon:t.jsx(Ye,{}),children:i}),Array.isArray(s[0])?s.map((ie,ce)=>t.jsxs("div",{className:"data-line",children:[ie.map(($e,ke)=>t.jsx(wo,{documents:a,changeInputArea:y&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:ke,specialFieldsNameConfig:m,...$e},ke)),y&&u&&t.jsx(_,{icon:t.jsx(ju,{}),textColor:w.red.main,onClick:()=>C(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((ie,ce)=>t.jsx(wo,{documents:a,changeInputArea:y&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:m,...ie},ce)),u&&y&&t.jsx(_,{icon:t.jsx(ku,{}),text:"Добавить",onClick:L,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&y&&a.visible!==!1&&t.jsx(tr,{files:a.files,setFiles:ie=>N(ie),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(ie=>l.createElement(tx,{...ie,key:ie.title})),t.jsx(qe,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||y,checked:(o==null?void 0:o.value)??!1,setChecked:z}),t.jsx(hj,{confirmed:c,changeInputArea:y,setData:r,setChangeInputArea:S,handleConfirm:K})]})]}),h&&t.jsx(xe,{})]})},gj=p.div`
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
`,xj=p.div`
    display: flex;
    margin-bottom: -20px;
`,fj=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Ac=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:Te(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(xj,{children:e.map((r,c)=>t.jsxs(fj,{lastElement:c===e.length-1,children:[t.jsx(gj,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(Cg,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Oc,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},mj=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),bj=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),yj=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),$s=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return Uw(u);if(Array.isArray(u.data[0])){const h=u.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>jo(m)))),x={};return x[e]=JSON.stringify(h),x}else return u.data.map(h=>jo(h))}).flat(),r=i.map(u=>{var x,g;const h={};if((x=u.documents)!=null&&x.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((g=u.documents)==null?void 0:g.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var x,g;const h={};return(x=u.optionalCheckbox)!=null&&x.fieldName&&(h[(g=u.optionalCheckbox)==null?void 0:g.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Re.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},jo=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=vj(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},vj=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Ps=p.div`
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
`;var mn=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(mn||{}),_j=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(_j||{});const wj=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],jj=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],kj=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:jj},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:wj}]}},Sj=()=>{var z;const[e,i]=l.useState(null),[n,s]=l.useState(Li.kvdCert),[o,a]=l.useState(Li.fluorographyCert),[r,c]=l.useState(Li.vichRwCert),[d,u]=l.useState(Li.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:x}}=ve.useUser(),[g,m]=l.useState(!1),[f,b]=l.useState(!1),[y,P]=l.useState(null),[I,j]=l.useState(null),[S,C]=l.useState(null),L=g??!1;if((x==null?void 0:x.educationForm)!=="Недоступен")return t.jsx(ge,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const N=!!e&&!!I&&!!y&&!!S;if(l.useEffect(()=>{h&&(i(kj(h)),P(bj()),j(yj()),C(mj()))},[h]),!N)return null;const K=[[{dataForm:e,setDataForm:i}],[{dataForm:I,setDataForm:j}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx(Ps,{isDone:L,children:t.jsxs(os,{children:[t.jsx(U,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Ac,{stagesConfig:K}),t.jsx(kt,{text:"Отправить",action:()=>$s(mn.USG_GETHOSTEL_OOZ,[e,I,y,S,n,o,r,d],b,m),isLoading:f,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:L,isActive:(((z=e.optionalCheckbox)==null?void 0:z.value)??!0)&&Te(e)&&Te(o)&&Te(r)&&Te(d)&&Te(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Tj=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],Ej=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],$j=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],Pj=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],Cj=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],Oj=[{id:0,title:"1"},{id:1,title:"2"}],Aj=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],Dj=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],Nj=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],Ij=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),Rj=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Tj,width:"100%",editable:!0,required:!0}]}),Lj=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Ej,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),zj=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:$j,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:Pj,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:Cj,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:Oj,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:Aj,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),Mj=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:Dj,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ko=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:Nj,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},Dc=()=>{var C;const[e,i]=l.useState(null),[n,s]=l.useState(Rj()),[o,a]=l.useState(Lj()),[r,c]=l.useState(zj()),[d,u]=l.useState(Mj()),[h,x]=l.useState(ko(null)),[g,m]=l.useState(!1),[f,b]=l.useState(!1),[y,P]=l.useState(!1),{data:{dataUserApplication:I}}=ye.useApplications();l.useEffect(()=>{I&&i(Ij(I))},[I]);const j=l.useMemo(()=>{var L,N;return((N=(L=h==null?void 0:h.data[0])==null?void 0:L.value)==null?void 0:N.id)!==0},[(C=h==null?void 0:h.data[0])==null?void 0:C.value]);if(l.useEffect(()=>{h&&x(ko(h.data))},[j]),!e)return null;const S=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:x}]];return t.jsx(Ps,{isDone:!1,children:t.jsxs(os,{children:[t.jsx(U,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Ac,{stagesConfig:S}),t.jsx(qe,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(kt,{text:f?"Отправлено":"Отправить",action:()=>$s(mn.MIL_REG,[e,n,o,r,d,h],P,b),isLoading:y,completed:f,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:f,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&Te(e)&&Te(n)&&Te(r)&&Te(d)&&Te(h)&&Te(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Fj=Object.freeze(Object.defineProperty({__proto__:null,default:Dc},Symbol.toStringTag,{value:"Module"})),Bj=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],Hj=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:Bj},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),Uj=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Nc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:u}}=ye.useApplications();return l.useEffect(()=>{u&&i(Hj(u))},[u]),l.useEffect(()=>{e&&u&&c(Uj(e.data))},[e]),t.jsx(Ps,{isDone:d,children:!!e&&!!i&&t.jsxs(os,{children:[t.jsx(Oc,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(kt,{text:d?"Отправлено":"Отправить",action:()=>$s(mn.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:Te(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Wj=Object.freeze(Object.defineProperty({__proto__:null,default:Nc},Symbol.toStringTag,{value:"Module"})),Vj=l.lazy(()=>v(()=>import("./index-f21b4fbf.js"),["assets/index-f21b4fbf.js","assets/vendor-2324f29b.js"])),Gj=l.lazy(()=>v(()=>import("./index-38873dd5.js"),["assets/index-38873dd5.js","assets/vendor-2324f29b.js"])),qj=l.lazy(()=>v(()=>import("./index-b7f0939d.js"),["assets/index-b7f0939d.js","assets/vendor-2324f29b.js"])),Yj=l.lazy(()=>v(()=>import("./index-a6ce0cd4.js"),["assets/index-a6ce0cd4.js","assets/vendor-2324f29b.js"])),Jj=l.lazy(()=>v(()=>import("./index-a8ae94e3.js"),["assets/index-a8ae94e3.js","assets/vendor-2324f29b.js"])),Xj=l.lazy(()=>v(()=>import("./index-18984d3a.js"),["assets/index-18984d3a.js","assets/vendor-2324f29b.js","assets/ui-5e47f4cf.js"])),Kj=l.lazy(()=>v(()=>import("./index-da6aa275.js"),["assets/index-da6aa275.js","assets/vendor-2324f29b.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Qj=l.lazy(()=>v(()=>import("./index-eb0654f0.js"),["assets/index-eb0654f0.js","assets/vendor-2324f29b.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Zj=l.lazy(()=>v(()=>import("./index-8595f96b.js"),["assets/index-8595f96b.js","assets/vendor-2324f29b.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ek=l.lazy(()=>v(()=>import("./index-9b76838d.js"),["assets/index-9b76838d.js","assets/vendor-2324f29b.js"])),tk=l.lazy(()=>v(()=>import("./index-8f486781.js"),["assets/index-8f486781.js","assets/vendor-2324f29b.js","assets/index-596e848b.js"])),ik=l.lazy(()=>v(()=>import("./index-b353a486.js"),["assets/index-b353a486.js","assets/vendor-2324f29b.js","assets/is-valid-url-08a91344.js"])),nk=l.lazy(()=>v(()=>import("./index-e723b21b.js"),["assets/index-e723b21b.js","assets/vendor-2324f29b.js"])),sk=l.lazy(()=>v(()=>import("./index-03005e7a.js"),["assets/index-03005e7a.js","assets/vendor-2324f29b.js"])),ok=l.lazy(()=>v(()=>import("./index-cbfa2f52.js"),["assets/index-cbfa2f52.js","assets/vendor-2324f29b.js"])),ak=l.lazy(()=>v(()=>import("./index-c2243dc2.js"),["assets/index-c2243dc2.js","assets/vendor-2324f29b.js"])),rk=l.lazy(()=>v(()=>import("./index-6bfcd4d1.js"),["assets/index-6bfcd4d1.js","assets/vendor-2324f29b.js"])),lk=l.lazy(()=>v(()=>import("./index-efe8f046.js"),["assets/index-efe8f046.js","assets/vendor-2324f29b.js"])),ck=l.lazy(()=>v(()=>import("./index-5fa57875.js"),["assets/index-5fa57875.js","assets/vendor-2324f29b.js"])),dk=l.lazy(()=>v(()=>import("./index-507c22f7.js"),["assets/index-507c22f7.js","assets/vendor-2324f29b.js"])),pk=l.lazy(()=>v(()=>import("./index-6342b974.js"),["assets/index-6342b974.js","assets/vendor-2324f29b.js"])),uk=l.lazy(()=>v(()=>import("./index-93a57a34.js"),["assets/index-93a57a34.js","assets/vendor-2324f29b.js","assets/BoldText-34495506.js"])),hk=l.lazy(()=>v(()=>import("./index-e2ae723d.js"),["assets/index-e2ae723d.js","assets/vendor-2324f29b.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Fj),void 0));const gk=l.lazy(()=>v(()=>import("./index-8a46939f.js"),["assets/index-8a46939f.js","assets/vendor-2324f29b.js"])),xk=l.lazy(()=>v(()=>import("./index-50a7d4bf.js"),["assets/index-50a7d4bf.js","assets/vendor-2324f29b.js"])),fk=l.lazy(()=>v(()=>import("./index-22a13742.js"),["assets/index-22a13742.js","assets/vendor-2324f29b.js"])),mk=l.lazy(()=>v(()=>import("./index-75c223a2.js"),["assets/index-75c223a2.js","assets/vendor-2324f29b.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),bk=l.lazy(()=>v(()=>import("./index-a58fd5f9.js"),["assets/index-a58fd5f9.js","assets/vendor-2324f29b.js","assets/get-method-obtaining-fields-de6a3bf9.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),yk=l.lazy(()=>v(()=>import("./index-a87d5b82.js"),["assets/index-a87d5b82.js","assets/vendor-2324f29b.js"])),vk=l.lazy(()=>v(()=>import("./index-26ef9712.js"),["assets/index-26ef9712.js","assets/vendor-2324f29b.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Wj),void 0));const _k=l.lazy(()=>v(()=>import("./index-d20ae811.js"),["assets/index-d20ae811.js","assets/vendor-2324f29b.js"])),wk=l.lazy(()=>v(()=>import("./index-d04ac89e.js"),["assets/index-d04ac89e.js","assets/vendor-2324f29b.js"])),jk=l.lazy(()=>v(()=>import("./index-0493fc2d.js"),["assets/index-0493fc2d.js","assets/vendor-2324f29b.js"])),kk=l.lazy(()=>v(()=>import("./index-5a7c71a3.js"),["assets/index-5a7c71a3.js","assets/vendor-2324f29b.js"])),Sk=l.lazy(()=>v(()=>import("./index-937baf6d.js"),["assets/index-937baf6d.js","assets/vendor-2324f29b.js"])),Tk=l.lazy(()=>v(()=>import("./index-cdf0e3c8.js"),["assets/index-cdf0e3c8.js","assets/vendor-2324f29b.js","assets/get-divisions-96cfa1b1.js"])),Ek=l.lazy(()=>v(()=>import("./index-d0286e77.js"),["assets/index-d0286e77.js","assets/vendor-2324f29b.js"])),T="/applications",$k="/application-for-superior-room",Pk="/acad-performance",Ck="/dormitory",Ic=T+"/clarification-of-passport-data",Rc=T+"/arbitrary-request",Lc=T+"/student-employment",zc=T+"/social-scollarship",Mc=T+"/certificate-of-attendance",Fc=T+"/social-agencies",Bc=T+"/paper-call",Hc=T+"/regular-accommodation",Uc=T+"/full-time-part-time-form",Wc=T+"/accommodation-correspondence-form",Vc=T+"/academic-leave-accommodation",Gc=T+"/preferential-accommodation",qc=T+"/family-room",Yc=T+"/termination-of-employment-contract",Jc=T+"/relocation-inside-hostel",Xc=T+"/relocation-to-another-hostel",Kc=T+"/accommodation-for-graduates",qn=T+"/payment-recipient",Qc=T+"/restoring-the-magnetic-pass",Zc=T+"/retake-for-diploma",ed=T+"/military-registration-documents",td=T+"/military-registration",id=T+"/financial-support",nd=T+"/financial-assistance",sd=T+"/increased-state-academic-scholarship",od=T+"/changing-personal-data",ad=T+"/student-status",rd=T+"/state-accreditation",Ok=T+"/military-registration-card",ld=T+"/holidays-after-training",cd=T+"/provision-academic-leave",dd=T+"/exit-academic-leave",pd=T+"/independently-deducted",ud=T+"/extension-attestation",Ak="/physical-education/student",it=()=>we({oldVersionUrl:"/sprav"}),ii=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:T,Component:tk,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...Pl,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(rt,{}),path:Ji,Component:xs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Rs,{}),path:Ck,Component:qj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Su,{}),path:Pk,Component:Gj,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:Ak,pageSize:"big",Component:Xj,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Uo,{}),path:kl,Component:ik,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Tu,{}),path:El,Component:rs,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Rs,{}),path:$k,Component:Vj,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(Na))}}),So=e=>{var i,n,s;return{...Cl,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(oi,{}),path:Ic,Component:Yj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(oi,{}),path:Rc,Component:Tk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(oi,{}),path:Lc,Component:O?it:Ek,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(X,{}),path:zc,Component:O?it:Jj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(X,{}),path:Mc,Component:Kj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(X,{}),path:Fc,Component:Qj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(X,{}),path:Bc,Component:Zj,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(X,{}),path:Hc,Component:ek,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(X,{}),path:Uc,Component:Sj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(X,{}),path:Wc,Component:kk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(X,{}),path:Vc,Component:nk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(X,{}),path:Gc,Component:sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(X,{}),path:qc,Component:Sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(X,{}),path:Yc,Component:ok,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(X,{}),path:Jc,Component:O?()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):ak,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(X,{}),path:Xc,Component:O?()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):lk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:X,path:Kc,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?rk:()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(X,{}),path:qn,Component:ck,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(X,{}),path:Qc,Component:dk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(X,{}),path:ed,Component:O?it:hk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(Eu,{}),path:td,Component:O?it:Dc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:T},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(X,{}),path:Zc,Component:uk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(X,{}),path:sd,Component:O?it:pk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(X,{}),path:id,Component:O?it:gk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(X,{}),path:nd,Component:O?it:xk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(X,{}),path:od,Component:fk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(X,{}),path:ad,Component:mk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(X,{}),path:rd,Component:bk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(X,{}),path:ld,Component:yk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(X,{}),path:cd,Component:vk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(X,{}),path:dd,Component:Nc,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(X,{}),path:pd,Component:_k,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(X,{}),path:ud,Component:wk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(X,{}),path:Ok,Component:O?it:jk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T}}},To=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Dk=["settings","profile","chat","schedule","payments","project-activity","all-students"],Nk=["home","schedule","acad-performance","all","profile"],Ik=["home","schedule","alerts","all","profile"],Rk=["home","doclist","alerts","all","profile"],Lk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(B.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??sn,s=aa.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},Eo={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},zk=()=>q(Fk),hd=k(),gd=k(),xd=k(),fd=k(),Mk=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},ni=e=>{if(!e)return no();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(no()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},Fk=J(Eo).on(hd,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(gd,()=>({...Eo})).on(xd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?ni(n)[window.location.hash.slice(2,window.location.hash.length)]:ii()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...ni(n),...so()}:{...ii(),...So(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?ni(n):ii(),leftsideBarRoutes:To(Lk(i),(i==null?void 0:i.user_status)==="staff"?ni(n):ii()),homeRoutes:To(s??JSON.parse(localStorage.getItem(B.HomeRoutes)??JSON.stringify(Dk)),(i==null?void 0:i.user_status)==="staff"?{...ni(n),...so()}:{...ii(),...So(i)})})).on(fd,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Mk(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Be={useMenu:zk},et={changeOpen:hd,clearStore:gd,defineMenu:xd,changeNotifications:fd},md=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:Sl,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:At,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Ji,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Ji,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:ys,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Lr,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:fs,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:T,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:ml,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Bk={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},bd=(e,i)=>i.filter(({type:n})=>e[Bk[n]]),Hk={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},bn=M(async({settings:e})=>{try{const{data:i}=await Ah();return bd(e,i).map(({id:n,type:s,title:o,text:a})=>md(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Uk=M(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&et.changeNotifications({page:i,notifications:1})})}),Wk=M(({notifications:e})=>{const{pageId:i}=e[0];i&&et.changeNotifications({page:i,notifications:1})}),yn=M(async({id:e,pageId:i})=>{try{return await Dh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),vn=M(async()=>{try{await Nh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Vk=e=>{e&&et.changeNotifications({page:e,notifications:0})},yd=k(),vd=k(),_d=k(),wd=k(),jd=k(),kd=k(),Sd=k(),ae=J(Hk).reset(Sd);Le({from:vd,to:bn});E({clock:bn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});E({clock:bn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});E({clock:bn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,Uk]});E({clock:yd,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,Wk]});Le({from:wd,to:yn});E({clock:yn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Vk(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});E({clock:yn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});E({clock:yn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});Le({from:jd,to:vn});E({clock:vn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});E({clock:vn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});E({clock:vn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});E({clock:_d,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});E({clock:kd,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const Gk=()=>je(ae),Et={initialize:vd,add:yd,clearById:wd,clearVisibleById:_d,clearAll:jd,clearAllVisible:kd,clearStore:Sd},tt={useLkNotifications:Gk},qk=Object.freeze(Object.defineProperty({__proto__:null,events:Et,selectors:tt},Symbol.toStringTag,{value:"Module"})),$o={messages:null,error:null},Yk=()=>({data:q(Po).messages,loading:q(pi.pending),error:q(Po).error}),pi=M(async()=>{try{return(await ah("1")).data}catch(e){throw new Error(e)}}),Td=k(),Po=J($o).on(pi,e=>({...e,error:null})).on(pi.doneData,(e,i)=>({...e,messages:i})).on(pi.failData,(e,i)=>({...e,error:i.message})).on(Td,()=>({...$o})),Jk={useMessages:Yk},Xk={getMessagesFx:pi},Kk={clearStore:Td},Qk=Object.freeze(Object.defineProperty({__proto__:null,effects:Xk,events:Kk,selectors:Jk},Symbol.toStringTag,{value:"Module"})),Co={type:null,personalNotifications:null,error:null,completed:!1},Zk=()=>({data:q(zt).personalNotifications,loading:q(Lt.pending),error:q(zt).error,completed:q(zt).completed}),eS=()=>q(zt).type,Ed=k(),$d=M(e=>e),Lt=M(async()=>{const{type:e}=zt.getState();if(e==="notifications")try{return(await ga()).data}catch(i){throw new Error(i)}try{return{docs:(await xa()).data}}catch(i){throw new Error(i)}}),Zi=M(async e=>{const{type:i}=zt.getState(),n=i==="notifications"?wh:kh;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),Pd=k(),zt=J(Co).on($d,(e,i)=>({...e,type:i})).on(Lt,e=>({...e,error:null})).on(Lt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Lt.failData,(e,i)=>({...e,error:i.message})).on(Zi.doneData,e=>({...e})).on(Zi.failData,(e,i)=>({...e,error:i.message})).on(Ed,(e,i)=>({...e,completed:i.completed})).on(Pd,()=>({...Co}));Zi.doneData.watch(()=>Lt());const tS={usePersonalNotifications:Zk,useType:eS},iS={setNotificationsType:$d,getPersonalNotificationsFx:Lt,viewPersonalNotificationsFx:Zi},nS={changeCompleted:Ed,clearStore:Pd},sS=Object.freeze(Object.defineProperty({__proto__:null,effects:iS,events:nS,selectors:tS},Symbol.toStringTag,{value:"Module"})),oS=on({api:{get:vh}}),Oo={superiorRoom:null,error:null},aS=()=>({data:q(Ao).superiorRoom,loading:q(ui.pending),error:q(Ao).error}),Cd=k(),rS=M(async e=>{});Le({from:Cd,to:rS});const ui=M(async()=>{try{return(await ph()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Od=k(),Ao=J(Oo).on(ui,e=>({...e,error:null})).on(ui.doneData,(e,i)=>({...e,superiorRoom:i})).on(ui.failData,(e,i)=>({...e,error:i.message})).on(Od,()=>({...Oo})),lS={useSuperiorRoom:aS},cS={getSuperiorRoomFx:ui},dS={postSuperiorRoom:Cd,clearStore:Od},pS=Object.freeze(Object.defineProperty({__proto__:null,effects:cS,events:dS,selectors:lS},Symbol.toStringTag,{value:"Module"})),Do={teacherDataVerification:null,error:null,completed:!1},uS=()=>({data:q($n).teacherDataVerification,loading:q(hi.pending),error:q($n).error,completed:q($n).completed}),Ad=k(),Dd=k(),hS=M(async e=>{try{return(await $h(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Le({from:Ad,to:hS});const hi=M(async()=>{try{return(await Eh()).data}catch{throw new Error("Не удалось войти")}}),Nd=k(),$n=J(Do).on(hi,e=>({...e,error:null})).on(hi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(hi.failData,(e,i)=>({...e,error:i.message})).on(Dd,(e,i)=>({...e,completed:i.completed})).on(Nd,()=>({...Do})),gS={useTeacherDataVerification:uS},xS={getTeacherDataVerificationFx:hi},fS={postTeacherDataVerification:Ad,changeCompleted:Dd,clearStore:Nd},mS=Object.freeze(Object.defineProperty({__proto__:null,effects:xS,events:fS,selectors:gS},Symbol.toStringTag,{value:"Module"})),bS=[Lh,lt,Yh,Kh,cg,Qk,sS,Rb,Wh,oS,U_,pS,mS,ig,Mh,qk],yS=()=>{bS.forEach(e=>{e.events.clearStore()})},vS=()=>{localStorage.removeItem(B.Token),localStorage.removeItem(B.JWT),localStorage.removeItem(B.JWTRefresh),sessionStorage.removeItem(B.Token),sessionStorage.removeItem(B.JWT),localStorage.removeItem(B.JWTRefresh)},ot=localStorage.getItem(B.Token)??"",at=()=>JSON.parse(localStorage.getItem(B.SavePassword)??"true"),_n=M(async e=>{try{const{data:i}=await Yu(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await Pt.post("/old",n)}catch{}return vS(),at()?(localStorage.setItem(B.Token,i.token),localStorage.setItem(B.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(B.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(B.Token,i.token),sessionStorage.setItem(B.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(B.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),yt=M(async e=>{try{const[i,n]=await Promise.all([Ju(e.token),ha()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:Ih({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:at()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),Yn=M(async e=>{try{return(await Xu(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Id=M(()=>{at()?(localStorage.removeItem(B.Token),localStorage.removeItem(B.JWT),localStorage.removeItem(B.JWTRefresh)):(sessionStorage.removeItem(B.Token),sessionStorage.removeItem(B.JWT),sessionStorage.removeItem(B.JWTRefresh)),yS()}),Rd=e=>{const i=localStorage.getItem(B.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(B.SavePassword,n.toString()),n},Ld=k(),Cs=k(),zd=k(),Md=k(),Fd=k();Le({from:Ld,to:_n});E({clock:_n.doneData,target:yt});Le({from:Cs,to:Id});ot&&at()?yt({token:ot,jwt:localStorage.getItem(B.JWT)}):Id();const _S={currentUser:null,error:null,isAuthenticated:!!(ot!=null&&ot.length),savePassword:at(),loginEuz:""};Rd();const Bd=J(_S).on(yt,e=>({...e,error:null})).on(yt.doneData,(e,i)=>i).on(yt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(ot!=null&&ot.length),savePassword:at()})).on(_n.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:at()})).on(Cs,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:at()})).on(Fd,(e,{savePassword:i})=>({...e,savePassword:Rd(i)})).on(Yn,e=>({...e,error:null})).on(Yn.doneData,(e,i)=>({...e,loginEuz:i})).on(yt.failData,(e,i)=>({...e,error:i.message})).on(Md,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(zd,e=>({...e,currentUser:null})),ve={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Bd);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(_n.pending),error:i}}},$t={login:Ld,logout:Cs,changeSavePassword:Fd,clear:zd,update:Md},wS={getUserFx:yt,getLoginEuzFx:Yn},jS=()=>{const e="0.0.1";localStorage.getItem(B.Version)!==e&&(localStorage.clear(),localStorage.setItem(B.Version,e),$t.logout())},kS=p.div`
    max-height: 400px;
    overflow-y: auto;
`,SS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ge,{text:e.message,image:t.jsx($u,{}),children:t.jsxs($,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(xe,{}),t.jsx(Ll,{title:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:t.jsxs($,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(Pu,{})]})}),children:t.jsx(Q,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(kS,{children:e.stack})})})]})})});class Hd extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(SS,{error:this.state.error}):this.props.children}}const TS=O?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",gi=Pt.create({baseURL:TS}),ES={headers:{"Content-Type":"application/json"}};gi.interceptors.request.use(ua);gi.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await On(gi)(e):e},On(gi));const $S=async e=>{var n;const i=await gi.post("",{query:e},ES);if(Ud(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Ud(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Ud(e[i]))return!0}return!1}const PS=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Wd=k(),Os=Cu({effect:async({currentUser:e})=>({...(await $S(PS((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Bd}),CS=Ou(Os,null);E({clock:Wd,target:Os});const OS=Os.pending,AS={load:Wd},GT={peTeacher:CS,isLoading:OS},Vd=k(),Gd=M(gh);E({clock:Vd,target:Gd});const qd=J([]),qT=Jn(qd,e=>e.map(i=>i.divisionName));E({clock:Gd.doneData,target:qd});function Yd(e){const{pathname:i}=Ut();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const DS=()=>{const{allRoutes:e}=Be.useMenu();return e?t.jsxs(sa,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(oa,{path:i,component:n,exact:!s},i)),t.jsx(Ge,{exact:!0,to:ms})]}):null},NS=le.memo(DS),IS=p.div`
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
`,RS=()=>{const{open:e,content:i,position:n}=ax.useContextMenu(),s=l.useRef(null);return qt(s,()=>Ie.close()),t.jsx(xn,{isOpen:e,children:t.jsx(IS,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Jd=200,LS=5e3,zS=()=>{const{visibleNotifications:e}=tt.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Et.clearVisibleById(a)},Jd)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??LS))},[e]),{handleClose:o,closing:i}},MS=p.div`
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
`,FS=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Jd/1e3}s forwards;

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
`;const BS=()=>{const{visibleNotifications:e}=tt.useLkNotifications(),{closing:i,handleClose:n}=zS();return t.jsx(MS,{children:e.map(s=>t.jsx(FS,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Bl,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},No=p.div`
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
`,HS=({loading:e})=>{const{data:{user:i},error:n}=ve.useUser(),s=i?De(i==null?void 0:i.fullName):w.blue.main,o=()=>wS.getUserFx(JSON.parse(localStorage.getItem(B.Token)??"")),a=()=>$t.logout();return n?t.jsx(No,{$loading:!0,color:s,children:t.jsx(ge,{text:n,children:t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(Xn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(No,{color:s,$loading:e,children:[t.jsx(ln,{short:!0,width:"100px"}),e&&t.jsx(Ke,{})]})},US=p.div`
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
`,WS=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Ts.useStory();return t.jsx(US,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():bt.changeCurrentPage({value:o+1})})})},VS=p(rn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,GS=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Ts.useStory();return t.jsxs(VS,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(WS,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Du,{}):t.jsx(Au,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Je,{}),onClick:n})]})},qS=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,YS=p(Qe)`
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
`,JS=p.div`
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
    transform: ${({align:e})=>qS(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,XS=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:x="left"})=>{const g=Wt();return t.jsxs(YS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(ss,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(JS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(U,{size:2,align:x,children:o}),t.jsx(oe,{fontSize:"1.1em",align:x,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),bt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},KS=p.div`
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
`,Io=p.div`
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
`,QS=()=>{const{pages:e,isOpen:i,currentPage:n}=Ts.useStory(),s=l.useRef(null);qt(s,()=>bt.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(xn,{isOpen:i,children:t.jsx(KS,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(GS,{pages:e.length,onClose:()=>bt.close(),playing:o}),t.jsx(Io,{left:"15px",onClick:()=>{n!==0&&bt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(vi,{})}),t.jsx(XS,{setPlaying:a,currentPage:n,...r}),t.jsx(Io,{right:"15px",onClick:()=>{n!==e.length-1?bt.changeCurrentPage({value:n+1}):bt.close(),a(!0)},children:t.jsx(pt,{})})]})})})},ZS=()=>{const{data:{user:e}}=ve.useUser(),{notifications:i,loading:n,loaded:s}=tt.useLkNotifications(),{settings:o}=Gt.useSettings(),[a]=_i([Da.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{An.getElectronicInteraction(),a&&!a.status&&Et.add(md("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||An.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(bd(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,Et.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{et.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},eT=()=>{const{data:{user:e}}=ve.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Mu);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},tT=()=>{const e=yr(),{open:i}=te(),n=eT();return ZS(),gt(),l.useEffect(()=>{n&&n&&i(t.jsx(wc,{}),"Что нового")},[n]),{currentPage:e}},iT=p.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,nT=p.div`
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
`,sT=p.div`
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
`,oT=()=>{const{data:{user:e}}=ve.useUser(),i=l.useRef(null),{allRoutes:n}=Be.useMenu(),{currentPage:s}=tT(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return Yd(i.current),t.jsxs(iT,{children:[t.jsx(HS,{loading:!e||!n}),t.jsx(QS,{}),t.jsx(z1,{}),t.jsxs(nT,{children:[t.jsx(k1,{headerVisible:o,currentPage:s}),t.jsx(sT,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(Hd,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(NS,{})})})}),t.jsx(kw,{})]}),t.jsx(V1,{}),t.jsx(F1,{}),t.jsx(q1,{}),t.jsx(RS,{}),t.jsx(Ow,{}),t.jsx(BS,{})]})},aT=le.memo(oT),rT=()=>{const{data:{isAuthenticated:e,user:i}}=ve.useUser(),{data:n}=lt.selectors.useData(),{settings:s}=Gt.useSettings();return Yd(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Re.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(lt.effects.getFx(),Re.getWorkerPosts(),Vd()),AS.load())},[e,i]),l.useEffect(()=>{i&&(s?et.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):xg.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(aT,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(sa,{children:[iv.map(({path:o,Component:a},r)=>t.jsx(oa,{path:o,component:a,exact:!0},r)),t.jsx(Ge,{exact:!0,to:fl})]})})},lT=p.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;jS();const cT=()=>(gt(),t.jsx(Rv,{children:t.jsx(Nu,{basename:"/",children:t.jsx(lT,{children:t.jsx(Hd,{children:t.jsx(rT,{})})})})}));Iu.render(t.jsxs(le.StrictMode,{children:[t.jsx(j_,{}),t.jsx(cT,{})]}),document.getElementById("root"));export{Bd as $,_j as A,_ as B,qe as C,xe as D,as as E,os as F,GT as G,Bg as H,Oc as I,ge as J,mt as K,Ke as L,Q as M,W as N,V as O,$y as P,Qh as Q,Uw as R,kt as S,U as T,Te as U,_1 as V,Ue as W,_T as X,ve as Y,ki as Z,iS as _,H as a,Ai as a$,Et as a0,tS as a1,ws as a2,HT as a3,UT as a4,yT as a5,ye as a6,Re as a7,WT as a8,on as a9,$s as aA,x0 as aB,nb as aC,ST as aD,sb as aE,jT as aF,P0 as aG,kT as aH,ps as aI,pb as aJ,qd as aK,TT as aL,hv as aM,Yw as aN,pj as aO,re as aP,Rc as aQ,Ji as aR,tv as aS,PT as aT,fv as aU,xv as aV,Ph as aW,We as aX,be as aY,ET as aZ,ys as a_,Qe as aa,Hn as ab,Ee as ac,Nl as ad,Sh as ae,Th as af,Xa as ag,BT as ah,js as ai,Ka as aj,$v as ak,Cv as al,Be as am,Ev as an,El as ao,ev as ap,VT as aq,ht as ar,ue as as,Vt as at,Xe as au,wT as av,Ps as aw,qT as ax,Bh as ay,Us as az,xS as b,W_ as b$,Y as b0,Ie as b1,cn as b2,qt as b3,Da as b4,An as b5,Mh as b6,Ne as b7,xt as b8,st as b9,DT as bA,AT as bB,OT as bC,me as bD,n1 as bE,Wl as bF,Vy as bG,$t as bH,Nw as bI,nv as bJ,Zy as bK,Qy as bL,Ky as bM,nc as bN,B_ as bO,gn as bP,Oi as bQ,ts as bR,zT as bS,N_ as bT,$l as bU,I_ as bV,R_ as bW,rc as bX,It as bY,V_ as bZ,bc as b_,sy as ba,ny as bb,jw as bc,MT as bd,LT as be,sw as bf,Ql as bg,Ss as bh,FT as bi,Gt as bj,Ci as bk,Sl as bl,l1 as bm,De as bn,ks as bo,Rn as bp,H_ as bq,Ul as br,x1 as bs,R as bt,En as bu,CT as bv,Q1 as bw,NT as bx,IT as by,RT as bz,ig as c,_c as c0,C_ as c1,r_ as c2,uw as c3,aw as c4,gt as c5,ec as c6,ac as c7,Rr as c8,bi as c9,mT as cA,lS as cB,cS as cC,bT as cD,Rh as cE,uT as cF,pT as cG,Ki as cH,w_ as cI,ss as cJ,Lh as cK,tx as cL,vT as cM,wj as cN,Li as cO,bj as cP,yj as cQ,mj as cR,Ac as cS,oS as cT,q_ as ca,Il as cb,oo as cc,aa as cd,sn as ce,ov as cf,sv as cg,fT as ch,xT as ci,Al as cj,Ol as ck,ji as cl,e_ as cm,tr as cn,hT as co,vm as cp,Fa as cq,gT as cr,$T as cs,rn as ct,r1 as cu,wS as cv,Ri as cw,tt as cx,Jy as cy,d1 as cz,mn as d,fS as e,ro as f,ct as g,Ya as h,rr as i,Ze as j,Vg as k,se as l,Ch as m,o1 as n,AS as o,$S as p,ee as q,$ as r,gS as s,w as t,te as u,Rm as v,oe as w,nt as x,Es as y,Yt as z};
