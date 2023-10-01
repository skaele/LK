import{F as Ae,a as di,b as ot,c as An,H as bn,d as gi,y as L,u as S,p as X,e as W,x as P,S as Ue,m as Dn,r as l,s as d,j as t,f as Ke,I as Td,g as Ed,h as $d,i as vo,A as Nn,k as N,l as Cd,n as Pe,o as _t,B as yo,q as In,t as pn,v as Pd,w as Od,R as de,z as pi,C as fi,D as pt,L as Q,E as ui,G as Ad,J as Dd,K as Rn,M as mi,N as bi,O as vi,P as Ln,Q as zn,T as at,U as jo,V as ut,W as wo,X as Nd,Y as Mn,Z as Id,_ as Rd,$ as De,a0 as we,a1 as Fn,a2 as _o,a3 as ko,a4 as So,a5 as To,a6 as Ld,a7 as zd,a8 as Md,a9 as Fd,aa as Ye,ab as It,ac as Bd,ad as Hd,ae as Ud,af as Wd,ag as Vd,ah as Gd,ai as K,aj as Eo,ak as Yd,al as qd,am as Jd,an as $o,ao as Bn,ap as Co,aq as Xd,ar as Kd,as as Qd,at as Po,au as Zd,av as Yi,aw as ep,ax as Oo,ay as tp,az as ip,aA as np,aB as Ao,aC as sp,aD as op,aE as Fi,aF as Do,aG as No,aH as te,aI as fs,aJ as Io,aK as ap,aL as rp,aM as lp,aN as Li,aO as ms,aP as cp,aQ as dp,aR as pp,aS as up,aT as hp,aU as xp,aV as gp,aW as fp,aX as mp,aY as bp,aZ as vp,a_ as yp,a$ as jp,b0 as wp,b1 as _p,b2 as kp,b3 as Sp,b4 as Tp,b5 as Ep,b6 as $p,b7 as Cp,b8 as Pp,b9 as Op,ba as Ap,bb as Dp,bc as Np,bd as Ip,be as Rp,bf as Ro,bg as Lp,bh as zp,bi as Mp,bj as Fp,bk as Bp,bl as Hp,bm as Up,bn as Wp,bo as Vp,bp as Lo,bq as Gp,br as vn,bs as yn,bt as Yp,bu as qp,bv as Jp,bw as Xp,bx as Kp,by as Qp,bz as bs,bA as Zp,bB as eu,bC as tu,bD as zo,bE as Mo,bF as iu,bG as nu,bH as su,bI as ou,bJ as au,bK as ru,bL as lu}from"./vendor-2bd70a0f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const cu="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",du=3,qi=["home","settings","all"],Fo=["home","settings","download-agreements","all"],Bo="https://lk.eseur.ru/signup",pu="https://old.mospolytech.ru/index.php?id=3428",_={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#91353d",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},At={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},MS={Зачтено:_.green,"Не зачтено":_.red,Отлично:_.green,Хорошо:_.blue,Удовлетворительно:_.orange,Неудовлетворительно:_.red,"Не явился":_.red,default:_.red},FS={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},A="https://e.mospolytech.ru/old",uu="2023-06-30T00:43:43",kt={info:{icon:Ae,color:"blue",title:"Информация"},alert:{icon:di,color:"orange",title:"Внимание!"},failure:{icon:ot,color:"red",title:"Ошибка"},success:{icon:An,color:"green",title:"Успешно"},tip:{icon:bn,color:"grey",title:"Подсказка"},hint:{icon:bn,color:"white",title:"Подсказка"},hrFailure:{icon:ot,color:"red",title:"Ошибка"}},hu={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},xu=["image/jpeg","image/jpg","image/png","application/pdf"],gu=10,Ho="(max-width: 766px)",fu="(min-width: 767px)",Uo="(max-width: 1000px)",Wo="(max-width: 1380px)",Vo="(min-width: 1381px)",ne={isMobile:`@media ${Ho}`,isNotMobile:`@media ${fu}`,isTablet:`@media ${Uo}`,isSmallTesktop:`@media ${Wo}`,isMiddleTesktop:`@media ${Vo}`},mu=[{query:Ho,title:"isMobile",value:"mobile"},{query:Uo,title:"isTablet",value:"tablet"},{query:Wo,title:"isSmallDesktop",value:"smallDesktop"},{query:Vo,title:"isMiddleDesktop",value:"middleDesktop"}],bu={minute:6e4},I=!window.location.port||window.location.port==="80";console.log("Running on production",I);var q=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(q||{});const ht=()=>localStorage.getItem(q.JWT),$t=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},BS=async e=>{const i=e.config;if((e.request.status===403||e.request.status===401)&&!i._retry){i._retry=!0;const n=localStorage.getItem(q.JWTRefresh);try{const{accessToken:s,refreshToken:o}=await Su(n??"");return localStorage.setItem(q.JWT,s),localStorage.setItem(q.JWTRefresh,o),xe(i)}catch{Ft.logout()}}return Promise.reject(e)},vu=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${ht()}`,e),yu=`${A}/lk_api.php`,ju="https://api.mospolytech.ru/serviceforfrontpersonnelorders",B=gi.create({baseURL:yu,withCredentials:!0}),xe=gi.create({baseURL:ju});xe.interceptors.request.use(vu);function Ji(e){return e.isAxiosError}function H(){return localStorage.getItem(q.Token)??sessionStorage.getItem(q.Token)??""}const wu=({login:e,password:i})=>B.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),_u=e=>B.get(`?getUser&token=${e}`),ku=e=>B.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),HS=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",H()),B.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},US=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),B.post(`?changeADPass=1&token=${H()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},WS=async e=>{const i=new FormData;return i.set("email",e),i.set("token",H()),B.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},VS=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",H()),B.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Su=async e=>{const{data:i}=await gi.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Tu=e=>B.get(`?getSchedule&group=${e}&token=${H()}`),Eu=e=>B.get(`?getScheduleTeacher&fio=${e}&token=${H()}`),$u=()=>B.get(`?getSchedule&session=1&token=${H()}`),Cu=e=>B.get(`?getScheduleTeacher&fio=${e}&session=1&token=${H()}`),Pu=()=>B.get(`?getPayments&token=${H()}`),Ou=e=>B.get(`?signAgreement=${e}&token=${H()}`),Au=e=>B.get(`?signContract=${e}&token=${H()}`),Du=async({semestr:e})=>{var i,n;return(n=(i=await B.get(`?getAcademicPerformance&semestr=${e}&token=${H()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},Nu=e=>B.get(`?getMessages&token=${H()}&id=${e}`),Iu=async()=>(await B.get(`?getPEPStatus&token=${H()}`)).data,Ru=async()=>(await B.get(`?setPEPAccept&token=${H()}`)).data,Lu=()=>B.get(`?getContactData&token=${H()}`),zu=e=>{const i=new FormData;i.set("token",H()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return B.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Mu=()=>B.get(`?getRequestHighComfort&token=${H()}`),GS=e=>{const i=new FormData;i.set("token",H()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return B.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Fu=()=>B.get(`?getAppRequests&token=${H()}`),Bu=()=>B.get(`?getAppData&token=${H()}`),Hu=async()=>await xe.get(`/Dismissal.GetAllHistory?employeeGuid=${$t(ht()??"").IndividualGuid}`,{timeout:3e4}),Uu=async()=>{const{data:e}=await xe.get("/AnotherPlaceWork.GetDivisions");return e.divisions},Wu=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",H()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await B.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},Vu=()=>xe.get(`?getAppRequests&token=${H()}`),Gu=()=>xe.get(`?getAppData&token=${H()}`),Yu=e=>xe.post("Dismissal.Post",e),qu=async()=>(await B.get(`?getAdminLinks&token=${H()}`)).data,Ju=async e=>(await B.get(`?PDinfo&token=${H()}`)).data,Go=()=>B.get(`?getNotification&token=${H()}`),Xu=e=>B.get(`?viewNotification=${e}&token=${H()}`),Ku=Object.freeze(Object.defineProperty({__proto__:null,get:Go,view:Xu},Symbol.toStringTag,{value:"Module"})),Yo=()=>B.get(`?getDocList&token=${H()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),Qu=e=>B.get(`?viewDoc=${e}&token=${H()}`),Zu=Object.freeze(Object.defineProperty({__proto__:null,get:Yo,view:Qu},Symbol.toStringTag,{value:"Module"})),eh=(e,i,n,s)=>B.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${H()}`),th=e=>B.get(`?getDivs=${e}&page=1&token=${H()}`),ih=()=>B.get(`?getCheckData&token=${H()}`),nh=e=>{const i=new FormData;i.set("token",H()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return B.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},sh=(e,i,n,s)=>B.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${H()}`),oh=async e=>await B.get(`?getGroups=${e}&perpage=30&page=1&token=${H()}`),ah=async()=>(await B.get(`?getAlerts&token=${H()}`)).data,rh=()=>B.get(`?getNotifications&token=${H()}`),lh=e=>B.get(`?clearNotificationById=${e}&token=${H()}`),ch=()=>B.get(`?clearAllNotifications&token=${H()}`);function dh({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const vs={data:null,preparedData:null,loading:!1,error:null},Xi=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>cu})=>{const o=e??vs,a=()=>({data:W(u).data,preparedData:W(u).preparedData,loading:W(r.pending),error:W(u).error}),r=L(async h=>{try{const x=await i.get(h);return{data:x,preparedData:n?n(x):x}}catch(x){throw new Error(s(x))}}),c=L(async h=>{var x;try{const g=await((x=i.post)==null?void 0:x.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),p=S(),u=X(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:x})=>({...h,error:x,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:x,preparedData:g})=>({...h,data:x,preparedData:g})).on(r.failData,(h,x)=>({...h,error:x.message})).on(p,()=>({...vs}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:p}}};function ph(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const uh=Xi({api:{get:Du},prepareData:ph}),rt=Xi({api:{get:qu}}),hh=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),xh=Xi({api:{get:ah},prepareData:hh}),ys={message:"",type:"success",isOpen:!1,time:2e3},qo=S(),Jo=S(),Xo=S();X(ys).on(qo,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Jo,(e,{isOpen:i})=>({...e,isOpen:i})).on(Xo,()=>({...ys}));const Ne={evokePopUpMessage:qo,openPopUpMessage:Jo,clearStore:Xo},js={listApplication:null,error:null,dataUserApplication:null},ti=L(async()=>{const e=await Vu();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),zi=L(async()=>{const e=await Gu();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Ki=L(async e=>await Yu(e));P({clock:Ki.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ne.evokePopUpMessage});P({clock:Ki.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:Ne.evokePopUpMessage});const gh=S();Ue({from:Ki.doneData,to:ti});X(js).on(zi,e=>({...e,error:null})).on(zi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(zi.failData,(e,i)=>({...e,error:i.message})).on(ti,e=>({...e,error:null})).on(ti.doneData,(e,i)=>({...e,listApplication:i})).on(ti.failData,(e,i)=>({...e,error:i.message})).on(gh,()=>({...js}));const fh={getApplicationsFx:ti,getUserDataApplicationsFx:zi,postApplicationFx:Ki},ws={message:"",type:"success",isOpen:!1,time:2e3},mh=()=>W(bh),Ko=S(),Qo=S(),Zo=S(),bh=X(ws).on(Ko,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Qo,(e,{isOpen:i})=>({...e,isOpen:i})).on(Zo,()=>({...ws})),ea={usePopUpMessage:mh},Y={evokePopUpMessage:Ko,openPopUpMessage:Qo,clearStore:Zo},vh=Object.freeze(Object.defineProperty({__proto__:null,events:Y,selectors:ea},Symbol.toStringTag,{value:"Module"})),_s={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},ii=L(async()=>{const e=await Hu();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ni=L(async()=>{const e=await Fu();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),si=L(async()=>{const e=await Bu();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Hn=L(async e=>{const i=await Wu(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),yh=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=W(jh);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:W(si.pending),workerLoading:W(Dn(ii.pending,fh.postApplicationFx.pending,(o,a)=>o||a)),error:s}},ta=S();Ue({from:Hn.doneData,to:ni});P({clock:Hn.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:Y.evokePopUpMessage});const jh=X(_s).on(si,e=>({...e,error:null})).on(si.doneData,(e,i)=>({...e,dataUserApplication:i})).on(si.failData,(e,i)=>({...e,error:i.message})).on(ni,e=>({...e,error:null})).on(ni.doneData,(e,i)=>({...e,listApplication:i})).on(ni.failData,(e,i)=>({...e,error:i.message})).on(ii,e=>({...e,error:null})).on(ii.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(ii.failData,(e,i)=>({...e,error:i.message})).on(ta,()=>({..._s})),_e={useApplications:yh},Je={getApplicationsFx:ni,getUserDataApplicationsFx:si,postApplicationFx:Hn,getWorkerPosts:ii},wh={clearStore:ta},_h=Object.freeze(Object.defineProperty({__proto__:null,effects:Je,events:wh,selectors:_e},Symbol.toStringTag,{value:"Module"})),ks={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},kh=()=>W(Sh),ia=S(),na=S(),sa=S(),Sh=X(ks).on(ia,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(na,e=>({...e,isOpen:!1})).on(sa,()=>({...ks})),oa={useConfirm:kh},qe={evokeConfirm:ia,closeConfirm:na,clearStore:sa},Th=Object.freeze(Object.defineProperty({__proto__:null,events:qe,selectors:oa},Symbol.toStringTag,{value:"Module"})),Eh=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:W(p).data,loading:W(r.pending),error:W(p).error,completed:W(p).completed}),o=S(),a=L(async u=>{try{return(await i.post(u)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=L(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(u){throw new Error(u)}return n.data}),c=S(),p=X(n).on(r,u=>({...u,error:null})).on(r.doneData,(u,h)=>({...u,data:h})).on(r.failData,(u,h)=>({...u,error:h.message})).on(o,(u,h)=>({...u,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:$h,events:Ch,selectors:Ph}=Eh({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Lu,post:zu}}),Oh=Object.freeze(Object.defineProperty({__proto__:null,effects:$h,events:Ch,selectors:Ph},Symbol.toStringTag,{value:"Module"})),aa=S(),ra=S(),la=S(),ca=S(),yi=L(async()=>{const i=(await Ru())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});P({clock:yi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:Y.evokePopUpMessage});P({clock:yi.doneData,fn:()=>!0,target:la});P({clock:yi.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:Y.evokePopUpMessage});const hi=L(async()=>{try{return(await Iu())[0]}catch(e){throw new Error(e)}});P({clock:ra,target:yi});P({clock:aa,target:hi});const da=S(),Ah=hi.pending,Dh=yi.pending,Nh=X(!1).on(ca,(e,i)=>i),Ih=X(!1).on(la,(e,i)=>i),Rh=X(null).on(hi,()=>null).on(hi.failData,(e,i)=>i.message),Lh=X(null).on(hi.doneData,(e,i)=>i).on(da,()=>null),pa={$error:Rh,$electronicInteractionStore:Lh,$completed:Nh,$done:Ih,$loading:Ah,$workerLoading:Dh},jn={getElectronicInteraction:aa,postElectronicInteraction:ra,changeCompleted:ca,clearStore:da},zh=Object.freeze(Object.defineProperty({__proto__:null,events:jn,stores:pa},Symbol.toStringTag,{value:"Module"})),oe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Ss=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),oe(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),oe(n,"extraWeird")}},Oi=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Ss(-30*11),maxValueInput:Ss(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Ai={kvdCert:Oi({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Oi({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Oi({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Oi({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},$e=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const c=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const p=new Date(a.minValueInput);if(c<p)return!0}if(a.maxValueInput){const p=new Date(a.maxValueInput);if(c>p)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(c=>!!c.files.length)})&&n&&s},Mh={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Fh=()=>Object.keys(He).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),ua=(e="")=>({[e]:{...Fh(),[He["settings-appearance"]]:{id:He["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[He["settings-home-page"]]:{id:He["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[He["settings-customize-menu"]]:{id:He["settings-customize-menu"],property:{pages:qi}},[He["settings-notifications"]]:{id:He["settings-notifications"],property:Mh}}});var He=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(He||{});const wn={settings:ua(),error:null,completed:!1};let Le;const Bh=()=>({settings:W(Mi).settings[Le],error:W(Mi).error,completed:W(Mi).completed}),Hh=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},ha=L(e=>{Le=e;const i=JSON.parse(localStorage.getItem(q.NewSettings)??"{}")[Le];return Hh(i,ua(e)[e])}),xa=S(),ga=S(),fa=S(),Mi=X(wn).on(ga,(e,i)=>({...e,completed:i.completed})).on(ha.doneData,(e,i)=>({...e,settings:{[Le]:i}})).on(xa,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Le]:{...e.settings[Le],[i]:{...e.settings[Le][i],property:{...e.settings[Le][i].property,[n]:s}}}}})).on(fa,()=>({...wn}));Mi.watch(e=>{if(e!==wn&&Le){const i=JSON.parse(localStorage.getItem(q.NewSettings)??JSON.stringify({}));i[Le]=e.settings[Le],localStorage.setItem(q.NewSettings,JSON.stringify(i))}});const Bt={useSettings:Bh},ji={updateSetting:xa,changeCompleted:ga,clearStore:fa},Uh={getLocalSettingsFx:ha},xt=()=>{var a,r;const{settings:e}=Bt.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),p=i.property.lightThemeRange??0,u=c>+p[0]&&c<+p[1],h=i.property.scheduledLightTheme?u?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const p=c?"dark":"light";return document.documentElement.setAttribute("data-theme",p),ji.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:p}),p})},[]);return{theme:n,switchTheme:o}},Wh=d.button`
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

    ${ne.isTablet} {
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
`;function y(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:p,align:u,isChosen:h,padding:x,shrinkTextInMobile:g,fixedInMobile:m,direction:f="horizontal",isActive:b=!0,height:v,notActiveClickMessage:$,flipped:j,...E}=e,k=V=>{b?s==null||s(V):$&&Y.evokePopUpMessage({type:"failure",message:$,time:1e4})};return t.jsxs(Wh,{text:!!n,onClick:k,isChosen:h,width:o,minWidth:a,background:r,padding:x,textColor:c,shrinkTextInMobile:g,hoverBackground:p,align:u,direction:f,isActive:b,fixedInMobile:m,height:v,flipped:j,...E,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const _n=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Ts=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Vh=d.div`
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
`,Gh=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],Qi=d.div.withConfig({shouldForwardProp:e=>!Gh.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Ts(n):_n(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?_n(i):Ts(n)};
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
`,Yh=d.div`
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
`;function F({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Yh,{pulse:s,size:i,shape:e,margin:n})}const qh=d(Qi)`
    height: 100%;
`,Jh=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(qh,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(F,{...o,key:a}))}),mt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Xh({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:mt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:mt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:mt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:mt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:mt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:mt(n),children:i});default:return t.jsx("h1",{className:"title",style:mt(n),children:i})}}const Kh=d.div`
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
`,Qh=d.span`
    color: var(--red);
    margin-right: 5px;
`,Zh=d.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function M(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:p=!1,visible:u=!0}=e;return u?t.jsxs(Kh,{size:o,className:"title-wrapper",align:c,bottomGap:p,iconColor:n,children:[i,t.jsxs(Xh,{size:o,width:r,children:[a&&t.jsx(Qh,{children:"*"}),t.jsx(Zh,{width:r,children:s})]})]}):null}const ex=(e,i,n)=>n?"#fff":e?_[kt[i].color].dark3:_[kt[i].color].light3,tx=d.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>ex(i,e,n)};
    background: ${({type:e,solidBackground:i})=>_[kt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>_[kt[e].color][i?"main":"light2"]};
    }
`,ix=()=>t.jsx(Jh,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function J({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:p,gap:u,lineHeight:h,solidBackground:x=!1,align:g="left",visible:m=!0,loading:f=!1}){if(!m)return null;const{theme:b}=xt();return t.jsxs(tx,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:p,gap:u,lineHeight:h,solidBackground:x,children:[t.jsx(M,{size:4,align:g,icon:n===null?null:n??kt[e].icon({}),children:a??kt[e].title}),r&&t.jsx(y,{onClick:r,icon:t.jsx(Ke,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),f&&t.jsx(ix,{})]})}d.div`
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
        background: ${({reached:e,current:i})=>i?"var(--reallyBlue)":e?_.green.main:_.grey.main};
        outline: 6px solid
            ${({reached:e,current:i})=>i?_.blue.transparent3:e?_.green.transparent3:_.grey.transparent3};
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
`;const nx=d.div`
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
        background: ${({reached:e})=>e?_.green.main:"none"};
    }
`,sx=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(nx,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),ue=d.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,ox="/assets/sad-emoji-0c60bf90.gif",ie=d.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,ax=d.div`
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
`;function he({text:e,image:i,size:n,children:s}){return t.jsxs(ax,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||ox,alt:"груфтим("}):i}),t.jsx(ie,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const rx="/assets/loading-c8041cd3.gif",lx=d.img`
    width: 40px;
`;function gt(e){return t.jsx(lx,{...e,src:rx,alt:"loading",className:"loading-circle"})}const cx="/assets/logo-4d9aa449.png",dx="/assets/mospolytech-logo-white-b1e4f630.png",px=d.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function Zi({width:e,className:i,short:n=!1}){return t.jsx(px,{width:e,className:i??"logo",children:t.jsx("img",{src:n?dx:cx,alt:"Logo"})})}const ux=d.img``;function Un({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(F,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(ux,{src:i,alt:o,height:n,width:s})}const hx=d.div`
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
`;function ma({size:e,color:i}){return t.jsx(hx,{size:e,color:i?_[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const xx=d.div`
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
`;function gx(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:p=!0}=e;return t.jsxs(xx,{isActive:p,width:s,textAreaAppearance:c,children:[t.jsx(M,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:u=>n(u.target.value),placeholder:o,required:a,value:i})]})}const fx=d.button`
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
`,Rt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:p="Nope",pulsing:u,isDone:h=!1,isActive:x=!0,isLoading:g=!1,completed:m=!1,repeatable:f=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(Y.evokePopUpMessage({message:c,type:"success"}),f&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const v=()=>{if(x&&!h&&!g)return i();b&&Y.evokePopUpMessage({message:p,type:"failure"})};return t.jsx(fx,{isLoading:g,background:a,className:"submit-button",completed:m,isActive:x&&!h&&!m,onClick:v,isDone:h,width:n,height:s,repeatable:f,tabIndex:x&&!h?0:-1,pulsing:u&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Td,{})," ",r]}):g?t.jsx(gt,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},mx=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,bx=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},vx={groupMask:mx,phoneMask:bx},yx=(e,i,n,s,o,a,r,c)=>{const[p,u]=l.useState(n),[h,x]=l.useState(s??!1);l.useEffect(()=>{u(n)},[n]);const g=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:p,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>u(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(i(c?r?r(v.target.value,e):n==="tel"?vx.phoneMask(v):n==="email"?g(v.target.value):v.target.value:v.target.value),n==="date"&&(o||a)){const $=new Date(v.target.value);let j=!1;if(o){const E=new Date(o);j=$<E}if(a&&!j){const E=new Date(a);j=$>E}x(j)}}}},jx=d.div`
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
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({leftIcon:e,inputAppearance:i})=>e?"30px":i?"10px":"0"};
        padding-right: ${({inputAppearance:e})=>e?"35px":"0"};
        max-height: 36px;
        border: ${({danger:e})=>e&&`2px solid ${_.red.main}`};

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
`,lt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:p,minWidth:u,customMask:h,placeholder:x="Введите сюда",type:g="text",danger:m,alertMessage:f,loading:b=!1,isActive:v=!0,inputAppearance:$=!0,mask:j=!1,autocomplete:E=!1,minValue:k=void 0,maxValue:V=void 0,maxLength:O=void 0}=i,{inputType:R,buttonOnClick:ee,danger:D,handleOnChange:re,phoneMaskKeyDown:ge}=yx(s,o,g,m,k,V,h,j);return t.jsxs(jx,{leftIcon:!!a,isActive:v,inputAppearance:$,width:p,danger:D,minWidth:u,children:[t.jsx(M,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(J,{type:"alert",visible:!!f,icon:t.jsx(Ed,{}),title:f??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:x,min:k,max:V,maxLength:O,step:V?.1:void 0,type:R,placeholder:x,value:s??"",autoComplete:E?"on":"off",onKeyDown:ke=>g==="tel"&&ge(ke),onChange:re,required:c,readOnly:!v,ref:n}),g!=="password"?!!(s!=null&&s.length)&&$&&(b?t.jsx(gt,{}):t.jsx(y,{icon:t.jsx(Ke,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(y,{icon:R==="password"?t.jsx($d,{}):t.jsx(vo,{}),tabIndex:-1,onClick:ee})]})}),wx=d.div`
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
`,_x="/assets/thinking-emoji-f3c10f79.gif",kx=["loading"],Sx=d.div.withConfig({shouldForwardProp:e=>!kx.includes(e)})`
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
`,ft=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Sx,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(he,{text:n,image:a&&_x,children:!a&&t.jsx(y,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Nn,{})})})}):t.jsx(gt,{})}),t.jsx("div",{className:"content",children:e})]})),Tx=d.a`
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
`,Ex=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:p,minHeight:u,padding:h,isActive:x=!0,isChosen:g=!1})=>t.jsxs(Tx,{text:!!i,onClick:m=>x&&n&&n(m),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:x,height:p,padding:h,minHeight:u,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),wi=l.memo(Ex),ba=d.div`
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
`,Ht=d.div`
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
`,$x=d.a`
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
`,Cx=({title:e,link:i,type:n})=>t.jsxs($x,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(N,{}):t.jsx(Cd,{})}),t.jsx("div",{className:"title",children:e})]}),Px=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Ox={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Ax=()=>Pe(Dx),va=S(),ya=S(),ja=S(),Dx=X(Ox).on(va,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Px(n,220,s),open:!0,content:i,type:o})).on(ya,e=>({...e,open:!1})).on(ja,(e,{position:i})=>({...e,position:i})),Me={open:va,close:ya,changePosition:ja},Nx={useContextMenu:Ax},Ix=()=>{const e=navigator.userAgent;return e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":"Windows"},un=new Set,wa=(e,i)=>{l.useEffect(()=>{window.addEventListener("keydown",n=>{un.add(n.key),!e.slice(0,e.length-1).find(o=>!un.has(o))&&e[e.length-1]===n.key&&i()}),window.addEventListener("keyup",n=>{un.delete(n.key)})},[])},Qe=d.div`
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

    ${ne.isMobile} {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        /* gap: 1rem; */
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,T=d.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({$wrap:e})=>e&&"wrap"};
`,ve=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},_a=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=ve(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},ka=e=>/[A-Za-z]/.test(e),Rx=d.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${_.blue.transparent2};
    }

    &:focus-visible {
        background: ${_.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,Sa=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!ka(e))return null;const s=_a(e),o=()=>i(s);return t.jsxs(ie,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Rx,{tabIndex:10,children:s})]})};function Ut(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function ct(e,i,n=0){return e>i?n:e<n?i:e}const Lx=d.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,zx=d(Qe)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,Mx=d.div`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({selected:e})=>e?"600":"500"};
    color: ${({selected:e})=>e?"#fff":"var(--text)"};
    background: ${({selected:e})=>e?_.blue.main:"transparent"};
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
        background: ${({selected:e})=>e?_.blue.main:"var(--theme-1)"};
    }
`,Ta=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:p,customMask:u,onHintClick:h,validationCheck:x=!1})=>{const[g,m]=l.useState(0),[f,b]=l.useState(!1),v=l.useRef(null),$=l.useRef(null),j=l.useRef(null);Ut(v,()=>b(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var O;return(O=j.current)==null?void 0:O.focus()},50)},[c]);const E=O=>{var R,ee;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),O.key==="ArrowDown"?((R=$.current)==null||R.scrollIntoView({block:"start",behavior:"smooth"}),typeof g=="number"&&m(ct(g+1,((a==null?void 0:a.length)??1)-1,0))):O.key==="ArrowUp"?((ee=$.current)==null||ee.scrollIntoView({block:"end",behavior:"smooth"}),typeof g=="number"&&m(ct(g-1,((a==null?void 0:a.length)??1)-1,0))):O.key==="Enter"?(a!=null&&a[g??0].title&&p(a==null?void 0:a[g??0].title),b(!1),h==null||h(a==null?void 0:a[g??0])):m(0)},k=O=>()=>{m(O),p((a==null?void 0:a[O].title)??""),b(!1),h==null||h(a==null?void 0:a[O])},V=()=>{a!=null&&a.length&&b(!0)};return t.jsxs(Lx,{width:i,onKeyDown:E,onMouseDown:V,ref:v,children:[t.jsx(lt,{value:e,placeholder:n,leftIcon:r??t.jsx(_t,{}),inputAppearance:s,setValue:p,loading:o,width:i,mask:!0,customMask:u,ref:j}),t.jsx(Sa,{setValue:p,value:e,visible:x}),f&&t.jsx(zx,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:E,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:O,icon:R},ee)=>{const D=g===ee;return t.jsxs(Mx,{onClick:k(ee),ref:D?$:null,selected:D,children:[R&&t.jsx("div",{className:"icon",children:R}),t.jsx("span",{children:O})]},O+ee)})})]})},en=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},oi=e=>({size:i})=>e[i],Es={small:"30px",middle:"44px",big:"68px"},Ea={small:"8px",middle:"12px",big:"16px"},Fx={small:"0.8rem",middle:"0.9rem",big:"1rem"},Bx=d.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${oi(Es)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--search2)"};
    border-radius: ${oi(Ea)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${oi(Es)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    @media (max-width: 1000px) {
        font-size: 11px;
        min-height: 40px;
        border-radius: var(--brLight);

        .slider-body {
            height: 34px;
        }
    }
`,Hx=d.div`
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
        font-size: ${oi(Fx)};
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
`,Ux=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(Hx,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),Wx=l.memo(Ux),Vx=d.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${oi(Ea)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,Gx=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(Vx,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},Yx=l.memo(Gx),qx=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),p=l.useRef(null),{width:u}=en();return l.useEffect(()=>{var x;const h=((x=p==null?void 0:p.current)==null?void 0:x.offsetWidth)??u;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[u,p.current]),t.jsx(Bx,{ref:p,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Yx,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,x)=>t.jsx(Wx,{size:a,id:x,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},x))]})})},Wn=l.memo(qx),Jx=300,$a=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Jx})=>{const[c,p]=l.useState(e??""),[u,h]=l.useState(""),[x,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const m=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(m)}else u.length!==0&&(n==null||n(c),p(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const m=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[c,p,x]},St=d.span`
    color: #fff;
    background: ${({color:e})=>_[e??"red"].light1};
    position: ${({position:e})=>e??"absolute"};
    box-shadow: ${({color:e,shadow:i})=>i&&`0 0 35px ${_[e??"red"].main}`};
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
    animation: ${({pulsing:e})=>e&&"2s notif-pulsing infinite"};

    @keyframes notif-pulsing {
        0% {
            outline: 0px solid ${({color:e})=>_[e??"red"].main};
        }
        50% {
            outline: 10px solid transparent;
        }
        100% {
            outline: 0px solid transparent;
        }
    }
`,Xx=d.div`
    min-width: ${({size:e})=>e+"px"};
    min-height: ${({size:e})=>e+"px"};
    max-width: ${({size:e})=>e+"px"};
    max-height: ${({size:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e??"15px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({backgroud:e})=>_[e]?_[e].main:e};
    transition: 0.2s;

    svg {
        color: #fff;
        width: 100%;
        height: 100%;
        scale: 0.5;
    }
`,Oe=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(Xx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(St,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Ca=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:p="Поиск по меню",validationCheck:u=!1})=>{const h=v=>{n(i(v,e))},x=()=>{n(null)},[g,m,f]=$a({onDebounce:h,onClear:x}),b=v=>{m(v),o&&o(v)};return t.jsx(Ta,{value:g??"",setValue:b,inputAppearance:s,placeholder:p,validationCheck:u,loading:c?f:!1,hints:a,width:r})},Kx=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(wx,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Pa=d.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Qx=d(Pa)`
    background: var(--almostTransparentOpposite);
`,Zx=d(Pa)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>_[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Oa=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Te,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Qx,{},a)),t.jsx(Zx,{color:n,current:i})]}),eg=d.div`
    transition: 0.1s;
    opacity: ${({invisibleOnFalse:e,checked:i})=>e?i?1:0:1};
    transform: scale(${({invisibleOnFalse:e,checked:i})=>e?i?1:.8:1});
    display: flex;
    align-items: center;
    opacity: ${({isActive:e})=>!e&&.7};

    .checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: ${({fontSize:e})=>e??"1rem"};
        margin-left: 6px;
    }

    svg {
        color: ${({color:e})=>e??"var(--reallyBlue)"};
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`,Xe=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>o?t.jsxs(eg,{checked:i,invisibleOnFalse:r,fontSize:s,onClick:()=>{a&&n(!i)},isActive:a,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||r?t.jsx(yo,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(In,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"checkbox-text",children:e})]}):null,Aa=e=>e.split("/")[1],tg=e=>e*1024*1024,ig=(e,i)=>(i??xu).indexOf(e.type)!==-1,$s=(e,i,n,s,o=gu)=>{if(n&&i.length+e.length>n)return Y.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return ig(e[a],s)?e[a].size>tg(o)?(Y.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),Y.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>Aa(r))}`,type:"failure",time:5e3}),i)},ng=d.label`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    transition: 0.2s border;
    border: ${({showPulse:e})=>e?`2px dashed ${_.blue.main}`:`2px dashed ${_.grey.main}`};
    background: ${({showPulse:e})=>e?_.blue.transparent3:""};
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
`,Ce=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},sg=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,p]=l.useState(!1),u=f=>{const b=f.target.files;b!=null&&b.length&&n($s(b,e,i,o,a))},h=f=>{f.preventDefault()},x=f=>{f.preventDefault(),p(!1);const b=f.dataTransfer.files;b.length&&n($s(b,e,i,o,a))},g=f=>{f.preventDefault(),p(!0)},m=f=>{f.preventDefault(),p(!1)};return t.jsxs(ng,{isActive:s,showPulse:c,onDragOver:f=>s&&h(f),onDragEnter:f=>s&&g(f),onDragLeave:f=>s&&m(f),onDrop:f=>s&&x(f),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:u}),t.jsxs("div",{className:"message",children:[t.jsx(pn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(pn,{className:"icon-1"}),t.jsx(pn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(ie,{align:"center",children:t.jsx(Ce,{words:[`Форматы: ${o?o.map(f=>Aa(f)).join(", "):"jpg, png, pdf"}`,`Макс. файлов: ${i}`]})})]})]})},og=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},ag=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),rg=d.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${_.grey.transparent3};
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
`,lg=({file:e,files:i,setFiles:n})=>{const{open:s}=Z(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const p=new FileReader;p.onloadend=()=>{s(t.jsx(Un,{src:p.result,loading:!1,width:"500px",height:""}))},c&&p.readAsDataURL(c)},a=r=>qe.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(ag(r,e.name,i))});return t.jsxs(rg,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Pd,{}):t.jsx(Od,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ie,{fontSize:"0.7em",children:og(e.size)})]})]}),t.jsx(y,{icon:t.jsx(Ke,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},cg=({files:e,setFiles:i})=>t.jsx(Te,{title:"Список файлов",visible:!!e.length,onDelete:()=>qe.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(lg,{file:n,files:e,setFiles:i},n.name))}),Da=e=>t.jsxs(Te,{gap:12,children:[t.jsx(sg,{...e}),t.jsx(cg,{files:e.files,setFiles:e.setFiles})]}),dg=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,pg=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(dg,{children:[t.jsx(Xe,{...e}),n&&t.jsx(Da,{...i})]}),ug=d.div`
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
`,Na=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const p=new Date(n[0]),u=new Date(p);u.setDate(p.getDate()+r),n[1]=oe(u,"extraWeird")}return t.jsxs(ug,{children:[t.jsx(M,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(J,{title:"Внимание",type:"alert",icon:t.jsx(di,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(lt,{value:n[0],danger:!o,setValue:p=>s([p,n[1]]),type:"date",minValue:c}),t.jsx(lt,{value:n[1],setValue:p=>s([n[0],p]),type:"date",danger:!o})]})]})},hg=e=>{var f,b,v;const{width:i}=en(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[c,p]=l.useState(0),[u,h]=l.useState(0),x=((f=n.current)==null?void 0:f.clientWidth)??1,g=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(x+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=c,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[c,(v=n.current)==null?void 0:v.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:p,pageOffset:x,amountOfPages:g,currentPage:u,setCurrentPage:h,handleScroll:$=>{h(Math.ceil($.currentTarget.scrollLeft/(x+(e??0))))}}},xg=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:p,onAdd:u,onWatchMore:h,onDelete:x,showPages:g,innerPadding:m,minWidth:f,wrapOnMobile:b,position:v,direction:$="vertical",verticalAlign:j="top",horizontalAlign:E="left",scroll:k=!0,visible:V=!0,...O}=e;if(!V)return null;const{listRef:R,leftArrow:ee,rightArrow:D,handleScroll:re,setScrollLeft:ge,pageOffset:ke,amountOfPages:et,currentPage:Ve}=hg(s);return t.jsxs(Vh,{padding:r,position:v,width:o,minWidth:f,height:a,children:[t.jsxs(M,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,u&&t.jsx(y,{icon:t.jsx(pi,{}),width:"35px",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:u}),h&&t.jsx(y,{width:"50px",height:"15px",background:_.blue.transparent2,textColor:_.blue.light1,onClick:h,text:"Ещё"}),x&&t.jsx(y,{width:"fit-content",height:"15px",background:_.grey.transparent3,textColor:"var(--reallyBlue)",onClick:x,text:"Удалить"})]}),t.jsx(Qi,{verticalAlign:j,horizontalAlign:E,direction:$,ref:R,gap:s,width:o,height:a,fontSize:c,wrap:p,innerPadding:m,scroll:k,wrapOnMobile:b,onScroll:re,...O,children:n}),(D||ee)&&t.jsxs("div",{className:"bottom-wrapper",children:[ee&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(fi,{}),className:"left-button",textColor:_.grey.main,onClick:()=>{ge(pe=>{var tt;return ct(pe-ke-(s??0),((tt=R.current)==null?void 0:tt.scrollWidth)??0)})}}),g&&t.jsx(Oa,{direction:"horizontal",current:Ve,amount:et}),D&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(pt,{}),className:"right-button",textColor:_.grey.main,onClick:()=>{ge(pe=>{var tt;return ct(pe+ke+(s??0),((tt=R.current)==null?void 0:tt.scrollWidth)??0)})}})]})]})},Te=de.memo(xg),gg=()=>t.jsx("div",{className:"left",children:t.jsxs(Te,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(Zi,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Te,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Q,{to:ls,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(ui,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Q,{to:rl,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Ad,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Q,{to:al,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(di,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Q,{to:ll,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(di,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ue,{}),t.jsx(Q,{to:ol,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Dd,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(wi,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(Rn,{}),align:"left",padding:"0",width:"100%",href:`${A}/index.php`})]})}),fg=()=>{const{search:e}=mi();return de.useMemo(()=>new URLSearchParams(e),[e])},mg=()=>{const e=fg(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,p]=l.useState(!1),u=!!a&&!!s,h=Ft.login,x=f=>{p(f.getModifierState("CapsLock")),f.key==="Enter"&&h({login:s,password:a})},g=f=>{Ft.changeSavePassword({savePassword:f})},m=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:u,handleSavePassword:g,handleKeyPress:x,handleLogin:m,password:a,setPassword:r,capsLock:c,login:s,setLogin:o}},bg=()=>{const{loading:e,error:i,data:n}=fe.useUser(),{isSubmitActive:s,handleKeyPress:o,handleSavePassword:a,handleLogin:r,password:c,setPassword:p,capsLock:u,login:h,setLogin:x}=mg();return t.jsx("div",{className:"right",onKeyDown:o,children:t.jsxs(Te,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(Zi,{width:"50px",short:!0,className:"logo second"}),t.jsx(T,{jc:"space-between",children:t.jsx(M,{size:3,align:"left",children:"Личный кабинет"})}),t.jsxs(J,{type:"info",title:"Уважаемые абитуриенты!",children:["Личный кабинет абитуриента находится по ссылке",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:" lk.mospolytech.ru"})})]}),t.jsxs(Te,{gap:16,scroll:!1,children:[t.jsx(M,{size:4,align:"left",children:"Вход"}),t.jsx(ie,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(J,{type:"failure",visible:!!i,children:i}),t.jsx(J,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(lt,{value:h,setValue:x,title:"Логин",placeholder:"Введите логин"}),t.jsx(lt,{value:c,setValue:p,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:u?"Включен Capslock":void 0}),t.jsx(Xe,{text:"Оставаться в системе",checked:n.savePassword,setChecked:a})]}),t.jsx(Rt,{text:"Вход",action:r,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},vg=d(Qe)`
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
`,yg=()=>{const{data:{isAuthenticated:e}}=fe.useUser();return t.jsxs(vg,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(gg,{}),t.jsx(bg,{})]})},jg=d.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${ne.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,wg=()=>t.jsx(jg,{children:t.jsx(yg,{})}),je=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(he,{text:i,children:o&&t.jsx("a",{href:`${A}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(y,{text:n,icon:t.jsx(Rn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),_g="modulepreload",kg=function(e){return"/"+e},Cs={},w=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=kg(a),a in Cs)return;Cs[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const x=o[h];if(x.href===a&&(!r||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":_g,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((h,x)=>{u.addEventListener("load",h),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Sg=l.lazy(()=>w(()=>import("./index-7aeea131.js"),["assets/index-7aeea131.js","assets/vendor-2bd70a0f.js","assets/get-default-subdivision-902d072d.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js"])),Tg=l.lazy(()=>w(()=>import("./index-8b5d73b5.js"),["assets/index-8b5d73b5.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Eg=l.lazy(()=>w(()=>import("./index-17449831.js"),["assets/index-17449831.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js"])),$g=l.lazy(()=>w(()=>import("./index-ceb4d9be.js"),["assets/index-ceb4d9be.js","assets/vendor-2bd70a0f.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>jb),void 0));const Cg=l.lazy(()=>w(()=>import("./index-a9c8581a.js"),["assets/index-a9c8581a.js","assets/vendor-2bd70a0f.js","assets/index-068e610a.js"])),Pg=l.lazy(()=>w(()=>import("./index-e18a72c4.js"),["assets/index-e18a72c4.js","assets/vendor-2bd70a0f.js","assets/index-9f6900ac.js"])),Og=l.lazy(()=>w(()=>import("./index-056392d6.js"),["assets/index-056392d6.js","assets/vendor-2bd70a0f.js","assets/get-default-subdivision-902d072d.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js"])),Ag=l.lazy(()=>w(()=>import("./index-88391b51.js"),["assets/index-88391b51.js","assets/vendor-2bd70a0f.js","assets/get-default-subdivision-902d072d.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Dg=l.lazy(()=>w(()=>import("./index-39e8f5f6.js"),["assets/index-39e8f5f6.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Ng=l.lazy(()=>w(()=>import("./index-056952b6.js"),["assets/index-056952b6.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js"])),Ig=l.lazy(()=>w(()=>import("./index-804f2aec.js"),["assets/index-804f2aec.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Rg=l.lazy(()=>w(()=>import("./index-04385c9d.js"),["assets/index-04385c9d.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js"])),Lg=l.lazy(()=>w(()=>import("./index-ef154e6b.js"),["assets/index-ef154e6b.js","assets/vendor-2bd70a0f.js","assets/ui-a83e98b7.js","assets/index-b443b8f6.js"])),zg=l.lazy(()=>w(()=>import("./index-b6a38b67.js"),["assets/index-b6a38b67.js","assets/vendor-2bd70a0f.js","assets/ui-a83e98b7.js"])),Mg=l.lazy(()=>w(()=>import("./index-19a5e419.js"),["assets/index-19a5e419.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js"])),Fg=l.lazy(()=>w(()=>import("./index-c86c346e.js"),["assets/index-c86c346e.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Bg=l.lazy(()=>w(()=>import("./index-ce8c0cb1.js"),["assets/index-ce8c0cb1.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-902d072d.js"])),Hg=l.lazy(()=>w(()=>import("./index-8ede841a.js"),["assets/index-8ede841a.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js"])),Ug=l.lazy(()=>w(()=>import("./index-0332fc22.js"),["assets/index-0332fc22.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Wg=l.lazy(()=>w(()=>import("./index-670dd939.js"),["assets/index-670dd939.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Vg=l.lazy(()=>w(()=>import("./index-60414255.js"),["assets/index-60414255.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Gg=l.lazy(()=>w(()=>import("./index-d8a311ee.js"),["assets/index-d8a311ee.js","assets/vendor-2bd70a0f.js","assets/get-default-subdivision-902d072d.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js"])),Yg=l.lazy(()=>w(()=>import("./index-f5c0c409.js"),["assets/index-f5c0c409.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js"])),qg=l.lazy(()=>w(()=>import("./index-2a35eaf9.js"),["assets/index-2a35eaf9.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js"])),Jg=l.lazy(()=>w(()=>import("./index-ec1d72e7.js"),["assets/index-ec1d72e7.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-902d072d.js"])),Xg=l.lazy(()=>w(()=>import("./index-c30d933b.js"),["assets/index-c30d933b.js","assets/vendor-2bd70a0f.js","assets/index-75bdb1c6.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d6f41a5.js","assets/get-default-subdivision-902d072d.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Kg=l.lazy(()=>w(()=>import("./index-f12d3f49.js"),["assets/index-f12d3f49.js","assets/vendor-2bd70a0f.js"]));l.lazy(()=>w(()=>import("./index-4766f3e2.js"),["assets/index-4766f3e2.js","assets/vendor-2bd70a0f.js","assets/index-5fc336dc.js","assets/index-b443b8f6.js"]));const Vn=l.lazy(()=>w(()=>import("./index-39649c08.js"),["assets/index-39649c08.js","assets/vendor-2bd70a0f.js"])),Qg=l.lazy(()=>w(()=>import("./index-325f4a96.js"),["assets/index-325f4a96.js","assets/vendor-2bd70a0f.js"])),Zg=l.lazy(()=>w(()=>import("./index-ffd45b9c.js"),["assets/index-ffd45b9c.js","assets/vendor-2bd70a0f.js","assets/send-hr-form-holiday-work-2af33517.js"])),ef=l.lazy(()=>w(()=>import("./index-4c39aabc.js"),["assets/index-4c39aabc.js","assets/vendor-2bd70a0f.js"])),tf=l.lazy(()=>w(()=>import("./index-2f612911.js"),["assets/index-2f612911.js","assets/vendor-2bd70a0f.js"])),nf=l.lazy(()=>w(()=>import("./index-c93b760c.js"),["assets/index-c93b760c.js","assets/vendor-2bd70a0f.js","assets/send-hr-form-holiday-work-2af33517.js"])),sf=l.lazy(()=>w(()=>import("./index-0ece1e8d.js"),["assets/index-0ece1e8d.js","assets/vendor-2bd70a0f.js"])),of=l.lazy(()=>w(()=>import("./index-badec693.js"),["assets/index-badec693.js","assets/vendor-2bd70a0f.js"])),af=l.lazy(()=>w(()=>import("./index-cab3e106.js"),["assets/index-cab3e106.js","assets/vendor-2bd70a0f.js"])),rf=l.lazy(()=>w(()=>import("./index-71d59782.js"),["assets/index-71d59782.js","assets/vendor-2bd70a0f.js","assets/send-hr-form-work-transfer-a7327165.js"])),lf=l.lazy(()=>w(()=>import("./index-61146503.js"),["assets/index-61146503.js","assets/vendor-2bd70a0f.js","assets/send-hr-form-work-transfer-a7327165.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Ym),void 0));l.lazy(()=>w(()=>import("./index-6c1aa9d3.js"),["assets/index-6c1aa9d3.js","assets/vendor-2bd70a0f.js","assets/help-links-0e16ca3a.js"]));const cf=l.lazy(()=>w(()=>import("./index-5795e6bb.js"),["assets/index-5795e6bb.js","assets/vendor-2bd70a0f.js"])),Ia=l.lazy(()=>w(()=>import("./index-e92964f6.js"),["assets/index-e92964f6.js","assets/vendor-2bd70a0f.js","assets/index-5fc336dc.js","assets/index-b443b8f6.js"])),Ra=l.lazy(()=>w(()=>import("./index-4766f3e2.js"),["assets/index-4766f3e2.js","assets/vendor-2bd70a0f.js","assets/index-5fc336dc.js","assets/index-b443b8f6.js"])),df=l.lazy(()=>w(()=>import("./index-51667d66.js"),["assets/index-51667d66.js","assets/vendor-2bd70a0f.js"]));l.lazy(()=>w(()=>import("./index-46e3828f.js"),["assets/index-46e3828f.js","assets/vendor-2bd70a0f.js","assets/index.esm-79fc39e7.js"]));const pf=l.lazy(()=>w(()=>import("./index-5aa1ba23.js"),["assets/index-5aa1ba23.js","assets/vendor-2bd70a0f.js"])),La=l.lazy(()=>w(()=>import("./index-fc6dc4ca.js"),["assets/index-fc6dc4ca.js","assets/vendor-2bd70a0f.js","assets/help-links-0e16ca3a.js"])),uf=l.lazy(()=>w(()=>import("./index-14278866.js"),["assets/index-14278866.js","assets/vendor-2bd70a0f.js"])),hf=l.lazy(()=>w(()=>import("./index-fcd3abfd.js"),["assets/index-fcd3abfd.js","assets/vendor-2bd70a0f.js"])),xf=l.lazy(()=>w(()=>import("./index-d459b477.js"),["assets/index-d459b477.js","assets/vendor-2bd70a0f.js"])),gf=l.lazy(()=>w(()=>import("./index-b99cee4e.js"),["assets/index-b99cee4e.js","assets/vendor-2bd70a0f.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>av),void 0));const ff=l.lazy(()=>w(()=>import("./index-324bc63f.js"),["assets/index-324bc63f.js","assets/vendor-2bd70a0f.js"])),za=l.lazy(()=>w(()=>import("./index-40223657.js"),["assets/index-40223657.js","assets/vendor-2bd70a0f.js","assets/index-b443b8f6.js"])),mf=l.lazy(()=>w(()=>import("./index-8131d4b3.js"),["assets/index-8131d4b3.js","assets/vendor-2bd70a0f.js","assets/index-575ea297.js"])),bf=l.lazy(()=>w(()=>import("./index-207f5ac4.js"),["assets/index-207f5ac4.js","assets/vendor-2bd70a0f.js","assets/index-575ea297.js"])),vf=l.lazy(()=>w(()=>import("./index-45155a1a.js"),["assets/index-45155a1a.js","assets/vendor-2bd70a0f.js","assets/index-575ea297.js"])),yf=l.lazy(()=>w(()=>import("./index-07dc4c48.js"),["assets/index-07dc4c48.js","assets/vendor-2bd70a0f.js"])),jf=l.lazy(()=>w(()=>import("./index-08163960.js"),["assets/index-08163960.js","assets/vendor-2bd70a0f.js","assets/index.esm-79fc39e7.js"])),wf=l.lazy(()=>w(()=>import("./index-e117de3e.js"),["assets/index-e117de3e.js","assets/vendor-2bd70a0f.js"])),_f=l.lazy(()=>w(()=>import("./index-02ebe613.js"),["assets/index-02ebe613.js","assets/vendor-2bd70a0f.js"])),kf=l.lazy(()=>w(()=>import("./index-48e491d2.js"),["assets/index-48e491d2.js","assets/vendor-2bd70a0f.js"])),Sf=l.lazy(()=>w(()=>import("./index-2a1561f5.js"),["assets/index-2a1561f5.js","assets/vendor-2bd70a0f.js","assets/index-068e610a.js"])),Tf=l.lazy(()=>w(()=>import("./index-e4daf3f5.js"),["assets/index-e4daf3f5.js","assets/vendor-2bd70a0f.js"])),Ef=l.lazy(()=>w(()=>import("./index-812b7d89.js"),["assets/index-812b7d89.js","assets/vendor-2bd70a0f.js","assets/help-links-0e16ca3a.js"])),$f=l.lazy(()=>w(()=>import("./index-27f263b4.js"),["assets/index-27f263b4.js","assets/vendor-2bd70a0f.js","assets/help-links-0e16ca3a.js"])),Cf=l.lazy(()=>w(()=>import("./index-9eda4acf.js"),["assets/index-9eda4acf.js","assets/vendor-2bd70a0f.js"])),Pf=l.lazy(()=>w(()=>import("./index-6c1aa9d3.js"),["assets/index-6c1aa9d3.js","assets/vendor-2bd70a0f.js","assets/help-links-0e16ca3a.js"])),hn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},Ma=()=>{const e=bi(),{allRoutes:i}=Fe.useMenu(),n=i??{},[s,o]=l.useState(hn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(hn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(hn(a.pathname,n))}),[e,n]),s},Of={small:"600px",middle:"700px",big:"963px",large:"100%"},Fa=e=>Of[(e==null?void 0:e.pageSize)??"middle"],Af=d(Qe)`
    position: relative;

    ${ne.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${ne.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,Df=d.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${ne.isMobile} {
        top: -4px;
        right: 7px;
    }
`,Nf=d.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${ne.isMobile} {
        top: 40px;
    }
`,_i=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=Ma(),r=Fa(a);return t.jsx(an,{padding:"0 0 10px 0",children:t.jsxs(Af,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(Df,{children:i}),n&&t.jsx(Nf,{children:n}),e]})})});_i.displayName="PageBlock";const If=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(T,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(T,{gap:"16px",ai:"center",children:[t.jsx(F,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(T,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(F,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(F,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))});function Lt(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Rf=d.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Lf=d.div``,zf=d.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Ba=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Rf,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Lf,{children:e}),t.jsx(zf,{isOpen:o,children:i})]})},Ha=S(),Ua=S(),Mf=X(!1).on(Ua,()=>!0).on(Ha,()=>!1),Ps={close:Ha,open:Ua},Ff={$isModalOpen:Mf},Gn=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Bf=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=vi(Ff.$isModalOpen),p=a.length>1,u=l.useCallback(()=>{p&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,v)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,v??""])):(r(()=>[b]),o(v?[v]:[])),n(()=>!0),Ps.open())},[r,n,a,i]),x=l.useCallback(()=>{n(()=>!1),Ps.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),f=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(Gn.Provider,{value:{back:u,open:h,close:x,isOpen:i,canBack:p,component:g,title:m,setComponent:f},children:e})},Z=()=>{const{open:e,isOpen:i,...n}=l.useContext(Gn);return{open:e,isOpen:i,...n}},Hf="2.2.0",Wa=()=>t.jsx(J,{icon:null,type:"info",title:Hf,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Ie=({color:e,children:i})=>t.jsx(Oe,{color:e,children:i}),Uf=()=>({info:t.jsx(Ie,{color:"grey",children:t.jsx(Ae,{})}),message:t.jsx(Ie,{color:"red",children:t.jsx(Ln,{})}),alert:t.jsx(Ie,{color:"purple",children:t.jsx(zn,{})}),"payment-dorm":t.jsx(Ie,{color:"green",children:t.jsx(at,{})}),"payment-ed":t.jsx(Ie,{color:"green",children:t.jsx(at,{})}),"digital-services":t.jsx(Ie,{color:"red",children:t.jsx(N,{})}),"doc-for-review":t.jsx(Ie,{color:"blue",children:t.jsx(N,{})}),"hr-applications":t.jsx(Ie,{color:"green",children:t.jsx(N,{})}),"kpi-pps":t.jsx(Ie,{color:"pink",children:t.jsx(jo,{})}),schedule:t.jsx(Ie,{color:"pink",children:t.jsx(ut,{})}),"version-update":t.jsx(Wa,{}),"electronic-interaction":t.jsx(Ie,{color:"blue",children:t.jsx(wo,{})})}),Wf=d(Q)`
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
`,Vf=d.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,Gf={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},Yf={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},qf={small:"0px",middle:"1px",large:"2px",big:"3px"},Va=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:p,onClose:u,bottomMargin:h,closeAnimation:x=!0,loadingRemove:g=!1,canClose:m=!0,fullText:f=!0,maxLetters:b=200,size:v="middle"})=>{const $=oe(o,"short"),{close:j}=Z(),[E,k]=l.useState(!1),V=R=>{R.stopPropagation(),R.preventDefault(),x?(k(!0),setTimeout(()=>{u==null||u()},300)):u==null||u()},O=()=>{a==null||a(),m&&dt.clearById({id:e,pageId:c}),j()};return t.jsx(Ba,{forceState:!E,bottomMargin:h,children:t.jsxs(Wf,{to:p??"",onClick:O,children:[t.jsx("span",{className:"left-icon",children:Uf()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ie,{fontSize:"0.7rem",children:t.jsx(Ce,{words:[$??"",s??""]})}),t.jsxs(T,{d:"column",gap:qf[v],ai:"flex-start",children:[t.jsx(Vf,{fontSize:Gf[v],children:f?i:Lt(i,b)}),t.jsx(ie,{fontSize:Yf[v],children:f?n:Lt(n,b)})]})]}),u&&t.jsx(y,{isActive:!(g&&E),icon:t.jsx(Ke,{}),background:"transparent",onClick:V})]})})},Ga=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{dt.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(T,{d:"column",children:e.map((o,a)=>l.createElement(Va,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Jf=d.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,Ya=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=We.useLkNotifications();return l.useEffect(()=>{o&&Y.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{dt.clearAllVisible()},[]),t.jsxs(Jf,{children:[s.length===0&&!n&&t.jsx(an,{height:"100%",children:t.jsx(he,{text:i??"Нет новых уведомлений",image:i?t.jsx(ot,{}):t.jsx(Nd,{}),size:"70px"})}),t.jsxs(T,{d:"column",gap:"16px",children:[t.jsx(J,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Ga,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(If,{quantity:10})]})},Xf=()=>{const{notifications:e,clearAllError:i,clearAllLoading:n}=We.useLkNotifications(),s=()=>{qe.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>dt.clearAll()})};return l.useEffect(()=>{i&&Y.evokePopUpMessage({type:"failure",message:i})},[i]),t.jsx(an,{padding:"10px",children:t.jsxs(_i,{topRightCornerElement:t.jsx(Q,{to:cl,children:t.jsx(y,{icon:t.jsx(Mn,{}),height:"35px",width:"35px"})}),children:[t.jsx(Ya,{}),e.length>0?n?t.jsx(T,{jc:"center",children:t.jsx(gt,{width:"40px",height:"40px"})}):t.jsx(y,{text:"Очистить все",onClick:s,width:"100%"}):null]})})},Kf=d.div`
    width: 100%;
`,Qf=()=>t.jsxs(Kf,{children:[t.jsx(F,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(F,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(F,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(F,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(F,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(F,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(F,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(F,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ee=e=>{const{children:i,skeleton:n=t.jsx(Qf,{}),loading:s=!1,...o}=e;return t.jsx(Qe,{...o,className:"block",children:s?n:i})},Zf=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},xn=d.div`
    padding: ${({remove:e})=>e?"0px":"5px 10px"};
    background: ${({background:e})=>e??_.blue.transparent3};
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
`,em=d.div`
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
`,tm=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:p,removeOne:u,setRemoveAll:h,setRemoveOne:x}=Zf(c,r);return c.length?t.jsxs(em,{removeAll:p||closed,padding:o,height:a,children:[!!i&&t.jsxs(xn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(pi,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(xn,{background:g.background,remove:u===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(x(g.id),s(g.id))},children:t.jsx(Ke,{})})]},g.id)}),c.length&&!!n&&t.jsx(xn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},zt=(e,i)=>{switch(i){case"date":return oe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},im=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,nm=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,p]=l.useState(null),[u,h]=l.useState(e),x=l.useCallback(m=>{var f,b;o(v=>(v&&v[m]&&delete v[m],{...v})),m===((f=i==null?void 0:i.column)==null?void 0:f.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)p(m=>{const f=Object.values(s)[0].column;return m={[(f==null?void 0:f.field)??""]:{id:(f==null?void 0:f.field)??"",title:"Фильтр: "+(f==null?void 0:f.title)}},{...m}});else{const m=Object.values(s).find(f=>{var b;return!c[((b=f.column)==null?void 0:b.field)??""]});m&&p(f=>{var $,j;const b=(($=m.column)==null?void 0:$.field)??"",v="Фильтр: "+((j=m.column)==null?void 0:j.title);return f&&(f[b]={id:b,title:v}),{...f}})}i&&p(m=>{var v;const f=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}}),a&&p(m=>{var v;const f=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,f=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&f){const v=e==null?void 0:e.filter($=>ve(zt($[f],m==null?void 0:m.type)).includes(ve(zt(i.value,m==null?void 0:m.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(f=>!Object.values(s).find(b=>{var v;return f[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));h(m)}else p(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var f;const m=((f=a==null?void 0:a.column)==null?void 0:f.field)??"";a?h(b=>{const v=[...b??[]];return v==null||v.sort(($,j)=>j[m]<$[m]?a.value==="asc"?1:-1:j[m]>$[m]?a.value==="asc"?-1:1:0),v}):(p(b=>{const v=im(b,"Сортировка");return b&&v&&delete b[v],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:u,filter:s,setFilter:o,filterList:c,setFilterList:p,onRemoveOne:x,onRemoveAll:g}},kn=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),kn(n.children,i)):n?n.children:e},sm=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,p]=l.useState(!1),u=l.useRef(null),h=l.useRef(null),[x,g]=l.useState([]),[m,f]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{f(i)});const $=l.useCallback(()=>{p(k=>!k)},[p]),j=l.useCallback(k=>{if(k.children)x.push(k.id.toString()),f(kn(i,[...x])??[]),g([...x]);else{if(r)if(o)if(o.find(V=>V.id===k.id)){const V=o.filter(O=>O.id!==k.id);V.length?n(V):n(null)}else n([...o,k]);else n([k]);else n(k);!r&&$(),v(x.join("/"))}s==null||s(k)},[n,x]),E=l.useCallback(()=>{x.pop(),g([...x]),x.length===0?f(i):f(kn(i,x)??[])},[x,f]);return Ut(u,()=>{c&&$()}),{handleOpen:$,refElement:u,isOpen:c,multiple:r,handleSelect:j,selectedRoute:b,currentItems:m,route:x,goBack:E,refItems:h,appearance:a}},om=d.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,am=d.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    min-height: 36px;

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
`,rm=d.header`
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
        background: ${_.blue.transparent2};
        color: ${_.blue.main};
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
`,lm=d.ul`
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
`,Os=d.li`
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
`,cm=["isOpen"],dm=d(Id).withConfig({shouldForwardProp:e=>!cm.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,pm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:p,goBack:u,refItems:h,appearance:x}=sm(e),{isActive:g,width:m,title:f,required:b,selected:v,placeholder:$}=e;return t.jsxs(am,{onClick:i,appearance:x,ref:n,isOpen:s,isActive:g??!0,width:m,children:[t.jsx(M,{size:4,align:"left",bottomGap:"5px",visible:!!f,required:b,children:f}),t.jsxs(om,{multiple:o,appearance:x,children:[t.jsx(rm,{appearance:x,children:o?v?v.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:$??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:$??"Не выбрано"})})}),t.jsx(dm,{isOpen:s})]}),t.jsxs(lm,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(p.length?1:0),title:f,children:[!!p.length&&t.jsx(Os,{isSelected:!1,onClick:j=>{j.stopPropagation(),u()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(fi,{}),"Назад"]})},-1),c.map(({id:j,icon:E,title:k,children:V,data:O})=>t.jsxs(Os,{onClick:R=>{R.stopPropagation(),a({id:j,icon:E,title:k,children:V,data:O})},isSelected:!o&&!!v&&v.title.includes(k),leadingToSelected:r.includes(j.toString()),children:[!!E&&t.jsx("span",{className:"icon",children:E}),t.jsx("span",{className:"select-item-title",children:k}),!!V&&t.jsx("span",{className:"right-icon",children:t.jsx(pt,{})}),o&&!!v&&!!v.find(R=>R.title.includes(k))&&t.jsx("span",{className:"right-icon",children:t.jsx(An,{})})]},k))]})]})},qa=l.memo(pm),um=e=>{switch(e){case"desc":return Y.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return Y.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return Y.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},hm=d.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    cursor: pointer;
    background: ${({even:e})=>e?`${_.blue.transparent3}`:"var(--theme)"};

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
`,Ja=d.div`
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
`,xm=d.div`
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
`,gm=d.div`
    display: flex;
    align-items: center;
`,fm=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=p=>()=>{p.search&&n({value:"",column:p}),p.sort&&r(u=>{const h=u!=null&&u.value?u.value==="desc"?"asc":null:"desc";return um(h),h?{column:p,value:h}:null})};return t.jsx(xm,{children:e.map(p=>{var u,h,x,g;return t.jsxs(Ja,{overflow:p.catalogs?"visible":"hidden",width:p.width,title:p.title,clickable:p.search,align:p.search?"space-between":p.align,showFull:p.showFull,className:((u=p.priority)==null?void 0:u.toString())??"one",onClick:c(p),children:[!p.catalogs&&p.title,!p.catalogs&&!p.sort&&p.search&&t.jsx(_t,{className:"icon",style:{color:p.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),p.sort&&t.jsx(Rd,{className:"icon",style:{color:p.field===((x=a==null?void 0:a.column)==null?void 0:x.field)?"var(--reallyBlue)":"var(--text)"}}),p.catalogs&&t.jsx(gm,{children:t.jsx(qa,{appearance:!1,items:p.catalogs??[],setSelected:m=>o(f=>(m&&(f={...f,[p.field]:{column:p,value:m}}),f)),selected:(g=s==null?void 0:s[p.field])==null?void 0:g.value,placeholder:p.title})})]},p.title)})})},mm=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=p=>{p.length?+p>=1&&+p<=e+1&&r((+p-1).toString()):r("")};return i?t.jsxs(T,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(fi,{}),onClick:()=>r(ct(n-1,e).toString())}),t.jsxs(T,{w:"fit-content",gap:"6px",children:[t.jsx(lt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(ie,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(pt,{}),onClick:()=>r(ct(n+1,e).toString())})]}):null},bm=d.div`
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
`,vt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(bm,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,vm=d.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,ym=({obj:e,columns:i})=>t.jsx(vm,{children:i.map(n=>t.jsx(vt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):zt(e[n.field],n.type)},n.title))}),Xa=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=Z(),a=()=>o(t.jsx(ym,{obj:i,columns:e}),"Информация");return t.jsx(hm,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var c;return t.jsx(t.Fragment,{children:t.jsx(Ja,{showFull:r.showFull,width:r.width,className:((c=r.priority)==null?void 0:c.toString())??"one",align:r.align,children:r.render?r.render(zt(i[r.field],r.type),i):zt(i[r.field],r.type)},r.field)})})})},jm=d.div`
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
`,wm=d.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,_m=d.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,km=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,c]=l.useState(0),p=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,u=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{c(0)},[a]),i?t.jsx(wm,{children:t.jsx(gt,{})}):t.jsxs(jm,{children:[u==null?void 0:u.map((h,x)=>t.jsx(Xa,{onRowClick:o,columns:n,el:h,index:x},x)),!(u!=null&&u.length)&&t.jsx(he,{text:"Нет данных"}),p>0&&t.jsx(ue,{margin:"0",width:"100%"}),t.jsx(_m,{children:t.jsx(mm,{pages:p,condition:!!s&&!!(u!=null&&u.length),currentPage:r,setCurrentPage:c})})]})},Sm=d.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Tm=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Em=({search:e,setSearch:i})=>{var n,s;return t.jsx(Sm,{closed:!(e!=null&&e.column),children:t.jsx(lt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Tm((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(_t,{}),minWidth:"auto"})})},$m=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Cm(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Pm=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e($m(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ue,{}),t.jsx(Xa,{onRowClick:()=>null,columns:Cm(s),el:s,index:1})]})},Om=d.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,Be=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:c,search:p,setSearch:u,resultData:h,filter:x,setFilter:g,filterList:m,setFilterList:f,onRemoveOne:b,onRemoveAll:v}=nm(i);return t.jsxs(Om,{children:[t.jsx(tm,{setList:f,padding:"0 10px",list:m,onRemoveOne:b,onRemoveAll:v}),t.jsx(Em,{search:p,setSearch:u}),t.jsx(fm,{sort:r,setSort:c,columns:e,search:p,setSearch:u,filter:x,setFilter:g}),t.jsx(km,{loading:a,onRowClick:s,filter:x,columns:e,data:h,maxOnPage:n}),t.jsx(Pm,{footer:o,data:i,columns:e})]})},YS={ready:"Готово",pending:"В работе",rejected:"Отклонено"},tn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},Yn={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},qS=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],JS=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],Am=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Yn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Dm=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Nm,{children:["История должностей:",t.jsx(y,{icon:n?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(Im,{columns:Am(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(y,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Nm=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Im=d(Be)`
    width: 100%;
`,Rm=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${ht()}`},s=await gi({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},Lm=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>oe(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(Yn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{Rm(i.applicationGuid)}})}}],zm=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,p]=l.useState(!1);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Fm,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:c?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>{p(u=>!u)},background:"transparent"})]}),t.jsxs(Mm,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(Hm,{children:[a&&t.jsx(Q,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(y,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(Bm,{columns:Lm(),data:r,maxOnPage:10})]}),t.jsx(y,{onClick:()=>{p(u=>!u)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},Mm=d.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Fm=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Bm=d(Be)`
    width: 100%;
`,Hm=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Um=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Wm,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(zm,{jobTitleInfo:s,index:o})),t.jsx(Dm,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},Wm=d.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Ka=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(ft,{load:()=>Je.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Vm,{children:t.jsxs(Ht,{maxWidth:"1500px",children:[t.jsxs(Gm,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(Um,{})]})})})},Vm=d.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Gm=d.div`
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
`,Ym=Object.freeze(Object.defineProperty({__proto__:null,default:Ka},Symbol.toStringTag,{value:"Module"})),qn=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>oe(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Qa=S(),Za=S(),er=L(async()=>{const{data:e}=await xe.get(`Weekend.GetAllHistory?PersonalGuid=${$t(ht()??"").IndividualGuid}`);return e.orders});P({clock:Qa,target:er});const ki=L(async e=>(await xe.post("Weekend.AddWeekend",e)).data);P({clock:Za,target:ki});const tr=X([]),qm=ki.pending;P({clock:er.doneData,target:tr});P({clock:ki.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ne.evokePopUpMessage});P({clock:ki.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Ne.evokePopUpMessage});const Jm={loadBufferHolidayWork:Qa,sendBufferHolidayWork:Za},XS={sendBufferHolidayWorkFx:ki},Xm={useBufferHolidayWork:()=>({data:Pe(tr),loading:Pe(qm)})},Km=()=>{const[e,i]=l.useState(!1);l.useEffect(Jm.loadBufferHolidayWork,[]);const{data:n}=Xm.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Qm,{children:["История заявлений на выход в выходной день:",t.jsx(y,{icon:e?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(Zm,{columns:qn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Qm=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Zm=d(Be)`
    width: 100%;
`,e0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(i0,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(t0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(n0,{children:t.jsx(Q,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(y,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(y,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},t0=d.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,i0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,n0=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,s0=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(o0,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(e0,{info:s,index:o})),t.jsx(Km,{})]}):null},o0=d.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,a0=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(ft,{load:()=>Je.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(r0,{children:t.jsxs(Ht,{maxWidth:"1500px",children:[t.jsxs(l0,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(s0,{})]})})})},r0=d.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,l0=d.div`
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
`,ir=S(),nr=S(),Jn=L(async()=>{const{data:e}=await xe.get(`Vacation.GetAllHistory?personalGuid=${$t(ht()??"").IndividualGuid}`);return e});P({clock:ir,target:Jn});const Wt=L(async e=>(await xe.post("Vacation.AddVacation",e)).data);P({clock:nr,target:Wt});const Bi=X([]),c0=Wt.pending;P({clock:Jn.doneData,fn:({employeeVacations:e})=>e,target:Bi});P({clock:Wt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Ne.evokePopUpMessage});P({clock:Wt.doneData,source:Bi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Bi});P({clock:Jn.failData,fn:e=>{var n;return{message:Ji(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:Y.evokePopUpMessage});P({clock:Wt.failData,fn:e=>{var n;return{message:Ji(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Ne.evokePopUpMessage});const As={loadBufferHolidayPlanning:ir,sendBufferHolidayPlanning:nr},KS={sendBufferHolidayPlanningFx:Wt},Xn={useBufferHolidayPlanning:()=>({data:Pe(Bi),loading:Pe(c0)})},d0=()=>{const[e,i]=l.useState(!1),{data:n}=Xn.useBufferHolidayPlanning(),s=!!n.every(o=>!o);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(p0,{children:["История заявлений на отпуск:",t.jsx(y,{icon:e?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(u0,{columns:qn(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},p0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,u0=d(Be)`
    width: 100%;
`,sr=()=>[{title:"Статус заявления",field:"vacation",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"vacation",align:"center",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],h0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(g0,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>{c(p=>!p)},background:"transparent"})]}),t.jsxs(x0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a]}),r&&t.jsxs(m0,{children:[t.jsx(Q,{to:`/hr-applications/holiday-planning/${i}`,children:t.jsx(y,{text:"Отпуск по этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((p,u)=>{if(p.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(x=>{if(x.vacation.status.orderStatus!="false"&&x.vacation.status.orderStatus!="")return x.vacation.status.orderStatus});return t.jsx(f0,{columns:sr(),data:h,maxOnPage:10},p.jobTitle)}})]}),t.jsx(y,{onClick:()=>{c(p=>!p)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},x0=d.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,g0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,f0=d(Be)`
    width: 100%;
`,m0=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,b0=()=>{const{data:e}=Xn.useBufferHolidayPlanning(),{data:{dataWorkerApplication:i}}=_e.useApplications(),[n,s]=l.useState(!0);return i?t.jsxs(v0,{children:[i.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(h0,{info:o,index:a,data:e})),t.jsx(d0,{})]}):null},v0=d.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,y0=()=>{const{data:e,loading:i}=Xn.useBufferHolidayPlanning();return l.useEffect(()=>{As.loadBufferHolidayPlanning()},[]),t.jsx(ft,{load:As.loadBufferHolidayPlanning,loading:i,error:null,data:e,children:t.jsx(j0,{children:t.jsxs(Ht,{maxWidth:"1500px",children:[t.jsxs(w0,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на отпуск"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(b0,{})]})})})},j0=d.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,w0=d.div`
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
`,_0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(tn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Yn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],or=S(),ar=S(),Kn=L(async()=>{const{data:e}=await xe.get(`CarryForwardVacation.GetAllHistory?personalGuid=${$t(ht()??"").IndividualGuid}`);return e});P({clock:or,target:Kn});const Vt=L(async e=>(await xe.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);P({clock:ar,target:Vt});const Hi=X([]),k0=Vt.pending;P({clock:Kn.doneData,fn:({employeeVacations:e})=>e,target:Hi});P({clock:Vt.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Ne.evokePopUpMessage});P({clock:Vt.doneData,source:Hi,fn:(e,{employeeVacations:i})=>[...e,...i],target:Hi});P({clock:Kn.failData,fn:e=>{var n;return{message:Ji(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:Y.evokePopUpMessage});P({clock:Vt.failData,fn:e=>{var n;return{message:Ji(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Ne.evokePopUpMessage});const Ds={loadBufferHolidayTransfer:or,sendBufferHolidayTransfer:ar},QS={sendBufferHolidayTransferFx:Vt},Qn={useBufferHolidayTransfer:()=>({data:Pe(Hi),loading:Pe(k0)})},S0=()=>{const[e,i]=l.useState(!1),{data:n}=Qn.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(T0,{children:["История заявлений отпуск:",t.jsx(y,{icon:e?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(E0,{columns:_0(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},T0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,E0=d(Be)`
    width: 100%;
`,$0=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(P0,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>{c(p=>!p)},background:"transparent"})]}),t.jsxs(C0,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(A0,{children:[t.jsx(Q,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(y,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((p,u)=>{if(p.employeeGuid==e.jobGuid){const h=n[u].notTaken.filter(x=>{if(x.vacation.status.orderStatus!="false"&&x.vacation.status.orderStatus!="")return x.vacation.status.orderStatus});return t.jsx(O0,{columns:sr(),data:h,maxOnPage:10},p.jobTitle)}})]}),t.jsx(y,{onClick:()=>{c(p=>!p)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},C0=d.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,P0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,O0=d(Be)`
    width: 100%;
`,A0=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,D0=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),{data:i}=Qn.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(N0,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx($0,{info:o,index:a,data:i})),t.jsx(S0,{})]})},N0=d.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,I0=()=>{const{data:e,loading:i}=Qn.useBufferHolidayTransfer();return l.useEffect(()=>{Ds.loadBufferHolidayTransfer()},[]),t.jsx(ft,{load:Ds.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(R0,{children:t.jsxs(Ht,{maxWidth:"1500px",children:[t.jsxs(L0,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(D0,{})]})})})},R0=d.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,L0=d.div`
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
`,rr=()=>[{title:"Статус заявления",field:"medicalExamination",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"medicalExamination",align:"center",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],z0=e=>localStorage.setItem("age",e.toString()),ZS=e=>localStorage.getItem(e),M0=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),lr=S(),cr=S(),dr=L(async()=>{const{data:e}=await xe.get(`MedicalExamination.GetAllHistory?PersonalGuid=${$t(ht()??"").IndividualGuid}`);return z0(e.age),M0(e.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.employeeMedicalExaminations});P({clock:lr,target:dr});const Si=L(async e=>(await xe.post("MedicalExamination.AddMedicalExamination",e)).data);P({clock:cr,target:Si});const pr=X([]),F0=Si.pending;P({clock:dr.doneData,target:pr});P({clock:Si.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ne.evokePopUpMessage});P({clock:Si.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Ne.evokePopUpMessage});const B0={loadBufferMedicalExamination:lr,sendBufferMedicalExamination:cr},eT={sendBufferMedicalExaminationFx:Si},Zn={useBufferMedicalExamination:()=>({data:Pe(pr),loading:Pe(F0)})},H0=()=>{const[e,i]=l.useState(!1);l.useEffect(B0.loadBufferMedicalExamination,[]);const{data:n}=Zn.useBufferMedicalExamination(),s=!!n.every(o=>!o);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(U0,{children:["История заявлений на диспансеризацию:",t.jsx(y,{icon:e?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(W0,{columns:rr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},U0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,W0=d(Be)`
    width: 100%;
`,V0=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,{data:a}=Zn.useBufferMedicalExamination(),[r,c]=l.useState(!1);return a.length==0?null:t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Y0,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:r?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>{c(p=>!p)},background:"transparent"})]}),t.jsxs(G0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),r&&t.jsxs(J0,{children:[t.jsx(Q,{to:`/hr-applications/medical-examination/${i}`,children:t.jsx(y,{text:"Оформить заявление",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),a.map((p,u)=>{if(p.employeeGuid==e.jobGuid){const h=a[u].notTaken.filter(x=>{if(x.medicalExamination.status.orderStatus!="false"&&x.medicalExamination.status.orderStatus!="")return x.medicalExamination.status.orderStatus});return t.jsx(q0,{columns:rr(),data:h,maxOnPage:10},p.orderNumber)}})]}),t.jsx(y,{onClick:()=>{c(p=>!p)},text:r?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},G0=d.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Y0=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,q0=d(Be)`
    width: 100%;
`,J0=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,X0=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0),{data:s}=Zn.useBufferMedicalExamination();return e?t.jsxs(K0,{children:[e.map((o,a)=>o.isDismissal?(i&&n(!1),null):t.jsx(V0,{info:o,index:a,data:s})),t.jsx(H0,{})]}):null},K0=d.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Q0=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(ft,{load:()=>Je.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Z0,{children:t.jsxs(Ht,{maxWidth:"1500px",children:[t.jsxs(eb,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на диспансеризацию"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(X0,{})]})})})},Z0=d.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,eb=d.div`
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
`,ur=S(),hr=S(),xr=L(async()=>{const{data:e}=await xe.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${$t(ht()??"").IndividualGuid}`);return e.employeeHistories});P({clock:ur,target:xr});const Ti=L(async e=>(await xe.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);P({clock:hr,target:Ti});const gr=X([]),tb=Ti.pending;P({clock:xr.doneData,target:gr});P({clock:Ti.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ne.evokePopUpMessage});P({clock:Ti.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Ne.evokePopUpMessage});const ib={loadBufferWorkTransfer:ur,sendBufferWorkTransfer:hr},tT={sendBufferWorkTransferFx:Ti},nb={useBufferWorkTransfer:()=>({data:Pe(gr),loading:Pe(tb)})},sb=()=>{const[e,i]=l.useState(!1);l.useEffect(ib.loadBufferWorkTransfer,[]);const{data:n}=nb.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ob,{children:["История заявлений на перевод:",t.jsx(y,{icon:e?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(ab,{columns:qn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},ob=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,ab=d(Be)`
    width: 100%;
`,rb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ee,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(cb,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(De,{}):t.jsx(we,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(lb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(db,{children:[t.jsx(Q,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(y,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Q,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(y,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(y,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},lb=d.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,cb=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,db=d.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,pb=()=>{const{data:{dataWorkerApplication:e}}=_e.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(ub,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(rb,{info:s,index:o})),t.jsx(sb,{})]}):null},ub=d.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,hb=()=>{const{data:{listApplication:e},error:i}=_e.useApplications();return t.jsx(ft,{load:()=>Je.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(xb,{children:t.jsxs(Ht,{maxWidth:"1500px",children:[t.jsxs(gb,{children:[t.jsx(M,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(pb,{})]})})})},xb=d.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,gb=d.div`
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
`,fb=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${oe(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${oe(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${oe(e[0])} по ${oe(e[1])}`},mb=d.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,es=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=rt.selectors.useData();return r?t.jsxs(mb,{children:[t.jsx(M,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Na,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(J,{type:"info",title:fb(n)??"",icon:t.jsx(Ae,{})}),i==null?void 0:i.map((c,p)=>{const u=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(de.Fragment,{children:[t.jsxs("section",{children:[t.jsx(M,{size:4,align:"left",children:c.title}),t.jsx(wi,{onClick:()=>null,href:u,text:"Загрузить",icon:t.jsx(Fn,{}),width:"170px",background:_.blue.main,textColor:"#fff",isActive:o})]}),p!==(i==null?void 0:i.length)-1&&t.jsx(ue,{})]},c.title)})]})]}):null},bb=()=>{const{data:e}=rt.selectors.useData();return t.jsx(es,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},vb=()=>{const{data:e}=rt.selectors.useData();return t.jsx(es,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},yb=()=>{const{data:e}=rt.selectors.useData();return t.jsx(es,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},fr=()=>{var i;const{data:e}=rt.selectors.useData();return t.jsx(an,{padding:"10px",children:t.jsx(_i,{children:t.jsx(cs,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(yb,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(bb,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(vb,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(je,{oldVersionUrl:rv}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},jb=Object.freeze(Object.defineProperty({__proto__:null,default:fr},Symbol.toStringTag,{value:"Module"})),wb=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},mr=S(),br=S(),vr=S(),Mt=L(async()=>{const e=await Pu();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),ts=L(async e=>{try{return await Au(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Ei=L(async e=>{const i=await Ou(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});P({clock:Ei.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:Y.evokePopUpMessage});P({clock:Ei.doneData,fn:()=>!0,target:br});P({clock:Ei.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:Y.evokePopUpMessage});P({clock:mr,target:Ei});const yr=S(),jr=S(),_b=Dn(Ei.pending,Mt.pending,Boolean),kb=X(!1).on(vr,(e,i)=>i),Sb=X(!1).on(br,(e,i)=>i),Tb=X(null).on(Mt,()=>null).on(Mt.failData,(e,i)=>i.message).on(ts.failData,(e,i)=>i.message),Eb=X(null).on(Mt.doneData,(e,i)=>i).on(ts.doneData,(e,i)=>wb(e,i,!1)).on(yr,()=>null),it={$loading:_b,$completed:kb,$done:Sb,$error:Tb,$paymentsStore:Eb};Ue({from:jr,to:Mt});const is={getPaymentsFx:Mt,signContractFx:ts},Sn={signAgreement:mr,setCompleted:vr,clearStore:yr,getPayments:jr},$b=Object.freeze(Object.defineProperty({__proto__:null,effects:is,events:Sn,stores:it},Symbol.toStringTag,{value:"Module"})),Cb=d.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Pb=d.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${_.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`,Ob=({date:e,value:i})=>t.jsxs(Pb,{children:[t.jsxs(T,{gap:"16px",children:[t.jsx(Oe,{color:"grey",size:33,children:t.jsx(at,{})}),t.jsxs(T,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(ie,{children:oe(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(at,{})," "]})]}),Ab=d.div`
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
`,wr=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Ab,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(at,{})]})},Db=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Nb=d.div`
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
`,Ib=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Db(s.value),0).toFixed(1);return t.jsxs(Nb,{children:[t.jsxs(T,{jc:"space-between",children:[t.jsx(M,{icon:t.jsx(_o,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(ie,{fontSize:"1rem",width:"fit-content",children:t.jsx(wr,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(he,{size:"50px",text:"Нет платежей",image:t.jsx(ko,{})}),e.map((n,s)=>l.createElement(Ob,{...n,key:s}))]})]})},_r=()=>t.jsx(J,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Rb=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Lb=d.div`
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
`,zb=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:p}=e,{open:u}=Z(),[h,x]=l.useState(!1),[g,m]=l.useState(!1),[f,b]=l.useState(!1),v=vi(it.$error),$=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:oe(n)},{text:"Действует до",info:oe(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:p??""},{text:"Сумма к оплате",info:Rb(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),x(!0)},E=()=>{e&&(m(!0),is.signContractFx(e.id),m(!1),b(!0))},k=()=>{u(t.jsx(_r,{}),"Не получается подписать")};return t.jsxs(Lb,{children:[t.jsx("div",{className:"contract-info",children:$.map(({info:V,text:O})=>t.jsx(vt,{keyStr:O,value:V},V))}),r&&t.jsxs(T,{d:"column",gap:"8px",children:[t.jsx(Rt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:E,isLoading:g,completed:f,repeatable:!1,popUpFailureMessage:v??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(y,{onClick:k,text:"Не получается подписать?",background:"transparent",textColor:_.grey.main})]}),!r&&t.jsxs(T,{gap:"8px",children:[t.jsx(Rt,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:h,setCompleted:x,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),t.jsx(wi,{onClick:()=>null,href:c??"",icon:t.jsx(Fn,{}),width:"45px"})]})]})},Mb=d.div`
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
`,Fb=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Mb,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(So,{style:{color:"var(--green)"}}):t.jsx(To,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(y,{icon:t.jsx(we,{}),onClick:()=>null,background:"transparent"})]}),Bb=d.div`
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
`,Hb=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(Bb,{height:s,open:r,children:[t.jsx(Fb,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},Ub=d.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Wb=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,p,u]=vi([it.$done,it.$completed,it.$loading]),h=s||c?140:100,x=()=>Sn.signAgreement(n),g=Sn.setCompleted;return t.jsxs(Hb,{height:h,title:o,confirmed:s||c,children:[t.jsxs(Ub,{children:[t.jsxs(T,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(M,{size:5,align:"left",children:o}),t.jsx(ie,{children:oe(r)})]}),t.jsxs(T,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(wi,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Fn,{}),isActive:!!e.file}),!(s||c)&&t.jsx(Rt,{text:s||c?"Подписано":"Подписать",action:x,isLoading:u,completed:p,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(J,{type:"success",title:"Подписано",icon:t.jsx(An,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(ie,{children:["Дата подписания: ",oe(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},Vb=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Te,{width:"100%",children:[t.jsx(M,{size:4,align:"left",icon:t.jsx(Ld,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(_r,{}),t.jsx(J,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(Wb,{data:s,isContractSigned:n},o))]}),Gb=d.div`
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
`,Di=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(Gb,{children:t.jsx(Un,{loading:i,width:"300px",height:"300px",src:e??""})})},Yb=d.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,qb=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Di,{qrCode:e}):n===1?t.jsx(Di,{qrCode:i}):t.jsx(Yb,{children:t.jsx(cs,{pages:[{title:"Текущая залолженность",content:t.jsx(Di,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(Di,{qrCode:i})}],appearance:!1,currentPage:n})}),Jb=({type:e="horizontal",...i})=>{const{open:n}=Z(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${_.green.main}, ${_.green.dark1})`,a=()=>{n(t.jsx(qb,{...i}),s)};return e==="vertical"?t.jsx(y,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(zd,{}),textColor:"#fff",background:o}):t.jsx(y,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},Xb=({debt:e,size:i="big"})=>{const n=e>0?_.red.main:_.green.main;return t.jsx(wr,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},gn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Gt=()=>{const e=mu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(gn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(gn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(gn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},Kb=d.div`
    width: 100%;
`,Qb=d.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,Zb=d.div`
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
`,ev=d.div`
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
`,tv=d.div`
    position: relative;
`,iv=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:p}=i,{isMobile:u}=Gt(),{open:h}=Z(),[x,g]=l.useState(0),m=x===0?+n:+s,f=m>0,b=f?x===0?"Долг по договору":"Остаток по договору":m<0?"Переплата по договору":"У вас нет долга",v=x===0?`На ${oe(new Date)}`:`До ${oe(o)}`,$=()=>{h(t.jsx(zb,{contract:i}),"Реквизиты договора")};return t.jsxs(Kb,{children:[t.jsx(M,{icon:t.jsx(Md,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(Qb,{children:[t.jsx(Wn,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:x,setCurrentPage:g,appearance:!1}),t.jsxs(Zb,{children:[t.jsxs(T,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(Xb,{debt:m}),t.jsxs(T,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(M,{size:3,align:"left",children:b}),t.jsx(ie,{children:v})]})]}),f?t.jsx(Jb,{currentPage:x,type:u?"horizontal":"vertical",qr_current:c,qr_total:p}):t.jsx(ma,{color:"green",size:"40px"})]}),t.jsxs(ev,{children:[r&&t.jsx(wi,{text:"Квитанция на оплату",background:"transparent",textColor:_.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(tv,{children:[t.jsx(y,{onClick:$,text:"Реквизиты договора",background:"transparent",textColor:_.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(St,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},kr=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,nv=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${zt(String(o),"rub")})`},sv=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return kr(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:nv}],ov=({paygraph:e})=>t.jsxs(T,{d:"column",children:[t.jsx(M,{icon:t.jsx(Fd,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(Be,{columns:sv(),data:e??[],maxOnPage:3})]}),Ni=({contracts:e})=>e?t.jsx(Cb,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user:p}=i,u=a==="Общежитие",h=!0,x=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(de.Fragment,{children:[e.length!==1&&t.jsxs(T,{gap:"8px",children:[t.jsx(T,{w:"fit-content",children:t.jsxs(M,{size:3,align:"left",children:["Договор:"," "]})}),t.jsxs(ie,{fontSize:"1rem",children:[a,", ",o]})]}),t.jsx(iv,{data:i}),t.jsx(Ib,{payments:c??[]}),t.jsx(ov,{paygraph:r}),t.jsx(Vb,{isDormitory:u,isContractSigned:h,electronicAgreements:x}),n!==e.length-1&&t.jsx(ue,{margin:"0",width:"100%"})]},o)})}):null,ns=()=>{const[e,i,n]=vi([it.$error,it.$loading,it.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{Y.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(ft,{loading:i,load:is.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(_i,{children:[t.jsx(J,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(he,{text:"Нет данных"}),s==="both"&&t.jsx(cs,{pages:[{title:"Общежитие",content:t.jsx(Ni,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(Ni,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(Ni,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(Ni,{contracts:n==null?void 0:n.education})]})})},av=Object.freeze(Object.defineProperty({__proto__:null,default:ns},Symbol.toStringTag,{value:"Module"})),z="/applications",ae="/hr-applications",Ns="/staff_orders",Is="/staff_blanks",rv="/ad_logins",ss="/doclist",Rs="/pps_vote2020",Sr="/pps_contest",lv="/electronic-statements",me="/onboarding",cv="/structure-of-the-university",dv="/addresses-and-contacts",pv="/brandbook",uv="/wifi-at-the-university",hv="/health-care",xv="/psychological-help",gv="/social-environment",fv="/vacation",Jt="/kpi_pps",Xt="/kpi_admin",Ls="/sc_news",zs="/oop",Ms="/centers",mv="/helpful-information",bv="/download-agreements",Fs="/physical-education/main",vv="/physical-education/student/:studentId",Tr=z+"/contact-info-actualization",Er=z+"/data-verification",$r=z+"/issuance-of-licenses",Cr=z+"/getting-computer-equipment",Pr=z+"/connecting-computer",Or=z+"/printer-maintenance",Ar=z+"/question-sed",Dr=z+"/question-personal-account",Nr=z+"/other-it-services",Ir=z+"/certificate-from-the-place-of-work",Rr=z+"/visa-certificate",Lr=z+"/certificate-of-work-experience",zr=z+"/number-of-unused-vacation-days",Mr=z+"/copy-of-the-employment-record",Fr=z+"/copies-of-documents-from-the-personal-file",Br=z+"/work-on-the-terms-of-external-concurrency",Hr=z+"/certificate-time-parental-leave",Ur=z+"/arbitrary-request",Wr=z+"/courier",Vr=z+"/persona-income-tax-reference",Gr=z+"/payment-of-child-birth-allowance",Yr=z+"/payment-for-child-care",qr=ae+"/part-time-employment/",yv=ae+"/dismissal/:id",jv=ae+"/work-transfer/:id",wv=ae+"/extra-holiday-coll",_v=ae+"/holiday-planning/:id",kv=ae+"/holiday-transfer/:id",Sv=ae+"/holiday-work/:id",Tv=ae+"/work-transfer-change-rate/:id",Ev=ae+"/medical-examination/:id",Jr=ae+"/buffer-dismissal",Xr=ae+"/buffer-holiday-planning",Kr=ae+"/buffer-holiday-transfer",Qr=ae+"/buffer-holiday-work",Zr=ae+"/buffer-medical-examination",el=ae+"/buffer-work-transfer",G=()=>je({oldVersionUrl:"/sprav"}),Bs=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(K,{}),path:me,Component:Pf,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...gl,"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(_o,{}),path:bv,Component:fr,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(K,{}),path:lv,Component:()=>(de.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Eo,{}),path:dl,Component:()=>(de.useEffect(()=>{window.location.replace(`${A}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(at,{}),path:Ui,Component:ns,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(K,{}),path:Sr,Component:()=>(de.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(jo,{}),path:Jt,Component:()=>(de.useEffect(()=>{window.location.replace(`${A}/?p=${Jt==null?void 0:Jt.slice(1,Jt.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(Yd,{}),path:Xt,Component:()=>(de.useEffect(()=>{window.location.replace(`${A}/?p=${Xt==null?void 0:Xt.slice(1,Xt.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(qd,{}),path:Ls,Component:()=>je({oldVersionUrl:Ls}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(N,{}),path:Ns,Component:()=>je({oldVersionUrl:Ns}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(It,{}),path:Is,Component:()=>je({oldVersionUrl:Is}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(N,{}),path:ss,Component:Cg,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Jd,{}),path:fv,Component:Kg,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(N,{}),color:"lightGreen",path:Fs,pageSize:"big",Component:Lg,isTemplate:!1,group:"OTHER"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(N,{}),color:"pink",show:!1,path:vv,Component:zg,isTemplate:!1,fallbackPrevPage:Fs,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(ui,{}),path:zs,Component:()=>je({oldVersionUrl:zs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(ui,{}),path:Ms,Component:()=>je({oldVersionUrl:Ms}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(N,{}),path:mv,Component:Vn,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx($o,{}),path:Rs,Component:()=>je({oldVersionUrl:Rs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(N,{}),path:z,Component:I?G:Pg,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(N,{}),path:ae,Component:I?()=>je({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Qg,color:"green",isTemplate:!1,group:"FINANCES_DOCS"}}),Hs=()=>({...fl,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:$r,icon:t.jsx(N,{}),color:"blue",Component:I?G:Fg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:Jr,icon:t.jsx(N,{}),color:"blue",Component:I?G:Ka,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-work":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Qr,icon:t.jsx(N,{}),color:"blue",Component:I?G:a0,isTemplate:!1,group:"OTHER"},"medical-examination":{id:"part-time-employment",title:"Заявление о диспансеризации",path:Zr,icon:t.jsx(N,{}),color:"blue",Component:I?G:Q0,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Xr,icon:t.jsx(N,{}),color:"blue",Component:I?G:y0,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Kr,icon:t.jsx(N,{}),color:"blue",Component:I?G:I0,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:el,icon:t.jsx(N,{}),color:"blue",Component:I?G:hb,isTemplate:!1,group:"OTHER"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:qr,icon:t.jsx(N,{}),color:"blue",Component:I?G:Zg,isTemplate:!1,group:"OTHER"},"holiday-work-form":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Sv,icon:t.jsx(N,{}),color:"blue",Component:I?G:nf,isTemplate:!1,group:"OTHER"},"medical-examination-form":{id:"part-time-employment",title:"Заявление о диспансеризации",path:Ev,icon:t.jsx(N,{}),color:"blue",Component:I?G:sf,isTemplate:!1,group:"OTHER"},"holiday-planning-form":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:_v,icon:t.jsx(N,{}),color:"blue",Component:I?G:of,isTemplate:!1,group:"OTHER"},"holiday-transfer-form":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:kv,icon:t.jsx(N,{}),color:"blue",Component:I?G:af,isTemplate:!1,group:"OTHER"},"work-transfer-form":{id:"work-transfer-form",title:"Заявление на перевод",path:jv,icon:t.jsx(N,{}),color:"blue",Component:I?G:rf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"work-transfer-change-rate-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Tv,icon:t.jsx(N,{}),color:"blue",Component:I?G:lf,isTemplate:!1,group:"OTHER"},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:wv,icon:t.jsx(N,{}),color:"blue",Component:I?G:tf,isTemplate:!1,group:"OTHER"},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:yv,icon:t.jsx(N,{}),color:"blue",Component:I?G:ef,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:ae},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(N,{}),color:"blue",path:Cr,Component:I?G:Mg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(N,{}),color:"blue",path:Pr,Component:I?G:Ng,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(N,{}),color:"blue",path:Or,Component:I?G:Gg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(N,{}),color:"blue",path:Ar,Component:I?G:qg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(N,{}),color:"blue",path:Dr,Component:I?G:Yg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(N,{}),color:"blue",path:Nr,Component:I?G:Hg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(N,{}),color:"blue",path:Ir,Component:I?G:Sg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:t.jsx(N,{}),color:"blue",path:Rr,Component:I?G:Jg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(N,{}),color:"blue",path:Lr,Component:I?G:Ag,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(N,{}),color:"blue",path:zr,Component:I?G:Bg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(N,{}),color:"blue",path:Mr,Component:I?G:Ig,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(N,{}),color:"blue",path:Fr,Component:I?G:Tg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(N,{}),color:"blue",path:Br,Component:I?G:Xg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(N,{}),color:"blue",path:Hr,Component:I?G:Dg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(N,{}),color:"blue",path:Ur,Component:I?G:Og,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},courier:{id:"courier",title:"Курьер",icon:t.jsx(N,{}),color:"blue",path:Wr,Component:I?G:Rg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(N,{}),color:"blue",path:Vr,Component:I?G:Vg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(N,{}),color:"blue",path:Gr,Component:I?G:Wg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(N,{}),color:"blue",path:Yr,Component:I?G:Ug,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(N,{}),color:"blue",path:Tr,Component:Eg,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(N,{}),color:"blue",path:Er,Component:$g,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:z},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Ye,{to:me})),icon:t.jsx(It,{}),isTemplate:!1,path:gv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Ye,{to:me})),icon:t.jsx(Bd,{}),isTemplate:!1,path:xv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Ye,{to:me})),icon:t.jsx(Hd,{}),isTemplate:!1,path:hv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Ye,{to:me})),icon:t.jsx(Ud,{}),isTemplate:!1,path:uv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Ye,{to:me})),icon:t.jsx(Wd,{}),isTemplate:!1,path:pv,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(Vd,{}),path:dv,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Ye,{to:me})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(Gd,{}),path:cv,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Ye,{to:me})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:me}}),tl="/login",$v="/forgot-password",Cv="/medical-certificate",ai="/all",os="/home",as="/profile",rs="/chat",Pv="/messages",iT=rs+"/:chatId",il="/electronic-interaction-agreement",Ui="/payments",Ct="/schedule",nl="/all-students",Ov="/all-students/:filter",Av="/all-teachers/:filter",sl="/all-teachers",ls="/feedback",ol="/cant-access",al="/memo-freshmen",rl="/get-your-login",ll="/memo-teacher",be="/settings",nT=be+"/:id",Dv=be+"/appearance",Nv=be+"/personal",Iv=be+"/security",Rv=be+"/home-page",Lv=be+"/customize-menu",cl=be+"/notifications",zv="/instructions",dl="/project-activity",pl="/alerts",ul="/lk-notifications",hl="/helpful-information",$i=Ct+"/:page/:filter",xl=Ct+"/current",Mv=Ct+"/semestr",Fv=Ct+"/session",Bv=Ct+"/retake",Hv=hl+"/:infoType";var Uv=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(Uv||{});const Wv=[{id:0,title:"",icon:"",path:tl,Component:wg},{id:1,title:"",icon:"",path:$v,Component:uf},{id:2,title:"Обратная связь",icon:t.jsx(ui,{}),path:ls,Component:La},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(ot,{}),path:ol,Component:df},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:rl,Component:Tf},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:al,Component:Ef},{id:6,title:"Вниманию сотрудников!",icon:"",path:ll,Component:$f}],gl={all:{id:"all",title:"Все разделы",icon:t.jsx(ep,{}),path:ai,Component:cf,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(Mn,{}),path:be,Component:jf,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(N,{}),path:ss,Component:()=>t.jsx(Sf,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(zn,{}),path:pl,Component:hf,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Po,{}),path:os,Component:xf,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Oo,{}),path:as,Component:ff,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(Yi,{}),path:ul,Component:Xf,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"],isNew:!0},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(wo,{}),path:il,Component:pf,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(tp,{}),path:rs,Component:()=>je({oldVersionUrl:Pv}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(ut,{}),path:Ct,menuPath:xl,Component:za,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(It,{}),path:nl,Component:Ia,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx($o,{}),path:sl,Component:Ra,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(ui,{}),path:ls,Component:La,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(ip,{}),path:zv,Component:gf,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(np,{}),path:Cv,Component:Cf,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"}},Vv={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(ut,{}),path:xl,Component:mf,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(Bn,{}),path:Mv,Component:bf,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(Co,{}),path:Fv,Component:vf,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(Nn,{}),path:Bv,Component:yf,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},fl={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(ut,{}),path:$i,Component:za,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...Vv,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(It,{}),path:Ov,Component:Ia,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(It,{}),path:Av,Component:Ra,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Xd,{}),path:Dv,Component:_f,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:be,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(Kd,{}),path:Nv,Component:wf,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:be,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(Qd,{}),path:Iv,Component:kf,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:be,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Po,{}),path:Rv,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:be,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(Zd,{}),path:Lv,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:be,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(Yi,{}),path:cl,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:be,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:Hv,Component:Vn,color:"grey",isTemplate:!0,show:!1}},ml=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;ji.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else Y.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},bl=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;ji.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},Gv=(e,i,n,s)=>{if(i){const o=s.length+du;if(n<o){Y.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??qi;ji.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else Y.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},Yv=(e,i,n)=>{if(i)if(n.includes(e))Y.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{Y.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;ji.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},qv=d.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,Jv=d.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,Xv=e=>{var m,f,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Bt.useSettings(),{data:r}=fe.useUser(),c=Fe.useMenu(),p=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(v=>v===i),u=(f=a["settings-customize-menu"].property.pages)==null?void 0:f.find(v=>v===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?Fo:qi,x=()=>{ml(i,a),Me.close()},g=()=>{Gv(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Me.close()};return t.jsxs(qv,{children:[t.jsxs("div",{className:"top",children:[t.jsx(Oe,{color:o,size:22,children:n}),t.jsx(Jv,{children:s})]}),t.jsx(ue,{}),p?t.jsx(y,{text:"Убрать с главной",icon:t.jsx(ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{bl(i,a),Me.close()}}):t.jsx(y,{text:"Добавить на главную",icon:t.jsx(pi,{}),width:"100%",align:"left",background:"var(--block)",onClick:x}),u?t.jsx(y,{text:"Убрать из меню",icon:t.jsx(ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>Yv(i,a,h)}):t.jsx(y,{text:"Добавить в меню",icon:t.jsx(pi,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},vl=({route:e})=>{var s;const i=_[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Me.open({e:o,height:105,content:t.jsx(Xv,{...e})})};return t.jsx(y,{icon:t.jsx(Ao,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},yl=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},jl=d(Qe)`
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
        background: ${_.red.light2};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
        /* box-shadow: 0 0 60px ${_.red.light2}; */
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
                    box-shadow: 0 20px 110px 60px ${({color:e})=>_[e].main};
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
`,Us=e=>{var $;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:c,mode:p,id:u,background:h,orientation:x="vertical"}=e,g=x==="vertical",{settings:m}=Bt.useSettings(),f=!!(($=m["settings-home-page"].property.pages)!=null&&$.find(j=>j===u)),b=11,v=l.useMemo(()=>(j,E)=>{const k=j.split(" ")[0];return k.length>E&&k.length!==E+1&&g?`${j.substr(0,E)}-${j.substr(E,j.length)}`:j},[]);return t.jsxs(jl,{padding:"0",width:"100%",maxWidth:"100%",height:g?"135px":"60px",isVertical:g,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:h,children:[t.jsxs("div",{className:"outside",children:[t.jsx(Oe,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:c??t.jsx(sp,{})}),t.jsx("b",{children:Lt(v(a,b),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",yl(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),p==="use"&&t.jsx(vl,{route:e}),p==="add"?f?t.jsx(y,{icon:t.jsx(Ke,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>bl(u,m)}):t.jsx(y,{icon:t.jsx(pi,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>ml(u,m)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},Kv=d(jl)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,sT=()=>t.jsx(Q,{to:ai,onClick:()=>{Ze.changeOpen({isOpen:!1,currentPage:ai.slice(1,ai.length)})},children:t.jsx(Kv,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(Oe,{color:"blue",children:t.jsx(op,{})}),t.jsx("b",{children:"Все разделы"})]})})}),Qv=d(Q)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,Zv=d.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,ey=e=>{const{close:i}=Z(),{path:n,orientation:s="vertical",mode:o="use"}=e,a=s==="vertical"?17:50,r=1;if(o==="add")return t.jsx(Zv,{width:s==="vertical"?r:"100%",children:t.jsx(Us,{...e,mode:o,maxWordLength:a})});const c=()=>{i(),Ze.changeOpen({isOpen:!1,currentPage:n.slice(1,n.length)})};return t.jsx(Qv,{to:n,onClick:c,width:s==="vertical"?r:"100%",children:t.jsx(Us,{...e,maxWordLength:a,mode:o})})},ty=d.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,iy=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(he,{text:"Ничего не было найдено"}):t.jsx(ty,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(ey,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),ny=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(ve(s.title).includes(ve(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>ve(a).includes(ve(e))))&&(n[s.id]=s),n},{}),sy=d.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,oy=d(Q)`
    width: 100%;
`,ay=({division:e})=>{const{close:i}=Z();return t.jsxs(sy,{children:[t.jsxs(T,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(Oe,{size:120,color:"purple",children:t.jsx(Fi,{})}),t.jsx(ie,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(oy,{to:`${sl}/${e}`,onClick:i,children:t.jsx(y,{icon:t.jsx(Do,{}),width:"100%",text:"Список"})})]})},ry=d.div`
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
`,ly=({division:e})=>{const{open:i}=Z(),n=()=>{i(t.jsx(ay,{division:e}),"Подразделение")};return t.jsx(ry,{onClick:n,children:t.jsxs(T,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(T,{gap:"8px",children:[t.jsx(Fi,{}),t.jsx(ie,{fontSize:"1rem",children:e})]}),t.jsx(pt,{})]})})},cy=({divisions:e})=>!e||e.length===0?null:t.jsx(T,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(ly,{division:i},i))}),nn=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),dy=d.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Ws=d(Q)`
    width: 100%;
`,wl=({group:e})=>{const{close:i}=Z();return t.jsxs(dy,{children:[t.jsxs(T,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(Oe,{size:120,color:"lightBlue",children:t.jsx(No,{})}),t.jsx(ie,{fontSize:"1.2rem",children:e})]}),t.jsxs(T,{gap:"8px",onClick:i,children:[t.jsx(Ws,{to:nn($i,{page:"current",filter:e}),children:t.jsx(y,{icon:t.jsx(ut,{}),width:"100%",text:"Расписание"})}),t.jsx(Ws,{to:`${nl}/${e}`,children:t.jsx(y,{icon:t.jsx(Do,{}),width:"100%",text:"Список"})})]})]})},py=d.div`
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
`,uy=({group:e})=>{const{open:i}=Z(),n=()=>{i(t.jsx(wl,{group:e}),"Группа")};return t.jsx(py,{onClick:n,children:t.jsxs(T,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(T,{gap:"8px",h:"50px",children:[t.jsx(No,{}),t.jsx(ie,{fontSize:"1rem",children:e})]}),t.jsx(pt,{})]})})},hy=({groups:e})=>e?t.jsx(T,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(uy,{group:i},i))}):null,fn=[{title:"Инструкции",links:[{link:A+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:A+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:A+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:A+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:A+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:A+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:A+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:A+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:A+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:A+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:A+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:A+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:A+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:te},{link:A+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:te},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:te}]},{title:"Положения",links:[{link:A+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:te},{link:A+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:te},{link:A+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:te},{link:A+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:te},{link:A+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:te},{link:A+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:te},{link:A+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:te},{link:A+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:te},{link:A+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:te},{link:A+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:te},{link:A+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:te},{link:A+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:te},{link:A+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:te},{link:A+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:te},{link:A+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:te}]}];var Se=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Se||{});const Ot={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},xy=[{id:Se.information,title:Ot[Se.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Se.security,title:Ot[Se.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Se.instructions,title:Ot[Se.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...fn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.regulations,title:Ot[Se.regulations],visible:"staff",content:[{title:"Положения",links:[...fn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.orders,title:Ot[Se.orders],visible:"staff",content:[{title:"Приказы",links:[...fn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Se.courses,title:Ot[Se.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],gy=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ve(a.title).includes(ve(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),fy=d.div`
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
`,my=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(fy,{children:[t.jsx(M,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Te,{gap:16,children:s.map(({title:a,href:r,visible:c},p)=>c==="staff"&&!i||c==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+p))})]},n+o))}):null,Wi=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,Vs=({people:e,type:i})=>!e||e.length===0?null:t.jsx(T,{d:"column",children:e.map(n=>l.createElement(ds,{name:n.fio,type:i,...n,key:n.id}))}),by=()=>{const{allRoutes:e}=Fe.useMenu(),{notifications:i,removeNotificationLoading:n}=We.useLkNotifications(),{data:{user:s}}=fe.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>xy.flatMap(({visible:O,content:R})=>O==="staff"&&o||O==="student"&&!o||O==="all"?R:[]),[o]),[r,c]=l.useState(null),[p,u]=l.useState(null),[h,x]=l.useState(null),[g,m]=l.useState(null),[f,b]=l.useState(null),[v,$]=l.useState(null),[j,E]=l.useState(null),k=[{title:"Разделы",content:t.jsx(iy,{pages:f,showNotFound:!1}),clear:()=>{b(null)},search:O=>{if(e){const R=ny(O,e);b(R)}},data:f},{title:"Студенты",content:t.jsx(Vs,{people:g,type:"stud"}),data:g,clear:()=>{m(null)},search:async O=>{const{data:R}=await sh(O,"",1,20);m(R.items)}},{title:"Сотрудники",content:t.jsx(Vs,{people:h,type:"staff"}),data:h,clear:()=>{x(null)},search:async O=>{const{data:R}=await eh(O,"",1,20);x(R.items)}},{title:"Группы",content:t.jsx(hy,{groups:r}),data:r,clear:()=>{c(null)},search:async O=>{const{data:R}=await oh(O);c(R.items)}},{title:"Подразделения",content:t.jsx(cy,{divisions:p}),data:p,clear:()=>{u(null)},search:async O=>{const{data:R}=await th(O);u(R.items)}},{title:"Уведомления",content:t.jsx(Ga,{notifications:v,loadingRemove:n}),clear:()=>{$(null)},search:O=>{const R=i.filter(ee=>ve(ee.title).includes(O));$(R)},data:v},{title:"Полезная информация",content:t.jsx(my,{blocks:j,isStaff:o}),clear:()=>{E(null)},search:O=>{const R=gy(O,a);E(R)},data:j}];return[(()=>{const{content:O,clear:R,data:ee}=k.reduce((D,re)=>(Wi(re.data)&&(D.data.push(re.data),D.content.push(t.jsxs(t.Fragment,{children:[t.jsx(M,{size:4,align:"left",children:re.title}),re.content,t.jsx(ue,{})]}))),D.clear.push(re.clear),D),{content:[],clear:[],data:[]});return{title:"Все",content:O,clear:()=>R.map(D=>D()),search:async D=>{D.length<=8&&/\d|[-]/g.test(D)?await k[3].search(D):(k[0].search(D),k[5].search(D),k[6].search(D),Wi(k[0].data)===0&&(await k[1].search(D),await k[2].search(D),await k[4].search(D)))},data:ee}})(),...k]},vy=()=>JSON.parse(localStorage.getItem(q.SearchHistory)??"[]"),yy=()=>{const e=by(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>vy(),[]),r=async g=>{e[i].clear();const m=ka(g)?_a(g):g;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(q.SearchHistory,JSON.stringify(a)))},[c,p,u]=$a({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!u&&!c.length,x=!!c.length&&!u&&!!Wi(e[i].data);return{showMessage:h,showSearchResult:x,searchValue:c,setSearchValue:p,currentPage:i,setCurrentPage:n,config:e,loading:u,searchHistory:a}},jy=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(fs,{})})):e?n.filter(s=>ve(s).includes(ve(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(fs,{})})):[],wy=()=>t.jsxs(T,{gap:"8px",ai:"flex-start",children:[t.jsx(F,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(T,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(F,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(F,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),_y=d.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,ky=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:p}=yy(),u=jy(r,n,p),{isOpen:h}=Z();return t.jsx(_y,{children:t.jsxs(T,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ta,{value:n,setValue:s,loading:r,focusOn:h,hints:u}),t.jsx(Wn,{pages:c.map(({title:x})=>({title:x})),currentPage:o,setCurrentPage:a}),t.jsx(Sa,{value:n,setValue:s}),e&&t.jsx(T,{h:"100%",children:t.jsx(he,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(_t,{})})}),!r&&n.length!==0&&!e&&!Wi(c[o].data)&&t.jsx(T,{h:"100%",children:t.jsx(he,{size:"60px",text:"Ничего не было найдено",image:t.jsx(vo,{})})}),r&&Array(10).fill(0).map((x,g)=>t.jsx(wy,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},Sy=d(Qe)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    &:hover {
        filter: brightness(0.96);
    }
`,Ty=d.div`
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
`,Ey=d(T)`
    @media (max-width: 1000px) {
        display: none;
    }
`,$y=()=>{const e=Ix();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(Io,{})},{key:"k"}]}[e]},_l=({size:e="large"})=>{const i=$y(),{open:n}=Z(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(ky,{}),"Глобальный поиск");return wa(i.map(({key:r})=>r),a),e==="icon"?t.jsx(y,{direction:"vertical",icon:t.jsx(_t,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(Sy,{tabIndex:10,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ie,{align:"left",fontSize:"0.9rem",children:t.jsxs(T,{gap:"8px",children:[t.jsx(_t,{}),"Поиск"]})}),t.jsx(Ey,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(Ty,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},Tn=e=>e.split(" ").map(i=>i[0]),ze=(e,i)=>{const n=Tn(e),s=_[hu[n[0]]];return s==null?void 0:s[i??"main"]},Cy=d.div`
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
`,Py=d.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Ci({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:p,border:u,icon:h,avatarModal:x,onClick:g,borderRadius:m,background:f}){const[b,v]=l.useState(!0),$=Tn(i)[0]+(Tn(i)[1]??""),{open:j}=Z(),E=k=>{x?j(t.jsx(Ci,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(k)};return t.jsxs(Cy,{selected:e,width:s,height:o,marginRight:a,background:f??ze(i),boxShadow:p,border:u,onClick:E,borderRadius:m,children:[n&&b?t.jsx(Py,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:$}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Xe,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(St,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const oT=d.header`
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
`;d.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const aT=d.div`
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
`,Oy=d.div`
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
`,rT=d.div`
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
`,lT=d.div`
    margin-top: 50px;
    width: 100%;
`,cT=d.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,dT=d(Qe)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,pT=d.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,Ay=d.div`
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
`,Dy=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(Ay,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Kx,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},Ny=d.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,Iy=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(Ny,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},p)=>t.jsx(Dy,{disabled:s,title:a,state:r,action:()=>o(p,c)},a))]})},kl=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=xt(),{settings:o}=Bt.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),p=r?t.jsx(ap,{}):t.jsx(rp,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[x,g]=l.useState([{title:"Темная тема",state:n!=="light",action:f=>s(f)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:f=>s(f)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const m=()=>{s(r),c(f=>!f),i==null||i()};return e==="toggle"?t.jsx(Iy,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:x,setToggles:g}):e==="h-button"?t.jsx(y,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:p,width:"100%",align:"left",onClick:m}):t.jsx(y,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:_.white.transparent2,icon:t.jsx(Oy,{width:"30px",background:_.green.main,children:p}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},Ry=d.div`
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
`,Sl=()=>{const{close:e}=Z(),{notifications:i}=We.useLkNotifications(),n=3;return t.jsxs(T,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(T,{d:"column",gap:"16px",children:[t.jsx(Ya,{maxNotificationsVisible:n}),t.jsxs(ie,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",yl(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Q,{to:ul,style:{width:"100%"},children:t.jsx(y,{width:"100%",text:"Показать все",onClick:e})})]})},Ly=()=>{const{notifications:e}=We.useLkNotifications(),{open:i}=Z(),n=()=>{i(t.jsx(Sl,{}),"Уведомления")};return t.jsxs(Ry,{onClick:n,children:[t.jsx(St,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(Yi,{})]})},zy=d.div`
    position: relative;
`,Tl=()=>{const{open:e}=Z(),{notifications:i}=We.useLkNotifications(),n=()=>Me.close(),s=()=>{qe.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Ft.logout}),n()},o=()=>{Me.close(),e(t.jsx(Ol,{}),"Что нового")},a=()=>{e(t.jsx(Sl,{}),"Уведомления"),Me.close()};return t.jsxs(t.Fragment,{children:[t.jsx(jw,{padding:"8px",size:"small"}),t.jsx(ue,{}),t.jsx(kl,{type:"h-button"}),t.jsx(ue,{}),t.jsx(Q,{to:as,children:t.jsx(y,{text:"Профиль",background:"var(--block)",icon:t.jsx(Oo,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(zy,{children:[t.jsx(y,{onClick:a,icon:t.jsx(Yi,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(St,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Q,{to:be,children:t.jsx(y,{text:"Настройки",background:"var(--block)",icon:t.jsx(Mn,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${A}/index.php`,children:t.jsx(y,{text:"Старый дизайн",icon:t.jsx(Rn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(ue,{}),t.jsx(y,{align:"left",icon:t.jsx(lp,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(ue,{}),t.jsx(y,{align:"left",icon:t.jsx(Wa,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},My=d.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,Fy=({showSearch:e=!1})=>{const{data:{user:i}}=fe.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Me.open({e:s,height:143,content:t.jsx(Tl,{})})};return t.jsxs(My,{children:[e&&t.jsx(_l,{size:"icon"}),t.jsx(Ly,{}),t.jsx(Ci,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},By=d.header`
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
    ${ne.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${ne.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,Hy=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,Uy=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,Wy=d.div`
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

    @media (max-width: 1232px) {
        max-width: ${Hy};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${ne.isTablet} {
        max-width: ${Uy};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${ne.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,Vy=()=>{const{pathname:e}=mi(),[i,n]=l.useState([e]),{action:s}=bi();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},Gy=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=bi();return t.jsx(y,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Li,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},Yy=({headerVisible:e,currentPage:i})=>{const n=bi(),s=Vy(),o=e||!!(i!=null&&i.planeHeader),a=Fa(i),r=(u=ai)=>()=>{Ze.changeOpen({isOpen:!1,currentPage:u.slice(1,u.length)}),n.push(u)},c=de.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:de.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(Gy,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(y,{direction:"vertical",icon:t.jsx(Li,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(y,{direction:"vertical",icon:t.jsx(Li,{}),onClick:r(),background:"transparent"}):t.jsx(y,{icon:t.jsx(Li,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},qy=({currentPage:e,headerVisible:i=!1})=>{var p;const{isMobile:n,isTablet:s}=Gt(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=Yy({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(By,{headerVisible:r,hidden:(p=e??e)==null?void 0:p.withoutHeader,children:[t.jsx(Wy,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(T,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(Fy,{showSearch:!0})]})]})},Jy=de.memo(qy),Xy=d(Q)`
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
`,Ky=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(F,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Me.open({e:c,height:143,content:t.jsx(Tl,{})})};return t.jsxs(Xy,{to:as,children:[t.jsx(y,{icon:t.jsx(Ao,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Ci,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(M,{size:5,children:e})]})},Qy=de.memo(Ky),Zy=["isCurrent","color"],e1=d(Q).withConfig({shouldForwardProp:e=>!Zy.includes(e)})`
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
    color: ${({color:e,isCurrent:i})=>e&&i?_[e].main:"var(--text)"};

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
        background: ${({color:e})=>e?_[e].main:"var(--reallyBlue)"};
        border-radius: 10px;
        transition: 0.2s opacity;
        opacity: ${({isCurrent:e})=>e?1:0};
    }

    @media (max-width: 1000px) {
        margin: 0;
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
            bottom: -5px;
            font-size: 0.65em;
            width: 100%;
            text-align: center;
        }
    }
`,t1=d.div`
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
`,i1=d.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,n1=d.button`
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
`,s1=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:p}=e;return t.jsxs(e1,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(St,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(St,{className:"notification",top:"50%",visible:!!p,right:r?"0px":"-20px",color:"red",children:p}),s,t.jsx("span",{className:"title",children:o}),t.jsx(vl,{route:e})]})},El=de.memo(s1),o1=()=>{const{isOpen:e}=Fe.useMenu();return t.jsx(t.Fragment,{children:t.jsx(y,{icon:t.jsx(Ke,{}),onClick:()=>Ze.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},a1=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(n1,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};de.memo(a1);d.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;d.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const r1=()=>{const{leftsideBarRoutes:e}=Fe.useMenu(),i=mi();return e?t.jsx(i1,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(El,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(T,{d:"column",children:[t.jsxs(T,{gap:"8px",children:[t.jsx(F,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(F,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(T,{gap:"8px",children:[t.jsx(F,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(F,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(T,{gap:"8px",children:[t.jsx(F,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(F,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(T,{gap:"8px",children:[t.jsx(F,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(F,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},l1=de.memo(r1),c1=()=>{const{isOpen:e}=Fe.useMenu(),{width:i,height:n}=en(),{data:{user:s}}=fe.useUser(),{visibleRoutes:o}=Fe.useMenu(),a=mi();return t.jsxs(t1,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Q,{to:os,children:t.jsx(Zi,{width:"165px"})}),t.jsx(Qy,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(_l,{size:"small"}),t.jsx(l1,{})]}),t.jsx(kl,{type:"toggle"}),i<1e3&&t.jsx(o1,{})]})},d1=d.div`
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
`,p1=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=ea.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{Y.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),Y.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(d1,{isOpen:e,isClickable:!!o,color:kt[n].color,onClick:a,children:t.jsx(J,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>Y.openPopUpMessage({isOpen:!1}),children:i})})},sn=d.div`
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
`;d.div`
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
`;const u1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Gn);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},h1=d.div`
    background: var(--theme);
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
        max-width: 400px;
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
`,x1=d.div`
    padding-top: 30px;
`,g1=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=u1(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return wa(["Escape"],o),Ut(r,()=>{o()}),t.jsx(sn,{isOpen:c,children:t.jsxs(h1,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(y,{onClick:s,icon:t.jsx(fi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(M,{size:3,align:"left",children:a}),t.jsx(y,{onClick:o,icon:t.jsx(Ke,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--search)"}),t.jsx(x1,{children:i})]})})},f1=de.memo(g1),m1=d.div`
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
`,b1=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=oa.useConfirm(),o=l.useRef(null);Ut(o,()=>qe.closeConfirm());const a=()=>{n(),qe.closeConfirm()},r=()=>{qe.closeConfirm()};return t.jsx(sn,{isOpen:e,children:t.jsxs(m1,{isOpen:e,ref:o,children:[t.jsx(M,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Te,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(y,{text:"Да",onClick:a,width:"90px",textColor:_.red.main,background:"transparent",hoverBackground:_.red.transparent3}),t.jsx(y,{text:"Нет",onClick:s??r,width:"90px",textColor:_.blue.main,background:"transparent",hoverBackground:_.blue.transparent3})]})]})})},v1=d.div`
    display: flex;
    align-items: ${({align:e})=>_n(e)};
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
`,y1=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:p=!0})=>{const[u,h]=l.useState(i),{width:x}=en(),g=l.useRef(null),m=()=>{var b;g!=null&&g.current&&h(Math.round(((b=g.current)==null?void 0:b.scrollLeft)/x))},f=b=>{var v;h(b),r==null||r((v=e[b])==null?void 0:v.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*b)};return l.useEffect(()=>{f(u)},[i,x]),t.jsxs(v1,{width:n,align:c,maxWidth:o,children:[t.jsx(Wn,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:u,setCurrentPage:f,sliderWidth:a,appearance:p}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(he,{text:"Нет данных"})},b.title))})]})},cs=y1,Gs=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},Ys=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",$l=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},j1=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},w1=d.div`
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
`,_1=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(w1,{width:i,height:n,color:ze(e,"dark1"),color2:ze(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ze(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ze(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:ze(e,"light2")})})]})}),k1=d.div`
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
`,S1=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:p,course:u,isMe:h=!1,noInfo:x=!1})=>{const g=x?"140px":"110px",m=$l(h,n,s,o);return t.jsxs(k1,{children:[t.jsx(_1,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Ci,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!x&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ie,{fontSize:"0.9rem",children:t.jsx(Ce,{words:m})}),t.jsx(vt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(vt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(vt,{fontSize:"0.9rem",visible:!!p,keyStr:"Уровень образования",value:p}),t.jsx(vt,{fontSize:"0.9rem",visible:!!u,keyStr:"Курс",value:u}),t.jsx(vt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},T1=d.div`
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

    ${ne.isMobile} {
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
`,Cl=e=>{const{children:i}=e;return t.jsxs(T1,{children:[t.jsx(S1,{...e}),t.jsx("div",{className:"buttons",children:i})]})},E1=d.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,$1=()=>t.jsxs(E1,{children:[t.jsx(F,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(F,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(F,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Pl=e=>{if(e)return()=>{qe.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(q.Token,e),location.reload()}})}},C1=e=>{const{close:i}=Z(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${ze(s,"main")}, ${ze(s,"dark1")})`;return t.jsxs(Cl,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Q,{to:nn($i,{page:"current",filter:o}),children:t.jsx(y,{icon:t.jsx(ut,{}),text:"Расписание",onClick:()=>i(),width:"100%"})}),t.jsx(y,{icon:t.jsx(Ln,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Pl(n)})]})},P1=e=>{const{close:i}=Z(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${ze(s,"dark1")}, ${ze(s,"main")})`;return t.jsxs(Cl,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Q,{to:nn($i,{page:"current",filter:s}),children:t.jsx(y,{icon:t.jsx(ut,{}),text:"Расписание",onClick:()=>{i()},width:"100%"})}),t.jsx(y,{icon:t.jsx(Ln,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Pl(n)})]})},O1=d.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?j1(i):"100%"};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${_.grey.transparent3};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({orientation:e})=>e==="vertical"?"center":"left"};
        margin-top: ${({orientation:e})=>e==="vertical"?"5px":"0"};
        width: ${({orientation:e})=>e==="vertical"?"100%":"calc(100% - 60px)"};

        .name {
            font-size: ${({size:e})=>Gs(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${Gs(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,ds=e=>{const{open:i}=Z(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:p,group:u,isMe:h=!1,loading:x=!1,orientation:g="horizontal",size:m="middle"}=e,f=$l(h,n,p,u);if(x)return t.jsx($1,{});const b=v=>{r?r(v):h||(Me.close(),i(n==="staff"?t.jsx(P1,{...e}):t.jsx(C1,{...e})))};return t.jsxs(O1,{orientation:g,size:m,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Ci,{name:o,avatar:s,width:Ys(g,m),height:Ys(g,m),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ce,{words:f})})]})]})},A1=d.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    width: calc(50% - 5px);
    gap: 10px;
    text-align: center;
    color: ${({color:e})=>e?_[e].main:"var(--text)"};
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
        color: ${({color:e})=>e?_[e].main:"var(--text)"};
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
`,D1=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=Z();return o?t.jsxs(A1,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Q,{to:s,children:t.jsx(y,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},N1=d.div`
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
`,I1=d.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,R1=d(ie)`
    margin-bottom: 20px;
`,Ii=({image:e,list:i,text:n})=>{const{isMobile:s}=Gt();return t.jsxs(N1,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(M,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(R1,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(I1,{children:i==null?void 0:i.map(o=>l.createElement(D1,{...o,key:o.title}))})]})},L1=({alert:e})=>{const{content:i,time:n,date:s}=e;return t.jsxs(z1,{children:[t.jsx(ie,{fontSize:"0.9rem",children:t.jsx(Ce,{words:[oe(s),n]})}),t.jsx(ue,{width:"100%",margin:"12px 0"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})},z1=d.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;

    & > div {
        line-height: 1.6rem;
        width: 100%;

        p {
            margin-top: 10px;
            width: 100%;
            opacity: 0.9;
        }

        a {
            text-decoration: underline;
        }

        strong,
        p:nth-child(1) {
            font-weight: 600;
            margin: 0;
            opacity: 1;
            text-align: left !important;
        }

        span {
            font-size: 1rem !important;
        }

        img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
            border-radius: var(--brLight);
            margin-bottom: 20px;
        }
    }
`,M1=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),F1=e=>{const i=e.indexOf('src="')+5;let n=0;if(i===-1)return null;for(let o=i;o<e.length;o++)if(e[o]==='"'){n=o;break}const s=e.slice(i,n);return M1(s)?s:null},B1=d.div`
    display: ${({visible:e})=>e?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${_.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,H1=d.div`
    width: 100%;
    border-radius: calc(var(--brLight) - 3px);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    position: relative;
    display: flex;
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    height: ${({orientation:e})=>e==="vertical"?"150px":"90px"};
    overflow: hidden;
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`,U1=d.div`
    height: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    width: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    min-width: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    min-height: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    overflow: hidden;
    background: ${_.purple.transparent1};
    border-radius: ${({orientation:e})=>e==="vertical"?"calc(var(--brLight) - 3px)":"0"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({orientation:e})=>e==="vertical"?"12px":"0"};
    margin-top: ${({orientation:e})=>e==="vertical"?"12px":"0"};
    box-shadow: ${({orientation:e})=>e==="vertical"?"0 0 30px rgba(0, 0, 0, 0.101)":"none"};

    svg {
        width: 40%;
        height: 40%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`,W1=d.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`,V1=d.div`
    font-weight: 500;
    width: ${({orientation:e})=>e==="vertical"?"100%":"85%"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,G1=d.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.86rem;
    margin-bottom: 6px;
    height: 20px;
    opacity: 0.8;

    p {
        text-align: left;
    }

    strong {
        font-weight: 400;
    }

    img {
        display: none;
    }
`,Y1=d(B1)`
    position: absolute;
    top: 6px;
    right: -4px;
`,q1=({news:e,orientation:i="vertical",isNew:n=!1})=>{const s=F1(e.content),{open:o}=Z(),a=()=>o(t.jsx(L1,{alert:e}),e.title);return t.jsxs(H1,{onClick:a,orientation:i,children:[t.jsx(U1,{orientation:i,children:s?t.jsx("img",{src:s,alt:""}):t.jsx(zn,{})}),t.jsxs(W1,{children:[t.jsx(V1,{orientation:i,children:e.title}),t.jsx(G1,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:Lt(e.content,220)}})}),t.jsx(ie,{children:t.jsx(Ce,{words:[oe(e.date),e.time]})})]}),t.jsx(Y1,{visible:n,children:"New"})]})},J1=d.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 400px;
        min-height: 350px;
        height: 350px;
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
`,En=d.div`
    padding: 8px;
    background: var(--search);
    border-radius: var(--brLight);

    &.first {
        z-index: 1;
    }

    &.second {
        transform: scale(0.93) translateY(-25px);
        z-index: 0;
        opacity: 0.4;
    }
`,X1=d.div`
    pointer-events: none;
`,K1=()=>t.jsxs(T,{d:"column",gap:"0px",children:[t.jsx(En,{className:"first",children:t.jsxs(T,{gap:"16px",w:"fit-content",children:[t.jsx(Oe,{color:"orange",children:t.jsx(ms,{})}),t.jsxs(T,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(F,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(F,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})}),t.jsx(En,{className:"second",children:t.jsxs(T,{gap:"16px",w:"fit-content",children:[t.jsx(Oe,{color:"orange",children:t.jsx(ms,{})}),t.jsxs(T,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(F,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(F,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Q1=()=>t.jsxs(T,{d:"column",gap:"8px",children:[t.jsx(Ee,{height:"fit-content",padding:"12px",maxWidth:"320px",children:t.jsxs(T,{gap:"8px",children:[t.jsx(_t,{}),"Распис"]})}),t.jsx(En,{children:t.jsxs(T,{gap:"16px",w:"fit-content",children:[t.jsx(Oe,{color:"pink",children:t.jsx(ut,{})}),t.jsxs(T,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(F,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(F,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Z1=()=>t.jsx(X1,{children:t.jsx(T,{mw:"250px",children:t.jsx(q1,{news:{title:"Новости",time:"4:20",content:"Как неожиданно и приятно",date:"January 1, 1984",id:0}})})}),ej=()=>{const{data:{user:e}}=fe.useUser(),{allRoutes:i}=Fe.useMenu();if(!i)return null;const n=[i.home,i.payments];return(e==null?void 0:e.user_status)==="stud"&&n.push(i["acad-performance"]),t.jsx(T,{gap:"0px",jc:"center",children:n.map(({color:s,icon:o,id:a,title:r})=>t.jsxs(T,{d:"column",gap:"12px",w:"110px",children:[t.jsx(Oe,{badge:"1",color:s,size:50,children:o}),t.jsx(M,{size:5,children:Lt(r,8)})]},a))})},Ol=()=>{const[e,i]=l.useState(0),{isMobile:n}=Gt(),{close:s}=Z(),o=[t.jsx(Ii,{image:{component:t.jsx(K1,{}),title:"Уведомления"},text:"Теперь стало проще отслеживать важную информацию, будь то новое сообщение, новости, оплаты или что-либо еще"},0),t.jsx(Ii,{image:{component:t.jsx(Q1,{}),title:"Глобальный поиск"},text:`Поможет найти то, что нужно. Находится на главной странице или ${n?"в верхней части личного кабинета":"в меню"}`},1),t.jsx(Ii,{image:{component:t.jsx(Z1,{}),title:"Раздел Новости"},text:"Виджет с новостями добавлен на главный экран, дизайн стал аккуратнее"},2),t.jsx(Ii,{image:{component:t.jsx(ej,{}),title:"Обновлены страницы"},text:"Интерфейс стал понятнее и чище"},3)];return t.jsxs(J1,{children:[t.jsx("div",{className:"content",children:o[e]}),t.jsx(Oa,{amount:o.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(y,{onClick:()=>i(a=>ct(a-1,o.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===o.length-1?t.jsx(y,{onClick:s,text:"Готово",width:"100%",background:_.blue.light1,textColor:"#fff"}):t.jsx(y,{onClick:()=>i(a=>ct(a+1,o.length-1)),text:"Далее",width:"100%"})]})]})};var Al=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Al||{});const tj=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],uT=[...tj,{title:"Месяц",condition:!0}],wt=Object.keys(At).reduce((e,i)=>(e[i]=[],e),{}),ij={schedule:{today:[],week:{...wt},semestr:{data:{...wt},startDate:new Date,endDate:new Date},session:{data:{...wt},startDate:new Date,endDate:new Date}},teachers:[]},nj=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},Dl=e=>{const i=ve(e),s=[{keys:["распознаван"],icon:t.jsx(dp,{})},{keys:["принт"],icon:t.jsx(pp,{})},{keys:["химич"],icon:t.jsx(up,{})},{keys:["игр"],icon:t.jsx(hp,{})},{keys:["жизнед"],icon:t.jsx(xp,{})},{keys:["web"],icon:t.jsx(gp,{})},{keys:["истор"],icon:t.jsx(fp,{})},{keys:["информат"],icon:t.jsx(mp,{})},{keys:["информации"],icon:t.jsx(Ae,{})},{keys:["мобильн"],icon:t.jsx(bp,{})},{keys:["безопасн"],icon:t.jsx(vp,{})},{keys:["автоматиз"],icon:t.jsx(yp,{})},{keys:["линейн"],icon:t.jsx(jp,{})},{keys:["обработ"],icon:t.jsx(wp,{})},{keys:["презентац"],icon:t.jsx(_p,{})},{keys:["операционн"],icon:t.jsx(Io,{})},{keys:["эконом"],icon:t.jsx(at,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(kp,{})},{keys:["анализ"],icon:t.jsx(Sp,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Tp,{})},{keys:["сети","сетей"],icon:t.jsx(Ep,{})},{keys:["матем"],icon:t.jsx($p,{})},{keys:["вероятн"],icon:t.jsx(Cp,{})},{keys:["философ"],icon:t.jsx(In,{})},{keys:["данны"],icon:t.jsx(Pp,{})},{keys:["язык"],icon:t.jsx(Op,{})},{keys:["спорт","физичес"],icon:t.jsx(Ap,{})},{keys:["проектная"],icon:t.jsx(bn,{})},{keys:["интеллект"],icon:t.jsx(Dp,{})},{keys:["научн"],icon:t.jsx(Np,{})},{keys:["предприним"],icon:t.jsx(Ip,{})},{keys:["коммуникац"],icon:t.jsx(Rp,{})},{keys:["управлени"],icon:t.jsx(Ro,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(Co,{})},{keys:["переработ"],icon:t.jsx(Lp,{})},{keys:["машин","инжен"],icon:t.jsx(zp,{})},{keys:["проектир","расчет"],icon:t.jsx(Mp,{})},{keys:["производ"],icon:t.jsx(ko,{})},{keys:["эколог"],icon:t.jsx(Fp,{})},{keys:["защит"],icon:t.jsx(Bp,{})},{keys:["патент"],icon:t.jsx(Hp,{})},{keys:["материал"],icon:t.jsx(Up,{})},{keys:["физик"],icon:t.jsx(Wp,{})},{keys:["тайм"],icon:t.jsx(Vp,{})},{keys:["практика"],icon:t.jsx(Lo,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(cp,{})},sj={"9:00 - 10:30":_.green,"10:40 - 12:10":_.lightGreen,"12:20 - 13:50":_.blue,"14:30 - 16:00":_.purple,"16:10 - 17:40":_.pink,"17:50 - 19:20":_.red,"18:20 - 19:40":_.orange,"19:30 - 21:00":_.orange,"19:50 - 21:10":_.orange},Tt=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Vi=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Vi||{});const Nl=e=>{const[i,n]=e.split(" "),s=Vi[n],o=new Date().getMonth()>s?new Date().getFullYear()+1:new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},Il=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Vi[o],r=Vi[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},ei=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:p,rooms:u,groups:h})=>{const[x,g]=r.split(" - "),m=Tt(g)-Tt(x),[f,b]=p.split("-").map(j=>j.trim()),v=Nl(f),$=Il(b,f);return{title:o,people:a,startTime:x,duration:m,startDate:v,endDate:$,placeIcon:t.jsx(Gp,{}),dateInterval:p,color:sj[r],place:s,link:c,groups:h,weekday:i,rooms:u,icon:Dl(o)}}):[],qs=(e,i)=>(e??[]).filter(n=>{const[s,o]=n.dateInterval.split("-").map(c=>c.trim()),a=Nl(s),r=Il(o,s);return i>=a&&i<=(r??a)}),Rl=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),$n=e=>e instanceof Date&&isFinite(+e),oj=e=>{const i={...wt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!$n(n)||!$n(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=Rl(a);if(r==="sunday")continue;i[r]=ei(e[o].lessons,At[r].short)}return{schedule:i,startDate:n,endDate:s}},Ll=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e)return{schedule:ij.schedule};const o=nj(new Date),a={...wt},r={...wt};for(const h in e)if(h!=="Sunday"){const x=h.toLocaleLowerCase(),m=e[h];"lessons"in m?(a[x]=ei(qs(m.lessons,o),At[x].short),r[x]=ei(m.lessons,At[x].short)):(a[x]=ei(qs(m,o),At[x].short),r[x]=ei(m,At[x].short)),n=new Date(Math.min(...r[x].map(f=>f.startDate.getTime()),n.getTime())),s=new Date(Math.max(...r[x].map(f=>(f.endDate??f.startDate).getTime()),s.getTime())),o.setDate(o.getDate()+1)}const c=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),p=a[c],u=oj(i);return{schedule:{today:p,week:a,semestr:{data:r,startDate:n,endDate:s},session:{data:u.schedule,startDate:u.startDate,endDate:u.endDate}}}},zl=async e=>{const i=await Tu(e),n=await $u();return Ll(i.data,n.data)},Ml=async e=>{const i=await Eu(e),n=await Cu(e);return Ll(i.data,n.data)},Js={data:{schedule:null,externalSchedule:null,view:Al.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},aj=()=>W(le),Et=L(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await Ml(n);if(i&&s==="stud")return await zl(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),Yt=L(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await zl(e)}catch(i){throw new Error(i.message)}}),qt=L(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await Ml(e)}catch(i){throw new Error(i.message)}}),rj=S(),Fl=S(),Bl=S(),Hl=S(),Ul=S(),Wl=S(),Vl=S(),le=X(Js).on(Et,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Et.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(Fl,(e,i)=>({...e,data:{...e.data,view:i}})).on(Bl,(e,i)=>({...e,currentChosenDay:i.day})).on(Hl,()=>({...Js}));P({clock:Et.doneData,source:le,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(wt)}}),target:le});P({clock:Ul,source:le,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:le});P({clock:Wl,source:le,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:le});P({clock:qt.doneData,source:le,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule}}),target:le});P({clock:Yt.doneData,source:le,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule}}),target:le});P({clock:[Yt,qt,Et],source:le,fn:e=>({...e,loading:!0}),target:le});P({clock:[Yt,qt],source:le,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:le});P({clock:[Yt.doneData,qt.doneData,Et.doneData],source:le,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:le});P({clock:[Yt.failData,qt.failData,Et.failData],source:le,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:le});P({clock:Vl,source:le,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:le});const ps={useSchedule:aj},lj={changeCurrentModule:rj,changeView:Fl,changeCurrentChosenDay:Bl,clearStore:Hl,resetExternalSchedule:Vl,setSearchValue:Wl,setFilter:Ul},cj={getScheduleFx:Et,getGroupScheduleFx:Yt,getTeacherScheduleFx:qt},dj=Object.freeze(Object.defineProperty({__proto__:null,effects:cj,events:lj,selectors:ps},Symbol.toStringTag,{value:"Module"})),Cn=e=>!e||!$n(e)?0:e.getHours()*60+e.getMinutes(),pj=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return Tt(i.startTime)+i.duration<Cn(new Date)}},on=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},uj=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=on(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Gl=(e,i,n)=>uj(e)===on(i.startTime)&&n,hj=d.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${ne.isMobile} {
        width: calc(100% + 50px);
    }
`,xj=d.div`
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
`,gj=d(T)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${ne.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,Xs=d.div`
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

    ${ne.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,fj=d(ie)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,mj=d.div`
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
        background: ${_.red.main};
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${_.red.main};
    }
`,bj=d.div`
    color: ${_.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${ne.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,Re=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(gj,{onClick:n,shortInfo:o,gap:"7px",w:"100%",children:[t.jsx(Xs,{shortInfo:o,children:e}),t.jsx(fj,{width:"100%",className:"text",children:i}),t.jsx(Xs,{shortInfo:o,children:s})]}),vj=d.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,yj=d(Q)`
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
`,jj=({groups:e})=>{const{close:i}=Z();return t.jsx(vj,{children:e.map(n=>t.jsxs(yj,{to:nn($i,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(It,{}),n]}),t.jsx(pt,{})]},n))})},Yl=({icon:e,background:i,noPadding:n=!1})=>t.jsx(hj,{background:i,noPadding:n,children:t.jsxs(xj,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),wj=d.div`
    width: 100%;
    height: 110px;
    position: relative;
    color: var(--text);
    margin-bottom: ${({noPadding:e})=>e?"0px":"40px"};

    .icon {
        position: absolute;
        bottom: ${({noPadding:e})=>e?"-5px":"-50px"};
        left: ${({noPadding:e})=>e?"-5px":"16px"};
        background: ${({background:e})=>e};
        transition: 0s;

        svg {
            color: ${({textColor:e})=>e};
        }
        border: 5px solid var(--block-content);
    }
`,_j=({subjectName:e,color:i,noPadding:n})=>{const s=Dl(e),{theme:o}=xt(),a=o==="light"?i.dark3:i.light2,r=o==="light"?i.light3:i.dark3;return t.jsxs(wj,{noPadding:n,textColor:a,background:r,children:[t.jsx(Yl,{noPadding:n,icon:s,background:r}),t.jsx(Oe,{color:i.main,size:70,borderRadius:"19px",children:s})]})},kj=({color:e,start:i})=>`
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
}`,Sj=d.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${kj}
`,Tj=d.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,Ej=d.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${ne.isMobile} {
        font-size: 0.7rem;
    }
`,ql=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=xt(),o=s==="light"?i.main:i.light1;return t.jsxs(Tj,{children:[t.jsx(Sj,{start:n,color:o}),e&&t.jsx(Ej,{children:e})]})},$j=d.div`
    position: relative;
    height: 100%;
    max-width: 400px;

    @media (min-width: 1001px) {
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

    @media (max-width: 1000px) {
        padding: 10px;
    }
`,Cj=d(T)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    overflow-y: auto;
    height: calc(100% - 154px);
`,Pj=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:p,color:u,weekday:h,isNextEvent:x,isCurrentEvent:g,noPadding:m=!1}=e,f=(p==null?void 0:p.split(","))??[],{open:b}=Z(),v=()=>{f.length===1?b(t.jsx(wl,{group:f[0]})):b(t.jsx(jj,{groups:f}),"Группы")},$=()=>{b(t.jsx(Aj,{place:s,link:r,name:n}))};return t.jsxs($j,{children:[t.jsx(_j,{subjectName:n,color:u,noPadding:m}),t.jsxs(Cj,{noPadding:m,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(T,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(T,{gap:"8px",children:[t.jsx(ql,{isCurrentEvent:g,color:u,timeInterval:i}),t.jsx(Jl,{timeLeft:on(i.split(" - ")[0],"minutes"),isNext:x,color:u,isCurrentEvent:g})]}),t.jsx(M,{size:3,align:"left",width:"fit-content",children:n})]}),t.jsx(ue,{margin:"0",width:"100%"}),t.jsx(Re,{icon:t.jsx(Bn,{}),text:t.jsx(Ce,{words:[h??"",a]})}),(r==null?void 0:r.length)&&t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:t.jsx(Re,{icon:t.jsx(vn,{}),text:s})}),!(r!=null&&r.length)&&t.jsx(Re,{icon:t.jsx(Lo,{}),text:s}),!!c.length&&t.jsx(Re,{icon:t.jsx(yn,{}),text:t.jsx(Ce,{words:c})}),!!f.length&&t.jsx(Re,{onClick:v,icon:t.jsx(Ro,{}),text:t.jsx(Ce,{words:f}),rightIcon:t.jsx(pt,{})}),t.jsx(T,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(M,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(ds,{type:"staff",name:j},j))]})}),!r&&t.jsx(ue,{margin:"0",width:"100%"}),!r&&t.jsx(y,{text:"Посмотреть на карте",width:"100%",onClick:$})]})]})};d.span`
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
`;const Oj=d.a`
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
        background: ${_.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`,Ri=({title:e,link:i,image:n})=>i?t.jsxs(Oj,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(M,{size:3,children:e})]}):null,Ks=d.div`
    ${ne.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,Aj=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(Ks,{children:t.jsx(T,{jc:"center",children:t.jsx(gt,{})})}):t.jsx(Ks,{children:e==="Webex"?t.jsx(Ri,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Ri,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Ri,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Ri,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},Qs=d.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Jl=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=xt(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(Qs,{background:c,color:r,children:"Сейчас"}):t.jsxs(Qs,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},Dj=d.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,hT=()=>t.jsxs(Dj,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(F,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(F,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(F,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(F,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(F,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(F,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),Xl="/assets/sleep-54d590c1.gif",Nj=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),Ij=d.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,xi=e=>e<=9?"0"+e:e,Rj=e=>`${xi(Math.floor(e/60))}:${xi(e%60)}`,Zs=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},Lj=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(Zs(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(Zs(new Date,s[0]*60,s[1]*60))},bu.minute),()=>clearInterval(c.current)),[e]),t.jsx(mj,{currentTime:(a-i)*n,children:o&&t.jsx(bj,{children:Rj(a)})})},zj=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${xi(Math.floor(o/60))}:${xi(o%60)}`},Kl=(e,i)=>e?`${e} - ${zj(e,i)}`:"9:00",Mj=({startTimeShift:e,startDayShift:i,scale:n})=>`${(e-i)*n}px`,Fj=d.div`
    width: ${({quantity:e})=>`calc(${e}% - 1px)`};
    height: ${({duration:e,scale:i})=>`${e*i}px`};
    border-radius: 5px;
    padding: ${({shortInfo:e,scale:i})=>e?"8px":`${i*8}px`};
    display: flex;
    overflow: hidden;
    color: ${({textColor:e})=>e};
    cursor: pointer;
    position: ${({listView:e})=>e?"static":"absolute"};
    transform: translateX(${({leftShift:e})=>`calc(${e}% + ${1*(e/100)}px)`});
    left: 0;
    top: ${Mj};
    /* box-shadow: 0 0 1px ${({color:e})=>e}; */

    a {
        color: ${({textColor:e})=>e};
        text-decoration: underline;
    }

    &:hover {
        filter: brightness(0.98);
    }

    ${ne.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;d.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${ne.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const Bj=d(T)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${ne.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,Hj=d.span`
    font-weight: 500;
    font-size: ${({shortInfo:e})=>e?"0.85rem":"0.9rem"};
    padding-top: 2px;
    white-space: ${({shortInfo:e,nameInOneRow:i})=>!e&&i&&"nowrap"};
    text-overflow: ${({shortInfo:e})=>!e&&"ellipsis"};
    overflow: ${({shortInfo:e})=>!e&&"hidden"};
    hyphens: auto;
    width: 100%;
    margin-bottom: 2px;
    margin-top: ${({listView:e})=>e?"2px":"0"};

    ${ne.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,Uj=d.div`
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
`,Wj=d(T)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,Vj=e=>{const[i,n]=e.split(":");return+i*60+ +n},Gj=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:p,scale:u,onClick:h,link:x,rooms:g,dateInterval:m,leftShift:f,quantity:b,isCurrentEvent:v=!1,nameInOneRow:$=!0,isNextEvent:j=!1,listView:E=!1,shortInfo:k=!1}=e,{theme:V}=xt(),{isMobile:O}=Gt(),R=Vj(o),ee=V==="light"?p.dark3:p.light3,D=V==="light"?p.transparent1:p.transparent2,re=()=>h(e),ge=(O||b>1)&&k,ke=O&&b>=2&&k,et=r==null?void 0:r.map(Ve=>{var Pi,Ge;const pe=Ve.split(" ");return`${pe[0]??""} ${((Pi=pe[1])==null?void 0:Pi[0])??""}.${((Ge=pe[2])==null?void 0:Ge[0])??""}.`});return t.jsxs(Fj,{textColor:ee,listView:E,leftShift:100*f,quantity:100/b,duration:n,startDayShift:c,startTimeShift:R,scale:u,onClick:re,shortInfo:k,children:[t.jsx(Uj,{children:s}),!E&&t.jsx(Yl,{icon:s,background:D}),t.jsx(T,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(Bj,{scale:u,d:"column",ai:"flex-start",shortInfo:k,children:[t.jsxs(T,{d:"column",gap:"2px",children:[!k&&t.jsxs(T,{gap:"8px",children:[t.jsx(ql,{timeInterval:Kl(o,n),color:p,isCurrentEvent:v}),t.jsx(Jl,{timeLeft:on(o,"minutes"),isNext:j,color:p,isCurrentEvent:v}),!!(g!=null&&g.length)&&t.jsx(Re,{shortInfo:k,icon:O&&b>1?void 0:t.jsx(yn,{}),text:t.jsx(Ce,{words:g})}),!!x&&t.jsx("a",{href:x,target:"_blank",rel:"noreferrer",children:t.jsx(Re,{shortInfo:k,icon:t.jsx(vn,{}),text:a})})]}),t.jsx(Hj,{listView:E,nameInOneRow:$,scale:u,shortInfo:k,children:ke?i.split("(")[0].split("https")[0].split(/[\s-]+/).map(Ve=>{var pe;return(pe=Ve[0])==null?void 0:pe.toUpperCase()}):Lt(i,k?ge?43:35:$?300:64)})]}),!!r.length&&!ge&&t.jsx(Re,{shortInfo:k,text:t.jsx(Ce,{words:k?[et[0]]:et}),icon:t.jsx(Yp,{})}),!!(g!=null&&g.length)&&k&&!ge&&t.jsx(Re,{shortInfo:k,icon:t.jsx(yn,{}),text:t.jsx(Ce,{words:g})}),!!x&&k&&!ge&&t.jsx("a",{href:x,target:"_blank",rel:"noreferrer",children:t.jsx(Re,{shortInfo:k,icon:t.jsx(vn,{}),text:a})}),!!m&&!ge&&t.jsx(T,{gap:"5px",d:"column",ai:"flex-start",children:t.jsx(Re,{shortInfo:k,icon:t.jsx(Bn,{}),text:m})})]})})]})},us=(e,i)=>Tt(e.startTime)<=Cn(new Date)&&Cn(new Date)<=Tt(e.startTime)+e.duration&&i,Yj=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):i[s.startTime].push(s)}return i},qj=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:p})=>{const u=Yj(e),h=new Date().getDay()===o,x=p!==void 0?p+1===o:void 0;return t.jsxs(Wj,{h:"100%",d:"column",children:[h&&t.jsx(Lj,{isVisible:x,showTime:r,scale:n,shift:i,interval:a}),Object.keys(u).map((g,m)=>u[g].map((f,b)=>l.createElement(Gj,{leftShift:b,quantity:u[g].length,scale:n,isCurrentEvent:us(f,h),isNextEvent:Gl(e,f,h),...f,onClick:c,shift:i,key:f.startTime+f.title+m+b,shortInfo:s})))]})},Jj=d(T)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,Xj=d.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,Kj=d.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-3);
    height: 1px;

    ${ne.isMobile} {
        background: var(--almostTransparentOpposite);
    }
`,Qj=d(ie)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${ne.isMobile} {
        font-size: 0.65rem;
    }
`,Zj=Array(24).fill(0).map((e,i)=>`${xi(i)}:00`),ew=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):Zj.slice(e[0],e[1]+1);return t.jsx(Jj,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(Xj,{children:[t.jsx(Qj,{children:o}),t.jsx(Kj,{})]},o))})},tw=l.forwardRef(function({interval:i,events:n,scale:s,weekday:o,shift:a,onEventClick:r,currentDay:c},p){return t.jsxs(Ij,{className:"calendar-wrapper",ref:new Date().getDay()===o?p:void 0,children:[t.jsx(ew,{interval:i,scale:s}),t.jsx(qj,{currentDay:c,weekDay:o,events:n??[],shift:a,currentEvent:null,scale:s,onClick:r,interval:i})]})}),eo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},iw=()=>{const{currentDevice:e}=Gt(),[i,n]=l.useState(eo[e]);return l.useEffect(()=>{n(eo[e])},[e]),i},nw=d.div`
    --time-width: 55px;

    ${ne.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${ne.isMobile} {
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
`,sw=({dayEvents:e})=>{const i=e==null?void 0:e[0],n=e==null?void 0:e[e.length-1],s=iw(),o=i?Math.floor(Tt(i.startTime)/60):9,a=n?Math.floor((Tt(n.startTime)+n.duration)/60+1):22,r=[o,a],c=Zl();return e!=null&&e.length?t.jsx(nw,{children:t.jsx(tw,{events:e,interval:r,scale:s,weekday:0,currentDay:0,shift:r[0]*60,onEventClick:c})}):t.jsx(he,{text:"В этот день пар нет",image:Xl})},Ql=()=>{const{data:{schedule:e}}=ps.useSchedule(),{open:i}=Z(),n=Nj(new Date,1),s=kr(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=Rl(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(sw,{dayEvents:a}),s);return t.jsx(y,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},ow=d.div`
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
`,xT=()=>t.jsxs(ow,{children:[t.jsx("img",{src:Xl,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),t.jsx(Ql,{})]});d.div`
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
`;const aw=(e,i,n)=>i?e?1:.8:n?1:0,rw=e=>e?1:.9;d.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>aw(e,i,n)};
    transform: scale(${({isVisible:e})=>rw(e)});
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
`;const lw=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,gT=()=>t.jsxs(lw,{children:[t.jsx(ma,{size:"38px"}),t.jsx(M,{size:4,children:"Учебный день завершился"}),t.jsx(Ql,{})]});d.div`
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
`;d.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;d(Q)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`;d.div`
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
`;d.div`
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
`;const Zl=()=>{const{open:e}=Z();return n=>{const s=Kl(n.startTime,n.duration);e(t.jsx(Pj,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:us(n,!0),noPadding:!0,...n}))}},cw=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},dw=()=>{var c,p;const{data:{schedule:e,hasNoSchedule:i},loading:n}=ps.useSchedule(),s=Zl(),o=((c=e==null?void 0:e.today)==null?void 0:c.length)===0||!(e!=null&&e.today),a=pj(e==null?void 0:e.today);return{listRef:cw({deps:[e==null?void 0:e.today],condition:(((p=e==null?void 0:e.today)==null?void 0:p.length)??0)>1,getScrollTopValue:u=>{var h,x;return u.clientHeight*(a?((h=e==null?void 0:e.today)==null?void 0:h.length)??0:((x=e==null?void 0:e.today)==null?void 0:x.findIndex(g=>us(g,!0)||Gl(e.today,g,!0)))??0)}}),noSchedule:o,handleOpenModal:s,loading:n,schedule:e==null?void 0:e.today,isEnded:a,hasNoSchedule:i}},to=d(Qi)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--block);
    border-top: 1px solid var(--theme-2);
    padding: 0px 10px;
    display: none;

    ${ne.isTablet} {
        display: flex;
    }
`,Kt=()=>t.jsxs(T,{d:"column",gap:"8px",children:[t.jsx(F,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(F,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),pw=()=>{const{allRoutes:e}=Fe.useMenu(),{data:{user:i}}=fe.useUser(),{hasNoSchedule:n,loading:s}=dw(),o=mi();if(!e||!i||s)return t.jsxs(to,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(Kt,{}),t.jsx(Kt,{}),t.jsx(Kt,{}),t.jsx(Kt,{}),t.jsx(Kt,{})]});const a=(i==null?void 0:i.user_status)==="stud"?gk:n?mk:fk;return t.jsx(to,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{var c;return t.jsx(El,{...e[r],isCurrent:o.pathname.includes((c=e[r])==null?void 0:c.path)},r)})})},uw=(e,i,n)=>({isOpen:i,message:e,position:n}),io={hints:[]},hw=()=>W(xw),ec=S(),tc=S(),ic=S(),xw=X(io).on(ec,(e,{message:i,position:n})=>({hints:[...e.hints,uw(i,e.hints.length===0,n)]})).on(tc,e=>({hints:e.hints.splice(1,e.hints.length)})).on(ic,()=>({...io})),gw={useHint:hw},fw={evoke:ec,close:tc,clearStore:ic},mw=d.div`
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
    box-shadow: 0 0 30px ${_.blue.transparent3};
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
`,bw=()=>{const{hints:e}=gw.useHint(),i=e[0];return i?t.jsx(mw,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(J,{type:"hint",title:i.message,onClose:()=>fw.close(),width:"100%",icon:null})}):null},vw=d.div`
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
`,yw=50;function fT({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:p=yw}){const{data:{user:u}}=fe.useUser();let h="";const x=l.useCallback(g=>{const m=g.currentTarget.clientHeight,f=g.currentTarget.scrollHeight,b=g.currentTarget.scrollTop;f-p<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(he,{text:"Нет результатов",children:c}):t.jsxs(vw,{onScroll:x,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,m)=>{var b,v;const f=r?h!==((b=g.fio)==null?void 0:b.charAt(0)):!1;return f&&(h=((v=g.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[f&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(M,{size:4,align:"left",children:h}),t.jsx(ue,{})]}),i(g,(u==null?void 0:u.id.toString())===g.id,m)]})})}),n&&s&&t.jsx(gt,{width:"40px",height:"40px"}),n&&!s&&t.jsx(y,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}d.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const jw=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=fe.useUser();return Z(),t.jsxs(Te,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ie,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(ds,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},nc=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ve(a.title).includes(ve(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),ww=()=>{const e=I?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:fc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Lc,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:mc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:bc,title:"Справка-вызов"},{link:Pc,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Rc,title:"Запрос на изменение персональных данных"},{link:Cc,title:"Запрос на восстановление магнитного пропуска"},{link:hc,title:"Уточнение паспортных данных"},{link:zc,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Mc,title:"Предоставление каникул в связи с окончанием университета"},{link:Fc,title:"Предоставление академического отпуска"},{link:Bc,title:"Отчисление по инициативе обучающегося"},{link:Hc,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:vc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:yc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:jc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:_c,title:"Предоставление права проживания льготной категории граждан"},{link:wc,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:kc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Tc,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Ec,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Sc,title:"Расторжение договора найма"},{link:$c,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:Bo,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Dc,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Nc,title:"Заявка на материальную помощь"},{link:gc,title:"Оформить социальную стипендию"},{link:Ic,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:I,links:[{link:Oc,title:"Отправить документы воинского учета"},{link:Ac,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:I,links:[{link:Pn,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Pn,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:pu,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:xc,title:" Произвольный запрос"}]}]},_w=()=>[{title:"Цифровые сервисы",links:[{link:Tr,title:"Актуализация контактных данных"},{link:Er,title:"Анкета для сверки данных"},{link:$r,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Cr,title:"Получение нового компьютерного оборудования"},{link:Pr,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Or,title:"Обслуживание принтеров, МФУ"},{link:Ar,title:"Вопрос по СЭД Directum и 1С"},{link:Dr,title:"Вопрос по Личному кабинету"},{link:Nr,title:"Прочее ИТ-обслуживание"},{link:Ir,title:"Справка с места работы"},{link:Rr,title:"Справка на визу"},{link:Lr,title:"Справка о стаже работы"},{link:zr,title:"Справка о количестве неиспользованных дней отпуска"},{link:Mr,title:"Копия трудовой книжки"},{link:Fr,title:"Копии документов из личного дела"},{link:Br,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:Hr,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Vr,title:"Справка по форме 2-НДФЛ"},{link:Gr,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Yr,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:Ur,title:"Произвольный запрос"},{link:Bo,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Wr,title:"Курьер"}]}],kw=()=>[{title:"",links:[{link:qr,title:"Заявление на трудоустройство по совместительству"},{link:Jr,title:"Заявление на увольнение"},{link:Qr,title:"Заявление о привлечении к работе в выходной день"},{link:Xr,title:"Заявление о предоставлении отпуска"},{link:Kr,title:"Заявление о переносе отпуска"},{link:Zr,title:"Заявление о диспансеризации"},{link:el,title:"Заявление на перевод"}]}],Sw=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Tw=d.div`
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
`,mT=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=Z(),s=e?_w():ww(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsxs(Tw,{children:[t.jsx(Ca,{whereToSearch:s,searchEngine:nc,setResult:c,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(p=>t.jsxs("div",{className:"link-list",children:[t.jsx(M,{size:4,align:"left",bottomGap:!0,children:p.title}),!p.disabled&&t.jsx("div",{className:"links",children:p.links.map((u,h)=>{if(!(u.disabled||!Sw(i,u.exceptionalFormEducationList)))return u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.link+h):t.jsx(Q,{to:u.link,onClick:n,children:u.title},u.link+h)})})]},p.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(he,{text:`По запросу ${o} ничего не найдено`})]})})]})},Ew=d.div`
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
`,$w=d.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,bT=({})=>{const{data:{listApplication:e},error:i}=_e.useApplications(),{close:n}=Z(),s=kw(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(ft,{load:()=>Je.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(_i,{children:[t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ae,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Ew,{children:[t.jsx(M,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Ca,{whereToSearch:s,searchEngine:nc,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs($w,{children:[(r??s).map(p=>t.jsx("div",{className:"link-list",children:!p.disabled&&t.jsx("div",{className:"links",children:p.links.map(u=>u.isExternalLink?t.jsx("a",{href:u.link,target:u.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:u.title},u.title):t.jsx(Q,{to:u.link,onClick:n,children:u.title},u.link))})},p.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(he,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Cw=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,p)=>{for(let u=0;u<p.files.length;u++)c[(p==null?void 0:p.fieldName)+`[${u}]`]=p.files[u];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),no={isOpen:!1,pages:[],currentPage:0},Pw=()=>W(Ow),sc=S(),oc=S(),ac=S(),rc=S(),Ow=X(no).on(sc,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(oc,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(ac,(e,{value:i})=>({...e,currentPage:i})).on(rc,()=>({...no})),hs={useStory:Pw},yt={open:sc,close:oc,clearStore:rc,changeCurrentPage:ac};d(Qe)`
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
`;d.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const Aw=d.div`
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
`,an=Aw,Dw=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[c,p]=l.useState(r===void 0),[u,h]=l.useState(!a),[x,g]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return Y.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),p(!1),h(!1)):Y.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!c&&!n.find(j=>!!j.find(E=>!E.value&&E.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),p(!1),h(!1)):Y.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(E=>!E.value&&E.required))&&!n.find(j=>!!j.find(E=>{var k;return E.value.id==="not-chosen"&&!!((k=E.items)!=null&&k.length)}))?(s(j=>(j.confirmed=!0,{...j})),p(!1),h(!1)):Y.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),p(!1),h(!1)):Y.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!c&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),p(!1),h(!1)):Y.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var E;return j.value===null&&!!((E=j.items)!=null&&E.length)})?(s(j=>(j.confirmed=!0,{...j})),p(!1),h(!1)):Y.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},f=()=>{s(j=>{const E=j.default[0].map(k=>({fieldName:k.fieldName??"",title:k.title,value:k.type==="select"&&(k!=null&&k.items)?null:"",type:k.type,items:k.items,width:k.width,required:k.required}));return{...j,data:[...j.data,E]}})},b=j=>{s(E=>{const k=E.data.filter((V,O)=>j!==O);return{...E,data:k}})},v=j=>{s(E=>(E.documents&&(E.documents.files=[...j]),{...E}))},$=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{h(!x&&o?!1:!a)},[x,a]),{openArea:u,changeInputArea:c,included:x,setOpenArea:h,setIncluded:g,setChangeInputArea:p,handleRemove:b,handleAddNew:f,handleLoadFiles:v,handleConfirm:m,handleCheckbox:$}},Nw=d.div`
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
`,Iw=d.div``,Rw=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Iw,{children:[t.jsx(M,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:p,maxFileSizeInMegaBytes:u},h)=>t.jsx(pg,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:u,isActive:!0,setFiles:x=>s(x,h)},docVisible:p==="straight"?o:!o},a))]}),Lw=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(M,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Te,{children:[!a&&t.jsx(Xe,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:p}=r;return t.jsx(Xe,{text:p,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():p})},c)})]})]}),zw=d.div`
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
`,Mw=({title:e,value:i,visible:n})=>n?t.jsxs(zw,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Fw=d.div`
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
`,Bw=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(Fw,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(yo,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(In,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,Hw=d.div`
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
`,Uw=({title:e,visible:i})=>i?t.jsx(Hw,{children:t.jsx("span",{className:"title",children:e})}):null,Ww=d.div`
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
        border: ${({danger:e})=>e&&`2px solid ${_.red.main}`};

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
`,Vw=d.ul`
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
`,Gw=d.li`
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
`,Yw=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:p,isActive:u=!0,inputAppearance:h=!0,suggestions:x})=>{const[g,m]=l.useState([]),[f,b]=l.useState(!0);return l.useEffect(()=>{if(e){const v=x.filter($=>$.toLowerCase().includes(e.toLowerCase()));m(v)}else m([])},[e,x]),t.jsxs(Ww,{leftIcon:!!n,isActive:u,inputAppearance:h,width:a,danger:p,minWidth:r,children:[t.jsx(M,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:v=>{i(v.target.value),b(!0)},placeholder:c}),g.length>0&&t.jsx(Vw,{width:"100%",isOpen:f,className:f?"open":"close",itemsAmount:g.length,title:s,children:g.map((v,$)=>t.jsx(Gw,{isSelected:!1,onClick:()=>{i(v),m([]),b(!1)},children:v},$))})]})]})},qw=d.div`
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
`,Jw=({title:e,visible:i})=>i?t.jsx(qw,{children:t.jsx("span",{className:"title",children:e})}):null,so=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:p,title:u,documents:h,changeInputArea:x,setData:g,mask:m,editable:f,placeholder:b,autocomplete:v,isSpecificRadio:$,specialType:j,specialFieldsNameConfig:E,minValueInput:k,maxValueInput:V,maxValueLength:O,diff:R,visible:ee=!0,onChange:D,onKeyPress:re,onBlur:ge,onKeyDown:ke,onKeyUp:et,onFocus:Ve}=e,pe=f??(x&&!h),[tt,Pi]=l.useState(!0),Ge=(U,ce,Pt)=>{D==null||D(U),g(ye=>(Array.isArray(ye.data[0])?ye.data[ce][Pt??0].value=U:ye.data[ce].type==="checkbox-docs"?ye.data[ce].items[Pt??0].value=!!U:ye.data[ce].value=U,{...ye}))},wd=(U,ce,Pt)=>{D==null||D(U),g(ye=>(Array.isArray(ye.data[0])?ye.data[ce][Pt??0].value=U:ye.data[ce].value=U,{...ye}))},_d=(U,ce,Pt)=>{g(ye=>(ye.data[ce].items[Pt??0].files=U,{...ye}))},kd=U=>{D==null||D(U),g(ce=>(ce.data[o].value=U,{...ce}))},Sd=U=>{D==null||D(U),re==null||re(U),ge==null||ge(U),ke==null||ke(U),et==null||et(U),Ve==null||Ve(U),g(ce=>(ce.data[o].value=U,{...ce}))};return E&&j&&!Object.values(E).includes(j)?null:r!=="select"&&r!=="multiselect"||!p?r==="checkbox"?t.jsx(Xe,{text:u,isActive:pe,checked:i,setChecked:U=>Ge(U,o,a)}):r==="hr-checkbox"?t.jsx(Bw,{text:u,isActive:pe,checked:i,setChecked:U=>Ge(U,o,a)}):r==="auto-complete-input"?t.jsx(Yw,{title:u,suggestions:c??[],required:n,value:i,placeholder:b??u,setValue:U=>Ge(U,o,a)}):r==="textarea"?t.jsx(gx,{value:i,title:u,setValue:U=>Ge(U,o,a),isActive:pe,textAreaAppearance:pe,placeholder:b??u,required:n,width:s}):r==="checkbox-docs"?t.jsx(Rw,{title:u,items:p,setChecked:(U,ce)=>Ge(!U,o,ce),setFiles:(U,ce)=>_d(U,o,ce)}):r==="date-interval"?ee?t.jsx(Na,{title:u,required:n,dates:i,setDates:U=>Sd(U),valid:tt,setValid:Pi,minValue:k,diff:R}):null:r==="simple-text"?t.jsx(Mw,{title:u,value:i,visible:ee}):r==="text-warning"?t.jsx(Jw,{title:u,visible:ee}):r==="text-header"?t.jsx(Uw,{title:u,visible:ee}):r==="radio"?t.jsx(Lw,{buttons:p,title:u,required:n,current:i,setCurrent:kd,isSpecificRadio:$}):ee?t.jsx(lt,{value:i,title:u,minValue:k,maxValue:V,maxLength:O,setValue:U=>Ge(U,o,a),type:r,isActive:pe,inputAppearance:pe,placeholder:b??u,required:n,mask:m,width:s,autocomplete:v}):null:ee?t.jsx(qa,{items:p,setSelected:U=>wd(U,o,a),selected:i,isActive:pe,title:u,width:s,multiple:r==="multiselect",required:n}):null},Xw=d.div`
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
`,Kw=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(Xw,{onClick:()=>!r&&(i||!n)&&o(p=>!p),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(M,{size:3,align:"left",icon:s!==void 0?s?t.jsx(So,{}):t.jsx(To,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Xe,{checked:i,setChecked:a})]}),t.jsx(y,{icon:t.jsx(we,{}),onClick:()=>null,background:"transparent",flipped:c})]}),Qw=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(y,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(ot,{}),textColor:_.red.main,hoverBackground:_.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Сохранить",icon:t.jsx(qp,{}),textColor:_.blue.main,hoverBackground:_.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(ot,{}),textColor:_.red.main,hoverBackground:_.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Подтвердить",icon:t.jsx(Jp,{}),textColor:_.green.main,hoverBackground:_.green.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Xp,{}),textColor:_.blue.main,hoverBackground:_.blue.transparent3,background:"transparent",width:"130px"})]}),Zw=e=>e.confirmed===void 0?null:t.jsx(Te,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(Qw,{...e,confirmed:e.confirmed})}),e_=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:p=!1,addNew:u=!1,divider:h,collapsed:x,links:g,specialFieldsNameConfig:m})=>{const{openArea:f,changeInputArea:b,included:v,setOpenArea:$,setIncluded:j,setChangeInputArea:E,handleRemove:k,handleAddNew:V,handleLoadFiles:O,handleConfirm:R,handleCheckbox:ee}=Dw({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:p,collapsed:x,confirmed:c});return t.jsxs(t.Fragment,{children:[t.jsxs(Nw,{openArea:f,children:[t.jsx(Kw,{title:e,included:v,optional:p,confirmed:c,setOpenArea:$,setIncluded:j,collapsed:x}),t.jsxs("div",{className:"inputs",children:[t.jsx(J,{type:"alert",visible:!!n,icon:t.jsx(di,{}),children:n}),t.jsx(J,{type:"info",visible:!!i&&(b||c===void 0),title:"Как заполнить",icon:t.jsx(Ae,{}),children:i}),Array.isArray(s[0])?s.map((D,re)=>t.jsxs("div",{className:"data-line",children:[D.map((ge,ke)=>t.jsx(so,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:re,indexJ:ke,specialFieldsNameConfig:m,...ge},ke)),b&&u&&t.jsx(y,{icon:t.jsx(Kp,{}),textColor:_.red.main,onClick:()=>k(re),background:"transparent",isActive:!(o!=null&&o.value)})]},re)):s.map((D,re)=>t.jsx(so,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:re,specialFieldsNameConfig:m,...D},re)),u&&b&&t.jsx(y,{icon:t.jsx(Qp,{}),text:"Добавить",onClick:V,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(Da,{files:a.files,setFiles:D=>O(D),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(D=>l.createElement(Cx,{...D,key:D.title})),t.jsx(Xe,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:ee}),t.jsx(Zw,{confirmed:c,changeInputArea:b,setData:r,setChangeInputArea:E,handleConfirm:R})]})]}),h&&t.jsx(ue,{})]})},t_=d.div`
    color: #fff;
    cursor: pointer;
    background: ${({reached:e})=>e?_.green.main:_.grey.main};
    outline: 6px solid
        ${({reached:e,current:i})=>i?_.blue.transparent1:e?_.green.transparent3:_.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`,i_=d.div`
    display: flex;
    margin-bottom: -20px;
`,n_=d.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,lc=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:$e(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(i_,{children:e.map((r,c)=>t.jsxs(n_,{lastElement:c===e.length-1,children:[t.jsx(t_,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(sx,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(e_,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},s_=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),o_=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),a_=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),cc=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(u=>{if(o)return Cw(u);if(Array.isArray(u.data[0])){const h=u.data.map(g=>Object.assign({},...g==null?void 0:g.map(m=>oo(m)))),x={};return x[e]=JSON.stringify(h),x}else return u.data.map(h=>oo(h))}).flat(),r=i.map(u=>{var x,g;const h={};if((x=u.documents)!=null&&x.fieldName)for(let m=0;m<u.documents.files.length;m++)h[((g=u.documents)==null?void 0:g.fieldName)+`[${m}]`]=u.documents.files[m];return h}),c=i.map(u=>{var x,g;const h={};return(x=u.optionalCheckbox)!=null&&x.fieldName&&(h[(g=u.optionalCheckbox)==null?void 0:g.fieldName]=u.optionalCheckbox.value),h}),p=Object.assign({},...a,...r,...c);try{await Je.postApplicationFx({formId:e,args:p}),n(!1),s(!0)}catch{n(!1)}},oo=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=r_(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},r_=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,dc=d.div`
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
`;var xs=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(xs||{}),l_=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(l_||{});const c_=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],d_=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],p_=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:d_},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:c_}]}},u_=()=>{var D;const[e,i]=l.useState(null),[n,s]=l.useState(Ai.kvdCert),[o,a]=l.useState(Ai.fluorographyCert),[r,c]=l.useState(Ai.vichRwCert),[p,u]=l.useState(Ai.graftCert),{data:{dataUserApplication:h}}=_e.useApplications(),{data:{user:x}}=fe.useUser(),[g,m]=l.useState(!1),[f,b]=l.useState(!1),[v,$]=l.useState(null),[j,E]=l.useState(null),[k,V]=l.useState(null),O=g??!1;if((x==null?void 0:x.educationForm)!=="Недоступен")return t.jsx(he,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const R=!!e&&!!j&&!!v&&!!k;if(l.useEffect(()=>{h&&(i(p_(h)),$(o_()),E(a_()),V(s_()))},[h]),!R)return null;const ee=[[{dataForm:e,setDataForm:i}],[{dataForm:j,setDataForm:E}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:p,setDataForm:u}]];return t.jsx(dc,{isDone:O,children:t.jsxs(ba,{children:[t.jsx(M,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(lc,{stagesConfig:ee}),t.jsx(Rt,{text:"Отправить",action:()=>cc(xs.USG_GETHOSTEL_OOZ,[e,j,v,k,n,o,r,p],b,m),isLoading:f,completed:g,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:O,isActive:(((D=e.optionalCheckbox)==null?void 0:D.value)??!0)&&$e(e)&&$e(o)&&$e(r)&&$e(p)&&$e(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},h_=l.lazy(()=>w(()=>import("./index-20910362.js"),["assets/index-20910362.js","assets/vendor-2bd70a0f.js"])),x_=l.lazy(()=>w(()=>import("./index-eaded8a3.js"),["assets/index-eaded8a3.js","assets/vendor-2bd70a0f.js"])),g_=l.lazy(()=>w(()=>import("./index-49aea555.js"),["assets/index-49aea555.js","assets/vendor-2bd70a0f.js"])),f_=l.lazy(()=>w(()=>import("./index-44e4c3fd.js"),["assets/index-44e4c3fd.js","assets/vendor-2bd70a0f.js"])),m_=l.lazy(()=>w(()=>import("./index-2cf1ef22.js"),["assets/index-2cf1ef22.js","assets/vendor-2bd70a0f.js"])),b_=l.lazy(()=>w(()=>import("./index-be097a54.js"),["assets/index-be097a54.js","assets/vendor-2bd70a0f.js","assets/get-method-obtaining-fields-48306a9a.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),v_=l.lazy(()=>w(()=>import("./index-b773c939.js"),["assets/index-b773c939.js","assets/vendor-2bd70a0f.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),y_=l.lazy(()=>w(()=>import("./index-89920720.js"),["assets/index-89920720.js","assets/vendor-2bd70a0f.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),j_=l.lazy(()=>w(()=>import("./index-f787eff0.js"),["assets/index-f787eff0.js","assets/vendor-2bd70a0f.js"])),w_=l.lazy(()=>w(()=>import("./index-3e76fe5e.js"),["assets/index-3e76fe5e.js","assets/vendor-2bd70a0f.js","assets/index-9f6900ac.js"])),__=l.lazy(()=>w(()=>import("./index-65cd5697.js"),["assets/index-65cd5697.js","assets/vendor-2bd70a0f.js"])),k_=l.lazy(()=>w(()=>import("./index-5b2128da.js"),["assets/index-5b2128da.js","assets/vendor-2bd70a0f.js"])),S_=l.lazy(()=>w(()=>import("./index-e299c21e.js"),["assets/index-e299c21e.js","assets/vendor-2bd70a0f.js"])),T_=l.lazy(()=>w(()=>import("./index-424ec49a.js"),["assets/index-424ec49a.js","assets/vendor-2bd70a0f.js"])),E_=l.lazy(()=>w(()=>import("./index-5d6ce0a0.js"),["assets/index-5d6ce0a0.js","assets/vendor-2bd70a0f.js"])),$_=l.lazy(()=>w(()=>import("./index-4737a8f1.js"),["assets/index-4737a8f1.js","assets/vendor-2bd70a0f.js"])),C_=l.lazy(()=>w(()=>import("./index-0a4976d4.js"),["assets/index-0a4976d4.js","assets/vendor-2bd70a0f.js"])),P_=l.lazy(()=>w(()=>import("./index-7f2658fc.js"),["assets/index-7f2658fc.js","assets/vendor-2bd70a0f.js"])),O_=l.lazy(()=>w(()=>import("./index-ca409881.js"),["assets/index-ca409881.js","assets/vendor-2bd70a0f.js"])),A_=l.lazy(()=>w(()=>import("./index-76a96464.js"),["assets/index-76a96464.js","assets/vendor-2bd70a0f.js"])),D_=l.lazy(()=>w(()=>import("./index-9bbbca4f.js"),["assets/index-9bbbca4f.js","assets/vendor-2bd70a0f.js"])),N_=l.lazy(()=>w(()=>import("./index-92600d2a.js"),["assets/index-92600d2a.js","assets/vendor-2bd70a0f.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>ck),void 0));const I_=l.lazy(()=>w(()=>import("./index-693964b4.js"),["assets/index-693964b4.js","assets/vendor-2bd70a0f.js"])),R_=l.lazy(()=>w(()=>import("./index-ebb2c7c2.js"),["assets/index-ebb2c7c2.js","assets/vendor-2bd70a0f.js"])),L_=l.lazy(()=>w(()=>import("./index-5f8685af.js"),["assets/index-5f8685af.js","assets/vendor-2bd70a0f.js"])),z_=l.lazy(()=>w(()=>import("./index-62950e96.js"),["assets/index-62950e96.js","assets/vendor-2bd70a0f.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),M_=l.lazy(()=>w(()=>import("./index-77eaf4b1.js"),["assets/index-77eaf4b1.js","assets/vendor-2bd70a0f.js","assets/get-method-obtaining-fields-48306a9a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),F_=l.lazy(()=>w(()=>import("./index-bb7a32bd.js"),["assets/index-bb7a32bd.js","assets/vendor-2bd70a0f.js"])),B_=l.lazy(()=>w(()=>import("./index-542a2d78.js"),["assets/index-542a2d78.js","assets/vendor-2bd70a0f.js"])),H_=l.lazy(()=>w(()=>import("./index-62efb797.js"),["assets/index-62efb797.js","assets/vendor-2bd70a0f.js"])),U_=l.lazy(()=>w(()=>import("./index-0a2624ba.js"),["assets/index-0a2624ba.js","assets/vendor-2bd70a0f.js"])),W_=l.lazy(()=>w(()=>import("./index-539cab6d.js"),["assets/index-539cab6d.js","assets/vendor-2bd70a0f.js"])),V_=l.lazy(()=>w(()=>import("./index-94b5e0e8.js"),["assets/index-94b5e0e8.js","assets/vendor-2bd70a0f.js"])),G_=l.lazy(()=>w(()=>import("./index-e7f2fe8e.js"),["assets/index-e7f2fe8e.js","assets/vendor-2bd70a0f.js"])),Y_=l.lazy(()=>w(()=>import("./index-058d91bb.js"),["assets/index-058d91bb.js","assets/vendor-2bd70a0f.js","assets/get-divisions-96cfa1b1.js"])),q_="Sep 07 2023 12:00:00 GMT+0300",pc="Sep 08 2023 12:00:00 GMT+0300",vT=e=>{const i=new Date;return i<new Date(q_)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(pc)?"Подача заявок закрыта":""},J_=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],X_=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],K_=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],Q_=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],Z_=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],ek=[{id:0,title:"1"},{id:1,title:"2"}],tk=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],ik=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],nk=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],sk=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),ok=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:J_,width:"100%",editable:!0,required:!0}]}),ak=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:X_,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),rk=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:K_,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:Q_,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:Z_,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:ek,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:tk,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),lk=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:ik,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ao=e=>{var n,s,o,a,r,c,p;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:nk,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((p=e[4])==null?void 0:p.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},uc=()=>{var V;const[e,i]=l.useState(null),[n,s]=l.useState(ok()),[o,a]=l.useState(ak()),[r,c]=l.useState(rk()),[p,u]=l.useState(lk()),[h,x]=l.useState(ao(null)),[g,m]=l.useState(!1),[f,b]=l.useState(!1),[v,$]=l.useState(!1),{data:{dataUserApplication:j}}=_e.useApplications();l.useEffect(()=>{j&&i(sk(j))},[j]);const E=l.useMemo(()=>{var O,R;return((R=(O=h==null?void 0:h.data[0])==null?void 0:O.value)==null?void 0:R.id)!==0},[(V=h==null?void 0:h.data[0])==null?void 0:V.value]);if(l.useEffect(()=>{h&&x(ao(h.data))},[E]),!e)return null;const k=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:p,setDataForm:u}],[{dataForm:h,setDataForm:x}]];return t.jsx(dc,{isDone:!1,children:t.jsxs(ba,{children:[t.jsx(M,{size:3,align:"left",children:"Воинский учет"}),t.jsx(lc,{stagesConfig:k}),t.jsx(Xe,{checked:g,setChecked:m,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(Rt,{text:f?"Отправлено":"Отправить",action:()=>cc(xs.MIL_REG,[e,n,o,r,p,h],$,b),isLoading:v,completed:f,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:f,isActive:!!g&&!!e&&!!n&&!!r&&!!p&&!!h&&!!o&&$e(e)&&$e(n)&&$e(r)&&$e(p)&&$e(h)&&$e(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},ck=Object.freeze(Object.defineProperty({__proto__:null,default:uc},Symbol.toStringTag,{value:"Module"})),C="/applications",dk="/application-for-superior-room",pk="/acad-performance",uk="/dormitory",hc=C+"/clarification-of-passport-data",xc=C+"/arbitrary-request",gc=C+"/social-scollarship",fc=C+"/certificate-of-attendance",mc=C+"/social-agencies",bc=C+"/paper-call",vc=C+"/regular-accommodation",yc=C+"/full-time-part-time-form",jc=C+"/accommodation-correspondence-form",wc=C+"/academic-leave-accommodation",_c=C+"/preferential-accommodation",kc=C+"/family-room",Sc=C+"/termination-of-employment-contract",Tc=C+"/relocation-inside-hostel",Ec=C+"/relocation-to-another-hostel",$c=C+"/accommodation-for-graduates",Pn=C+"/payment-recipient",Cc=C+"/restoring-the-magnetic-pass",Pc=C+"/retake-for-diploma",Oc=C+"/military-registration-documents",Ac=C+"/military-registration",Dc=C+"/financial-support",Nc=C+"/financial-assistance",Ic=C+"/increased-state-academic-scholarship",Rc=C+"/changing-personal-data",Lc=C+"/student-status",zc=C+"/state-accreditation",hk=C+"/military-registration-card",Mc=C+"/holidays-after-training",Fc=C+"/provision-academic-leave",Bc=C+"/independently-deducted",Hc=C+"/extension-attestation",bt=()=>je({oldVersionUrl:"/sprav"}),Qt=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(N,{}),path:C,Component:w_,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...gl,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(at,{}),path:Ui,Component:ns,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(bs,{}),path:uk,Component:g_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Zp,{}),path:pk,Component:x_,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Eo,{}),path:dl,Component:__,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(eu,{}),path:hl,Component:Vn,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(bs,{}),path:dk,Component:h_,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(pc))}}),ro=e=>{var i,n,s;return{...fl,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(Fi,{}),path:hc,Component:f_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(Fi,{}),path:xc,Component:Y_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(K,{}),path:gc,Component:I?bt:m_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(K,{}),path:fc,Component:b_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(K,{}),path:mc,Component:v_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(K,{}),path:bc,Component:y_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(K,{}),path:vc,Component:j_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(K,{}),path:yc,Component:u_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(K,{}),path:jc,Component:V_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(K,{}),path:wc,Component:k_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(K,{}),path:_c,Component:S_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(K,{}),path:kc,Component:G_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(K,{}),path:Sc,Component:T_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(K,{}),path:Tc,Component:I?()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):E_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(K,{}),path:Ec,Component:I?()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):C_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:K,path:$c,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?$_:()=>t.jsx(je,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(K,{}),path:Pn,Component:P_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(K,{}),path:Cc,Component:O_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(K,{}),path:Oc,Component:I?bt:N_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(tu,{}),path:Ac,Component:I?bt:uc,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:C},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(K,{}),path:Pc,Component:D_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(K,{}),path:Ic,Component:I?bt:A_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(K,{}),path:Dc,Component:I?bt:I_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(K,{}),path:Nc,Component:I?bt:R_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(K,{}),path:Rc,Component:L_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(K,{}),path:Lc,Component:z_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(K,{}),path:zc,Component:M_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(K,{}),path:Mc,Component:F_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(K,{}),path:Fc,Component:B_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(K,{}),path:Bc,Component:H_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(K,{}),path:Hc,Component:U_,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(K,{}),path:hk,Component:I?bt:W_,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C}}},lo=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),xk=["settings","profile","chat","schedule","payments","project-activity","all-students"],gk=["home","schedule","acad-performance","all","profile"],fk=["home","schedule","alerts","all","profile"],mk=["home","doclist","alerts","all","profile"],bk=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(q.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??qi,s=Fo.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},co={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},vk=()=>W(jk),Uc=S(),Wc=S(),Vc=S(),Gc=S(),yk=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},Zt=e=>{if(!e)return Bs();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(Bs()).filter(([p])=>p!==r||p===r&&a);return Object.fromEntries(c)},jk=X(co).on(Uc,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(Wc,()=>({...co})).on(Vc,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?Zt(n)[window.location.hash.slice(2,window.location.hash.length)]:Qt()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...Zt(n),...Hs()}:{...Qt(),...ro(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?Zt(n):Qt(),leftsideBarRoutes:lo(bk(i),(i==null?void 0:i.user_status)==="staff"?Zt(n):Qt()),homeRoutes:lo(s??JSON.parse(localStorage.getItem(q.HomeRoutes)??JSON.stringify(xk)),(i==null?void 0:i.user_status)==="staff"?{...Zt(n),...Hs()}:{...Qt(),...ro(i)})})).on(Gc,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:yk(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Fe={useMenu:vk},Ze={changeOpen:Uc,clearStore:Wc,defineMenu:Vc,changeNotifications:Gc},Yc=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:pl,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ct,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Ui,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Ui,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:rs,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:ae,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Sr,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:ss,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:C,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:il,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},wk={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},qc=(e,i)=>i.filter(({type:n})=>e[wk[n]]),_k={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},rn=L(async({settings:e})=>{try{const{data:i}=await rh();return qc(e,i).map(({id:n,type:s,title:o,text:a})=>Yc(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),kk=L(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&Ze.changeNotifications({page:i,notifications:1})})}),Sk=L(({notifications:e})=>{const{pageId:i}=e[0];i&&Ze.changeNotifications({page:i,notifications:1})}),ln=L(async({id:e,pageId:i})=>{try{return await lh(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),cn=L(async()=>{try{await ch()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Tk=e=>{e&&Ze.changeNotifications({page:e,notifications:0})},Jc=S(),Xc=S(),Kc=S(),Qc=S(),Zc=S(),ed=S(),td=S(),se=X(_k).reset(td);Ue({from:Xc,to:rn});P({clock:rn.pending,source:se,fn:(e,i)=>({...e,loading:i}),target:se});P({clock:rn.failData,source:se,fn:(e,i)=>({...e,error:i.message}),target:se});P({clock:rn.doneData,source:se,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[se,kk]});P({clock:Jc,source:se,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[se,Sk]});Ue({from:Qc,to:ln});P({clock:ln.doneData,source:se,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Tk(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:se});P({clock:ln.failData,source:se,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:se});P({clock:ln.pending,source:se,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:se});Ue({from:Zc,to:cn});P({clock:cn.pending,source:se,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:se});P({clock:cn.failData,source:se,fn:(e,i)=>({...e,clearAllError:i.message}),target:se});P({clock:cn.doneData,source:se,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:se});P({clock:Kc,source:se,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:se});P({clock:ed,source:se,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:se});const Ek=()=>Pe(se),dt={initialize:Xc,add:Jc,clearById:Qc,clearVisibleById:Kc,clearAll:Zc,clearAllVisible:ed,clearStore:td},We={useLkNotifications:Ek},$k=Object.freeze(Object.defineProperty({__proto__:null,events:dt,selectors:We},Symbol.toStringTag,{value:"Module"})),po={messages:null,error:null},Ck=()=>({data:W(uo).messages,loading:W(ri.pending),error:W(uo).error}),ri=L(async()=>{try{return(await Nu("1")).data}catch(e){throw new Error(e)}}),id=S(),uo=X(po).on(ri,e=>({...e,error:null})).on(ri.doneData,(e,i)=>({...e,messages:i})).on(ri.failData,(e,i)=>({...e,error:i.message})).on(id,()=>({...po})),Pk={useMessages:Ck},Ok={getMessagesFx:ri},Ak={clearStore:id},Dk=Object.freeze(Object.defineProperty({__proto__:null,effects:Ok,events:Ak,selectors:Pk},Symbol.toStringTag,{value:"Module"})),ho={type:null,personalNotifications:null,error:null,completed:!1},Nk=()=>({data:W(Nt).personalNotifications,loading:W(Dt.pending),error:W(Nt).error,completed:W(Nt).completed}),Ik=()=>W(Nt).type,nd=S(),sd=L(e=>e),Dt=L(async()=>{const{type:e}=Nt.getState();if(e==="notifications")try{return(await Go()).data}catch(i){throw new Error(i)}try{return{docs:(await Yo()).data}}catch(i){throw new Error(i)}}),Gi=L(async e=>{const{type:i}=Nt.getState(),n=i==="notifications"?Ku:Zu;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),od=S(),Nt=X(ho).on(sd,(e,i)=>({...e,type:i})).on(Dt,e=>({...e,error:null})).on(Dt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Dt.failData,(e,i)=>({...e,error:i.message})).on(Gi.doneData,e=>({...e})).on(Gi.failData,(e,i)=>({...e,error:i.message})).on(nd,(e,i)=>({...e,completed:i.completed})).on(od,()=>({...ho}));Gi.doneData.watch(()=>Dt());const Rk={usePersonalNotifications:Nk,useType:Ik},Lk={setNotificationsType:sd,getPersonalNotificationsFx:Dt,viewPersonalNotificationsFx:Gi},zk={changeCompleted:nd,clearStore:od},Mk=Object.freeze(Object.defineProperty({__proto__:null,effects:Lk,events:zk,selectors:Rk},Symbol.toStringTag,{value:"Module"})),Fk=Xi({api:{get:Ju}}),xo={superiorRoom:null,error:null},Bk=()=>({data:W(go).superiorRoom,loading:W(li.pending),error:W(go).error}),ad=S(),Hk=L(async e=>{});Ue({from:ad,to:Hk});const li=L(async()=>{try{return(await Mu()).data}catch{throw new Error("Не удалось загрузить раздел")}}),rd=S(),go=X(xo).on(li,e=>({...e,error:null})).on(li.doneData,(e,i)=>({...e,superiorRoom:i})).on(li.failData,(e,i)=>({...e,error:i.message})).on(rd,()=>({...xo})),Uk={useSuperiorRoom:Bk},Wk={getSuperiorRoomFx:li},Vk={postSuperiorRoom:ad,clearStore:rd},Gk=Object.freeze(Object.defineProperty({__proto__:null,effects:Wk,events:Vk,selectors:Uk},Symbol.toStringTag,{value:"Module"})),fo={teacherDataVerification:null,error:null,completed:!1},Yk=()=>({data:W(mn).teacherDataVerification,loading:W(ci.pending),error:W(mn).error,completed:W(mn).completed}),ld=S(),cd=S(),qk=L(async e=>{try{return(await nh(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Ue({from:ld,to:qk});const ci=L(async()=>{try{return(await ih()).data}catch{throw new Error("Не удалось войти")}}),dd=S(),mn=X(fo).on(ci,e=>({...e,error:null})).on(ci.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(ci.failData,(e,i)=>({...e,error:i.message})).on(cd,(e,i)=>({...e,completed:i.completed})).on(dd,()=>({...fo})),Jk={useTeacherDataVerification:Yk},Xk={getTeacherDataVerificationFx:ci},Kk={postTeacherDataVerification:ld,changeCompleted:cd,clearStore:dd},Qk=Object.freeze(Object.defineProperty({__proto__:null,effects:Xk,events:Kk,selectors:Jk},Symbol.toStringTag,{value:"Module"})),Zk=[uh,rt,_h,Th,zh,Dk,Mk,$b,vh,Fk,dj,Gk,Qk,Oh,xh,$k],eS=()=>{Zk.forEach(e=>{e.events.clearStore()})},nt=localStorage.getItem(q.Token)??"",st=()=>JSON.parse(localStorage.getItem(q.SavePassword)??"true"),dn=L(async e=>{try{const{data:i}=await wu(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await gi.post("/old",n)}catch{}return st()?(localStorage.setItem(q.Token,i.token),localStorage.setItem(q.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(q.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(q.Token,i.token),sessionStorage.setItem(q.JWT,(i==null?void 0:i.jwt)??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),jt=L(async e=>{try{const n=(await _u(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,guid:e.jwt?$t(e.jwt).IndividualGuid:"",fullName:dh({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:st()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),On=L(async e=>{try{return(await ku(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),pd=L(()=>{st()?(localStorage.removeItem(q.Token),localStorage.removeItem(q.JWT),localStorage.removeItem(q.JWTRefresh)):(sessionStorage.removeItem(q.Token),sessionStorage.removeItem(q.JWT),sessionStorage.removeItem(q.JWTRefresh)),eS()}),ud=e=>{const i=localStorage.getItem(q.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(q.SavePassword,n.toString()),n},hd=S(),gs=S(),xd=S(),gd=S(),fd=S();Ue({from:hd,to:dn});P({clock:dn.doneData,target:jt});Ue({from:gs,to:pd});nt&&st()?jt({token:nt,jwt:localStorage.getItem(q.JWT)}):pd();const tS={currentUser:null,error:null,isAuthenticated:!!(nt!=null&&nt.length),savePassword:st(),loginEuz:""};ud();const iS=X(tS).on(jt,e=>({...e,error:null})).on(jt.doneData,(e,i)=>i).on(jt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(nt!=null&&nt.length),savePassword:st()})).on(dn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:st()})).on(gs,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:st()})).on(fd,(e,{savePassword:i})=>({...e,savePassword:ud(i)})).on(On,e=>({...e,error:null})).on(On.doneData,(e,i)=>({...e,loginEuz:i})).on(jt.failData,(e,i)=>({...e,error:i.message})).on(gd,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(xd,e=>({...e,currentUser:null})),fe={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=W(iS);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:W(dn.pending),error:i}}},Ft={login:hd,logout:gs,changeSavePassword:fd,clear:xd,update:gd},nS={getUserFx:jt,getLoginEuzFx:On},sS=()=>{const e="0.0.1";localStorage.getItem(q.Version)!==e&&(localStorage.clear(),localStorage.setItem(q.Version,e),Ft.logout())},md=S(),bd=L(Uu);P({clock:md,target:bd});const vd=X([]),yT=Dn(vd,e=>e.map(i=>i.divisionName));P({clock:bd.doneData,target:vd});const oS=()=>{const{allRoutes:e}=Fe.useMenu();return e?t.jsxs(zo,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(Mo,{path:i,component:n,exact:!s},i)),t.jsx(Ye,{exact:!0,to:os})]}):null},aS=de.memo(oS),rS=d.div`
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
`,lS=()=>{const{open:e,content:i,position:n}=Nx.useContextMenu(),s=l.useRef(null);return Ut(s,()=>Me.close()),t.jsx(sn,{isOpen:e,children:t.jsx(rS,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},yd=200,cS=5e3,dS=()=>{const{visibleNotifications:e}=We.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{dt.clearVisibleById(a)},yd)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??cS))},[e]),{handleClose:o,closing:i}},pS=d.div`
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
`,uS=d.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${yd/1e3}s forwards;

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
`;d.div`
    height: 4px;
    border-radius: 3px;
    background: ${_.blue.main};
    animation: ${({started:e,duration:i})=>e&&`decrease ${i/1e3}s linear forwards`};

    @keyframes decrease {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`;const hS=()=>{const{visibleNotifications:e}=We.useLkNotifications(),{closing:i,handleClose:n}=dS();return t.jsx(pS,{children:e.map(s=>t.jsx(uS,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Va,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},mo=d.div`
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
`,xS=({loading:e})=>{const{data:{user:i},error:n}=fe.useUser(),s=i?ze(i==null?void 0:i.fullName):_.blue.main,o=()=>nS.getUserFx(JSON.parse(localStorage.getItem(q.Token)??"")),a=()=>Ft.logout();return n?t.jsx(mo,{$loading:!0,color:s,children:t.jsx(he,{text:n,children:t.jsxs(T,{d:"column",gap:"8px",children:[t.jsx(y,{onClick:o,text:"Попробовать снова",icon:t.jsx(Nn,{}),width:"200px"}),t.jsx(y,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(mo,{color:s,$loading:e,children:[t.jsx(Zi,{short:!0,width:"100px"}),e&&t.jsx(gt,{})]})},gS=d.div`
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
`,fS=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=hs.useStory();return t.jsx(gS,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():yt.changeCurrentPage({value:o+1})})})},mS=d(Qi)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,bS=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=hs.useStory();return t.jsxs(mS,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(fS,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(nu,{}):t.jsx(iu,{}),t.jsx(y,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Ke,{}),onClick:n})]})},vS=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,yS=d(Qe)`
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
`,jS=d.div`
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
    transform: ${({align:e})=>vS(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,wS=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:p,imageAlign:u,imageSize:h={width:"auto",height:"100%"},textAlign:x="left"})=>{const g=bi();return t.jsxs(yS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Un,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(jS,{imageAlign:u,onClick:()=>c(m=>!m),background:e,align:i,color:s,children:[t.jsx(M,{size:2,align:x,children:o}),t.jsx(ie,{fontSize:"1.1em",align:x,children:a}),!!(p!=null&&p.text)&&t.jsx(y,{onClick:()=>{g.push(p.to),yt.close()},text:p.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},_S=d.div`
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
`,bo=d.div`
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
`,kS=()=>{const{pages:e,isOpen:i,currentPage:n}=hs.useStory(),s=l.useRef(null);Ut(s,()=>yt.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(sn,{isOpen:i,children:t.jsx(_S,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(bS,{pages:e.length,onClose:()=>yt.close(),playing:o}),t.jsx(bo,{left:"15px",onClick:()=>{n!==0&&yt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(fi,{})}),t.jsx(wS,{setPlaying:a,currentPage:n,...r}),t.jsx(bo,{right:"15px",onClick:()=>{n!==e.length-1?yt.changeCurrentPage({value:n+1}):yt.close(),a(!0)},children:t.jsx(pt,{})})]})})})},SS=()=>{const{data:{user:e}}=fe.useUser(),{notifications:i,loading:n,loaded:s}=We.useLkNotifications(),{settings:o}=Bt.useSettings(),[a]=vi([pa.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{jn.getElectronicInteraction(),a&&!a.status&&dt.add(Yc("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||jn.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(qc(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,dt.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{Ze.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},TS=()=>{const{data:{user:e}}=fe.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(uu);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},ES=()=>{const e=Ma(),{open:i}=Z(),n=TS();return SS(),xt(),l.useEffect(()=>{n&&n&&i(t.jsx(Ol,{}),"Что нового")},[n]),{currentPage:e}},$S=d.div`
    display: flex;
    background: var(--theme);
    height: 100dvh;
`,CS=d.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,PS=d.div`
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
`,OS=d.div`
    max-height: 400px;
    overflow-y: auto;
`,AS=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(he,{text:e.message,image:t.jsx(su,{}),children:t.jsxs(T,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(ue,{}),t.jsx(Ba,{title:t.jsx(J,{type:"failure",fontSize:"0.95rem",title:t.jsxs(T,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(ou,{})]})}),children:t.jsx(J,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(OS,{children:e.stack})})})]})})});class jd extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n)}render(){return this.state.hasError?t.jsx(AS,{error:this.state.error}):this.props.children}}const DS=()=>{const{data:{user:e}}=fe.useUser(),{allRoutes:i}=Fe.useMenu(),{currentPage:n}=ES(),[s,o]=l.useState(!1),a=l.useRef(null),r=c=>{o(c.currentTarget.scrollTop>0)};return t.jsxs($S,{children:[t.jsx(xS,{loading:!e||!i}),t.jsx(kS,{}),t.jsx(c1,{}),t.jsxs(CS,{children:[t.jsx(Jy,{headerVisible:s,currentPage:n}),t.jsx(PS,{ref:a,onScroll:r,withHeader:!(n!=null&&n.withoutHeader),children:t.jsx(jd,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(aS,{})})})}),t.jsx(pw,{})]}),t.jsx(f1,{}),t.jsx(p1,{}),t.jsx(b1,{}),t.jsx(lS,{}),t.jsx(bw,{}),t.jsx(hS,{})]})},NS=()=>{const{data:{isAuthenticated:e,user:i}}=fe.useUser(),{data:n}=rt.selectors.useData(),{settings:s}=Bt.useSettings();return l.useEffect(()=>{e&&(Je.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(rt.effects.getFx(),Je.getWorkerPosts(),md()))},[e,i]),l.useEffect(()=>{i&&(s?Ze.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):Uh.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(DS,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(zo,{children:[Wv.map(({path:o,Component:a},r)=>t.jsx(Mo,{path:o,component:a,exact:!0},r)),t.jsx(Ye,{exact:!0,to:tl})]})})},IS=d.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`;sS();const RS=()=>(xt(),t.jsx(Bf,{children:t.jsx(au,{basename:"/",children:t.jsx(IS,{children:t.jsx(jd,{children:t.jsx(NS,{})})})})})),LS=ru`
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
`;lu.render(t.jsxs(de.StrictMode,{children:[t.jsx(LS,{}),t.jsx(RS,{})]}),document.getElementById("root"));export{iS as $,l_ as A,y as B,Xe as C,ue as D,H as E,ba as F,Eh as G,Cw as H,e_ as I,$e as J,vt as K,gt as L,J as M,he as N,Gy as O,vv as P,Xi as Q,Qe as R,Rt as S,M as T,ie as U,Lt as V,ft as W,Te as X,yl as Y,fe as Z,wi as _,Y as a,Ut as a$,eh as a0,th as a1,Ca as a2,gy as a3,my as a4,Fe as a5,xy as a6,hl as a7,cs as a8,Hv as a9,ZS as aA,Zn as aB,KS as aC,Xn as aD,QS as aE,Qn as aF,nb as aG,vd as aH,tT as aI,ey as aJ,Nw as aK,Kw as aL,xc as aM,Ui as aN,Uv as aO,sT as aP,ny as aQ,iy as aR,sh as aS,Ee as aT,ve as aU,iT as aV,rs as aW,Ci as aX,F as aY,Me as aZ,en as a_,bT as aa,JS as ab,_ as ac,Lk as ad,dt as ae,Rk as af,YS as ag,_e as ah,Je as ai,mT as aj,$a as ak,fT as al,ds as am,Ne as an,xe as ao,$t as ap,ht as aq,dc as ar,yT as as,XS as at,fh as au,Ss as av,ae as aw,cc as ax,Xm as ay,eT as az,Xk as b,Pj as b$,pa as b0,jn as b1,q1 as b2,xh as b3,Oe as b4,it as b5,Xb as b6,Jb as b7,dw as b8,xT as b9,be as bA,Oy as bB,kl as bC,Nv as bD,qe as bE,Ft as bF,jw as bG,Vv as bH,Bv as bI,Fv as bJ,Mv as bK,Al as bL,lj as bM,nn as bN,$i as bO,uT as bP,tj as bQ,xl as bR,ij as bS,nj as bT,At as bU,iw as bV,Zl as bW,Zs as bX,cw as bY,zj as bZ,tw as b_,hT as ba,Gj as bb,Gl as bc,us as bd,gT as be,Bt as bf,Gt as bg,pl as bh,If as bi,ze as bj,ps as bk,Sn as bl,cj as bm,_l as bn,Fy as bo,A as bp,fn as bq,oT as br,_1 as bs,cT as bt,dT as bu,pT as bv,lT as bw,rT as bx,Ce as by,aT as bz,Oh as c,Ij as c0,ew as c1,qj as c2,xt as c3,ql as c4,Rl as c5,kr as c6,xi as c7,sw as c8,jl as c9,FS as cA,MS as cB,Dl as cC,_j as cD,Un as cE,uh as cF,Cx as cG,qS as cH,c_ as cI,Ai as cJ,o_ as cK,a_ as cL,s_ as cM,lc as cN,M1 as cO,Fk as cP,Us as ca,Fo as cb,qi as cc,Yv as cd,Gv as ce,VS as cf,WS as cg,bl as ch,ml as ci,ji as cj,S1 as ck,Da as cl,HS as cm,tm as cn,ma as co,US as cp,nT as cq,Qi as cr,Iy as cs,nS as ct,Oi as cu,GS as cv,Uk as cw,Wk as cx,vT as cy,ph as cz,xs as d,Kk as e,Ps as f,lt as g,Ta as h,qa as i,Be as j,vx as k,oe as l,oh as m,Dy as n,ne as o,T as p,mm as q,an as r,Jk as s,_i as t,Z as u,Wn as v,gx as w,vu as x,BS as y,B as z};
