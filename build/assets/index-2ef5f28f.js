import{F as Tt,a as pi,b as ot,c as Zi,H as $n,d as mi,y as M,u as k,p as J,e as V,x as O,S as Me,m as Gn,r as l,s as p,j as t,f as Xe,I as Hd,g as Ud,h as Wd,i as Vd,k as No,A as qn,l as D,n as Gd,o as Pe,q as Lt,t as _n,v as qd,w as Yd,R as re,z as ui,B as bi,C as dt,L as Q,D as hi,E as Jd,G as Xd,J as en,K as yi,M as Kd,N as Qd,O as Ce,P as we,Q as vi,T as Yn,U as at,V as Io,W as Ro,X as _i,Y as Lo,Z as zo,_ as Zd,$ as ep,a0 as tp,a1 as ip,a2 as qe,a3 as zt,a4 as np,a5 as sp,a6 as op,a7 as ap,a8 as rp,a9 as lp,aa as X,ab as cp,ac as Mo,ad as Fo,ae as dp,af as pp,ag as up,ah as Bo,ai as Et,aj as Jn,ak as Ho,al as hp,am as gp,an as xp,ao as Uo,ap as fp,aq as tn,ar as mp,as as Wo,at as Vo,au as Go,av as qo,aw as bp,ax as yp,ay as Os,az as Yo,aA as Ui,aB as vp,aC as _p,aD as ii,aE as Jo,aF as Xo,aG as ie,aH as Xn,aI as As,aJ as Ko,aK as jp,aL as wp,aM as kp,aN as Sp,aO as Mi,aP as Tp,aQ as Ep,aR as $p,aS as Pp,aT as Cp,aU as Op,aV as Ap,aW as Dp,aX as Np,aY as Ip,aZ as Rp,a_ as Lp,a$ as zp,b0 as Mp,b1 as Fp,b2 as Bp,b3 as Hp,b4 as Up,b5 as Wp,b6 as Vp,b7 as Gp,b8 as qp,b9 as Qo,ba as Yp,bb as Jp,bc as Xp,bd as Kp,be as Qp,bf as Zp,bg as eu,bh as Kn,bi as tu,bj as iu,bk as nu,bl as su,bm as ou,bn as au,bo as ru,bp as lu,bq as cu,br as Zo,bs as du,bt as Pn,bu as pu,bv as uu,bw as hu,bx as gu,by as xu,bz as fu,bA as mu,bB as bu,bC as Ds,bD as yu,bE as vu,bF as _u,bG as ju,bH as wu,bI as ea,bJ as ta,bK as ku,bL as Su,bM as Tu,bN as Eu}from"./vendor-4af360a6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const $u="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Pu=3,nn=["home","settings","all"],ia=["home","settings","download-agreements","all"],na="https://lk.eseur.ru/signup",Cu="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",j={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Dt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},sT={Зачтено:j.green,"Не зачтено":j.red,Отлично:j.green,Хорошо:j.blue,Удовлетворительно:j.orange,Неудовлетворительно:j.red,"Не явился":j.red,default:j.red},oT={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},L="https://e.mospolytech.ru/old",Ou="2023-10-03T10:43:43",vt={info:{icon:Tt,color:"blue",title:"Информация"},alert:{icon:pi,color:"orange",title:"Внимание!"},failure:{icon:ot,color:"red",title:"Ошибка"},success:{icon:Zi,color:"green",title:"Успешно"},tip:{icon:$n,color:"grey",title:"Подсказка"},hint:{icon:$n,color:"white",title:"Подсказка"},hrFailure:{icon:ot,color:"red",title:"Ошибка"}},Au={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Du=["image/jpeg","image/jpg","image/png","application/pdf"],Nu=10,sa="(max-width: 766px)",Iu="(min-width: 767px)",oa="(max-width: 1000px)",aa="(max-width: 1380px)",ra="(min-width: 1381px)",Z={isMobile:`@media ${sa}`,isNotMobile:`@media ${Iu}`,isTablet:`@media ${oa}`,isSmallTesktop:`@media ${aa}`,isMiddleTesktop:`@media ${ra}`},Ru=[{query:sa,title:"isMobile",value:"mobile"},{query:oa,title:"isTablet",value:"tablet"},{query:aa,title:"isSmallDesktop",value:"smallDesktop"},{query:ra,title:"isMiddleDesktop",value:"middleDesktop"}],Qn={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},A=!window.location.port||window.location.port==="80";console.log("Running on production",A);var Y=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(Y||{});const pt=()=>localStorage.getItem(Y.JWT),$t=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},aT=e=>async i=>{var s,o,a,r,c,d,u;const n=(i==null?void 0:i.config)??{};if(i.request.status===403||i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((u=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:u.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)St.logout();else{n._retry=!0;const h=localStorage.getItem(Y.JWTRefresh);try{const{accessToken:g,refreshToken:x}=await Uu(h??"");return localStorage.setItem(Y.JWT,g),localStorage.setItem(Y.JWTRefresh,x),e(n)}catch{St.logout()}}return Promise.reject(i)},Lu=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${pt()}`,e),zu=`${L}/lk_api.php`,Mu="https://api.mospolytech.ru/serviceforfrontpersonnelorders",H=mi.create({baseURL:zu,withCredentials:!0}),xe=mi.create({baseURL:Mu});xe.interceptors.request.use(Lu);function sn(e){return e.isAxiosError}function U(){return localStorage.getItem(Y.Token)??sessionStorage.getItem(Y.Token)??""}const Fu=({login:e,password:i})=>H.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Bu=e=>H.get(`?getUser&token=${e}`),Hu=e=>H.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),rT=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",U()),H.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},lT=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),H.post(`?changeADPass=1&token=${U()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},cT=async e=>{const i=new FormData;return i.set("email",e),i.set("token",U()),H.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},dT=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",U()),H.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Uu=async e=>{const{data:i}=await mi.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Wu=e=>H.get(`?getSchedule&group=${e}&token=${U()}`),Vu=e=>H.get(`?getScheduleTeacher&fio=${e}&token=${U()}`),Gu=()=>H.get(`?getSchedule&session=1&token=${U()}`),qu=e=>H.get(`?getScheduleTeacher&fio=${e}&session=1&token=${U()}`),Yu=()=>H.get(`?getPayments&token=${U()}`),Ju=e=>H.get(`?signAgreement=${e}&token=${U()}`),Xu=e=>H.get(`?signContract=${e}&token=${U()}`),Ku=async({semestr:e})=>{var i,n;return(n=(i=await H.get(`?getAcademicPerformance&semestr=${e}&token=${U()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},Qu=e=>H.get(`?getMessages&token=${U()}&id=${e}`),Zu=async()=>(await H.get(`?getPEPStatus&token=${U()}`)).data,eh=async()=>(await H.get(`?setPEPAccept&token=${U()}`)).data,th=()=>H.get(`?getContactData&token=${U()}`),ih=e=>{const i=new FormData;i.set("token",U()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return H.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},nh=()=>H.get(`?getRequestHighComfort&token=${U()}`),pT=e=>{const i=new FormData;i.set("token",U()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return H.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},sh=()=>H.get(`?getAppRequests&token=${U()}`),oh=()=>H.get(`?getAppData&token=${U()}`),ah=async()=>await xe.get(`/Dismissal.GetAllHistory?employeeGuid=${$t(pt()??"").IndividualGuid}`,{timeout:3e4}),rh=async()=>{const{data:e}=await xe.get("/AnotherPlaceWork.GetDivisions");return e.divisions},lh=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",U()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await H.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},ch=()=>xe.get(`?getAppRequests&token=${U()}`),dh=()=>xe.get(`?getAppData&token=${U()}`),ph=e=>xe.post("Dismissal.Post",e),uh=async()=>(await H.get(`?getAdminLinks&token=${U()}`)).data,hh=async e=>(await H.get(`?PDinfo&token=${U()}`)).data,la=()=>H.get(`?getNotification&token=${U()}`),gh=e=>H.get(`?viewNotification=${e}&token=${U()}`),xh=Object.freeze(Object.defineProperty({__proto__:null,get:la,view:gh},Symbol.toStringTag,{value:"Module"})),ca=()=>H.get(`?getDocList&token=${U()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),fh=e=>H.get(`?viewDoc=${e}&token=${U()}`),mh=Object.freeze(Object.defineProperty({__proto__:null,get:ca,view:fh},Symbol.toStringTag,{value:"Module"})),bh=(e,i,n,s)=>H.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${U()}`),yh=e=>H.get(`?getDivs=${e}&page=1&token=${U()}`),vh=()=>H.get(`?getCheckData&token=${U()}`),_h=e=>{const i=new FormData;i.set("token",U()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return H.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},jh=(e,i,n,s)=>H.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${U()}`),wh=async e=>await H.get(`?getGroups=${e}&perpage=30&page=1&token=${U()}`),kh=async()=>(await H.get(`?getAlerts&token=${U()}`)).data,Sh=()=>H.get(`?getNotifications&token=${U()}`),Th=e=>H.get(`?clearNotificationById=${e}&token=${U()}`),Eh=()=>H.get(`?clearAllNotifications&token=${U()}`);function $h({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Ns={data:null,preparedData:null,loading:!1,error:null},on=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>$u})=>{const o=e??Ns,a=()=>({data:V(u).data,preparedData:V(u).preparedData,loading:V(r.pending),error:V(u).error}),r=M(async h=>{try{const g=await i.get(h);return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),c=M(async h=>{var g;try{const x=await((g=i.post)==null?void 0:g.call(i,h));return{data:x,preparedData:n?n(x):x}}catch(x){throw new Error(s(x))}}),d=k(),u=J(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:g})=>({...h,error:g,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:g,preparedData:x})=>({...h,data:g,preparedData:x})).on(r.failData,(h,g)=>({...h,error:g.message})).on(d,()=>({...Ns}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function Ph(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Ch=on({api:{get:Ku},prepareData:Ph}),rt=on({api:{get:uh}}),Oh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Ah=on({api:{get:kh},prepareData:Oh}),Is={message:"",type:"success",isOpen:!1,time:2e3},da=k(),pa=k(),ua=k();J(Is).on(da,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(pa,(e,{isOpen:i})=>({...e,isOpen:i})).on(ua,()=>({...Is}));const Oe={evokePopUpMessage:da,openPopUpMessage:pa,clearStore:ua},Rs={listApplication:null,error:null,dataUserApplication:null},ni=M(async()=>{const e=await ch();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Fi=M(async()=>{const e=await dh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),an=M(async e=>await ph(e));O({clock:an.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});O({clock:an.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const Dh=k();Me({from:an.doneData,to:ni});J(Rs).on(Fi,e=>({...e,error:null})).on(Fi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Fi.failData,(e,i)=>({...e,error:i.message})).on(ni,e=>({...e,error:null})).on(ni.doneData,(e,i)=>({...e,listApplication:i})).on(ni.failData,(e,i)=>({...e,error:i.message})).on(Dh,()=>({...Rs}));const Nh={getApplicationsFx:ni,getUserDataApplicationsFx:Fi,postApplicationFx:an},Ls={message:"",type:"success",isOpen:!1,time:2e3},Ih=()=>V(Rh),ha=k(),ga=k(),xa=k(),Rh=J(Ls).on(ha,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ga,(e,{isOpen:i})=>({...e,isOpen:i})).on(xa,()=>({...Ls})),fa={usePopUpMessage:Ih},q={evokePopUpMessage:ha,openPopUpMessage:ga,clearStore:xa},Lh=Object.freeze(Object.defineProperty({__proto__:null,events:q,selectors:fa},Symbol.toStringTag,{value:"Module"})),zs={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},si=M(async()=>{const e=await ah();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),oi=M(async()=>{const e=await sh();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),ai=M(async()=>{const e=await oh();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Zn=M(async e=>{const i=await lh(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),zh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=V(Mh);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:V(ai.pending),workerLoading:V(Gn(si.pending,Nh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},ma=k();Me({from:Zn.doneData,to:oi});O({clock:Zn.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:q.evokePopUpMessage});const Mh=J(zs).on(ai,e=>({...e,error:null})).on(ai.doneData,(e,i)=>({...e,dataUserApplication:i})).on(ai.failData,(e,i)=>({...e,error:i.message})).on(oi,e=>({...e,error:null})).on(oi.doneData,(e,i)=>({...e,listApplication:i})).on(oi.failData,(e,i)=>({...e,error:i.message})).on(si,e=>({...e,error:null})).on(si.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(si.failData,(e,i)=>({...e,error:i.message})).on(ma,()=>({...zs})),ye={useApplications:zh},Ye={getApplicationsFx:oi,getUserDataApplicationsFx:ai,postApplicationFx:Zn,getWorkerPosts:si},Fh={clearStore:ma},Bh=Object.freeze(Object.defineProperty({__proto__:null,effects:Ye,events:Fh,selectors:ye},Symbol.toStringTag,{value:"Module"})),Ms={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Hh=()=>V(Uh),ba=k(),ya=k(),va=k(),Uh=J(Ms).on(ba,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(ya,e=>({...e,isOpen:!1})).on(va,()=>({...Ms})),_a={useConfirm:Hh},tt={evokeConfirm:ba,closeConfirm:ya,clearStore:va},Wh=Object.freeze(Object.defineProperty({__proto__:null,events:tt,selectors:_a},Symbol.toStringTag,{value:"Module"})),Vh=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:V(d).data,loading:V(r.pending),error:V(d).error,completed:V(d).completed}),o=k(),a=M(async u=>{try{return(await i.post(u)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=M(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(u){throw new Error(u)}return n.data}),c=k(),d=J(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Gh,events:qh,selectors:Yh}=Vh({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:th,post:ih}}),Jh=Object.freeze(Object.defineProperty({__proto__:null,effects:Gh,events:qh,selectors:Yh},Symbol.toStringTag,{value:"Module"})),ja=k(),wa=k(),ka=k(),Sa=k(),ji=M(async()=>{const i=(await eh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});O({clock:ji.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:q.evokePopUpMessage});O({clock:ji.doneData,fn:()=>!0,target:ka});O({clock:ji.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:q.evokePopUpMessage});const gi=M(async()=>{try{return(await Zu())[0]}catch(e){throw new Error(e)}});O({clock:wa,target:ji});O({clock:ja,target:gi});const Ta=k(),Xh=gi.pending,Kh=ji.pending,Qh=J(!1).on(Sa,(e,i)=>i),Zh=J(!1).on(ka,(e,i)=>i),eg=J(null).on(gi,()=>null).on(gi.failData,(e,i)=>i.message),tg=J(null).on(gi.doneData,(e,i)=>i).on(Ta,()=>null),Ea={$error:eg,$electronicInteractionStore:tg,$completed:Qh,$done:Zh,$loading:Xh,$workerLoading:Kh},Cn={getElectronicInteraction:ja,postElectronicInteraction:wa,changeCompleted:Sa,clearStore:Ta},ig=Object.freeze(Object.defineProperty({__proto__:null,events:Cn,stores:Ea},Symbol.toStringTag,{value:"Module"})),le=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Fs=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),le(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),le(n,"extraWeird")}},Ni=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Fs(-30*11),maxValueInput:Fs(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Ii={kvdCert:Ni({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Ni({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Ni({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Ni({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Te=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const d=new Date(a.minValueInput);if(c<d)return!0}if(a.maxValueInput){const d=new Date(a.maxValueInput);if(c>d)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},ng={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},sg=()=>Object.keys(Ue).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),$a=(e="")=>({[e]:{...sg(),[Ue["settings-appearance"]]:{id:Ue["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Ue["settings-home-page"]]:{id:Ue["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[Ue["settings-customize-menu"]]:{id:Ue["settings-customize-menu"],property:{pages:nn}},[Ue["settings-notifications"]]:{id:Ue["settings-notifications"],property:ng}}});var Ue=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Ue||{});const On={settings:$a(),error:null,completed:!1};let Ie;const og=()=>({settings:V(Bi).settings[Ie],error:V(Bi).error,completed:V(Bi).completed}),ag=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},Pa=M(e=>{Ie=e;const i=JSON.parse(localStorage.getItem(Y.NewSettings)??"{}")[Ie];return ag(i,$a(e)[e])}),Ca=k(),Oa=k(),Aa=k(),Bi=J(On).on(Oa,(e,i)=>({...e,completed:i.completed})).on(Pa.doneData,(e,i)=>({...e,settings:{[Ie]:i}})).on(Ca,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Ie]:{...e.settings[Ie],[i]:{...e.settings[Ie][i],property:{...e.settings[Ie][i].property,[n]:s}}}}})).on(Aa,()=>({...On}));Bi.watch(e=>{if(e!==On&&Ie){const i=JSON.parse(localStorage.getItem(Y.NewSettings)??JSON.stringify({}));i[Ie]=e.settings[Ie],localStorage.setItem(Y.NewSettings,JSON.stringify(i))}});const Bt={useSettings:og},wi={updateSetting:Ca,changeCompleted:Oa,clearStore:Aa},rg={getLocalSettingsFx:Pa},ut=()=>{var a,r;const{settings:e}=Bt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,u=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),wi.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},lg=p.button`
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

    ${Z.isTablet} {
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:u,isChosen:h,padding:g,shrinkTextInMobile:x,fixedInMobile:m,direction:f="horizontal",isActive:b=!0,height:y,notActiveClickMessage:P,flipped:w,...T}=e,S=N=>{b?s==null||s(N):P&&q.evokePopUpMessage({type:"failure",message:P,time:1e4})};return t.jsxs(lg,{text:!!n,onClick:S,isChosen:h,width:o,minWidth:a,background:r,padding:g,textColor:c,shrinkTextInMobile:x,hoverBackground:d,align:u,direction:f,isActive:b,fixedInMobile:m,height:y,flipped:w,...T,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const An=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Bs=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},cg=p.div`
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
`,dg=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],rn=p.div.withConfig({shouldForwardProp:e=>!dg.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Bs(n):An(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?An(i):Bs(n)};
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
`,pg=p.div`
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
`;function G({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(pg,{pulse:s,size:i,shape:e,margin:n})}const ug=p(rn)`
    height: 100%;
`,hg=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(ug,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(G,{...o,key:a}))}),xt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function gg({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:xt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:xt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:xt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:xt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:xt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:xt(n),children:i});default:return t.jsx("h1",{className:"title",style:xt(n),children:i})}}const xg=p.div`
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
`,fg=p.span`
    color: var(--red);
    margin-right: 5px;
`,mg=p.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function B(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:u=!0}=e;return u?t.jsxs(xg,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(gg,{size:o,width:r,children:[a&&t.jsx(fg,{children:"*"}),t.jsx(mg,{width:r,children:s})]})]}):null}const bg=(e,i,n)=>n?"#fff":e?j[vt[i].color].dark3:j[vt[i].color].light3,yg=p.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>bg(i,e,n)};
    background: ${({type:e,solidBackground:i})=>j[vt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>j[vt[e].color][i?"main":"light2"]};
    }
`,vg=()=>t.jsx(hg,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function te({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:g=!1,align:x="left",visible:m=!0,loading:f=!1}){if(!m)return null;const{theme:b}=ut();return t.jsxs(yg,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:x,width:s,maxWidth:o,padding:c,fontSize:d,gap:u,lineHeight:h,solidBackground:g,children:[t.jsx(B,{size:4,align:x,icon:n===null?null:n??vt[e].icon({}),children:a??vt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(Xe,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),f&&t.jsx(vg,{})]})}p.div`
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
`;const _g=p.div`
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
`,jg=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(_g,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),ge=p.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,wg="/assets/sad-emoji-0c60bf90.gif",se=p.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,kg=p.div`
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
`;function ue({text:e,image:i,size:n,children:s}){return t.jsxs(kg,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||wg,alt:"груфтим("}):i}),t.jsx(se,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Sg="/assets/loading-c8041cd3.gif",Tg=p.img`
    width: 40px;
`;function Pt(e){return t.jsx(Tg,{...e,src:Sg,alt:"loading",className:"loading-circle"})}const Eg="/assets/logo-4d9aa449.png",$g="/assets/mospolytech-logo-white-b1e4f630.png",Pg=p.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function ln({width:e,className:i,short:n=!1}){return t.jsx(Pg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?$g:Eg,alt:"Logo"})})}const Cg=p.img``;function es({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(G,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Cg,{src:i,alt:o,height:n,width:s})}const Og=p.div`
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
`;function Da({size:e,color:i}){return t.jsx(Og,{size:e,color:i?j[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Ag=p.div`
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
`;function Dg(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Ag,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(B,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const Ng=p.button`
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
`,_t=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:u,isDone:h=!1,isActive:g=!0,isLoading:x=!1,completed:m=!1,repeatable:f=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(q.evokePopUpMessage({message:c,type:"success"}),f&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const y=()=>{if(g&&!h&&!x)return i();b&&q.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Ng,{isLoading:x,background:a,className:"submit-button",completed:m,isActive:g&&!h&&!m,onClick:y,isDone:h,width:n,height:s,repeatable:f,tabIndex:g&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Hd,{})," ",r]}):x?t.jsx(Pt,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Wi={small:"32px",middle:"36px",big:"44px"},We=e=>({size:i})=>e[i],Ig=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Rg=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},Lg={groupMask:Ig,phoneMask:Rg},zg=(e,i,n,s,o,a,r,c)=>{const[d,u]=l.useState(n),[h,g]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const x=l.useCallback(y=>y.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:y=>{y.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(y=>y==="password"?"text":"password"),handleOnChange:y=>{if(i(c?r?r(y.target.value,e):n==="tel"?Lg.phoneMask(y):n==="email"?x(y.target.value):y.target.value:y.target.value),n==="date"&&(o||a)){const P=new Date(y.target.value);let w=!1;if(o){const T=new Date(o);w=P<T}if(a&&!w){const T=new Date(a);w=P>T}g(w)}i(y.target.value)}}},Mg=p.div`
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
        height: ${We(Wi)};
        max-height: ${We(Wi)};
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
`,lt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:u,customMask:h,placeholder:g="Введите сюда",type:x="text",danger:m,alertMessage:f,loading:b=!1,isActive:y=!0,inputAppearance:P=!0,mask:w=!1,autocomplete:T=!1,minValue:S=void 0,maxValue:N=void 0,maxLength:z=void 0,hideCross:I=!1,stepSize:K=.1,size:R="middle"}=i,{inputType:ne,buttonOnClick:he,danger:ke,handleOnChange:Be,phoneMaskKeyDown:Ge}=zg(s,o,x,m,S,N,h,w),pe=s&&x==="date"?Ud(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(Mg,{leftIcon:!!a,isActive:y,inputAppearance:P,width:d,danger:ke,minWidth:u,size:R,children:[t.jsx(B,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(te,{type:"alert",visible:!!f,icon:t.jsx(Wd,{}),title:f??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:g,min:S,max:N,maxLength:z,step:K??void 0,type:ne,placeholder:g,value:pe,autoComplete:T?"on":"off",onKeyDown:De=>x==="tel"&&Ge(De),onChange:Be,required:c,readOnly:!y,ref:n}),x!=="password"?!!(s!=null&&s.length)&&P&&(b?t.jsx(Pt,{}):!I&&t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ne==="password"?t.jsx(Vd,{}):t.jsx(No,{}),tabIndex:-1,onClick:he})]})}),Fg=p.div`
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
`,Bg="/assets/thinking-emoji-f3c10f79.gif",Hg=["loading"],Ug=p.div.withConfig({shouldForwardProp:e=>!Hg.includes(e)})`
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
`,ht=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Ug,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ue,{text:n,image:a&&Bg,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(qn,{})})})}):t.jsx(Pt,{})}),t.jsx("div",{className:"content",children:e})]})),Wg=p.a`
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
`,Vg=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:u,padding:h,isActive:g=!0,isChosen:x=!1})=>t.jsxs(Wg,{text:!!i,onClick:m=>g&&n&&n(m),isChosen:x,width:s,background:o,textColor:a,href:c,align:r,isActive:g,height:d,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),ki=l.memo(Vg),ts=p.div`
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
`,Gg=p.a`
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
`,qg=({title:e,link:i,type:n})=>t.jsxs(Gg,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(D,{}):t.jsx(Gd,{})}),t.jsx("div",{className:"title",children:e})]}),Yg=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Jg={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Xg=()=>Pe(Kg),Na=k(),Ia=k(),Ra=k(),Kg=J(Jg).on(Na,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Yg(n,220,s),open:!0,content:i,type:o})).on(Ia,e=>({...e,open:!1})).on(Ra,(e,{position:i})=>({...e,position:i})),ze={open:Na,close:Ia,changePosition:Ra},Qg={useContextMenu:Xg},Zg=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},jn=new Set,La=(e,i)=>{l.useEffect(()=>{const n=o=>{jn.add(o.key),!e.slice(0,e.length-1).find(r=>!jn.has(r))&&e[e.length-1]===o.key&&(o.preventDefault(),i())},s=o=>{jn.delete(o.key)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Ke=p.div`
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

    ${Z.isMobile} {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        /* gap: 1rem; */
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
`,be=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},za=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=be(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Ma=e=>/[A-Za-z]/.test(e),ex=p.span`
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
`,Fa=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Ma(e))return null;const s=za(e),o=()=>i(s);return t.jsxs(se,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(ex,{tabIndex:10,children:s})]})};function Ht(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function ct(e,i,n=0){return e>i?n:e<n?i:e}const tx=p.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,ix=p(Ke)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,nx=p.div`
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
`,Ba=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:u,onHintClick:h,validationCheck:g=!1,size:x="middle"})=>{const[m,f]=l.useState(0),[b,y]=l.useState(!1),P=l.useRef(null),w=l.useRef(null),T=l.useRef(null);Ht(P,()=>y(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var I;return(I=T.current)==null?void 0:I.focus()},50)},[c]);const S=I=>{var K,R;(((a==null?void 0:a.length)??0)>0||o)&&y(!0),I.key==="ArrowDown"?((K=w.current)==null||K.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&f(ct(m+1,((a==null?void 0:a.length)??1)-1,0))):I.key==="ArrowUp"?((R=w.current)==null||R.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&f(ct(m-1,((a==null?void 0:a.length)??1)-1,0))):I.key==="Enter"?(a!=null&&a[m??0].title&&d(a==null?void 0:a[m??0].title),y(!1),h==null||h(a==null?void 0:a[m??0])):f(0)},N=I=>()=>{f(I),d((a==null?void 0:a[I].title)??""),y(!1),h==null||h(a==null?void 0:a[I])},z=()=>{a!=null&&a.length&&y(!0)};return t.jsxs(tx,{width:i,onKeyDown:S,onMouseDown:z,ref:P,children:[t.jsx(lt,{size:x,value:e,placeholder:n,leftIcon:r??t.jsx(Lt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:u,ref:T}),t.jsx(Fa,{setValue:d,value:e,visible:g}),b&&t.jsx(ix,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:S,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:I,icon:K},R)=>{const ne=m===R;return t.jsxs(nx,{onClick:N(R),ref:ne?w:null,selected:ne,children:[K&&t.jsx("div",{className:"icon",children:K}),t.jsx("span",{children:I})]},I+R)})})]})},cn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Hs={small:"30px",middle:"44px",big:"68px"},Ha={small:"8px",middle:"10px",big:"16px"},sx={small:"0.8rem",middle:"0.9rem",big:"1rem"},ox={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},ax=p.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${We(Hs)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${We(Ha)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${We(Hs)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${Z.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`,rx=p.div`
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
        font-size: ${We(sx)};
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

    ${Z.isMobile} {
        & > b {
            font-size: ${We(ox)};
        }
    }
`,lx=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(rx,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),cx=l.memo(lx),dx=p.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${We(Ha)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,px=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(dx,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},ux=l.memo(px),hx=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:u}=cn();return l.useEffect(()=>{var g;const h=((g=d==null?void 0:d.current)==null?void 0:g.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,d.current]),t.jsx(ax,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(ux,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,g)=>t.jsx(cx,{size:a,id:g,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},g))]})})},is=l.memo(hx),gx=300,Ua=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=gx})=>{const[c,d]=l.useState(e??""),[u,h]=l.useState(""),[g,x]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){x(!0);const m=setTimeout(async()=>{await i(c),h(c),x(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),d(""),x(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){x(!0);const m=setTimeout(async()=>{await i(c),x(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,d,g]},jt=p.span`
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
`,xx=p.div`
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
`,gt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(xx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(jt,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Wa=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:u=!1})=>{const h=y=>{n(i(y,e))},g=()=>{n(null)},[x,m,f]=Ua({onDebounce:h,onClear:g}),b=y=>{m(y),o&&o(y)};return t.jsx(Ba,{value:x??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:u,loading:c?f:!1,hints:a,width:r})},fx=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Fg,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Va=p.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,mx=p(Va)`
    background: var(--almostTransparentOpposite);
`,bx=p(Va)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>j[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Ga=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Ee,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(mx,{},a)),t.jsx(bx,{color:n,current:i})]}),yx=p.label`
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
`,vx=p.div`
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
`,Je=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(yx,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(vx,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(Zi,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},qa=e=>e.split("/")[1],_x=e=>e*1024*1024,jx=(e,i)=>(i??Du).indexOf(e.type)!==-1,Us=(e,i,n,s,o=Nu)=>{if(n&&i.length+e.length>n)return q.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return jx(e[a],s)?e[a].size>_x(o)?(q.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),q.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>qa(r))}`,type:"failure",time:5e3}),i)},wx=p.label`
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
`,Le=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},kx=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),u=f=>{const b=f.target.files;b!=null&&b.length&&n(Us(b,e,i,o,a))},h=f=>{f.preventDefault()},g=f=>{f.preventDefault(),d(!1);const b=f.dataTransfer.files;b.length&&n(Us(b,e,i,o,a))},x=f=>{f.preventDefault(),d(!0)},m=f=>{f.preventDefault(),d(!1)};return t.jsxs(wx,{isActive:s,showPulse:c,onDragOver:f=>s&&h(f),onDragEnter:f=>s&&x(f),onDragLeave:f=>s&&m(f),onDrop:f=>s&&g(f),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(_n,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(_n,{className:"icon-1"}),t.jsx(_n,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(se,{align:"center",children:t.jsx(Le,{words:[`Форматы: ${o?o.map(f=>qa(f)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Sx=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Tx=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Ex=p.div`
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
`,$x=({file:e,files:i,setFiles:n})=>{const{open:s}=ee(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(es,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>tt.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Tx(r,e.name,i))});return t.jsxs(Ex,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(qd,{}):t.jsx(Yd,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(se,{fontSize:"0.7em",children:Sx(e.size)})]})]}),t.jsx(_,{icon:t.jsx(Xe,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Px=({files:e,setFiles:i})=>t.jsx(Ee,{title:"Список файлов",visible:!!e.length,onDelete:()=>tt.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx($x,{file:n,files:e,setFiles:i},n.name))}),Ya=e=>t.jsxs(Ee,{gap:12,children:[t.jsx(kx,{...e}),t.jsx(Px,{files:e.files,setFiles:e.setFiles})]}),Cx=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Ox=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Cx,{children:[t.jsx(Je,{...e}),n&&t.jsx(Ya,{...i})]}),Ax=p.div`
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
`,Ja=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),u=new Date(d);u.setDate(d.getDate()+r),n[1]=le(u,"extraWeird")}return t.jsxs(Ax,{children:[t.jsx(B,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(te,{title:"Внимание",type:"alert",icon:t.jsx(pi,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(lt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(lt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Dx=e=>{var f,b,y;const{width:i}=cn(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,d]=l.useState(0),[u,h]=l.useState(0),g=((f=n.current)==null?void 0:f.clientWidth)??1,x=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(y=n.current)==null?void 0:y.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:d,pageOffset:g,amountOfPages:x,currentPage:u,setCurrentPage:h,handleScroll:P=>{h(Math.ceil(P.currentTarget.scrollLeft/(g+(e??0))))}}},Nx=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:u,onWatchMore:h,onDelete:g,showPages:x,innerPadding:m,minWidth:f,wrapOnMobile:b,position:y,direction:P="vertical",verticalAlign:w="top",horizontalAlign:T="left",scroll:S=!0,visible:N=!0,...z}=e;if(!N)return null;const{listRef:I,leftArrow:K,rightArrow:R,handleScroll:ne,setScrollLeft:he,pageOffset:ke,amountOfPages:Be,currentPage:Ge}=Dx(s);return t.jsxs(cg,{padding:r,position:y,width:o,minWidth:f,height:a,children:[t.jsxs(B,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(_,{icon:t.jsx(ui,{}),width:"35px",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(_,{width:"50px",height:"15px",background:j.blue.transparent3,textColor:j.blue.light1,onClick:h,text:"Ещё"}),g&&t.jsx(_,{width:"fit-content",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:g,text:"Удалить"})]}),t.jsx(rn,{verticalAlign:w,horizontalAlign:T,direction:P,ref:I,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:m,scroll:S,wrapOnMobile:b,onScroll:ne,...z,children:n}),(R||K)&&t.jsxs("div",{className:"bottom-wrapper",children:[K&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(bi,{}),className:"left-button",textColor:j.grey.main,onClick:()=>{he(pe=>{var De;return ct(pe-ke-(s??0),((De=I.current)==null?void 0:De.scrollWidth)??0)})}}),x&&t.jsx(Ga,{direction:"horizontal",current:Ge,amount:Be}),R&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(dt,{}),className:"right-button",textColor:j.grey.main,onClick:()=>{he(pe=>{var De;return ct(pe+ke+(s??0),((De=I.current)==null?void 0:De.scrollWidth)??0)})}})]})]})},Ee=re.memo(Nx),Ix=()=>t.jsx("div",{className:"left",children:t.jsxs(Ee,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(ln,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Ee,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Q,{to:ys,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(hi,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Q,{to:ml,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Jd,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Q,{to:fl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(pi,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Q,{to:bl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(pi,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ge,{}),t.jsx(Q,{to:xl,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Xd,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(ki,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(en,{}),align:"left",padding:"0",width:"100%",href:`${L}/index.php`})]})}),Rx=()=>{const{search:e}=yi();return re.useMemo(()=>new URLSearchParams(e),[e])},Lx=()=>{const e=Rx(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),u=!!a&&!!s,h=St.login,g=new Date().getMonth()>=6&&new Date().getMonth()<=8,x=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},m=b=>{St.changeSavePassword({savePassword:b})},f=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,password:a,capsLock:c,login:s,showAbiturientMessage:g,handleSavePassword:m,handleKeyPress:x,handleLogin:f,setPassword:r,setLogin:o}},zx=()=>{const{loading:e,error:i,data:n}=ve.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:u,handleLogin:h,setPassword:g,setLogin:x}=Lx();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Ee,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(ln,{width:"50px",short:!0,className:"logo second"}),t.jsx(C,{jc:"space-between",children:t.jsx(B,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(te,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Ee,{gap:16,scroll:!1,children:[t.jsx(B,{size:4,align:"left",children:"Вход"}),t.jsx(se,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(te,{type:"failure",visible:!!i,children:i}),t.jsx(te,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(lt,{value:r,setValue:x,title:"Логин",placeholder:"Введите логин"}),t.jsx(lt,{value:o,setValue:g,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Je,{text:"Оставаться в системе",checked:n.savePassword,setChecked:u})]}),t.jsx(_t,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Mx=p(Ke)`
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
`,Fx=()=>{const{data:{isAuthenticated:e}}=ve.useUser();return t.jsxs(Mx,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Ix,{}),t.jsx(zx,{})]})},Bx=p.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${Z.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,Hx=()=>t.jsx(Bx,{children:t.jsx(Fx,{})}),je=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ue,{text:i,children:o&&t.jsx("a",{href:`${L}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(en,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Ux="modulepreload",Wx=function(e){return"/"+e},Ws={},v=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Wx(a),a in Ws)return;Ws[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===a&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":Ux,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Vx=l.lazy(()=>v(()=>import("./index-584254ea.js"),["assets/index-584254ea.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js"])),Gx=l.lazy(()=>v(()=>import("./index-8beb36d6.js"),["assets/index-8beb36d6.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),qx=l.lazy(()=>v(()=>import("./index-8fd6f721.js"),["assets/index-8fd6f721.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js"])),Yx=l.lazy(()=>v(()=>import("./index-68c72e94.js"),["assets/index-68c72e94.js","assets/vendor-4af360a6.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>Ab),void 0));const Jx=l.lazy(()=>v(()=>import("./index-fd462d23.js"),["assets/index-fd462d23.js","assets/vendor-4af360a6.js","assets/index-d7325142.js"])),Xx=l.lazy(()=>v(()=>import("./index-9a97ac04.js"),["assets/index-9a97ac04.js","assets/vendor-4af360a6.js","assets/index-e30b240c.js"])),Kx=l.lazy(()=>v(()=>import("./index-079ea5ba.js"),["assets/index-079ea5ba.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),Qx=l.lazy(()=>v(()=>import("./index-28287791.js"),["assets/index-28287791.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),Zx=l.lazy(()=>v(()=>import("./index-a435eb8f.js"),["assets/index-a435eb8f.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),ef=l.lazy(()=>v(()=>import("./index-0a62b2ec.js"),["assets/index-0a62b2ec.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-site-and-topic-a96b5f53.js"])),tf=l.lazy(()=>v(()=>import("./index-58d64071.js"),["assets/index-58d64071.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),nf=l.lazy(()=>v(()=>import("./index-1905cd9b.js"),["assets/index-1905cd9b.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js"])),sf=l.lazy(()=>v(()=>import("./index-e64c13bf.js"),["assets/index-e64c13bf.js","assets/vendor-4af360a6.js","assets/ui-a76fbdbf.js","assets/index-d35d2ae9.js"])),of=l.lazy(()=>v(()=>import("./index-19e67188.js"),["assets/index-19e67188.js","assets/vendor-4af360a6.js","assets/ui-a76fbdbf.js"])),af=l.lazy(()=>v(()=>import("./index-80df56b6.js"),["assets/index-80df56b6.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-site-and-topic-a96b5f53.js"])),rf=l.lazy(()=>v(()=>import("./index-be8c7c32.js"),["assets/index-be8c7c32.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),lf=l.lazy(()=>v(()=>import("./index-b630c8d7.js"),["assets/index-b630c8d7.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-80081e7c.js"])),cf=l.lazy(()=>v(()=>import("./index-7ac16cd5.js"),["assets/index-7ac16cd5.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-site-and-topic-a96b5f53.js"])),df=l.lazy(()=>v(()=>import("./index-67dfd3dd.js"),["assets/index-67dfd3dd.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/get-last-year-for-period-e1de6b16.js"])),pf=l.lazy(()=>v(()=>import("./index-801dd424.js"),["assets/index-801dd424.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),uf=l.lazy(()=>v(()=>import("./index-f3b25510.js"),["assets/index-f3b25510.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js","assets/get-last-year-for-period-e1de6b16.js"])),hf=l.lazy(()=>v(()=>import("./index-25b2199d.js"),["assets/index-25b2199d.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-site-and-topic-a96b5f53.js"])),gf=l.lazy(()=>v(()=>import("./index-5878337e.js"),["assets/index-5878337e.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-site-and-topic-a96b5f53.js"])),xf=l.lazy(()=>v(()=>import("./index-4a5bec01.js"),["assets/index-4a5bec01.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-site-and-topic-a96b5f53.js"])),ff=l.lazy(()=>v(()=>import("./index-1f972367.js"),["assets/index-1f972367.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-80081e7c.js"])),mf=l.lazy(()=>v(()=>import("./index-0892120b.js"),["assets/index-0892120b.js","assets/vendor-4af360a6.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-default-subdivision-80081e7c.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),bf=l.lazy(()=>v(()=>import("./index-0ba53e69.js"),["assets/index-0ba53e69.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),yf=l.lazy(()=>v(()=>import("./index-eb49e82b.js"),["assets/index-eb49e82b.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),vf=l.lazy(()=>v(()=>import("./index-f027ceca.js"),["assets/index-f027ceca.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),_f=l.lazy(()=>v(()=>import("./index-fecd4dcd.js"),["assets/index-fecd4dcd.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),jf=l.lazy(()=>v(()=>import("./index-5dd5b426.js"),["assets/index-5dd5b426.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),wf=l.lazy(()=>v(()=>import("./index-9e588756.js"),["assets/index-9e588756.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),kf=l.lazy(()=>v(()=>import("./index-295114ef.js"),["assets/index-295114ef.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),Sf=l.lazy(()=>v(()=>import("./index-6b195837.js"),["assets/index-6b195837.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),Tf=l.lazy(()=>v(()=>import("./index-0a7583c1.js"),["assets/index-0a7583c1.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js"])),Ef=l.lazy(()=>v(()=>import("./index-fc581fd1.js"),["assets/index-fc581fd1.js","assets/vendor-4af360a6.js","assets/get-default-subdivision-80081e7c.js","assets/index-d771ee73.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-5db001d7.js","assets/get-teacher-subdivisions-1b4fd80d.js"])),$f=l.lazy(()=>v(()=>import("./index-58abb30d.js"),["assets/index-58abb30d.js","assets/vendor-4af360a6.js"]));l.lazy(()=>v(()=>import("./index-02d04577.js"),["assets/index-02d04577.js","assets/vendor-4af360a6.js","assets/index-f87926bd.js","assets/index-d35d2ae9.js"]));const ns=l.lazy(()=>v(()=>import("./index-14bfc889.js"),["assets/index-14bfc889.js","assets/vendor-4af360a6.js"])),Pf=l.lazy(()=>v(()=>import("./index-e7a1ea4b.js"),["assets/index-e7a1ea4b.js","assets/vendor-4af360a6.js"])),Cf=l.lazy(()=>v(()=>import("./index-864f03cd.js"),["assets/index-864f03cd.js","assets/vendor-4af360a6.js","assets/send-hr-form-holiday-work-55052a58.js"])),Of=l.lazy(()=>v(()=>import("./index-7c1bf113.js"),["assets/index-7c1bf113.js","assets/vendor-4af360a6.js"])),Af=l.lazy(()=>v(()=>import("./index-f3610918.js"),["assets/index-f3610918.js","assets/vendor-4af360a6.js"])),Df=l.lazy(()=>v(()=>import("./index-f5b452a3.js"),["assets/index-f5b452a3.js","assets/vendor-4af360a6.js","assets/send-hr-form-holiday-work-55052a58.js"])),Nf=l.lazy(()=>v(()=>import("./index-cec5c730.js"),["assets/index-cec5c730.js","assets/vendor-4af360a6.js"])),If=l.lazy(()=>v(()=>import("./index-d3ba6007.js"),["assets/index-d3ba6007.js","assets/vendor-4af360a6.js"])),Rf=l.lazy(()=>v(()=>import("./index-c528806e.js"),["assets/index-c528806e.js","assets/vendor-4af360a6.js"])),Lf=l.lazy(()=>v(()=>import("./index-d84a2e5a.js"),["assets/index-d84a2e5a.js","assets/vendor-4af360a6.js","assets/send-hr-form-work-transfer-7b13dec5.js"])),zf=l.lazy(()=>v(()=>import("./index-d952ff16.js"),["assets/index-d952ff16.js","assets/vendor-4af360a6.js","assets/send-hr-form-work-transfer-7b13dec5.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>s0),void 0));l.lazy(()=>v(()=>import("./index-6da04147.js"),["assets/index-6da04147.js","assets/vendor-4af360a6.js","assets/BoldText-6227d805.js","assets/help-links-66911e58.js"]));const Mf=l.lazy(()=>v(()=>import("./index-b8f5bfc1.js"),["assets/index-b8f5bfc1.js","assets/vendor-4af360a6.js"])),Xa=l.lazy(()=>v(()=>import("./index-46603272.js"),["assets/index-46603272.js","assets/vendor-4af360a6.js","assets/index-f87926bd.js","assets/index-d35d2ae9.js"])),Ka=l.lazy(()=>v(()=>import("./index-02d04577.js"),["assets/index-02d04577.js","assets/vendor-4af360a6.js","assets/index-f87926bd.js","assets/index-d35d2ae9.js"])),Ff=l.lazy(()=>v(()=>import("./index-dd21d126.js"),["assets/index-dd21d126.js","assets/vendor-4af360a6.js"]));l.lazy(()=>v(()=>import("./index-b1c14222.js"),["assets/index-b1c14222.js","assets/vendor-4af360a6.js","assets/index.esm-871e6fff.js"]));const Bf=l.lazy(()=>v(()=>import("./index-bbe596ca.js"),["assets/index-bbe596ca.js","assets/vendor-4af360a6.js"])),Qa=l.lazy(()=>v(()=>import("./index-a7fd81b9.js"),["assets/index-a7fd81b9.js","assets/vendor-4af360a6.js","assets/help-links-66911e58.js"])),Hf=l.lazy(()=>v(()=>import("./index-869e1fba.js"),["assets/index-869e1fba.js","assets/vendor-4af360a6.js"])),Uf=l.lazy(()=>v(()=>import("./index-514c066e.js"),["assets/index-514c066e.js","assets/vendor-4af360a6.js","assets/alert-item-e9993656.js","assets/is-valid-url-08a91344.js"])),Wf=l.lazy(()=>v(()=>import("./index-b5664073.js"),["assets/index-b5664073.js","assets/vendor-4af360a6.js","assets/index-707a7e2d.js","assets/alert-item-e9993656.js","assets/is-valid-url-08a91344.js"])),Vf=l.lazy(()=>v(()=>import("./index-cb63f28a.js"),["assets/index-cb63f28a.js","assets/vendor-4af360a6.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>my),void 0));const Gf=l.lazy(()=>v(()=>import("./index-2bc1ad77.js"),["assets/index-2bc1ad77.js","assets/vendor-4af360a6.js"])),Za=l.lazy(()=>v(()=>import("./index-5a15d5c0.js"),["assets/index-5a15d5c0.js","assets/vendor-4af360a6.js","assets/index-707a7e2d.js","assets/index-d35d2ae9.js"])),qf=l.lazy(()=>v(()=>import("./index-d2241f64.js"),["assets/index-d2241f64.js","assets/vendor-4af360a6.js","assets/index-dcbda0d4.js"])),Yf=l.lazy(()=>v(()=>import("./index-a65d4555.js"),["assets/index-a65d4555.js","assets/vendor-4af360a6.js","assets/index-dcbda0d4.js"])),Jf=l.lazy(()=>v(()=>import("./index-31076786.js"),["assets/index-31076786.js","assets/vendor-4af360a6.js","assets/index-dcbda0d4.js"])),Xf=l.lazy(()=>v(()=>import("./index-9aec1b52.js"),["assets/index-9aec1b52.js","assets/vendor-4af360a6.js"])),Kf=l.lazy(()=>v(()=>import("./index-44000e64.js"),["assets/index-44000e64.js","assets/vendor-4af360a6.js","assets/index.esm-871e6fff.js"])),Qf=l.lazy(()=>v(()=>import("./index-1f0047d5.js"),["assets/index-1f0047d5.js","assets/vendor-4af360a6.js"])),Zf=l.lazy(()=>v(()=>import("./index-cc3af83d.js"),["assets/index-cc3af83d.js","assets/vendor-4af360a6.js"])),em=l.lazy(()=>v(()=>import("./index-4377d55d.js"),["assets/index-4377d55d.js","assets/vendor-4af360a6.js"])),tm=l.lazy(()=>v(()=>import("./index-514beba6.js"),["assets/index-514beba6.js","assets/vendor-4af360a6.js","assets/index-d7325142.js"])),im=l.lazy(()=>v(()=>import("./index-be65ef4e.js"),["assets/index-be65ef4e.js","assets/vendor-4af360a6.js"])),nm=l.lazy(()=>v(()=>import("./index-545d2324.js"),["assets/index-545d2324.js","assets/vendor-4af360a6.js","assets/help-links-66911e58.js"])),sm=l.lazy(()=>v(()=>import("./index-f656bce2.js"),["assets/index-f656bce2.js","assets/vendor-4af360a6.js","assets/help-links-66911e58.js"])),om=l.lazy(()=>v(()=>import("./index-44468fcb.js"),["assets/index-44468fcb.js","assets/vendor-4af360a6.js"])),am=l.lazy(()=>v(()=>import("./index-6da04147.js"),["assets/index-6da04147.js","assets/vendor-4af360a6.js","assets/BoldText-6227d805.js","assets/help-links-66911e58.js"])),rm=l.lazy(()=>v(()=>import("./index-c47814b5.js"),["assets/index-c47814b5.js","assets/vendor-4af360a6.js"])),lm=p.div`
    width: 100%;
`,cm=()=>t.jsxs(lm,{children:[t.jsx(G,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(G,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(G,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(G,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(G,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(G,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(G,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(G,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ae=e=>{const{children:i,skeleton:n=t.jsx(cm,{}),loading:s=!1,...o}=e;return t.jsx(Ke,{...o,className:"block",children:s?n:i})},dm=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},wn=p.div`
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
`,pm=p.div`
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
`,um=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:u,setRemoveAll:h,setRemoveOne:g}=dm(c,r);return c.length?t.jsxs(pm,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(wn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(ui,{}),"Добавить"]}),Object.values(e??{}).map(x=>{if(x!=null&&x.id)return t.jsxs(wn,{background:x.background,remove:u===x.id,children:[t.jsx("div",{className:"element-text",children:x.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(g(x.id),s(x.id))},children:t.jsx(Xe,{})})]},x.id)}),c.length&&!!n&&t.jsx(wn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Mt=(e,i)=>{switch(i){case"date":return le(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},hm=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,gm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[u,h]=l.useState(e),g=l.useCallback(m=>{var f,b;o(y=>(y&&y[m]&&delete y[m],{...y})),m===((f=i==null?void 0:i.column)==null?void 0:f.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),x=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(m=>{const f=Object.values(s)[0].column;return m={[(f==null?void 0:f.field)??""]:{id:(f==null?void 0:f.field)??"",title:"Фильтр: "+(f==null?void 0:f.title)}},{...m}});else{const m=Object.values(s).find(f=>{var b;return!c[((b=f.column)==null?void 0:b.field)??""]});m&&d(f=>{var P,w;const b=((P=m.column)==null?void 0:P.field)??"",y="Фильтр: "+((w=m.column)==null?void 0:w.title);return f&&(f[b]={id:b,title:y}),{...f}})}i&&d(m=>{var y;const f=((y=i.column)==null?void 0:y.field)??"",b="Поиск";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}}),a&&d(m=>{var y;const f=((y=a.column)==null?void 0:y.field)??"",b="Сортировка";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,f=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&f){const y=e==null?void 0:e.filter(P=>be(Mt(P[f],m==null?void 0:m.type)).includes(be(Mt(i.value,m==null?void 0:m.type))));h(y)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(f=>!Object.values(s).find(b=>{var y;return f[((y=b.column)==null?void 0:y.field)??""]!==b.value.title}));h(m)}else d(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var f;const m=((f=a==null?void 0:a.column)==null?void 0:f.field)??"";a?h(b=>{const y=[...b??[]];return y==null||y.sort((P,w)=>w[m]<P[m]?a.value==="asc"?1:-1:w[m]>P[m]?a.value==="asc"?-1:1:0),y}):(d(b=>{const y=hm(b,"Сортировка");return b&&y&&delete b[y],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:g,onRemoveAll:x}},Dn=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),Dn(n.children,i)):n?n.children:e},xm=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[g,x]=l.useState([]),[m,f]=l.useState(i),[b,y]=l.useState("");l.useEffect(()=>{f(i)});const P=l.useCallback(()=>{d(S=>!S)},[d]),w=l.useCallback(S=>{if(S.children)g.push(S.id.toString()),f(Dn(i,[...g])??[]),x([...g]);else{if(r)if(o)if(o.find(N=>N.id===S.id)){const N=o.filter(z=>z.id!==S.id);N.length?n(N):n(null)}else n([...o,S]);else n([S]);else n(S);!r&&P(),y(g.join("/"))}s==null||s(S)},[n,g]),T=l.useCallback(()=>{g.pop(),x([...g]),g.length===0?f(i):f(Dn(i,g)??[])},[g,f]);return Ht(u,()=>{c&&P()}),{handleOpen:P,refElement:u,isOpen:c,multiple:r,handleSelect:w,selectedRoute:b,currentItems:m,route:g,goBack:T,refItems:h,appearance:a}},fm=p.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${We(Wi)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,mm=p.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${We(Wi)};

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
`,bm=p.header`
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
`,ym=p.ul`
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
`,Vs=p.li`
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
`,vm=["isOpen"],_m=p(Kd).withConfig({shouldForwardProp:e=>!vm.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,jm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:u,refItems:h,appearance:g}=xm(e),{isActive:x,width:m,title:f,required:b,selected:y,placeholder:P,size:w="middle"}=e;return t.jsxs(mm,{onClick:i,appearance:g,ref:n,isOpen:s,isActive:x??!0,width:m,size:w,children:[t.jsx(B,{size:4,align:"left",bottomGap:"5px",visible:!!f,required:b,children:f}),t.jsxs(fm,{multiple:o,appearance:g,size:w,children:[t.jsx(bm,{appearance:g,children:o?y?y.map(T=>t.jsxs("div",{className:"header-item",children:[!!T.icon&&t.jsx("span",{className:"icon",children:T.icon}),t.jsx("span",{className:"header-title",children:T.title})]},T.id)):t.jsx("span",{className:"not-chosen multi",children:P??"Не выбрано"}):t.jsx("div",{className:"single-header",children:y?t.jsxs(t.Fragment,{children:[!!y.icon&&t.jsx("span",{className:"icon",children:y.icon}),t.jsx("span",{className:"header-title",children:y.title})]}):t.jsx("span",{className:"not-chosen",children:P??"Не выбрано"})})}),t.jsx(_m,{isOpen:s})]}),t.jsxs(ym,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:f,children:[!!d.length&&t.jsx(Vs,{isSelected:!1,onClick:T=>{T.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(bi,{}),"Назад"]})},-1),c.map(({id:T,icon:S,title:N,children:z,data:I})=>t.jsxs(Vs,{onClick:K=>{K.stopPropagation(),a({id:T,icon:S,title:N,children:z,data:I})},isSelected:!o&&!!y&&y.title.includes(N),leadingToSelected:r.includes(T.toString()),children:[!!S&&t.jsx("span",{className:"icon",children:S}),t.jsx("span",{className:"select-item-title",children:N}),!!z&&t.jsx("span",{className:"right-icon",children:t.jsx(dt,{})}),o&&!!y&&!!y.find(K=>K.title.includes(N))&&t.jsx("span",{className:"right-icon",children:t.jsx(Zi,{})})]},N))]})]})},er=l.memo(jm),wm=e=>{switch(e){case"desc":return q.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return q.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return q.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},km=p.div`
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
`,tr=p.div`
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
`,Sm=p.div`
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
`,Tm=p.div`
    display: flex;
    align-items: center;
`,Em=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return wm(h),h?{column:d,value:h}:null})};return t.jsx(Sm,{children:e.map(d=>{var u,h,g,x;return t.jsxs(tr,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((u=d.priority)==null?void 0:u.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Lt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(Qd,{className:"icon",style:{color:d.field===((g=a==null?void 0:a.column)==null?void 0:g.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Tm,{children:t.jsx(er,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(f=>(m&&(f={...f,[d.field]:{column:d,value:m}}),f)),selected:(x=s==null?void 0:s[d.field])==null?void 0:x.value,placeholder:d.title})})]},d.title)})})},$m=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(C,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(bi,{}),onClick:()=>r(ct(n-1,e).toString())}),t.jsxs(C,{w:"fit-content",gap:"6px",children:[t.jsx(lt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(se,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(dt,{}),onClick:()=>r(ct(n+1,e).toString())})]}):null},Pm=p.div`
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
`,ft=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Pm,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,Cm=p.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Om=({obj:e,columns:i})=>t.jsx(Cm,{children:i.map(n=>t.jsx(ft,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Mt(e[n.field],n.type)},n.title))}),ir=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=ee(),a=()=>o(t.jsx(Om,{obj:i,columns:e}),"Информация");return t.jsx(km,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var c;return t.jsx(t.Fragment,{children:t.jsx(tr,{showFull:r.showFull,width:r.width,className:((c=r.priority)==null?void 0:c.toString())??"one",align:r.align,onClick:d=>{r.onClick&&(d.stopPropagation(),r.onClick(i))},children:r.render?r.render(Mt(i[r.field],r.type),i):Mt(i[r.field],r.type)},r.field)})})})},Am=p.div`
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
`,Dm=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Nm=p.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,Im=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,c]=l.useState(0),d=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,u=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{c(0)},[a]),i?t.jsx(Dm,{children:t.jsx(Pt,{})}):t.jsxs(Am,{children:[u==null?void 0:u.map((h,g)=>t.jsx(ir,{onRowClick:o,columns:n,el:h,index:g},g)),!(u!=null&&u.length)&&t.jsx(ue,{text:"Нет данных"}),d>0&&t.jsx(ge,{margin:"0",width:"100%"}),t.jsx(Nm,{children:t.jsx($m,{pages:d,condition:!!s&&!!(u!=null&&u.length),currentPage:r,setCurrentPage:c})})]})},Rm=p.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Lm=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},zm=({search:e,setSearch:i})=>{var n,s;return t.jsx(Rm,{closed:!(e!=null&&e.column),children:t.jsx(lt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Lm((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Lt,{}),minWidth:"auto"})})},Mm=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Fm(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Bm=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Mm(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ge,{}),t.jsx(ir,{onRowClick:()=>null,columns:Fm(s),el:s,index:1})]})},Hm=p.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,Fe=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:c,search:d,setSearch:u,resultData:h,filter:g,setFilter:x,filterList:m,setFilterList:f,onRemoveOne:b,onRemoveAll:y}=gm(i);return t.jsxs(Hm,{children:[t.jsx(um,{setList:f,padding:"0 10px",list:m,onRemoveOne:b,onRemoveAll:y}),t.jsx(zm,{search:d,setSearch:u}),t.jsx(Em,{sort:r,setSort:c,columns:e,search:d,setSearch:u,filter:g,setFilter:x}),t.jsx(Im,{loading:a,onRowClick:s,filter:g,columns:e,data:h,maxOnPage:n}),t.jsx(Bm,{footer:o,data:i,columns:e})]})},uT={ready:"Готово",pending:"В работе",rejected:"Отклонено"},dn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},ss={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},hT=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],gT=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],Um=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(ss).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Wm=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Vm,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(Gm,{columns:Um(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Vm=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Gm=p(Fe)`
    width: 100%;
`,qm=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${pt()}`},s=await mi({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},Ym=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>le(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(ss).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{qm(i.applicationGuid)}})}}],Jm=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Km,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>{d(u=>!u)},background:"transparent"})]}),t.jsxs(Xm,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(Zm,{children:[a&&t.jsx(Q,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(Qm,{columns:Ym(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},Xm=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Km=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Qm=p(Fe)`
    width: 100%;
`,Zm=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,e0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(t0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(Jm,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(Wm,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},t0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Ut=p.div`
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
`,Wt=()=>t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Tt,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),nr=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(ht,{load:()=>Ye.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(i0,{children:t.jsxs(Ut,{maxWidth:"1500px",children:[t.jsxs(n0,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(Wt,{})]}),t.jsx(e0,{})]})})})},i0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,n0=p.div`
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
`,s0=Object.freeze(Object.defineProperty({__proto__:null,default:nr},Symbol.toStringTag,{value:"Module"})),os=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>le(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],sr=k(),or=k(),ar=M(async()=>{const{data:e}=await xe.get(`Weekend.GetAllHistory?PersonalGuid=${$t(pt()??"").IndividualGuid}`);return e.orders});O({clock:sr,target:ar});const Si=M(async e=>(await xe.post("Weekend.AddWeekend",e)).data);O({clock:or,target:Si});const rr=J([]),o0=Si.pending;O({clock:ar.doneData,target:rr});O({clock:Si.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});O({clock:Si.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const a0={loadBufferHolidayWork:sr,sendBufferHolidayWork:or},xT={sendBufferHolidayWorkFx:Si},r0={useBufferHolidayWork:()=>({data:Pe(rr),loading:Pe(o0)})},l0=()=>{const[e,i]=l.useState(!1);l.useEffect(a0.loadBufferHolidayWork,[]);const{data:n}=r0.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(c0,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(d0,{columns:os(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},c0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,d0=p(Fe)`
    width: 100%;
`,p0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(h0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(u0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(g0,{children:t.jsx(Q,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},u0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,h0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,g0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,x0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(f0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(p0,{info:s,index:o})),t.jsx(l0,{})]}):null},f0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,m0=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(ht,{load:()=>Ye.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(b0,{children:t.jsxs(Ut,{maxWidth:"1500px",children:[t.jsxs(y0,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(Wt,{})]}),t.jsx(x0,{})]})})})},b0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,y0=p.div`
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
`,lr=k(),cr=k(),as=M(async()=>{const{data:e}=await xe.get(`Vacation.GetAllHistory?personalGuid=${$t(pt()??"").IndividualGuid}`);return e});O({clock:lr,target:as});const Vt=M(async e=>(await xe.post("Vacation.AddVacation",e)).data);O({clock:cr,target:Vt});const Vi=J([]);O({clock:as.doneData,fn:({employeeVacations:e})=>e,target:Vi});O({clock:Vt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Oe.evokePopUpMessage});O({clock:Vt.doneData,source:Vi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Vi});O({clock:as.failData,fn:e=>{var n;return{message:sn(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:q.evokePopUpMessage});O({clock:Vt.failData,fn:e=>{var n;return{message:sn(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Oe.evokePopUpMessage});const Gs={loadBufferHolidayPlanning:lr,sendBufferHolidayPlanning:cr},fT={sendBufferHolidayPlanningFx:Vt},rs={useBufferHolidayPlanning:()=>({data:Pe(Vi),loading:Pe(Vt.pending)})},v0=()=>{const[e,i]=l.useState(!1),{data:n}=rs.useBufferHolidayPlanning(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(_0,{children:["История заявлений на отпуск:",t.jsx(_,{icon:e?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(j0,{columns:os(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},_0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,j0=p(Fe)`
    width: 100%;
`,dr=()=>[{title:"Статус заявления",field:"vacation",width:"200px",render:e=>t.jsx(te,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"vacation",align:"center",render:e=>{var i,n;return`${le((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${le((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],w0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(S0,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(k0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a]}),r&&t.jsxs(E0,{children:[t.jsx(Q,{to:`/hr-applications/holiday-planning/${i}`,children:t.jsx(_,{text:"Отпуск по этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(T0,{columns:dr(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},k0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,S0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,T0=p(Fe)`
    width: 100%;
`,E0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,$0=()=>{const{data:e}=rs.useBufferHolidayPlanning(),{data:{dataWorkerApplication:i}}=ye.useApplications(),[n,s]=l.useState(!0);return i?t.jsxs(P0,{children:[i.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(w0,{info:o,index:a,data:e})),t.jsx(v0,{})]}):null},P0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,pr=p.div`
    border-radius: var(--brSemi);
    background: var(--schedule);
    box-shadow: var(--schedule-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`,ur=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        height: 100%;
    }
`,C0=()=>{const{data:e,loading:i}=rs.useBufferHolidayPlanning();return l.useEffect(()=>{Gs.loadBufferHolidayPlanning()},[]),t.jsx(ht,{load:Gs.loadBufferHolidayPlanning,loading:i,error:null,data:e,children:t.jsx(ur,{children:t.jsxs(Ut,{maxWidth:"1500px",children:[t.jsxs(pr,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на отпуск"}),t.jsx(Wt,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx($0,{})]})})})},O0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(dn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(ss).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],hr=k(),gr=k(),ls=M(async()=>{const{data:e}=await xe.get(`CarryForwardVacation.GetAllHistory?personalGuid=${$t(pt()??"").IndividualGuid}`);return e});O({clock:hr,target:ls});const Gt=M(async e=>(await xe.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);O({clock:gr,target:Gt});const Gi=J([]);O({clock:ls.doneData,fn:({employeeVacations:e})=>e,target:Gi});O({clock:Gt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Oe.evokePopUpMessage});O({clock:Gt.doneData,source:Gi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Gi});O({clock:ls.failData,fn:e=>{var n;return{message:sn(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:q.evokePopUpMessage});O({clock:Gt.failData,fn:e=>{var n;return{message:sn(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Oe.evokePopUpMessage});const qs={loadBufferHolidayTransfer:hr,sendBufferHolidayTransfer:gr},mT={sendBufferHolidayTransferFx:Gt},cs={useBufferHolidayTransfer:()=>({data:Pe(Gi),loading:Pe(Gt.pending)})},A0=()=>{const[e,i]=l.useState(!1),{data:n}=cs.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(D0,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(N0,{columns:O0(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},D0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,N0=p(Fe)`
    width: 100%;
`,I0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(L0,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(R0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(M0,{children:[t.jsx(Q,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(z0,{columns:dr(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},R0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,L0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,z0=p(Fe)`
    width: 100%;
`,M0=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,F0=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=cs.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(B0,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(I0,{info:o,index:a,data:i})),t.jsx(A0,{})]})},B0=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,H0=()=>{const{data:e,loading:i}=cs.useBufferHolidayTransfer();return l.useEffect(()=>{qs.loadBufferHolidayTransfer()},[]),t.jsx(ht,{load:qs.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(U0,{children:t.jsxs(Ut,{maxWidth:"1500px",children:[t.jsxs(W0,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(Wt,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(F0,{})]})})})},U0=p.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,W0=p.div`
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
`,V0=e=>localStorage.setItem("age",e.toString()),bT=e=>localStorage.getItem(e),G0=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),q0={listMedicalExamination:null,error:null},Nt=M(async()=>{const e=await xe.get(`MedicalExamination.GetAllHistory?PersonalGuid=${$t(pt()??"").IndividualGuid}`);try{return V0(e.data.age),G0(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),pn=M(async e=>{try{const i=await xe.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),Y0=()=>{const{listMedicalExamination:e,error:i}=Pe(J0);return{data:e,loading:Pe(Nt.pending),error:i}};k();Me({from:pn.doneData,to:Nt});O({clock:pn.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success",time:0}),target:Oe.evokePopUpMessage});O({clock:pn.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e3}),target:Oe.evokePopUpMessage});const J0=J(q0).on(Nt,e=>({...e,error:null})).on(Nt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(Nt.failData,(e,i)=>({...e,error:i.message})),X0={loadBufferMedicalExaminationFx:Nt,sendBufferMedicalExaminationFx:pn},ds={useBufferMedicalExamination:Y0},xr=()=>[{title:"Статус заявления",field:"medicalExamination",width:"200px",render:e=>{var i,n,s,o,a;return t.jsx(te,{type:((i=e.status)==null?void 0:i.orderStatus)==="Согласовано"?"success":((n=e.status)==null?void 0:n.orderStatus)==="На регистрации"?"info":((s=e.status)==null?void 0:s.orderStatus)==="Не утвержден"||((o=e.status)==null?void 0:o.orderStatus)==="Не создано"?"failure":"alert",title:(a=e.status)==null?void 0:a.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Период",field:"medicalExamination",align:"center",render:e=>{var i,n;return`${le((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${le((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],K0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,{data:a}=ds.useBufferMedicalExamination(),[r,c]=l.useState(!1);return(a==null?void 0:a.length)==0?null:t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",minHeight:"200px",height:"fit-content",children:[t.jsxs(Z0,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:r?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(Q0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),r&&t.jsxs(tb,{children:[t.jsx(Q,{to:`/hr-applications/medical-examination/${i}`,children:t.jsx(_,{text:"Оформить заявление",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),a==null?void 0:a.map((d,u)=>{if(d.employeeGuid==e.jobGuid){const h=a[u].notTaken.filter(g=>{if(g.medicalExamination.status.orderStatus!="false"&&g.medicalExamination.status.orderStatus!="")return g.medicalExamination.status.orderStatus});return t.jsx(eb,{columns:xr(),data:h,maxOnPage:10},d.orderNumber)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},Q0=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Z0=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,eb=p(Fe)`
    width: 100%;
`,tb=p.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,ib=()=>{const[e,i]=l.useState(!1),{data:n}=ds.useBufferMedicalExamination(),s=l.useMemo(()=>n==null?void 0:n.map(o=>o.notTaken.filter(r=>{if(r.medicalExamination.status.orderStatus!="false"&&r.medicalExamination.status.orderStatus!="")return r.medicalExamination.status.orderStatus})).flat(),[n]);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(nb,{children:["История заявлений на диспансеризацию:",t.jsx(_,{icon:e?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>i(o=>!o),background:"transparent"})]}),e&&t.jsx(sb,{columns:xr(),data:s,maxOnPage:5}),t.jsx(_,{onClick:()=>{i(o=>!o)},text:n?e?"Скрыть":"Подробнее":"История пуста",background:"transparent"})]})},nb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,sb=p(Fe)`
    width: 100%;
`,ob=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsx(ab,{children:t.jsxs(t.Fragment,{children:[t.jsx(C,{jc:"space-between",ai:"flex-start",gap:"10px",children:e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(K0,{info:s,index:o}))}),t.jsx(ib,{})]})}):null},ab=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,rb=()=>{const{data:{listApplication:e},error:i,loading:n}=ye.useApplications(),{data:s,loading:o,error:a}=ds.useBufferMedicalExamination();return t.jsx(ht,{load:()=>{Ye.getApplicationsFx(),X0.loadBufferMedicalExaminationFx()},loading:n||o,error:i||a,data:e&&s,children:t.jsx(ur,{children:t.jsxs(Ut,{maxWidth:"1500px",children:[t.jsxs(pr,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на диспансеризацию"}),t.jsx(Wt,{})]}),t.jsx(ob,{})]})})})},fr=k(),mr=k(),br=M(async()=>{const{data:e}=await xe.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${$t(pt()??"").IndividualGuid}`);return e.employeeHistories});O({clock:fr,target:br});const Ti=M(async e=>(await xe.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);O({clock:mr,target:Ti});const yr=J([]),lb=Ti.pending;O({clock:br.doneData,target:yr});O({clock:Ti.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Oe.evokePopUpMessage});O({clock:Ti.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Oe.evokePopUpMessage});const cb={loadBufferWorkTransfer:fr,sendBufferWorkTransfer:mr},yT={sendBufferWorkTransferFx:Ti},db={useBufferWorkTransfer:()=>({data:Pe(yr),loading:Pe(lb)})},pb=()=>{const[e,i]=l.useState(!1);l.useEffect(cb.loadBufferWorkTransfer,[]);const{data:n}=db.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ub,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(hb,{columns:os(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},ub=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,hb=p(Fe)`
    width: 100%;
`,gb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ae,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(fb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(Ce,{}):t.jsx(we,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(xb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(mb,{children:[t.jsx(Q,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Q,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},xb=p.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,fb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,mb=p.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,bb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(yb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(gb,{info:s,index:o})),t.jsx(pb,{})]}):null},yb=p.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,vb=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(ht,{load:()=>Ye.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(_b,{children:t.jsxs(Ut,{maxWidth:"1500px",children:[t.jsxs(jb,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(Wt,{})]}),t.jsx(bb,{})]})})})},_b=p.div`
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
`,kn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},vr=()=>{const e=vi(),{allRoutes:i}=Ve.useMenu(),n=i??{},[s,o]=l.useState(kn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(kn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(kn(a.pathname,n))}),[e,n]),s},wb={small:"600px",middle:"700px",big:"963px",large:"100%"},_r=e=>wb[(e==null?void 0:e.pageSize)??"middle"],kb=p(Ke)`
    position: relative;

    ${Z.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${Z.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,Sb=p.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${Z.isMobile} {
        top: -4px;
        right: 7px;
    }
`,Tb=p.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${Z.isMobile} {
        top: 40px;
    }
`,un=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=vr(),r=_r(a);return t.jsx(Ts,{padding:"0 0 10px 0",children:t.jsxs(kb,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(Sb,{children:i}),n&&t.jsx(Tb,{children:n}),e]})})});un.displayName="PageBlock";const Eb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${le(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${le(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${le(e[0])} по ${le(e[1])}`},$b=p.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,ps=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=rt.selectors.useData();return r?t.jsxs($b,{children:[t.jsx(B,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Ja,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(te,{type:"info",title:Eb(n)??"",icon:t.jsx(Tt,{})}),i==null?void 0:i.map((c,d)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(re.Fragment,{children:[t.jsxs("section",{children:[t.jsx(B,{size:4,align:"left",children:c.title}),t.jsx(ki,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(Yn,{}),width:"170px",background:j.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(ge,{})]},c.title)})]})]}):null},Pb=()=>{const{data:e}=rt.selectors.useData();return t.jsx(ps,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Cb=()=>{const{data:e}=rt.selectors.useData();return t.jsx(ps,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Ob=()=>{const{data:e}=rt.selectors.useData();return t.jsx(ps,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},jr=()=>{var i;const{data:e}=rt.selectors.useData();return t.jsx(Ts,{padding:"10px",children:t.jsx(un,{children:t.jsx(_s,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Ob,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Pb,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Cb,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(je,{oldVersionUrl:by}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Ab=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Db=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},wr=k(),kr=k(),Sr=k(),Ft=M(async()=>{const e=await Yu();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),us=M(async e=>{try{return await Xu(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Ei=M(async e=>{const i=await Ju(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});O({clock:Ei.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:q.evokePopUpMessage});O({clock:Ei.doneData,fn:()=>!0,target:kr});O({clock:Ei.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:q.evokePopUpMessage});O({clock:wr,target:Ei});const Tr=k(),Er=k(),Nb=Gn(Ei.pending,Ft.pending,Boolean),Ib=J(!1).on(Sr,(e,i)=>i),Rb=J(!1).on(kr,(e,i)=>i),Lb=J(null).on(Ft,()=>null).on(Ft.failData,(e,i)=>i.message).on(us.failData,(e,i)=>i.message),zb=J(null).on(Ft.doneData,(e,i)=>i).on(us.doneData,(e,i)=>Db(e,i,!1)).on(Tr,()=>null),it={$loading:Nb,$completed:Ib,$done:Rb,$error:Lb,$paymentsStore:zb};Me({from:Er,to:Ft});const hs={getPaymentsFx:Ft,signContractFx:us},Nn={signAgreement:wr,setCompleted:Sr,clearStore:Tr,getPayments:Er},Mb=Object.freeze(Object.defineProperty({__proto__:null,effects:hs,events:Nn,stores:it},Symbol.toStringTag,{value:"Module"})),Fb=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Bb=p.div`
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
`,Hb=({date:e,value:i})=>t.jsxs(Bb,{children:[t.jsxs(C,{gap:"16px",children:[t.jsx(gt,{color:"grey",size:33,children:t.jsx(at,{})}),t.jsxs(C,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(se,{children:le(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(at,{})," "]})]}),Ub=p.div`
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
`,$r=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Ub,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(at,{})]})},Wb=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Vb=p.div`
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
`,Gb=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Wb(s.value),0).toFixed(1);return t.jsxs(Vb,{children:[t.jsxs(C,{jc:"space-between",children:[t.jsx(B,{icon:t.jsx(Io,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(se,{fontSize:"1rem",width:"fit-content",children:t.jsx($r,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ue,{size:"50px",text:"Нет платежей",image:t.jsx(Ro,{})}),e.map((n,s)=>l.createElement(Hb,{...n,key:s}))]})]})},Pr=()=>t.jsx(te,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),qb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Yb=p.div`
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
`,Jb=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d}=e,{open:u}=ee(),[h,g]=l.useState(!1),[x,m]=l.useState(!1),[f,b]=l.useState(!1),y=_i(it.$error),P=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:le(n)},{text:"Действует до",info:le(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:qb(a)??""},{text:"Статус",info:""}],w=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},T=()=>{e&&(m(!0),hs.signContractFx(e.id),m(!1),b(!0))},S=()=>{u(t.jsx(Pr,{}),"Не получается подписать")};return t.jsxs(Yb,{children:[t.jsx("div",{className:"contract-info",children:P.map(({info:N,text:z})=>t.jsx(ft,{keyStr:z,value:N},N))}),r&&t.jsxs(C,{d:"column",gap:"8px",children:[t.jsx(_t,{text:"Подписать договор",buttonSuccessText:"Подписан",action:T,isLoading:x,completed:f,repeatable:!1,popUpFailureMessage:y??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:S,text:"Не получается подписать?",background:"transparent",textColor:j.grey.main})]}),!r&&t.jsxs(C,{gap:"8px",children:[t.jsx(_t,{text:"Скопировать номер договора",action:w,isLoading:!1,completed:h,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(ki,{onClick:()=>null,href:c??"",icon:t.jsx(Yn,{}),width:"45px"})]})]})},Xb=p.div`
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
`,Kb=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Xb,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Lo,{style:{color:"var(--green)"}}):t.jsx(zo,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(we,{}),onClick:()=>null,background:"transparent"})]}),Qb=p.div`
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
`,Zb=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(Qb,{height:s,open:r,children:[t.jsx(Kb,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},ey=p.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,ty=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,u]=_i([it.$done,it.$completed,it.$loading]),h=s||c?140:100,g=()=>Nn.signAgreement(n),x=Nn.setCompleted;return t.jsxs(Zb,{height:h,title:o,confirmed:s||c,children:[t.jsxs(ey,{children:[t.jsxs(C,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(B,{size:5,align:"left",children:o}),t.jsx(se,{children:le(r)})]}),t.jsxs(C,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(ki,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Yn,{}),isActive:!!e.file}),!(s||c)&&t.jsx(_t,{text:s||c?"Подписано":"Подписать",action:g,isLoading:u,completed:d,isDone:s||c,width:"160px",setCompleted:x,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(te,{type:"success",title:"Подписано",icon:t.jsx(Zi,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(se,{children:["Дата подписания: ",le(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},iy=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Ee,{width:"100%",children:[t.jsx(B,{size:4,align:"left",icon:t.jsx(Zd,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(Pr,{}),t.jsx(te,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(ty,{data:s,isContractSigned:n},o))]}),ny=p.div`
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
`,Ri=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(ny,{children:t.jsx(es,{loading:i,width:"300px",height:"300px",src:e??""})})},sy=p.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,oy=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Ri,{qrCode:e}):n===1?t.jsx(Ri,{qrCode:i}):t.jsx(sy,{children:t.jsx(_s,{pages:[{title:"Текущая залолженность",content:t.jsx(Ri,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(Ri,{qrCode:i})}],appearance:!1,currentPage:n})}),ay=({type:e="horizontal",...i})=>{const{open:n}=ee(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${j.green.main}, ${j.green.dark1})`,a=()=>{n(t.jsx(oy,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(ep,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},ry=({debt:e,size:i="big"})=>{const n=e>0?j.red.main:j.green.main;return t.jsx($r,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},Sn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),$i=()=>{const e=Ru.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Sn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Sn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Sn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},ly=p.div`
    width: 100%;
`,cy=p.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,dy=p.div`
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
`,py=p.div`
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
`,uy=p.div`
    position: relative;
`,hy=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:u}=$i(),{open:h}=ee(),[g,x]=l.useState(0),m=g===0?+n:+s,f=m>0,b=f?g===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",y=g===0?`На ${le(new Date)}`:`До ${le(o)}`,P=()=>{h(t.jsx(Jb,{contract:i}),"Реквизиты договора")};return t.jsxs(ly,{children:[t.jsx(B,{icon:t.jsx(tp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(cy,{children:[t.jsx(is,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:g,setCurrentPage:x,appearance:!1}),t.jsxs(dy,{children:[t.jsxs(C,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(ry,{debt:m}),t.jsxs(C,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(B,{size:3,align:"left",children:b}),t.jsx(se,{children:y})]})]}),f?t.jsx(ay,{currentPage:g,type:u?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(Da,{color:"green",size:"40px"})]}),t.jsxs(py,{children:[r&&t.jsx(ki,{text:"Квитанция на оплату",background:"transparent",textColor:j.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(uy,{children:[t.jsx(_,{onClick:P,text:"Реквизиты договора",background:"transparent",textColor:j.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(jt,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Cr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,gy=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Mt(String(o),"rub")})`},xy=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Cr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:gy}],fy=({paygraph:e})=>t.jsxs(C,{d:"column",children:[t.jsx(B,{icon:t.jsx(ip,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(Fe,{columns:xy(),data:e??[],maxOnPage:3})]}),Li=({contracts:e})=>e?t.jsx(Fb,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user:d}=i,u=a==="Общежитие",h=!0,g=s.filter(x=>new Date(x==null?void 0:x.date)>new Date("2022-02-1"));return t.jsxs(re.Fragment,{children:[e.length!==1&&t.jsxs(C,{gap:"8px",children:[t.jsx(C,{w:"fit-content",children:t.jsxs(B,{size:3,align:"left",children:["Договор:"," "]})}),t.jsxs(se,{fontSize:"1rem",children:[a,", ",o]})]}),t.jsx(hy,{data:i}),t.jsx(Gb,{payments:c??[]}),t.jsx(fy,{paygraph:r}),t.jsx(iy,{isDormitory:u,isContractSigned:h,electronicAgreements:g}),n!==e.length-1&&t.jsx(ge,{margin:"0",width:"100%"})]},o)})}):null,gs=()=>{const[e,i,n]=_i([it.$error,it.$loading,it.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{q.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(ht,{loading:i,load:hs.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(un,{children:[t.jsx(te,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ue,{text:"Нет данных"}),s==="both"&&t.jsx(_s,{pages:[{title:"Общежитие",content:t.jsx(Li,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Li,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Li,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Li,{contracts:n==null?void 0:n.education})]})})},my=Object.freeze(Object.defineProperty({__proto__:null,default:gs},Symbol.toStringTag,{value:"Module"})),$="/applications",ae="/hr-applications",Ys="/staff_orders",Js="/staff_blanks",by="/ad_logins",xs="/doclist",Xs="/pps_vote2020",yy="/children",Or="/pps_contest",vy="/electronic-statements",fe="/onboarding",_y="/structure-of-the-university",jy="/addresses-and-contacts",wy="/brandbook",ky="/wifi-at-the-university",Sy="/health-care",Ty="/psychological-help",Ey="/social-environment",$y="/vacation",Xt="/kpi_pps",Kt="/kpi_admin",Ks="/sc_news",Qs="/oop",Zs="/centers",Py="/helpful-information",Cy="/download-agreements",eo="/physical-education/main",Oy="/physical-education/student/:studentId",Ar=$+"/contact-info-actualization",Dr=$+"/data-verification",Nr=$+"/issuance-of-licenses",Ir=$+"/getting-computer-equipment",Rr=$+"/connecting-computer",Lr=$+"/printer-maintenance",zr=$+"/question-sed",Mr=$+"/question-personal-account",Fr=$+"/other-it-services",Br=$+"/certificate-from-the-place-of-work",Hr=$+"/visa-certificate",Ur=$+"/certificate-of-work-experience",Wr=$+"/number-of-unused-vacation-days",Vr=$+"/copy-of-the-employment-record",Gr=$+"/copies-of-documents-from-the-personal-file",qr=$+"/work-on-the-terms-of-external-concurrency",Yr=$+"/certificate-time-parental-leave",Jr=$+"/arbitrary-request",Xr=$+"/courier",Kr=$+"/persona-income-tax-reference",Qr=$+"/payment-of-child-birth-allowance",Zr=$+"/payment-for-child-care",el=ae+"/part-time-employment/",Ay=ae+"/dismissal/:id",Dy=ae+"/work-transfer/:id",Ny=ae+"/extra-holiday-coll",Iy=ae+"/holiday-planning/:id",Ry=ae+"/holiday-transfer/:id",Ly=ae+"/holiday-work/:id",zy=ae+"/work-transfer-change-rate/:id",My=ae+"/medical-examination/:id",In=ae+"/buffer-dismissal",Rn=ae+"/buffer-holiday-planning",Ln=ae+"/buffer-holiday-transfer",zn=ae+"/buffer-holiday-work",Mn=ae+"/buffer-medical-examination",Hi=ae+"/buffer-work-transfer",tl=$+"/living-in-residential-premises",il=$+"/guests-accomodation-on-campus",nl=$+"/guests-passage-to-campus",sl=$+"/relocation",ol=$+"/termination-of-agreement",al=$+"/issuance-of-pass",rl=$+"/guest-pass",ll=$+"/certification-and-issuance-of-docs",cl=$+"/deferment-from-conscription",dl=$+"/certified-copies-of-military-docs",F=()=>je({oldVersionUrl:"/sprav"}),to=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(X,{}),path:fe,Component:am,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...kl,"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(Io,{}),path:Cy,Component:jr,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(cp,{}),path:yy,Component:()=>(re.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"]},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(X,{}),path:vy,Component:()=>(re.useEffect(()=>{window.location.replace(`${L}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Mo,{}),path:yl,Component:()=>(re.useEffect(()=>{window.location.replace(`${L}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(at,{}),path:qi,Component:gs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(X,{}),path:Or,Component:()=>(re.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Fo,{}),path:Xt,Component:()=>(re.useEffect(()=>{window.location.replace(`${L}/?p=${Xt==null?void 0:Xt.slice(1,Xt.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(dp,{}),path:Kt,Component:()=>(re.useEffect(()=>{window.location.replace(`${L}/?p=${Kt==null?void 0:Kt.slice(1,Kt.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(pp,{}),path:Ks,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Ks}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(D,{}),path:Ys,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Ys}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(zt,{}),path:Js,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Js}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(D,{}),path:xs,Component:Jx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(up,{}),path:$y,Component:$f,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(D,{}),color:"lightGreen",path:eo,pageSize:"big",Component:sf,isTemplate:!1,group:"OTHER"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(D,{}),color:"pink",show:!1,path:Oy,Component:of,isTemplate:!1,fallbackPrevPage:eo,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(hi,{}),path:Qs,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Qs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(hi,{}),path:Zs,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Zs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(D,{}),path:Py,Component:ns,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Bo,{}),path:Xs,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Xs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:$,Component:A?F:Xx,color:"red",isTemplate:!1,pageSize:"large",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(D,{}),path:ae,Component:A?()=>je({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Pf,color:"green",isTemplate:!1,group:"FINANCES_DOCS"}}),io=()=>({...Sl,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Nr,icon:t.jsx(D,{}),color:"blue",Component:A?F:rf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:In,icon:t.jsx(D,{}),color:"blue",Component:A?F:nr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:zn,icon:t.jsx(D,{}),color:"blue",Component:A?F:m0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Mn,icon:t.jsx(D,{}),color:"blue",Component:A?F:rb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:Rn,icon:t.jsx(D,{}),color:"blue",Component:A?F:C0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:Ln,icon:t.jsx(D,{}),color:"blue",Component:A?F:H0,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:Hi,icon:t.jsx(D,{}),color:"blue",Component:A?F:vb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:el,icon:t.jsx(D,{}),color:"blue",Component:A?F:Cf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:Ly,icon:t.jsx(D,{}),color:"blue",Component:A?F:Df,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:zn},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:My,icon:t.jsx(D,{}),color:"blue",Component:A?F:Nf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Mn},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:Iy,icon:t.jsx(D,{}),color:"blue",Component:A?F:If,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Rn},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Ry,icon:t.jsx(D,{}),color:"blue",Component:A?F:Rf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Ln},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:Dy,icon:t.jsx(D,{}),color:"blue",Component:A?F:Lf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Hi},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:zy,icon:t.jsx(D,{}),color:"blue",Component:A?F:zf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Hi},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Ny,icon:t.jsx(D,{}),color:"blue",Component:A?F:Af,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:Ay,icon:t.jsx(D,{}),color:"blue",Component:A?F:Of,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:In},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(D,{}),color:"blue",path:Ir,Component:A?F:af,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(D,{}),color:"blue",path:Rr,Component:A?F:ef,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(D,{}),color:"blue",path:Lr,Component:A?F:hf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(D,{}),color:"blue",path:zr,Component:A?F:xf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(D,{}),color:"blue",path:Mr,Component:A?F:gf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(D,{}),color:"blue",path:Fr,Component:A?F:cf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(D,{}),color:"blue",path:Br,Component:A?F:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(D,{}),color:"blue",path:Hr,Component:A?F:ff,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(D,{}),color:"blue",path:Ur,Component:A?F:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(D,{}),color:"blue",path:Wr,Component:A?F:lf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(D,{}),color:"blue",path:Vr,Component:A?F:tf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(D,{}),color:"blue",path:Gr,Component:A?F:Gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(D,{}),color:"blue",path:qr,Component:A?F:mf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(D,{}),color:"blue",path:Yr,Component:A?F:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(D,{}),color:"blue",path:Jr,Component:A?F:Kx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},courier:{id:"courier",title:"Курьер",icon:t.jsx(D,{}),color:"blue",path:Xr,Component:A?F:nf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(D,{}),color:"blue",path:Kr,Component:A?F:uf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(D,{}),color:"blue",path:Qr,Component:A?F:pf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(D,{}),color:"blue",path:Zr,Component:A?F:df,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(D,{}),color:"blue",path:Ar,Component:qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(D,{}),color:"blue",path:Dr,Component:Yx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(D,{}),color:"blue",path:tl,Component:A?F:bf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(D,{}),color:"blue",path:il,Component:A?F:yf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(D,{}),color:"blue",path:nl,Component:A?F:vf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(D,{}),color:"blue",path:sl,Component:A?F:_f,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(D,{}),color:"blue",path:ol,Component:A?F:jf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(D,{}),color:"blue",path:al,Component:A?F:wf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(D,{}),color:"blue",path:rl,Component:A?F:kf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(D,{}),color:"blue",path:ll,Component:A?F:Sf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(D,{}),color:"blue",path:cl,Component:A?F:Tf,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(D,{}),color:"blue",path:dl,Component:A?F:Ef,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(qe,{to:fe})),icon:t.jsx(zt,{}),isTemplate:!1,path:Ey,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(qe,{to:fe})),icon:t.jsx(np,{}),isTemplate:!1,path:Ty,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(qe,{to:fe})),icon:t.jsx(sp,{}),isTemplate:!1,path:Sy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(qe,{to:fe})),icon:t.jsx(op,{}),isTemplate:!1,path:ky,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(qe,{to:fe})),icon:t.jsx(ap,{}),isTemplate:!1,path:wy,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(rp,{}),path:jy,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(qe,{to:fe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(lp,{}),path:_y,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(qe,{to:fe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:fe,isExternalPage:!0}}),pl="/login",Fy="/forgot-password",By="/medical-certificate",Hy="/vaccination",ri="/all",fs="/home",ms="/profile",bs="/chat",Uy="/messages",vT=bs+"/:chatId",ul="/electronic-interaction-agreement",qi="/payments",Ct="/schedule",hl="/all-students",Wy="/all-students/:filter",Vy="/all-teachers/:filter",gl="/all-teachers",ys="/feedback",xl="/cant-access",fl="/memo-freshmen",ml="/get-your-login",bl="/memo-teacher",me="/settings",_T=me+"/:id",Gy=me+"/appearance",qy=me+"/personal",Yy=me+"/security",Jy=me+"/home-page",Xy=me+"/customize-menu",Ky=me+"/notifications",Qy="/instructions",yl="/project-activity",vl="/alerts",_l="/lk-notifications",jl="/helpful-information",Pi=Ct+"/:page/:filter",wl=Ct+"/current",Zy=Ct+"/semestr",ev=Ct+"/session",tv=Ct+"/retake",iv=jl+"/:infoType";var nv=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(nv||{});const sv=[{id:0,title:"",icon:"",path:pl,Component:Hx},{id:1,title:"",icon:"",path:Fy,Component:Hf},{id:2,title:"Обратная связь",icon:t.jsx(hi,{}),path:ys,Component:Qa},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(ot,{}),path:xl,Component:Ff},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:ml,Component:im},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:fl,Component:nm},{id:6,title:"Вниманию сотрудников!",icon:"",path:bl,Component:sm}],kl={all:{id:"all",title:"Все разделы",icon:t.jsx(mp,{}),path:ri,Component:Mf,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Wo,{}),path:me,Component:Kf,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(D,{}),path:xs,Component:tm,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Vo,{}),path:vl,Component:Uf,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Uo,{}),path:fs,Component:Wf,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Go,{}),path:ms,Component:Gf,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(tn,{}),path:_l,Component:rm,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(qo,{}),path:ul,Component:Bf,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(bp,{}),path:bs,isOldLkPage:!0,Component:()=>je({oldVersionUrl:Uy}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Et,{}),path:Ct,menuPath:wl,Component:Za,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(zt,{}),path:hl,Component:Xa,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Bo,{}),path:gl,Component:Ka,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(hi,{}),path:ys,Component:Qa,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(yp,{}),path:Qy,Component:Vf,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Os,{}),path:By,Component:om,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(Os,{}),path:Hy,Component:()=>(re.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"]}},ov={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(Et,{}),path:wl,Component:qf,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(Jn,{}),path:Zy,Component:Yf,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Ho,{}),path:ev,Component:Jf,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(qn,{}),path:tv,Component:Xf,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Sl={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(Et,{}),path:Pi,Component:Za,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...ov,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(zt,{}),path:Wy,Component:Xa,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(zt,{}),path:Vy,Component:Ka,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(hp,{}),path:Gy,Component:Zf,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(gp,{}),path:qy,Component:Qf,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(xp,{}),path:Yy,Component:em,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Uo,{}),path:Jy,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(fp,{}),path:Xy,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:me,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(tn,{}),path:Ky,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:me,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:iv,Component:ns,color:"grey",isTemplate:!0,show:!1}},Tl=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;wi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else q.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},El=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;wi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},av=(e,i,n,s)=>{if(i){const o=s.length+Pu;if(n<o){q.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??nn;wi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else q.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},rv=(e,i,n)=>{if(i)if(n.includes(e))q.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{q.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;wi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},lv=p.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,cv=p.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,dv=e=>{var m,f,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Bt.useSettings(),{data:r}=ve.useUser(),c=Ve.useMenu(),d=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(y=>y===i),u=(f=a["settings-customize-menu"].property.pages)==null?void 0:f.find(y=>y===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?ia:nn,g=()=>{Tl(i,a),ze.close()},x=()=>{av(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),ze.close()};return t.jsxs(lv,{children:[t.jsxs("div",{className:"top",children:[t.jsx(gt,{color:o,size:22,children:n}),t.jsx(cv,{children:s})]}),t.jsx(ge,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{El(i,a),ze.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(ui,{}),width:"100%",align:"left",background:"var(--block)",onClick:g}),u?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>rv(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(ui,{}),width:"100%",align:"left",background:"var(--block)",onClick:x})]})},$l=({route:e})=>{var s;const i=j[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),ze.open({e:o,height:105,content:t.jsx(dv,{...e})})};return t.jsx(_,{icon:t.jsx(Yo,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Pl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine};function Yi(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Cl=p(Ke)`
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
`,pv=p.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,no=e=>{var T;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:c,isExternalPage:d,isOldLkPage:u,mode:h,id:g,background:x,orientation:m="vertical"}=e,f=m==="vertical",{settings:b}=Bt.useSettings(),y=!!((T=b["settings-home-page"].property.pages)!=null&&T.find(S=>S===g)),P=11,w=l.useMemo(()=>(S,N)=>{const z=S.split(" ")[0];return z.length>N&&z.length!==N+1&&f?`${S.substring(0,N)}-${S.substring(N,S.length)}`:S},[]);return t.jsxs(Cl,{padding:"0",width:"100%",maxWidth:"100%",height:f?"135px":"60px",isVertical:f,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:x,children:[(u||d)&&f&&t.jsxs(pv,{children:[u&&t.jsx(en,{title:"Раздел в старом ЛК"}),d&&t.jsx(Ui,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(gt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:c??t.jsx(vp,{})}),t.jsx("b",{children:Yi(w(a,P),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Pl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),h==="use"&&t.jsx($l,{route:e}),h==="add"?y?t.jsx(_,{icon:t.jsx(Xe,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>El(g,b)}):t.jsx(_,{icon:t.jsx(ui,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>Tl(g,b)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},uv=p(Cl)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,jT=()=>t.jsx(Q,{to:ri,onClick:()=>{Qe.changeOpen({isOpen:!1,currentPage:ri.slice(1,ri.length)})},children:t.jsx(uv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(gt,{color:"blue",children:t.jsx(_p,{})}),t.jsx("b",{children:"Все разделы"})]})})}),hv=p(Q)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,gv=p.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,xv=e=>{const{close:i}=ee(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(gv,{width:o==="vertical"?c:"100%",children:t.jsx(no,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),Qe.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(hv,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(no,{...e,maxWordLength:r,mode:a})})},fv=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,mv=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ue,{text:"Ничего не было найдено"}):t.jsx(fv,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(xv,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),bv=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(be(s.title).includes(be(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>be(a).includes(be(e))))&&(n[s.id]=s),n},{}),yv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,vv=p(Q)`
    width: 100%;
`,_v=({division:e})=>{const{close:i}=ee();return t.jsxs(yv,{children:[t.jsxs(C,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(gt,{size:120,color:"purple",children:t.jsx(ii,{})}),t.jsx(se,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(vv,{to:`${gl}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(Jo,{}),width:"100%",text:"Список"})})]})},jv=p.div`
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
`,wv=({division:e})=>{const{open:i}=ee(),n=()=>{i(t.jsx(_v,{division:e}),"Подразделение")};return t.jsx(jv,{onClick:n,children:t.jsxs(C,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(C,{gap:"8px",children:[t.jsx(ii,{}),t.jsx(se,{fontSize:"1rem",children:e})]}),t.jsx(dt,{})]})})},kv=({divisions:e})=>!e||e.length===0?null:t.jsx(C,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(wv,{division:i},i))}),hn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),Sv=p.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,so=p(Q)`
    width: 100%;
`,Ol=({group:e})=>{const{close:i}=ee();return t.jsxs(Sv,{children:[t.jsxs(C,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(gt,{size:120,color:"lightBlue",children:t.jsx(Xo,{})}),t.jsx(se,{fontSize:"1.2rem",children:e})]}),t.jsxs(C,{gap:"8px",onClick:i,children:[t.jsx(so,{to:hn(Pi,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(Et,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(so,{to:`${hl}/${e}`,children:t.jsx(_,{icon:t.jsx(Jo,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},Tv=p.div`
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
`,Ev=({group:e})=>{const{open:i}=ee(),n=()=>{i(t.jsx(Ol,{group:e}),"Группа")};return t.jsx(Tv,{onClick:n,children:t.jsxs(C,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(C,{gap:"8px",h:"50px",children:[t.jsx(Xo,{}),t.jsx(se,{fontSize:"1rem",children:e})]}),t.jsx(dt,{})]})})},$v=({groups:e})=>e?t.jsx(C,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Ev,{group:i},i))}):null,Tn=[{title:"Инструкции",links:[{link:L+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:L+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:L+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:L+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:L+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:L+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:L+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:L+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:L+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:L+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:L+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:L+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:L+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:L+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:L+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:L+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:L+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:L+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ie},{link:L+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:L+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie}]},{title:"Положения",links:[{link:L+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ie},{link:L+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ie},{link:L+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ie},{link:L+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ie},{link:L+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ie},{link:L+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ie},{link:L+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ie},{link:L+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ie},{link:L+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ie},{link:L+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ie},{link:L+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ie},{link:L+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ie},{link:L+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ie},{link:L+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ie},{link:L+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ie}]}];var Se=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Se||{});const At={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Pv=[{id:Se.information,title:At[Se.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Se.security,title:At[Se.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Se.instructions,title:At[Se.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Tn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.regulations,title:At[Se.regulations],visible:"staff",content:[{title:"Положения",links:[...Tn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.orders,title:At[Se.orders],visible:"staff",content:[{title:"Приказы",links:[...Tn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.courses,title:At[Se.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Cv=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Ov=p.div`
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
`,Av=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(Ov,{children:[t.jsx(B,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Ee,{gap:16,children:s.map(({title:a,href:r,visible:c},d)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+d))})]},n+o))}):null,Dv=p.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Nv=p.div``,Iv=p.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Al=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Dv,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Nv,{children:e}),t.jsx(Iv,{isOpen:o,children:i})]})},Dl=k(),Nl=k(),Rv=J(!1).on(Nl,()=>!0).on(Dl,()=>!1),oo={close:Dl,open:Nl},Lv={$isModalOpen:Rv},vs=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),zv=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=_i(Lv.$isModalOpen),d=a.length>1,u=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,y)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,y??""])):(r(()=>[b]),o(y?[y]:[])),n(()=>!0),oo.open())},[r,n,a,i]),g=l.useCallback(()=>{n(()=>!1),oo.close()},[r,n]),x=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),f=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(vs.Provider,{value:{back:u,open:h,close:g,isOpen:i,canBack:d,component:x,title:m,setComponent:f},children:e})},ee=()=>{const{open:e,isOpen:i,...n}=l.useContext(vs);return{open:e,isOpen:i,...n}},Mv="2.3.0",Il=()=>t.jsx(te,{icon:null,type:"info",title:Mv,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Ne=({color:e,children:i})=>t.jsx(gt,{color:e,children:i}),Fv=()=>({info:t.jsx(Ne,{color:"grey",children:t.jsx(Tt,{})}),message:t.jsx(Ne,{color:"red",children:t.jsx(Xn,{})}),alert:t.jsx(Ne,{color:"purple",children:t.jsx(Vo,{})}),"payment-dorm":t.jsx(Ne,{color:"green",children:t.jsx(at,{})}),"payment-ed":t.jsx(Ne,{color:"green",children:t.jsx(at,{})}),"digital-services":t.jsx(Ne,{color:"red",children:t.jsx(D,{})}),"doc-for-review":t.jsx(Ne,{color:"blue",children:t.jsx(D,{})}),"hr-applications":t.jsx(Ne,{color:"green",children:t.jsx(D,{})}),"kpi-pps":t.jsx(Ne,{color:"pink",children:t.jsx(Fo,{})}),schedule:t.jsx(Ne,{color:"pink",children:t.jsx(Et,{})}),"version-update":t.jsx(Il,{}),"electronic-interaction":t.jsx(Ne,{color:"blue",children:t.jsx(qo,{})})}),Bv=p(Q)`
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
`,Hv=p.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Uv={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Wv={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},Vv={small:"0px",middle:"1px",large:"2px",big:"3px"},Rl=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:u,bottomMargin:h,closeAnimation:g=!0,loadingRemove:x=!1,canClose:m=!0,fullText:f=!0,maxLetters:b=200,size:y="middle"})=>{const P=le(o,"short"),{close:w}=ee(),[T,S]=l.useState(!1),N=I=>{I.stopPropagation(),I.preventDefault(),g?(S(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},z=()=>{a==null||a(),m&&kt.clearById({id:e,pageId:c}),w()};return t.jsx(Al,{forceState:!T,bottomMargin:h,children:t.jsxs(Bv,{to:d??"",onClick:z,children:[t.jsx("span",{className:"left-icon",children:Fv()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(se,{fontSize:"0.7rem",children:t.jsx(Le,{words:[P??"",s??""]})}),t.jsxs(C,{d:"column",gap:Vv[y],ai:"flex-start",children:[t.jsx(Hv,{fontSize:Uv[y],children:f?i:Yi(i,b)}),t.jsx(se,{fontSize:Wv[y],children:f?n:Yi(n,b)})]})]}),u&&t.jsx(_,{isActive:!(x&&T),icon:t.jsx(Xe,{}),background:"var(--theme-2)",onClick:N,style:{borderRadius:"20px"}})]})})},Ll=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{kt.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(C,{d:"column",children:e.map((o,a)=>l.createElement(Rl,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Ji=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,ao=({people:e,type:i})=>!e||e.length===0?null:t.jsx(C,{d:"column",children:e.map(n=>l.createElement(js,{name:n.fio,type:i,...n,key:n.id}))}),Gv=()=>{const{allRoutes:e}=Ve.useMenu(),{notifications:i,removeNotificationLoading:n}=Ze.useLkNotifications(),{data:{user:s}}=ve.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Pv.flatMap(({visible:z,content:I})=>z==="staff"&&o||z==="student"&&!o||z==="all"?I:[]),[o]),[r,c]=l.useState(null),[d,u]=l.useState(null),[h,g]=l.useState(null),[x,m]=l.useState(null),[f,b]=l.useState(null),[y,P]=l.useState(null),[w,T]=l.useState(null),S=[{title:"Разделы",content:t.jsx(mv,{pages:f,showNotFound:!1}),clear:()=>{b(null)},search:z=>{if(e){const I=bv(z,e);b(I)}},data:f},{title:"Студенты",content:t.jsx(ao,{people:x,type:"stud"}),data:x,clear:()=>{m(null)},search:async z=>{const{data:I}=await jh(z,"",1,20);m(I.items)}},{title:"Сотрудники",content:t.jsx(ao,{people:h,type:"staff"}),data:h,clear:()=>{g(null)},search:async z=>{const{data:I}=await bh(z,"",1,20);g(I.items)}},{title:"Группы",content:t.jsx($v,{groups:r}),data:r,clear:()=>{c(null)},search:async z=>{const{data:I}=await wh(z);c(I.items)}},{title:"Подразделения",content:t.jsx(kv,{divisions:d}),data:d,clear:()=>{u(null)},search:async z=>{const{data:I}=await yh(z);u(I.items)}},{title:"Уведомления",content:t.jsx(Ll,{notifications:y,loadingRemove:n}),clear:()=>{P(null)},search:z=>{const I=i.filter(K=>be(K.title).includes(z));P(I)},data:y},{title:"Полезная информация",content:t.jsx(Av,{blocks:w,isStaff:o}),clear:()=>{T(null)},search:z=>{const I=Cv(z,a);T(I)},data:w}];return[(()=>{const{content:z,clear:I,data:K}=S.reduce((R,ne)=>(Ji(ne.data)&&(R.data.push(ne.data),R.content.push(t.jsxs(t.Fragment,{children:[t.jsx(B,{size:4,align:"left",children:ne.title}),ne.content,t.jsx(ge,{})]}))),R.clear.push(ne.clear),R),{content:[],clear:[],data:[]});return{title:"Все",content:z,clear:()=>I.map(R=>R()),search:async R=>{R.length<=8&&/\d|[-]/g.test(R)?await S[3].search(R):(S[0].search(R),S[5].search(R),S[6].search(R),Ji(S[0].data)===0&&(await S[1].search(R),await S[2].search(R),await S[4].search(R)))},data:K}})(),...S]},qv=()=>JSON.parse(localStorage.getItem(Y.SearchHistory)??"[]"),Yv=()=>{const e=Gv(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>qv(),[]),r=async x=>{e[i].clear();const m=Ma(x)?za(x):x;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(Y.SearchHistory,JSON.stringify(a)))},[c,d,u]=Ua({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:x=>(o(x),x.length>0&&(s!==x||!e[i].data))}),h=!u&&!c.length,g=!!c.length&&!u&&!!Ji(e[i].data);return{showMessage:h,showSearchResult:g,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},Jv=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(As,{})})):e?n.filter(s=>be(s).includes(be(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(As,{})})):[],Xv=()=>t.jsxs(C,{gap:"8px",ai:"flex-start",children:[t.jsx(G,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(C,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(G,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(G,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),Kv=p.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,Qv=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=Yv(),u=Jv(r,n,d),{isOpen:h}=ee();return t.jsx(Kv,{children:t.jsxs(C,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ba,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(is,{pages:c.map(({title:g})=>({title:g})),currentPage:o,setCurrentPage:a}),t.jsx(Fa,{value:n,setValue:s}),e&&t.jsx(C,{h:"100%",children:t.jsx(ue,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Lt,{})})}),!r&&n.length!==0&&!e&&!Ji(c[o].data)&&t.jsx(C,{h:"100%",children:t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(No,{})})}),r&&Array(10).fill(0).map((g,x)=>t.jsx(Xv,{},x)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},Zv=p(Ke)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${Z.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,e1=p.div`
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
`,t1=p(C)`
    @media (max-width: 1000px) {
        display: none;
    }
`,i1=()=>{const e=Zg();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(Ko,{})},{key:"k"}],iOS:[],Android:[]}[e]},zl=({size:e="large"})=>{const i=i1(),{open:n}=ee(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(Qv,{}),"Глобальный поиск");return La(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Lt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(Zv,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(se,{align:"left",fontSize:"0.9rem",children:t.jsxs(C,{gap:"8px",children:[t.jsx(Lt,{}),"Поиск"]})}),t.jsx(t1,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(e1,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},Fn=e=>e.split(" ").map(i=>i[0]),Re=(e,i)=>{const n=Fn(e),s=j[Au[n[0]]];return s==null?void 0:s[i??"main"]},n1=p.div`
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
`,s1=p.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ci({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:u,icon:h,avatarModal:g,onClick:x,borderRadius:m,background:f}){const[b,y]=l.useState(!0),P=Fn(i)[0]+(Fn(i)[1]??""),{open:w}=ee(),T=S=>{g?w(t.jsx(Ci,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):x==null||x(S)};return t.jsxs(n1,{selected:e,width:s,height:o,marginRight:a,background:f??Re(i),boxShadow:d,border:u,onClick:T,borderRadius:m,children:[n&&b?t.jsx(s1,{loading:"lazy",round:!0,onLoadedData:()=>y(!0),onError:()=>y(!1),src:n}):t.jsx("div",{className:"name",children:P}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Je,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(jt,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const wT=p.header`
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
`;const kT=p.div`
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
`,o1=p.div`
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
`,ST=p.div`
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
`,TT=p.div`
    margin-top: 50px;
    width: 100%;
`,ET=p.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,$T=p(Ke)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,PT=p.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,a1=p.div`
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
`,r1=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(a1,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(fx,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},l1=p.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,c1=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(l1,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(r1,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Ml=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=ut(),{settings:o}=Bt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(jp,{}):t.jsx(wp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[g,x]=l.useState([{title:"Темная тема",state:n!=="light",action:f=>s(f)}]);l.useEffect(()=>{x([{title:"Темная тема",state:n!=="light",action:f=>s(f)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(f=>!f),i==null||i()};return e==="toggle"?t.jsx(c1,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:g,setToggles:x}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:m}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:j.white.transparent2,icon:t.jsx(o1,{width:"30px",background:j.green.main,children:d}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},d1=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(C,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(C,{gap:"16px",ai:"center",children:[t.jsx(G,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(C,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(G,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(G,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),p1=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,u1=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=Ze.useLkNotifications();return l.useEffect(()=>{o&&q.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{kt.clearAllVisible()},[]),t.jsxs(p1,{children:[s.length===0&&!n&&t.jsx(Ts,{height:"100%",children:t.jsx(ue,{text:i??"Нет новых уведомлений",image:i?t.jsx(ot,{}):t.jsx(kp,{}),size:"70px"})}),t.jsxs(C,{d:"column",gap:"16px",children:[t.jsx(te,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Ll,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(d1,{quantity:10})]})},h1=p.div`
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
`,Fl=()=>{const{close:e}=ee(),{notifications:i}=Ze.useLkNotifications(),n=3;return t.jsxs(C,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(C,{d:"column",gap:"16px",children:[t.jsx(u1,{maxNotificationsVisible:n}),t.jsxs(se,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Pl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Q,{to:_l,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},g1=()=>{const{notifications:e}=Ze.useLkNotifications(),{open:i}=ee(),n=()=>{i(t.jsx(Fl,{}),"Уведомления")};return t.jsxs(h1,{onClick:n,children:[t.jsx(jt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(tn,{})]})},x1=p.div`
    position: relative;
`,Bl=()=>{const{open:e}=ee(),{notifications:i}=Ze.useLkNotifications(),n=()=>ze.close(),s=()=>{tt.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:St.logout}),n()},o=()=>{ze.close(),e(t.jsx(mc,{}),"Что нового")},a=()=>{e(t.jsx(Fl,{}),"Уведомления"),ze.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Rj,{padding:"8px",size:"small"}),t.jsx(ge,{}),t.jsx(Ml,{type:"h-button"}),t.jsx(ge,{}),t.jsx(Q,{to:ms,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(Go,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(x1,{children:[t.jsx(_,{onClick:a,icon:t.jsx(tn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(jt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Q,{to:me,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(Wo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${L}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(en,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(ge,{}),t.jsx(_,{align:"left",icon:t.jsx(Sp,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(ge,{}),t.jsx(_,{align:"left",icon:t.jsx(Il,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},f1=p.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,m1=({showSearch:e=!1})=>{const{data:{user:i}}=ve.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),ze.open({e:s,height:143,content:t.jsx(Bl,{})})};return t.jsxs(f1,{children:[e&&t.jsx(zl,{size:"icon"}),t.jsx(g1,{}),t.jsx(Ci,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},b1=p.header`
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
    ${Z.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${Z.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,y1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,v1=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,_1=p.div`
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
        max-width: ${y1};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${Z.isTablet} {
        max-width: ${v1};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${Z.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,j1=()=>{const{pathname:e}=yi(),[i,n]=l.useState([e]),{action:s}=vi();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},w1=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=vi();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Mi,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},k1=({headerVisible:e,currentPage:i})=>{const n=vi(),s=j1(),o=e||!!(i!=null&&i.planeHeader),a=_r(i),r=(u=ri)=>()=>{Qe.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=re.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:re.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(w1,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Mi,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Mi,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Mi,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},S1=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=$i(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=k1({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(b1,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(_1,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(C,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(m1,{showSearch:!0})]})]})},T1=re.memo(S1),E1=p(Q)`
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
`,$1=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(G,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),ze.open({e:c,height:143,content:t.jsx(Bl,{})})};return t.jsxs(E1,{to:ms,children:[t.jsx(_,{icon:t.jsx(Yo,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ci,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(B,{size:5,children:e})]})},P1=re.memo($1),C1=["isCurrent","color"],O1=p(Q).withConfig({shouldForwardProp:e=>!C1.includes(e)})`
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

    ${Z.isTablet} {
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
`,A1=p.div`
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
`,D1=p.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,N1=p.button`
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
`,I1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(O1,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(jt,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(jt,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx($l,{route:e})]})},Hl=re.memo(I1),R1=()=>{const{isOpen:e}=Ve.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(Xe,{}),onClick:()=>Qe.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},L1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(N1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};re.memo(L1);p.section`
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
`;const z1=()=>{const{leftsideBarRoutes:e}=Ve.useMenu(),i=yi();return e?t.jsx(D1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Hl,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(C,{d:"column",children:[t.jsxs(C,{gap:"8px",children:[t.jsx(G,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(G,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(C,{gap:"8px",children:[t.jsx(G,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(G,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(C,{gap:"8px",children:[t.jsx(G,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(G,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(C,{gap:"8px",children:[t.jsx(G,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(G,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},M1=re.memo(z1),F1=()=>{const{isOpen:e}=Ve.useMenu(),{width:i,height:n}=cn(),{data:{user:s}}=ve.useUser(),{visibleRoutes:o}=Ve.useMenu(),a=yi();return t.jsxs(A1,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Q,{to:fs,children:t.jsx(ln,{width:"165px"})}),t.jsx(P1,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(zl,{size:"small"}),t.jsx(M1,{})]}),t.jsx(Ml,{type:"toggle"}),i<1e3&&t.jsx(R1,{})]})},B1=p.div`
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
`,H1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=fa.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{q.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),q.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(B1,{isOpen:e,isClickable:!!o,color:vt[n].color,onClick:a,children:t.jsx(te,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>q.openPopUpMessage({isOpen:!1}),children:i})})},gn=p.div`
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
`;const U1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(vs);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},W1=p.div`
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
`,V1=p.div`
    padding-top: 30px;
`,G1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=U1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return La(["Escape"],o),Ht(r,()=>{o()}),t.jsx(gn,{isOpen:c,children:t.jsxs(W1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(bi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(B,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(Xe,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(V1,{children:i})]})})},q1=re.memo(G1),Y1=p.div`
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
`,J1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=_a.useConfirm(),o=l.useRef(null);Ht(o,()=>tt.closeConfirm());const a=()=>{n(),tt.closeConfirm()},r=()=>{tt.closeConfirm()};return t.jsx(gn,{isOpen:e,children:t.jsxs(Y1,{isOpen:e,ref:o,children:[t.jsx(B,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Ee,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:j.red.main,background:"transparent",hoverBackground:j.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:j.blue.main,background:"transparent",hoverBackground:j.blue.transparent3})]})]})})},X1=p.div`
    display: flex;
    align-items: ${({align:e})=>An(e)};
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
`,K1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[u,h]=l.useState(i),{width:g}=cn(),x=l.useRef(null),m=()=>{var b;x!=null&&x.current&&h(Math.round(((b=x.current)==null?void 0:b.scrollLeft)/g))},f=b=>{var y;h(b),r==null||r((y=e[b])==null?void 0:y.id),x!=null&&x.current&&(x.current.scrollLeft=x.current.clientWidth*b)};return l.useEffect(()=>{f(u)},[i,g]),t.jsxs(X1,{width:n,align:c,maxWidth:o,children:[t.jsx(is,{pages:e.map(({title:b,condition:y})=>({title:b,condition:y})),currentPage:u,setCurrentPage:f,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:x,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ue,{text:"Нет данных"})},b.title))})]})},_s=K1,ro=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},lo=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Ul=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},Q1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},Z1=p.div`
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
`,e_=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Z1,{width:i,height:n,color:Re(e,"dark1"),color2:Re(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Re(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Re(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Re(e,"light2")})})]})}),t_=p.div`
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
`,i_=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:u,isMe:h=!1,noInfo:g=!1})=>{const x=g?"140px":"110px",m=Ul(h,n,s,o);return t.jsxs(t_,{children:[t.jsx(e_,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ci,{avatarModal:!0,border:!0,name:i,avatar:e,width:x,height:x,marginRight:"0"}),!g&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(se,{fontSize:"0.9rem",children:t.jsx(Le,{words:m})}),t.jsx(ft,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(ft,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(ft,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(ft,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(ft,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},n_=p.div`
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

    ${Z.isMobile} {
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
`,Wl=e=>{const{children:i}=e;return t.jsxs(n_,{children:[t.jsx(i_,{...e}),t.jsx("div",{className:"buttons",children:i})]})},s_=p.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,o_=()=>t.jsxs(s_,{children:[t.jsx(G,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(G,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(G,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Vl=e=>{if(e)return()=>{tt.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(Y.Token,e),location.reload()}})}},a_=e=>{const{close:i}=ee(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Re(s,"main")}, ${Re(s,"dark1")})`;return t.jsxs(Wl,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Q,{to:hn(Pi,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(Et,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(Xn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Vl(n)})]})},r_=e=>{const{close:i}=ee(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Re(s,"dark1")}, ${Re(s,"main")})`;return t.jsxs(Wl,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Q,{to:hn(Pi,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(Et,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(Xn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Vl(n)})]})},l_=p.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?Q1(i):"100%"};

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
`,js=e=>{const{open:i}=ee(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:u,isMe:h=!1,loading:g=!1,orientation:x="horizontal",size:m="middle"}=e,f=Ul(h,n,d,u);if(g)return t.jsx(o_,{});const b=y=>{r?r(y):h||(ze.close(),i(n==="staff"?t.jsx(r_,{...e}):t.jsx(a_,{...e})))};return t.jsxs(l_,{orientation:x,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ci,{name:o,avatar:s,width:lo(x,m),height:lo(x,m),marginRight:x==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Le,{words:f})})]})]})},Xi=e=>{const i=be(e),s=[{keys:["распознаван"],icon:t.jsx(Ep,{})},{keys:["принт"],icon:t.jsx($p,{})},{keys:["химич"],icon:t.jsx(Pp,{})},{keys:["сервер"],icon:t.jsx(Cp,{})},{keys:["игр"],icon:t.jsx(Op,{})},{keys:["жизнед"],icon:t.jsx(Ap,{})},{keys:["web","веб"],icon:t.jsx(Dp,{})},{keys:["истор"],icon:t.jsx(Np,{})},{keys:["информат"],icon:t.jsx(Ip,{})},{keys:["информации"],icon:t.jsx(Tt,{})},{keys:["мобильн"],icon:t.jsx(Rp,{})},{keys:["безопасн"],icon:t.jsx(Lp,{})},{keys:["автоматиз"],icon:t.jsx(zp,{})},{keys:["линейн"],icon:t.jsx(Mp,{})},{keys:["обработ"],icon:t.jsx(Fp,{})},{keys:["презентац"],icon:t.jsx(Bp,{})},{keys:["операционн"],icon:t.jsx(Ko,{})},{keys:["эконом"],icon:t.jsx(at,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(Hp,{})},{keys:["анализ"],icon:t.jsx(Up,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Wp,{})},{keys:["сети","сетей"],icon:t.jsx(Vp,{})},{keys:["матем"],icon:t.jsx(Gp,{})},{keys:["вероятн"],icon:t.jsx(qp,{})},{keys:["философ"],icon:t.jsx(Qo,{})},{keys:["данны"],icon:t.jsx(Yp,{})},{keys:["язык"],icon:t.jsx(Jp,{})},{keys:["спорт","физичес"],icon:t.jsx(Xp,{})},{keys:["проектная"],icon:t.jsx($n,{})},{keys:["интеллект"],icon:t.jsx(Kp,{})},{keys:["научн"],icon:t.jsx(Qp,{})},{keys:["предприним"],icon:t.jsx(Zp,{})},{keys:["коммуникац"],icon:t.jsx(eu,{})},{keys:["управлени"],icon:t.jsx(Kn,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Ho,{})},{keys:["переработ"],icon:t.jsx(tu,{})},{keys:["машин","инжен"],icon:t.jsx(iu,{})},{keys:["проектир","расчет"],icon:t.jsx(nu,{})},{keys:["производ"],icon:t.jsx(Ro,{})},{keys:["эколог"],icon:t.jsx(su,{})},{keys:["защит"],icon:t.jsx(ou,{})},{keys:["патент"],icon:t.jsx(au,{})},{keys:["материал"],icon:t.jsx(ru,{})},{keys:["физик"],icon:t.jsx(lu,{})},{keys:["тайм"],icon:t.jsx(cu,{})},{keys:["практика"],icon:t.jsx(Zo,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(Tp,{})},Bn={"9:00 - 10:30":j.green,"10:40 - 12:10":j.lightGreen,"12:20 - 13:50":j.blue,"14:30 - 16:00":j.purple,"16:10 - 17:40":j.pink,"17:50 - 19:20":j.red,"18:20 - 19:40":j.orange,"19:30 - 21:00":j.orange,"19:50 - 21:10":j.orange},Gl=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},c_=p.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,xn=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},d_=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=xn(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},ql=(e,i,n)=>d_(e)===xn(i.startTime)&&n,xi=e=>e<=9?"0"+e:e,p_=e=>`${xi(Math.floor(e/60))}:${xi(e%60)}`,co=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},u_=p.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${Z.isMobile} {
        width: calc(100% + 40px);
    }
`,h_=p.div`
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
`,g_=p(C)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${Z.isMobile} {
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

    ${Z.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,x_=p(se)`
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
`,m_=p.div`
    color: ${j.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${Z.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,b_=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(co(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(co(new Date,s[0]*60,s[1]*60))},Qn.minute),()=>clearInterval(c.current)),[e]),t.jsx(f_,{currentTime:(a-i)*n,children:o&&t.jsx(m_,{children:p_(a)})})},Yl=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},$e=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(g_,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(po,{shortInfo:o,children:e}),t.jsx(x_,{width:"100%",className:"text",children:i}),t.jsx(po,{shortInfo:o,children:s})]}),y_=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,v_=p(Q)`
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
`,__=({groups:e})=>{const{close:i}=ee();return t.jsx(y_,{children:e.map(n=>t.jsxs(v_,{to:hn(Pi,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(zt,{}),n]}),t.jsx(dt,{})]},n))})},j_=({icon:e,background:i,noPadding:n=!1})=>t.jsx(u_,{background:i,noPadding:n,children:t.jsxs(h_,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),w_=p.div`
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
`,k_=({subjectName:e,color:i,noPadding:n})=>{const s=Xi(e),{theme:o}=ut(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(w_,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(j_,{noPadding:n,icon:s,background:r}),t.jsx(gt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},S_=du`
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
		height: 100vh;
	}

	body {
		overflow: hidden;
		min-height: 100vh;
    	min-height: -webkit-fill-available;
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
`,T_=({color:e,start:i})=>`
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
}`,E_=p.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${T_}
`,$_=p.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,P_=p.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${Z.isMobile} {
        font-size: 0.7rem;
    }
`,Jl=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=ut(),o=s==="light"?i.main:i.light2;return t.jsxs($_,{children:[t.jsx(E_,{start:n,color:o}),e&&t.jsx(P_,{children:e})]})},C_=p.div`
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
`,O_=p(C)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,A_=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:u,weekday:h,isNextEvent:g,isCurrentEvent:x,noPadding:m=!1}=e,f=(d==null?void 0:d.split(","))??[],{open:b}=ee(),y=()=>{f.length===1?b(t.jsx(Ol,{group:f[0]})):b(t.jsx(__,{groups:f}),"Группы")},P=()=>{b(t.jsx(N_,{place:s,link:r,name:n}))},w=Yl(n);return t.jsxs(C_,{children:[t.jsx(k_,{subjectName:n,color:u,noPadding:m}),t.jsxs(O_,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(C,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(C,{gap:"8px",children:[t.jsx(Jl,{isCurrentEvent:x,color:u,timeInterval:i}),t.jsx(Xl,{timeLeft:xn(i.split(" - ")[0],"minutes"),isNext:g,color:u,isCurrentEvent:x})]}),t.jsx(B,{size:3,align:"left",width:"fit-content",children:w.name})]}),t.jsx(ge,{margin:"0",width:"100%"}),t.jsx($e,{icon:t.jsx(Jn,{}),text:t.jsx(Le,{words:[h??"",a]})}),((r==null?void 0:r.length)||w.link)&&t.jsx("a",{href:r??w.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{icon:t.jsx(Ui,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx($e,{icon:t.jsx(Zo,{}),text:s}),!!c.length&&t.jsx($e,{icon:t.jsx(Pn,{}),text:t.jsx(Le,{words:c})}),!!f.length&&t.jsx($e,{onClick:y,icon:t.jsx(Kn,{}),text:t.jsx(Le,{words:f}),rightIcon:t.jsx(dt,{})}),t.jsx(C,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(B,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(T=>t.jsx(js,{type:"staff",name:T},T))]})}),!r&&t.jsx(ge,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:P})]})]})};p.span`
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
`;const D_=p.a`
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
`,zi=({title:e,link:i,image:n})=>i?t.jsxs(D_,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(B,{size:3,children:e})]}):null,uo=p.div`
    ${Z.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,N_=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(uo,{children:t.jsx(C,{jc:"center",children:t.jsx(Pt,{})})}):t.jsx(uo,{children:e==="Webex"?t.jsx(zi,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(zi,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(zi,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(zi,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},ho=p.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Xl=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=ut(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(ho,{background:c,color:r,children:"Сейчас"}):t.jsxs(ho,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},I_=p.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,CT=()=>t.jsxs(I_,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(G,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(G,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(G,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(G,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(G,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(G,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),Kl="/assets/sleep-54d590c1.gif";var Ql=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Ql||{});const R_=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],OT=[...R_,{title:"Месяц",condition:!0}],yt=Object.keys(Dt).reduce((e,i)=>(e[i]=[],e),{}),L_={schedule:{today:[],week:{...yt},semestr:{data:{...yt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...yt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},z_=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},fi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Ki=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Ki||{});const Zl=e=>{const[i,n]=e.split(" "),s=Ki[n],o=s<8?new Date().getFullYear()+1:new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},ec=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Ki[o],r=Ki[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},ti=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:u,groups:h})=>{const[g,x]=r.split(" - "),m=fi(x)-fi(g),[f,b]=d.split("-").map(w=>w.trim()),y=Zl(f),P=ec(b,f);return{title:o,people:a,startTime:g,duration:m,startDate:y,endDate:P,placeIcon:t.jsx(pu,{}),dateInterval:d,color:Bn[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Xi(o)}}):[],M_=e=>new Date(e.setHours(0,0,0,0)),go=(e,i)=>(e??[]).filter(n=>{const s=M_(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=Zl(o),c=ec(a,o);return s>=r&&s<=(c??r)}),tc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),Hn=e=>e instanceof Date&&isFinite(+e),F_=e=>{const i={...yt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!Hn(n)||!Hn(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=tc(a);if(r==="sunday")continue;i[r]=ti(e[o].lessons,Dt[r].short)}return{schedule:i,startDate:n,endDate:s}},ic=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),nc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const g=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return q.evokePopUpMessage({message:g,type:"failure",time:Qn.ten_seconds}),{schedule:L_.schedule,errorInData:g}}const o=new Date;let a=z_(o);o.getDay()===0&&(a=ic(o,1));const r={...yt},c={...yt};for(const g in e)if(g!=="Sunday"){const x=g.toLocaleLowerCase(),f=e[g];"lessons"in f?(r[x]=ti(go(f.lessons,a),Dt[x].short),c[x]=ti(f.lessons,Dt[x].short)):(r[x]=ti(go(f,a),Dt[x].short),c[x]=ti(f,Dt[x].short)),n=new Date(Math.min(...c[x].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[x].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),u=r[d],h=F_(i);return{schedule:{today:u,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},sc=async e=>{const i=await Wu(e),n=await Gu();return nc(i.data,n.data)},oc=async e=>{const i=await Vu(e),n=await qu(e);return nc(i.data,n.data)},xo={data:{schedule:null,externalSchedule:null,view:Ql.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},B_=()=>V(ce),wt=M(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await oc(n);if(i&&s==="stud")return await sc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),qt=M(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await sc(e)}catch(i){throw new Error(i.message)}}),Yt=M(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await oc(e)}catch(i){throw new Error(i.message)}}),H_=k(),ac=k(),rc=k(),lc=k(),cc=k(),dc=k(),pc=k(),ce=J(xo).on(wt,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(wt.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(ac,(e,i)=>({...e,data:{...e.data,view:i}})).on(rc,(e,i)=>({...e,currentChosenDay:i.day})).on(lc,()=>({...xo}));O({clock:wt.doneData,source:ce,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(yt)}}),target:ce});O({clock:cc,source:ce,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:ce});O({clock:dc,source:ce,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:ce});O({clock:Yt.doneData,source:ce,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:ce});O({clock:qt.doneData,source:ce,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:ce});O({clock:[qt,Yt,wt],source:ce,fn:e=>({...e,loading:!0}),target:ce});O({clock:[qt,Yt],source:ce,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:ce});O({clock:[qt.doneData,Yt.doneData,wt.doneData],source:ce,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:ce});O({clock:[qt.failData,Yt.failData,wt.failData],source:ce,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:ce});O({clock:pc,source:ce,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:ce});const ws={useSchedule:B_},U_={changeCurrentModule:H_,changeView:ac,changeCurrentChosenDay:rc,clearStore:lc,resetExternalSchedule:pc,setSearchValue:dc,setFilter:cc},W_={getScheduleFx:wt,getGroupScheduleFx:qt,getTeacherScheduleFx:Yt},V_=Object.freeze(Object.defineProperty({__proto__:null,effects:W_,events:U_,selectors:ws},Symbol.toStringTag,{value:"Module"})),G_=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${xi(Math.floor(o/60))}:${xi(o%60)}`},uc=(e,i)=>e?`${e} - ${G_(e,i)}`:"9:00",Un=e=>!e||!Hn(e)?0:e.getHours()*60+e.getMinutes(),ks=(e,i)=>fi(e.startTime)<=Un(new Date)&&Un(new Date)<=fi(e.startTime)+e.duration&&i,hc=()=>{const{open:e}=ee();return n=>{const s=uc(n.startTime,n.duration);e(t.jsx(A_,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:ks(n,!0),noPadding:!0,...n}))}},fo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},q_=()=>{const{currentDevice:e}=$i(),[i,n]=l.useState(fo[e]);return l.useEffect(()=>{n(fo[e])},[e]),i},Y_=p.div`
    --time-width: 55px;

    ${Z.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${Z.isMobile} {
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
`,J_=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=q_(),o=hc(),a=[9,22];return e!=null&&e.length?t.jsx(Y_,{children:t.jsx(fc,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ue,{text:"В этот день пар нет",image:Kl})},gc=()=>{const{data:{schedule:e}}=ws.useSchedule(),{open:i}=ee(),n=ic(new Date,1),s=Cr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=tc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(J_,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},X_=p.div`
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
`,AT=({errorInData:e})=>t.jsxs(X_,{children:[t.jsx("img",{src:Kl,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(gc,{})]});p.div`
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
`;const K_=(e,i,n)=>i?e?1:.8:n?1:0,Q_=e=>e?1:.9;p.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>K_(e,i,n)};
    transform: scale(${({isVisible:e})=>Q_(e)});
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
`;const Z_=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,DT=()=>t.jsxs(Z_,{children:[t.jsx(Da,{size:"38px"}),t.jsx(B,{size:4,children:"Учебный день завершился"}),t.jsx(gc,{})]});p.div`
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
`;p(Q)`
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
`;const ej=e=>{const[i,n]=e.split(":");return+i*60+ +n},xc=(e,i,n)=>e?(ej(e)-i)*n:0,tj=p.div`
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

    ${Z.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;p.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${Z.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const ij=p(C)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${Z.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,nj=p.span`
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

    ${Z.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,sj=p.div`
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
`,oj=p(C)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,aj=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:u,onClick:h,link:g,rooms:x,dateInterval:m,leftShift:f,quantity:b,groups:y,isCurrentEvent:P=!1,nameInOneRow:w=!0,isNextEvent:T=!1,listView:S=!1,shortInfo:N=!1}=e,{theme:z}=ut(),{isMobile:I}=$i(),K=z==="light"?d.dark3:d.light3,R=z==="light"?d.transparent1:d.transparent2,ne=()=>h(e),he=(I||b>1)&&N,ke=I&&b>=2&&N,Be=r==null?void 0:r.map(He=>{var Ai,Di;const Jt=He.split(" ");return`${Jt[0]??""} ${((Ai=Jt[1])==null?void 0:Ai[0])??""}.${((Di=Jt[2])==null?void 0:Di[0])??""}.`}),Ge=xc(o,c,u),pe=Yl(i),De=ke?i.split(" ").map(He=>He[0].toUpperCase()):Yi(pe.name,N?he?43:35:w?300:64),Oi=(y==null?void 0:y.split(","))??[];return t.jsxs(tj,{background:R,textColor:K,listView:S,leftShift:100*f,quantity:100/b,duration:n,scale:u,top:Ge,onClick:ne,shortInfo:N,children:[t.jsx(sj,{children:s}),t.jsx(C,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(ij,{scale:u,d:"column",ai:"flex-start",shortInfo:N,children:[t.jsxs(C,{d:"column",gap:"2px",children:[!N&&t.jsxs(C,{gap:"8px",children:[t.jsx(Jl,{timeInterval:uc(o,n),color:d,isCurrentEvent:P}),t.jsx(Xl,{timeLeft:xn(o,"minutes"),isNext:T,color:d,isCurrentEvent:P}),!!(x!=null&&x.length)&&t.jsx($e,{shortInfo:N,icon:I&&b>1?void 0:t.jsx(Pn,{}),text:t.jsx(Le,{words:x})}),(!!g||pe.link)&&t.jsx("a",{href:g??pe.link,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:N,icon:t.jsx(Ui,{}),text:g?a:"Cсылка"})}),!!Oi.length&&t.jsx($e,{icon:t.jsx(Kn,{}),text:t.jsx(Le,{words:Oi})})]}),t.jsx(nj,{listView:S,nameInOneRow:w,scale:u,shortInfo:N,children:De})]}),!!r.length&&!he&&t.jsx($e,{shortInfo:N,text:t.jsx(Le,{words:N?[Be[0]]:Be}),icon:t.jsx(uu,{})}),!!(x!=null&&x.length)&&N&&!he&&t.jsx($e,{shortInfo:N,icon:t.jsx(Pn,{}),text:t.jsx(Le,{words:x})}),!!g&&N&&!he&&t.jsx("a",{href:g,target:"_blank",rel:"noreferrer",children:t.jsx($e,{shortInfo:N,icon:t.jsx(Ui,{}),text:a})}),!!m&&!he&&t.jsx(C,{gap:"5px",children:t.jsx($e,{shortInfo:N,icon:t.jsx(Jn,{}),text:m})})]})})]})},rj=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},lj=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:u})=>{const h=rj(e),g=u??new Date().getDay()===o,x=d!==void 0?d+1===o:void 0;return t.jsxs(oj,{h:"100%",d:"column",children:[g&&t.jsx(b_,{isVisible:x,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((m,f)=>h[m].map((b,y)=>l.createElement(aj,{leftShift:y,quantity:h[m].length,scale:n,isCurrentEvent:ks(b,g),isNextEvent:ql(e,b,g),...b,onClick:c,shift:i,key:b.startTime+b.title+f+y,shortInfo:s})))]})},cj=p(C)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,dj=p.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,pj=p.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,uj=p(se)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${Z.isMobile} {
        font-size: 0.65rem;
    }
`,hj=Array(24).fill(0).map((e,i)=>`${xi(i)}:00`),gj=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):hj.slice(e[0],e[1]+1);return t.jsx(cj,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(dj,{children:[t.jsx(uj,{children:o}),t.jsx(pj,{})]},o))})},fc=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Gl({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var u;return xc((u=i==null?void 0:i[0])==null?void 0:u.startTime,o,n)}});return t.jsxs(c_,{className:"calendar-wrapper",ref:d,children:[t.jsx(gj,{interval:e,scale:n}),t.jsx(lj,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},xj=p.div`
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
`,fj=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=ee();return o?t.jsxs(xj,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Q,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},mj=p.div`
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
`,bj=p.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,yj=p(se)`
    margin-bottom: 20px;
`,vj=({image:e,list:i,text:n})=>{const{isMobile:s}=$i();return t.jsxs(mj,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(B,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(yj,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(bj,{children:i==null?void 0:i.map(o=>l.createElement(fj,{...o,key:o.title}))})]})},_j=p.div`
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
`,jj=p.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,wj=()=>t.jsx(jj,{children:t.jsx(fc,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Bn["16:10 - 17:40"],icon:Xi("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Bn["17:50 - 19:20"],icon:Xi("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),mc=()=>{const[e,i]=l.useState(0),{close:n}=ee(),s=[t.jsx(vj,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(wj,{})}},"schedule")];return t.jsxs(_j,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(Ga,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>ct(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:j.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>ct(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},kj=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return fi(i.startTime)+i.duration<Un(new Date)}},Sj=()=>{var u,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=ws.useSchedule(),o=hc(),a=((u=e==null?void 0:e.today)==null?void 0:u.length)===0||!(e!=null&&e.today),r=kj(e==null?void 0:e.today),c=Gl({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:g=>{var x,m;return g.clientHeight*(r?((x=e==null?void 0:e.today)==null?void 0:x.length)??0:((m=e==null?void 0:e.today)==null?void 0:m.findIndex(f=>ks(f,!0)||ql(e.today,f,!0)))??0)}}),d=()=>q.evokePopUpMessage({message:n??"",type:"failure",time:Qn.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},mo=p(rn)`
    position: absolute;
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

    ${Z.isTablet} {
        display: flex;
    }
`,Qt=()=>t.jsxs(C,{d:"column",gap:"8px",children:[t.jsx(G,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(G,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),Tj=()=>{const{allRoutes:e}=Ve.useMenu(),{data:{user:i}}=ve.useUser(),{hasNoSchedule:n,loading:s}=Sj(),o=yi();if(!e||!i||s)return t.jsxs(mo,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(Qt,{}),t.jsx(Qt,{}),t.jsx(Qt,{}),t.jsx(Qt,{}),t.jsx(Qt,{})]});const a=(i==null?void 0:i.user_status)==="stud"?Nk:n?Rk:Ik;return t.jsx(mo,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Hl,{...e[r],isCurrent:c},r)})})},Ej=(e,i,n)=>({isOpen:i,message:e,position:n}),bo={hints:[]},$j=()=>V(Pj),bc=k(),yc=k(),vc=k(),Pj=J(bo).on(bc,(e,{message:i,position:n})=>({hints:[...e.hints,Ej(i,e.hints.length===0,n)]})).on(yc,e=>({hints:e.hints.splice(1,e.hints.length)})).on(vc,()=>({...bo})),Cj={useHint:$j},Oj={evoke:bc,close:yc,clearStore:vc},Aj=p.div`
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
`,Dj=()=>{const{hints:e}=Cj.useHint(),i=e[0];return i?t.jsx(Aj,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(te,{type:"hint",title:i.message,onClose:()=>Oj.close(),width:"100%",icon:null})}):null},Nj=p.div`
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
`,Ij=50;function NT({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Ij}){const{data:{user:u}}=ve.useUser();let h="";const g=l.useCallback(x=>{const m=x.currentTarget.clientHeight,f=x.currentTarget.scrollHeight,b=x.currentTarget.scrollTop;f-d<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ue,{text:"Нет результатов",children:c}):t.jsxs(Nj,{onScroll:g,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((x,m)=>{var b,y;const f=r?h!==((b=x.fio)==null?void 0:b.charAt(0)):!1;return f&&(h=((y=x.fio)==null?void 0:y.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[f&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(B,{size:4,align:"left",children:h}),t.jsx(ge,{})]}),i(x,(u==null?void 0:u.id.toString())===x.id,m)]})})}),n&&s&&t.jsx(Pt,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}p.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Rj=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ve.useUser();return ee(),t.jsxs(Ee,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(se,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(js,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},_c=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>be(a.title).includes(be(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Lj=()=>{const e=A?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Ic,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:id,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Rc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Lc,title:"Справка-вызов"},{link:Jc,title:"Заявление на пересдачу для получения диплома с отличием"},{link:td,title:"Запрос на изменение персональных данных"},{link:Yc,title:"Запрос на восстановление магнитного пропуска"},{link:Oc,title:"Уточнение паспортных данных"},{link:nd,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:sd,title:"Предоставление каникул в связи с окончанием университета"},{link:od,title:"Предоставление академического отпуска"},{link:ad,title:"Выход из академического отпуска"},{link:rd,title:"Отчисление по инициативе обучающегося"},{link:ld,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:zc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Mc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Fc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Hc,title:"Предоставление права проживания льготной категории граждан"},{link:Bc,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Uc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Vc,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Gc,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Wc,title:"Расторжение договора найма"},{link:qc,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:na,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Qc,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Zc,title:"Заявка на материальную помощь"},{link:Nc,title:"Оформить социальную стипендию"},{link:ed,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:A,links:[{link:Xc,title:"Отправить документы воинского учета"},{link:Kc,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:A,links:[{link:Wn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Wn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Cu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Ac,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:A,links:[{link:Dc,title:"Трудоустройство студентов"}]}]},zj=()=>[{title:"Цифровые сервисы",links:[{link:Ur,title:"Справка о стаже работы"},{link:Vr,title:"Копия трудовой книжки"},{link:Gr,title:"Копии документов из личного дела"},{link:qr,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{title:"Общее",links:[{link:Ar,title:"Актуализация контактных данных"},{link:Dr,title:"Анкета для сверки данных"}]},{title:"ИТ-обслуживание",links:[{link:Ir,title:"Получение нового компьютерного оборудования"},{link:Rr,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Lr,title:"Обслуживание принтеров, МФУ"},{link:zr,title:"Вопрос по СЭД Directum и 1С"},{link:Mr,title:"Вопрос по Личному кабинету"},{link:Fr,title:"Прочее ИТ-обслуживание"}]},{title:"Отдел кадров",links:[{link:Br,title:"Справка с места работы"},{link:Hr,title:"Справка с места работы для предоставления в визовый центр"},{link:Wr,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Бухгалтерия",links:[{link:Kr,title:"Справка по форме 2-НДФЛ"},{link:Qr,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Yr,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Zr,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",links:[{link:tl,title:"Предоставление права проживания в жилом помещении"},{link:il,title:"Временное размещение гостей в студгородке"},{link:nl,title:"Проход гостей на территорию студенческого городка"},{link:sl,title:"Переселение"},{link:ol,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",links:[{link:al,title:"Выдача пропуска (повторная)"},{link:rl,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",links:[{link:ll,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",links:[{link:Nr,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Xr,title:"Курьер"}]},{title:"Мобилизационный отдел",links:[{link:cl,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:dl,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",links:[{link:Jr,title:"Произвольный запрос"},{link:na,title:"Вступить в Профсоюз",isExternalLink:!0}]}],Mj=()=>[{title:"",links:[{link:el,title:"Заявление на трудоустройство по совместительству"},{link:In,title:"Заявление на увольнение"},{link:zn,title:"Заявление о привлечении к работе в выходной день"},{link:Rn,title:"Заявление о предоставлении отпуска"},{link:Ln,title:"Заявление о переносе отпуска"},{link:Mn,title:"Заявление о диспансеризации"},{link:Hi,title:"Заявление на перевод"}]}],Fj=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Bj=p.div`
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
`,IT=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=ee(),s=e?zj():Lj(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(Bj,{children:[t.jsx(Wa,{whereToSearch:s,searchEngine:_c,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(d=>{if(!d.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(B,{size:4,align:"left",bottomGap:!0,children:d.title}),t.jsx("div",{className:"links",children:d.links.map((u,h)=>{if(!(u.disabled||!Fj(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Q,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},d.title)}),!(r!=null&&r.length)&&!!o.length&&t.jsx(ue,{text:`По запросу ${o} ничего не найдено`})]})})]})},Hj=p.div`
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
`,Uj=p.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,RT=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=ee(),s=Mj(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(ht,{load:()=>Ye.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(un,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Tt,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Hj,{children:[t.jsx(B,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Wa,{whereToSearch:s,searchEngine:_c,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(Uj,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Q,{to:u.link,onClick:n,children:u.title},u.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ue,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Wj=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let u=0;u<d.files.length;u++)c[(d==null?void 0:d.fieldName)+`[${u}]`]=d.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),yo={isOpen:!1,pages:[],currentPage:0},Vj=()=>V(Gj),jc=k(),wc=k(),kc=k(),Sc=k(),Gj=J(yo).on(jc,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(wc,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(kc,(e,{value:i})=>({...e,currentPage:i})).on(Sc,()=>({...yo})),Ss={useStory:Vj},mt={open:jc,close:wc,clearStore:Sc,changeCurrentPage:kc};p(Ke)`
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
`;const qj=p.div`
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
`,Ts=qj,Yj=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[c,d]=l.useState(r===void 0),[u,h]=l.useState(!a),[g,x]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return q.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!c&&!n.find(w=>!!w.find(T=>!T.value&&T.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(w=>!!w.find(T=>!T.value&&T.required))&&!n.find(w=>!!w.find(T=>{var S;return T.value.id==="not-chosen"&&!!((S=T.items)!=null&&S.length)}))?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):q.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!c&&!n.find(w=>!w.value&&w.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(w=>!w.value&&w.required)&&!n.find(w=>{var T;return w.value===null&&!!((T=w.items)!=null&&T.length)})?(s(w=>(w.confirmed=!0,{...w})),d(!1),h(!1)):q.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},f=()=>{s(w=>{const T=w.default[0].map(S=>({fieldName:S.fieldName??"",title:S.title,value:S.type==="select"&&(S!=null&&S.items)?null:"",type:S.type,items:S.items,width:S.width,required:S.required}));return{...w,data:[...w.data,T]}})},b=w=>{s(T=>{const S=T.data.filter((N,z)=>w!==z);return{...T,data:S}})},y=w=>{s(T=>(T.documents&&(T.documents.files=[...w]),{...T}))},P=()=>{i&&(i.value=!i.value),s(w=>({...w,optionalCheckbox:i}))};return l.useEffect(()=>{h(!g&&o?!1:!a)},[g,a]),{openArea:u,changeInputArea:c,included:g,setOpenArea:h,setIncluded:x,setChangeInputArea:d,handleRemove:b,handleAddNew:f,handleLoadFiles:y,handleConfirm:m,handleCheckbox:P}},Jj=p.div`
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
`,Xj=p.div``,Kj=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Xj,{children:[t.jsx(B,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:u},h)=>t.jsx(Ox,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:g=>s(g,h)},docVisible:d==="straight"?o:!o},a))]}),Qj=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(B,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Ee,{children:[!a&&t.jsx(Je,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Je,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),Zj=p.div`
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
`,ew=({title:e,value:i,visible:n})=>n?t.jsxs(Zj,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,tw=p.div`
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
`,iw=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(tw,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(hu,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Qo,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,nw=p.div`
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
`,sw=({title:e,visible:i})=>i?t.jsx(nw,{children:t.jsx("span",{className:"title",children:e})}):null,ow=p.div`
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
`,aw=p.ul`
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
`,rw=p.li`
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
`,lw=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:u=!0,inputAppearance:h=!0,suggestions:g})=>{const[x,m]=l.useState([]),[f,b]=l.useState(!0);return l.useEffect(()=>{if(e){const y=g.filter(P=>P.toLowerCase().includes(e.toLowerCase()));m(y)}else m([])},[e,g]),t.jsxs(ow,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(B,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:y=>{i(y.target.value),b(!0)},placeholder:c}),x.length>0&&t.jsx(aw,{width:"100%",isOpen:f,className:f?"open":"close",itemsAmount:x.length,title:s,children:x.map((y,P)=>t.jsx(rw,{isSelected:!1,onClick:()=>{i(y),m([]),b(!1)},children:y},P))})]})]})},cw=p.div`
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
`,dw=({title:e,visible:i})=>i?t.jsx(cw,{children:t.jsx("span",{className:"title",children:e})}):null,vo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:u,documents:h,changeInputArea:g,setData:x,mask:m,editable:f,placeholder:b,autocomplete:y,isSpecificRadio:P,specialType:w,specialFieldsNameConfig:T,minValueInput:S,maxValueInput:N,maxValueLength:z,diff:I,visible:K=!0,onChange:R,onKeyPress:ne,onBlur:he,onKeyDown:ke,onKeyUp:Be,onFocus:Ge}=e,pe=f??(g&&!h),[De,Oi]=l.useState(!0),He=(W,de,Ot)=>{R==null||R(W),x(_e=>(Array.isArray(_e.data[0])?_e.data[de][Ot??0].value=W:_e.data[de].type==="checkbox-docs"?_e.data[de].items[Ot??0].value=!!W:_e.data[de].value=W,{..._e}))},Jt=(W,de,Ot)=>{R==null||R(W),x(_e=>(Array.isArray(_e.data[0])?_e.data[de][Ot??0].value=W:_e.data[de].value=W,{..._e}))},Cs=(W,de,Ot)=>{x(_e=>(_e.data[de].items[Ot??0].files=W,{..._e}))},Ai=W=>{R==null||R(W),x(de=>(de.data[o].value=W,{...de}))},Di=W=>{R==null||R(W),ne==null||ne(W),he==null||he(W),ke==null||ke(W),Be==null||Be(W),Ge==null||Ge(W),x(de=>(de.data[o].value=W,{...de}))};return T&&w&&!Object.values(T).includes(w)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Je,{text:u,isActive:pe,checked:i,setChecked:W=>He(W,o,a)}):r==="hr-checkbox"?t.jsx(iw,{text:u,isActive:pe,checked:i,setChecked:W=>He(W,o,a)}):r==="auto-complete-input"?t.jsx(lw,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:W=>He(W,o,a)}):r==="textarea"?t.jsx(Dg,{value:i,title:u,setValue:W=>He(W,o,a),isActive:pe,textAreaAppearance:pe,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(Kj,{title:u,items:d,setChecked:(W,de)=>He(!W,o,de),setFiles:(W,de)=>Cs(W,o,de)}):r==="date-interval"?K?t.jsx(Ja,{title:u,required:n,dates:i,setDates:W=>Di(W),valid:De,setValid:Oi,minValue:S,diff:I}):null:r==="simple-text"?t.jsx(ew,{title:u,value:i,visible:K}):r==="text-warning"?t.jsx(dw,{title:u,visible:K}):r==="text-header"?t.jsx(sw,{title:u,visible:K}):r==="radio"?t.jsx(Qj,{buttons:d,title:u,required:n,current:i,setCurrent:Ai,isSpecificRadio:P}):K?t.jsx(lt,{value:i,title:u,minValue:S,maxValue:N,maxLength:z,setValue:W=>He(W,o,a),type:r,isActive:pe,inputAppearance:pe,placeholder:b??u,required:n,mask:m,width:s,autocomplete:y}):null:K?t.jsx(er,{items:d,setSelected:W=>Jt(W,o,a),selected:i,isActive:pe,title:u,width:s,multiple:r==="multiselect",required:n}):null},pw=p.div`
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
`,uw=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(pw,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(B,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Lo,{}):t.jsx(zo,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Je,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(we,{}),onClick:()=>null,background:"transparent",flipped:c})]}),hw=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(ot,{}),textColor:j.red.main,hoverBackground:j.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(gu,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(ot,{}),textColor:j.red.main,hoverBackground:j.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(xu,{}),textColor:j.green.main,hoverBackground:j.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(fu,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"})]}),gw=e=>e.confirmed===void 0?null:t.jsx(Ee,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(hw,{...e,confirmed:e.confirmed})}),Tc=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:u=!1,divider:h,collapsed:g,links:x,specialFieldsNameConfig:m})=>{const{openArea:f,changeInputArea:b,included:y,setOpenArea:P,setIncluded:w,setChangeInputArea:T,handleRemove:S,handleAddNew:N,handleLoadFiles:z,handleConfirm:I,handleCheckbox:K}=Yj({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:g,confirmed:c});return t.jsxs(t.Fragment,{children:[t.jsxs(Jj,{openArea:f,children:[t.jsx(uw,{title:e,included:y,optional:d,confirmed:c,setOpenArea:P,setIncluded:w,collapsed:g}),t.jsxs("div",{className:"inputs",children:[t.jsx(te,{type:"alert",visible:!!n,icon:t.jsx(pi,{}),children:n}),t.jsx(te,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Tt,{}),children:i}),Array.isArray(s[0])?s.map((R,ne)=>t.jsxs("div",{className:"data-line",children:[R.map((he,ke)=>t.jsx(vo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ne,indexJ:ke,specialFieldsNameConfig:m,...he},ke)),b&&u&&t.jsx(_,{icon:t.jsx(mu,{}),textColor:j.red.main,onClick:()=>S(ne),background:"transparent",isActive:!(o!=null&&o.value)})]},ne)):s.map((R,ne)=>t.jsx(vo,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ne,specialFieldsNameConfig:m,...R},ne)),u&&b&&t.jsx(_,{icon:t.jsx(bu,{}),text:"Добавить",onClick:N,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(Ya,{files:a.files,setFiles:R=>z(R),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(x==null?void 0:x.length)&&x.map(R=>l.createElement(qg,{...R,key:R.title})),t.jsx(Je,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:K}),t.jsx(gw,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:T,handleConfirm:I})]})]}),h&&t.jsx(ge,{})]})},xw=p.div`
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
`,fw=p.div`
    display: flex;
    margin-bottom: -20px;
`,mw=p.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Ec=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:Te(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(fw,{children:e.map((r,c)=>t.jsxs(mw,{lastElement:c===e.length-1,children:[t.jsx(xw,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(jg,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Tc,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},bw=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),yw=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),vw=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Es=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return Wj(u);if(Array.isArray(u.data[0])){const h=u.data.map(x=>Object.assign({},...x==null?void 0:x.map(m=>_o(m)))),g={};return g[e]=JSON.stringify(h),g}else return u.data.map(h=>_o(h))}).flat(),r=i.map(u=>{var g,x;const h={};if((g=u.documents)!=null&&g.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((x=u.documents)==null?void 0:x.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var g,x;const h={};return(g=u.optionalCheckbox)!=null&&g.fieldName&&(h[(x=u.optionalCheckbox)==null?void 0:x.fieldName]=u.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Ye.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},_o=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=_w(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},_w=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,$s=p.div`
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
`;var fn=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(fn||{}),jw=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(jw||{});const ww=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],kw=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Sw=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:kw},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:ww}]}},Tw=()=>{var R;const[e,i]=l.useState(null),[n,s]=l.useState(Ii.kvdCert),[o,a]=l.useState(Ii.fluorographyCert),[r,c]=l.useState(Ii.vichRwCert),[d,u]=l.useState(Ii.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:g}}=ve.useUser(),[x,m]=l.useState(!1),[f,b]=l.useState(!1),[y,P]=l.useState(null),[w,T]=l.useState(null),[S,N]=l.useState(null),z=x??!1;if((g==null?void 0:g.educationForm)!=="Недоступен")return t.jsx(ue,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const I=!!e&&!!w&&!!y&&!!S;if(l.useEffect(()=>{h&&(i(Sw(h)),P(yw()),T(vw()),N(bw()))},[h]),!I)return null;const K=[[{dataForm:e,setDataForm:i}],[{dataForm:w,setDataForm:T}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}]];return t.jsx($s,{isDone:z,children:t.jsxs(ts,{children:[t.jsx(B,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Ec,{stagesConfig:K}),t.jsx(_t,{text:"Отправить",action:()=>Es(fn.USG_GETHOSTEL_OOZ,[e,w,y,S,n,o,r,d],b,m),isLoading:f,completed:x,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:z,isActive:(((R=e.optionalCheckbox)==null?void 0:R.value)??!0)&&Te(e)&&Te(o)&&Te(r)&&Te(d)&&Te(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Ew=l.lazy(()=>v(()=>import("./index-684ec25a.js"),["assets/index-684ec25a.js","assets/vendor-4af360a6.js"])),$w=l.lazy(()=>v(()=>import("./index-fb26e3a1.js"),["assets/index-fb26e3a1.js","assets/vendor-4af360a6.js"])),Pw=l.lazy(()=>v(()=>import("./index-aa96c4fc.js"),["assets/index-aa96c4fc.js","assets/vendor-4af360a6.js"])),Cw=l.lazy(()=>v(()=>import("./index-32267301.js"),["assets/index-32267301.js","assets/vendor-4af360a6.js"])),Ow=l.lazy(()=>v(()=>import("./index-815f005a.js"),["assets/index-815f005a.js","assets/vendor-4af360a6.js"])),Aw=l.lazy(()=>v(()=>import("./index-4a436960.js"),["assets/index-4a436960.js","assets/vendor-4af360a6.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Dw=l.lazy(()=>v(()=>import("./index-11cb7dc4.js"),["assets/index-11cb7dc4.js","assets/vendor-4af360a6.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Nw=l.lazy(()=>v(()=>import("./index-093b83a8.js"),["assets/index-093b83a8.js","assets/vendor-4af360a6.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Iw=l.lazy(()=>v(()=>import("./index-023e2154.js"),["assets/index-023e2154.js","assets/vendor-4af360a6.js"])),Rw=l.lazy(()=>v(()=>import("./index-223dd1a2.js"),["assets/index-223dd1a2.js","assets/vendor-4af360a6.js","assets/index-e30b240c.js"])),Lw=l.lazy(()=>v(()=>import("./index-e80e2548.js"),["assets/index-e80e2548.js","assets/vendor-4af360a6.js","assets/is-valid-url-08a91344.js"])),zw=l.lazy(()=>v(()=>import("./index-504e5fde.js"),["assets/index-504e5fde.js","assets/vendor-4af360a6.js"])),Mw=l.lazy(()=>v(()=>import("./index-721ec0aa.js"),["assets/index-721ec0aa.js","assets/vendor-4af360a6.js"])),Fw=l.lazy(()=>v(()=>import("./index-8b48547f.js"),["assets/index-8b48547f.js","assets/vendor-4af360a6.js"])),Bw=l.lazy(()=>v(()=>import("./index-5cebf48d.js"),["assets/index-5cebf48d.js","assets/vendor-4af360a6.js"])),Hw=l.lazy(()=>v(()=>import("./index-e7c2e08d.js"),["assets/index-e7c2e08d.js","assets/vendor-4af360a6.js"])),Uw=l.lazy(()=>v(()=>import("./index-832a3a0e.js"),["assets/index-832a3a0e.js","assets/vendor-4af360a6.js"])),Ww=l.lazy(()=>v(()=>import("./index-dd0071c2.js"),["assets/index-dd0071c2.js","assets/vendor-4af360a6.js"])),Vw=l.lazy(()=>v(()=>import("./index-35a77696.js"),["assets/index-35a77696.js","assets/vendor-4af360a6.js"])),Gw=l.lazy(()=>v(()=>import("./index-9ea8cda5.js"),["assets/index-9ea8cda5.js","assets/vendor-4af360a6.js"])),qw=l.lazy(()=>v(()=>import("./index-eefd1481.js"),["assets/index-eefd1481.js","assets/vendor-4af360a6.js","assets/BoldText-6227d805.js"])),Yw=l.lazy(()=>v(()=>import("./index-5621fbaf.js"),["assets/index-5621fbaf.js","assets/vendor-4af360a6.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>kk),void 0));const Jw=l.lazy(()=>v(()=>import("./index-f4754882.js"),["assets/index-f4754882.js","assets/vendor-4af360a6.js"])),Xw=l.lazy(()=>v(()=>import("./index-dbaa1d19.js"),["assets/index-dbaa1d19.js","assets/vendor-4af360a6.js"])),Kw=l.lazy(()=>v(()=>import("./index-f74e8e28.js"),["assets/index-f74e8e28.js","assets/vendor-4af360a6.js"])),Qw=l.lazy(()=>v(()=>import("./index-c4482f2c.js"),["assets/index-c4482f2c.js","assets/vendor-4af360a6.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Zw=l.lazy(()=>v(()=>import("./index-674cbac0.js"),["assets/index-674cbac0.js","assets/vendor-4af360a6.js","assets/get-method-obtaining-fields-0bd95dca.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ek=l.lazy(()=>v(()=>import("./index-640d01f7.js"),["assets/index-640d01f7.js","assets/vendor-4af360a6.js"])),tk=l.lazy(()=>v(()=>import("./index-63e404af.js"),["assets/index-63e404af.js","assets/vendor-4af360a6.js"]));l.lazy(()=>v(()=>Promise.resolve().then(()=>$k),void 0));const ik=l.lazy(()=>v(()=>import("./index-26c50799.js"),["assets/index-26c50799.js","assets/vendor-4af360a6.js"])),nk=l.lazy(()=>v(()=>import("./index-0af1f34a.js"),["assets/index-0af1f34a.js","assets/vendor-4af360a6.js"])),sk=l.lazy(()=>v(()=>import("./index-bbe24bff.js"),["assets/index-bbe24bff.js","assets/vendor-4af360a6.js"])),ok=l.lazy(()=>v(()=>import("./index-fc717d08.js"),["assets/index-fc717d08.js","assets/vendor-4af360a6.js"])),ak=l.lazy(()=>v(()=>import("./index-aee34797.js"),["assets/index-aee34797.js","assets/vendor-4af360a6.js"])),rk=l.lazy(()=>v(()=>import("./index-c1719b36.js"),["assets/index-c1719b36.js","assets/vendor-4af360a6.js","assets/get-divisions-96cfa1b1.js"])),lk=l.lazy(()=>v(()=>import("./index-7e90f22f.js"),["assets/index-7e90f22f.js","assets/vendor-4af360a6.js"])),ck="Sep 07 2023 12:00:00 GMT+0300",$c="Sep 08 2023 12:00:00 GMT+0300",LT=e=>{const i=new Date;return i<new Date(ck)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date($c)?"Подача заявок закрыта":""},dk=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],pk=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],uk=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],hk=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],gk=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],xk=[{id:0,title:"1"},{id:1,title:"2"}],fk=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],mk=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],bk=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],yk=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),vk=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:dk,width:"100%",editable:!0,required:!0}]}),_k=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:pk,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),jk=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:uk,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:hk,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:gk,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:xk,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:fk,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),wk=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:mk,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),jo=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:bk,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},Pc=()=>{var N;const[e,i]=l.useState(null),[n,s]=l.useState(vk()),[o,a]=l.useState(_k()),[r,c]=l.useState(jk()),[d,u]=l.useState(wk()),[h,g]=l.useState(jo(null)),[x,m]=l.useState(!1),[f,b]=l.useState(!1),[y,P]=l.useState(!1),{data:{dataUserApplication:w}}=ye.useApplications();l.useEffect(()=>{w&&i(yk(w))},[w]);const T=l.useMemo(()=>{var z,I;return((I=(z=h==null?void 0:h.data[0])==null?void 0:z.value)==null?void 0:I.id)!==0},[(N=h==null?void 0:h.data[0])==null?void 0:N.value]);if(l.useEffect(()=>{h&&g(jo(h.data))},[T]),!e)return null;const S=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:u}],[{dataForm:h,setDataForm:g}]];return t.jsx($s,{isDone:!1,children:t.jsxs(ts,{children:[t.jsx(B,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Ec,{stagesConfig:S}),t.jsx(Je,{checked:x,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(_t,{text:f?"Отправлено":"Отправить",action:()=>Es(fn.MIL_REG,[e,n,o,r,d,h],P,b),isLoading:y,completed:f,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:f,isActive:!!x&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&Te(e)&&Te(n)&&Te(r)&&Te(d)&&Te(h)&&Te(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},kk=Object.freeze(Object.defineProperty({__proto__:null,default:Pc},Symbol.toStringTag,{value:"Module"})),Sk=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],Tk=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:Sk},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),Ek=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Cc=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:u}}=ye.useApplications();return l.useEffect(()=>{u&&i(Tk(u))},[u]),l.useEffect(()=>{e&&u&&c(Ek(e.data))},[e]),t.jsx($s,{isDone:d,children:!!e&&!!i&&t.jsxs(ts,{children:[t.jsx(Tc,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(_t,{text:d?"Отправлено":"Отправить",action:()=>Es(fn.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:Te(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},$k=Object.freeze(Object.defineProperty({__proto__:null,default:Cc},Symbol.toStringTag,{value:"Module"})),E="/applications",Pk="/application-for-superior-room",Ck="/acad-performance",Ok="/dormitory",Oc=E+"/clarification-of-passport-data",Ac=E+"/arbitrary-request",Dc=E+"/student-employment",Nc=E+"/social-scollarship",Ic=E+"/certificate-of-attendance",Rc=E+"/social-agencies",Lc=E+"/paper-call",zc=E+"/regular-accommodation",Mc=E+"/full-time-part-time-form",Fc=E+"/accommodation-correspondence-form",Bc=E+"/academic-leave-accommodation",Hc=E+"/preferential-accommodation",Uc=E+"/family-room",Wc=E+"/termination-of-employment-contract",Vc=E+"/relocation-inside-hostel",Gc=E+"/relocation-to-another-hostel",qc=E+"/accommodation-for-graduates",Wn=E+"/payment-recipient",Yc=E+"/restoring-the-magnetic-pass",Jc=E+"/retake-for-diploma",Xc=E+"/military-registration-documents",Kc=E+"/military-registration",Qc=E+"/financial-support",Zc=E+"/financial-assistance",ed=E+"/increased-state-academic-scholarship",td=E+"/changing-personal-data",id=E+"/student-status",nd=E+"/state-accreditation",Ak=E+"/military-registration-card",sd=E+"/holidays-after-training",od=E+"/provision-academic-leave",ad=E+"/exit-academic-leave",rd=E+"/independently-deducted",ld=E+"/extension-attestation",et=()=>je({oldVersionUrl:"/sprav"}),Zt=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(D,{}),path:E,Component:Rw,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...kl,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(at,{}),path:qi,Component:gs,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Ds,{}),path:Ok,Component:Pw,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(yu,{}),path:Ck,Component:$w,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Mo,{}),path:yl,Component:Lw,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(vu,{}),path:jl,Component:ns,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Ds,{}),path:Pk,Component:Ew,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date($c))}}),wo=e=>{var i,n,s;return{...Sl,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(ii,{}),path:Oc,Component:Cw,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(ii,{}),path:Ac,Component:rk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(ii,{}),path:Dc,Component:A?et:lk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(X,{}),path:Nc,Component:A?et:Ow,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(X,{}),path:Ic,Component:Aw,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(X,{}),path:Rc,Component:Dw,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(X,{}),path:Lc,Component:Nw,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(X,{}),path:zc,Component:Iw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(X,{}),path:Mc,Component:Tw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(X,{}),path:Fc,Component:ok,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(X,{}),path:Bc,Component:zw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(X,{}),path:Hc,Component:Mw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(X,{}),path:Uc,Component:ak,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(X,{}),path:Wc,Component:Fw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(X,{}),path:Vc,Component:A?()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):Bw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(X,{}),path:Gc,Component:A?()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):Uw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:X,path:qc,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?Hw:()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(X,{}),path:Wn,Component:Ww,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(X,{}),path:Yc,Component:Vw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(X,{}),path:Xc,Component:A?et:Yw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(_u,{}),path:Kc,Component:A?et:Pc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:E},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(X,{}),path:Jc,Component:qw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(X,{}),path:ed,Component:A?et:Gw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(X,{}),path:Qc,Component:A?et:Jw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(X,{}),path:Zc,Component:A?et:Xw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(X,{}),path:td,Component:Kw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(X,{}),path:id,Component:Qw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(X,{}),path:nd,Component:Zw,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(X,{}),path:sd,Component:ek,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(X,{}),path:od,Component:tk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(X,{}),path:ad,Component:Cc,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(X,{}),path:rd,Component:ik,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(X,{}),path:ld,Component:nk,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(X,{}),path:Ak,Component:A?et:sk,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E}}},ko=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Dk=["settings","profile","chat","schedule","payments","project-activity","all-students"],Nk=["home","schedule","acad-performance","all","profile"],Ik=["home","schedule","alerts","all","profile"],Rk=["home","doclist","alerts","all","profile"],Lk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(Y.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??nn,s=ia.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},So={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},zk=()=>V(Fk),cd=k(),dd=k(),pd=k(),ud=k(),Mk=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},ei=e=>{if(!e)return to();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(to()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},Fk=J(So).on(cd,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(dd,()=>({...So})).on(pd,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?ei(n)[window.location.hash.slice(2,window.location.hash.length)]:Zt()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...ei(n),...io()}:{...Zt(),...wo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?ei(n):Zt(),leftsideBarRoutes:ko(Lk(i),(i==null?void 0:i.user_status)==="staff"?ei(n):Zt()),homeRoutes:ko(s??JSON.parse(localStorage.getItem(Y.HomeRoutes)??JSON.stringify(Dk)),(i==null?void 0:i.user_status)==="staff"?{...ei(n),...io()}:{...Zt(),...wo(i)})})).on(ud,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Mk(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Ve={useMenu:zk},Qe={changeOpen:cd,clearStore:dd,defineMenu:pd,changeNotifications:ud},hd=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:vl,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ct,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:qi,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:qi,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:bs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:ae,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Or,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:xs,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:E,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:ul,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Bk={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},gd=(e,i)=>i.filter(({type:n})=>e[Bk[n]]),Hk={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},mn=M(async({settings:e})=>{try{const{data:i}=await Sh();return gd(e,i).map(({id:n,type:s,title:o,text:a})=>hd(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Uk=M(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&Qe.changeNotifications({page:i,notifications:1})})}),Wk=M(({notifications:e})=>{const{pageId:i}=e[0];i&&Qe.changeNotifications({page:i,notifications:1})}),bn=M(async({id:e,pageId:i})=>{try{return await Th(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),yn=M(async()=>{try{await Eh()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Vk=e=>{e&&Qe.changeNotifications({page:e,notifications:0})},xd=k(),fd=k(),md=k(),bd=k(),yd=k(),vd=k(),_d=k(),oe=J(Hk).reset(_d);Me({from:fd,to:mn});O({clock:mn.pending,source:oe,fn:(e,i)=>({...e,loading:i}),target:oe});O({clock:mn.failData,source:oe,fn:(e,i)=>({...e,error:i.message}),target:oe});O({clock:mn.doneData,source:oe,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[oe,Uk]});O({clock:xd,source:oe,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[oe,Wk]});Me({from:bd,to:bn});O({clock:bn.doneData,source:oe,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Vk(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:oe});O({clock:bn.failData,source:oe,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:oe});O({clock:bn.pending,source:oe,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:oe});Me({from:yd,to:yn});O({clock:yn.pending,source:oe,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:oe});O({clock:yn.failData,source:oe,fn:(e,i)=>({...e,clearAllError:i.message}),target:oe});O({clock:yn.doneData,source:oe,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:oe});O({clock:md,source:oe,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:oe});O({clock:vd,source:oe,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:oe});const Gk=()=>Pe(oe),kt={initialize:fd,add:xd,clearById:bd,clearVisibleById:md,clearAll:yd,clearAllVisible:vd,clearStore:_d},Ze={useLkNotifications:Gk},qk=Object.freeze(Object.defineProperty({__proto__:null,events:kt,selectors:Ze},Symbol.toStringTag,{value:"Module"})),To={messages:null,error:null},Yk=()=>({data:V(Eo).messages,loading:V(li.pending),error:V(Eo).error}),li=M(async()=>{try{return(await Qu("1")).data}catch(e){throw new Error(e)}}),jd=k(),Eo=J(To).on(li,e=>({...e,error:null})).on(li.doneData,(e,i)=>({...e,messages:i})).on(li.failData,(e,i)=>({...e,error:i.message})).on(jd,()=>({...To})),Jk={useMessages:Yk},Xk={getMessagesFx:li},Kk={clearStore:jd},Qk=Object.freeze(Object.defineProperty({__proto__:null,effects:Xk,events:Kk,selectors:Jk},Symbol.toStringTag,{value:"Module"})),$o={type:null,personalNotifications:null,error:null,completed:!1},Zk=()=>({data:V(Rt).personalNotifications,loading:V(It.pending),error:V(Rt).error,completed:V(Rt).completed}),eS=()=>V(Rt).type,wd=k(),kd=M(e=>e),It=M(async()=>{const{type:e}=Rt.getState();if(e==="notifications")try{return(await la()).data}catch(i){throw new Error(i)}try{return{docs:(await ca()).data}}catch(i){throw new Error(i)}}),Qi=M(async e=>{const{type:i}=Rt.getState(),n=i==="notifications"?xh:mh;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),Sd=k(),Rt=J($o).on(kd,(e,i)=>({...e,type:i})).on(It,e=>({...e,error:null})).on(It.doneData,(e,i)=>({...e,personalNotifications:i})).on(It.failData,(e,i)=>({...e,error:i.message})).on(Qi.doneData,e=>({...e})).on(Qi.failData,(e,i)=>({...e,error:i.message})).on(wd,(e,i)=>({...e,completed:i.completed})).on(Sd,()=>({...$o}));Qi.doneData.watch(()=>It());const tS={usePersonalNotifications:Zk,useType:eS},iS={setNotificationsType:kd,getPersonalNotificationsFx:It,viewPersonalNotificationsFx:Qi},nS={changeCompleted:wd,clearStore:Sd},sS=Object.freeze(Object.defineProperty({__proto__:null,effects:iS,events:nS,selectors:tS},Symbol.toStringTag,{value:"Module"})),oS=on({api:{get:hh}}),Po={superiorRoom:null,error:null},aS=()=>({data:V(Co).superiorRoom,loading:V(ci.pending),error:V(Co).error}),Td=k(),rS=M(async e=>{});Me({from:Td,to:rS});const ci=M(async()=>{try{return(await nh()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Ed=k(),Co=J(Po).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,superiorRoom:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(Ed,()=>({...Po})),lS={useSuperiorRoom:aS},cS={getSuperiorRoomFx:ci},dS={postSuperiorRoom:Td,clearStore:Ed},pS=Object.freeze(Object.defineProperty({__proto__:null,effects:cS,events:dS,selectors:lS},Symbol.toStringTag,{value:"Module"})),Oo={teacherDataVerification:null,error:null,completed:!1},uS=()=>({data:V(En).teacherDataVerification,loading:V(di.pending),error:V(En).error,completed:V(En).completed}),$d=k(),Pd=k(),hS=M(async e=>{try{return(await _h(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Me({from:$d,to:hS});const di=M(async()=>{try{return(await vh()).data}catch{throw new Error("Не удалось войти")}}),Cd=k(),En=J(Oo).on(di,e=>({...e,error:null})).on(di.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(di.failData,(e,i)=>({...e,error:i.message})).on(Pd,(e,i)=>({...e,completed:i.completed})).on(Cd,()=>({...Oo})),gS={useTeacherDataVerification:uS},xS={getTeacherDataVerificationFx:di},fS={postTeacherDataVerification:$d,changeCompleted:Pd,clearStore:Cd},mS=Object.freeze(Object.defineProperty({__proto__:null,effects:xS,events:fS,selectors:gS},Symbol.toStringTag,{value:"Module"})),bS=[Ch,rt,Bh,Wh,ig,Qk,sS,Mb,Lh,oS,V_,pS,mS,Jh,Ah,qk],yS=()=>{bS.forEach(e=>{e.events.clearStore()})},nt=localStorage.getItem(Y.Token)??"",st=()=>JSON.parse(localStorage.getItem(Y.SavePassword)??"true"),vn=M(async e=>{try{const{data:i}=await Fu(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await mi.post("/old",n)}catch{}return st()?(localStorage.setItem(Y.Token,i.token),localStorage.setItem(Y.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(Y.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(Y.Token,i.token),sessionStorage.setItem(Y.JWT,(i==null?void 0:i.jwt)??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),bt=M(async e=>{try{const n=(await Bu(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,guid:e.jwt?$t(e.jwt).IndividualGuid:"",fullName:$h({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:st()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),Vn=M(async e=>{try{return(await Hu(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Od=M(()=>{st()?(localStorage.removeItem(Y.Token),localStorage.removeItem(Y.JWT),localStorage.removeItem(Y.JWTRefresh)):(sessionStorage.removeItem(Y.Token),sessionStorage.removeItem(Y.JWT),sessionStorage.removeItem(Y.JWTRefresh)),yS()}),Ad=e=>{const i=localStorage.getItem(Y.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(Y.SavePassword,n.toString()),n},Dd=k(),Ps=k(),Nd=k(),Id=k(),Rd=k();Me({from:Dd,to:vn});O({clock:vn.doneData,target:bt});Me({from:Ps,to:Od});nt&&st()?bt({token:nt,jwt:localStorage.getItem(Y.JWT)}):Od();const vS={currentUser:null,error:null,isAuthenticated:!!(nt!=null&&nt.length),savePassword:st(),loginEuz:""};Ad();const _S=J(vS).on(bt,e=>({...e,error:null})).on(bt.doneData,(e,i)=>i).on(bt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(nt!=null&&nt.length),savePassword:st()})).on(vn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:st()})).on(Ps,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:st()})).on(Rd,(e,{savePassword:i})=>({...e,savePassword:Ad(i)})).on(Vn,e=>({...e,error:null})).on(Vn.doneData,(e,i)=>({...e,loginEuz:i})).on(bt.failData,(e,i)=>({...e,error:i.message})).on(Id,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Nd,e=>({...e,currentUser:null})),ve={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=V(_S);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:V(vn.pending),error:i}}},St={login:Dd,logout:Ps,changeSavePassword:Rd,clear:Nd,update:Id},jS={getUserFx:bt,getLoginEuzFx:Vn},wS=()=>{const e="0.0.1";localStorage.getItem(Y.Version)!==e&&(localStorage.clear(),localStorage.setItem(Y.Version,e),St.logout())},kS=p.div`
    max-height: 400px;
    overflow-y: auto;
`,SS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ue,{text:e.message,image:t.jsx(ju,{}),children:t.jsxs(C,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(ge,{}),t.jsx(Al,{title:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:t.jsxs(C,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(wu,{})]})}),children:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(kS,{children:e.stack})})})]})})});class Ld extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(SS,{error:this.state.error}):this.props.children}}const zd=k(),Md=M(rh);O({clock:zd,target:Md});const Fd=J([]),zT=Gn(Fd,e=>e.map(i=>i.divisionName));O({clock:Md.doneData,target:Fd});const TS=()=>{const{allRoutes:e}=Ve.useMenu();return e?t.jsxs(ea,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(ta,{path:i,component:n,exact:!s},i)),t.jsx(qe,{exact:!0,to:fs})]}):null},ES=re.memo(TS),$S=p.div`
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
`,PS=()=>{const{open:e,content:i,position:n}=Qg.useContextMenu(),s=l.useRef(null);return Ht(s,()=>ze.close()),t.jsx(gn,{isOpen:e,children:t.jsx($S,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Bd=200,CS=5e3,OS=()=>{const{visibleNotifications:e}=Ze.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{kt.clearVisibleById(a)},Bd)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??CS))},[e]),{handleClose:o,closing:i}},AS=p.div`
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
`,DS=p.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Bd/1e3}s forwards;

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
`;const NS=()=>{const{visibleNotifications:e}=Ze.useLkNotifications(),{closing:i,handleClose:n}=OS();return t.jsx(AS,{children:e.map(s=>t.jsx(DS,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Rl,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Ao=p.div`
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
`,IS=({loading:e})=>{const{data:{user:i},error:n}=ve.useUser(),s=i?Re(i==null?void 0:i.fullName):j.blue.main,o=()=>jS.getUserFx(JSON.parse(localStorage.getItem(Y.Token)??"")),a=()=>St.logout();return n?t.jsx(Ao,{$loading:!0,color:s,children:t.jsx(ue,{text:n,children:t.jsxs(C,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(qn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(Ao,{color:s,$loading:e,children:[t.jsx(ln,{short:!0,width:"100px"}),e&&t.jsx(Pt,{})]})},RS=p.div`
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
`,LS=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Ss.useStory();return t.jsx(RS,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():mt.changeCurrentPage({value:o+1})})})},zS=p(rn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,MS=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Ss.useStory();return t.jsxs(zS,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(LS,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Su,{}):t.jsx(ku,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Xe,{}),onClick:n})]})},FS=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,BS=p(Ke)`
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
`,HS=p.div`
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
    transform: ${({align:e})=>FS(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,US=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:g="left"})=>{const x=vi();return t.jsxs(BS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(es,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(HS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(B,{size:2,align:g,children:o}),t.jsx(se,{fontSize:"1.1em",align:g,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{x.push(d.to),mt.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},WS=p.div`
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
    /* background: red; */
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
`,VS=()=>{const{pages:e,isOpen:i,currentPage:n}=Ss.useStory(),s=l.useRef(null);Ht(s,()=>mt.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(gn,{isOpen:i,children:t.jsx(WS,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(MS,{pages:e.length,onClose:()=>mt.close(),playing:o}),t.jsx(Do,{left:"15px",onClick:()=>{n!==0&&mt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(bi,{})}),t.jsx(US,{setPlaying:a,currentPage:n,...r}),t.jsx(Do,{right:"15px",onClick:()=>{n!==e.length-1?mt.changeCurrentPage({value:n+1}):mt.close(),a(!0)},children:t.jsx(dt,{})})]})})})},GS=()=>{const{data:{user:e}}=ve.useUser(),{notifications:i,loading:n,loaded:s}=Ze.useLkNotifications(),{settings:o}=Bt.useSettings(),[a]=_i([Ea.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{Cn.getElectronicInteraction(),a&&!a.status&&kt.add(hd("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Cn.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(gd(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,kt.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{Qe.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},qS=()=>{const{data:{user:e}}=ve.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Ou);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},YS=()=>{const e=vr(),{open:i}=ee(),n=qS();return GS(),ut(),l.useEffect(()=>{n&&n&&i(t.jsx(mc,{}),"Что нового")},[n]),{currentPage:e}},JS=p.div`
    display: flex;
    background: var(--theme);
    height: 100vh;
    height: 100svh;
    height: 100dvh;
`,XS=p.div`
    width: 100%;

    flex: 1;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,KS=p.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding-top: ${({withHeader:e})=>e?"var(--header-height)":"0"};
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: calc(100% - var(--mobile-bottom-menu-height));
    }
`,QS=()=>{const{data:{user:e}}=ve.useUser(),{allRoutes:i}=Ve.useMenu(),{currentPage:n}=YS(),[s,o]=l.useState(!1),a=r=>{o(r.currentTarget.scrollTop>0)};return t.jsxs(JS,{children:[t.jsx(IS,{loading:!e||!i}),t.jsx(VS,{}),t.jsx(F1,{}),t.jsxs(XS,{children:[t.jsx(T1,{headerVisible:s,currentPage:n}),t.jsx(KS,{onScroll:a,withHeader:!(n!=null&&n.withoutHeader),children:t.jsx(Ld,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(ES,{})})})}),t.jsx(Tj,{})]}),t.jsx(q1,{}),t.jsx(H1,{}),t.jsx(J1,{}),t.jsx(PS,{}),t.jsx(Dj,{}),t.jsx(NS,{})]})},ZS=re.memo(QS),eT=()=>{const{data:{isAuthenticated:e,user:i}}=ve.useUser(),{data:n}=rt.selectors.useData(),{settings:s}=Bt.useSettings();return l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Ye.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(rt.effects.getFx(),Ye.getWorkerPosts(),zd()))},[e,i]),l.useEffect(()=>{i&&(s?Qe.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):rg.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(ZS,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(ea,{children:[sv.map(({path:o,Component:a},r)=>t.jsx(ta,{path:o,component:a,exact:!0},r)),t.jsx(qe,{exact:!0,to:pl})]})})},tT=p.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`;wS();const iT=()=>(ut(),t.jsx(zv,{children:t.jsx(Tu,{basename:"/",children:t.jsx(tT,{children:t.jsx(Ld,{children:t.jsx(eT,{})})})})}));Eu.render(t.jsxs(re.StrictMode,{children:[t.jsx(S_,{}),t.jsx(iT,{})]}),document.getElementById("root"));export{_S as $,jw as A,_ as B,Je as C,ge as D,H as E,ts as F,U as G,Vh as H,Tc as I,Wj as J,ft as K,Pt as L,te as M,Te as N,ue as O,Oy as P,w1 as Q,gT as R,_t as S,B as T,ve as U,se as V,ht as W,ki as X,iS as Y,kt as Z,tS as _,q as a,Ht as a$,_s as a0,uT as a1,ye as a2,Ye as a3,IT as a4,on as a5,Ke as a6,Yi as a7,Ee as a8,Pl as a9,ds as aA,fT as aB,rs as aC,mT as aD,cs as aE,db as aF,Fd as aG,yT as aH,xv as aI,Jj as aJ,uw as aK,ae as aL,Ac as aM,qi as aN,nv as aO,jT as aP,bv as aQ,mv as aR,jh as aS,Ae as aT,be as aU,vT as aV,bs as aW,Ci as aX,G as aY,ze as aZ,cn as a_,bh as aa,yh as ab,Ua as ac,NT as ad,js as ae,Wa as af,Cv as ag,Av as ah,Ve as ai,Pv as aj,jl as ak,iv as al,RT as am,Oe as an,xe as ao,$t as ap,pt as aq,$s as ar,zT as as,xT as at,Nh as au,Fs as av,Es as aw,r0 as ax,X0 as ay,bT as az,xS as b,c_ as b$,Ea as b0,Cn as b1,Ah as b2,Le as b3,gt as b4,it as b5,ry as b6,ay as b7,Sj as b8,AT as b9,o1 as bA,Ml as bB,qy as bC,tt as bD,St as bE,Rj as bF,ov as bG,tv as bH,ev as bI,Zy as bJ,Ql as bK,U_ as bL,hn as bM,Pi as bN,Qn as bO,OT as bP,R_ as bQ,wl as bR,L_ as bS,z_ as bT,ic as bU,Dt as bV,q_ as bW,hc as bX,G_ as bY,fc as bZ,A_ as b_,CT as ba,aj as bb,ql as bc,ks as bd,DT as be,Bt as bf,$i as bg,vl as bh,d1 as bi,Re as bj,ws as bk,Nn as bl,W_ as bm,zl as bn,m1 as bo,L as bp,Tn as bq,wT as br,e_ as bs,ET as bt,$T as bu,PT as bv,TT as bw,ST as bx,kT as by,me as bz,Jh as c,gj as c0,lj as c1,ut as c2,Jl as c3,tc as c4,Cr as c5,xi as c6,J_ as c7,Cl as c8,no as c9,LT as cA,Ph as cB,oT as cC,sT as cD,Xi as cE,k_ as cF,es as cG,Ch as cH,qg as cI,hT as cJ,ww as cK,Ii as cL,yw as cM,vw as cN,bw as cO,Ec as cP,oS as cQ,ia as ca,nn as cb,rv as cc,av as cd,dT as ce,cT as cf,El as cg,Tl as ch,wi as ci,i_ as cj,Ya as ck,rT as cl,um as cm,Da as cn,lT as co,_T as cp,rn as cq,c1 as cr,jS as cs,Ni as ct,Ze as cu,Ky as cv,u1 as cw,pT as cx,lS as cy,cS as cz,fn as d,fS as e,oo as f,lt as g,Ba as h,er as i,Fe as j,Lg as k,le as l,wh as m,r1 as n,Z as o,C as p,$m as q,Ts as r,gS as s,un as t,ee as u,is as v,Dg as w,j as x,Lu as y,aT as z};
