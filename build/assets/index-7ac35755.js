import{F as Ie,a as Yt,b as Xe,c as Si,H as zn,d as ei,y as z,u as T,p as ee,e as F,x as D,S as Ve,m as zs,r as l,s as u,j as t,f as Ge,I as dc,g as pc,h as uc,i as Fs,A as Ms,k as N,l as hc,n as ke,o as ct,B as Bs,q as Hs,t as Ui,v as gc,w as fc,R as le,z as Jt,C as ti,D as St,L as Z,E as Xt,G as xc,J as mc,K as Us,M as Ws,N as bc,O as vc,P as Te,Q as ve,T as Ei,U as dt,V as Vs,W as yc,X as Gs,Y as qs,Z as jc,_ as _c,$ as wc,a0 as kc,a1 as Me,a2 as Kt,a3 as Tc,a4 as Sc,a5 as Ec,a6 as $c,a7 as Pc,a8 as Oc,a9 as Y,aa as Ys,ab as Js,ac as Ac,ad as Cc,ae as Nc,af as Xs,ag as ii,ah as Ic,ai as dn,aj as pn,ak as ni,al as Ks,am as Dc,an as un,ao as Rc,ap as Lc,aq as zc,ar as Qs,as as Fc,at as hn,au as Mc,av as Bc,aw as Hc,ax as Uc,ay as Wc,az as Vc,aA as Zs,aB as Gc,aC as qc,aD as vi,aE as eo,aF as to,aG as Q,aH as Fn,aI as Yc,aJ as Ji,aK as Jc,aL as Xc,aM as Kc,aN as xi,aO as Qc,aP as Zc,aQ as ed,aR as td,aS as id,aT as Mn,aU as nd,aV as sd,aW as od,aX as io,aY as no,aZ as ad,a_ as rd,a$ as ld,b0 as cd,b1 as dd}from"./vendor-198a3a64.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const pd="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",ud=3,$i=["home","settings","all"],so=["home","settings","download-agreements","all"],oo="https://lk.eseur.ru/signup",hd="https://old.mospolytech.ru/index.php?id=3428",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#6bfeb5",transparent1:"#a7ffd38a",transparent2:"#a7ffd324",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#a3fbfb99",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#29349c",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#675fe5",transparent1:"#5c54d9e0",transparent2:"#5c54d9b5",transparent3:"#5c54d98c"},purple:{dark3:"#5b248d",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#932066",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#a3252f",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#985e1d",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab1f"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},__={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},w_={Зачтено:w.green.main,"Не зачтено":w.red.main,Отлично:w.green.main,Хорошо:w.blue.main,Удовлетворительно:w.orange.main,Неудовлетворительно:w.red.main,"Не явился":w.red.main,default:w.red.main},k_={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},A="https://e.mospolytech.ru/old",gd="2023-06-30T00:43:43",pt={info:{icon:Ie,color:"blue",title:"Информация"},alert:{icon:Yt,color:"orange",title:"Внимание!"},failure:{icon:Xe,color:"red",title:"Ошибка"},success:{icon:Si,color:"green",title:"Успешно"},tip:{icon:zn,color:"grey",title:"Подсказка"},hint:{icon:zn,color:"white",title:"Подсказка"},hrFailure:{icon:Xe,color:"red",title:"Ошибка"}},fd={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},xd=["image/jpeg","image/jpg","image/png","application/pdf"],md=10,bd="376px",C=!window.location.port||window.location.port==="80";console.log("Running on production",C);var G=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(G||{});const et=()=>localStorage.getItem(G.JWT),gt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},T_=async e=>{const i=e.config;if((e.request.status===403||e.request.status===401)&&!i._retry){i._retry=!0;const n=localStorage.getItem(G.JWTRefresh);try{const{accessToken:s,refreshToken:o}=await Td(n??"");return localStorage.setItem(G.JWT,s),localStorage.setItem(G.JWTRefresh,o),de(i)}catch{Zt.logout()}}return Promise.reject(e)},vd=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${et()}`,e),yd=`${A}/lk_api.php`,jd="https://api.mospolytech.ru/serviceforfrontpersonnelorders",M=ei.create({baseURL:yd,withCredentials:!0}),de=ei.create({baseURL:jd});de.interceptors.request.use(vd);function Pi(e){return e.isAxiosError}function H(){return localStorage.getItem(G.Token)??sessionStorage.getItem(G.Token)??""}const _d=({login:e,password:i})=>M.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),wd=e=>M.get(`?getUser&token=${e}`),kd=e=>M.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),S_=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",H()),M.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},E_=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),M.post(`?changeADPass=1&token=${H()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},$_=async e=>{const i=new FormData;return i.set("email",e),i.set("token",H()),M.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},P_=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",H()),M.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Td=async e=>{const{data:i}=await ei.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},Sd=e=>M.get(`?getSchedule&group=${e}&token=${H()}`),Bn=e=>M.get(`?getScheduleTeacher&fio=${e}&token=${H()}`),Ed=()=>M.get(`?getSchedule&session=1&token=${H()}`),Hn=e=>M.get(`?getScheduleTeacher&fio=${e}&session=1&token=${H()}`),$d=()=>M.get(`?getPayments&token=${H()}`),Pd=e=>M.get(`?signAgreement=${e}&token=${H()}`),Od=e=>M.get(`?signContract=${e}&token=${H()}`),Ad=async({semestr:e})=>{var i,n;return(n=(i=await M.get(`?getAcademicPerformance&semestr=${e}&token=${H()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},Cd=e=>M.get(`?getMessages&token=${H()}&id=${e}`),ao=async()=>(await M.get(`?getPEPStatus&token=${H()}`)).data,Nd=()=>M.get(`?setPEPAccept&token=${H()}`),Id=()=>M.get(`?getContactData&token=${H()}`),Dd=e=>{const i=new FormData;i.set("token",H()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return M.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Rd=()=>M.get(`?getRequestHighComfort&token=${H()}`),O_=e=>{const i=new FormData;i.set("token",H()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return M.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Ld=()=>M.get(`?getAppRequests&token=${H()}`),zd=()=>M.get(`?getAppData&token=${H()}`),Fd=async()=>await de.get(`/Dismissal.GetAllHistory?employeeGuid=${gt(et()??"").IndividualGuid}`,{timeout:3e4}),Md=async()=>{const{data:e}=await de.get("/AnotherPlaceWork.GetDivisions");return e.divisions},Bd=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",H()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await M.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},Hd=()=>de.get(`?getAppRequests&token=${H()}`),Ud=()=>de.get(`?getAppData&token=${H()}`),Wd=e=>de.post("Dismissal.Post",e),Vd=async()=>(await M.get(`?getAdminLinks&token=${H()}`)).data,Gd=async e=>(await M.get(`?PDinfo&token=${H()}`)).data,ro=()=>M.get(`?getNotification&token=${H()}`),qd=e=>M.get(`?viewNotification=${e}&token=${H()}`),Yd=Object.freeze(Object.defineProperty({__proto__:null,get:ro,view:qd},Symbol.toStringTag,{value:"Module"})),lo=()=>M.get(`?getDocList&token=${H()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),Jd=e=>M.get(`?viewDoc=${e}&token=${H()}`),Xd=Object.freeze(Object.defineProperty({__proto__:null,get:lo,view:Jd},Symbol.toStringTag,{value:"Module"})),Kd=(e,i,n,s)=>M.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${H()}`),Qd=e=>M.get(`?getDivs=${e}&page=1&token=${H()}`),Zd=()=>M.get(`?getCheckData&token=${H()}`),ep=e=>{const i=new FormData;i.set("token",H()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return M.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},tp=(e,i,n,s)=>M.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${H()}`),ip=async e=>await M.get(`?getGroups=${e}&perpage=30&page=1&token=${H()}`),np=async()=>(await M.get(`?getAlerts&token=${H()}`)).data,sp=()=>M.get(`?getNotifications&token=${H()}`),op=e=>M.get(`?clearNotificationById=${e}&token=${H()}`),ap=()=>M.get(`?clearAllNotifications&token=${H()}`);function Xi({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Un={data:null,preparedData:null,loading:!1,error:null},si=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>pd})=>{const o=e??Un,a=()=>({data:F(d).data,preparedData:F(d).preparedData,loading:F(r.pending),error:F(d).error}),r=z(async h=>{try{const g=await i.get(h);return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),p=z(async h=>{var g;try{await((g=i.post)==null?void 0:g.call(i,h))}catch(f){throw new Error(s(f))}}),c=T(),d=ee(o).on(r,h=>({...h,error:null})).on(p.pending,h=>({...h,loading:!0})).on(p.failData,(h,{message:g})=>({...h,error:g,loading:!1})).on(p.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:g,preparedData:f})=>({...h,data:g,preparedData:f})).on(r.failData,(h,g)=>({...h,error:g.message})).on(c,()=>({...Un}));return{selectors:{useData:a},effects:{getFx:r,postFx:p},events:{clearStore:c}}};function rp(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const lp=si({api:{get:Ad},prepareData:rp}),Ke=si({api:{get:Vd}}),cp=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),dp=si({api:{get:np},prepareData:cp}),Wn={message:"",type:"success",isOpen:!1,time:2e3},co=T(),po=T(),uo=T();ee(Wn).on(co,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(po,(e,{isOpen:i})=>({...e,isOpen:i})).on(uo,()=>({...Wn}));const Se={evokePopUpMessage:co,openPopUpMessage:po,clearStore:uo},Vn={listApplication:null,error:null,dataUserApplication:null},Ft=z(async()=>{const e=await Hd();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),mi=z(async()=>{const e=await Ud();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Oi=z(async e=>await Wd(e));D({clock:Oi.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Se.evokePopUpMessage});D({clock:Oi.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:Se.evokePopUpMessage});const pp=T();Ve({from:Oi.doneData,to:Ft});ee(Vn).on(mi,e=>({...e,error:null})).on(mi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(mi.failData,(e,i)=>({...e,error:i.message})).on(Ft,e=>({...e,error:null})).on(Ft.doneData,(e,i)=>({...e,listApplication:i})).on(Ft.failData,(e,i)=>({...e,error:i.message})).on(pp,()=>({...Vn}));const up={getApplicationsFx:Ft,getUserDataApplicationsFx:mi,postApplicationFx:Oi},Gn={message:"",type:"success",isOpen:!1,time:2e3},hp=()=>F(gp),ho=T(),go=T(),fo=T(),gp=ee(Gn).on(ho,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(go,(e,{isOpen:i})=>({...e,isOpen:i})).on(fo,()=>({...Gn})),xo={usePopUpMessage:hp},X={evokePopUpMessage:ho,openPopUpMessage:go,clearStore:fo},fp=Object.freeze(Object.defineProperty({__proto__:null,events:X,selectors:xo},Symbol.toStringTag,{value:"Module"})),qn={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},Mt=z(async()=>{const e=await Fd();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Bt=z(async()=>{const e=await Ld();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Ht=z(async()=>{const e=await zd();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),gn=z(async e=>{const i=await Bd(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),xp=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=F(mp);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:F(Ht.pending),workerLoading:F(zs(Mt.pending,up.postApplicationFx.pending,(o,a)=>o||a)),error:s}},mo=T();Ve({from:gn.doneData,to:Bt});D({clock:gn.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:X.evokePopUpMessage});const mp=ee(qn).on(Ht,e=>({...e,error:null})).on(Ht.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Ht.failData,(e,i)=>({...e,error:i.message})).on(Bt,e=>({...e,error:null})).on(Bt.doneData,(e,i)=>({...e,listApplication:i})).on(Bt.failData,(e,i)=>({...e,error:i.message})).on(Mt,e=>({...e,error:null})).on(Mt.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Mt.failData,(e,i)=>({...e,error:i.message})).on(mo,()=>({...qn})),ye={useApplications:xp},He={getApplicationsFx:Bt,getUserDataApplicationsFx:Ht,postApplicationFx:gn,getWorkerPosts:Mt},bp={clearStore:mo},vp=Object.freeze(Object.defineProperty({__proto__:null,effects:He,events:bp,selectors:ye},Symbol.toStringTag,{value:"Module"})),Yn={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},yp=()=>F(jp),bo=T(),vo=T(),yo=T(),jp=ee(Yn).on(bo,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(vo,e=>({...e,isOpen:!1})).on(yo,()=>({...Yn})),jo={useConfirm:yp},Be={evokeConfirm:bo,closeConfirm:vo,clearStore:yo},_p=Object.freeze(Object.defineProperty({__proto__:null,events:Be,selectors:jo},Symbol.toStringTag,{value:"Module"})),wp=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:F(c).data,loading:F(r.pending),error:F(c).error,completed:F(c).completed}),o=T(),a=z(async d=>{try{return(await i.post(d)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=z(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(d){throw new Error(d)}return n.data}),p=T(),c=ee(n).on(r,d=>({...d,error:null})).on(r.doneData,(d,h)=>({...d,data:h})).on(r.failData,(d,h)=>({...d,error:h.message})).on(o,(d,h)=>({...d,completed:h.completed})).on(p,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:p}}},{effects:kp,events:Tp,selectors:Sp}=wp({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:Id,post:Dd}}),Ep=Object.freeze(Object.defineProperty({__proto__:null,effects:kp,events:Tp,selectors:Sp},Symbol.toStringTag,{value:"Module"})),$p=si({api:{get:ao,post:Nd},prepareData:e=>e[0]}),ne=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Jn=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),ne(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),ne(n,"extraWeird")}},pi=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Jn(-30*11),maxValueInput:Jn(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ui={kvdCert:pi({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:pi({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:pi({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:pi({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},we=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const p=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const c=new Date(a.minValueInput);if(p<c)return!0}if(a.maxValueInput){const c=new Date(a.maxValueInput);if(p>c)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(p=>!!p.files.length)})&&n&&s},Pp={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Op=()=>Object.keys(ze).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),_o=(e="")=>({[e]:{...Op(),[ze["settings-appearance"]]:{id:ze["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[ze["settings-home-page"]]:{id:ze["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0,news:!0}},[ze["settings-customize-menu"]]:{id:ze["settings-customize-menu"],property:{pages:$i}},[ze["settings-notifications"]]:{id:ze["settings-notifications"],property:Pp}}});var ze=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(ze||{});const Ki={settings:_o(),error:null,completed:!1};let Oe;const Ap=()=>({settings:F(bi).settings[Oe],error:F(bi).error,completed:F(bi).completed}),Cp=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},wo=z(e=>{Oe=e;const i=JSON.parse(localStorage.getItem(G.NewSettings)??"{}")[Oe];return Cp(i,_o(e)[e])}),ko=T(),To=T(),So=T(),bi=ee(Ki).on(To,(e,i)=>({...e,completed:i.completed})).on(wo.doneData,(e,i)=>({...e,settings:{[Oe]:i}})).on(ko,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Oe]:{...e.settings[Oe],[i]:{...e.settings[Oe][i],property:{...e.settings[Oe][i].property,[n]:s}}}}})).on(So,()=>({...Ki}));bi.watch(e=>{if(e!==Ki&&Oe){const i=JSON.parse(localStorage.getItem(G.NewSettings)??JSON.stringify({}));i[Oe]=e.settings[Oe],localStorage.setItem(G.NewSettings,JSON.stringify(i))}});const Et={useSettings:Ap},oi={updateSetting:ko,changeCompleted:To,clearStore:So},Np={getLocalSettingsFx:wo},Ai=()=>{var a,r;const{settings:e}=Et.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const p=new Date().getHours()*60+new Date().getMinutes(),c=i.property.lightThemeRange??0,d=p>+c[0]&&p<+c[1],h=i.property.scheduledLightTheme?d?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(p=>{s(()=>{const c=p?"dark":"light";return document.documentElement.setAttribute("data-theme",c),oi.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:c}),c})},[]);return{theme:n,switchTheme:o}},Ip=u.button`
    display: flex;
    align-items: center;
    justify-content: ${({align:e="center"})=>e};
    border: none;
    color: ${({textColor:e})=>e||"var(--text)"};
    background: ${({isChosen:e,background:i})=>e?"var(--blue)":i??"var(--search)"};
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

    @media (max-width: 1000px) {
        font-size: 12px;
        height: ${({height:e="36px"})=>e};
        position: ${({fixedInMobile:e})=>e&&"absolute"};
        z-index: ${({fixedInMobile:e})=>e&&"5"};
        bottom: 10px;
        right: 10px;
        padding: 0;

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
`;function y(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:p,hoverBackground:c,align:d,isChosen:h,padding:g,shrinkTextInMobile:f,fixedInMobile:x,direction:m="horizontal",isActive:b=!0,height:v,notActiveClickMessage:$,flipped:j,...E}=e,k=q=>{b?s==null||s(q):$&&X.evokePopUpMessage({type:"failure",message:$,time:1e4})};return t.jsxs(Ip,{text:!!n,onClick:k,isChosen:h,width:o,minWidth:a,background:r,padding:g,textColor:p,shrinkTextInMobile:f,hoverBackground:c,align:d,direction:m,isActive:b,fixedInMobile:x,height:v,flipped:j,...E,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const Qi=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Xn=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Dp=u.div`
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
`,Rp=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],ai=u.div.withConfig({shouldForwardProp:e=>!Rp.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Xn(n):Qi(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Qi(i):Xn(n)};
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
`,Lp=u.div`
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
`;function W({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Lp,{pulse:s,size:i,shape:e,margin:n})}const zp=u(ai)`
    height: 100%;
`,Fp=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(zp,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(W,{...o,key:a}))}),st=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Mp({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:st(n),children:i});case 2:return t.jsx("h2",{className:"title",style:st(n),children:i});case 3:return t.jsx("h3",{className:"title",style:st(n),children:i});case 4:return t.jsx("h4",{className:"title",style:st(n),children:i});case 5:return t.jsx("h5",{className:"title",style:st(n),children:i});case 6:return t.jsx("h6",{className:"title",style:st(n),children:i});default:return t.jsx("h1",{className:"title",style:st(n),children:i})}}const Bp=u.div`
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
`,Hp=u.span`
    color: var(--red);
    margin-right: 5px;
`,Up=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function B(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:p="center",bottomGap:c=!1,visible:d=!0}=e;return d?t.jsxs(Bp,{size:o,className:"title-wrapper",align:p,bottomGap:c,iconColor:n,children:[i,t.jsxs(Mp,{size:o,width:r,children:[a&&t.jsx(Hp,{children:"*"}),t.jsx(Up,{width:r,children:s})]})]}):null}const Wp=(e,i,n)=>n?"#fff":e?w[pt[i].color].dark3:w[pt[i].color].light3,Vp=u.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Wp(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[pt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[pt[e].color][i?"main":"light2"]};
    }
`,Gp=()=>t.jsx(Fp,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function J({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:p,fontSize:c,gap:d,lineHeight:h,solidBackground:g=!1,align:f="left",visible:x=!0,loading:m=!1}){if(!x)return null;const{theme:b}=Ai();return t.jsxs(Vp,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:f,width:s,maxWidth:o,padding:p,fontSize:c,gap:d,lineHeight:h,solidBackground:g,children:[t.jsx(B,{size:4,align:f,icon:n===null?null:n??pt[e].icon({}),children:a??pt[e].title}),r&&t.jsx(y,{onClick:r,icon:t.jsx(Ge,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),m&&t.jsx(Gp,{})]})}u.div`
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
`;const qp=u.div`
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
`,Yp=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(qp,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),xe=u.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Jp="/assets/sad-emoji-0c60bf90.gif",ie=u.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,Xp=u.div`
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
`;function he({text:e,image:i,size:n,children:s}){return t.jsxs(Xp,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Jp,alt:"груфтим("}):i}),t.jsx(ie,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Kp="/assets/loading-c8041cd3.gif",Qp=u.img`
    width: 40px;
`;function ft(e){return t.jsx(Qp,{...e,src:Kp,alt:"loading",className:"loading-circle"})}const Zp="/assets/logo-4d9aa449.png",eu="/assets/mospolytech-logo-white-b1e4f630.png",tu=u.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function Ci({width:e,className:i,short:n=!1}){return t.jsx(tu,{width:e,className:i??"logo",children:t.jsx("img",{src:n?eu:Zp,alt:"Logo"})})}const iu=u.img``;function fn({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(W,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(iu,{src:i,alt:o,height:n,width:s})}const nu=u.div`
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
        background: var(--schedule);
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
`;function su({size:e,color:i}){return t.jsx(nu,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const ou=u.div`
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
`;function au(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:p=!0,isActive:c=!0}=e;return t.jsxs(ou,{isActive:c,width:s,textAreaAppearance:p,children:[t.jsx(B,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:d=>n(d.target.value),placeholder:o,required:a,value:i})]})}const ru=u.button`
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
`,ut=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:p="Успешно",popUpFailureMessage:c="Nope",pulsing:d,isDone:h=!1,isActive:g=!0,isLoading:f=!1,completed:x=!1,repeatable:m=!0,alerts:b=!0})=>{l.useEffect(()=>{x&&b&&(X.evokePopUpMessage({message:p,type:"success"}),m&&setTimeout(()=>{o(!1)},2e3))},[x,o]);const v=()=>{if(g&&!h&&!f)return i();b&&X.evokePopUpMessage({message:c,type:"failure"})};return t.jsx(ru,{isLoading:f,background:a,className:"submit-button",completed:x,isActive:g&&!h&&!x,onClick:v,isDone:h,width:n,height:s,repeatable:m,tabIndex:g&&!h?0:-1,pulsing:d&&!h,children:t.jsx("div",{className:"inner-button",children:x?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(dc,{})," ",r]}):f?t.jsx(ft,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},lu=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,cu=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},du={groupMask:lu,phoneMask:cu},pu=(e,i,n,s,o,a,r,p)=>{const[c,d]=l.useState(n),[h,g]=l.useState(s??!1);l.useEffect(()=>{d(n)},[n]);const f=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:c,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>d(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(i(p?r?r(v.target.value,e):n==="tel"?du.phoneMask(v):n==="email"?f(v.target.value):v.target.value:v.target.value),n==="date"&&(o||a)){const $=new Date(v.target.value);let j=!1;if(o){const E=new Date(o);j=$<E}if(a&&!j){const E=new Date(a);j=$>E}g(j)}}}},uu=u.div`
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
`,Qe=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:p,width:c,minWidth:d,customMask:h,placeholder:g="Введите сюда",type:f="text",danger:x,alertMessage:m,loading:b=!1,isActive:v=!0,inputAppearance:$=!0,mask:j=!1,autocomplete:E=!1,minValue:k=void 0,maxValue:q=void 0,maxLength:O=void 0}=i,{inputType:R,buttonOnClick:te,danger:I,handleOnChange:ae,phoneMaskKeyDown:Le}=pu(s,o,f,x,k,q,h,j);return t.jsxs(uu,{leftIcon:!!a,isActive:v,inputAppearance:$,width:c,danger:I,minWidth:d,children:[t.jsx(B,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:p,children:r}),t.jsx(J,{type:"alert",visible:!!m,icon:t.jsx(pc,{}),title:m??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:g,min:k,max:q,maxLength:O,step:q?.1:void 0,type:R,placeholder:g,value:s??"",autoComplete:E?"on":"off",onKeyDown:Ee=>f==="tel"&&Le(Ee),onChange:ae,required:p,readOnly:!v,ref:n}),f!=="password"?!!(s!=null&&s.length)&&$&&(b?t.jsx(ft,{}):t.jsx(y,{icon:t.jsx(Ge,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(y,{icon:R==="password"?t.jsx(uc,{}):t.jsx(Fs,{}),tabIndex:-1,onClick:te})]})}),hu=u.div`
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
        background: var(--select);
        cursor: pointer;
        border-radius: 50px;
        padding: 4px;
        transition: 0.2s background;
    }

    .toggle-circle {
        height: 100%;
        background: var(--toggle);
        width: 22px;
        display: block;
        border-radius: 100%;
        transition: 0.2s;
    }

    .checkbox:checked + .toggle-body .toggle-circle {
        background: #fff;
        margin-left: calc(100% - 22px);
        /* box-shadow: 0 0 30px #6290e4; */
    }

    .checkbox:checked + .toggle-body {
        background: #6290e4;
    }

    .checkbox:active + .toggle-body .toggle-circle {
        transform: scale(0.9);
    }
`,gu="/assets/thinking-emoji-f3c10f79.gif",fu=["loading"],xu=u.div.withConfig({shouldForwardProp:e=>!fu.includes(e)})`
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

    @media (max-width: 1000px) {
        margin-top: 25px;
    }
`,tt=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(xu,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(he,{text:n,image:a&&gu,children:!a&&t.jsx(y,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Ms,{})})})}):t.jsx(ft,{})}),t.jsx("div",{className:"content",children:e})]})),mu=u.a`
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
`,bu=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:p,height:c,minHeight:d,padding:h,isActive:g=!0,isChosen:f=!1})=>t.jsxs(mu,{text:!!i,onClick:x=>g&&n&&n(x),isChosen:f,width:s,background:o,textColor:a,href:p,align:r,isActive:g,height:c,padding:h,minHeight:d,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),it=l.memo(bu),Eo=u.div`
    width: 100%;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"700px"};
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--schedule);
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-top: 60px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,$t=u.div`
    width: 100%;
    margin-bottom: 20px;
    height: fit-content;
    max-width: ${({maxWidth:e})=>e??"600px"};
    padding: 20px;
    border-radius: var(--brSemi);
    background: transparent;
    box-shadow: var(--schedule-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`,vu=u.a`
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
`,yu=({title:e,link:i,type:n})=>t.jsxs(vu,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(N,{}):t.jsx(hc,{})}),t.jsx("div",{className:"title",children:e})]}),ju=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),_u={open:!1,content:null,type:"left-click",position:{x:0,y:0}},wu=()=>ke(ku),$o=T(),Po=T(),Oo=T(),ku=ee(_u).on($o,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:ju(n,220,s),open:!0,content:i,type:o})).on(Po,e=>({...e,open:!1})).on(Oo,(e,{position:i})=>({...e,position:i})),Ce={open:$o,close:Po,changePosition:Oo},Tu={useContextMenu:wu},Su=()=>{const e=navigator.userAgent;return e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":"Windows"},Wi=new Set,Ao=(e,i)=>{l.useEffect(()=>{window.addEventListener("keydown",n=>{Wi.add(n.key),!e.slice(0,e.length-1).find(o=>!Wi.has(o))&&e[e.length-1]===n.key&&i()}),window.addEventListener("keyup",n=>{Wi.delete(n.key)})},[])},qe=u.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: ${({justifyContent:e})=>e??"space-between"};
    background: ${({background:e})=>e??"var(--schedule)"};
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

    @media (max-width: 1400px) {
        max-width: ${({maxWidth:e})=>e??"800px"};
        /* width: 100%; */
    }

    @media (max-width: 1225px) {
        max-width: ${({maxWidth:e})=>e??"600px"};
    }

    @media (max-width: 550px) {
        /* height: auto; */
        /* max-height: 100%; */
        flex-direction: column;
        /* gap: 1rem; */
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,P=u.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({$wrap:e})=>e&&"wrap"};
`,me=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Co=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=me(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},No=e=>/[A-Za-z]/.test(e),Eu=u.span`
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
`,Io=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!No(e))return null;const s=Co(e),o=()=>i(s);return t.jsxs(ie,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Eu,{tabIndex:10,children:s})]})};function Pt(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function Ze(e,i,n=0){return e>i?n:e<n?i:e}const $u=u.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,Pu=u(qe)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,Ou=u.div`
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
        background: ${({selected:e})=>e?w.blue.main:"var(--mild-theme)"};
    }
`,Do=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:p,setValue:c,customMask:d,onHintClick:h,validationCheck:g=!1})=>{const[f,x]=l.useState(0),[m,b]=l.useState(!1),v=l.useRef(null),$=l.useRef(null),j=l.useRef(null);Pt(v,()=>b(!1)),l.useEffect(()=>{p&&setTimeout(()=>{var O;return(O=j.current)==null?void 0:O.focus()},50)},[p]);const E=O=>{var R,te;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),O.key==="ArrowDown"?((R=$.current)==null||R.scrollIntoView({block:"start",behavior:"smooth"}),typeof f=="number"&&x(Ze(f+1,((a==null?void 0:a.length)??1)-1,0))):O.key==="ArrowUp"?((te=$.current)==null||te.scrollIntoView({block:"end",behavior:"smooth"}),typeof f=="number"&&x(Ze(f-1,((a==null?void 0:a.length)??1)-1,0))):O.key==="Enter"?(a!=null&&a[f??0].title&&c(a==null?void 0:a[f??0].title),b(!1),h==null||h(a==null?void 0:a[f??0])):x(0)},k=O=>()=>{x(O),c((a==null?void 0:a[O].title)??""),b(!1),h==null||h(a==null?void 0:a[O])},q=()=>{a!=null&&a.length&&b(!0)};return t.jsxs($u,{width:i,onKeyDown:E,onMouseDown:q,ref:v,children:[t.jsx(Qe,{value:e,placeholder:n,leftIcon:r??t.jsx(ct,{}),inputAppearance:s,setValue:c,loading:o,width:i,mask:!0,customMask:d,ref:j}),t.jsx(Io,{setValue:c,value:e,visible:g}),m&&t.jsx(Pu,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:E,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:O,icon:R},te)=>{const I=f===te;return t.jsxs(Ou,{onClick:k(te),ref:I?$:null,selected:I,children:[R&&t.jsx("div",{className:"icon",children:R}),t.jsx("span",{children:O})]},O+te)})})]})},Ni=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Au=u.div`
    width: 100%;
    height: 100%;
    min-width: calc(100% / ${({size:e})=>e});
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
`,Cu=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,size:o,condition:a=!0})=>t.jsx(Au,{className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),size:o,condition:a,children:t.jsx("b",{children:s})}),Nu=l.memo(Cu);u.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: 50px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--search2);
    border-radius: 17px;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    .SliderItem {
        width: 100%;
        height: 100%;
        min-width: calc(100% / ${({size:e})=>e});
        padding: 10px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.6;
        transition: 0.2s opacity, 0.2s transform;
        z-index: 1;
        cursor: pointer;
        user-select: none;
        color: var(--text);

        &:hover {
            filter: brightness(0.8);
        }

        &.active {
            opacity: 1;
        }

        &:active {
            transform: scale(0.97);
        }
    }

    .currentPage {
        min-width: 80px;
        height: calc(100% - 0px);
        background: var(--theme);
        display: block;
        position: absolute;
        transition: 0.3s left, 0.2s transform;
        z-index: 0;
        border-radius: 14px;
        scroll-snap-align: center;
    }

    @media (max-width: 1000px) {
        font-size: 11px;
        min-height: 40px;
        border-radius: var(--brLight);

        .currentPage {
            border-radius: calc(var(--brLight) - 2px);
        }

        .slider-body {
            height: 34px;
        }
    }
`;const Iu=u.span`
    min-width: 80px;
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--mild-theme)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(var(--brLight) - 2px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,size:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,size:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,Du=({currentPage:e,pages:i,size:n,appearance:s})=>{const o=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(Iu,{currentPage:e,appearance:s,moreThanNeeded:o,pages:i,size:n})},Ru=l.memo(Du),Lu=u.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: 50px;
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--search2)"};
    border-radius: ${({appearance:e})=>e&&"var(--brLight)"};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
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
`,zu=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0})=>{const[a,r]=l.useState(5),p=l.useRef(null),{width:c}=Ni();return l.useEffect(()=>{var h;const d=((h=p==null?void 0:p.current)==null?void 0:h.offsetWidth)??c;d>800?r(5):d>600&&d<=800||d>400&&d<=600?r(4):d<=400&&r(3)},[c,p.current]),t.jsx(Lu,{ref:p,size:a,sliderWidth:s,appearance:o,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Ru,{appearance:o,pages:e,currentPage:i,size:a}),e.map((d,h)=>t.jsx(Nu,{id:h,currentPage:i,setCurrentPage:n,pageTitle:d.title,condition:d.condition,size:a},h))]})})},xn=l.memo(zu),Fu=300,Ro=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Fu})=>{const[p,c]=l.useState(e??""),[d,h]=l.useState(""),[g,f]=l.useState(!1);return l.useEffect(()=>{if(p!==null)if(p.length){f(!0);const x=setTimeout(async()=>{await i(p),h(p),f(!1)},r);return()=>clearTimeout(x)}else d.length!==0&&(n==null||n(p),c(""),f(!1))},[p]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(p))??!0)){f(!0);const x=setTimeout(async()=>{await i(p),f(!1)},o??r);return()=>clearTimeout(x)}},[...a]),[p,c,g]},ht=u.span`
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
    animation: ${({pulsing:e})=>e&&"2s notif-pulsing infinite"};

    @keyframes notif-pulsing {
        0% {
            outline: 0px solid ${({color:e})=>w[e??"red"].main};
        }
        50% {
            outline: 10px solid transparent;
        }
        100% {
            outline: 0px solid transparent;
        }
    }
`,Mu=u.div`
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
`,Ne=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(Mu,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(ht,{outline:"4px solid var(--schedule)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Lo=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:p=!1,placeholder:c="Поиск по меню",validationCheck:d=!1})=>{const h=v=>{n(i(v,e))},g=()=>{n(null)},[f,x,m]=Ro({onDebounce:h,onClear:g}),b=v=>{x(v),o&&o(v)};return t.jsx(Do,{value:f??"",setValue:b,inputAppearance:s,placeholder:c,validationCheck:d,loading:p?m:!1,hints:a,width:r})},Bu=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(hu,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),zo=u.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Hu=u(zo)`
    background: var(--almostTransparentOpposite);
`,Uu=u(zo)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Fo=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(be,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Hu,{},a)),t.jsx(Uu,{color:n,current:i})]}),Wu=u.div`
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
`,Ue=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>o?t.jsxs(Wu,{checked:i,invisibleOnFalse:r,fontSize:s,onClick:()=>{a&&n(!i)},isActive:a,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||r?t.jsx(Bs,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Hs,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"checkbox-text",children:e})]}):null,Mo=e=>e.split("/")[1],Vu=e=>e*1024*1024,Gu=(e,i)=>(i??xd).indexOf(e.type)!==-1,Kn=(e,i,n,s,o=md)=>{if(n&&i.length+e.length>n)return X.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Gu(e[a],s)?e[a].size>Vu(o)?(X.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),X.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>Mo(r))}`,type:"failure",time:5e3}),i)},qu=u.label`
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
            background: var(--schedule);
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
`,Ot=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Yu=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[p,c]=l.useState(!1),d=m=>{const b=m.target.files;b!=null&&b.length&&n(Kn(b,e,i,o,a))},h=m=>{m.preventDefault()},g=m=>{m.preventDefault(),c(!1);const b=m.dataTransfer.files;b.length&&n(Kn(b,e,i,o,a))},f=m=>{m.preventDefault(),c(!0)},x=m=>{m.preventDefault(),c(!1)};return t.jsxs(qu,{isActive:s,showPulse:p,onDragOver:m=>s&&h(m),onDragEnter:m=>s&&f(m),onDragLeave:m=>s&&x(m),onDrop:m=>s&&g(m),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:d}),t.jsxs("div",{className:"message",children:[t.jsx(Ui,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(Ui,{className:"icon-1"}),t.jsx(Ui,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(ie,{align:"center",children:t.jsx(Ot,{words:[`Форматы: ${o?o.map(m=>Mo(m)).join(", "):"jpg, png, pdf"}`,`Макс. файлов: ${i}`]})})]})]})},Ju=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Xu=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Ku=u.div`
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
`,Qu=({file:e,files:i,setFiles:n})=>{const{open:s}=K(),o=(r,p)=>{r.preventDefault(),r.stopPropagation();const c=new FileReader;c.onloadend=()=>{s(t.jsx(fn,{src:c.result,loading:!1,width:"500px",height:""}))},p&&c.readAsDataURL(p)},a=r=>Be.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Xu(r,e.name,i))});return t.jsxs(Ku,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(gc,{}):t.jsx(fc,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ie,{fontSize:"0.7em",children:Ju(e.size)})]})]}),t.jsx(y,{icon:t.jsx(Ge,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Zu=({files:e,setFiles:i})=>t.jsx(be,{title:"Список файлов",visible:!!e.length,onDelete:()=>Be.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Qu,{file:n,files:e,setFiles:i},n.name))}),Bo=e=>t.jsxs(be,{gap:12,children:[t.jsx(Yu,{...e}),t.jsx(Zu,{files:e.files,setFiles:e.setFiles})]}),eh=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,th=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(eh,{children:[t.jsx(Ue,{...e}),n&&t.jsx(Bo,{...i})]}),ih=u.div`
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
`,Ho=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:p})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const c=new Date(n[0]),d=new Date(c);d.setDate(c.getDate()+r),n[1]=ne(d,"extraWeird")}return t.jsxs(ih,{children:[t.jsx(B,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(J,{title:"Внимание",type:"alert",icon:t.jsx(Yt,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(Qe,{value:n[0],danger:!o,setValue:c=>s([c,n[1]]),type:"date",minValue:p}),t.jsx(Qe,{value:n[1],setValue:c=>s([n[0],c]),type:"date",danger:!o})]})]})},nh=e=>{var m,b,v;const{width:i}=Ni(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[p,c]=l.useState(0),[d,h]=l.useState(0),g=((m=n.current)==null?void 0:m.clientWidth)??1,f=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=p,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[p,(v=n.current)==null?void 0:v.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:c,pageOffset:g,amountOfPages:f,currentPage:d,setCurrentPage:h,handleScroll:$=>{h(Math.ceil($.currentTarget.scrollLeft/(g+(e??0))))}}},sh=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:p,wrap:c,onAdd:d,onWatchMore:h,onDelete:g,showPages:f,innerPadding:x,minWidth:m,wrapOnMobile:b,position:v,direction:$="vertical",verticalAlign:j="top",horizontalAlign:E="left",scroll:k=!0,visible:q=!0,...O}=e;if(!q)return null;const{listRef:R,leftArrow:te,rightArrow:I,handleScroll:ae,setScrollLeft:Le,pageOffset:Ee,amountOfPages:It,currentPage:Dt}=nh(s);return t.jsxs(Dp,{padding:r,position:v,width:o,minWidth:m,height:a,children:[t.jsxs(B,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,d&&t.jsx(y,{icon:t.jsx(Jt,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:d}),h&&t.jsx(y,{width:"50px",height:"15px",background:w.blue.transparent2,textColor:w.blue.light1,onClick:h,text:"Ещё"}),g&&t.jsx(y,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:g,text:"Удалить"})]}),t.jsx(ai,{verticalAlign:j,horizontalAlign:E,direction:$,ref:R,gap:s,width:o,height:a,fontSize:p,wrap:c,innerPadding:x,scroll:k,wrapOnMobile:b,onScroll:ae,...O,children:n}),(I||te)&&t.jsxs("div",{className:"bottom-wrapper",children:[te&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(ti,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{Le($e=>{var nt;return Ze($e-Ee-(s??0),((nt=R.current)==null?void 0:nt.scrollWidth)??0)})}}),f&&t.jsx(Fo,{direction:"horizontal",current:Dt,amount:It}),I&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(St,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{Le($e=>{var nt;return Ze($e+Ee+(s??0),((nt=R.current)==null?void 0:nt.scrollWidth)??0)})}})]})]})},be=le.memo(sh),oh=()=>t.jsx("div",{className:"left",children:t.jsxs(be,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(Ci,{width:"50px",short:!0,className:"logo first"}),t.jsxs(be,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:Nn,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Xt,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:dr,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(xc,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:cr,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Yt,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:pr,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Yt,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(xe,{}),t.jsx(Z,{to:lr,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(mc,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(it,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(Us,{}),align:"left",padding:"0",width:"100%",href:`${A}/index.php`})]})}),ah=()=>{const{search:e}=Ws();return le.useMemo(()=>new URLSearchParams(e),[e])},rh=()=>{const e=ah(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[p,c]=l.useState(!1),d=!!a&&!!s,h=Zt.login,g=m=>{c(m.getModifierState("CapsLock")),m.key==="Enter"&&h({login:s,password:a})},f=m=>{Zt.changeSavePassword({savePassword:m})},x=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:d,handleSavePassword:f,handleKeyPress:g,handleLogin:x,password:a,setPassword:r,capsLock:p,login:s,setLogin:o}},lh=()=>{const{loading:e,error:i,data:n}=ce.useUser(),{isSubmitActive:s,handleKeyPress:o,handleSavePassword:a,handleLogin:r,password:p,setPassword:c,capsLock:d,login:h,setLogin:g}=rh();return t.jsx("div",{className:"right",onKeyDown:o,children:t.jsxs(be,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(Ci,{width:"50px",short:!0,className:"logo second"}),t.jsx(P,{jc:"space-between",children:t.jsx(B,{size:3,align:"left",children:"Личный кабинет"})}),t.jsxs(J,{type:"info",title:"Уважаемые абитуриенты!",children:["Личный кабинет абитуриента находится по ссылке",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:" lk.mospolytech.ru"})})]}),t.jsxs(be,{gap:16,scroll:!1,children:[t.jsx(B,{size:4,align:"left",children:"Вход"}),t.jsx(ie,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(J,{type:"failure",visible:!!i,children:i}),t.jsx(J,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(Qe,{value:h,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(Qe,{value:p,setValue:c,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:d?"Включен Capslock":void 0}),t.jsx(Ue,{text:"Оставаться в системе",checked:n.savePassword,setChecked:a})]}),t.jsx(ut,{text:"Вход",action:r,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},ch=u(qe)`
    overflow: hidden;
    box-shadow: ${({isAuthenticated:e})=>e?"none":"0 0 1px var(--theme-mild-opposite)"};
    min-height: 480px;
    transition: 0.2s box-shadow;
    position: relative;
    background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--schedule)"};

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
        background: ${({isAuthenticated:e})=>e?"var(--theme)":"var(--theme-mild-xxl)"};
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
`,dh=()=>{const{data:{isAuthenticated:e}}=ce.useUser();return t.jsxs(ch,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(oh,{}),t.jsx(lh,{})]})},ph=u.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    @media (max-width: ${bd}) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,uh=()=>t.jsx(ph,{children:t.jsx(dh,{})}),fe=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(he,{text:i,children:o&&t.jsx(it,{text:n,onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"var(--purple)",width:"300px",href:`${A}/?p=${e==null?void 0:e.slice(1,e.length)}`})})),hh="modulepreload",gh=function(e){return"/"+e},Qn={},_=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=gh(a),a in Qn)return;Qn[a]=!0;const r=a.endsWith(".css"),p=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===a&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":hh,r||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),r)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},fh=l.lazy(()=>_(()=>import("./index-2479ed03.js"),["assets/index-2479ed03.js","assets/vendor-198a3a64.js","assets/get-default-subdivision-26fa3641.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js"])),xh=l.lazy(()=>_(()=>import("./index-e25617f5.js"),["assets/index-e25617f5.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),mh=l.lazy(()=>_(()=>import("./index-7f26252f.js"),["assets/index-7f26252f.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js"])),bh=l.lazy(()=>_(()=>import("./index-69dc2886.js"),["assets/index-69dc2886.js","assets/vendor-198a3a64.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>_(()=>Promise.resolve().then(()=>Hx),void 0));const vh=l.lazy(()=>_(()=>import("./index-132bfb0c.js"),["assets/index-132bfb0c.js","assets/vendor-198a3a64.js","assets/index-1ac9ad1e.js"])),yh=l.lazy(()=>_(()=>import("./index-c1747b06.js"),["assets/index-c1747b06.js","assets/vendor-198a3a64.js","assets/index-0ebadac4.js"])),jh=l.lazy(()=>_(()=>import("./index-aa3a9713.js"),["assets/index-aa3a9713.js","assets/vendor-198a3a64.js","assets/get-default-subdivision-26fa3641.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js"])),_h=l.lazy(()=>_(()=>import("./index-2272fcf3.js"),["assets/index-2272fcf3.js","assets/vendor-198a3a64.js","assets/get-default-subdivision-26fa3641.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),wh=l.lazy(()=>_(()=>import("./index-a4a66238.js"),["assets/index-a4a66238.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),kh=l.lazy(()=>_(()=>import("./index-c44f3402.js"),["assets/index-c44f3402.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js"])),Th=l.lazy(()=>_(()=>import("./index-42c01110.js"),["assets/index-42c01110.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Sh=l.lazy(()=>_(()=>import("./index-d83282c6.js"),["assets/index-d83282c6.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js"])),Eh=l.lazy(()=>_(()=>import("./index-7053e137.js"),["assets/index-7053e137.js","assets/vendor-198a3a64.js","assets/ui-7fa505bc.js"])),$h=l.lazy(()=>_(()=>import("./index-e5efceb3.js"),["assets/index-e5efceb3.js","assets/vendor-198a3a64.js","assets/ui-7fa505bc.js"])),Ph=l.lazy(()=>_(()=>import("./index-e68eacea.js"),["assets/index-e68eacea.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js"])),Oh=l.lazy(()=>_(()=>import("./index-b8aa7e4d.js"),["assets/index-b8aa7e4d.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Ah=l.lazy(()=>_(()=>import("./index-74af14cf.js"),["assets/index-74af14cf.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-26fa3641.js"])),Ch=l.lazy(()=>_(()=>import("./index-da95ac5e.js"),["assets/index-da95ac5e.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js"])),Nh=l.lazy(()=>_(()=>import("./index-171ad22d.js"),["assets/index-171ad22d.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Ih=l.lazy(()=>_(()=>import("./index-1b278478.js"),["assets/index-1b278478.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Dh=l.lazy(()=>_(()=>import("./index-b64d766d.js"),["assets/index-b64d766d.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Rh=l.lazy(()=>_(()=>import("./index-d996784b.js"),["assets/index-d996784b.js","assets/vendor-198a3a64.js","assets/get-default-subdivision-26fa3641.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js"])),Lh=l.lazy(()=>_(()=>import("./index-07351173.js"),["assets/index-07351173.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js"])),zh=l.lazy(()=>_(()=>import("./index-5f1f97e1.js"),["assets/index-5f1f97e1.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js"])),Fh=l.lazy(()=>_(()=>import("./index-8aec68aa.js"),["assets/index-8aec68aa.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-26fa3641.js"])),Mh=l.lazy(()=>_(()=>import("./index-07ed1234.js"),["assets/index-07ed1234.js","assets/vendor-198a3a64.js","assets/index-40f57976.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-a553f870.js","assets/get-default-subdivision-26fa3641.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Bh=l.lazy(()=>_(()=>import("./index-0e15b138.js"),["assets/index-0e15b138.js","assets/vendor-198a3a64.js"]));l.lazy(()=>_(()=>import("./index-038a5a54.js"),["assets/index-038a5a54.js","assets/vendor-198a3a64.js","assets/index-3a32b103.js","assets/index-1ebd5fac.js"]));const mn=l.lazy(()=>_(()=>import("./index-73a94727.js"),["assets/index-73a94727.js","assets/vendor-198a3a64.js"])),Hh=l.lazy(()=>_(()=>import("./index-21972e39.js"),["assets/index-21972e39.js","assets/vendor-198a3a64.js"])),Uh=l.lazy(()=>_(()=>import("./index-0677415d.js"),["assets/index-0677415d.js","assets/vendor-198a3a64.js","assets/send-hr-form-holiday-work-69c26bcf.js"])),Wh=l.lazy(()=>_(()=>import("./index-258bf63c.js"),["assets/index-258bf63c.js","assets/vendor-198a3a64.js"])),Vh=l.lazy(()=>_(()=>import("./index-7c53328a.js"),["assets/index-7c53328a.js","assets/vendor-198a3a64.js"])),Gh=l.lazy(()=>_(()=>import("./index-316be674.js"),["assets/index-316be674.js","assets/vendor-198a3a64.js","assets/send-hr-form-holiday-work-69c26bcf.js"])),qh=l.lazy(()=>_(()=>import("./index-f8f7b6cc.js"),["assets/index-f8f7b6cc.js","assets/vendor-198a3a64.js"])),Yh=l.lazy(()=>_(()=>import("./index-2382aa6d.js"),["assets/index-2382aa6d.js","assets/vendor-198a3a64.js"])),Jh=l.lazy(()=>_(()=>import("./index-f5c7c191.js"),["assets/index-f5c7c191.js","assets/vendor-198a3a64.js"])),Xh=l.lazy(()=>_(()=>import("./index-96af331f.js"),["assets/index-96af331f.js","assets/vendor-198a3a64.js","assets/send-hr-form-work-transfer-3443db6e.js"])),Kh=l.lazy(()=>_(()=>import("./index-af00b701.js"),["assets/index-af00b701.js","assets/vendor-198a3a64.js","assets/send-hr-form-work-transfer-3443db6e.js"]));l.lazy(()=>_(()=>Promise.resolve().then(()=>gf),void 0));l.lazy(()=>_(()=>import("./index-d04e6e69.js"),["assets/index-d04e6e69.js","assets/vendor-198a3a64.js","assets/help-links-4c054a35.js"]));const Qh=l.lazy(()=>_(()=>import("./index-42054a74.js"),["assets/index-42054a74.js","assets/vendor-198a3a64.js"])),Uo=l.lazy(()=>_(()=>import("./index-ff6b498c.js"),["assets/index-ff6b498c.js","assets/vendor-198a3a64.js","assets/index-3a32b103.js","assets/index-1ebd5fac.js"])),Wo=l.lazy(()=>_(()=>import("./index-038a5a54.js"),["assets/index-038a5a54.js","assets/vendor-198a3a64.js","assets/index-3a32b103.js","assets/index-1ebd5fac.js"])),Zh=l.lazy(()=>_(()=>import("./index-bd85301e.js"),["assets/index-bd85301e.js","assets/vendor-198a3a64.js"]));l.lazy(()=>_(()=>import("./index-03da993e.js"),["assets/index-03da993e.js","assets/vendor-198a3a64.js","assets/index.esm-d832a8b7.js"]));const eg=l.lazy(()=>_(()=>import("./index-65fd25bf.js"),["assets/index-65fd25bf.js","assets/vendor-198a3a64.js"])),Vo=l.lazy(()=>_(()=>import("./index-d60070e9.js"),["assets/index-d60070e9.js","assets/vendor-198a3a64.js","assets/help-links-4c054a35.js"])),tg=l.lazy(()=>_(()=>import("./index-80b40f98.js"),["assets/index-80b40f98.js","assets/vendor-198a3a64.js"])),ig=l.lazy(()=>_(()=>import("./index-c0460092.js"),["assets/index-c0460092.js","assets/vendor-198a3a64.js"])),ng=l.lazy(()=>_(()=>import("./index-b543679d.js"),["assets/index-b543679d.js","assets/vendor-198a3a64.js","assets/week-schedule-17e38314.js"])),sg=l.lazy(()=>_(()=>import("./index-c36a73ce.js"),["assets/index-c36a73ce.js","assets/vendor-198a3a64.js"]));l.lazy(()=>_(()=>Promise.resolve().then(()=>Pm),void 0));const og=l.lazy(()=>_(()=>import("./index-f3660342.js"),["assets/index-f3660342.js","assets/vendor-198a3a64.js"])),ag=l.lazy(()=>_(()=>import("./index-386a3013.js"),["assets/index-386a3013.js","assets/vendor-198a3a64.js","assets/index-c57ceb11.js","assets/week-schedule-17e38314.js","assets/index-1ebd5fac.js"])),rg=l.lazy(()=>_(()=>import("./index-9e80d3f9.js"),["assets/index-9e80d3f9.js","assets/vendor-198a3a64.js","assets/index.esm-d832a8b7.js"])),lg=l.lazy(()=>_(()=>import("./index-b43f4f90.js"),["assets/index-b43f4f90.js","assets/vendor-198a3a64.js"])),cg=l.lazy(()=>_(()=>import("./index-7419a814.js"),["assets/index-7419a814.js","assets/vendor-198a3a64.js"])),dg=l.lazy(()=>_(()=>import("./index-2c32f309.js"),["assets/index-2c32f309.js","assets/vendor-198a3a64.js"])),pg=l.lazy(()=>_(()=>import("./index-6c6c58dc.js"),["assets/index-6c6c58dc.js","assets/vendor-198a3a64.js","assets/index-c57ceb11.js","assets/week-schedule-17e38314.js","assets/index-1ebd5fac.js"])),ug=l.lazy(()=>_(()=>import("./index-f3fdfeba.js"),["assets/index-f3fdfeba.js","assets/vendor-198a3a64.js","assets/index-1ac9ad1e.js"])),hg=l.lazy(()=>_(()=>import("./index-f74ba3e2.js"),["assets/index-f74ba3e2.js","assets/vendor-198a3a64.js"])),gg=l.lazy(()=>_(()=>import("./index-15b32aea.js"),["assets/index-15b32aea.js","assets/vendor-198a3a64.js","assets/help-links-4c054a35.js"])),fg=l.lazy(()=>_(()=>import("./index-dd993afa.js"),["assets/index-dd993afa.js","assets/vendor-198a3a64.js","assets/help-links-4c054a35.js"])),xg=l.lazy(()=>_(()=>import("./index-23959185.js"),["assets/index-23959185.js","assets/vendor-198a3a64.js"])),mg=l.lazy(()=>_(()=>import("./index-d04e6e69.js"),["assets/index-d04e6e69.js","assets/vendor-198a3a64.js","assets/help-links-4c054a35.js"])),bg=u.div`
    width: 100%;
`,vg=()=>t.jsxs(bg,{children:[t.jsx(W,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(W,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(W,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(W,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(W,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(W,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(W,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(W,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),_e=e=>{const{children:i,skeleton:n=t.jsx(vg,{}),loading:s=!1,...o}=e;return t.jsx(qe,{...o,className:"block",children:s?n:i})},yg=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},Vi=u.div`
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
`,jg=u.div`
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
`,_g=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const p=Object.keys(e??{}),{removeAll:c,removeOne:d,setRemoveAll:h,setRemoveOne:g}=yg(p,r);return p.length?t.jsxs(jg,{removeAll:c||closed,padding:o,height:a,children:[!!i&&t.jsxs(Vi,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(Jt,{}),"Добавить"]}),Object.values(e??{}).map(f=>{if(f!=null&&f.id)return t.jsxs(Vi,{background:f.background,remove:d===f.id,children:[t.jsx("div",{className:"element-text",children:f.title}),t.jsx("div",{className:"remove",onClick:()=>{p.length===1?(h(!0),n==null||n()):(g(f.id),s(f.id))},children:t.jsx(Ge,{})})]},f.id)}),p.length&&!!n&&t.jsx(Vi,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},Tt=(e,i)=>{switch(i){case"date":return ne(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},wg=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,kg=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[p,c]=l.useState(null),[d,h]=l.useState(e),g=l.useCallback(x=>{var m,b;o(v=>(v&&v[x]&&delete v[x],{...v})),x===((m=i==null?void 0:i.column)==null?void 0:m.field)&&n(null),x===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),f=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!p)c(x=>{const m=Object.values(s)[0].column;return x={[(m==null?void 0:m.field)??""]:{id:(m==null?void 0:m.field)??"",title:"Фильтр: "+(m==null?void 0:m.title)}},{...x}});else{const x=Object.values(s).find(m=>{var b;return!p[((b=m.column)==null?void 0:b.field)??""]});x&&c(m=>{var $,j;const b=(($=x.column)==null?void 0:$.field)??"",v="Фильтр: "+((j=x.column)==null?void 0:j.title);return m&&(m[b]={id:b,title:v}),{...m}})}i&&c(x=>{var v;const m=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return x?x[m]={id:m,title:b}:x={[m]:{id:m,title:b}},{...x}}),a&&c(x=>{var v;const m=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return x?x[m]={id:m,title:b}:x={[m]:{id:m,title:b}},{...x}})},[i,s,a]),l.useEffect(()=>{var b;const x=i==null?void 0:i.column,m=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&m){const v=e==null?void 0:e.filter($=>me(Tt($[m],x==null?void 0:x.type)).includes(me(Tt(i.value,x==null?void 0:x.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const x=e==null?void 0:e.filter(m=>!Object.values(s).find(b=>{var v;return m[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));h(x)}else c(x=>({...x})),h(e)},[s]),l.useEffect(()=>{var m;const x=((m=a==null?void 0:a.column)==null?void 0:m.field)??"";a?h(b=>{const v=[...b??[]];return v==null||v.sort(($,j)=>j[x]<$[x]?a.value==="asc"?1:-1:j[x]>$[x]?a.value==="asc"?-1:1:0),v}):(c(b=>{const v=wg(b,"Сортировка");return b&&v&&delete b[v],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:d,filter:s,setFilter:o,filterList:p,setFilterList:c,onRemoveOne:g,onRemoveAll:f}},Zi=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),Zi(n.children,i)):n?n.children:e},Tg=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[p,c]=l.useState(!1),d=l.useRef(null),h=l.useRef(null),[g,f]=l.useState([]),[x,m]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{m(i)});const $=l.useCallback(()=>{c(k=>!k)},[c]),j=l.useCallback(k=>{if(k.children)g.push(k.id.toString()),m(Zi(i,[...g])??[]),f([...g]);else{if(r)if(o)if(o.find(q=>q.id===k.id)){const q=o.filter(O=>O.id!==k.id);q.length?n(q):n(null)}else n([...o,k]);else n([k]);else n(k);!r&&$(),v(g.join("/"))}s==null||s(k)},[n,g]),E=l.useCallback(()=>{g.pop(),f([...g]),g.length===0?m(i):m(Zi(i,g)??[])},[g,m]);return Pt(d,()=>{p&&$()}),{handleOpen:$,refElement:d,isOpen:p,multiple:r,handleSelect:j,selectedRoute:b,currentItems:x,route:g,goBack:E,refItems:h,appearance:a}},Sg=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--schedule-shadow)"};
    position: relative;
    background: var(--schedule);
    border-radius: var(--brLight);
    overflow: hidden;

    &:hover {
        filter: brightness(0.95);
    }
`,Eg=u.div`
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
`,$g=u.header`
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
`,Pg=u.ul`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;
    min-height: 60px;
    /**
    *height: ${({itemsAmount:e})=>e*30+"px"};
    */

    position: absolute;
    top: ${({title:e})=>e?"80px":"46px"};

    box-shadow: var(--light-box-shadow);
    border-radius: var(--brLight);
    background: var(--schedule);
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
`,Zn=u.li`
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
`,Og=["isOpen"],Ag=u(bc).withConfig({shouldForwardProp:e=>!Og.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,Cg=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:p,route:c,goBack:d,refItems:h,appearance:g}=Tg(e),{isActive:f,width:x,title:m,required:b,selected:v,placeholder:$}=e;return t.jsxs(Eg,{onClick:i,appearance:g,ref:n,isOpen:s,isActive:f??!0,width:x,children:[t.jsx(B,{size:4,align:"left",bottomGap:"5px",visible:!!m,required:b,children:m}),t.jsxs(Sg,{multiple:o,appearance:g,children:[t.jsx($g,{appearance:g,children:o?v?v.map(j=>t.jsxs("div",{className:"header-item",children:[!!j.icon&&t.jsx("span",{className:"icon",children:j.icon}),t.jsx("span",{className:"header-title",children:j.title})]},j.id)):t.jsx("span",{className:"not-chosen multi",children:$??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:$??"Не выбрано"})})}),t.jsx(Ag,{isOpen:s})]}),t.jsxs(Pg,{width:x,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:p.length+(c.length?1:0),title:m,children:[!!c.length&&t.jsx(Zn,{isSelected:!1,onClick:j=>{j.stopPropagation(),d()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(ti,{}),"Назад"]})},-1),p.map(({id:j,icon:E,title:k,children:q,data:O})=>t.jsxs(Zn,{onClick:R=>{R.stopPropagation(),a({id:j,icon:E,title:k,children:q,data:O})},isSelected:!o&&!!v&&v.title.includes(k),leadingToSelected:r.includes(j.toString()),children:[!!E&&t.jsx("span",{className:"icon",children:E}),t.jsx("span",{className:"select-item-title",children:k}),!!q&&t.jsx("span",{className:"right-icon",children:t.jsx(St,{})}),o&&!!v&&!!v.find(R=>R.title.includes(k))&&t.jsx("span",{className:"right-icon",children:t.jsx(Si,{})})]},k))]})]})},Go=l.memo(Cg),Ng=e=>{switch(e){case"desc":return X.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return X.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return X.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Ig=u.div`
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
`,qo=u.div`
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
`,Dg=u.div`
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
`,Rg=u.div`
    display: flex;
    align-items: center;
`,Lg=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const p=c=>()=>{c.search&&n({value:"",column:c}),c.sort&&r(d=>{const h=d!=null&&d.value?d.value==="desc"?"asc":null:"desc";return Ng(h),h?{column:c,value:h}:null})};return t.jsx(Dg,{children:e.map(c=>{var d,h,g,f;return t.jsxs(qo,{overflow:c.catalogs?"visible":"hidden",width:c.width,title:c.title,clickable:c.search,align:c.search?"space-between":c.align,showFull:c.showFull,className:((d=c.priority)==null?void 0:d.toString())??"one",onClick:p(c),children:[!c.catalogs&&c.title,!c.catalogs&&!c.sort&&c.search&&t.jsx(ct,{className:"icon",style:{color:c.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),c.sort&&t.jsx(vc,{className:"icon",style:{color:c.field===((g=a==null?void 0:a.column)==null?void 0:g.field)?"var(--reallyBlue)":"var(--text)"}}),c.catalogs&&t.jsx(Rg,{children:t.jsx(Go,{appearance:!1,items:c.catalogs??[],setSelected:x=>o(m=>(x&&(m={...m,[c.field]:{column:c,value:x}}),m)),selected:(f=s==null?void 0:s[c.field])==null?void 0:f.value,placeholder:c.title})})]},c.title)})})},zg=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const p=c=>{c.length?+c>=1&&+c<=e+1&&r((+c-1).toString()):r("")};return t.jsxs(be,{horizontalAlign:o,visible:i,direction:"horizontal",width:"100%",padding:"10px",children:[t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(ti,{}),onClick:()=>r(Ze(n-1,e).toString())}),t.jsxs("div",{className:"page-indicator",children:[t.jsx(Qe,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:p,inputAppearance:!1}),"/ ",e+1]}),t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(St,{}),onClick:()=>r(Ze(n+1,e).toString())})]})},Fg=u.div`
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

    span {
        width: ${({direction:e})=>e==="vertical"?"100%":"fit-content"};
    }

    strong {
        font-weight: 600;
    }
`,at=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Fg,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{children:i})]}):null,Mg=u.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Bg=({obj:e,columns:i})=>t.jsx(Mg,{children:i.map(n=>t.jsx(at,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Tt(e[n.field],n.type)},n.title))}),Yo=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=K(),a=()=>o(t.jsx(Bg,{obj:i,columns:e}),"Информация");return t.jsx(Ig,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var p;return t.jsx(t.Fragment,{children:t.jsx(qo,{showFull:r.showFull,width:r.width,className:((p=r.priority)==null?void 0:p.toString())??"one",align:r.align,children:r.render?r.render(Tt(i[r.field],r.type),i):Tt(i[r.field],r.type)},r.field)})})})},Hg=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--mild-theme);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`,Ug=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Wg=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,p]=l.useState(0),c=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,d=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{p(0)},[a]),i?t.jsx(Ug,{children:t.jsx(ft,{})}):t.jsxs(Hg,{children:[d==null?void 0:d.map((h,g)=>t.jsx(Yo,{onRowClick:o,columns:n,el:h,index:g},g)),!(d!=null&&d.length)&&t.jsx(he,{text:"Нет данных"}),t.jsx(zg,{pages:c,condition:!!s&&!!(d!=null&&d.length),currentPage:r,setCurrentPage:p})]})},Vg=u.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Gg=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},qg=({search:e,setSearch:i})=>{var n,s;return t.jsx(Vg,{closed:!(e!=null&&e.column),children:t.jsx(Qe,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Gg((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(ct,{}),minWidth:"auto"})})},Yg=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Jg(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Xg=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Yg(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(xe,{}),t.jsx(Yo,{onRowClick:()=>null,columns:Jg(s),el:s,index:1})]})},Kg=u.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,De=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:p,search:c,setSearch:d,resultData:h,filter:g,setFilter:f,filterList:x,setFilterList:m,onRemoveOne:b,onRemoveAll:v}=kg(i);return t.jsxs(Kg,{children:[t.jsx(_g,{setList:m,padding:"0 10px",list:x,onRemoveOne:b,onRemoveAll:v}),t.jsx(qg,{search:c,setSearch:d}),t.jsx(Lg,{sort:r,setSort:p,columns:e,search:c,setSearch:d,filter:g,setFilter:f}),t.jsx(Wg,{loading:a,onRowClick:s,filter:g,columns:e,data:h,maxOnPage:n}),t.jsx(Xg,{footer:o,data:i,columns:e})]})},A_={ready:"Готово",pending:"В работе",rejected:"Отклонено"},Ii={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},bn={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},C_=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],N_=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],Qg=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ii).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(bn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Zg=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(ef,{children:["История должностей:",t.jsx(y,{icon:n?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(tf,{columns:Qg(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(y,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},ef=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,tf=u(De)`
    width: 100%;
`,nf=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${et()}`},s=await ei({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},sf=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ii).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>ne(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(bn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{nf(i.applicationGuid)}})}}],of=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[p,c]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(rf,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:p?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(af,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),p&&t.jsxs(cf,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(y,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(lf,{columns:sf(),data:r,maxOnPage:10})]}),t.jsx(y,{onClick:()=>{c(d=>!d)},text:p?"Скрыть":"Подробнее",background:"transparent"})]})},af=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,rf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,lf=u(De)`
    width: 100%;
`,cf=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,df=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(pf,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(of,{jobTitleInfo:s,index:o})),t.jsx(Zg,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},pf=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Jo=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(tt,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(uf,{children:t.jsxs($t,{maxWidth:"1500px",children:[t.jsxs(hf,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(df,{})]})})})},uf=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,hf=u.div`
    // block
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
`,gf=Object.freeze(Object.defineProperty({__proto__:null,default:Jo},Symbol.toStringTag,{value:"Module"})),vn=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(Ii).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>ne(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Xo=T(),Ko=T(),Qo=z(async()=>{const{data:e}=await de.get(`Weekend.GetAllHistory?PersonalGuid=${gt(et()??"").IndividualGuid}`);return e.orders});D({clock:Xo,target:Qo});const ri=z(async e=>(await de.post("Weekend.AddWeekend",e)).data);D({clock:Ko,target:ri});const Zo=ee([]),ff=ri.pending;D({clock:Qo.doneData,target:Zo});D({clock:ri.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Se.evokePopUpMessage});D({clock:ri.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Se.evokePopUpMessage});const xf={loadBufferHolidayWork:Xo,sendBufferHolidayWork:Ko},I_={sendBufferHolidayWorkFx:ri},mf={useBufferHolidayWork:()=>({data:ke(Zo),loading:ke(ff)})},bf=()=>{const[e,i]=l.useState(!1);l.useEffect(xf.loadBufferHolidayWork,[]);const{data:n}=mf.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(vf,{children:["История заявлений на выход в выходной день:",t.jsx(y,{icon:e?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(yf,{columns:vn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},vf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,yf=u(De)`
    width: 100%;
`,jf=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(wf,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>{r(p=>!p)},background:"transparent"})]}),t.jsxs(_f,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(kf,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(y,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(y,{onClick:()=>{r(p=>!p)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},_f=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,wf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,kf=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Tf=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Sf,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(jf,{info:s,index:o})),t.jsx(bf,{})]}):null},Sf=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Ef=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(tt,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx($f,{children:t.jsxs($t,{maxWidth:"1500px",children:[t.jsxs(Pf,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(Tf,{})]})})})},$f=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Pf=u.div`
    // block
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
`,ea=T(),ta=T(),yn=z(async()=>{const{data:e}=await de.get(`Vacation.GetAllHistory?personalGuid=${gt(et()??"").IndividualGuid}`);return e});D({clock:ea,target:yn});const At=z(async e=>(await de.post("Vacation.AddVacation",e)).data);D({clock:ta,target:At});const yi=ee([]),Of=At.pending;D({clock:yn.doneData,fn:({employeeVacations:e})=>e,target:yi});D({clock:At.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Se.evokePopUpMessage});D({clock:At.doneData,source:yi,fn:(e,{employeeVacations:i})=>[...e,...i],target:yi});D({clock:yn.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:X.evokePopUpMessage});D({clock:At.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Se.evokePopUpMessage});const es={loadBufferHolidayPlanning:ea,sendBufferHolidayPlanning:ta},D_={sendBufferHolidayPlanningFx:At},jn={useBufferHolidayPlanning:()=>({data:ke(yi),loading:ke(Of)})},Af=()=>{const[e,i]=l.useState(!1),{data:n}=jn.useBufferHolidayPlanning(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Cf,{children:["История заявлений на отпуск:",t.jsx(y,{icon:e?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Nf,{columns:vn(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Cf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Nf=u(De)`
    width: 100%;
`,ia=()=>[{title:"Статус заявления",field:"vacation",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"vacation",align:"center",render:e=>{var i,n;return`${ne((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${ne((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],If=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,p]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Rf,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>{p(c=>!c)},background:"transparent"})]}),t.jsxs(Df,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a]}),r&&t.jsxs(zf,{children:[t.jsx(Z,{to:`/hr-applications/holiday-planning/${i}`,children:t.jsx(y,{text:"Отпуск по этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((c,d)=>{if(c.employeeGuid==e.jobGuid){const h=n[d].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(Lf,{columns:ia(),data:h,maxOnPage:10},c.jobTitle)}})]}),t.jsx(y,{onClick:()=>{p(c=>!c)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},Df=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Rf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Lf=u(De)`
    width: 100%;
`,zf=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Ff=()=>{const{data:e}=jn.useBufferHolidayPlanning(),{data:{dataWorkerApplication:i}}=ye.useApplications(),[n,s]=l.useState(!0);return i?t.jsxs(Mf,{children:[i.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(If,{info:o,index:a,data:e})),t.jsx(Af,{})]}):null},Mf=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Bf=()=>{const{data:e,loading:i}=jn.useBufferHolidayPlanning();return l.useEffect(()=>{es.loadBufferHolidayPlanning()},[]),t.jsx(tt,{load:es.loadBufferHolidayPlanning,loading:i,error:null,data:e,children:t.jsx(Hf,{children:t.jsxs($t,{maxWidth:"1500px",children:[t.jsxs(Uf,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на отпуск"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(Ff,{})]})})})},Hf=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Uf=u.div`
    // block
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
`,Wf=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ii).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(bn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],na=T(),sa=T(),_n=z(async()=>{const{data:e}=await de.get(`CarryForwardVacation.GetAllHistory?personalGuid=${gt(et()??"").IndividualGuid}`);return e});D({clock:na,target:_n});const Ct=z(async e=>(await de.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);D({clock:sa,target:Ct});const ji=ee([]),Vf=Ct.pending;D({clock:_n.doneData,fn:({employeeVacations:e})=>e,target:ji});D({clock:Ct.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Se.evokePopUpMessage});D({clock:Ct.doneData,source:ji,fn:(e,{employeeVacations:i})=>[...e,...i],target:ji});D({clock:_n.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:X.evokePopUpMessage});D({clock:Ct.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Se.evokePopUpMessage});const ts={loadBufferHolidayTransfer:na,sendBufferHolidayTransfer:sa},R_={sendBufferHolidayTransferFx:Ct},wn={useBufferHolidayTransfer:()=>({data:ke(ji),loading:ke(Vf)})},Gf=()=>{const[e,i]=l.useState(!1),{data:n}=wn.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(qf,{children:["История заявлений отпуск:",t.jsx(y,{icon:e?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Yf,{columns:Wf(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},qf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Yf=u(De)`
    width: 100%;
`,Jf=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,p]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Kf,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>{p(c=>!c)},background:"transparent"})]}),t.jsxs(Xf,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(Zf,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(y,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((c,d)=>{if(c.employeeGuid==e.jobGuid){const h=n[d].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(Qf,{columns:ia(),data:h,maxOnPage:10},c.jobTitle)}})]}),t.jsx(y,{onClick:()=>{p(c=>!c)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},Xf=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Kf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Qf=u(De)`
    width: 100%;
`,Zf=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,ex=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),{data:i}=wn.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(tx,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Jf,{info:o,index:a,data:i})),t.jsx(Gf,{})]})},tx=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,ix=()=>{const{data:e,loading:i}=wn.useBufferHolidayTransfer();return l.useEffect(()=>{ts.loadBufferHolidayTransfer()},[]),t.jsx(tt,{load:ts.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(nx,{children:t.jsxs($t,{maxWidth:"1500px",children:[t.jsxs(sx,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(ex,{})]})})})},nx=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,sx=u.div`
    // block
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
`,oa=()=>[{title:"Статус заявления",field:"medicalExamination",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"medicalExamination",align:"center",render:e=>{var i,n;return`${ne((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${ne((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],ox=e=>localStorage.setItem("age",e.toString()),L_=e=>localStorage.getItem(e),ax=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),aa=T(),ra=T(),la=z(async()=>{const{data:e}=await de.get(`MedicalExamination.GetAllHistory?PersonalGuid=${gt(et()??"").IndividualGuid}`);return ox(e.age),ax(e.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.employeeMedicalExaminations});D({clock:aa,target:la});const li=z(async e=>(await de.post("MedicalExamination.AddMedicalExamination",e)).data);D({clock:ra,target:li});const ca=ee([]),rx=li.pending;D({clock:la.doneData,target:ca});D({clock:li.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Se.evokePopUpMessage});D({clock:li.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Se.evokePopUpMessage});const lx={loadBufferMedicalExamination:aa,sendBufferMedicalExamination:ra},z_={sendBufferMedicalExaminationFx:li},kn={useBufferMedicalExamination:()=>({data:ke(ca),loading:ke(rx)})},cx=()=>{const[e,i]=l.useState(!1);l.useEffect(lx.loadBufferMedicalExamination,[]);const{data:n}=kn.useBufferMedicalExamination(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(dx,{children:["История заявлений на диспансеризацию:",t.jsx(y,{icon:e?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(px,{columns:oa(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},dx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,px=u(De)`
    width: 100%;
`,ux=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,{data:a}=kn.useBufferMedicalExamination(),[r,p]=l.useState(!1);return a.length==0?null:t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(gx,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:r?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>{p(c=>!c)},background:"transparent"})]}),t.jsxs(hx,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),r&&t.jsxs(xx,{children:[t.jsx(Z,{to:`/hr-applications/medical-examination/${i}`,children:t.jsx(y,{text:"Оформить заявление",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),a.map((c,d)=>{if(c.employeeGuid==e.jobGuid){const h=a[d].notTaken.filter(g=>{if(g.medicalExamination.status.orderStatus!="false"&&g.medicalExamination.status.orderStatus!="")return g.medicalExamination.status.orderStatus});return t.jsx(fx,{columns:oa(),data:h,maxOnPage:10},c.orderNumber)}})]}),t.jsx(y,{onClick:()=>{p(c=>!c)},text:r?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},hx=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,gx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,fx=u(De)`
    width: 100%;
`,xx=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,mx=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0),{data:s}=kn.useBufferMedicalExamination();return e?t.jsxs(bx,{children:[e.map((o,a)=>o.isDismissal?(i&&n(!1),null):t.jsx(ux,{info:o,index:a,data:s})),t.jsx(cx,{})]}):null},bx=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,vx=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(tt,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(yx,{children:t.jsxs($t,{maxWidth:"1500px",children:[t.jsxs(jx,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на диспансеризацию"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(mx,{})]})})})},yx=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,jx=u.div`
    // block
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
`,da=T(),pa=T(),ua=z(async()=>{const{data:e}=await de.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${gt(et()??"").IndividualGuid}`);return e.employeeHistories});D({clock:da,target:ua});const ci=z(async e=>(await de.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);D({clock:pa,target:ci});const ha=ee([]),_x=ci.pending;D({clock:ua.doneData,target:ha});D({clock:ci.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Se.evokePopUpMessage});D({clock:ci.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Se.evokePopUpMessage});const wx={loadBufferWorkTransfer:da,sendBufferWorkTransfer:pa},F_={sendBufferWorkTransferFx:ci},kx={useBufferWorkTransfer:()=>({data:ke(ha),loading:ke(_x)})},Tx=()=>{const[e,i]=l.useState(!1);l.useEffect(wx.loadBufferWorkTransfer,[]);const{data:n}=kx.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Sx,{children:["История заявлений на перевод:",t.jsx(y,{icon:e?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(Ex,{columns:vn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Sx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Ex=u(De)`
    width: 100%;
`,$x=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Ox,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(Te,{}):t.jsx(ve,{}),onClick:()=>{r(p=>!p)},background:"transparent"})]}),t.jsxs(Px,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(Ax,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(y,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(y,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(y,{onClick:()=>{r(p=>!p)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},Px=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Ox=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Ax=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,Cx=()=>{const{data:{dataWorkerApplication:e}}=ye.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Nx,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx($x,{info:s,index:o})),t.jsx(Tx,{})]}):null},Nx=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Ix=()=>{const{data:{listApplication:e},error:i}=ye.useApplications();return t.jsx(tt,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Dx,{children:t.jsxs($t,{maxWidth:"1500px",children:[t.jsxs(Rx,{children:[t.jsx(B,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(Cx,{})]})})})},Dx=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Rx=u.div`
    // block
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
`,Lx=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${ne(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${ne(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${ne(e[0])} по ${ne(e[1])}`},zx=u.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,Tn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Ke.selectors.useData();return r?t.jsxs(zx,{children:[t.jsx(B,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Ho,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(J,{type:"info",title:Lx(n)??"",icon:t.jsx(Ie,{})}),i==null?void 0:i.map((p,c)=>{const d=p.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(B,{size:4,align:"left",children:p.title}),t.jsx(it,{onClick:()=>null,href:d,text:"Загрузить",icon:t.jsx(Ei,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),c!==(i==null?void 0:i.length)-1&&t.jsx(xe,{})]},p.title)})]})]}):null},Fx=()=>{const{data:e}=Ke.selectors.useData();return t.jsx(Tn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Mx=()=>{const{data:e}=Ke.selectors.useData();return t.jsx(Tn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},Bx=()=>{const{data:e}=Ke.selectors.useData();return t.jsx(Tn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},ga=()=>{var i;const{data:e}=Ke.selectors.useData();return t.jsx(zi,{padding:"10px",children:t.jsx(Ri,{children:t.jsx(In,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(Bx,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Fx,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Mx,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(fe,{oldVersionUrl:Om}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Hx=Object.freeze(Object.defineProperty({__proto__:null,default:ga},Symbol.toStringTag,{value:"Module"})),Ux=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},is={payments:null,error:null},Wx=()=>({data:F(ns).payments,loading:F(_t.pending),error:F(ns).error}),_t=z(async()=>{const e=await $d();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),_i=z(async e=>{try{return await Od(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}});D({clock:_i.doneData,target:_t});const fa=T(),ns=ee(is).on(_t,e=>({...e,error:null})).on(_t.doneData,(e,i)=>({...e,payments:i})).on(_t.failData,(e,i)=>({...e,error:i.message})).on(_i.doneData,(e,i)=>({...e,payments:Ux(e.payments,i,!1)})).on(_i.failData,(e,i)=>({...e,error:i.message})).on(fa,()=>({...is})),Sn={usePayments:Wx},En={getPaymentsFx:_t,signContractFx:_i},Vx={clearStore:fa},Gx=Object.freeze(Object.defineProperty({__proto__:null,effects:En,events:Vx,selectors:Sn},Symbol.toStringTag,{value:"Module"})),qx=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Yx=u.div`
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
`,Jx=({date:e,value:i})=>t.jsxs(Yx,{children:[t.jsxs(P,{gap:"16px",children:[t.jsx(Ne,{color:"grey",size:33,children:t.jsx(dt,{})}),t.jsxs(P,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(ie,{children:ne(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(dt,{})," "]})]}),Xx=u.div`
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
`,xa=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Xx,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(dt,{})]})},Kx=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Qx=u.div`
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
        background: var(--form);
        box-shadow: var(--schedule-shadow);
        border-radius: 7px;
        margin-top: 10px;
    }
`,Zx=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Kx(s.value),0).toFixed(1);return t.jsxs(Qx,{children:[t.jsxs(P,{jc:"space-between",children:[t.jsx(B,{icon:t.jsx(Vs,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(ie,{fontSize:"1rem",width:"fit-content",children:t.jsx(xa,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(he,{size:"50px",text:"Нет платежей",image:t.jsx(yc,{})}),e.map((n,s)=>l.createElement(Jx,{...n,key:s}))]})]})},ma=()=>t.jsx(J,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),em=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),tm=u.div`
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
`,im=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:p,student:c}=e,{open:d}=K(),[h,g]=l.useState(!1),[f,x]=l.useState(!1),[m,b]=l.useState(!1),{error:v}=Sn.usePayments(),$=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:ne(n)},{text:"Действует до",info:ne(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:c??""},{text:"Сумма к оплате",info:em(a)??""},{text:"Статус",info:""}],j=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},E=()=>{e&&(x(!0),En.signContractFx(e.id),x(!1),b(!0))},k=()=>{d(t.jsx(ma,{}),"Не получается подписать")};return t.jsxs(tm,{children:[t.jsx("div",{className:"contract-info",children:$.map(({info:q,text:O})=>t.jsx(at,{keyStr:O,value:q},q))}),r&&t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(ut,{text:"Подписать договор",buttonSuccessText:"Подписан",action:E,isLoading:f,completed:m,repeatable:!1,popUpFailureMessage:v??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(y,{onClick:k,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs(P,{gap:"8px",children:[t.jsx(ut,{text:"Скопировать номер договора",action:j,isLoading:!1,completed:h,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),t.jsx(it,{onClick:()=>null,href:p??"",icon:t.jsx(Ei,{}),width:"45px"})]})]})},nm=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--schedule);
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
`,sm=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(nm,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Gs,{style:{color:"var(--green)"}}):t.jsx(qs,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(y,{icon:t.jsx(ve,{}),onClick:()=>null,background:"transparent"})]}),om=u.div`
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
`,am=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,p]=l.useState(a);return t.jsxs(om,{height:s,open:r,children:[t.jsx(sm,{title:n,confirmed:o,setOpenArea:p}),t.jsx("div",{className:"inputs",children:i})]})};function ba({isDone:e,submit:i,setData:n}){const[s,o]=l.useState(!1),[a,r]=l.useState(!1),[p,c]=l.useState(e??!1),d=async()=>{try{o(!0),await i(),o(!1),r(!0),c(!0)}catch{o(!1),X.evokePopUpMessage({message:"Не удалось подписать",type:"failure"})}};return l.useEffect(()=>{n&&ao().then(h=>n(h[0]))},[]),{done:p,open,loading:s,completed:a,setCompleted:r,handleSubmit:d}}const rm=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;

    & > span {
        line-height: 1.7rem;
    }

    @media (min-width: 1001px) {
        max-width: 400px;
    }
`,lm=()=>{const{data:{user:e}}=ce.useUser();return t.jsx(rm,{children:(e==null?void 0:e.user_status)==="stud"?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)"}),t.jsx(it,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%",align:"center"})]}):t.jsxs(t.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",t.jsx("br",{}),t.jsx("b",{children:"+7 (495) 223-05-23 доб.1130"}),"или написать письмо на",t.jsx("br",{}),t.jsx("b",{children:"ok@mospolytech.ru"})]})})},cm=u.div`
    .info-text {
        margin: 16px 0;
        line-height: 1.7rem;
    }

    b {
        font-weight: 600;
    }
`,M_=({children:e,data:i,setData:n,submit:s,isDone:o=!1})=>{const{open:a}=K(),{handleSubmit:r,loading:p,done:c,completed:d,setCompleted:h}=ba({isDone:o,submit:s,setData:n});return i?t.jsxs(cm,{children:[t.jsxs(P,{gap:"8px",children:[t.jsx(it,{href:i.file,onClick:()=>null,text:"Скачать согласие",width:"100%",minHeight:"38px",height:"38px",icon:t.jsx(Ei,{})}),t.jsx(J,{type:"success",icon:t.jsx(Si,{}),title:"Успешно подписано",visible:i.status||c,align:"center"})]}),t.jsx("div",{className:"info-text",children:e}),!i.status&&!c&&t.jsx(ut,{text:!i.status&&!c?"Подписать":"Подписано",action:r,isLoading:p,completed:d,isDone:c||i.status,setCompleted:h,isActive:!i.status&&!c,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(i.status||c)&&t.jsxs(t.Fragment,{children:[t.jsx(xe,{margin:"16px 0",width:"100%"}),t.jsxs(ie,{fontSize:"0.9rem",lineHeight:"1.4rem",children:["Дата подписания: ",ne(i.date||new Date),","," ",i.time||`${new Date().getHours()}:${new Date().getMinutes()}`,t.jsx("br",{}),i.fio]})]}),!i.status&&!c&&t.jsx(P,{jc:"center",children:t.jsx(y,{onClick:()=>a(t.jsx(lm,{}),"Ошибка в данных"),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:w.grey.main})})]}):null},dm=u.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,pm=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,{handleSubmit:p,loading:c,done:d,completed:h,setCompleted:g}=ba({isDone:s,submit:()=>Pd(n)}),f=s||d?140:100;return t.jsxs(am,{height:f,title:o,confirmed:s||d,children:[t.jsxs(dm,{children:[t.jsxs(P,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(B,{size:5,align:"left",children:o}),t.jsx(ie,{children:ne(r)})]}),t.jsxs(P,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(it,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Ei,{}),isActive:!!e.file}),!d&&t.jsx(ut,{text:d?"Подписано":"Подписать",action:p,isLoading:c,completed:h,isDone:d,width:"160px",setCompleted:g,isActive:!d&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(J,{type:"success",title:"Подписано",icon:t.jsx(Si,{}),align:"center",width:"130px",visible:d})]})]}),(d||s)&&t.jsxs(ie,{children:["Дата подписания: ",ne(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},um=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(be,{width:"100%",children:[t.jsx(B,{size:4,align:"left",icon:t.jsx(jc,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(ma,{}),t.jsx(J,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(pm,{data:s,isContractSigned:n},o))]}),hm=u.div`
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
`,hi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(hm,{children:t.jsx(fn,{loading:i,width:"300px",height:"300px",src:e??""})})},gm=u.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,fm=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(hi,{qrCode:e}):n===1?t.jsx(hi,{qrCode:i}):t.jsx(gm,{children:t.jsx(In,{pages:[{title:"Текущая залолженность",content:t.jsx(hi,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(hi,{qrCode:i})}],appearance:!1,currentPage:n})}),xm=({type:e="horizontal",...i})=>{const{open:n}=K(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(fm,{...i}),s)};return e==="vertical"?t.jsx(y,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(_c,{}),textColor:"#fff",background:o}):t.jsx(y,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},mm=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(xa,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},bm=[{query:"(max-width: 766px)",title:"isMobile"},{query:"(min-width: 767px) and (max-width: 1199px)",title:"isTablet"},{query:"(min-width: 1200px)",title:"isDesktop"}],Gi=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Di=()=>{const e=bm.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Gi(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Gi(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Gi(e))}))),[]),i},vm=u.div`
    width: 100%;
`,ym=u.div`
    width: 100%;
    padding: 16px;
    background: var(--form);
    border-radius: 6px;
    box-shadow: var(--schedule-shadow);
`,jm=u.div`
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
`,_m=u.div`
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
`,wm=u.div`
    position: relative;
`,km=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:p,qr_total:c}=i,{isMobile:d}=Di(),{open:h}=K(),[g,f]=l.useState(0),x=g===0?+n:+s,m=x>0,b=m?g===0?"Долг по договору":"Остаток по договору":x<0?"Переплата по договору":"У вас нет долга",v=g===0?`На ${ne(new Date)}`:`До ${ne(o)}`,$=()=>{h(t.jsx(im,{contract:i}),"Реквизиты договора")};return t.jsxs(vm,{children:[t.jsx(B,{icon:t.jsx(wc,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(ym,{children:[t.jsx(xn,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:g,setCurrentPage:f,appearance:!1}),t.jsxs(jm,{children:[t.jsxs(P,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(mm,{debt:x}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(B,{size:3,align:"left",children:b}),t.jsx(ie,{children:v})]})]}),m?t.jsx(xm,{currentPage:g,type:d?"horizontal":"vertical",qr_current:p,qr_total:c}):t.jsx(su,{color:"green",size:"40px"})]}),t.jsxs(_m,{children:[r&&t.jsx(it,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(wm,{children:[t.jsx(y,{onClick:$,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(ht,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},Tm=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,Sm=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${Tt(String(o),"rub")})`},Em=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return Tm(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:Sm}],$m=({paygraph:e})=>t.jsxs(P,{d:"column",children:[t.jsx(B,{icon:t.jsx(kc,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(De,{columns:Em(),data:e??[],maxOnPage:3})]}),gi=({contracts:e})=>e?t.jsx(qx,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:p,signed_user:c}=i,d=a==="Общежитие",h=!0,g=s.filter(f=>new Date(f==null?void 0:f.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[e.length!==1&&t.jsxs(P,{gap:"8px",children:[t.jsx(P,{w:"fit-content",children:t.jsxs(B,{size:3,align:"left",children:["Договор:"," "]})}),t.jsxs(ie,{fontSize:"1rem",children:[a,", ",o]})]}),t.jsx(km,{data:i}),t.jsx(Zx,{payments:p??[]}),t.jsx($m,{paygraph:r}),t.jsx(um,{isDormitory:d,isContractSigned:h,electronicAgreements:g}),n!==e.length-1&&t.jsx(xe,{margin:"0",width:"100%"})]},o)})}):null,$n=()=>{const{data:e,loading:i,error:n}=Sn.usePayments(),s=e!=null&&e.dormitory.length&&(e!=null&&e.education.length)?"both":e!=null&&e.dormitory.length?"dormitory":e!=null&&e.education.length?"education":"none";return l.useEffect(()=>{X.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(tt,{loading:i,load:En.getPaymentsFx,error:n,data:e,noDataCheck:!(e!=null&&e.dormitory.length),children:t.jsxs(Ri,{children:[t.jsx(J,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(he,{text:"Нет данных"}),s==="both"&&t.jsx(In,{pages:[{title:"Общежитие",content:t.jsx(gi,{contracts:e==null?void 0:e.dormitory})},{title:"Обучение",content:t.jsx(gi,{contracts:e==null?void 0:e.education})}],appearance:!1}),s==="dormitory"&&t.jsx(gi,{contracts:e==null?void 0:e.dormitory}),s==="education"&&t.jsx(gi,{contracts:e==null?void 0:e.education})]})})},Pm=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),L="/applications",oe="/hr-applications",ss="/staff_orders",os="/staff_blanks",Om="/ad_logins",Pn="/doclist",as="/pps_vote2020",va="/pps_contest",Am="/electronic-statements",pe="/onboarding",Cm="/structure-of-the-university",Nm="/addresses-and-contacts",Im="/brandbook",Dm="/wifi-at-the-university",Rm="/health-care",Lm="/psychological-help",zm="/social-environment",Fm="/vacation",Rt="/kpi_pps",Lt="/kpi_admin",rs="/sc_news",ls="/oop",cs="/centers",Mm="/helpful-information",Bm="/download-agreements",ds="/physical-education/main",Hm="/physical-education/student/:studentId",ya=L+"/contact-info-actualization",ja=L+"/data-verification",_a=L+"/issuance-of-licenses",wa=L+"/getting-computer-equipment",ka=L+"/connecting-computer",Ta=L+"/printer-maintenance",Sa=L+"/question-sed",Ea=L+"/question-personal-account",$a=L+"/other-it-services",Pa=L+"/certificate-from-the-place-of-work",Oa=L+"/visa-certificate",Aa=L+"/certificate-of-work-experience",Ca=L+"/number-of-unused-vacation-days",Na=L+"/copy-of-the-employment-record",Ia=L+"/copies-of-documents-from-the-personal-file",Da=L+"/work-on-the-terms-of-external-concurrency",Ra=L+"/certificate-time-parental-leave",La=L+"/arbitrary-request",za=L+"/courier",Fa=L+"/persona-income-tax-reference",Ma=L+"/payment-of-child-birth-allowance",Ba=L+"/payment-for-child-care",Ha=oe+"/part-time-employment/",Um=oe+"/dismissal/:id",Wm=oe+"/work-transfer/:id",Vm=oe+"/extra-holiday-coll",Gm=oe+"/holiday-planning/:id",qm=oe+"/holiday-transfer/:id",Ym=oe+"/holiday-work/:id",Jm=oe+"/work-transfer-change-rate/:id",Xm=oe+"/medical-examination/:id",Ua=oe+"/buffer-dismissal",Wa=oe+"/buffer-holiday-planning",Va=oe+"/buffer-holiday-transfer",Ga=oe+"/buffer-holiday-work",qa=oe+"/buffer-medical-examination",Ya=oe+"/buffer-work-transfer",V=()=>fe({oldVersionUrl:"/sprav"}),en=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(Y,{}),path:pe,Component:mg,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"large"},...mr,"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(Vs,{}),path:Bm,Component:ga,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(Y,{}),path:Am,Component:()=>(le.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Ys,{}),path:hr,Component:()=>(le.useEffect(()=>{window.location.replace(`${A}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(dt,{}),path:wi,Component:$n,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(Y,{}),path:va,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Js,{}),path:Rt,Component:()=>(le.useEffect(()=>{window.location.replace(`${A}/?p=${Rt==null?void 0:Rt.slice(1,Rt.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(Ac,{}),path:Lt,Component:()=>(le.useEffect(()=>{window.location.replace(`${A}/?p=${Lt==null?void 0:Lt.slice(1,Lt.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(Cc,{}),path:rs,Component:()=>fe({oldVersionUrl:rs}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(N,{}),path:ss,Component:()=>fe({oldVersionUrl:ss}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Kt,{}),path:os,Component:()=>fe({oldVersionUrl:os}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(N,{}),path:Pn,Component:vh,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Nc,{}),path:Fm,Component:Bh,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(N,{}),color:"lightGreen",path:ds,show:!C,pageSize:"big",Component:Eh,isTemplate:!1,group:"OTHER"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(N,{}),color:"pink",path:Hm,Component:$h,isTemplate:!1,fallbackPrevPage:ds},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(Xt,{}),path:ls,Component:()=>fe({oldVersionUrl:ls}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(Xt,{}),path:cs,Component:()=>fe({oldVersionUrl:cs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(N,{}),path:Mm,Component:mn,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Xs,{}),path:as,Component:()=>fe({oldVersionUrl:as}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(N,{}),path:L,Component:C?V:yh,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(N,{}),path:oe,Component:C?()=>fe({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Hh,color:"green",isTemplate:!1,group:"FINANCES_DOCS"}}),tn=()=>({...br,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:_a,icon:t.jsx(N,{}),color:"blue",Component:C?V:Oh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:Ua,icon:t.jsx(N,{}),color:"blue",Component:C?V:Jo,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"holiday-work":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Ga,icon:t.jsx(N,{}),color:"blue",Component:C?V:Ef,isTemplate:!1,group:"OTHER"},"medical-examination":{id:"part-time-employment",title:"Заявление о диспансеризации",path:qa,icon:t.jsx(N,{}),color:"blue",Component:C?V:vx,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Wa,icon:t.jsx(N,{}),color:"blue",Component:C?V:Bf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Va,icon:t.jsx(N,{}),color:"blue",Component:C?V:ix,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:Ya,icon:t.jsx(N,{}),color:"blue",Component:C?V:Ix,isTemplate:!1,group:"OTHER"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:Ha,icon:t.jsx(N,{}),color:"blue",Component:C?V:Uh,isTemplate:!1,group:"OTHER"},"holiday-work-form":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Ym,icon:t.jsx(N,{}),color:"blue",Component:C?V:Gh,isTemplate:!1,group:"OTHER"},"medical-examination-form":{id:"part-time-employment",title:"Заявление о диспансеризации",path:Xm,icon:t.jsx(N,{}),color:"blue",Component:C?V:qh,isTemplate:!1,group:"OTHER"},"holiday-planning-form":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Gm,icon:t.jsx(N,{}),color:"blue",Component:C?V:Yh,isTemplate:!1,group:"OTHER"},"holiday-transfer-form":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:qm,icon:t.jsx(N,{}),color:"blue",Component:C?V:Jh,isTemplate:!1,group:"OTHER"},"work-transfer-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Wm,icon:t.jsx(N,{}),color:"blue",Component:C?V:Xh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"work-transfer-change-rate-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Jm,icon:t.jsx(N,{}),color:"blue",Component:C?V:Kh,isTemplate:!1,group:"OTHER"},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Vm,icon:t.jsx(N,{}),color:"blue",Component:C?V:Vh,isTemplate:!1,group:"OTHER"},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:Um,icon:t.jsx(N,{}),color:"blue",Component:C?V:Wh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(N,{}),color:"blue",path:wa,Component:C?V:Ph,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(N,{}),color:"blue",path:ka,Component:C?V:kh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(N,{}),color:"blue",path:Ta,Component:C?V:Rh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(N,{}),color:"blue",path:Sa,Component:C?V:zh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(N,{}),color:"blue",path:Ea,Component:C?V:Lh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(N,{}),color:"blue",path:$a,Component:C?V:Ch,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(N,{}),color:"blue",path:Pa,Component:C?V:fh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:t.jsx(N,{}),color:"blue",path:Oa,Component:C?V:Fh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(N,{}),color:"blue",path:Aa,Component:C?V:_h,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(N,{}),color:"blue",path:Ca,Component:C?V:Ah,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(N,{}),color:"blue",path:Na,Component:C?V:Th,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(N,{}),color:"blue",path:Ia,Component:C?V:xh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(N,{}),color:"blue",path:Da,Component:C?V:Mh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(N,{}),color:"blue",path:Ra,Component:C?V:wh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(N,{}),color:"blue",path:La,Component:C?V:jh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},courier:{id:"courier",title:"Курьер",icon:t.jsx(N,{}),color:"blue",path:za,Component:C?V:Sh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(N,{}),color:"blue",path:Fa,Component:C?V:Dh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(N,{}),color:"blue",path:Ma,Component:C?V:Ih,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(N,{}),color:"blue",path:Ba,Component:C?V:Nh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(N,{}),color:"blue",path:ya,Component:mh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(N,{}),color:"blue",path:ja,Component:bh,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:L},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Me,{to:pe})),icon:t.jsx(Kt,{}),isTemplate:!1,path:zm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Me,{to:pe})),icon:t.jsx(Tc,{}),isTemplate:!1,path:Lm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Me,{to:pe})),icon:t.jsx(Sc,{}),isTemplate:!1,path:Rm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Me,{to:pe})),icon:t.jsx(Ec,{}),isTemplate:!1,path:Dm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Me,{to:pe})),icon:t.jsx($c,{}),isTemplate:!1,path:Im,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(Pc,{}),path:Nm,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Me,{to:pe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(Oc,{}),path:Cm,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Me,{to:pe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe}}),Ja=()=>{var r,p;const e=ii(),{data:i}=ce.useUser(),n=(r=i.user)!=null&&r.subdivisions?{...en(),...tn()}:{...yt(),...an(i.user)},[{exactCurrentPage:s,currentPage:o},a]=l.useState({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??null});return l.useEffect(()=>{a({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>c.path.includes(e.location.pathname))??null})},[(p=i.user)==null?void 0:p.subdivisions]),l.useEffect(()=>e.listen(c=>{a({currentPage:Object.values(n).find(d=>c.pathname.includes(d.path))??n[0],exactCurrentPage:Object.values(n).find(d=>d.path.includes(c.pathname))??null})}),[e,n]),{currentPage:o,exactCurrentPage:s}},Xa=e=>{switch((e==null?void 0:e.pageSize)==="big"||e==null||e.pageSize,e==null?void 0:e.pageSize){case"big":return"1000px";case"small":return"600px";case"large":return"963px";default:return"700px"}},Km=u(qe)`
    position: relative;

    @media (min-width: 1001px) {
        padding-top: 70px;
    }
`,Qm=u.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px) {
        top: -55px;
        right: 0px;
    }
`,Zm=({children:e,topRightCornerElement:i,padding:n})=>{const{exactCurrentPage:s}=Ja(),o=Xa(s);return t.jsx(zi,{padding:"0 0 10px 0",children:t.jsxs(Km,{justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:o,gap:"24px",alignItems:"flex-start",noAppearanceInMobile:!0,padding:n,children:[i&&t.jsx(Qm,{children:i}),e]})})},Ri=Zm,e0=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(P,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(P,{gap:"16px",ai:"center",children:[t.jsx(W,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(W,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(W,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))});function Qt(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const t0=u.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,i0=u.div``,n0=u.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,s0=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(p=>!p);return t.jsxs(t0,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(i0,{children:e}),t.jsx(n0,{isOpen:o,children:i})]})},Ka=T(),Qa=T(),o0=ee(!1).on(Qa,()=>!0).on(Ka,()=>!1),ps={close:Ka,open:Qa},a0={$isModalOpen:o0},On=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),r0=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),p=Ic(a0.$isModalOpen),c=a.length>1,d=l.useCallback(()=>{c&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,v)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,v??""])):(r(()=>[b]),o(v?[v]:[])),n(()=>!0),ps.open())},[r,n,a,i]),g=l.useCallback(()=>{n(()=>!1),ps.close()},[r,n]),f=l.useMemo(()=>a[a.length-1],[a]),x=l.useMemo(()=>s[s.length-1],[s]),m=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{p!==i&&n(p)},[p]),t.jsx(On.Provider,{value:{back:d,open:h,close:g,isOpen:i,canBack:c,component:f,title:x,setComponent:m},children:e})},K=()=>{const{open:e,isOpen:i,...n}=l.useContext(On);return{open:e,isOpen:i,...n}},l0="2.2.0",Za=()=>t.jsx(J,{icon:null,type:"info",title:l0,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),Pe=({color:e,children:i})=>t.jsx(Ne,{color:e,children:i}),c0=()=>({info:t.jsx(Pe,{color:"grey",children:t.jsx(Ie,{})}),message:t.jsx(Pe,{color:"red",children:t.jsx(dn,{})}),alert:t.jsx(Pe,{color:"purple",children:t.jsx(pn,{})}),"payment-dorm":t.jsx(Pe,{color:"green",children:t.jsx(dt,{})}),"payment-ed":t.jsx(Pe,{color:"green",children:t.jsx(dt,{})}),"digital-services":t.jsx(Pe,{color:"red",children:t.jsx(N,{})}),"doc-for-review":t.jsx(Pe,{color:"blue",children:t.jsx(N,{})}),"hr-applications":t.jsx(Pe,{color:"green",children:t.jsx(N,{})}),"kpi-pps":t.jsx(Pe,{color:"pink",children:t.jsx(Js,{})}),schedule:t.jsx(Pe,{color:"pink",children:t.jsx(ni,{})}),"version-update":t.jsx(Za,{}),"electronic-interaction":t.jsx(Pe,{color:"blue",children:t.jsx(Ks,{})})}),d0=u(Z)`
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
        background: var(--theme-mild-xxl);
    }
`,p0=u.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,u0={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},h0={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},g0={small:"0px",middle:"1px",large:"2px",big:"3px"},er=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:p,goTo:c,onClose:d,bottomMargin:h,closeAnimation:g=!0,loadingRemove:f=!1,canClose:x=!0,fullText:m=!0,maxLetters:b=200,size:v="middle"})=>{const $=ne(o,"short"),{close:j}=K(),[E,k]=l.useState(!1),q=R=>{R.stopPropagation(),R.preventDefault(),g?(k(!0),setTimeout(()=>{d==null||d()},300)):d==null||d()},O=()=>{a==null||a(),x&&xt.clearById({id:e,pageId:p}),j()};return t.jsx(s0,{forceState:!E,bottomMargin:h,children:t.jsxs(d0,{to:c??"",onClick:O,children:[t.jsx("span",{className:"left-icon",children:c0()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ie,{fontSize:"0.7rem",children:t.jsx(Ot,{words:[$??"",s??""]})}),t.jsxs(P,{d:"column",gap:g0[v],ai:"flex-start",children:[t.jsx(p0,{fontSize:u0[v],children:m?i:Qt(i,b)}),t.jsx(ie,{fontSize:h0[v],children:m?n:Qt(n,b)})]})]}),d&&t.jsx(y,{isActive:!(f&&E),icon:t.jsx(Ge,{}),background:"transparent",onClick:q})]})})},tr=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{xt.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(P,{d:"column",children:e.map((o,a)=>l.createElement(er,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},f0=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,ir=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=Fe.useLkNotifications();return l.useEffect(()=>{o&&X.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{xt.clearAllVisible()},[]),t.jsxs(f0,{children:[s.length===0&&!n&&t.jsx(zi,{height:"100%",children:t.jsx(he,{text:i??"Нет новых уведомлений",image:i?t.jsx(Xe,{}):t.jsx(Dc,{}),size:"70px"})}),t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(J,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(tr,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(e0,{quantity:10})]})},x0=()=>{const{notifications:e,clearAllError:i,clearAllLoading:n}=Fe.useLkNotifications(),s=()=>{Be.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>xt.clearAll()})};return l.useEffect(()=>{i&&X.evokePopUpMessage({type:"failure",message:i})},[i]),t.jsx(zi,{padding:"10px",children:t.jsxs(Ri,{topRightCornerElement:t.jsx(Z,{to:ur,children:t.jsx(y,{icon:t.jsx(un,{}),height:"35px",width:"35px"})}),children:[t.jsx(ir,{}),e.length>0?n?t.jsx(P,{jc:"center",children:t.jsx(ft,{width:"40px",height:"40px"})}):t.jsx(y,{text:"Очистить все",onClick:s,width:"100%"}):null]})})},nr="/login",m0="/forgot-password",b0="/medical-certificate",Ut="/all",An="/home",sr="/profile",Cn="/chat",v0="/messages",B_=Cn+"/:chatId",or="/electronic-interaction-agreement",wi="/payments",Nt="/schedule",ar="/all-students",y0="/all-students/:filter",j0="/all-teachers/:filter",rr="/all-teachers",Nn="/feedback",lr="/cant-access",cr="/memo-freshmen",dr="/get-your-login",pr="/memo-teacher",ue="/settings",H_=ue+"/:id",_0=ue+"/appearance",w0=ue+"/personal",k0=ue+"/security",T0=ue+"/home-page",S0=ue+"/customize-menu",ur=ue+"/notifications",E0="/instructions",hr="/project-activity",gr="/alerts",fr="/lk-notifications",xr="/helpful-information",$0=Nt+"/:filter",P0=xr+"/:infoType";var O0=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(O0||{});const A0=[{id:0,title:"",icon:"",path:nr,Component:uh},{id:1,title:"",icon:"",path:m0,Component:tg},{id:2,title:"Обратная связь",icon:t.jsx(Xt,{}),path:Nn,Component:Vo},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(Xe,{}),path:lr,Component:Zh},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:dr,Component:hg},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:cr,Component:gg},{id:6,title:"Вниманию сотрудников!",icon:"",path:pr,Component:fg}],mr={all:{id:"all",title:"Все разделы",icon:t.jsx(Mc,{}),path:Ut,Component:Qh,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"large"},settings:{id:"settings",title:"Настройки",icon:t.jsx(un,{}),path:ue,Component:rg,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(N,{}),path:Pn,Component:()=>t.jsx(ug,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(pn,{}),path:gr,Component:ig,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(Qs,{}),path:An,Component:ng,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Bc,{}),path:sr,Component:og,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(hn,{}),path:fr,Component:x0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"],isNew:!0},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Ks,{}),path:or,Component:eg,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Hc,{}),path:Cn,Component:()=>fe({oldVersionUrl:v0}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Uc,{}),path:Nt,Component:ag,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["экзамены","зачеты","сессия","пересдача"],planeHeader:!0},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Kt,{}),path:ar,Component:Uo,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Xs,{}),path:rr,Component:Wo,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(Xt,{}),path:Nn,Component:Vo,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Wc,{}),path:E0,Component:sg,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Vc,{}),path:b0,Component:xg,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"}},br={"teachers-schedule":{id:"teachers-schedule",title:"Расписание преподавателя",icon:t.jsx(Y,{}),path:$0,Component:pg,color:"blue",isTemplate:!1,show:!1,group:"OTHER",planeHeader:!0},"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Kt,{}),path:y0,Component:Uo,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Kt,{}),path:j0,Component:Wo,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Rc,{}),path:_0,Component:cg,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:ue,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(Lc,{}),path:w0,Component:lg,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:ue,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(zc,{}),path:k0,Component:dg,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:ue,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(Qs,{}),path:T0,Component:()=>t.jsx(t.Fragment,{}),color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:ue,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(Fc,{}),path:S0,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:ue,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(hn,{}),path:ur,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:ue,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:P0,Component:mn,color:"grey",isTemplate:!0,show:!1}},vr=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;oi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else X.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},yr=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;oi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},C0=(e,i,n,s)=>{if(i){const o=s.length+ud;if(n<o){X.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??$i;oi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else X.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},N0=(e,i,n)=>{if(i)if(n.includes(e))X.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{X.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;oi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},I0=u.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,D0=u.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,R0=e=>{var x,m,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=Et.useSettings(),{data:r}=ce.useUser(),p=We.useMenu(),c=(x=a["settings-home-page"].property.pages)==null?void 0:x.find(v=>v===i),d=(m=a["settings-customize-menu"].property.pages)==null?void 0:m.find(v=>v===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?so:$i,g=()=>{vr(i,a),Ce.close()},f=()=>{C0(i,a,Object.keys(p.leftsideBarRoutes??{}).length??0,h),Ce.close()};return t.jsxs(I0,{children:[t.jsxs("div",{className:"top",children:[t.jsx(Ne,{color:o,size:22,children:n}),t.jsx(D0,{children:s})]}),t.jsx(xe,{}),c?t.jsx(y,{text:"Убрать с главной",icon:t.jsx(Xe,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>{yr(i,a),Ce.close()}}):t.jsx(y,{text:"Добавить на главную",icon:t.jsx(Jt,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:g}),d?t.jsx(y,{text:"Убрать из меню",icon:t.jsx(Xe,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>N0(i,a,h)}):t.jsx(y,{text:"Добавить в меню",icon:t.jsx(Jt,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:f})]})},jr=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ce.open({e:o,height:105,content:t.jsx(R0,{...e})})};return t.jsx(y,{icon:t.jsx(Zs,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},_r=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},wr=u(qe)`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);
    background: var(--form);

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
        /* box-shadow: 0 0 60px ${w.red.light2}; */
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
`,us=e=>{var $;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:p,mode:c,id:d,background:h,orientation:g="vertical"}=e,f=g==="vertical",{settings:x}=Et.useSettings(),m=!!(($=x["settings-home-page"].property.pages)!=null&&$.find(j=>j===d)),b=11,v=l.useMemo(()=>(j,E)=>{const k=j.split(" ")[0];return k.length>E&&k.length!==E+1&&f?`${j.substr(0,E)}-${j.substr(E,j.length)}`:j},[]);return t.jsxs(wr,{padding:"0",width:"100%",maxWidth:"100%",height:f?"135px":"60px",isVertical:f,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:h,children:[t.jsxs("div",{className:"outside",children:[t.jsx(Ne,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:p??t.jsx(Gc,{})}),t.jsx("b",{children:Qt(v(a,b),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",_r(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),c==="use"&&t.jsx(jr,{route:e}),c==="add"?m?t.jsx(y,{icon:t.jsx(Ge,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--schedule)",onClick:()=>yr(d,x)}):t.jsx(y,{icon:t.jsx(Jt,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--schedule)",onClick:()=>vr(d,x)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},L0=u(wr)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,U_=()=>t.jsx(Z,{to:Ut,onClick:()=>{Re.changeOpen({isOpen:!1,currentPage:Ut.slice(1,Ut.length)})},children:t.jsx(L0,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(Ne,{color:"blue",children:t.jsx(qc,{})}),t.jsx("b",{children:"Все разделы"})]})})}),z0=u(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,F0=u.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,M0=e=>{const{close:i}=K(),{path:n,orientation:s="vertical",mode:o="use"}=e,a=s==="vertical"?17:50,r=1;if(o==="add")return t.jsx(F0,{width:s==="vertical"?r:"100%",children:t.jsx(us,{...e,mode:o,maxWordLength:a})});const p=()=>{i(),Re.changeOpen({isOpen:!1,currentPage:n.slice(1,n.length)})};return t.jsx(z0,{to:n,onClick:p,width:s==="vertical"?r:"100%",children:t.jsx(us,{...e,maxWordLength:a,mode:o})})},B0=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,H0=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(he,{text:"Ничего не было найдено"}):t.jsx(B0,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(M0,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),U0=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(me(s.title).includes(me(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>me(a).includes(me(e))))&&(n[s.id]=s),n},{}),W0=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,V0=u(Z)`
    width: 100%;
`,G0=({division:e})=>{const{close:i}=K();return t.jsxs(W0,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(Ne,{size:120,color:"purple",children:t.jsx(vi,{})}),t.jsx(ie,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(V0,{to:`${rr}/${e}`,onClick:i,children:t.jsx(y,{icon:t.jsx(eo,{}),width:"100%",text:"Список"})})]})},q0=u.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,Y0=({division:e})=>{const{open:i}=K(),n=()=>{i(t.jsx(G0,{division:e}),"Подразделение")};return t.jsx(q0,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(vi,{}),t.jsx(ie,{fontSize:"1rem",children:e})]}),t.jsx(St,{})]})})},J0=({divisions:e})=>!e||e.length===0?null:t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Y0,{division:i},i))}),X0=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,hs=u(Z)`
    width: 100%;
`,K0=({group:e})=>{const{close:i}=K();return t.jsxs(X0,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(Ne,{size:120,color:"lightBlue",children:t.jsx(to,{})}),t.jsx(ie,{fontSize:"1.2rem",children:e})]}),t.jsxs(P,{gap:"8px",onClick:i,children:[t.jsx(hs,{to:`${Nt}/${e}`,children:t.jsx(y,{icon:t.jsx(ni,{}),width:"100%",text:"Расписание"})}),t.jsx(hs,{to:`${ar}/${e}`,children:t.jsx(y,{icon:t.jsx(eo,{}),width:"100%",text:"Список"})})]})]})},Q0=u.div`
    width: 100%;
    color: var(--text);
    padding: 0px 16px;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    cursor: pointer;

    svg {
        min-width: 30px;
    }

    &:hover {
        background: var(--search);
    }
`,Z0=({group:e})=>{const{open:i}=K(),n=()=>{i(t.jsx(K0,{group:e}),"Группа")};return t.jsx(Q0,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",h:"50px",children:[t.jsx(to,{}),t.jsx(ie,{fontSize:"1rem",children:e})]}),t.jsx(St,{})]})})},eb=({groups:e})=>e?t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Z0,{group:i},i))}):null,qi=[{title:"Инструкции",links:[{link:A+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:A+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:A+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:A+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:A+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:A+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:A+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:A+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:A+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:A+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:A+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:A+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:A+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:Q},{link:A+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q}]},{title:"Положения",links:[{link:A+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:Q},{link:A+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:Q},{link:A+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:Q},{link:A+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:Q},{link:A+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:Q},{link:A+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:Q},{link:A+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:Q}]}];var je=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(je||{});const vt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},tb=[{id:je.information,title:vt[je.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:je.security,title:vt[je.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:je.instructions,title:vt[je.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...qi[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:je.regulations,title:vt[je.regulations],visible:"staff",content:[{title:"Положения",links:[...qi[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:je.orders,title:vt[je.orders],visible:"staff",content:[{title:"Приказы",links:[...qi[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:je.courses,title:vt[je.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],ib=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>me(a.title).includes(me(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),nb=u.div`
    width: calc(100% - 2px);
    padding: 16px;
    margin: 1px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    padding: 16px;
    a {
        font-size: 0.95rem;
    }
`,sb=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(nb,{children:[t.jsx(B,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(be,{gap:16,children:s.map(({title:a,href:r,visible:p},c)=>p==="staff"&&!i||p==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+c))})]},n+o))}):null,ki=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,gs=({people:e,type:i})=>!e||e.length===0?null:t.jsx(P,{d:"column",children:e.map(n=>l.createElement(Nr,{name:n.fio,type:i,...n,key:n.id}))}),ob=()=>{const{allRoutes:e}=We.useMenu(),{notifications:i,removeNotificationLoading:n}=Fe.useLkNotifications(),{data:{user:s}}=ce.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>tb.flatMap(({visible:O,content:R})=>O==="staff"&&o||O==="student"&&!o||O==="all"?R:[]),[o]),[r,p]=l.useState(null),[c,d]=l.useState(null),[h,g]=l.useState(null),[f,x]=l.useState(null),[m,b]=l.useState(null),[v,$]=l.useState(null),[j,E]=l.useState(null),k=[{title:"Разделы",content:t.jsx(H0,{pages:m,showNotFound:!1}),clear:()=>{b(null)},search:O=>{if(e){const R=U0(O,e);b(R)}},data:m},{title:"Студенты",content:t.jsx(gs,{people:f,type:"stud"}),data:f,clear:()=>{x(null)},search:async O=>{const{data:R}=await tp(O,"",1,20);x(R.items)}},{title:"Сотрудники",content:t.jsx(gs,{people:h,type:"staff"}),data:h,clear:()=>{g(null)},search:async O=>{const{data:R}=await Kd(O,"",1,20);g(R.items)}},{title:"Группы",content:t.jsx(eb,{groups:r}),data:r,clear:()=>{p(null)},search:async O=>{const{data:R}=await ip(O);p(R.items)}},{title:"Подразделения",content:t.jsx(J0,{divisions:c}),data:c,clear:()=>{d(null)},search:async O=>{const{data:R}=await Qd(O);d(R.items)}},{title:"Уведомления",content:t.jsx(tr,{notifications:v,loadingRemove:n}),clear:()=>{$(null)},search:O=>{const R=i.filter(te=>me(te.title).includes(O));$(R)},data:v},{title:"Полезная информация",content:t.jsx(sb,{blocks:j,isStaff:o}),clear:()=>{E(null)},search:O=>{const R=ib(O,a);E(R)},data:j}];return[(()=>{const{content:O,clear:R,data:te}=k.reduce((I,ae)=>(ki(ae.data)&&(I.data.push(ae.data),I.content.push(t.jsxs(t.Fragment,{children:[t.jsx(B,{size:4,align:"left",children:ae.title}),ae.content,t.jsx(xe,{})]}))),I.clear.push(ae.clear),I),{content:[],clear:[],data:[]});return{title:"Все",content:O,clear:()=>R.map(I=>I()),search:async I=>{I.length<=8&&/\d|[-]/g.test(I)?await k[3].search(I):(k[0].search(I),k[5].search(I),k[6].search(I),ki(k[0].data)===0&&(await k[1].search(I),await k[2].search(I),await k[4].search(I)))},data:te}})(),...k]},ab=()=>JSON.parse(localStorage.getItem(G.SearchHistory)??"[]"),rb=()=>{const e=ob(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>ab(),[]),r=async f=>{e[i].clear();const x=No(f)?Co(f):f;await e[i].search(x),x.length>0&&!a.includes(x)&&(a.unshift(x),a.length>8&&a.pop(),localStorage.setItem(G.SearchHistory,JSON.stringify(a)))},[p,c,d]=Ro({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:f=>(o(f),f.length>0&&(s!==f||!e[i].data))}),h=!d&&!p.length,g=!!p.length&&!d&&!!ki(e[i].data);return{showMessage:h,showSearchResult:g,searchValue:p,setSearchValue:c,currentPage:i,setCurrentPage:n,config:e,loading:d,searchHistory:a}},lb=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Fn,{})})):e?n.filter(s=>me(s).includes(me(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Fn,{})})):[],cb=()=>t.jsxs(P,{gap:"8px",ai:"flex-start",children:[t.jsx(W,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(W,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(W,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),db=u.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,pb=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:p,searchHistory:c}=rb(),d=lb(r,n,c),{isOpen:h}=K();return t.jsx(db,{children:t.jsxs(P,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Do,{value:n,setValue:s,loading:r,focusOn:h,hints:d}),t.jsx(xn,{pages:p.map(({title:g})=>({title:g})),currentPage:o,setCurrentPage:a}),t.jsx(Io,{value:n,setValue:s}),e&&t.jsx(P,{h:"100%",children:t.jsx(he,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(ct,{})})}),!r&&n.length!==0&&!e&&!ki(p[o].data)&&t.jsx(P,{h:"100%",children:t.jsx(he,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Fs,{})})}),r&&Array(10).fill(0).map((g,f)=>t.jsx(cb,{},f)),i&&t.jsx(t.Fragment,{children:p[o].content})]})})},ub=u(qe)`
    cursor: pointer;
    &:hover {
        filter: brightness(0.96);
    }
`,hb=u.div`
    background-color: var(--mild-theme);
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
`,gb=u(P)`
    @media (max-width: 1000px) {
        display: none;
    }
`,fb=()=>{const e=Su();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(Yc,{})},{key:"k"}]}[e]},kr=({size:e="large"})=>{const i=fb(),{open:n}=K(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(pb,{}),"Глобальный поиск");return Ao(i.map(({key:r})=>r),a),e==="icon"?t.jsx(y,{direction:"vertical",icon:t.jsx(ct,{}),width:"40px",minWidth:"40px",background:"transparent",onClick:a}):t.jsxs(ub,{maxWidth:"750px",width:o,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ie,{align:"left",fontSize:"0.9rem",children:t.jsxs(P,{gap:"8px",children:[t.jsx(ct,{}),"Поиск"]})}),t.jsx(gb,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(hb,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},nn=e=>e.split(" ").map(i=>i[0]),Ae=(e,i)=>{const n=nn(e),s=w[fd[n[0]]];return s==null?void 0:s[i??"main"]},xb=u.div`
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
`,mb=u.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function di({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:p,boxShadow:c,border:d,icon:h,avatarModal:g,onClick:f,borderRadius:x,background:m}){const[b,v]=l.useState(!0),$=nn(i)[0]+(nn(i)[1]??""),{open:j}=K(),E=k=>{g?j(t.jsx(di,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):f==null||f(k)};return t.jsxs(xb,{selected:e,width:s,height:o,marginRight:a,background:m??Ae(i),boxShadow:c,border:d,onClick:E,borderRadius:x,children:[n&&b?t.jsx(mb,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:$}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Ue,{invisibleOnFalse:!0,checked:p??!1,visible:p!==void 0,setChecked:()=>null}),t.jsx(ht,{left:"80%",top:"90%",outline:"4px solid var(--schedule)",visible:!!r,children:r})]})}const bb=u.div`
    position: relative;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-mild-xxl);
    }

    svg {
        width: 22px;
        height: 22px;
        color: var(--text);
    }
`,Tr=()=>{const{close:e}=K(),{notifications:i}=Fe.useLkNotifications(),n=3;return t.jsxs(P,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(ir,{maxNotificationsVisible:n}),t.jsxs(ie,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",_r(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:fr,style:{width:"100%"},children:t.jsx(y,{width:"100%",text:"Показать все",onClick:e})})]})},vb=()=>{const{notifications:e}=Fe.useLkNotifications(),{open:i}=K(),n=()=>{i(t.jsx(Tr,{}),"Уведомления")};return t.jsxs(bb,{onClick:n,children:[t.jsx(ht,{outline:"none","box-shadow":"0px 0px 0px 3px var(--schedule)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(Ji,{})]})},W_=u.header`
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
`;const V_=u.div`
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
`,yb=u.div`
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
`,G_=u.div`
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
`,q_=u.div`
    margin-top: 50px;
    width: 100%;
`,Y_=u.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,J_=u(qe)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,X_=u.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,jb=u.div`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
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

        b {
            color: var(--text);
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.85rem;
        }
    }

    &:hover {
        background: var(--mild-theme);
    }
`,_b=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(jb,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Bu,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)},wb=u.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,kb=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(wb,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:p},c)=>t.jsx(_b,{disabled:s,title:a,state:r,action:()=>o(c,p)},a))]})},Sr=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=Ai(),{settings:o}=Et.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,p]=l.useState(n==="light"),c=r?t.jsx(Jc,{}):t.jsx(Xc,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[g,f]=l.useState([{title:"Темная тема",state:n!=="light",action:m=>s(m)}]);l.useEffect(()=>{f([{title:"Темная тема",state:n!=="light",action:m=>s(m)}])},[n]),l.useEffect(()=>{p(n==="light")},[n]);const x=()=>{s(r),p(m=>!m),i==null||i()};return e==="toggle"?t.jsx(kb,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:g,setToggles:f}):e==="h-button"?t.jsx(y,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--schedule)",icon:c,width:"100%",align:"left",onClick:x}):t.jsx(y,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(yb,{width:"30px",background:w.green.main,children:c}),onClick:x,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},Tb=u.div`
    position: relative;
`,Er=()=>{const{open:e}=K(),{notifications:i}=Fe.useLkNotifications(),n=()=>Ce.close(),s=()=>{Be.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Zt.logout}),n()},o=()=>{Ce.close(),e(t.jsx(Ir,{}),"Что нового")},a=()=>{e(t.jsx(Tr,{}),"Уведомления"),Ce.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Jv,{padding:"8px",size:"small"}),t.jsx(xe,{}),t.jsx(Sr,{type:"h-button"}),t.jsx(xe,{}),t.jsxs(Tb,{children:[t.jsx(y,{onClick:a,icon:t.jsx(hn,{}),text:"Уведомления",width:"100%",background:"var(--schedule)",align:"left"}),t.jsx(ht,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:ue,children:t.jsx(y,{text:"Настройки",background:"var(--schedule)",icon:t.jsx(un,{}),width:"100%",align:"left",onClick:n})}),t.jsx("a",{href:`${A}/index.php`,children:t.jsx(y,{text:"Старый дизайн",icon:t.jsx(Us,{}),width:"100%",background:"var(--schedule)",align:"left"})}),t.jsx(xe,{}),t.jsx(y,{align:"left",icon:t.jsx(Kc,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--schedule)"}),t.jsx(xe,{}),t.jsx(y,{align:"left",icon:t.jsx(Za,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--schedule)"})]})},Sb=u.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-mild-xxl);
    }
`,Eb=({showSearch:e=!1})=>{const{data:{user:i}}=ce.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ce.open({e:s,height:143,content:t.jsx(Er,{})})};return t.jsxs(Sb,{children:[e&&t.jsx(kr,{size:"icon"}),t.jsx(vb,{}),t.jsx(di,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},$b=u.header`
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

    & button {
        transform: translateX(${({headerVisible:e})=>e?"-35px":"0"});
    }

    @media (max-width: 1000px) {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;
        & button {
            transform: none;
        }
    }
`,Pb=u.div`
    max-width: ${({maxWidth:e})=>e};
    width: 100%;
    font-size: ${({headerVisible:e})=>e?"1.1rem":"1.4rem"};
    font-weight: 600;
    transition: 0.2s transform, 0.2s font-size;
    position: absolute;
    white-space: ${({headerVisible:e})=>e?"nowrap":"normal"};
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"0, 0":"19px, 75px"})`};
    }

    @media (max-width: 1000px) {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":i?"0, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,Ob=()=>{const{pathname:e}=Ws(),[i,n]=l.useState([e]),{action:s}=ii();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},Ab=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=ii();return t.jsx(y,{text:i,onClick:()=>s.goBack(),icon:t.jsx(xi,{}),textColor:"var(--reallyBlue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},Cb=({currentPage:e,exactCurrentPage:i,isHeaderVisible:n})=>{const s=ii(),o=Ob(),a=(c=Ut)=>()=>{Re.changeOpen({isOpen:!1,currentPage:c.slice(1,c.length)}),s.push(c)},r=le.useMemo(()=>i?i.isSubPage?i.subPageHeaderTitle:i.title:e==null?void 0:e.title,[e,i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?o.length>1?t.jsx(Ab,{text:i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(y,{direction:"vertical",icon:t.jsx(xi,{}),onClick:a(i.fallbackPrevPage),background:"transparent"}):t.jsx(y,{direction:"vertical",icon:t.jsx(xi,{}),onClick:a(),background:"transparent"}):t.jsx(y,{icon:t.jsx(xi,{}),onClick:a(),background:"transparent",text:n?void 0:"Все разделы",padding:"0",textColor:"var(--reallyBlue)"}),[i,o,a]),headerTitle:r}},Nb=({currentPagePair:{currentPage:e,exactCurrentPage:i},headerVisible:n=!1})=>{var c,d;const{isMobile:s}=Di(),o=n||!!(i!=null&&i.planeHeader),{headerTitle:a,backButton:r}=Cb({currentPage:e,exactCurrentPage:i,isHeaderVisible:o}),p=Xa(i);return(c=i??e)!=null&&c.withoutHeader?null:t.jsxs($b,{headerVisible:o,hidden:(d=i??e)==null?void 0:d.withoutHeader,children:[t.jsx(Pb,{maxWidth:p,noButton:i==null?void 0:i.withoutBackButton,headerVisible:o,children:a}),t.jsxs(P,{jc:"space-between",mw:p,children:[r??t.jsx("div",{}),s&&t.jsx(Eb,{showSearch:!0})]})]})},Ib=le.memo(Nb),Db=u(Z)`
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
        background: var(--mild-theme);
        /* box-shadow: var(--very-mild-shadow); */
    }
`,Rb=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>n?t.jsx(W,{shape:"circle",size:{width:"40px",height:"40px"}}):t.jsxs(Db,{to:sr,onClick:()=>Re.changeOpen({isOpen:!1,currentPage:"profile"}),children:[t.jsx(y,{icon:t.jsx(Zs,{}),className:"more-button",background:"transparent",onClick:r=>{r.preventDefault(),r.stopPropagation(),Ce.open({e:r,height:143,content:t.jsx(Er,{})})}}),t.jsx(di,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(B,{size:5,children:e})]}),Lb=le.memo(Rb),zb=["isCurrent","color"],Fb=u(Z).withConfig({shouldForwardProp:e=>!zb.includes(e)})`
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
        width: 130px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg {
        opacity: ${({isCurrent:e})=>e?1:.8};
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
`,Mb=u.div`
    min-width: 235px;
    width: 235px;
    height: ${({height:e})=>e+"px"};
    box-shadow: var(--very-mild-shadow);
    border-radius: 0 var(--brSemi) var(--brSemi) 0;
    background: var(--schedule);
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
`,Bb=u.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,Hb=u.button`
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
`,Ub=e=>{const{path:i,icon:n,title:s,isCurrent:o,isAdmin:a,color:r,notifications:p}=e;return t.jsxs(Fb,{to:i,className:"leftside-bar-item",color:r,isCurrent:o,onClick:()=>{Re.changeOpen({isOpen:!1,currentPage:i.slice(1,i.length)})},title:s,children:[t.jsx(ht,{className:"notification",top:"50%",visible:a,right:"-20px",color:"pink",children:"A"}),t.jsx(ht,{className:"notification",top:"50%",visible:!!p,right:a?"0px":"-20px",color:"red",children:p}),n,t.jsx("span",{className:"title",children:s}),t.jsx(jr,{route:e})]})},$r=le.memo(Ub),Wb=()=>{const{isOpen:e}=We.useMenu();return t.jsx(t.Fragment,{children:t.jsx(y,{icon:t.jsx(Ge,{}),onClick:()=>Re.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},Vb=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(Hb,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(Vb);u.section`
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
`;const Gb=()=>{const{leftsideBarRoutes:e,currentPage:i}=We.useMenu(),n=l.useMemo(()=>{const s=window.location.hash.split("/");return s.length>2&&s[1]?s[1]:i==null?void 0:i.id},[i]);return e?t.jsx(Bb,{children:Object.values(e).filter(s=>s!==void 0).map(s=>l.createElement($r,{...s,key:s==null?void 0:s.id,isCurrent:n===(s==null?void 0:s.id)}))}):t.jsxs(P,{d:"column",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(W,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(W,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(W,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(W,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(W,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(W,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(W,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(W,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},qb=le.memo(Gb),Yb=()=>{const{isOpen:e}=We.useMenu(),{width:i,height:n}=Ni(),{data:{user:s}}=ce.useUser(),{visibleRoutes:o,currentPage:a}=We.useMenu();return t.jsxs(Mb,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:An,children:t.jsx(Ci,{width:"165px"})}),t.jsx(Lb,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:(a==null?void 0:a.id)==="profile"}),t.jsx(kr,{size:"small"}),t.jsx(qb,{})]}),t.jsx(Sr,{type:"toggle"}),i<1e3&&t.jsx(Wb,{})]})},Jb=u.div`
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
`,Xb=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=xo.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{X.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),X.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(Jb,{isOpen:e,isClickable:!!o,color:pt[n].color,onClick:a,children:t.jsx(J,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>X.openPopUpMessage({isOpen:!1}),children:i})})},Li=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({isOpen:e})=>e?1:0};
    visibility: ${({isOpen:e})=>e?"visible":"hidden"};
    transition: 0.2s opacity, 0.2s visibility;

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
    background: var(--schedule);
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
`;const Kb=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(On);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},Qb=u.div`
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
        transform: ${({isOpen:e})=>e?"scale(1) translateY(0px)":"scale(1) translateY(150px)"};
        border-radius: var(--brLight);

        .close-button {
            right: 15px;
        }

        h3 {
            margin-top: 7px;
        }
    }
`,Zb=u.div`
    padding-top: 30px;
`,ev=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Kb(),r=l.useRef(null),p=l.useMemo(()=>e&&!!i,[e,i]);return Ao(["Escape"],o),Pt(r,()=>{o()}),t.jsx(Li,{isOpen:p,children:t.jsxs(Qb,{isOpen:p,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(y,{onClick:s,icon:t.jsx(ti,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(B,{size:3,align:"left",children:a}),t.jsx(y,{onClick:o,icon:t.jsx(Ge,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--search)"}),t.jsx(Zb,{children:i})]})})},tv=le.memo(ev),iv=u.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 390px;
    border-radius: var(--brLight);
    background: var(--schedule);
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
`,nv=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=jo.useConfirm(),o=l.useRef(null);Pt(o,()=>Be.closeConfirm());const a=()=>{n(),Be.closeConfirm()},r=()=>{Be.closeConfirm()};return t.jsx(Li,{isOpen:e,children:t.jsxs(iv,{isOpen:e,ref:o,children:[t.jsx(B,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(be,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(y,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(y,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},sv=u.div`
    display: flex;
    align-items: ${({align:e})=>Qi(e)};
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
`,ov=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:p="center",appearance:c=!0})=>{const[d,h]=l.useState(i),{width:g}=Ni(),f=l.useRef(null),x=()=>{var b;f!=null&&f.current&&g<=1e3&&h(Math.round(((b=f.current)==null?void 0:b.scrollLeft)/g))},m=b=>{var v;h(b),r==null||r((v=e[b])==null?void 0:v.id),f!=null&&f.current&&(f.current.scrollLeft=f.current.clientWidth*b)};return l.useEffect(()=>{m(d)},[i,g]),t.jsxs(sv,{width:n,align:p,maxWidth:o,children:[t.jsx(xn,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:d,setCurrentPage:m,sliderWidth:a,appearance:c}),t.jsx("div",{className:s??"slider-content",ref:f,onScroll:x,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(he,{text:"Нет данных"})},b.title))})]})},In=ov,fs=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},xs=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Pr=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},av=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},rv=u.div`
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
`,lv=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(rv,{width:i,height:n,color:Ae(e,"dark1"),color2:Ae(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ae(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ae(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ae(e,"light2")})})]})}),cv=u.div`
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
`,dv=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:p,degreeLevel:c,course:d,isMe:h=!1,noInfo:g=!1})=>{const f=g?"140px":"110px",x=Pr(h,n,s,o);return t.jsxs(cv,{children:[t.jsx(lv,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(di,{avatarModal:!0,border:!0,name:i,avatar:e,width:f,height:f,marginRight:"0"}),!g&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ie,{fontSize:"0.9rem",children:t.jsx(Ot,{words:x})}),t.jsx(at,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(at,{fontSize:"0.9rem",visible:!!p,keyStr:"Факультет",value:p}),t.jsx(at,{fontSize:"0.9rem",visible:!!c,keyStr:"Уровень образования",value:c}),t.jsx(at,{fontSize:"0.9rem",visible:!!d,keyStr:"Курс",value:d}),t.jsx(at,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},pv=u.div`
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

    @media (max-width: 600px) {
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
`,Or=e=>{const{children:i}=e;return t.jsxs(pv,{children:[t.jsx(dv,{...e}),t.jsx("div",{className:"buttons",children:i})]})},uv=u.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,hv=()=>t.jsxs(uv,{children:[t.jsx(W,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(W,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(W,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Ar=e=>{if(e)return()=>{Be.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(G.Token,e),location.reload()}})}},gv=e=>{const{close:i}=K(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Ae(s,"main")}, ${Ae(s,"dark1")})`;return t.jsxs(Or,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${Nt}/${o}`,children:t.jsx(y,{icon:t.jsx(ni,{}),text:"Расписание",onClick:()=>i(),width:"100%"})}),t.jsx(y,{icon:t.jsx(dn,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Ar(n)})]})},Cr=e=>{const{close:i}=K(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Ae(s,"dark1")}, ${Ae(s,"main")})`;return t.jsxs(Or,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${Nt}/${s}`,children:t.jsx(y,{icon:t.jsx(ni,{}),text:"Расписание",onClick:()=>{i()},width:"100%"})}),t.jsx(y,{icon:t.jsx(dn,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Ar(n)})]})},fv=u.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?av(i):"100%"};

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
            font-size: ${({size:e})=>fs(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${fs(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,Nr=e=>{const{open:i}=K(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:p,division:c,group:d,isMe:h=!1,loading:g=!1,orientation:f="horizontal",size:x="middle"}=e,m=Pr(h,n,c,d);if(g)return t.jsx(hv,{});const b=v=>{r?r(v):h||(Ce.close(),i(n==="staff"?t.jsx(Cr,{...e}):t.jsx(gv,{...e})))};return t.jsxs(fv,{orientation:f,size:x,onClick:b,children:[p&&t.jsx("div",{className:"index",children:p}),t.jsx(di,{name:o,avatar:s,width:xs(f,x),height:xs(f,x),marginRight:f==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ot,{words:m})})]})]})},xv=u.div`
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
`,mv=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=K();return o?t.jsxs(xv,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(y,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},bv=u.div`
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
`,vv=u.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,yv=u(ie)`
    margin-bottom: 20px;
`,fi=({image:e,list:i,text:n})=>{const{isMobile:s}=Di();return t.jsxs(bv,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(B,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(yv,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(vv,{children:i==null?void 0:i.map(o=>l.createElement(mv,{...o,key:o.title}))})]})},jv=({alert:e})=>{const{content:i,time:n,date:s}=e;return t.jsxs(_v,{children:[t.jsx(ie,{fontSize:"0.9rem",children:t.jsx(Ot,{words:[ne(s),n]})}),t.jsx(xe,{width:"100%",margin:"12px 0"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})},_v=u.div`
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
`,wv=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),kv=e=>{const i=e.indexOf('src="')+5;let n=0;if(i===-1)return null;for(let o=i;o<e.length;o++)if(e[o]==='"'){n=o;break}const s=e.slice(i,n);return wv(s)?s:null},Tv=u.div`
    display: ${({visible:e})=>e?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${w.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,Sv=u.div`
    width: 100%;
    border-radius: calc(var(--brLight) - 3px);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    position: relative;
    display: flex;
    flex-direction: ${({orientation:e})=>e==="vertical"?"column":"row"};
    height: ${({orientation:e})=>e==="vertical"?"150px":"90px"};
    overflow: hidden;
    cursor: pointer;

    &:hover {
        filter: brightness(0.98);
    }
`,Ev=u.div`
    height: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    width: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    min-width: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    min-height: ${({orientation:e})=>e==="vertical"?"50px":"90px"};
    overflow: hidden;
    background: ${w.purple.transparent1};
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
`,$v=u.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`,Pv=u.div`
    font-weight: 500;
    width: ${({orientation:e})=>e==="vertical"?"100%":"85%"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,Ov=u.div`
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
`,Av=u(Tv)`
    position: absolute;
    top: 6px;
    right: -4px;
`,Cv=({news:e,orientation:i="vertical",isNew:n=!1})=>{const s=kv(e.content),{open:o}=K(),a=()=>o(t.jsx(jv,{alert:e}),e.title);return t.jsxs(Sv,{onClick:a,orientation:i,children:[t.jsx(Ev,{orientation:i,children:s?t.jsx("img",{src:s,alt:""}):t.jsx(pn,{})}),t.jsxs($v,{children:[t.jsx(Pv,{orientation:i,children:e.title}),t.jsx(Ov,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:Qt(e.content,220)}})}),t.jsx(ie,{children:t.jsx(Ot,{words:[ne(e.date),e.time]})})]}),t.jsx(Av,{visible:n,children:"New"})]})},Nv=u.div`
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
`,sn=u.div`
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
`,Iv=u.div`
    pointer-events: none;
`,Dv=()=>t.jsxs(P,{d:"column",gap:"0px",children:[t.jsx(sn,{className:"first",children:t.jsxs(P,{gap:"16px",w:"fit-content",children:[t.jsx(Ne,{color:"orange",children:t.jsx(Ji,{})}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(W,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})}),t.jsx(sn,{className:"second",children:t.jsxs(P,{gap:"16px",w:"fit-content",children:[t.jsx(Ne,{color:"orange",children:t.jsx(Ji,{})}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(W,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Rv=()=>t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(_e,{height:"fit-content",padding:"12px",maxWidth:"320px",children:t.jsxs(P,{gap:"8px",children:[t.jsx(ct,{}),"Распис"]})}),t.jsx(sn,{children:t.jsxs(P,{gap:"16px",w:"fit-content",children:[t.jsx(Ne,{color:"pink",children:t.jsx(ni,{})}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(W,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Lv=()=>t.jsx(Iv,{children:t.jsx(P,{mw:"250px",children:t.jsx(Cv,{news:{title:"Новости",time:"4:20",content:"Как неожиданно и приятно",date:"January 1, 1984",id:0}})})}),zv=()=>{const{data:{user:e}}=ce.useUser(),{allRoutes:i}=We.useMenu();if(!i)return null;const n=[i.home,i.payments];return(e==null?void 0:e.user_status)==="stud"&&n.push(i["acad-performance"]),t.jsx(P,{gap:"0px",jc:"center",children:n.map(({color:s,icon:o,id:a,title:r})=>t.jsxs(P,{d:"column",gap:"12px",w:"110px",children:[t.jsx(Ne,{badge:"1",color:s,size:50,children:o}),t.jsx(B,{size:5,children:Qt(r,8)})]},a))})},Ir=()=>{const[e,i]=l.useState(0),{isMobile:n}=Di(),{close:s}=K(),o=[t.jsx(fi,{image:{component:t.jsx(Dv,{}),title:"Уведомления"},text:"Теперь стало проще отслеживать важную информацию, будь то новое сообщение, новости, оплаты или что-либо еще"},0),t.jsx(fi,{image:{component:t.jsx(Rv,{}),title:"Глобальный поиск"},text:`Поможет найти то, что нужно. Находится на главной странице или ${n?"в верхней части личного кабинета":"в меню"}`},1),t.jsx(fi,{image:{component:t.jsx(Lv,{}),title:"Раздел Новости"},text:"Виджет с новостями добавлен на главный экран, дизайн стал аккуратнее"},2),t.jsx(fi,{image:{component:t.jsx(zv,{}),title:"Обновлены страницы"},text:"Интерфейс стал понятнее и чище"},3)];return t.jsxs(Nv,{children:[t.jsx("div",{className:"content",children:o[e]}),t.jsx(Fo,{amount:o.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(y,{onClick:()=>i(a=>Ze(a-1,o.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===o.length-1?t.jsx(y,{onClick:s,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(y,{onClick:()=>i(a=>Ze(a+1,o.length-1)),text:"Далее",width:"100%"})]})]})},ms=u(ai)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--schedule);
    border-top: 1px solid var(--scheduleBg);
    padding: 0px 10px;
    display: none;

    @media (max-width: 1000px) {
        display: flex;
    }
`,Fv=()=>{const{allRoutes:e,currentPage:i}=We.useMenu(),{data:{user:n}}=ce.useUser();if(!e||!n)return t.jsxs(ms,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(W,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(W,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(W,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(W,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(W,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"})]});const s=(n==null?void 0:n.user_status)==="stud"?W1:V1;return t.jsx(ms,{direction:"horizontal",horizontalAlign:"evenly",children:s.map(o=>t.jsx($r,{...e[o],isCurrent:(i==null?void 0:i.id)===o},o))})},Mv=(e,i,n)=>({isOpen:i,message:e,position:n}),bs={hints:[]},Bv=()=>F(Hv),Dr=T(),Rr=T(),Lr=T(),Hv=ee(bs).on(Dr,(e,{message:i,position:n})=>({hints:[...e.hints,Mv(i,e.hints.length===0,n)]})).on(Rr,e=>({hints:e.hints.splice(1,e.hints.length)})).on(Lr,()=>({...bs})),Uv={useHint:Bv},Wv={evoke:Dr,close:Rr,clearStore:Lr},Vv=u.div`
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
`,Gv=()=>{const{hints:e}=Uv.useHint(),i=e[0];return i?t.jsx(Vv,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(J,{type:"hint",title:i.message,onClose:()=>Wv.close(),width:"100%",icon:null})}):null},qv=u.div`
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
`,Yv=50;function K_({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:p,offset:c=Yv}){const{data:{user:d}}=ce.useUser();let h="";const g=l.useCallback(f=>{const x=f.currentTarget.clientHeight,m=f.currentTarget.scrollHeight,b=f.currentTarget.scrollTop;m-c<b+x&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(he,{text:"Нет результатов",children:p}):t.jsxs(qv,{onScroll:g,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((f,x)=>{var b,v;const m=r?h!==((b=f.fio)==null?void 0:b.charAt(0)):!1;return m&&(h=((v=f.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[m&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(B,{size:4,align:"left",children:h}),t.jsx(xe,{})]}),i(f,(d==null?void 0:d.id.toString())===f.id,x)]})})}),n&&s&&t.jsx(ft,{width:"40px",height:"40px"}),n&&!s&&t.jsx(y,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}u.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Jv=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ce.useUser();return K(),t.jsxs(be,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ie,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(Nr,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},zr=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>me(a.title).includes(me(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Xv=()=>{const e=C?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Kr,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:bl,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Qr,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Zr,title:"Справка-вызов"},{link:pl,title:"Заявление на пересдачу для получения диплома с отличием"},{link:ml,title:"Запрос на изменение персональных данных"},{link:dl,title:"Запрос на восстановление магнитного пропуска"},{link:Yr,title:"Уточнение паспортных данных"},{link:vl,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:yl,title:"Предоставление каникул в связи с окончанием университета"},{link:jl,title:"Предоставление академического отпуска"},{link:_l,title:"Отчисление по инициативе обучающегося"},{link:wl,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:el,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:tl,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:il,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:sl,title:"Предоставление права проживания льготной категории граждан"},{link:nl,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:ol,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:rl,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:ll,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:al,title:"Расторжение договора найма"},{link:cl,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:oo,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:gl,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:fl,title:"Заявка на материальную помощь"},{link:Xr,title:"Оформить социальную стипендию"},{link:xl,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:C,links:[{link:ul,title:"Отправить документы воинского учета"},{link:hl,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:C,links:[{link:on,title:"Оформить дополнительное соглашение к договору об обучении"},{link:on,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:hd,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Jr,title:" Произвольный запрос"}]}]},Kv=()=>[{title:"Цифровые сервисы",links:[{link:ya,title:"Актуализация контактных данных"},{link:ja,title:"Анкета для сверки данных"},{link:_a,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:wa,title:"Получение нового компьютерного оборудования"},{link:ka,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Ta,title:"Обслуживание принтеров, МФУ"},{link:Sa,title:"Вопрос по СЭД Directum и 1С"},{link:Ea,title:"Вопрос по Личному кабинету"},{link:$a,title:"Прочее ИТ-обслуживание"},{link:Pa,title:"Справка с места работы"},{link:Oa,title:"Справка на визу"},{link:Aa,title:"Справка о стаже работы"},{link:Ca,title:"Справка о количестве неиспользованных дней отпуска"},{link:Na,title:"Копия трудовой книжки"},{link:Ia,title:"Копии документов из личного дела"},{link:Da,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:Ra,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Fa,title:"Справка по форме 2-НДФЛ"},{link:Ma,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Ba,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:La,title:"Произвольный запрос"},{link:oo,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:za,title:"Курьер"}]}],Qv=()=>[{title:"",links:[{link:Ha,title:"Заявление на трудоустройство по совместительству"},{link:Ua,title:"Заявление на увольнение"},{link:Ga,title:"Заявление о привлечении к работе в выходной день"},{link:Wa,title:"Заявление о предоставлении отпуска"},{link:Va,title:"Заявление о переносе отпуска"},{link:qa,title:"Заявление о диспансеризации"},{link:Ya,title:"Заявление на перевод"}]}],Zv=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),ey=u.div`
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
                background: var(--schedule);
                box-shadow: var(--schedule-shadow);
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
`,Q_=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=K(),s=e?Kv():Xv(),[o,a]=l.useState(""),[r,p]=l.useState(s);return t.jsxs(ey,{children:[t.jsx(Lo,{whereToSearch:s,searchEngine:zr,setResult:p,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(c=>t.jsxs("div",{className:"link-list",children:[t.jsx(B,{size:4,align:"left",bottomGap:!0,children:c.title}),!c.disabled&&t.jsx("div",{className:"links",children:c.links.map((d,h)=>{if(!(d.disabled||!Zv(i,d.exceptionalFormEducationList)))return d.isExternalLink?t.jsx("a",{href:d.link,target:d.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:d.title},d.link+h):t.jsx(Z,{to:d.link,onClick:n,children:d.title},d.link+h)})})]},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(he,{text:`По запросу ${o} ничего не найдено`})]})})]})},ty=u.div`
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
                background: var(--schedule);
                box-shadow: var(--schedule-shadow);
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
`,iy=u.div`
    padding: 12px;
    box-shadow: var(--schedule-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,Z_=({})=>{const{data:{listApplication:e},error:i}=ye.useApplications(),{close:n}=K(),s=Qv(),[o,a]=l.useState(""),[r,p]=l.useState(s);return t.jsx(tt,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Ri,{children:[t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(ty,{children:[t.jsx(B,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Lo,{whereToSearch:s,searchEngine:zr,setResult:p,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(iy,{children:[(r??s).map(c=>t.jsx("div",{className:"link-list",children:!c.disabled&&t.jsx("div",{className:"links",children:c.links.map(d=>d.isExternalLink?t.jsx("a",{href:d.link,target:d.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:d.title},d.title):t.jsx(Z,{to:d.link,onClick:n,children:d.title},d.link))})},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(he,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},ny=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((p,c)=>{for(let d=0;d<c.files.length;d++)p[(c==null?void 0:c.fieldName)+`[${d}]`]=c.files[d];return p},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()});u.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--theme);
    z-index: 50;
`;u(ai)`
    opacity: 0;
    animation: 0.5s defaultFadeIn forwards;
    animation-delay: 2s;
    height: 100%;
    padding: 20px;
`;const vs={isOpen:!1,pages:[],currentPage:0},sy=()=>F(oy),Fr=T(),Mr=T(),Br=T(),Hr=T(),oy=ee(vs).on(Fr,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(Mr,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(Br,(e,{value:i})=>({...e,currentPage:i})).on(Hr,()=>({...vs})),Dn={useStory:sy},rt={open:Fr,close:Mr,clearStore:Hr,changeCurrentPage:Br};u(qe)`
    overflow: hidden;
    position: relative;
    background: ${({background:e})=>e??"var(--schedule)"};
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
`;const ay=u.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`,ew=({fio:e})=>{const{open:i}=K();return t.jsx(ay,{onClick:()=>i(t.jsx(Cr,{name:e,isMe:!1})),children:e})},ry=u.div`
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

    @media (max-width: 1000px) {
        margin-top: 25px;
    }
`,zi=ry,ly=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[p,c]=l.useState(r===void 0),[d,h]=l.useState(!a),[g,f]=l.useState(!1),x=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return X.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),c(!1),h(!1)):X.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!p&&!n.find(j=>!!j.find(E=>!E.value&&E.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),c(!1),h(!1)):X.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(j=>!!j.find(E=>!E.value&&E.required))&&!n.find(j=>!!j.find(E=>{var k;return E.value.id==="not-chosen"&&!!((k=E.items)!=null&&k.length)}))?(s(j=>(j.confirmed=!0,{...j})),c(!1),h(!1)):X.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(j=>(j.confirmed=!0,{...j})),c(!1),h(!1)):X.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!p&&!n.find(j=>!j.value&&j.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(j=>(j.confirmed=!0,{...j})),c(!1),h(!1)):X.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(j=>!j.value&&j.required)&&!n.find(j=>{var E;return j.value===null&&!!((E=j.items)!=null&&E.length)})?(s(j=>(j.confirmed=!0,{...j})),c(!1),h(!1)):X.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},m=()=>{s(j=>{const E=j.default[0].map(k=>({fieldName:k.fieldName??"",title:k.title,value:k.type==="select"&&(k!=null&&k.items)?null:"",type:k.type,items:k.items,width:k.width,required:k.required}));return{...j,data:[...j.data,E]}})},b=j=>{s(E=>{const k=E.data.filter((q,O)=>j!==O);return{...E,data:k}})},v=j=>{s(E=>(E.documents&&(E.documents.files=[...j]),{...E}))},$=()=>{i&&(i.value=!i.value),s(j=>({...j,optionalCheckbox:i}))};return l.useEffect(()=>{h(!g&&o?!1:!a)},[g,a]),{openArea:d,changeInputArea:p,included:g,setOpenArea:h,setIncluded:f,setChangeInputArea:c,handleRemove:b,handleAddNew:m,handleLoadFiles:v,handleConfirm:x,handleCheckbox:$}},cy=u.div`
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

    /* @media (max-width: 600px) {
		 .inputs {
			  .data-line {
					display: flex;
					row-gap: 5px;
					column-gap: 5px;
					flex-direction: column;
			  }
		 }
	} */
`,dy=u.div``,py=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(dy,{children:[t.jsx(B,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:p,checkboxCondition:c,maxFileSizeInMegaBytes:d},h)=>t.jsx(th,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:p,maxFileSizeInMegaBytes:d,isActive:!0,setFiles:g=>s(g,h)},docVisible:c==="straight"?o:!o},a))]}),uy=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(B,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(be,{children:[!a&&t.jsx(Ue,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:p,title:c}=r;return t.jsx(Ue,{text:c,checked:p===(s==null?void 0:s.id),setChecked:()=>o({id:p,title:a?p.toString():c})},p)})]})]}),hy=u.div`
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
`,gy=({title:e,value:i,visible:n})=>n?t.jsxs(hy,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,fy=u.div`
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
`,xy=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(fy,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(Bs,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Hs,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,my=u.div`
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
`,by=({title:e,visible:i})=>i?t.jsx(my,{children:t.jsx("span",{className:"title",children:e})}):null,vy=u.div`
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
`,yy=u.ul`
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
    background: var(--schedule);
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
`,jy=u.li`
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
`,_y=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:p="Начните ввод...",danger:c,isActive:d=!0,inputAppearance:h=!0,suggestions:g})=>{const[f,x]=l.useState([]),[m,b]=l.useState(!0);return l.useEffect(()=>{if(e){const v=g.filter($=>$.toLowerCase().includes(e.toLowerCase()));x(v)}else x([])},[e,g]),t.jsxs(vy,{leftIcon:!!n,isActive:d,inputAppearance:h,width:a,danger:c,minWidth:r,children:[t.jsx(B,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:v=>{i(v.target.value),b(!0)},placeholder:p}),f.length>0&&t.jsx(yy,{width:"100%",isOpen:m,className:m?"open":"close",itemsAmount:f.length,title:s,children:f.map((v,$)=>t.jsx(jy,{isSelected:!1,onClick:()=>{i(v),x([]),b(!1)},children:v},$))})]})]})},wy=u.div`
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
`,ky=({title:e,visible:i})=>i?t.jsx(wy,{children:t.jsx("span",{className:"title",children:e})}):null,ys=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:p,items:c,title:d,documents:h,changeInputArea:g,setData:f,mask:x,editable:m,placeholder:b,autocomplete:v,isSpecificRadio:$,specialType:j,specialFieldsNameConfig:E,minValueInput:k,maxValueInput:q,maxValueLength:O,diff:R,visible:te=!0,onChange:I,onKeyPress:ae,onBlur:Le,onKeyDown:Ee,onKeyUp:It,onFocus:Dt}=e,$e=m??(g&&!h),[nt,oc]=l.useState(!0),mt=(U,re,bt)=>{I==null||I(U),f(ge=>(Array.isArray(ge.data[0])?ge.data[re][bt??0].value=U:ge.data[re].type==="checkbox-docs"?ge.data[re].items[bt??0].value=!!U:ge.data[re].value=U,{...ge}))},ac=(U,re,bt)=>{I==null||I(U),f(ge=>(Array.isArray(ge.data[0])?ge.data[re][bt??0].value=U:ge.data[re].value=U,{...ge}))},rc=(U,re,bt)=>{f(ge=>(ge.data[re].items[bt??0].files=U,{...ge}))},lc=U=>{I==null||I(U),f(re=>(re.data[o].value=U,{...re}))},cc=U=>{I==null||I(U),ae==null||ae(U),Le==null||Le(U),Ee==null||Ee(U),It==null||It(U),Dt==null||Dt(U),f(re=>(re.data[o].value=U,{...re}))};return E&&j&&!Object.values(E).includes(j)?null:r!=="select"&&r!=="multiselect"||!c?r==="checkbox"?t.jsx(Ue,{text:d,isActive:$e,checked:i,setChecked:U=>mt(U,o,a)}):r==="hr-checkbox"?t.jsx(xy,{text:d,isActive:$e,checked:i,setChecked:U=>mt(U,o,a)}):r==="auto-complete-input"?t.jsx(_y,{title:d,suggestions:p??[],required:n,value:i,placeholder:b??d,setValue:U=>mt(U,o,a)}):r==="textarea"?t.jsx(au,{value:i,title:d,setValue:U=>mt(U,o,a),isActive:$e,textAreaAppearance:$e,placeholder:b??d,required:n,width:s}):r==="checkbox-docs"?t.jsx(py,{title:d,items:c,setChecked:(U,re)=>mt(!U,o,re),setFiles:(U,re)=>rc(U,o,re)}):r==="date-interval"?te?t.jsx(Ho,{title:d,required:n,dates:i,setDates:U=>cc(U),valid:nt,setValid:oc,minValue:k,diff:R}):null:r==="simple-text"?t.jsx(gy,{title:d,value:i,visible:te}):r==="text-warning"?t.jsx(ky,{title:d,visible:te}):r==="text-header"?t.jsx(by,{title:d,visible:te}):r==="radio"?t.jsx(uy,{buttons:c,title:d,required:n,current:i,setCurrent:lc,isSpecificRadio:$}):te?t.jsx(Qe,{value:i,title:d,minValue:k,maxValue:q,maxLength:O,setValue:U=>mt(U,o,a),type:r,isActive:$e,inputAppearance:$e,placeholder:b??d,required:n,mask:x,width:s,autocomplete:v}):null:te?t.jsx(Go,{items:c,setSelected:U=>ac(U,o,a),selected:i,isActive:$e,title:d,width:s,multiple:r==="multiselect",required:n}):null},Ty=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    position: sticky;
    top: -2px;
    background: var(--schedule);
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
`,Sy=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:p})=>t.jsxs(Ty,{onClick:()=>!r&&(i||!n)&&o(c=>!c),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(B,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Gs,{}):t.jsx(qs,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Ue,{checked:i,setChecked:a})]}),t.jsx(y,{icon:t.jsx(ve,{}),onClick:()=>null,background:"transparent",flipped:p})]}),Ey=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(y,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(Xe,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Сохранить",icon:t.jsx(Qc,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(Xe,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Подтвердить",icon:t.jsx(Zc,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(ed,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),$y=e=>e.confirmed===void 0?null:t.jsx(be,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(Ey,{...e,confirmed:e.confirmed})}),Py=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:p,optional:c=!1,addNew:d=!1,divider:h,collapsed:g,links:f,specialFieldsNameConfig:x})=>{const{openArea:m,changeInputArea:b,included:v,setOpenArea:$,setIncluded:j,setChangeInputArea:E,handleRemove:k,handleAddNew:q,handleLoadFiles:O,handleConfirm:R,handleCheckbox:te}=ly({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:c,collapsed:g,confirmed:p});return t.jsxs(t.Fragment,{children:[t.jsxs(cy,{openArea:m,children:[t.jsx(Sy,{title:e,included:v,optional:c,confirmed:p,setOpenArea:$,setIncluded:j,collapsed:g}),t.jsxs("div",{className:"inputs",children:[t.jsx(J,{type:"alert",visible:!!n,icon:t.jsx(Yt,{}),children:n}),t.jsx(J,{type:"info",visible:!!i&&(b||p===void 0),title:"Как заполнить",icon:t.jsx(Ie,{}),children:i}),Array.isArray(s[0])?s.map((I,ae)=>t.jsxs("div",{className:"data-line",children:[I.map((Le,Ee)=>t.jsx(ys,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ae,indexJ:Ee,specialFieldsNameConfig:x,...Le},Ee)),b&&d&&t.jsx(y,{icon:t.jsx(td,{}),textColor:w.red.main,onClick:()=>k(ae),background:"transparent",isActive:!(o!=null&&o.value)})]},ae)):s.map((I,ae)=>t.jsx(ys,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ae,specialFieldsNameConfig:x,...I},ae)),d&&b&&t.jsx(y,{icon:t.jsx(id,{}),text:"Добавить",onClick:q,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&a.visible!==!1&&t.jsx(Bo,{files:a.files,setFiles:I=>O(I),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(f==null?void 0:f.length)&&f.map(I=>l.createElement(yu,{...I,key:I.title})),t.jsx(Ue,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:te}),t.jsx($y,{confirmed:p,changeInputArea:b,setData:r,setChangeInputArea:E,handleConfirm:R})]})]}),h&&t.jsx(xe,{})]})},Oy=u.div`
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
`,Ay=u.div`
    display: flex;
    margin-bottom: -20px;
`,Cy=u.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Ur=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(p=>({...p,[i]:we(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Ay,{children:e.map((r,p)=>t.jsxs(Cy,{lastElement:p===e.length-1,children:[t.jsx(Oy,{current:p===i,onClick:()=>a(p),reached:s[p],children:p+1}),p!==e.length-1&&t.jsx(Yp,{direction:"horizontal",reached:s[p],filled:100,distance:40})]},p))}),t.jsx(t.Fragment,{children:e[i].map((r,p)=>l.createElement(Py,{...r.dataForm,setData:r.setDataForm,key:p}))})]})},Ny=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Iy=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Dy=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Wr=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(d=>{if(o)return ny(d);if(Array.isArray(d.data[0])){const h=d.data.map(f=>Object.assign({},...f==null?void 0:f.map(x=>js(x)))),g={};return g[e]=JSON.stringify(h),g}else return d.data.map(h=>js(h))}).flat(),r=i.map(d=>{var g,f;const h={};if((g=d.documents)!=null&&g.fieldName)for(let x=0;x<d.documents.files.length;x++)h[((f=d.documents)==null?void 0:f.fieldName)+`[${x}]`]=d.documents.files[x];return h}),p=i.map(d=>{var g,f;const h={};return(g=d.optionalCheckbox)!=null&&g.fieldName&&(h[(f=d.optionalCheckbox)==null?void 0:f.fieldName]=d.optionalCheckbox.value),h}),c=Object.assign({},...a,...r,...p);try{await He.postApplicationFx({formId:e,args:c}),n(!1),s(!0)}catch{n(!1)}},js=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Ry(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Ry=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Vr=u.div`
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
`;var Rn=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Rn||{}),Ly=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(Ly||{});const zy=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Fy=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],My=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Fy},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:zy}]}},By=()=>{var I;const[e,i]=l.useState(null),[n,s]=l.useState(ui.kvdCert),[o,a]=l.useState(ui.fluorographyCert),[r,p]=l.useState(ui.vichRwCert),[c,d]=l.useState(ui.graftCert),{data:{dataUserApplication:h}}=ye.useApplications(),{data:{user:g}}=ce.useUser(),[f,x]=l.useState(!1),[m,b]=l.useState(!1),[v,$]=l.useState(null),[j,E]=l.useState(null),[k,q]=l.useState(null),O=f??!1;if((g==null?void 0:g.educationForm)!=="Недоступен")return t.jsx(he,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const R=!!e&&!!j&&!!v&&!!k;if(l.useEffect(()=>{h&&(i(My(h)),$(Iy()),E(Dy()),q(Ny()))},[h]),!R)return null;const te=[[{dataForm:e,setDataForm:i}],[{dataForm:j,setDataForm:E}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:p}],[{dataForm:c,setDataForm:d}]];return t.jsx(Vr,{isDone:O,children:t.jsxs(Eo,{children:[t.jsx(B,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Ur,{stagesConfig:te}),t.jsx(ut,{text:"Отправить",action:()=>Wr(Rn.USG_GETHOSTEL_OOZ,[e,j,v,k,n,o,r,c],b,x),isLoading:m,completed:f,setCompleted:x,repeatable:!1,buttonSuccessText:"Отправлено",isDone:O,isActive:(((I=e.optionalCheckbox)==null?void 0:I.value)??!0)&&we(e)&&we(o)&&we(r)&&we(c)&&we(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Hy=l.lazy(()=>_(()=>import("./index-a0cd6dc5.js"),["assets/index-a0cd6dc5.js","assets/vendor-198a3a64.js"])),Uy=l.lazy(()=>_(()=>import("./index-cc23ccf3.js"),["assets/index-cc23ccf3.js","assets/vendor-198a3a64.js"])),Wy=l.lazy(()=>_(()=>import("./index-c4c84744.js"),["assets/index-c4c84744.js","assets/vendor-198a3a64.js"])),Vy=l.lazy(()=>_(()=>import("./index-60c8bd5e.js"),["assets/index-60c8bd5e.js","assets/vendor-198a3a64.js"])),Gy=l.lazy(()=>_(()=>import("./index-6aeaf2ab.js"),["assets/index-6aeaf2ab.js","assets/vendor-198a3a64.js"])),qy=l.lazy(()=>_(()=>import("./index-3d283e55.js"),["assets/index-3d283e55.js","assets/vendor-198a3a64.js","assets/get-method-obtaining-fields-0838526d.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Yy=l.lazy(()=>_(()=>import("./index-f76fb659.js"),["assets/index-f76fb659.js","assets/vendor-198a3a64.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Jy=l.lazy(()=>_(()=>import("./index-fd15cf25.js"),["assets/index-fd15cf25.js","assets/vendor-198a3a64.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Xy=l.lazy(()=>_(()=>import("./index-8b5ab029.js"),["assets/index-8b5ab029.js","assets/vendor-198a3a64.js"])),Ky=l.lazy(()=>_(()=>import("./index-79c5ab33.js"),["assets/index-79c5ab33.js","assets/vendor-198a3a64.js","assets/index-0ebadac4.js"])),Qy=l.lazy(()=>_(()=>import("./index-40f0d2b5.js"),["assets/index-40f0d2b5.js","assets/vendor-198a3a64.js"])),Zy=l.lazy(()=>_(()=>import("./index-6f1717d5.js"),["assets/index-6f1717d5.js","assets/vendor-198a3a64.js"])),e1=l.lazy(()=>_(()=>import("./index-e724cb3f.js"),["assets/index-e724cb3f.js","assets/vendor-198a3a64.js"])),t1=l.lazy(()=>_(()=>import("./index-65dd36bb.js"),["assets/index-65dd36bb.js","assets/vendor-198a3a64.js"])),i1=l.lazy(()=>_(()=>import("./index-6102cb40.js"),["assets/index-6102cb40.js","assets/vendor-198a3a64.js"])),n1=l.lazy(()=>_(()=>import("./index-29a4758e.js"),["assets/index-29a4758e.js","assets/vendor-198a3a64.js"])),s1=l.lazy(()=>_(()=>import("./index-f5b8b4c4.js"),["assets/index-f5b8b4c4.js","assets/vendor-198a3a64.js"])),o1=l.lazy(()=>_(()=>import("./index-2303cc7e.js"),["assets/index-2303cc7e.js","assets/vendor-198a3a64.js"])),a1=l.lazy(()=>_(()=>import("./index-9a4bda23.js"),["assets/index-9a4bda23.js","assets/vendor-198a3a64.js"])),r1=l.lazy(()=>_(()=>import("./index-eb1267c4.js"),["assets/index-eb1267c4.js","assets/vendor-198a3a64.js"])),l1=l.lazy(()=>_(()=>import("./index-6a0048e6.js"),["assets/index-6a0048e6.js","assets/vendor-198a3a64.js"])),c1=l.lazy(()=>_(()=>import("./index-5c6cc210.js"),["assets/index-5c6cc210.js","assets/vendor-198a3a64.js"]));l.lazy(()=>_(()=>Promise.resolve().then(()=>z1),void 0));const d1=l.lazy(()=>_(()=>import("./index-b864c66a.js"),["assets/index-b864c66a.js","assets/vendor-198a3a64.js"])),p1=l.lazy(()=>_(()=>import("./index-95ae6f8b.js"),["assets/index-95ae6f8b.js","assets/vendor-198a3a64.js"])),u1=l.lazy(()=>_(()=>import("./index-be90e80f.js"),["assets/index-be90e80f.js","assets/vendor-198a3a64.js"])),h1=l.lazy(()=>_(()=>import("./index-d21979c6.js"),["assets/index-d21979c6.js","assets/vendor-198a3a64.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),g1=l.lazy(()=>_(()=>import("./index-2d643529.js"),["assets/index-2d643529.js","assets/vendor-198a3a64.js","assets/get-method-obtaining-fields-0838526d.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),f1=l.lazy(()=>_(()=>import("./index-150ccd5d.js"),["assets/index-150ccd5d.js","assets/vendor-198a3a64.js"])),x1=l.lazy(()=>_(()=>import("./index-1446fa55.js"),["assets/index-1446fa55.js","assets/vendor-198a3a64.js"])),m1=l.lazy(()=>_(()=>import("./index-120982bc.js"),["assets/index-120982bc.js","assets/vendor-198a3a64.js"])),b1=l.lazy(()=>_(()=>import("./index-d2930139.js"),["assets/index-d2930139.js","assets/vendor-198a3a64.js"])),v1=l.lazy(()=>_(()=>import("./index-94cacb3f.js"),["assets/index-94cacb3f.js","assets/vendor-198a3a64.js"])),y1=l.lazy(()=>_(()=>import("./index-69b3abca.js"),["assets/index-69b3abca.js","assets/vendor-198a3a64.js"])),j1=l.lazy(()=>_(()=>import("./index-0d908dfd.js"),["assets/index-0d908dfd.js","assets/vendor-198a3a64.js"])),_1=l.lazy(()=>_(()=>import("./index-a3848aff.js"),["assets/index-a3848aff.js","assets/vendor-198a3a64.js","assets/get-divisions-96cfa1b1.js"])),w1="Sep 07 2023 12:00:00 GMT+0300",Gr="Sep 08 2023 12:00:00 GMT+0300",tw=e=>{const i=new Date;return i<new Date(w1)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(Gr)?"Подача заявок закрыта":""},k1=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],T1=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],S1=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],E1=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],$1=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],P1=[{id:0,title:"1"},{id:1,title:"2"}],O1=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],A1=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],C1=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],N1=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),I1=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:k1,width:"100%",editable:!0,required:!0}]}),D1=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:T1,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),R1=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:S1,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:E1,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:$1,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:P1,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:O1,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),L1=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:A1,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),_s=e=>{var n,s,o,a,r,p,c;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((p=e[3])==null?void 0:p.value))??null,type:"select",items:C1,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((c=e[4])==null?void 0:c.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},qr=()=>{var q;const[e,i]=l.useState(null),[n,s]=l.useState(I1()),[o,a]=l.useState(D1()),[r,p]=l.useState(R1()),[c,d]=l.useState(L1()),[h,g]=l.useState(_s(null)),[f,x]=l.useState(!1),[m,b]=l.useState(!1),[v,$]=l.useState(!1),{data:{dataUserApplication:j}}=ye.useApplications();l.useEffect(()=>{j&&i(N1(j))},[j]);const E=l.useMemo(()=>{var O,R;return((R=(O=h==null?void 0:h.data[0])==null?void 0:O.value)==null?void 0:R.id)!==0},[(q=h==null?void 0:h.data[0])==null?void 0:q.value]);if(l.useEffect(()=>{h&&g(_s(h.data))},[E]),!e)return null;const k=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:p}],[{dataForm:c,setDataForm:d}],[{dataForm:h,setDataForm:g}]];return t.jsx(Vr,{isDone:!1,children:t.jsxs(Eo,{children:[t.jsx(B,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Ur,{stagesConfig:k}),t.jsx(Ue,{checked:f,setChecked:x,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(ut,{text:m?"Отправлено":"Отправить",action:()=>Wr(Rn.MIL_REG,[e,n,o,r,c,h],$,b),isLoading:v,completed:m,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:m,isActive:!!f&&!!e&&!!n&&!!r&&!!c&&!!h&&!!o&&we(e)&&we(n)&&we(r)&&we(c)&&we(h)&&we(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},z1=Object.freeze(Object.defineProperty({__proto__:null,default:qr},Symbol.toStringTag,{value:"Module"})),S="/applications",F1="/application-for-superior-room",M1="/acad-performance",B1="/dormitory",Yr=S+"/clarification-of-passport-data",Jr=S+"/arbitrary-request",Xr=S+"/social-scollarship",Kr=S+"/certificate-of-attendance",Qr=S+"/social-agencies",Zr=S+"/paper-call",el=S+"/regular-accommodation",tl=S+"/full-time-part-time-form",il=S+"/accommodation-correspondence-form",nl=S+"/academic-leave-accommodation",sl=S+"/preferential-accommodation",ol=S+"/family-room",al=S+"/termination-of-employment-contract",rl=S+"/relocation-inside-hostel",ll=S+"/relocation-to-another-hostel",cl=S+"/accommodation-for-graduates",on=S+"/payment-recipient",dl=S+"/restoring-the-magnetic-pass",pl=S+"/retake-for-diploma",ul=S+"/military-registration-documents",hl=S+"/military-registration",gl=S+"/financial-support",fl=S+"/financial-assistance",xl=S+"/increased-state-academic-scholarship",ml=S+"/changing-personal-data",bl=S+"/student-status",vl=S+"/state-accreditation",H1=S+"/military-registration-card",yl=S+"/holidays-after-training",jl=S+"/provision-academic-leave",_l=S+"/independently-deducted",wl=S+"/extension-attestation",ot=()=>fe({oldVersionUrl:"/sprav"}),yt=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(N,{}),path:S,Component:Ky,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...mr,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(dt,{}),path:wi,Component:$n,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Mn,{}),path:B1,Component:Wy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(nd,{}),path:M1,Component:Uy,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Ys,{}),path:hr,Component:Qy,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(sd,{}),path:xr,Component:mn,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Mn,{}),path:F1,Component:Hy,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(Gr))}}),an=e=>{var i,n,s;return{...br,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(vi,{}),path:Yr,Component:Vy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(vi,{}),path:Jr,Component:_1,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(Y,{}),path:Xr,Component:C?ot:Gy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(Y,{}),path:Kr,Component:qy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(Y,{}),path:Qr,Component:Yy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(Y,{}),path:Zr,Component:Jy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(Y,{}),path:el,Component:Xy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(Y,{}),path:tl,Component:By,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(Y,{}),path:il,Component:y1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(Y,{}),path:nl,Component:Zy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(Y,{}),path:sl,Component:e1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(Y,{}),path:ol,Component:j1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(Y,{}),path:al,Component:t1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(Y,{}),path:rl,Component:C?()=>t.jsx(fe,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):i1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(Y,{}),path:ll,Component:C?()=>t.jsx(fe,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):s1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:Y,path:cl,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?n1:()=>t.jsx(fe,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(Y,{}),path:on,Component:o1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(Y,{}),path:dl,Component:a1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(Y,{}),path:ul,Component:C?ot:c1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(od,{}),path:hl,Component:C?ot:qr,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:S},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(Y,{}),path:pl,Component:l1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(Y,{}),path:xl,Component:C?ot:r1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(Y,{}),path:gl,Component:C?ot:d1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(Y,{}),path:fl,Component:C?ot:p1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(Y,{}),path:ml,Component:u1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(Y,{}),path:bl,Component:h1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(Y,{}),path:vl,Component:g1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(Y,{}),path:yl,Component:f1,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(Y,{}),path:jl,Component:x1,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(Y,{}),path:_l,Component:m1,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(Y,{}),path:wl,Component:b1,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:S},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(Y,{}),path:H1,Component:C?ot:v1,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:S}}},ws=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),U1=["settings","profile","chat","schedule","payments","project-activity","all-students"],W1=["home","schedule","acad-performance","all","profile"],V1=["home","schedule","hr-applications","all","profile"],G1=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(G.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??$i,s=so.filter(p=>!n.includes(p));return(e==null?void 0:e.user_status)==="staff"&&n.some(p=>!s.includes(p))?[...n,...s]:n},ks={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},q1=()=>F(J1),kl=T(),Tl=T(),Sl=T(),El=T(),Y1=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},zt=e=>{if(!e)return en();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",p=Object.entries(en()).filter(([c])=>c!==r||c===r&&a);return Object.fromEntries(p)},J1=ee(ks).on(kl,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(Tl,()=>({...ks})).on(Sl,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?zt(n)[window.location.hash.slice(2,window.location.hash.length)]:yt()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...zt(n),...tn()}:{...yt(),...an(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?zt(n):yt(),leftsideBarRoutes:ws(G1(i),(i==null?void 0:i.user_status)==="staff"?zt(n):yt()),homeRoutes:ws(s??JSON.parse(localStorage.getItem(G.HomeRoutes)??JSON.stringify(U1)),(i==null?void 0:i.user_status)==="staff"?{...zt(n),...tn()}:{...yt(),...an(i)})})).on(El,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Y1(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),We={useMenu:q1},Re={changeOpen:kl,clearStore:Tl,defineMenu:Sl,changeNotifications:El},X1=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:gr,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Nt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:wi,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:wi,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:Cn,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:oe,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:va,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:Pn,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:S,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:or,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},K1={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},Fi=z(async({settings:e})=>{try{const{data:i}=await sp(),n={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"};return i.filter(({type:s})=>e[n[s]]).map(({id:s,type:o,title:a,text:r})=>X1(o,s,a,r))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Q1=z(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&Re.changeNotifications({page:i,notifications:1})})}),Z1=z(({notifications:e})=>{const{pageId:i}=e[0];i&&Re.changeNotifications({page:i,notifications:1})}),Mi=z(async({id:e,pageId:i})=>{try{return await op(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Bi=z(async()=>{try{await ap()}catch{throw new Error("Не удалось скрыть все уведомления")}}),ej=e=>{e&&Re.changeNotifications({page:e,notifications:0})},$l=T(),Pl=T(),Ol=T(),Al=T(),Cl=T(),Nl=T(),Il=T(),se=ee(K1).reset(Il);Ve({from:Pl,to:Fi});D({clock:Fi.pending,source:se,fn:(e,i)=>({...e,loading:i}),target:se});D({clock:Fi.failData,source:se,fn:(e,i)=>({...e,error:i.message}),target:se});D({clock:Fi.doneData,source:se,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[se,Q1]});D({clock:$l,source:se,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[se,Z1]});Ve({from:Al,to:Mi});D({clock:Mi.doneData,source:se,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(ej(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:se});D({clock:Mi.failData,source:se,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:se});D({clock:Mi.pending,source:se,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:se});Ve({from:Cl,to:Bi});D({clock:Bi.pending,source:se,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:se});D({clock:Bi.failData,source:se,fn:(e,i)=>({...e,clearAllError:i.message}),target:se});D({clock:Bi.doneData,source:se,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:se});D({clock:Ol,source:se,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:se});D({clock:Nl,source:se,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:se});const tj=()=>ke(se),xt={initialize:Pl,add:$l,clearById:Al,clearVisibleById:Ol,clearAll:Cl,clearAllVisible:Nl,clearStore:Il},Fe={useLkNotifications:tj},ij=Object.freeze(Object.defineProperty({__proto__:null,events:xt,selectors:Fe},Symbol.toStringTag,{value:"Module"})),Ts={messages:null,error:null},nj=()=>({data:F(Ss).messages,loading:F(Wt.pending),error:F(Ss).error}),Wt=z(async()=>{try{return(await Cd("1")).data}catch(e){throw new Error(e)}}),Dl=T(),Ss=ee(Ts).on(Wt,e=>({...e,error:null})).on(Wt.doneData,(e,i)=>({...e,messages:i})).on(Wt.failData,(e,i)=>({...e,error:i.message})).on(Dl,()=>({...Ts})),sj={useMessages:nj},oj={getMessagesFx:Wt},aj={clearStore:Dl},rj=Object.freeze(Object.defineProperty({__proto__:null,effects:oj,events:aj,selectors:sj},Symbol.toStringTag,{value:"Module"})),Es={type:null,personalNotifications:null,error:null,completed:!1},lj=()=>({data:F(kt).personalNotifications,loading:F(wt.pending),error:F(kt).error,completed:F(kt).completed}),cj=()=>F(kt).type,Rl=T(),Ll=z(e=>e),wt=z(async()=>{const{type:e}=kt.getState();if(e==="notifications")try{return(await ro()).data}catch(i){throw new Error(i)}try{return{docs:(await lo()).data}}catch(i){throw new Error(i)}}),Ti=z(async e=>{const{type:i}=kt.getState(),n=i==="notifications"?Yd:Xd;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),zl=T(),kt=ee(Es).on(Ll,(e,i)=>({...e,type:i})).on(wt,e=>({...e,error:null})).on(wt.doneData,(e,i)=>({...e,personalNotifications:i})).on(wt.failData,(e,i)=>({...e,error:i.message})).on(Ti.doneData,e=>({...e})).on(Ti.failData,(e,i)=>({...e,error:i.message})).on(Rl,(e,i)=>({...e,completed:i.completed})).on(zl,()=>({...Es}));Ti.doneData.watch(()=>wt());const dj={usePersonalNotifications:lj,useType:cj},pj={setNotificationsType:Ll,getPersonalNotificationsFx:wt,viewPersonalNotificationsFx:Ti},uj={changeCompleted:Rl,clearStore:zl},hj=Object.freeze(Object.defineProperty({__proto__:null,effects:pj,events:uj,selectors:dj},Symbol.toStringTag,{value:"Module"})),gj=si({api:{get:Gd}}),fj=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s]=e.split(" - "),[o,a]=s.split(":");return+o*60+ +a-(n.getHours()*60+n.getMinutes());case"days":const r=new Date(e);return Math.ceil(Math.floor((r.getTime()-new Date().getTime())/1e3/60/60)/24)}},$s=e=>e&&Object.keys(e).length?Object.keys(e).findIndex(n=>{const s=fj(n,"days");return s>=0&&s<30})+1:0,xj=(e,i)=>e&&e[0]?Object.keys(e[0]).find((n,s)=>s+1===i)||"sunday":e&&e[2]?"":"sunday";var rn=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(rn||{});const Fl=e=>new Date(e.setHours(0,0,0,0)),jt=new Date,Ps=1,Os=jt.getDay(),ln=Fl(new Date(jt.valueOf()-(Os<=0?7-Ps:Os-Ps)*864e5)),mj=Fl(new Date(ln.valueOf()+6*864e5)),bj=e=>{const[i,n]=e.dateInterval.split("-").map(g=>g.trim()),[s,o]=i.split(" "),[a,r]=(n==null?void 0:n.split(" "))??[null,null],p=rn[o],c=rn[r]||p,d=new Date(`${p}/${s}/${c>=p?jt.getFullYear():jt.getFullYear()-1}`),h=a&&c?new Date(`${c}/${a}/${c>=p?jt.getFullYear():jt.getFullYear()+1}`):null;return!!(d<=mj&&(!h&&ln<=d||h&&h>=ln))},vj=e=>e.filter(i=>bj(i)),yj=async(e,i)=>{const n=typeof e=="string",s=!n&&!(e!=null&&e.subdivisions)||!!(i!=null&&i.length),o=s?await Sd(i??e.group??""):n?await Bn(e):await Bn(Xi({name:e.name,surname:e.surname,patronymic:e.patronymic})),a=s?await Ed():n?await Hn(e):await Hn(Xi({name:(e==null?void 0:e.name)??"",surname:(e==null?void 0:e.surname)??"",patronymic:(e==null?void 0:e.patronymic)??""})),r={},p={},c={monday:{lessons:[]},tuesday:{lessons:[]},wednesday:{lessons:[]},thursday:{lessons:[]},friday:{lessons:[]},saturday:{lessons:[]}};if(o.data.status!=="error"){for(const d in o.data)if(d!=="Sunday"){const h=d.charAt(0).toLowerCase()+d.slice(1);p[h]=s?o.data[d]:{lessons:o.data[d]}}for(const[d,h]of Object.entries(p))c[d].lessons=vj(h.lessons)}if(a.data.status!=="error")for(const d in a.data)s?r[d]=a.data[d]:a.data[d].length&&(r[d]={lessons:a.data[d]});return{0:Object.keys(o.data).length&&o.data.status!=="error"?c:null,1:Object.keys(o.data).length&&o.data.status!=="error"?p:null,2:Object.keys(a.data).length&&Object.values(r).find(d=>!!d.lessons.length)&&a.data.status!=="error"?r:null,3:null}},As={schedule:null,currentModule:"0",currentDay:new Date().getDay(),currentDayString:"",currentChosenDay:new Date().getDay(),view:"full",error:null},jj=()=>({data:F(Cs),loading:F(Vt.pending),error:F(Cs).error}),Vt=z(async({user:e,group:i})=>{try{return yj(e,i)}catch{throw new Error("Не удалось загрузить расписание")}}),Ml=T(),Bl=T(),Hl=T(),Ul=T(),Cs=ee(As).on(Vt,e=>({...e,schedule:null,error:null})).on(Vt.doneData,(e,i)=>({...e,schedule:i,currentModule:i[0]?"0":i[1]?"1":i[2]?"2":i[3]?"3":"0",currentDayString:xj(i,e.currentDay),currentChosenDay:$s(i[2]),currentDay:i[0]?new Date().getDay():$s(i[2])})).on(Vt.failData,e=>({...e,error:"Не удалось загрузить расписание"})).on(Ml,(e,i)=>({...e,currentModule:i.currentModule.toString()})).on(Bl,(e,i)=>({...e,view:i.view})).on(Hl,(e,i)=>({...e,currentChosenDay:i.day})).on(Ul,()=>({...As})),_j={useSchedule:jj},wj={changeCurrentModule:Ml,changeView:Bl,changeCurrentChosenDay:Hl,clearStore:Ul},kj={getScheduleFx:Vt},Tj=Object.freeze(Object.defineProperty({__proto__:null,effects:kj,events:wj,selectors:_j},Symbol.toStringTag,{value:"Module"})),Ns={superiorRoom:null,error:null},Sj=()=>({data:F(Is).superiorRoom,loading:F(Gt.pending),error:F(Is).error}),Wl=T(),Ej=z(async e=>{});Ve({from:Wl,to:Ej});const Gt=z(async()=>{try{return(await Rd()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Vl=T(),Is=ee(Ns).on(Gt,e=>({...e,error:null})).on(Gt.doneData,(e,i)=>({...e,superiorRoom:i})).on(Gt.failData,(e,i)=>({...e,error:i.message})).on(Vl,()=>({...Ns})),$j={useSuperiorRoom:Sj},Pj={getSuperiorRoomFx:Gt},Oj={postSuperiorRoom:Wl,clearStore:Vl},Aj=Object.freeze(Object.defineProperty({__proto__:null,effects:Pj,events:Oj,selectors:$j},Symbol.toStringTag,{value:"Module"})),Ds={teacherDataVerification:null,error:null,completed:!1},Cj=()=>({data:F(Yi).teacherDataVerification,loading:F(qt.pending),error:F(Yi).error,completed:F(Yi).completed}),Gl=T(),ql=T(),Nj=z(async e=>{try{return(await ep(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Ve({from:Gl,to:Nj});const qt=z(async()=>{try{return(await Zd()).data}catch{throw new Error("Не удалось войти")}}),Yl=T(),Yi=ee(Ds).on(qt,e=>({...e,error:null})).on(qt.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(qt.failData,(e,i)=>({...e,error:i.message})).on(ql,(e,i)=>({...e,completed:i.completed})).on(Yl,()=>({...Ds})),Ij={useTeacherDataVerification:Cj},Dj={getTeacherDataVerificationFx:qt},Rj={postTeacherDataVerification:Gl,changeCompleted:ql,clearStore:Yl},Lj=Object.freeze(Object.defineProperty({__proto__:null,effects:Dj,events:Rj,selectors:Ij},Symbol.toStringTag,{value:"Module"})),zj=[lp,Ke,vp,_p,$p,rj,hj,Gx,fp,gj,Tj,Aj,Lj,Ep,dp,ij],Fj=()=>{zj.forEach(e=>{e.events.clearStore()})},Ye=localStorage.getItem(G.Token)??"",Je=()=>JSON.parse(localStorage.getItem(G.SavePassword)??"true"),Hi=z(async e=>{try{const{data:i}=await _d(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await ei.post("/old",n)}catch{}return Je()?(localStorage.setItem(G.Token,i.token),localStorage.setItem(G.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(G.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(G.Token,i.token),sessionStorage.setItem(G.JWT,(i==null?void 0:i.jwt)??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),lt=z(async e=>{try{const n=(await wd(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,guid:e.jwt?gt(e.jwt).IndividualGuid:"",fullName:Xi({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:Je()}}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),cn=z(async e=>{try{return(await kd(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Jl=z(()=>{Je()?(localStorage.removeItem(G.Token),localStorage.removeItem(G.JWT),localStorage.removeItem(G.JWTRefresh)):(sessionStorage.removeItem(G.Token),sessionStorage.removeItem(G.JWT),sessionStorage.removeItem(G.JWTRefresh)),Fj()}),Xl=e=>{const i=localStorage.getItem(G.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(G.SavePassword,n.toString()),n},Kl=T(),Ln=T(),Ql=T(),Zl=T(),ec=T();Ve({from:Kl,to:Hi});D({clock:Hi.doneData,target:lt});Ve({from:Ln,to:Jl});Ye&&Je()?lt({token:Ye,jwt:localStorage.getItem(G.JWT)}):Jl();const Mj={currentUser:null,error:null,isAuthenticated:!!(Ye!=null&&Ye.length),savePassword:Je(),loginEuz:""};Xl();const Bj=ee(Mj).on(lt,e=>({...e,error:null})).on(lt.doneData,(e,i)=>i).on(lt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(Ye!=null&&Ye.length),savePassword:Je()})).on(Hi.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:Je()})).on(Ln,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:Je()})).on(ec,(e,{savePassword:i})=>({...e,savePassword:Xl(i)})).on(cn,e=>({...e,error:null})).on(cn.doneData,(e,i)=>({...e,loginEuz:i})).on(lt.failData,(e,i)=>({...e,error:i.message})).on(Zl,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Ql,e=>({...e,currentUser:null})),ce={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=F(Bj);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:F(Hi.pending),error:i}}},Zt={login:Kl,logout:Ln,changeSavePassword:ec,clear:Ql,update:Zl},Hj={getUserFx:lt,getLoginEuzFx:cn},Uj=()=>{const e="0.0.1";localStorage.getItem(G.Version)!==e&&(localStorage.clear(),localStorage.setItem(G.Version,e),Zt.logout())},tc=T(),ic=z(Md);D({clock:tc,target:ic});const nc=ee([]),iw=zs(nc,e=>e.map(i=>i.divisionName));D({clock:ic.doneData,target:nc});const Wj=()=>{const{allRoutes:e}=We.useMenu();return e?t.jsxs(io,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(no,{path:i,component:n,exact:!s},i)),t.jsx(Me,{exact:!0,to:An})]}):null},Vj=le.memo(Wj),Gj=u.div`
    height: fit-content;
    opacity: ${({isVisible:e})=>e?1:0};
    visibility: ${({isVisible:e})=>e?"visible":"hidden"};
    transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
    position: absolute;
    width: 220px;
    left: ${({left:e})=>e+"px"};
    top: ${({top:e})=>e+"px"};
    background: var(--schedule);
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
`,qj=()=>{const{open:e,content:i,position:n}=Tu.useContextMenu(),s=l.useRef(null);return Pt(s,()=>Ce.close()),t.jsx(Li,{isOpen:e,children:t.jsx(Gj,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},sc=200,Yj=5e3,Jj=()=>{const{visibleNotifications:e}=Fe.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{xt.clearVisibleById(a)},sc)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??Yj))},[e]),{handleClose:o,closing:i}},Xj=u.div`
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
`,Kj=u.div`
    border-radius: var(--brLight);
    background: var(--schedule);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${sc/1e3}s forwards;

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
`;const Qj=()=>{const{visibleNotifications:e}=Fe.useLkNotifications(),{closing:i,handleClose:n}=Jj();return t.jsx(Xj,{children:e.map(s=>t.jsx(Kj,{onClick:n(s.id),open:i!==s.id,children:t.jsx(er,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Rs=u.div`
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
            filter: invert(var(--invert));
            transform: translateY(0px);
            opacity: 1;
        }
        30% {
            filter: invert(var(--invert));
            transform: translateY(5px);
            opacity: 1;
        }
        100% {
            filter: invert(var(--double-invert));
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
`,Zj=({loading:e})=>{const{data:{user:i},error:n}=ce.useUser(),s=i?Ae(i==null?void 0:i.fullName):w.blue.main,o=()=>Hj.getUserFx(JSON.parse(localStorage.getItem(G.Token)??""));return n?t.jsx(Rs,{$loading:!0,color:s,children:t.jsx(he,{text:"Нет подключения к интернету",children:t.jsx(y,{onClick:o,text:"Попробовать снова",icon:t.jsx(Ms,{})})})}):t.jsxs(Rs,{color:s,$loading:e,children:[t.jsx(Ci,{short:!0,width:"100px"}),e&&t.jsx(ft,{})]})},e_=u.div`
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
`,t_=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Dn.useStory();return t.jsx(e_,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():rt.changeCurrentPage({value:o+1})})})},i_=u(ai)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,n_=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Dn.useStory();return t.jsxs(i_,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(t_,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(rd,{}):t.jsx(ad,{}),t.jsx(y,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(Ge,{}),onClick:n})]})},s_=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,o_=u(qe)`
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
`,a_=u.div`
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
    transform: ${({align:e})=>s_(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,r_=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:p,link:c,imageAlign:d,imageSize:h={width:"auto",height:"100%"},textAlign:g="left"})=>{const f=ii();return t.jsxs(o_,{imageAlign:d,onClick:()=>p(x=>!x),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(fn,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(a_,{imageAlign:d,onClick:()=>p(x=>!x),background:e,align:i,color:s,children:[t.jsx(B,{size:2,align:g,children:o}),t.jsx(ie,{fontSize:"1.1em",align:g,children:a}),!!(c!=null&&c.text)&&t.jsx(y,{onClick:()=>{f.push(c.to),rt.close()},text:c.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},l_=u.div`
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
`,Ls=u.div`
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
`,c_=()=>{const{pages:e,isOpen:i,currentPage:n}=Dn.useStory(),s=l.useRef(null);Pt(s,()=>rt.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(Li,{isOpen:i,children:t.jsx(l_,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(n_,{pages:e.length,onClose:()=>rt.close(),playing:o}),t.jsx(Ls,{left:"15px",onClick:()=>{n!==0&&rt.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(ti,{})}),t.jsx(r_,{setPlaying:a,currentPage:n,...r}),t.jsx(Ls,{right:"15px",onClick:()=>{n!==e.length-1?rt.changeCurrentPage({value:n+1}):rt.close(),a(!0)},children:t.jsx(St,{})})]})})})},d_=()=>{const{data:{user:e}}=ce.useUser(),{notifications:i,loading:n,loaded:s}=Fe.useLkNotifications(),{settings:o}=Et.useSettings(),a=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{e&&a&&a.all!==!1&&!s&&!n&&xt.initialize({settings:a})},[e,a,n,s]),l.useEffect(()=>{Re.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},p_=()=>{const{data:{user:e}}=ce.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(gd);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},u_=()=>{const{data:{user:e}}=ce.useUser(),{currentPage:i,exactCurrentPage:n}=Ja(),{open:s}=K(),o=p_();return l.useEffect(()=>{e&&Np.getLocalSettingsFx(e.id)},[e]),d_(),Ai(),l.useEffect(()=>{o&&o&&s(t.jsx(Ir,{}),"Что нового")},[o]),{currentPage:i,exactCurrentPage:n}},h_=u.div`
    display: flex;
    background: var(--theme);
    height: 100dvh;
`,g_=u.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,f_=u.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-top: ${({withHeader:e})=>e?"var(--header-height)":"0"};
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: calc(100% - var(--mobile-bottom-menu-height));
    }
`,x_=()=>{var p;const{data:{user:e}}=ce.useUser(),{currentPage:i,exactCurrentPage:n}=u_(),[s,o]=l.useState(!1),a=l.useRef(null),r=c=>{o(c.currentTarget.scrollTop>0)};return t.jsxs(h_,{children:[t.jsx(Zj,{loading:!e}),t.jsx(c_,{}),t.jsx(Yb,{}),t.jsxs(g_,{children:[t.jsx(Ib,{headerVisible:s,currentPagePair:{currentPage:i,exactCurrentPage:n}}),t.jsx(f_,{ref:a,onScroll:r,withHeader:!((p=n??i)!=null&&p.withoutHeader),children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(Vj,{})})}),t.jsx(Fv,{})]}),t.jsx(tv,{}),t.jsx(Xb,{}),t.jsx(nv,{}),t.jsx(qj,{}),t.jsx(Gv,{}),t.jsx(Qj,{})]})},m_=()=>{const{data:{isAuthenticated:e,user:i}}=ce.useUser(),{data:n}=Ke.selectors.useData(),{settings:s}=Et.useSettings();return l.useEffect(()=>{e&&(He.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Ke.effects.getFx(),He.getWorkerPosts(),tc()))},[e,i]),l.useEffect(()=>{i&&s&&Re.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages})},[i,n,s]),e?t.jsx(x_,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(io,{children:[A0.map(({path:o,Component:a},r)=>t.jsx(no,{path:o,component:a,exact:!0},r)),t.jsx(Me,{exact:!0,to:nr})]})})},b_=u.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`;Uj();const v_=()=>(Ai(),t.jsx(r0,{children:t.jsx(ld,{basename:"/",children:t.jsx(b_,{children:t.jsx(m_,{})})})})),y_=cd`
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
	}

	html[data-theme=dark] {
		--blue: #6d86e3;
		--primary-background: rgb(34, 34, 34);
		--mild-theme: #363636;
		--leftside-bar: #3b3b3b;
		--leftside-bar-shadow: 5px 5px 10px rgba(0,0,0,0.377);
		--theme-mild-xxl: #0000001f;
		--theme-mild-xl: #0000005e;
		--header: #373737;
		--search2: #313131;
		--search: #313131;
		--text: #f0f0f0;
		--invert-text: #272727;
		--select: #292929;
		--toggle: #474747;
		--content: #474747;
		--invert: 0;
		--double-invert: 1;
		--closeToContent: #3a3a3a;
		--theme: #3a3a3a;
		--theme-mild-opposite: #d2d2d2;
		--settings: #292929;
		--blue: #90b3e7;
		--blueTransparent: #90b3e7b0;
		--green: #94f0b9;
		--greenTransparent: #94f0b9b0;
		--red: #e27992;
		--purple: #6f72d4;
		--mildPurple: #8d91f8;
		--orange: #f0b357;
		--reallyBlue: #567dff;
		--lightBlue: #dbdbff;
		--darker: #272727;	
		--purpleGradient: linear-gradient(45deg,#99a2f4,#b199f4);
		--orangeGradient: linear-gradient(45deg,#e27992,#f4af99);
		--almostTransparent: rgba(0,0,0,0.281);
		--almostTransparentOpposite: hsla(0,0%,100%,0.103);
		--schedule: #2e2e2e;
		--scheduleBg: #232323;
		--schedule-shadow: 0;
		--info-blue: #83a2ff;
		--form: #252525;
	}

	html[data-theme=light] {
		--blue: #6d86e3;
		--blueTransparent: #6d86e3b0;
		--leftside-bar: #f1f1f1;
		--mild-theme: #f5f5f5;
		--primary-background: rgb(243, 243, 243);
		--leftside-bar-shadow: 5px 5px 10px hsla(0,0%,40.8%,0.24);
		--theme-mild-xxl: #00000005;
		--theme-mild-xl: #ffffff8f;
		--header: #e9e9e9;
		--text: #272727;
		--invert-text: #f0f0f0;
		--select: #f3f3f3;
		--toggle: #ffffff;
		--content: #f1f1f1;
		--invert: 1;
		--double-invert: 0;
		--closeToContent: #f3f3f3;
		--theme: #fff;
		--theme-mild-opposite: #565656;
		--search2: #eee;
		--search: #f5f5f5;
		--settings: #dadada;
		--green: #62c087;
		--greenTransparent: #62c087b0;
		--red: #e27992;
		--orange: rgb(203 104 46);
		--purple: #9094fe;
		--mildPurple: #9a99ff;
		--reallyBlue: #567dff;
		--lightBlue: #dbdbff;
		--darker: #c4c4c4;
		--purpleGradient: linear-gradient(90deg,#6e72eb,rgb(91 129 237));
		--orangeGradient: linear-gradient(45deg,#ffbdf1,#ff94ad);
		--almostTransparent: hsla(0,0%,87.8%,0.486);
		--almostTransparentOpposite: rgba(53,53,53,0.151);
		--schedule: #fff;
		--scheduleBg: #eee;
		--schedule-shadow: 0 0 2px rgb(0 0 0 / 24%);
		--info-blue: #133db8;
		--form: #fff;
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
`;dd.render(t.jsxs(le.StrictMode,{children:[t.jsx(y_,{}),t.jsx(v_,{})]}),document.getElementById("root"));export{Bj as $,Ly as A,y as B,Ue as C,si as D,he as E,Eo as F,Ab as G,qe as H,Py as I,ie as J,at as K,ft as L,J as M,Qt as N,be as O,Hm as P,_r as Q,ce as R,ut as S,B as T,it as U,xe as V,tt as W,Kd as X,Qd as Y,Lo as Z,ib as _,X as a,$p as a$,sb as a0,We as a1,tb as a2,xr as a3,P0 as a4,Z_ as a5,N_ as a6,w as a7,pj as a8,xt as a9,R_ as aA,wn as aB,kx as aC,nc as aD,F_ as aE,M0 as aF,tn as aG,cy as aH,Sy as aI,Jr as aJ,wi as aK,O0 as aL,U_ as aM,U0 as aN,H0 as aO,tp as aP,ip as aQ,du as aR,_e as aS,me as aT,B_ as aU,Cn as aV,di as aW,W as aX,Ce as aY,Ni as aZ,Pt as a_,dj as aa,P as ab,A_ as ac,ye as ad,He as ae,Q_ as af,Ro as ag,K_ as ah,Nr as ai,Se as aj,de as ak,gt as al,et as am,Vr as an,iw as ao,I_ as ap,up as aq,Jn as ar,oe as as,Wr as at,mf as au,z_ as av,L_ as aw,kn as ax,D_ as ay,jn as az,Dj as b,kb as b$,M_ as b0,Cv as b1,dp as b2,Ne as b3,Sn as b4,mm as b5,xm as b6,_j as b7,Et as b8,Di as b9,V_ as bA,ue as bB,yb as bC,Sr as bD,w0 as bE,Be as bF,Zt as bG,Jv as bH,wr as bI,us as bJ,Ai as bK,so as bL,$i as bM,N0 as bN,C0 as bO,P_ as bP,$_ as bQ,yr as bR,vr as bS,oi as bT,dv as bU,Bo as bV,S_ as bW,_g as bX,E_ as bY,H_ as bZ,ai as b_,gr as ba,e0 as bb,Ae as bc,kr as bd,Eb as be,kj as bf,En as bg,fj as bh,Nt as bi,su as bj,__ as bk,ew as bl,ar as bm,wj as bn,gu as bo,A as bp,qi as bq,W_ as br,lv as bs,Y_ as bt,J_ as bu,X_ as bv,q_ as bw,G_ as bx,Ot as by,xn as bz,Ep as c,yj as c0,Hj as c1,pi as c2,O_ as c3,$j as c4,Pj as c5,tw as c6,rp as c7,k_ as c8,w_ as c9,fn as ca,lp as cb,yu as cc,C_ as cd,zy as ce,ui as cf,Iy as cg,Dy as ch,Ny as ci,Ur as cj,wv as ck,gj as cl,Rn as d,Rj as e,vd as f,T_ as g,Do as h,ps as i,Qe as j,Go as k,ne as l,De as m,_b as n,zg as o,Ri as p,In as q,au as r,Ij as s,M as t,K as u,H as v,wp as w,ny as x,we as y,zi as z};
