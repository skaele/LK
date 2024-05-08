import{F as Ze,a as ki,b as Ot,c as gn,H as Qn,d as zt,y as L,u as k,p as V,e as q,x as P,S as ze,m as fn,r as l,s as u,j as t,f as et,I as Mp,g as Fp,h as Bp,i as Hp,k as vs,A as xn,l as A,n as Up,o as fe,q as Jt,t as Wn,v as Wp,w as Vp,R as le,z as At,B as Ci,C as tt,L as Z,D as Si,E as Gp,G as qp,J as mn,K as ei,M as Yp,N as Kp,O as bt,P as Ge,Q as da,T as it,U as pa,V as ys,W as gt,X as ua,Y as ha,Z as Me,_ as ga,$ as fa,a0 as Jp,a1 as Xp,a2 as Qp,a3 as Zp,a4 as xa,a5 as vt,a6 as bn,a7 as _s,a8 as eu,a9 as Je,aa as Xt,ab as tu,ac as iu,ad as nu,ae as su,af as ou,ag as au,ah as Q,ai as ru,aj as ma,ak as ba,al as lu,am as cu,an as Ji,ao as ws,ap as va,aq as du,ar as pu,as as uu,at as ya,au as hu,av as vn,aw as gu,ax as _a,ay as wa,az as ja,aA as ka,aB as fu,aC as xu,aD as Sa,aE as Ta,aF as nn,aG as mu,aH as bu,aI as fi,aJ as Ea,aK as ie,aL as to,aM as $a,aN as vu,aO as yu,aP as _u,aQ as wu,aR as Xi,aS as ju,aT as ku,aU as Su,aV as Tu,aW as Eu,aX as $u,aY as Pu,aZ as Cu,a_ as Ou,a$ as Au,b0 as Du,b1 as Nu,b2 as Iu,b3 as Ru,b4 as Lu,b5 as zu,b6 as Mu,b7 as Fu,b8 as Bu,b9 as Hu,ba as Uu,bb as Wu,bc as Pa,bd as Vu,be as Gu,bf as qu,bg as Yu,bh as Ku,bi as Ju,bj as Xu,bk as js,bl as Qu,bm as Zu,bn as eh,bo as th,bp as ih,bq as nh,br as sh,bs as oh,bt as ah,bu as Ca,bv as rh,bw as Zn,bx as lh,by as ch,bz as dh,bA as io,bB as ph,bC as uh,bD as hh,bE as gh,bF as Oa,bG as no,bH as fh,bI as xh,bJ as mh,bK as bh,bL as vh,bM as yh,bN as Aa,bO as Da,bP as _h,bQ as wh,bR as jh,bS as kh}from"./vendor-f4aa581a.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Sh="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",Th=3,yn=["home","settings","all"],Na=["home","settings","download-agreements","all"],Ia="https://lk.eseur.ru/signup",Eh="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Vt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},e$={Зачтено:w.green,"Не зачтено":w.red,Отлично:w.green,Хорошо:w.blue,Удовлетворительно:w.orange,Неудовлетворительно:w.red,"Не явился":w.red,default:w.red},t$={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",$h="2023-10-03T10:43:43",Dt={info:{icon:Ze,color:"blue",title:"Информация"},alert:{icon:ki,color:"orange",title:"Внимание!"},failure:{icon:Ot,color:"red",title:"Ошибка"},success:{icon:gn,color:"green",title:"Успешно"},tip:{icon:Qn,color:"grey",title:"Подсказка"},hint:{icon:Qn,color:"white",title:"Подсказка"},hrFailure:{icon:Ot,color:"red",title:"Ошибка"}},Ph={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Ch=["image/jpeg","image/jpg","image/png","application/pdf"],Oh=10,Ra="(max-width: 766px)",Ah="(min-width: 767px)",La="(max-width: 1000px)",za="(max-width: 1380px)",Ma="(min-width: 1381px)",X={isMobile:`@media ${Ra}`,isNotMobile:`@media ${Ah}`,isTablet:`@media ${La}`,isSmallTesktop:`@media ${za}`,isMiddleTesktop:`@media ${Ma}`},Dh=[{query:Ra,title:"isMobile",value:"mobile"},{query:La,title:"isTablet",value:"tablet"},{query:za,title:"isSmallDesktop",value:"smallDesktop"},{query:Ma,title:"isMiddleDesktop",value:"middleDesktop"}],ks={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},O=!window.location.port||window.location.port==="80"||window.location.port==="4001"||window.location.port==="4002";console.log("Running on production",O);var M=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(M||{});const nt=()=>localStorage.getItem(M.JWT)||sessionStorage.getItem(M.JWT),ti=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Nh=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),es=e=>async i=>{var s,o,a,r,c,d,p;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((p=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:p.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Lt.logout();else{n._retry=!0;const h=localStorage.getItem(M.JWTRefresh);try{const{accessToken:f,refreshToken:g}=await Fh(h??"");return Nh()?(localStorage.setItem(M.JWT,f),localStorage.setItem(M.JWTRefresh,g)):(sessionStorage.setItem(M.JWT,f),sessionStorage.setItem(M.JWTRefresh,g)),e(n)}catch{Lt.logout()}}return Promise.reject(i)},Fa=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${nt()}`,e),Ih=`${R}/lk_api.php`,Rh="https://api.mospolytech.ru/serviceforfrontpersonnelorders",F=zt.create({baseURL:Ih,withCredentials:!0}),xe=zt.create({baseURL:Rh});xe.interceptors.request.use(Fa);!O&&xe.interceptors.response.use(e=>e,es(xe));function Ss(e){return e.isAxiosError}function B(){return localStorage.getItem(M.Token)??sessionStorage.getItem(M.Token)??""}const Lh=({login:e,password:i})=>F.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),zh=e=>F.get(`?getUser&token=${e}`),Mh=e=>F.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),i$=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",B()),F.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},n$=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),F.post(`?changeADPass=1&token=${B()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},s$=async e=>{const i=new FormData;return i.set("email",e),i.set("token",B()),F.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},o$=async e=>{const i=new FormData;return Object.entries(e).forEach(([n,s])=>{i.set(n,s)}),i.set("token",B()),F.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},a$=async e=>{var n,s;const i=new FormData;return i.set("token",B()),i.set("phone",e.phone_staff||""),i.set("allow_mobphone_in",((n=e.allow_mobphone_in)==null?void 0:n.toString())??"false"),i.set("allow_mobphone_out",((s=e.allow_mobphone_out)==null?void 0:s.toString())??"false"),F.post("?changeStaffPhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},r$=async e=>{const i=new FormData;return i.set("token",B()),i.set("guid",e.guid_staff),i.set("room",e.room),i.set("address",e.address),F.post("?changeStaffAddress=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Fh=async e=>{const{data:i}=await zt.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Bh=e=>F.get(`?getSchedule&group=${e}&token=${B()}`),Hh=e=>F.get(`?getScheduleTeacher&fio=${e}&token=${B()}`),Uh=()=>F.get(`?getSchedule&session=1&token=${B()}`),Wh=e=>F.get(`?getScheduleTeacher&fio=${e}&session=1&token=${B()}`),Vh=()=>F.get(`?getPayments&token=${B()}`),Gh=e=>F.get(`?signAgreement=${e}&token=${B()}`),qh=e=>F.get(`?signContract=${e}&token=${B()}`),Yh=async({semestr:e})=>{var i,n;return(n=(i=await F.get(`?getAcademicPerformance&semestr=${e}&token=${B()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},Kh=e=>F.get(`?getMessages&token=${B()}&id=${e}`),Jh=async()=>(await F.get(`?getPEPStatus&token=${B()}`)).data,Xh=async()=>(await F.get(`?setPEPAccept&token=${B()}`)).data,Qh=()=>F.get(`?getContactData&token=${B()}`),Zh=e=>{const i=new FormData;i.set("token",B()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},eg=()=>F.get(`?getRequestHighComfort&token=${B()}`),l$=e=>{const i=new FormData;i.set("token",B()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},tg=()=>F.get(`?getAppRequests&token=${B()}`),Ba=()=>F.get(`?getAppData&token=${B()}`),ig=async()=>await xe.get(`/Dismissal.GetAllHistory?employeeGuid=${ti(nt()??"").IndividualGuid}`),ng=async()=>{const{data:e}=await xe.get("/AnotherPlaceWork.GetDivisions");return e.divisions},sg=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",B()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await F.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},og=()=>xe.get(`?getAppRequests&token=${B()}`),ag=()=>xe.get(`?getAppData&token=${B()}`),rg=e=>xe.post("Dismissal.Post",e),lg=async()=>(await F.get(`?getAdminLinks&token=${B()}`)).data,cg=async e=>(await F.get(`?PDinfo&token=${B()}`)).data,dg=()=>F.get(`?getPhoneBookDivisions&token=${B()}`),Ha=()=>F.get(`?getNotification&token=${B()}`),pg=e=>F.get(`?viewNotification=${e}&token=${B()}`),ug=Object.freeze(Object.defineProperty({__proto__:null,get:Ha,view:pg},Symbol.toStringTag,{value:"Module"})),Ua=()=>F.get(`?getDocList&token=${B()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),hg=e=>F.get(`?viewDoc=${e}&token=${B()}`),gg=Object.freeze(Object.defineProperty({__proto__:null,get:Ua,view:hg},Symbol.toStringTag,{value:"Module"})),Wa=(e,i,n,s)=>F.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${B()}`),Ts=e=>F.get(`?getDivs=${e}&page=1&token=${B()}`),fg=()=>F.get(`?getCheckData&token=${B()}`),xg=e=>{const i=new FormData;i.set("token",B()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},mg=(e,i,n,s)=>F.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${B()}`),bg=async e=>await F.get(`?getGroups=${e}&perpage=30&page=1&token=${B()}`),vg=async()=>(await F.get(`?getAlerts&token=${B()}`)).data,yg=()=>F.get(`?getNotifications&token=${B()}`),_g=e=>F.get(`?clearNotificationById=${e}&token=${B()}`),wg=()=>F.get(`?clearAllNotifications&token=${B()}`);function jg({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const so={data:null,preparedData:null,loading:!1,error:null},_n=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Sh})=>{const o=e??so,a=()=>({data:q(p).data,preparedData:q(p).preparedData,loading:q(r.pending),error:q(p).error}),r=L(async h=>{try{const f=await i.get(h);return{data:f,preparedData:n?n(f):f}}catch(f){throw new Error(s(f))}}),c=L(async h=>{var f;try{const g=await((f=i.post)==null?void 0:f.call(i,h));return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=k(),p=V(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:f})=>({...h,error:f,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:f,preparedData:g})=>({...h,data:f,preparedData:g})).on(r.failData,(h,f)=>({...h,error:f.message})).on(d,()=>({...so}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d}}};function kg(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Sg=_n({api:{get:Yh},prepareData:kg}),Qe=_n({api:{get:lg}}),Tg=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Eg=_n({api:{get:vg},prepareData:Tg}),oo={message:"",type:"success",isOpen:!1,time:2e3},Va=k(),Ga=k(),qa=k();V(oo).on(Va,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ga,(e,{isOpen:i})=>({...e,isOpen:i})).on(qa,()=>({...oo}));const yt={evokePopUpMessage:Va,openPopUpMessage:Ga,clearStore:qa},ao={listApplication:null,error:null,dataUserApplication:null},xi=L(async()=>{const e=await og();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Qi=L(async()=>{const e=await ag();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),wn=L(async e=>await rg(e));P({clock:wn.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:yt.evokePopUpMessage});P({clock:wn.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:yt.evokePopUpMessage});const $g=k();ze({from:wn.doneData,to:xi});V(ao).on(Qi,e=>({...e,error:null})).on(Qi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Qi.failData,(e,i)=>({...e,error:i.message})).on(xi,e=>({...e,error:null})).on(xi.doneData,(e,i)=>({...e,listApplication:i})).on(xi.failData,(e,i)=>({...e,error:i.message})).on($g,()=>({...ao}));const Pg={getApplicationsFx:xi,getUserDataApplicationsFx:Qi,postApplicationFx:wn},ro={message:"",type:"success",isOpen:!1,time:2e3},Cg=()=>q(Og),Ya=k(),Ka=k(),Ja=k(),Og=V(ro).on(Ya,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Ka,(e,{isOpen:i})=>({...e,isOpen:i})).on(Ja,()=>({...ro})),Xa={usePopUpMessage:Cg},U={evokePopUpMessage:Ya,openPopUpMessage:Ka,clearStore:Ja},Ag=Object.freeze(Object.defineProperty({__proto__:null,events:U,selectors:Xa},Symbol.toStringTag,{value:"Module"})),lo={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},sn=L(async()=>{const e=await ig();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),mi=L(async()=>{const e=await tg();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),bi=L(async()=>{const e=await Ba();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Es=L(async e=>{const i=await sg(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),Dg=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=q(Ng);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:q(bi.pending),workerLoading:q(fn(sn.pending,Pg.postApplicationFx.pending,(o,a)=>o||a)),error:s}},Qa=k();ze({from:Es.doneData,to:mi});P({clock:Es.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:U.evokePopUpMessage});const Ng=V(lo).on(bi,e=>({...e,error:null})).on(bi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(bi.failData,(e,i)=>({...e,error:i.message})).on(mi,e=>({...e,error:null})).on(mi.doneData,(e,i)=>({...e,listApplication:i})).on(mi.failData,(e,i)=>({...e,error:i.message})).on(sn,e=>({...e,error:null})).on(sn.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Qa,()=>({...lo})),ye={useApplications:Dg},Le={getApplicationsFx:mi,getUserDataApplicationsFx:bi,postApplicationFx:Es,getWorkerPosts:sn},Ig={clearStore:Qa},Rg=Object.freeze(Object.defineProperty({__proto__:null,effects:Le,events:Ig,selectors:ye},Symbol.toStringTag,{value:"Module"})),co={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Lg=()=>q(zg),Za=k(),er=k(),tr=k(),zg=V(co).on(Za,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(er,e=>({...e,isOpen:!1})).on(tr,()=>({...co})),ir={useConfirm:Lg},dt={evokeConfirm:Za,closeConfirm:er,clearStore:tr},Mg=Object.freeze(Object.defineProperty({__proto__:null,events:dt,selectors:ir},Symbol.toStringTag,{value:"Module"})),Fg=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:q(d).data,loading:q(r.pending),error:q(d).error,completed:q(d).completed}),o=k(),a=L(async p=>{const h=await i.post(p);if(h.data.result!=="ok")throw new Error(h.data.error_text);return h.data});P({clock:a.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:U.evokePopUpMessage}),P({clock:a.failData,fn:p=>({message:`${p.message}`,type:"failure"}),target:U.evokePopUpMessage}),P({clock:a.doneData,target:Le.getApplicationsFx});const r=L(async p=>{if(i.get)try{return{...(await i.get(p)).data}}catch(h){throw new Error(h)}return n.data}),c=k(),d=V(n).on(r,p=>({...p,error:null})).on(r.doneData,(p,h)=>({...p,data:h})).on(r.failData,(p,h)=>({...p,error:h.message})).on(o,(p,h)=>({...p,completed:h.completed})).on(c,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:c}}},{effects:Bg,events:Hg,selectors:Ug}=Fg({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Qh,post:Zh}}),Wg=Object.freeze(Object.defineProperty({__proto__:null,effects:Bg,events:Hg,selectors:Ug},Symbol.toStringTag,{value:"Module"})),nr=k(),sr=k(),or=k(),ar=k(),Oi=L(async()=>{const i=(await Xh())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});P({clock:Oi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});P({clock:Oi.doneData,fn:()=>!0,target:or});P({clock:Oi.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:U.evokePopUpMessage});const Ti=L(async()=>{try{return(await Jh())[0]}catch(e){throw new Error(e)}});P({clock:sr,target:Oi});P({clock:nr,target:Ti});const rr=k(),Vg=Ti.pending,Gg=Oi.pending,qg=V(!1).on(ar,(e,i)=>i),Yg=V(!1).on(or,(e,i)=>i),Kg=V(null).on(Ti,()=>null).on(Ti.failData,(e,i)=>i.message),Jg=V(null).on(Ti.doneData,(e,i)=>i).on(rr,()=>null),lr={$error:Kg,$electronicInteractionStore:Jg,$completed:qg,$done:Yg,$loading:Vg,$workerLoading:Gg},ts={getElectronicInteraction:nr,postElectronicInteraction:sr,changeCompleted:ar,clearStore:rr},Xg=Object.freeze(Object.defineProperty({__proto__:null,events:ts,stores:lr},Symbol.toStringTag,{value:"Module"})),Qg="Sep 07 2023 12:00:00 GMT+0300",cr="Sep 08 2023 12:00:00 GMT+0300",c$=e=>{const i=new Date;return i<new Date(Qg)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(cr)?"Подача заявок закрыта":""},oe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},po=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),oe(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),oe(n,"extraWeird")}},ct=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:po(-30*11),maxValueInput:po(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Vi={kvdCert:ct({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:ct({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:ct({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:ct({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},ge=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var c,d,p;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const h=new Date(((c=a.value)==null?void 0:c.toString())??0);if(a.minValueInput){const f=new Date(a.minValueInput);if(h<f)return!0}if(a.maxValueInput){const f=new Date(a.maxValueInput);if(h>f)return!0}}const r=(p=(d=a.value)==null?void 0:d.toString())==null?void 0:p.length;return a.minValueLength&&r&&r<a.minValueLength?!0:i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(h=>!!h.files.length)})&&n&&s},Zg={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},ef=()=>Object.keys(He).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),dr=(e="")=>({[e]:{...ef(),[He["settings-appearance"]]:{id:He["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[He["settings-home-page"]]:{id:He["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[He["settings-customize-menu"]]:{id:He["settings-customize-menu"],property:{pages:yn}},[He["settings-notifications"]]:{id:He["settings-notifications"],property:Zg}}});var He=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(He||{});const is={settings:dr(),error:null,completed:!1};let De;const tf=()=>({settings:q(Zi).settings[De],error:q(Zi).error,completed:q(Zi).completed}),nf=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},pr=L(e=>{De=e;const i=JSON.parse(localStorage.getItem(M.NewSettings)??"{}")[De];return nf(i,dr(e)[e])}),ur=k(),hr=k(),gr=k(),Zi=V(is).on(hr,(e,i)=>({...e,completed:i.completed})).on(pr.doneData,(e,i)=>({...e,settings:{[De]:i}})).on(ur,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[De]:{...e.settings[De],[i]:{...e.settings[De][i],property:{...e.settings[De][i].property,[n]:s}}}}})).on(gr,()=>({...is}));Zi.watch(e=>{if(e!==is&&De){const i=JSON.parse(localStorage.getItem(M.NewSettings)??JSON.stringify({}));i[De]=e.settings[De],localStorage.setItem(M.NewSettings,JSON.stringify(i))}});const ii={useSettings:tf},Ai={updateSetting:ur,changeCompleted:hr,clearStore:gr},sf={getLocalSettingsFx:pr},_t=()=>{var a,r;const{settings:e}=ii.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const c=new Date().getHours()*60+new Date().getMinutes(),d=i.property.lightThemeRange??0,p=c>+d[0]&&c<+d[1],h=i.property.scheduledLightTheme?p?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(c=>{s(()=>{const d=c?"dark":"light";return document.documentElement.setAttribute("data-theme",d),Ai.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:d}),d})},[]);return{theme:n,switchTheme:o}},of=u.button`
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
`;function _(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:p,isChosen:h,padding:f,shrinkTextInMobile:g,fixedInMobile:x,direction:m="horizontal",isActive:b=!0,height:v,notActiveClickMessage:S,flipped:D,...j}=e,T=N=>{b?s==null||s(N):S&&U.evokePopUpMessage({type:"failure",message:S,time:1e4})};return t.jsxs(of,{text:!!n,onClick:T,isChosen:h,width:o,minWidth:a,background:r,padding:f,textColor:c,shrinkTextInMobile:g,hoverBackground:d,align:p,direction:m,isActive:b,fixedInMobile:x,height:v,flipped:D,...j,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const ns=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},uo=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},af=u.div`
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
`,rf=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],jn=u.div.withConfig({shouldForwardProp:e=>!rf.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?uo(n):ns(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?ns(i):uo(n)};
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
`,lf=u.div`
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
`;function J({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(lf,{pulse:s,size:i,shape:e,margin:n})}const cf=u(jn)`
    height: 100%;
`,df=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(cf,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(J,{...o,key:a}))}),St=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function pf({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:St(n),children:i});case 2:return t.jsx("h2",{className:"title",style:St(n),children:i});case 3:return t.jsx("h3",{className:"title",style:St(n),children:i});case 4:return t.jsx("h4",{className:"title",style:St(n),children:i});case 5:return t.jsx("h5",{className:"title",style:St(n),children:i});case 6:return t.jsx("h6",{className:"title",style:St(n),children:i});default:return t.jsx("h1",{className:"title",style:St(n),children:i})}}const uf=u.div`
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
`,hf=u.span`
    color: var(--red);
    margin-right: 5px;
`,gf=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function W(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:c="center",bottomGap:d=!1,visible:p=!0}=e;return p?t.jsxs(uf,{size:o,className:"title-wrapper",align:c,bottomGap:d,iconColor:n,children:[i,t.jsxs(pf,{size:o,width:r,children:[a&&t.jsx(hf,{children:"*"}),t.jsx(gf,{width:r,children:s})]})]}):null}const ff=(e,i,n)=>n?"#fff":e?w[Dt[i].color].dark3:w[Dt[i].color].light3,xf=u.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>ff(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[Dt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[Dt[e].color][i?"main":"light2"]};
    }
`,mf=()=>t.jsx(df,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function te({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:f=!1,align:g="left",visible:x=!0,loading:m=!1}){if(!x)return null;const{theme:b}=_t();return t.jsxs(xf,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:g,width:s,maxWidth:o,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:f,children:[t.jsx(W,{size:4,align:g,icon:n===null?null:n??Dt[e].icon({}),children:a??Dt[e].title}),r&&t.jsx(_,{onClick:r,icon:t.jsx(et,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),m&&t.jsx(mf,{})]})}u.div`
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
`;const bf=u.div`
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
`,vf=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(bf,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),ve=u.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,yf="/assets/sad-emoji-0c60bf90.gif",ne=u.span`
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
`,_f=u.div`
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
`;function ue({text:e,image:i,size:n,children:s}){return t.jsxs(_f,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||yf,alt:"груфтим("}):i}),t.jsx(ne,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const wf="/assets/loading-c8041cd3.gif",jf=u.img`
    width: 40px;
`;function qe(e){return t.jsx(jf,{...e,src:wf,alt:"loading",className:"loading-circle"})}const kf="/assets/logo-4d9aa449.png",Sf="/assets/mospolytech-logo-white-b1e4f630.png",Tf=u.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function kn({width:e,className:i,short:n=!1}){return t.jsx(Tf,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Sf:kf,alt:"Logo"})})}const Ef=u.img``;function $s({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(J,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Ef,{src:i,alt:o,height:n,width:s})}const $f=u.div`
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
`;function fr({size:e,color:i}){return t.jsx($f,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Pf=u.div`
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
`;function Cf(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs(Pf,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(W,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const Of=u.button`
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
`,ft=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:p,isDone:h=!1,isActive:f=!0,isLoading:g=!1,completed:x=!1,repeatable:m=!0,alerts:b=!0})=>{l.useEffect(()=>{x&&b&&(U.evokePopUpMessage({message:c,type:"success"}),m&&setTimeout(()=>{o(!1)},2e3))},[x,o]);const v=()=>{if(f&&!h&&!g)return i();b&&U.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Of,{isLoading:g,background:a,className:"submit-button",completed:x,isActive:f&&!h&&!x,onClick:v,isDone:h,width:n,height:s,repeatable:m,tabIndex:f&&!h?0:-1,pulsing:p&&!h,children:t.jsx("div",{className:"inner-button",children:x?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Mp,{})," ",r]}):g?t.jsx(qe,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},on={small:"32px",middle:"36px",big:"44px"},Ue=e=>({size:i})=>e[i],Af=(e,i)=>(i==null?void 0:i.length)===0?null:e.find(n=>n.title===i)??null,be=[{id:"0",title:"ул. Большая Семёновская, 38"},{id:"1",title:"ул. Прянишникова, 2А"},{id:"2",title:"ул. Автозаводская, 16"},{id:"3",title:"ул. Павла Корчагина, 22"},{id:"4",title:"ул. Михалковская, 7"},{id:"5",title:"ул. Садовая-Спасская, 6"},{id:"6",title:"ул. Малая Семеновская, 12"},{id:"7",title:"ул. Лефортовский вал, 26"},{id:"8",title:"ул. 1-я Дубровская, 16а"},{id:"9",title:"ул. 7-я Парковая, 9/26"},{id:"10",title:"ул. 800-летия Москвы, 28 корп. 1"},{id:"11",title:"ул. Михалковская, 7, корп. 3"},{id:"12",title:"ул. Бориса Галушкина, 9"},{id:"13",title:"ул. Павла Корчагина, 20А, корп. 3"},{id:"14",title:"Рижский проезд, 15, корп. 1"},{id:"15",title:"Рижский проезд, 15, корп. 2"},{id:"16",title:"1-й Балтийский переулок, 6/21, корп. 3"}],d$=(e,i)=>({title:"Актуализируйте контактные данные",data:[{fieldName:"guid_staff",title:"Подразделение/должность",value:i.guid_staff,width:"100",required:!0,type:"text",visible:!1},{fieldName:"",title:`${i.subdivision} (${i.post})`,value:`${i.subdivision} (${i.post})`,width:"100",required:!0,type:"text-header",visible:!0},{fieldName:"site",title:"Адрес рабочего места",type:"select",value:Af(be,e.site),items:be,width:"100",editable:!0,required:!0},{fieldName:"aud_number",title:"Номер кабинета",type:"cabinet",mask:!0,value:e.aud_number,editable:!0,required:!0},{fieldName:"email_staff",title:"Корпоративная электронная почта",type:"email",value:e.email_staff,required:!0},{title:"Показывать рабочий email внутри Личного кабинета",fieldName:"show_email_inner",type:"checkbox",value:e.show_email_inner??!0},{title:"Показывать рабочий email на сайте",fieldName:"show_email_outer",type:"checkbox",value:e.show_email_outer??!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Показывать служебный мобильный телефон внутри Личного кабинета",fieldName:"show_tel_mob_staff_inner",type:"checkbox",value:e.show_tel_mob_staff_inner??!0},{title:"Показывать служебный мобильный телефон на сайте",fieldName:"show_tel_mob_staff_outer",type:"checkbox",value:e.show_tel_mob_staff_outer??!0},{title:"Внутренний телефон",type:"innerPhone",value:e==null?void 0:e.tel_staff,mask:!0,fieldName:"tel_staff",minValueLength:4},{title:"Показывать внутренний телефон внутри Личного кабинета",fieldName:"show_tel_staff_inner",type:"checkbox",value:e.show_tel_staff_inner??!0},{title:"Показывать внутренний телефон на сайте",fieldName:"show_tel_staff_outer",type:"checkbox",value:e.show_tel_staff_outer??!0}]}),Df={БС:"БС",ПР:"ПР",АВ:"АВ",ПК:"ПК",МИХ:"МИХ",СС:"СС",РП:"РП",БАЛТ:"БАЛТ",Д:"Д",ПАРК:"ПАРК",ВЛМ:"ВЛМ",БГ:"БГ",МС:"МС","":""},Nf=e=>{const i=()=>e===be[0].title,n=()=>e===be[1].title,s=()=>e===be[2].title,o=()=>e===be[3].title||e===be[13].title,a=()=>e===be[4].title,r=()=>e===be[5].title,c=()=>e===be[16].title,d=()=>e===be[14].title||e===be[15].title,p=()=>e===be[8].title,h=()=>e===be[9].title,f=()=>e===be[10].title,g=()=>e===be[12].title,x=()=>e===be[6].title;return i()?"БС":n()?"ПР":s()?"АВ":o()?"ПК":a()?"МИХ":r()?"СС":d()?"РП":c()?"БАЛТ":p()?"Д":h()?"ПАРК":f()?"ВЛМ":g()?"БГ":x()?"МС":""},p$=e=>{const i=Nf(e);return i?i+" ":""},If=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Rf=e=>{const i=e.target.selectionStart;let n=e.target.value.replace(/\D/g,""),s="";return n.length?e.target.value.length!==i?/\D/g.test(e.nativeEvent.data??"")?n:e.target.value:(n[0]==="9"&&(n="7"+n),s="+7"+" ",n.length&&(s+="("+n.substring(1,4)),n.length>=5&&(s+=") "+n.substring(4,7)),n.length>=8&&(s+="-"+n.substring(7,9)),n.length>=10&&(s+="-"+n.substring(9,11)),s):""},ho=(e,i,n,s,o,a=4)=>{var r,c;return i+=n.substring(0,a),!s||!((c=(r=s[0])==null?void 0:r.toLowerCase())!=null&&c.match(/[а-я]/))?i:(i+=s[0].toLowerCase(),i.substring(0,o.length+a+2))},Lf=(e,i)=>{var a,r,c,d;const n=e.replace(/\D/g,""),s=e.match(new RegExp("(?<=\\d)[а-яА-Я]"));let o=i+" ";switch(i){case"БС":const p=e.substring(3).match(/^[а-яА-Я]{1,2}/);return!p||!((r=(a=p[0])==null?void 0:a.toUpperCase())!=null&&r.match(/^(А|Б|В|НД?D?)$/))?o:(o+=p[0].toUpperCase(),(p[0].length===1?e[3]&&!e[5]&&e[4]===" ":e[4]&&!e[6]&&e[5]===" ")?o+" ":(n.length>0&&(o+=" "),o+=n.substring(0,3),!s||!((d=(c=s[0])==null?void 0:c.toLowerCase())!=null&&d.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,10))));case"ПК":return ho(e,o,n,s,i,3);case"АВ":case"ПР":case"СС":case"МИХ":return ho(e,o,n,s,i);case"":return e;default:return o+e.substring(i.length+1)}},zf=e=>e.replace(/\D/g,"").substring(0,4),Vn={groupMask:If,phoneMask:Rf,cabinetMask:Lf,innerPhoneMask:zf},Mf=(e,i,n,s,o,a,r,c)=>{const[d,p]=l.useState(n),[h,f]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const g=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(c)if(r)i(r(v.target.value,e));else if(n==="tel")i(Vn.phoneMask(v));else if(n==="email")i(g(v.target.value));else if(n==="cabinet"){const D=Object.keys(Df).find(j=>v.target.value.startsWith(j));i(Vn.cabinetMask(v.target.value,D||""))}else i(n==="innerPhone"?Vn.innerPhoneMask(v.target.value):v.target.value);else i(v.target.value);if(n==="date"&&(o||a)){const S=new Date(v.target.value);let D=!1;if(o){const j=new Date(o);D=S<j}if(a&&!D){const j=new Date(a);D=S>j}f(D)}}}},Ff=u.div`
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
        height: ${Ue(on)};
        max-height: ${Ue(on)};
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
`,xt=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:p,customMask:h,placeholder:f="Введите сюда",type:g="text",danger:x,alertMessage:m,loading:b=!1,isActive:v=!0,inputAppearance:S=!0,mask:D=!1,autocomplete:j=!1,minValue:T=void 0,maxValue:N=void 0,minLength:z=void 0,maxLength:I=void 0,hideCross:se=!1,stepSize:H=.1,size:Y="middle"}=i,{inputType:ce,buttonOnClick:Ce,danger:Ee,handleOnChange:Ke,phoneMaskKeyDown:$e}=Mf(s,o,g,x,T,N,h,D),me=s&&g==="date"?Fp(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(Ff,{leftIcon:!!a,isActive:v,inputAppearance:S,width:d,danger:Ee,minWidth:p,size:Y,children:[t.jsx(W,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(te,{type:"alert",visible:!!m,icon:t.jsx(Bp,{}),title:m??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:f,min:T,max:N,minLength:z,maxLength:I,step:H??void 0,type:ce,placeholder:f,value:me,autoComplete:j?"on":"off",onKeyDown:Ht=>g==="tel"&&$e(Ht),onChange:Ke,required:c,readOnly:!v,ref:n}),g!=="password"?!!(s!=null&&s.length)&&S&&(b?t.jsx(qe,{}):!se&&t.jsx(_,{icon:t.jsx(et,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(_,{icon:ce==="password"?t.jsx(Hp,{}):t.jsx(vs,{}),tabIndex:-1,onClick:Ce})]})}),Bf=u.div`
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
`,Hf="/assets/thinking-emoji-f3c10f79.gif",Uf=["loading"],Wf=u.div.withConfig({shouldForwardProp:e=>!Uf.includes(e)})`
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
`,Fe=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Wf,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ue,{text:n,image:a&&Hf,children:!a&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(xn,{})})})}):t.jsx(qe,{})}),t.jsx("div",{className:"content",children:e})]})),Vf=u.a`
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
`,Gf=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:p,padding:h,isActive:f=!0,isChosen:g=!1})=>t.jsxs(Vf,{text:!!i,onClick:x=>f&&n&&n(x),isChosen:g,width:s,background:o,textColor:a,href:c,align:r,isActive:f,height:d,padding:h,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Di=l.memo(Gf),Sn=u.div`
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
`,qf=u.a`
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
`,Yf=({title:e,link:i,type:n})=>t.jsxs(qf,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(A,{}):t.jsx(Up,{})}),t.jsx("div",{className:"title",children:e})]}),Kf=u.label`
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
`,Jf=u.div`
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
`,We=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(Kf,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(Jf,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(gn,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},Nt=u.span`
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
`,ss=e=>e.split(" ").map(i=>i[0]),Ne=(e,i)=>{const n=ss(e),s=w[Ph[n[0]]];return s==null?void 0:s[i??"main"]},Xf=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Qf={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Zf=()=>fe(ex),xr=k(),mr=k(),br=k(),ex=V(Qf).on(xr,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Xf(n,220,s),open:!0,content:i,type:o})).on(mr,e=>({...e,open:!1})).on(br,(e,{position:i})=>({...e,position:i})),Re={open:xr,close:mr,changePosition:br},tx={useContextMenu:Zf},ix=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},Gn=new Set,vr=(e,i)=>{l.useEffect(()=>{const n=o=>{Gn.add(o.which),!e.slice(0,e.length-1).find(r=>!Gn.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{Gn.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},st=u.div`
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
`,ke=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},yr=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"Х","]":"ъ","}":"Ъ","'":"э",";":"ж",",":"б",".":"ю","<":"Б",">":"Ю",":":"Ж",'"':"Э"};let n="";for(let s=0;s<e.length;s++){const o=ke(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},_r=e=>/[A-Za-z]/.test(e),nx=u.span`
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
`,wr=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!_r(e))return null;const s=yr(e),o=()=>i(s);return t.jsxs(ne,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(nx,{tabIndex:10,children:s})]})};function ni(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function mt(e,i,n=0){return e>i?n:e<n?i:e}const sx=u.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,ox=u(st)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,ax=u.div`
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
`,Ni=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:p,onHintClick:h,validationCheck:f=!1,size:g="middle"})=>{const[x,m]=l.useState(0),[b,v]=l.useState(!1),S=l.useRef(null),D=l.useRef(null),j=l.useRef(null);ni(S,()=>v(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var I;return(I=j.current)==null?void 0:I.focus()},50)},[c]);const T=I=>{var se,H;(((a==null?void 0:a.length)??0)>0||o)&&v(!0),I.key==="ArrowDown"?((se=D.current)==null||se.scrollIntoView({block:"start",behavior:"smooth"}),typeof x=="number"&&m(mt(x+1,((a==null?void 0:a.length)??1)-1,0))):I.key==="ArrowUp"?((H=D.current)==null||H.scrollIntoView({block:"end",behavior:"smooth"}),typeof x=="number"&&m(mt(x-1,((a==null?void 0:a.length)??1)-1,0))):I.key==="Enter"?(a!=null&&a[x??0].title&&d(a==null?void 0:a[x??0].title),v(!1),h==null||h(a==null?void 0:a[x??0])):m(0)},N=I=>()=>{m(I),d((a==null?void 0:a[I].title)??""),v(!1),h==null||h(a==null?void 0:a[I])},z=()=>{a!=null&&a.length&&v(!0)};return t.jsxs(sx,{width:i,onKeyDown:T,onMouseDown:z,ref:S,children:[t.jsx(xt,{size:g,value:e,placeholder:n,leftIcon:r??t.jsx(Jt,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:p,ref:j}),t.jsx(wr,{setValue:d,value:e,visible:f}),b&&t.jsx(ox,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:T,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:I,icon:se},H)=>{const Y=x===H;return t.jsxs(ax,{onClick:N(H),ref:Y?D:null,selected:Y,children:[se&&t.jsx("div",{className:"icon",children:se}),t.jsx("span",{children:I})]},I+H)})})]})},Tn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},go={small:"30px",middle:"44px",big:"68px"},jr={small:"8px",middle:"10px",big:"16px"},rx={small:"0.8rem",middle:"0.9rem",big:"1rem"},lx={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},cx=u.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Ue(go)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Ue(jr)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Ue(go)};
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
`,dx=u.div`
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
        font-size: ${Ue(rx)};
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
            font-size: ${Ue(lx)};
        }
    }
`,px=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(dx,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),ux=l.memo(px),hx=u.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Ue(jr)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,gx=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(hx,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},fx=l.memo(gx),xx=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:p}=Tn();return l.useEffect(()=>{var f;const h=((f=d==null?void 0:d.current)==null?void 0:f.offsetWidth)??p;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[p,d.current]),t.jsx(cx,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(fx,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,f)=>t.jsx(ux,{size:a,id:f,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},f))]})})},Ps=l.memo(xx),mx=300,En=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=mx})=>{const[c,d]=l.useState(e??""),[p,h]=l.useState(""),[f,g]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){g(!0);const x=setTimeout(async()=>{await i(c),h(c),g(!1)},r);return()=>clearTimeout(x)}else p.length!==0&&(n==null||n(c),d(""),g(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){g(!0);const x=setTimeout(async()=>{await i(c),g(!1)},o??r);return()=>clearTimeout(x)}},[...a]),[c,d,f]},bx=u.div`
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
`,wt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(bx,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(Nt,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},kr=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:p=!1})=>{const h=v=>{n(i(v,e))},f=()=>{n(null)},[g,x,m]=En({onDebounce:h,onClear:f}),b=v=>{x(v),o&&o(v)};return t.jsx(Ni,{value:g??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:p,loading:c?m:!1,hints:a,width:r})},vx=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Bf,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Sr=u.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,yx=u(Sr)`
    background: var(--almostTransparentOpposite);
`,_x=u(Sr)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Tr=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(Te,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(yx,{},a)),t.jsx(_x,{color:n,current:i})]}),Er=e=>e.split("/")[1],wx=e=>e*1024*1024,jx=(e,i)=>(i??Ch).indexOf(e.type)!==-1,fo=(e,i,n,s,o=Oh)=>{if(n&&i.length+e.length>n)return U.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return jx(e[a],s)?e[a].size>wx(o)?(U.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),U.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>Er(r))}`,type:"failure",time:5e3}),i)},kx=u.label`
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
`,Ie=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Sx=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),p=m=>{const b=m.target.files;b!=null&&b.length&&n(fo(b,e,i,o,a))},h=m=>{m.preventDefault()},f=m=>{m.preventDefault(),d(!1);const b=m.dataTransfer.files;b.length&&n(fo(b,e,i,o,a))},g=m=>{m.preventDefault(),d(!0)},x=m=>{m.preventDefault(),d(!1)};return t.jsxs(kx,{isActive:s,showPulse:c,onDragOver:m=>s&&h(m),onDragEnter:m=>s&&g(m),onDragLeave:m=>s&&x(m),onDrop:m=>s&&f(m),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(Wn,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(Wn,{className:"icon-1"}),t.jsx(Wn,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(ne,{align:"center",children:t.jsx(Ie,{words:[`Форматы: ${o?o.map(m=>Er(m)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Tx=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Ex=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),$x=u.div`
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
`,Px=({file:e,files:i,setFiles:n})=>{const{open:s}=ee(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx($s,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>dt.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Ex(r,e.name,i))});return t.jsxs($x,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Wp,{}):t.jsx(Vp,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ne,{fontSize:"0.7em",children:Tx(e.size)})]})]}),t.jsx(_,{icon:t.jsx(et,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Cx=({files:e,setFiles:i})=>t.jsx(Te,{title:"Список файлов",visible:!!e.length,onDelete:()=>dt.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Px,{file:n,files:e,setFiles:i},n.name))}),$r=e=>t.jsxs(Te,{gap:12,children:[t.jsx(Sx,{...e}),t.jsx(Cx,{files:e.files,setFiles:e.setFiles})]}),Ox=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Ax=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Ox,{children:[t.jsx(We,{...e}),n&&t.jsx($r,{...i})]}),Dx=u.div`
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
`,Pr=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),p=new Date(d);p.setDate(d.getDate()+r),n[1]=oe(p,"extraWeird")}return t.jsxs(Dx,{children:[t.jsx(W,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(te,{title:"Внимание",type:"alert",icon:t.jsx(ki,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(xt,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(xt,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Nx=(e,i)=>{var b,v,S;const{width:n}=Tn(),s=l.useRef(null),[o,a]=l.useState(!1),[r,c]=l.useState(!1),[d,p]=l.useState(0),[h,f]=l.useState(0),g=((b=s.current)==null?void 0:b.clientWidth)??1,x=Math.ceil((((v=s.current)==null?void 0:v.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{s.current&&(s.current.scrollLeft=d,s.current.clientWidth<s.current.scrollWidth?(a(!0),c(!0)):(c(!1),a(!1)))},[d,(S=s.current)==null?void 0:S.clientWidth,n,i]),{listRef:s,leftArrow:o,rightArrow:r,setScrollLeft:p,pageOffset:g,amountOfPages:x,currentPage:h,setCurrentPage:f,handleScroll:D=>{f(Math.ceil(D.currentTarget.scrollLeft/(g+(e??0))))}}},Ix=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:p,onWatchMore:h,onDelete:f,showPages:g,innerPadding:x,minWidth:m,wrapOnMobile:b,position:v,direction:S="vertical",verticalAlign:D="top",horizontalAlign:j="left",scroll:T=!0,visible:N=!0,...z}=e;if(!N)return null;const{listRef:I,leftArrow:se,rightArrow:H,handleScroll:Y,setScrollLeft:ce,pageOffset:Ce,amountOfPages:Ee,currentPage:Ke}=Nx(s,n);return t.jsxs(af,{padding:r,position:v,width:o,minWidth:m,height:a,children:[t.jsxs(W,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(_,{icon:t.jsx(At,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),h&&t.jsx(_,{width:"50px",height:"15px",background:w.blue.transparent3,textColor:w.blue.light1,onClick:h,text:"Ещё"}),f&&t.jsx(_,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:f,text:"Удалить"})]}),t.jsx(jn,{verticalAlign:D,horizontalAlign:j,direction:S,ref:I,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:x,scroll:T,wrapOnMobile:b,onScroll:Y,...z,children:n}),(H||se)&&t.jsxs("div",{className:"bottom-wrapper",children:[se&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Ci,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{ce($e=>{var me;return mt($e-Ce-(s??0),((me=I.current)==null?void 0:me.scrollWidth)??0)})}}),g&&t.jsx(Tr,{direction:"horizontal",current:Ke,amount:Ee}),H&&t.jsx(_,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(tt,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{ce($e=>{var me;return mt($e+Ce+(s??0),((me=I.current)==null?void 0:me.scrollWidth)??0)})}})]})]})},Te=le.memo(Ix),Rx=()=>t.jsx("div",{className:"left",children:t.jsxs(Te,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(kn,{width:"50px",short:!0,className:"logo first"}),t.jsxs(Te,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:Vs,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Si,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:cc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(Gp,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:lc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ki,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:dc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(ki,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(ve,{}),t.jsx(Z,{to:rc,tabIndex:-1,children:t.jsx(_,{padding:"0",icon:t.jsx(qp,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Di,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(mn,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),$n=()=>{const{search:e}=ei();return le.useMemo(()=>new URLSearchParams(e),[e])},Lx=()=>{const e=$n(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),p=!!a&&!!s,h=Lt.login,f=new Date().getMonth()>=6&&new Date().getMonth()<=8,g=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},x=b=>{Lt.changeSavePassword({savePassword:b})},m=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:p,password:a,capsLock:c,login:s,showAbiturientMessage:f,handleSavePassword:x,handleKeyPress:g,handleLogin:m,setPassword:r,setLogin:o}},zx=()=>{const{loading:e,error:i,data:n}=he.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:p,handleLogin:h,setPassword:f,setLogin:g}=Lx();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(Te,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(kn,{width:"50px",short:!0,className:"logo second"}),t.jsx($,{jc:"space-between",children:t.jsx(W,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(te,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(Te,{gap:16,scroll:!1,children:[t.jsx(W,{size:4,align:"left",children:"Вход"}),t.jsx(ne,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(te,{type:"failure",visible:!!i,children:i}),t.jsx(te,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(xt,{value:r,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(xt,{value:o,setValue:f,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(We,{text:"Оставаться в системе",checked:n.savePassword,setChecked:p})]}),t.jsx(ft,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Mx=u(st)`
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
`,Fx=()=>{const{data:{isAuthenticated:e}}=he.useUser();return t.jsxs(Mx,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Rx,{}),t.jsx(zx,{})]})},Bx=u.div`
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
`,Hx=()=>t.jsx(Bx,{children:t.jsx(Fx,{})}),we=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ue,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(_,{text:n,icon:t.jsx(mn,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),Ux="modulepreload",Wx=function(e){return"/"+e},xo={},y=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Wx(a),a in xo)return;xo[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const f=o[h];if(f.href===a&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Ux,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((h,f)=>{p.addEventListener("load",h),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Vx=l.lazy(()=>y(()=>import("./index-46da34d6.js"),["assets/index-46da34d6.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),Gx=l.lazy(()=>y(()=>import("./index-1e6759ae.js"),["assets/index-1e6759ae.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-d3129114.js"])),mo=l.lazy(()=>y(()=>import("./index-34fb2a39.js"),["assets/index-34fb2a39.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js"])),qx=l.lazy(()=>y(()=>import("./index-cda09856.js"),["assets/index-cda09856.js","assets/vendor-f4aa581a.js","assets/get-default-subdivision-17957fb0.js"])),Yx=l.lazy(()=>y(()=>import("./index-cb08e08f.js"),["assets/index-cb08e08f.js","assets/vendor-f4aa581a.js","assets/index-0a0c5d07.js","assets/form-ff712a6f.js","assets/send-form-d70f6aba.js"])),Kx=l.lazy(()=>y(()=>import("./form-ff712a6f.js"),["assets/form-ff712a6f.js","assets/vendor-f4aa581a.js","assets/send-form-d70f6aba.js"])),Cr=l.lazy(()=>y(()=>import("./index-0ff4263b.js"),["assets/index-0ff4263b.js","assets/vendor-f4aa581a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>Sv),void 0));const Jx=l.lazy(()=>y(()=>import("./index-ff6f6c54.js"),["assets/index-ff6f6c54.js","assets/vendor-f4aa581a.js","assets/index-30a64f7b.js"])),Xx=l.lazy(()=>y(()=>import("./index-68223d76.js"),["assets/index-68223d76.js","assets/vendor-f4aa581a.js","assets/index-8aa12362.js"])),Qx=l.lazy(()=>y(()=>import("./index-09993467.js"),["assets/index-09993467.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Zx=l.lazy(()=>y(()=>import("./index-447b2773.js"),["assets/index-447b2773.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js"])),em=l.lazy(()=>y(()=>import("./index-1af08363.js"),["assets/index-1af08363.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-d3129114.js"])),tm=l.lazy(()=>y(()=>import("./index-fc8ca2a4.js"),["assets/index-fc8ca2a4.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d3129114.js"])),im=l.lazy(()=>y(()=>import("./index-556e2abd.js"),["assets/index-556e2abd.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-d3129114.js"])),nm=l.lazy(()=>y(()=>import("./index-77a38e9f.js"),["assets/index-77a38e9f.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-d3129114.js"])),sm=l.lazy(()=>y(()=>import("./index-97b73dab.js"),["assets/index-97b73dab.js","assets/vendor-f4aa581a.js","assets/ui-d4b1ee35.js"])),om=l.lazy(()=>y(()=>import("./index-639756ba.js"),["assets/index-639756ba.js","assets/vendor-f4aa581a.js","assets/ui-d4b1ee35.js"])),am=l.lazy(()=>y(()=>import("./index-2838aafc.js"),["assets/index-2838aafc.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d3129114.js"])),rm=l.lazy(()=>y(()=>import("./index-bbcdbb2d.js"),["assets/index-bbcdbb2d.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-d3129114.js"])),lm=l.lazy(()=>y(()=>import("./index-24be1f4c.js"),["assets/index-24be1f4c.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-d3129114.js"])),cm=l.lazy(()=>y(()=>import("./index-579d3cc4.js"),["assets/index-579d3cc4.js","assets/vendor-f4aa581a.js"])),dm=l.lazy(()=>y(()=>import("./index-99645bc0.js"),["assets/index-99645bc0.js","assets/vendor-f4aa581a.js","assets/get-default-subdivision-17957fb0.js"])),pm=l.lazy(()=>y(()=>import("./index-6e03366e.js"),["assets/index-6e03366e.js","assets/vendor-f4aa581a.js","assets/get-default-subdivision-17957fb0.js"])),um=l.lazy(()=>y(()=>import("./index-3f0bb375.js"),["assets/index-3f0bb375.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d3129114.js"])),hm=l.lazy(()=>y(()=>import("./index-62dc468e.js"),["assets/index-62dc468e.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-d3129114.js"])),gm=l.lazy(()=>y(()=>import("./index-ca1e6019.js"),["assets/index-ca1e6019.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-d3129114.js"])),fm=l.lazy(()=>y(()=>import("./index-fcdee1f5.js"),["assets/index-fcdee1f5.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-d3129114.js"])),xm=l.lazy(()=>y(()=>import("./index-8bff762e.js"),["assets/index-8bff762e.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),mm=l.lazy(()=>y(()=>import("./index-be902508.js"),["assets/index-be902508.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d3129114.js"])),bm=l.lazy(()=>y(()=>import("./index-c4b31f1e.js"),["assets/index-c4b31f1e.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-d3129114.js"])),vm=l.lazy(()=>y(()=>import("./index-1266051a.js"),["assets/index-1266051a.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-d3129114.js"])),ym=l.lazy(()=>y(()=>import("./index-4ff0f9f3.js"),["assets/index-4ff0f9f3.js","assets/vendor-f4aa581a.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-d3129114.js"])),_m=l.lazy(()=>y(()=>import("./index-51958684.js"),["assets/index-51958684.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),wm=l.lazy(()=>y(()=>import("./index-ce5aad3b.js"),["assets/index-ce5aad3b.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),jm=l.lazy(()=>y(()=>import("./index-cbd8809a.js"),["assets/index-cbd8809a.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),km=l.lazy(()=>y(()=>import("./index-b3db45aa.js"),["assets/index-b3db45aa.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Sm=l.lazy(()=>y(()=>import("./index-f95f97f3.js"),["assets/index-f95f97f3.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Tm=l.lazy(()=>y(()=>import("./index-cd9548f9.js"),["assets/index-cd9548f9.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Em=l.lazy(()=>y(()=>import("./index-7e5f316a.js"),["assets/index-7e5f316a.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),$m=l.lazy(()=>y(()=>import("./index-349f038d.js"),["assets/index-349f038d.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Pm=l.lazy(()=>y(()=>import("./index-020507ee.js"),["assets/index-020507ee.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Cm=l.lazy(()=>y(()=>import("./index-e90e7838.js"),["assets/index-e90e7838.js","assets/vendor-f4aa581a.js","assets/index-d3129114.js","assets/index-adef41a1.js","assets/send-form-d70f6aba.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),Om=l.lazy(()=>y(()=>import("./index-d0e70f9d.js"),["assets/index-d0e70f9d.js","assets/vendor-f4aa581a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>bl),void 0));const Cs=l.lazy(()=>y(()=>import("./index-4e1e933e.js"),["assets/index-4e1e933e.js","assets/vendor-f4aa581a.js"])),Am=l.lazy(()=>y(()=>import("./index-720ea07a.js"),["assets/index-720ea07a.js","assets/vendor-f4aa581a.js"])),Dm=l.lazy(()=>y(()=>import("./index-4437e3d9.js"),["assets/index-4437e3d9.js","assets/vendor-f4aa581a.js"])),Nm=l.lazy(()=>y(()=>import("./index-9a6748fd.js"),["assets/index-9a6748fd.js","assets/vendor-f4aa581a.js"])),Im=l.lazy(()=>y(()=>import("./index-013a5320.js"),["assets/index-013a5320.js","assets/vendor-f4aa581a.js"])),Rm=l.lazy(()=>y(()=>import("./index-f0fe6255.js"),["assets/index-f0fe6255.js","assets/vendor-f4aa581a.js"])),Lm=l.lazy(()=>y(()=>import("./index-217e79ba.js"),["assets/index-217e79ba.js","assets/vendor-f4aa581a.js","assets/get-default-subdivision-17957fb0.js"])),zm=l.lazy(()=>y(()=>import("./index-0910f09e.js"),["assets/index-0910f09e.js","assets/vendor-f4aa581a.js","assets/get-default-subdivision-17957fb0.js"])),Mm=l.lazy(()=>y(()=>import("./index-d75a3fa9.js"),["assets/index-d75a3fa9.js","assets/vendor-f4aa581a.js"])),Fm=l.lazy(()=>y(()=>import("./index-db8742e3.js"),["assets/index-db8742e3.js","assets/vendor-f4aa581a.js","assets/send-hr-form-work-transfer-6f76e9f9.js"])),Bm=l.lazy(()=>y(()=>import("./index-64149949.js"),["assets/index-64149949.js","assets/vendor-f4aa581a.js","assets/send-hr-form-work-transfer-6f76e9f9.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>rb),void 0));l.lazy(()=>y(()=>import("./index-637d1129.js"),["assets/index-637d1129.js","assets/vendor-f4aa581a.js","assets/BoldText-ce68ed12.js","assets/help-links-39a46e98.js"]));const Hm=l.lazy(()=>y(()=>import("./index-90967b3b.js"),["assets/index-90967b3b.js","assets/vendor-f4aa581a.js"])),Or=l.lazy(()=>y(()=>import("./index-44afc399.js"),["assets/index-44afc399.js","assets/vendor-f4aa581a.js"])),Um=l.lazy(()=>y(()=>Promise.resolve().then(()=>bl),void 0));l.lazy(()=>y(()=>Promise.resolve().then(()=>Ly),void 0));const Wm=l.lazy(()=>y(()=>import("./index-42fd2c75.js"),["assets/index-42fd2c75.js","assets/vendor-f4aa581a.js"]));l.lazy(()=>y(()=>import("./index-dc5edf84.js"),["assets/index-dc5edf84.js","assets/vendor-f4aa581a.js","assets/index.esm-8497e7a3.js"]));const Vm=l.lazy(()=>y(()=>import("./index-2e394d08.js"),["assets/index-2e394d08.js","assets/vendor-f4aa581a.js"])),Ar=l.lazy(()=>y(()=>import("./index-f308ac1e.js"),["assets/index-f308ac1e.js","assets/vendor-f4aa581a.js","assets/help-links-39a46e98.js"])),Gm=l.lazy(()=>y(()=>import("./index-20badc89.js"),["assets/index-20badc89.js","assets/vendor-f4aa581a.js"])),qm=l.lazy(()=>y(()=>import("./index-ab5c5ea0.js"),["assets/index-ab5c5ea0.js","assets/vendor-f4aa581a.js","assets/alert-item-95cdaf4d.js","assets/is-valid-url-08a91344.js"])),Ym=l.lazy(()=>y(()=>import("./index-13d4dc4a.js"),["assets/index-13d4dc4a.js","assets/vendor-f4aa581a.js","assets/index-58af5010.js","assets/alert-item-95cdaf4d.js","assets/is-valid-url-08a91344.js"])),Km=l.lazy(()=>y(()=>import("./index-dc55125f.js"),["assets/index-dc55125f.js","assets/vendor-f4aa581a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>dy),void 0));const Jm=l.lazy(()=>y(()=>import("./index-d60022cc.js"),["assets/index-d60022cc.js","assets/vendor-f4aa581a.js","assets/index-0a0c5d07.js"])),Dr=l.lazy(()=>y(()=>import("./index-da3f0d5b.js"),["assets/index-da3f0d5b.js","assets/vendor-f4aa581a.js","assets/index-58af5010.js"])),Xm=l.lazy(()=>y(()=>import("./index-cec9b15b.js"),["assets/index-cec9b15b.js","assets/vendor-f4aa581a.js","assets/index-74574da5.js"])),Qm=l.lazy(()=>y(()=>import("./index-6b33c35f.js"),["assets/index-6b33c35f.js","assets/vendor-f4aa581a.js","assets/index-74574da5.js"])),Zm=l.lazy(()=>y(()=>import("./index-016df902.js"),["assets/index-016df902.js","assets/vendor-f4aa581a.js","assets/index-74574da5.js"])),e0=l.lazy(()=>y(()=>import("./index-e716cbb6.js"),["assets/index-e716cbb6.js","assets/vendor-f4aa581a.js"])),t0=l.lazy(()=>y(()=>import("./index-8b8c5588.js"),["assets/index-8b8c5588.js","assets/vendor-f4aa581a.js","assets/index.esm-8497e7a3.js","assets/index-0a0c5d07.js"])),i0=l.lazy(()=>y(()=>import("./index-6a4f455c.js"),["assets/index-6a4f455c.js","assets/vendor-f4aa581a.js"])),n0=l.lazy(()=>y(()=>import("./index-8a26d7fb.js"),["assets/index-8a26d7fb.js","assets/vendor-f4aa581a.js"])),s0=l.lazy(()=>y(()=>import("./index-2520ad9e.js"),["assets/index-2520ad9e.js","assets/vendor-f4aa581a.js"])),o0=l.lazy(()=>y(()=>import("./index-8ff474b5.js"),["assets/index-8ff474b5.js","assets/vendor-f4aa581a.js","assets/index-30a64f7b.js"])),a0=l.lazy(()=>y(()=>import("./index-2a222757.js"),["assets/index-2a222757.js","assets/vendor-f4aa581a.js"])),r0=l.lazy(()=>y(()=>import("./index-5b786d0f.js"),["assets/index-5b786d0f.js","assets/vendor-f4aa581a.js","assets/help-links-39a46e98.js"])),l0=l.lazy(()=>y(()=>import("./index-0434e662.js"),["assets/index-0434e662.js","assets/vendor-f4aa581a.js","assets/help-links-39a46e98.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>hT),void 0));const c0=l.lazy(()=>y(()=>import("./index-637d1129.js"),["assets/index-637d1129.js","assets/vendor-f4aa581a.js","assets/BoldText-ce68ed12.js","assets/help-links-39a46e98.js"])),d0=l.lazy(()=>y(()=>import("./index-75421374.js"),["assets/index-75421374.js","assets/vendor-f4aa581a.js"])),p0=u.div`
    width: 100%;
`,u0=()=>t.jsxs(p0,{children:[t.jsx(J,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(J,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(J,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),Ye=e=>{const{children:i,skeleton:n=t.jsx(u0,{}),loading:s=!1,...o}=e;return t.jsx(st,{...o,className:"block",children:s?n:i})},h0=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},qn=u.div`
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
`,g0=u.div`
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
`,f0=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const c=Object.keys(e??{}),{removeAll:d,removeOne:p,setRemoveAll:h,setRemoveOne:f}=h0(c,r);return c.length?t.jsxs(g0,{removeAll:d||closed,padding:o,height:a,children:[!!i&&t.jsxs(qn,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(At,{}),"Добавить"]}),Object.values(e??{}).map(g=>{if(g!=null&&g.id)return t.jsxs(qn,{background:g.background,remove:p===g.id,children:[t.jsx("div",{className:"element-text",children:g.title}),t.jsx("div",{className:"remove",onClick:()=>{c.length===1?(h(!0),n==null||n()):(f(g.id),s(g.id))},children:t.jsx(et,{})})]},g.id)}),c.length&&!!n&&t.jsx(qn,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Qt=(e,i)=>{switch(i){case"date":return oe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},x0=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,m0=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[p,h]=l.useState(e),f=l.useCallback(x=>{var m,b;o(v=>(v&&v[x]&&delete v[x],{...v})),x===((m=i==null?void 0:i.column)==null?void 0:m.field)&&n(null),x===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),g=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(x=>{const m=Object.values(s)[0].column;return x={[(m==null?void 0:m.field)??""]:{id:(m==null?void 0:m.field)??"",title:"Фильтр: "+(m==null?void 0:m.title)}},{...x}});else{const x=Object.values(s).find(m=>{var b;return!c[((b=m.column)==null?void 0:b.field)??""]});x&&d(m=>{var S,D;const b=((S=x.column)==null?void 0:S.field)??"",v="Фильтр: "+((D=x.column)==null?void 0:D.title);return m&&(m[b]={id:b,title:v}),{...m}})}i&&d(x=>{var v;const m=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return x?x[m]={id:m,title:b}:x={[m]:{id:m,title:b}},{...x}}),a&&d(x=>{var v;const m=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return x?x[m]={id:m,title:b}:x={[m]:{id:m,title:b}},{...x}})},[i,s,a]),l.useEffect(()=>{var b;const x=i==null?void 0:i.column,m=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&m){const v=e==null?void 0:e.filter(S=>ke(Qt(S[m],x==null?void 0:x.type)).includes(ke(Qt(i.value,x==null?void 0:x.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const x=e==null?void 0:e.filter(m=>!Object.values(s).find(b=>{var v;return m[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));h(x)}else d(x=>({...x})),h(e)},[s]),l.useEffect(()=>{var m;const x=((m=a==null?void 0:a.column)==null?void 0:m.field)??"";a?h(b=>{const v=[...b??[]];return v==null||v.sort((S,D)=>D[x]<S[x]?a.value==="asc"?1:-1:D[x]>S[x]?a.value==="asc"?-1:1:0),v}):(d(b=>{const v=x0(b,"Сортировка");return b&&v&&delete b[v],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:f,onRemoveAll:g}},os=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),os(n.children,i)):n?n.children:e},b0=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),p=l.useRef(null),h=l.useRef(null),[f,g]=l.useState([]),[x,m]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{m(i)});const S=l.useCallback(()=>{d(T=>!T)},[d]),D=l.useCallback(T=>{if(T.children)f.push(T.id.toString()),m(os(i,[...f])??[]),g([...f]);else{if(r)if(o)if(o.find(N=>N.id===T.id)){const N=o.filter(z=>z.id!==T.id);N.length?n(N):n(null)}else n([...o,T]);else n([T]);else n(T);!r&&S(),v(f.join("/"))}s==null||s(T)},[n,f]),j=l.useCallback(()=>{f.pop(),g([...f]),f.length===0?m(i):m(os(i,f)??[])},[f,m]);return ni(p,()=>{c&&S()}),{handleOpen:S,refElement:p,isOpen:c,multiple:r,handleSelect:D,selectedRoute:b,currentItems:x,route:f,goBack:j,refItems:h,appearance:a}},v0=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${Ue(on)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,y0=u.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${Ue(on)};

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
`,_0=u.header`
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
`,w0=u.ul`
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
`,bo=u.li`
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
`,j0=["isOpen"],k0=u(Yp).withConfig({shouldForwardProp:e=>!j0.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,S0=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:p,refItems:h,appearance:f}=b0(e),{isActive:g,width:x,title:m,required:b,selected:v,placeholder:S,size:D="middle"}=e;return t.jsxs(y0,{onClick:i,appearance:f,ref:n,isOpen:s,isActive:g??!0,width:x,size:D,children:[t.jsx(W,{size:4,align:"left",bottomGap:"5px",visible:!!m,required:b,children:m}),t.jsxs(v0,{multiple:o,appearance:f,size:D,children:[t.jsx(_0,{appearance:f,children:o?v?v.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:S??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:S??"Не выбрано"})})}),t.jsx(k0,{isOpen:s})]}),t.jsxs(w0,{width:x,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:m,children:[!!d.length&&t.jsx(bo,{isSelected:!1,onClick:j=>{j.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(Ci,{}),"Назад"]})},-1),c.map(({id:j,icon:T,title:N,children:z,data:I})=>t.jsxs(bo,{onClick:se=>{se.stopPropagation(),a({id:j,icon:T,title:N,children:z,data:I})},isSelected:!o&&!!v&&v.title.includes(N),leadingToSelected:r.includes(j.toString()),children:[!!T&&t.jsx("span",{className:"icon",children:T}),t.jsx("span",{className:"select-item-title",children:N}),!!z&&t.jsx("span",{className:"right-icon",children:t.jsx(tt,{})}),o&&!!v&&!!v.find(se=>se.title.includes(N))&&t.jsx("span",{className:"right-icon",children:t.jsx(gn,{})})]},N))]})]})},Nr=l.memo(S0),T0=e=>{switch(e){case"desc":return U.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return U.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return U.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},E0=u.div`
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
`,Ir=u.div`
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
`,$0=u.div`
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
`,P0=u.div`
    display: flex;
    align-items: center;
`,C0=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(p=>{const h=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return T0(h),h?{column:d,value:h}:null})};return t.jsx($0,{children:e.map(d=>{var p,h,f,g;return t.jsxs(Ir,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((p=d.priority)==null?void 0:p.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(Jt,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(Kp,{className:"icon",style:{color:d.field===((f=a==null?void 0:a.column)==null?void 0:f.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(P0,{children:t.jsx(Nr,{appearance:!1,items:d.catalogs??[],setSelected:x=>o(m=>(x&&(m={...m,[d.field]:{column:d,value:x}}),m)),selected:(g=s==null?void 0:s[d.field])==null?void 0:g.value,placeholder:d.title})})]},d.title)})})},O0=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs($,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(Ci,{}),onClick:()=>r(mt(n-1,e).toString())}),t.jsxs($,{w:"fit-content",gap:"6px",children:[t.jsx(xt,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(ne,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(_,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(tt,{}),onClick:()=>r(mt(n+1,e).toString())})]}):null},A0=u.div`
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
`,Tt=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(A0,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,D0=u.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,N0=({obj:e,columns:i})=>t.jsx(D0,{children:i.map(n=>t.jsx(Tt,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Qt(e[n.field],n.type)},n.title))}),Rr=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=ee(),r=()=>a(t.jsx(N0,{obj:n,columns:i||e}),"Информация");return t.jsx(E0,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(Ir,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:p=>{c.onClick&&(p.stopPropagation(),c.onClick(n))},children:c.render?c.render(Qt(n[c.field],c.type),n):Qt(n[c.field],c.type)},c.field)})})})},I0=u.div`
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
`,R0=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,L0=u.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,z0=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),p=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(R0,{children:t.jsx(qe,{})}):t.jsxs(I0,{children:[h==null?void 0:h.map((f,g)=>t.jsx(Rr,{onRowClick:a,columns:n,columnsExtended:s,el:f,index:g},g)),!(h!=null&&h.length)&&t.jsx(ue,{text:"Нет данных"}),p>0&&t.jsx(ve,{margin:"0",width:"100%"}),t.jsx(L0,{children:t.jsx(O0,{pages:p,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},M0=u.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,F0=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},B0=({search:e,setSearch:i})=>{var n,s;return t.jsx(M0,{closed:!(e!=null&&e.column),children:t.jsx(xt,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:F0((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(Jt,{}),minWidth:"auto"})})},H0=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function U0(e){return Object.keys(e).map(i=>({title:"",field:i}))}const W0=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(H0(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(ve,{}),t.jsx(Rr,{onRowClick:()=>null,columns:U0(s),el:s,index:1})]})},V0=u.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,ot=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:p,setSearch:h,resultData:f,filter:g,setFilter:x,filterList:m,setFilterList:b,onRemoveOne:v,onRemoveAll:S}=m0(n);return t.jsxs(V0,{children:[t.jsx(f0,{setList:b,padding:"0 10px",list:m,onRemoveOne:v,onRemoveAll:S}),t.jsx(B0,{search:p,setSearch:h}),t.jsx(C0,{sort:c,setSort:d,columns:e,search:p,setSearch:h,filter:g,setFilter:x}),t.jsx(z0,{loading:r,onRowClick:o,filter:g,columns:e,columnsExtended:i,data:f,maxOnPage:s}),t.jsx(W0,{footer:a,data:n,columns:e})]})},u$={ready:"Готово",pending:"В работе",rejected:"Отклонено"},Pn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},Os={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},h$=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],g$=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],G0=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Pn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Os).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],q0=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Y0,{children:["История должностей:",t.jsx(_,{icon:n?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(K0,{columns:G0(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(_,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Y0=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,K0=u(ot)`
    width: 100%;
`,J0=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${nt()}`},s=await zt({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},X0=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Pn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>oe(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(Os).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{J0(i.applicationGuid)}})}}],Q0=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(eb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:c?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>{d(p=>!p)},background:"transparent"})]}),t.jsxs(Z0,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(ib,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(_,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(tb,{columns:X0(),data:r,maxOnPage:10})]}),t.jsx(_,{onClick:()=>{d(p=>!p)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},Z0=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,eb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,tb=u(ot)`
    width: 100%;
`,ib=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,nb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(sb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(Q0,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(q0,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},sb=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Cn=u.div`
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
`,On=()=>t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ze,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),Lr=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Fe,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(ob,{children:t.jsxs(Cn,{maxWidth:"1500px",children:[t.jsxs(ab,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(On,{})]}),t.jsx(nb,{})]})})})},ob=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,ab=u.div`
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
`,rb=Object.freeze(Object.defineProperty({__proto__:null,default:Lr},Symbol.toStringTag,{value:"Module"})),zr=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(Pn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>oe(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Mr=k(),Fr=k(),Br=L(async()=>{const{data:e}=await xe.get(`Weekend.GetAllHistory?PersonalGuid=${ti(nt()??"").IndividualGuid}`);return e.orders});P({clock:Mr,target:Br});const Ii=L(async e=>(await xe.post("Weekend.AddWeekend",e)).data);P({clock:Fr,target:Ii});const Hr=V([]),lb=Ii.pending;P({clock:Br.doneData,target:Hr});P({clock:Ii.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:yt.evokePopUpMessage});P({clock:Ii.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:yt.evokePopUpMessage});const cb={loadBufferHolidayWork:Mr,sendBufferHolidayWork:Fr},f$={sendBufferHolidayWorkFx:Ii},db={useBufferHolidayWork:()=>({data:fe(Hr),loading:fe(lb)})},pb=()=>{const[e,i]=l.useState(!1);l.useEffect(cb.loadBufferHolidayWork,[]);const{data:n}=db.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ub,{children:["История заявлений на выход в выходной день:",t.jsx(_,{icon:e?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(hb,{columns:zr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},ub=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,hb=u(ot)`
    width: 100%;
`,gb=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(xb,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(fb,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(mb,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(_,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},fb=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,xb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,mb=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,bb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(vb,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(gb,{info:s,index:o})),t.jsx(pb,{})]}):null},vb=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,yb=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Fe,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(_b,{children:t.jsxs(Cn,{maxWidth:"1500px",children:[t.jsxs(wb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(On,{})]}),t.jsx(bb,{})]})})})},_b=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,wb=u.div`
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
`,Ur=k(),Wr=k(),Ri=L(async()=>{const{data:e}=await xe.get(`Vacation.GetAllHistory?personalGuid=${ti(nt()??"").IndividualGuid}`);return e});P({clock:Ur,target:Ri});const Mt=L(async e=>(await xe.post("Vacation.AddVacation",e)).data);P({clock:Wr,target:Mt});const an=V(null);P({clock:Ri.doneData,fn:({employeeVacations:e})=>e,target:an});P({clock:Mt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:U.evokePopUpMessage});P({clock:Mt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:U.evokePopUpMessage});P({clock:Mt.doneData,source:an,fn:(e,{employeeVacations:i})=>[...e,...i],target:an});P({clock:Ri.failData,fn:e=>{var n;return{message:Ss(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:U.evokePopUpMessage});P({clock:Mt.doneData,target:Ri});const jb={loadBufferHolidayPlanning:Ur,sendBufferHolidayPlanning:Wr},x$={sendBufferHolidayPlanningFx:Mt},kb={useBufferHolidayPlanning:()=>({data:fe(an),loading:fe(Mt.pending),getDataLoading:fe(Ri.pending)})},An=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${nt()}`},o=await zt({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var Vr=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(Vr||{});const As=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(te,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>Vr[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),An(i.documentGuid,"0")}}):"-"}}],Sb=()=>[...As(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${oe((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${oe((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),An(i.documentGuid,"1")}}):"-"}}],Tb=()=>{const{data:e,getDataLoading:i}=kb.useBufferHolidayPlanning(),n=()=>jb.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>da(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(Fe,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(Eb,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(_,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(At,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(qe,{})}):t.jsx(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(ot,{columns:As(),columnsExtended:Sb(),data:s,maxOnPage:10})})]})})},Eb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Yn=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},Gr=()=>{const e=it(),{allRoutes:i}=Ve.useMenu(),n=i??{},[s,o]=l.useState(Yn(e.location.pathname,n));return l.useEffect(()=>{n!==null&&o(Yn(e.location.pathname,n))},[n]),l.useEffect(()=>e.listen(a=>{a&&o(Yn(a.pathname,n))}),[e,n]),s},$b={small:"600px",middle:"700px",big:"963px",large:"100%"},qr=e=>$b[(e==null?void 0:e.pageSize)??"middle"],Pb=u(st)`
    position: relative;

    ${X.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${X.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,Cb=u.div`
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
`,Ob=u.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${X.isMobile} {
        top: 40px;
    }
`,jt=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=Gr(),r=qr(a);return t.jsx(Xs,{padding:"0 0 10px 0",children:t.jsxs(Pb,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(Cb,{children:i}),n&&t.jsx(Ob,{children:n}),e]})})});jt.displayName="PageBlock";const Ab=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications(),n=it();return t.jsx(Fe,{load:Le.getWorkerPosts,error:i,data:e,children:t.jsxs(jt,{topRightCornerElement:t.jsx(_,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(pa,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ze,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(Tb,{})]})})},Db=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Pn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(Os).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(te,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Yr=k(),Kr=k(),Ds=L(async()=>{const{data:e}=await xe.get(`CarryForwardVacation.GetAllHistory?personalGuid=${ti(nt()??"").IndividualGuid}`);return e});P({clock:Yr,target:Ds});const si=L(async e=>(await xe.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);P({clock:Kr,target:si});const rn=V([]);P({clock:Ds.doneData,fn:({employeeVacations:e})=>e,target:rn});P({clock:si.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:yt.evokePopUpMessage});P({clock:si.doneData,source:rn,fn:(e,{employeeVacations:i})=>[...e,...i],target:rn});P({clock:Ds.failData,fn:e=>{var n;return{message:Ss(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:U.evokePopUpMessage});P({clock:si.failData,fn:e=>{var n;return{message:Ss(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:yt.evokePopUpMessage});const vo={loadBufferHolidayTransfer:Yr,sendBufferHolidayTransfer:Kr},m$={sendBufferHolidayTransferFx:si},Ns={useBufferHolidayTransfer:()=>({data:fe(rn),loading:fe(si.pending)})},Nb=()=>{const[e,i]=l.useState(!1),{data:n}=Ns.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Ib,{children:["История заявлений отпуск:",t.jsx(_,{icon:e?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Rb,{columns:Db(),data:[],maxOnPage:10},a)),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Ib=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Rb=u(ot)`
    width: 100%;
`,Lb=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Mb,{children:[t.jsx("span",{children:s}),t.jsx(_,{icon:r?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(zb,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(Bb,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(_,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,p)=>{if(d.employeeGuid==e.jobGuid){const h=n[p].notTaken.filter(f=>{if(f.vacation.status.orderStatus!="false"&&f.vacation.status.orderStatus!="")return f.vacation.status.orderStatus});return t.jsx(Fb,{columns:As(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(_,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},zb=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Mb=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Fb=u(ot)`
    width: 100%;
`,Bb=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Hb=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=Ns.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(Ub,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Lb,{info:o,index:a,data:i})),t.jsx(Nb,{})]})},Ub=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Wb=()=>{const{data:e,loading:i}=Ns.useBufferHolidayTransfer();return l.useEffect(()=>{vo.loadBufferHolidayTransfer()},[]),t.jsx(Fe,{load:vo.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(Vb,{children:t.jsxs(Cn,{maxWidth:"1500px",children:[t.jsxs(Gb,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(On,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(Hb,{})]})})})},Vb=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Gb=u.div`
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
`,qb=e=>localStorage.setItem("age",e.toString()),b$=e=>localStorage.getItem(e),Yb=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),Kb={listMedicalExamination:null,error:null},qt=L(async()=>{const e=await xe.get(`MedicalExamination.GetAllHistory?PersonalGuid=${ti(nt()??"").IndividualGuid}`);try{return qb(e.data.age),Yb(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Li=L(async e=>{try{const i=await xe.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),Jb=()=>{const{listMedicalExamination:e,error:i}=fe(Xb);return{data:e,loading:fe(Li.pending),getDataLoading:fe(qt.pending),error:i}};k();ze({from:Li.doneData,to:qt});P({clock:Li.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:U.evokePopUpMessage});P({clock:Li.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:U.evokePopUpMessage});const Xb=V(Kb).on(qt,e=>({...e,error:null})).on(qt.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(qt.failData,(e,i)=>({...e,error:i.message})),Qb={loadBufferMedicalExaminationFx:qt,sendBufferMedicalExaminationFx:Li},Zb={useBufferMedicalExamination:Jb},Jr=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(te,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${oe(i==null?void 0:i.startDate,"numeric")} - ${oe(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),An(i==null?void 0:i.documentGuid,"0")}}):"-"}],ev=()=>[...Jr(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(_,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),An(i==null?void 0:i.documentGuid,"1")}}):"-"}],tv=()=>{const{data:e,getDataLoading:i}=Zb.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=ye.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>da(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(Fe,{load:Qb.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs($,{jc:"space-between",m:"10px 0",children:[t.jsx(iv,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(_,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(At,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx($,{w:"100%",jc:"center",ai:"center",children:t.jsx(qe,{})}):t.jsx(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(ot,{columns:Jr(),columnsExtended:ev(),data:s,maxOnPage:10})})]})},iv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,nv=()=>{const{data:{dataWorkerApplication:e},error:i}=ye.useApplications();return t.jsx(Fe,{load:Le.getWorkerPosts,error:i,data:e,children:t.jsxs(jt,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ze,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(tv,{})]})})},Xr=k(),Qr=k(),Zr=L(async()=>{const{data:e}=await xe.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${ti(nt()??"").IndividualGuid}`);return e.employeeHistories});P({clock:Xr,target:Zr});const zi=L(async e=>(await xe.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);P({clock:Qr,target:zi});const el=V([]),sv=zi.pending;P({clock:Zr.doneData,target:el});P({clock:zi.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:yt.evokePopUpMessage});P({clock:zi.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:yt.evokePopUpMessage});const ov={loadBufferWorkTransfer:Xr,sendBufferWorkTransfer:Qr},v$={sendBufferWorkTransferFx:zi},av={useBufferWorkTransfer:()=>({data:fe(el),loading:fe(sv)})},rv=()=>{const[e,i]=l.useState(!1);l.useEffect(ov.loadBufferWorkTransfer,[]);const{data:n}=av.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(lv,{children:["История заявлений на перевод:",t.jsx(_,{icon:e?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(cv,{columns:zr(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(_,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},lv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,cv=u(ot)`
    width: 100%;
`,dv=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(Ye,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(uv,{children:[t.jsx("span",{children:n}),t.jsx(_,{icon:a?t.jsx(bt,{}):t.jsx(Ge,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(pv,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(hv,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(_,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(_,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(_,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},pv=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,uv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,hv=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,gv=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(fv,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(dv,{info:s,index:o})),t.jsx(rv,{})]}):null},fv=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,xv=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(Fe,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(mv,{children:t.jsxs(Cn,{maxWidth:"1500px",children:[t.jsxs(bv,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(On,{})]}),t.jsx(gv,{})]})})})},mv=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,bv=u.div`
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
`,vv=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${oe(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${oe(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${oe(e[0])} по ${oe(e[1])}`},yv=u.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,Dn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Qe.selectors.useData();return r?t.jsxs(yv,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Pr,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(te,{type:"info",title:vv(n)??"",icon:t.jsx(Ze,{})}),i==null?void 0:i.map((c,d)=>{const p=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(W,{size:4,align:"left",children:c.title}),t.jsx(Di,{onClick:()=>null,href:p,text:"Загрузить",icon:t.jsx(ys,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(ve,{})]},c.title)})]})]}):null},_v=()=>{const{data:e}=Qe.selectors.useData();return t.jsx(Dn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},wv=()=>{const{data:e}=Qe.selectors.useData();return t.jsx(Dn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},jv=()=>{const{data:e}=Qe.selectors.useData();return t.jsx(Dn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},kv=()=>{const{data:e}=Qe.selectors.useData();return t.jsx(Dn,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},tl=()=>{var i;const{data:e}=Qe.selectors.useData();return t.jsx(Xs,{padding:"10px",children:t.jsx(jt,{children:t.jsx(qs,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(jv,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(_v,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(wv,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(kv,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(we,{oldVersionUrl:Qy}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Sv=Object.freeze(Object.defineProperty({__proto__:null,default:tl},Symbol.toStringTag,{value:"Module"})),Tv=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},il=k(),nl=k(),sl=k(),Zt=L(async()=>{const e=await Vh();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),Is=L(async e=>{try{return await qh(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Mi=L(async e=>{const i=await Gh(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});P({clock:Mi.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:U.evokePopUpMessage});P({clock:Mi.doneData,fn:()=>!0,target:nl});P({clock:Mi.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:U.evokePopUpMessage});P({clock:il,target:Mi});const ol=k(),al=k(),Ev=fn(Mi.pending,Zt.pending,Boolean),$v=V(!1).on(sl,(e,i)=>i),Pv=V(!1).on(nl,(e,i)=>i),Cv=V(null).on(Zt,()=>null).on(Zt.failData,(e,i)=>i.message).on(Is.failData,(e,i)=>i.message),Ov=V(null).on(Zt.doneData,(e,i)=>i).on(Is.doneData,(e,i)=>Tv(e,i,!1)).on(ol,()=>null),pt={$loading:Ev,$completed:$v,$done:Pv,$error:Cv,$paymentsStore:Ov};ze({from:al,to:Zt});const Rs={getPaymentsFx:Zt,signContractFx:Is},as={signAgreement:il,setCompleted:sl,clearStore:ol,getPayments:al},Av=Object.freeze(Object.defineProperty({__proto__:null,effects:Rs,events:as,stores:pt},Symbol.toStringTag,{value:"Module"})),Dv=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Nv=u.div`
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
`,Iv=({date:e,value:i})=>t.jsxs(Nv,{children:[t.jsxs($,{gap:"16px",children:[t.jsx(wt,{color:"grey",size:33,children:t.jsx(gt,{})}),t.jsxs($,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(ne,{children:oe(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(gt,{})," "]})]}),Rv=u.div`
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
`,rl=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Rv,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(gt,{})]})},Lv=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),zv=u.div`
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
`,Mv=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Lv(s.value),0).toFixed(1);return t.jsxs(zv,{children:[t.jsxs($,{jc:"space-between",children:[t.jsx(W,{icon:t.jsx(ua,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(ne,{fontSize:"1rem",width:"fit-content",children:t.jsx(rl,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ue,{size:"50px",text:"Нет платежей",image:t.jsx(ha,{})}),e.map((n,s)=>l.createElement(Iv,{...n,key:s}))]})]})},ll=()=>t.jsx(te,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Fv=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),Bv=u.div`
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
`,Hv=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:p}=e,{open:h}=ee(),[f,g]=l.useState(!1),[x,m]=l.useState(!1),[b,v]=l.useState(!1),S=Me(pt.$error),D=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:oe(n)},{text:"Действует до",info:oe(s)},{text:"Подписан",info:oe(p)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:Fv(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},T=()=>{e&&(m(!0),Rs.signContractFx(e.id),m(!1),v(!0))},N=()=>{h(t.jsx(ll,{}),"Не получается подписать")};return t.jsxs(Bv,{children:[t.jsx("div",{className:"contract-info",children:D.map(({info:z,text:I})=>t.jsx(Tt,{keyStr:I,value:z},z))}),r&&t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(ft,{text:"Подписать договор",buttonSuccessText:"Подписан",action:T,isLoading:x,completed:b,repeatable:!1,popUpFailureMessage:S??"Не удалось подписать договор",setCompleted:v,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(_,{onClick:N,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs($,{gap:"8px",children:[t.jsx(ft,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:f,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Di,{onClick:()=>null,href:c??"",icon:t.jsx(ys,{}),width:"45px"})]})]})},Uv=u.div`
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
`,Wv=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(Uv,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(ga,{style:{color:"var(--green)"}}):t.jsx(fa,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(_,{icon:t.jsx(Ge,{}),onClick:()=>null,background:"transparent"})]}),Vv=u.div`
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
`,Gv=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(Vv,{height:s,open:r,children:[t.jsx(Wv,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},qv=u.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Yv=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,p]=Me([pt.$done,pt.$completed,pt.$loading]),h=s||c?140:100,f=()=>as.signAgreement(n),g=as.setCompleted;return t.jsxs(Gv,{height:h,title:o,confirmed:s||c,children:[t.jsxs(qv,{children:[t.jsxs($,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(W,{size:5,align:"left",children:o}),t.jsx(ne,{children:oe(r)})]}),t.jsxs($,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Di,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(ys,{}),isActive:!!e.file}),!(s||c)&&t.jsx(ft,{text:s||c?"Подписано":"Подписать",action:f,isLoading:p,completed:d,isDone:s||c,width:"160px",setCompleted:g,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(te,{type:"success",title:"Подписано",icon:t.jsx(gn,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(ne,{children:["Дата подписания: ",oe(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},Kv=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(Te,{width:"100%",children:[t.jsx(W,{size:4,align:"left",icon:t.jsx(Jp,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(ll,{}),t.jsx(te,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(Yv,{data:s,isContractSigned:n},o))]}),Jv=u.div`
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
`,Gi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(Jv,{children:t.jsx($s,{loading:i,width:"300px",height:"300px",src:e??""})})},Xv=u.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,Qv=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(Gi,{qrCode:e}):n===1?t.jsx(Gi,{qrCode:i}):t.jsx(Xv,{children:t.jsx(qs,{pages:[{title:"Текущая задолженность",content:t.jsx(Gi,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(Gi,{qrCode:i})}],appearance:!1,currentPage:n})}),Zv=({type:e="horizontal",...i})=>{const{open:n}=ee(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(Qv,{...i}),s)};return e==="vertical"?t.jsx(_,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(Xp,{}),textColor:"#fff",background:o}):t.jsx(_,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},ey=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(rl,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},Kn=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),kt=()=>{const e=Dh.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Kn(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Kn(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Kn(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},ty=u.div`
    width: 100%;
`,iy=u.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,ny=u.div`
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
`,sy=u.div`
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
`,oy=u.div`
    position: relative;
`,ay=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:p}=kt(),{open:h}=ee(),[f,g]=l.useState(0),x=f===0?+n:+s,m=x>0,b=m?f===0?"Долг по договору":"Остаток по договору":x<0?"Переплата по договору":"У вас нет долга",v=f===0?`На ${oe(new Date)}`:`До ${oe(o)}`,S=()=>{h(t.jsx(Hv,{contract:i}),"Реквизиты договора")};return t.jsxs(ty,{children:[t.jsx(W,{icon:t.jsx(Qp,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(iy,{children:[t.jsx(Ps,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:f,setCurrentPage:g,appearance:!1}),t.jsxs(ny,{children:[t.jsxs($,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(ey,{debt:x}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{size:3,align:"left",children:b}),t.jsx(ne,{children:v})]})]}),m?t.jsx(Zv,{currentPage:f,type:p?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(fr,{color:"green",size:"40px"})]}),t.jsxs(sy,{children:[r&&t.jsx(Di,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(oy,{children:[t.jsx(_,{onClick:S,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(Nt,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},cl=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,ry=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Qt(String(o),"rub")})`},ly=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return cl(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:ry}],cy=({paygraph:e})=>t.jsxs($,{d:"column",children:[t.jsx(W,{icon:t.jsx(Zp,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(ot,{columns:ly(),data:e??[],maxOnPage:3})]}),qi=({contracts:e})=>e?t.jsx(Dv,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,p=a==="Общежитие",h=!0,f=s.filter(g=>new Date(g==null?void 0:g.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[t.jsx($,{gap:"8px",children:t.jsx($,{w:"fit-content",children:t.jsxs(W,{size:3,align:"left",children:["Договор № ",o," от ",oe(d,"numeric")]})})}),t.jsx(ay,{data:i}),t.jsx(Mv,{payments:c??[]}),t.jsx(cy,{paygraph:r}),t.jsx(Kv,{isDormitory:p,isContractSigned:h,electronicAgreements:f}),n!==e.length-1&&t.jsx(ve,{margin:"0",width:"100%"})]},o)})}):null,Ls=()=>{const[e,i,n]=Me([pt.$error,pt.$loading,pt.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{U.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(Fe,{loading:i,load:Rs.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(jt,{children:[t.jsx(te,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ue,{text:"Нет данных"}),s==="both"&&t.jsx(qs,{pages:[{title:"Общежитие",content:t.jsx(qi,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(qi,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(qi,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(qi,{contracts:n==null?void 0:n.education})]})})},dy=Object.freeze(Object.defineProperty({__proto__:null,default:Ls},Symbol.toStringTag,{value:"Module"})),py=u.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`,y$=u.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,_$=u.div`
    width: 100%;
`,uy=u.div`
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 100px;
    height: 100%;

    @media (max-width: 550px) {
        padding: 10px;
    }
`,hy=u.div`
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
`,gy=u.div`
    transition: 0.2s;
    height: 100%;
`,fy=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);

    & > * + * {
        margin-top: 10px;
    }
`,xy=({children:e,load:i,loading:n,error:s,data:o,deps:a=[],couldBeReloaded:r})=>(l.useEffect(()=>{!o&&!n&&i()},a),t.jsx(uy,{children:o?!s&&t.jsx(gy,{children:e}):t.jsx(hy,{$loading:!!s||!o,children:s?t.jsx(fy,{children:t.jsx(ue,{text:s,children:r&&t.jsx(_,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(xn,{})})})}):t.jsx(qe,{})})})),dl=k(),pl=k(),Ei=L(async()=>{let e=0;for(;e<3;){const{data:i}=await dg(),n=!(i!=null&&i.map);if(i&&!n)return i;e++}throw new Error("Не удалось загрузить подразделения")});P({clock:pl,target:Ei});const my=Ei.pending,by=k(),vy=V(null).on(dl,(e,i)=>i),yy=V(null).on(Ei.doneData,(e,i)=>i),_y=V(null).on(Ei.failData,(e,i)=>i.message).on(Ei,()=>null),Nn={setSubdivisionPath:dl,getSubdivisions:pl,clearSubdivisionData:by},Xe={subdivisionPath:vy,subdivisions:yy,error:_y,pedningGetSubdividions:my},ul=({item:e,parents:i})=>{var p;const n=it(),o=$n().get("fio")||"",a=e.subdivs,r=Me(Xe.subdivisionPath),[c,d]=l.useState(!1);return l.useEffect(()=>{d(!!(r&&r.some(h=>h.name===e.name)))},[r]),t.jsxs($,{p:`5px 0 5px ${i.length*15}px`,d:"column",children:[t.jsx(wy,{$chosen:!!(r&&((p=r[0])==null?void 0:p.name)===e.name),onClick:()=>{Nn.setSubdivisionPath([e,...i]),n.push({search:new URLSearchParams({subdivision:e.name,fio:o}).toString()})},children:t.jsxs($,{ai:"center",jc:"space-between",w:"100%",gap:"5px",children:[e.name,a.length>0&&t.jsx(_,{icon:c?t.jsx(xa,{size:20}):t.jsx(tt,{size:20}),width:"20px",height:"20px",background:"transparent",onClick:h=>{h.stopPropagation(),d(f=>!f)}})]})}),c&&a.map(h=>t.jsx(ul,{item:h,parents:[e,...i]},h.name))]})},wy=u.div`
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
`,jy=u.div`
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
`,ky=u.div`
    width: 700px;
    padding-bottom: 20px;
    /* padding: 40px 35px 20px 35px; */

    @media (max-width: 800px) {
        width: 100%;
        /* padding: 20px 16px 10px 36px; */
    }
`,Sy=u.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding: 60px 20px 10px 20px;

    ${X.isNotMobile} {
        padding: 35px 20px 10px ${({isEmployee:e})=>e?"180px":"0"};
    }
`,Ty=u.h3`
    font-size: 1.17rem;
    line-height: 28px;
`,Ey=u.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`,$y=u.div`
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
`,Py=u.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 50;

    ${X.isMobile} {
        top: 95px;
        left: 10px;
    }
`,rs=u($)`
    overflow-x: hidden;
    padding-right: 10px;
    ${X.isNotMobile} {
        overflow-y: scroll;
        height: calc(100vh - 240px);
    }
    ${X.isTablet} {
        height: calc(100vh - 300px);
    }
`,Cy=u(Z)`
    width: 100%;
`,Oy=()=>{const{subdivisions:e}=Me({subdivisions:Xe.subdivisions});return e?t.jsx(rs,{d:"column",children:e.map(i=>t.jsx(ul,{item:i,parents:[]},i.name))}):null},ln=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Yi=({title:e,items:i,action:n})=>t.jsxs($,{d:"column",ai:"flex-start",gap:"7px",children:[t.jsx(ne,{children:e}),i.length>0?i.map(s=>t.jsxs(Ay,{onClick:()=>n("fio"in s?s:null),children:["fio"in s&&t.jsx(Bt,{name:s.fio,avatar:s.avatar,width:ln("horizontal","middle"),height:ln("horizontal","middle"),marginRight:"7px"}),"fio"in s?s.fio:s.name]},"fio"in s?s.fio+s.post:s.name)):t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(vs,{})})]}),Ay=u.button`
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
`,Dy=({title:e,children:i})=>i?t.jsxs($,{d:"column",ai:"flex-start",jc:"flex-start",gap:"10px",children:[t.jsx(ne,{fontSize:"0.9rem",children:e}),t.jsx(Ny,{children:i})]}):null,Ny=u.p`
    padding-left: 14px;
`,Iy=u.div`
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
`,hl=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Iy,{width:i,height:n,color:Ne(e,"dark1"),color2:Ne(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ne(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ne(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ne(e,"light2")})})]})}),Fi=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),Gt=({title:e,info:i,isEmployee:n,avatar:s})=>{const{close:o}=ee(),{isMobile:a}=kt();return t.jsxs($,{d:"column",children:[t.jsxs(jy,{isEmployee:!!n,children:[t.jsx(hl,{fullName:e,height:"200px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),n&&t.jsx(Py,{children:t.jsx(Bt,{avatarModal:!0,border:!0,name:e,avatar:s,width:a?"110px":"150px",height:a?"110px":"150px",marginRight:"0"})}),t.jsx(Ty,{children:e})]}),t.jsx(ky,{children:t.jsx(Te,{minWidth:"100%",direction:"horizontal",showPages:!0,gap:20,children:i.map(({subtitle:r,attributes:c})=>{const d=c.find(p=>p.id==="jobType");return t.jsxs(Sy,{isEmployee:!!n,children:[r&&t.jsx(Ey,{children:r}),c.map(({title:p,text:h,id:f})=>t.jsx(Dy,{title:p,children:h?f==="email"?t.jsx("a",{href:`mailto:${h}`,children:h}):f==="innerPhone"?h.split("; ").map((g,x,m)=>t.jsx("a",{href:`tel:+7(495) 223-05-23,${g}`,children:x===m.length-1?g:`${g}; `},g)):f==="mobile"?t.jsx("a",{href:`tel:${h}`,children:h}):t.jsx(t.Fragment,{children:h}):"-"},p))]},r?e+r+(d==null?void 0:d.text):e)})},e)}),n?t.jsxs($y,{children:[t.jsx(Z,{to:Fi(oi,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(vt,{}),text:"Расписание",onClick:()=>{o()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(bn,{}),text:"Написать",onClick:()=>o(),width:"100%",background:"var(--theme-4)",isActive:!1})]}):a?t.jsx(Cy,{to:`${Bi}/${e}`,onClick:o,children:t.jsx(_,{icon:t.jsx(_s,{}),width:"100%",text:"Список"})}):null]})},zs=(e,i)=>{const n=i.toLowerCase();if(e.length===0)return[];const s=[];return e.forEach(o=>{var r,c;(c=(r=o.head)==null?void 0:r.fio)!=null&&c.toLowerCase().includes(n)&&s.push(o.head),o.staff.forEach(d=>{d.fio.toLowerCase().includes(n)&&s.push(d)});const a=zs(o.subdivs,n);s.push(...a)}),s.filter((o,a,r)=>a===r.findIndex(c=>c.fio===o.fio))},en=e=>e.job.map(i=>({subtitle:i.subdivision+" • "+i.post,attributes:[{id:"jobType",title:"Тип работы",text:i.jobType},{id:"email",title:"Корпоративная электронная почта",text:i.email},{id:"innerPhone",title:"Внутренний телефон",text:i.phone_inner},{id:"mobile",title:"Служебный мобильный телефон",text:i.phone_mobile},{title:"Адрес рабочего места",text:i.address},{title:"Номер кабинета",text:i.room}]})),gl=e=>[{attributes:[{title:"Руководитель",text:e.head.fio},{title:"Корпоративная электронная почта подразделения",text:e.email},{id:"innerPhone",title:"Внутренний телефон",text:e.phone_inner},{id:"mobile",title:"Прямой телефон",text:e.phone_direct},{title:"Адрес рабочего места",text:e.address},{title:"Номер кабинета",text:e.room}]}],Ry=()=>{var d;const e=$n(),i=e.get("fio")||"",n=e.get("subdivision")||"",{subdivisionPath:s,subdivisions:o}=Me({subdivisionPath:Xe.subdivisionPath,subdivisions:Xe.subdivisions}),a=s==null?void 0:s[0],{open:r}=ee(),c=l.useMemo(()=>i&&o?zs(a?[a]:o,i):[],[i,n,o]);return i&&o?t.jsx(rs,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:t.jsx(Yi,{title:"Сотрудники",items:c,action:p=>{r(t.jsx(Gt,{title:p.fio,info:en(p),avatar:p.avatar,isEmployee:!0}))}})}):a?t.jsxs(rs,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:[t.jsx(Yi,{title:"Информация",items:[a],action:()=>{r(t.jsx(Gt,{title:a.name,info:gl(a)}))}}),((d=a==null?void 0:a.head)==null?void 0:d.fio)&&t.jsx(Yi,{title:"Руководитель",items:[a.head],action:p=>{r(t.jsx(Gt,{title:p.fio,info:en(p),avatar:p.avatar,isEmployee:!0}))}}),a.staff.filter(p=>p.fio!==a.head.fio).length>0&&t.jsx(Yi,{title:"Сотрудники",items:a.staff,action:p=>{r(t.jsx(Gt,{title:p.fio,info:en(p),avatar:p.avatar,isEmployee:!0}))}})]}):null},yo=u.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    row-gap: ${({rowGap:e})=>e};
    column-gap: ${({columnGap:e})=>e};
    padding: ${({padding:e})=>e};
`,fl=({value:e,placeholder:i,loading:n,hintIcon:s,leftIcon:o,focusOn:a,width:r,transformRequest:c,setValue:d,request:p,onValueEmpty:h,customMask:f,onHintClick:g,size:x})=>{const[m,b]=l.useState([]),[v,S]=l.useState(!1);return l.useEffect(()=>{e.length>0?(S(!0),p(e).then(D=>{b(D.data.items.map(j=>{const T=c?c(j):j;return{id:T,title:T,value:T,icon:s}})),S(!1)}).catch(()=>{S(!1),b([])})):(S(!1),b([]),h==null||h())},[e]),t.jsx(Ni,{value:e,setValue:d,placeholder:i,hints:m,width:r??"180px",focusOn:a,leftIcon:o,loading:v&&n,onHintClick:g,customMask:f,size:x})},Ms=(e,i)=>{if(i==="")return null;const n=[],s=e.find(o=>o.name===i);if(s)n.push(s);else{for(const o of e){const a=Ms(o.subdivs,i);a&&a.length>0&&n.push(...a,o)}return n}return n},_o=(e,i)=>{const n=Ms(e,i)||null;Nn.setSubdivisionPath(n)},xl=()=>{const e=$n(),i=e.get("subdivision")||"",n=e.get("fio")||"",s=it(),[o,a,r]=Me([Xe.subdivisions,Xe.error,Xe.pedningGetSubdividions]);l.useEffect(()=>{i&&(o!=null&&o.find)&&c({id:i,value:i,title:i})},[o]);const c=b=>{o&&_o(o,(b==null?void 0:b.value)??"")},{isMobile:d}=kt(),[p,h]=l.useState(""),f=b=>{s.push({search:new URLSearchParams({subdivision:i,fio:b}).toString()})},[g,x,m]=En({onDebounce:f,delay:400,defaultValue:n,triggerDelay:200,triggerOn:b=>(h(b),p!==b),onClear:f});return d&&s.push(`${Bi}/${i}`),t.jsx(py,{children:t.jsx(jt,{children:t.jsxs($,{d:"column",gap:"15px",children:[t.jsxs(yo,{columns:d?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(fl,{width:"100%",value:i,setValue:b=>{s.push({search:new URLSearchParams({subdivision:b,fio:n}).toString()}),b===""&&o&&_o(o,b)},onHintClick:c,placeholder:"Структура",request:Ts}),!d&&t.jsx(Ni,{value:g,setValue:x,loading:m,placeholder:"Сотрудник"})]}),t.jsx(xy,{data:o,error:a,load:()=>{Nn.getSubdivisions()},loading:r,couldBeReloaded:!0,children:t.jsxs(yo,{columns:d?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(Oy,{}),!d&&t.jsx(Ry,{})]})})]})})})},Ly=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"})),zy=50;function My(e){const{getFx:i,limit:n=zy,reset:s=[]}=e,o=k(),a=k(),r=V(null),c=V(null);c.on(i.doneData,(g,x)=>[...g||[],...x.results||[]]),c.reset([o,...s]);const d=V(1);d.on(i.doneData,g=>++g),d.reset([o,...s]);const p=i.pending,h=V(!1);h.reset([o,...s]);const f=fn(c,h,(g,x)=>!!(g!=null&&g.length)&&!x);return P({clock:o,fn:g=>({...g,limit:g.limit||n,page:g.page??1}),target:[i,r]}),P({clock:a,source:{lastArgs:r,page:d},fn:({lastArgs:g={},page:x})=>({...g,limit:n,page:x}),target:i}),P({clock:i.doneData,source:r,fn:(g,x)=>!!g&&(x.results||[]).length<g.limit,target:h}),{$items:c,$isPending:p,$hasNext:f,next:a,load:o}}const Fy=L(async e=>{const{search:i,page:n,limit:s,filter:o}=e,a=(o==null?void 0:o.title)==="Все"?"":(o==null?void 0:o.title)??"",{data:r}=await Wa(i??"",a,n,s);return{results:r.items}}),wo=My({getFx:Fy,limit:50}),By=({setExternalValue:e,inputAppearance:i,placeholder:n,validationCheck:s,searchApi:o,triggerSearchOn:a,hints:r})=>{const c=async g=>{await o(g)},[d,p,h]=En({onDebounce:c,onClear:c,delay:1e3,triggerDelay:0,deps:a}),f=g=>{p(g),e&&e(g)};return t.jsx(Ni,{value:d??"",setValue:f,inputAppearance:i,placeholder:n,validationCheck:s,loading:h,hints:r})},Hy=u.div`
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
`,Uy=50;function Wy({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=Uy}){const{data:{user:p}}=he.useUser();let h="";const f=l.useCallback(g=>{const x=g.currentTarget.clientHeight,m=g.currentTarget.scrollHeight,b=g.currentTarget.scrollTop;m-d<b+x&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ue,{text:"Нет результатов",children:c}):t.jsxs(Hy,{onScroll:f,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((g,x)=>{var b,v;const m=r?h!==((b=g.fio)==null?void 0:b.charAt(0)):!1;return m&&(h=((v=g.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[m&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(W,{size:4,align:"left",children:h}),t.jsx(ve,{})]}),i(g,(p==null?void 0:p.id.toString())===g.id,x)]})})}),n&&s&&t.jsx(qe,{width:"40px",height:"40px"}),n&&!s&&t.jsx(_,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}const jo=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},ml=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},Vy=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},Gy=u.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?Vy(i):"100%"};

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
            font-size: ${({size:e})=>jo(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${jo(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,In=e=>{const{open:i}=ee(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:p,isMe:h=!1,loading:f=!1,orientation:g="horizontal",size:x="middle"}=e,m=ml(h,n,d,p);if(f)return t.jsx(jk,{});const b=v=>{r?r(v):h||(Re.close(),i(n==="staff"?t.jsx(Tk,{...e}):t.jsx(kk,{...e})))};return t.jsxs(Gy,{orientation:g,size:x,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(Bt,{name:o,avatar:s,width:ln(g,x),height:ln(g,x),marginRight:g==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ie,{words:m})})]})]})},qy=({filter:e,paginationList:i,noResultContent:n})=>{const{$items:s,$isPending:o,$hasNext:a,next:r,load:c}=i,d=fe(o),p=fe(a),h=()=>{r({filter:e})},f=()=>{c({filter:e})};return t.jsx(Wy,{items:s.getState(),renderItem:Yy,handleNext:h,isPending:d,hasNext:p,filter:e,handleReload:f,showAlphabetLetters:!0,noResultContent:n})};function Yy(e,i,n){return t.jsx(In,{name:e.fio,type:e.division?"staff":"stud",avatar:e.avatar,faculty:e.faculty,group:e.group,isMe:i,division:e.division,indexNumber:(n??0)+1},n)}const Ky=u.div`
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
`,Jy=({title:e,searchPlaceholder:i,paginationList:n,defaultFilter:s,noResultContent:o,filterPlaceholder:a,filterRequest:r,underSearchText:c,customMask:d,search:p=!0})=>{const{load:h}=n,[f,g]=l.useState(s),[x,m]=l.useState({id:f,value:f,title:f}),b=c==null?void 0:c(x),v=async j=>{await h({filter:x,search:j})},S=j=>{m(j??null)},D=()=>{m(null)};return t.jsxs(Ky,{children:[e&&t.jsx(W,{size:2,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"search-and-filter",children:[p&&t.jsx(By,{triggerSearchOn:[(x==null?void 0:x.id)??""],placeholder:i??"Поиск",searchApi:v,validationCheck:!0}),r&&t.jsx(fl,{value:f,setValue:g,onHintClick:S,onValueEmpty:D,customMask:d,placeholder:a??"Поиск",request:r})]}),t.jsx(ne,{visible:!!b,children:b}),t.jsx(qy,{paginationList:n,noResultContent:o,filter:x})]})},Xy=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,Fs=()=>{var f;const{data:{user:e}}=he.useUser(),{$isPending:i,$items:n}=wo,s=eu(),o=it(),a=fe(i),r=fe(n),c=s.params.filter??((f=e==null?void 0:e.subdivisions)==null?void 0:f[0].subdivision)??"",d=g=>g!=null&&g.title?`Кафедра: ${g==null?void 0:g.title} • Всего: ${(r==null?void 0:r.length)??0}`:null,{isMobile:p}=kt(),h=(e==null?void 0:e.user_status)==="staff";return!p&&h&&o.push(`${yl}?subdivision=${c}`),t.jsx(Fe,{load:function(){},loading:a,error:null,data:r,children:t.jsx(Xy,{children:t.jsx(jt,{children:t.jsx(Jy,{searchPlaceholder:"Поиск сотрудников",paginationList:wo,filterRequest:Ts,defaultFilter:c,filterPlaceholder:"Подразделения",underSearchText:d})})})})},bl=Object.freeze(Object.defineProperty({__proto__:null,default:Fs},Symbol.toStringTag,{value:"Module"})),E="/applications",re="/hr-applications",ko="/staff_orders",So="/staff_blanks",Qy="/ad_logins",Bs="/doclist",To="/pps_vote2020",Zy="/children",vl="/pps_contest",e1="/electronic-statements",_e="/onboarding",t1="/structure-of-the-university",i1="/addresses-and-contacts",n1="/brandbook",s1="/wifi-at-the-university",o1="/health-care",a1="/psychological-help",r1="/social-environment",l1="/vacation",ci="/kpi_pps",di="/kpi_admin",Eo="/sc_news",$o="/oop",Po="/centers",c1="/helpful-information",d1="/download-agreements",Co="/physical-education/main",yl="/all-staff",p1="/physical-education/student/:studentId",_l=E+"/contact-info-actualization",wl=E+"/contact-info-actualization-test",jl=E+"/data-verification",kl=E+"/issuance-of-licenses",Sl=E+"/getting-computer-equipment",Tl=E+"/connecting-computer",El=E+"/printer-maintenance",$l=E+"/question-sed",Pl=E+"/question-personal-account",Cl=E+"/other-it-services",Ol=E+"/certificate-from-the-place-of-work",Al=E+"/visa-certificate",Dl=E+"/certificate-of-work-experience",Nl=E+"/number-of-unused-vacation-days",Oo=E+"/contact-details",u1=E+"/contact-details/:guid",Il=E+"/edit-phonebook-subdivision",Rl=E+"/edit-phonebook-inner-phone",Ll=E+"/edit-phonebook-email",zl=E+"/copy-of-the-employment-record",Ml=E+"/copies-of-documents-from-the-personal-file",Fl=E+"/work-on-the-terms-of-external-concurrency",Bl=E+"/certificate-time-parental-leave",Hl=E+"/arbitrary-request",Ul=E+"/courier",Wl=E+"/persona-income-tax-reference",Vl=E+"/payment-of-child-birth-allowance",Gl=E+"/payment-for-child-care",ql=re+"/part-time-employment/",h1=re+"/dismissal/:id",g1=re+"/work-transfer/:id",f1=re+"/extra-holiday-coll",x1=re+"/holiday-planning",m1=re+"/holiday-transfer/:id",b1=re+"/holiday-work/:id",v1=re+"/work-transfer-change-rate/:id",y1=re+"/medical-examination",ls=re+"/buffer-dismissal",cs=re+"/buffer-holiday-planning",ds=re+"/buffer-holiday-transfer",ps=re+"/buffer-holiday-work",us=re+"/buffer-medical-examination",tn=re+"/buffer-work-transfer",Yl=E+"/living-in-residential-premises",Kl=E+"/guests-accomodation-on-campus",Jl=E+"/guests-passage-to-campus",Xl=E+"/relocation",Ql=E+"/termination-of-agreement",Zl=E+"/issuance-of-pass",ec=E+"/guest-pass",tc=E+"/certification-and-issuance-of-docs",ic=E+"/deferment-from-conscription",nc=E+"/certified-copies-of-military-docs",K=()=>we({oldVersionUrl:"/sprav"}),Ao=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(Q,{}),path:_e,Component:c0,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...xc,"contact-details":{id:"contact-details",title:"Контактные данные",icon:t.jsx(A,{}),color:"blue",path:Oo,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Yx,isTemplate:!1,group:"GENERAL",show:!O},"contact-details-form":{id:"contact-details-form",title:"Контактные данные",hiddenTitle:!0,icon:t.jsx(A,{}),color:"blue",path:u1,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Kx,isTemplate:!1,group:"GENERAL",isSubPage:!0,show:!1,backButtonText:"Назад",fallbackPrevPage:Oo},"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(ua,{}),path:d1,Component:tl,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(ru,{}),path:Zy,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"],show:!O},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(Q,{}),path:e1,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(ma,{}),path:pc,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(gt,{}),path:cn,Component:Ls,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(Q,{}),path:vl,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(ba,{}),path:ci,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${ci==null?void 0:ci.slice(1,ci.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(lu,{}),path:di,Component:()=>(le.useEffect(()=>{window.location.replace(`${R}/?p=${di==null?void 0:di.slice(1,di.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(cu,{}),path:Eo,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Eo}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(A,{}),path:ko,isOldLkPage:!0,Component:()=>we({oldVersionUrl:ko}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Xt,{}),path:So,isOldLkPage:!0,Component:()=>we({oldVersionUrl:So}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(A,{}),path:Bs,Component:Jx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(pa,{}),path:l1,Component:Om,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(A,{}),color:"lightGreen",path:Co,pageSize:"big",Component:sm,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(A,{}),color:"pink",show:!1,path:p1,Component:om,isTemplate:!1,fallbackPrevPage:Co,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(Si,{}),path:$o,isOldLkPage:!0,Component:()=>we({oldVersionUrl:$o}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(Si,{}),path:Po,isOldLkPage:!0,Component:()=>we({oldVersionUrl:Po}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(A,{}),path:c1,Component:Cs,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Ji,{}),path:To,isOldLkPage:!0,Component:()=>we({oldVersionUrl:To}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(A,{}),path:E,Component:Xx,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(A,{}),path:re,Component:O?()=>we({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Am,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(A,{}),color:"blue",path:jl,Component:Cr,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Ji,{}),path:Bi,Component:Fs,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],show:!1},"all-staff":{id:"all-staff",title:"Сотрудники",icon:t.jsx(Ji,{}),path:yl,Component:xl,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],pageSize:"big"}}),Do=()=>({...mc,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:kl,icon:t.jsx(A,{}),color:"blue",Component:O?K:rm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:ls,icon:t.jsx(A,{}),color:"blue",Component:O?K:Lr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:ps,icon:t.jsx(A,{}),color:"blue",Component:O?K:yb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:us,icon:t.jsx(A,{}),color:"blue",Component:O?K:nv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:cs,icon:t.jsx(A,{}),color:"blue",Component:O?K:Ab,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:re,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:ds,icon:t.jsx(A,{}),color:"blue",Component:O?K:Wb,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:tn,icon:t.jsx(A,{}),color:"blue",Component:O?K:xv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:ql,icon:t.jsx(A,{}),color:"blue",Component:O?K:Dm,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:re},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:b1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Rm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ps},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:y1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Lm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:us},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:x1,icon:t.jsx(A,{}),color:"blue",Component:O?K:zm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:cs},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:m1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Mm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:ds},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:g1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Fm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:tn},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:v1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Bm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:tn},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:f1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Im,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:h1,icon:t.jsx(A,{}),color:"blue",Component:O?K:Nm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ls},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(A,{}),color:"blue",path:Sl,Component:am,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(A,{}),color:"blue",path:Tl,Component:tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(A,{}),color:"blue",path:El,Component:xm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(A,{}),color:"blue",path:$l,Component:bm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(A,{}),color:"blue",path:Pl,Component:mm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(A,{}),color:"blue",path:Cl,Component:um,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(A,{}),color:"blue",path:Ol,Component:Vx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(A,{}),color:"blue",path:Al,Component:vm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(A,{}),color:"blue",path:Dl,Component:O?K:Zx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(A,{}),color:"blue",path:Nl,Component:lm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"edit-phonebook-subdivision":{id:"edit-phonebook-subdivision",title:"Внесение изменений данных подразделения в телефонном справочнике",hiddenTitle:!0,icon:t.jsx(A,{}),color:"blue",path:Il,Component:cm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,keywords:["изменение данных подразделения в телефонном справочнике"]},"edit-phonebook-inner-phone":{id:"edit-phonebook-inner-phone",hiddenTitle:!0,title:"Запрос на изменение внутреннего телефона",icon:t.jsx(A,{}),color:"blue",path:Rl,Component:dm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"edit-phonebook-email":{id:"edit-phonebook-email",hiddenTitle:!0,title:"Запрос на изменение корпоративной электронной почты",icon:t.jsx(A,{}),color:"blue",path:Ll,Component:pm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(A,{}),color:"blue",path:zl,Component:O?K:im,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(A,{}),color:"blue",path:Ml,Component:O?K:Gx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(A,{}),color:"blue",path:Fl,Component:O?K:ym,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(A,{}),color:"blue",path:Bl,Component:O?K:em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(A,{}),color:"blue",path:Hl,Component:O?K:Qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},courier:{id:"courier",title:"Курьер",icon:t.jsx(A,{}),color:"blue",path:Ul,Component:O?K:nm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(A,{}),color:"blue",path:Wl,Component:O?K:fm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(A,{}),color:"blue",path:Vl,Component:O?K:gm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(A,{}),color:"blue",path:Gl,Component:O?K:hm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(A,{}),color:"blue",path:_l,Component:mo,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,show:!1,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"data-actualization":{id:"data-actualization",title:"Актуализация контактных данных (тест)",icon:t.jsx(A,{}),color:"blue",path:wl,Component:O?mo:qx,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E,show:!1},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(A,{}),color:"blue",path:jl,Component:Cr,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(A,{}),color:"blue",path:Yl,Component:O?K:_m,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(A,{}),color:"blue",path:Kl,Component:O?K:wm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(A,{}),color:"blue",path:Jl,Component:O?K:jm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(A,{}),color:"blue",path:Xl,Component:O?K:km,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(A,{}),color:"blue",path:Ql,Component:O?K:Sm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(A,{}),color:"blue",path:Zl,Component:O?K:Tm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(A,{}),color:"blue",path:ec,Component:O?K:Em,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(A,{}),color:"blue",path:tc,Component:O?K:$m,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(A,{}),color:"blue",path:ic,Component:O?K:Pm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(A,{}),color:"blue",path:nc,Component:O?K:Cm,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Je,{to:_e})),icon:t.jsx(Xt,{}),isTemplate:!1,path:r1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Je,{to:_e})),icon:t.jsx(tu,{}),isTemplate:!1,path:a1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Je,{to:_e})),icon:t.jsx(iu,{}),isTemplate:!1,path:o1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Je,{to:_e})),icon:t.jsx(nu,{}),isTemplate:!1,path:s1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Je,{to:_e})),icon:t.jsx(su,{}),isTemplate:!1,path:n1,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(ou,{}),path:i1,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Je,{to:_e})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(au,{}),path:t1,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Je,{to:_e})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:_e,isExternalPage:!0}}),sc="/login",_1="/forgot-password",w1="/medical-certificate",j1="/vaccination",vi="/all",Hs="/home",Us="/profile",Ws="/chat",k1="/messages",w$=Ws+"/:chatId",oc="/electronic-interaction-agreement",cn="/payments",Ft="/schedule",ac="/all-students",S1="/all-students/:filter",Bi="/all-teachers",T1="/all-teachers/:filter",Vs="/feedback",rc="/cant-access",lc="/memo-freshmen",cc="/get-your-login",dc="/memo-teacher",je="/settings",j$=je+"/:id",E1=je+"/appearance",$1=je+"/personal",P1=je+"/security",C1=je+"/home-page",O1=je+"/customize-menu",A1=je+"/notifications",D1="/instructions",pc="/project-activity",N1="/softskills",uc="/alerts",hc="/lk-notifications",gc="/helpful-information",oi=Ft+"/:page/:filter",fc=Ft+"/current",I1=Ft+"/semestr",R1=Ft+"/session",L1=Ft+"/retake",z1=gc+"/:infoType";var M1=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(M1||{});const F1=[{id:0,title:"",icon:"",path:sc,Component:Hx},{id:1,title:"",icon:"",path:_1,Component:Gm},{id:2,title:"Обратная связь",icon:t.jsx(Si,{}),path:Vs,Component:Ar},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(Ot,{}),path:rc,Component:Wm},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:cc,Component:a0},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:lc,Component:r0},{id:6,title:"Вниманию сотрудников!",icon:"",path:dc,Component:l0}],xc={all:{id:"all",title:"Все разделы",icon:t.jsx(gu,{}),path:vi,Component:Hm,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},settings:{id:"settings",title:"Настройки",icon:t.jsx(_a,{}),path:je,Component:t0,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(A,{}),path:Bs,Component:o0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(wa,{}),path:uc,Component:qm,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(ya,{}),path:Hs,Component:Ym,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(ja,{}),path:Us,Component:Jm,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(vn,{}),path:hc,Component:d0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(ka,{}),path:oc,Component:Vm,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(fu,{}),path:Ws,isOldLkPage:!0,Component:()=>we({oldVersionUrl:k1}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(vt,{}),path:Ft,menuPath:fc,Component:Dr,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Xt,{}),path:ac,Component:Or,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(Si,{}),path:Vs,Component:Ar,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(xu,{}),path:D1,Component:Km,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(Sa,{}),path:j1,Component:()=>(le.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0,show:!O}},B1={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(vt,{}),path:fc,Component:Xm,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(ws,{}),path:I1,Component:Qm,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(va,{}),path:R1,Component:Zm,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(xn,{}),path:L1,Component:e0,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},mc={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(vt,{}),path:oi,Component:Dr,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...B1,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Xt,{}),path:S1,Component:Or,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Xt,{}),path:T1,Component:Um,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(du,{}),path:E1,Component:n0,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(pu,{}),path:$1,Component:i0,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(uu,{}),path:P1,Component:s0,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(ya,{}),path:C1,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(hu,{}),path:O1,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:je,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(vn,{}),path:A1,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:je,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:z1,Component:Cs,color:"grey",isTemplate:!0,show:!1}},bc=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;Ai.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else U.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},vc=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;Ai.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},H1=(e,i,n,s)=>{if(i){const o=s.length+Th;if(n<o){U.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??yn;Ai.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else U.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},U1=(e,i,n)=>{if(i)if(n.includes(e))U.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{U.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;Ai.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},W1=u.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,V1=u.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,G1=e=>{var x,m,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=ii.useSettings(),{data:r}=he.useUser(),c=Ve.useMenu(),d=(x=a["settings-home-page"].property.pages)==null?void 0:x.find(v=>v===i),p=(m=a["settings-customize-menu"].property.pages)==null?void 0:m.find(v=>v===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?Na:yn,f=()=>{bc(i,a),Re.close()},g=()=>{H1(i,a,Object.keys(c.leftsideBarRoutes??{}).length??0,h),Re.close()};return t.jsxs(W1,{children:[t.jsxs("div",{className:"top",children:[t.jsx(wt,{color:o,size:22,children:n}),t.jsx(V1,{children:s})]}),t.jsx(ve,{}),d?t.jsx(_,{text:"Убрать с главной",icon:t.jsx(Ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{vc(i,a),Re.close()}}):t.jsx(_,{text:"Добавить на главную",icon:t.jsx(At,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}),p?t.jsx(_,{text:"Убрать из меню",icon:t.jsx(Ot,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>U1(i,a,h)}):t.jsx(_,{text:"Добавить в меню",icon:t.jsx(At,{}),width:"100%",align:"left",background:"var(--block)",onClick:g})]})},yc=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Re.open({e:o,height:105,content:t.jsx(G1,{...e})})};return t.jsx(_,{icon:t.jsx(Ta,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},_c=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},wc=u(st)`
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
`,q1=u.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,No=e=>{var v;const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:p,id:h,background:f,orientation:g="vertical"}=e,x=g==="vertical",{settings:m}=ii.useSettings(),b=!!((v=m["settings-home-page"].property.pages)!=null&&v.find(S=>S===h));return t.jsxs(wc,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:f,children:[(d||c)&&x&&t.jsxs(q1,{children:[d&&t.jsx(mn,{title:"Раздел в старом ЛК"}),c&&t.jsx(nn,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(wt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(mu,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",_c(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),p==="use"&&t.jsx(yc,{route:e}),p==="add"?b?t.jsx(_,{icon:t.jsx(et,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>vc(h,m)}):t.jsx(_,{icon:t.jsx(At,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>bc(h,m)}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},Y1=u(wc)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,k$=()=>t.jsx(Z,{to:vi,onClick:()=>{at.changeOpen({isOpen:!1,currentPage:vi.slice(1,vi.length)})},children:t.jsx(Y1,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(wt,{color:"blue",children:t.jsx(bu,{})}),t.jsx("b",{children:"Все разделы"})]})})}),K1=u(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,J1=u.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,X1=e=>{const{close:i}=ee(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(J1,{width:o==="vertical"?c:"100%",children:t.jsx(No,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),at.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(K1,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(No,{...e,maxWordLength:r,mode:a})})},Q1=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,Z1=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ue,{text:"Ничего не было найдено"}):t.jsx(Q1,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(X1,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),e_=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(ke(s.title).includes(ke(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>ke(a).includes(ke(e))))&&(n[s.id]=s),n},{}),t_=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,i_=u(Z)`
    width: 100%;
`,Io=({division:e})=>{const{close:i}=ee();return t.jsxs(t_,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(wt,{size:120,color:"purple",children:t.jsx(fi,{})}),t.jsx(ne,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(i_,{to:`${Bi}/${e}`,onClick:i,children:t.jsx(_,{icon:t.jsx(_s,{}),width:"100%",text:"Список"})})]})},n_=({division:e})=>{const{data:{user:i}}=he.useUser(),n=(i==null?void 0:i.user_status)==="staff",{subdivisions:s}=Me({subdivisions:Xe.subdivisions});if(!n||!s)return t.jsx(Io,{division:e});const o=Ms(s,e),a=o&&o[0];return a?t.jsx(Gt,{title:a.name,info:gl(a)}):t.jsx(Io,{division:e})},s_=u.div`
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
`,o_=({division:e})=>{const{open:i}=ee(),n=()=>{i(t.jsx(n_,{division:e}),"Подразделение")};return t.jsx(s_,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",children:[t.jsx(fi,{}),t.jsx(ne,{fontSize:"1rem",children:e})]}),t.jsx(tt,{})]})})},a_=({divisions:e})=>!e||e.length===0?null:t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(o_,{division:i},i))}),r_=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Ro=u(Z)`
    width: 100%;
`,jc=({group:e})=>{const{close:i}=ee();return t.jsxs(r_,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(wt,{size:120,color:"lightBlue",children:t.jsx(Ea,{})}),t.jsx(ne,{fontSize:"1.2rem",children:e})]}),t.jsxs($,{gap:"8px",onClick:i,children:[t.jsx(Ro,{to:Fi(oi,{page:"current",filter:e}),children:t.jsx(_,{icon:t.jsx(vt,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(Ro,{to:`${ac}/${e}`,children:t.jsx(_,{icon:t.jsx(_s,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},l_=u.div`
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
`,c_=({group:e})=>{const{open:i}=ee(),n=()=>{i(t.jsx(jc,{group:e}),"Группа")};return t.jsx(l_,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",h:"50px",children:[t.jsx(Ea,{}),t.jsx(ne,{fontSize:"1rem",children:e})]}),t.jsx(tt,{})]})})},d_=({groups:e})=>e?t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(c_,{group:i},i))}):null,Jn=[{title:"Инструкции",links:[{link:R+"/storage/files/instruction_business_trip_docs.docx",title:"Инструкция для командируемых работников",icon:""},{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ie},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ie},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ie}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ie},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ie},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ie},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ie},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ie},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ie},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ie},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ie},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ie}]}];var Pe=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Pe||{});const Wt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},p_=[{id:Pe.information,title:Wt[Pe.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Воинский учёт",visible:"student",links:[{title:"Военнообязанным и призывникам",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/voennoobyazannym-i-prizyvnikam/"},{title:"Единый пункт призыва",visible:"student",href:"https://www.mos.ru/city/projects/prizyv/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Pe.security,title:Wt[Pe.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Pe.instructions,title:Wt[Pe.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Jn[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Pe.regulations,title:Wt[Pe.regulations],visible:"staff",content:[{title:"Положения",links:[...Jn[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Pe.orders,title:Wt[Pe.orders],visible:"staff",content:[{title:"Приказы",links:[...Jn[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Pe.courses,title:Wt[Pe.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],u_=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ke(a.title).includes(ke(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),h_=u.div`
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
`,g_=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s,visible:o},a)=>o==="staff"&&!i||o==="student"&&i?null:t.jsxs(h_,{children:[t.jsx(W,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(Te,{gap:16,children:s.map(({title:r,href:c,visible:d},p)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:c,target:"_blank",rel:"noreferrer",children:r},r+p))})]},n+a))}):null;function hs(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const f_=u.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,x_=u.div``,m_=u.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,kc=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(f_,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(x_,{children:e}),t.jsx(m_,{isOpen:o,children:i})]})},Sc=k(),Tc=k(),b_=V(!1).on(Tc,()=>!0).on(Sc,()=>!1),Lo={close:Sc,open:Tc},v_={$isModalOpen:b_},Gs=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),y_=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=Me(v_.$isModalOpen),d=a.length>1,p=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,v)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,v??""])):(r(()=>[b]),o(v?[v]:[])),n(()=>!0),Lo.open())},[r,n,a,i]),f=l.useCallback(()=>{n(()=>!1),Lo.close()},[r,n]),g=l.useMemo(()=>a[a.length-1],[a]),x=l.useMemo(()=>s[s.length-1],[s]),m=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(Gs.Provider,{value:{back:p,open:h,close:f,isOpen:i,canBack:d,component:g,title:x,setComponent:m},children:e})},ee=()=>{const{open:e,isOpen:i,...n}=l.useContext(Gs);return{open:e,isOpen:i,...n}},__="2.3.0",Ec=()=>t.jsx(te,{icon:null,type:"info",title:__,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Ae=({color:e,children:i})=>t.jsx(wt,{color:e,children:i}),w_=()=>({info:t.jsx(Ae,{color:"grey",children:t.jsx(Ze,{})}),message:t.jsx(Ae,{color:"red",children:t.jsx(bn,{})}),alert:t.jsx(Ae,{color:"purple",children:t.jsx(wa,{})}),"payment-dorm":t.jsx(Ae,{color:"green",children:t.jsx(gt,{})}),"payment-ed":t.jsx(Ae,{color:"green",children:t.jsx(gt,{})}),"digital-services":t.jsx(Ae,{color:"red",children:t.jsx(A,{})}),"doc-for-review":t.jsx(Ae,{color:"blue",children:t.jsx(A,{})}),"hr-applications":t.jsx(Ae,{color:"green",children:t.jsx(A,{})}),"kpi-pps":t.jsx(Ae,{color:"pink",children:t.jsx(ba,{})}),schedule:t.jsx(Ae,{color:"pink",children:t.jsx(vt,{})}),"version-update":t.jsx(Ec,{}),"electronic-interaction":t.jsx(Ae,{color:"blue",children:t.jsx(ka,{})})}),j_=u(Z)`
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
`,k_=u.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,S_={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},T_={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},E_={small:"0px",middle:"1px",large:"2px",big:"3px"},$c=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:p,bottomMargin:h,closeAnimation:f=!0,loadingRemove:g=!1,canClose:x=!0,fullText:m=!0,maxLetters:b=200,size:v="middle"})=>{const S=oe(o,"short"),{close:D}=ee(),[j,T]=l.useState(!1),N=I=>{I.stopPropagation(),I.preventDefault(),f?(T(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},z=()=>{a==null||a(),x&&Rt.clearById({id:e,pageId:c}),D()};return t.jsx(kc,{forceState:!j,bottomMargin:h,children:t.jsxs(j_,{to:d??"",onClick:z,children:[t.jsx("span",{className:"left-icon",children:w_()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ne,{fontSize:"0.7rem",children:t.jsx(Ie,{words:[S??"",s??""]})}),t.jsxs($,{d:"column",gap:E_[v],ai:"flex-start",children:[t.jsx(k_,{fontSize:S_[v],children:m?i:hs(i,b)}),t.jsx(ne,{fontSize:T_[v],children:m?n:hs(n,b)})]})]}),p&&t.jsx(_,{isActive:!(g&&j),icon:t.jsx(et,{}),background:"var(--theme-2)",onClick:N,style:{borderRadius:"20px"}})]})})},Pc=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Rt.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx($,{d:"column",children:e.map((o,a)=>l.createElement($c,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},dn=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,zo=({people:e,type:i})=>!e||e.length===0?null:t.jsx($,{d:"column",children:e.map(n=>l.createElement(In,{name:n.fio,type:i,...n,key:n.id}))}),$_=()=>{const{allRoutes:e}=Ve.useMenu(),{notifications:i,removeNotificationLoading:n}=rt.useLkNotifications(),{data:{user:s}}=he.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>p_.flatMap(({visible:z,content:I})=>z==="staff"&&o||z==="student"&&!o||z==="all"?I:[]),[o]),[r,c]=l.useState(null),[d,p]=l.useState(null),[h,f]=l.useState(null),[g,x]=l.useState(null),[m,b]=l.useState(null),[v,S]=l.useState(null),[D,j]=l.useState(null),T=[{title:"Разделы",content:t.jsx(Z1,{pages:m,showNotFound:!1}),clear:()=>{b(null)},search:z=>{if(e){const I=e_(z,e);b(I)}},data:m},{title:"Студенты",content:t.jsx(zo,{people:g,type:"stud"}),data:g,clear:()=>{x(null)},search:async z=>{const{data:I}=await mg(z,"",1,20);x(I.items)}},{title:"Сотрудники",content:t.jsx(zo,{people:h,type:"staff"}),data:h,clear:()=>{f(null)},search:async z=>{const{data:I}=await Wa(z,"",1,20);f(I.items)}},{title:"Группы",content:t.jsx(d_,{groups:r}),data:r,clear:()=>{c(null)},search:async z=>{const{data:I}=await bg(z);c(I.items)}},{title:"Подразделения",content:t.jsx(a_,{divisions:d}),data:d,clear:()=>{p(null)},search:async z=>{const{data:I}=await Ts(z);p(I.items)}},{title:"Уведомления",content:t.jsx(Pc,{notifications:v,loadingRemove:n}),clear:()=>{S(null)},search:z=>{const I=i.filter(se=>ke(se.title).includes(z));S(I)},data:v},{title:"Полезная информация",content:t.jsx(g_,{blocks:D,isStaff:o}),clear:()=>{j(null)},search:z=>{const I=u_(z,a);j(I)},data:D}];return[(()=>{const{content:z,clear:I,data:se}=T.reduce((H,Y)=>(dn(Y.data)&&(H.data.push(Y.data),H.content.push(t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",children:Y.title}),Y.content,t.jsx(ve,{})]}))),H.clear.push(Y.clear),H),{content:[],clear:[],data:[]});return{title:"Все",content:z,clear:()=>I.map(H=>H()),search:async H=>{H.length<=8&&/\d|[-]/g.test(H)?await T[3].search(H):(T[0].search(H),T[5].search(H),T[6].search(H),dn(T[0].data)===0&&(await T[1].search(H),await T[2].search(H),await T[4].search(H)))},data:se}})(),...T]},P_=()=>JSON.parse(localStorage.getItem(M.SearchHistory)??"[]"),C_=()=>{const e=$_(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>P_(),[]),r=async g=>{e[i].clear();const x=_r(g)?yr(g):g;await e[i].search(x),x.length>0&&!a.includes(x)&&(a.unshift(x),a.length>8&&a.pop(),localStorage.setItem(M.SearchHistory,JSON.stringify(a)))},[c,d,p]=En({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:g=>(o(g),g.length>0&&(s!==g||!e[i].data))}),h=!p&&!c.length,f=!!c.length&&!p&&!!dn(e[i].data);return{showMessage:h,showSearchResult:f,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},O_=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(to,{})})):e?n.filter(s=>ke(s).includes(ke(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(to,{})})):[],A_=()=>t.jsxs($,{gap:"8px",ai:"flex-start",children:[t.jsx(J,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(J,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),D_=u.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,N_=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=C_(),p=O_(r,n,d),{isOpen:h}=ee();return t.jsx(D_,{children:t.jsxs($,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ni,{value:n,setValue:s,loading:r,focusOn:h,hints:p}),t.jsx(Ps,{pages:c.map(({title:f})=>({title:f})),currentPage:o,setCurrentPage:a}),t.jsx(wr,{value:n,setValue:s}),e&&t.jsx($,{h:"100%",children:t.jsx(ue,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(Jt,{})})}),!r&&n.length!==0&&!e&&!dn(c[o].data)&&t.jsx($,{h:"100%",children:t.jsx(ue,{size:"60px",text:"Ничего не было найдено",image:t.jsx(vs,{})})}),r&&Array(10).fill(0).map((f,g)=>t.jsx(A_,{},g)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},I_=u(st)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${X.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,R_=u.div`
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
`,L_=u($)`
    @media (max-width: 1000px) {
        display: none;
    }
`,z_=()=>{const e=ix();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx($a,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},Cc=({size:e="large"})=>{const i=z_(),{open:n}=ee(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(N_,{}),"Глобальный поиск");return vr(i.map(({key:r})=>r),a),e==="icon"?t.jsx(_,{direction:"vertical",icon:t.jsx(Jt,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(I_,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ne,{align:"left",fontSize:"0.9rem",children:t.jsxs($,{gap:"8px",children:[t.jsx(Jt,{}),"Поиск"]})}),t.jsx(L_,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(R_,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},S$=u.header`
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
`;const T$=u.div`
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
`,M_=u.div`
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
`,E$=u.div`
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
`,$$=u.div`
    margin-top: 50px;
    width: 100%;
`,P$=u.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,C$=u(st)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,O$=u.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,F_=u.div`
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
`,B_=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(F_,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(vx,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},H_=u.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,U_=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(H_,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:c},d)=>t.jsx(B_,{disabled:s,title:a,state:r,action:()=>o(d,c)},a))]})},Oc=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=_t(),{settings:o}=ii.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,c]=l.useState(n==="light"),d=r?t.jsx(vu,{}):t.jsx(yu,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[f,g]=l.useState([{title:"Темная тема",state:n!=="light",action:m=>s(m)}]);l.useEffect(()=>{g([{title:"Темная тема",state:n!=="light",action:m=>s(m)}])},[n]),l.useEffect(()=>{c(n==="light")},[n]);const x=()=>{s(r),c(m=>!m),i==null||i()};return e==="toggle"?t.jsx(U_,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:f,setToggles:g}):e==="h-button"?t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--block)",icon:d,width:"100%",align:"left",onClick:x}):t.jsx(_,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(M_,{width:"30px",background:w.green.main,children:d}),onClick:x,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},W_=({quantity:e=1,avatarShape:i="circle"})=>t.jsx($,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs($,{gap:"16px",ai:"center",children:[t.jsx(J,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(J,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),V_=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,G_=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=rt.useLkNotifications();return l.useEffect(()=>{o&&U.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Rt.clearAllVisible()},[]),t.jsxs(V_,{children:[s.length===0&&!n&&t.jsx(Xs,{height:"100%",children:t.jsx(ue,{text:i??"Нет новых уведомлений",image:i?t.jsx(Ot,{}):t.jsx(_u,{}),size:"70px"})}),t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(te,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Pc,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(W_,{quantity:10})]})},q_=u.div`
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
`,Ac=()=>{const{close:e}=ee(),{notifications:i}=rt.useLkNotifications(),n=3;return t.jsxs($,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(G_,{maxNotificationsVisible:n}),t.jsxs(ne,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",_c(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:hc,style:{width:"100%"},children:t.jsx(_,{width:"100%",text:"Показать все",onClick:e})})]})},Y_=()=>{const{notifications:e}=rt.useLkNotifications(),{open:i}=ee(),n=()=>{i(t.jsx(Ac,{}),"Уведомления")};return t.jsxs(q_,{onClick:n,children:[t.jsx(Nt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(vn,{})]})},K_=u.div`
    position: relative;
`,Dc=()=>{const{open:e}=ee(),{notifications:i}=rt.useLkNotifications(),n=()=>Re.close(),s=()=>{dt.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Lt.logout}),n()},o=()=>{Re.close(),e(t.jsx(ad,{}),"Что нового")},a=()=>{e(t.jsx(Ac,{}),"Уведомления"),Re.close()};return t.jsxs(t.Fragment,{children:[t.jsx(nk,{padding:"8px",size:"small"}),t.jsx(ve,{}),t.jsx(Oc,{type:"h-button"}),t.jsx(ve,{}),t.jsx(Z,{to:Us,children:t.jsx(_,{text:"Профиль",background:"var(--block)",icon:t.jsx(ja,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(K_,{children:[t.jsx(_,{onClick:a,icon:t.jsx(vn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(Nt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:je,children:t.jsx(_,{text:"Настройки",background:"var(--block)",icon:t.jsx(_a,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(_,{text:"Старый дизайн",icon:t.jsx(mn,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(ve,{}),t.jsx(_,{align:"left",icon:t.jsx(wu,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(ve,{}),t.jsx(_,{align:"left",icon:t.jsx(Ec,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},J_=u.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,X_=({showSearch:e=!1})=>{const{data:{user:i}}=he.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Re.open({e:s,height:143,content:t.jsx(Dc,{})})};return t.jsxs(J_,{children:[e&&t.jsx(Cc,{size:"icon"}),t.jsx(Y_,{}),t.jsx(Bt,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},Q_=u.header`
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
`,Z_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,ew=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,tw=u.div`
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
        max-width: ${Z_};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${X.isTablet} {
        max-width: ${ew};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${X.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,iw=()=>{const{pathname:e}=ei(),[i,n]=l.useState([e]),{action:s}=it();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},nw=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=it();return t.jsx(_,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Xi,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},sw=({headerVisible:e,currentPage:i})=>{const n=it(),s=iw(),o=e||!!(i!=null&&i.planeHeader),a=qr(i),r=(p=vi)=>()=>{at.changeOpen({isOpen:!1,currentPage:p.slice(1,p.length)}),n.push(p)},c=le.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(nw,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(_,{direction:"vertical",icon:t.jsx(Xi,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(_,{direction:"vertical",icon:t.jsx(Xi,{}),onClick:r(),background:"transparent"}):t.jsx(_,{icon:t.jsx(Xi,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},ow=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=kt(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=sw({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(Q_,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(tw,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs($,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(X_,{showSearch:!0})]})]})},aw=le.memo(ow),rw=u(Z)`
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
`,lw=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(J,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Re.open({e:c,height:143,content:t.jsx(Dc,{})})};return t.jsxs(rw,{to:Us,children:[t.jsx(_,{icon:t.jsx(Ta,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(Bt,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(W,{size:5,children:e})]})},cw=le.memo(lw),dw=["isCurrent","color"],pw=u(Z).withConfig({shouldForwardProp:e=>!dw.includes(e)})`
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
`,uw=u.div`
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
`,hw=u.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,gw=u.button`
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
`,fw=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(pw,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(Nt,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(Nt,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(yc,{route:e})]})},Nc=le.memo(fw),xw=()=>{const{isOpen:e}=Ve.useMenu();return t.jsx(t.Fragment,{children:t.jsx(_,{icon:t.jsx(et,{}),onClick:()=>at.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},mw=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(gw,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(mw);u.section`
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
`;const bw=()=>{const{leftsideBarRoutes:e}=Ve.useMenu(),i=ei();return e?t.jsx(hw,{children:Object.values(e).filter(n=>n!==void 0).map(n=>l.createElement(Nc,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs($,{d:"column",children:[t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(J,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(J,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},vw=le.memo(bw),yw=()=>{const{isOpen:e}=Ve.useMenu(),{width:i,height:n}=Tn(),{data:{user:s}}=he.useUser(),{visibleRoutes:o}=Ve.useMenu(),a=ei();return t.jsxs(uw,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:Hs,children:t.jsx(kn,{width:"165px"})}),t.jsx(cw,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx(Cc,{size:"small"}),t.jsx(vw,{})]}),t.jsx(Oc,{type:"toggle"}),i<1e3&&t.jsx(xw,{})]})},_w=u.div`
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
`,ww=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Xa.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{U.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),U.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(_w,{isOpen:e,isClickable:!!o,color:Dt[n].color,onClick:a,children:t.jsx(te,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>U.openPopUpMessage({isOpen:!1}),children:i})})},Rn=u.div`
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
`;u.div`
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
`;const jw=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Gs);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},kw=u.div`
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
`,Sw=u.div`
    padding-top: 30px;
`,Tw=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=jw(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return vr([27],o),ni(r,()=>{o()}),t.jsx(Rn,{isOpen:c,children:t.jsxs(kw,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(_,{onClick:s,icon:t.jsx(Ci,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(W,{size:3,align:"left",children:a}),t.jsx(_,{onClick:o,icon:t.jsx(et,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(Sw,{children:i})]})})},Ew=le.memo(Tw),$w=u.div`
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
`,Pw=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=ir.useConfirm(),o=l.useRef(null);ni(o,()=>dt.closeConfirm());const a=()=>{n(),dt.closeConfirm()},r=()=>{dt.closeConfirm()};return t.jsx(Rn,{isOpen:e,children:t.jsxs($w,{isOpen:e,ref:o,children:[t.jsx(W,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(Te,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(_,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(_,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},Cw=u.div`
    display: flex;
    align-items: ${({align:e})=>ns(e)};
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
`,Ow=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[p,h]=l.useState(i),{width:f}=Tn(),g=l.useRef(null),x=()=>{var b,v;g!=null&&g.current&&h(Math.round(((b=g.current)==null?void 0:b.scrollLeft)/((v=g.current)==null?void 0:v.clientWidth)))},m=b=>{var v;h(b),r==null||r((v=e[b])==null?void 0:v.id),g!=null&&g.current&&(g.current.scrollLeft=g.current.clientWidth*b)};return l.useEffect(()=>{m(p)},[i,f]),t.jsxs(Cw,{width:n,align:c,maxWidth:o,children:[t.jsx(Ps,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:p,setCurrentPage:m,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:g,onScroll:x,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ue,{text:"Нет данных"})},b.title))})]})},qs=Ow,pn=e=>{const i=ke(e),s=[{keys:["распознаван"],icon:t.jsx(ku,{})},{keys:["принт"],icon:t.jsx(Su,{})},{keys:["химич"],icon:t.jsx(Tu,{})},{keys:["сервер"],icon:t.jsx(Eu,{})},{keys:["игр"],icon:t.jsx($u,{})},{keys:["жизнед"],icon:t.jsx(Pu,{})},{keys:["web","веб"],icon:t.jsx(Cu,{})},{keys:["истор"],icon:t.jsx(Ou,{})},{keys:["информат"],icon:t.jsx(Au,{})},{keys:["информации"],icon:t.jsx(Ze,{})},{keys:["мобильн"],icon:t.jsx(Du,{})},{keys:["безопасн"],icon:t.jsx(Nu,{})},{keys:["автоматиз"],icon:t.jsx(Iu,{})},{keys:["линейн"],icon:t.jsx(Ru,{})},{keys:["обработ"],icon:t.jsx(Lu,{})},{keys:["презентац"],icon:t.jsx(zu,{})},{keys:["операционн"],icon:t.jsx($a,{})},{keys:["эконом"],icon:t.jsx(gt,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(Mu,{})},{keys:["анализ"],icon:t.jsx(Fu,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(Bu,{})},{keys:["сети","сетей"],icon:t.jsx(Hu,{})},{keys:["матем"],icon:t.jsx(Uu,{})},{keys:["вероятн"],icon:t.jsx(Wu,{})},{keys:["философ"],icon:t.jsx(Pa,{})},{keys:["данны"],icon:t.jsx(Vu,{})},{keys:["язык"],icon:t.jsx(Gu,{})},{keys:["спорт","физичес"],icon:t.jsx(qu,{})},{keys:["проектная"],icon:t.jsx(Qn,{})},{keys:["интеллект"],icon:t.jsx(Yu,{})},{keys:["научн"],icon:t.jsx(Ku,{})},{keys:["предприним"],icon:t.jsx(Ju,{})},{keys:["коммуникац"],icon:t.jsx(Xu,{})},{keys:["управлени"],icon:t.jsx(js,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(va,{})},{keys:["переработ"],icon:t.jsx(Qu,{})},{keys:["машин","инжен"],icon:t.jsx(Zu,{})},{keys:["проектир","расчет"],icon:t.jsx(eh,{})},{keys:["производ"],icon:t.jsx(ha,{})},{keys:["эколог"],icon:t.jsx(th,{})},{keys:["защит"],icon:t.jsx(ih,{})},{keys:["патент"],icon:t.jsx(nh,{})},{keys:["материал"],icon:t.jsx(sh,{})},{keys:["физик"],icon:t.jsx(oh,{})},{keys:["тайм"],icon:t.jsx(ah,{})},{keys:["практика"],icon:t.jsx(Ca,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(ju,{})},gs={"9:00 - 10:30":w.green,"10:40 - 12:10":w.lightGreen,"12:20 - 13:50":w.blue,"14:30 - 16:00":w.purple,"16:10 - 17:40":w.pink,"17:50 - 19:20":w.red,"18:20 - 19:40":w.orange,"19:30 - 21:00":w.orange,"19:50 - 21:10":w.orange},Ic=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},Aw=u.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,Ln=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},Dw=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=Ln(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Rc=(e,i,n)=>Dw(e)===Ln(i.startTime)&&n,$i=e=>e<=9?"0"+e:e,Nw=e=>`${$i(Math.floor(e/60))}:${$i(e%60)}`,Mo=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},Iw=u.div`
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
`,Rw=u.div`
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
`,Lw=u($)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${X.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,Fo=u.div`
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
`,zw=u(ne)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,Mw=u.div`
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
`,Fw=u.div`
    color: ${w.red.main};
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
`,Bw=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(Mo(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(Mo(new Date,s[0]*60,s[1]*60))},ks.minute),()=>clearInterval(c.current)),[e]),t.jsx(Mw,{currentTime:(a-i)*n,children:o&&t.jsx(Fw,{children:Nw(a)})})},Lc=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},Oe=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(Lw,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(Fo,{shortInfo:o,children:e}),t.jsx(zw,{width:"100%",className:"text",children:i}),t.jsx(Fo,{shortInfo:o,children:s})]}),Hw=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,Uw=u(Z)`
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
`,Ww=({groups:e})=>{const{close:i}=ee();return t.jsx(Hw,{children:e.map(n=>t.jsxs(Uw,{to:Fi(oi,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(Xt,{}),n]}),t.jsx(tt,{})]},n))})},Vw=({icon:e,background:i,noPadding:n=!1})=>t.jsx(Iw,{background:i,noPadding:n,children:t.jsxs(Rw,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),Gw=u.div`
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
`,qw=({subjectName:e,color:i,noPadding:n})=>{const s=pn(e),{theme:o}=_t(),a=o==="light"?i.dark3:i.light3,r=o==="light"?i.light3:i.dark3,c=o==="light"?i.light3:i.dark3;return t.jsxs(Gw,{noPadding:n,textColor:a,iconBackground:c,children:[t.jsx(Vw,{noPadding:n,icon:s,background:r}),t.jsx(wt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},Yw=rh`
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
}`,Jw=u.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${Kw}
`,Xw=u.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,Qw=u.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${X.isMobile} {
        font-size: 0.7rem;
    }
`,zc=({timeInterval:e,color:i,isCurrentEvent:n})=>{const{theme:s}=_t(),o=s==="light"?i.main:i.light2;return t.jsxs(Xw,{children:[t.jsx(Jw,{start:n,color:o}),e&&t.jsx(Qw,{children:e})]})},Zw=u.div`
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
`,ej=u($)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,tj=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:p,weekday:h,isNextEvent:f,isCurrentEvent:g,noPadding:x=!1}=e,m=(d==null?void 0:d.split(","))??[],{open:b}=ee(),v=()=>{m.length===1?b(t.jsx(jc,{group:m[0]})):b(t.jsx(Ww,{groups:m}),"Группы")},S=()=>{b(t.jsx(nj,{place:s,link:r,name:n}))},D=Lc(n);return t.jsxs(Zw,{children:[t.jsx(qw,{subjectName:n,color:p,noPadding:x}),t.jsxs(ej,{noPadding:x,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs($,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs($,{gap:"8px",children:[t.jsx(zc,{isCurrentEvent:g,color:p,timeInterval:i}),t.jsx(Mc,{timeLeft:Ln(i.split(" - ")[0],"minutes"),isNext:f,color:p,isCurrentEvent:g})]}),t.jsx(W,{size:3,align:"left",width:"fit-content",children:D.name})]}),t.jsx(ve,{margin:"0",width:"100%"}),t.jsx(Oe,{icon:t.jsx(ws,{}),text:t.jsx(Ie,{words:[h??"",a]})}),((r==null?void 0:r.length)||D.link)&&t.jsx("a",{href:r??D.link,target:"_blank",rel:"noreferrer",children:t.jsx(Oe,{icon:t.jsx(nn,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(Oe,{icon:t.jsx(Ca,{}),text:s}),!!c.length&&t.jsx(Oe,{icon:t.jsx(Zn,{}),text:t.jsx(Ie,{words:c})}),!!m.length&&t.jsx(Oe,{onClick:v,icon:t.jsx(js,{}),text:t.jsx(Ie,{words:m}),rightIcon:t.jsx(tt,{})}),t.jsx($,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(j=>t.jsx(In,{type:"staff",name:j},j))]})}),!r&&t.jsx(ve,{margin:"0",width:"100%"}),!r&&t.jsx(_,{text:"Посмотреть на карте",width:"100%",onClick:S})]})]})};u.span`
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
`;const ij=u.a`
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
`,Ki=({title:e,link:i,image:n})=>i?t.jsxs(ij,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(W,{size:3,children:e})]}):null,Bo=u.div`
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
`,nj=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(Bo,{children:t.jsx($,{jc:"center",children:t.jsx(qe,{})})}):t.jsx(Bo,{children:e==="Webex"?t.jsx(Ki,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(Ki,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(Ki,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(Ki,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},Ho=u.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Mc=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),{theme:a}=_t(),r=a==="light"?n.dark3:n.light3,c=a==="light"?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(Ho,{background:c,color:r,children:"Сейчас"}):t.jsxs(Ho,{background:c,color:r,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},sj=u.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,A$=()=>t.jsxs(sj,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(J,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(J,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(J,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(J,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),Fc="/assets/sleep-54d590c1.gif";var Bc=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Bc||{});const oj=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],D$=[...oj,{title:"Месяц",condition:!0}],Ct=Object.keys(Vt).reduce((e,i)=>(e[i]=[],e),{}),aj={schedule:{today:[],week:{...Ct},semestr:{data:{...Ct},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...Ct},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},rj=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},Pi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var un=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(un||{});const Hc=e=>{const[i,n]=e.split(" "),s=un[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},Uc=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=un[o],r=un[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},gi=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:p,groups:h})=>{const[f,g]=r.split(" - "),x=Pi(g)-Pi(f),[m,b]=d.split("-").map(D=>D.trim()),v=Hc(m),S=Uc(b,m);return{title:o,people:a,startTime:f,duration:x,startDate:v,endDate:S,placeIcon:t.jsx(lh,{}),dateInterval:d,color:gs[r],place:s,link:c,groups:h,weekday:i,rooms:p,icon:pn(o)}}):[],lj=e=>new Date(e.setHours(0,0,0,0)),Uo=(e,i)=>(e??[]).filter(n=>{const s=lj(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=Hc(o),c=Uc(a,o);return s>=r&&s<=(c??r)}),Wc=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),fs=e=>e instanceof Date&&isFinite(+e),cj=e=>{const i={...Ct},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!fs(n)||!fs(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=Wc(a);if(r==="sunday")continue;i[r]=[...i[r],...gi(e[o].lessons,Vt[r].short)]}return{schedule:i,startDate:n,endDate:s}},Vc=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),Gc=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const f=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return U.evokePopUpMessage({message:f,type:"failure",time:ks.ten_seconds}),{schedule:aj.schedule,errorInData:f}}const o=new Date;let a=rj(o);o.getDay()===0&&(a=Vc(o,1));const r={...Ct},c={...Ct};for(const f in e)if(f!=="Sunday"){const g=f.toLocaleLowerCase(),m=e[f];"lessons"in m?(r[g]=gi(Uo(m.lessons,a),Vt[g].short),c[g]=gi(m.lessons,Vt[g].short)):(r[g]=gi(Uo(m,a),Vt[g].short),c[g]=gi(m,Vt[g].short)),n=new Date(Math.min(...c[g].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[g].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),p=r[d],h=cj(i);return{schedule:{today:p,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},qc=async e=>{const i=await Bh(e),n=await Uh();return Gc(i.data,n.data)},Yc=async e=>{const i=await Hh(e),n=await Wh(e);return Gc(i.data,n.data)},Wo={data:{schedule:null,externalSchedule:null,view:Bc.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},dj=()=>q(de),It=L(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await Yc(n);if(i&&s==="stud")return await qc(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),ai=L(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await qc(e)}catch(i){throw new Error(i.message)}}),ri=L(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await Yc(e)}catch(i){throw new Error(i.message)}}),pj=k(),Kc=k(),Jc=k(),Xc=k(),Qc=k(),Zc=k(),ed=k(),de=V(Wo).on(It,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(It.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(Kc,(e,i)=>({...e,data:{...e.data,view:i}})).on(Jc,(e,i)=>({...e,currentChosenDay:i.day})).on(Xc,()=>({...Wo}));P({clock:It.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(Ct)}}),target:de});P({clock:Qc,source:de,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:de});P({clock:Zc,source:de,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:de});P({clock:ri.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});P({clock:ai.doneData,source:de,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:de});P({clock:[ai,ri,It],source:de,fn:e=>({...e,loading:!0}),target:de});P({clock:[ai,ri],source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:de});P({clock:[ai.doneData,ri.doneData,It.doneData],source:de,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:de});P({clock:[ai.failData,ri.failData,It.failData],source:de,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:de});P({clock:ed,source:de,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:de});const Ys={useSchedule:dj},uj={changeCurrentModule:pj,changeView:Kc,changeCurrentChosenDay:Jc,clearStore:Xc,resetExternalSchedule:ed,setSearchValue:Zc,setFilter:Qc},hj={getScheduleFx:It,getGroupScheduleFx:ai,getTeacherScheduleFx:ri},gj=Object.freeze(Object.defineProperty({__proto__:null,effects:hj,events:uj,selectors:Ys},Symbol.toStringTag,{value:"Module"})),fj=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${$i(Math.floor(o/60))}:${$i(o%60)}`},td=(e,i)=>e?`${e} - ${fj(e,i)}`:"9:00",xs=e=>!e||!fs(e)?0:e.getHours()*60+e.getMinutes(),Ks=(e,i)=>Pi(e.startTime)<=xs(new Date)&&xs(new Date)<=Pi(e.startTime)+e.duration&&i,id=()=>{const{open:e}=ee();return n=>{const s=td(n.startTime,n.duration);e(t.jsx(tj,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:Ks(n,!0),noPadding:!0,...n}))}},Vo={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},xj=()=>{const{currentDevice:e}=kt(),[i,n]=l.useState(Vo[e]);return l.useEffect(()=>{n(Vo[e])},[e]),i},mj=u.div`
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
`,bj=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=xj(),o=id(),a=[9,22];return e!=null&&e.length?t.jsx(mj,{children:t.jsx(od,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ue,{text:"В этот день пар нет",image:Fc})},nd=()=>{const{data:{schedule:e}}=Ys.useSchedule(),{open:i}=ee(),n=Vc(new Date,1),s=cl(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=Wc(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(bj,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(_,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},vj=u.div`
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
`,N$=({errorInData:e})=>t.jsxs(vj,{children:[t.jsx("img",{src:Fc,alt:"дед наелся и спит"}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(nd,{})]});u.div`
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
`;const yj=(e,i,n)=>i?e?1:.8:n?1:0,_j=e=>e?1:.9;u.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>yj(e,i,n)};
    transform: scale(${({isVisible:e})=>_j(e)});
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
`;const wj=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,I$=()=>t.jsxs(wj,{children:[t.jsx(fr,{size:"38px"}),t.jsx(W,{size:4,children:"Учебный день завершился"}),t.jsx(nd,{})]});u.div`
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
`;u(Z)`
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
`;const jj=e=>{const[i,n]=e.split(":");return+i*60+ +n},sd=(e,i,n)=>e?(jj(e)-i)*n:0,kj=u.div`
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
`;const Sj=u($)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${X.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,Tj=u.span`
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
`,Ej=u.div`
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
`,$j=u($)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,Pj=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:p,onClick:h,link:f,rooms:g,dateInterval:x,leftShift:m,quantity:b,groups:v,isCurrentEvent:S=!1,nameInOneRow:D=!0,isNextEvent:j=!1,listView:T=!1,shortInfo:N=!1}=e,{theme:z}=_t(),{isMobile:I}=kt(),se=z==="light"?d.dark3:d.light3,H=z==="light"?d.transparent1:d.transparent2,Y=()=>h(e),ce=(I||b>1)&&N,Ce=I&&b>=2&&N,Ee=r==null?void 0:r.map(li=>{var Ui,Wi;const Be=li.split(" ");return`${Be[0]??""} ${((Ui=Be[1])==null?void 0:Ui[0])??""}.${((Wi=Be[2])==null?void 0:Wi[0])??""}.`}),Ke=sd(o,c,p),$e=Lc(i),me=Ce?i.split(" ").map(li=>li[0].toUpperCase()):hs($e.name,N?ce?43:35:D?300:64),Ht=(v==null?void 0:v.split(","))??[];return t.jsxs(kj,{background:H,textColor:se,listView:T,leftShift:100*m,quantity:100/b,duration:n,scale:p,top:Ke,onClick:Y,shortInfo:N,children:[t.jsx(Ej,{children:s}),t.jsx($,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(Sj,{scale:p,d:"column",ai:"flex-start",shortInfo:N,children:[t.jsxs($,{d:"column",gap:"2px",children:[!N&&t.jsxs($,{gap:"8px",children:[t.jsx(zc,{timeInterval:td(o,n),color:d,isCurrentEvent:S}),t.jsx(Mc,{timeLeft:Ln(o,"minutes"),isNext:j,color:d,isCurrentEvent:S}),!!(g!=null&&g.length)&&t.jsx(Oe,{shortInfo:N,icon:I&&b>1?void 0:t.jsx(Zn,{}),text:t.jsx(Ie,{words:g})}),(!!f||$e.link)&&t.jsx("a",{href:f??$e.link,target:"_blank",rel:"noreferrer",children:t.jsx(Oe,{shortInfo:N,icon:t.jsx(nn,{}),text:f?a:"Cсылка"})}),!!Ht.length&&t.jsx(Oe,{icon:t.jsx(js,{}),text:t.jsx(Ie,{words:Ht})})]}),t.jsx(Tj,{listView:T,nameInOneRow:D,scale:p,shortInfo:N,children:me})]}),!!r.length&&!ce&&t.jsx(Oe,{shortInfo:N,text:t.jsx(Ie,{words:N?[Ee[0]]:Ee}),icon:t.jsx(ch,{})}),!!(g!=null&&g.length)&&N&&!ce&&t.jsx(Oe,{shortInfo:N,icon:t.jsx(Zn,{}),text:t.jsx(Ie,{words:g})}),!!f&&N&&!ce&&t.jsx("a",{href:f,target:"_blank",rel:"noreferrer",children:t.jsx(Oe,{shortInfo:N,icon:t.jsx(nn,{}),text:a})}),!!x&&!ce&&t.jsx($,{gap:"5px",children:t.jsx(Oe,{shortInfo:N,icon:t.jsx(ws,{}),text:x})})]})})]})},Cj=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},Oj=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:p})=>{const h=Cj(e),f=p??new Date().getDay()===o,g=d!==void 0?d+1===o:void 0;return t.jsxs($j,{h:"100%",d:"column",children:[f&&t.jsx(Bw,{isVisible:g,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((x,m)=>h[x].map((b,v)=>l.createElement(Pj,{leftShift:v,quantity:h[x].length,scale:n,isCurrentEvent:Ks(b,f),isNextEvent:Rc(e,b,f),...b,onClick:c,shift:i,key:b.startTime+b.title+m+v,shortInfo:s})))]})},Aj=u($)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,Dj=u.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,Nj=u.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,Ij=u(ne)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${X.isMobile} {
        font-size: 0.65rem;
    }
`,Rj=Array(24).fill(0).map((e,i)=>`${$i(i)}:00`),Lj=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):Rj.slice(e[0],e[1]+1);return t.jsx(Aj,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(Dj,{children:[t.jsx(Ij,{children:o}),t.jsx(Nj,{})]},o))})},od=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Ic({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var p;return sd((p=i==null?void 0:i[0])==null?void 0:p.startTime,o,n)}});return t.jsxs(Aw,{className:"calendar-wrapper",ref:d,children:[t.jsx(Lj,{interval:e,scale:n}),t.jsx(Oj,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},zj=u.div`
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
`,Mj=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=ee();return o?t.jsxs(zj,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(_,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},Fj=u.div`
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
`,Bj=u.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Hj=u(ne)`
    margin-bottom: 20px;
`,Uj=({image:e,list:i,text:n})=>{const{isMobile:s}=kt();return t.jsxs(Fj,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Hj,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(Bj,{children:i==null?void 0:i.map(o=>l.createElement(Mj,{...o,key:o.title}))})]})},Wj=u.div`
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
`,Vj=u.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,Gj=()=>t.jsx(Vj,{children:t.jsx(od,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:gs["16:10 - 17:40"],icon:pn("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:gs["17:50 - 19:20"],icon:pn("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),ad=()=>{const[e,i]=l.useState(0),{close:n}=ee(),s=[t.jsx(Uj,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(Gj,{})}},"schedule")];return t.jsxs(Wj,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(Tr,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(_,{onClick:()=>i(o=>mt(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(_,{onClick:n,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(_,{onClick:()=>i(o=>mt(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},qj=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return Pi(i.startTime)+i.duration<xs(new Date)}},Yj=()=>{var p,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=Ys.useSchedule(),o=id(),a=((p=e==null?void 0:e.today)==null?void 0:p.length)===0||!(e!=null&&e.today),r=qj(e==null?void 0:e.today),c=Ic({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:f=>{var g,x;return f.clientHeight*(r?((g=e==null?void 0:e.today)==null?void 0:g.length)??0:((x=e==null?void 0:e.today)==null?void 0:x.findIndex(m=>Ks(m,!0)||Rc(e.today,m,!0)))??0)}}),d=()=>U.evokePopUpMessage({message:n??"",type:"failure",time:ks.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},Go=u(jn)`
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
`,pi=()=>t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(J,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(J,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),Kj=()=>{const{allRoutes:e}=Ve.useMenu(),{data:{user:i}}=he.useUser(),{hasNoSchedule:n,loading:s}=Yj(),o=ei();if(!e||!i||s)return t.jsxs(Go,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(pi,{}),t.jsx(pi,{}),t.jsx(pi,{}),t.jsx(pi,{}),t.jsx(pi,{})]});const a=(i==null?void 0:i.user_status)==="stud"?yT:n?wT:_T;return t.jsx(Go,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Nc,{...e[r],isCurrent:c},r)})})},Jj=(e,i,n)=>({isOpen:i,message:e,position:n}),qo={hints:[]},Xj=()=>q(Qj),rd=k(),ld=k(),cd=k(),Qj=V(qo).on(rd,(e,{message:i,position:n})=>({hints:[...e.hints,Jj(i,e.hints.length===0,n)]})).on(ld,e=>({hints:e.hints.splice(1,e.hints.length)})).on(cd,()=>({...qo})),Zj={useHint:Xj},ek={evoke:rd,close:ld,clearStore:cd},tk=u.div`
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
`,ik=()=>{const{hints:e}=Zj.useHint(),i=e[0];return i?t.jsx(tk,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(te,{type:"hint",title:i.message,onClose:()=>ek.close(),width:"100%",icon:null})}):null};u.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const nk=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=he.useUser();return ee(),t.jsxs(Te,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ne,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(In,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function sk(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const R$=u.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>sk(e)};
        opacity: 1;
    }
`,L$=u.div`
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
`,dd=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>ke(a.title).includes(ke(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),ok=()=>{const e=O?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Ed,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Yd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:$d,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Pd,title:"Справка-вызов"},{link:Bd,title:"Заявление на пересдачу для получения диплома с отличием"},{link:qd,title:"Запрос на изменение персональных данных"},{link:Fd,title:"Запрос на восстановление магнитного пропуска"},{link:jd,title:"Уточнение паспортных данных"},{link:Kd,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Jd,title:"Предоставление каникул в связи с окончанием университета"},{link:Xd,title:"Предоставление академического отпуска"},{link:Qd,title:"Выход из академического отпуска"},{link:Zd,title:"Отчисление по инициативе обучающегося"},{link:ep,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Cd,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Od,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Ad,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Nd,title:"Предоставление права проживания льготной категории граждан"},{link:Dd,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Id,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Ld,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:zd,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Rd,title:"Расторжение договора найма"},{link:Md,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:Ia,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Wd,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:Vd,title:"Заявка на материальную помощь"},{link:Td,title:"Оформить социальную стипендию"},{link:Gd,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:O,links:[{link:Hd,title:"Отправить документы воинского учета"},{link:Ud,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:O,links:[{link:ms,title:"Оформить дополнительное соглашение к договору об обучении"},{link:ms,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Eh,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:kd,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:O,links:[{link:Sd,title:"Трудоустройство студентов"}]}]},ak=e=>[{title:"Цифровые сервисы",links:[{link:Ol,title:"Справка с места работы"},{link:Al,title:"Справка с места работы для предоставления в визовый центр"},{link:Nl,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Телефонный справочник",links:[...ck(e),{link:Rl,title:"Запрос на изменение внутреннего телефона"},{link:Ll,title:"Запрос на изменение корпоративной электронной почты"}]},...rk()],rk=()=>[{title:"Цифровые сервисы (в разработке)",disabled:O,links:[{link:Dl,title:"Справка о стаже работы"},{link:zl,title:"Копия трудовой книжки"},{link:Ml,title:"Копии документов из личного дела"},{link:Fl,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:O,title:"Общее",links:[{link:_l,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:O,links:[{link:wl,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",links:[{link:Sl,title:"Получение нового компьютерного оборудования"},{link:Tl,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:El,title:"Обслуживание принтеров, МФУ"},{link:$l,title:"Вопрос по СЭД Directum и 1С"},{link:Pl,title:"Вопрос по Личному кабинету"},{link:Cl,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:O,links:[{link:Wl,title:"Справка по форме 2-НДФЛ"},{link:Vl,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Bl,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Gl,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:O,links:[{link:Yl,title:"Предоставление права проживания в жилом помещении"},{link:Kl,title:"Временное размещение гостей в студгородке"},{link:Jl,title:"Проход гостей на территорию студенческого городка"},{link:Xl,title:"Переселение"},{link:Ql,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:O,links:[{link:Zl,title:"Выдача пропуска (повторная)"},{link:ec,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:O,links:[{link:tc,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:O,links:[{link:kl,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:O,links:[{link:Ul,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:O,links:[{link:ic,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:nc,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:O,links:[{link:Hl,title:"Произвольный запрос"},{link:Ia,title:"Вступить в Профсоюз",isExternalLink:!0}]}],lk=()=>[{title:"",links:[{link:ql,title:"Заявление на трудоустройство по совместительству"},{link:ls,title:"Заявление на увольнение"},{link:ps,title:"Заявление о привлечении к работе в выходной день"},{link:cs,title:"Заявление о предоставлении отпуска"},{link:ds,title:"Заявление о переносе отпуска"},{link:us,title:"Заявление о диспансеризации"},{link:tn,title:"Заявление на перевод"}]}],ck=e=>e.head_div&&e.head_div.length>0?[{link:Il,title:"Внесение изменений данных подразделения в телефонном справочнике"}]:[],dk=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),pk=u.div`
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
`,z$=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=ee(),{data:{user:s}}=he.useUser(),o=e&&s?ak(s):ok(),[a,r]=l.useState(""),[c,d]=l.useState(o);return t.jsxs(pk,{children:[t.jsx(kr,{whereToSearch:o,searchEngine:dd,setResult:d,placeholder:"Поиск заявок",setExternalValue:r}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(c??o).map(p=>{if(!p.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:p.title}),t.jsx("div",{className:"links",children:p.links.map((h,f)=>{if(!(h.disabled||!dk(i,h.exceptionalFormEducationList)))return h.isExternalLink?t.jsx("a",{href:h.link,target:h.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:h.title},h.link+f):t.jsx(Z,{to:h.link,onClick:n,children:h.title},h.link+f)})})]},p.title)}),!(c!=null&&c.length)&&!!a.length&&t.jsx(ue,{text:`По запросу ${a} ничего не найдено`})]})})]})},uk=u.div`
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
`,hk=u.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,M$=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=ee(),s=lk(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(Fe,{load:()=>Le.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(jt,{children:[t.jsx(te,{type:"info",title:"Информация",icon:t.jsx(Ze,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(uk,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(kr,{whereToSearch:s,searchEngine:dd,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(hk,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ue,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},gk=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let p=0;p<d.files.length;p++)c[(d==null?void 0:d.fieldName)+`[${p}]`]=d.files[p];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),Yo={isOpen:!1,pages:[],currentPage:0},fk=()=>q(xk),pd=k(),ud=k(),hd=k(),gd=k(),xk=V(Yo).on(pd,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(ud,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(hd,(e,{value:i})=>({...e,currentPage:i})).on(gd,()=>({...Yo})),Js={useStory:fk},Et={open:pd,close:ud,clearStore:gd,changeCurrentPage:hd};u(st)`
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
`;const mk=u.div`
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
`,bk=u.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Bt({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:p,icon:h,avatarModal:f,onClick:g,borderRadius:x,background:m}){const[b,v]=l.useState(!0),S=ss(i)[0]+(ss(i)[1]??""),{open:D}=ee(),j=T=>{f?D(t.jsx(Bt,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):g==null||g(T)};return t.jsxs(mk,{selected:e,width:s,height:o,marginRight:a,background:m??Ne(i),boxShadow:d,border:p,onClick:j,borderRadius:x,children:[n&&b?t.jsx(bk,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:S}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(We,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(Nt,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const vk=u.div`
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
`,yk=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:p,isMe:h=!1,noInfo:f=!1})=>{const g=f?"140px":"110px",x=ml(h,n,s,o);return t.jsxs(vk,{children:[t.jsx(hl,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Bt,{avatarModal:!0,border:!0,name:i,avatar:e,width:g,height:g,marginRight:"0"}),!f&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ne,{fontSize:"0.9rem",children:t.jsx(Ie,{words:x})}),t.jsx(Tt,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(Tt,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(Tt,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(Tt,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(Tt,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},_k=u.div`
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
`,fd=e=>{const{children:i}=e;return t.jsxs(_k,{children:[t.jsx(yk,{...e}),t.jsx("div",{className:"buttons",children:i})]})},wk=u.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,jk=()=>t.jsxs(wk,{children:[t.jsx(J,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(J,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(J,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),xd=e=>{if(e)return()=>{dt.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(M.Token,e),location.reload()}})}},kk=e=>{const{close:i}=ee(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Ne(s,"main")}, ${Ne(s,"dark1")})`;return t.jsxs(fd,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:Fi(oi,{page:"current",filter:o}),children:t.jsx(_,{icon:t.jsx(vt,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(_,{icon:t.jsx(bn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:xd(n)})]})},Sk=e=>{const{close:i}=ee(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Ne(s,"dark1")}, ${Ne(s,"main")})`;return t.jsxs(fd,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:Fi(oi,{page:"current",filter:s}),children:t.jsx(_,{icon:t.jsx(vt,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(_,{icon:t.jsx(bn,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(_,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:xd(n)})]})},Tk=({name:e,...i})=>{const{data:{user:n}}=he.useUser(),s=(n==null?void 0:n.user_status)==="staff",{subdivisions:o}=Me({subdivisions:Xe.subdivisions});if(!s||!o)return t.jsx(Sk,{name:e,...i});const a=zs(o,e)[0];return t.jsx(Gt,{title:a.fio,info:en(a),avatar:a.avatar,isEmployee:!0})};u.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const Ek=u.div`
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
`,Xs=Ek,$k=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,p]=l.useState(r===void 0),[h,f]=l.useState(!a),[g,x]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!!j.find(T=>!T.value&&T.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(T=>!T.value&&T.required))&&!n.find(j=>!!j.find(T=>{var N;return T.value.id==="not-chosen"&&!!((N=T.items)!=null&&N.length)}))?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var T;return j.value===null&&!!((T=j.items)!=null&&T.length)})?(s(j=>(j.confirmed=!0,{...j})),p(!1),f(!1)):U.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},b=()=>{s(j=>{const T=j.default[0].map(N=>({fieldName:N.fieldName??"",title:N.title,value:N.type==="select"&&(N!=null&&N.items)?null:"",type:N.type,items:N.items,width:N.width,required:N.required}));return{...j,data:[...j.data,T]}})},v=j=>{s(T=>{const N=T.data.filter((z,I)=>j!==I);return{...T,data:N}})},S=j=>{s(T=>(T.documents&&(T.documents.files=[...j]),{...T}))},D=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{f(!g&&o?!1:a?!a:!!c)},[g,a]),{openArea:h,changeInputArea:d,included:g,setOpenArea:f,setIncluded:x,setChangeInputArea:p,handleRemove:v,handleAddNew:b,handleLoadFiles:S,handleConfirm:m,handleCheckbox:D}},Pk=u.div`
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
`,Ck=u.div``,Ok=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(Ck,{children:[t.jsx(W,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:p},h)=>t.jsx(Ax,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:f=>s(f,h)},docVisible:d==="straight"?o:!o},a))]}),Ak=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(W,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(Te,{children:[!a&&t.jsx(We,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(We,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),Dk=u.div`
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
`,Nk=({title:e,value:i,visible:n})=>n?t.jsxs(Dk,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,Ik=u.div`
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
`,Rk=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(Ik,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(_,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(dh,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Pa,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,Lk=u.div`
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
`,zk=({title:e,visible:i})=>i?t.jsx(Lk,{children:t.jsx("span",{className:"title",children:e})}):null,Mk=u.div`
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
`,Fk=u.ul`
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
`,Bk=u.li`
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
`,Hk=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:p=!0,inputAppearance:h=!0,suggestions:f})=>{const[g,x]=l.useState([]),[m,b]=l.useState(!0);return l.useEffect(()=>{if(e){const v=f.filter(S=>S.toLowerCase().includes(e.toLowerCase()));x(v)}else x([])},[e,f]),t.jsxs(Mk,{leftIcon:!!n,isActive:p,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(W,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:v=>{i(v.target.value),b(!0)},placeholder:c}),g.length>0&&t.jsx(Fk,{width:"100%",isOpen:m,className:m?"open":"close",itemsAmount:g.length,title:s,children:g.map((v,S)=>t.jsx(Bk,{isSelected:!1,onClick:()=>{i(v),x([]),b(!1)},children:v},S))})]})]})},Uk=u.div`
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
`,Wk=({title:e,visible:i})=>i?t.jsx(Uk,{children:t.jsx("span",{className:"title",children:e})}):null,Ko=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:p,documents:h,changeInputArea:f,setData:g,mask:x,editable:m,placeholder:b,autocomplete:v,isSpecificRadio:S,specialType:D,specialFieldsNameConfig:j,minValueInput:T,maxValueInput:N,minValueLength:z,maxValueLength:I,diff:se,visible:H=!0,onChange:Y,onKeyPress:ce,onBlur:Ce,onKeyDown:Ee,onKeyUp:Ke,onFocus:$e}=e,me=m??(f&&!h),[Ht,li]=l.useState(!0),Be=(G,pe,Ut)=>{Y==null||Y(G),g(Se=>(Array.isArray(Se.data[0])?Se.data[pe][Ut??0].value=G:Se.data[pe].type==="checkbox-docs"?Se.data[pe].items[Ut??0].value=!!G:Se.data[pe].value=G,{...Se}))},eo=(G,pe,Ut)=>{Y==null||Y(G),g(Se=>(Array.isArray(Se.data[0])?Se.data[pe][Ut??0].value=G:Se.data[pe].value=G,{...Se}))},Ui=(G,pe,Ut)=>{g(Se=>(Se.data[pe].items[Ut??0].files=G,{...Se}))},Wi=G=>{Y==null||Y(G),g(pe=>(pe.data[o].value=G,{...pe}))},zp=G=>{Y==null||Y(G),ce==null||ce(G),Ce==null||Ce(G),Ee==null||Ee(G),Ke==null||Ke(G),$e==null||$e(G),g(pe=>(pe.data[o].value=G,{...pe}))};return j&&D&&!Object.values(j).includes(D)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(We,{text:p,isActive:me,checked:i,setChecked:G=>Be(G,o,a)}):r==="hr-checkbox"?t.jsx(Rk,{text:p,isActive:me,checked:i,setChecked:G=>Be(G,o,a)}):r==="auto-complete-input"?t.jsx(Hk,{title:p,suggestions:c??[],required:n,value:i,placeholder:b??p,setValue:G=>Be(G,o,a)}):r==="textarea"?t.jsx(Cf,{value:i,title:p,setValue:G=>Be(G,o,a),isActive:me,textAreaAppearance:me,placeholder:b??p,required:n,width:s}):r==="checkbox-docs"?t.jsx(Ok,{title:p,items:d,setChecked:(G,pe)=>Be(!G,o,pe),setFiles:(G,pe)=>Ui(G,o,pe)}):r==="date-interval"?H?t.jsx(Pr,{title:p,required:n,dates:i,setDates:G=>zp(G),valid:Ht,setValid:li,minValue:T,diff:se}):null:r==="simple-text"?t.jsx(Nk,{title:p,value:i,visible:H}):r==="text-warning"?t.jsx(Wk,{title:p,visible:H}):r==="text-header"?t.jsx(zk,{title:p,visible:H}):r==="radio"?t.jsx(Ak,{buttons:d,title:p,required:n,current:i,setCurrent:Wi,isSpecificRadio:S}):H?t.jsx(xt,{value:i,title:p,minValue:T,maxValue:N,minLength:z,maxLength:I,setValue:G=>Be(G,o,a),type:r,isActive:me,inputAppearance:me,placeholder:b??p,required:n,mask:x,width:s,autocomplete:v}):null:H?t.jsx(Nr,{items:d,setSelected:G=>eo(G,o,a),selected:i,isActive:me,title:p,width:s,multiple:r==="multiselect",required:n}):null},Vk=u.div`
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
`,Gk=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(Vk,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(W,{size:3,align:"left",icon:s!==void 0?s?t.jsx(ga,{}):t.jsx(fa,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(We,{checked:i,setChecked:a})]}),t.jsx(_,{icon:t.jsx(Ge,{}),onClick:()=>null,background:"transparent",flipped:c})]}),qk=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(_,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(io,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Сохранить",icon:t.jsx(ph,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(Ot,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:o,text:"Подтвердить",icon:t.jsx(uh,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(_,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(io,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),Yk=e=>e.confirmed===void 0?null:t.jsx(Te,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(qk,{...e,confirmed:e.confirmed})}),$t=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:p=!1,divider:h,collapsed:f,links:g,specialFieldsNameConfig:x,defaultOpenArea:m=!0})=>{const{openArea:b,changeInputArea:v,included:S,setOpenArea:D,setIncluded:j,setChangeInputArea:T,handleRemove:N,handleAddNew:z,handleLoadFiles:I,handleConfirm:se,handleCheckbox:H}=$k({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:f,confirmed:c,defaultOpenArea:m});return t.jsxs(t.Fragment,{children:[t.jsxs(Pk,{openArea:b,children:[t.jsx(Gk,{title:e,included:S,optional:d,confirmed:c,setOpenArea:D,setIncluded:j,collapsed:f}),t.jsxs("div",{className:"inputs",children:[t.jsx(te,{type:"alert",visible:!!n,icon:t.jsx(ki,{}),children:n}),t.jsx(te,{type:"info",visible:!!i&&(v||c===void 0),title:"Как заполнить",icon:t.jsx(Ze,{}),children:i}),Array.isArray(s[0])?s.map((Y,ce)=>t.jsxs("div",{className:"data-line",children:[Y.map((Ce,Ee)=>t.jsx(Ko,{documents:a,changeInputArea:v&&!(o!=null&&o.value),setData:r,indexI:ce,indexJ:Ee,specialFieldsNameConfig:x,...Ce},Ee)),v&&p&&t.jsx(_,{icon:t.jsx(hh,{}),textColor:w.red.main,onClick:()=>N(ce),background:"transparent",isActive:!(o!=null&&o.value)})]},ce)):s.map((Y,ce)=>t.jsx(Ko,{documents:a,changeInputArea:v&&!(o!=null&&o.value),setData:r,indexI:ce,specialFieldsNameConfig:x,...Y},ce)),p&&v&&t.jsx(_,{icon:t.jsx(gh,{}),text:"Добавить",onClick:z,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&v&&a.visible!==!1&&t.jsx($r,{files:a.files,setFiles:Y=>I(Y),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(g==null?void 0:g.length)&&g.map(Y=>l.createElement(Yf,{...Y,key:Y.title})),t.jsx(We,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||v,checked:(o==null?void 0:o.value)??!1,setChecked:H}),t.jsx(Yk,{confirmed:c,changeInputArea:v,setData:r,setChangeInputArea:T,handleConfirm:se})]})]}),h&&t.jsx(ve,{})]})},Kk=u.div`
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
`,Jk=u.div`
    display: flex;
    margin-bottom: -20px;
`,Xk=u.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,md=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:ge(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Jk,{children:e.map((r,c)=>t.jsxs(Xk,{lastElement:c===e.length-1,children:[t.jsx(Kk,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(vf,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement($t,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Qk=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Zk=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),eS=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),zn=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return gk(p);if(Array.isArray(p.data[0])){const h=p.data.map(g=>Object.assign({},...g==null?void 0:g.map(x=>Jo(x)))),f={};return f[e]=JSON.stringify(h),f}else return p.data.map(h=>Jo(h))}).flat(),r=i.map(p=>{var f,g;const h={};if((f=p.documents)!=null&&f.fieldName)for(let x=0;x<p.documents.files.length;x++)h[((g=p.documents)==null?void 0:g.fieldName)+`[${x}]`]=p.documents.files[x];return h}),c=i.map(p=>{var f,g;const h={};return(f=p.optionalCheckbox)!=null&&f.fieldName&&(h[(g=p.optionalCheckbox)==null?void 0:g.fieldName]=p.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await Le.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},Jo=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=tS(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},tS=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Mn=u.div`
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
`;var Hi=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Hi||{}),iS=(e=>(e.EDIT_PHONEBOOK_SUBDIVISION="edit-phonebook-subdivision",e.EDIT_PHONEBOOK_INNER_PHONE="edit-phonebook-inner-phone",e.EDIT_PHONEBOOK_EMAIL="edit-phonebook-email",e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))(iS||{});const nS=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],sS=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],oS=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:sS},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:nS}]}},aS=()=>{var H;const[e,i]=l.useState(null),[n,s]=l.useState(Vi.kvdCert),[o,a]=l.useState(Vi.fluorographyCert),[r,c]=l.useState(Vi.vichRwCert),[d,p]=l.useState(Vi.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:f}}=he.useUser(),[g,x]=l.useState(!1),[m,b]=l.useState(!1),[v,S]=l.useState(null),[D,j]=l.useState(null),[T,N]=l.useState(null),z=g??!1;if((f==null?void 0:f.educationForm)!=="Недоступен")return t.jsx(ue,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const I=!!e&&!!D&&!!v&&!!T;if(l.useEffect(()=>{h&&(i(oS(h)),S(Zk()),j(eS()),N(Qk()))},[h]),!I)return null;const se=[[{dataForm:e,setDataForm:i}],[{dataForm:D,setDataForm:j}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}]];return t.jsx(Mn,{isDone:z,children:t.jsxs(Sn,{children:[t.jsx(W,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(md,{stagesConfig:se}),t.jsx(ft,{text:"Отправить",action:()=>zn(Hi.USG_GETHOSTEL_OOZ,[e,D,v,T,n,o,r,d],b,x),isLoading:m,completed:g,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:z,isActive:(((H=e.optionalCheckbox)==null?void 0:H.value)??!0)&&ge(e)&&ge(o)&&ge(r)&&ge(d)&&ge(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},rS=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],lS=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],cS=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],dS=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],pS=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],uS=[{id:0,title:"1"},{id:1,title:"2"}],hS=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],gS=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],fS=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],xS=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),mS=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:rS,width:"100%",editable:!0,required:!0}]}),bS=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:lS,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),vS=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:cS,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:dS,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:pS,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:uS,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:hS,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),yS=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:gS,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Xo=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:fS,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},bd=()=>{var N;const[e,i]=l.useState(null),[n,s]=l.useState(mS()),[o,a]=l.useState(bS()),[r,c]=l.useState(vS()),[d,p]=l.useState(yS()),[h,f]=l.useState(Xo(null)),[g,x]=l.useState(!1),[m,b]=l.useState(!1),[v,S]=l.useState(!1),{data:{dataUserApplication:D}}=ye.useApplications();l.useEffect(()=>{D&&i(xS(D))},[D]);const j=l.useMemo(()=>{var z,I;return((I=(z=h==null?void 0:h.data[0])==null?void 0:z.value)==null?void 0:I.id)!==0},[(N=h==null?void 0:h.data[0])==null?void 0:N.value]);if(l.useEffect(()=>{h&&f(Xo(h.data))},[j]),!e)return null;const T=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}],[{dataForm:h,setDataForm:f}]];return t.jsx(Mn,{isDone:!1,children:t.jsxs(Sn,{children:[t.jsx(W,{size:3,align:"left",children:"Воинский учет"}),t.jsx(md,{stagesConfig:T}),t.jsx(We,{checked:g,setChecked:x,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(ft,{text:m?"Отправлено":"Отправить",action:()=>zn(Hi.MIL_REG,[e,n,o,r,d,h],S,b),isLoading:v,completed:m,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:m,isActive:!!g&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&ge(e)&&ge(n)&&ge(r)&&ge(d)&&ge(h)&&ge(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},_S=Object.freeze(Object.defineProperty({__proto__:null,default:bd},Symbol.toStringTag,{value:"Module"})),wS=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],jS=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:wS},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),kS=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},vd=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:p}}=ye.useApplications();return l.useEffect(()=>{p&&i(jS(p))},[p]),l.useEffect(()=>{e&&p&&c(kS(e.data))},[e]),t.jsx(Mn,{isDone:d,children:!!e&&!!i&&t.jsxs(Sn,{children:[t.jsx($t,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(ft,{text:d?"Отправлено":"Отправить",action:()=>zn(Hi.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:ge(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},SS=Object.freeze(Object.defineProperty({__proto__:null,default:vd},Symbol.toStringTag,{value:"Module"})),TS=l.lazy(()=>y(()=>import("./index-350660ab.js"),["assets/index-350660ab.js","assets/vendor-f4aa581a.js"])),ES=l.lazy(()=>y(()=>import("./index-ea84624d.js"),["assets/index-ea84624d.js","assets/vendor-f4aa581a.js"])),$S=l.lazy(()=>y(()=>import("./index-8a1c18b3.js"),["assets/index-8a1c18b3.js","assets/vendor-f4aa581a.js"])),PS=l.lazy(()=>y(()=>import("./index-a5a196a7.js"),["assets/index-a5a196a7.js","assets/vendor-f4aa581a.js"])),CS=l.lazy(()=>y(()=>import("./index-79aa3a92.js"),["assets/index-79aa3a92.js","assets/vendor-f4aa581a.js"])),OS=l.lazy(()=>y(()=>import("./index-639756ba.js"),["assets/index-639756ba.js","assets/vendor-f4aa581a.js","assets/ui-d4b1ee35.js"])),AS=l.lazy(()=>y(()=>import("./index-c37254da.js"),["assets/index-c37254da.js","assets/vendor-f4aa581a.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),DS=l.lazy(()=>y(()=>import("./index-f778973b.js"),["assets/index-f778973b.js","assets/vendor-f4aa581a.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),NS=l.lazy(()=>y(()=>import("./index-03c87f86.js"),["assets/index-03c87f86.js","assets/vendor-f4aa581a.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),IS=l.lazy(()=>y(()=>import("./index-f586769b.js"),["assets/index-f586769b.js","assets/vendor-f4aa581a.js"])),RS=l.lazy(()=>y(()=>import("./index-6076640b.js"),["assets/index-6076640b.js","assets/vendor-f4aa581a.js","assets/index-8aa12362.js"])),LS=l.lazy(()=>y(()=>import("./index-f056fecf.js"),["assets/index-f056fecf.js","assets/vendor-f4aa581a.js","assets/is-valid-url-08a91344.js"])),zS=l.lazy(()=>y(()=>import("./index-06266dd0.js"),["assets/index-06266dd0.js","assets/vendor-f4aa581a.js"])),MS=l.lazy(()=>y(()=>import("./index-f9e32674.js"),["assets/index-f9e32674.js","assets/vendor-f4aa581a.js"])),FS=l.lazy(()=>y(()=>import("./index-29659a62.js"),["assets/index-29659a62.js","assets/vendor-f4aa581a.js"])),BS=l.lazy(()=>y(()=>import("./index-56a98ccf.js"),["assets/index-56a98ccf.js","assets/vendor-f4aa581a.js"])),HS=l.lazy(()=>y(()=>import("./index-02e51f0d.js"),["assets/index-02e51f0d.js","assets/vendor-f4aa581a.js"])),US=l.lazy(()=>y(()=>import("./index-bb4f5e30.js"),["assets/index-bb4f5e30.js","assets/vendor-f4aa581a.js"])),WS=l.lazy(()=>y(()=>import("./index-0da8441c.js"),["assets/index-0da8441c.js","assets/vendor-f4aa581a.js"])),VS=l.lazy(()=>y(()=>import("./index-6496217e.js"),["assets/index-6496217e.js","assets/vendor-f4aa581a.js"])),GS=l.lazy(()=>y(()=>import("./index-06435331.js"),["assets/index-06435331.js","assets/vendor-f4aa581a.js"])),qS=l.lazy(()=>y(()=>import("./index-762fbcb6.js"),["assets/index-762fbcb6.js","assets/vendor-f4aa581a.js","assets/BoldText-ce68ed12.js"])),YS=l.lazy(()=>y(()=>import("./index-ccd2a619.js"),["assets/index-ccd2a619.js","assets/vendor-f4aa581a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>_S),void 0));const KS=l.lazy(()=>y(()=>import("./index-4e5d1b2f.js"),["assets/index-4e5d1b2f.js","assets/vendor-f4aa581a.js"])),JS=l.lazy(()=>y(()=>import("./index-02fc366b.js"),["assets/index-02fc366b.js","assets/vendor-f4aa581a.js"])),XS=l.lazy(()=>y(()=>import("./index-0455b1b8.js"),["assets/index-0455b1b8.js","assets/vendor-f4aa581a.js"])),QS=l.lazy(()=>y(()=>import("./index-b69be616.js"),["assets/index-b69be616.js","assets/vendor-f4aa581a.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ZS=l.lazy(()=>y(()=>import("./index-acaa9bbf.js"),["assets/index-acaa9bbf.js","assets/vendor-f4aa581a.js","assets/get-method-obtaining-fields-40d61c01.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),eT=l.lazy(()=>y(()=>import("./index-5f60600e.js"),["assets/index-5f60600e.js","assets/vendor-f4aa581a.js"])),tT=l.lazy(()=>y(()=>import("./index-9c0793fb.js"),["assets/index-9c0793fb.js","assets/vendor-f4aa581a.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>SS),void 0));const iT=l.lazy(()=>y(()=>import("./index-76c547b8.js"),["assets/index-76c547b8.js","assets/vendor-f4aa581a.js"])),nT=l.lazy(()=>y(()=>import("./index-1f1d9556.js"),["assets/index-1f1d9556.js","assets/vendor-f4aa581a.js"])),sT=l.lazy(()=>y(()=>import("./index-5e8f008c.js"),["assets/index-5e8f008c.js","assets/vendor-f4aa581a.js"])),oT=l.lazy(()=>y(()=>import("./index-280051cd.js"),["assets/index-280051cd.js","assets/vendor-f4aa581a.js"])),aT=l.lazy(()=>y(()=>import("./index-eb1329e8.js"),["assets/index-eb1329e8.js","assets/vendor-f4aa581a.js"])),rT=l.lazy(()=>y(()=>import("./index-b80dc0fd.js"),["assets/index-b80dc0fd.js","assets/vendor-f4aa581a.js","assets/get-divisions-96cfa1b1.js"])),lT=l.lazy(()=>y(()=>import("./index-f6c9901d.js"),["assets/index-f6c9901d.js","assets/vendor-f4aa581a.js"])),cT=()=>F.get(`?getRequestMedicalCertificate&token=${B()}`),yd=k(),_d=L(async()=>(await cT()).data);P({clock:yd,target:_d});Oa(_d,null);const dT={load:yd},pT=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],uT=e=>{const{phone:i,email:n}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:n,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:pT,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},wd=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(null),[o,a]=l.useState(null),[r,c]=l.useState(null),[d,p]=l.useState(!1),[h,f]=l.useState(null),[g,x]=l.useState(!1),[m,b]=l.useState(!1),v=g??!1,{data:{dataUserApplication:S}}=ye.useApplications();return l.useEffect(()=>{S&&i(uT(S))},[S]),l.useEffect(()=>{dT.load(),s(ct({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),a(ct({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),c(ct({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),f(ct({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),t.jsx(Mn,{isDone:!1,children:t.jsxs(Sn,{children:[e&&i&&t.jsx($t,{...e,setData:i}),n&&s&&t.jsx($t,{...n,setData:s}),o&&a&&t.jsx($t,{...o,setData:a}),r&&c&&t.jsx($t,{...r,setData:c}),h&&f&&t.jsx($t,{...h,setData:f}),t.jsx(We,{checked:d,setChecked:p,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(ft,{text:v?"Отправлено":"Отправить",action:()=>{zn(Hi.MEDICAL_CERT,[e,n,o,r,h],b,x)},isLoading:m,completed:g,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:!!d&&!!e&&!!o&&!!r&&!!h&&!!n&&ge(e)&&ge(o)&&ge(r)&&ge(h)&&ge(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},hT=Object.freeze(Object.defineProperty({__proto__:null,default:wd},Symbol.toStringTag,{value:"Module"})),C="/applications",gT="/application-for-superior-room",fT="/acad-performance",xT="/dormitory",jd=C+"/clarification-of-passport-data",kd=C+"/arbitrary-request",Sd=C+"/student-employment",Td=C+"/social-scollarship",Ed=C+"/certificate-of-attendance",$d=C+"/social-agencies",Pd=C+"/paper-call",Cd=C+"/regular-accommodation",Od=C+"/full-time-part-time-form",Ad=C+"/accommodation-correspondence-form",Dd=C+"/academic-leave-accommodation",Nd=C+"/preferential-accommodation",Id=C+"/family-room",Rd=C+"/termination-of-employment-contract",Ld=C+"/relocation-inside-hostel",zd=C+"/relocation-to-another-hostel",Md=C+"/accommodation-for-graduates",ms=C+"/payment-recipient",Fd=C+"/restoring-the-magnetic-pass",Bd=C+"/retake-for-diploma",Hd=C+"/military-registration-documents",Ud=C+"/military-registration",Wd=C+"/financial-support",Vd=C+"/financial-assistance",Gd=C+"/increased-state-academic-scholarship",qd=C+"/changing-personal-data",Yd=C+"/student-status",Kd=C+"/state-accreditation",mT=C+"/military-registration-card",Jd=C+"/holidays-after-training",Xd=C+"/provision-academic-leave",Qd=C+"/exit-academic-leave",Zd=C+"/independently-deducted",ep=C+"/extension-attestation",bT="/physical-education/student",lt=()=>we({oldVersionUrl:"/sprav"}),ui=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(A,{}),path:C,Component:RS,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...xc,"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Sa,{}),path:w1,Component:wd,color:"blue",isTemplate:!1,group:"GENERAL"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(gt,{}),path:cn,Component:Ls,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(no,{}),path:xT,Component:$S,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},softskills:{id:"softskills",title:"Паспорт компетенций",icon:t.jsx(fh,{}),path:N1,Component:()=>(le.useEffect(()=>{window.location.replace("https://softskills.rsv.ru/")},[]),null),color:"orange",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",isExternalPage:!0,keywords:["рсв","россия страна возможностей","софтскиллс","навыки"],isNew:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(xh,{}),path:fT,Component:ES,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(A,{}),color:"lightGreen",path:bT,pageSize:"big",Component:OS,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(ma,{}),path:pc,Component:LS,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(mh,{}),path:gc,Component:Cs,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(no,{}),path:gT,Component:TS,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(cr))},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Ji,{}),path:Bi,Component:Fs,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]}}),Qo=e=>{var i,n,s;return{...mc,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(fi,{}),path:jd,Component:PS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(fi,{}),path:kd,Component:rT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(fi,{}),path:Sd,Component:O?lt:lT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(Q,{}),path:Td,Component:O?lt:CS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(Q,{}),path:Ed,Component:AS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(Q,{}),path:$d,Component:DS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(Q,{}),path:Pd,Component:NS,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(Q,{}),path:Cd,Component:IS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(Q,{}),path:Od,Component:aS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(Q,{}),path:Ad,Component:oT,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(Q,{}),path:Dd,Component:zS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(Q,{}),path:Nd,Component:MS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(Q,{}),path:Id,Component:aT,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(Q,{}),path:Rd,Component:FS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(Q,{}),path:Ld,Component:BS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(Q,{}),path:zd,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):US,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:Q,path:Md,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?HS:()=>t.jsx(we,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(Q,{}),path:ms,Component:WS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(Q,{}),path:Fd,Component:VS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(Q,{}),path:Hd,Component:O?lt:YS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(bh,{}),path:Ud,Component:O?lt:bd,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:C},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(Q,{}),path:Bd,Component:qS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(Q,{}),path:Gd,Component:O?lt:GS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(Q,{}),path:Wd,Component:O?lt:KS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(Q,{}),path:Vd,Component:O?lt:JS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(Q,{}),path:qd,Component:XS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(Q,{}),path:Yd,Component:QS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(Q,{}),path:Kd,Component:ZS,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(Q,{}),path:Jd,Component:eT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(Q,{}),path:Xd,Component:tT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(Q,{}),path:Qd,Component:vd,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(Q,{}),path:Zd,Component:iT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(Q,{}),path:ep,Component:nT,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:C},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(Q,{}),path:mT,Component:O?lt:sT,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:C}}},Zo=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),vT=["settings","profile","chat","schedule","payments","project-activity","all-students"],yT=["home","schedule","acad-performance","all","profile"],_T=["home","schedule","alerts","all","profile"],wT=["home","doclist","alerts","all","profile"],jT=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(M.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??yn,s=Na.filter(c=>!n.includes(c));return(e==null?void 0:e.user_status)==="staff"&&n.some(c=>!s.includes(c))?[...n,...s]:n},ea={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},kT=()=>q(TT),tp=k(),ip=k(),np=k(),sp=k(),ST=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},hi=e=>{if(!e)return Ao();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(Ao()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},TT=V(ea).on(tp,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(ip,()=>({...ea})).on(np,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?hi(n)[window.location.hash.slice(2,window.location.hash.length)]:ui()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...hi(n),...Do()}:{...ui(),...Qo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?hi(n):ui(),leftsideBarRoutes:Zo(jT(i),(i==null?void 0:i.user_status)==="staff"?hi(n):ui()),homeRoutes:Zo(s??JSON.parse(localStorage.getItem(M.HomeRoutes)??JSON.stringify(vT)),(i==null?void 0:i.user_status)==="staff"?{...hi(n),...Do()}:{...ui(),...Qo(i)})})).on(sp,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:ST(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Ve={useMenu:kT},at={changeOpen:tp,clearStore:ip,defineMenu:np,changeNotifications:sp},op=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:uc,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ft,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:cn,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:cn,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:Ws,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:re,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:vl,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:Bs,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:C,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:oc,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},ET={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},ap=(e,i)=>i.filter(({type:n})=>e[ET[n]]),$T={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},Fn=L(async({settings:e})=>{try{const{data:i}=await yg();return ap(e,i).map(({id:n,type:s,title:o,text:a})=>op(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),PT=L(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&at.changeNotifications({page:i,notifications:1})})}),CT=L(({notifications:e})=>{const{pageId:i}=e[0];i&&at.changeNotifications({page:i,notifications:1})}),Bn=L(async({id:e,pageId:i})=>{try{return await _g(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Hn=L(async()=>{try{await wg()}catch{throw new Error("Не удалось скрыть все уведомления")}}),OT=e=>{e&&at.changeNotifications({page:e,notifications:0})},rp=k(),lp=k(),cp=k(),dp=k(),pp=k(),up=k(),hp=k(),ae=V($T).reset(hp);ze({from:lp,to:Fn});P({clock:Fn.pending,source:ae,fn:(e,i)=>({...e,loading:i}),target:ae});P({clock:Fn.failData,source:ae,fn:(e,i)=>({...e,error:i.message}),target:ae});P({clock:Fn.doneData,source:ae,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ae,PT]});P({clock:rp,source:ae,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ae,CT]});ze({from:dp,to:Bn});P({clock:Bn.doneData,source:ae,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(OT(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ae});P({clock:Bn.failData,source:ae,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ae});P({clock:Bn.pending,source:ae,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ae});ze({from:pp,to:Hn});P({clock:Hn.pending,source:ae,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ae});P({clock:Hn.failData,source:ae,fn:(e,i)=>({...e,clearAllError:i.message}),target:ae});P({clock:Hn.doneData,source:ae,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ae});P({clock:cp,source:ae,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ae});P({clock:up,source:ae,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ae});const AT=()=>fe(ae),Rt={initialize:lp,add:rp,clearById:dp,clearVisibleById:cp,clearAll:pp,clearAllVisible:up,clearStore:hp},rt={useLkNotifications:AT},DT=Object.freeze(Object.defineProperty({__proto__:null,events:Rt,selectors:rt},Symbol.toStringTag,{value:"Module"})),ta={messages:null,error:null},NT=()=>({data:q(ia).messages,loading:q(yi.pending),error:q(ia).error}),yi=L(async()=>{try{return(await Kh("1")).data}catch(e){throw new Error(e)}}),gp=k(),ia=V(ta).on(yi,e=>({...e,error:null})).on(yi.doneData,(e,i)=>({...e,messages:i})).on(yi.failData,(e,i)=>({...e,error:i.message})).on(gp,()=>({...ta})),IT={useMessages:NT},RT={getMessagesFx:yi},LT={clearStore:gp},zT=Object.freeze(Object.defineProperty({__proto__:null,effects:RT,events:LT,selectors:IT},Symbol.toStringTag,{value:"Module"})),na={type:null,personalNotifications:null,error:null,completed:!1},MT=()=>({data:q(Kt).personalNotifications,loading:q(Yt.pending),error:q(Kt).error,completed:q(Kt).completed}),FT=()=>q(Kt).type,fp=k(),xp=L(e=>e),Yt=L(async()=>{const{type:e}=Kt.getState();if(e==="notifications")try{return(await Ha()).data}catch(i){throw new Error(i)}try{return{docs:(await Ua()).data}}catch(i){throw new Error(i)}}),hn=L(async e=>{const{type:i}=Kt.getState(),n=i==="notifications"?ug:gg;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),mp=k(),Kt=V(na).on(xp,(e,i)=>({...e,type:i})).on(Yt,e=>({...e,error:null})).on(Yt.doneData,(e,i)=>({...e,personalNotifications:i})).on(Yt.failData,(e,i)=>({...e,error:i.message})).on(hn.doneData,e=>({...e})).on(hn.failData,(e,i)=>({...e,error:i.message})).on(fp,(e,i)=>({...e,completed:i.completed})).on(mp,()=>({...na}));hn.doneData.watch(()=>Yt());const BT={usePersonalNotifications:MT,useType:FT},HT={setNotificationsType:xp,getPersonalNotificationsFx:Yt,viewPersonalNotificationsFx:hn},UT={changeCompleted:fp,clearStore:mp},WT=Object.freeze(Object.defineProperty({__proto__:null,effects:HT,events:UT,selectors:BT},Symbol.toStringTag,{value:"Module"})),VT=_n({api:{get:cg}}),sa={superiorRoom:null,error:null},GT=()=>({data:q(oa).superiorRoom,loading:q(_i.pending),error:q(oa).error}),bp=k(),qT=L(async e=>{});ze({from:bp,to:qT});const _i=L(async()=>{try{return(await eg()).data}catch{throw new Error("Не удалось загрузить раздел")}}),vp=k(),oa=V(sa).on(_i,e=>({...e,error:null})).on(_i.doneData,(e,i)=>({...e,superiorRoom:i})).on(_i.failData,(e,i)=>({...e,error:i.message})).on(vp,()=>({...sa})),YT={useSuperiorRoom:GT},KT={getSuperiorRoomFx:_i},JT={postSuperiorRoom:bp,clearStore:vp},XT=Object.freeze(Object.defineProperty({__proto__:null,effects:KT,events:JT,selectors:YT},Symbol.toStringTag,{value:"Module"})),aa={teacherDataVerification:null,error:null,completed:!1},QT=()=>({data:q(Xn).teacherDataVerification,loading:q(wi.pending),error:q(Xn).error,completed:q(Xn).completed}),yp=k(),_p=k(),ZT=L(async e=>{try{return(await xg(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});ze({from:yp,to:ZT});const wi=L(async()=>{try{return(await fg()).data}catch{throw new Error("Не удалось войти")}}),wp=k(),Xn=V(aa).on(wi,e=>({...e,error:null})).on(wi.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(wi.failData,(e,i)=>({...e,error:i.message})).on(_p,(e,i)=>({...e,completed:i.completed})).on(wp,()=>({...aa})),eE={useTeacherDataVerification:QT},tE={getTeacherDataVerificationFx:wi},iE={postTeacherDataVerification:yp,changeCompleted:_p,clearStore:wp},nE=Object.freeze(Object.defineProperty({__proto__:null,effects:tE,events:iE,selectors:eE},Symbol.toStringTag,{value:"Module"})),sE=[Sg,Qe,Rg,Mg,Xg,zT,WT,Av,Ag,VT,gj,XT,nE,Wg,Eg,DT],oE=()=>{sE.forEach(e=>{e.events.clearStore()})},aE=()=>{localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh),sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)},ut=localStorage.getItem(M.Token)??"",ht=()=>JSON.parse(localStorage.getItem(M.SavePassword)??"true"),Un=L(async e=>{try{const{data:i}=await Lh(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await zt.post("/old",n)}catch{}return aE(),ht()?(localStorage.setItem(M.Token,i.token),localStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(M.Token,i.token),sessionStorage.setItem(M.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(M.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),Pt=L(async e=>{try{const[i,n]=await Promise.all([zh(e.token),Ba()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:jg({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:ht()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),bs=L(async e=>{try{return(await Mh(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),jp=L(()=>{ht()?(localStorage.removeItem(M.Token),localStorage.removeItem(M.JWT),localStorage.removeItem(M.JWTRefresh)):(sessionStorage.removeItem(M.Token),sessionStorage.removeItem(M.JWT),sessionStorage.removeItem(M.JWTRefresh)),oE()}),kp=e=>{const i=localStorage.getItem(M.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(M.SavePassword,n.toString()),n},Sp=k(),Qs=k(),Tp=k(),Ep=k(),$p=k();ze({from:Sp,to:Un});P({clock:Un.doneData,target:Pt});ze({from:Qs,to:jp});ut&&ht()?Pt({token:ut,jwt:localStorage.getItem(M.JWT)}):jp();const rE={currentUser:null,error:null,isAuthenticated:!!(ut!=null&&ut.length),savePassword:ht(),loginEuz:""};kp();const Pp=V(rE).on(Pt,e=>({...e,error:null})).on(Pt.doneData,(e,i)=>i).on(Pt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(ut!=null&&ut.length),savePassword:ht()})).on(Un.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:ht()})).on(Qs,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:ht()})).on($p,(e,{savePassword:i})=>({...e,savePassword:kp(i)})).on(bs,e=>({...e,error:null})).on(bs.doneData,(e,i)=>({...e,loginEuz:i})).on(Pt.failData,(e,i)=>({...e,error:i.message})).on(Ep,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Tp,e=>({...e,currentUser:null})),he={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=q(Pp);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:q(Un.pending),error:i}}},Lt={login:Sp,logout:Qs,changeSavePassword:$p,clear:Tp,update:Ep},lE={getUserFx:Pt,getLoginEuzFx:bs},cE=()=>{const e="0.0.1";localStorage.getItem(M.Version)!==e&&(localStorage.clear(),localStorage.setItem(M.Version,e),Lt.logout())},dE=u.div`
    max-height: 400px;
    overflow-y: auto;
`,pE=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ue,{text:e.message,image:t.jsx(vh,{}),children:t.jsxs($,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(ve,{}),t.jsx(kc,{title:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:t.jsxs($,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(xa,{})]})}),children:t.jsx(te,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(dE,{children:e.stack})})})]})})}),uE=/Cannot access 'get' before initialization/,hE=/Failed to fetch dynamically imported module/,gE=2,ra="reloadCount";class Cp extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n);const s=Number(sessionStorage.getItem("reloadCount"))??0;s<gE&&(i!=null&&i.message)&&(hE.test(i.message)||uE.test(i.message))&&(sessionStorage.setItem(ra,`${s+1}`),window.location.reload())}render(){return this.state.hasError?t.jsx(pE,{error:this.state.error}):(sessionStorage.setItem(ra,"0"),this.props.children)}}const fE=O?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",ji=zt.create({baseURL:fE}),xE={headers:{"Content-Type":"application/json"}};ji.interceptors.request.use(Fa);ji.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await es(ji)(e):e},es(ji));const mE=async e=>{var n;const i=await ji.post("",{query:e},xE);if(Op(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Op(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Op(e[i]))return!0}return!1}const bE=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Ap=k(),Zs=yh({effect:async({currentUser:e})=>({...(await mE(bE((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Pp}),vE=Oa(Zs,null);P({clock:Ap,target:Zs});const yE=Zs.pending,_E={load:Ap},F$={peTeacher:vE,isLoading:yE},Dp=k(),Np=L(ng);P({clock:Dp,target:Np});const Ip=V([]),B$=fn(Ip,e=>e.map(i=>i.divisionName));P({clock:Np.doneData,target:Ip});function Rp(e){const{pathname:i}=ei();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const wE=()=>{const{allRoutes:e}=Ve.useMenu();return e?t.jsxs(Aa,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(Da,{path:i,component:n,exact:!s},i)),t.jsx(Je,{exact:!0,to:Hs})]}):null},jE=le.memo(wE),kE=u.div`
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
`,SE=()=>{const{open:e,content:i,position:n}=tx.useContextMenu(),s=l.useRef(null);return ni(s,()=>Re.close()),t.jsx(Rn,{isOpen:e,children:t.jsx(kE,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Lp=200,TE=5e3,EE=()=>{const{visibleNotifications:e}=rt.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Rt.clearVisibleById(a)},Lp)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??TE))},[e]),{handleClose:o,closing:i}},$E=u.div`
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
`,PE=u.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Lp/1e3}s forwards;

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
`;const CE=()=>{const{visibleNotifications:e}=rt.useLkNotifications(),{closing:i,handleClose:n}=EE();return t.jsx($E,{children:e.map(s=>t.jsx(PE,{onClick:n(s.id),open:i!==s.id,children:t.jsx($c,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},la=u.div`
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
`,OE=({loading:e})=>{const{data:{user:i},error:n}=he.useUser(),s=i?Ne(i==null?void 0:i.fullName):w.blue.main,o=()=>lE.getUserFx(JSON.parse(localStorage.getItem(M.Token)??"")),a=()=>Lt.logout();return n?t.jsx(la,{$loading:!0,color:s,children:t.jsx(ue,{text:n,children:t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(_,{onClick:o,text:"Попробовать снова",icon:t.jsx(xn,{}),width:"200px"}),t.jsx(_,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(la,{color:s,$loading:e,children:[t.jsx(kn,{short:!0,width:"100px"}),e&&t.jsx(qe,{})]})},AE=u.div`
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
`,DE=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Js.useStory();return t.jsx(AE,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():Et.changeCurrentPage({value:o+1})})})},NE=u(jn)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,IE=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Js.useStory();return t.jsxs(NE,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(DE,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(wh,{}):t.jsx(_h,{}),t.jsx(_,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(et,{}),onClick:n})]})},RE=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,LE=u(st)`
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
`,zE=u.div`
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
    transform: ${({align:e})=>RE(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,ME=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:p,imageSize:h={width:"auto",height:"100%"},textAlign:f="left"})=>{const g=it();return t.jsxs(LE,{imageAlign:p,onClick:()=>c(x=>!x),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx($s,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(zE,{imageAlign:p,onClick:()=>c(x=>!x),background:e,align:i,color:s,children:[t.jsx(W,{size:2,align:f,children:o}),t.jsx(ne,{fontSize:"1.1em",align:f,children:a}),!!(d!=null&&d.text)&&t.jsx(_,{onClick:()=>{g.push(d.to),Et.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},FE=u.div`
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
`,ca=u.div`
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
`,BE=()=>{const{pages:e,isOpen:i,currentPage:n}=Js.useStory(),s=l.useRef(null);ni(s,()=>Et.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(Rn,{isOpen:i,children:t.jsx(FE,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(IE,{pages:e.length,onClose:()=>Et.close(),playing:o}),t.jsx(ca,{left:"15px",onClick:()=>{n!==0&&Et.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(Ci,{})}),t.jsx(ME,{setPlaying:a,currentPage:n,...r}),t.jsx(ca,{right:"15px",onClick:()=>{n!==e.length-1?Et.changeCurrentPage({value:n+1}):Et.close(),a(!0)},children:t.jsx(tt,{})})]})})})},HE=()=>{const{data:{user:e}}=he.useUser(),{notifications:i,loading:n,loaded:s}=rt.useLkNotifications(),{settings:o}=ii.useSettings(),[a]=Me([lr.$electronicInteractionStore]),r=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{ts.getElectronicInteraction(),a&&!a.status&&Rt.add(op("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||ts.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(ap(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,Rt.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{at.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},UE=()=>{const{data:{user:e}}=he.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date($h);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},WE=()=>{const e=Gr(),{open:i}=ee(),n=UE();return HE(),_t(),l.useEffect(()=>{n&&n&&i(t.jsx(ad,{}),"Что нового")},[n]),{currentPage:e}},VE=u.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,GE=u.div`
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
`,qE=u.div`
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
`,YE=()=>{const{data:{user:e}}=he.useUser(),i=l.useRef(null),{allRoutes:n}=Ve.useMenu(),{currentPage:s}=WE(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return Rp(i.current),t.jsxs(VE,{children:[t.jsx(OE,{loading:!e||!n}),t.jsx(BE,{}),t.jsx(yw,{}),t.jsxs(GE,{children:[t.jsx(aw,{headerVisible:(s==null?void 0:s.hiddenTitle)||o,currentPage:s}),t.jsx(qE,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx(Cp,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(jE,{})})})}),t.jsx(Kj,{})]}),t.jsx(Ew,{}),t.jsx(ww,{}),t.jsx(Pw,{}),t.jsx(SE,{}),t.jsx(ik,{}),t.jsx(CE,{})]})},KE=le.memo(YE),JE=()=>{const{data:{isAuthenticated:e,user:i}}=he.useUser(),{data:n}=Qe.selectors.useData(),{settings:s}=ii.useSettings();return Rp(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(Le.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Qe.effects.getFx(),Le.getWorkerPosts(),Nn.getSubdivisions(),Dp()),_E.load())},[e,i]),l.useEffect(()=>{i&&(s?at.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages}):sf.getLocalSettingsFx(i.id))},[i,n,s]),e?t.jsx(KE,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(Aa,{children:[F1.map(({path:o,Component:a},r)=>t.jsx(Da,{path:o,component:a,exact:!0},r)),t.jsx(Je,{exact:!0,to:sc})]})})},XE=u.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`;cE();const QE=()=>(_t(),t.jsx(y_,{children:t.jsx(jh,{basename:"/",children:t.jsx(XE,{children:t.jsx(Cp,{children:t.jsx(JE,{})})})})}));kh.render(t.jsxs(le.StrictMode,{children:[t.jsx(Yw,{}),t.jsx(QE,{})]}),document.getElementById("root"));export{F as $,iS as A,Mn as B,Oo as C,fl as D,Vn as E,Sn as F,bg as G,B_ as H,$t as I,_E as J,Pp as K,X as L,te as M,$ as N,Tt as O,jt as P,ve as Q,p1 as R,ft as S,W as T,w as U,O0 as V,Fe as W,qe as X,ne as Y,dt as Z,Xs as _,Ug as a,av as a$,Ps as a0,F$ as a1,Cf as a2,ue as a3,y$ as a4,_$ as a5,be as a6,p$ as a7,he as a8,zn as a9,st as aA,hs as aB,_c as aC,kr as aD,u_ as aE,g_ as aF,Ve as aG,p_ as aH,gc as aI,z1 as aJ,M$ as aK,yt as aL,xe as aM,ti as aN,nt as aO,f$ as aP,B$ as aQ,Pg as aR,po as aS,db as aT,Qb as aU,b$ as aV,Zb as aW,x$ as aX,kb as aY,m$ as aZ,Ns as a_,nw as aa,gk as ab,g$ as ac,Te as ad,fr as ae,n$ as af,qs as ag,Nf as ah,Ai as ai,ii as aj,He as ak,yk as al,$r as am,i$ as an,Lt as ao,f0 as ap,$i as aq,Di as ar,HT as as,Rt as at,BT as au,R$ as av,L$ as aw,u$ as ax,z$ as ay,_n as az,ge as b,Ll as b$,Ip as b0,v$ as b1,X1 as b2,Pk as b3,Gk as b4,re as b5,kd as b6,cn as b7,M1 as b8,k$ as b9,Pj as bA,Rc as bB,Ks as bC,I$ as bD,kt as bE,uc as bF,W_ as bG,Ne as bH,Ys as bI,as as bJ,hj as bK,Cc as bL,X_ as bM,R as bN,Jn as bO,S$ as bP,hl as bQ,P$ as bR,C$ as bS,O$ as bT,$$ as bU,E$ as bV,T$ as bW,je as bX,M_ as bY,Oc as bZ,$1 as b_,e_ as ba,Z1 as bb,My as bc,mg as bd,Jy as be,Ye as bf,ke as bg,w$ as bh,Ws as bi,Bt as bj,J as bk,Re as bl,Tn as bm,ni as bn,In as bo,lr as bp,ts as bq,Eg as br,Ie as bs,wt as bt,pt as bu,ey as bv,Zv as bw,Yj as bx,N$ as by,A$ as bz,Wg as c,Yf as c$,Rl as c0,a$ as c1,r$ as c2,$n as c3,nk as c4,Wa as c5,B1 as c6,L1 as c7,R1 as c8,I1 as c9,No as cA,Na as cB,yn as cC,U1 as cD,H1 as cE,s$ as cF,vc as cG,bc as cH,o$ as cI,j$ as cJ,jn as cK,U_ as cL,lE as cM,rt as cN,A1 as cO,G_ as cP,l$ as cQ,YT as cR,KT as cS,c$ as cT,kg as cU,t$ as cV,e$ as cW,pn as cX,qw as cY,$s as cZ,Sg as c_,Bc as ca,uj as cb,Fi as cc,oi as cd,ks as ce,D$ as cf,oj as cg,fc as ch,aj as ci,rj as cj,Vc as ck,Vt as cl,xj as cm,id as cn,fj as co,od as cp,tj as cq,Aw as cr,Lj as cs,Oj as ct,_t as cu,zc as cv,Wc as cw,cl as cx,bj as cy,wc as cz,Le as d,h$ as d0,nS as d1,Vi as d2,Zk as d3,eS as d4,Qk as d5,md as d6,VT as d7,Bg as e,Fg as f,B as g,d$ as h,Af as i,iE as j,U as k,eE as l,tE as m,oe as n,We as o,Hi as p,O as q,Lo as r,ye as s,mE as t,xt as u,_ as v,Ni as w,Nr as x,ee as y,ot as z};
